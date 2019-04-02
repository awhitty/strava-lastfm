/**
 * ActivityStats
 *
 * A set of rolled-up statistics and totals for an athlete
 */
export interface ActivityStats {
  /** The longest distance ridden by the athlete. */
  biggest_ride_distance: number;

  /** The highest climb ridden by the athlete. */
  biggest_climb_elevation_gain: number;

  /** The recent (last 4 weeks) ride stats for the athlete. */
  recent_ride_totals: ActivityTotal;

  /** The recent (last 4 weeks) run stats for the athlete. */
  recent_run_totals: ActivityTotal;

  /** The recent (last 4 weeks) swim stats for the athlete. */
  recent_swim_totals: ActivityTotal;

  /** The year to date ride stats for the athlete. */
  ytd_ride_totals: ActivityTotal;

  /** The year to date run stats for the athlete. */
  ytd_run_totals: ActivityTotal;

  /** The year to date swim stats for the athlete. */
  ytd_swim_totals: ActivityTotal;

  /** The all time ride stats for the athlete. */
  all_ride_totals: ActivityTotal;

  /** The all time run stats for the athlete. */
  all_run_totals: ActivityTotal;

  /** The all time swim stats for the athlete. */
  all_swim_totals: ActivityTotal;
}

/**
 * ActivityTotal
 *
 * A roll-up of metrics pertaining to a set of activities. Values are in seconds and meters.
 */
export interface ActivityTotal {
  /** The number of activities considered in this total. */
  count: number;

  /** The total distance covered by the considered activities. */
  distance: number;

  /** The total moving time of the considered activities. */
  moving_time: number;

  /** The total elapsed time of the considered activities. */
  elapsed_time: number;

  /** The total elevation gain of the considered activities. */
  elevation_gain: number;

  /** The total number of achievements of the considered activities. */
  achievement_count: number;
}

/**
       * ActivityType
        *
        * An enumeration of the types an activity may have.May be one of the following values:
                                AlpineSki, 
                                BackcountrySki, 
                                Canoeing, 
                                Crossfit, 
                                EBikeRide, 
                                Elliptical, 
                                Golf, 
                                Handcycle, 
                                Hike, 
                                IceSkate, 
                                InlineSkate, 
                                Kayaking, 
                                Kitesurf, 
                                NordicSki, 
                                Ride, 
                                RockClimbing, 
                                RollerSki, 
                                Rowing, 
                                Run, 
                                Sail, 
                                Skateboard, 
                                Snowboard, 
                                Snowshoe, 
                                Soccer, 
                                StairStepper, 
                                StandUpPaddling, 
                                Surfing, 
                                Swim, 
                                Velomobile, 
                                VirtualRide, 
                                VirtualRun, 
                                Walk, 
                                WeightTraining, 
                                Wheelchair, 
                                Windsurf, 
                                Workout, 
                                Yoga
       */
export interface ActivityType {}

/**
 * ActivityZone
 */
export interface ActivityZone {
  /** An instance of integer. */
  score: number;

  /** An instance of #/TimedZoneDistribution. */
  distribution_buckets: TimedZoneDistribution;

  /** May take one of the following values: heartrate, power */
  type: string;

  /** An instance of boolean. */
  sensor_based: boolean;

  /** An instance of integer. */
  points: number;

  /** An instance of boolean. */
  custom_zones: boolean;

  /** An instance of integer. */
  max: number;
}

/**
 * BaseStream
 */
export interface BaseStream {
  /** The number of data points in this stream */
  original_size: number;

  /** The level of detail (sampling) in which this stream was returned May take one of the following values: low, medium, high */
  resolution: string;

  /** The base series used in the case the stream was downsampled May take one of the following values: distance, time */
  series_type: string;
}

/**
 * Comment
 */
export interface Comment {
  /** The unique identifier of this comment */
  id: number;

  /** The identifier of the activity this comment is related to */
  activity_id: number;

  /** The content of the comment */
  text: string;

  /** An instance of SummaryAthlete. */
  athlete: SummaryAthlete;

  /** The time at which this comment was created. */
  created_at: string;
}

/**
 * Error
 */
export interface Error {
  /** The code associated with this error. */
  code: string;

  /** The specific field or aspect of the resource associated with this error. */
  field: string;

  /** The type of resource associated with this error. */
  resource: string;
}

/**
 * ExplorerResponse
 */
export interface ExplorerResponse {
  /** The set of segments matching an explorer request */
  segments: ExplorerSegment;
}

/**
 * ExplorerSegment
 */
export interface ExplorerSegment {
  /** The unique identifier of this segment */
  id: number;

  /** The name of this segment */
  name: string;

