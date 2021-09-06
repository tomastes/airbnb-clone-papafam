import { useEffect, useState } from 'react';
import ReactMapGL,{Marker,Popup} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter'
const Map = ({searchResults}) => {
   const [selectLocation, setSelectLocation] = useState({})
    // ommit the the array searchResult
    const coordinates = searchResults?.map(result=>({
        longitude:result.long,
        latitude:result.lat
    }))
    // console.log(coordinates);
    const center = getCenter(coordinates)
    useEffect(()=>{
        console.log(process.env.NEXT_MAPBOX_API);
    },[])
    const [viewPort, setViewPort] = useState
    ({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 8
    })
    return (
        <ReactMapGL {...viewPort}
            mapStyle="mapbox://styles/tomastes/ckt3cmbvr06or17pi9b4k2t56"
            mapboxApiAccessToken={process.env.mapbox_key}
        onViewportChange={(nextViewPort)=> setViewPort(nextViewPort)}
       >
           {searchResults?.map(result=>(
               <div key={result.long}>
                   <Marker longitude={result.long} latitude={result.lat} offsetLeft={-20} offsetTop={-10}>
                       <p onClick={()=>setSelectLocation(result)} aria-label="push-pin" role="img" className="cursor-pointer animate-bounce text-2xl">
                       📌
                       </p>

                   </Marker>
                   {
                       selectLocation.long === result.long ?(
                        <Popup onClose={()=>setSelectLocation({})} latitude={result.lat} longitude={result.long} closeOnClick={true} >
                            {result.title}
                        </Popup>
                       ) : false
                   }
               </div>
           ))}
        </ReactMapGL>
    )
}

export default Map
