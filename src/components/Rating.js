function Rating(props) {
    const { children } = props;
  
    const filledStars = Math.round(children);
  
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < filledStars) {
        stars.push("★"); 
      } else {
        stars.push("☆");
      }
    }
  
    return <div>{stars.join(" ")}</div>;
  }
  
  export default Rating;
  
  