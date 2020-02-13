import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import '../App.scss'


function CenterImage() {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })

  return (
    <div style = {centerImageStyle} onClick={() => set(state => !state)}>
      <a.div className="c front" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
      <a.div className="c back" style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`) }} />
    </div>
  )
}

const centerImageStyle = { 
    position: 'absolute',
    marginTop: '15.78vh',
    marginLeft: '41.34375vw',
}

export default CenterImage
