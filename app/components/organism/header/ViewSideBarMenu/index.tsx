import SiderbarAccountMenuMobile from '@components/molecules/header/siderbarMenuAccount';


const ViewSideBarMenu: React.FC<any> = ({
    isOpen,
    toggleMenu,
    userLogged,
    userInfo,
    handleLogout
}) => {

    return (
        <SiderbarAccountMenuMobile 
        isAccountMenuMobileOpen={isOpen}
        openAccountMenuMobileSidebar={()=>{ console.log('') }}
        closeAccountMenuMobileSidebar={()=>{ toggleMenu() }}
        handleLogout={handleLogout}
        userLogged={userLogged}
        userInfo={userInfo}
        />
    );
}

export default ViewSideBarMenu;