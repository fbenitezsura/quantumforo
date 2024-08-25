import ViewStore from '@components/Organisms/store/ViewStore';

const ContainerStore = ({
    detailStore
}) => {

    return (
        <ViewStore 
        detailStore={detailStore}
        />
    );
}

export default ContainerStore;