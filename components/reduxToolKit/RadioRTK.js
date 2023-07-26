import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateRadio } from '../../store/slices/radioSlice';

export default function RadioRTK({name}) {
    const radio = useSelector((state) => state.radio.radioValue);
    const dispatch = useDispatch();

    const handleRadio = (e) => {
        dispatch(updateRadio(e.target.value));
    };
    return (
        <>
            <div className='d-flex m-2 flex-column'>
                <div>
                    <input type='radio' name={name} value='developer' onChange={handleRadio} checked={radio === 'developer'} />
                    <label className='mx-2'>Developer</label>
                </div>
                <div>
                    <input type='radio' name={name} value='designer' onChange={handleRadio} checked={radio === 'designer'} />
                    <label className='mx-2'>Designer</label>
                </div>
            </div>
        </>
    );
}
