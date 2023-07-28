import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Step1 from '../../components/stepper/Step1';
import Step2 from '../../components/stepper/Step2';
import Step3 from '../../components/stepper/Step3';
import Step4 from '../../components/stepper/Step4';

const steps = ['Basic Information', 'Contact Details', 'Password', 'Complete'];

export default function HorizontalNonLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});

    const handleNext = () => {
        setActiveStep((activeStep) => activeStep + 1);
    };

    const handlePrev = () => {
        setActiveStep((activeStep) => activeStep - 1);
    };

    return (
        <Box sx={{ width: '100%' }} className='mt-4'>
            <div className='text-center mt-3'>
                <h2 className='fw-bolder'>Stepper Form Wizard</h2>
            </div>
            <Stepper nonLinear activeStep={activeStep} className='mt-5'>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]} className='mt-3'>
                        <StepButton color='inherit'>{label}</StepButton>
                    </Step>
                ))}
            </Stepper>
            <div>
                <React.Fragment>
                    <div className='text-center mt-2'>
                        {activeStep === 0 && <Step1 next={handleNext} />}
                        {activeStep === 1 && <Step2 next={handleNext} prev={handlePrev} />}
                        {activeStep === 2 && <Step3 next={handleNext} prev={handlePrev} />}
                        {activeStep === 3 && <Step4 />}
                    </div>
                </React.Fragment>
            </div>
        </Box>
    );
}
