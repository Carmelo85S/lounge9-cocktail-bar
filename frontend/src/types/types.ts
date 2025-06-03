export type MenuItem = {
  name: string;
  description: string;
  price: string;
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
