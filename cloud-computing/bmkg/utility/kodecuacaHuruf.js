const kodeCuaca = {
  S: 'South',
  SSW: 'South-Southwest',
  SW: 'Southwest',
  SE: 'Southeast',
  SSE: 'South-Southeast',
  N: 'North',
  NNE: 'North-Northeast',
  NE: 'Northeast',
  ENE: 'East-Northeast',
  E: 'East',
  ESE: 'East-Southeast',
  NW: 'Northwest',
  NNW: 'North-Northwest',
  WSW: 'West-Southwest',
  W: 'West',
  WNW: 'West-Northwest',

};

const kodeCuacaHuruf = (code) => {
  return kodeCuaca[code] || '';
};

module.exports = kodeCuacaHuruf;