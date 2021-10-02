import { AiOutlineRight } from 'react-icons/ai';

import payment from './payment.png'

function HeroSection(){
    return <>
        <section className="hero-section">
            <div className="hero-background">
            </div>

            <header>
                <div className="header-main">
                    <h1>Payments infrastructure for the internet</h1>
                    <p>Millions of businesses of all sizes—from startups to large enterprises—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
                    <div className="buttons">
                        <button className="btn-1">Start Now <AiOutlineRight className="right"/></button>
                        <button className='btn-2'>
                            Contact Sales <AiOutlineRight  className="right"/>
                        </button>
                    </div>
                </div>
                <div className="header-img">
                    <img src={payment} alt="Payment" />
                </div>
            </header>
        </section>
    </>
}

export default HeroSection;