import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { RickAndMortyApp } from './components/RickAndMortyApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RickAndMortyApp/>
  </StrictMode>,
)
