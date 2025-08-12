import { UserOperationClaimModel } from './user-operation-claim.model';

export interface UserModel {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  userOperationClaims: UserOperationClaimModel[];
  status: string;
}

export interface UserJwtModel {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  roles: string[];
  status: string;
}
