import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Fix My Planet 🌏</h1>
      <p>Stripe is working. React is mounted. Time to go green!</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
