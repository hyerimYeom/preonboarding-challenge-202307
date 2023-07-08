import React, { useState, useEffect } from 'react';
import Root from './Root';
import About from './About';
import NotFound from './NotFound';

const Router: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.onpopstate = handleLocationChange;

    return () => {
      window.onpopstate = null;
    };
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState(null, '', path);
    setCurrentPath(path);
  };

  const renderComponent = () => {
    switch (currentPath) {
      case '/':
        return <Root />;
      case '/about':
        return <About />;
      default:
        return <NotFound />;
    }
  };



  const goBack = () => {
    window.history.back();
  };

  return (
    <div>
      <button onClick={() => navigateTo('/')}>Go to Root</button>
      <button onClick={() => navigateTo('/about')}>Go to About</button>
      <button onClick={goBack}>Go Back</button>
      {renderComponent()}
    </div>
  );
};

// const Root: React.FC = () => {
//   return <h1>Welcome to the Root page!</h1>;
// };

// const About: React.FC = () => {
//   return <h1>About page</h1>;
// };

// const NotFound: React.FC = () => {
//   return <h1>404 Not Found</h1>;
// };

export default Router;
