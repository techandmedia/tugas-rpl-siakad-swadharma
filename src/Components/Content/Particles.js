import React from 'react'
import Particles from "react-particles-js";

const particleOptions = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

export default class Particle extends React.PureComponent{
  render(){
    return(
      <Particles params={particleOptions} className="particles" />
    )
  }
}