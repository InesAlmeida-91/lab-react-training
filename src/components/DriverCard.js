import Rating from "./Rating";

function DriverCard({name, rating, img, car}) {
    return(
        <div className="driver-card-container">
        <div>
            <img className="driver-img" src={img} alt={name}/>
        </div>
        <div className="driver-card-info">
            <h2>{name}</h2>
            <h3> <Rating>{rating}</Rating> </h3>
            <p>{car.model} - {car.licensePlate}</p>
        </div>
    
        </div>
    )
}

export default DriverCard;