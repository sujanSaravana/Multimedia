import { Link, BrowserRouter, Route, Routes } from "react-router-dom";


function Foot() {
    return(
        <footer className="footer">
        <ul>
            <li><Link to="/Landingpage" className="footer-item"><p>Home</p></Link></li>
            <li><Link to="/Angebote" className="footer-item"><p>Products</p></Link></li>
            <li ><Link to="/Kontakt" className="footer-item"><p>Contact</p></Link></li>
        </ul>
            <p className="copyright">© 2023 My Company. All rights reserved.</p>
        </footer>
    )
}

export default Foot;
