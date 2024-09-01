import { Card } from 'react-bootstrap'
import styles from './Weather.module.scss'

import PositionSvg from '../Svgs/PositionSvg'
import DefaultWeather from '../Svgs/DefaultWeather'
import Time from '../Svgs/Time'
import WindySvg from '../Svgs/WindySvg'
import TermoSvg from '../Svgs/TermoSvg'
import SunRise from '../Svgs/SunRise'
import { useSelector } from 'react-redux'
import ClearSvg from '../Svgs/ClearSvg'
import Moment from 'react-moment'
import HumidSvg from '../Svgs/HumidSvg'
import PressureSvg from '../Svgs/PressureSvg'
import SunssetSvg from '../Svgs/SunsetSvg'
import CloudySvg from '../Svgs/CloudySvg'
import RainySvg from '../Svgs/RainySvg'
import SnowSvg from '../Svgs/SnowSvg'
import StormSvg from '../Svgs/StormSvg'

export const Weather=()=>{
    const weather=useSelector(({weather})=>weather)
    const displayIcon = () => {
        const defaultWidth = '200px';
        const defaultHeight = '200px';
        const number = weather.weather.icon.substring(0, 2)
        switch (number) {
            case '01':
                return <ClearSvg width={defaultWidth} height={defaultHeight}/>
            case '02':
                return <DefaultWeather width={defaultWidth} height={defaultHeight}/>
            case '03':    
            case '04':
                return <CloudySvg width={defaultWidth} height={defaultHeight}/>
            case '10':
                return <RainySvg width={defaultWidth} height={defaultHeight}/>
            case '11':
                return <StormSvg width={defaultWidth} height={defaultHeight}/>
            default:
                return <img src={`https://openweathermap.org/img/wn/${weather.weather.icon}@2x.png`} alt=""/>
        }
    }
    return(
        <>

        <Card className={styles.container}>

   {
    weather.isLoaded?
    <Card.Body>

                <Card.Title className={styles.title}>
                <PositionSvg/>{weather.name}, {weather.sys.country}
                 </Card.Title>
                <div className={styles.time}>
                      <div>
                        <Moment format={'llll'}/>    
                      </div>
                     <div> <Time/> </div> 
                                           
                    </div>
                <Card.Text  as={'div'} className={styles.weather_infos}> 
                    <div>
                    {displayIcon()}
                    </div>
                    <div className={styles.temperature}>
                       <span>{weather.main.feels_like} C</span> 
                       <span><TermoSvg width='50px' height='50px'/></span>
                        </div>
               
                <div className={styles.separator}></div>

                   <div className={styles.infos}>
                    
                    <div className={styles.sunrise}>
                        <div><SunRise/></div>
                       <div>sunrise</div>

                       <div>
                        <Moment unix={true} format={'hh:mm'}>
                          {weather.sys.sunrise}
                        </Moment>
                       </div>
                    </div>
                    <div className={styles.sunrise}>
                        <div><SunssetSvg/></div>
                       <div>sunset</div>

                       <div>
                        <Moment unix={true} format={'hh:mm'}>
                         {weather.sys.sunset}
                        </Moment>
                       </div>
                    </div>
                    <div className={styles.wind}>
                        <div><WindySvg/></div>
                       <div>wind</div> 
                       <div>{weather.wind.speed}m/s</div>
                    </div>
                    <div className={styles.humidity}>
                        <div><HumidSvg/></div>
                       <div>humidity</div> 
                       <div>{weather.main.humidity}m/s</div>
                    </div>
                    <div className={styles.pressure}>
                        <div><PressureSvg/></div>
                       <div>speedometer</div> 
                       <div>{weather.main.pressure}Pa</div>
                    </div>
                    <div className={styles.thermo}>
                        <div><TermoSvg/></div>
                       <div> temperature</div>
                       <div>{weather.main.temp_max}°</div>
                    </div>
                   </div>
                </Card.Text>
            </Card.Body>: <Card.Body>
                <Card.Title> Please choose your country</Card.Title>
               
            </Card.Body>
            
   }
            
           
        </Card>
        </>
    )
}