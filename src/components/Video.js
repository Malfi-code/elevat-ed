import React from "react";
import "./Video.css";

function Video({ url }) {
    return (
        <div className="video-container">
            <iframe
                src={url}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
        </div>
    );
}

export default Video;