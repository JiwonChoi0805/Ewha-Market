function openModal(imageSrc, altText) {
    var modal = document.getElementById("myModal");
    var modalContent = document.querySelector(".modal-content");
    var modalImage = document.getElementById("modalImage");

    // Set the image source and alt text
    modalImage.src = imageSrc;
    modalImage.alt = altText;

    // Show the modal
    modal.style.display = "block";

    // Ensure the image is loaded before calculating dimensions
    modalImage.onload = function() {
        // Calculate the aspect ratio of the image
        var aspectRatio = modalImage.width / modalImage.height;

        // Set the maximum width and height of the image to fit inside the modal
        var maxWidth = modalContent.clientWidth * 0.9;
        var maxHeight = window.innerHeight * 0.8;

        // Calculate corresponding width and height based on aspect ratio
        var width = Math.min(maxWidth, maxHeight * aspectRatio);
        var height = width / aspectRatio;

        // Set the image dimensions
        modalImage.style.width = width + "px";
        modalImage.style.height = height + "px";
    };
    }

  function closeModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
  }

  // Close modal if clicked outside of the modal content
  window.onclick = function(event) {
      var modal = document.getElementById("myModal");
      if (event.target === modal) {
          closeModal();
      }
  };

  var btn = document.getElementById("likee")

   btn.addEventListener('click',function(){
          btn.classList.toggle('active')
  })