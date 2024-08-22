// components/form/FormContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type FormData = {
  email: string;
  firstName: string;
  lastName: string;
  salary: string;
  phone: string;
};

type FormContextType = {
  formData: FormData;
  updateFormData: (newData: Partial<FormData>) => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    firstName: '',
    lastName: '',
    salary: '',
    phone: '',
  });

  const updateFormData = (newData: Partial<FormData>) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};