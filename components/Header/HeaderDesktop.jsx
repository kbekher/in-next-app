import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import SayHello from "../SayHello/SayHello";

const HeaderDesktop = () => {
  return (
    <div className='flex w-full justify-between items-center'>
      <Logo isClickable />
      <Navbar />
      <SayHello />
    </div>
  );
};

export default HeaderDesktop;
