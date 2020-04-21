import { useMediaQuery } from "react-responsive";

export const MediaQueries = {
  isDesktopOrLaptop: useMediaQuery({ minDeviceWidth: 1224 }),
  isBigScreen: useMediaQuery({ minDeviceWidth: 1824 }),
  isTabletOrMobile: useMediaQuery({ maxWidth: 1224 }),
  isTabletOrMobileDevice: useMediaQuery({ maxDeviceWidth: 1224 }),
  isPortrait: useMediaQuery({ orientation: "portrait" }),
  isRetina: useMediaQuery({ minResolution: "2dppx" })
};
