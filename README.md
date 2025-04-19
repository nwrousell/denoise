# Emergent

A React application for exploring and seeding content with graph visualization.

## Features

- Simple and clean UI inspired by Instapaper
- Light and dark theme toggle
- Three main screens:
  - Search/Seed: Enter search queries or add seed content
  - Search Results: View search results in a clean list format
  - Graph: Visualize content connections in an interactive graph

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite
- React Router
- React Force Graph

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Open your browser and navigate to the URL shown in your terminal (usually http://localhost:5173)

## Project Structure

- `/src/components`: Reusable UI components
- `/src/screens`: Main application screens
- `/src/context`: Context providers (like ThemeContext)
- `/src/data`: Mock data for the application