const withLoading = (Component) => {
    return function WithLoadingComponent({ isLoading, ...props }) {
      if (isLoading) {
        return (
          <div className="flex justify-center items-center h-24">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-500"></div>
          </div>
        );
      }
      return <Component {...props} />;
    };
  };
  
  export default withLoading;
  