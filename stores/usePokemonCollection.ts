import { create } from "zustand";
import _ from "lodash";
interface State {
  collection: string[];
  save: (cardId: string) => void;
  remove: (cardId: string) => void;
  getSavedStatus: (cardId: string) => boolean;
}
export const usePokemonCollection = create<State>((set, get) => ({
  collection: [],
  save: (cardId: string) =>
    set((state) => ({ collection: [...state.collection, cardId] })),
  remove: (cardId: string) =>
    set((state) => ({ collection: _.filter(state.collection, cardId) })),
  getSavedStatus: (cardId: string) => {
    const { collection } = get();
    return _.includes(collection, cardId);
  },
}));

export function getCollection() {
  const saved = usePokemonCollection.getState().collection;
  return saved;
}
export function saveToCollection(cardId: string) {
  usePokemonCollection.setState((state) => ({
    collection: [...state.collection, cardId],
  }));
}
export function removeFromCollection(cardId: string) {
  usePokemonCollection.setState((state) => ({
    collection: _.filter(state.collection, cardId),
  }));
}
