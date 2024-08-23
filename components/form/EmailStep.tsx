import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function EmailStep() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="flex flex-col items-center w-full">
      <Avatar className="w-24 h-24 mb-4">
        <AvatarImage src="/images/din.jpeg" alt="User Avatar" />
        <AvatarFallback>din</AvatarFallback>
      </Avatar>

      <h2 className="text-2xl font-semibold mb-2 text-center">What is your email?</h2>
      <p className="text-gray-500 mb-8 text-center">
        Please enter your email address so we can reach out to you.
      </p>

      <div className="w-full max-w-md">
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email" 
          type="email" 
          placeholder="Enter your email" 
          {...register('email', { 
            required: 'Email is required', 
            pattern: { 
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
              message: 'Invalid email address' 
            } 
          })}
          className={errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">
            {errors.email.message?.toString()}
          </p>
        )}
      </div>
    </div>
  );
}