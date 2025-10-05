import "./Navbar.css";
function Navbar() {
    return (
        <div className="Navbar">
            <img src="https://xotiv.com/wp-content/themes/xotiv/img/Logo.png"></img>
            <h1>XOTIV</h1>
            <ul>
                <li>About Us</li>
                <li>Services</li>
                <li>Careers</li>
                <li>Contact Us</li>
            </ul>
            <button id="btn">Get A Free Quote</button>
        </div>
    );

}
export default Navbar;