  /** The category of the climb */
  climb_category: number;

  /** The description for the category of the climb May take one of the following values: NC, 4, 3, 2, 1, HC */
  climb_category_desc: string;

  /** The segment's average grade, in percents */
  avg_grade: number;

  /** An instance of LatLng. */
  start_latlng: LatLng;

  /** An instance of LatLng. */
  end_latlng: LatLng;

  /** The segments's evelation difference, in meters */
  elev_difference: number;

  /** The segment's distance, in meters */
  distance: number;

  /** The polyline of the segment */
  points: string;
}

/**
 * Fault
 *
 * Encapsulates the errors that may be returned from the API.
 */
export interface Fault {
  /** The set of specific errors associated with this fault, if any. */
  errors: Error;

  /** The message of the fault. */
  message: string;
}

/**
 * HeartRateZoneRanges
 */
export interface HeartRateZoneRanges {
  /** Whether the athlete has set their own custom heart rate zones */
  custom_zones: boolean;

  /** An instance of ZoneRanges. */
  zones: ZoneRanges;
}

/**
 * Lap
 */
export interface Lap {
  /** The unique identifier of this lap */
  id: number;

  /** An instance of MetaActivity. */
  activity: MetaActivity;

  /** An instance of MetaAthlete. */
  athlete: MetaAthlete;

  /** The lap's average cadence */
  average_cadence: number;

  /** The lap's average speed */
  average_speed: number;

  /** The lap's distance, in meters */
  distance: number;

  /** The lap's elapsed time, in seconds */
  elapsed_time: number;

  /** The start index of this effort in its activity's stream */
  start_index: number;

  /** The end index of this effort in its activity's stream */
  end_index: number;

  /** The index of this lap in the activity it belongs to */
  lap_index: number;

  /** The maximum speed of this lat, in meters per second */
  max_speed: number;

  /** The lap's moving time, in seconds */
  moving_time: number;

  /** The name of the lap */
  name: string;

  /** The athlete's pace zone during this lap */
  pace_zone: number;

  /** An instance of integer. */
  split: number;

  /** The time at which the lap was started. */
  start_date: string;

  /** The time at which the lap was started in the local timezone. */
  start_date_local: string;

  /** The elevation gain of this lap, in meters */
  total_elevation_gain: number;
}

/**
 * LatLng
 *
 * A collection of float objects. A pair of latitude/longitude coordinates, represented as an array of 2 floating point numbers.
 */
export interface LatLng {}

/**
 * MetaActivity
 */
export interface MetaActivity {
  /** The unique identifier of the activity */
  id: number;
}

/**
 * MetaAthlete
 */
export interface MetaAthlete {
  /** The unique identifier of the athlete */
  id: number;
}

/**
 * MetaClub
 */
export interface MetaClub {
  /** The club's unique identifier. */
  id: number;

  /** Resource state, indicates level of detail. Possible values: 1 -> "meta", 2 -> "summary", 3 -> "detail" */
  resource_state: number;

  /** The club's name. */
  name: string;
}

/**
 * PhotosSummary
 */
export interface PhotosSummary {
  /** The number of photos */
  count: number;

  /** An instance of PhotosSummary_primary. */
  primary: PhotosSummary_primary;
}

/**
 * PhotosSummary_primary
 */
export interface PhotosSummary_primary {
  /** An instance of long. */
  id: number;

  /** An instance of integer. */
  source: number;

  /** An instance of string. */
  unique_id: string;

  /** An instance of string. */
  urls: string;
}

/**
 * PolylineMap
 */
export interface PolylineMap {
  /** The identifier of the map */
  id: string;

  /** The polyline of the map */
  polyline: string;

  /** The summary polyline of the map */
  summary_polyline: string;
}

/**
 * PowerZoneRanges
 */
export interface PowerZoneRanges {
  /** An instance of ZoneRanges. */
  zones: ZoneRanges;
}

/**
 * Route
 */
export interface Route {
  /** An instance of SummaryAthlete. */
  athlete: SummaryAthlete;

  /** The description of the route */
  description: string;

  /** The route's distance, in meters */
  distance: number;

  /** The route's elevation gain. */
  elevation_gain: number;

  /** The unique identifier of this route */
  id: number;

  /** An instance of PolylineMap. */
  map: PolylineMap;

  /** The name of this route */
  name: string;

  /** Whether this route is private */
  private: boolean;

  /** Whether this route is starred by the logged-in athlete */
  starred: boolean;

  /** An instance of integer. */
  timestamp: number;

  /** This route's type (1 for ride, 2 for runs) */
  type: number;

  /** This route's sub-type (1 for road, 2 for mountain bike, 3 for cross, 4 for trail, 5 for mixed) */
  sub_type: number;

