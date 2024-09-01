import { Autocomplete, TextField } from '@mui/material'
import styles from './SearchBar.module.scss'
import { Button, Form } from "react-bootstrap"
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { resetData, setData } from '../../features/weather/WeatherSlice'
import LocationSvg from '../Svgs/LocationSvg'

export const SearchBar=()=>{
    const GEO_KEY_API= process.env.REACT_APP_GEO_API_KEY
    const WEATHER_KEY_API=process.env.REACT_APP_WEATHER_API
    const dispatch=useDispatch()
    const [cities,setCities]=useState([])
    const [unity]=useState('metric')
    const [geolocation, setGeolocation]=useState(undefined)
const [isCurrentLocation, setIsCurrentLocation]=useState(false)

    const getGeoLocation= ()=>{
navigator.geolocation.getCurrentPosition((position)=>
    {    setIsCurrentLocation(true)
        setGeolocation({
            lon:position.coords.longitude,
            lat:position.coords.latitude
        })
    })
    }
useEffect(()=>{

        getGeoLocation()
    
},[])

useEffect(()=>{
    getData()
},[geolocation])





    const handleInputChange=(e)=>{
const {value}=e.currentTarget
fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&type=city&format=json&apiKey=${GEO_KEY_API}`)
.then(response=>response.json())
.then(json=>setCities(json.results.map(data=>{
    const {lat,lon,city,country,formatted}=data
    return {lat,lon,city,country,formatted}
})

))
    }

const getData=()=>{
    if(geolocation){
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geolocation.lat}&units=${unity}&lon=${geolocation.lon}&appid=${WEATHER_KEY_API}`)
.then(response=>response.json())
.then(json=>{
    const{clouds,main,name,sys,weather,wind}=json
    dispatch(setData({clouds,main,name,sys,weather,wind}))   
}
)
    
    }

    
}
const handleAutoSelect=(e,value)=>{
if (value !== null) {
    const{lon,lat} =value
    setGeolocation({
        lon,
        lat
    })

}else{
    dispatch(resetData())
}


}    
    return(
        <>
        <Form>
            <Form.Group className={styles.searchContainer}>
                <Autocomplete className={styles.searchInput} clearOnBlur={false} onChange={handleAutoSelect} getOptionLabel={(option)=>option.formatted} renderInput={(params)=><TextField onChange={handleInputChange} {...params} label={"Enter your city"}/>} options={cities}/>
            <Button  disabled={geolocation===undefined || isCurrentLocation===true} onClick={getGeoLocation}><LocationSvg/></Button>    
            </Form.Group>
        </Form>
        </>
    )
}