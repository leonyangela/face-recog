import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,

      setUser: (userData) => set({ user: userData, isLoggedIn: true }),
      clearUser: () => set({ user: null, isLoggedIn: false }),
    }),
    { name: "user" }
  )
);