  /** The segments traversed by this route */
  segments: SummarySegment;

  /** The directions of this route */
  directions: RouteDirection;
}

/**
 * RouteDirection
 */
export interface RouteDirection {
  /** The distance in the route at which the action applies */
  distance: number;

  /** The action of this direction */
  action: number;

  /** An instance of string. */
  name: string;
}

/**
 * RunningRace
 */
export interface RunningRace {
  /** The unique identifier of this race. */
  id: number;

  /** The name of this race. */
  name: string;

  /** The type of this race. */
  running_race_type: number;

  /** The race's distance, in meters. */
  distance: number;

  /** The time at which the race begins started in the local timezone. */
  start_date_local: string;

  /** The name of the city in which the race is taking place. */
  city: string;

  /** The name of the state or geographical region in which the race is taking place. */
  state: string;

  /** The name of the country in which the race is taking place. */
  country: string;

  /** The set of routes that cover this race's course. */
  route_ids: number;

  /** The unit system in which the race should be displayed. May take one of the following values: feet, meters */
  measurement_preference: string;

  /** The vanity URL of this race on Strava. */
  url: string;

  /** The URL of this race's website. */
  website_url: string;
}

/**
 * SegmentLeaderboard
 *
 * A
 */
export interface SegmentLeaderboard {
  /** The total number of entries for this leaderboard */
  entry_count: number;

  /** Deprecated, use entry_count */
  effort_count: number;

  /** May take one of the following values: kom, cr */
  kom_type: string;

  /** A collection of SegmentLeaderboardEntry objects. */
  entries: SegmentLeaderboardEntry;
}

/**
 * SegmentLeaderboardEntry
 *
 * A row in a segment leaderboard
 */
export interface SegmentLeaderboardEntry {
  /** The public name of the athlete */
  athlete_name: string;

  /** The elapsed of the segment effort associated with this entry */
  elapsed_time: number;

  /** The moving of the segment effort associated with this entry */
  moving_time: number;

  /** The time at which the effort was started. */
  start_date: string;

  /** The time at which the effort was started in the local timezone. */
  start_date_local: string;

  /** The rank of this entry in the leaderboard */
  rank: number;
}

/**
 * Split
 */
export interface Split {
  /** The average speed of this split, in meters per second */
  average_speed: number;

  /** The distance of this split, in meters */
  distance: number;

  /** The elapsed time of this split, in seconds */
  elapsed_time: number;

  /** The elevation difference of this split, in meters */
  elevation_difference: number;

  /** The pacing zone of this split */
  pace_zone: number;

  /** The moving time of this split, in seconds */
  moving_time: number;

  /** N/A */
  split: number;
}

/**
 * StreamSet
 */
export interface StreamSet {
  /** An instance of TimeStream. */
  time: TimeStream;

  /** An instance of DistanceStream. */
  distance: DistanceStream;

  /** An instance of LatLngStream. */
  latlng: LatLngStream;

  /** An instance of AltitudeStream. */
  altitude: AltitudeStream;

  /** An instance of SmoothVelocityStream. */
  velocity_smooth: SmoothVelocityStream;

  /** An instance of HeartrateStream. */
  heartrate: HeartrateStream;

  /** An instance of CadenceStream. */
  cadence: CadenceStream;

  /** An instance of PowerStream. */
  watts: PowerStream;

  /** An instance of TemperatureStream. */
  temp: TemperatureStream;

  /** An instance of MovingStream. */
  moving: MovingStream;

  /** An instance of SmoothGradeStream. */
  grade_smooth: SmoothGradeStream;
}

/**
 * SummaryGear
 */
export interface SummaryGear {
  /** The gear's unique identifier. */
  id: string;

  /** Resource state, indicates level of detail. Possible values: 2 -> "summary", 3 -> "detail" */
  resource_state: number;

  /** Whether this gear's is the owner's default one. */
  primary: boolean;

  /** The gear's name. */
  name: string;

  /** The distance logged with this gear. */
  distance: number;
}

/**
 * SummarySegment
 */
export interface SummarySegment {
  /** The unique identifier of this segment */
  id: number;

  /** The name of this segment */
  name: string;

  /** May take one of the following values: Ride, Run */
  activity_type: string;

  /** The segment's distance, in meters */
  distance: number;

  /** The segment's average grade, in percents */
  average_grade: number;

  /** The segments's maximum grade, in percents */
  maximum_grade: number;

  /** The segments's highest elevation, in meters */
  elevation_high: number;

  /** The segments's lowest elevation, in meters */
  elevation_low: number;

  /** An instance of LatLng. */
  start_latlng: LatLng;

