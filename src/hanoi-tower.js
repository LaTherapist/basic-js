module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  let turns = 2 ** disksNumber - 1;
  let tps = 3600 / turnsSpeed;
  let seconds = Math.floor(turns * tps);
  return { 'turns' : turns, 'seconds' : seconds };
};
