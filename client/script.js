import bot from './assets/bot.svg';
import user from './assets/user.svg';

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container'); 

let valoadInterval;

function loader(element) {
    element.textContent = '';

    loadInterval = setInterval(() => {
        element.textContainer += '.' ;

        if(element.textContainer === '....') {
            element.textContainer = '';
        }
    }, 300)
}

function typeText(element, text) {
    let index=0;

    let interval = setInterval(()=> {

        if(index < text.length) {
            element.innerHTML += text.chartAt(index);
            index++; 
        }
        else {
            clearInterval(interval);
        }
    }, 20)
}   

function generateUniqueId() {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);

    return `id-${timestamp}-${hexadecimalString}`;
}

function chatStripe (isAi, value , uniqueId) {
    return (
        `
        <div class="wrapper ${isAi && 'ai'}" >
           <div class="chat">
             <div className="profile">
               <img 
                src="${isAi ? bot : user}"    
                alt="${isAi ? 'bot' : 'user'}"
                />
            </div>
            <div class="message" id ${uniqueId} > ${value}</div> 
        </div>
        </div>    
         
        `
    )
}

const handleSubmit = async (e) => {
    e.preventDefault();


    const data = new FormData(form);

    // user's chatSTRIPE

     chatContainer.innerHTML += chatStripe(false, data.get('prompt '));

     form.reset(); 

    const uniqueId = generateUniqueId ();
    chatContainer.innerHTML += chatStripe (false ,data.get('prompt'));

    


} 