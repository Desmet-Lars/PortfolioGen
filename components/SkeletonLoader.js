const SkeletonLoader = () => (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-pulse text-center">
        <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
        <div className="h-6 w-48 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 w-32 bg-gray-300 rounded"></div>
      </div>
    </div>
  );

  export default SkeletonLoader;
