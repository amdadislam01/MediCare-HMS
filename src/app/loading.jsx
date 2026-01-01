import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';

const PageLoader = ({ message = 'Loading...' }) => {
  return (
    <div className="fixed inset-0 z-50 bg-main flex flex-col items-center justify-center p-4">
      <LoadingSpinner size="lg" color="primary" />
      <p className="mt-4 text-secondary text-sm font-medium">{message}</p>
    </div>
  );
};

export default PageLoader;
