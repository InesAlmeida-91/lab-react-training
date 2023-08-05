function SingleColorPicker({color, value, onChange}) {

    let squareColor = '';
    if(color === 'r'){
        squareColor = [value, 0, 0];
    } else if(color === 'g'){
        squareColor = [0, value, 0]
    } else if(color === 'b'){
        squareColor = [0, 0, value]
    }

    return(
        <div>
            <div className='square' style={{backgroundColor: `rgb(${squareColor[0]}, ${squareColor[1]}, ${squareColor[2]})`}}></div>
            <br />
            <label>{color.toUpperCase()}</label>
            <input type="number" name="color" value={value} onChange={onChange} min="0" max="255"/>
        </div>
    )
}

export default SingleColorPicker;