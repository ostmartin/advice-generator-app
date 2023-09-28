import Dice from '../../images/icon-dice.svg';

const GetAdviceButton = ({getNewAdvice}) => {
    return (
        <button onClick={getNewAdvice}>
            <img src={Dice} alt="Dice" />
        </button>
    )
}

export default GetAdviceButton