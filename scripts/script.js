const HEAT_MAX = 100; // maximum temp
const HEAT_MIN = 0; // minimum temp
const HEAT_STEP = 5; // amount per click the temp changes
const HEAT_CHANGE_MIN_INTERVAL_S = 5; // seconds
const HEAT_CHANGE_MAX_INTERVAL_S = 15; // seconds
const COOK_TIME_S = 120; // seconds
const EXPLOSION_THRESHOLD = .5; // minimum ratio of time spent while on incorrect temp to cause explosion
const WHITE_QUALITY_THRESHOLD = .6; // minimum ratio of time spent while on correct temp to produce white
const CLOUDY_QUALITY_THRESHOLD = .8; // minimum ratio of time spent while on correct temp to produce cloudy
const CLEAR_QUALITY_THRESHOLD = .9; // minimum ratio of time spent while on correct temp to produce clear

var currentTemp = 0;
var timeElapsed = 0;

function init(){
    
}