import './styles/Portraits.css';
import React from 'react';
import { useSpring, animated, config } from 'react-spring'

function Portraits(props) {

    const leftAnim = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        reset: false,
        delay: 200,
        config: config.molasses
    })

    const rightAnim = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        reset: false,
        delay: 3000,
        config: config.molasses
    })

    console.log(rightAnim)

  
  return (
      <div className='portraits-wrapper'>
          <div className='left-text' style={{
              display: ( props.align === "left" || props.align === "center" ) ? "inherit" : "none"
              }}>
                <animated.div style={leftAnim}>
                    <span className='skill-text' style={{fontSize: `${props.fontSize}px`}}>{props.portraits[props.index].leftPortrait.name}</span>

                    <div>
                        {props.portraits[props.index].leftPortrait.skills.map((v,i) => {
                            return <img alt="Skill" key={"left-"+i} className='skill-img' src={v.img} />
                        })}
                    </div>
                </animated.div>
                <animated.div style={{...rightAnim, display: props.align === "center" ? "none" : "", marginRight: "20px"}}>
                    <span className='skill-text' style={{fontSize: `${props.fontSize}px`}}>{props.portraits[0].rightPortrait.name}</span>
                    <div>
                        {props.portraits[props.index].rightPortrait.skills.map((v,i) => {
                                return <img alt="Skill"key={"right-"+i} className='skill-img' src={v.img} />
                            })}
                    </div>
                </animated.div>
          </div>
          <div style={{width: `${props.width}px`, height: `${props.width}px`}} className='portraits-frame'>
              <animated.div style={leftAnim}>
                  <img alt="Team member" className='portrait-left' src={props.portraits[props.index].leftPortrait.img} />
              </animated.div>
              <animated.div style={rightAnim}>
                  <img alt="Team member" className='portrait-right' src={props.portraits[props.index].rightPortrait.img} />
              </animated.div>
          </div>
          <div className='right-text'  style={{
              display: ( props.align === "right" || props.align === "center" ) ? "inherit" : "none"
              }}>
            <animated.div style={leftAnim}>
                <span className='skill-text' style={{fontSize: `${props.fontSize}px`}}>{props.portraits[props.index].leftPortrait.name}</span>

                <div>
                    {props.portraits[props.index].leftPortrait.skills.map((v,i) => {
                        return <img alt="Skill" key={"left-"+i} className='skill-img' src={v.img} />
                    })}
                </div>
            </animated.div>

            <animated.div style={{...rightAnim, display: props.align === "center" ? "none" : "", marginLeft: "20px"}}>
                <span className='skill-text' style={{fontSize: `${props.fontSize}px`}}>{props.portraits[0].rightPortrait.name}</span>
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
