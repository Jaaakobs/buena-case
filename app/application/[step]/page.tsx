'use client';

import { usePathname } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { StepForm } from '@/components/form/StepForm';
import { EmailStep } from '@/components/form/EmailStep';
import { NameStep } from '@/components/form/NameStep';
import { SalaryStep } from '@/components/form/SalaryStep';
import { PhoneStep } from '@/components/form/PhoneStep';
import { useEffect } from 'react';
import { useFormContext } from '@/components/form/FormContext';

const stepComponents: { [key: number]: React.FC } = {
  1: EmailStep,
  2: NameStep,
  3: SalaryStep,
  4: PhoneStep,
};

export default function StepPage() {
  const pathname = usePathname();
  const step = parseInt(pathname.split('/').pop() || '1', 10);
  const StepComponent = stepComponents[step];

  const { formData, updateFormData } = useFormContext();

  const methods = useForm({
    mode: 'onChange',
    defaultValues: formData,
  });

  useEffect(() => {
    const subscription = methods.watch((value) => {
      updateFormData(value);
    });
    return () => subscription.unsubscribe();
  }, [methods, updateFormData]);

  return (
    <FormProvider {...methods}>
      <StepForm step={step}>
        {StepComponent && <StepComponent />}
      </StepForm>
    </FormProvider>
  );
}