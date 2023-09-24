import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Sidebar from './components/Sidebar';

function App() {
  return (  
    <div className="App container-fluid">
     
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/product/:id" element={ <ProductPage /> } />
        </Routes>
      </Router>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
