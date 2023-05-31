import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Sidebar from './components/Sidebar';

function App() {
  return (  
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/product/:id" element={ <ProductDetails /> } />
        </Routes>
      </Router>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
