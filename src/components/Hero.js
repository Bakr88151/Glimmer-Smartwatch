import React from "react";
import '../utils/hero.css';



export default function Hero(){
    return(
        <section className="hero">
            <div className="hero_left">
                <h2 className="section_header">Glimmer Smartwatch: <br /> Your Ultimate Health Companion</h2>
                <span className="normal_text">
                Stay connected and healthy with the Glimmer Smartwatch. Receive real-time notifications, track your fitness and heart rate, and personalize your watch face. With sleek design and long battery life, Glimmer keeps you ahead in your busy lifestyle.
                </span>
                <div className="herosectionbuttoncontainer">
                    <button className="contact_us">Contact us</button>
                    <button className="buy_now">Buy now</button>
                </div>
            </div>
            <div className="image-container">
                <img src="../images/screen-on.png" className="screen-on" alt="Screen On" />
                <img src="../images/screen-off.png" className="screen-off" alt="Screen Off" />
                <div className="icon water-proof" style={{ backgroundImage: 'url(../images/water-proof.png)' }}></div>
                <div className="icon charging" style={{ backgroundImage: 'url(../images/charging.png)' }}></div>
                <div className="icon location" style={{ backgroundImage: 'url(../images/location.png)' }}></div>
                <div className="icon notification" style={{ backgroundImage: 'url(../images/notification.png)' }}></div>
                <div className="icon health" style={{ backgroundImage: 'url(../images/health.png)' }}></div>
            </div>
        </section>
    )
}