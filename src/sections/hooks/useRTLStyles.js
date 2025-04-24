import { useLanguage } from "../../context/languageContext";

export const useRTLStyles = () => {
  const { currentLanguage } = useLanguage();
  const isRTL = currentLanguage === "ar";

  const getStyles = (ltrStyles, rtlStyles) => {
    return isRTL ? { ...ltrStyles, ...rtlStyles } : ltrStyles;
  };

  return {
    isRTL,
    getStyles,
    dir: isRTL ? "rtl" : "ltr",
    marginStart: isRTL ? "ml" : "mr",
    marginEnd: isRTL ? "mr" : "ml",
    paddingStart: isRTL ? "pl" : "pr",
    paddingEnd: isRTL ? "pr" : "pl",
    start: isRTL ? "right" : "left",
    end: isRTL ? "left" : "right",
  };
};
