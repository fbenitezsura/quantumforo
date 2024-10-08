import type { DataError } from '@clean/domain/entities/dataError';
import { Either } from '@clean/domain/entities/either';
import type { QuantumForoRepository } from '@clean/domain/repositories/quantumForoRepository';
import { transformDetailData, transformDetailLeaderBoardMenu, transformReview } from '@utils/DestructuringStrapi';
import { EitherAsync } from '@clean/domain/entities/eitherAsync';
import { SearchParams } from '@clean/domain/dtos/Store/searchDto';

class QuantumForoUseCase implements QuantumForoRepository {
  qfRepo: QuantumForoRepository;

  constructor(QR: QuantumForoRepository) {
    this.qfRepo = QR;
  }
  async searchStore(params: SearchParams): Promise<Either<DataError, any[]>> {
    const storeResult = EitherAsync.fromPromise(this.qfRepo.searchStore(params));
    return storeResult
      .flatMap(async (details) => {
        console.log(details)
        const cleanDetails = transformDetailData(details);
        return Either.right(cleanDetails);
      })
      .run();
  }
  async getAllStore(selectedCategory: string) : Promise<Either<DataError, any[]>> {
    const storeResult = EitherAsync.fromPromise(this.qfRepo.getAllStore(selectedCategory));

    return storeResult
      .flatMap(async (details) => {
        const cleanDetails = transformDetailData(details);
        return Either.right(cleanDetails);
      })
      .run();
  }
  async registerUser(registerData: any): Promise<Either<DataError, any>> {
    return this.qfRepo.registerUser(registerData);
  }
  async login(loginData: any): Promise<Either<DataError, any>> {
    return this.qfRepo.login(loginData);
  }
  async forgottenPassword(email: string): Promise<Either<DataError, any>> {
    return this.qfRepo.forgottenPassword(email);
  }
  async resetPassword(password: string,passwordConfirmation :string, code: string): Promise<Either<DataError, any>> {
    return this.qfRepo.resetPassword(password,passwordConfirmation,code);
  } 
  async getStoreById(id: string): Promise<Either<DataError, any>> {
    const storeResult = EitherAsync.fromPromise(this.qfRepo.getStoreById(id));
    return storeResult
      .flatMap(async (details) => {
        const cleanDetails = transformDetailData(details);
        return Either.right(cleanDetails);
      })
      .run();
  }
  async getEntrepreneurById(id: string): Promise<Either<DataError, any>> {
    const storeResult = EitherAsync.fromPromise(this.qfRepo.getEntrepreneurById(id));
    return storeResult
      .flatMap(async (details) => {
        const cleanDetails = transformDetailLeaderBoardMenu(details);
        return Either.right(cleanDetails);
      })
      .run();
  }
  async getReviews(storeId :string): Promise<Either<DataError, any>> {
    const reviewResult = EitherAsync.fromPromise(this.qfRepo.getReviews(storeId));
    return reviewResult
      .flatMap(async (details) => {
        const cleanDetails = transformReview(details);
        return Either.right(cleanDetails);
      })
      .run();
  }
  async addReview(payloadReview : any): Promise<Either<DataError, any>> {
    return this.qfRepo.addReview(payloadReview);
  }
  async checkCanAddReview(storeId: string, userId: string): Promise<Either<DataError, any>> {
    return this.qfRepo.checkCanAddReview(storeId, userId);
  }
}

export default QuantumForoUseCase;
