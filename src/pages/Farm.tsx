import { useLocation } from "react-router-dom";
const FarmPage = () => {
  const location = useLocation();
  console.log(location.state);
  return <div>Farm </div>;
};

export default FarmPage;