  /** An instance of LatLng. */
  end_latlng: LatLng;

  /** The category of the climb */
  climb_category: number;

  /** The segments's city. */
  city: string;

  /** The segments's state or geographical region. */
  state: string;

  /** The segment's country. */
  country: string;

  /** Whether this segment is private. */
  private: boolean;

  /** An instance of SummarySegmentEffort. */
  athlete_pr_effort: SummarySegmentEffort;
}

/**
 * SummarySegmentEffort
 */
export interface SummarySegmentEffort {
  /** The unique identifier of this effort */
  id: number;

  /** The effort's elapsed time */
  elapsed_time: number;

  /** The time at which the effort was started. */
  start_date: string;

  /** The time at which the effort was started in the local timezone. */
  start_date_local: string;

  /** The effort's distance in meters */
  distance: number;

  /** Whether this effort is the current best on the leaderboard */
  is_kom: boolean;
}

/**
 * TimedZoneDistribution
 *
 * A collection of #/TimedZoneRange objects. Stores the exclusive ranges representing zones and the time spent in each.
 */
export interface TimedZoneDistribution {}

/**
 * UpdatableActivity
 */
export interface UpdatableActivity {
  /** Whether this activity is a commute */
  commute: boolean;

  /** Whether this activity was recorded on a training machine */
  trainer: boolean;

  /** The description of the activity */
  description: string;

  /** The name of the activity */
  name: string;

  /** An instance of ActivityType. */
  type: ActivityType;

  /** Identifier for the gear associated with the activity. ‘none’ clears gear from activity */
  gear_id: string;
}

/**
 * Upload
 */
export interface Upload {
  /** The unique identifier of the upload */
  id: number;

  /** The external identifier of the upload */
  external_id: string;

  /** The error associated with this upload */
  error: string;

  /** The status of this upload */
  status: string;

  /** The identifier of the activity this upload resulted into */
  activity_id: number;
}

/**
 * ZoneRange
 */
export interface ZoneRange {
  /** The minimum value in the range. */
  min: number;

  /** The maximum value in the range. */
  max: number;
}

/**
 * ZoneRanges
 *
 * A collection of ZoneRange objects.
 */
export interface ZoneRanges {}

/**
 * Zones
 */
export interface Zones {
  /** An instance of HeartRateZoneRanges. */
  heart_rate: HeartRateZoneRanges;

  /** An instance of PowerZoneRanges. */
  power: PowerZoneRanges;
}

/**
 * AltitudeStream
 */
export interface AltitudeStream {
  /** The number of data points in this stream */
  original_size: number;

  /** The level of detail (sampling) in which this stream was returned May take one of the following values: low, medium, high */
  resolution: string;

  /** The base series used in the case the stream was downsampled May take one of the following values: distance, time */
  series_type: string;

  /** The sequence of altitude values for this stream, in meters */
  data: number;
}

/**
 * CadenceStream
 */
export interface CadenceStream {
  /** The number of data points in this stream */
  original_size: number;

  /** The level of detail (sampling) in which this stream was returned May take one of the following values: low, medium, high */
  resolution: string;

  /** The base series used in the case the stream was downsampled May take one of the following values: distance, time */
  series_type: string;

  /** The sequence of cadence values for this stream, in rotations per minute */
  data: number;
}

/**
 * DetailedGear
 */
export interface DetailedGear {
  /** The gear's unique identifier. */
  id: string;

  /** Resource state, indicates level of detail. Possible values: 2 -> "summary", 3 -> "detail" */
  resource_state: number;

  /** Whether this gear's is the owner's default one. */
  primary: boolean;

  /** The gear's name. */
  name: string;

  /** The distance logged with this gear. */
  distance: number;

  /** The gear's brand name. */
  brand_name: string;

  /** The gear's model name. */
  model_name: string;

  /** The gear's frame type (bike only). */
  frame_type: number;

  /** The gear's description. */
  description: string;
}

/**
 * DetailedSegment
 */
export interface DetailedSegment {
  /** The unique identifier of this segment */
  id: number;

  /** The name of this segment */
  name: string;

  /** May take one of the following values: Ride, Run */
  activity_type: string;

  /** The segment's distance, in meters */
  distance: number;

  /** The segment's average grade, in percents */
  average_grade: number;

  /** The segments's maximum grade, in percents */
  maximum_grade: number;

  /** The segments's highest elevation, in meters */
  elevation_high: number;

  /** The segments's lowest elevation, in meters */
  elevation_low: number;

  /** An instance of LatLng. */
  start_latlng: LatLng;

  /** An instance of LatLng. */
  end_latlng: LatLng;

  /** The category of the climb */
  climb_category: number;

