// pages/LoginPage.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { updateStepper } from '../../store/slices/stepperSlice';
import { useEffect } from 'react';

const Step1 = (props) => {
    const {fname , lname} = useSelector((state) => state.stepper);
    const stepper = useSelector((state) => state.stepper);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('stepper--', stepper);
    }, [stepper]);

    const initialValues = {
        fname: '',
        lname: '',
    };

    const validationSchema = Yup.object({
        fname: Yup.string().required('First-name is required'),
        lname: Yup.string().required('Last-name is required'),
    });

    const handleSubmit = (values, { setSubmitting }) => {
        // dispatch(updateStepper({ fname:values.fname, lname:values.lname }));
        props.next();
        setSubmitting(false);     
         // console.log(JSON.stringify(values, null, 2));
    };

    return (
        <div className='text-center d-flex flex-column justify-content-center'>
            <div className='container bg-body-secondary rounded mt-5 py-4 col-xl-5'>
                <h3 className='fw-bolder'>Basic Information</h3>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    <Form>
                        <div className='d-flex justify-content-center align-content-center flex-column flex-wrap pt-3 mt-5'>
                            <Field type='text' id='fname' name='fname' placeholder='Enter Firstname' className='rounded p-2 col-xl-5'/>
                            <ErrorMessage name='fname' component='div' className='text-danger text-start' />
                            <Field type='text' id='lname' name='lname' placeholder='Enter Lastname' className='rounded p-2 col-xl-5 mt-3' />
                            <ErrorMessage name='lname' component='div' className='text-danger text-start' />
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

export default Step1;
