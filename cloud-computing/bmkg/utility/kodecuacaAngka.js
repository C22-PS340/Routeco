const kodeCuacaAngka = {
  0: 'Cerah',
  1: 'Cerah Berawan',
  2: 'Cerah Berawan',
  3: 'Berawan',
  4: 'Berawan Tebal',
  5: 'Udara Kabur',
  10: 'Asap',
  45: 'Kabut',
  60: 'Hujan Ringan',
  61: 'Hujan Sedang',
  63: 'Hujan Lebat',
  80: 'Hujan Lokal',
  95: 'Hujan Petir',
};

const kodeAngka = (code) => {
  if (code >= 95) {
    return kodeCuacaAngka[95];
  }

  if (code >= 80) {
    return kodeCuacaAngka[80];
  }

  if (code >= 63) {
    return kodeCuacaAngka[63];
  }

  if (code == 61 || code === 60) {
    return kodeCuacaAngka[code];
  }

  if (code >= 45) {
    return kodeCuacaAngka[45];
  }

  if (code >= 10) {
    return kodeCuacaAngka[10];
  }

  if (code >= 5) {
    return kodeCuacaAngka[5];
  }

  if (code >= 0) {
    return kodeCuacaAngka[code];
  }

  return '';
};

module.exports = kodeAngka;