import { Navigate } from 'react-router-dom';
import CreateExperience from '../Components/CreateExperience';

const PrivateRoutes = () => {
  // determine if the user is authenticated or not
  let auth = {'token':false}

  return (
    auth.token ? <CreateExperience/> : <Navigate to="/login"/>
  )
};


export default PrivateRoutes;