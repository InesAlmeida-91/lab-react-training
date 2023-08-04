import emptyDice from '../assets/images/dice-empty.png';
import diceOne from '../assets/images/dice1.png';
import diceTwo from '../assets/images/dice2.png';
import diceThree from '../assets/images/dice3.png';
import diceFour from '../assets/images/dice4.png';
import diceFive from '../assets/images/dice5.png';
import diceSix from '../assets/images/dice6.png';
import { useState } from 'react';

function Dice() {
    const [diceNum, setDiceNum] = useState(3);

    let randomImage = [emptyDice, diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];

const handleClick = () => {
    setDiceNum(0);
    
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        setDiceNum(randomNumber);
    }, 1000);
};

    return(
        <img className='dice' src={randomImage[diceNum]} alt="dice" onClick={handleClick}/>
    )
}

export default Dice;
