const formOpenner = document.getElementById('contact-button-3'); // не надо
const formActive = document.getElementById('pop-up');
const form = document.getElementById('footer-form');
const submit = document.getElementById('sendButton');
const name = document.getElementById('footer-name')
const phone = document.getElementById('footer-number')
const mail = document.getElementById('footer-email')
const message = document.getElementById('footer-message')

const formStorage = [[name, 'name'], [phone, 'phone'], [mail, 'mail'], [message, 'message']];


function closeFormActive() {
    formActive.style.display = 'none';
    formOpenner.style.display = 'block';
    history.back();
}

async function send(user) {
    try {
        let response = await fetch('https://api.slapform.com/hVxIby88wK', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        });

        let result = await response.json();
        alert('Успешно отправлен');
    } catch (e) {
        alert('Отправка не удалась')
        console.log(e);
    }

}

function clear(arr) {
    arr.forEach(el => {
        localStorage.setItem(el[1], "");
        el[0].value = "";
    });
}

formOpenner.addEventListener('click', () => {
    formActive.style.display = 'flex';
    formOpenner.style.display = 'none';
    history.pushState({form: 'form'}, 'Title', '?form.html');
})

formActive.addEventListener('click', (e) => {
    closeFormActive();
    e.preventDefault();
})

window.addEventListener('popstate', closeFormActive);

form.addEventListener('click', (e) => {
    e.stopPropagation();
})

formStorage.forEach((e) => {
    e[0].value = localStorage.getItem(e[1]);
    e[0].addEventListener('change', () => {
        localStorage.setItem(e[1], e[0].value);
    });
});



submit.addEventListener('click', async (e) => {
    e.preventDefault();
    closeFormActive();
    const user = {
        name: name.value,
        phone: phone.value,
        mail: mail.value,
        message: message.value
    }
    clear(formStorage);
    console.log(user)
    await send(user);
})