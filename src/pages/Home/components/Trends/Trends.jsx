import React from "react";
import "./trends.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineHeart } from "react-icons/ai";
import { IoScan } from "react-icons/io5";
import trend_1 from "../../../../assets/images/trends/trend_1.png";
import trend_2 from "../../../../assets/images/trends/trend_2.png";
import trend_3 from "../../../../assets/images/trends/trend_3.png";
import trend_4 from "../../../../assets/images/trends/trend_4.png";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Trends = () => {
  return (
    <div className="trends">
      <div className="trends__container">
        <div className="trends__wrapper">
          <div className="trends__top">
            <h3 className="trend__title">Whta's Trending</h3>
            <p className="trend__subtitle">
              These are the products that are trending now.
            </p>
          </div>
          <div className="trends__items">
            <div className="items__container">
              {/* <Carousel responsive={responsive}> */}
              <div className="item">
                <div className="item_img">
                  <img src={trend_1} alt="Trend 1" />
                  <div className="item_img-hover">
                    <div className="trend__hover__btn">
                      <button>ADD TO CART</button>
                    </div>
                    <div className="tren__hover__heart">
                      <AiOutlineHeart />
                    </div>
                    <div className="tren__hover__scan">
                      <IoScan />
                    </div>
                  </div>
                </div>
                <div className="item_text">
                  <div className="item__text-title">
                    <h3>Orange Beanie</h3>
                  </div>
                  <div className="item__text-subtitle">
                    <p>$12.00</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item_img">
                  <img src={trend_2} alt="Trend 1" />
                  <div className="item_img-hover">
                    <div className="trend__hover__btn">
                      <button>ADD TO CART</button>
                    </div>
                    <div className="tren__hover__heart">
                      <AiOutlineHeart />
                    </div>
                    <div className="tren__hover__scan">
                      <IoScan />
                    </div>
                  </div>
                </div>
                <div className="item_text">
                  <div className="item__text-title">
                    <h3>Leather Coat</h3>
                  </div>
                  <div className="item__text-subtitle">
                    <p>$14.00</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item_img">
                  <img src={trend_3} alt="Trend 1" />
                  <div className="item_img-hover">
                    <div className="trend__hover__btn">
                      <button>ADD TO CART</button>
                    </div>
                    <div className="tren__hover__heart">
                      <AiOutlineHeart />
                    </div>
                    <div className="tren__hover__scan">
                      <IoScan />
                    </div>
                  </div>
                </div>
                <div className="item_text">
                  <div className="item__text-title">
                    <h3>Oversize Shirt</h3>
                  </div>
                  <div className="item__text-subtitle">
                    <p>$12.00</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item_img">
                  <img src={trend_4} alt="Trend 1" />
                  <div className="item_img-hover">
                    <div className="trend__hover__btn">
                      <button>ADD TO CART</button>
                    </div>
                    <div className="tren__hover__heart">
                      <AiOutlineHeart />
                    </div>
                    <div className="tren__hover__scan">
                      <IoScan />
                    </div>
                  </div>
                </div>
                <div className="item_text">
                  <div className="item__text-title">
                    <h3>Flora Print Dress</h3>
                  </div>
                  <div className="item__text-subtitle">
                    <p>$14.00</p>
                  </div>
                </div>
              </div>
              {/* </Carousel> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trends;
