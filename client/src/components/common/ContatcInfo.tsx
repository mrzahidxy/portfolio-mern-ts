interface ContactInfoProps {
  icon: string;
  text: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, text }) => (
  <div className="flex flex-row items-center gap-4">
    <div className="w-6 h-6">
      <img src={icon} alt="icon" />
    </div>
    <span>{text}</span>
  </div>
);

export default ContactInfo;
