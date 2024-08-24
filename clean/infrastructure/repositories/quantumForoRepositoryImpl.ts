import type { DataError } from '@clean/domain/entities/dataError';
import { Either } from '@clean/domain/entities/either';
import type { QuantumForoRepository } from '@clean/domain/repositories/quantumForoRepository';
import { apiQForo } from '@clean/infrastructure/http/index';

class QuantumForoRepositoryImpl implements QuantumForoRepository {

  async getAllStore(selectedCategory: string): Promise<Either<DataError, string[]>> {
    return new Promise(async (resolver, _reject) => {
      try {
        const storeResult = await apiQForo.get(
          `/stores`
        );
        resolver(Either.right(
          storeResult
        ));
      } catch (error) {
        resolver(Either.left({ kind: 'UnexpectedError', error }));
      }
    });
  }

  async registerUser(registerData: any): Promise<Either<DataError, any>> {
    return new Promise(async (resolver, _reject) => {
      try {
        const registerResult = await apiQForo.post(
          `/auth/local/register`,
          registerData
        );
        resolver(Either.right(registerResult));
      } catch (error) {
        resolver(Either.left({ kind: 'UnexpectedError', error }));
      }
    });
  }

  async login(loginData: any): Promise<Either<DataError, any>> {
    return new Promise(async (resolver, _reject) => {
      try {
        const loginResult = await apiQForo.post(
          `/auth/local`,
          { identifier: loginData.email, password: loginData.password }
        );
        resolver(Either.right(loginResult));
      } catch (error) {
        resolver(Either.left({ kind: 'UnexpectedError', error }));
      }
    });
  }

  async forgottenPassword(email: string): Promise<Either<DataError, any>> {
    return new Promise(async (resolver, _reject) => {
      try {
        const forgottenResult = await apiQForo.post(
          `/auth/forgot-password`,
          { email }
        );
        resolver(Either.right(forgottenResult));
      } catch (error) {
        resolver(Either.left({ kind: 'UnexpectedError', error }));
      }
    });
  }

  async resetPassword(password: string, passwordConfirmation: string, code: string): Promise<Either<DataError, any>> {
    return new Promise(async (resolver, _reject) => {
      try {
        const resetResult = await apiQForo.post(
          `/auth/reset-password`,
          { code, password, passwordConfirmation }
        );
        resolver(Either.right(resetResult));
      } catch (error) {
        resolver(Either.left({ kind: 'UnexpectedError', error }));
      }
    });
  }

  async getStoreById(id: string): Promise<Either<DataError, any>> {
    return new Promise(async (resolver, _reject) => {
      try {
        const storeResult = await apiQForo.get(
          `/stores/${id}`
        );
        resolver(Either.right(storeResult));
      } catch (error) {
        resolver(Either.left({ kind: 'UnexpectedError', error }));
      }
    });
  }

  async getEntrepreneurById(id: string): Promise<Either<DataError, any>> {
    return new Promise(async (resolver, _reject) => {
      try {
        const entrepreneurResult = await apiQForo.get(
          `/entrepreneurs/${id}`
        );
        resolver(Either.right(entrepreneurResult));
      } catch (error) {
        resolver(Either.left({ kind: 'UnexpectedError', error }));
      }
    });
  }


}

export default QuantumForoRepositoryImpl;
