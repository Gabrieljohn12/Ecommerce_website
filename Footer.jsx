import React from 'react';
import './Footer.css'
import { assets } from '../../assets/product';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <h2>Tomato.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quam sed dolorem quis sit odit iste maiores maxime dolores, dolore mollitia dolor temporibus, provident voluptatum ea suscipit voluptatibus. Praesentium, consequuntur.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook} alt="" />
                <img src={assets.instagram} alt="" />
                <img src={assets.linkdine} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+234 567 3345</li>
                <li>food@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyrite">
        <p>Copyright @foodfresh. All right Reserved.</p>
      </p>
    </div>
  );
}

export default Footer;
