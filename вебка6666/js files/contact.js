document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault(); 
      
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
      };
      
      try {
        const response = await fetch('http://localhost:3000/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
  
        if (response.ok) {
          alert('Message sent successfully!'); 
          contactForm.reset(); 
        } else {
          alert('Error sending message. Please try again later.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Network error. Please check your connection.');
      }
    });
  
    // Reset button functionality
    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', () => {
      contactForm.reset(); // Reset all form fields
    });
  });
  