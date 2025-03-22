// Initialize FAQ data
const faqData = [
    {
        question: 'How long does it take to see results?',
        answer: 'Results vary by individual, but most clients see noticeable changes within 4-8 weeks when following our program consistently.'
    },
    {
        question: 'Do I need gym access?',
        answer: 'While gym access is ideal, we can create custom programs for home workouts using minimal equipment.'
    },
    {
        question: "What's included in the nutrition plan?",
        answer: 'Our nutrition plans include daily calorie targets, macro breakdowns, meal timing, and sample meal plans tailored to your goals.'
    },
    {
        question: 'How often will I receive updates to my program?',
        answer: 'Programs are reviewed and updated monthly based on your progress and feedback.'
    }
];

// Populate FAQ section
const faqList = document.querySelector('.faq-list');
faqData.forEach(item => {
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';
    faqItem.innerHTML = `
        <div class="faq-question">
            <h3>${item.question}</h3>
            <span class="icon"></span>
        </div>
        <div class="faq-answer">
            <p>${item.answer}</p>
        </div>
    `;
    faqList.appendChild(faqItem);
});

// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


