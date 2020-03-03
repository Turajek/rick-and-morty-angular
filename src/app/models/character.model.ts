export class Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    url: string;
    name: string;
  };
  location: {
    url: string;
    name: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
