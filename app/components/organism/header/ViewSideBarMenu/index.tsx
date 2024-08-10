import SiderbarAccountMenuMobile from '@components/molecules/header/siderbarMenuAccount';


const ViewSideBarMenu: React.FC<any> = ({
    isOpen,
    toggleMenu
}) => {

    return (
        <SiderbarAccountMenuMobile 
        isAccountMenuMobileOpen={isOpen}
        openAccountMenuMobileSidebar={()=>{ console.log('') }}
        closeAccountMenuMobileSidebar={()=>{ toggleMenu() }}
        handleLogout={()=>{ console.log('') }}
        />
    );
}

export default ViewSideBarMenu;