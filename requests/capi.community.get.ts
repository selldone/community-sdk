/*
 * Copyright (c) 2023. Selldone® Business OS™
 *
 * Author: M.Pajuhaan
 * Web: https://selldone.com
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * All rights reserved. In the weave of time, where traditions and innovations intermingle, this content was crafted.
 * From the essence of thought, through the corridors of creativity, each word, and sentiment has been molded.
 * Not just to exist, but to inspire. Like an artist's stroke or a sculptor's chisel, every nuance is deliberate.
 * Our journey is not just about reaching a destination, but about creating a masterpiece.
 * Tread carefully, for you're treading on dreams.
 */

import { CapiCommunity } from "../CapiCommunity";
import type { Community } from "@selldone/core-js/models/community/community.model";
import type { CommunityCategory } from "@selldone/core-js/models/community/community.category.model";
import type { CommunityData } from "@selldone/core-js/models/community/community.data.model";

export default function getInfo(
  this: CapiCommunity,
  community_id: number,
  offset?: number,
  days?: number
) {
  if (!community_id) throw Error("Not valid community id!");
  const params = { offset: offset, days: days };
  const url = window.CAPI.GET_COMMUNITY_INFO(community_id);
  return this.getNow<capi.community.get.IResponse>(url, params);
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace capi.community.get {
  export interface IResponse {
    community: Partial<Community>;
    categories: CommunityCategory[];
    data: CommunityData[];
  }
}
