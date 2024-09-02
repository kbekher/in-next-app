import Logo from "../Logo/Logo";

const HeaderDesktop = () => {
  return (
    <header className="flex w-full">
      <Logo width={50} height={64} isClickable/>

      <nav>
        {/* Desktop-specific navigation */}
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

export default HeaderDesktop;