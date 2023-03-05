import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



function PrivateRoute({ children }) {
    const navigate=useNavigate()
  
    const {user} = useSelector(x => x.auth);
   
    useEffect(()=>{
    if (!user) {
       
        navigate('/')
       
    }}
   ,[])
    


    return children;
}
export { PrivateRoute };