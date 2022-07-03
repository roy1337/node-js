const {parse} = require('csv-parse');
const fs = require('fs');

const habitablePlanets = [];

//filtering only confirmed planets via
//kol_disoption and koi_insol and koi_prad columns

function isHabitablePlanet(planet) {
   return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}

//this section will return bytes (buffers) 
//pre-parse (raw buffer of bytes) - that's why we use .pipe
//(data) = each piece of data comes in our steam

fs.createReadStream('kepler_data.csv')
.pipe(parse({
    comment: '#',
    columns: true,
}))
//reciving data from stream (file)
.on('data', (data) => {
    if(isHabitablePlanet(data)){
    habitablePlanets.push(data);
}})

.on('error', (error) => {
    console.log(error);
})

.on('end', () => {
  console.log(habitablePlanets.map((planet) => {
        return planet['kepler_name'];
    }))
    console.log(`${habitablePlanets.length} habitable planets found!`)
    console.log('Done');

});


//.pipe(parse()) connects the readable steam source
//to a writeable stream destination
//Planets.csv = source
//parse function = destionation for our pipe

