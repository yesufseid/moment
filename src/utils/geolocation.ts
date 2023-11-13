type geoProps ={
  lat:number
  long:number
}




const geolocation =():geoProps=>{
    if ("geolocation" in navigator) {
       navigator.geolocation.getCurrentPosition(function(position) {
       const location ={
        lat:position.coords.latitude,
        long:position.coords.longitude
       }
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        return location
      });
    } else {
       return null
      }
}

export default geolocation