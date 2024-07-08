console.log('Another customer approaching');

fetch('https://randomuser.me/api/?results=1')
    .then(results => results.json())
    .then(info => console.log(info))

console.log(`Our valued customer, please
    give me a momemnt while I get some
    information back from the Records Dept`)