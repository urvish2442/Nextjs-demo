import React, { useEffect, useState } from 'react';
import Counter from '../../components/Counter';

export default function Clone() {
    const [val, setVal] = useState({});

    const handleClone = () => {
        const objLength = Object.keys(val).length;
        setVal((val) => ({ ...val, [objLength]: { id: objLength, count: 1 } }));
    };

    const dataFromChild = (myObj) => {
        setVal((val) => ({ ...val, [myObj.id]: { id: myObj.id, count: myObj.count } }));
    };

    return (
        <>
            <div className='mt-4'>
                <button className='btn btn-primary' onClick={handleClone}>
                    Add Component
                </button>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='d-flex justify-content-center'>
                    <div>
                        {Object.keys(val).map((keyName, index) => {
                            return <Counter key={'counter' + index} myObj={val[keyName]} dataFromChild={dataFromChild} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
