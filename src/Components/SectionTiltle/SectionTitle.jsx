
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center my-10 w-fit mx-auto">
            <p className="text-lg text-orange-400 mb-2 px-5">{subHeading}</p>
            <h3 className="text-4xl font-semibold border-y-4 py-3 px-5">{heading}</h3>
        </div>
    );
};

export default SectionTitle;