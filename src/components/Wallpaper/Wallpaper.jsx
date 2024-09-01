import wallpaperSky from '../../assets/img/wallpaperSky.jpg'
import './Wallpaper.scss'
export const Wallpaper=()=>{
    return(
        <>
       <div className={' wallpaper-container position-fixed d-flex bottom-0 end-0 start-0 '}>
<img className='wallpaper' src={wallpaperSky} alt="wallpaper" />
       </div>
        </>
    )
}