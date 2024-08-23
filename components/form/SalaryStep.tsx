import { useFormContext } from 'react-hook-form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function SalaryStep() {
  const { register, setValue, watch } = useFormContext();
  const selectedSalary = watch('salary');

  const handleChange = (value: string) => {
    setValue('salary', value, { shouldValidate: true });
  };

  return (
    <div className="flex flex-col items-center w-full">
      <Avatar className="w-24 h-24 mb-4">
        <AvatarImage src="/images/din.jpeg" alt="User Avatar" />
        <AvatarFallback>din</AvatarFallback>
      </Avatar>

      <h2 className="text-2xl font-semibold mb-2 text-center">What is your salary range?</h2>
      <p className="text-gray-500 mb-8 text-center">
        Please select your salary range to help us find suitable apartments for you.
      </p>

      <RadioGroup value={selectedSalary || ''} onValueChange={handleChange}>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="0-1000" id="option-1" />
            <Label htmlFor="option-1">0 - 1.000 €</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1000-2000" id="option-2" />
            <Label htmlFor="option-2">1.000 - 2.000 €</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2000-3000" id="option-3" />
            <Label htmlFor="option-3">2.000 - 3.000 €</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3000-4000" id="option-4" />
            <Label htmlFor="option-4">3.000 - 4.000 €</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="4000+" id="option-5" />
            <Label htmlFor="option-5">More than 4.000 €</Label>
          </div>
        </div>
      </RadioGroup>
    </div>
  );
}