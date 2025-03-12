// Optimize background animations for mobile
function optimizeForMobile() {
  const isMobile = window.innerWidth <= 768;
  
  // Adjust star creation for mobile
  function createStars() {
      const starsContainer = document.querySelector('.stars');
      if (!starsContainer) return;
      
      // Clear existing stars
      starsContainer.innerHTML = '';
      
      // Create fewer stars on mobile
      const starCount = isMobile ? 30 : 100;
      
      for (let i = 0; i < starCount; i++) {
          const star = document.createElement('div');
          star.className = 'star';
          star.style.top = `${Math.random() * 100}%`;
          star.style.left = `${Math.random() * 100}%`;
          
          // Ensure stars are visible but not too bright
          star.style.width = `${Math.random() * 2 + 1}px`;
          star.style.height = star.style.width;
          
          // Reduce animation on mobile
          if (isMobile) {
              star.style.animation = 'none';
              star.style.opacity = '0.5';
          } else {
              star.style.animationDelay = `${Math.random() * 5}s`;
          }
          
          starsContainer.appendChild(star);
      }
  }
  
  // Adjust particle creation for mobile
  function createParticles() {
      const particlesContainer = document.getElementById('particles');
      if (!particlesContainer) return;
      
      // Clear existing particles
      particlesContainer.innerHTML = '';
      
      // Create fewer particles on mobile
      const particleCount = isMobile ? 15 : 50;
      
      for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle';
          particle.style.top = `${Math.random() * 100}%`;
          particle.style.left = `${Math.random() * 100}%`;
          
          // Reduce animation on mobile
          if (isMobile) {
              particle.style.animation = 'none';
              particle.style.opacity = '0.3';
          } else {
              particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
              particle.style.animationDelay = `${Math.random() * 5}s`;
          }
          
          particlesContainer.appendChild(particle);
      }
  }
  
  // Call optimized functions
  createStars();
  createParticles();
  
  // Disable dragon animation on mobile
  const dragonFly = document.querySelector('.dragon-fly');
  if (dragonFly) {
      dragonFly.style.display = isMobile ? 'none' : 'block';
  }
  
  // Fix animations for mobile
  if (isMobile) {
      // Remove fade-in animations on mobile
      document.querySelectorAll('.fade-in').forEach(el => {
          el.style.opacity = '1';
          el.style.animation = 'none';
      });
      
      // Disable typing animation on mobile
      const techLine = document.querySelector('.tech-line');
      if (techLine) {
          techLine.style.animation = 'none';
          techLine.style.borderRight = 'none';
          techLine.style.width = '100%';
      }
  }
}

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2yDdpK2ZV_npTAIf9hslHcUAbNzWa80Q",
  authDomain: "nazurul-sajida-wc.firebaseapp.com",
  databaseURL: "https://nazurul-sajida-wc-default-rtdb.firebaseio.com",
  projectId: "nazurul-sajida-wc",
  storageBucket: "nazurul-sajida-wc.firebasestorage.app",
  messagingSenderId: "669024462281",
  appId: "1:669024462281:web:c24938ec420bd4c9167418",
  measurementId: "G-03FBY54Y0L"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const visitorCountRef = database.ref('visitorCount');

// Update visitor count
function updateVisitorCount() {
  visitorCountRef.transaction((currentCount) => {
      if (currentCount === null) {
          return 1;  // First visitor
      } else {
          return currentCount + 1; // Increment
      }
  }).catch((error) => {
      console.error("Visitor count update failed:", error);
  });
}


// Display visitor count
function displayVisitorCount() {
  visitorCountRef.on('value', (snapshot) => {
      if (snapshot.exists()) {
          document.getElementById('visitor-count').textContent = snapshot.val();
      } else {
          console.log("No visitor data found.");
          document.getElementById('visitor-count').textContent = "0";
      }
  }, (error) => {
      console.error("Error fetching visitor count:", error);
  });
}

// Create stars for background
function createStars() {
  const starsContainer = document.querySelector('.stars');
  if (!starsContainer) return;
  
  for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      starsContainer.appendChild(star);
  }
}

// Create tech particles
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  if (!particlesContainer) return;
  
  for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particlesContainer.appendChild(particle);
  }
}

