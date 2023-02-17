import React from 'react';
import StatusCard from '../StatusCard';
import { HourglassSplit } from 'react-bootstrap-icons';

const LoadingCard = () => {
  return <StatusCard icon={<HourglassSplit />} message='Loading...' />;
};

export default LoadingCard;
