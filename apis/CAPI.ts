import SetupService from "@core/server/SetupService";

export default class CAPI {
  selldone_capi_url = "";

  constructor() {
    this.selldone_capi_url = SetupService.GetMetaValue("selldone-capi");
  }

  //―――――――――――――――――――――― Shop ――――――――――――――――――――
  POST_COMMUNITY_CREATE(shop_id: number) {
    return `${this.selldone_capi_url}/shops/${shop_id}/community`;
  }
  GET_CHECK_COMMUNITY_NAME_AVAILABLE() {
    return `${this.selldone_capi_url}/community/name`;
  }

  //―――――――――――――――――――――― Profile ――――――――――――――――――――
  GET_COMMUNITY_PROFILE_FULL(user_id: number) {
    return `${this.selldone_capi_url}/community/profiles/${user_id}`;
  }

  //―――――――――――――――――――――― Community ――――――――――――――――――――
  GET_COMMUNITY_INFO(community_id: string | number) {
    return `${this.selldone_capi_url}/communities/${community_id}`;
  }
  GET_COMMUNITY_DATA(community_id: string | number) {
    return `${this.selldone_capi_url}/communities/${community_id}/data`;
  }
  POST_COMMUNITY_EDIT(community_id: string | number) {
    return `${this.selldone_capi_url}/communities/${community_id}`;
  }
  POST_COMMUNITY_BOTS_EDIT(community_id: string | number, driver: "telegram") {
    return `${this.selldone_capi_url}/communities/${community_id}/bots/${driver}`;
  }

  //―――――――――――――――――――――― Search ――――――――――――――――――――

  GET_COMMUNITY_POSTS_SEARCH(community_id: string | number) {
    return `${this.selldone_capi_url}/communities/${community_id}/search`;
  }

  //―――――――――――――――――――――― Feed ――――――――――――――――――――
  GET_COMMUNITY_FEED(community_id: string | number) {
    return `${this.selldone_capi_url}/communities/${community_id}/feed`;
  }

  //―――――――――――――――――――――― My Comments ――――――――――――――――――――
  GET_COMMUNITY_MY_COMMENTS(community_id: string | number) {
    return `${this.selldone_capi_url}/communities/${community_id}/my-comments`;
  }

  //―――――――――――――――――――――― Moderators ――――――――――――――――――――

  GET_COMMUNITY_MODERATORS(community_id: string | number) {
    return `${this.selldone_capi_url}/communities/${community_id}/moderators`;
  }
  POST_COMMUNITY_MODERATORS_ADD(community_id: string | number) {
    return `${this.selldone_capi_url}/communities/${community_id}/moderators`;
  }
  DELETE_COMMUNITY_MODERATOR(community_id: string | number, user_id: number) {
    return `${this.selldone_capi_url}/communities/${community_id}/moderators/${user_id}`;
  }
  //―――――――――――――――――――――― Category ――――――――――――――――――――

  GET_COMMUNITY_CATEGORY_INFO(
    community_id: string | number,
    category_id: string | number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/categories/${category_id}`;
  }
  GET_COMMUNITY_CATEGORY_DATA(
    community_id: string | number,
    category_id: string | number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/categories/${category_id}/data`;
  }

  POST_COMMUNITY_NEW_CATEGORY(community_id: string | number) {
    return `${this.selldone_capi_url}/communities/${community_id}/categories`;
  }
  GET_COMMUNITY_CATEGORIES(community_id: string | number) {
    return `${this.selldone_capi_url}/communities/${community_id}/categories`;
  }

  POST_COMMUNITY_EDIT_CATEGORY(
    community_id: string | number,
    category_id: string | number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/categories/${category_id}`;
  }
  GET_COMMUNITY_CATEGORY_TOPICS(
    community_id: string | number,
    category_id: string | number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/categories/${category_id}/topics`;
  }

  POST_COMMUNITY_TOPIC_CROSS(community_id: string | number) {
    return `${this.selldone_capi_url}/communities/${community_id}/cross`;
  }

