import React from 'react';
import Typical from 'react-typical';
import { stringify } from 'querystring';



const ParagraphTypical = (props) => {

    return (
        <Typical
            steps={props.content}
            loop={Infinity}
            wrapper="p"
        />
    )
}

export default ParagraphTypical;