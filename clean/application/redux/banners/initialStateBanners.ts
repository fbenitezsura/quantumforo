interface bannersState {
  primaryBannersHome: Array<any>,
  secondaryBannersHome: Array<any>,
  primaryBannersCasino: Array<any>,
  primaryBannersLiveCasino: Array<any>,
  loadingPrimaryBannersHome: boolean,
  loadingSecondaryBannersHome: boolean,
  loadingPrimaryBannersCasino: boolean,
  loadingPrimaryBannersLiveCasino: boolean,
  lastUpdatedPrimaryHomeBanners: null | Date
  lastUpdatedSecondaryHomeBanners: null | Date
  lastUpdatedPrimaryCasinoBanners: null | Date
  lastUpdatedPrimaryLiveCasinoBanners: null | Date

}

export const initialState : bannersState = {
  primaryBannersHome: [],
  secondaryBannersHome: [],
  primaryBannersCasino: [],
  primaryBannersLiveCasino: [],
  loadingPrimaryBannersHome: false,
  loadingSecondaryBannersHome: false,
  loadingPrimaryBannersCasino: false,
  loadingPrimaryBannersLiveCasino: false,
  lastUpdatedPrimaryHomeBanners: null,
  lastUpdatedSecondaryHomeBanners: null,
  lastUpdatedPrimaryCasinoBanners: null,
  lastUpdatedPrimaryLiveCasinoBanners: null
};
