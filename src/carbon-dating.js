const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  throw 'Not implemented';
  if ( typeof(sampleActivity) != "string") {
    return false;
  }
  sampleActivity = Number(sampleActivity);
  if ( sampleActivity <= 0 || sampleActivity > 15 ) {
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
};