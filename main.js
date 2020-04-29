//  let fullName = 'obi'
//  console.log(fullName);

//  let fullAge = true;
//  console.log(fullAge)

// //undefined
//  let job;
//  console.log(job)
//  job = 'Teacher';
//  console.log(job)



// //VARIABLE MUTATION AND TYPE COERCION
// let firstName = 'obi';
// let age = 30;

// console.log(`${firstName}` + ' ' + `${age}`)


// let job, ismarried;
// job = 'teacher';
// ismarried = false;
// console.log(`${firstName}` + ' is a ' + `${age}` + ' years old ' + `${job}` + ' is he married ' + `${ismarried}`)


// //VARIABLE MUTATION
// age = 'twenty four';
// job = 'cleaner'
// alert(`${firstName}` + ' is a ' + `${age}` + ' years old ' + `${job}` + ' is he married ' + `${ismarried}`);

// let lastName = prompt('what is your last name')
// console.log(firstName + ' ' + lastName)



//BASIC OPERATORS




//STRING
// const name = 'joha';
// const age = 30;

// //CONCATENATE
// const hello = `my name is ${name} and i am ${age} years`;
// console.log(hello)
// console.log(hello.length)
// console.log(hello.toLocaleLowerCase())
// console.log(hello.toUpperCase())
// console.log(hello.substring(0, 27).toUpperCase())

// const s = 'obi, jan, ahmad';
// console.log(s.split(', '))



//ARRAYS it is a variable that holds multiple values
const a = ['banana','apple','pear','orange'];
//to add it at the end of array
a.push('strawberries')

//to add at the begining
a.unshift('berry')

//to remove from the end
a.pop()

//to get the array value index of
console.log(a.indexOf('apple'))
console.log(a)