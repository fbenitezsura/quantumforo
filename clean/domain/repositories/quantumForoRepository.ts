
import type { DataError } from '@clean/domain/entities/dataError';
import type { Either } from '@clean/domain/entities/either';

export interface QuantumForoRepository {
  getAllStore(selectedCategory: string) : Promise<Either<DataError, any[]>>;
  getStoreById(id: string): Promise<Either<DataError, any>>;
  getEntrepreneurById(id: string): Promise<Either<DataError, any>>;
  login(loginData: any): Promise<Either<DataError, any>>;
  registerUser(registerData: any): Promise<Either<DataError, any>>;
  forgottenPassword(email: string): Promise<Either<DataError, any>>;
  resetPassword(password: string,passwordConfirmation :string, code: string): Promise<Either<DataError, any>>;
}




