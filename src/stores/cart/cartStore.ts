import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import {CartState} from './cartStore.type';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      exists: id => {
        return get().items.some(item => item.id === id);
      },

      add: (id, name) => {
        const existing = get().items.find(item => item.id === id);
        if (existing) {
          set({
            items: get().items.map(item =>
              item.id === id ? {...item, quantity: item.quantity + 1} : item,
            ),
          });
        } else {
          set({items: [...get().items, {id, name, quantity: 1}]});
        }
      },

      remove: id => {
        set({items: get().items.filter(item => item.id !== id)});
      },

      increment: id => {
        set({
          items: get().items.map(item =>
            item.id === id ? {...item, quantity: item.quantity + 1} : item,
          ),
        });
      },

      decrement: id => {
        set({
          items: get()
            .items.map(item =>
              item.id === id ? {...item, quantity: item.quantity - 1} : item,
            )
            .filter(item => item.quantity > 0),
        });
      },

      clear: () => {
        set({items: []});
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
