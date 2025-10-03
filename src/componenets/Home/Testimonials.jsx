import React from 'react'
import { Link } from 'react-router-dom';

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Ayesha Khan",
            profession: "Freelance Photographer",
            message: "The template was easy to edit and my portfolio looks professional. Sales increased within a week.",
            avatar: "https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmVtYWxlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            id: 2,
            name: "Omar Ali",
            profession: "Agency Founder",
            message: "Great documentation and quick support — perfect for client projects.",
            avatar: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        },
        {
            id: 3,
            name: "Zara Malik",
            profession: "UI/UX Designer",
            message: "Loved the clean layout — made my portfolio pop instantly. Got two new clients in days!",
            avatar: "https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmVtYWxlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            id: 4,
            name: "Hamza Raza",
            profession: "Startup Founder",
            message: "Super smooth setup — saved me tons of time. Perfect for showcasing our product to investors.",
            avatar: "https://images.unsplash.com/photo-1625999984550-ef318c3a4648?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGUlMjByYW5kb218ZW58MHx8MHx8fDA%3D",
        },

    ];

    return (
        <section>
            <div className="section-title">
                <h3>Testimonials</h3>
                <Link to="/Demos" className='learn-more-link'>Read More Reviews<i className='fa-solid fa-arrow-right'></i></Link>
            </div>

            <div className="testimonial-container">
                {testimonials.map((testimonialCard) => (
                    <div className="testimonial-glass-card testi" key={testimonialCard.id}>
                        <div className="testi-avatar">
                            <div className='client-info'>
                                <img src={testimonialCard.avatar} alt={testimonialCard.name} />
                                <div className='client-info-text'>
                                    <h5 style={{ fontWeight: 700 }}>{testimonialCard.name}</h5>
                                    <h6 className="muted" style={{ fontSize: 13 }}>
                                        {testimonialCard.profession}
                                    </h6>
                                </div>
                            </div>
                            <i className='fa-solid fa-star'></i> <i className='fa-solid fa-star'></i> <i className='fa-solid fa-star'></i> <i className='fa-solid fa-star'></i> <i className='fa-solid fa-star'></i>
                            <p className="muted" style={{ marginTop: 8 }}>
                                "{testimonialCard.message}"
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
