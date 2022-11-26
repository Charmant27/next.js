import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <h1 className={headerStyles.title}>
        <span>Web Dev</span> weekly blogs
      </h1>
      <p className={headerStyles.description}>
        subscribe to our news letter to be updated on every blog release
      </p>
    </>
  );
};

export default Header;
