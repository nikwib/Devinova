const TransparentWithBorderBtn = ({ btnText }: { btnText: string }) => {
    return <button className="shadow-lg shadow-black my-4 border border-secondary select-none text-secondary px-6 min-w-52 py-3 rounded-md text-lg">{btnText}</button>;
}

export default TransparentWithBorderBtn