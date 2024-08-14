import type { DataError } from '@clean/domain/entities/dataError';
import { Either } from '@clean/domain/entities/either';
import type { QuantumForoRepository } from '@clean/domain/repositories/quantumForoRepository';
import { apiQForo } from '@clean/infrastructure/http/index';

class QuantumForoRepositoryImpl implements QuantumForoRepository {

  async getAllStore(): Promise<Either<DataError, string[]>> {
    return new Promise(async (resolver, _reject) => {
      try {
        const storeResult = await apiQForo.get(
          `/stores`
        );
        console.log('storeResult',storeResult)
        resolver(Either.right(
          storeResult
        ));
      } catch (error) {
        resolver(Either.left({ kind: 'UnexpectedError', error }));
      }
    });
  }


}

export default QuantumForoRepositoryImpl;
