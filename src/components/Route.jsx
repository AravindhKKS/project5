import UseNav from "../hook/UseNav";

const Route = ({ path, children }) => {
  const { currentPath } = UseNav();

  if (path === currentPath) {
    return children;
  }
  return null;
};

export default Route;
