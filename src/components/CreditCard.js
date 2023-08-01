function CreditCard(props) {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;

    //expirationmonth if is 1 until 9 appear 0 before - always 2 numbers - pass to a string
    let monthInfo = expirationMonth.toString()
    if (expirationMonth < 10) {
        monthInfo = "0" + monthInfo;
      }

    //expirationDate only appear last 2 numbers - pass to a string
    let yearInfo = expirationYear.toString()

    return(
        <div className="creditCard-container">
            <div className="creditCard" style={{backgroundColor: bgColor, color: color}}>
                <p className="credit-type">{type}</p>
                <p className="card-number">{'•••• •••• •••• ' + number.slice(-4)}</p>
                <div className="data-info">
                    <p>Expires: {monthInfo}/{yearInfo.slice(-2)} </p>
                    <p>{bank}</p>
                </div>
                <p className="owner-info">{owner}</p>
            </div>
        </div>
    )
}

export default CreditCard;