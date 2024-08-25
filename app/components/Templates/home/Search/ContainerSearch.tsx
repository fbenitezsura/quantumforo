'use client'
import ViewSearch from "@components/Organisms/home/Search/ViewSearch";
import { useAppDispatch } from "@/clean/application/redux/hook";
import { showModal } from "@clean/application/redux/modal/modal.slice";
import { useRouter } from 'next/navigation';

const ContainerSearch = () => {

    const router = useRouter();
    const dispatch = useAppDispatch();

    const handleOpenModalSearch = () => {
        dispatch(showModal('SEARCH_MODAL'));
    }

    const handleSearchDesktop = (data: any) => {
        console.log(data)
        const { search, city } = data;
        router.push(`/entrepreneurship?search=${encodeURIComponent(search)}&city=${encodeURIComponent(city)}`);
    }

    return (
        <ViewSearch 
        openModalSearch={handleOpenModalSearch}
        handleSearch={handleSearchDesktop}
        />
    )

}

export default ContainerSearch;