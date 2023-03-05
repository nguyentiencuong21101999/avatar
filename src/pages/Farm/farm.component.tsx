import { useLocation } from "react-router-dom";
import FarmView from "./farm.view";
type userState = {
  user: string;
};
const FarmPage = () => {
  const stateNav = useLocation().state as userState;

  return <FarmView state={stateNav} />;
};

export default FarmPage;
