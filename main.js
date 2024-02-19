   // Function to open the modal with the clicked link
   document.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal-link')) {
        openModal(event.target.getAttribute('href'));
        event.preventDefault(); // Prevent the default link behavior
    }
});

// Function to open the modal with a specified URL
function openModal(videoUrl) {
    var modalContainer = document.getElementById('modal-container');
    var modalContent = document.getElementById('modal-content');
    var iframe = modalContent.querySelector('iframe');

    iframe.src = videoUrl;
    modalContainer.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    var modalContainer = document.getElementById('modal-container');
    var iframe = document.getElementById('modal-content').querySelector('iframe');

    modalContainer.style.display = 'none';
    // Pause the video when the modal is closed
    iframe.src = '';
}

// Close the modal if the overlay is clicked
window.onclick = function(event) {
    var modalContainer = document.getElementById('modal-container');
    if (event.target === modalContainer) {
        closeModal();
    }
};
