//The following script console logs the Childs and the Childs of Childs.

const Childs = Array.from(document.querySelectorAll('body > *'));
console.log('Childs:', Childs);

const childsOfChilds = Childs.map(parent => Array.from(parent.querySelectorAll(':scope > *')))
.filter(arr => arr.length);
console.log('childsOfChilds:', childsOfChilds);
