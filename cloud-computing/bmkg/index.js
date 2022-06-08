require('dotenv').config();
const app = require('express')();
const weatherRoute = require('./cuaca_routes');
const creatorResponse = require('./utility/creator_rensponse');
const cors = require('cors');

const PORT = process.env.PORT || 8080;
const BASE_URL = process.env.BASE_URL || '';

app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate=59');
  next();
});

app.use('/weather', weatherRoute);


app.get('/', (req, res) => {
  return res.status(200).send({
    maintainer: 'Fauzia Dhiyaa Farros & Rizal Rahmat Ramadhan',
    endpoint: {
      weather: {
        city: {
          example: `${BASE_URL}/weather/dki-jakarta/jakarta-selatan`,
        },
      },
    },
  });
});

app.all('*', (req, res) => {
  return res.status(404).send(creatorResponse({ message: 'Not found' }));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});