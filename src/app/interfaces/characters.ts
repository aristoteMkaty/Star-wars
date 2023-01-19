export interface Characters {
  id: number;
  name: string;
  height: number;
  mass: number;
  gender: string;
  homeworld: string;
  born: number;
  wiki: string;
  image: string;
  eyeColor: string;
  skinColor: string;
  species: string;

  manufacturer ?: string;
  productLine ?: string;
  bornLocation ?: string
  died ?: number;
  diedLocation ?: string;
  hairColor ?: string;
  cybernetics ?: string
  affiliations: string[]
  masters ?: string[]
  apprentices ?: string[]
  formerAffiliations ?: [];
  model ?: string;
  class ?: string;
  sensorColor ?: string;
  platingColor ?: string;
  equipment ?: string | string[];
  dateCreated ?: number;
  dateDestroyed ?: number;
  destroyedLocation ?: string;
  creator ?: string;
}
