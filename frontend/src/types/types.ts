export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export type MenuData = {
  [category: string]: MenuItem[];
};

export type EventItem = {
  img: string;
  name: string;
  time: string;
  description: string;
  onClick: () => void;
};

export type EventData = {
  [category: string]: EventItem[];
};

export interface Reservation {
  _id: string;
  name: string;
  email: string;
  guests: number;
  date: string;
  time: string;
  message?: string;
  type?: string;
}
