interface ReviewState {
  loadingGetReviews: boolean;
  loadingAddReview: boolean;
  loadingCanReview: boolean;
  reviewStore: Array<any>;
  canAddReview: boolean;

}

export const initialState: ReviewState = {
  loadingGetReviews: false,
  loadingAddReview: false,
  loadingCanReview: false,
  reviewStore: [],
  canAddReview: false
};
