import './styles/Portraits.css';
import React, {useState} from 'react';

function Portraits(props) {

    const [index, setIndex] = useState(0)

    const nextPortrait = () => {
        setIndex((index+1)%props.portraits.length)
    }

  return (
    <div className='portraits-wrapper'>

        <div style={{width: `${props.descriptionWidth}px`}} className={
             props.align === "right" ? "top-right-side" :  "top-left-side"
        }>

            <span className='skill-text is-left' style={{
                    animationPlayState: props.animationState, 
                    fontSize: `${props.fontSize}px`
                }}>
                {props.portraits[index].leftPortrait.name}
            </span>

            <div style={{visibility: props.textOnly ? "hidden" : "visible"}}>
                {props.portraits[index].leftPortrait.skills.map((v,i) => {
                    return <img alt="Skill" style={{animationPlayState: props.animationState, width: `${props.skillsWidth}px`}} key={"left-"+i} className='skill-img is-left' src={v.img} />
                })}
            </div>

        </div>

        <div className='center'>

            <div style={{width: `${props.width}px`, height: `${props.width}px`}} className='portraits-frame'>

                <img alt="Team member" onAnimationIteration={nextPortrait} style={{animationPlayState: props.animationState}} className='portrait-left is-left' src={props.portraits[index].leftPortrait.img} />

                <img alt="Team member" className='portrait-right is-right' style={{animationPlayState: props.animationState}} src={props.portraits[index].rightPortrait.img} />

            </div>

        </div>

        <div style={{width: `${props.descriptionWidth}px`}} className={
                props.align === "left" ? "bottom-left-side" : 
                    (props.align === "center" ? "top-right-side" : "bottom-right-side")
            }>

            <span className='skill-text is-right' style={{animationPlayState: props.animationState, fontSize: `${props.fontSize}px`}}>
                {props.portraits[index].rightPortrait.name}
            </span>

            <div style={{visibility: props.textOnly ? "hidden" : "visible"}}>
                {props.portraits[index].rightPortrait.skills.map((v,i) => {
                    return <img alt="Skill" style={{animationPlayState: props.animationState, width: `${props.skillsWidth}px`}} key={"right-"+i} className='skill-img is-right' src={v.img} />
                })}
            </div>

        </div>
    </div>
  );
}

export default Portraits;
