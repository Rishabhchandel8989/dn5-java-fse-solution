# React Training - Vite vs Create React App (CRA)

This repository contains all React Hands-ons completed during Cognizant Full Stack Training.

Although the lab manual mentioned the use of **Create React App(CRA)**, all projects in this repo is created using **Vite** because its light weight, modern and faster.

The React code remains almost identical. Only the project setup and development commands differ.

---

# 1. Project Creation

## CRA

```bash
npx create-react-app project-name
```

## Vite

```bash
npm create vite@latest project-name
```

Choose:

```
Framework: React
Variant: JavaScript
```

---

# 2. Installing Dependencies

## CRA

Dependencies are installed automatically.

## Vite

```bash
npm install
```

must be executed after project creation.

---

# 3. Starting Development Server

## CRA

```bash
npm start
```

Default URL

```
http://localhost:3000
```

---

## Vite

```bash
npm run dev
```

Default URL

```
http://localhost:5173
```

(Vite may choose another port if 5173 is already in use.)

---

# 4. Entry File

## CRA

```
src/index.js
```

Example:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

---

## Vite

```
src/main.jsx
```

Example:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

# 5. App Component

No difference.

```jsx
function App() {
  return <h1>Hello React</h1>;
}

export default App;
```

---

# 6. Components

No difference.

```jsx
function Home() {
  return <h2>Home</h2>;
}

export default Home;
```

---

# 7. Class Components

No difference.

```jsx
class Home extends React.Component {
  render() {
    return <h2>Home</h2>;
  }
}
```

---

# 8. Props

No difference.

---

# 9. State

No difference.

---

# 10. Hooks

No difference.

Examples:

- useState()
- useEffect()
- useContext()
- useReducer()
- useMemo()
- useCallback()

All work exactly the same.

---

# 11. CSS

No difference.

```jsx
import "./App.css";
```

---

# 12. Images

## CRA

```
public/
```

or

```
src/
```

---

## Vite

Recommended:

```
src/assets/
```

Static files can also be kept inside:

```
public/
```

---

# 13. Environment Variables

## CRA

```
REACT_APP_API_URL
```

Access:

```javascript
process.env.REACT_APP_API_URL
```

---

## Vite

```
VITE_API_URL
```

Access:

```javascript
import.meta.env.VITE_API_URL
```

---

# 14. Build Command

## CRA

```bash
npm run build
```

---

## Vite

```bash
npm run build
```

Same command.

---

# 15. Production Folder

## CRA

```
build/
```

---

## Vite

```
dist/
```

---

# 16. Performance

| Feature | CRA | Vite |
|----------|-----|------|
| Startup | Slow | Fast ⚡ |
| Hot Reload | Slow | Instant ⚡ |
| Build Speed | Slower | Faster ⚡ |
| Bundle Size | Larger | Smaller |
| Tooling | Webpack | ESBuild + Rollup |
| Recommended Today | No | Yes |

---

# 17. React Code Compatibility

Almost every React example from the Cognizant lab manual works without modification.

Usually only these commands change:

CRA

```bash
npm start
```

↓

Vite

```bash
npm run dev
```

and

CRA

```
src/index.js
```

↓

Vite

```
src/main.jsx
```

---

# 18. Repository Convention

Each Hands-on is created as a separate Vite project.

If a Hands-on introduces Vite-specific differences beyond the points listed above, a dedicated `README.md` will be added inside that project.

---

# React Hands-on Summary

The following Hands-ons were completed during the React module.

