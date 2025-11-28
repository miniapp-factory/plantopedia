export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  family: string;
}

export const plants: Plant[] = [
  {
    id: "1",
    name: "Chamomile",
    scientificName: "Matricaria chamomilla",
    family: "Asteraceae",
  },
  {
    id: "2",
    name: "Echinacea",
    scientificName: "Echinacea purpurea",
    family: "Asteraceae",
  },
  {
    id: "3",
    name: "Ginseng",
    scientificName: "Panax ginseng",
    family: "Araliaceae",
  },
];
