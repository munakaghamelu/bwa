const src = "https://www.youtube.com/embed/DNi4NOGasl0";

const Video = () => {
  return (
    <iframe
      width="640"
      height="480"
      src={src}
      title="Youtube Player"
      frameborder="0"
      allowFullScreen
    />
  );
};

export default Video;