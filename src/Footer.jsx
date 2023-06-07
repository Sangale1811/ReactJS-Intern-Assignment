import React from 'react';
import './footer.css';

const Footer = () => {
      const year=new Date().getFullYear();

    return (
        <>
        <footer>
            <p id="footer">copyright © {year}, Designed by Shivani Sangale</p>
        </footer>
        </>
    )
}

export default Footer;