const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

function formatPropertyType(property) {
  switch (property.type) {
    case 'integer':
    case 'float':
    case 'long':
    case 'double':
      return 'number';
    case 'DateTime':
      return 'string';
    default:
      return property.type;
  }
}

function renderModels(parsedModels) {
  const formatProperty = property => {
    return `
      /** ${property.description} */
      ${property.name}: ${formatPropertyType(property)};
    `;
  };
  const outputs = parsedModels.map(model => {
    const description = model.description
      ? `
        *
        * ${model.description}`
      : '';
    return `
      /**
       * ${model.name}${description}
       */
      export interface ${model.name} {
        ${model.properties.map(formatProperty).join('\n\n')}
      }
    `;
  });

  return outputs.join('\n\n');
}

async function fetchData() {
  const res = await axios.get('https://developers.strava.com/docs/reference/');
  return res.data;
}

async function fetchDataFromCacheOrRemote() {
  let rawHtml;
  try {
    rawHtml = fs.readFileSync(path.resolve('./temp'));
  }
  catch {
    rawHtml = await fetchData();
    fs.writeFileSync(path.resolve('./temp'), rawHtml);
  }
  return rawHtml;
}

function parseModels(rawHtml) {
  const $ = cheerio.load(rawHtml);
  const rawModels = $(`[id^='api-models'] article`);
  const parsedModels = rawModels
    .map((i, rawModelEl) => {
      const name = $('h2', rawModelEl)
        .text()
        .trim();

      const description = $('p', rawModelEl)
        .text()
        .trim();

      const properties = $('table.parameters tr', rawModelEl)
        .map((i, propEl) => {
          const name = $('.parameter-name', propEl)
            .text()
            .trim();

          let type = $('.parameter-description', propEl)
            .text()
            .trim();

          type = type.replace('#/', '');

          const description = $('td', propEl)
            .last()
            .text()
            .trim();

          return { name, type, description };
        })
        .get();

      return {
        name,
        description,
        properties,
      };
    })
    .get();

  return parsedModels;
}

async function main() {
  const rawHtml = await fetchDataFromCacheOrRemote();
  console.log('Fetched data');
  const parsedModels = parseModels(rawHtml);
  console.log(`Parsed ${parsedModels.length} models`);
  const rawOutput = renderModels(parsedModels);
  console.log('Starting to format...');
  const formattedOutput = prettier.format(rawOutput, { parser: 'typescript' });
  fs.writeFileSync(path.resolve('./src/types/strava.ts'), formattedOutput);
}

main();

