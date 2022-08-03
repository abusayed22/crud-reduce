import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StudentsProvider from "./context/StudentsContext"




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <StudentsProvider>
      <App />
    </StudentsProvider>
  // </React.StrictMode>
);


