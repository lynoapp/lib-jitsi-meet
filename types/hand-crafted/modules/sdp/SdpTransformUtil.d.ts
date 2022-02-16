import { MediaDirection } from '../../service/RTC/MediaDirection';
import { MediaType } from '../../service/RTC/MediaType';
import * as transform from 'sdp-transform';

export function parsePrimarySSRC( group: unknown ): number; // TODO:

export class MLineWrap {
  ssrcs: unknown[]; // TODO:
  direction: MediaDirection;
  ssrcGroups: unknown[]; // TODO:
  getSSRCAttrValue: ( ssrcNumber: number, attrName: string ) => string | undefined;
  removeSSRC: ( ssrcNum: number ) => void;
  addSSRCAttribute: ( ssrcObj: unknown ) => void; // TODO:
  findGroup: ( semantics: string, ssrcs: string ) => unknown | undefined;
  findGroups: ( semantics: string ) => unknown[];
  findGroupByPrimarySSRC: ( semantics: string, primarySSRC: number ) => unknown; // TODO:
  findSSRCByMSID: ( msid: string | null ) => unknown | undefined; // TODO:
  getSSRCCount: () => number;
  containsAnySSRCGroups: () => boolean;
  getPrimaryVideoSsrc: () => number | undefined;
  getRtxSSRC: ( primarySsrc: number ) => number | undefined;
  getSSRCs: () => number[];
  getPrimaryVideoSSRCs: () => number[];
  dumpSSRCGroups: () => string;
  removeGroupsWithSSRC: ( ssrc: string ) => void;
  removeGroupsBySemantics: ( semantics: string ) => void;
  replaceSSRC: ( oldSSRC: number, newSSRC: number ) => void;
  addSSRCGroup: ( group: unknown ) => void; // TODO:
}

export class SdpTransformWrap {
  constructor(rawSDP: string);
  parsedSDP: transform.SessionDescription;
  selectMedia: ( mediaType: MediaType ) => MLineWrap | null;
  toRawSDP: () => string;
}