  DELETE_COMMUNITY_EDIT_CATEGORY(
    community_id: string | number,
    category_id: string | number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/categories/${category_id}`;
  }

  POST_COMMUNITY_RESTORE_CATEGORY(
    community_id: string | number,
    category_id: string | number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/categories/${category_id}/restore`;
  }

  //―――――――――――――――――――――― Topic ――――――――――――――――――――
  GET_COMMUNITY_TOPICS(community_id: string | number) {
    return `${this.selldone_capi_url}/communities/${community_id}/topics`;
  }

  POST_COMMUNITY_TOPIC_CREATE(community_id: string | number) {
    return `${this.selldone_capi_url}/communities/${community_id}/topics`;
  }
  POST_COMMUNITY_TOPIC_EDIT(
    community_id: string | number,
    topic_id: string | number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/topics/${topic_id}`;
  }
  DELETE_COMMUNITY_TOPIC(
    community_id: string | number,
    topic_id: string | number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/topics/${topic_id}`;
  }
  POST_COMMUNITY_TOPIC_RESTORE(
    community_id: string | number,
    topic_id: string | number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/topics/${topic_id}/restore`;
  }

  GET_COMMUNITY_TOPIC_INFO(
    community_id: string | number,
    topic_id: string | number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/topics/${topic_id}`;
  }
  GET_COMMUNITY_TOPIC_DATA(
    community_id: string | number,
    topic_id: string | number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/topics/${topic_id}/data`;
  }

  GET_COMMUNITY_TOPIC_POSTS(
    community_id: string | number,
    topic_id: string | number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/topics/${topic_id}/posts`;
  }

  POST_COMMUNITY_TOPIC_NOTIFY(
    community_id: string | number,
    topic_id: string | number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/topics/${topic_id}/notify`;
  }
  POST_COMMUNITY_TOPIC_POLL(
    community_id: string | number,
    topic_id: string | number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/topics/${topic_id}/poll`;
  }

  GET_COMMUNITY_TOPIC_PREVIEW(
    community_id: string | number,
    topic_id: string | number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/topics/${topic_id}/preview`;
  }

  //―――――――――――――――――――――― Post ――――――――――――――――――――

  GET_COMMUNITY_POSTS(community_id: string | number) {
    // Admin
    return `${this.selldone_capi_url}/communities/${community_id}/posts`;
  }
  POST_COMMUNITY_POST_RESTORE(
    community_id: string | number,
    post_id: string | number
  ) {
    // Admin
    return `${this.selldone_capi_url}/communities/${community_id}/posts/${post_id}/restore`;
  }
  DELETE_COMMUNITY_POST(
    community_id: string | number,
    post_id: string | number
  ) {
    // Admin
    return `${this.selldone_capi_url}/communities/${community_id}/posts/${post_id}`;
  }
  POST_COMMUNITY_BAN_USER(
    community_id: string | number,
    user_id: string | number
  ) {
    // Admin
    return `${this.selldone_capi_url}/communities/${community_id}/users/${user_id}/ban`;
  }

  POST_COMMUNITY_TOPIC_POST_CREATE(
    community_id: string | number,
    topic_id: string | number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/topics/${topic_id}/posts`;
  }
  POST_COMMUNITY_TOPIC_POST_EDIT(
    community_id: string | number,
    topic_id: string | number,
    post_id: string | number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/topics/${topic_id}/posts/${post_id}`;
  }
  POST_COMMUNITY_TOPIC_POST_REACTION(
    community_id: string | number,
    topic_id: string | number,
    post_id: string | number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/topics/${topic_id}/posts/${post_id}/reaction`;
  }

  GET_COMMUNITY_TOPIC_POST_REACTIONS(
    community_id: string | number,
    topic_id: string | number,
    post_id: string | number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/topics/${topic_id}/posts/${post_id}/reactions`;
  }

  POST_COMMUNITY_TOPIC_POST_SAVE(
    community_id: string | number,
    topic_id: string | number,
    post_id: string | number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/topics/${topic_id}/posts/${post_id}/save`;
  }
  POST_COMMUNITY_TOPIC_POST_APPROVED(
    community_id: string | number,
    topic_id: string | number,
    post_id: string | number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/topics/${topic_id}/posts/${post_id}/approved`;
  }

  POST_COMMUNITY_TOPIC_POST_REPORT(
    community_id: string | number,
    topic_id: string | number,
    post_id: string | number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/topics/${topic_id}/posts/${post_id}/report`;
  }

