"use client";
import { useEffect } from "react";
import $ from "jquery";

export default function Foryou() {
  useEffect(() => {
    const handleScroll = () => {
      const windowTop = $(window).scrollTop() || 0;
      const windowBottom = windowTop + $(window).height()!;

      $(".fade-section").each(function () {
        const elementTop = $(this).offset()!.top;
        const elementBottom = elementTop + $(this).outerHeight()!;

        if (elementBottom > windowTop + 100 && elementTop < windowBottom - 100) {
          $(this).addClass("visible").removeClass("hidden");
        } else {
          $(this).addClass("hidden").removeClass("visible");
        }
      });
    };

    // Attach event
    $(window).on("scroll", handleScroll);

    // Trigger once on mount
    handleScroll();

    // Cleanup on unmount
    return () => {
      $(window).off("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <main className="archivemain">
        <section className=" fade-section playlistfirstsection">
          <div className="flexingsitems">
            <img src="amitimg/forthahart.svg" />
          </div>
          <div className="flexcontent">
            <div className="textanimationply">
            <img src="images/text-rom2.svg "/>
            </div>

            <div className="shaeaericon">
              <ul>
                <li className="sheareicon"><a href="#">
                  <img src="amitimg/share.svg" />
                </a>


                  <div className="listsocial">
                    <ul>
                      <li><a href="#"><img src="amitimg/instagram.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/twitter.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/whatshap.svg" /></a></li>
                    </ul>
                  </div>


                </li>
                <li className="unionclass"><a href="#"><img className="shearesd" src="amitimg/union.svg" /></a>

                  <div className="unionsocial">
                    <ul>
                      <li><a href="#"><img src="amitimg/Spotify.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/play.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/musci.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/musci2.svg" /></a></li>
                    </ul>
                  </div>


                </li>
              </ul>


            </div>
          </div>
        </section>



        <section className=" fade-section playlistfirstsection">
          <div className="flexingsitems">
            <img src="amitimg/playlist2.svg" />
          </div>
          <div className="flexcontent">
            <div className="textanimationply">
            <img src="images/text-rom2.svg "/>

            </div>

            <div className="shaeaericon">
              <ul>
                <li className="sheareicon"><a href="#">
                  <img src="amitimg/share.svg" />
                </a>


                  <div className="listsocial">
                    <ul>
                      <li><a href="#"><img src="amitimg/instagram.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/twitter.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/whatshap.svg" /></a></li>
                    </ul>
                  </div>


                </li>
                <li className="unionclass"><a href="#"><img className="shearesd" src="amitimg/union.svg" /></a>

                  <div className="unionsocial">
                    <ul>
                      <li><a href="#"><img src="amitimg/Spotify.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/play.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/musci.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/musci2.svg" /></a></li>
                    </ul>
                  </div>


                </li>
              </ul>


            </div>
          </div>
        </section>

        <section className=" fade-section playlistfirstsection">
          <div className="flexingsitems">
            <img src="amitimg/playlist3.svg" />
          </div>
          <div className="flexcontent">
            <div className="textanimationply">
              <img src="images/text-rom2.svg "/>

            </div>

            <div className="shaeaericon">
              <ul>
                <li className="sheareicon"><a href="#">
                  <img src="amitimg/share.svg" />
                </a>


                  <div className="listsocial">
                    <ul>
                      <li><a href="#"><img src="amitimg/instagram.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/twitter.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/whatshap.svg" /></a></li>
                    </ul>
                  </div>


                </li>
                <li className="unionclass"><a href="#"><img className="shearesd" src="amitimg/union.svg" /></a>

                  <div className="unionsocial">
                    <ul>
                      <li><a href="#"><img src="amitimg/Spotify.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/play.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/musci.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/musci2.svg" /></a></li>
                    </ul>
                  </div>


                </li>
              </ul>


            </div>
          </div>
        </section>

        <section className=" fade-section playlistfirstsection">
          <div className="flexingsitems">
            <img src="amitimg/playlist4.svg" />
          </div>
          <div className="flexcontent">
            <div className="textanimationply">
              <img src="images/text-rom2.svg "/>


            </div>
            <div className="shaeaericon">
              <ul>
                <li className="sheareicon"><a href="#">
                  <img src="amitimg/share.svg" />
                </a>


                  <div className="listsocial">
                    <ul>
                      <li><a href="#"><img src="amitimg/instagram.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/twitter.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/whatshap.svg" /></a></li>
                    </ul>
                  </div>


                </li>
                <li className="unionclass"><a href="#"><img className="shearesd" src="amitimg/union.svg" /></a>

                  <div className="unionsocial">
                    <ul>
                      <li><a href="#"><img src="amitimg/Spotify.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/play.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/musci.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/musci2.svg" /></a></li>
                    </ul>
                  </div>


                </li>
              </ul>


            </div>
          </div>
        </section>
        <section className=" fade-section playlistfirstsection">
          <div className="flexingsitems">
            <img src="amitimg/playlist5.svg" />
          </div>
          <div className="flexcontent">
            <div className="textanimationply">
             <img src="images/text-rom2.svg "/>

            </div>

            <div className="shaeaericon">
              <ul>
                <li className="sheareicon"><a href="#">
                  <img src="amitimg/share.svg" />
                </a>


                  <div className="listsocial">
                    <ul>
                      <li><a href="#"><img src="amitimg/instagram.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/twitter.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/whatshap.svg" /></a></li>
                    </ul>
                  </div>


                </li>
                <li className="unionclass"><a href="#"><img className="shearesd" src="amitimg/union.svg" /></a>

                  <div className="unionsocial">
                    <ul>
                      <li><a href="#"><img src="amitimg/Spotify.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/play.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/musci.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/musci2.svg" /></a></li>
                    </ul>
                  </div>


                </li>
              </ul>


            </div>
          </div>
        </section>
      </main>
    </>
  );
}
