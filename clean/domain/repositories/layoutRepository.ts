import type { DataError } from '@clean/domain/entities/dataError';
import type { Either } from '@clean/domain/entities/either';
import { paginationDTO } from '@clean/domain/dtos/Common/Pagination/index';
export interface LayoutRepository {
  GetAllAuthor(Country: string): Promise<Either<DataError, any>>;
  GetAuthorById(Country: string, AuthorId: string): Promise<Either<DataError, any>>;
  GetAllCountries(): Promise<Either<DataError, any>>;
  GetAllCategories(Country: string): Promise<Either<DataError, any>>;
  GetCategoryByName(Country: string, nameCategory: string): Promise<Either<DataError, any>>;
  GetAllTags(Country: string): Promise<Either<DataError, any>>;
  GetNote(Country: string): Promise<Either<DataError, any>>;
  GetLastNote(Country: string, Options: paginationDTO): Promise<Either<DataError, any>>;
  GetNotesByCategory(Country: string, CategoryId: string, Options: paginationDTO): Promise<Either<DataError, any>>;
  GetNotesByHref(country: string, noteId: string): Promise<Either<DataError, any>>;
  GetNotesByAuthor(country: string, AuthorId: string): Promise<Either<DataError, any>>;
  GetNotesByTitle(country: string, search: string): Promise<Either<DataError, any>>;
  GetCountryConfig(Country: string): Promise<Either<DataError, any>>;
  GetPromotions(Country: string, Locale: string, InHome: boolean): Promise<Either<DataError, any>>;
  GetConditions(Country: string, Locale: string): Promise<Either<DataError, any>>;
  GetFAQS(Country: string, Locale: string): Promise<Either<DataError, any>>;
  GetMenuFooter(Country: string, Locale: string): Promise<Either<DataError, any>>;
  GetMenuNavbar(Country: string, Locale: string): Promise<Either<DataError, any>>;
  GetSocialMedia(Country: string, Locale: string): Promise<Either<DataError, any>>;
  GetBanners(
    Page: string,
    Country: string,
    Class: string,
    Locale: string
  ): Promise<Either<DataError, any>>;
  GetRecommendGame(
    Page: string,
    Country: string,
    Class: string,
    Locale: string
  ): Promise<Either<DataError, any>>;
  GetRecommendLiveGames(Country: string, Locale: string): Promise<Either<DataError, any>>;
}
