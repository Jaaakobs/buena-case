'use client';

import { useFormContext } from '@/components/form/FormContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

export default function SummaryPage() {
  const { formData } = useFormContext();
  const { toast } = useToast();

  useEffect(() => {
    // Show toast when the page loads
    toast({
      title: 'Application Submitted',
      description: 'Your application has been successfully submitted!',
    });
  }, [toast]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="mt-[-10vh] flex flex-col items-center w-full max-w-lg">
        <Avatar className="w-24 h-24 mb-4">
          <AvatarImage src="/images/din.jpeg" alt="User Avatar" />
          <AvatarFallback>din</AvatarFallback>
        </Avatar>

        <h1 className="text-3xl font-bold mb-2 text-center">
          Congratulations, {formData.firstName}!
        </h1>

        <p className="text-gray-500 mb-8 text-center">
          Your application details are summarized below.
        </p>

        <div className="w-full max-w-md text-left space-y-2">
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>First Name:</strong> {formData.firstName}</p>
          <p><strong>Last Name:</strong> {formData.lastName}</p>
          <p><strong>Salary Range:</strong> {formData.salary}</p>
          <p><strong>Phone Number:</strong> {formData.phone}</p>
        </div>

        <p className="mt-4 text-center">
          Your application has been submitted. We&#39;ll get back to you shortly.
        </p>
      </div>
    </div>
  );
}