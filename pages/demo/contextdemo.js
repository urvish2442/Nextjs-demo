import React, { createContext, useState } from 'react';
import CheckBox from '../../components/contextDemo/child/CheckBox';
import Radio from '../../components/contextDemo/child/Radio';
import Number from '../../components/contextDemo/child/Number';
import Text from '../../components/contextDemo/child/Text';

export const DataContext = createContext();

export default function ContextDemo() {
    const [checkBoxValue, setCheckBoxValue] = useState({});
    const [radioValue, setRadioValue] = useState(null);
    const [numberValue, setNumberValue] = useState(0);
    const [textValue, setTextValue] = useState('');

    const handleCheckbox = (e) => {
        const name = e.target.name;
        setCheckBoxValue({ ...checkBoxValue, [name]: e.target.checked });
    };

    const handleRadio = (e) => {
        setRadioValue(e.target.value);
    };

    const handleNumber = (e) => {
        setNumberValue(e.target.value);
    };

    const handleText = (e) => {
        setTextValue(e.target.value);
    };

    return (
        <>
            <DataContext.Provider value={{ checkBoxValue, radioValue, numberValue, textValue, setCheckBoxValue, setRadioValue, setNumberValue, setTextValue }}>
                <div className='d-flex m-2 flex-column'>
                    <div>
                        <input type='checkbox' id='tech1' name='tech1' value='ios' checked={checkBoxValue.tech1 === true ?? false} onChange={handleCheckbox} />
                        <label className='mx-2'>Ios</label>
                    </div>
                    <div>
                        <input type='checkbox' id='tech2' name='tech2' value='android' checked={checkBoxValue.tech2 === true ?? false} onChange={handleCheckbox} />
                        <label className='mx-2'>Android</label>
                    </div>
                    <div>
                        <input type='checkbox' id='tech3' name='tech3' value='angular' checked={checkBoxValue.tech3 === true ?? false} onChange={handleCheckbox} />
                        <label className='mx-2'>Angular</label>
                    </div>
                </div>
                <h3>Duplicating state in child component</h3>
                <CheckBox />
                <hr />
                <div className='d-flex m-2 flex-column'>
                    <div>
                        <input type='radio' name='designation' value='developer' onChange={handleRadio} checked={radioValue === 'developer'} />
                        <label className='mx-2'>Developer</label>
                    </div>
                    <div>
                        <input type='radio' name='designation' value='designer' onChange={handleRadio} checked={radioValue === 'designer'} />
                        <label className='mx-2'>Designer</label>
                    </div>
                </div>
                <h3>Duplicating state in child component</h3>
                <Radio name='childDesignation' />
                <hr />
                <div className='d-flex m-2 flex-column'>
                    <div>
                        <input type='number' name='number' value={numberValue} onChange={handleNumber} />
                    </div>
                </div>
                <h3>Duplicating state in child component</h3>
                <Number />
                <hr />
                <div className='d-flex m-2 flex-column'>
                    <div>
                        <input type='text' name='text' value={textValue} onChange={handleText} placeholder='Enter Text Here' />
                    </div>
                </div>
                <h3>Duplicating state in child component</h3>
                <Text />
                <hr />
            </DataContext.Provider>
        </>
    );
}
