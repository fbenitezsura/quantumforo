'use client'
import dynamic from 'next/dynamic';
const ViewNote = dynamic(() => import('@/app/components/Organisms/Note/ViewNote'), {
  loading: () => <p>Loading...</p>,
})

const ContainerNote = ({
    detailNote
}) => {

    return (
        <ViewNote detailNote={detailNote}/>
    )

}

export default ContainerNote;
