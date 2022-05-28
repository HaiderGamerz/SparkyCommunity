import React from 'react'
import vip from '../../images/vip.png'
import vipplus from '../../images/vipplus.png'
import mvp from '../../images/mvp.png'
import mvpplus from '../../images/mvpplus.png'
import mvpplusplus from '../../images/mvpplusplus.png'
import { Button } from '@mui/material'
import '../../components/Card/CardUI.css'
import yt from '../../images/yt.jpg'

const CardUI = props => {
  return (
 <div className='card text-center'>
     <h1 className='success'>Ranks</h1>
     <div className='overflow'>
         <img src={vip} alt="VIP"/>
         <h1 className='success'>Cost = $9.99</h1>
         <Button variant="outlined">Buy</Button>
     </div>
     <br></br>
     <br></br>
     <div className='overflow'>
         <img src={vipplus} alt="VIP"/>
         <h1 className='success'>Cost = $11.99</h1>
         <Button variant="outlined">Buy</Button>

     </div>
     <br></br>
     <br></br>
     <div className='overflow'>
         <img src={mvp} alt="VIP"/>
         <h1 className='success'>Cost = $16.99</h1>
         <Button variant="outlined">Buy</Button>

     </div>
     <br></br>
     <br></br>
     <div className='overflow'>
         <img src={mvpplus} alt="VIP"/>
         <h1 className='success'>Cost = $20.99</h1>
         <Button variant="outlined">Buy</Button>

     </div>
     <br></br>
     <br></br>
     <div className='overflow'>
         <img src={mvpplusplus} alt="VIP"/>
         <h1 className='success'>Cost = $25.99</h1>
         <Button variant="outlined">Buy</Button>

     </div>
     <br></br>
     <br></br>
     <div className='overflow'>
         <img src={yt} alt="VIP" width='500px'/>
         <h1 className='success'>Cost = <p className='reddy'>UNBUYABLE</p></h1>
         <Button variant="outlined" className='success'>When Your <h6 className='reddy'>Youtube Channel</h6> Reaches 30k</Button>

     </div>

 </div>
  )
}

export default CardUI;