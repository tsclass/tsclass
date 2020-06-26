import { IClaim } from './claim';

export interface IProcessedClaim {
  originalJWT: string;
  claim: IClaim;
  signed: boolean;
}
