let cars = ["toyota", "citron", "vw", "mercedez"];
cars.push("cycle");
cars.unshift("bike", "bike");
cars.forEach(function (el) {
  let ul = document.getElementById("list");
  let li = document.createElement("li");
  li.setAttribute("class", "el");
  li.innerHTML = el;
  ul.appendChild(li);
});

//accessing the single elements in the array
var fruits = ["Banana", "Orange", "Apple", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "Mango") {
    let output = document.getElementById("output");
    let singleLi = document.createElement("li");
    singleLi.innerHTML = fruits[i];
    output.appendChild(singleLi);
  }
}

//ARRAY METHODS
let number = ["1", "2", "3"];
//it removes the last items in array
number.pop();

//it adds the item in the end of array
number.push("3");
console.log(number);

//to get a single object
colors = [
   { id: 4, name: "obi", age: 45,},
   { id: 5, name: "obi", age: 55,},
   {id: 1, name: "obi", age: 30, },
   { id: 2, name: "obi", age: 31,},
   { id: 3, name: "obi", age: 35,},
   
];

    // for (let i = 0; i < colors.length; i++) {
    // if (colors[i].id === 2) {
    //     console.log(colors[i]);
    // }
    // }
    //Filter Methods
        //   let colorFilter = colors.filter(function(data){
        //     if(data.age >= 30 && data.age <= 40){
        //         return true
        //     }
          
        //   }) 
        // console.table(colorFilter)

        //SORT METHODS
        let colorFilter = colors.sort(function(a, b){
              if(a.age > b.age ){
                   return 1
               }else{
                 return -1
               }
            
             }) 
          console.table(colorFilter)
        let colorFilter = colors.sort((a, b)=> a.age > b.age ? 1 : -1)
        console.table(colorFilter)
