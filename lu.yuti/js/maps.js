
const makeMap = async (target,center={lat: 37.962176,lng: -122.548600}) => {
   await checkData(()=>window.google);

   let map_el = $(target);

   // map = map_el.data("map");

   if(!map_el.data("map")) map_el.data(
      "map",
      new google.maps.Map(
         map_el[0],
         {
            center: center,
            zoom: 11,
            disableDefaultUI: true
         }
      )
   );

   return map_el;
}

const makeMarkers = (map_el,map_locs) => {
   let map = map_el.data("map");
   let markers = map_el.data("markers");

   if(markers) markers.forEach(o=>o.setMap(null));

   markers = [];

   map_locs.forEach(o=>{
      let m = new google.maps.Marker({
         position: o,
         map: map,
         icon: {
            url: './img/pin_fox.png',
            scaledSize: {
               width:40,
               height:40
            }
         }
      });
      markers.push(m);
   });

   map_el.data("markers",markers);
}