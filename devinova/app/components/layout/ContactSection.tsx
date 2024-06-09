import { iContactData } from "@/app/utils/interfaces";
import SocialMediaIcon from "../ui/SocialMediaIcon";

const ContactSection = ({ data }: { data: iContactData }) => {
  return (
    <div className="text-neutralGrey space-y-4">
      <h4 className="text-4xl py-4 text-neutralGrey">{data.label}</h4>
      <h6 className="text-sm text-neutralGrey">Phone: {data.phone}</h6>
      <h6 className="text-sm text-neutralGrey">E-mail: {data.email}</h6>
      {data.address.map((item, index) => (
        <div key={index} className="text-neutralGrey py-4">
          <p>{item.street}</p>
          <p>{item.zipCode}</p>
          <p>{item.city}</p>
        </div>
      ))}

      {/* <div className="text-neutralGrey flex gap-4 text-4xl">
        {data.socialMedia.map((item, index) => (
          <SocialMediaIcon key={index} icon={item.label} />
        ))}
      </div> */}
    </div>
  );
};

export default ContactSection;
