import { ContactForm, ContactHeader } from '@/components';

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
