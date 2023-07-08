import React from "react";
import Root from "./Root";
import About from "./About";
import NotFound from "./NotFound";

 const Route: React.FC = (props) => {
  const {path, component} = props;

  const [currentPath, setCurrentPath] = useState(window.location.pathname);


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

  return (
   renderComponent()
  );
}

export default Route;