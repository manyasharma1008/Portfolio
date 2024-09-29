document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        // Simple form validation
        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        const message = form.elements['message'].value;

        if (name && email && message) {
            responseMessage.textContent = 'Thank you for reaching out, ' + name + '! Your message has been sent.';
            responseMessage.style.color = '#4caf50'; // Green for success
            form.reset(); // Reset form fields
        } else {
            responseMessage.textContent = 'Please fill in all fields.';
            responseMessage.style.color = '#f44336'; // Red for error
        }
    });
});

