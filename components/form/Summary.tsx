'use client';

import { useFormContext } from 'react-hook-form'; 

export function Summary() {
  const { watch } = useFormContext();
  const formData = watch();

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4">Summary</h2>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>First Name:</strong> {formData.firstName}</p>
      <p><strong>Last Name:</strong> {formData.lastName}</p>
      <p><strong>Salary:</strong> {formData.salary}</p>
      <p><strong>Phone Number:</strong> {formData.phone}</p>
      <button className="mt-8 px-4 py-2 bg-blue-500 text-white rounded">
        Finish and Submit
      </button>
    </div>
  );
}