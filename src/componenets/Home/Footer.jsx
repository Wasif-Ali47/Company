import React from 'react'

export default function Footer() {
    return (
        <>
            <footer>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 12
                    }}
                >
                    <div>
                        <div style={{ fontWeight: 800 }}>YasnovaX</div>
                        <div className="muted" style={{ fontSize: 13 }}>
                            Delivering beautiful, production-ready portfolios
                        </div>
                    </div>
                    <div className="socials">
                        <a href="#">
                            <i className="fab fa-facebook fa-lg" />
                        </a>
                        <a href="#">
                            <i className="fab fa-twitter fa-lg" />
                        </a>
                        <a href="#">
                            <i className="fab fa-linkedin fa-lg" />
                        </a>
                        <a href="#">
                            <i className="fab fa-instagram fa-lg" />
                        </a>
                    </div>
                </div>
                <div style={{ display: "flex",justifyContent: "space-between", alignItems: "center", marginTop: 18, flexWrap: "wrap"  }}  >
                    <div className="muted">
                        © <span id="year" /> YasnovaX — All rights reserved.
                    </div>
                    <div className="muted">
                        Contact:{" "}
                        <a
                            href="mailto:hello@templates.example"
                            style={{ color: "var(--muted)", textDecoration: "none" }}
                        >
                            hello@templates.example
                        </a>
                    </div>
                </div>
            </footer>

        </>
    )
}
