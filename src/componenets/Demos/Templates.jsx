import React from "react";
import { Link } from "react-router-dom";

export default function Templates() {
  const templates = [
  { 
    title: "Portfolio Template", 
    img: "https://elements-resized.envatousercontent.com/elements-cover-images/b3f6d788-df5b-4f32-b4b4-e82ad95bcb28?w=710&cf_fit=scale-down&q=85&format=auto&s=42e4ef605c8a305a57124cfced42e27d03a1f12b7508a9327fa8659132b08607",
    description: "A clean and modern portfolio template for showcasing your work and skills."
  },
  { 
    title: "Creative Agency Template", 
    img: "https://elements-resized.envatousercontent.com/elements-cover-images/cdf1fdef-7df0-4544-819c-b4b1c79a80ff?w=710&cf_fit=scale-down&q=85&format=auto&s=cde275c7db539e9fe6359cbef340e026f3632fd1c1744f0c680e6c5339f6f085",
    description: "Perfect for creative agencies to present services, case studies, and team members."
  },
  { 
    title: "Photography Template", 
    img: "https://elements-resized.envatousercontent.com/elements-cover-images/edbbc4ab-95c0-4fca-b096-036d38cc9711?w=710&cf_fit=scale-down&q=85&format=auto&s=acd75949be1c27cee3ee1259cda7fff6fd5c963b06a9f5697efebbca0ee1b11f",
    description: "Designed for photographers to display stunning galleries and client work."
  },
  { 
    title: "Resume Template", 
    img: "https://elements-resized.envatousercontent.com/elements-cover-images/6ecb825d-f48a-47aa-85e6-a2eb1535f7f5?w=710&cf_fit=scale-down&q=85&format=auto&s=856855e81e36c514543e3f63c3b723051182a49747370650113144010cacbc7b",
    description: "An elegant one-page resume template to highlight your career journey."
  },
  { 
    title: "Startup Template", 
    img: "https://elements-resized.envatousercontent.com/elements-cover-images/698ebb86-c168-4fc0-8526-5a3cd9cbbb80?w=710&cf_fit=scale-down&q=85&format=auto&s=9b8903877cf010914af7597d5b03a586370fc0aa7da326d3916b888c72866c87",
    description: "Ideal for startups to pitch products, features, and attract investors."
  },
  { 
    title: "Restaurant Template", 
    img: "https://elements-resized.envatousercontent.com/elements-cover-images/0f4e235d-4870-4806-b5fe-0454cbedaca1?w=710&cf_fit=scale-down&q=85&format=auto&s=1934049c8eefad2094f7aaa2cceb19b494483772a8f501a2cc42ba9e0bfbf17e",
    description: "A stylish template for restaurants to show menus, ambiance, and reservations."
  },
  { 
    title: "Blog Template", 
    img: "https://elements-resized.envatousercontent.com/elements-cover-images/70266ea4-4eee-4566-b4c5-2cce1b593bc8?w=710&cf_fit=scale-down&q=85&format=auto&s=46056225a8725cc55184817a3e72dd4a4644de76da031df73b90377879ed8548",
    description: "A minimal blog template tailored for writers and content creators."
  },
  { 
    title: "Landing Page Template", 
    img: "https://elements-resized.envatousercontent.com/elements-cover-images/6bf42c39-7a54-44d5-a046-6425a2dd4c6d?w=710&cf_fit=scale-down&q=85&format=auto&s=9d6d209902f224bdfa7a325c404cdf3c31be59be536974e0d1b5a0d6e0326f0e",
    description: "High-converting landing page template for product launches and campaigns."
  },
  { 
    title: "E-commerce Template", 
    img: "https://elements-resized.envatousercontent.com/elements-cover-images/211a05bc-2b46-4400-bcdd-40d996f9cacd?w=710&cf_fit=scale-down&q=85&format=auto&s=a9477c7a14194fe70b0422b5e8b45c93236341b727642a86dd6f9fd3cb7a2223",
    description: "A fully responsive e-commerce template built for online shops and stores."
  },
  { 
    title: "Business Template", 
    img: "https://elements-resized.envatousercontent.com/elements-cover-images/606dad73-89b3-48b0-aa18-5afbfd7e9875?w=710&cf_fit=scale-down&q=85&format=auto&s=c8c5fc230fe35a11caff9a0029143ca58db76fea07aece2573ee7d91cb046877",
    description: "Corporate-style business template for companies to showcase services and clients."
  },
  { 
  title: "Portfolio Template", 
  img: "https://elements-resized.envatousercontent.com/elements-cover-images/2512bffa-af41-4599-ac93-4c58c2c872f7?w=710&cf_fit=scale-down&q=85&format=auto&s=83ed5736f77ff86826b4647a205c916db75d603e0dbe09b2b1d3b5e61833f03a",
  description: "A modern portfolio template for freelancers and designers to display their work."
},
{ 
  title: "Landing Page Template", 
  img: "https://elements-resized.envatousercontent.com/elements-cover-images/0cfcb19a-a23c-4dce-9a58-8c310820ed1e?w=710&cf_fit=scale-down&q=85&format=auto&s=e5b235a3bbfe7f07e0213063305520d3d6bcbef9b621f6688a72db871a5ba41a",
  description: "Clean and responsive landing page template ideal for startups and apps."
},

];


  return (
    <>
    <section class="intro-section">
    <h2>Our Templates</h2>
    <p>Each product comes with a full multi-page demo and a single-page demo for easy testing.</p>
  </section>
    <main className="demo-container">
      {templates.map((template, index) => (
        <div className="card" key={index}>
          <img src={template.img} alt={`${template.title} Preview`} />
          <p className="heading">{template.title}</p>
          <p className="description">{template.description}</p>
          <div className="demo-buttons">
            <a href="" className="preview-btn">
              <span>
                <i className="fa-solid fa-eye"></i>
              </span>
              <span>Preview</span>
            </a>
            <a href="">
              <span>
                <i className="fa-solid fa-tag"></i>
              </span>
              <span>Pricing</span>
            </a>
          </div>
        </div>
      ))}
    </main>
    
    </>
  );
}
