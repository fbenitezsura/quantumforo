import LayoutUseCase from '@clean/domain/useCase/layoutUseCase';
import LayoutRepositoryImpl from '@clean/infrastructure/repositories/layoutRepositoryImpl';
import ContainerNameCategory from '@components/Templates/NameCategory/ContainerNameCategory';

const getDetailCategory = async (nameCategory: string) => {
  const layoutRepo = new LayoutRepositoryImpl();
  const layoutService = new LayoutUseCase(layoutRepo);
  let category = [];
  const resultCategory = await layoutService.GetCategoryByName('cl',nameCategory);
  resultCategory.fold(
    (err) => {
    },
    (detailCategory) => {
      category = detailCategory;
      
    }
  );
  return category[0];
}

const nameCategoryPage = async ({
  params: { nameCategory },
}: {
  params: { nameCategory: string }
}) => {

    const detailCategory = await getDetailCategory(nameCategory);

    return (
        <ContainerNameCategory detailCategory={detailCategory}/>
    )
}

export default nameCategoryPage;