import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { PrivateLoading } from "../component/lottie/Lottie";


const Private = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[90vh] ">
          <PrivateLoading></PrivateLoading>
      </div>
    );
  }

  if (user && !loading) {
    return children;
  }
return <Navigate to="/login" />;
  
};

export default Private;

 
