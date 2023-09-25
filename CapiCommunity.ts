import { APIAbstract } from "../../core/server/APIAbstract";
import CAPI from "./apis/CAPI";
import getInfo from "./requests/capi.community.get";
import type { Shop } from "../../core/models/shop/shop.model";
import type { Community } from "../../core/models/community/community.model";
import { CapiPost } from "./post/CapiPost";

const SDK_VERSION = "0.01";

export class CapiCommunity extends APIAbstract {
  static Setup(): void {
    console.log("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓");
    console.log(`┣━━━ Selldone® Community SDK | V${SDK_VERSION} ━━━┫`);
    console.log("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛");

    window.CAPI = new CAPI(); // Community API


    window.$community = new CapiCommunity();
  }

  constructor() {
    super();
  }

  public getInfo = getInfo;
  public post = new CapiPost();

  public getCommunityID(shop?: (Shop & { community?: Community }) | null) {
    return shop
      ? shop.community && shop.community.id
      : 1; /* 1 : Main Selldone official community */
  }
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace CapiCommunity {}

//█████████████████████████████████████████████████████████████
//―――――――――――――― Global Types ―――――――――――――――
//█████████████████████████████████████████████████████████████

// Extend the Window interface to recognize the properties you add to the global window object.
declare global {
  interface Window {
    CAPI: CAPI;
    $community: CapiCommunity;
  }
}
