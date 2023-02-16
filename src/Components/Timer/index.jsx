import React from 'react'

const Timer = () => {
  return (
    <div className="tvproduct-timer timeLoaded" data-end-time="2023-04-07 00:00:00">
      <div className="tvtimer-wrapper">
        <div className="tvproduct-timer-wrapper tvproduct-timer-box tvproduct-time-days">
          <div className="days">223</div>
          <div className="tvtimer-name">day</div>
        </div>
        <span className="tvtimer-dot">:</span>
        <div className="tvproduct-timer-wrapper tvproduct-timer-box tvproduct-time-hours">
          <div className="hours">13</div>
          <div className="tvtimer-name">hour</div>
        </div>
        <span className="tvtimer-dot">:</span>
        <div className="tvproduct-timer-wrapper tvproduct-timer-box tvproduct-time-minutes">
          <div className="minutes">57</div>
          <div className="tvtimer-name">min</div>
        </div>
        <span className="tvtimer-dot">:</span>
        <div className="tvproduct-timer-wrapper tvproduct-timer-box tvproduct-time-seconds">
          <div className="seconds">40</div>
          <div className="tvtimer-name">sec</div>
        </div>
      </div>
    </div>
  )
}

export default Timer