/*
 * @Descripttion: 全局类型声明，无需引入直接在 `.vue` 、`.ts` 、`.tsx` 文件使用即可获得类型提示
 * @Author: luoli
 * @Date: 2024-08-09 15:49:21
 * @LastEditors: luoli
 * @LastEditTime: 2024-08-09 15:50:07
 */
declare global {
  /**
   * 对应 `public/platform-config.json` 文件的类型声明
   * @see {@link https://pure-admin.github.io/pure-admin-doc/pages/config/#platform-config-json}
   */
  interface PlatformConfigs {
    Version?: string;
    Title?: string;
    FixedHeader?: boolean;
    HiddenSideBar?: boolean;
    MultiTagsCache?: boolean;
    MaxTagsLevel?: number;
    KeepAlive?: boolean;
    Locale?: string;
    Layout?: string;
    Theme?: string;
    DarkMode?: boolean;
    OverallStyle?: string;
    Grey?: boolean;
    Weak?: boolean;
    HideTabs?: boolean;
    HideFooter?: boolean;
    Stretch?: boolean | number;
    SidebarStatus?: boolean;
    EpThemeColor?: string;
    ShowLogo?: boolean;
    ShowModel?: string;
    MenuArrowIconNoTransition?: boolean;
    CachingAsyncRoutes?: boolean;
    TooltipEffect?: Effect;
    ResponsiveStorageNameSpace?: string;
    MenuSearchHistory?: number;
  }
}