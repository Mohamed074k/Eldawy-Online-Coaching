document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Simply toggle the active class for the clicked item
        item.classList.toggle('active');
    });
});