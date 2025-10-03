import React from 'react'
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <>
            <section className="hero">

                <div className="hero-left">
                    <h2>Sell beautiful <span class="text-primary">Personal &amp; Company</span> portfolios — ready to launch.</h2>
                    <p>
                        Fully responsive, dark-ready templates with fast setup, SEO-friendly structure, and customization options. Perfect for freelancers and agencies.
                    </p>
                    <div className="hero-actions">
                        <Link className='btn primary' to='/Demos'><span><i className='fa-solid fa-eye'></i></span><span>View Demos</span></Link>
                        <Link className='btn' to="/Pricing"><span><i className='fa-solid fa-tag'></i></span><span>Pricing</span></Link>
                    </div>
                    <div style={{ marginTop: 40,border: "1px solid var(--border)" }} className="glass-card">
                        <div style={{display: "flex",justifyContent: "space-between",alignItems: "center",}}>
                            <div>
                                <div className="muted">Popular bundle</div>
                                <h4 style={{ fontWeight: 700, fontSize: 16,paddingTop:5 }}>
                                    Personal + Company Kit
                                </h4>
                            </div>
                            <div className="price">
                                <div className="amount">$49</div>
                                <div className="muted">One-time</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-right">
                    <div className="showcase">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1c9b6f3e2b7f9f6a2b1f3a7a5c3a7f3e"
                            alt="demo"
                        />
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12, padding: "20px 10px" }}>
                            <div>
                                <h6 style={{ fontWeight: 700 }}>Agency Landing</h6>
                                <span className="muted" style={{ fontSize: 13 }}>
                                  Slick hero, client grid, contact form
                                </span>
                            </div>
                            <div className="muted" style={{textAlign:"center"}}><i className='fa-solid fa-circle' style={{fontSize:"8px"}}></i> 3 min demo</div>
                        </div>
                    </div>
                    <div className="heloRight-Buttons">
                        <div className="glass-card center"style={{width: "100%",border: "1px solid var(--border)"}}>
                            <div style={{ fontWeight: 700 }}>Customizable</div>
                            <div className="muted">Colors, fonts, sections</div>
                        </div>
                        <div className="glass-card center" style={{width: "100%",border: "1px solid var(--border)"}}>
                            <div style={{ fontWeight: 700 }}>Fast Support</div>
                            <div className="muted">Docs &amp; onboarding</div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
