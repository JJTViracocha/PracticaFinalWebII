import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import './estilos.css'
import App from './App.jsx'
import Principal from './Principal.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Principal></Principal>
  </BrowserRouter>,
)
