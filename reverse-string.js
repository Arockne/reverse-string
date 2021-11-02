
//reverse a string without the string method


//i
  //string
//o
  //reversed string
//
function reverse(string) {
  //initialize empty string
  //iterate over string characters from the back
    //add each character to reversed
  //return reversed
  let reversed = ''
  for (let i = string.length - 1; i >= 0; i -= 1) {
    reversed += string[i]
  }
  return reversed
}

function equal(a, b) {
  if (a === b) return console.log('Passed')
  else return console.error(`Expected ${a === b} to be true`)
}

function reverse_with_pointer(string) {
  string = string.split('')
  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    let first = string[i]
    string[i] = string[string.length - 1 - i]
    string[string.length - 1 - i] = first
  }
  return string.join('')
}

function reverse_with_array(string) {
  const reversed = []
  for (let i = 0; i < string.length; i++) {
    reversed.unshift(string[i])
  }
  return reversed.join('')
}


const a = reverse('hello')
equal(a, 'olleh')

const b = reverse('boom')
equal(b, 'moob')

const c = reverse('tomfoolery')
equal(c, 'yreloofmot')

const d = reverse('feels')
equal(d, 'sleef')

const e = reverse('boop')
equal(e, 'poob')


const f = reverse_with_pointer('hello')
equal(f, 'olleh')