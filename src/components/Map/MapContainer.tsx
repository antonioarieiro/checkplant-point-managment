import React, { useState } from 'react';
import Button from '../Button/AddBtn';
import { GoogleMap, Polygon, Marker } from '@react-google-maps/api';
import { center, mapOptions, mapContainerStyle, polygonPaths, options } from '../../config/MapConfig';
import { MarkerItem } from '../../interfaces';

const MapContainer: React.FC = () => {
  const [markers, setMarkers] = useState<google.maps.LatLngLiteral[]>([]);
  const [addMarker, setAddMarker] = useState<boolean>(false);
  const [selectedMarker, setSelectedMarker] = useState<MarkerItem | null>();

  const iconBase = 'https://i.ibb.co/QXcSVn8/Regular-on-Move-off-1-1.png';
  const selectedIcon = 'https://i.ibb.co/qsK4w1b/Regular-off-Move-on.png';

  const handleClick = (event: google.maps.MapMouseEvent) => {
    if(addMarker) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      setMarkers([...markers, { lat, lng }]);
      setAddMarker(false);
      setSelectedMarker(null);
    }
    else {
      alert('Para adicionar novos pontos clique em adicionar novo');
      
    }
  };

  const addNewPoint = () => { 
    setAddMarker(true)
  }

  const selectMarker = (target:MarkerItem) => {
    setSelectedMarker(target);
  }

  const removeMarker = () =>  {
    const filter = markers.filter(marker => marker !== selectedMarker);
    setMarkers(filter);
    setSelectedMarker(null)
  }

  const removeAllMarker = () => {
    setMarkers([]);
    setSelectedMarker(null);
  }

  return (
   <>
    <div>
    <section className='btn-secion'>
         <>
          <Button text={'ADICIONAR NOVO'} type={'add'} click={addNewPoint} >
          <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 0C2.4349 0 0 2.34927 0 5.24488C0 7.37561 0.744792 7.97659 4.92708 13.7132C5.1849 14.0956 5.78646 14.0956 6.04427 13.7132C10.2266 7.94927 11 7.37561 11 5.24488C11 2.34927 8.53646 0 5.5 0ZM5.5 7.43024C4.21094 7.43024 3.20833 6.44683 3.20833 5.24488C3.20833 4.01561 4.21094 3.05951 5.5 3.05951C6.76042 3.05951 7.79167 4.01561 7.79167 5.24488C7.79167 6.44683 6.76042 7.43024 5.5 7.43024Z" fill="#556476"/>
          </svg>
        </Button>
       {
        selectedMarker &&
          <Button text={'DELETAR PIN'} type={'remove'} click={removeMarker} >
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.857143 12.6875C0.857143 13.4258 1.41964 14 2.14286 14H9.85714C10.5536 14 11.1429 13.4258 11.1429 12.6875V3.5H0.857143V12.6875ZM8.14286 5.6875C8.14286 5.46875 8.33036 5.25 8.57143 5.25C8.78571 5.25 9 5.46875 9 5.6875V11.8125C9 12.0586 8.78571 12.25 8.57143 12.25C8.33036 12.25 8.14286 12.0586 8.14286 11.8125V5.6875ZM5.57143 5.6875C5.57143 5.46875 5.75893 5.25 6 5.25C6.21429 5.25 6.42857 5.46875 6.42857 5.6875V11.8125C6.42857 12.0586 6.21429 12.25 6 12.25C5.75893 12.25 5.57143 12.0586 5.57143 11.8125V5.6875ZM3 5.6875C3 5.46875 3.1875 5.25 3.42857 5.25C3.64286 5.25 3.85714 5.46875 3.85714 5.6875V11.8125C3.85714 12.0586 3.64286 12.25 3.42857 12.25C3.1875 12.25 3 12.0586 3 11.8125V5.6875ZM11.5714 0.875H8.57143L8.25 0.246094C8.16964 0.109375 8.03571 0 7.875 0H4.09821C3.9375 0 3.80357 0.109375 3.72321 0.246094L3.42857 0.875H0.428571C0.1875 0.875 0 1.09375 0 1.3125V2.1875C0 2.43359 0.1875 2.625 0.428571 2.625H11.5714C11.7857 2.625 12 2.43359 12 2.1875V1.3125C12 1.09375 11.7857 0.875 11.5714 0.875Z" fill="white"/>
            </svg>
          </Button>
       }
       {
       markers && markers.length > 0 && 
        <Button text={'DELETAR TODOS'} type={'remove'} click={removeAllMarker} >
        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.857143 12.6875C0.857143 13.4258 1.41964 14 2.14286 14H9.85714C10.5536 14 11.1429 13.4258 11.1429 12.6875V3.5H0.857143V12.6875ZM8.14286 5.6875C8.14286 5.46875 8.33036 5.25 8.57143 5.25C8.78571 5.25 9 5.46875 9 5.6875V11.8125C9 12.0586 8.78571 12.25 8.57143 12.25C8.33036 12.25 8.14286 12.0586 8.14286 11.8125V5.6875ZM5.57143 5.6875C5.57143 5.46875 5.75893 5.25 6 5.25C6.21429 5.25 6.42857 5.46875 6.42857 5.6875V11.8125C6.42857 12.0586 6.21429 12.25 6 12.25C5.75893 12.25 5.57143 12.0586 5.57143 11.8125V5.6875ZM3 5.6875C3 5.46875 3.1875 5.25 3.42857 5.25C3.64286 5.25 3.85714 5.46875 3.85714 5.6875V11.8125C3.85714 12.0586 3.64286 12.25 3.42857 12.25C3.1875 12.25 3 12.0586 3 11.8125V5.6875ZM11.5714 0.875H8.57143L8.25 0.246094C8.16964 0.109375 8.03571 0 7.875 0H4.09821C3.9375 0 3.80357 0.109375 3.72321 0.246094L3.42857 0.875H0.428571C0.1875 0.875 0 1.09375 0 1.3125V2.1875C0 2.43359 0.1875 2.625 0.428571 2.625H11.5714C11.7857 2.625 12 2.43359 12 2.1875V1.3125C12 1.09375 11.7857 0.875 11.5714 0.875Z" fill="white"/>
        </svg>
      </Button>
       }
         </>
          
        </section>
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={18}
            center={center}
            options={mapOptions}
            onClick={handleClick}
          
          >
            <Polygon paths={polygonPaths} options={options} />
            {markers.map((marker, index) => (
            <Marker
              key={index}
              position={marker}
              draggable
              onClick={() => {selectMarker(marker)}}
              icon={ marker === selectedMarker ? selectedIcon : iconBase}
            />
          ))}
    </GoogleMap>
    </div>
   </>
  );
};

export default MapContainer;
