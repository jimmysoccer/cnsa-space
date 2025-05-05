import { MissionFilterState } from '@/components/missions/MissionFilters';
import { MISSIONS } from '@/constants/missionConstants';
import { Mission, MissionStatusType, MissionViewType } from '@/types/mission';
import { atom } from 'jotai';

export const missionViewTypeAtom = atom(MissionViewType.timeline);
export const missionsAtom = atom<Mission[]>(MISSIONS);
export const missionsFilterAtom = atom<MissionFilterState>({
  status: MissionStatusType.all,
  category: MissionStatusType.all,
  sortOrder: 'asc',
});
