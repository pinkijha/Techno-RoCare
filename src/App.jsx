import {  Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import TermsCondition from "./components/TermsCondition"
import About from "./components/About"
import Contact from "./components/Contact"
import RegisterProfessional from "./components/RegisterProfessional"

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
        <Route path="/terms-conditions" element={<TermsCondition/>} />
        <Route path="/about-us" element={<About/>} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/register-professional" element={<RegisterProfessional/>} />

      </Routes>
      </Layout>
    </Router>
  )
}

export default App
