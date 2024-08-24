import type { DataError } from '@clean/domain/entities/dataError';
import { Either } from '@clean/domain/entities/either';
import { capitalizeFirstLetter } from '@utils/Capitalize';
import type { IBanners } from '@clean/domain/entities/layoutEntity';
import type { LayoutRepository } from '@clean/domain/repositories/layoutRepository';
import { apiQForo } from '@clean/infrastructure/http/index';
import { paginationDTO } from '@clean/domain/dtos/Common/Pagination/index'
class LayoutRepositoryImpl implements LayoutRepository {

  async GetAllCountries(): Promise<Either<DataError, any>> {
    return new Promise((resolver, _reject) => {
      setTimeout(async () => {
        try {
          const { data: Countries } = await apiQForo.get(
            '/countries?populate=*'
          );
          resolver(Either.right(Countries));
        } catch (error) {
          resolver(
            Either.left({ kind: 'UnexpectedError', error: error })
          );
        }
      }, 100);
    });
  }

  async GetAllCategories(Country: string): Promise<Either<DataError, any>> {
    return new Promise((resolver, _reject) => {
      setTimeout(async () => {
        try {
          const Categories = await apiQForo.get(
            `/categories?populate=*`
          );
          resolver(Either.right(Categories));
        } catch (error) {
          resolver(
            Either.left({ kind: 'UnexpectedError', error: error })
          );
        }
      }, 100);
    });
  }

  async GetCategoryByName(country: string, nameCategory: string): Promise<Either<DataError, any>> {
    return new Promise((resolver, _reject) => {
      setTimeout(async () => {
        try {
          const Categories = await apiQForo.get(
            `/categories?populate=*&filters[$and][1][code][$eq]=${country.toUpperCase()}&filters[$and][2][name][$eq]=${capitalizeFirstLetter(nameCategory)}`
          );
          resolver(Either.right(Categories));
        } catch (error) {
          resolver(
            Either.left({ kind: 'UnexpectedError', error: error })
          );
        }
      }, 100);
    });
  }

  async GetAllTags(Country: string): Promise<Either<DataError, any>> {
    return new Promise((resolver, _reject) => {
      setTimeout(async () => {
        try {
          const { data: Categories } = await apiQForo.get(
            `/categories?populate=*&filters[$and][0][code][$eq]=${Country.toUpperCase()}`
          );
          resolver(Either.right(Categories));
        } catch (error) {
          resolver(
            Either.left({ kind: 'UnexpectedError', error: error })
          );
        }
      }, 100);
    });
  }

  async GetNote(Country: string): Promise<Either<DataError, any>> {
    return new Promise((resolver, _reject) => {
      setTimeout(async () => {
        try {
          const { data: Categories } = await apiQForo.get(
            `/categories?populate=*&filters[$and][0][code][$eq]=${Country.toUpperCase()}`
          );
          resolver(Either.right(Categories));
        } catch (error) {
          resolver(
            Either.left({ kind: 'UnexpectedError', error: error })
          );
        }
      }, 100);
    });
  }

