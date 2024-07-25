// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mock payment handling
const paymentForm = document.getElementById('payment-form');
const submitButton = document.getElementById('submit');
const paymentStatus = document.getElementById('payment-status');

paymentForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Simulate a payment process
    setTimeout(() => {
        // Simulate success or failure
        const success = Math.random() > 0.5; // Randomly choose success or failure
        if (success) {
            paymentStatus.textContent = 'Payment successful! (Mock)';
        } else {
            paymentStatus.textContent = 'Payment failed! (Mock)';
        }
    }, 1000); // Simulate a delay
});

// Example animations for form submission
const formElements = document.querySelectorAll('#contact-form input, #contact-form textarea');

formElements.forEach(element => {
    element.addEventListener('focus', function () {
        this.style.borderColor = '#4CAF50';
        this.style.transition = 'border-color 0.3s';
    });

    element.addEventListener('blur', function () {
        this.style.borderColor = '#ccc';
    });
});

// Responsive animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Example CSS for animations
const css = `
.fade-in {
    opacity: 0;
    transition: opacity 1s ease-in-out;
}
.fade-in.visible {
    opacity: 1;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = css;
document.head.appendChild(styleSheet);
