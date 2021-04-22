function ArraytoObject(array) {

  return array.map(person => Object.assign(...person.map(([k, v]) => ({ [k]: v }))));
}

var array = [[["name",'David'], ["skills",['HTM', 'CSS', 'JS', 'React']], ["scores",[98, 85, 90, 95]]]]

console.log(ArraytoObject(array));