import QuantumForoUseCase from '@clean/domain/useCase/quantumForoUseCase';
import QuantumForoRepositoryImpl from '@clean/infrastructure/repositories/quantumForoRepositoryImpl';
import ContainerStore from '@components/Templates/SingleStore/ContainerStore';

const quantumForoRepo = new QuantumForoRepositoryImpl();
const quantumForoService = new QuantumForoUseCase(quantumForoRepo);

type Props = {
    params: { id: string }
  }

const getDetailStore = async (id) => {
    console.log(id)
    const storeResult = await quantumForoService.getStoreById(id);
    let store = null;
    storeResult.fold(
        (err) => {
            console.log(err )
            return null;
        },
        (storeInfo) => {
            store = storeInfo;
        }
    );
    return store;
    
}

const getDetailEntrepeneur = async (id) => {
    const storeResult = await quantumForoService.getEntrepreneurByStoreId(id);
    let entrepreneur = null;
    storeResult.fold(
        (err) => {
            console.log('err',err)
            return null;
        },
        (entrepeneurInfo) => {
            entrepreneur = entrepeneurInfo;
        }
    );
    return entrepreneur;
    
}

const PageStore = async ({ params }: Props) => {

    const detailStore = await getDetailStore(params?.id);

    const detailEntrepreneur = await getDetailEntrepeneur(params?.id);

    return (
        <ContainerStore 
        detailStore={detailStore}
        detailEntrepreneur={detailEntrepreneur}
        />
    )
}

export default PageStore;