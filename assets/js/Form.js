// Get the loading spinner element
const spinner = document.getElementById('spinner');

window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;

    // Show the loading spinner
    spinner.style.display = 'block';

    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(response => {
      // Wait for response before redirecting
      setTimeout(() => {
        // Hide the loading spinner
        spinner.style.display = 'none';
        window.location.href = "thank-you.html";
      }, 2000); // Change 2000 to the desired wait time in milliseconds
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
});
