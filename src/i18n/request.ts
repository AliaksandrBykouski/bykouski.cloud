import { getRequestConfig } from "next-intl/server";
import cs from "../messages/cs.json";
import ru from "../messages/ru.json";
import { routing } from "./routing";

const messagesMap = { ru, cs };

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
