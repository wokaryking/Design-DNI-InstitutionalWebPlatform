interface YouTubeVideoProps {
  videoId: string;
}

export function YouTubeVideo({ videoId }: YouTubeVideoProps) {
  return (
    <div className="rounded-xl overflow-hidden border border-[#C9A55C]/20 bg-[#071D49]">
      <iframe
        width="100%"
        height="100%"
        style={{ aspectRatio: "16/9" }}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}