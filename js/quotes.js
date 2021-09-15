const quotes = [
    {
        quote: "We must use time as a tool, not as a crutch.",
        author: "John F. Kennedy",
    },
    {
        quote: "If we take care of the moments, the years will take care of themselves.",
        author: "Maria Edgeworth",
    },
    {
        quote: "The future will be better tomorrow.",
        author: "Dan Quayle",
    },
    {
        quote: "I tend to live in the past because most of my life is there.",
        author: "Herb Caen",
    },
    {
        quote: "People find life entirely too time-consuming.",
        author: "Stanislaw J. Lec",
    },
    {
        quote: "Time does not change us. It just unfolds us.",
        author: "Max Frisch",
    },
    {
        quote: "Keep true to the dreams of thy youth.",
        author: "Friedrich von Schiller",
    },
    {
        quote: "The wisest men follow their own direction.",
        author: "Euripides",
    },
    {
        quote: "True life is lived when tiny changes occur.",
        author: " Leo Tolstoy",
    },
    {
        quote: "Everything comes to him who hustles while he waits.",
        author: "Thomas A. Edison",
    },
    {
        quote: "So little time and so little to do.",
        author: "Oscar Levant",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;