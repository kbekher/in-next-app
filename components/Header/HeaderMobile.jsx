import Logo from "../Logo/Logo";

const HeaderMobile = ({ isShrunk }) => {
  return (
    <div>
      <Logo isClickable={true} isShrunk={isShrunk} />
    </div>
  );
};

export default HeaderMobile;