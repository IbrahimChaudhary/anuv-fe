"use client";
import { useEffect, useState } from "react";
import Footer from "./footer/Footer";
import $ from "jquery";
import VideoPlayerThird from "../Components/VideoPlayerThird";

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
  //New 30/dec
  {
    id: 7,
    bgImage: "images/Afsos.jpg",
    watchUrl: "https://youtu.be/2FhgKp_lfJQ?si=riHIx53ATdKfZsiQ",
  },
  {
    id: 8,
    bgImage: "images/Gul_final_artwork.jpg",
    watchUrl: "https://youtu.be/AMVE18zBp0w?si=BL01bmo26qPHuKVf",
  },
  {
    id: 9,
    bgImage: "images/ALAG_AASMAAN_OPEN_FILE.jpg",
    watchUrl: "https://youtu.be/vA86QFrXoho?si=6wpQKc1ORc8rzVq1",
  },
  {
    id: 10,
    bgImage: "images/Mishri_Artwork.jpg",
    watchUrl: "https://youtu.be/0P3Gt-60yLc?si=s9LhNtu3Wu1RNZ4_",
  },
  {
    id: 11,
    bgImage: "images/Maula_artwork.jpg",
    watchUrl: "https://youtu.be/CvV5P-mgaR8?si=tumYPrwdye1mSCEI",
  },
  {
    id: 12,
    bgImage: "images/Riha_Square_with_text.jpg",
    watchUrl: "https://youtu.be/9et5qzuzbQM?si=nnn3l-tg-ZHBND12",
  },
  {
    id: 13,
    bgImage: "images/Ocean_iTunes_version.jpg",
    watchUrl: "https://youtu.be/Y2zc2IeVX_g?si=zrft6JaoSyjS4toc",
  },
  {
    id: 14,
    bgImage: "images/Baarishein_final_artwork.jpg",
    watchUrl: "https://youtu.be/PJWemSzExXs?si=b8bS8aexl4Ymw-95",
  }
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

  //   // INITIAL STATE (IMPORTANT)
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
            <VideoPlayerThird />
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
                 <div className="large-note-paper large-note-paper-new slide3">
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
                <div className="large-note-paper large-note-paper-new slide4 ">
                  <img className="bgg" src="images/Names2.svg" />
                  <div className="polaroid-group-row">
                    <div className="polaroid-group">

                    </div>
                    <div className="polaroid-group22">  
                      <ul className="dates-list">
                        <li><a href="#" target="_blank">Dubai..........12.04.26</a></li>
                        <li><a href="#" target="_blank">Chicago..........01.05.26</a></li>
                        <li><a href="#" target="_blank">Boston..........03.05.26</a></li>
                        <li><a href="#" target="_blank">New York..........05.05.26</a></li>
                        <li><a href="#" target="_blank">Atlanta..........08.05.26</a></li>
                      </ul>
                    </div>
                  </div>
                   <div className="stam circle-wrapper">
                  <img src="./images/stam.svg " alt="stamp" className="rotating-circle" />
                </div>
                </div>
                <div className="large-note-paper large-note-paper-new slide5 ">
                  <img className="bgg" src="images/Names2.svg" />
                  <div className="polaroid-group-row">
                    <div className="polaroid-group">

                    </div>
                    <div className="polaroid-group22">  
                      <ul className="dates-list">
                        <li><a href="#" target="_blank">Dallas..........09.05.26</a></li>
                        <li><a href="#" target="_blank">San Francisco..........11.05.26</a></li>
                        <li><a href="#" target="_blank">Boston..........03.05.26</a></li>
                        <li><a href="#" target="_blank">Singapore..........28.07.26</a></li>
                        <li><a href="#" target="_blank">Malaysia..........29.07.26</a></li>
                      </ul>
                    </div>
                  </div>
                   <div className="stam circle-wrapper">
                  <img src="./images/stam.svg " alt="stamp" className="rotating-circle" />
                </div>
                </div>
                <div className="large-note-paper large-note-paper-new slide6">
                  <img className="bgg" src="images/Names2.svg" />
                  <div className="polaroid-group-row">
                    <div className="polaroid-group">

                    </div>
                    <div className="polaroid-group22">  
                      <ul className="dates-list">
                        <li><a href="https://tickets.393murray.com.au/outlet/event/809005b6-af49-41f9-a666-3b383c239cd6?utm_source=Oztix&utm_medium=Website" target="_blank">Perth..........31.07.26</a></li>
                        <li><a href="https://premier.ticketek.com.au/events/JAINANUV26/venues/NMO/performances/ENMO2026826AJ?clickref=1100lBNX46a2&utm_source=spotify&utm_medium=referral&utm_campaign=spotify_events" target="_blank">Sydney..........11.05.26</a></li>
                        <li><a href="https://premier.ticketek.com.au/events/JAINANUV26/venues/FRM/performances/EFMC2026830AJ?clickref=1011lBV7eKmM&utm_source=spotify&utm_medium=referral&utm_campaign=spotify_events" target="_blank">Melbourne..........06.08.26</a></li>
                        <li><a href="https://www.moshtix.com.au/v2/event/anuv-jain-dastakhat-world-tour-2026/188497?utm_medium=affiliate&clickId=SdURcqXkZxycTDf3ytyoHTtWUkpVHO1cZ2IBwQ0&ircid=23905&camefrom=CFC_BUYAT_296934&impradid=296934&REFERRAL_ID=tmfeedbuyat296934&wt.mc_id=aff_BUYAT_296934&utm_source=296934-Spotify&impradname=Spotify&irgwc=1&afsrc=1" target="_blank">Adelaide..........08.08.26</a></li>
                        <li><a href="https://www.moshtix.com.au/v2/event/anuv-jain-dastakhat-world-tour-2026/188497?utm_medium=affiliate&clickId=SdURcqXkZxycTDf3ytyoHTtWUkpVHO1cZ2IBwQ0&ircid=23905&camefrom=CFC_BUYAT_296934&impradid=296934&REFERRAL_ID=tmfeedbuyat296934&wt.mc_id=aff_BUYAT_296934&utm_source=296934-Spotify&impradname=Spotify&irgwc=1&afsrc=1" target="_blank">Brisbane..........09.08.26</a></li>
                      </ul>
                    </div>
                  </div>
                   <div className="stam circle-wrapper">
                  <img src="./images/stam.svg " alt="stamp" className="rotating-circle" />
                </div>
                </div>
                <div className="large-note-paper large-note-paper-new slide7">
                  <img className="bgg" src="images/Names2.svg" />
                  <div className="polaroid-group-row">
                    <div className="polaroid-group">

                    </div>
                    <div className="polaroid-group22">  
                      <ul className="dates-list">
                        <li><a href="https://www.ticketmaster.fr/fr/manifestation/anuv-jain-billet/idmanif/640461/idtier/18864121?utm_medium=affiliate&clickId=SdURcqXkZxycTDf3ytyoHTtWUkpVHORwZ2IBwQ0&irgwc=1&afsrc=1&utm_source=Spotify&utm_campaign=296934&utm_content=1107977_7516" target="_blank">Paris..........16.09.26</a></li>
                        <li><a href="https://www.eventim.de/noapp/event/anuv-jain-dastakhat-tour-batschkapp-20915051/?affiliate=IFY&utm_source=IFY&utm_medium=dp&utm_campaign=spotify&clickref=1100lBNX4s9Z&affiliate=IFY&utm_campaign=spotify&utm_medium=dp&utm_source=IFY" target="_blank">Frankfurt..........18.09.26</a></li>
                        <li><a href="https://www.eventim.de/noapp/event/anuv-jain-dastakhat-tour-columbia-theater-20919065/?affiliate=IFY&utm_source=IFY&utm_medium=dp&utm_campaign=spotify&clickref=1100lBNX4uvL&affiliate=IFY&utm_campaign=spotify&utm_medium=dp&utm_source=IFY" target="_blank">Berlin..........19.09.26</a></li>
                        <li><a href="https://www.tickettailor.com/events/theconcertcornerdhop/1949323/r/anuv-glasgow" target="_blank">Glasgow..........24.09.26</a></li>
                        <li><a href="https://www.tickettailor.com/events/theconcertcornerdhop/1949308/r/anuv-mcr" target="_blank">Manchester..........26.09.26</a></li>
                      </ul>
                    </div>
                  </div>
                   <div className="stam circle-wrapper">
                  <img src="./images/stam.svg " alt="stamp" className="rotating-circle" />
                </div>
                </div>
                <div className="large-note-paper large-note-paper-new slide8 active">
                  <img className="bgg" src="images/Names2.svg" />
                  <div className="polaroid-group-row">
                    <div className="polaroid-group">

                    </div>
                    <div className="polaroid-group22">  
                      <ul className="dates-list">
                       
                        <li><a href="https://www.tickettailor.com/events/theconcertcornerdhop/1949339/r/anuv-bham" target="_blank">Birmingham..........27.09.26</a></li>
                        <li><a href="https://www.tickettailor.com/events/theconcertcornerdhop/1949336/r/anuv-ldn" target="_blank">London..........30.09.26</a></li>
                        <li><a href="https://www.ticketmaster.ie/anuv-jain-dublin-01-10-2026/event/1800636ECC85D790?utm_medium=affiliate&clickId=R98S9lXkexycTDf3ytyoHTtWUkpVHL3cZ2IBwQ0&irgwc=1&afsrc=1&utm_source=296934-Spotify&utm_campaign=296934&ircid=23889&camefrom=CFC_BUYAT_296934" target="_blank">Dublin..........01.10.26</a></li>
                        <li><a href="https://www.tickettailor.com/events/theconcertcornerdhop/1949333/r/anuv-amsterdam" target="_blank">Amsterdam..........04.10.26</a></li>
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
              <a target="_blank" href="https://umgi.lnk.to/Inaam_AnuvJain"><img className="rotateanimation" src="images/maxresdefault.png"/></a>
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
