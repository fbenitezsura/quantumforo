import QuantumForoUseCase from '@clean/domain/useCase/quantumForoUseCase';
import QuantumForoRepositoryImpl from '@clean/infrastructure/repositories/quantumForoRepositoryImpl';
import ContainerStore from '@/app/components/Templates/store/ContainerStore';

const quantumForoRepo = new QuantumForoRepositoryImpl();
const quantumForoService = new QuantumForoUseCase(quantumForoRepo);

type Props = {
    params: { id: string }
  }

const getDetailStore = async (id) => {
    const storeResult = await quantumForoService.getStoreById(id);
    let store = null;
    storeResult.fold(
        (err) => {
            return null;
        },
        (storeInfo) => {
            store = storeInfo;
        }
    );
    return store;
    
}

const getDetailEntrepeneur = async (id) => {
    const storeResult = await quantumForoService.getEntrepreneurById(id);
    let store = null;
    storeResult.fold(
        (err) => {
            return null;
        },
        (storeInfo) => {
            store = storeInfo;
        }
    );
    return store;
    
}


const PageProfile = async ({ params }: Props) => {

    const detailStore = await getDetailStore(params?.id);

    return (
        <ContainerStore 
        detailStore={detailStore}
        />
    )
}

export default PageProfile;