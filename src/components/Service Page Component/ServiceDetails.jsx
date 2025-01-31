import React, { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import { useCollapse } from "react-collapsed";
import "./css/serviceDetail.css";

import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ServiceDetails = ({ service }) => {

    // React Hook Form
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();


    // Error Handling
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [openIndex, setOpenIndex] = useState(0);
    const [categories, setCategories] = useState([]);
    const [phone, setPhone] = useState("");

    const handleToggle = (index) => {
        if (openIndex !== index) {
            setOpenIndex(index);
        }
    };

    const handleContactForm = async (data, event) => {
        setLoading(true);
        try {
            if (phone.length > 3) {
                const formData = new FormData(event.target);

                formData.append("access_key", "a67bb4a4-9923-4dc9-af1f-ea08c3db4acd");

                const object = Object.fromEntries(formData);
                const newData = { ...object, phone: `+${data.phone}` }
                const json = JSON.stringify(newData);

                const res = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: json
                }).then((res) => res.json());

                if (res.success) {
                    console.log("Success", res);
                    setLoading(false);
                    setError(false)
                    Swal.fire({
                        icon: "success",
                        title: "Successfully sent your form",
                    });
                }
            } else Swal.fire({
                icon: "error",
                title: "Phone Number is required",
            });
        } catch (error) {
            setError(error);
            setLoading(false)
        }
    }

    // Fetching Categories
    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:5000/api/category");
            const data = await response.json();
            setCategories(data);
        })()
    }, [])

    return (
        <>
            <section id="service_details" className='bg-[#00042a] py-24'>
                <div className="container">

                    <div className="lg:flex">
                        <div className="service_details_explanation z-[9] lg:w-[60%]">
                            <h1 className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug'>Services for Creating Custom Websites</h1>
                            <p className='text-white text-[20px] mt-10'>Skynet Silicon is a full-service agency comprised of leading web designers from around the globe. Whether building a website from scratch or redesigning your current digital presence, our web design services include:</p>
                            <div className="service_offers mt-14">
                                {service.service_explanation.map((offer, index) => {
                                    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({ isExpanded: openIndex === index });
                                    return (
                                        <div className={`service_offer_card mb-10 ${isExpanded ? "isActiveService" : ""}`} key={index}>
                                            <button {...getToggleProps({ onClick: () => handleToggle(index) })} className='text-3xl font-bold text-[#04e4ff]'>
                                                {offer.title}
                                            </button>
                                            <div {...getCollapseProps()} className='service_offer_card_content mt-3'>
                                                <p className='text-white text-[20px] leading-relaxed'>{offer.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="service_detail_form lg:w-[35%] lg:ml-[5%] bg-white h-full p-10">
                            <h3 className='text-[#1092fd] text-3xl font-bold'>Request A Quote</h3>
                            <h2 className='text-[#123c76] font-bold leading-snug text-3xl mt-6'>Maximize Your Website’s Potential With Skynet Silicon</h2>
                            <form action="" onSubmit={handleSubmit(handleContactForm)}>
                                <input type="name" {...register("name", { required: "Name is required" })} name='name' placeholder='Name*' className='placeholder:text-lg py-3 focus:shadow-none focus:border-inherit form-control mt-6' />
                                {errors.name && <p role="alert" className='text-red-500 mb-3'>**{errors.name.message}</p>}

                                <input type="name" name='Company Name' {...register("company_name", { required: "Organization Name is required" })} placeholder='Company Name*' className='placeholder:text-lg py-3 focus:shadow-none focus:border-inherit form-control mt-6' />
                                {errors.company_name && <p role="alert" className='text-red-500 mb-3'>**{errors.company_name.message}</p>}

                                <input type="email" name='email' {...register("email", {
                                    required: "Email is required", pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, // Valid email format
                                        message: "Enter a valid email address"
                                    }
                                })} placeholder='Email*' className='placeholder:text-lg py-3 focus:shadow-none focus:border-inherit form-control mt-6' />
                                {errors.email && <p role="alert" className='text-red-500 mb-3'>**{errors.email.message}</p>}

                                <select name="" {...register("category", { required: "Category is required" })} className='form-select my-6 py-3 focus:shadow-none focus:border-inherit form-control' id="">
                                    <option hidden selected>Select Category</option>
                                    {
                                        categories?.map(({ name, _id, slug }) => {
                                            return <option value={name} key={slug} className=''>{name}</option>
                                        })
                                    }
                                </select>
                                {errors.category && <p role="alert" className='text-red-500 mb-3'>**{errors.category.message}</p>}

                                {/* Phone Input with Country Code */}
                                <PhoneInput
                                    country={"us"} // Set Default Country (Change to 'pk', 'gb', etc.)
                                    enableSearch={true} // Allows search in dropdown
                                    disableDropdown={false} // Ensures dropdown remains enabled
                                    international
                                    withCountryCallingCode
                                    value={phone}
                                    onChange={(phone) => {
                                        setPhone(phone);
                                        setValue("phone", phone, { shouldValidate: true });
                                    }}
                                    className="z-[999]"
                                    inputStyle={{ width: "100%", padding: "20px", borderRadius: "0", paddingLeft: "50px" }}
                                    countryCodeEditable={false} // Prevent users from manually editing the code
                                />

                                {/* Validation */}
                                {errors.phone && <p className="text-red-500 mt-2">{errors.phone.message}</p>}

                                <textarea name='message' placeholder='Message*' {...register("message", { required: "Message is required" })} className='mb-6 placeholder:text-lg py-3 focus:shadow-none focus:border-inherit form-control mt-6' />
                                {errors.message && <p role="alert" className='text-red-500 mb-3'>**{errors.message.message}</p>}

                                <button className='primary-btn after:bg-[radial-gradient(circle,_rgba(26,8,152,1)_0%,_rgba(24,12,75,1)_64%)] hover:text-white'>{loading ? <BeatLoader size={12} color='#1092fd' /> : "Submit"}</button>

                            </form>
                        </div>
                    </div>

                    {/* <ServicePortfolioImages /> */}

                </div>
            </section>
        </>
    );
};

export default ServiceDetails;
