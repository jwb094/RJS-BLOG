import React from "react";
import { TailSpin } from "react-loader-spinner";

function SearchLoading() {
    return (
        <div className="flex flex-col items-center justify-center py-20">

            <TailSpin
                height="60"
                width="60"
                color="#2563eb"
            />

            <p className="mt-4 text-gray-600">
                Searching articles...
            </p>

        </div>
    );
}

export default SearchLoading;