  /** The segments's city. */
  city: string;

  /** The segments's state or geographical region. */
  state: string;

  /** The segment's country. */
  country: string;

  /** Whether this segment is private. */
  private: boolean;

  /** An instance of SummarySegmentEffort. */
  athlete_pr_effort: SummarySegmentEffort;

  /** The time at which the segment was created. */
  created_at: string;

  /** The time at which the segment was last updated. */
  updated_at: string;

  /** The segment's total elevation gain. */
  total_elevation_gain: number;

  /** An instance of PolylineMap. */
  map: PolylineMap;

  /** The total number of efforts for this segment */
  effort_count: number;

  /** The number of unique athletes who have an effort for this segment */
  athlete_count: number;

  /** Whether this segment is considered hazardous */
  hazardous: boolean;

  /** The number of stars for this segment */
  star_count: number;
}

/**
 * DetailedSegmentEffort
 */
export interface DetailedSegmentEffort {
  /** The unique identifier of this effort */
  id: number;

  /** The effort's elapsed time */
  elapsed_time: number;

  /** The time at which the effort was started. */
  start_date: string;

  /** The time at which the effort was started in the local timezone. */
  start_date_local: string;

  /** The effort's distance in meters */
  distance: number;

  /** Whether this effort is the current best on the leaderboard */
  is_kom: boolean;

  /** The name of the segment on which this effort was performed */
  name: string;

  /** An instance of MetaActivity. */
  activity: MetaActivity;

  /** An instance of MetaAthlete. */
  athlete: MetaAthlete;

  /** The effort's moving time */
  moving_time: number;

  /** The start index of this effort in its activity's stream */
  start_index: number;

  /** The end index of this effort in its activity's stream */
  end_index: number;

  /** The effort's average cadence */
  average_cadence: number;

  /** The average wattage of this effort */
  average_watts: number;

  /** For riding efforts, whether the wattage was reported by a dedicated recording device */
  device_watts: boolean;

  /** The heart heart rate of the athlete during this effort */
  average_heartrate: number;

  /** The maximum heart rate of the athlete during this effort */
  max_heartrate: number;

  /** An instance of SummarySegment. */
  segment: SummarySegment;

  /** The rank of the effort on the global leaderboard if it belongs in the top 10 at the time of upload */
  kom_rank: number;

  /** The rank of the effort on the athlete's leaderboard if it belongs in the top 3 at the time of upload */
  pr_rank: number;

  /** Whether this effort should be hidden when viewed within an activity */
  hidden: boolean;
}

/**
 * DistanceStream
 */
export interface DistanceStream {
  /** The number of data points in this stream */
  original_size: number;

  /** The level of detail (sampling) in which this stream was returned May take one of the following values: low, medium, high */
  resolution: string;

  /** The base series used in the case the stream was downsampled May take one of the following values: distance, time */
  series_type: string;

  /** The sequence of distance values for this stream, in meters */
  data: number;
}

/**
 * HeartrateStream
 */
export interface HeartrateStream {
  /** The number of data points in this stream */
  original_size: number;

  /** The level of detail (sampling) in which this stream was returned May take one of the following values: low, medium, high */
  resolution: string;

  /** The base series used in the case the stream was downsampled May take one of the following values: distance, time */
  series_type: string;

  /** The sequence of heart rate values for this stream, in beats per minute */
  data: number;
}

/**
 * LatLngStream
 */
export interface LatLngStream {
  /** The number of data points in this stream */
  original_size: number;

  /** The level of detail (sampling) in which this stream was returned May take one of the following values: low, medium, high */
  resolution: string;

  /** The base series used in the case the stream was downsampled May take one of the following values: distance, time */
  series_type: string;

  /** The sequence of lat/long values for this stream */
  data: LatLng;
}

/**
 * MovingStream
 */
export interface MovingStream {
  /** The number of data points in this stream */
  original_size: number;

  /** The level of detail (sampling) in which this stream was returned May take one of the following values: low, medium, high */
  resolution: string;

  /** The base series used in the case the stream was downsampled May take one of the following values: distance, time */
  series_type: string;

  /** The sequence of moving values for this stream, as boolean values */
  data: boolean;
}

/**
 * PowerStream
 */
export interface PowerStream {
  /** The number of data points in this stream */
  original_size: number;

  /** The level of detail (sampling) in which this stream was returned May take one of the following values: low, medium, high */
  resolution: string;

  /** The base series used in the case the stream was downsampled May take one of the following values: distance, time */
  series_type: string;

  /** The sequence of power values for this stream, in watts */
  data: number;
}

/**
 * SmoothGradeStream
 */
