/*conditional*/
let temperature = 20
const windSpeed = 12

/* if statement */
if (temperature < 0 && windSpeed > 10) {
  console.log('wear a light coat')
}

if (temperature > 0) {
    console.log('Hot weather')
  } else {
    console.log('Cold weather')
  }

  if (temperature < 0 && windSpeed > 10) {
    console.log('Wear a light coat')
  } else if (temperature > 0 && windSpeed > 10) {
    console.log('Wear a long sleeve t-shirt')
  } else if (temperature > 0 && windSpeed < 10) {
    console.log('Wear a short sleeve t-shirt')
  }

const preferredcolorscheme='light'
switch (preferredcolorscheme)
{
    case 'light':
        console.log('render light background')
        break
    case 'dark':
        console.log('render dark background')
        break
    default:
        console.log('render light background')
        break    
}

/* Ternary Operator */
temperature = 10
if (temperature > 0) 
{
    console.log('Hot weather')
}
else 
{
    console.log('Cold weather')
}

console.log(temperature > 0 ? 
    '*Hot Weather' : '*Cold Weather')

    /* Short Circuiting */

if(temperature<0 && windSpeed>10)
{
    console.log('wear a light coat')
}

temperature<0 || windSpeed>10 && 
console.log('**wear a light coat')


console.log(Boolean())


const user = undefined
let message

if (user !== null) message = 'Welcome'
else message = ''

console.log(user && 'Welcome')

console.log('falsy game:', 
(true && 0) || 100)