import router from "./router";
import { getToken } from "@/utils/auth"; // get token from cookie

router.beforeEach(async (to, from, next) => {
  // set page title
  document.title = to.meta.title ? to.meta.title + "-比特鹿" : "比特鹿";

  // determine whether the user has logged in
  const hasToken = getToken();
  if (to.matched.some(m => m.meta.auth)) {
    // 对路由进行验证
    if (hasToken) {
      next();
    } else {
      next({ path: "/login", query: { Rurl: to.fullPath } });
    }
  } else {
    next();
  }
});
