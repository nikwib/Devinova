import ContactSection from "@/app/components/layout/ContactSection";
import TextImage1 from "@/app/components/layout/TextImage1";
import getData from "@/app/utils/fetchSanityData";
import { iContactData } from "@/app/utils/interfaces";
import { contactData } from "@/app/utils/queries";

const page = async () => {
  const data: iContactData[] | null = await getData(contactData, "allContact");
console.log(data);

//FIXME: Image is not supposed to be .logo.asset.url but .pageImage.asset.url but for some reason inside the fetch here it returns as null even if it's successfully fetched in the playground

  return (
    <main>
        {data ? <TextImage1
        image={data[0].logo.asset.url}
        TextArea={<ContactSection data={data[0]} />}
        imageRight={false}
      /> : <></> }
      
    </main>
  );
};

export default page;
