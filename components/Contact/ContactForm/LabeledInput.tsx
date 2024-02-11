import { UseFormRegisterReturn } from 'react-hook-form';

type LabeledInputProps = {
  register: UseFormRegisterReturn<string>;
  label: string;
  name: string;
  error?: string;
};

const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  register,
  name,
  error,
}) => {
  return (
    <div className="w-full items-center gap-5 px-5 md:grid md:w-fit md:grid-cols-[10rem,20rem]">
      <label className="text-xl" htmlFor={name}>
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          type="text"
          {...register}
          className="w-full rounded-lg border border-primary p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {error && (
          <div className="absolute">
            <p className="text-sm text-error">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LabeledInput;
