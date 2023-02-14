import React, { useState } from "react";
import styles from "./Googlemap.module.css";

export const GoogleMap = () => {
  const [name, SetName] = useState("Delhi");

  let url = `https://maps.google.com/maps?q=${name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  let nurl = `https://maps.google.com/maps?q=${name}i&t=k&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={styles.box}>
      <div className={styles.box1}>
        <div className={styles.logo}>
          {" "}
          <img
            src="data:image/png;base64,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"
            alt=""
            width={"50px"}
          />
        </div>
        <p>Enter Your Address </p>

        <input type="range" min="1" max="100" id="myRange" />

        <input
          placeholder="Enter The City Name ..."
          onChange={(e) => SetName(e.target.value)}
        />
        <br />
        <button> Satellite Map</button>
      </div>

      <div>
        <iframe
          width="100%"
          height="800px"
          id="gmap_canvas"
          src={url}
          frameborder="2px"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>

      {/* <a href="https://123movies-to.org">
        </a><br>
        <style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style>
        <a href="https://www.embedgooglemap.net"></a>
        <style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style> */}
    </div>
  );
};
