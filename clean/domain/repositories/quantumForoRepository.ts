
import type { DataError } from '@clean/domain/entities/dataError';
import type { Either } from '@clean/domain/entities/either';

export interface QuantumForoRepository {
  getAllStore() : Promise<Either<DataError, any[]>>;
}




