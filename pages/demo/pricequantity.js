import React, { useState} from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function pricequantity() {
    const [priceQty, setPriceQty] = useState({
        price: '',
        qty: '',
        result: '',
    });
    function handleChange(event) {
        const { name, value } = event.target;
        var newResult;
        if (name === 'price') {
            newResult = (priceQty.qty === '' ? 1 : priceQty.qty) * value;
            setPriceQty({ ...priceQty, price: value, result: newResult });
        } else if (name === 'qty') {
            newResult = (priceQty.price === '' ? 1 : priceQty.price) * value;
            setPriceQty({ ...priceQty, qty: value, result: newResult });
        }
    }
    return (
        <div className='text-center'>
            <div className='d-flex justify-content-center'>
                <ButtonToolbar className='mb-3' aria-label='Toolbar with Button groups'>
                    <InputGroup className='mt-5'>
                        <InputGroup.Text id='btnGroupAddon'>Price</InputGroup.Text>
                        <Form.Control type='text' name='price' placeholder='Input group example' aria-label='Input group example' aria-describedby='btnGroupAddon' value={priceQty.price} onChange={handleChange} />
                        <InputGroup.Text id='btnGroupAddon'>X Qty.</InputGroup.Text>
                        <Form.Control type='text' name='qty' placeholder='Input group example' aria-label='Input group example' aria-describedby='btnGroupAddon' value={priceQty.qty} onChange={handleChange} />
                    </InputGroup>
                </ButtonToolbar>
            </div>
            <p className='text-danger fw-bolder my-4 py-3'>
                <span className='text-primary fw-bolder'>Output : </span> {priceQty.result}
            </p>
        </div>
    );
}
