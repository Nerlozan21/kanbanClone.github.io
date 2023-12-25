import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.tsx'
import CardData from './Components/Data.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <CardData/>
  </React.StrictMode>,
)
