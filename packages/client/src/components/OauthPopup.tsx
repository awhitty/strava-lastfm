import * as React from 'react';

interface IOAuthPopupProps {
  width: number;
  height: number;
  url: string;
  title: string;
  tokenParamKey: string;
  onClose: () => void;
  onReceiveToken: (token: string, params: URLSearchParams) => void;
}

export class OAuthPopup extends React.Component<IOAuthPopupProps> {
  static defaultProps = {
    onClose: () => {},
    width: 500,
    height: 500,
    tokenParamKey: 'token',
  };

  externalWindow: Window | null = null;
  codeCheck: number | null = null;

  componentWillUnmount() {
    if (this.externalWindow) {
      this.externalWindow.close();
    }
  }

  render() {
    return <div onClick={this.createPopup}> {this.props.children} </div>;
  }

  private createPopup = () => {
    const { url, title, width, height } = this.props;

    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2.5;

    this.openWindow(url, title, width, height, left, top);

    if (this.externalWindow) {
      this.listenToExternalWindow(this.externalWindow);
    } else {
      console.warn('Unable to open OAuth pop-up');
    }
  };

  private listenToExternalWindow = (externalWindow: Window) => {
    this.codeCheck = window.setInterval(() => {
      try {
        const params = new URL(externalWindow.location.href).searchParams;
        const token = params.get(this.props.tokenParamKey);

        if (token) {
          window.clearInterval(this.codeCheck!);
          this.props.onReceiveToken(token, params);
          externalWindow.close();
        }
      } catch (e) {}
    }, 20);

    externalWindow.onbeforeunload = () => {
      this.props.onClose();
      clearInterval(this.codeCheck!);
    };
  };

  private openWindow = (
    url: string,
    title: string,
    width: number,
    height: number,
    left: number,
    top: number,
  ) => {
    this.externalWindow = window.open(
      url,
      title,
      `width=${width},height=${height},left=${left},top=${top}`,
    );
  };
}
