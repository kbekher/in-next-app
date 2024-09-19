import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import SayHello from "../SayHello/SayHello";

const HeaderDesktop = () => {
  return (
    <header className='flex w-full justify-between items-center'>
      <Logo isClickable />
      <Navbar />
      <SayHello />
    </header>
  );
};

export default HeaderDesktop;
