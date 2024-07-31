var myMap = new Map();
myMap.set('firstName', 'sfsd');
myMap.set('secondeName', 'dsf');
console.log(myMap.get('firstName'));
console.log(myMap.size);
myMap.forEach(function (value, key) {
    console.log(key, value);
});
