import LayoutUseCase from '@clean/domain/useCase/layoutUseCase';
import LayoutRepositoryImpl from '@clean/infrastructure/repositories/layoutRepositoryImpl';

export async function generateStaticParams() {
  const layoutRepo = new LayoutRepositoryImpl();
  const layoutService = new LayoutUseCase(layoutRepo);
  const categoriesAvailables = await layoutService.GetAllCategories('cl');
  let defaultNotes = [];

  await categoriesAvailables.fold(
    err => {
      return defaultNotes;
    },
    async allCategory => {
      // Map over allCategory and return an array of promises
      const promises = allCategory.map(async category => {
        const notesAvailables = await layoutService.GetNotesByCategory('cl', category.id, {});
        return notesAvailables.fold(
          err => {
            return defaultNotes;
          },
          allNotes => {
            if (allNotes.length > 0) { // typo fixed from 'lenght' to 'length'
              const notes = allNotes.map(nt => ({
                nameCategory: category.name,
                note: nt.href
              }));
              defaultNotes.push(...notes);
            }
          }
        )
      });
      // Wait for all promises to resolve before moving on
      await Promise.all(promises);
    }
  );
  return defaultNotes;
}


export default function Layout({
  children,
  params: {
    nameCategory,
    note
  }
}: {
  children: React.ReactNode,
  params: {
    nameCategory: string,
    note: string
  }
}) {

  return (
    <>
    {children}
    </>
  )
}
