import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export async function AccordionDemo({
  translations,
}: {
  translations: {
    title: string;
    list: {
      [key: string]: {
        question: string;
        answer: string;
      };
    };
  };
}) {
  const accordionTitle = translations.title;
  const faqs = Object.entries(translations.list).map(
    ([key, { question, answer }]) => ({
      id: key,
      question,
      answer,
    })
  );

  return (
    <section className="container pt-10" aria-labelledby="faq-title">
      <h2 id="faq-title" className="text-2xl font-bold text-center">
        {accordionTitle}
      </h2>
      <Accordion
        type="single"
        collapsible
        className=" mt-4"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl font-semibold text-[var(--ring)]">
            {faqs[0].question}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
            <p>{faqs[0].answer}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl font-semibold text-[var(--ring)]">
            {faqs[1].question}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
            <p>{faqs[1].answer}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl font-semibold text-[var(--ring)]">
            {faqs[2].question}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
            <p>{faqs[2].answer}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl font-semibold text-[var(--ring)]">
            {faqs[3].question}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
            <p>{faqs[3].answer}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-xl font-semibold text-[var(--ring)]">
            {faqs[4].question}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
            <p>{faqs[4].answer}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-xl font-semibold text-[var(--ring)]">
            {faqs[5].question}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
            <p>{faqs[5].answer}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
