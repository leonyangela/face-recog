import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFaceDetectionStore = create((set) => ({
  inputURL: null,
  faceResult: null,
  boundingBoxes: [],
  isLoading: false,
  isAlert: false,
  isAlertText: null,

  setInputURL: (textInputUrl) => set({ inputURL: textInputUrl }),
  setFaceResult: (result) => set({ faceResult: result }),
  setBoundingBoxes: (box) => set({ boundingBoxes: box }),
  clearResult: () => set({ faceResult: null, inputURL: null, boundingBox: {} }),
  clearInput: () => set({ inputURL: null }),
  setIsLoading: (isLoading) => set({ isLoading: isLoading }),
  setIsAlert: (isAlert) => set({ isAlert: isAlert }),
  setIsAlertText: (isAlertText) => set({ isAlertText: isAlertText }),
}));
