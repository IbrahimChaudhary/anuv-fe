"use client";
import { useEffect, useState } from "react";
import Footer from "./footer/Footer";
import $ from "jquery";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("");

  const openModal = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIframeSrc("https://www.youtube.com/embed/bP8ATWCvqzw?autoplay=1&rel=0&modestbranding=1");
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // remove src to stop playback when modal closes
    setTimeout(() => setIframeSrc(""), 300);
  };


const handleScroll = () => {
  const bottomImg = document.querySelector("img.bottom-img");
  if (!bottomImg) return;

  // Add "active" after 50px
  if (window.scrollY > 50) {
    bottomImg.classList.add("active");
  } else {
    bottomImg.classList.remove("active");
  }

  // Add "hide" after 100px
  if (window.scrollY > 0) {
    bottomImg.classList.add("hide");
  } else {
    bottomImg.classList.remove("hide");
  }
};

  useEffect(() => {
        $(document).ready(function () {
       
      $(".nextslide").on("click", function () {
        $(this).addClass('disab'); 
        $('.prevslide').removeClass('disab'); 
        $(".slide2").addClass('active'); 
        
      });
       $(".prevslide").on("click", function () {
        $(this).addClass('disab'); 
        $('.nextslide').removeClass('disab');
        $(".slide2").removeClass('active'); 
      });
    });
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
  return (
    <>
      <main>
        <section className="main-banner">
          <img className="top-img" src="images/banner-top.png" />

          <img className="bottom-img" src="images/banner-bottom.png" />

          <div className="auto-text">
            <h1>Anuv <span>Jain</span> </h1>
       
          </div>

        </section>

        <section className="second-section" style={{ backgroundImage: "url('/images/bg1.png')" }}>
          <div className="second-section-box" style={{ backgroundImage: "url('/images/second-box-img.png')" }}>
            
            <div className="about-anuv">
              <h3>About Anuv </h3>
              {/* <img src="images/about-an.svg" /> */}
              <p>Anuv Jain is an Indian singer-songwriter known for his soulful,
                acoustic indie pop. His breakout tracks like "Baarishein" and
                "Alag Aasmaan" explore themes of love and longing.</p>
              <p>Singing mostly in Hindi, his minimalist style has earned him a
                loyal fanbase. Anuv gained popularity through YouTube and Spotify.
                He remains an independent artist known for his authenticity.</p>
            </div>
            <div className="about-right-imgouter">
            <div className="angal" style={{ backgroundImage: "url('/images/angal.png')" }}> </div>
            <div className="about-right-img">
              <img src="images/about-right-img.jpg" className="rotateanimation" />
            </div>
            <div className="rose">
              <img  className="redstrp" src="images/red-strp.png" />
              <img src="images/text.png" className="text blackstrp" />

            </div>
            </div>
          </div>
        </section>

        <section className="third-section">
          <div className="scribble-line rotateanimation"></div>
            <div className="scribble-line rotateanimation left"></div>
          <div className="innercontainer">
    <img src="images/gig-bg.png" className="rotateanimation3 gig-bg"></img>
          <div className="main-flexsf">
            
            <div className="large-note-paper">
              <div className="positionrelative">
                <div className="bluesimg">
                  <div className="blue-tape">
                    <img src="./images/gigdates.svg" alt="gig" />
                  </div>

                  <div className="polaroid-frame">
                    <img src="./images/indie-music.png" alt="Artist singing" className="rotatfret polaroid-image" />
                  </div>
                </div>
                <div className="paper-clip">
                    <img src="./images/kundi.svg" alt="gig" />
                  </div>
                  <div className="sliderlist">
                <div className="large-note-paper slide1">
                  <img className="bgg" src="images/Names2.svg" />
                  <div className="polaroid-group-row">
                    <div className="polaroid-group">

                    </div>
                    <div className="polaroid-group22">
                      <ul className="dates-list">
                        <li>Lorem Ipsum..........08.07.25</li>
                        <li>Lorem Ipsum..........08.07.25</li>
                        <li>Lorem Ipsum..........08.07.25</li>
                        <li>Lorem Ipsum..........08.07.25</li>
                        <li>Lorem Ipsum..........08.07.25</li>
                      </ul>

                      
                    </div>

                  </div>
                   <div className="stam circle-wrapper">
                  <img src="./images/stam.svg " alt="stamp" className="rotating-circle" />
                </div>
                </div>
                <div className="large-note-paper slide2">
                  <img className="bgg" src="images/Names2.svg" />
                  <div className="polaroid-group-row">
                    <div className="polaroid-group">

                    </div>
                    <div className="polaroid-group22">
                      <ul className="dates-list">
                        <li>Lorem Ipsum..........08.07.25</li>
                        <li>Lorem Ipsum..........08.07.25</li>
                        <li>Lorem Ipsum..........08.07.25</li>
                        <li>Lorem Ipsum..........08.07.25</li>
                        <li>Lorem Ipsum..........08.07.25</li>
                      </ul>

                      
                    </div>

                  </div>
                   <div className="stam circle-wrapper">
                  <img src="./images/stam.svg " alt="stamp" className="rotating-circle" />
                </div>
                </div>
                </div>
                <div className="footer-widgets">
                        <div className="nav-arrows">
                          <span>
                            <img className="prevslide" src="./images/left-arrwo.svg" />
                          </span>
                          <span>
                            <img className="nextslide" src="./images/right-arrwo.svg" />
                          </span>
                        </div>
                      </div>

                <div className="shapesret">
                  <img className="rotateanimation redstrp" src="images/gig-flower2.png" />
                </div>

              </div>
            </div>
          </div>

          <div className="small-card-content">
            <img src="images/left-img.svg" alt="Small portrait" className="small-photo rotateanimation2" />
          </div>
          <div className="green-tape"></div>

          <div className="stamps"></div>

          <div className="afsos">
            <h4>latest <span> release </span></h4>
        
            <div className="letestllestion">
              <img className="rotateanimation" src="images/maxresdefault.jpg"/>
            </div>
          </div>

</div>

        </section>


        <section className="mains-music-bg">
              <img src="images/video-slider-bg.png" className="rotateanimation3 gig-bg bottoms"></img>
          <div className="music-section">
            <div className="stamp-container">
              <h4>Music <span>Videos</span> </h4>
              <div className="stamp-image chain-wrap">
                

                <div className="slider">
                  <div className="slides">

                    <div className="slide">
                      <div className="silde-dote-row">
                        <img className="reletives" src="images/mvideosBG.svg" />
                        <svg className="chain-svg" viewBox="0 0 520 320" preserveAspectRatio="none" aria-hidden="true">
                          <defs>
                            <path id="rectPath" d="M10 10 H510 V310 H10 Z" fill="none" />
                          </defs>
                          <use className="moving-chain" href="#rectPath" stroke="#191919" stroke-width="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                      </div>

                    </div>

                    <div className="slide">
                      <div className="silde-dote-row">
                        <img className="reletives" src="images/mvideosBG.svg" />
                        <svg className="chain-svg" viewBox="0 0 520 320" preserveAspectRatio="none" aria-hidden="true">
                          <defs>
                            <path id="rectPath" d="M10 10 H510 V310 H10 Z" fill="none" />
                          </defs>
                          <use className="moving-chain" href="#rectPath" stroke="#191919" stroke-width="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                      </div>

                    </div>

                  </div>
                </div>

                <button className="prev"><img src="images/slider-arro.svg" /></button>
                <button className="next"><img src="images/slider-arro.svg" /></button> 
              </div>
              <a href="#" className="watch-button" onClick={openModal}>Watch Now</a>
            </div>
          </div>
 

        </section>
        {isOpen && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
            }}
            onClick={closeModal}
          >
            <div
              role="dialog"
              aria-modal="true"
              style={{
                width: "90%",
                maxWidth: 960,
                aspectRatio: "16/9",
                background: "#000",
                position: "relative",
                boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                aria-label="Close video"
                onClick={closeModal}
                style={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  zIndex: 2,
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                  fontSize: 28,
                  lineHeight: 1,
                  cursor: "pointer",
                }}
              >
                ×
              </button>

              <iframe
                src={iframeSrc}
                title="YouTube video player"
                style={{ width: "100%", height: "100%", border: 0 }}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </main>
       <Footer />
    </>
  );
}
