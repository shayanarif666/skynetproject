import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { CiHome, CiUser, CiLinkedin } from "react-icons/ci";
import { MdAlternateEmail, MdOutlinePhoneInTalk } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import "./contact.css";
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { BeatLoader } from 'react-spinners';

const Contact = () => {

    // Error Handling
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // Form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleContactForm = async (data, event) => {
        setLoading(true);
        try {
            const formData = new FormData(event.target);

            formData.append("access_key", "a67bb4a4-9923-4dc9-af1f-ea08c3db4acd");

            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

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
        } catch (error) {
            setError(error);
            setLoading(false)
        }
    }

    return (
        <>
            <section id="contact" className='py-20'>
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-12 col-lg-6 mt-20">
                            <h4 className='text-white uppercase text-2xl font-bold mb-3'>Take The Silk Road To</h4>
                            <h1 className='text-sky-400 font-bold text-4xl sm:text-5xl'>Digitizing Your Business <br /> Growth</h1>
                            <div className="follow-us flex items-center mt-5">
                                <h5 className='text-lg text-white font-semibold me-20'>Follow Us</h5>
                                <div className="social-icons flex items-center">
                                    <CiLinkedin className='text-white text-4xl me-3 border-2 border-slate-500 rounded-full p-1'></CiLinkedin>
                                    <FaGithub className='text-white text-4xl border-2 border-slate-500 rounded-full p-1'></FaGithub>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <h3 className='text-white font-bold text-4xl text-center'>Start A Conversation With Us</h3>
                            <form action="" className='mt-5' onSubmit={handleSubmit(handleContactForm)}>
                                <div className="input-group">
                                    <span class="input-group-text"><CiUser /></span>
                                    <input name='name' {...register("name", { required: "Name is required" })} type="name" className='form-control mb-4' placeholder='Name*' />
                                </div>
                                {errors.name && <p role="alert" className='text-red-500 mb-3'>**{errors.name.message}</p>}
                                <div className="input-group">
                                    <span class="input-group-text"><CiHome /></span>
                                    <input name='company_name' type="name" {...register("company_name", { required: "Organization Name is required" })} className='form-control mb-4' placeholder='Company Name*' />
                                </div>
                                {errors.company_name && <p role="alert" className='text-red-500 mb-3'>**{errors.company_name.message}</p>}
                                <div className="input-group">
                                    <span class="input-group-text"><MdAlternateEmail /></span>
                                    <input name='email' type="email" {...register("email", { required: "Email is required" })} className='form-control mb-4' placeholder='Email*' />
                                </div>
                                {errors.email && <p role="alert" className='text-red-500 mb-3'>**{errors.email.message}</p>}
                                <div className="input-group">
                                    <span class="input-group-text"><MdOutlinePhoneInTalk /></span>
                                    <input name='number' type="number" {...register("phone", { required: "Phone Number is required" })} className='form-control mb-4' placeholder='Phone*' />
                                </div>
                                {errors.phone && <p role="alert" className='text-red-500 mb-3'>**{errors.phone.message}</p>}
                                <div className="input-group input-group-textarea mb-5">
                                    <span class="input-group-text input-group-textarea-text"><RiMessage2Line /></span>
                                    <textarea name="message" {...register("message", { required: "Message is required" })} className='form-control' placeholder='Your Message*' id=""></textarea>
                                </div>
                                {errors.message && <p role="alert" className='text-red-500 mb-3'>**{errors.message.message}</p>}
                                <div className="text-start">
                                    <button>{loading ? <BeatLoader size={12} color='#fff' /> : "Submit"}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
