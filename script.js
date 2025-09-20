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

// 🎯 Memory sequence
const memorySequence = [
  "29-08-2023", // First Meet-up
  "23-01-2025", // Ajmer
  "18-03-2025", // Iftar
  "31-03-2025", // Eid
  "22-06-2025", // Snow World
  "03-08-2025"  // Manori
];

// Memory data (unchanged)
const memories = {
  /* paste your previous memory object here */
};

let currentImages = [];
let currentIndex = 0;

// Get last viewed memory index from localStorage
let lastViewedIndex = localStorage.getItem("lastViewedIndex");
if(lastViewedIndex !== null){
  lastViewedIndex = parseInt(lastViewedIndex);
} else {
  lastViewedIndex = -1; // first-time user
}

// View button
viewBtn.addEventListener("click", () => {
  const date = dateInput.value.trim();
  const sequenceIndex = memorySequence.indexOf(date);

  if(sequenceIndex === -1){
    errorMsg.textContent = "No memory found for this date!";
    return;
  }

  // First-time user must start with first memory
  if(lastViewedIndex === -1 && sequenceIndex !== 0){
    errorMsg.textContent = "Please start with the first memory! 🕒";
    return;
  }

  // Check sequential viewing
  if(sequenceIndex !== lastViewedIndex + 1){
    errorMsg.textContent = "Please view memories in sequence! 🕒";
    return;
  }

  // Valid sequence
  errorMsg.textContent = "";
  lastViewedIndex = sequenceIndex;
  localStorage.setItem("lastViewedIndex", lastViewedIndex);

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
