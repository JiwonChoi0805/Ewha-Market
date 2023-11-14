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

      function count(type)  {
// 결과를 표시할 element
const resultElement = document.getElementById('result');


let number = resultElement.innerText;

// 더하기/빼기
if(type === 'plus500') 
  number = parseInt(number) + 500;
else if(type === 'plus1000') 
  number = parseInt(number) + 1000;
  else if(type === 'plus5000') 
  number = parseInt(number) + 5000;
  else if(type === 'minus500') 
  number = parseInt(number) - 500;
  else if(type === 'minus1000') 
  number = parseInt(number) - 1000;
  else if(type === 'minus5000') 
  number = parseInt(number) - 5000;

// 결과 출력
resultElement.innerText = number;
}