import React, { useContext } from 'react';
import {DataContext} from '../../../pages/demo/contextdemo';

export default function Radio({name}) {
    const { radioValue, setRadioValue } = useContext(DataContext);

    const handleRadio = (e) => {
        setRadioValue(e.target.value);
    };
    return (
        <>
            <div className='d-flex m-2 flex-column'>
                <div>
                    <input type='radio' name={name} value='developer' onChange={handleRadio} checked={radioValue === 'developer'} />
                    <label className='mx-2'>Developer</label>
                </div>
                <div>
                    <input type='radio' name={name} value='designer' onChange={handleRadio} checked={radioValue === 'designer'} />
                    <label className='mx-2'>Designer</label>
                </div>
            </div>
        </>
    );
}
