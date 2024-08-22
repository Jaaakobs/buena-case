import { useFormContext } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PhoneInput } from '@/components/ui/phone-input'; // Import your custom PhoneInput component

export function PhoneStep() {
  const { register, formState: { errors }, setValue, watch } = useFormContext();
  const phoneValue = watch('phone');

  return (
    <div className="flex flex-col items-center w-full">
      <Avatar className="w-24 h-24 mb-4">
        <AvatarImage src="/images/din.jpeg" alt="User Avatar" />
        <AvatarFallback>din</AvatarFallback>
      </Avatar>

      <h2 className="text-2xl font-semibold mb-2 text-center">What is your phone number?</h2>
      <p className="text-gray-500 mb-8 text-center">
        Providing your phone number increases your chances of finding your dream apartment.
      </p>

      <div className="w-full max-w-md">
        <Label htmlFor="phone">Phone Number</Label>
        <PhoneInput 
          value={phoneValue || ""}
          onChange={(value) => setValue('phone', value, { shouldValidate: true })}
          placeholder="Enter your phone number"
          className={errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">
            {errors.phone.message?.toString()}
          </p>
        )}
      </div>
    </div>
  );
}