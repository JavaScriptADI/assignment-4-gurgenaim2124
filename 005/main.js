// Task: 1
let number = 0


for(let i = 0; i < 100; i++) {
  number++
  if(number%3===0){
    console.log("Fizz")
  }else if (number%5===0){
    console.log("Buzz")
  }else if (number%3===0 && number%5===0){
    console.log("FizzBuzz")
  }else{
    console.log(number)
  }
}

// task: 2
    
let num = 0;
let ran = Math.floor(Math.random()*100)+1;
  

  for(let x=0; x < 100; x++){
      console.log(ran)
    }
    
    // task: 3

let sum = 0

for(let y = 0; y < 1000; y++){
   if(y % 2 === 0){
    sum += y
   }
}
console.log(sum)

// task: 4

let threeFive = 0 

for(let z = 0; z < 1000; z++){
    if(z % 3 === 0 || z % 5 === 0){
        threeFive += z
    }
}
console.log(threeFive)

// task: 5

let both = 0

for(let c = 0; c < 1000; c ++){
      if(c % 15 === 0){
        both += c
      }
}
console.log(both)