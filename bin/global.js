#!/usr/bin/env node

// Se define el "shebang" para indicar que este archivo debe ser interpretado por Nodejs.
// Esto permite ejecutar el script directamente desde la linea de comandos sin especificar "node"
// antes del nombre del archivo.

let random = require('../src/index.js');

random.funnyCommit();