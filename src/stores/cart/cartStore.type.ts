type CartItem = {
  id: string;
  name: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  exists: (id:string) => boolean;
  add: (id: string, name: string) => void;
  remove: (id: string) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  clear: () => void;
}

export type {CartState};
