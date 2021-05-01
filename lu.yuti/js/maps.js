
const makeMap = async (target,center={lat: 37.962176,lng: -122.548600}) => {
   await checkData(()=>window.google);

   let map_el = $(target);

   // map = map_el.data("map");

   if(!map_el.data("map")) map_el.data({
      "map": new google.maps.Map(
         map_el[0],
         {
            center: center,
            zoom: 12,
            disableDefaultUI: true,
            styles:mapStyles
         }
      ),
      "infoWindow": new google.maps.InfoWindow({content:''})
   });
   
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
   setTimeout(()=>{setMapBounds(map_el,map_locs)},150);
}


const setMapBounds = (map_el,map_locs) => {
   let map = map_el.data("map");
   let zoom = 14;

   if(map_locs.length==1) {
      map.setCenter(map_locs[0]);
      map.setZoom(zoom);
   } else if(map_locs.length==0) {
      if(window.location.protocol!=="https:") return;
      else {
         navigator.geolocation.getCurrentPosition(p=>{
            let pos = {
               lat:p.coords.latitude,
               lat:p.coords.longitude
            };
            map.setCenter(pos);
            map.setZoom(zoom);
         },(...args)=>{
            console.log(args)
         },{
            enableHighAccuracy:false,
            timeout:5000,
            maximumAge:0
         })
      }
   } else {
      let bounds = new google.maps.LatLngBounds(null);
      map_locs.forEach(o=>{
         bounds.extend(o);
      });
      map.fitBounds(bounds);
   }
}


let mapStyles = [
   {
       "featureType": "administrative",
       "elementType": "labels.text.fill",
       "stylers": [
           {
               "color": "#444444"
           }
       ]
   },
   {
       "featureType": "administrative.country",
       "elementType": "geometry.fill",
       "stylers": [
           {
               "visibility": "off"
           },
           {
               "color": "#fc6e6e"
           }
       ]
   },
   {
       "featureType": "administrative.province",
       "elementType": "geometry.fill",
       "stylers": [
           {
               "visibility": "off"
           },
           {
               "hue": "#008aff"
           }
       ]
   },
   {
       "featureType": "landscape",
       "elementType": "all",
       "stylers": [
           {
               "color": "#f2f2f2"
           }
       ]
   },
   {
       "featureType": "poi",
       "elementType": "all",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "road",
       "elementType": "all",
       "stylers": [
           {
               "saturation": -100
           },
           {
               "lightness": 45
           }
       ]
   },
   {
       "featureType": "road.highway",
       "elementType": "all",
       "stylers": [
           {
               "visibility": "simplified"
           }
       ]
   },
   {
       "featureType": "road.arterial",
       "elementType": "labels.icon",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "transit",
       "elementType": "all",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "water",
       "elementType": "all",
       "stylers": [
           {
               "color": "#bee0ee"
           },
           {
               "visibility": "on"
           }
       ]
   }
];