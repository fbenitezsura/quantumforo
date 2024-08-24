import LayoutUseCase from '@clean/domain/useCase/layoutUseCase';
import LayoutRepositoryImpl from '@clean/infrastructure/repositories/layoutRepositoryImpl';
import dynamic from 'next/dynamic';
const ContainerNote = dynamic(() => import('@components/Templates/Note/ContainerNote'), {
  loading: () => <p>Loading...</p>,
})

const getDetailNote = async (hrefNote: string) => {
  const layoutRepo = new LayoutRepositoryImpl();
  const layoutService = new LayoutUseCase(layoutRepo);
  let note = [];
  const resultNote = await layoutService.GetNotesByHref('cl',hrefNote);
  resultNote.fold(
    (err) => {
    },
    (detailNote) => {
      note = detailNote;
      
    }
  );
  return note[0];
}

const nameCategoryPage = async ({
  params: { note },
}: {
  params: { note: string }
}) => {

    const detailNote = await getDetailNote(note);

    return (
        <ContainerNote detailNote={detailNote}/>
    )
}

export default nameCategoryPage;