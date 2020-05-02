
let quotes = [
      {
            name:'jan',
            quote: 'description 1'
      },
      {
            name:'obi',
            quote: 'description 2'
      },
      {
            name:'alex',
            quote: 'description 3'
      },
      {
            name:'tom',
            quote: 'description 4'
      }
]

const quoteBtn = document.querySelector('#quoteBtn')
const quoteAuthor = document.querySelector('#quoteAuthor')
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
      let number = Math.floor(Math.random()*quotes.length)
      quoteAuthor.innerHTML = quotes[number].name;
      quote.innerHTML = quotes[number].quote;
}








const simpleQuotes =[
      {
            name:'author number 1',
            quote:'quote number 1'
      },
      {
            name:'author number 2',
            quote:'quote number 2'
      }
]