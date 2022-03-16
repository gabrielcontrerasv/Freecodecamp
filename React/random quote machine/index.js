const quotes = [
    {
        quote: "Forget all the reasons why it won't work and believe the one reason why it will",
        author: "Unknown",
        color:  '#3346FF'
    },
    {
        quote: "Always do what you are afraid to do",
        author: "Ralph Waldo Emerson",
        color:  '#FF8033'
    },

    {
        quote: "Don’t be intimidated by what you don’t know. That can be your greatest strength and ensure that you do things differently from everyone else.",
        author: "Sara Blakely",
        color:  '#33FFB5'
    },
    {
        quote: "If you keep on doing what you've always done, you will keep getting what you've always gotten.",
        author: "Unknown",
        color:  '#DE1127'
    },
    {
        quote: " For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. John 3:16",
        author: "Jesus Christ",
        color:  '#11DEB5' 
    },
    {
        quote: "The surest way to find your dream job is to create it.",
        author: "Unknown",
        color:   '#054B83' 

    },

    {
        quote: "Forget all the reasons why it won't work and believe the one reason why it will",
        author: "Unknown",
        color:  '#3346FF'
    },
    {
        quote: "Always do what you are afraid to do",
        author: "Ralph Waldo Emerson",
        color:  '#FF8033'
    },

    {
        quote: "Don’t be intimidated by what you don’t know. That can be your greatest strength and ensure that you do things differently from everyone else.",
        author: "Sara Blakely",
        color:  '#33FFB5'
    },
    {
        quote: "If you keep on doing what you've always done, you will keep getting what you've always gotten.",
        author: "Unknown",
        color:  '#DE1127'
    }
]

const text = document.querySelector('#text')
const autor = document.querySelector('.autor')
const card = document.querySelector('.root')
const body = document.querySelector('body')
const boton = document.querySelector('.boton')
const enlace1 = document.querySelector('.enlace1')
const enlace2 = document.querySelector('.enlace2')


let i = 0
body.style.backgroundColor = '#28a745';
function cambiar(){
        i += 1
return  renderizar(i), color(i)
}

function renderizar(i){
 text.innerHTML = `<i class="fa fa-quote-left"> </i>  ${quotes[i].quote} <i class="fa fa-quote-right"> </i>`
 autor.innerHTML = quotes[i].author
}

function color(i){
      body.style.backgroundColor = quotes[i].color ;
      boton.style.backgroundColor = quotes[i].color
      enlace1.style.backgroundColor = quotes[i].color
      enlace2.style.backgroundColor = quotes[i].color
      card.style.color = quotes[i].color ;
}


    




