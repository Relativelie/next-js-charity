export const Card = () => {
  return (
    <div
      role="status"
      className="flex animate-pulse flex-col gap-5 rounded-lg bg-tertiary-opacity p-5"
    >
      <div className="h-6 w-64 rounded-full bg-quinary" />
      <div className="h-4 w-48 rounded-full bg-quinary" />
      <div className="h-4 w-48 rounded-full bg-quinary" />
      <div className="h-4 w-48 rounded-full bg-quinary" />
    </div>
  );
};