  DELETE_COMMUNITY_TOPIC_POST(
    community_id: string | number,
    topic_id: string | number,
    post_id: string | number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/topics/${topic_id}/posts/${post_id}`;
  }

  GET_COMMUNITY_TOPIC_POST_REPORTS(
    community_id: string | number,
    topic_id: string | number,
    post_id: string | number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/topics/${topic_id}/posts/${post_id}/reports`;
  }

  //―――――――――――――――――――――― Comment ――――――――――――――――――――
  GET_COMMUNITY_COMMENTS(community_id: string | number) {
    // Admin!
    return `${this.selldone_capi_url}/communities/${community_id}/comments`;
  }
  DELETE_COMMUNITY_COMMENT(community_id: string | number, comment_id: number) {
    // Admin!
    return `${this.selldone_capi_url}/communities/${community_id}/comments/${comment_id}`;
  }

  POST_COMMUNITY_TOPIC_POST_COMMENT_CREATE(
    community_id: string | number,
    topic_id: string | number,
    post_id: string | number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/topics/${topic_id}/posts/${post_id}/comments`;
  }
  GET_COMMUNITY_TOPIC_POST_COMMENTS(
    community_id: string | number,
    topic_id: string | number,
    post_id: string | number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/topics/${topic_id}/posts/${post_id}/comments`;
  }

  POST_COMMUNITY_TOPIC_POST_COMMENT_REACTION(
    community_id: string | number,
    topic_id: string | number,
    post_id: string | number,
    comment_id: number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/topics/${topic_id}/posts/${post_id}/comments/${comment_id}/reaction`;
  }
  DELETE_COMMUNITY_TOPIC_POST_COMMENT(
    community_id: string | number,
    topic_id: string | number,
    post_id: string | number,
    comment_id: number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/topics/${topic_id}/posts/${post_id}/comments/${comment_id}`;
  }
  POST_COMMUNITY_TOPIC_POST_COMMENT_REPORT(
    community_id: string | number,
    topic_id: string | number,
    post_id: string | number,
    comment_id: number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/topics/${topic_id}/posts/${post_id}/comments/${comment_id}/report`;
  }

  PUT_COMMUNITY_TOPIC_POST_COMMENT_EDIT(
    community_id: string | number,
    topic_id: string | number,
    post_id: string | number,
    comment_id: string | number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/topics/${topic_id}/posts/${post_id}/comments/${comment_id}`;
  }

  GET_COMMUNITY_COMMENT_REPORTS(
    community_id: string | number,
    comment_id: string | number
  ) {
    return `${this.selldone_capi_url}/communities/${community_id}/comments/${comment_id}/reports`;
  }
  //―――――――――――――――――――――― Analytic ――――――――――――――――――――

  POST_COMMUNITY_ANALYTIC(community_id: string | number) {
    return `${this.selldone_capi_url}/communities/${community_id}/analytic`;
  }

  //―――――――――――――――――――――― Follower ――――――――――――――――――――
  GET_FOLLOWERS_REQUEST(community_id: string | number) {
    return `${this.selldone_capi_url}/communities/${community_id}/follower/suggestion`;
  }
  POST_FOLLOW(community_id: string | number) {
    return `${this.selldone_capi_url}/communities/${community_id}/followers`;
  }

  //―――――――――――――――――――――― Analytic ――――――――――――――――――――

  POST_COMMUNITY_NOMINATE(community_id: string | number) {
    return `${this.selldone_capi_url}/communities/${community_id}/nominate`;
  }

  //―――――――――――――――――――――― Download Attachments ――――――――――――――――――――

  POST_GENERATE_DOWNLOAD_ATTACHMENT_URL(
    community_id: string | number,
    post_id: string | number,
    file_id: number
  ) {
    // Return temporary URL!
    return `${this.selldone_capi_url}/communities/${community_id}/posts/${post_id}/attachments/${file_id}`;
  }
}
