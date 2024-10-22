'use client'
import ViewStore from '@components/Organisms/store/ViewStore';

const ContainerStore = ({
    detailStore,
    detailEntrepreneur
}) => {

    return (
        <ViewStore 
        detailStore={detailStore}
        detailEntrepreneur={detailEntrepreneur}
        />
    );
}

export default ContainerStore;