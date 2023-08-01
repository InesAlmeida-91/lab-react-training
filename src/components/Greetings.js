function Greetings(props) {
    const {lang, children} = props;

    let greeting;

    
    if (lang === "de") {
        greeting = "Hallo";
    } else if (lang === "en") {
        greeting = "Hello";
    } else if (lang === "es") {
        greeting = "Hola";
    } else {
        greeting = "Bonjour";
    }

    return(
        <p>{greeting + " " + children} </p>
    )
}

export default Greetings;