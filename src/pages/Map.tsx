import React, { useState } from 'react';
import MapContainer from '../components/Map/MapContainer'
import Header from '../components/Header/Header';
import'../app.scss';
import Button from '../components/Button/AddBtn';

type Point = {
    x: number;
    y: number;
  }
  

const Map: React.FC = () => {
   
    const [points, setPoints] = useState<Point[]>([]);
  const addNewPoint = (event: React.MouseEvent<HTMLDivElement>) => { 
    // adiciona novo ponto ao clicar no mapa
    console.log('cliquei',event)
    const newPoint: Point = { x: event.clientX, y: event.clientY };
    setPoints([...points, newPoint]);
  }

  return (
    <>
      <div className='app-body'>
        <div className='min-body'></div>
        <div className='center-content'>
          <Header />
          <MapContainer  click={addNewPoint}/>
        </div>
        <section className='btn-secion'>
          <Button text={'ADICIONAR NOVO'} type={'add'} click={addNewPoint} >
            <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 0C2.4349 0 0 2.34927 0 5.24488C0 7.37561 0.744792 7.97659 4.92708 13.7132C5.1849 14.0956 5.78646 14.0956 6.04427 13.7132C10.2266 7.94927 11 7.37561 11 5.24488C11 2.34927 8.53646 0 5.5 0ZM5.5 7.43024C4.21094 7.43024 3.20833 6.44683 3.20833 5.24488C3.20833 4.01561 4.21094 3.05951 5.5 3.05951C6.76042 3.05951 7.79167 4.01561 7.79167 5.24488C7.79167 6.44683 6.76042 7.43024 5.5 7.43024Z" fill="#556476"/>
            </svg>
          </Button>
        </section>
       
      </div>
    </>
  );
}

export default Map;
