import React from 'react'
import { Link } from 'react-router-dom'
export default function About() {
    return (
        <>
            <section id="about">
                <div className="section-title">
                    <h3>About</h3>
                    <Link to="/Demos" className='learn-more-link'>More About Me<i className='fa-solid fa-arrow-right'></i></Link>
                </div>
                <div className="about hero-card">
                    <div className="about-avatar" aria-hidden="true" />
                    <div>
                        <h4 style={{ marginTop: 0 }}>Who am I?</h4>
                        <p>
                            Hi — I build ready-made personal &amp; company portfolios that you can
                            use to show case your work, sell services and close clients. Each
                            template is optimized for speed, responsive on all devices and easy to
                            edit. Replace text, swap images and deploy in minutes.
                        </p>
                        
                    </div>
                </div>
            </section>

        </>
    )
}
