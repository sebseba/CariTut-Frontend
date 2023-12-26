import React, { useState } from 'react'

const siderLogoStyle = {
  textAlign: 'left',
  lineHeight: '50px',
  color: '#A2AAB0',
  fontSize: '30px',
  padding: '10px',
};

const logoStyle = {
  width: '70%',
  paddingLeft: '20px',
  paddingTop: '7px'
}


function SideLogo(props) {

  return (
    <div style={siderLogoStyle}>
      <img src={props.logoSrc} alt="sptech" style={logoStyle} />
    </div>
  )
}

export default SideLogo