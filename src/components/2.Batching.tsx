import React, { useEffect, useState } from 'react';
import { Button } from '../Button';

export const BatchedStateUpdates: React.FC = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const handleScoreUpdate = () => {
    setTotalScore((prev) => prev + 10);
  };

  useEffect(() => {
    setPercentage(totalScore);
  }, [totalScore]);

  return (
    <div>
      <h1>Total Score: {totalScore}</h1>
      <h2>Percentage: {percentage}%</h2>
      <Button onClick={handleScoreUpdate}>Increase Score</Button>
    </div>
  );
};
