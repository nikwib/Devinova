const UnstyledBtn = ({ btnText }: { btnText: string }) => {
  return <button className="shadow-lg shadow-black my-4 border-secondary select-none text-customGrey px-6 min-w-52 py-3 rounded-md text-lg">{btnText}</button>;
};

export default UnstyledBtn;
