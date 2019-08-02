const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad a obtener el clima'
    }
}).argv;

// console.log(argv.direccion);

// lugar.getLugarLatLng( argv.direccion )
//             .then( console.log )

// clima.getClima ( 9.070000,-63.509998 )
//         .then( console.log )
//         .catch(console.log);

const getInfo = async(direccion) => {

    try {
        
        coords = await lugar.getLugarLatLng(direccion);

        temp = await clima.getClima(coords.lat, coords.lng);

        return `el clima de ${coords.direccion} es ${temp}`;

    } catch (error) {
        console.log(`no se pudo obtener el clima de ${coords.direccion}`);
    }

}

getInfo(argv.direccion)
        .then(console.log)
        .catch(console.log);

