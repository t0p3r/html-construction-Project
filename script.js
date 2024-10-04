// Select all the navigation links
const navLinks = document.querySelectorAll(".navbar a");

// Iterate over each link and add an event listener for smooth scrolling note: temporary will be edited
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetSection = document.querySelector(link.getAttribute("href"));
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});



// create slider for container 

const sliderContainer = document.querySelector(".slider-container");
const sliderFrame = document.querySelector(".slider-frame");
const sliderContent = document.querySelector(".slider-content");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const images = ["purple_robo_brain.png", "brain_tree.png", "purple_colorful_brain.png"];
const titles = ["Concreate Pathway", "multipurpose building", "Drainage Canal"];
const descriptions = ["For this project we aimed to create a high-quality concrete pathway solution that would provide durability and aesthetic appeal while minimizing maintenance for businesses and individuals. To achieve this, we employed advanced construction techniques and high-grade materials, ensuring a strong, long-lasting pathway. Our design was tailored to specific needs, considering factors such as foot traffic, weather conditions, and drainage, allowing us to build pathways that were not only functional but also visually pleasingThe construction process included meticulous site preparation compacting the base and using reinforced concrete to ensure strength and resistance to wear and tear. The final product was a smooth, polished surface that could withstand heavy use while requiring minimal upkeep. Additionally, we incorporated decorative elements such as unique paving patterns and borders, allowing for a customizable design based on client preferences.",
  
  "For this project, we aimed to create a high-quality multipurpose building that would provide both functionality and aesthetic appeal while minimizing maintenance for businesses and individuals. To achieve this, we utilized modern construction techniques and top-grade materials, ensuring the building would be durable, versatile, and long-lasting. Our design was customized to accommodate various uses, considering factors such as occupancy load, environmental conditions, and energy efficiency, allowing us to deliver a building that was not only practical but also visually impressive. The construction process involved thorough site preparation, foundation work, and the use of reinforced concrete and steel to ensure structural integrity and resistance to environmental stress. The final product was a versatile space that could be used for a wide range of purposes, from office spaces to retail outlets or community centers, all while maintaining a low maintenance profile.",
  
  "For this project, we aimed to create a high-quality drainage canal solution that would provide efficient water management and flood prevention while ensuring durability and environmental sustainability. To achieve this, we employed advanced engineering techniques and high-grade materials, ensuring the canal would withstand heavy water flow and minimize maintenance. Our design was customized to address specific site needs, considering factors such as water volume, soil conditions, and surrounding infrastructure, allowing us to construct a canal that was both functional and aesthetically integrated into the environment. The construction process involved precise site preparation, excavation, and the use of reinforced concrete to ensure the canal’s strength and resistance to erosion. The canal was designed with proper slope and flow dynamics to handle both normal water flow and heavy rainfall efficiently. Additionally, we incorporated eco-friendly features.",
];

let currentImageIndex = 0;

arrowLeft.addEventListener("click", function() {
  currentImageIndex = (currentImageIndex + images.length - 1) % images.length;
  updateSlider();
});

arrowRight.addEventListener("click", function() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateSlider();
});

function updateSlider() {
  sliderFrame.querySelector("img").src = images[currentImageIndex];
  sliderContent.querySelector("h2").textContent = titles[currentImageIndex];
  sliderContent.querySelector("p").textContent = descriptions[currentImageIndex];
}

updateSlider();


$(document).ready(function() {
  $('#signup-form').submit(function(event) {
    event.preventDefault();

    var email = $('#email').val();
    var emailRegEx = /^\S+@\S+$/;

    if (!emailRegEx.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    

    var formData = $(this).serialize();

    $.ajax({
  type: 'POST',
  url: 'submit_form.php',
  data: formData,
  success: function(data) {
    console.log('Form submitted successfully');
    $('#signup-form').hide();
    $('#signup-success').show();

    // Create a Blob from the PDF data received from the server
    var pdfBlob = new Blob([data], { type: 'application/pdf' });

    // Create a URL for the PDF Blob
    var pdfUrl = URL.createObjectURL(pdfBlob);

    // Create a link element and set its href to the PDF URL
    var downloadLink = document.createElement('a');
    downloadLink.href = pdfUrl;
    downloadLink.download = "example-pdf.pdf";

    // note :Trigger the download 
    downloadLink.click();
  },
  error: function(data) {
    console.log('An error occurred while submitting the form');
  }
});

  });
});

