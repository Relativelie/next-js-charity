import clsx from 'clsx';

type FilledButtonProps = {
  title: string;
  className?: string;
};

const AppFilledButton: React.FC<FilledButtonProps> = ({
  title,
  className = '',
}) => {
  return (
    <button
      className={clsx(
        className,
        'min-w-16 rounded-lg bg-primary px-6 text-lg hover:bg-primary/60'
      )}
    >
      {title}
    </button>
  );
};

export default AppFilledButton;
