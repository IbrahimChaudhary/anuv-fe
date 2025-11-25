import React, { useEffect, useRef, useState } from "react";

import WaveSurfer from "wavesurfer.js";

interface WaveformProps {
    url: string;
    image: string;
}

const formWaveSurferOptions = (ref: HTMLElement) => ({
    container: ref,
    waveColor: "#ffffff",
    progressColor: "#ffffff",
    cursorColor: "transparent",
    barWidth: 2,
    barGap: 1,
    barRadius: 3,
    responsive: true,
    height: 40,
    // If true, normalize by the maximum peak instead of 1.0.
    normalize: true,
    // Use the PeakCache to improve rendering speed of large waveforms.
    partialRender: true
});


export default function Waveform({ url, image }: WaveformProps

) {
    const waveformRef = useRef<HTMLDivElement>(null);
    const wavesurfer = useRef<WaveSurfer | null>(null);
    const [playing, setPlay] = useState(false);
    const [volume, setVolume] = useState(0.5);

    // create new WaveSurfer instance
    // On component mount and when url changes
    useEffect(() => {
        setPlay(false);

        if (!waveformRef.current) return;

        const options = formWaveSurferOptions(waveformRef.current);
        wavesurfer.current = WaveSurfer.create(options);

        wavesurfer.current.load(url);

        wavesurfer.current.on("ready", function () {
            // https://wavesurfer-js.org/docs/methods.html
            // wavesurfer.current.play();
            // setPlay(true);

            // make sure object stillavailable when file loaded
            if (wavesurfer.current) {
                wavesurfer.current.setVolume(volume);
                setVolume(volume);
            }
        });

        // Removes events, elements and disconnects Web Audio nodes.
        // when component unmount
        return () => {
            if (wavesurfer.current) {
                wavesurfer.current.destroy();
            }
        };
    }, [url]);

    const handlePlayPause = () => {
        setPlay(!playing);
        if (wavesurfer.current) {
            wavesurfer.current.playPause();
        }
    };

    const onVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = e;
        const newVolume = +target.value;

        if (newVolume && wavesurfer.current) {
            setVolume(newVolume);
            wavesurfer.current.setVolume(newVolume || 1);
        }
    };

    return (
        <div className="waveform-container">
            <div
                className="waveform-row"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    padding: '45px 75px',
                    maxWidth: '500px',
                    position: 'relative'
                }}
            >
                <div className="inner">
                    <div className="" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>

                        <button
                            onClick={handlePlayPause}
                            style={{
                                flexShrink: 0,
                                background: 'transparent',
                                border: 'none',
                                color: 'white',
                                fontSize: '20px',
                                cursor: 'pointer',
                                padding: '0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '30px',
                                height: '30px',
                                zIndex: 10
                            }}
                        >
                            {!playing ? "▶" : "⏸"}
                        </button>
                        <div id="waveform" ref={waveformRef} style={{ flex: 1, minWidth: 0 }} />
                    </div>
                </div>

            </div>
        </div>
    );
}