  async GetLastNote(Country: string, Options: paginationDTO): Promise<Either<DataError, any>> {
    return new Promise((resolver, _reject) => {
      setTimeout(async () => {
        try {
          const Notes = await apiQForo.get(
            `/notes?populate=*&filters[$and][0][code][$eq]=${Country.toUpperCase()}&pagination[start]=${Options.start}&pagination[limit]=${Options.limit}&sort[2]=createdAt`
          );
          resolver(Either.right(Notes));
        } catch (error) {
          resolver(
            Either.left({ kind: 'UnexpectedError', error: error })
          );
        }
      }, 100);
    });
  }
  async GetAllAuthor(Country: string): Promise<Either<DataError, any>> {
    return new Promise((resolver, _reject) => {
      setTimeout(async () => {
        try {
          const Authors = await apiQForo.get(
            `/authors?populate=*`
          );
          resolver(Either.right(Authors));
        } catch (error) {
          resolver(
            Either.left({ kind: 'UnexpectedError', error: error })
          );
        }
      }, 100);
    });
  }
  async GetAuthorById(Country: string, AuthorId: string): Promise<Either<DataError, any>> {
    return new Promise((resolver, _reject) => {
      setTimeout(async () => {
        try {
          const Author = await apiQForo.get(
            `/authors?populate=*&filters[$and][0][id][$eq]=${AuthorId}`
          );
          resolver(Either.right(Author));
        } catch (error) {
          resolver(
            Either.left({ kind: 'UnexpectedError', error: error })
          );
        }
      }, 100);
    });
  }
  async GetNotesByCategory(Country: string, CategoryId: string, Options): Promise<Either<DataError, any>> {
    return new Promise((resolver, _reject) => {
      setTimeout(async () => {
        try {
          const Notas = await apiQForo.get(
            `/notes?populate=*&filters[$and][0][category][id][$eq]=${CategoryId}`
          );
          resolver(Either.right(Notas));
        } catch (error) {
          resolver(
            Either.left({ kind: 'UnexpectedError', error: error })
          );
        }
      }, 100);
    });
  }
  async GetNotesByHref(country: string, noteId: string): Promise<Either<DataError, any>> {
    return new Promise((resolver, _reject) => {
      setTimeout(async () => {
        try {
          const Note = await apiQForo.get(
            `/notes?populate=*&filters[$and][0][code][$eq]=${country.toUpperCase()}&filters[$and][1][href][$eq]=${noteId}`
          );
          resolver(Either.right(Note));
        } catch (error) {
          resolver(
            Either.left({ kind: 'UnexpectedError', error: error })
          );
        }
      }, 100);
    });
  }
  async GetNotesByAuthor(country: string, AuthorId: string): Promise<Either<DataError, any>> {
    return new Promise((resolver, _reject) => {
      setTimeout(async () => {
        try {
          const Note = await apiQForo.get(
            `/notes?populate=*&filters[$and][0][code][$eq]=${country.toUpperCase()}&filters[$and][1][author][id][$eq]=${AuthorId}`
          );
          resolver(Either.right(Note));
        } catch (error) {
          resolver(
            Either.left({ kind: 'UnexpectedError', error: error })
          );
        }
      }, 100);
    });
  }
  async GetNotesByTitle(country: string, search: string): Promise<Either<DataError, any>> {
    return new Promise((resolver, _reject) => {
      setTimeout(async () => {
        try {
          const Note = await apiQForo.get(
            `/notes?populate=*&filters[$and][0][code][$eq]=${country.toUpperCase()}&filters[$and][1][title][$contains]=${search}`
          );
          resolver(Either.right(Note));
        } catch (error) {
          resolver(
            Either.left({ kind: 'UnexpectedError', error: error })
          );
        }
      }, 100);
    });
  }
  async GetCountryConfig(Country: string): Promise<Either<DataError, any>> {
    return new Promise((resolver, _reject) => {
      setTimeout(async () => {
        try {
          const { data: Countries } = await apiQForo.get(
            `/countries?populate[0]=languages&populate[1]=currencies&populate[2]=callingCodes&filters[$and][3][code][$eq]=${Country.toUpperCase()}`
          );
          resolver(Either.right(Countries));
        } catch (error) {
          resolver(
            Either.left({ kind: 'UnexpectedError', error: error.response })
          );
        }
      }, 100);
    });
  }

  async GetPromotions(Country: string, Locale: string = 'es', inHome: boolean = false): Promise<Either<DataError, any>> {
    return new Promise(async (resolver, _reject) => {
      try {
        const promotionsResult = await apiQForo.get(
          `/promotions?populate[0]=country&locale=${Locale}&filters[$and][1][country][code][$eq]=${Country.toUpperCase()}`
        );
        resolver(Either.right(promotionsResult));
      } catch (error) {
        resolver(
          Either.left({ kind: 'UnexpectedError', error: error.response })
        );
      }
    });
  }

  async GetConditions(Country: string, Locale: string = 'es'): Promise<Either<DataError, any>> {
    return new Promise(async (resolver, _reject) => {
      try {
        const promotionsResult = await apiQForo.get(
          `/conditions?populate[0]=country&locale=${Locale}&filters[$and][1][country][code][$eq]=${Country.toUpperCase()}`
        );
        resolver(Either.right(promotionsResult));
      } catch (error) {
        resolver(
          Either.left({ kind: 'UnexpectedError', error: error.response })
        );
      }
    });
  }

