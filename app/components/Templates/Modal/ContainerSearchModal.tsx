'use client'
import ViewSearchModal from "@components/Organisms/Modal/ViewSearchModal";
import { useAppSelector, useAppDispatch } from "@/clean/application/redux/hook";
import { hideModal } from "@clean/application/redux/modal/modal.slice";
import { useRouter } from 'next/navigation';

const ContainerSearchModal = () => {

    const router = useRouter();
    const dispatch = useAppDispatch();

    const {
        isOpen
    } = useAppSelector(state => state.Modal)

    const handleClose = () => {
        dispatch(hideModal());
    }

    const handleSearch = (data: any) => {
        const { search, city } = data;
        router.push(`/entrepreneurship?search=${encodeURIComponent(search)}&city=${encodeURIComponent(city)}`);
    };

    return (
        <ViewSearchModal
            isOpen={isOpen}
            handleClose={handleClose}
            handleSearch={handleSearch}
        />
    )
}

export default ContainerSearchModal;