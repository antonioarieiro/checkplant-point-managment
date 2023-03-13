export const options = {
    strokeColor: '#FFFF',
    strokeOpacity: 0.3,
    strokeWeight: 2,
    fillColor: '#FFFF',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    zIndex: 1,
  }
  
export const mapOptions = {
    mapTypeId: "satellite",
    mapTypeControl: false,
   // zoomControl: false,
    //draggable: false
    
  }
  
export const center = {
    lat: -20.73168,
    lng: -49.27561,
  };
  
export const mapContainerStyle = {
    width: '100vw',
    height: '89vh',
  };
  

export const polygonPaths = [
    { lat: center.lat + 0.001, lng: center.lng - 0.001 },
    { lat: center.lat + 0.002, lng: center.lng },
    { lat: center.lat + 0.001, lng: center.lng + 0.001 },
    { lat: center.lat - 0.001, lng: center.lng + 0.001 },
    { lat: center.lat - 0.002, lng: center.lng },
    { lat: center.lat - 0.001, lng: center.lng - 0.001 },
  ];
