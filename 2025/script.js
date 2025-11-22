function showSection(sectionId) {
  // Remove active class from all sections
  document.querySelectorAll('.content-section').forEach(section => {
      section.classList.remove('active');
  });

  // Add active class to the selected section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
      targetSection.classList.add('active');
  }

  // Remove active class from all nav links
  document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
  });

  // Add active class to the clicked nav link
  const activeLink = document.querySelector(`.nav-link[onclick="showSection('${sectionId}')"]`);
  if (activeLink) {
      activeLink.classList.add('active');
  }
}
// Get modal elements
const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const modalCaption = document.getElementById("modal-caption");
const modalClose = document.getElementById("modal-close");

// Add event listeners to images
const galleryItems = document.querySelectorAll(".gallery-item");
galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    modal.style.display = "block";
    modalImage.src = item.src;
    modalCaption.textContent = item.alt;
  });
});

// Close the modal when the close button is clicked
modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close the modal when clicking outside the modal image
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


// Show the popup when the page loads
window.onload = function() {
  document.getElementById('popup').style.display = 'flex';
};
