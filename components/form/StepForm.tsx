'use client';

import { ReactNode } from 'react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useFormContext as useRHFormContext } from 'react-hook-form';
import { useFormContext } from './FormContext';
import { motion, AnimatePresence } from 'framer-motion';

type StepFormProps = {
  children: ReactNode;
  step: number;
};

export function StepForm({ children, step }: StepFormProps) {
  const router = useRouter();
  const { trigger, formState: { isValid }, getValues } = useRHFormContext();
  const { updateFormData } = useFormContext();

  const nextStep = async () => {
    const isStepValid = await trigger(); // Validate the current step

    if (isStepValid) {
      updateFormData(getValues()); // Update the context with the current form data

      if (step < 4) {
        router.push(`/application/${step + 1}`);
      } else {
        router.push(`/application/summary`);
      }
    }
  };

  const prevStep = () => {
    updateFormData(getValues()); // Update the context with the current form data
    if (step > 1) {
      router.push(`/application/${step - 1}`);
    }
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Progress bar at the top, just below the header */}
      <div className="fixed top-[64px] w-full bg-primary z-40">
        <Progress value={(step / 4) * 100} className="w-full" />
      </div>

      {/* Main content container with max-width of 800px */}
      <div className="flex flex-col items-center w-full">
        <AnimatePresence mode="wait">
          <motion.main
            className="flex flex-col items-center w-full max-w-[600px] p-8 mx-auto mt-[120px]"
            key={step}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.42, 0, 0.58, 1],  // This is a custom ease for a more fluid transition
              when: "beforeChildren",    // This ensures exit animation completes before the next enters
            }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </div>

      <footer className="w-full fixed bottom-0 py-4">
        <div className="flex justify-between items-center w-full max-w-[600px] mx-auto px-8">
          {step > 1 && (
            <Button variant="ghost" onClick={prevStep}>
              Back
            </Button>
          )}
          <Button 
            onClick={nextStep} 
            className="ml-auto"
            disabled={!isValid} // Disable the Next/Submit button if the form is not valid
          >
            {step < 4 ? 'Next' : 'Submit'}
          </Button>
        </div>
      </footer>
    </div>
  );
}