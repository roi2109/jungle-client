
import React from 'react';
import  "bootstrap-icons/font/bootstrap-icons.css"
const Footer = ({ isDark }) => {
    return (
      <>
        <footer className="border-top pt-3 py-2 text-center mt-auto ">
          <div style={{ height: '30px', marginLeft: ' 20px' }}>
            <a href="https://github.com/roi2109?tab=repositories" target="_blank">
              <i
                style={{ color: isDark ? 'white' : 'black' }}
                className="bi bi-github  fs-2"
              ></i>
            </a>
          </div>
          <p
            style={{
              color: isDark ? 'white' : 'black',
              fontSize: ' 1.5rem',
              textAlign: 'center',
              marginTop: '15px',
            }}
          >
            <span>&copy;</span> {new Date().getFullYear()} Roi Gal
          </p>
        </footer>
      </>
    );
  };
  
  export default Footer;