| Hands-on | Project | Concepts Covered |
|----------|---------|------------------|
| 1 | myfirstreact | React Setup, JSX |
| 2 | StudentApp | Class Components, Component Rendering |
| 3 | scorecalculatorapp | Functional Components, Props, Styling |
| 4 | blogapp | Lifecycle Methods, Fetch API, componentDidMount() |
| 5 | Styling (Skipped) | CSS Modules *(Starter project not provided)* |
| 6 | TrainersApp | React Router, Navigation, URL Parameters |
| 7 | shoppingapp | Props, Rendering Arrays |
| 8 | counterapp | State, setState(), Event Handling |
| 9 | cricketapp | ES6 Features, map(), filter(), Destructuring, Spread Operator |
| 10 | officespacerentalapp | JSX, Inline CSS, Conditional Styling |
| 11 | eventexamplesapp | React Events, Synthetic Events, Forms |
| 12 | ticketbookingapp | Conditional Rendering |
| 13 | bloggerapp | Lists, Keys, Conditional Rendering |
| 14 | employeeapp | React Context API, Theme Switching |
| 15 | ticketraisingapp | Forms, Controlled Components |
| 16 | mailregisterapp | Form Validation |
| 17 | fetchuserapp | REST API, Fetch API |
| 18 | react-testing-app | Unit Testing (React Testing Library + Vitest) |
| 19 | gitclientapp | Axios, Mocking APIs, Unit Testing |

---

# Modern Changes Applied

To keep these projects aligned with modern React development, a few changes were made compared to the original Cognizant training material.

### 1. Create React App → Vite

All projects were created using **Vite** instead of CRA.

Reason:

- Faster startup
- Smaller project size
- Better developer experience
- Recommended by the React team and community

---

### 2. React 18 Rendering API

Instead of:

```jsx
ReactDOM.render(...)
```

Modern React uses:

```jsx
ReactDOM.createRoot(...).render(...)
```

---

### 3. React Testing

The original lab used:

- Jest
- Enzyme

This repository uses:

- Vitest
- React Testing Library

Reason:

- Enzyme is no longer actively maintained.
- React Testing Library is the current industry standard.
- Vitest integrates naturally with Vite while providing an API very similar to Jest.

---

### 4. Missing Starter Projects

Two Hands-ons required downloading pre-built React projects which were not available.

Instead of skipping the concepts completely, equivalent projects were recreated from scratch while keeping the original learning objectives.

These include:

- CSS Modules
- React Context API

---

# React Concepts Covered

By completing these Hands-ons, the following React topics were covered:

- React Project Setup
- JSX
- Components
  - Functional Components
  - Class Components
- Props
- State
- Lifecycle Methods
- Event Handling
- Conditional Rendering
- Lists and Keys
- React Router
- ES6 Features
- Forms
- Form Validation
- Context API
- REST API Integration
- Fetch API
- Axios
- Unit Testing
- Mocking
- Snapshot Testing

---

# Folder Structure

Each Hands-on is maintained as an independent Vite project.

```text
Week 4 React
│
├── myfirstreact
├── StudentApp
├── scorecalculatorapp
├── blogapp
├── TrainersApp
├── shoppingapp
├── counterapp
├── cricketapp
├── officespacerentalapp
├── eventexamplesapp
├── ticketbookingapp
├── bloggerapp
├── employeeapp
├── ticketraisingapp
├── mailregisterapp
├── fetchuserapp
├── react-testing-app
├── gitclientapp
│
└── README.md
```

---

# Notes

- Each Hands-on is intentionally kept independent so it can be run and understood individually.
- Solutions focus on simplicity and readability rather than unnecessary optimization.
- Wherever the original lab used deprecated APIs or libraries, modern alternatives have been adopted while preserving the original learning objective.

---

# References

- React Documentation: https://react.dev
- Vite Documentation: https://vitejs.dev
- React Router: https://reactrouter.com
- React Testing Library: https://testing-library.com/docs/react-testing-library/intro
- Vitest: https://vitest.dev

---

# Acknowledgement

These projects were completed as part of the **Cognizant Full Stack Engineer Training**. The implementations follow the objectives of the training while incorporating modern React development practices and tooling.

---

# Conclusion

- The Cognizant lab manual uses **Create React App (CRA)**.
- This repository uses **Vite** for all Hands-ons.
- React concepts and code remain the same unless explicitly noted.
- Only project setup, commands, and a few tooling details differ.