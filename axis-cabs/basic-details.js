// Load the header content from header.html
fetch('../../../header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('headerContainer').innerHTML = data;
        // Attach event listener to burgerMenu after header is loaded
        document.getElementById('burgerMenu').addEventListener('click', toggleMenu);
    })
    .catch(error => console.error('Error loading header:', error));

// Clear the booking data from localStorage
localStorage.removeItem('bookingData');

// Load the footer content from footer.html
fetch('../../../footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footerContainer').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));