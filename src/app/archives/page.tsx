"use client";
import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export default function Archives() {
  useEffect(() => {
    new Swiper(".mySwiper", {
      direction: "vertical",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <>
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">

          {/* SLIDE 1 */}
          <div
            className="swiper-slide"
            style={{
              backgroundImage: "url('/amitimg/sliderbg1.png')",
            }}
          >
            <div className="scontaerd">
              <div className="flexcard">

                <div
                  className="notebg"
                  style={{
                    backgroundImage: "url('/amitimg/note1.png')",
                  }}
                >
                  <h5>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                  </h5>
                  <div className="noteshape">
                    <img src="/images/recording-img1.png" className="recording-img1" />
                  </div>
                </div>

                <div className="mainrightcard">
                  <div className="rightcard">
                    <div className="slidercontent firstcontent">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                    <div className="cardimg">
                      <img src="/amitimg/photo-1.png" />
                      <img src="/images/recording-img2.png" className="recording-img2" />
                    </div>
                  </div>

                  <div className="rightcard endfg">
                    <div className="cardimg">
                      <img src="/amitimg/photo213.png" />
                    </div>
                    <div className="slidercontent text-right">
                      <p className="caveat">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* SLIDE 2 */}
          <div
            className="swiper-slide"
            style={{
              backgroundImage: "url('/amitimg/sliderbg2.png')",
            }}
          >
            <div className="scontaerd">
              <div className="flexcard tow">

                <div className="mainrightcard">

                  <div className="rightcard">
                    <div className="cardimg">
                      <img src="/amitimg/photo-1.png" />
                      <img src="/images/recording-img2.png" className="recording-img2" />
                    </div>
                    <div className="slidercontent text-right">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>

                  <div className="rightcard endfg">
                    <div className="slidercontent firstcontent">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                    <div className="cardimg">
                      <img src="/amitimg/photo213.png" />
                      <img src="/images/recording-img1.png" className="recording-img2" />
                    </div>
                  </div>

                </div>

                <div className="towimgslider">
                  <div
                    className="notebg"
                    style={{
                      backgroundImage: "url('/amitimg/note1.png')",
                    }}
                  >
                    <h5>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </h5>
                    <div className="noteshape">
                      <img src="/images/recording-img1.png" className="recording-img1" />
                    </div>
                  </div>

                  <div className="cardimg">
                    <img src="/amitimg/photo-1.png" />
                    <img src="/images/recording-img2.png" className="recording-img2" />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ARROWS */}
        <div className="sliderarrow">
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>

        {/* Pagination */}
        <div className="swiper-pagination"></div>
      </div>
    </>
  );
}
