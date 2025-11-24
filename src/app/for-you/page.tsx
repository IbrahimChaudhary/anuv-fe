"use client";
import { useEffect } from "react";
import $ from "jquery";


export default function Foryou() {

  useEffect(() => {
    // jQuery logic runs only on client
    $(document).ready(function () {
      // Initially hide all papers
      $(".paper1, .paper2, .paper3, .paper4").hide().css("opacity", "0");

      // Step 1 → Button click → show paper1
      $(".forbutton").on("click", function () {
        $(".formeyou").fadeOut(300);
        $(".paper1").show().animate({ opacity: 1 }, 600).addClass("show");
      });

      // Step 2 → Checkbox in paper1 → show paper2
      $(".paper1").on("change", "input[type='checkbox']", function () {
        $(".paper1").animate({ opacity: 1 }, 300);
        $(".paper2").show().animate({ opacity: 1 }, 300).addClass("show");
      });

      // Step 3 → Checkbox in paper2 → show paper3
      $(".paper2").on("change", "input[type='checkbox']", function () {
        $(".paper2").animate({ opacity: 1 }, 300);
        $(".paper3").show().animate({ opacity: 1 }, 300).addClass("show");
      });

      // Step 4 → Checkbox in paper3 → show paper4
      $(".paper3").on("change", "input[type='checkbox']", function () {
        $(".paper3").animate({ opacity: 1 }, 300);
        $(".paper4").show().animate({ opacity: 1 }, 300).addClass("show");
      });
         // Step 4 → Checkbox in paper3 → show paper4
      $(".paper4").on("change", "input[type='checkbox']", function () {
        $(".paper3").animate({ opacity: 1 }, 300);
        $(".paper4").animate({ opacity: 0 }, 100);
        $(".paper4").show().animate({ opacity: 0 }, 300, function () {
        window.location.href = "/playlist";
      });
      });
    });
  }, []);
  return (
    <>
    <main className="foryou">
      <section className="formeyou">
        <div className="imgforyou">
          <div className="mainforyou">
            <img src="amitimg/lace.svg" />
            <div className="content-foryou">
              <div className="tiltefou">
                <h2> form <span>me</span> <br/>  <span className="marginleft">to</span> <span>you</span></h2> 
              </div>
              <div className="discriptioncontent">
                <h5>A little playlist, for the way you're feeling today</h5> 
              </div>
              <div className="buttonforyou">
                <button className="forbutton">
                 Take the quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

   <section className="paper1 paperclass">
        <div className="paperimg">

          <div className="imgpaper">
            <img src="amitimg/paper1.svg"/>
          </div>

          <div className="content-paper">
            <p>1.</p>
            <h5>Your ideal evening looks like...</h5>

            <div className="wrapper first">
              <div className="checkbox-wrap">
                <input type="checkbox" id="writing" />
                <label htmlFor="writing">Writing a letter you’ll never send</label>
              </div>

              <div className="checkbox-wrap">
                <input type="checkbox" id="taking" />
                <label htmlFor="taking">Taking a long walk alone</label>
              </div>

              <div className="checkbox-wrap">
                <input type="checkbox" id="sitting" />
                <label htmlFor="sitting">Sitting at a cafe, people-watching</label>
              </div>
              <div className="checkbox-wrap">
                <input type="checkbox" id="staring" />
                <label htmlFor="staring">Staring at the sky with music on</label>
              </div>
              <div className="checkbox-wrap">
                <input type="checkbox" id="lying" />
                <label htmlFor="lying">Lying in bed with a storm in your
                  mind</label>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="paper2 paperclass">

        <div className="paperimg">

          <div className="imgpaper">
            <img src="amitimg/paper2.svg"/>
          </div>

          <div className="content-paper">
            <p>2.</p>
            <h5>What do you find comfort in the most?</h5>

            <div className="wrapper first">
              <div className="checkbox-wrap">
                <input type="checkbox" id="words" />
                <label htmlFor="words">Words I don’t say out loud</label>
              </div>

              <div className="checkbox-wrap">
                <input type="checkbox" id="familiar" />
                <label htmlFor="familiar">Familiar songs on repeat</label>
              </div>

              <div className="checkbox-wrap">
                <input type="checkbox" id="watching" />
                <label htmlFor="watching">Watching life quietly</label>
              </div>
              <div className="checkbox-wrap">
                <input type="checkbox" id="imagining" />
                <label htmlFor="imagining">Imagining what could be</label>
              </div>
              <div className="checkbox-wrap">
                <input type="checkbox" id="thoughts" />
                <label htmlFor="thoughts">Late-night thoughts that feel like the
                  truth</label>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="paper3 paperclass">

        <div className="paperimg">

          <div className="imgpaper">
            <img src="amitimg/paper3.svg"/>
          </div>

          <div className="content-paper">
            <p>3.</p>
            <h5>What best describes your current
              state of mind?</h5>

            <div className="wrapper first">
              <div className="checkbox-wrap">
                <input type="checkbox" id="reflecting" />
                <label htmlFor="reflecting">Reflecting and tender</label>
              </div>

              <div className="checkbox-wrap">
                <input type="checkbox" id="trying" />
                <label htmlFor="trying">Trying to let go and heal</label>
              </div>

              <div className="checkbox-wrap">
                <input type="checkbox" id="calm" />
                <label htmlFor="calm">Calm and observant</label>
              </div>
              <div className="checkbox-wrap">
                <input type="checkbox" id="lost" />
                <label htmlFor="lost">Lost in imagination</label>
              </div>
              <div className="checkbox-wrap">
                <input type="checkbox" id="quietly" />
                <label htmlFor="quietly">Quietly overthinking everything</label>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="paper4 paperclass">

        <div className="paperimg">

          <div className="imgpaper">
            <img src="amitimg/paper4.svg"/>
          </div>

          <div className="content-paper">
            <p>4.</p>
            <h5>When you listen to music, you’re usually...</h5>

            <div className="wrapper first">
              <div className="checkbox-wrap">
                <input type="checkbox" id="reliving" />
                <label htmlFor="reliving">Reliving a memory</label>
              </div>

              <div className="checkbox-wrap">
                <input type="checkbox" id="lighter" />
                <label htmlFor="lighter">Trying to feel lighter</label>
              </div>

              <div className="checkbox-wrap">
                <input type="checkbox" id="letting" />
                <label htmlFor="letting">Letting it play in the background</label>
              </div>
              <div className="checkbox-wrap">
                <input type="checkbox" id="creating" />
                <label htmlFor="creating">Creating little dayydreams</label>
              </div>
              <div className="checkbox-wrap">
                <input type="checkbox" id="thinking" />
                <label htmlFor="thinking">Thinking about things you havent said
                  yet</label>
              </div>

            </div>

          </div>
        </div>
      </section>



    </main>
    </>
  );
}
