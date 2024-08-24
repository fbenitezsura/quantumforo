import LayoutUseCase from '@clean/domain/useCase/layoutUseCase';
import LayoutRepositoryImpl from '@clean/infrastructure/repositories/layoutRepositoryImpl';

export async function generateStaticParams() {
  const layoutRepo = new LayoutRepositoryImpl();
  const layoutService = new LayoutUseCase(layoutRepo);
  const authorAvailables = await layoutService.GetAllAuthor('cl');  
  let defaultAuthor = [];
  authorAvailables.fold(
    (err) => {
      //throw new Error('authors not availables');
    },
    (authors) => {
      defaultAuthor = authors.map((author) => {
      return {
        id: author.id.toString()
      }});
    }
  );
  return defaultAuthor;
}

export default function Layout({
  children,
  params: {
    id
  }
}: {
  children: React.ReactNode,
  params: {
    id: string
  }
}) {

  return (
    <>
    {children}
    </>
  )
}
