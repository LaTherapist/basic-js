module.exports = function getSeason( date ) {
  if (!date) return 'Unable to determine the time of year!';
  if (typeof date !== 'object' || !date.getTime()) throw new Error('invalid argument');

  let month = date.getMonth();
  return ( month === 11 || month >= 0 && month < 2 ) ? 'winter' : 
         ( month >= 2 && month <= 4 ) ? 'spring' :           
         ( month > 4 && month <= 7 ) ? 'summer' : 'autumn';
};
