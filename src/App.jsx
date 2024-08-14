import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Example from './components/NewNav';

function App() {
  return (
    <>
      <Example />
      {/* <Navigation /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
