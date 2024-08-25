/*import Pagination from "@components/Atoms/Pagination/Pagination";
import ButtonPrimary from "@components/Atoms/Button/ButtonPrimary";*/
import Nav from "@components/Atoms/Nav/Nav";
import NavItem from "@components/Atoms/NavItem/NavItem";
/*import SocialsList from "@components/Molecules/SocialsList/SocialsList";
import ArchiveFilterListBox from "@components/Molecules/ArchiveFilterListBox/ArchiveFilterListBox";
import SectionSubscribe2 from "@components/Molecules/SectionSubscribe2/SectionSubscribe2";*/
import Card11 from "@components/Molecules/Card11/index";
/*import BackgroundSection from "@components/Atoms/BackgroundSection/BackgroundSection";
import SectionGridCategoryBox from "@components/Molecules/SectionGridCategoryBox/SectionGridCategoryBox";
import ButtonSecondary from "@components/Atoms/Button/ButtonSecondary";
import SectionSliderNewAuthors from "@components/Molecules/SectionSliderNewAthors/SectionSliderNewAuthors";*/
import NcImage from "@components/Atoms/NcImage/NcImage";
import { GlobeAltIcon, ShareIcon } from "@heroicons/react/24/outline";
//import { avatarImgs } from "@contains/fakeData";
import VerifyIcon from "@components/Atoms/VerifyIcon";
/*import FollowButton from "@components/Molecules/FollowButton";
import NcDropDown from "@components/Atoms/NcDropDown/NcDropDown";
import { SOCIALS_DATA } from "@components/Atoms/SocialsShare/SocialsShare";
import AccountActionDropdown from "@components/Molecules/AccountActionDropdown/AccountActionDropdown";*/
import Image from "next/image";

const ViewAuthor = ({
    detailAuthor,
    posts,
    TABS,
    tabActive,
    handleClickTab,
    FILTERS = []
}) => {

    return (
        <div className={`nc-PageAuthor `}>
            {/* HEADER */}
            <div className="w-full">
                <div className="relative w-full h-40 md:h-60 2xl:h-72">
                    <NcImage
                        alt="background.png"
                        containerClassName="absolute inset-0"
                        sizes="(max-width: 1280px) 100vw, 1536px"
                        src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        className="object-cover w-full h-full"
                        fill
                        priority
                    />
                </div>
                <div className="container -mt-10 lg:-mt-16">
                    <div className="relative bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-8 rounded-3xl md:rounded-[40px] shadow-xl flex flex-col md:flex-row">
                        <div className="w-32 lg:w-40 flex-shrink-0 mt-12 sm:mt-0">
                            <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold rounded-full w-20 h-20 text-xl lg:text-2xl lg:w-36 lg:h-36 ring-4 ring-white dark:ring-0 shadow-2xl z-0">
                                <Image
                                    alt="Avatar"
                                    src={detailAuthor.avatar}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/*  */}
                        <div className="pt-5 md:pt-1 lg:ml-6 xl:ml-12 flex-grow">
                            <div className="max-w-screen-sm space-y-3.5 ">
                                <h2 className="inline-flex items-center text-2xl sm:text-3xl lg:text-4xl font-semibold">
                                    <span>{detailAuthor.firstName} {detailAuthor.lastName}</span>
                                    <VerifyIcon
                                        className="ml-2"
                                        iconClass="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8"
                                    />
                                </h2>
                                <span className="block text-sm text-neutral-500 dark:text-neutral-400">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Porro autem totam iure quibusdam asperiores numquam quae animi
                                    assumenda necessitatibus consectetur.
                                </span>
                                <a
                                    href={detailAuthor.href}
                                    target="_blank"
                                    className="flex items-center text-xs font-medium space-x-2.5 rtl:space-x-reverse cursor-pointer text-neutral-500 dark:text-neutral-400 truncate"
                                >
                                    <GlobeAltIcon className="flex-shrink-0 w-4 h-4" />
                                    <span className="text-neutral-700 dark:text-neutral-300 truncate">
                                      {detailAuthor.href}
                                    </span>
                                </a>
                                {/*<SocialsList itemClass="block w-7 h-7" />*/}
                            </div>
                        </div>

                        {/* 
                        <div className="absolute md:static start-5 end-5 top-4 sm:start-auto sm:top-5 sm:end-5 flex justify-end">
                            <FollowButton
                                isFollowing={false}
                                fontSize="text-sm md:text-base font-medium"
                                sizeClass="px-4 py-1 md:py-2.5 h-8 md:!h-10 sm:px-6 lg:px-8"
                            />

                            <div className="mx-2">
                                <NcDropDown
                                    className="flex-shrink-0 flex items-center justify-center focus:outline-none h-10 w-10 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full"
                                    renderTrigger={() => <ShareIcon className="h-5 w-5" />}
                                    onClick={() => { }}
                                    data={SOCIALS_DATA}
                                />
                            </div>

                            <AccountActionDropdown containerClassName="h-10 w-10 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700" />
                        </div> */}
                    </div>
                </div>
            </div>
            {/* ====================== END HEADER ====================== */}

            <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
                <main>
                    {/* TABS FILTER */}
                    <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row">
                        <Nav className="sm:space-x-2 rtl:space-x-reverse">
                            {TABS.map((item, index) => (
                                <NavItem
                                    key={index}
                                    isActive={tabActive === item.name}
                                    onClick={() => handleClickTab(item.name)}
                                >
                                    {item.name}
                                </NavItem>
                            ))}
                        </Nav>
                        <div className="block my-4 border-b w-full border-neutral-300 dark:border-neutral-500 sm:hidden"></div>
                        {/*<div className="flex justify-end">
                            <ArchiveFilterListBox lists={FILTERS} />
                        </div>*/}
                    </div>

                    {/* LOOP ITEMS */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10">
                        {posts?.filter((_, i) => _.category?.data?.attributes?.name === tabActive).map((post) => (
                            <Card11 key={post.id} post={post} />
                        ))}
                    </div>

                    {/* PAGINATION 
                    <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
                        <Pagination />
                        <ButtonPrimary>Show me more</ButtonPrimary>
                    </div>*/}
                </main>

                {/* === SECTION 5 === 
                <div className="relative py-16">
                    <BackgroundSection />
                    <SectionGridCategoryBox
                        categories={DEMO_CATEGORIES.filter((_, i) => i < 10)}
                    />
                    <div className="text-center mx-auto mt-10 md:mt-16">
                        <ButtonSecondary>Show me more</ButtonSecondary>
                    </div>
                </div>*/}

                {/* === SECTION 5 === 
                <SectionSliderNewAuthors
                    heading="Top elite authors"
                    subHeading="Discover our elite writers"
                    authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
                />*/}

                {/* SUBCRIBES 
                <SectionSubscribe2 />*/}
            </div>
        </div>
    )

}

export default ViewAuthor;