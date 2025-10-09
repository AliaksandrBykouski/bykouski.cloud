interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message,
}) => {
  return (
    <div>
      <h1>Вам пришло сообщение от {name}</h1>

      <p>
        На <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Сообщение:</strong> {message}
      </p>
    </div>
  );
};

interface ConfirmationEmailProps {
  name: string;
  locale?: string;
}

const ConfirmationEmail: React.FC<Readonly<ConfirmationEmailProps>> = ({
  name,
  locale = "ru",
}) => {
  const isCzech = locale === "cz";

  return (
    <div>
      <h1>
        {isCzech
          ? `Děkujeme za vaši zprávu, ${name}!`
          : `Спасибо за ваше сообщение, ${name}!`}
      </h1>
      <p>
        {isCzech
          ? "Obdrželi jsme vaši zprávu a brzy vás budeme kontaktovat."
          : "Мы получили ваше сообщение и свяжемся с вами в ближайшее время."}
      </p>
      <p>
        {isCzech ? "S pozdravem," : "С уважением,"}
        <br />
        Bykouski Digital
      </p>
      <p>
        {isCzech
          ? "Tento e-mail byl vygenerován automaticky, neodpovídejte na něj."
          : "Это письмо сгенерировано автоматически, пожалуйста, не отвечайте на него."}
      </p>
    </div>
  );
};

export default ContactFormEmail;
export { ConfirmationEmail };
