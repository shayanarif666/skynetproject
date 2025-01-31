import React, { useEffect, useState } from 'react';
import { Button } from "../components/index";

const UploadCategory = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [category, setCategory] = useState("");
    const [slug, setSlug] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/category", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Ensure JSON data is sent
                },
                body: JSON.stringify({ name: category, slug: slug }) // Convert JS object to JSON string
            });
    
            const data = await response.json();
            console.log("Category added successfully:", data);
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    }

    return (
        <>
            <div className="container py-4">
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="" className='text-gray-500 text-sm mb-2'>Category Name*</label>
                    <input type="name" onChange={(e) => setCategory(e.target.value)} name='category' placeholder='Enter Category Name' className='py-3 mb-4 form-control focus:shadow-none rounded-none' />
                    <input type="name" onChange={(e) => setSlug(e.target.value)} name='slug' placeholder='Enter Category Slug' className='py-3 mb-4 form-control focus:shadow-none rounded-none' />
                    <Button className="primary-btn text-[.9rem] py-3 px-4" label="Create Category" />
                </form>
            </div>
        </>
    )
}

export default UploadCategory
