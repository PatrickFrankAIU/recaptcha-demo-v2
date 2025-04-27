// Get DOM elements
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('demo-form');
    const resultDiv = document.getElementById('result');
    const captchaError = document.getElementById('captcha-error');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get the reCAPTCHA response
        const recaptchaResponse = grecaptcha.getResponse();
        
        if (!recaptchaResponse) {
            // Show error if CAPTCHA not completed
            captchaError.textContent = 'Please complete the CAPTCHA verification';
            return;
        }
        
        captchaError.textContent = '';
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        // In a real application, you would send this data to your server
        // For this demo, we'll just display the result
        resultDiv.innerHTML = `
            <h3>Form Submission Successful</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>reCAPTCHA Token:</strong> ${recaptchaResponse.substring(0, 20)}...</p>
            <p class="note">In a real application, this token would be verified on the server side.</p>
        `;
        
        // Reset the form and reCAPTCHA
        form.reset();
        grecaptcha.reset();
    });
});