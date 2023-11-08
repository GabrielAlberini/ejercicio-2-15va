// Mostrar en consola un mensaje que indique cuantos argumentos fueron pasador por la terminal

const args = process.argv.splice(2);
console.log("El array de argumentos tiene:", args.length, "elementos.");
