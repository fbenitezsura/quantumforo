import type { DataError } from '@clean/domain/entities/dataError';
import type { Either } from '@clean/domain/entities/either';
import type { QuantumForoRepository } from '@clean/domain/repositories/quantumForoRepository';

class QuantumForoUseCase implements QuantumForoRepository {
  qfRepo: QuantumForoRepository;

  constructor(QR: QuantumForoRepository) {
    this.qfRepo = QR;
  }
  async getAllStore() : Promise<Either<DataError, any[]>> {
    return this.qfRepo.getAllStore();
  }
}

export default QuantumForoUseCase;
