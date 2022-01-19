export interface TTour {
  id: string;
  title: string;
  slug: string;
  description: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TTourModel extends TTour {
  id: string;
}

export interface TTourPartial extends Partial<TTour> {}
