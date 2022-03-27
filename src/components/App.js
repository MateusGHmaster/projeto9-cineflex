import Header from "./Header";
import Firstpage from "./Firstpage";
import Sessions from "./Sessions";
import Seats from "./Seats";
import Success from "./Success";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App () {
    return (
        
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Firstpage />} />
                <Route path="/sessions/:movieID" element={<Sessions />} />
                <Route path="/seats/:sessionID" element={<Seats />} />
                <Route path="/success" element={<Success />} />
            </Routes>
            <Footer />
        </BrowserRouter>

    );
}

