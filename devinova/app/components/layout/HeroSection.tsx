import Image from "next/image";
import TransparentWithBorderBtn from "../ui/buttons/TransparentWithBorderBtn";
import PurpleBtn from "./buttons/PurpleBtn";
import Link from "next/link";

const HeroSection = ({
  image,
  TextArea,
  imageRight,
}: {
  image: string;
  TextArea: JSX.Element;
  imageRight: boolean;
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row bg-black w-full min-h-screen ${
        imageRight && "flex-col-reverse md:flex-row-reverse"
      } `}
    >
      <div
        className={`relative md:w-1/2 min-h-[50vh] flex justify-center items-center ${
          imageRight ? "md:justify-start" : "md:justify-end"
        }`}
      >
        <Image
          alt="pic"
          src={image}
          width={500}
          height={600}
          className=" w-4/5 min-w-[291px] max-w-[325px] md:max-w-none"
        />
      </div>
      <div className="flex flex-col justify-center md:w-1/2 h-full opacity-100 p-10 md:p-20 xl:p-32 text-neutralGrey">
        {TextArea}
        <div>
          {/* <h3>Daily Wayfinder: Empowering Daily Reflection with AI</h3> */}
          <p>
            <strong>Project Overview:</strong> Daily Wayfinder is an innovative
            online diary tool designed to enrich daily journaling experiences.
            By integrating advanced AI, this platform offers users personalized
            feedback, drawing on biblical wisdom and tailored advice to
            encourage spiritual and personal growth.
          </p>
          <p>
            <strong>Challenges:</strong> Creating a seamless interface that
            could intuitively analyze journal entries and provide contextually
            appropriate scripture and insights required a deep understanding of
            both AI technology and theological principles.
          </p>
          <p>
            <strong>Solutions:</strong> Our team developed a sophisticated AI
            algorithm capable of understanding nuanced journal content and
            suggesting relevant biblical verses and insights. We ensured that
            the interaction feels natural and supportive, enhancing the
            reflective experience of the users.
          </p>
          <p>
            <strong>Results:</strong> Daily Wayfinder has transformed how
            individuals engage with their spiritual practices, making it easier
            to find guidance and encouragement through personalized, AI-driven
            insights. Our approach has not only elevated the user experience but
            also set a new standard in digital spiritual tools.
          </p>
          <p>
            <strong>Explore More:</strong> Visit{" "}
            <Link legacyBehavior href="http://dailywayfinder.com">
              <a
                className="  text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                dailywayfinder.com
              </a>
            </Link>{" "}
            to see how we’re pioneering the intersection of technology and
            spirituality.
          </p>
        </div>
        <div className="flex flex-row flex-wrap gap-x-4">
          {/* <PurpleBtn btnText={"Read More"} /> */}
          {/* <TransparentWithBorderBtn btnText={"Contact"} /> */}
          {/* <a
            href="https://dailywayfinder.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-lg shadow-black my-4 border border-secondary select-none text-secondary px-6 min-w-52 py-3 rounded-md text-lg"
          >
            DailyWayfinder
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
