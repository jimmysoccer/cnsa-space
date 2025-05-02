import { MissionViewType } from '@/types/mission';
import { atom } from 'jotai';

export const missionViewTypeAtom = atom(MissionViewType.timeline);
