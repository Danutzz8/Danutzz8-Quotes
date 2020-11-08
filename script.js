const quotes = [
{
name:'Stephen King',
quote:'Get busy living or get busy dying.'
},
{
name:'John F.Kennedy',
quote:'Those who dare to fail miserably can achive greatly.'    
},
{
name:'Abraham Lincoln',
quote:'I`m a success today because I had a friend who belived in me and I didn`t have the heart to let him down.'
},
{
name:'Leonardo Da Vinci',
quote:'It had long since come to my attention that people of accomlishment rarely sat back and let things happen to them. They went out and happened to things.'    
},
{
name:'Leo Tolstoy',
quote:'If you want to be happy, be.'    
}

]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote (){

let number = Math.floor(Math.random()*quotes.length);
// console.log(number);
quoteAuthor.innerHTML = quotes[number].name;
quote.innerHTML = quotes[number].quote;
}