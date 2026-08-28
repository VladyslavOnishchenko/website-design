function goToTop() {

    const button = document.getElementById('cta__button')

    if (!button) return;

    button.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    })
}
goToTop();