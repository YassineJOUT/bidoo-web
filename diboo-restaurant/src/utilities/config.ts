const isDev = true;
export const BASE_URL = isDev === true ? "http://localhost:3005/" : "http://db-ad.yj-dev.com/"

// import * as reactResponsive from "react-responsive";
// export const MediaQueries = {
//   isDesktopOrLaptop: reactResponsive.useMediaQuery({ minDeviceWidth: 1224 }),
//   isBigScreen: reactResponsive.useMediaQuery({ minDeviceWidth: 1824 }),
//   isTabletOrMobile: reactResponsive.useMediaQuery({ maxWidth: 1224 }),
//   isTabletOrMobileDevice: reactResponsive.useMediaQuery({ maxDeviceWidth: 1224 }),
//   isPortrait: reactResponsive.useMediaQuery({ orientation: "portrait" }),
//   isRetina: reactResponsive.useMediaQuery({ minResolution: "2dppx" })
// };
