// hooks/useFormStep.tsx
import { useRouter } from 'next/router';
import { useState } from 'react';

export function useFormStep() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
      router.push(`/application/${step + 1}`);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      router.push(`/application/${step - 1}`);
    }
  };

  return { step, nextStep, prevStep };
}