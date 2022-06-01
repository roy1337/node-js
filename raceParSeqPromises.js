const promisify = (item,delay) => 
new Promise ((resolve) => 
setTimeout(() =>
resolve(item),delay))


const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

//parallel run, output are all, in order of finish time - done parallely.
async function parallelFunc() {
  const arrayOfPromises = [a(),b(),c()];
  const [output1,output2,output3] = Promise.all(arrayOfPromises)
  return `parallel is done: ${output1} ${output2} ${output3}`
}

//race run, output is the fastest.
async function raceFunc() {
  const arrayOfPromises = [a(),b(),c()]
  const output1 = Promise.race(arrayOfPromises)
  return `race is done: ${output1}`;

}

//sequence run, output are all - done one by one.
async function sequnceFunc() {
  const outpu1 = await a()
  const output2 = await b()
  const output3 = await c()
  return `sequence is done ${output1} ${output2} ${output3}`

}

//making a race between the three options, ofcourse Race will be logged first,
//second is parallel and third is the sequence function.

sequenceFunc().then(console.log)
parallelFunc().then(console.log)
raceFunc().then(console.log)


