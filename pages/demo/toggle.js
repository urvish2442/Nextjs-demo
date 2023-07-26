
import React, {useState} from 'react';

export default function Toggle() {
    const [show, setShow] = useState(true);
    return (
        <div className='text-center'>
            {show && <p className='text-danger fw-bolder mt-5'>You can show and hide me with this buttons</p>}
            <button
                className='btn btn-lg btn-primary m-5'
                onClick={() => {
                    setShow(false);
                }}
            >
                Hide the text above
            </button>
            <button
                className='btn btn-lg btn-primary'
                onClick={() => {
                    setShow(true);
                }}
            >
                Show the text above
            </button>
        </div>
    );
}
