import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { updateStepper } from '../../store/slices/stepperSlice';
import { useEffect } from 'react';

const Step3 = (props) => {
    const {password} = useSelector((state) => state.stepper);
    const dispatch = useDispatch();

    const initialValues = {
        password: password,
        confirmPassword: password,
    };
    const validationSchema = Yup.object({
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    const handleSubmit = (values, { setSubmitting }) => {
        dispatch(updateStepper({ password: values.password }));
        setSubmitting(false);
        props.next();
    };

    const prevHandler = () => {
        props.prev();
    }

    return (
        <div className='text-center d-flex flex-column justify-content-center'>
            <div className='container bg-body-secondary rounded mt-5 py-4 col-xl-5'>
                <h3 className='fw-bolder'>Contact Details</h3>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    <Form>
                        <div className='d-flex justify-content-center align-content-center flex-column flex-wrap pt-3 mt-5'>
                            <Field type='password' id='password' name='password' placeholder='Enter password' className='rounded p-2 col-xl-5 mt-3' />
                            <ErrorMessage name='password' component='div' className='text-danger text-start' />
                            <Field type='password' id='confirmPassword' name='confirmPassword' placeholder='Confirm password' className='rounded p-2 col-xl-5 mt-3' />
                            <ErrorMessage name='confirmPassword' component='div' className='text-danger text-start' />
                            <div className='d-flex justify-content-between'>
                                <button className='btn btn-primary my-4 btn-lg' onClick={prevHandler}>
                                    Previous
                                </button>
                                <button type='submit' className='btn btn-primary my-4 btn-lg'>
                                    Next
                                </button>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Step3;
