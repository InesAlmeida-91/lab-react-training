function IdCard(props) {
    const { firstName, lastName, gender, height, birth, picture } = props;

    return (
        <div  className="id-card">
            <div>
                <img src={picture} alt={firstName}/>
            </div>
            <div>
                <p className="card-data">First Name: {firstName}</p>
                <p className="card-data">Last Name: {lastName}</p>
                <p className="card-data">Gender: {gender}</p>
                <p className="card-data">Height: {height}</p>
                <p className="card-data">Birth: {birth.toDateString()}</p>
            </div>
        </div>
    );
}

export default IdCard;