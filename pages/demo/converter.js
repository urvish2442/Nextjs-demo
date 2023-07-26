import React, { useState } from 'react';

export default function Converter() {
    const [converter, setConverter] = useState(0);
    const [value, setValue] = useState({
        input1: '',
        input2: '',
    });
    const property = ['Time', 'Volume'];
    const unit1 = ['Minute', 'Liter'];
    const factor1 = [60, 1000];
    const unit2 = ['Second', 'Mililiter'];
    const factor2 = [0.01667, 0.001];
    function inputHandler(event) {
        const { name, value } = event.target;
        if (name === 'input1') {
            setValue({ input1: value, input2: (value * factor1[converter]).toFixed(3) });
        } else if (name === 'input2') {
            setValue({ input1: (value * factor2[converter]).toFixed(3), input2: value });
        }
    }
    return (
        <div className='text-center'>
            <select
                className='bg-primary mt-3 p-2 rounded text-white'
                name='property'
                id='property'
                onChange={(e) => {
                    setConverter(e.target.value);
                    setValue({ ...value, input2: value.input1 * factor1[e.target.value] });
                }}
                value={converter}
            >
                {property.map((item, index) => (
                    <option value={index} key={index + 1} className='text-align-center '>
                        {item}
                    </option>
                ))}
            </select>
            <div className='d-flex justify-content-center mt-4'>
                <div className='d-flex justify-content-center flex-column '>
                    <div>
                        <input type='text' name='input1' className='rounded p-1' value={value.input1} onChange={inputHandler} />
                    </div>
                    <div>
                        <select className='bg-secondary text-white p-2 mt-1 rounded ' name='unit1' id='unit1'>
                            <option value={converter}>{unit1[converter]}</option>
                        </select>
                    </div>
                </div>
                <div>
                    <p className='fw-bolder p-1 mx-2'>=</p>
                </div>

                <div className='d-flex justify-content-center flex-column '>
                    <div>
                        <input type='text' name='input2' className='rounded p-1' value={value.input2} onChange={inputHandler} />
                    </div>
                    <div>
                        <select className='bg-secondary text-white p-2 mt-1 rounded ' name='unit2' id='unit2'>
                            <option value={converter}>{unit2[converter]}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
