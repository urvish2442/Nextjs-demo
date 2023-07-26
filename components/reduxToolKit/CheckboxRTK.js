import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCheckbox } from '../../store/slices/checkBoxSlice';

export default function CheckboxRTK() {
    const checkbox = useSelector((state) => state.checkBox.checkBoxValue);
    const dispatch = useDispatch();

    const handleCheckbox = (e) => {
        const { name, checked } = e.target;
        dispatch(updateCheckbox({ name, checked }));
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
        </>
    );
}
