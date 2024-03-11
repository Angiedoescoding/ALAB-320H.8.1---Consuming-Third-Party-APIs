# STAR WARS STARSHIPS

This React application fetches data about starships from the SWAPI API and displays them in a user-friendly interface.
// https://swapi.tech/documentation#starships

### Features:
<ul>
  <li>Fetches data from the SWAPI API.</li>
  <li>Displays a list of starships with their names. (Expand functionality to display more details if desired).</li>
  <li>Handles loading and error states.</li>
</ul>

### Project Structure:

src/
  - App.js (Main application component)
  - components/
    - StarshipCard.jsx (Component for displaying individual starships)
  - services/
    - Swapi.js (Centralizes interactions with the SWAPI API)
    - starships.js (Provides the `useStarships` hook for data fetching and state management)
  - styles.css (Optional CSS file for styling)

### Running the Application:

<ol>
<li>Clone this repository.</li>
<li>Install dependencies: npm install.</li>
<li>Start the development server: npm start.</li>
<li>Open http://localhost:__your host number here__ in your browser.</li>
</ol>

### Code Breakdown:

#### App.js:
<ul>
  <li>Renders the main application UI.</li>
  <li>Utilizes the useStarships hook to access starship data, loading state, and error state.</li>
  <li>Conditionally renders loading messages, error messages, or a list of StarShipCard components based on the state.</li>
  <li>Manages state for starships, loading, and errors.</li>
  <li>Fetches starship data from the SWAPI API using the getAllStarships function imported from Swapi.js.</li>
  <li>Renders individual starship cards with names. </li>
</ul>
