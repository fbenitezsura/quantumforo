import ViewSideBarMenu from "@components/Organisms/header/ViewSideBarMenu";

const ContainerSideBarMenu = ({
    isOpen,
    toggleMenu,
    userLogged,
    userInfo,
    handleLogout
}) => {
  return (
    <ViewSideBarMenu 
    isOpen={isOpen}
    toggleMenu={toggleMenu}
    userLogged={userLogged}
    userInfo={userInfo}
    handleLogout={handleLogout}
    />
  );
}

export default ContainerSideBarMenu;