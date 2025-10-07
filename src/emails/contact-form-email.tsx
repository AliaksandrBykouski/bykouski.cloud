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

export default ContactFormEmail;
