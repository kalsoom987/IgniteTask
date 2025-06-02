import { atom } from 'jotai';

export type MoodType = 'happy' | 'sad' | 'angry' | 'calm';

export const moodAtom = atom<MoodType>('happy');


