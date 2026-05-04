# Meal Listing App

A React-based web application that fetches and displays meals from a public API. Features include search functionality with debounced input, pagination, and a responsive grid layout.

## Features

- **Meal Search**: Search for meals by name with debounced input (2-second delay)
- **Pagination**: Navigate through multiple pages of meal results
- **Grid Layout**: Displays meals in a 5-column grid
- **Meal Cards**: Each meal shows image, name, category, area, and tags
- **Responsive Design**: Clean, modern UI with hover effects
- **Loading States**: Shows loading indicator during API calls

## Technologies Used

- **React**: Frontend framework
- **Vite**: Build tool and development server
- **CSS**: Styling with grid layout and responsive design
- **FreeAPI**: Public API for meal data (https://api.freeapi.app/api/v1/public/meals)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd "freeapi - meals listing"
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the development server:

   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── App.jsx          # Main application component
├── App.css          # Application styles
├── Meal.jsx         # Individual meal card component
├── main.jsx         # Application entry point
└── index.css        # Global styles
```

## Usage

- Use the search bar to find specific meals
- Browse through pages using Previous/Next buttons
- Hover over meal cards for visual feedback
- Each meal card displays basic information

## Components

### App Component

- Manages state for meals, search query, pagination, and loading
- Handles API calls with debounced search
- Renders search input, meal grid, and pagination controls

### Meal Component

- Displays individual meal information
- Receives meal data as props
- Shows meal image, name, category, area, and tags

## API Integration

The app fetches data from:

```
https://api.freeapi.app/api/v1/public/meals?page={page}&query={searchTerm}
```

- `page`: Page number for pagination
- `query`: Search term for filtering meals
