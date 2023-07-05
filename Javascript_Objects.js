//  Objects similar to arrays
//  Insted of using indices we use properties to access
//  Array data
//  Key -> Value  (Property ----> Data)

// Useful to store data in structured way 
//  and represeting like real time ojects.

const car = {
    "model": "XUV 20023",
    price : 20_00_000,
    "color": "Green",
    "seat numbers": [2, 3, 3]
};

// key maybe stored without quotes also for single words
// and we can us numbers also as keys
//  if my object has any non-string properties, 
//  JavaScript will automatically typecast them as strings.

//  , after each data and no comma at end of data and
//  close bracket and put semicolon (;) after compliting an object.

//  Accessing the OBJECTS PROPERTIES:

//  this can be done in 2 ways:
//  with using DOT(.) operator and BRACKET [] notation.

console.log(car.price);
console.log(car.model);

console.log(car['color']);
console.log(car['seat numbers']);

//  For space contained properties we suould use only [] acccess.

//  Updating Object Properties:

car.color = "Blue";
car["seat numbers"] = [2, 2, 2];
  
console.log(car);
car["seat numbers"].pop();      //   What this line do?---------> removes the last array element


console.log();
console.log(car);

//  We can introduce new property also like similar way we had accesssed properties.

car["man year"] = 2022;
car.isItAutoGeared = true;

console.log(car);


//  Deleting properties using 'delete' Keyword.

delete car.price;
console.log();
console.log(car);
