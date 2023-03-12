let name = 'Mohsen Mirhosseini';
let number = 150000000;
console.log(number.toLocaleString());
console.log('------------------------------')
let array = ['a', 'b', 15, 'Test', 'Mohsen'];
array.forEach(function (item, index) {
    console.log(index + '---->' + item);
});
console.log('------------------------------')
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
console.log('------------------------------')
let object = {
    name: 'Mohsen Mirhosseini',
    age: 35,
    friends: ['amir', 'milad', 'Hamid'],
    company: {
        name: 'Estarbad',
        phone: '0172233665'
    }
}

console.log(object.company.name)