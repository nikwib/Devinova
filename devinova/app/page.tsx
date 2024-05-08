import TextImage1 from "./components/layout/TextImage1";
import TextWithButton from "./components/layout/TextWithButton";
import TextImage2 from "./components/layout/TextImage2";
import HeroSection from "./components/layout/HeroSection";
import BodyTwoHeadings from "./components/ui/BodyTwoHeadings";
//import ExpandableList from "./components/layout/ExpandableList";
import getData from "./utils/sectionData";
import { data } from "./utils/interfaces";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

const Home = async () => {
  const data: data[] | null = await getData();

  return (
    <>
      <Header />
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
              return null; // Or render a default component
            }
          })}
      </main>
      <Footer />
    </>
  );
};

export default Home;
