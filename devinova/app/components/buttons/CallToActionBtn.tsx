const CallToActionBtn = ({ btnText, icon }: { btnText: string; icon: any }) => {
  return (
    <button className="flex gap-2 shadow-2xl my-4 bg-customGreen select-none text-customGrey px-6 min-w-52 py-3 items-center rounded-md justify-center text-lg">
      {btnText}
      <span className="text-xl">{icon}</span>
    </button>
  );
};

export default CallToActionBtn;
