import Logo from "../Logo/Logo";

const HeaderMobile = ({ isShrunk }) => {
  return (
    <div>
      <Logo isClickable={false} isShrunk={isShrunk} />
    </div>
  );
};

export default HeaderMobile;