import { create } from "zustand";
interface State {
  detail: string | null;
}
const useScreenNav = create<State>(() => ({
  detail: null,
}));

export function getCurrentDetailId() {
  return useScreenNav.getState().detail;
}
export function setDetailId(id: string | null) {
  useScreenNav.setState(() => ({ detail: id }));
}
