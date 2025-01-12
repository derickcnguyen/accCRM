# Acc-CRM: Neo-Brutalist Contact Management System

## Overview
Acc-CRM is a modern, neo-brutalist styled Customer Relationship Management (CRM) system that helps users manage their business contacts effectively. Built with **React**, **TypeScript**, **Tailwind CSS**, and **Supabase**, Acc-CRM offers a unique and engaging interface for managing professional relationships. The app features a distinctive neo-brutalist design language while maintaining professional functionality.

### Resources and Technologies Used:
- **Technologies:**
  - **ReactJS** with **TypeScript**
  - **Tailwind CSS**
  - **Supabase** (Backend for database and authentication)
  - **Zustand** (State management)
  - **Lucide React** (Icons)

- **Supabase Docs:** [Supabase Docs](https://supabase.com/docs)
- **Tailwind CSS Docs:** [Tailwind CSS Docs](https://tailwindcss.com/docs)
- **ReactJS Docs:** [ReactJS Docs](https://reactjs.org/docs/getting-started.html)

## App Description
Acc-CRM is designed to help professionals manage their business contacts efficiently. With its distinctive neo-brutalist design, it stands out from traditional CRM systems while maintaining full functionality. The app uses **Supabase** for secure data storage and authentication, ensuring your contact information is safe and accessible.

### Key Features:
- **Contact Management:** Create, update, and organize your business contacts with detailed information.
- **Status Tracking:** Track contact status (Lead, Customer, Archived) to manage your sales pipeline effectively.
- **Notes System:** Add and update notes for each contact to keep track of important information and interactions.
- **Last Contact Tracking:** Monitor when you last contacted each person to maintain regular communication.
- **Secure Authentication:** Users can sign up and log in securely via **Supabase Authentication**.
- **Responsive Design:** Fully responsive interface that works seamlessly on both mobile and desktop devices.
- **Sort Functionality:** Sort contacts by last contacted date to prioritize follow-ups.
- **Neo-Brutalist UI:** Unique design language that makes the app stand out while maintaining usability.

The application leverages **ReactJS** and **TypeScript** for a robust and type-safe development experience. The UI is crafted using **Tailwind CSS**, enabling rapid styling while maintaining the neo-brutalist aesthetic. **Supabase** handles the backend, providing authentication and real-time data storage.

## Technical Features
- **Type Safety:** Full TypeScript implementation for robust type checking and better development experience.
- **State Management:** Efficient state management using Zustand for predictable data flow.
- **Row Level Security:** Implemented in Supabase to ensure data privacy and security.
- **Real-time Updates:** Contact information updates in real-time across all devices.
- **Error Boundaries:** Graceful error handling throughout the application.
- **Responsive Components:** All components are fully responsive and mobile-friendly.

## Getting Started

To get started with Acc-CRM, follow these steps:

### Prerequisites:
- **Node.js** and **npm** (or **yarn**)
- A **Supabase** account for backend services

### Installation:
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd acc-crm
   ```

2. Create a `.env` file in the root directory with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Potential Future Upgrades
- **Advanced Search:** Implement full-text search across all contact fields.
- **Email Integration:** Add direct email functionality within the app.
- **Calendar Integration:** Sync with calendar apps for scheduling follow-ups.
- **Task Management:** Add task creation and tracking for each contact.
- **Data Import/Export:** Allow importing and exporting contacts in various formats.
- **Custom Fields:** Enable users to add custom fields to contacts.
- **Analytics Dashboard:** Add insights about contact interactions and conversion rates.
- **Bulk Operations:** Implement bulk edit and delete functionality.
- **Teams Support:** Add team collaboration features for shared contact management.
