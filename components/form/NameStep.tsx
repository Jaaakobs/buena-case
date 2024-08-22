import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function NameStep() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="flex flex-col items-center w-full">
      <Avatar className="w-24 h-24 mb-4">
        <AvatarImage src="/images/din.jpeg" alt="User Avatar" />
        <AvatarFallback>din</AvatarFallback>
      </Avatar>

      <h2 className="text-2xl font-semibold mb-2 text-center">What is your name?</h2>
      <p className="text-gray-500 mb-8 text-center">
        Please enter your first and last name.
      </p>

      <div className="w-full max-w-md">
        <Label htmlFor="firstName">First Name</Label>
        <Input 
          id="firstName" 
          placeholder="Enter your first name" 
          {...register('firstName', { required: 'First name is required' })}
          className={errors.firstName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.firstName.message?.toString()}
          </p>
        )}

        <Label htmlFor="lastName" className="mt-4">Last Name</Label>
        <Input 
          id="lastName" 
          placeholder="Enter your last name" 
          {...register('lastName', { required: 'Last name is required' })}
          className={errors.lastName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.lastName.message?.toString()}
          </p>
        )}
      </div>
    </div>
  );
}