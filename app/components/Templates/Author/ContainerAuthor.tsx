'use client'
import ViewAuthor from '@components/Organisms/Author/ViewAuthor';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '@clean/application/redux/hook';

const FILTERS = [
    { name: "Most Recent" },
    { name: "Curated by Admin" },
    { name: "Most Appreciated" },
    { name: "Most Discussed" },
    { name: "Most Viewed" },
];

const ContainerAuthor = ({
    detailAuthor,
    notesOfAuthor
}) => {

    const {
        categories
    } = useAppSelector(
        (state: any) => state.Categories
    );

    const [tabActive, setTabActive] = useState<string>(categories[0]?.name || 'Gamer');

    const handleClickTab = (item: string) => {
        if (item === tabActive) {
            return;
        }
        setTabActive(item);
    };

    return (
        <ViewAuthor
            detailAuthor={detailAuthor}
            tabActive={tabActive}
            FILTERS={FILTERS}
            posts={notesOfAuthor}
            TABS={categories}
            handleClickTab={handleClickTab}
        />
    )

}

export default ContainerAuthor;