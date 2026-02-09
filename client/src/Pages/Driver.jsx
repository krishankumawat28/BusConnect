import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';

const Driver = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);

  useEffect(() => {
    console.log(user) ;
    if (user?._id) navigate('/login');
    else if (user.role === "driver" && !user.BusNo) navigate('/driver/BusRegisters1');
    else if (user.role === "driver" && user.BusNo) navigate('/driver/profile');
  }, [user, navigate]);

  return (
    <>
    <h1>hello bros</h1>
      {/* driver layout / navbar (optional) */}
      <Outlet />
    </>
  );
};

export default Driver;
