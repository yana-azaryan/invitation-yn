import React, { useState, useEffect } from "react";

import styles from "./Countdown.module.scss";

const CountDown = () => {
  const [isExpired, setIsExpired] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countDownDate = new Date("Sep 7, 2024 13:00:00").getTime();
    const x = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const day = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hour = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((distance % (1000 * 60)) / 1000);
      if (days !== day) {
        setDays(day);
      }
      if (hours !== hour) {
        setHours(hour);
      }
      if (minutes !== minute) {
        setMinutes(minute);
      }
      if (seconds !== second) {
        setSeconds(second);
      }

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        setIsExpired(true);
      }
    }, 1000);

    return () => {
      clearInterval(x);
    };
  }, [days, hours, minutes, seconds]);

  return (
    <section className={styles.counterArea}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className="col-sm-12">
            <div className={styles.heading}>
              Մնացել է
            </div>
          </div>
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <div className={styles.remainingTime}>
              {isExpired ? (
                <div>Yay....</div>
              ) : (
                <div className={styles.expires}>
                  <div>
                    <p className={styles.time}>{days}</p>
                    <p className={styles.date}>Օր</p>
                  </div>
                  <div>
                    <p className={styles.time}>{hours}</p>
                    <p className={styles.date}>Ժամ</p>
                  </div>
                  <div>
                    <p className={styles.time}>{minutes}</p>
                    <p className={styles.date}>Րոպե</p>
                  </div>
                  <div>
                    <p className={styles.time}>{seconds}</p>
                    <p className={styles.date}>Վարկյան</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountDown;
