
import type { DataError } from '@clean/domain/entities/dataError';
import type { Either } from '@clean/domain/entities/either';
import { SearchParams } from '@clean/domain/dtos/Store/searchDto';

export interface QuantumForoRepository {
  searchStore(params: SearchParams): Promise<Either<DataError, any[]>>;
  getAllStore(selectedCategory: string) : Promise<Either<DataError, any[]>>;
  getStoreById(id: string): Promise<Either<DataError, any>>;
  getEntrepreneurById(id: string): Promise<Either<DataError, any>>;
  login(loginData: any): Promise<Either<DataError, any>>;
  registerUser(registerData: any): Promise<Either<DataError, any>>;
  forgottenPassword(email: string): Promise<Either<DataError, any>>;
  resetPassword(password: string,passwordConfirmation :string, code: string): Promise<Either<DataError, any>>;
  getReviews(storeId: string): Promise<Either<DataError, any>>;
  addReview(payloadReview: any): Promise<Either<DataError, any>>;
  checkCanAddReview(storeId: string, userId: string): Promise<Either<DataError, any>>;
}




