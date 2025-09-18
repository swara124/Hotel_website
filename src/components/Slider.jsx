import React from 'react'

export default function Slider() {
    return (
        <div>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/images/home.png" className="d-block w-100" height={654} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/home.png" className="d-block w-100" height={654} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/home.png" className="d-block w-100" height={654} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}