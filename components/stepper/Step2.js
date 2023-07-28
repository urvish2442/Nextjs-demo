// pages/LoginPage.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { updateStepper } from '../../store/slices/stepperSlice';
import { useEffect } from 'react';

const Step2 = (props) => {
    const stepper = useSelector((state) => state.stepper);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('stepper--', stepper);
    }, [stepper]);

    const initialValues = {
        phone: '',
        email: '',
    };

    const phoneRegExp = /^[0-9]{10}$/;
    const validationSchema = Yup.object({
        phone: Yup.string().matches(phoneRegExp, 'Phone number must be exactly 10 digits').required('Phone number is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
    });

    const handleSubmit = (values, { setSubmitting }) => {
        dispatch(updateStepper({ phone: values.phone, email: values.email }));
        setSubmitting(false);
        props.next();
        console.log(JSON.stringify(values, null, 2));
    };

    return (
        <div className='text-center d-flex flex-column justify-content-center'>
            <div className='container bg-body-secondary rounded mt-5 py-4 col-xl-5'>
                <h3 className='fw-bolder'>Contact Details</h3>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    <Form>
                        <div className='d-flex justify-content-center align-content-center flex-column flex-wrap pt-3 mt-5'>
                            <Field type='text' id='phone' name='phone' placeholder='Enter Phone number' className='rounded p-2 col-xl-5' />
                            <ErrorMessage name='phone' component='div' className='text-danger text-start' />
                            <Field type='email' id='email' name='email' placeholder='Enter email' className='rounded p-2 col-xl-5 mt-3' />
                            <ErrorMessage name='email' component='div' className='text-danger text-start' />
                            {/* <div className='d-flex justify-content-between'>
                                <button className='btn btn-primary my-4 btn-lg ml' onClick={props?.prev}>previous</button>
                                <button type='submit' className='btn btn-primary my-4 btn-lg '>
                                    next
                                </button>
                            </div> */}
                        </div>
                        <button type='submit' className='btn btn-primary my-4 btn-lg' >
                            Next
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Step2;
