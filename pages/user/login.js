import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../../store/slices/authSlice';
import { useEffect } from 'react';

const LoginPage = () => {
    const { isAuthenticated, token, error } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('Auth--', isAuthenticated, ' token--', token, ' error--', error);
    }, [isAuthenticated]);

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });

    const handleSubmit = (values, { setSubmitting }) => {
        dispatch(login({ token: 'DummyToken', creds: values }));
        setSubmitting(false);
        // console.log(JSON.stringify(values, null, 2));
    };

    return (
        <div className='text-center d-flex flex-column justify-content-center'>
            <div className='container bg-body-secondary rounded mt-5 py-4 col-xl-5'>
                <h1 className='fw-bolder'>Login Form</h1>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    <Form>
                        <div className='d-flex justify-content-center align-content-center flex-column flex-wrap pt-3 mt-5'>
                            <Field type='email' id='email' name='email' placeholder='Enter Email' className='rounded p-2 col-xl-5'/>
                            <ErrorMessage name='email' component='div' className='text-danger text-start' />
                            <Field type='password' id='password' name='password' placeholder='Enter password' className='rounded p-2 col-xl-5 mt-3' />
                            <ErrorMessage name='password' component='div' className='text-danger text-start' />
                        </div>
                        {error && <div className='alert alert-danger my-3 p-2'>{error}</div>}
                        <button type='submit' className='btn btn-primary my-4 btn-lg '>
                            Login
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default LoginPage;
