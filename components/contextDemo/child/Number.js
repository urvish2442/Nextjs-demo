import React, { useContext } from 'react';
import {DataContext} from '../../../pages/demo/contextdemo';

export default function Number() {
    const { numberValue, setNumberValue } = useContext(DataContext);

    const handleNumber = (e) => {
        setNumberValue(e.target.value);
    };
    return (
        <>
            <div className='d-flex m-2 flex-column'>
                <div>
                    <input type='number' name='number' value={numberValue} onChange={handleNumber} />
                </div>
            </div>
        </>
    );
}
