import React from 'react';
import { Provider } from 'react-redux';
import { store } from './components/store/store';
import KeyBoard from './components/Keyboard/Keyboard';
import Screen from './components/Screen/Screen';
import Result from './components/Result/Result';
import './App.css';

const App: React.FC = () => {
    return (
        <div className='main-block-key'>
            <div className='backrgound-key'>
        <Provider store={store}>
            <div className="main-keyboard">
                <div className='screen-display'>
                    <Screen />
                </div>
                <Result />
                <KeyBoard />
            </div>
        </Provider>
            </div>
        </div>
    );
};

export default App;
