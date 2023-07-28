import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Step1 from '../../components/stepper/Step1';
import Step2 from '../../components/stepper/Step2';
import Step3 from '../../components/stepper/Step3';
import Step4 from '../../components/stepper/Step4';

const steps = ['Basic Information', 'Contact Details', 'Password', 'Complete'];

export default function HorizontalNonLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        setActiveStep((activeStep) => activeStep + 1);
    };


    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]} className='mt-3'>
                        <StepButton color='inherit' >
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <div>
                {allStepsCompleted() ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <div className='text-center mt-4'>
                            {activeStep === 0 && <Step1 next={handleNext}/>}
                            {activeStep === 1 && <Step2 next={handleNext}/>}
                            {activeStep === 2 && <Step3 next={handleNext}/>}
                            {activeStep === 3 && <Step4 next={handleNext}/>}
                        </div>
                    </React.Fragment>
                )}
            </div>
        </Box>
    );
}
