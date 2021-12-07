export enum FacialExpressions {
  happy = 'happy',
  neutral = 'neutral',
  surprised = 'surprised',
  angry = 'angry',
  fearful = 'fearful',
  disgusted = 'disgusted',
  sad = 'sad',
}

export class SpeakerStats {
  constructor( userId: string, displayName: string, isLocalStats: boolean );
  getUserId: () => string;
  getDisplayName: () => string;
  setDisplayName: ( name: string ) => void;
  isLocalStats: () => boolean;
  isDominantSpeaker: () => boolean;
  setDominantSpeaker: ( isNowDominantSpeaker: boolean ) => void;
  getTotalDominantSpeakerTime: () => number;
  hasLeft: () => boolean;
  markAsHasLeft: () => void;
  getFacialExpressions: () => void;
  setFacialExpressions: (facialExpressions: { [key in FacialExpressions]: number }) => void;
  addFacialExpression: (facialExpression: FacialExpressions, duration: number) => void;
}
