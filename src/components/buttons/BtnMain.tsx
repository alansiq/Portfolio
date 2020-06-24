import React from 'react';
import './BtnMain.css';

interface Props {
  text: string,
  to ?: string,
}

const BtnMain = (props: Props) => {


  return (
    <>
    <div className="btnContainer">
      <a 
        className="BtnMainText"
        href={props.to ? props.to : '#'}>
        {props.text}
      </a>
    </div>
      
    </>
  )
}

export default BtnMain;