
import { createRoot } from 'react-dom/client'
 import { BarcontextProvider } from './Barcontext'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <BarcontextProvider>
    <App />
   </BarcontextProvider>


)
