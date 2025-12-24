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
            <div className="paycard first-custom-class">
            <img src="images/hopethisreaachesyou.jpg" />
            </div>
          </div>
          <div className="flexcontent">
            <div className="textanimationply">
              <h3>hope this reaches<br/> to you..</h3>
              <div className="contentmusiclist">
                <h5>Gul................3:37</h5>
                <h5>Arz Kiya hai.......4:54</h5>
                <h5>Jo Tum Mere Ho.....3:47</h5>
              </div>
            
            </div>

            <div className="shaeaericon">
              <ul>
                {/* <li className="sheareicon">
                  <a href="#"> <img src="amitimg/share.svg" /></a>
                  <div className="listsocial">
                    <ul>
                      <li><a href="https://www.instagram.com/anuvjain?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><img src="amitimg/instagram.svg" /></a></li>
                      <li><a href="https://x.com/AnuvJain"><img src="amitimg/twitter.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/whatshap.svg" /></a></li>
                    </ul>
                  </div>
                </li> */}
                <li className="unionclass"><a href="#"><img className="shearesd" src="amitimg/union.svg" /></a>
 <div className="unionsocial">
                    <ul>
                      <li><a href="https://open.spotify.com/playlist/6uLYko9JSO0ar0dJhlariP?si=c80164f555cc4806"><img src="amitimg/Spotify.svg" /></a></li>
                      <li><a href="https://gaana.com/playlist/hope-this-reaches-to-you-q3zzzovn35"><img src="amitimg/play.svg" /></a></li>
                      <li><a href="https://www.jiosaavn.com/s/playlist/0156e466589dc853f56181b4182bb477/wish-you-could-stay-a-little-longer../MRGVtc0ooVuTQcXlxedPDQ__"><img src="amitimg/musci.svg" /></a></li>
                      <li><a href="https://music.amazon.in/user-playlists/1187c65d82954325afa9537c1953898di8n0?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_7sRezDrYuoaAeWq0uRIeUTSzt"><img src="amitimg/musci2.svg" /></a></li>
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
            <img src="images/idonwanttobreamysleepnow.jpg" />
            </div>
          </div>
          <div className="flexcontent">
           <div className="textanimationply">
              <h3>i don’t want to break <br/>my sleep now..</h3>
              <div className="contentmusiclist">
                <h5>Ocean..........4:13</h5>
                <h5>Majaak..............3:32</h5>
              </div>
            </div>

            <div className="shaeaericon">
              <ul>
                {/* <li className="sheareicon"><a href="#">
                  <img src="amitimg/share.svg" />
                </a>


                  <div className="listsocial">
                   <ul>
                      <li><a href="https://www.instagram.com/anuvjain?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><img src="amitimg/instagram.svg" /></a></li>
                      <li><a href="https://x.com/AnuvJain"><img src="amitimg/twitter.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/whatshap.svg" /></a></li>
                    </ul>
                  </div>


                </li> */}
                <li className="unionclass"><a href="#"><img className="shearesd" src="amitimg/union.svg" /></a>

                  <div className="unionsocial">
                    <ul>
                      <li><a href="https://open.spotify.com/playlist/4QymFR7eKZfbOsQHaFnHRT?si=p_FSTIF9QKu8cfz8HqkSBQ"><img src="amitimg/Spotify.svg" /></a></li>
                      <li><a href="https://gaana.com/playlist/i-dont-want-to-break-my-sleep-now-9bqgdr9y3y"><img src="amitimg/play.svg" /></a></li>
                      <li><a href="https://www.jiosaavn.com/s/playlist/0156e466589dc853f56181b4182bb477/i-dont-want-to-break-my-sleep-now../yID7uY2euCXhCuZvyzI2qg__"><img src="amitimg/musci.svg" /></a></li>
                      <li><a href="https://music.amazon.in/user-playlists/9ce66c33b93542e688fa786309035750i8n0?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_vAmdhpQIBFEDIhmtiUXnC3bsd"><img src="amitimg/musci2.svg" /></a></li>
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
           <img src="images/whoamieventoyou.jpg" />
           </div>
          </div>
          <div className="flexcontent">
            <div className="textanimationply">
              <h3>who am i <br/>even to you??</h3>
              <div className="contentmusiclist">
                <h5>Antariksh........................2:45</h5>
                <h5>Meri Baaton Mein Tu..............3:34</h5>
              </div>
            
            </div>

            <div className="shaeaericon">
              <ul>
                {/* <li className="sheareicon"><a href="#">
                  <img src="amitimg/share.svg" />
                </a>


                  <div className="listsocial">
                     <ul>
                      <li><a href="https://www.instagram.com/anuvjain?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><img src="amitimg/instagram.svg" /></a></li>
                      <li><a href="https://x.com/AnuvJain"><img src="amitimg/twitter.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/whatshap.svg" /></a></li>
                    </ul>
                  </div>


                </li> */}
                <li className="unionclass"><a href="#"><img className="shearesd" src="amitimg/union.svg" /></a>

                  <div className="unionsocial">
                    <ul>
                      <li><a href="https://open.spotify.com/playlist/7cZkAnTdS8CkCBFtuV8NaT?si=WI2Cc8bgQQSa35skbXfN-w"><img src="amitimg/Spotify.svg" /></a></li>
                      <li><a href="https://gaana.com/playlist/who-am-i-even-to-you-vkxze4kpwm"><img src="amitimg/play.svg" /></a></li>
                      <li><a href="https://www.jiosaavn.com/s/playlist/0156e466589dc853f56181b4182bb477/who-am-i-even-to-you/MRGVtc0ooVvvefui-x9TIw__"><img src="amitimg/musci.svg" /></a></li>
                      <li><a href="https://music.amazon.in/user-playlists/a80ae96cf6c0457fa44b83e5f56d2174i8n0?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_Jt5SWqnuow0kr5CEWquUGVVHr"><img src="amitimg/musci2.svg" /></a></li>
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
            <img src="images/feellikeicouldkeeplisteningtoyou.jpg" />
            </div>
          </div>
          <div className="flexcontent">
            <div className="textanimationply"> 
           <h3>feel like I could keep<br/> listening to you..</h3>
              <div className="contentmusiclist">
                <h5>Baarishein..........3:27</h5>
                <h5>Mishri..............3:20</h5>
                 <h5>Husn.............3:37</h5>
              </div>
            </div>
            <div className="shaeaericon">
              <ul>
                {/* <li className="sheareicon"><a href="#">
                  <img src="amitimg/share.svg" />
                </a>


                  <div className="listsocial">
                    <ul>
                      <li><a href="#"><img src="amitimg/instagram.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/twitter.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/whatshap.svg" /></a></li>
                    </ul>
                  </div>


                </li> */}
                <li className="unionclass"><a href="#"><img className="shearesd" src="amitimg/union.svg" /></a>

                  <div className="unionsocial">
                    <ul>
                      <li><a href="https://open.spotify.com/playlist/1VRvutdRSi5iv0xmaKfTsY?si=xPIym1GlR0-_nV9SJFaoCg"><img src="amitimg/Spotify.svg" /></a></li>
                      <li><a href="https://gaana.com/playlist/feel-like-i-could-keep-listening-to-you-lwbnenbjwz"><img src="amitimg/play.svg" /></a></li>
                      <li><a href="https://www.jiosaavn.com/s/playlist/0156e466589dc853f56181b4182bb477/feel-like-i-could-keep-listening-to-you../MRGVtc0ooVtkVFjX2wgHNA__"><img src="amitimg/musci.svg" /></a></li>
                      <li><a href="https://music.amazon.in/user-playlists/c0b8a16e903743c4a2277ece1cd88db6i8n0?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_nVHNynCUotzotjNI7xFCSHbhF"><img src="amitimg/musci2.svg" /></a></li>
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
            <img src="images/wishyoucouldstayalittlelonger.jpg" />
            </div>
          </div>
          <div className="flexcontent">
           <div className="textanimationply"> 
            <h3>wish you could stay<br/>  a little longer..</h3>
              <div className="contentmusiclist">
                <h5>Maula..........3:27</h5>
                <h5>Mishri..............3:20</h5>
                 <h5>Husn.............3:37</h5>
              </div>
            </div>

            <div className="shaeaericon">
              <ul>
                {/* <li className="sheareicon"><a href="#">
                  <img src="amitimg/share.svg" />
                </a>


                  <div className="listsocial">
                    <ul>
                      <li><a href="#"><img src="amitimg/instagram.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/twitter.svg" /></a></li>
                      <li><a href="#"><img src="amitimg/whatshap.svg" /></a></li>
                    </ul>
                  </div>


                </li> */}
                <li className="unionclass"><a href="#"><img className="shearesd" src="amitimg/union.svg" /></a>

                  <div className="unionsocial">
                    <ul>
                      <li><a href="https://open.spotify.com/playlist/1VRvutdRSi5iv0xmaKfTsY?si=xPIym1GlR0-_nV9SJFaoCg"><img src="amitimg/Spotify.svg" /></a></li>
                      <li><a href="https://gaana.com/playlist/feel-like-i-could-keep-listening-to-you-lwbnenbjwz"><img src="amitimg/play.svg" /></a></li>
                      <li><a href="https://www.jiosaavn.com/s/playlist/0156e466589dc853f56181b4182bb477/feel-like-i-could-keep-listening-to-you../MRGVtc0ooVtkVFjX2wgHNA__"><img src="amitimg/musci.svg" /></a></li>
                      <li><a href="https://music.amazon.in/user-playlists/c0b8a16e903743c4a2277ece1cd88db6i8n0?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_nVHNynCUotzotjNI7xFCSHbhF"><img src="amitimg/musci2.svg" /></a></li>
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
