import { autocompleteClasses } from "@mui/material";

const src = "https://www.youtube.com/embed/DNi4NOGasl0";

const Video = () => {
  return (
    <iframe
      width="auto"
      height="auto"
      src={src}
      title="Youtube Player"
      frameborder="0"
      allowFullScreen
    />
  );
};

export default Video;