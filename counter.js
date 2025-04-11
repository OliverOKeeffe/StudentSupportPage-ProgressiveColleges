// Function to get and update the visitor count
function updateVisitorCount() {
    // Get the current count from localStorage
    let count = localStorage.getItem('visitorCount');

    // If count doesn't exist in localStorage, set it to 0
    if (!count) {
        count = 0;
    }

    // Increment the count by 1
    count++;

    // Store the updated count back in localStorage
    localStorage.setItem('visitorCount', count);

    // Display the count on the page
    document.getElementById('visitor-count').textContent = count;
}

// Wait for the page to load and execute the function
window.onload = function() {
    updateVisitorCount();

    // Reset button functionality
    document.getElementById('reset-visitor-count').addEventListener('click', function() {
        // Remove the visitor count from localStorage
        localStorage.removeItem('visitorCount');
        
        // Reset the visitor count on the page
        document.getElementById('visitor-count').innerText = '0';
    });
};
