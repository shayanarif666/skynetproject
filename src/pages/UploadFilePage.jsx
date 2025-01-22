import React, { useEffect, useState } from "react";

const UploadFilePage = () => {
    const [file, setFile] = useState(null); // To store the selected file

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission
        if (!file) {
            setMessage("Please select a file to upload.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file); // Add the file to the form data

        try {
            const response = await fetch("http://localhost:5000/api/file", {
                method: "POST",
                body: formData, // Send form data as the request body
            });

            const data = await response.json();
            console.log("data", data);
            if (response.ok) {
                setFile(null);
            }
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };

    const removeFile = () => {
        setFile(null);
    }

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow-lg rounded-lg p-5 max-w-[800px] mx-auto">
                <h2 className="text-xl font-semibold mb-4">Upload Files</h2>
                <div className="border-dashed border-2 border-gray-300 p-4 rounded">
                    <label
                        htmlFor="fileUpload"
                        className="block text-center text-gray-500 cursor-pointer hover:text-gray-700"
                    >
                        Click to choose files
                        <input
                            id="fileUpload"
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                    </label>
                </div>
                {file && (
                    <div className="mt-4">
                        <div className="flex items-center justify-between bg-gray-100 p-3 rounded">
                            <div>
                                <p className="text-gray-700">
                                    <strong>File Name:</strong> {file.name}
                                </p>
                                <p className="text-gray-600">
                                    <strong>File Size:</strong> {file.size} MB
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={removeFile}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={handleSubmit}
                            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 shadow-lg mt-4 font-medium w-full"
                        >
                            Upload Your File
                        </button>
                    </div>
                )}

                {/* {
                    filePath && filePath.map(({ _id, src }) => (
                        <img key={_id} src={`http://localhost:5000/Images/${src}`} alt="" />
                    ))
                } */}


            </div>
        </div>
    );
};

export default UploadFilePage;