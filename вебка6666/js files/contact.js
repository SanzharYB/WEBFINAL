document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');
  const resetButton = document.getElementById('reset-button');

  // Handle form submission
  contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      // Gather form data
      const formData = {
          name: document.getElementById('name').value.trim(),
          email: document.getElementById('email').value.trim(),
          message: document.getElementById('message').value.trim()
      };

      // Save to local storage
      let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      contacts.push(formData);
      localStorage.setItem('contacts', JSON.stringify(contacts));

      // Notify the user
      alert('Message saved successfully to local storage!');
      contactForm.reset(); // Clear form fields
  });

  // Handle reset button functionality
  resetButton.addEventListener('click', () => {
      contactForm.reset(); // Clear all form fields
  });
});
