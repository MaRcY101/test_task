const modalWindow = document.querySelector('.modal'),
      modalClose = document.querySelector('.modal__closer'),
      modalInput = document.querySelector('.modal__input'),
      modalBtn = document.querySelector('.modal__opener');

function closeModal() {
    modalWindow.classList.add('hide');
    modalWindow.classList.remove('show');
    document.body.style.overflow = '';
}

function openModal() {
    modalWindow.classList.add('show');
    modalWindow.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}

modalBtn.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);

document.addEventListener('keydown', (ev) => {
    if (ev.code === "Escape" && modalWindow.classList.contains('show')) {
        closeModal();
    }
});

const forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        closeModal();
        alert(`Вы написали слово:${modalInput.value}`);
    })
});