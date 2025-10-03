import React from "react";

export default function Social() {
  const socials = [
    {
      name: "Discord",
      short: "DI",
      user: "Discord User",
      username: "@discordID",
      about: "500+ Connections",
      link: "https://discord.com",
      icon: "fab fa-discord",
      class: "discord",
    },
    {
      name: "Facebook",
      short: "FB",
      user: "Facebook User",
      username: "@fbusername",
      about: "1000+ Friends",
      link: "https://facebook.com",
      icon: "fab fa-facebook-f",
      class: "facebook",
    },
    {
      name: "Twitter",
      short: "TW",
      user: "Twitter User",
      username: "@twitterhandle",
      about: "10k Followers",
      link: "https://twitter.com",
      icon: "fab fa-twitter",
      class: "twitter",
    },
    {
      name: "Instagram",
      short: "IG",
      user: "Instagram User",
      username: "@instauser",
      about: "5k Followers",
      link: "https://instagram.com",
      icon: "fab fa-instagram",
      class: "instagram",
    },
    {
      name: "LinkedIn",
      short: "IN",
      user: "LinkedIn User",
      username: "@linkedinuser",
      about: "Connections in Tech",
      link: "https://linkedin.com",
      icon: "fab fa-linkedin-in",
      class: "linkedin",
    },
  ];

  return (
    <>
      <section class="intro-section">
        <h2>Stay Connected</h2>
        <p>Follow us on our social platforms for updates & more</p>
      </section>

      <div className="social-icons">
        {socials.map((s, i) => (
          <div className="tooltip-container" key={i}>
            <div className="tooltip">
              <div className="profile">
                <div className="user">
                  <div className="img">{s.short}</div>
                  <div className="details">
                    <div className="name">{s.user}</div>
                    <div className="username">{s.username}</div>
                  </div>
                </div>
                <div className="about">{s.about}</div>
              </div>
            </div>
            <div className="text">
              <a
                href={s.link}
                target="_blank"
                className={`icon ${s.class}`}
                rel="noreferrer"
              >
                <div className="layer">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span className={s.icon} />
                </div>
                <div className="text">{s.name}</div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
