import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
return (
    <div className='footer-container'>
    <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Join the StorX newsletter to receive the latest listings in your area
        </p>
        <p className='footer-subscription-text'>
        You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
        <form>
            <input
            className='footer-input'
            name='email'
            type='email'
            placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
        </form>
        </div>
    </section>
    <div className='footer-links'>
        <div className='footer-link-wrapper'>
        <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/signup'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Terms of Service</Link>
        </div>
        <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
        </div>
        </div>
    </div>
    <section className='social-media'>
        <div className='social-media-wrap'>
        <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            StorX
            <i className="fas fa-laptop-house"></i>
            </Link>
        </div>
        <small className='website-rights'>StorX © 2021</small>
        <div className='social-icons'>
            <Link
            className='social-icon-link facebook'
            to='/'
            target='_blank'
            aria-label='Facebook'
            >
            <i className='fab fa-facebook-f' />
            </Link>
            <Link
            className='social-icon-link instagram'
            to='/'
            target='_blank'
            aria-label='Instagram'
            >
            <i className='fab fa-instagram' />
            </Link>
            <Link
            className='social-icon-link youtube'
            to='/'
            target='_blank'
            aria-label='Youtube'
            >
            <i className='fab fa-youtube' />
            </Link>
            <Link
            className='social-icon-link twitter'
            to='/'
            target='_blank'
            aria-label='Twitter'
            >
            <i className='fab fa-twitter' />
            </Link>
            <Link
            className='social-icon-link twitter'
            to='/'
            target='_blank'
            aria-label='LinkedIn'
            >
            <i className='fab fa-linkedin' />
            </Link>
        </div>
        </div>
    </section>
    </div>
);
}

export default Footer;