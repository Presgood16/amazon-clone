import React from 'react';
import './Home.css';
import Home_Image from './images/home_image.jpg';
import Product from './Product';
import P1 from './images/Macbook1.png';
import P2 from './images/iWatch11.png';
import P3 from './images/iPhone1.png';
import P4 from './images/iPhone2.png';
import P5 from './images/AirPod.png';
import P6 from './images/ipad1.png';
import P7 from './images/AppleTv.png';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img src={Home_Image} alt="logo" className="home_image" />

                <div className="home_row">
                    <Product id={11} title="Apple Tv" price={1499.99} image={P7} rating={5} />
                </div>

                <div className="home_row">
                    <Product id={12} title="Apple iPad Pro" price={1299.99} image={P6} rating={5} />
                    <Product id={13} title="Apple iWatch series 6" price={499.99} image={P2} rating={5} />
                </div>

                <div className="home_row">
                    <Product id={14} title="Apple iPhone 11 Pro Max" price={1099.99} image={P3} rating={4} />
                    <Product id={15} title="Apple iPhone 11 " price={699.99} image={P4} rating={3} />
                    <Product id={16} title="Apple AirPod Pro" price={399.99} image={P5} rating={3} />
                </div>

                <div className="home_row">
                    <Product id={17} title="Apple Macbook Pro 16" price={1999.99} image={P1} rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home
