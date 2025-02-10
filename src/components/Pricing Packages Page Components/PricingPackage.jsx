import React, { useEffect, useState } from 'react'
import { BreadCrumb } from '../index';
import { Space, Switch } from 'antd';
import "./css/pricingPackage.css"
import { pricing } from '../Pricing';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const PricingPackage = ({
    minHeight = "h-full",
    className = "",
    isClick,
    ...props
}) => {

    // State Variables
    const [categories, setCategories] = useState();
    const [pricingFeatures, setPricingFeatures] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Web Development");

    const { category } = useParams();

    const navigate = useNavigate();
    const location = useLocation();

    // Category Change
    const handleCategory = (slug) => {
        setSelectedCategory(slug);
        const updateSlug = slug.split(" ").map((word) => word.toLowerCase()).join("-");
        navigate(`/pricing-package/${updateSlug}`)
    }

    // Filter Pricing
    useEffect(() => {
        const updateCategory = category
            .split("-")
            .map((categ) => categ[0].toUpperCase() + categ.slice(1))
            .join(" ");
        setSelectedCategory(updateCategory);
        const filterPricing = pricing.find((price) => price.category === updateCategory);
        setPricingFeatures(filterPricing.features);
    }, [category, location.pathname]);

    // Fetch All Categories
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("https://skynetsiliconserver.vercel.app/api/category");
                if (!response.ok) throw new Error("Categories could not fetch");
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    // Calculate Grand Total
    const totalPrize = pricingFeatures?.reduce((acc, currVal) => {
        return currVal.isChecked ? acc + (currVal.price * currVal.quantity) : acc;
    }, 0);

    // Calculate Total Hours
    const totalHours = pricingFeatures?.reduce((acc, currVal) => {
        return currVal.isChecked ? acc + (currVal.hours * currVal.quantity) : acc;
    }, 0);

    // Toggle Switch  
    const handleChange = (index, isCheckedVal, isQuantityVal, qty = 1) => {
        const updatedFeatures = [...pricingFeatures];
        if (isCheckedVal) {
            updatedFeatures[index].isChecked = !updatedFeatures[index].isChecked;
        }
        if (isQuantityVal) {
            updatedFeatures[index].quantity = Number(qty);
        }
        setPricingFeatures(updatedFeatures);
    }

    return (
        <>
            <section id='pricing_section' className={`${isClick ? "h-full overflow-hidden" : "min-h-[100%]"} z-[9] bg-[#00042a] relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[50vh] before:z-[-1] before:bg-gradient-to-r from-[rgba(72,135,231,1)] to-[rgba(135,63,231,1)] masked-image  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[40vh] after:z-[-1] after:bg-gradient-to-r`}>
                <div className="container">
                    <div className="pricing_package_content pt-[200px] pb-[80px]">
                        <div className="pricing_package_breadcrumb">
                            <BreadCrumb page={"Pricing"} category={selectedCategory} />
                        </div>
                        <div className="pricing_package_intro flex flex-col items-center mt-16 text-center">
                            <h1 className='text-white text-[2.7rem] font-bold'>Transparent Pricing for All Digital Services</h1>
                            <p className='text-white text-xl font-semibold mt-[16px] max-w-[1000px]'>Get transparent pricing for web design, development, and marketing with Skynet Silicon. Estimate costs effortlessly and start your digital journey today</p>
                        </div>
                        <div className="pricing_package_features_list mt-14 shadow-md">
                            <div className="pricing_package_select_feature  bg-gradient-to-r from-[rgba(15,73,144,1)] to-[rgba(70,35,134,1)] p-10">
                                <div className="row g-4 flex items-center justify-between">
                                    <div className="service_type col-12 ">
                                        <label htmlFor="" className='text-white text-xl font-semibold'>Service Type</label>
                                        <select
                                            value={selectedCategory}
                                            onChange={(e) => handleCategory(e.target.value)}
                                            className='focus:shadow-none text-lg form-select bg-[#1b2c5c] mt-[15px] px-4 py-[12px] rounded-[25px] text-white border-none cursor-pointer'>
                                            <option hidden selected>Select Category</option>
                                            {
                                                categories?.map(({ _id, slug, name }) => (
                                                    <option value={name} key={_id}>{name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    {/* <div className="page_length col-sm-6">
                                        <label htmlFor="" className='text-white text-xl font-semibold'>No. Of Unique Pages</label>
                                        <input type="number" defaultValue={5} max={20} min={1} className='focus:bg-[#1b2c5c] focus:shadow-none text-lg form-control bg-[#1b2c5c] mt-[15px] px-4 py-[12px] rounded-[25px] text-white border-none cursor-pointer' />
                                    </div> */}
                                </div>
                            </div>
                            <div className="pricing_package_check_list  bg-[#131848] py-10 px-sm-14 px-10">

                                <h2 className='text-white text-3xl font-bold mb-14'><span className='text-[#0ad5f1]'>{selectedCategory}</span> Cost Calculator</h2>

                                <div className="pricing_package_check_list_title mb-[20px] flex items-center justify-between row">
                                    <div className="select_title col-6 md:col-9">
                                        <h4 className='text-[#04e4ff] text-xl uppercase font-bold'>Select:</h4>
                                    </div>
                                    <div className="price_title flex items-center col-6 md:col-3 justify-end">
                                        <h4 className='text-[#04e4ff] lg:text-xl uppercase font-bold w-[50%] md:w-[35%] text-center me-sm-0 me-4'>Hours:</h4>
                                        <h4 className='text-[#04e4ff] lg:text-xl uppercase font-bold w-[50%] md:w-[20%] text-center'>Price:</h4>
                                    </div>
                                </div>

                                {
                                    pricingFeatures.map((feature, index) => {
                                        return (
                                            <div className="pricing_package_check_list_box mb-[1rem] border-b-[1px] border-b-[#1092fd] border-dashed row flex items-center" key={index}>
                                                <div className="feature_button order-2 order-md-1 col-6 col-md-2 col-xl-1">
                                                    <Space direction="vertical">
                                                        <Switch onChange={() => handleChange(index, true, false)} checkedChildren="Yes" unCheckedChildren="No" checked={feature.isChecked} />
                                                    </Space>
                                                </div>
                                                <div className={`feature_text order-1 order-md-2 col-12 col-md-7 col-xl-8 ${feature.isQuantity && "flex items-center"}`}>
                                                    <h3 className='text-white text-xl font-semibold'>{feature.title}</h3>
                                                    {
                                                        feature.isQuantity && feature.isChecked && <input type="number" onChange={(e) => handleChange(index, false, true, e.target.value)} min={1} defaultValue={feature.quantity} className='focus:bg-[#1b2c5c] focus:shadow-none text-lg w-[100px] form-control bg-[#1b2c5c] ms-[1rem] mb-[.7rem] px-4 py-[12px] rounded-[25px] text-white border-none cursor-pointer' />
                                                    }
                                                </div>
                                                <div className="feature_price order-3 col-6 col-md-3 flex items-center p-[16px] justify-between">
                                                    <div className="hours me-10 w-[50%] text-center">
                                                        <h5 className='text-white text-xl font-semibold '>{feature.isChecked ? (feature.hours * feature.quantity) : 0} Hr</h5>
                                                    </div>
                                                    <div className="price w-[50%] text-center">
                                                        <h5 className='text-white text-xl font-semibold'>${feature.isChecked ? (feature.price * feature.quantity) : 0}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                                <div className="pricing_package_check_list_total grid grid-cols-1 sm:grid-cols-2  mt-10">
                                    <div className="total_title ">
                                        <h1 className='text-[#fff] text-3xl font-bold me-10'>Estimated Price:</h1>
                                    </div>
                                    <div className="total_prize sm:justify-end flex items-center">
                                        <h2 className='text-[#04e4ff] text-2xl font-bold me-10'>{totalHours}Hr</h2>
                                        <h2 className='text-[#04e4ff] text-2xl font-bold'>${totalPrize.toFixed(2)}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PricingPackage