const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
    if( !sampleActivity || typeof sampleActivity !== 'string') return false;
    
    sampleActivity = Number(sampleActivity);
    if( isNaN(sampleActivity) || sampleActivity >= 15 || sampleActivity <= 0 ) return false;

    const k = 0.693 / HALF_LIFE_PERIOD;
    let t = Math.log( MODERN_ACTIVITY / sampleActivity) / k;
    return Math.ceil(t);
};
