import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import ru from "../messages/ru.json";
import cz from "../messages/cz.json";

const messagesMap = { ru, cz };

export default getRequestConfig(async (params) => {
  const locale = params.locale || routing.defaultLocale;

  const messages =
    messagesMap[locale as keyof typeof messagesMap] ||
    messagesMap[routing.defaultLocale];

  return {
    locale,
    messages,
  };
});