export interface SmoothGradeStream {
  /** The number of data points in this stream */
  original_size: number;

  /** The level of detail (sampling) in which this stream was returned May take one of the following values: low, medium, high */
  resolution: string;

  /** The base series used in the case the stream was downsampled May take one of the following values: distance, time */
  series_type: string;

  /** The sequence of grade values for this stream, as percents of a grade */
  data: number;
}

/**
 * SmoothVelocityStream
 */
export interface SmoothVelocityStream {
  /** The number of data points in this stream */
  original_size: number;

  /** The level of detail (sampling) in which this stream was returned May take one of the following values: low, medium, high */
  resolution: string;

  /** The base series used in the case the stream was downsampled May take one of the following values: distance, time */
  series_type: string;

  /** The sequence of velocity values for this stream, in meters per second */
  data: number;
}

/**
 * SummaryActivity
 */
export interface SummaryActivity {
  /** The unique identifier of the activity */
  id: number;

  /** The identifier provided at upload time */
  external_id: string;

  /** The identifier of the upload that resulted in this activity */
  upload_id: number;

  /** An instance of MetaAthlete. */
  athlete: MetaAthlete;

  /** The name of the activity */
  name: string;

  /** The activity's distance, in meters */
  distance: number;

  /** The activity's moving time, in seconds */
  moving_time: number;

  /** The activity's elapsed time, in seconds */
  elapsed_time: number;

  /** The activity's total elevation gain. */
  total_elevation_gain: number;

  /** The activity's highest elevation, in meters */
  elev_high: number;

  /** The activity's lowest elevation, in meters */
  elev_low: number;

  /** An instance of ActivityType. */
  type: ActivityType;

  /** The time at which the activity was started. */
  start_date: string;

  /** The time at which the activity was started in the local timezone. */
  start_date_local: string;

  /** The timezone of the activity */
  timezone: string;

  /** An instance of LatLng. */
  start_latlng: LatLng;

  /** An instance of LatLng. */
  end_latlng: LatLng;

  /** The number of achievements gained during this activity */
  achievement_count: number;

  /** The number of kudos given for this activity */
  kudos_count: number;

  /** The number of comments for this activity */
  comment_count: number;

  /** The number of athletes for taking part in a group activity */
  athlete_count: number;

  /** The number of Instagram photos for this activity */
  photo_count: number;

  /** The number of Instagram and Strava photos for this activity */
  total_photo_count: number;

  /** An instance of PolylineMap. */
  map: PolylineMap;

  /** Whether this activity was recorded on a training machine */
  trainer: boolean;

  /** Whether this activity is a commute */
  commute: boolean;

  /** Whether this activity was created manually */
  manual: boolean;

  /** Whether this activity is private */
  private: boolean;

  /** Whether this activity is flagged */
  flagged: boolean;

  /** The activity's workout type */
  workout_type: number;

  /** The activity's average speed, in meters per second */
  average_speed: number;

  /** The activity's max speed, in meters per second */
  max_speed: number;

  /** Whether the logged-in athlete has kudoed this activity */
  has_kudoed: boolean;

  /** The id of the gear for the activity */
  gear_id: string;

  /** The total work done in kilojoules during this activity. Rides only */
  kilojoules: number;

  /** Average power output in watts during this activity. Rides only */
  average_watts: number;

  /** Whether the watts are from a power meter, false if estimated */
  device_watts: boolean;

  /** Rides with power meter data only */
  max_watts: number;

  /** Similar to Normalized Power. Rides with power meter data only */
  weighted_average_watts: number;
}

/**
 * SummaryAthlete
 */
export interface SummaryAthlete {
  /** The unique identifier of the athlete */
  id: number;

  /** Resource state, indicates level of detail. Possible values: 1 -> "meta", 2 -> "summary", 3 -> "detail" */
  resource_state: number;

  /** The athlete's first name. */
  firstname: string;

  /** The athlete's last name. */
  lastname: string;

  /** URL to a 62x62 pixel profile picture. */
  profile_medium: string;

  /** URL to a 124x124 pixel profile picture. */
  profile: string;

  /** The athlete's city. */
  city: string;

  /** The athlete's state or geographical region. */
  state: string;

  /** The athlete's country. */
  country: string;

  /** The athlete's sex. May take one of the following values: M, F */
  sex: string;

  /** Whether the currently logged-in athlete follows this athlete. May take one of the following values: pending, accepted, blocked */
  friend: string;

  /** Whether this athlete follows the currently logged-in athlete. May take one of the following values: pending, accepted, blocked */
  follower: string;

  /** Deprecated.  Use summit field instead. Whether the athlete has any Summit subscription. */
  premium: boolean;

