import React,{useState} from "react";

// 

function Database() {
    const [hh, setHH] = useState(0);
    const [mm, setMM] = useState(0);
    const [ss, setSS] = useState(0);
    const [id, setId] = useState(0);


    const Start = () => {
        setId(setInterval(()=> {
            setSS(ss => ss + 1);
        },1000));
    }
        
    return(
        <div>
        <h1>{hh<10 ? "0"+hh : hh} : {mm<10 ? "0"+mm : mm} : {ss<10 ? "0"+ss:ss}</h1>
        <button onClick={Start}>Start</button>
        </div>
            );
}
export default Database;