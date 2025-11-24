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
          <div className="innercontainer">
            <div className="fleging">
          <div className="flexingsitems">
            <div className="paycard">
            <img src="images/list1.jpg" />
            </div>
          </div>
          <div className="flexcontent">
            <div className="textanimationply">
              <h3>The Silent <br/> RomAntic </h3>
              <div className="contentmusiclist">
                <h5>Baarishein..........3:47</h5>
                <h5>Mishri..............3:47</h5>
                <h5>Jul.................3:47</h5>
                <h5>Maula................3:47</h5>
              </div>
            
            </div>

            <div className="shaeaericon">
              <ul>
                <li className="sheareicon">
                  <a href="#"> <img src="amitimg/share.svg" /></a>
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
          </div>
          </div>
        </section>



        <section className=" fade-section playlistfirstsection">
           <div className="innercontainer">
            <div className="fleging">
          <div className="flexingsitems">
              <div className="paycard">
            <img src="images/list2.jpg" />
            </div>
          </div>
          <div className="flexcontent">
           <div className="textanimationply">
              <h3>He Healin <br/> Heart </h3>
              <div className="contentmusiclist">
                <h5>Baarishein..........3:47</h5>
                <h5>Mishri..............3:47</h5>
                <h5>Roz Roz.............3:47</h5>
                <h5>Husn................3:47</h5>
              </div>
            
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
          </div>
          </div>
        </section>

        <section className=" fade-section playlistfirstsection">
          <div className="innercontainer">
            <div className="fleging">
          <div className="flexingsitems">
              <div className="paycard">
           <img src="images/list3.jpg" />
           </div>
          </div>
          <div className="flexcontent">
            <div className="textanimationply">
              <h3>The Quiet <br/> Ob Server </h3>
              <div className="contentmusiclist">
                <h5>Mula................3:47</h5>
                <h5>Guzara..............3:47</h5>
                <h5>Alag Aasmaan........3:47</h5>
                <h5>Riha................3:47</h5>
              </div>
            
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
          </div>
          </div>
        </section>

        <section className=" fade-section playlistfirstsection">
          <div className="innercontainer">
            <div className="fleging">
          <div className="flexingsitems">
              <div className="paycard">
            <img src="images/list4.jpg" />
            </div>
          </div>
          <div className="flexcontent">
            <div className="textanimationply">
 <h3>` E Hopele <br/> Dreamer </h3>
              <div className="contentmusiclist">
                <h5>Ocena...............3:47</h5>
                <h5>Mishri..............3:47</h5>
                <h5>Husn................3:47</h5>
                <h5>Gul.................3:47</h5>
              </div>
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
          </div>
          </div>
        </section>
        <section className=" fade-section playlistfirstsection">
          <div className="innercontainer">
            <div className="fleging">
            <div className="flexingsitems">
                <div className="paycard">
            <img src="images/list5.jpg" />
            </div>
          </div>
          <div className="flexcontent">
           <div className="textanimationply">
 <h3>` E Midni Gi <br/> Thinker </h3>
              <div className="contentmusiclist">
                <h5>Roz Roz.............3:47</h5>
                 <h5>Guzara.............3:47</h5>
                <h5>Antariksk...........3:47</h5>
                <h5>Baarishein..........3:47</h5>
              </div>
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
          </div>
          </div>
        </section>
      </main>
    </>
  );
}
