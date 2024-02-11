import Link from 'next/link';

const NotFound = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mb-8 text-lg text-gray-600">
        Oops! The page you`re looking for does not exist.
      </p>
      <Link href="/">Go back to the homepage</Link>
    </main>
  );
};

export default NotFound;
