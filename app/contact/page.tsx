import { ContactForm, ContactHeader } from '@/components/specific';

export default function ContactPage() {
  return (
    <>
      <ContactHeader />
      <main className="mt-10">
        <ContactForm />
      </main>
    </>
  );
}
