import React, { useContext } from 'react';
import {DataContext} from '../../../pages/demo/contextdemo';

export default function CheckBox() {
    const { checkBoxValue, setCheckBoxValue } = useContext(DataContext);
    const handleCheckbox = (e) => {
        const name = e.target.name;
        setCheckBoxValue({ ...checkBoxValue, [name]: e.target.checked });
    };
    return (
        <>
            <div className='d-flex m-2 flex-column'>
                <div>
                    <input type='checkbox' name='tech1' value='ios' checked={checkBoxValue.tech1 === true ?? false} onChange={handleCheckbox} />
                    <label className='mx-2'>Ios</label>
                </div>
                <div>
                    <input type='checkbox' name='tech2' value='android' checked={checkBoxValue.tech2 === true ?? false} onChange={handleCheckbox} />
                    <label className='mx-2'>Android</label>
                </div>
                <div>
                    <input type='checkbox' name='tech3' value='angular' checked={checkBoxValue.tech3 === true ?? false} onChange={handleCheckbox} />
                    <label className='mx-2'>Angular</label>
                </div>
            </div>
        </>
    );
}
