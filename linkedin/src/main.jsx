import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routers from './Routers.jsx'
import './index.css' 
createRoot(document.getElementById('root')).render(
  <StrictMode>
<Routers></Routers>
  </StrictMode>,
)
