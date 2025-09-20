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

const heartsContainer = document.getElementById("hearts");

// 🎯 Dummy Memories (Add your memories)
const memories = {
  "31-03-2025": {
    icon: "Eid-Ul-Fitr🌹💖",
    text: `Meri Jaan ♥️ ...`, // Truncated for brevity
    images: ["images/img11.jpeg","images/img12.jpeg","images/img13.jpeg"]
  },
  "22-06-2025": {
    icon: "Snow World❄️",
    text: `Meri Jaan ♥️ ...`,
    images: ["images/img8.jpeg","images/img9.jpeg","images/img10.jpeg"]
  }
  // Add remaining memories
};

let currentImages = [];
let currentIndex = 0;

// View button
viewBtn.addEventListener("click", () => {
  const date = dateInput.value.trim();
  if(memories[date]){
    errorMsg.textContent = "";
    inputSection.style.opacity = "0";
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
    inputSection.style.opacity = "1";
  },500);
});

// Gallery
galleryBtn.addEventListener("click", () => {
  galleryModal.style.display = "flex";
  showImage(currentIndex);
});
closeBtn.addEventListener("click", () => {
  galleryModal.style.display = "none";
});
leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  showImage(currentIndex);
});
rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  showImage(currentIndex);
});

// Image transition
function showImage(index){
  galleryImage.classList.remove("fade-in");
  galleryImage.classList.add("fade-out");
  setTimeout(()=>{
    galleryImage.src = currentImages[index];
    galleryImage.classList.remove("fade-out");
    galleryImage.classList.add("fade-in");
  },300);
}

// Floating hearts
function createHeart(){
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️💋💋";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = (Math.random() * 20 + 15) + "px";
  document.body.appendChild(heart);
  setTimeout(()=> heart.remove(),6000);
}
setInterval(createHeart,2000);
