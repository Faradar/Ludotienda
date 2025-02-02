# Ludotienda

> Ludotienda is a React Native e-commerce app for selling tabletop games.  
> 📌 **Note:** The app is in Spanish, but this README is in English for broader accessibility.

<!-- > Live demo [_TBD_](). -->

## Table of Contents

- [General Info](#general-info)
- [Technologies](#technologies)
- [Features](#features)
- [Screenshots](#screenshots)
- [Setup](#setup)
- [Usage](#usage)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## General Info

Ludotienda is a mobile e-commerce application that allows users to browse and purchase tabletop games easily.

- **Problem it solves:** Provides an easy way to display and sell tabletop games online.
- **Purpose:** To serve as an e-commerce solution for board game enthusiasts.
- **Inspiration:** This project was created as part of a React Native course at Coderhouse.

## Technologies

Ludotienda is built with:

- **React Native** (0.76.6)
- **Expo** (~52.0.26)
- **Firebase** (for authentication & database)
- **Redux Toolkit** (^2.5.0)
- **SQLite** (for session persistence)
- **Yup** (^1.6.1) (for form validation)
- **react-native-dotenv** (for environment variables)
- **React Navigation** (for app navigation)
- **Expo Image Picker** (~16.0.4) (for selecting/capturing profile pictures)
- **Expo Location** (^18.0.5) (for retrieving user location)
- **Google Maps API** (for displaying and confirming location)

## Features

- User authentication (signup, login, logout)
- Browse categories and products
- View product details
- Add products to cart
- Checkout and order creation
- Input validation on signup and login
- Session persistence using SQLite (users remain logged in for a period)
- Prevents adding more items than available stock
- Profile page where users can upload a profile picture (via camera or gallery)
- Add and confirm location using Google Maps, storing the address
- Profile and location data are stored in Firebase
- Permissions are requested before using the camera or accessing location

## Screenshots

_TBD_

<!-- ![Example screenshot](./img/screenshot.png) -->

## Setup

To install and run this project locally:

```sh
npm install
npm start
```

If you don't have a setup like Android Studio, you can still check the app on your phone:

1. Download the Expo Go app on your phone (available on both iOS and Android).
2. Scan the QR code that appears in your terminal after running npm start.

📌 Note: Make sure both your computer and your phone are connected to the same Wi-Fi network.

If the app doesn't connect, try canceling the process and running the following command instead:

```sh
npx expo start --tunnel
```

This uses a tunneling option that can help in cases where the phone and computer are having trouble connecting over the local network.

⚠️ Web Compatibility Notice

This app uses SQLite for session persistence, along with other native features like image picking and location services, which do not work in a web environment. Running the app with expo start --web will result in limited or broken functionality.

## Environment Variables

Ludotienda uses `react-native-dotenv` to manage environment variables. Make sure to create a `.env` file at the root of the project and define the following variables:

```js
BASE_URL = your_api_base_url;
AUTH_BASE_URL = your_auth_base_url;
API_KEY = your_firebase_api_key;
GOOGLE_API_KEY = your_google_maps_api_key;
```

These variables are used in `src/config/database.js`:

```js
import { BASE_URL, AUTH_BASE_URL, API_KEY, GOOGLE_API_KEY } from "@env";

export const base_url = BASE_URL;
export const auth_base_url = AUTH_BASE_URL;
export const api_key = API_KEY;
export const google_api_key = GOOGLE_API_KEY;
```

## Usage

1. Open the app and sign up.
2. Browse through game categories and select a product.
3. Add products to the cart.
4. Proceed to checkout and place an order.
5. If the app is closed and reopened, the session is maintained.
6. Navigate to the profile page to set a profile picture (via camera or gallery).
7. Add and confirm your location using Google Maps.

## Project Status

🚧 **In progress** - Still being developed and improved.

## Room for Improvement

### Known Issues & Improvements

- Replace `console.log` debugging with proper error handling.
- Improve styling on the product detail page.

### Future Enhancements

- Add a product image carousel.
- Implement a better error-handling component.
- Add an option to manually enter location instead of relying only on GPS.

## Acknowledgements

- Created as part of the **Coderhouse React Native** course.
- Product and category data sourced from [_Tienda Maldón_](https://tienda.maldon.com.ar/).

## Contact

Created by [**Tomás Echeveste Arteaga**](https://github.com/faradar) – feel free to reach out at: **echeveste.t@gmail.com**
