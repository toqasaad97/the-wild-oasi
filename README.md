# The Wild Oasis-NextApp

## Project Overview
**The Wild Oasis-NextApp** is a web application developed with **Next.js** and **React**. This platform serves as the public interface for **The Wild Oasis**, where potential guests can explore the hotel, browse cabin details, and make reservations. It seamlessly integrates with an internal application used by hotel staff to manage bookings, cabins, and guest information.

## Live Demo
Check out the live demo of the project here:  
[Live Demo Link](#)

## Key Features

### 1. Hotel Information:
- **About Page**: Detailed information about **The Wild Oasis** and its offerings.
- **Homepage**: Attractive visuals and essential details to captivate guests.

### 2. Cabin Exploration:
- **Cabin Overview**: A page that lists all available cabins with basic details.
- **Individual Cabin Pages**: Detailed pages for each cabin showcasing amenities, availability, and pricing.
- **Cabin Filtering**: Users can filter cabins by **maximum guest capacity** to find the best match for their needs.

### 3. Reservation System:
- **Interactive Booking**: Each cabin page includes a booking system to check availability.
- **Date Range Selection**: Guests can select their desired dates with real-time availability updates.
- **Unconfirmed Bookings**: Initial bookings are set as 'unconfirmed', with payments made at the property.

### 4. User Accounts:
- **User Authentication**: Register and sign in with a **Google account** for quick access.
- **Profile Management**: Users can create and manage their personal profile.
- **Reservation History**: View and manage both past and future reservations.

### 5. Reservation Management:
- **Update or Cancel**: Users can view, update, or cancel their existing reservations.
- **Reservation History**: Access a detailed list of all bookings made by the user.

## Tech Stack ⚪
- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: React Context API
- **Backend & Database**: [Supabase](https://supabase.io/)
- **Authentication**: [auth.js](https://authjs.dev/)
- **Additional Libraries**:
  - **Date-fns** for date manipulation
  - **React-Day-Picker** for date selection
  - **Hero-Icons** for iconography
  - **React-modern-drawer** for a modern sidebar

## Features ⚪
- **Guest Sign-in**: Users can sign in as guests using their **Google account**.
- **Cabin Filtering**: Filter cabins by **guest capacity** for better search results.
- **Reservation Management**: Reserve available cabin dates after logging in.
- **Profile Configuration**: Manage and update user profile information.
- **Reservation Editing**: View, edit, or delete previous reservations.
- **Secure Log-out**: Users can safely log out from the platform.

## Development Features ⚪
- **Next.js Server Actions**: Handling form submissions and data fetching using Next.js server actions.
- **Server-Client Data Flow**: Data passed as props between server and client.
- **NextAuth for Authentication**: Simplified authentication using **NextAuth.js**.
- **SEO Optimization**: Exporting metadata from pages to enhance SEO.
- **Responsive Design**: Styling with **Tailwind CSS** ensures a mobile-friendly layout.
- **React Suspense**: Prevents UI blocking by asynchronously loading components.
- **Dynamic Metadata**: Generating metadata for dynamic pages to improve SEO handling.
- **SSG with Static Params**: Static site generation (SSG) to improve page loading speed.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/toqasaad97/the-wild-oasi.git
    ```

2. Change to the project directory:
    ```bash
    cd the-wild-oasi
    ```

3. Install necessary dependencies:
    ```bash
    npm install
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```

