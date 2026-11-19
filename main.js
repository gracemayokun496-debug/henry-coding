const image = document.querySelectorAll('.picture-gallery img');
const body = document.querySelector('body');


image.forEach(e => {
    e.addEventListener('click', () => {
        e.classList.toggle('enlarged');
        body.classList.toggle('no-scroll');
        // body.style.overflow = body.classList.contains('no-scroll') ? 'hidden' : 'auto';
        // body.classList.toggle('blurred', e.classList.contains('enlarged'));
    });
});