'use client';

interface Track {
  id: number;
  title: string;
  url: string;
}


interface PlayListProps {
  tracks: Track[];
  selectedTrack: Track;
  setSelectedTrack: (track: Track) => void;
}

const PlayList = ({ tracks, selectedTrack, setSelectedTrack }: PlayListProps) => {
  return (
    <div className="playlist">
      {tracks.map((track) => (
        <div
          key={track.id}
          className={
            track.id === selectedTrack.id
              ? "playlist-item selected"
              : "playlist-item"
          }
          onClick={() => setSelectedTrack(track)}
        >
          {track.title}
        </div>
      ))}
    </div>
  );
};

export default PlayList;
