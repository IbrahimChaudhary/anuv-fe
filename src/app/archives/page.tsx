"use client";
import { useEffect, useState } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import Waveform from "../../Components/Waveform";

export default function Archives() {
  const tracks = [
    {
      id: 0,
      title: "Brahms: St Anthony Chorale - Theme, Two Pianos Op.56b",
      image: '/images/audio-bg-banner.png',
      url:
        "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3"
    },
    {
      id: 1,
      title: "Brahms: St Anthony Chorale - Theme, Two Pianos Op.56b",
      image: '/images/audio-bg-banner.png',
      url:
        "https://open.spotify.com/playlist/1NNDC3iEmW713FyEW9ATPV?si=5d9e73d20a4340b2&pt=f7d46d68c636b371dded3d32afc0f8e3"
    },
    {
      id: 2,
      title: "Franz Schubert's Ständchen - Voice (Clarinet) & Piano",
      image: '/images/audio-bg-banner.png',
      url:
        "https://open.spotify.com/playlist/77PQ0tod2pd6kdjt1YFEi9?si=d3d343745919400b&pt=36d2da0ef820fa91ba35d3e1e6e756ec",
    },
    {
      id: 3,
      title: "Franz Schubert's Ständchen - Voice (Clarinet) & Piano",
      image: '/images/audio-bg-2.png',
      url:
        "https://open.spotify.com/playlist/3gxeqLI1slTkTC2EFmfHDw?si=5b0b72991a1f4198&pt=bc1e1543e12fb2760f0a808f58ff24c7",
    },
    {
      id: 4,
      title: "Franz Schubert's Ständchen - Voice (Clarinet) & Piano",
      image: '/images/audio-bg-banner.png',
      url:
        "https://open.spotify.com/playlist/6uLYko9JSO0ar0dJhlariP?si=6a38e508a88c47d2&pt=0814e4e843051876a0262d074ca44067",
    }
  ];

  const [selectedTrack] = useState(tracks[0]);

  useEffect(() => {
    new Swiper(".mySwiper", {
      direction: "vertical",
      mousewheel: true,
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
                    <Waveform image={tracks[0].image} url={tracks[0].url} />
                  </div>
                </div>

                <div className="mainrightcard">
                  <div className="rightcard">
                    <div className="slidercontent firstcontent">
                      <p>
                        Lorem ipsum dolor sit amet,<br />
                        consectetur adipiscing elit,<br />
                        sed do eiusmod tempor<br />
                        incididunt ut labore et dolore<br />
                        magna aliqua. Quis ipsum<br />
                        suspendisse ultricies gravida.<br />
                        Risus commodo viverra maecenas<br />
                        accumsan lacus vel facilisis.<br />

                      </p>
                    </div>
                    <div className="cardimg">
                      <img src="/amitimg/photo-1.png" />
                      <img src="/images/recording-img2.png" className="recording-img2" />
                      {/* <Waveform image={tracks[1].image} url={tracks[1].url} /> */}
                    </div>
                  </div>

                  <div className="rightcard endfg">
                    <div className="cardimg rights">
                      <img src="/amitimg/photo213.png" />
                    </div>
                    <div className="slidercontent text-right">
                      <h5 className="caveat">
                        lorem ipsum dolor sit amet
                        consectetur adipiscing elit sed do
                        eiusmod tempor incididunt ut labore
                        et dolore magna aliqua

                      </h5>
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
                      {/* <Waveform image={tracks[2].image} url={tracks[2].url} /> */}
                    </div>
                    <div className="slidercontent text-right">
                      <h5 className="caveat">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                      </h5>
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
                      <img src="/images/recording-img1.png" className="recording-img2" />4
                      {/* <Waveform image={tracks[3].image} url={tracks[3].url} /> */}
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
                      <Waveform image={tracks[4].image} url={tracks[4].url} />
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
