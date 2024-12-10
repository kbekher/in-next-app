import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import SayHello from "../SayHello/SayHello";

const HeaderDesktop = ( {isShrunk} ) => {
  return (
    <div className='flex w-full justify-between items-center'>
      <Logo isClickable />
      <Navbar isShrunk={isShrunk} />
      <SayHello />
    </div>
  );
};

export default HeaderDesktop;
