//const fs = require('fs');
//const fs = require('express');
//const fs = require('./PATH');
const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./mutiplicar/multiplicar');
let comando = argv._[0];

switch (comando) {
    case 'Listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.yellow}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}
console.log(argv);
//let base = '5';

//console.log(process.argv);

//let argv2 = process.argv;

//console.log(argv.base);
//console.log('Limite', argv.limite);

//console.log(argv2);

//let parametro = argv[2];
//let base = parametro.split('=')[1]