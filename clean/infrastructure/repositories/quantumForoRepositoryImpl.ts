import type { DataError } from '@clean/domain/entities/dataError';
import { Either } from '@clean/domain/entities/either';
import type { QuantumForoRepository } from '@clean/domain/repositories/quantumForoRepository';
import { apiQForo } from '@clean/infrastructure/http/index';
import { SearchParams } from '@clean/domain/dtos/Store/searchDto';

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

  async searchStore(params: SearchParams): Promise<Either<DataError, string[]>> {
    return new Promise(async (resolver, _reject) => {
      try {
        // Construir la URL con los filtros dinámicos
        let queryParams = '';

        console.log('params', params);


        if (params.name || params.categoryName) {
          queryParams += '&filters[$or][0][Name][$containsi]=' + encodeURIComponent(params.name || '');
          queryParams += '&filters[$or][1][store_categories][Name][$containsi]=' + encodeURIComponent(params.categoryName || '');
        }

        // Construir la URL final
        const url = `/stores?populate=*${queryParams}`;

        console.log('vamos a buscar en esta url', url);

        const storeResult = await apiQForo.get(url);
        console.log('storeResult sdsd', storeResult)
        resolver(Either.right(storeResult));
      } catch (error) {
        console.log('error', error);
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