// Handle events based on date
function handleEvents() {
  const now = new Date().getTime();
  const weddingDate = new Date("June 15, 2025 10:00:00").getTime();
  const receptionDate = new Date("June 17, 2025 10:00:00").getTime();
  
  const countdownSection = document.querySelector('.countdown-section');
  const eventsSection = document.querySelector('.events-section');
  const countdownTitle = document.querySelector('.countdown-title');
  const countdownMessage = document.querySelector('.countdown-message');
  
  // Update timeline items based on date
  updateTimelineItems(now, weddingDate, receptionDate);
  
  if (now < weddingDate) {
      // Before wedding - Show wedding countdown
      countdownTitle.textContent = "Countdown to the Grand Union";
      countdownMessage.textContent = "\"And so their watch begins. The wedding shall unite two powerful houses in a bond stronger than Valyrian steel and more enduring than Stark honor. All loyal subjects are commanded to attend.\"";
      updateCountdown(weddingDate);
  } else if (now < receptionDate) {
      // After wedding, before reception - Show reception countdown
      countdownTitle.textContent = "Countdown to the Royal Reception";
      countdownMessage.textContent = "\"The union is complete! Join us as we celebrate the merging of two great houses with a feast worthy of kings and queens.\"";
      const firstEventCard = eventsSection.querySelector('.event-card:first-child');
      if (firstEventCard) firstEventCard.style.opacity = "0.5";
      updateCountdown(receptionDate);
 // Inside your handleEvents function, replace the "else" part (after reception date) with this code:
} else {
  if (eventsSection) eventsSection.style.display = "none";
  // After reception - Show anniversary counter using the existing countdown section
  countdownTitle.textContent = "Celebrating Our Journey Together";
  
  // Calculate time passed since wedding
  const distance = now - weddingDate;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Update the existing countdown display elements
  document.getElementById("countdown-days").textContent = days;
  document.getElementById("countdown-hours").textContent = hours;
  document.getElementById("countdown-minutes").textContent = minutes;
  document.getElementById("countdown-seconds").textContent = seconds;
  
  // Update the message
  countdownMessage.textContent = "\"Nazurul and Sajida would like to express their deepest gratitude to all who joined in celebrating their union. Your presence and well-wishes have made this journey all the more special. What is built with love will last forever. As we embark on this new chapter together, we carry your blessings with us. Our story continues, and we're grateful to have you as part of it.\"";
  
  // Update styles if needed
  if (eventsSection) eventsSection.style.opacity = "0.5";
  
  // Update the story section
  const storySection = document.querySelector('.story-section');
  if (storySection) {
      storySection.innerHTML = `
         <h2 class="thank-you-title">A Heartfelt Thank You for Celebrating With Us!</h2>
<div class="story-content">
    <p class="opening-message">
        With hearts full of gratitude, Nazurul and Sajida extend their sincerest thanks to all who graced their union with your love, presence, and blessings. Your participation has turned this celebration into a cherished memory that will last through the ages.
    </p>
    <p class="quote-block">
        "When love becomes the foundation, life transforms into a tapestry of eternal joy and togetherness."
    </p>
    <p class="spiritual-note">
        As we step into this divine journey of unity, we are deeply moved by the blessings bestowed upon us. Each smile, each prayer, and each good wish has become a sacred thread woven into the fabric of our bond. 
    </p>
    <p class="closing-note">
        Together, as husband and wife, we carry your warmth and blessings with us, anchoring us in strength and love as we navigate this new chapter of life. Our story, now intertwined, continues with your blessings in our hearts.
    </p>
    <p class="gratitude-message">
        May love, peace, and joy always surround you as they surround us on this special journey.
    </p>
</div>

      `;
  }
}
}

// No need for updateAnniversaryCounter function as we're using the existing countdown section

// Update timeline items based on date
function updateTimelineItems(now, weddingDate, receptionDate) {
  // Get all timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  timelineItems.forEach(item => {
      const dateText = item.querySelector('.timeline-date')?.textContent;
      const titleText = item.querySelector('.timeline-title')?.textContent;
      if (!dateText) return;
      
      // Special handling for wedding and reception events
      if (titleText && titleText.includes("Wedding Day")) {
          if (now >= weddingDate) {
              // Wedding has happened - show it
              item.classList.remove('future-event');
              item.classList.add('past-event');
              item.style.display = 'block';
          } else {
              // Wedding hasn't happened yet - hide it
              item.classList.remove('past-event');
              item.classList.add('future-event');
              item.style.display = 'none';
          }
          return;
      }
      
      if (titleText && titleText.includes("Reception Day")) {
          if (now >= receptionDate) {
              // Reception has happened - show it
              item.classList.remove('future-event');
              item.classList.add('past-event');
              item.style.display = 'block';
          } else {
              // Reception hasn't happened yet - hide it
              item.classList.remove('past-event');
              item.classList.add('future-event');
              item.style.display = 'none';
          }
          return;
      }
      
      // For other timeline events, check their specific dates
      try {
          const itemDate = new Date(dateText).getTime();
          if (now >= itemDate) {
              item.classList.remove('future-event');
              item.classList.add('past-event');
              item.style.display = 'block';
          } else {
              item.classList.remove('past-event');
              item.classList.add('future-event');
              item.style.display = 'none';
          }
      } catch (e) {
          console.error("Error parsing date:", dateText);
      }
  });
}

// Update countdown timer
function updateCountdown(targetDate) {
  const now = new Date().getTime();
  const distance = targetDate - now;
  
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("countdown-days").textContent = days;
  document.getElementById("countdown-hours").textContent = hours;
  document.getElementById("countdown-minutes").textContent = minutes;
  document.getElementById("countdown-seconds").textContent = seconds;
}



// Calculate journey days
function calculateJourneyDays() {
  const nazurulBirthDate = new Date("September 7, 1995").getTime();
  const sajidaBirthDate = new Date("January 19, 1998").getTime();
  const now = new Date().getTime();
  
  const nazurulDays = Math.floor((now - nazurulBirthDate) / (1000 * 60 * 60 * 24));
  const sajidaDays = Math.floor((now - sajidaBirthDate) / (1000 * 60 * 60 * 24));
  const combinedDays = nazurulDays + sajidaDays;
  
  document.getElementById("Nazurul-journey-days").textContent = nazurulDays.toLocaleString();
  document.getElementById("sajida-journey-days").textContent = sajidaDays.toLocaleString();
  document.getElementById("combined-journey-days").textContent = combinedDays.toLocaleString();
}

// Initialize everything when the page loads
window.onload = function() {
  createStars();
  createParticles();
  updateVisitorCount();
  displayVisitorCount();
  calculateJourneyDays();
  
  // Initial event handling
  handleEvents();
  
  // Update countdown/anniversary counter every second
  setInterval(function() {
      handleEvents();
  }, 1000);
};