import { InvalidArgumentError } from "@clean/shared/domain/value-object/InvalidArgumentError";
export interface ApiError {
  kind: 'ApiError';
  error: string;
  statusCode: number;
  message: string;
}

export interface UnexpectedError {
  kind: 'UnexpectedError';
  error: Error;
}

export interface Unauthorized {
  kind: 'Unauthorized';
}

export interface NotFound {
  kind: 'NotFound';
}

export interface NotFound {
  kind: 'NotFound';
}

export class FirstNameError extends InvalidArgumentError {}

export class LastNameLengthError extends InvalidArgumentError {}

export type DataError = ApiError | UnexpectedError | Unauthorized | NotFound | FirstNameError;
