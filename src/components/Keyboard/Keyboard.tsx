import React from 'react';
import { useDispatch } from 'react-redux';
import { enterNumber, deleteNumber, checkPassword } from '../store/keyboardS';

const KeyBoard: React.FC = () => {
    const dispatch = useDispatch();

    const handleKeyClick = (key: string) => {
        if (key === '<') {
            dispatch(deleteNumber());
        } else if (key === 'E') {
            dispatch(checkPassword());
        } else {
            dispatch(enterNumber(key));
        }
    };

    return (
        <div className='btn-alll'>
            <div>
                <button className='btn-all' onClick={() => handleKeyClick('7')}>7</button>
                <button className='btn-all' onClick={() => handleKeyClick('8')}>8</button>
                <button className='btn-all' onClick={() => handleKeyClick('9')}>9</button>
            </div>
            <div>
                <button className='btn-all' onClick={() => handleKeyClick('4')}>4</button>
                <button className='btn-all' onClick={() => handleKeyClick('5')}>5</button>
                <button className='btn-all' onClick={() => handleKeyClick('6')}>6</button>
            </div>
            <div>
                <button className='btn-all' onClick={() => handleKeyClick('1')}>1</button>
                <button className='btn-all' onClick={() => handleKeyClick('2')}>2</button>
                <button className='btn-all' onClick={() => handleKeyClick('3')}>3</button>
            </div>
            <div>
            <button className='btn-all' onClick={() => handleKeyClick('<')}>&lt;</button>
            <button className='btn-all' onClick={() => handleKeyClick('0')}>0</button>
            <button className='btn-all' onClick={() => handleKeyClick('E')}>E</button>
            </div>
        </div>
    );
};

export default KeyBoard;
