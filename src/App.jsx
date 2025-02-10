import {  Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Layout from "./components/Layout"
import Home from "./components/Home"

const Services = () => <h1>Services</h1>
const Products = () => <h1>Products</h1>

function App() {

  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route index element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/services" element={<Products/>} />
        <Route path="/products" element={<Products/>} />
      </Routes>
      </Layout>
    </Router>
  )
}

export default App
