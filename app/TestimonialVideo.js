"use client";

import { useState } from "react";
import { Icon } from "./icons";

// Atul's student testimonial — YouTube Shorts (vertical 9:16)
const VIDEO_ID = "e8QUOg9-KXg";

export default function TestimonialVideo() {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="video-frame">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&playsinline=1`}
          title="Student testimonial — learning to drive with Atul"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  // Lightweight facade: only the thumbnail loads; the YouTube
  // player is injected after the user taps play (keeps the site fast).
  return (
    <button
      type="button"
      className="video-facade"
      onClick={() => setPlaying(true)}
      aria-label="Play student testimonial video"
    >
      <img
        src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
        onError={(e) => {
          if (!e.currentTarget.src.includes("hqdefault")) {
            e.currentTarget.src = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`;
          }
        }}
        alt="Student testimonial video thumbnail"
        loading="lazy"
      />
      <span className="play-btn" aria-hidden="true">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5.5v13l11-6.5L8 5.5Z" />
        </svg>
      </span>
    </button>
  );
}
