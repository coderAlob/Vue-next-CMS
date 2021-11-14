import { BreadCrumb } from "@/base-ui/breadCrumb/types"
import { RouteRecordRaw } from "vue-router"

let firstMenu: any = null

export function mapMenuToRoutes(userMenu: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  //1.先加载默认所有的路由
  const allRoutes: RouteRecordRaw[] = []
  /*require.context()方法：加载文件，
    参数：
      1.想要加载的文件
      2.是否进行递归进行检测子目录
      3.正则匹配规则
  */
  const routeFiles = require.context("../router/main", true, /\.ts$/)

  routeFiles.keys().forEach((key) => {
    //添加匹配到的文件
    const route = require("../router/main" + key.split(".")[1])
    allRoutes.push(route.default)
  })

  //2.根据userMenu中的数据将需要加载的组件映射添加到route中
  //使用递归调用的方法，根据userMenu中对象的type属性，如果为2，则不进行递归查询子菜单，如果type=1则在对其子菜单进行查询
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        //将符合的不为空的路由添加到路由中
        if (route) {
          routes.push(route)
        }
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenu)

  return routes
}

//通过路由路径匹配相应的Menu
export function pathMapToMenu(
  userMenu: any[],
  currentPath: string,
  breadCrumb?: BreadCrumb[]
): any {
  for (const menu of userMenu) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadCrumb?.push({ name: menu.name })
        breadCrumb?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

//通过当前路由匹配面包屑
export function pathMapToBreadCrumbs(
  userMenu: any[],
  currentPath: string
): any {
  const breadCrumbs: BreadCrumb[] = []
  pathMapToMenu(userMenu, currentPath, breadCrumbs)

  return breadCrumbs
}

export { firstMenu }
