import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateNumber } from '../../store/slices/numberSlice';

export default function NumberRTK() {
    const number = useSelector((state) => state.number.numberValue);
    const dispatch = useDispatch();

    const handleNumber = (e) => {
        dispatch(updateNumber(e.target.value));
    };

    return (
        <>
            <div className='d-flex m-2 flex-column'>
                <div>
                    <input type='number' name='number' value={number} onChange={handleNumber} />
                </div>
            </div>
        </>
    );
}
