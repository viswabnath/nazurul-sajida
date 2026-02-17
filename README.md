

# 💍 Nazurul & Sajida's Epic Tech-Fantasy Wedding

> *"Where Stark Technologies Meets Westeros Wisdom"*

A visually stunning, interactive wedding website designed to celebrate the union of Nazurul and Sajida. This project blends a modern **Tech/Stark** aesthetic with **Fantasy/Game of Thrones** elements, featuring real-time data tracking, dynamic countdowns, and immersive animations.

---

## ✨ Key Features

### ⏳ Temporal Dynamics (Countdown & Timeline)

* **Smart Countdown:** Tracks days, hours, minutes, and seconds to the wedding. automatically switches to an **"Anniversary Timer"** (Time Since Union) once the event passes.
* **Dynamic Timeline:** Visualizes key life milestones. Automatically highlights the current stage of their journey and dims past events.

### 🚀 The Journey Calculator

* **Destiny Algorithm:** Calculates exactly how many days Nazurul and Sajida lived, breathed, and existed **before** their fated meeting.
* **Fun Stats:** Includes whimsical calculations like "Mondays Survived," "Coffee Consumed," and "SQL Queries Written."

### 👀 Live Visitor Tracking

* **Real-Time Analytics:** Integrated with **Firebase Realtime Database**.
* **Live Updates:** The visitor count updates instantly across all open devices whenever a new guest arrives, without requiring a page refresh.

### 🎨 Immersive UX/UI

* **Theme:** Dark mode with Royal Gold (`#d4af37`) and Neon Cyan (`#66fcf1`) accents.
* **Animations:**
* Floating Tech Particles (Canvas/CSS).
* Parallax Stars.
* Flying Dragon Animation.
* Smooth Scroll Reveal (`IntersectionObserver`).


* **Responsive:** Fully optimized for Mobile, Tablet, and Desktop.

---

## 🛠️ Tech Stack

| Layer | Technology | Usage |
| --- | --- | --- |
| **Frontend** | HTML5, CSS3 | Structure, Animations, Glassmorphism UI |
| **Logic** | Vanilla JavaScript (ES6+) | Countdowns, DOM Manipulation, Date Math |
| **Backend** | Firebase Realtime Database | Storing and syncing visitor counts |
| **Fonts** | Google Fonts | *Cinzel* (Headers), *Montserrat* (Body) |

---

## ⚙️ Setup & Configuration

### 1. Clone the Repository

```bash
git clone https://github.com/viswabnath/nazurul-sajida.git
cd nazurul-sajida

```

### 2. Firebase Setup (Crucial for Visitor Counter)

1. Go to the [Firebase Console]().
2. Create a project and enable **Realtime Database**.
3. **Security Rules:** Instead of leaving the database open, use these rules to allow *only* incrementing the counter (prevents data deletion/hacking):
```json
{
  "rules": {
    "visits": {
      ".read": true,
      ".write": "newData.val() === data.val() + 1 || (!data.exists() && newData.val() === 1)"
    }
  }
}

```


4. Copy your **Web App Configuration** (apiKey, projectId, etc.).
5. Open `index.html` (or `script.js` if separated) and update the config object:
```javascript
const firebaseConfig = {
    apiKey: "YOUR_ACTUAL_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    // ... other config lines
};

```



### 3. Customization

To adapt this for another couple, edit the following variables in the JavaScript section:

* **Birth Dates:** Update `nazurulBirthDate` and `sajidaBirthDate`.
* **Meeting Date:** Update `fatedMeetingDate` for the Journey calculation.
* **Wedding Date:** Update `weddingDate` for the main countdown.

---

## 🧩 Code Logic Highlights

### The Journey Calculation

We use simple math to calculate the "Days Before Meeting":

```javascript
const msPerDay = 1000 * 60 * 60 * 24;
const fatedMeeting = new Date("January 19, 2025").getTime();

// Calculate days alive before meeting
const groomJourney = Math.floor((fatedMeeting - groomBirth) / msPerDay);
const brideJourney = Math.floor((fatedMeeting - brideBirth) / msPerDay);

// Animate the numbers
animateCounter("groom-element-id", groomJourney);

```

### Transactional Visitor Count

We use a Firebase transaction to ensure accuracy even if two people visit at the exact same millisecond:

```javascript
const counterRef = firebase.database().ref('visits');
counterRef.transaction((currentVisits) => {
    return (currentVisits || 0) + 1;
});

```

---

## 🐛 Troubleshooting

| Issue | Solution |
| --- | --- |
| **Counter stays at "..." or 0** | Check your internet connection. Verify `firebaseConfig` keys are correct. Check Browser Console (F12) for CORS errors. |
| **Animations lag on mobile** | Reduce the particle count in the `script.js` loop (change `i < 50` to `i < 20`). |
| **Dates are wrong** | Ensure date strings are in `MM/DD/YYYY` format to avoid timezone confusion. |

---

## 💛 Credits & Attribution

**Project:** The Epic Union of Nazurul & Sajida
**Status:** 🚀 Deployed & Live

Designed, Developed & Crafted with ❤️ by **[OneMark]()**.

> *"From Binary to Bound Forever"*