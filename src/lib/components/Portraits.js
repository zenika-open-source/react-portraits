import './styles/Portraits.css';
import React, { useEffect, useState } from 'react';
import { useSpring, animated, config } from 'react-spring'

function Portraits(props) {

  const [leftAnim, api] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    reset: false,
    delay: 200,
    config: config.molasses
}))

  const rightAnim = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: false,
      delay: 3000,
      config: config.molasses
  })

  useEffect(() => {
    console.log("PROPS INDEX CHANGES")
    console.log(leftAnim, api)
  }, [props.index])
  
  return (
      <div className='portraits-wrapper'>
          <div className='left-text'>
              <animated.div style={leftAnim}>
                  <span className='skill-text'>{props.portraits[props.index].leftPortrait.name}</span>

                  <div>
                      {props.portraits[props.index].leftPortrait.skills.map((v,i) => {
                          return <img alt="Skill" key={"left-"+i} className='skill-img' src={v.img} />
                      })}
                  </div>
              </animated.div>
          </div>
          <div className='portraits-frame'>
              <animated.div style={leftAnim}>
                  <img alt="Team member" className='portrait-left' src={props.portraits[props.index].leftPortrait.img} />
              </animated.div>
              <animated.div style={rightAnim}>
                  <img alt="Team member" className='portrait-right' src={props.portraits[props.index].rightPortrait.img} />
              </animated.div>
          </div>
          <div className='right-text'>
              <animated.div style={rightAnim}>
                  <span className='skill-text'>{props.portraits[0].rightPortrait.name}</span>
                  <div>
                      {props.portraits[props.index].rightPortrait.skills.map((v,i) => {
                              return <img alt="Skill"key={"right-"+i} className='skill-img' src={v.img} />
                          })}
                  </div>
              </animated.div>
          </div>
      </div>
  );
}

export default Portraits;
