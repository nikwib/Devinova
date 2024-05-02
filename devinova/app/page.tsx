import TextImage1 from "./components/layout/TextImage1";
import TextWithButton from "./components/layout/TextWithButton";
import TextImage2 from "./components/layout/TextImage2";
import HeroSection from "./components/layout/HeroSection";
import BodyTwoHeadings from "./components/ui/BodyTwoHeadings";
import ExpandableList from "./components/layout/ExpandableList";
import getData from "./utils/sectionData";
import { data } from "./utils/interfaces";
const Home = async () => {
  
  const data: data[] | null = await  getData()
  

  return (
    <main className="min-h-screen w-full pb-96">
      {data && data.map((item, index) =>
        item.type == "Hero" ? (
          <HeroSection
            key={index}
            image={item.image}
            TextArea={<BodyTwoHeadings data={item} />}
            imageRight={index % 2 !== 0}
          />
        ) : item.type == "TextImage1" ? (
          <TextImage1
            key={index}
            image={item.image}
            TextArea={<TextWithButton data={item} />}
            imageRight={index % 2 !== 0}
          />
        ) : item.type == "TextImage2" ? (
          <TextImage2
            key={index}
            image={item.image}
            TextArea={<TextWithButton data={item} />}
            imageRight={index % 2 !== 0}
          />
          
        ) : (
          ""
        )
      )}
       {data && <ExpandableList data={data} />}
    </main>
  );
};

export default Home;
