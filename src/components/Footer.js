import React from 'react';
 
 
function Footer(){
  return(
    <div className='footer'>
    <div className='footer-cont'>

    <div className='container' >
    <div className='row'>
    <div className="col-md col-sm-6">
      <h4>Games</h4>
      <ul className='list-unstyled'>
        <li>SuperSmashBros</li>
        <li>MarioKart</li>
        <li>PokeMon</li>
      </ul>

    </div>

    <div className="col-md col-sm-6">
      <h4>Character</h4>
      <ul className='list-unstyled'>
        <li>Pikachu</li>
        <li>Mario</li>
        <li>Yoshi</li>
      </ul>

    </div>

    <div className="col-md col-sm-6">
      <h4>Systems</h4>
      <ul className='list-unstyled'>
        <li>Gamecube</li>
        <li>Wii</li>
        <li>Switch</li>
      </ul>

    </div>
    </div> 

    </div>
    </div>
    </div>

  )
}

export default Footer
