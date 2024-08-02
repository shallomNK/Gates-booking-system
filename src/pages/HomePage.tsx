import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import gateA from '../images/gate a.jpeg';
import gateK from '../images/Gate k.jpeg';
import gateD from '../images/Gate d.jpeg';
import gateB from '../images/Gate b.jpeg';
import gateE from '../images/Gate e.jpeg';

const HomePage: React.FC = () => {
    return (
        <>
            <div className="hero min-h-screen relative">
                <Carousel
                    showArrows={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    showStatus={false}
                    showThumbs={false}
                    interval={3500}
                    className="absolute top-0 left-0 w-full h-full object-center object-cover"
                >
                    <div className="hero-slide" style={{ height: '100vh' }}>
                        <img
                            src={gateA}
                            alt="Gate A"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="hero-slide" style={{ height: '100vh' }}>
                        <img
                            src={gateK}                                                                             
                            alt="Gate K"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="hero-slide" style={{ height: '100vh' }}>
                        <img
                            src={gateD}
                            alt="Gate D"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="hero-slide" style={{ height: '100vh' }}>
                        <img
                            src={gateB}
                            alt="Gate B"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="hero-slide" style={{ height: '100vh' }}>
                        <img
                            src={gateE}
                            alt="Gate E"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </Carousel>

                <div className="hero-overlay bg-opacity-30 absolute top-0 left-0 w-full h-full"></div>
                <div className="hero-content text-neutral-content text-center absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
                        <p className="mb-5 text-white">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
