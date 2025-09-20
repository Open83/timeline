const viewBtn = document.getElementById("viewBtn");
const dateInput = document.getElementById("dateInput");
const errorMsg = document.getElementById("errorMsg");

const inputSection = document.getElementById("input-section");
const memorySection = document.getElementById("memory-section");
const memoryIcon = document.getElementById("memoryIcon");
const memoryText = document.getElementById("memoryText");

const galleryBtn = document.getElementById("galleryBtn");
const backBtn = document.getElementById("backBtn");

const galleryModal = document.getElementById("galleryModal");
const galleryImage = document.getElementById("galleryImage");
const closeBtn = document.querySelector(".close-btn");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

const heartsContainer = document.getElementById("hearts-container");

// Dummy Memories
const memories = {
  "31-03-2025": { icon: "Eid-Ul-Fitr🌹💖", text: "Your Eid message here...", images:["images/img11.jpeg","images/img12.jpeg","images/img13.jpeg"] },
  "22-06-2025": { icon: "Snow World❄️", text:"Snow world story...", images:["images/img8.jpeg","images/img9.jpeg","images/img10.jpeg"] },
  "23-01-2025": { icon: "Ajmer🌹", text:"Ajmer trip story...", images:["images/img15.jpeg","images/img16.jpeg","images/img17.jpeg"] },
  "18-03-2025": { icon: "Iftar🌸", text:"Iftar story...", images:["images/img19.jpeg","images/img1.jpeg"] },
  "29-08-2023": { icon: "First Meet-up💖", text:"First meet-up story...", images:["images/img2.jpeg"] },
  "03-08-2025": { icon: "Manori💖", text:"Manori story...", images:["images/img3.jpeg","images/img4.jpeg","images/img5.jpeg"] }
};

let currentImages = [];
let currentIndex = 0;

// View button
viewBtn.addEventListener("click", () => {
  const date = dateInput.value.trim();
  if(memories[date]){
    errorMsg.textContent="";
    inputSection.style.opacity="0";
    setTimeout(()=>{
      inputSection.classList.add("hidden");
      memoryIcon.textContent = memories[date].icon;
      memoryText.textContent = memories[date].text;
      currentImages = memories[date].images;
      currentIndex = 0;
      memorySection.classList.remove("hidden");
      setTimeout(()=> memorySection.classList.add("active"),50);
    },500);
  } else {
    errorMsg.textContent = "You missed the date... 😤🎭";
  }
});

// Back button
backBtn.addEventListener("click", () => {
  memorySection.classList.remove("active");
  setTimeout(()=>{
    memorySection.classList.add("hidden");
    inputSection.classList.remove("hidden");
    inputSection.style.opacity="1";
  },500);
});

// Gallery
galleryBtn.addEventListener("click", ()=>{ galleryModal.style.display="flex"; showImage(currentIndex); });
closeBtn.addEventListener("click", ()=>{ galleryModal.style.display="none"; });
leftArrow.addEventListener("click", ()=>{ currentIndex=(currentIndex-1+currentImages.length)%currentImages.length; showImage(currentIndex); });
rightArrow.addEventListener("click", ()=>{ currentIndex=(currentIndex+1)%currentImages.length; showImage(currentIndex); });

// Show image with transition
function showImage(index){
  galleryImage.classList.remove("fade-in");
  galleryImage.classList.add("fade-out");
  setTimeout(()=>{
    galleryImage.src = currentImages[index];
    galleryImage.classList.remove("fade-out");
    galleryImage.classList.add("fade-in");
  },200);
}

// Hearts animation
function createHeart(){
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️"; // Add the heart emoji
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 12 + Math.random() * 18 + "px";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 500);


