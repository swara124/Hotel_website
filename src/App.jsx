// App.jsx
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import Product from './components/Product'
import Footer from './components/Footer'
import Contact from './pages/Contact' 
import Services from './pages/Services'
import About from './pages/About_us'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Header></Header>
            </div>
          </div>
          <Routes>
            <Route 
            path="/" 
            element={
              <>
                <div className="row">
                  <div className="col-12">
                    <Slider/>
                  </div>
                </div>

                <div className="container my-2 gap-5">
                  <div className="row mb-2">
                    <div className="col-sm-6 col-md-4 col-lg-3">
                      <Product
                        imgSrc="/images/dosa.jpeg"
                        title="Dosa"
                        text="A popular golden-brown crepe served with a side of sambar and chutney."
                        btnText="Explore"
                      />
                    </div>
                    
                    <div className="col-sm-6 col-md-4 col-lg-3">
                      <Product
                        imgSrc="/images/medu_wada.jpeg"
                        title="Medu wada"
                        text="A savory, crispy fritter made from lentils, served with sambar and chutney."
                        btnText="Explore"
                      />
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-3">
                      <Product
                        imgSrc="/images/pav_bhaji.jpeg"
                        title="Pav bhaji"
                        text="A delicious vegetable curry from Mumbai, served with soft buttered buns."
                        btnText="Explore"
                      />
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-3">
                      <Product
                        imgSrc="/images/thali.jpg"
                        title="Maharastrian Thali"
                        text="A complete meal platter with a perfect blend of various curries and breads."
                        btnText="Explore"
                      />
                    </div>
                    {/* <div className="col-sm-6 col-md-4 col-lg-3">
                      <Product
                        imgSrc="/images/pohe.jpeg"
                        title="Pohe"
                        text="A quick Indian breakfast of spiced flattened rice."
                        btnText="Explore"
                      />
                    </div> */}

                  </div>
                </div>
              </>
              }
            ></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/services" element={<Services/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
          </Routes>
          <div className="row">
            <div className="col-12">
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App