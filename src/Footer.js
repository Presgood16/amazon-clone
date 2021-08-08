import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/Logo2.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_left">
                <img src={Logo} alt="logo" />

                <h3>Get Us To Know You</h3>

                <p className="footer_links">
                    <Link to="/">Careers</Link>
                    <Link to="/">Blog</Link>
                    <Link to="/">Investor Relations</Link>
                    <Link to="/">Amazon Devices</Link>
                    <Link to="/">About Amazon</Link>
                </p>

                <p className="footer_company_name">© 2021 Amazon Clone developed by Taiwo</p>
            </div>

            <div className="footer_center">

                <h3>Make Money With Us</h3>

                <div>
                    <p>Sell products on Amazon Sell on Amazon Business Sell apps on Amazon Become an Affiliate Advertise Your Products Self-Publish with Us Host an Amazon Hub</p>
                    <p>Amazon Business Card Shop with Points Reload Your Balance Amazon Currency Converter</p>
                </div>
            </div>

            <div className="footer_right">
                <p className="footer_company_about">
                    <span>Let Us Help</span>
                    Amazon and COVID-19 Your Account Your Orders Shipping Rates & Policies Returns & Replacements Manage Your Content and Devices Amazon Assistant Help
                </p>

                <div className="footer_icons">
                    <a href="https://www.facebook.com/adeyemi.taiwoolamide.3/" target="blank"><FacebookIcon /></a>
                    <a href="https://www.twitter.com" target="blank"><TwitterIcon /></a>
                    <a href="https://www.instagram.com/stil_yuong/" target="blank"><InstagramIcon /></a>
                    <a href="https://www.linkedin.com/in/taiwo-adeyemi-5a4125133/" target="blank"><LinkedInIcon /></a>
                    <a href="https://github.com/Presgood16"  target="blank"><GitHubIcon /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
