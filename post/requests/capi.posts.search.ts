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

import { CommunityPost } from "@core/models/community/community.post.model";
import { CapiPost } from "../CapiPost";

export default function searchPosts(
  this: CapiPost,
  community_id: number,
  offset: number,
  limit: number,
  search: string | null
) {
  const params = { offset: offset, limit: limit, search: search };
  const url = window.CAPI.GET_COMMUNITY_POSTS_SEARCH(community_id);
  return this.getNow<capi.posts.search.IResponse>(url, params);
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace capi.posts.search {
  export interface IResponse {
    posts: Partial<CommunityPost>[];
    more: boolean;
  }
}