  async GetFAQS(Country: string, Locale: string = 'es'): Promise<Either<DataError, any>> {
    return new Promise(async (resolver, _reject) => {
      try {
        const promotionsResult = await apiQForo.get(
          `/faqs?populate[0]=country&locale=${Locale}&filters[$and][1][country][code][$eq]=${Country.toUpperCase()}`
        );
        resolver(Either.right(promotionsResult));
      } catch (error) {
        resolver(
          Either.left({ kind: 'UnexpectedError', error: error.response })
        );
      }
    });
  }

  async GetMenuFooter(Country: string, Locale: string = 'es'): Promise<Either<DataError, any>> {
    return new Promise(async (resolver, _reject) => {
      try {
        const MenuFooter = await apiQForo.get(
          `/menu-footers?populate[0]=section&populate[1]=section.menu&populate[2]=country&locale=${Locale}&filters[$and][3][country][code][$eq]=${Country.toUpperCase()}`
        );
        resolver(Either.right(MenuFooter));
      } catch (error) {
        resolver(
          Either.left({ kind: 'UnexpectedError', error: error.response })
        );
      }
    });
  }

  async GetMenuNavbar(Country: string, Locale: string = 'es'): Promise<Either<DataError, any>> {
    return new Promise(async (resolver, _reject) => {
      try {
        const MenuNavbar = await apiQForo.get(
          `/menu-navbars?populate[0]=menu&populate[1]=menu.subMenu&populate[2]=country&locale=${Locale}&filters[$and][3][country][code][$eq]=${Country.toUpperCase()}`
        );
        resolver(Either.right(MenuNavbar));
      } catch (error) {
        resolver(
          Either.left({ kind: 'UnexpectedError', error: error.response })
        );
      }
    });
  }

  async GetSocialMedia(Country: string, Locale: string = 'es'): Promise<Either<DataError, any>> {
    return new Promise(async (resolver, _reject) => {
      try {
        const SocialMedia = await apiQForo.get(
          `/social-medias?populate[0]=country&locale=${Locale}&filters[$and][1][country][code][$eq]=${Country.toUpperCase()}`
        );
        resolver(Either.right(SocialMedia));
      } catch (error) {
        resolver(
          Either.left({ kind: 'UnexpectedError', error: error.response })
        );
      }
    });
  }

  async GetBanners(
    Page: string,
    Country: string,
    Class: string,
    Locale: string = 'es'
  ): Promise<Either<DataError, any>> {
    return new Promise(async (resolver, _reject) => {
      try {
        let Banners = await apiQForo.get(
          `/banners?populate[0]=country&locale=${Locale + '-' + Country.toUpperCase()}&filters[$and][1][country][code][$eq]=${Country.toUpperCase()}&filters[$and][2][page][$eq]=${Page}&filters[$and][3][class][$eq]=${Class}`
        );
        resolver(Either.right(Banners));
      } catch (error) {
        resolver(
          Either.left({ kind: 'UnexpectedError', error: error.response })
        );
      }
    });
  }

  async GetRecommendGame(
    Page: string,
    Country: string,
    Class: string,
    Locale: string = 'es'
  ): Promise<Either<DataError, any>> {
    return new Promise(async (resolver, _reject) => {
      try {
        let Widget = await apiQForo.get(
          `/recommended-games?populate[0]=country&locale=${Locale}&filters[$and][1][country][code][$eq]=${Country.toUpperCase()}&filters[$and][2][page][$eq]=${Page}&filters[$and][3][class][$eq]=${Class}`
        );
        resolver(Either.right(Widget));
      } catch (error) {
        resolver(
          Either.left({ kind: 'UnexpectedError', error: error.response })
        );
      }
    });
  }

  async GetRecommendLiveGames(
    Country: string,
    Locale: string = 'es'
  ): Promise<Either<DataError, any>> {
    return new Promise(async (resolver, _reject) => {
      try {
        let resultGames = await apiQForo.get(
          `/recommended-live-game?populate[0]=country&locale=${Locale}&filters[$and][1][country][code][$eq]=${Country.toUpperCase()}`
        );
        resolver(Either.right(resultGames));
      } catch (error) {
        resolver(
          Either.left({ kind: 'UnexpectedError', error: error.response })
        );
      }
    });
  }
}

export default LayoutRepositoryImpl;
