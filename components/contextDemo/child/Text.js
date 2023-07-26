import React, { useContext } from 'react';
import {DataContext} from '../../../pages/demo/contextdemo';

export default function Text() {
    const { textValue, setTextValue } = useContext(DataContext);

    const handleText = (e) => {
        setTextValue(e.target.value);
    };
    return (
        <>
            <div className='d-flex m-2 flex-column'>
                <div>
                    <input type='text' name='text' value={textValue} onChange={handleText} placeholder='Enter Text Here' />
                </div>
            </div>
        </>
    );
}
