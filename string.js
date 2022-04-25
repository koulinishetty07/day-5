const array = ['hello', 'world'];
const substring = 'hell';

const match = array.find(element => {
  if (element.includes(substring)) {
    return true;
  }
});

console.log(match); 

if (match !== undefined) {
}