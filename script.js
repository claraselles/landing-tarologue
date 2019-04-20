// variables
let btnToContact = document.querySelector('#btn-to-contact')
let contactContainer = document.querySelector('#contact-section-container')

// events
btnToContact.addEventListener('click', (e) => {
    e.preventDefault;
    window.scrollTo({
        top: contactContainer.getBoundingClientRect().top,
        behavior: 'smooth',
    })
})