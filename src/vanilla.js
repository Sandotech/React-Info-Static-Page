// Adding a component using Javascript Vanilla

const tittle = document.createElement('h1');
tittle.textContent = 'Hello World!'
const root = document.getElementById('root');

root.append(tittle);