const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

person2.firstName = 'Simon';
// Modifica la proprietà "firstName" di person2 in "Simon"


console.log('Person 1: ');
console.log(person1);
console.log('Person 2: ');
console.log(person2);



/*Modificando il "firstName" di "person2" che contiene l'{}"person1", si modificherà di conseguenza anche il "firstName" 
all'interno dell'oggetto "person1" perchè lo andrà a sovrascrivere.*/