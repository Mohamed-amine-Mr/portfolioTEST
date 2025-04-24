import { useTranslation } from "../locales/translations";

const LanguageSelector = ({ currentLanguage, setLanguage }) => {
  const { t } = useTranslation(currentLanguage);

  return (
    <div className="language-selector">
      <label htmlFor="language-select" className="sr-only">
        {t("language.select")}
      </label>
      <select
        id="language-select"
        value={currentLanguage}
        onChange={(e) => setLanguage(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="en">{t("language.english")}</option>
        <option value="fr">{t("language.french")}</option>
        <option value="ar">{t("language.arabic")}</option>
      </select>
    </div>
  );
};

export default LanguageSelector;