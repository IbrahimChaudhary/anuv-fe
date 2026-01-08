"use client";
import { useEffect, useState } from "react";
import $ from "jquery";
import { Playlist } from "@/types";

export default function PlaylistPage() {
  const [playlist, setPlaylist] = useState<Playlist | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch('/api/playlist/random');
        const data = await response.json();

        console.log('Playlist API Response:', data);

        if (data.success && data.data) {
          console.log('Playlist data:', data.data);
          console.log('Platform links:', data.data.platform_links);
          setPlaylist(data.data);
        } else {
          setError(data.error || 'Failed to load playlist');
        }
      } catch (err) {
        setError('Failed to load playlist');
        console.error('Playlist fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, []);

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
  }, [playlist]);

  if (loading) {
    return (
      <main className="archivemain">
        <section className="fade-section playlistfirstsection">
          <div className="innercontainer">
            <div className="fleging">
              <div className="flexingsitems">
                <div className="paycard first-custom-class">
                  <div style={{ background: 'rgba(255,255,255,0.1)', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p style={{ color: '#f5f5f5' }}>Loading playlist...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (error || !playlist) {
    return (
      <main className="archivemain">
        <section className="fade-section playlistfirstsection">
          <div className="innercontainer">
            <div className="fleging">
              <div className="flexingsitems">
                <div className="paycard first-custom-class">
                  <div style={{ background: 'rgba(255,255,255,0.1)', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p style={{ color: '#f5f5f5' }}>{error || 'Failed to load playlist'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <>
      <main className="archivemain">
        <section className="fade-section playlistfirstsection">
          <div className="innercontainer">
            <div className="fleging">
              <div className="flexingsitems">
                <div className="paycard first-custom-class">
                  <img src={playlist.cover_image || "images/hopethisreaachesyou.jpg"} alt={playlist.title} />
                </div>
              </div>
              <div className="flexcontent">
                <div className="textanimationply">
                  <h3 dangerouslySetInnerHTML={{ __html: playlist.title.replace(/\.\./g, '<br/>') }}></h3>
                  <div className="contentmusiclist">
                    {playlist.songs.map((song, index) => (
                      <h5 key={index}>
                        {song.name}
                        {'.'.repeat(Math.max(0, 20 - song.name.length))}
                        {song.duration}
                      </h5>
                    ))}
                  </div>
                </div>

                <div className="shaeaericon">
                  <ul>
                    <li className="unionclass">
                      <a href="#"><img className="shearesd" src="amitimg/union.svg" alt="Music platforms" /></a>
                      <div className="unionsocial">
                        <ul>
                          {playlist.platform_links?.spotify ? (
                            <li><a href={playlist.platform_links.spotify} target="_blank" rel="noopener noreferrer"><img src="amitimg/Spotify.svg" alt="Spotify" /></a></li>
                          ) : (
                            <li style={{ opacity: 0.3, pointerEvents: 'none' }}><a href="#"><img src="amitimg/Spotify.svg" alt="Spotify" /></a></li>
                          )}
                          {playlist.platform_links?.gaana ? (
                            <li><a href={playlist.platform_links.gaana} target="_blank" rel="noopener noreferrer"><img src="amitimg/play.svg" alt="Gaana" /></a></li>
                          ) : (
                            <li style={{ opacity: 0.3, pointerEvents: 'none' }}><a href="#"><img src="amitimg/play.svg" alt="Gaana" /></a></li>
                          )}
                          {playlist.platform_links?.jiosaavn ? (
                            <li><a href={playlist.platform_links.jiosaavn} target="_blank" rel="noopener noreferrer"><img src="amitimg/musci.svg" alt="JioSaavn" /></a></li>
                          ) : (
                            <li style={{ opacity: 0.3, pointerEvents: 'none' }}><a href="#"><img src="amitimg/musci.svg" alt="JioSaavn" /></a></li>
                          )}
                          {playlist.platform_links?.amazon ? (
                            <li><a href={playlist.platform_links.amazon} target="_blank" rel="noopener noreferrer"><img src="amitimg/musci2.svg" alt="Amazon Music" /></a></li>
                          ) : (
                            <li style={{ opacity: 0.3, pointerEvents: 'none' }}><a href="#"><img src="amitimg/musci2.svg" alt="Amazon Music" /></a></li>
                          )}
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
