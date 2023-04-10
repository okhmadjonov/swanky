import React from "react";
import car from "../../../../assets/images/services/car.png";
import bag from "../../../../assets/images/services/bag.png";
import gift from "../../../../assets/images/services/gift.png";
import "./services.scss";
const Services = () => {
  return (
    <div className="services">
      <div className="services__container">
        <div className="services__wrapper">
          <div className="service_card">
            <div className="service__card-wrapper">
              <div className="service_card-logo">
                <img src={car} alt="Car" />
              </div>
              <div className="service_card-title">
                <h3>Quick Delivery</h3>
              </div>
              <div className="service_card-subtitle">
                <p>Inside City delivery within 5 days</p>
              </div>
            </div>
          </div>
          <div className="service_card">
            <div className="service__card-wrapper">
              <div className="service_card-logo">
                <img src={bag} alt="Bag" />
              </div>
              <div className="service_card-title">
                <h3>Pick Up In Store</h3>
              </div>
              <div className="service_card-subtitle">
                <p>We have option of pick up in store</p>
              </div>
            </div>
          </div>
          <div className="service_card">
            <div className="service__card-wrapper">
              <div className="service_card-logo">
                <img src={gift} alt="Gift" />
              </div>
              <div className="service_card-title">
                <h3>Special Packaging</h3>
              </div>
              <div className="service_card-subtitle">
                <p>Our packaging is best for products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
