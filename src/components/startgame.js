import React from 'react';
import { FaRegHandPaper  , FaCut} from 'react-icons/fa';
import { GiBoxingGlove } from 'react-icons/gi';
export default function StartGame(props) {
    function out(icon) {
        console.log(icon);
        props.pushfun(icon);
    }
    return(
        <div>
            <button onClick={() => out('boxing')}><GiBoxingGlove size={30}></GiBoxingGlove></button>
            <button onClick={() => out('hand')}><FaRegHandPaper size={30}></FaRegHandPaper></button>
            <button onClick={() => out('cut')}><FaCut size={30}></FaCut></button>
        </div>
    )
}