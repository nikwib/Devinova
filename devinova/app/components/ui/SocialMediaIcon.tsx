import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaPinterest,
  FaSnapchat,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
const iconList = [
  {
    label: "FaFacebook",
    jsx: <FaFacebook />,
  },
  {
    label: "FaInstagram",
    jsx: <FaInstagram />,
  },
  {
    label: "FaXTwitter",
    jsx: <FaXTwitter />,
  },
  {
    label: "FaYoutube",
    jsx: <FaYoutube />,
  },
  {
    label: "FaPinterest",
    jsx: <FaPinterest />,
  },
  {
    label: "FaTiktok",
    jsx: <FaTiktok />,
  },
  {
    label: "FaSnapChat",
    jsx: <FaSnapchat />,
  },
  {
    label: "FaGithub",
    jsx: <FaGithub />,
  },
];

const SocialMediaIcon = ({ icon }: { icon: string }) => {
  const identifiedIcon = iconList.find((item) => item.label === icon);

  return <>{identifiedIcon?.jsx}</>;
};

export default SocialMediaIcon;
