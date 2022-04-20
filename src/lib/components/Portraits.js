import './styles/Portraits.css';
import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring'

function Portraits(props) {

  const [leftFlip, setLeftFlip] = useState(false)
  const leftAnim = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: false,
      delay: 200,
      config: config.molasses,
      onRest: () => setLeftFlip(!leftFlip),
  })

  const [rightFlip, setRightFlip] = useState(false)
  const rightAnim = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: false,
      delay: 3000,
      config: config.molasses,
      onRest: () => setRightFlip(!rightFlip),
  })

  const [index, setIndex] = useState(props.index)

  // useEffect(() => {
  //     const intervalID = setInterval(() => {
  //         console.log("Next portrait : ", index, " => ", index + 1 >= props.portraits.length ? 0 : index + 1)
  //         setIndex(index + 1 >= props.portraits.length ? 0 : index + 1)
  //     }, 5000)
  //   }, []);

  return (
      <div className='portraits-wrapper'>
          <div className='left-text'>
              <animated.div style={leftAnim}>
                  <span className='skill-text'>{props.portraits[index].leftPortrait.name}</span>

                  <div>
                      {props.portraits[index].leftPortrait.skills.map((v,i) => {
                          return <img alt="Skill" key={"left-"+i} className='skill-img' src={v.img} />
                      })}
                  </div>
              </animated.div>
          </div>
          <div className='portraits-frame'>
              <animated.div style={leftAnim}>
                  <img alt="Team member" className='portrait-left' src={props.portraits[index].leftPortrait.img} />
              </animated.div>
              <animated.div style={rightAnim}>
                  <img alt="Team member" className='portrait-right' src={props.portraits[index].rightPortrait.img} />
              </animated.div>
          </div>
          <div className='right-text'>
              <animated.div style={rightAnim}>
                  <span className='skill-text'>{props.portraits[0].rightPortrait.name}</span>
                  <div>
                      {props.portraits[index].rightPortrait.skills.map((v,i) => {
                              return <img alt="Skill"key={"right-"+i} className='skill-img' src={v.img} />
                          })}
                  </div>
              </animated.div>
          </div>
      </div>
  );
}

export default Portraits;