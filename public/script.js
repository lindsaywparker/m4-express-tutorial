const colors = [
  'BlanchedAlmond',
  'BurlyWood',
  'CadetBlue',
  'Chartreuse',
  'DarkGoldenRod',
  'FireBrick',
  'LavenderBlush',
  'MediumAquamarine',
  'OliveDrab',
  'PeachPuff',
  'Peru',
  'Thistle',
]

const h1 = document.querySelector('h1');
const button = document.querySelector('button');
button.addEventListener('click', () => {
  const randomIndex = randomize();
  h1.innerText = colors[randomIndex];
  h1.className = colors[randomIndex];
})

const randomize = () => {
  return Math.floor(Math.random() * 12)
}