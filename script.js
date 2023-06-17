// navbar kedua
const nav = document.getElementById('home');
// link
const myElement = document.getElementById('my-element');
// kode kedua
const webnovel = document.querySelector('#welcome-message');



//navbar
let scrollposition = 0;

window.addEventListener('scroll', function () {
    scrollposition = window.scrollY;

    if (scrollposition >= 60) {
        nav.classList.add('navbar');
    } else if (scrollposition <= 60) {
        nav.classList.remove('navbar');
    }
});



// link
myElement.addEventListener('click', () => {
  window.location.href = 'https://question.novelthadeus.repl.co';
});



// kode kedua
let nama = localStorage.getItem('nama');
const usernameRegex = /^[aA-zZ ]{9,}$/; // regex untuk username dengan minimal 5 karakter

while (!nama || nama.trim() === '' || !usernameRegex.test(nama.trim())) {
  const confirmed = confirm('Do you want to enter your name? 😁');

  if (!confirmed) {
    window.location.href = 'about:blank'; // keluar dari halaman
    break;
  }

  nama = prompt('Hello, what is your username? ✋');

  if (nama === null || nama.trim() === '' || !usernameRegex.test(nama.trim())) {
    alert('You need to provide a valid username to use this site. Please make sure your username contains at least 5 characters and consists of only letters, and underscores. 🙏');
  } else {
    localStorage.setItem('nama', nama);
    webnovel.innerHTML = alert(`Hello ${nama}, welcome to my web! 😍`);
    window.location.href = 'index.html'; // masuk ke dalam halaman
  }
}

if (nama && nama.trim() !== '') {
  webnovel.innerHTML = alert(`Hi ${nama}, welcome back to my web! 😊`);
}
// akhir kode