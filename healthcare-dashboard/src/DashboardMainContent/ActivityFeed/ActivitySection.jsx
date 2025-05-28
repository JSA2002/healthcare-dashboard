import React from 'react';
import './ActivitySection.css';

const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

const activityData = [
  [30, 50, 40],   // Mon
  [35, 45, 30],   // Tues
  [60, 65, 25],   // Wed
  [25, 40, 70],   // Thurs
  [20, 50, 55],   // Fri
  [60, 45, 70],   // Sat
  [40, 30, 60],   // Sun
];

const colors = ['#00d4ff', '#5b75ff', '#c97bff'];

const ActivitySection = () => {
  return (
    <div className="activity-container">
      <div className="activity-header">
        <h2>Activity</h2>
        <span>3 appointment on this week</span>
      </div>
      <div className="activity-chart">
        {activityData.map((bars, dayIndex) => (
          <div className="day-column" key={dayIndex}>
            <div className="bars">
              {bars.map((height, i) => (
                <div
                  key={i}
                  className="bar"
                  style={{
                    height: `${height}px`,
                    backgroundColor: colors[i % colors.length]
                  }}
                />
              ))}
            </div>
            <div className="day-label">{days[dayIndex]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitySection;
