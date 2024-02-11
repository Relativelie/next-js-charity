'use client';

import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema } from './yupSchema';
import LabeledInput from './LabeledInput';
import { sendContactForm } from '@/lib/server/contact/action';
import { Inputs } from '@/lib/server/contact/models';
import AppFilledButton from '@/components/AppFilledButton';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSend = async (data: Inputs) => {
    try {
      await sendContactForm(data);
      reset();
      toast.success('Your message has been sent successfully.');
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSend)}
      className="flex flex-col items-center gap-7"
    >
      <LabeledInput
        label="Your name *"
        name="name"
        register={register('name')}
        error={errors.name?.message}
      />
      <LabeledInput
        label="Your email *"
        name="email"
        register={register('email')}
        error={errors.email?.message}
      />
      <LabeledInput
        label="Your phone *"
        name="phone"
        register={register('phone')}
        error={errors.phone?.message}
      />

      <div className="mt-5 grid md:grid-cols-[10rem,20rem]">
        <AppFilledButton
          title={isSubmitting ? 'Sending...' : 'Send'}
          aria-disabled={isSubmitting}
          className="col-span-2 py-2"
        />
      </div>
    </form>
  );
};

export default ContactForm;
