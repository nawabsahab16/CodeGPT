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

