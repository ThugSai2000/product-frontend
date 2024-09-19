import logo from './logo.svg';
import './App.css';
import AppLayout from './layout/AppLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import CreateProductPage from './pages/CreateProductPage';
import UpdateProductPage from './pages/UpdateProductPage';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          {/* intial routes */}
         
{/* testing */}
         
{/* app */}
         <Route path='/app' element={<AppLayout/>}>
              <Route index element={<ProductsPage/>} />
              <Route path='create-product' element={<CreateProductPage/>} />
              <Route path='update-product' element={<UpdateProductPage/>} />
              
         </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
