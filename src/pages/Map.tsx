import React from 'react';
import MapContainer from '../components/Map/MapContainer'
import Header from '../components/Header/Header';
import'../app.scss';

const Map: React.FC = () => {
  return (
    <>
      <div className='app-body'>
        <div className='min-body'></div>
        <div className='center-content'>
          <Header />
          <MapContainer />
        </div>
      </div>
    </>
  );
}

export default Map;
