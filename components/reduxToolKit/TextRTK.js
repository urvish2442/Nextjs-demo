import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateText } from '../../store/slices/textSlice';


export default function TextRTK() {
    const text = useSelector((state) => state.text.textValue);
    const dispatch = useDispatch();

    const handleText = (e) => {
        dispatch(updateText(e.target.value));
    };

    return (
        <>
            <div className='d-flex m-2 flex-column'>
                <div>
                    <input type='text' name='text' value={text} onChange={handleText} placeholder='Enter Text Here' />
                </div>
            </div>
        </>
    );
}
