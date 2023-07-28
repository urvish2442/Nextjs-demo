import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { updateStepper } from '../../store/slices/stepperSlice';
import { useEffect } from 'react';
import Link from 'next/link';


const Step4 = () => {
    const stepper = useSelector((state) => state.stepper);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('stepper--', stepper);
    }, [stepper]);

    return (
        <div className='text-center d-flex flex-column justify-content-center'>
            <div className='container bg-body-secondary rounded mt-5 py-4 col-xl-5'>
                <h3 className='fw-bolder'>Congratulation {stepper.fname}, Your Registration is complete!!!!</h3>

                <div className='d-flex justify-content-center align-content-center flex-column flex-wrap pt-3 mt-5'></div>
                <Link href="/" className='btn btn-primary my-4 btn-lg '>Home</Link>
            </div>
        </div>
    );
};

export default Step4;
