'use client'
import React, { FC } from "react";
import Pagination from "@components/Atoms/Pagination/Pagination";
import CardAuthor from "@/app/components/Molecule/CardAuthor/index";
import Image from "next/image";
import LoadingSpinner from '@/app/components/Molecule/LoadingSpinner';

const PageArchive = ({
  detailCategory,
  posts,
  handleLoadData,
  currentPage,
  maxPage,
  loading
}) => {

  return (
    <div className={`nc-PageArchive`}>
      {/* HEADER */}
      <div className="w-full px-2 xl:max-w-screen-2xl mx-auto">
        <div className="relative aspect-w-16 aspect-h-13 sm:aspect-h-9 lg:aspect-h-8 xl:aspect-h-5 rounded-3xl md:rounded-[40px] overflow-hidden z-0">
          {detailCategory?.thumbnail && (<Image
            alt="archive"
            fill
            src={detailCategory?.thumbnail}
            className="object-cover w-full h-full rounded-3xl md:rounded-[40px]"
            sizes="(max-width: 1280px) 100vw, 1536px"
          />)}
          <div className="absolute inset-0 bg-black text-white bg-opacity-30 flex flex-col items-center justify-center">
            <h2 className="inline-block align-middle text-5xl font-semibold md:text-7xl ">
              {detailCategory?.name}
            </h2>
            {/*<span className="block mt-4 text-neutral-300">115 Articles</span>*/}
          </div>
        </div>
      </div>
      {/* ====================== END HEADER ====================== */}

      <div className="container pt-10 pb-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
        <div>
          {/*<div className="flex flex-col sm:justify-between sm:flex-row">
            <div className="flex space-x-2.5 rtl:space-x-reverse">
              
            </div>
            <div className="block my-4 border-b w-full border-neutral-300 dark:border-neutral-500 sm:hidden"></div>
            <div className="flex justify-end">
              <ArchiveFilterListBox lists={FILTERS} />
            </div>
          </div>*/}

          {/* LOOP ITEMS */}

          {loading ? (
            <LoadingSpinner textLoading="Cargando Notas..." />
          ) : (
            <>
              {posts.length === 0 && (
                <div className="w-full flex justify-center">
                  <span className="text-xl">Sin Notas.</span>
                </div>
              )}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10">
                {posts?.map((post) => (
                  <CardAuthor key={post.id} post={post} />
                ))}
              </div>
            </>
          )}
          {/* PAGINATIONS */}
          <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
            <Pagination
              loading={false}
              currentPage={currentPage}
              maxPage={maxPage}
              handleLoadData={handleLoadData}
            />
            {/*<ButtonPrimary>Mostrar más</ButtonPrimary>*/}
          </div>
        </div>

        {/* MORE SECTIONS */}
        {/* === SECTION 5 === */}


        {/* === SECTION 5 === */}


        {/* SUBCRIBES */}
      </div>
    </div>
  );
};

export default PageArchive;
