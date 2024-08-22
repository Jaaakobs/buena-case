// app/application/summary/page.tsx
import { Summary } from '@/components/form/Summary';
import { useForm } from 'react-hook-form';

export default function SummaryPage() {
  const methods = useForm({
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      salary: '',
      phone: '',
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <header className="flex justify-between w-full px-8 py-4">
        <div className="text-2xl font-bold">Buena</div>
        <button className="text-sm">Exit</button>
      </header>
      <main className="flex flex-col items-center w-full max-w-lg p-8">
        <h1 className="text-3xl font-bold mb-6">Congratulations!</h1>
        <Summary />
        <p className="mt-4 text-center">
          Your application has been submitted. We'll get back to you shortly.
        </p>
      </main>
    </div>
  );
}