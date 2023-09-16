
const PlaceholderPage = () => {

    return (
        <div className="mt-8 ">

            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-3">
                <input
                    type="text"
                    placeholder="Email address"
                    className="p-2 sm:p-3 bg-transparent rounded-lg w-1/2 input-ghost border border-blue-500"
                />

                <button className="btn-ghost text-white bg-blue-500 rounded-lg p-2 sm:p-3">
                    Notify Me
                </button>
            </div>
            <p className="mt-3">Contact us at: <a href="mailto:sujonmahmud102@gmail.com" className="text-white">sujonmahmud102@gmail.com</a> </p>
        </div>
    );
};

export default PlaceholderPage;
