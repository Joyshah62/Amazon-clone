import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
        <img 
        className='home__image'
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=''
        />

        {/* product id, title, price, rating, image */}
        <div className="home__row">
        <Product
        id="1"
        title="Do Epic Shit"
        price={300}
        rating={5}
        image="https://m.media-amazon.com/images/I/61kRkfsIMUL.jpg"
        />
         <Product
        id="2"
        title="Apple MacBook Pro 16"
        price={120000}
        rating={5}
        image="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1663415332/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245227_0_ton7gy.png/mxw_2048,f_auto"
        />
        </div>

        <div className="home__row">
        <Product
        id="3"
        title="Air Jordan 1 Mid SE"
        price={30000}
        rating={3}
        image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/21adf20d-df66-4e00-bd94-2c198ce96062/air-jordan-1-mid-se-shoes-SXFQqx.png"
        />
         <Product
        id="4"
        title="Apple iPhone 14 Pro Max"
        price={70000}
        rating={4}
        image="https://img4.gadgetsnow.com/gd/images/products/additional/large/G390858_View_1/mobiles/smartphones/apple-iphone-14-pro-max-256-gb-deep-purple-6-gb-ram-.jpg"
        />
         <Product
        id="5"
        title="iClever Bluetooth Headphones"
        price={700}
        rating={2}
        image="https://m.media-amazon.com/images/I/61FFlMkOxhL._SL1320_.jpg"
        />
        </div>

        <div className="home__row">
          
            <Product
                    id="6"
                    title="Sony Bravia 4K Smart TV"
                    price={200000}
                    rating={4}
                    image="https://static1.industrybuying.com/products/office-supplies/led-tv/OFF.LED.106911000_1668347597276.webp"
                    />
                    <Product
                    id="7"
                    title="OnePlus 10 Pro"
                    price={71999}
                    rating={4}
                    image="https://img5.gadgetsnow.com/gd/images/products/additional/large/G357649_View_2/mobiles/smartphones/oneplus-10-pro-256-gb-volcanic-black-12-gb-ram-.jpg"
                    />
                    
            </div>
         {/* product */}   
    </div>
  );
}

export default Home