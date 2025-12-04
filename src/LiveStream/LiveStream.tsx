import "./LiveStream.css";
/*import liveVideo from "../assets/stream.mp4"*/
/*import tvFrame from "../assets/cadretv.png" */

function LiveStream () {
  return (
    <div className="live-page">
      <h2 className="live-title">Ludi Circenses</h2>
      <div className="video-wrapper">
        {/*<img src={tvFrame} alt="Cadre TV" className="video-frame" />*/}
      {/*  <video
          src={liveVideo}
          controls
          autoPlay
          muted
          className="video-content"
        >
        </video>*/}
      </div>
      <div className="live-info">
        <p>Spectateurs en direct : CXXIII</p>
      </div>
    </div>
  );
};

export default LiveStream;
