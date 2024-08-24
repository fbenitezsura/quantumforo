import LayoutUseCase from '@clean/domain/useCase/layoutUseCase';
import LayoutRepositoryImpl from '@clean/infrastructure/repositories/layoutRepositoryImpl';

export async function generateStaticParams() {
  const layoutRepo = new LayoutRepositoryImpl();
  const layoutService = new LayoutUseCase(layoutRepo);
  const categoriesAvailables = await layoutService.GetAllCategories('cl');  
  let defaultCategories = [];
  categoriesAvailables.fold(
    (err) => {
      //throw new Error('categories not availables');
    },
    (category) => {
      defaultCategories = category.map((cy) => {
      return {
        nameCategory: cy.name
      }});
    }
  );
  return defaultCategories;
}

export default function Layout({
  children,
  params: {
    nameCategory
  }
}: {
  children: React.ReactNode,
  params: {
    nameCategory: string
  }
}) {

  return (
    <>
    {children}
    </>
  )
}
