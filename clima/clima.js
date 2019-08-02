const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4e4c3a2afa55e4814d043f6c137c4bb5&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}