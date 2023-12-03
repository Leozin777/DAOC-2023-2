import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Produtos from './pages/Produtos';
import ProdutoDetalhe from './pages/ProdutoDetalhe'
import ProductContext from './contexts/ProductContext'

function App(){

console.log(ProductContext)

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='produtos' element={<Produtos/>}/>
          <Route path='produtos/:id' element={<ProdutoDetalhe/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;