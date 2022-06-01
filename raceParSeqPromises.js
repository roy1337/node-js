const promisify = (item,delay) => 
new Promise ((resolve) => 
setTimeout(() =>
resolve(item),delay))


const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function parallelFunc() {
  const arrayOfPromises = [a(),b(),c()];
  const [outpu1,output2,output3] = Promise.all(arrayOfPromises)
  return `parallel is done: ${output1} ${output2} ${output3}`
}

async function raceFunc() {
  const arrayOfPromises = [a(),b(),c()]
  const output1 = Promise.race(arrayOfPromises)
  return `race is done: ${output1}`;

}

async function sequnceFunc() {
  const outpu1 = await a()
  const output2 = await b()
  const output3 = await c()
  return `sequence is done ${output1} ${output2} ${output3}`

}

sequenceFunc().then(console.log)
parallelFunc().then(console.log)
raceFunc().then(console.log)


