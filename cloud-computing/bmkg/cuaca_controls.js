const { default: axios } = require('axios');
const xmlJs = require('xml-js');
const hurufKapital = require('./utility/hurufKapital');
const refactoringjson = require('./utility/refactoringjson');
const creatorResponse = require('./utility/creator_rensponse');



const getByProvince = async (req, res) => {
  const { province } = req.params;

  try {
    const result = await axios.get(
      `https://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast/DigitalForecast-${hurufKapital(
        province
      )}.xml`
    );

    const weathers = xmlJs.xml2js(result.data, { compact: true, spaces: 2 });

    const refactoringjsons = refactoringjson(weathers);

    return res
      .status(200)
      .send(creatorResponse({ data: refactoringjsons }));
  } catch (error) {
    if (error.response.status === 404) {
      return res.status(404).send(creatorResponse({ message: 'Not found' }));
    }

    return res
      .status(500)
      .send(creatorResponse({ message: 'Something went wrong' }));
  }
};

const getByCity = async (req, res) => {
  const { province, city } = req.params;

  try {
    const result = await axios.get(
      `https://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast/DigitalForecast-${hurufKapital(
        province
      )}.xml`
    );

    const weathers = xmlJs.xml2js(result.data, { compact: true, spaces: 2 });
    const refactoringjsons = refactoringjson(weathers);

    const weatherByCity = refactoringjsons.areas.find(
      (area) => area.description == 'Jakarta Selatan'//hurufKapital(city, '-', ' ')
    );

    if (!weatherByCity) {
      return res.status(404).send(creatorResponse({ message: 'Not found' }));
    }

    return res.status(200).send(creatorResponse({ data: weatherByCity }));
  } catch (error) {
    return res
      .status(500)
      .send(creatorResponse({ data: 'Something went wrong' }));
  }
};

module.exports = { getByProvince, getByCity };