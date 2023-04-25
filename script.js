let userName = '' ; // Enter your Name inside single quotes
if (userName != ''){
  console.log(`Hello ${userName}`)
}
else{
  console.log("Hello")
}

const userQuestion = ''; //write your question
console.log(`${userName} asked ${userQuestion}`)

let randomNumber = Math.floor(Math.random() * 5)
let eightBall = '';

if(randomNumber === 0){
  eightBall = 'It is certain'
}

else if(randomNumber === 1){
  eightBall = 'It is decidedly so'
}

else if(randomNumber === 2){
  eightBall = 'Reply hazy try again'
}

else if(randomNumber === 4){
  eightBall = 'Cannot predict now'
}

else{
  eightBall = 'Signs point to yes'
}

console.log(`Magic Eight Ball says ${eightBall}`)
