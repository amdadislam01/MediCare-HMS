const LoadingSpinner = ({ size = 'md', color = 'primary' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  const colorClasses = {
    primary: 'border-primary-dark border-t-primary-light',
    secondary: 'border-secondary-dark border-t-secondary-light',
    muted: 'border-text-secondary border-t-text-muted',
  };

  return (
    <div
      className={`
        ${sizeClasses[size]} 
        ${colorClasses[color]} 
        border-2 border-solid rounded-full 
        animate-spin 
        inline-block
      `}
      role="status"
      aria-label="Loading"
    />
  );
};

export default LoadingSpinner;
