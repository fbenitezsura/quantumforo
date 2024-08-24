import type { DataError } from '@clean/domain/entities/dataError';
import { Either } from '@clean/domain/entities/either';
import { EitherAsync } from '@clean/domain/entities/eitherAsync';
import type { LayoutRepository } from '@clean/domain/repositories/layoutRepository';
import { transformDetailData,transformDetailDataWithPagination, orderMenu } from '@utils/DestructuringStrapi';
import { paginationDTO } from '@clean/domain/dtos/Common/Pagination/index';
class LayoutUseCase implements LayoutRepository {
  layoutRepo: LayoutRepository;

  constructor(LR: LayoutRepository) {
    this.layoutRepo = LR;
  }

  async GetAllAuthor(Country: string): Promise<Either<DataError, any>> {
    const authorResult = EitherAsync.fromPromise(this.layoutRepo.GetAllAuthor(Country));
    return authorResult
      .flatMap(async (Author) => { 
        const cleanAuthores = transformDetailData(Author);
        return Either.right(cleanAuthores);
      })
      .run();
  }
  async GetAuthorById(Country: string, AuthorId: string): Promise<Either<DataError, any>> {
    const authorResult = EitherAsync.fromPromise(this.layoutRepo.GetAuthorById(Country, AuthorId));
    return authorResult
      .flatMap(async (Author) => {
        const cleanAuthores = transformDetailData(Author);
        return Either.right(cleanAuthores);
      })
      .run();
  }
  async GetAllCountries(): Promise<Either<DataError, any>> {
    return this.layoutRepo.GetAllCountries();
  }
  async GetAllCategories(Country: string): Promise<Either<DataError, any>> {
    const categoriesResult = EitherAsync.fromPromise(this.layoutRepo.GetAllCategories(Country));
    return categoriesResult
      .flatMap(async (Categories) => {   
        const cleanCategories = transformDetailData(Categories);
        return Either.right(cleanCategories.sort((a, b) => a.order - b.order));
      })
      .run();
  }

  async GetCategoryByName(Country: string, nameCategory: string): Promise<Either<DataError, any>> {
    const categoriesResult = EitherAsync.fromPromise(this.layoutRepo.GetCategoryByName(Country, nameCategory));
    return categoriesResult
      .flatMap(async (Categories) => {  
        const cleanCategories = transformDetailData(Categories);
        return Either.right(cleanCategories);
      })
      .run();
  }

  async GetAllTags(Country: string): Promise<Either<DataError, any>> {
    return this.layoutRepo.GetAllTags(Country);
  }

  async GetNote(Country: string): Promise<Either<DataError, any>> {
    return this.layoutRepo.GetNote(Country);
  }
  async GetNotesByHref(country: string, noteId: string): Promise<Either<DataError, any>> {    
    const noteResult = EitherAsync.fromPromise(this.layoutRepo.GetNotesByHref(country, noteId));
    return noteResult
      .flatMap(async (Note) => {              
        const cleanNote = transformDetailData(Note);
        return Either.right(cleanNote);
      })
      .run();
  }
  async GetNotesByAuthor(country: string, AuthorId: string): Promise<Either<DataError, any>> {    
    const noteResult = EitherAsync.fromPromise(this.layoutRepo.GetNotesByAuthor(country, AuthorId));
    return noteResult
      .flatMap(async (Note) => {              
        const cleanNote = transformDetailData(Note);
        return Either.right(cleanNote);
      })
      .run();
  }
  async GetNotesByTitle(country: string, search: string): Promise<Either<DataError, any>> {    
    const noteResult = EitherAsync.fromPromise(this.layoutRepo.GetNotesByTitle(country, search));
    return noteResult
      .flatMap(async (Note) => {              
        const cleanNote = transformDetailData(Note);
        return Either.right(cleanNote);
      })
      .run();
  }
  async GetLastNote(Country: string, Options: paginationDTO): Promise<Either<DataError, any>> {
    const notesResult = EitherAsync.fromPromise(this.layoutRepo.GetLastNote(Country, Options));
    return notesResult
      .flatMap(async (Notes) => {
        const cleanNotes = transformDetailDataWithPagination(Notes);
        return Either.right(cleanNotes);
      })
      .run();
  }
  async GetNotesByCategory(Country: string,CategoryId: string, Options: paginationDTO): Promise<Either<DataError, any>> {
    const categoriesResult = EitherAsync.fromPromise(this.layoutRepo.GetNotesByCategory(Country, CategoryId, Options));
    return categoriesResult
      .flatMap(async (Categories) => {
        const cleanCategories = transformDetailData(Categories);
        return Either.right(cleanCategories.sort((a, b) => a.order - b.order));
      })
      .run();
  }
  async GetCountryConfig(Country: string): Promise<Either<DataError, any>> {
    return this.layoutRepo.GetCountryConfig(Country);
  }

