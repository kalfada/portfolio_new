import './App.css'
import MainPage from './pages/MainPage/MainPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

function App() {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Daniel Kalfa</title>
      </Helmet>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
