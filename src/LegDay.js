// LegDay.js
import React, { useState } from 'react';

const LegDay = () => {
  const [exercises, setExercises] = useState({
    CalfRaises: false,
    SeatedLegCurls: false,
    LegRaises: false,
    LegPress: false,
    // Add more leg exercises as needed
  });

  const handleCheckboxChange = (exercise) => {
    setExercises((prevExercises) => ({
      ...prevExercises,
      [exercise]: !prevExercises[exercise],
    }));
  };

  return (
    <div className="workout-day">
      <h3>Leg Day</h3>
      <ul>
        {Object.entries(exercises).map(([exerciseName, isChecked]) => (
          <li key={exerciseName} className="exercise-item">
            <label className="exercise-label">
              <input
                type="checkbox"
                id={`checkbox-${exerciseName}`} // Set unique ID for accessibility
                checked={isChecked}
                onChange={() => handleCheckboxChange(exerciseName)}
              />
              <span className="exercise-name">{exerciseName.replace(/([a-z])([A-Z])/g, '$1 $2')}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LegDay;
