import { IClaim } from './claim.js';

export interface IProcessedClaim {
  originalJWT: string;
  claim: IClaim;
  signed: boolean;
}
