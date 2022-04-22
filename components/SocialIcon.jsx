import Image from "next/image";

export default function SocialIcon({ icon, alt, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Image src={icon} alt={alt} width="25px" height="25px" />
    </a>
  );
}
