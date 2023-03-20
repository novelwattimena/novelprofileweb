// navbar
const nav = document.getElementById('home');

window.addEventListener('scroll', function () {
    scrollposition = window.scrollY;

    if (scrollposition >= 60) {
        nav.classList.add('navbar');
    } else if (this.scrollposition <= 60) {
        nav.classList.remove('navbar')
    }
})
// end nvabar


// menu masuk
const webnovel = document.querySelector('index.html');

let nama = localStorage.getItem('nama');

if (!nama) {
    alert('Hello whats your name?')
    nama = prompt('Enter your name: ');
    localStorage.setItem('nama', nama);
    webnovel.textContent = alert(`Hello ${nama} welcome to my web!`);
}
webnovel.innerHTML = alert(`Hi ${nama} welcome back to my web!`);
// end masuk
