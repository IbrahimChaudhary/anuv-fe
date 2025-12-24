"use client";
import { useEffect, useState } from "react";
import Footer from "./footer/Footer";
import $ from "jquery";
import VideoPlayer from "../Components/VideoPlayer";

export default function Home() {
   const slides = [
  {
    id: 1,
    bgImage: "images/jotum.jpg",
    watchUrl: "https://youtu.be/ilNt2bikxDI?si=hu8w6urE9rN_3LEX",
  },
  {
    id: 2,
    bgImage: "images/husn.jpg",
    watchUrl: "https://youtu.be/gJLVTKhTnog?si=OaiPBRodBbtHTLG7",
  },
  {
    id: 3,
    bgImage: "images/mjaak.jpg",
    watchUrl: "https://youtu.be/zx0YGEi32r0?si=ExVjQeBoXCaphx-A",
  },
  {
    id: 4,
    bgImage: "images/antariksh.jpeg",
    watchUrl: "https://youtu.be/41yIVNzGye8?si=UFrfoOApri8r5JZy",
  },
  {
    id: 5,
    bgImage: "images/eyes.jpg",
    watchUrl: "https://youtu.be/hUORvCLETbI?si=ALH023KlhGRQ7wUO",
  },
   {
    id: 6,
    bgImage: "images/arzkiyah.jpg",
    watchUrl: "https://youtu.be/bP8ATWCvqzw?si=4bsekpdctkLCZZJR",
  },
];


  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const nextSlide = () => {
    if (activeIndex < slides.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };
  const [iframeSrc, setIframeSrc] = useState("");

  const openModal = (
  videoUrl: string,
  e?: React.MouseEvent
) => {
  if (e) e.preventDefault();

  // convert youtu.be or watch?v= to embed
  const videoId = videoUrl.includes("youtu.be")
    ? videoUrl.split("youtu.be/")[1].split("?")[0]
    : videoUrl.split("v=")[1].split("&")[0];

  setIframeSrc(
    `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
  );

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
  //  $(document).ready(function () {

  //   const $slides = $('.large-note-paper-new');
  //   let currentIndex = 0; // first slide active by default

  //   function updateSlides() {
  //     $slides.removeClass('active');
  //     $slides.eq(currentIndex).addClass('active');

  //     // Disable buttons at edges
  //     $('.prevslide').toggleClass('disab', currentIndex === 0);
  //     $('.nextslide').toggleClass('disab', currentIndex === $slides.length - 1);
  //   }

  //   // ✅ INITIAL STATE (IMPORTANT)
  //     setTimeout(() => {
  //       updateSlides();
  //     }, 50);

  //   $('.nextslide').on('click', function () {
  //     if (currentIndex < $slides.length - 1) {
  //       currentIndex++;
  //       updateSlides();
  //     }
  //   });



  //   $('.prevslide').on('click', function () {
  //     if (currentIndex > 0) {
  //       currentIndex--;
  //       updateSlides();
  //     }
  //   });

  // });

$(document).ready(function () {

  const $slides = $('.large-note-paper-new');
  const total = $slides.length;
  let currentIndex = 0;

  function updateSlides() {

    $slides.removeClass('active');

    $slides.each(function (i) {
      // circular distance from active slide
      let distance = (i - currentIndex + total) % total;

      // active = highest, next = second highest, etc
      $(this).css('z-index', total - distance);
    });

    // active slide
    $slides.eq(currentIndex).addClass('active');

    $('.prevslide').toggleClass('disab', currentIndex === 0);
    $('.nextslide').toggleClass('disab', currentIndex === total - 1);
  }

  setTimeout(updateSlides, 50);

  $('.nextslide').on('click', function () {
    if (currentIndex < total - 1) {
      currentIndex++;
      updateSlides();
    }
  });

  $('.prevslide').on('click', function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlides();
    }
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
        <section className="main-banners">
            <VideoPlayer />
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
              <img src="images/anuv-about-img.jpg" className="rotateanimation" />
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
          <div className="innercontainer sliderBlock">
          <img src="images/gig-bg.png" className="rotateanimation3 gig-bg"></img>
          <div className="main-flexsf">
            
            <div className="large-note-paper">
              <div className="positionrelative">
                <div className="bluesimg">
                  <div className="blue-tape">
                    <img src="./images/gigdates.svg" alt="gig" />
                  </div>

                  <div className="polaroid-frame">
                    <img src="./images/gigdatyes.png" alt="Artist singing" className="rotatfret polaroid-image" />
                  </div>
                </div>
                <div className="paper-clip">
                    <img src="./images/kundi.svg" alt="gig" />
                  </div>
                  <div className="sliderlist">
                <div className="large-note-paper large-note-paper-new slide1 ">
                  <img className="bgg" src="images/Names2.svg" />
                  <div className="polaroid-group-row">
                    <div className="polaroid-group">

                    </div>
                    <div className="polaroid-group22">
                      <ul className="dates-list">
                        <li><a href="https://in.bookmyshow.com/events/music-at-repertwahr-festival/ET00465232" target="_blank">Lucknow..........19.12.25</a></li>
                        <li><a href="https://in.bookmyshow.com/events/the-sneak-n-street-fest-6-0/ET00472057" target="_blank">Ludhiana..........25.12.25</a></li>
                        <li><a href="https://link.district.in/DSTRKT/4oxualxk" target="_blank">Goa..........31.12.25</a></li>
                        <li><a href="https://in.bookmyshow.com/events/anuv-jain-live-in-chennai/ET00472732" target="_blank">Chennai..........04.01.26</a></li>
                        <li><a href="https://link.district.in/DSTRKT/4tehg3y0" target="_blank">Guwahati..........13.01.26</a></li>
                      </ul>

                      
                    </div>

                  </div>
                   <div className="stam circle-wrapper">
                  <img src="./images/stam.svg " alt="stamp" className="rotating-circle" />
                </div>
                </div>
                <div className="large-note-paper large-note-paper-new slide2">
                  <img className="bgg" src="images/Names2.svg" />
                  <div className="polaroid-group-row">
                    <div className="polaroid-group">

                    </div>
                    <div className="polaroid-group22">
                      <ul className="dates-list">
                        <li><a href="https://in.bookmyshow.com/events/anuv-jain-dastakhat-india-tour-delhi/ET00470692" target="_blank">Delhi..........16.01.26</a></li>
                        <li><a href="https://in.bookmyshow.com/events/anuv-jain-dastakhat-india-tour-ahmedabad/ET00470481" target="_blank">Ahmedabad..........18.01.26</a></li>
                        <li><a href="https://in.bookmyshow.com/events/anuv-jain-dastakhat-india-tour-pune/ET00470688" target="_blank">Pune..........23.01.26</a></li>
                        <li><a href="https://in.bookmyshow.com/events/anuv-jain-dastakhat-india-tour-chandigarh/ET00470682" target="_blank">Chandigarh..........30.01.26</a></li>
                        <li><a href="https://in.bookmyshow.com/events/anuv-jain-dastakhat-india-tour-kolkata/ET00470691" target="_blank">Kolkata..........01.02.26</a></li>
                      </ul>

                      
                    </div>

                  </div>
                   <div className="stam circle-wrapper">
                  <img src="./images/stam.svg " alt="stamp" className="rotating-circle" />
                </div>
                </div>
                <div className="large-note-paper large-note-paper-new slide3 active">
                  <img className="bgg" src="images/Names2.svg" />
                  <div className="polaroid-group-row">
                    <div className="polaroid-group">

                    </div>
                    <div className="polaroid-group22">
                      <ul className="dates-list">
                        <li><a href="https://in.bookmyshow.com/events/anuv-jain-dastakhat-india-tour-hyderabad/ET00470690" target="_blank">Hyderabad..........06.02.26</a></li>
                        <li><a href="https://in.bookmyshow.com/events/anuv-jain-dastakhat-india-tour-indore/ET00470486" target="_blank">Indore..........08.02.26</a></li>
                        <li><a href="https://in.bookmyshow.com/events/anuv-jain-dastakhat-india-tour-mumbai/ET00470487" target="_blank">Mumbai..........14.02.26</a></li>
                        <li><a href="https://in.bookmyshow.com/events/anuv-jain-dastakhat-india-tour-jaipur/ET00470489" target="_blank">Jaipur..........20.02.26</a></li>
                        <li><a href="https://in.bookmyshow.com/events/anuv-jain-dastakhat-india-tour-bengaluru/ET00470482" target="_blank">Bengaluru..........22.02.26</a></li>
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
            <img src="images/photostrip.png" alt="Small portrait" className="small-photo rotateanimation2" />
          </div>
          <div className="green-tape"></div>

          <div className="stamps"></div>

          <div className="afsos">
            <h4>latest <span> release </span></h4>
        
            <div className="letestllestion">
              <a target="_blank" href="https://linktr.ee/DastakhatWorldTour2026"><img className="rotateanimation" src="images/maxresdefault.png"/></a>
            </div>
          </div>

</div>

        </section>


        <section className="mains-music-bg">
      <img
        src="images/video-slider-bg.png"
        className="rotateanimation3 gig-bg bottoms"
        alt=""
      />

      <div className="music-section">
        <div className="stamp-container">
          <h4>Music <span>Videos</span></h4>

          <div className="stamp-image chain-wrap">
            <div className="slider">
              <div
                className="slides"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`slide ${activeIndex === index ? "active" : ""}`}
                  >
                    <div className="silde-dote-row">
                      <img
                          className="reletives"
                          src={slides[index].bgImage}
                          alt={`Music video ${slides[index].id}`}
                        />

                      <a
                      href="#"
                      onClick={(e) => openModal(slides[activeIndex].watchUrl, e)
                      }>
                      <svg
                        className="chain-svg"
                        viewBox="0 0 520 320"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <defs>
                          <path
                            id={`rectPath-${index}`}
                            d="M10 10 H510 V310 H10 Z"
                            fill="none"
                          />
                        </defs>

                        <use
                          className="moving-chain"
                          href={`#rectPath-${index}`}
                          stroke="#191919"
                          strokeWidth="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <button
              className="prev"
              onClick={prevSlide}
              disabled={activeIndex === 0}
            >
              <img src="images/slider-arro.svg" alt="prev" />
            </button>

            <button
              className="next"
              onClick={nextSlide}
              disabled={activeIndex === slides.length - 1}
            >
              <img src="images/slider-arro.svg" alt="next" />
            </button>
          </div>
          <a
            href="#"
            className="watch-button"
            onClick={(e) =>
              openModal(slides[activeIndex].watchUrl, e)
            }
          >
            Watch Now
          </a>
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
