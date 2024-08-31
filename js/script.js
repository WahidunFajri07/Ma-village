// Toggle class active
const navbarnav = document.querySelector('.navbarnav');
// transisi ketika icon menu di klick.
document.querySelector('#menu'). onclick = () => {
    navbarnav.classList.toggle('active');
}

// click diluar sidebar/selain icon menu . bar menu akan otomatis tutup
const menu = document.querySelector('#menu');
document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }
})