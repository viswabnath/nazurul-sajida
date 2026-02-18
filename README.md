
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
| **Fonts** | Google Fonts | *Cinzel* (Headers), *Montserrat* (Body) |

---

## ⚙️ Setup & Configuration

### 1. Clone the Repository

```bash
git clone [https://github.com/viswabnath/nazurul-sajida.git](https://github.com/viswabnath/nazurul-sajida.git)
cd nazurul-sajida

```

### 2. Customization

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
---

## 🐛 Troubleshooting

| Issue | Solution |
| --- | --- |
| **Animations lag on mobile** | Reduce the particle count in the `script.js` loop (change `i < 50` to `i < 20`). |
| **Dates are wrong** | Ensure date strings are in `MM/DD/YYYY` format to avoid timezone confusion. |

---


[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Site-66fcf1?style=for-the-badge&logo=github&logoColor=black)](https://nazurul-sajida.netlify.app)


## 💛 Credits 

> *"From Binary to Bound Forever"*

Designed with ❤️  for #HouseNazurulAndSajida by **[OneMark](https://www.google.com/search?q=)**.



