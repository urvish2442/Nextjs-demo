import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCheckbox } from '../../store/slices/checkBoxSlice';
import { updateRadio } from '../../store/slices/radioSlice';
import { updateNumber } from '../../store/slices/numberSlice';
import { updateText } from '../../store/slices/textSlice';
import CheckboxRTK from '../../components/reduxToolKit/CheckboxRTK';
import RadioRTK from '../../components/reduxToolKit/RadioRTK';
import NumberRTK from '../../components/reduxToolKit/NumberRTK';
import TextRTK from '../../components/reduxToolKit/TextRTK'

export default function ReduxToolKit() {
    const checkbox = useSelector((state) => state.checkBox.checkBoxValue);
    const radio = useSelector((state) => state.radio.radioValue);
    const number = useSelector((state) => state.number.numberValue);
    const text = useSelector((state) => state.text.textValue);
    const dispatch = useDispatch();

    const handleCheckbox = (e) => {
        const { name, checked } = e.target;
        dispatch(updateCheckbox({ name, checked }));
    };

    const handleRadio = (e) => {
        dispatch(updateRadio(e.target.value));
    };

    const handleNumber = (e) => {
        dispatch(updateNumber(e.target.value));
    };

    const handleText = (e) => {
        dispatch(updateText(e.target.value));
    };

    return (
        <>
            <div className='d-flex m-2 flex-column'>
                <div>
                    <input type='checkbox' id='tech1' name='tech1' value='ios' onChange={handleCheckbox} checked={checkbox.tech1 === true ?? false} />
                    <label className='mx-2'>Ios</label>
                </div>
                <div>
                    <input type='checkbox' id='tech2' name='tech2' value='android' onChange={handleCheckbox} checked={checkbox.tech2 === true ?? false} />
                    <label className='mx-2'>Android</label>
                </div>
                <div>
                    <input type='checkbox' id='tech3' name='tech3' value='angular' onChange={handleCheckbox} checked={checkbox.tech3 === true ?? false} />
                    <label className='mx-2'>Angular</label>
                </div>
            </div>
            <h3>Duplicating state in child component</h3>
            <CheckboxRTK />
            <hr />
            <div className='d-flex m-2 flex-column'>
                <div>
                    <input type='radio' name='designation' value='developer' onChange={handleRadio} checked={radio === 'developer'} />
                    <label className='mx-2'>Developer</label>
                </div>
                <div>
                    <input type='radio' name='designation' value='designer' onChange={handleRadio} checked={radio === 'designer'} />
                    <label className='mx-2'>Designer</label>
                </div>
            </div>
            <h3>Duplicating state in child component</h3>
            <RadioRTK name='childDesignation' />
            <hr />
            <div className='d-flex m-2 flex-column'>
                <div>
                    <input type='number' name='number' value={number} onChange={handleNumber} />
                </div>
            </div>
            <h3>Duplicating state in child component</h3>
            <NumberRTK />
            <hr />
            <div className='d-flex m-2 flex-column'>
                <div>
                    <input type='text' name='text' value={text} onChange={handleText} placeholder='Enter Text Here' />
                </div>
            </div>
            <h3>Duplicating state in child component</h3>
            <TextRTK />
            <hr />
        </>
    );
}
