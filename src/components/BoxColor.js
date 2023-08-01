function BoxColor(props) {
    const { r,g,b } = props;
    return(
        <div className="boxcolor-container">
            <div className="box-color" style={{backgroundColor:  `rgb(${r}, ${g}, ${b})` }}>
                <p>rgb: {r},{g},{b}</p>
            </div>
        </div>
    )
}

export default BoxColor;