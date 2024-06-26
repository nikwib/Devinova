import TextImage1 from "./components/layout/TextImage1";
import TextWithButton from "./components/layout/TextWithButton";
import TextImage2 from "./components/layout/TextImage2";
import HeroSection from "./components/layout/HeroSection";
import BodyTwoHeadings from "./components/ui/BodyTwoHeadings";
import getData from "./utils/fetchSanityData";
import { sectionData } from "./utils/interfaces";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { allSectionData } from "./utils/queries";
const Home = async () => {
  const data: sectionData[] | null = await getData(
    allSectionData,
    "allSectionData"
  );

  return (
    <>
      <main className="min-h-screen w-full">
        {data &&
          data.map((item, index) => {
            if (item.type === "HeroSection") {
              return (
                <HeroSection
                  key={index}
                  image={item.image}
                  TextArea={<BodyTwoHeadings data={item} />}
                  imageRight={index % 2 !== 0}
                />
              );
            } else if (item.type === "TextImage1") {
              return (
                <TextImage1
                  key={index}
                  image={item.image}
                  TextArea={<TextWithButton data={item} />}
                  imageRight={index % 2 !== 0}
                />
              );
            } else if (item.type === "TextImage2") {
              return (
                <TextImage2
                  key={index}
                  image={item.image}
                  TextArea={<TextWithButton data={item} />}
                  imageRight={index % 2 !== 0}
                />
              );
            } else {
              return null;
            }
          })}
      </main>
    </>
  );
};

export default Home;
