import SearchDesktopForm from "@components/Molecules/form/searchDesktopForm";
import SearchMobileButton from "@components/Molecules/SearchModalButton/index";

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