import React from 'react';
import "./Home.css";
import Banner from "./img/bg.jpg";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src={Banner} alt=""/>

                <div className="home__row">
                    <Product 
                        id = "1"
                        title = "The lean startup"
                        price ={ 99.99 }
                        image = { "/static/media/book-1.d95d7ddc.jpg" }
                        rating = { 5 }
                    />
                    <Product 
                        id = "2"
                        title = "Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Dough Hook, Wire Whip & Beater (6.5QT, Black)"
                        price ={ 149.99 }
                        image = { "/static/media/mixer.eb64f1a2.jpg" }
                        rating = { 5 }
                    />
                    
                </div>
                <div className="home__row">
                    <Product 
                        id = "3"
                        title = "The Garmin Vivoactive 4S Smart Watch"
                        price ={ 579.99 }
                        image = { "/static/media/watch.53189ff2.jpg" }
                        rating = { 5 }
                    />
                    <Product 
                        id = "4"
                        title = "This Google Home speaker is a smart personal assistant with voice commands to use with smart services through the home."
                        price ={ 174.99 }
                        image = { "/static/media/google_home.300905ae.jpg" }
                        rating = { 5 }
                    />
                    <Product 
                        id = "5"
                        title = "Apple I-pad pro (12.9-inch display, wifi, 128GB, Silver, 4th generation)"
                        price ={ 598.99 }
                        image = { "/static/media/ipad.84d41936.jpg" }
                        rating = { 5 }
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id = "6"
                        title = "Samsung New ThunderboltTM 3 compatibility transmits video and data up to 40Gbps while charging devices on single cable"
                        price ={ 699.99 }
                        image = { "/static/media/samsung_tv.a64328ba.png" }
                        rating = { 5 }
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;

