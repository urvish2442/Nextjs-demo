import { useState } from 'react';

export default function Counter() {
    const [counter, setCounter] = useState(1);
    return (
        <div className='d-flex justify-content-center mt-4'>
            <div className='d-flex justify-content-center rounded'>
                <div className='align-middle'>
                    <button className='btn btn-secondary' onClick={() => { setCounter(counter + 1) }}><h3>+</h3></button>
                </div>
                <div>
                    <h3 className='p-3'>{counter}</h3>
                </div>
                <div>
                    <button className='btn btn-secondary' onClick={() => { setCounter(counter - 1) }}><h3>-</h3></button>
                </div>
            </div>
        </div>
    )
}

