import { TTour } from './tour.types';
import { Tour } from './tour.model';

const Tours = [new Tour()];

const getAll = async () => Tours;

const getById = async (id: string) => Tours.find((tour) => tour.id === id);

const createTour = async ({ id, title, slug, description, isActive, createdAt, updatedAt }: TTour) => {
  const tour = new Tour({ id, title, slug, description, isActive, createdAt, updatedAt });
  Tours.push(tour);
  return tour;
};

const deleteById = async (id: string) => {
  const tourPosition = Tours.findIndex((tour) => tour.id === id);

  if (tourPosition === -1) return null;

  const tourDeletable = Tours[tourPosition];

  Tours.splice(tourPosition, 1);
  return tourDeletable;
};

const updateById = async ({ id, title, slug, description, isActive, createdAt, updatedAt }: TTour) => {
  const tourPosition = Tours.findIndex((tour) => tour.id === id);

  if (tourPosition === -1) return null;

  const oldTour = Tours[tourPosition];
  const newTour = { ...oldTour, id, title, slug, description, isActive, createdAt, updatedAt };

  Tours.splice(tourPosition, 1, newTour);
  return newTour;
};

export { Tours, getAll, getById, createTour, deleteById, updateById };
