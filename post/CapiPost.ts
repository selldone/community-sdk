import searchPosts from "./requests/capi.posts.search";
import {APIAbstract} from "../../../core/server/APIAbstract";

export class CapiPost extends APIAbstract {
  public searchPosts = searchPosts;

  constructor() {
    super();
  }

}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace CapiPost {}
