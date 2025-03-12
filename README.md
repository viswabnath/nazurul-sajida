# Wedding Website - Nazurul & Sajida

## Overview
This is a beautifully crafted wedding website for Nazurul and Sajida, featuring:
- A **countdown timer** to the wedding and reception
- An **event timeline** with key milestones
- A **visitor counter** using Firebase Realtime Database
- A **journey counter** tracking their days before meeting each other
- A **responsive design** with animations, themed styling, and interactivity

---

## Features
### 🕒 Countdown Timer
- Displays time left until the wedding and reception.
- After the reception, it switches to an **anniversary counter**.

### 🎉 Event Timeline
- Shows the couple’s key life events.
- **Automatically updates** based on the current date.
- After the reception, **hides completed events**.

### 📊 Journey Counter
- Displays how many days each of them lived **before meeting each other**.
- Fun, crazy calculations like **Mondays survived**, **SQL queries written**, and **steps to the moon**.

### 👀 Visitor Counter (Firebase)
- Increments and displays the number of visitors.
- Uses **Firebase Realtime Database**.
- Updates dynamically when a new visitor arrives.

### 🌎 Responsive & Animated Design
- **Mobile-friendly**, optimized animations.
- Custom background effects like **stars, waves, and particles**.
- Smooth hover effects and transitions.

---

## Setup & Deployment
### 1️⃣ Firebase Setup (Visitor Counter)
1. Go to **[Firebase Console](https://console.firebase.google.com/)**.
2. Create a new Firebase project.
3. Enable **Realtime Database** and set rules temporarily to:
   ```json
   {
     "rules": {
       ".read": true,
       ".write": true
     }
   }
   ```
   *(Secure later by allowing only authenticated updates!)*
4. Copy your Firebase `apiKey`, `databaseURL`, and other config details.
5. Replace the config in `script.js`:
   ```js
   const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_PROJECT.firebaseapp.com",
       databaseURL: "https://YOUR_PROJECT.firebaseio.com",
       projectId: "YOUR_PROJECT",
       storageBucket: "YOUR_PROJECT.appspot.com",
       messagingSenderId: "YOUR_MESSAGING_ID",
       appId: "YOUR_APP_ID"
   };
   ```

### 2️⃣ Running Locally
- Open `index.html` in a browser.
- Ensure you have an **active internet connection** (Firebase needs it!).
- If the visitor counter doesn’t update, check:
  - Firebase rules
  - Database URL in `script.js`
  - Console errors in Developer Tools (F12 → Console)

### 3️⃣ Deploying Online
- **Option 1:** GitHub Pages
- **Option 2:** Netlify
- **Option 3:** Firebase Hosting

---

## Code Highlights
### Visitor Counter Fix
```js
function updateVisitorCount() {
    visitorCountRef.transaction((currentCount) => {
        return (currentCount || 0) + 1;
    }).catch((error) => {
        console.error("Visitor count update failed:", error);
    });
}
```

### Journey Counter Logic
```js
const fatedMeetingDate = new Date("January 19, 2025").getTime();
const nazurulDays = Math.floor((fatedMeetingDate - nazurulBirthDate) / (1000 * 60 * 60 * 24));
const sajidaDays = Math.floor((fatedMeetingDate - sajidaBirthDate) / (1000 * 60 * 60 * 24));
document.getElementById("Nazurul-journey-days").textContent = nazurulDays;
document.getElementById("sajida-journey-days").textContent = sajidaDays;
```

---

## Known Issues & Fixes
| Issue | Possible Fix |
|--------|------------|
| **Visitor counter not updating** | Check Firebase rules & database URL |
| **Countdown stuck** | Ensure `setInterval(handleEvents, 1000);` is running |
| **Mobile animations too heavy** | Reduce particle count in `script.js` |

---

## Credits
💖 Developed with love for **Nazurul & Sajida** ✨
Designed & coded by **Viswanath** 🚀

