import LayoutUseCase from '@clean/domain/useCase/layoutUseCase';
import LayoutRepositoryImpl from '@clean/infrastructure/repositories/layoutRepositoryImpl';
import dynamic from 'next/dynamic';
const ContainerAuthor = dynamic(() => import('@components/Templates/Author/ContainerAuthor'), {
  loading: () => <p>Loading...</p>,
})
const layoutRepo = new LayoutRepositoryImpl();
const layoutService = new LayoutUseCase(layoutRepo);
async function getDetailAuthor(AuthorId: string) {  
  let detailAuthor;
  const resultNote = await layoutService.GetAuthorById('cl',AuthorId);
  resultNote.fold(
    (err) => {
      //throw new Error('authors not availables');
    },
    async (author) => {
      detailAuthor = author[0];    
    }
  );
  return detailAuthor;
}

async function getNoteOfAuthor(AuthorId: string) {  
  let detailAuthor;
  const resultNote = await layoutService.GetNotesByAuthor('cl',AuthorId);
  resultNote.fold(
    (err) => {
      //throw new Error('authors not availables');
    },
    async (allNotes) => {
      detailAuthor = allNotes;    
    }
  );
  return detailAuthor;
}

export default async function PageAuthor ({
  params: { id },
}: {
  params: { id: string }
}) {

  const detailAuthor = await getDetailAuthor(id);

  const notesOfAuthor = await getNoteOfAuthor(id);

  return (
    <ContainerAuthor 
    detailAuthor={detailAuthor}
    notesOfAuthor={notesOfAuthor}
    />
  );
};
