import { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";

function RGBColorPicker() {
    const [rValue, setRValue] = useState(0);
    const [gValue, setGValue] = useState(0);
    const [bValue, setBValue] = useState(0);

    return(
        <div>
            <SingleColorPicker 
                color={"r"}
                value={rValue}
                onChange={(e) => setRValue(Number(e.target.value))}
            />

            <SingleColorPicker 
                color={"g"}
                value={gValue}
                onChange={(e) => setGValue(Number(e.target.value))}
            />

            <SingleColorPicker 
                color={"b"}
                value={bValue}
                onChange={(e) => setBValue(Number(e.target.value))}
            />
            <div className="square" style={{backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`}}>
            <p>RGB: {rValue} {gValue} {bValue}</p>
            </div>
           

        </div>
    )
}

export default RGBColorPicker;  