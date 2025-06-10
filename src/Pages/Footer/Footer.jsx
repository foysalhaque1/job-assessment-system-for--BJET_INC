import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='bg-amber-100'>
            <footer className="footer footer-horizontal footer-center bg-amber-100 text-base-content rounded p-10 mt-11">
                <nav className="grid grid-flow-col gap-4">
                    <Link to={'/terms'} className="link link-hover font-bold text-black">Terms of services</Link>
                    <Link to={'/contact'} className="link link-hover font-bold text-black">Contact Info</Link>




                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://web.facebook.com/' target='_blank' >
                            <FaFacebook size={24} ></FaFacebook>
                        </a>
                        <a href='https://www.youtube.com/' target='_blank' >
                            <FaYoutube size={24} ></FaYoutube>
                        </a>
                        <a href='https://x.com/' target='_blank' >
                            <FaTwitter size={24} ></FaTwitter>
                        </a>

                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Apps Store</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;