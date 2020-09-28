import React, { useState, useEffect } from "react";

import "./App.css";

const App = () => {
  const deg = 6;
  const [hourRotate, setHourRotate] = useState(0);
  const [minuteRotate, setMinuteRotate] = useState(0);
  const [secondRotate, setSecondRotate] = useState(0);

  /*
  useEffect(() => {
    const deg = 6;
    const hr = document.querySelector("#hr");
    const mn = document.querySelector("#mn");
    const sc = document.querySelector("#sc");

    setInterval(() => {
      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;

      hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      mn.style.transform = `rotateZ(${mm}deg)`;
      sc.style.transform = `rotateZ(${ss}deg)`;
    });

    return () => clearInterval();
  }, []);
  */

  useEffect(() => {
    setInterval(() => {
      let day = new Date();
      setHourRotate(day.getHours() * 30);
      setMinuteRotate(day.getMinutes() * deg);
      setSecondRotate(day.getSeconds() * deg);
    });

    return () => clearInterval();
  }, []);

  return (
    <>
      <div id="analog-clock">
        <div className="hour">
          <div
            className="hr"
            id="hr"
            style={{ transform: `rotateZ(${hourRotate}deg)` }}
          />
        </div>
        <div className="min">
          <div
            className="mn"
            id="mn"
            style={{ transform: `rotateZ(${minuteRotate}deg)` }}
          />
        </div>
        <div className="sec">
          <div
            className="sc"
            id="sc"
            style={{ transform: `rotateZ(${secondRotate}deg)` }}
          />
        </div>
      </div>
    </>
  );
};

export default App;
