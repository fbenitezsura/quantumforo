import SearchDesktopForm from "@/app/components/Molecule/form/searchDesktopForm";
import SearchMobileButton from "@/app/components/Molecule/SearchModalButton/index";

const ViewSearch = ({
    openModalSearch,
    handleSearch
}) => {

    return (
        <>
        <SearchDesktopForm
        handleSearch={handleSearch}
        />
        <SearchMobileButton  
        openModalSearch={openModalSearch}
        />
        </>
    )

}   

export default ViewSearch;