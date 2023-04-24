import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/pngaaa.com-3691842.png';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <div className="content-container">
      <App />
    </div>
    <Footer />
  </React.StrictMode>,
)
