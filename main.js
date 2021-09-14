let btn = document.getElementById('btn');
let output = document.getElementById('output');

let quotes = [
     '"Be yourself; everyone else is already taken."-Oscar Wilde',
    '"Two things are infinite: the universe and human stupidity; and I am not sure about the universe."-Albert Einstein',
    '"A room without books is like a body without a soul."- Cicero',
    '"You*ve gotta dance like there*s nobody watching, Love like you*ll never be hurt, Sing like there*s nobody listening, And live like it*s heaven on earth."- Willam Purkey',
    '"You know you*re in love when you can*t fall asleep because reality is finally better than your dreams."- Dr. Seuss'
    ];
    
    btn.addEventListener('click', function() {
        let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        output.innerHTML = randomQuote;
    });  
console.log(randomQuote);  

