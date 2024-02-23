import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Result: React.FC = () => {
    const accessOn = useSelector((state: RootState) => state.keyboard.accessOn);
    const accessOff = useSelector((state: RootState) => state.keyboard.accessOff);

    // Условные классы в зависимости от статуса доступа
    const message = accessOn ? 'message-open' : accessOff ? 'message-close' : '';

    return (
        <div className={message}>
            {accessOn ? 'Замок открыт' : accessOff ? 'Замок закрыт' : ''}
        </div>
    );
};

export default Result;
