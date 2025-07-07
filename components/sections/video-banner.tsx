import React, { useRef, useState } from 'react';

const YOUTUBE_VIDEO_ID = '1rpv54fduTI'; // Replace with your desired YouTube video ID

export default function VideoBanner() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // PostMessage API for YouTube Player
  const postMessage = (command: string, value?: any) => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({
          event: 'command',
          func: command,
          args: value ? [value] : [],
        }),
        '*'
      );
    }
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      postMessage('pauseVideo');
      setIsPlaying(false);
    } else {
      postMessage('playVideo');
      setIsPlaying(true);
    }
  };

  const handleMuteUnmute = () => {
    if (isMuted) {
      postMessage('unMute');
      setIsMuted(false);
    } else {
      postMessage('mute');
      setIsMuted(true);
    }
  };

  // Autoplay and mute on load
  React.useEffect(() => {
    // Wait for iframe to load, then mute and play
    const timer = setTimeout(() => {
      postMessage('mute');
      postMessage('playVideo');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative w-full"
      style={{ height: '33vh', minHeight: 480 }}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          ref={iframeRef}
          className="w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?enablejsapi=1&autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}`}
          title="YouTube video banner"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        <div className="absolute bottom-4 left-4 flex gap-2 z-10">
          <button
            onClick={handlePlayPause}
            className="bg-black/60 text-white px-4 py-2 rounded hover:bg-black/80 transition"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button
            onClick={handleMuteUnmute}
            className="bg-black/60 text-white px-4 py-2 rounded hover:bg-black/80 transition flex items-center justify-center"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              // Muted speaker icon
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9v6h4l5 5V4l-5 5H9z" />
                <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" strokeWidth="2" />
              </svg>
            ) : (
              // Unmuted speaker icon
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9v6h4l5 5V4l-5 5H9z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
} 