  /** Whether the athlete has any Summit subscription. */
  summit: boolean;

  /** The time at which the athlete was created. */
  created_at: string;

  /** The time at which the athlete was last updated. */
  updated_at: string;
}

/**
 * SummaryClub
 */
export interface SummaryClub {
  /** The club's unique identifier. */
  id: number;

  /** Resource state, indicates level of detail. Possible values: 1 -> "meta", 2 -> "summary", 3 -> "detail" */
  resource_state: number;

  /** The club's name. */
  name: string;

  /** URL to a 60x60 pixel profile picture. */
  profile_medium: string;

  /** URL to a ~1185x580 pixel cover photo. */
  cover_photo: string;

  /** URL to a ~360x176  pixel cover photo. */
  cover_photo_small: string;

  /** May take one of the following values: cycling, running, triathlon, other */
  sport_type: string;

  /** The club's city. */
  city: string;

  /** The club's state or geographical region. */
  state: string;

  /** The club's country. */
  country: string;

  /** Whether the club is private. */
  private: boolean;

  /** The club's member count. */
  member_count: number;

  /** Whether the club is featured or not. */
  featured: boolean;

  /** Whether the club is verified or not. */
  verified: boolean;

  /** The club's vanity URL. */
  url: string;
}

/**
 * TemperatureStream
 */
export interface TemperatureStream {
  /** The number of data points in this stream */
  original_size: number;

  /** The level of detail (sampling) in which this stream was returned May take one of the following values: low, medium, high */
  resolution: string;

  /** The base series used in the case the stream was downsampled May take one of the following values: distance, time */
  series_type: string;

  /** The sequence of temperature values for this stream, in celsius degrees */
  data: number;
}

/**
 * TimeStream
 */
export interface TimeStream {
  /** The number of data points in this stream */
  original_size: number;

  /** The level of detail (sampling) in which this stream was returned May take one of the following values: low, medium, high */
  resolution: string;

  /** The base series used in the case the stream was downsampled May take one of the following values: distance, time */
  series_type: string;

  /** The sequence of time values for this stream, in seconds */
  data: number;
}

/**
 * TimedZoneRange
 *
 * A union type representing the time spent in a given zone.
 */
export interface TimedZoneRange {
  /** The minimum value in the range. */
  min: number;

  /** The maximum value in the range. */
  max: number;

  /** The number of seconds spent in this zone */
  time: number;
}

/**
 * DetailedActivity
 */
export interface DetailedActivity {
  /** The unique identifier of the activity */
  id: number;

  /** The identifier provided at upload time */
  external_id: string;

  /** The identifier of the upload that resulted in this activity */
  upload_id: number;

  /** An instance of MetaAthlete. */
  athlete: MetaAthlete;

  /** The name of the activity */
  name: string;

  /** The activity's distance, in meters */
  distance: number;

  /** The activity's moving time, in seconds */
  moving_time: number;

  /** The activity's elapsed time, in seconds */
  elapsed_time: number;

  /** The activity's total elevation gain. */
  total_elevation_gain: number;

  /** The activity's highest elevation, in meters */
  elev_high: number;

  /** The activity's lowest elevation, in meters */
  elev_low: number;

  /** An instance of ActivityType. */
  type: ActivityType;

  /** The time at which the activity was started. */
  start_date: string;

  /** The time at which the activity was started in the local timezone. */
  start_date_local: string;

  /** The timezone of the activity */
  timezone: string;

  /** An instance of LatLng. */
  start_latlng: LatLng;

  /** An instance of LatLng. */
  end_latlng: LatLng;

  /** The number of achievements gained during this activity */
  achievement_count: number;

  /** The number of kudos given for this activity */
  kudos_count: number;

  /** The number of comments for this activity */
  comment_count: number;

  /** The number of athletes for taking part in a group activity */
  athlete_count: number;

  /** The number of Instagram photos for this activity */
  photo_count: number;

  /** The number of Instagram and Strava photos for this activity */
  total_photo_count: number;

  /** An instance of PolylineMap. */
  map: PolylineMap;

  /** Whether this activity was recorded on a training machine */
  trainer: boolean;

  /** Whether this activity is a commute */
  commute: boolean;

  /** Whether this activity was created manually */
  manual: boolean;

  /** Whether this activity is private */
  private: boolean;

  /** Whether this activity is flagged */
  flagged: boolean;

  /** The activity's workout type */
  workout_type: number;

  /** The activity's average speed, in meters per second */
  average_speed: number;

  /** The activity's max speed, in meters per second */
  max_speed: number;

  /** Whether the logged-in athlete has kudoed this activity */
  has_kudoed: boolean;

  /** The id of the gear for the activity */
  gear_id: string;

