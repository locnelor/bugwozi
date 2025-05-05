

import { makePowerGuard } from './auth.guard';




export const DashboardGuards = makePowerGuard("/dashboard", "仪表盘", {
  sort: 0
})


export const BlogGuards = makePowerGuard("/blog", "博客系统", {
  sort: 100
})
export const BlogArticleGuards = makePowerGuard("/blog/posts", "文章管理", {
  parent: BlogGuards.path,
})
export const BlogCommentGuards = makePowerGuard("/blog/comments", "评论管理", {
  parent: BlogGuards.path,
})
export const BlogCategoriesGuards = makePowerGuard("/blog/categories", "分类管理", {
  parent: BlogGuards.path,
})
export const BlogLinkGuards = makePowerGuard("/blog/links", "友链管理", {
  parent: BlogGuards.path,
})
export const BlogTagsGuards = makePowerGuard("/blog/tag", "标签管理", {
  parent: BlogGuards.path,
})


export const WechatGuards = makePowerGuard("/wechat", "公众号管理", {
  sort: 200
})
// export const WechatConfigGuards = makePowerGuard("/wechat/config", "公众号配置", {
//   parent: WechatGuards.path,
// })
// export const WechatMediaGuards = makePowerGuard("/wechat/media", "素材管理", {
//   parent: WechatGuards.path,
// })
export const WechatAutoReplyGuards = makePowerGuard("/wechat/auto-reply", "自动回复", {
  parent: WechatGuards.path,
})
// export const WechatMenuGuards = makePowerGuard("/wechat/menu", "菜单配置", {
//   parent: WechatGuards.path,
// })


// export const OrderGuards = makePowerGuard("/order", "订单管理", {
//   sort: 300
// })
export const OrderListGuards = makePowerGuard("/order/list", "订单列表", {
  parent: WechatGuards.path,
})
export const OrderAnalysisGuards = makePowerGuard("/order/analysis", "订单统计", {
  parent: WechatGuards.path,
})
export const OrderGoodsGuards = makePowerGuard("/order/goods", "商品管理", {
  parent: WechatGuards.path
})



export const SystemGuards = makePowerGuard("/system", "系统管理", {
  sort: 1024
})
export const SystemUserGuards = makePowerGuard("/system/user", "用户管理", {
  parent: SystemGuards.path,
})
export const SystemRoleGuards = makePowerGuard("/system/role", "角色管理", {
  parent: SystemGuards.path,
})
export const SystemMenuGuards = makePowerGuard("/system/menu", "菜单管理", {
  parent: SystemGuards.path,
})
// export const SystemConfigGuards = makePowerGuard("/system/config", "系统配置", {
//   parent: SystemGuards.path,
// })
