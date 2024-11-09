document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star');
    let selectedRating = 0;
    let ratings = [];
    
    stars.forEach(star => {
      star.addEventListener('click', function () {
        selectedRating = this.getAttribute('data-value');
        highlightStars(selectedRating);
      });
    });
  
    function highlightStars(rating) {
      stars.forEach(star => {
        if (star.getAttribute('data-value') <= rating) {
          star.style.color = 'gold';
        } else {
          star.style.color = 'gray';
        }
      });
    }
  
    const submitButton = document.getElementById('submit-comment');
    const commentBox = document.getElementById('user-comment');
    const avgRatingDisplay = document.getElementById('avg-rating');
  
    submitButton.addEventListener('click', function () {
      const comment = commentBox.value.trim();
  
      if (selectedRating > 0) {
        ratings.push(parseInt(selectedRating));
        updateAverageRating();
      } else {
        alert('Please select a star rating before submitting.');
        return;
      }
  
      if (comment) {
        console.log('User Comment:', comment);
        alert('Thank you for your feedback! Your rating and comment have been submitted.');
        commentBox.value = ''; 
      } else {
        alert('Please enter a comment.');
      }
    });
  
    function updateAverageRating() {
      const totalRating = ratings.reduce((acc, rating) => acc + rating, 0);
      const avgRating = (totalRating / ratings.length).toFixed(1); 
      avgRatingDisplay.textContent = avgRating; 
    }
  });
  

const readMoreBtn = document.getElementById('read-more');
const additionalContent = document.getElementById('additional-content');

readMoreBtn.addEventListener('click', () => {
if (additionalContent.style.display === 'block') {
    additionalContent.style.display = 'none'; 
    readMoreBtn.textContent = 'Read More'; 
} else {
    additionalContent.style.display = 'block'; 
    readMoreBtn.textContent = 'Read Less'; 
}
});