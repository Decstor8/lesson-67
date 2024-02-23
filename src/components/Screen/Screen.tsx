import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Screen: React.FC = () => {
    const inputLength = useSelector((state: RootState) => state.keyboard.input.length);

    const maskedInput = '*'.repeat(inputLength);

    return (
        <div className="screen">
            <span className='sreen-span'>{maskedInput}</span>
        </div>
    );
};

export default Screen;
