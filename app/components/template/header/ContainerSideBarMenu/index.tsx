import ViewSideBarMenu from "@/app/components/organism/header/ViewSideBarMenu";

const ContainerSideBarMenu = ({
    isOpen,
    toggleMenu
}) => {
  return (
    <ViewSideBarMenu 
    isOpen={isOpen}
    toggleMenu={toggleMenu}
    />
  );
}

export default ContainerSideBarMenu;