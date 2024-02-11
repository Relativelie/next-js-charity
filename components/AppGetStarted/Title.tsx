import { cursive } from '@/lib/ui/fonts';

const Title = () => {
  return (
    <div className="flex md:w-2/3 flex-col items-center gap-5 text-center">
      <h2 className={cursive.className}>Get Started</h2>
      <h4 className={cursive.className}>
        Ready to embark on a journey of support, friendship, and exploration?
        Click the buttons below to find the help you need.
      </h4>
    </div>
  );
};

export default Title;
