import Link from 'next/link';
import AppFilledButton from '../AppFilledButton';

const AppContactUsContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 rounded-lg bg-secondary p-4">
      <h4>Got a question, suggestion, or just want to say hello?</h4>
      <p>We`d love to hear from you! Click the button bellow. </p>
      <Link href="/contact">
        <AppFilledButton title="Contact Us" />
      </Link>
    </div>
  );
};

export default AppContactUsContainer;
