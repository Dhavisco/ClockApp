# Clock App

The **Clock App** is a responsive web application built with React, TypeScript, Tailwind CSS, and Sass. The app displays the current time, location, and a programming quote, dynamically adapting its UI and functionality based on the time of day. It also includes interactive features and smooth transitions for an enhanced user experience.

## Features

- **Current Time and Location:** Displays the current time and location fetched from an external API.
- **Programming Quotes:** Fetches and displays a random programming quote.
- **Greeting Message:** Changes the greeting message based on the time of day (e.g., "Good Morning," "Good Afternoon").
- **Background Adaptation:** Updates the background image dynamically depending on the time of day.
- **Expandable Sections:** Allows toggling between expanded and collapsed views for better content organization.
- **Preloader:** Displays a preloader animation while fetching data (time, location, or quotes).
- **Responsive Design:** Ensures compatibility with various screen sizes for a seamless user experience.

## Technologies Used

- **Frontend Framework:** [React](https://reactjs.org/)
- **TypeScript:** Ensures type safety and better developer experience.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) and [Sass](https://sass-lang.com/) for a clean and scalable design.
- **Data Fetching:** [React Query](https://tanstack.com/query/v4) and [Axios](https://axios-http.com/) for API requests and caching.

## Installation

Follow these steps to run the Clock App locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Dhavisco/ClockApp.git
   cd ClockApp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add environment variables:**
   Create a `.env` file in the root directory and include the following variables:
   ```env
   REACT_APP_TIME_API_URL=<time-api-url>
   REACT_APP_LOCATION_API_URL=<location-api-url>
   REACT_APP_QUOTES_API_URL=<quotes-api-url>
   ```

4. **Run the application:**
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the app.

## Folder Structure

```
clock-app/
├── public/
├── src/
│   ├── assets/          # Images and icons
│   ├── components/      # Reusable React components
│   │   ├── QuotesSection.tsx
│   │   ├── TimeSection.tsx
│   │   ├── Preloader.tsx
│   ├── hooks/           # Custom hooks (e.g., useQuotes, useTime)
│   ├── styles/          # Tailwind and Sass stylesheets
│   ├── App.tsx          # Root component
│   ├── index.tsx        # Entry point
├── package.json         # Project dependencies
└── README.md            # Documentation
```

## API Integration

### Quotes API
- Fetches random programming quotes.
- Used in the `QuotesSection` component.

### Time and Location API
- Retrieves the current time and location based on the user's IP.
- Used in the `TimeSection` component.

## Custom Hooks

- **`useQuotes`:** Fetches quotes and manages the loading state.
- **`useTime`:** Fetches time and location data.

## UI/UX Features

1. **Preloader Animation:**
   - Displays a spinner while data is being fetched.
2. **Expandable Sections:**
   - The quote section hides when expanded to focus on time details.
3. **Dynamic Backgrounds:**
   - Automatically updates based on morning, afternoon, or night.

## Future Enhancements

- Add user preferences for themes (light/dark mode).
- Allow users to bookmark favorite quotes.
- Add localization support for multiple languages.
- Implement testing with Jest and React Testing Library.

## Contributing

Contributions are welcome! Please fork this repository, make changes, and submit a pull request for review.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Enjoy using the Clock App!**

