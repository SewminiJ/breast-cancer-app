import create from 'zustand';

interface Store {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

const useStore = create<Store>((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
}));

export default useStore;
