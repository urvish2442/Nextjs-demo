import { useState } from 'react';

export default function keyup() {
    const [data, setData] = useState('');
    const inputHandler = (e) => {
        setData(e.target.value);
    };
    return (
        <div className='text-center'>
            <input type='text' value={data} onChange={inputHandler} className='mt-5' />
            <p className='text-danger fw-bolder my-4 py-3'>
                <span className='text-primary fw-bolder'>Output : </span> {data}
            </p>
        </div>
    );
}
