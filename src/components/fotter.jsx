import React from "react";
import "../styles/footer.css"

function Footer(){
    return(
       <div className="footers">
        <footer>
        <div className="companys">
            <h2>Our company</h2>
            <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>FAQs</li>
            </ul>
        </div>
        <div className="contact">
            <h2>Contact</h2>
            <ul>
                <li>Help& Support</li>
                <li>Become Our Restaurant Partner</li>
            </ul>
        </div>
        <div className="terms">
            <h2>Legal</h2>
            <ul><li>Terms&Condition</li>
            <li>Privacy and Policy</li>
            </ul>
            
        </div>
        </footer>
        </div>
        
       
    )
}
export default Footer