interface SocialLinkProps {
  href: string;
  icon: string;
  alt: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, alt }) => (
  <div className="w-6 h-6">
    <a href={href}>
      <img src={icon} alt={alt} />
    </a>
  </div>
);

export default SocialLink;
