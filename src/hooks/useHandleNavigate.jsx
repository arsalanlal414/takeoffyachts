import { useNavigate } from "react-router-dom";

const useHandleNavigate = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return handleNavigate;
};

export default useHandleNavigate;