/* eslint-disable react/prop-types */


const Card = ({ children }) => {
    return (
        <div className="bg-white shadow-md rounded-md p-4">
            {children}
        </div>
    );
};

export default Card;