import { create } from "zustand";
import { supabase } from "../services/supabase";
import Toast from "react-native-toast-message";

export interface Word {
  en: string;
  gr: string;
  en_pos: number;
  gr_pos: number;
}

export type Question = {
  id: number;
  targetWord: { en: string; gr: string };
  words: Word[];
  options: string[];
};

export interface QuestionStore {
  questions: Question[];
  activeQuestion: Question | null;
  gotoNextQuestion: () => void;
  fetchQuestions: () => void;
  isLoading: boolean;
}
export const useQuestions = create<QuestionStore>((set, get) => ({
  questions: [],
  isLoading: false,
  activeQuestion: null,
  gotoNextQuestion: () => {
    const currentId = get().activeQuestion?.id || 0;
    const nextId = currentId + 1;
    const questions = get().questions;
    if (nextId <= questions.length) {
      set({ activeQuestion: questions.find((q) => q.id == nextId) });
    } else {
      Toast.show({
        type: "error",
        text1: "Can't go to the next question",
        text2: "This is the end of the road 👋",
      });
    }
  },
  fetchQuestions: async () => {
    try {
      set({ isLoading: true });
      const { data, error } = await supabase.from("questions").select();
      if (error) {
        throw new Error(error.message);
      } else {
        const questions = data as unknown as Question[];
        set({ questions, activeQuestion: questions[0] });
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Could not get questions",
        text2: "This is the end of the road 👋",
      });
    } finally {
      set({ isLoading: false });
    }
  },
}));
