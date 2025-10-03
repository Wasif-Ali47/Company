import React, { useEffect } from "react";
import { Link } from 'react-router-dom';


export default function RecentDemos() {
    const demoCards = [
        {
            id: 1,
            img: "https://elements-resized.envatousercontent.com/elements-preview-images/92d1430a-fa60-4e1e-bdec-caff023e05eb?w=1370&cf_fit=scale-down&q=85&format=auto&s=96281133011a08e18a22d853dd3ea3b96f64e91e5eb65c93104eb08cf6d77c66",
            heading: "Portfolio Template",
        },
        {
            id: 2,
            img: "https://elements-resized.envatousercontent.com/elements-cover-images/2e363c2c-e003-4872-8bdc-eef698b502dc?w=710&cf_fit=scale-down&q=85&format=auto&s=972593fdeea47c34e3d904daf72b4e9a84006ae8a818904e721907c58062e3a4",
            heading: "Admin Dashboard",
        },
        {
            id: 3,
            img: "https://elements-resized.envatousercontent.com/elements-cover-images/211a05bc-2b46-4400-bcdd-40d996f9cacd?w=710&cf_fit=scale-down&q=85&format=auto&s=a9477c7a14194fe70b0422b5e8b45c93236341b727642a86dd6f9fd3cb7a2223",
            heading: "E-Commerse",
        },
    ];
    return (
        <>
            <section>

                <div className="section-title">
                    <h3>Recent Demos</h3>
                    <Link to="/Demos" className='learn-more-link'>View All Templates<i className='fa-solid fa-arrow-right'></i></Link>
                </div>

                <div className="demo-container-home">
                    {demoCards.map((card) => (
                        <div key={card.id}>
                            <div className="card">
                                <img src={card.img} alt="Demo Preview" />
                                <div className="demo-card-text">
                                    <h6 className="heading">{card.heading}</h6>
                                    <div className="demo-buttons">
                                        <a href="" className="preview-btn">
                                            <span><i className="fa-solid fa-eye"></i></span>
                                            <span>Preview</span>
                                        </a>
                                        <a href="">
                                            <span><i className="fa-solid fa-tag"></i></span>
                                            <span>Pricing</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </section>
        </>
    )
}
