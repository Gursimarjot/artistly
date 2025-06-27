# 🎭 Artistly – Performing Artist Booking Platform

Artistly is a fictional performing artist booking platform built as part of a frontend developer project. The app allows event planners to browse and filter artists, and artist managers to onboard artists and view submissions.

---

## 🔗 Live Preview

Deployed on **Vercel**  
🌐 [https://artistly-gursimarjot.vercel.app](https://artistly-gursimarjot.vercel.app)

---

## 🚀 Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Language**: JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Forms**: React Hook Form + Yup
- **State Management**: React Hooks (`useState`, `useEffect`, `useContext`)
- **Deployment**: Vercel

---

## 📁 Features & Pages

### 1️⃣ Homepage (`/`)
- Overview of Artistly
- Hero section + call-to-action
- 4 Artist categories: Singer, Dancer, DJ, Speaker
- Responsive layout

### 2️⃣ Artist Listing (`/artists`)
- Dynamic artist grid from JSON data
- Filter by:
  - Category
  - Location
  - Price Range
- Mobile-responsive (grid → list)
- Reusable Card and FilterBlock components

### 3️⃣ Artist Onboarding Form (`/onboard`)
- Form with validation:
  - Name
  - Bio
  - Category (multi-select)
  - Languages
  - Fee Range (dropdown)
  - Location
  - Optional profile image
- Form validation using Yup
- Submission prints data to console (mock API)

### 4️⃣ Manager Dashboard (`/dashboard`)
- Static list of submitted artists
- Table with Name, Category, City, Fee, Actions
- Reusable Table component

---

## 📦 Project Setup

```bash
# Install dependencies
npm install

# Run the app
npm run dev



artistly/
├── app/             # App Router pages
│   ├── layout.js
│   ├── page.js
│   ├── artists/
│   ├── onboard/
│   └── dashboard/
├── components/      # Reusable components (Card, Filters, FormFields, etc.)
├── data/            # Static JSON artist data
├── public/          # Static assets
└── styles/          # Tailwind config


🧠 Concepts Demonstrated
Component-based architecture

Controlled form inputs with validation

Filtering data from mock JSON

Responsive layouts with Tailwind

React hooks for logic and effects

Animations using Framer Motion


👤 Author
Gursimarjot Kaur
📧 gursimarjotkaur7@gmail.com
🔗 GitHub: @Gursimarjot