  async GetPromotions(Country: string, Locale: string, InHome: boolean): Promise<Either<DataError, any>> {
    const promotionsResult = EitherAsync.fromPromise(this.layoutRepo.GetPromotions(Country,Locale,InHome));

    return promotionsResult
      .flatMap(async (promotions) => {
        const cleanPromotions = transformDetailData(promotions);
        return Either.right(cleanPromotions.sort((a, b) => a.order - b.order));
      })
      .run();
  }

  async GetConditions(Country: string, Locale: string): Promise<Either<DataError, any>> {
    const conditionsResult = EitherAsync.fromPromise(this.layoutRepo.GetConditions(Country,Locale));

    return conditionsResult
      .flatMap(async (conditions) => {
        const cleanConditions = transformDetailData(conditions);
        return Either.right(cleanConditions.sort((a, b) => a.order - b.order));
      })
      .run();
  }

  async GetFAQS(Country: string, Locale: string): Promise<Either<DataError, any>> {
    const faqsResult = EitherAsync.fromPromise(this.layoutRepo.GetFAQS(Country, Locale));

    return faqsResult
      .flatMap(async (faqs) => {
        const cleanFaqs = transformDetailData(faqs);
        return Either.right(cleanFaqs.sort((a, b) => a.order - b.order));
      })
      .run();
  }

  async GetMenuFooter(Country: string, Locale: string): Promise<Either<DataError, any>> {
    const menuResult = EitherAsync.fromPromise(this.layoutRepo.GetMenuFooter(Country, Locale));

    return menuResult
      .flatMap(async (Menu) => {
        const cleanMenu = transformDetailData(Menu);
        return Either.right(orderMenu(cleanMenu));
      })
      .run();
  }

  async GetMenuNavbar(Country: string, Locale: string): Promise<Either<DataError, any>> {
    const menuResult = EitherAsync.fromPromise(this.layoutRepo.GetMenuNavbar(Country, Locale));

    return menuResult
      .flatMap(async (Menu) => {
        const cleanMenu = transformDetailData(Menu);        
        return Either.right(cleanMenu.sort((a, b) => a.menu[0].order - b.menu[0].order));
      })
      .run();
  }

  async GetSocialMedia(Country: string, Locale: string): Promise<Either<DataError, any>> {
    const socialResult = EitherAsync.fromPromise(this.layoutRepo.GetSocialMedia(Country, Locale));

    return socialResult
      .flatMap(async (socialMedia) => {
        const cleanSocial = transformDetailData(socialMedia);
        return Either.right(cleanSocial.sort((a, b) => a.order - b.order));
      })
      .run();
  }

  async GetBanners(
    Page: string,
    Country: string,
    Class: string,
    Locale: string
  ): Promise<Either<DataError, any>> {
    const bannersResult = EitherAsync.fromPromise(this.layoutRepo.GetBanners(Page,Country,Class,Locale));
    return bannersResult
      .flatMap(async (Banners) => {
        const cleanBanners = transformDetailData(Banners);
        return Either.right(cleanBanners.sort((a, b) => a.order - b.order));
      })
      .run();
  }

  async GetRecommendGame(
    Page: string,
    Country: string,
    Class: string,
    Locale: string
  ): Promise<Either<DataError, any>> {
    const recommendResult = EitherAsync.fromPromise(this.layoutRepo.GetRecommendGame(Page, Country, Class, Locale));
    return recommendResult
      .flatMap(async (Recommend) => {
        const cleanRecommend = transformDetailData(Recommend);
        return Either.right(cleanRecommend.sort((a, b) => a.order - b.order));
      })
      .run();
  }

  async GetRecommendLiveGames(
    Country: string,
    Locale: string
  ): Promise<Either<DataError, any>> {
    const recommendResult = EitherAsync.fromPromise(this.layoutRepo.GetRecommendLiveGames(Country, Locale));
    return recommendResult
      .flatMap(async (Recommend) => {
        const cleanRecommend = transformDetailData(Recommend);
        return Either.right(cleanRecommend.sort((a, b) => a.order - b.order));
      })
      .run();
  }
}

export default LayoutUseCase;
