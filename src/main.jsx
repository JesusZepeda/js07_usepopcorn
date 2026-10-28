import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import StartRating from "./StarRating.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App /> 
    {/* <StartRating maxRating={10} size={24} color="red" defaultRating={3} /> */}
  </StrictMode>,
);
