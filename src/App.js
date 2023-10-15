import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Error from "./pages/Error"

function App() {
  return <BrowserRouter>
    <Routes>
      <nav>Our Nav</nav>
      <Route path="/" element={<div> Home page</div>} />
      <Route path="about" element= { <About /> } />
      <Route path="products" element= {<Products />} />
      <Route path="*" element= {<Error />} />
      <Route path="Dashboard" element= {<div>Dashboard</div>}>
        <Route path=""></Route>
      </Route>
    </Routes>
    <footer>Our Footer</footer>
  </BrowserRouter>
}

export default App;
