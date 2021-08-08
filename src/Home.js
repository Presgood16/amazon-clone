import React from 'react';
import './Home.css';
import Home_Image from './images/112.jpg';
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
                    <Product id={11} title="2021 Apple TV 4K (64GB)" price={199.99} image={P7} rating={5} />
                </div>

                <div className="home_row">
                    <Product id={12} title="2021 Apple 12.9-inch iPad Pro (Wi-Fi, 256GB - Silver" price={1299.99} image={P6} rating={5} />
                    <Product id={13} title="New Apple Watch Series 6 (GPS, 40mm) - Space Gray Aluminum Case with Black Sport Band" price={349.99} image={P2} rating={5} />
                </div>

                <div className="home_row">
                    <Product id={14} title="New Apple iPhone 11 Pro Max [128GB, space Gray] Unlocked" price={1099.99} image={P3} rating={4} />
                    <Product id={15} title="New Apple iPhone 11 [128GB, purple] Unlocked" price={699.99} image={P4} rating={3} />
                    <Product id={16} title="Apple AirPod Pro" price={197.99} image={P5} rating={3} />
                </div>

                <div className="home_row">
                    <Product id={17} title="Apple Macbook Pro 16-in 2.4GHz 8-core i9 32GB 1TB 5500M 8GB Space Gray (CTO)" price={1999.99} image={P1} rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home
