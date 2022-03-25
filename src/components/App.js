import Header from "./Header";
import Firstpage from "./Firstpage";
import Session from "./Session";
import Seats from "./Seats";
import Success from "./Success";
import Footer from "./Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.css';


export default function App () {
    return (
        
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Firstpage />} />
                <Route path="/sessions/:movieID" element={<Session />} />
                <Route path="/seats/:sessionID" element={<Seats />} />
                <Route path="/success" element={<Success />} />
            </Routes>
            <Footer />
        </BrowserRouter>

    );
}