  /** The total work done in kilojoules during this activity. Rides only */
  kilojoules: number;

  /** Average power output in watts during this activity. Rides only */
  average_watts: number;

  /** Whether the watts are from a power meter, false if estimated */
  device_watts: boolean;

  /** Rides with power meter data only */
  max_watts: number;

  /** Similar to Normalized Power. Rides with power meter data only */
  weighted_average_watts: number;

  /** The description of the activity */
  description: string;

  /** An instance of PhotosSummary. */
  photos: PhotosSummary;

  /** An instance of SummaryGear. */
  gear: SummaryGear;

  /** The number of kilocalories consumed during this activity */
  calories: number;

  /** A collection of DetailedSegmentEffort objects. */
  segment_efforts: DetailedSegmentEffort;

  /** The name of the device used to record the activity */
  device_name: string;

  /** The token used to embed a Strava activity */
  embed_token: string;

  /** The splits of this activity in metric units (for runs) */
  splits_metric: Split;

  /** The splits of this activity in imperial units (for runs) */
  splits_standard: Split;

  /** A collection of Lap objects. */
  laps: Lap;

  /** A collection of DetailedSegmentEffort objects. */
  best_efforts: DetailedSegmentEffort;
}

/**
 * DetailedAthlete
 */
export interface DetailedAthlete {
  /** The unique identifier of the athlete */
  id: number;

  /** Resource state, indicates level of detail. Possible values: 1 -> "meta", 2 -> "summary", 3 -> "detail" */
  resource_state: number;

  /** The athlete's first name. */
  firstname: string;

  /** The athlete's last name. */
  lastname: string;

  /** URL to a 62x62 pixel profile picture. */
  profile_medium: string;

  /** URL to a 124x124 pixel profile picture. */
  profile: string;

  /** The athlete's city. */
  city: string;

  /** The athlete's state or geographical region. */
  state: string;

  /** The athlete's country. */
  country: string;

  /** The athlete's sex. May take one of the following values: M, F */
  sex: string;

  /** Whether the currently logged-in athlete follows this athlete. May take one of the following values: pending, accepted, blocked */
  friend: string;

  /** Whether this athlete follows the currently logged-in athlete. May take one of the following values: pending, accepted, blocked */
  follower: string;

  /** Deprecated.  Use summit field instead. Whether the athlete has any Summit subscription. */
  premium: boolean;

  /** Whether the athlete has any Summit subscription. */
  summit: boolean;

  /** The time at which the athlete was created. */
  created_at: string;

  /** The time at which the athlete was last updated. */
  updated_at: string;

  /** The athlete's follower count. */
  follower_count: number;

  /** The athlete's friend count. */
  friend_count: number;

  /** The number or athletes mutually followed by this athlete and the currently logged-in athlete. */
  mutual_friend_count: number;

  /** The athlete's preferred unit system. May take one of the following values: feet, meters */
  measurement_preference: string;

  /** The athlete's FTP (Functional Threshold Power). */
  ftp: number;

  /** The athlete's weight. */
  weight: number;

  /** The athlete's clubs. */
  clubs: SummaryClub;

  /** The athlete's bikes. */
  bikes: SummaryGear;

  /** The athlete's shoes. */
  shoes: SummaryGear;
}

/**
 * DetailedClub
 */
export interface DetailedClub {
  /** The club's unique identifier. */
  id: number;

  /** Resource state, indicates level of detail. Possible values: 1 -> "meta", 2 -> "summary", 3 -> "detail" */
  resource_state: number;

  /** The club's name. */
  name: string;

  /** URL to a 60x60 pixel profile picture. */
  profile_medium: string;

  /** URL to a ~1185x580 pixel cover photo. */
  cover_photo: string;

  /** URL to a ~360x176  pixel cover photo. */
  cover_photo_small: string;

  /** May take one of the following values: cycling, running, triathlon, other */
  sport_type: string;

  /** The club's city. */
  city: string;

  /** The club's state or geographical region. */
  state: string;

  /** The club's country. */
  country: string;

  /** Whether the club is private. */
  private: boolean;

  /** The club's member count. */
  member_count: number;

  /** Whether the club is featured or not. */
  featured: boolean;

  /** Whether the club is verified or not. */
  verified: boolean;

  /** The club's vanity URL. */
  url: string;

  /** The membership status of the logged-in athlete. May take one of the following values: member, pending */
  membership: string;

  /** Whether the currently logged-in athlete is an administrator of this club. */
  admin: boolean;

  /** Whether the currently logged-in athlete is the owner of this club. */
  owner: boolean;

  /** The number of athletes in the club that the logged-in athlete follows. */
  following_count: number;
}
