
// Ensure that the DOM is fully loaded before accessing the form elements
document.addEventListener('DOMContentLoaded', function () {

    // Access the contact form
    const contactForm = document.getElementById('contactForm');
  
    // Add a submit event listener to the form
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting normally
  
      // Get the user input values
      const contactName = document.getElementById('contactName').value;
      const contactEmail = document.getElementById('contactEmail').value;
      const contactSubject = document.getElementById('contactSubject').value;
      const contactMessage = document.getElementById('contactMessage').value;
  
      // Create the email parameters
      const emailParams = {
        from_name: contactName,
        from_email: contactEmail,
        subject: contactSubject,
        message: contactMessage
      };
      
      //id code
      const userID = "t0syssk0DGzzK_Por";
      const serviceID = "service_obqcbol";
      const templateID = "template_22ktw38";
  
      // Send the email using email.js
      emailjs.send(serviceID, templateID, emailParams)
        .then(function () {
          // Display success message
          const successMessage = document.querySelector('.message-success');
          successMessage.style.display = 'block';
  
          // Reset the form
          contactForm.reset();
        }, function (error) {
          // Display error message
          const errorMessage = document.querySelector('.message-warning');
          errorMessage.style.display = 'block';
          console.error('Error sending email:', error);
        });
    });
  
    // Initialize email.js with your public key
  //  emailjs.init('t0syssk0DGzzK_Por');
  });