import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import useMediaQuery from '@mui/material/useMediaQuery';
import "./homeCaseStudies.css";

const HomeCaseStudies = () => {

    const matches = useMediaQuery('(max-width:992px)');

    // State Variables
    const [value, setValue] = useState('1');

    // Changing Tabs
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <section id="case_studies" className='case_studies py-24'>
                <div className="container">

                    <div className="case_studies_intro mb-16">
                        <div className="row">
                            <div className="col-lg-5 mb-lg-0 mb-4">
                                <div className="case_studies_intro_title text-lg-end text-start">
                                    <h1 className='bg-gradient-to-r from-[#009cff] to-[#9536e5] inline-block text-transparent bg-clip-text'>Case Studies</h1>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="case_studies_intro_description text-lg-end text-start">
                                    <p className='text-2xl font-semibold'>From Concept To Market:</p>
                                    <p className='text-2xl font-semibold'>We Engineer Projects For <span className='text_gradient'>Superior Performance</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <TabContext value={value}>
                        <div className="row">
                            <div className="offset-lg-1 col-lg-4 case_studies_tabs mb-lg-0 mb-5">
                                <div className="case_studies_tabs_list">
                                    <TabList onChange={handleChange} aria-label="lab API tabs example" orientation="vertical">
                                        <Tab {...(matches && { href: '#case_studies_tab_panal-hp' })} className='mt-5' label={<img src="https://www.digitalsilk.com/wp-content/uploads/2022/07/hp-logo.svg" />} value="1" />
                                        <Tab {...(matches && { href: '#case_studies_tab_panal-xerox' })} className='mt-5' label={<img src="https://www.digitalsilk.com/wp-content/uploads/2022/07/xerox-logo.svg" />} value="2" />
                                        <Tab {...(matches && { href: '#case_studies_tab_panal-doForms' })} className='mt-5' label={<img src="https://www.digitalsilk.com/wp-content/uploads/2022/11/doForms-logo-blue.svg" />} value="3" />
                                        <Tab {...(matches && { href: '#case_studies_tab_panal-fieldEdge' })} className='mt-5' label={<img src="https://www.digitalsilk.com/wp-content/uploads/2022/11/FieldEdge-logo-blue.svg" />} value="4" />
                                        <Tab {...(matches && { href: '#case_studies_tab_panal-miami' })} className='mt-5' label={<img src="https://www.digitalsilk.com/wp-content/uploads/2022/11/MCDS-logo-blue.svg" />} value="5" />
                                    </TabList>
                                </div>
                            </div>
                            <div className="col-lg-7 case_studies_tabs_content">
                                <div className="case_studies_tabs_content_tab_panal case_studies_tabs_content_tab_panal_effect effect">
                                    <TabPanel value="1" id='case_studies_tab_panal-hp'>
                                        <div className="effect case_studies_tab_panal_effect_img_one"></div>
                                        <div className="case_studies_tab_panal_effect_logo case_studies_tab_panal_effect_logo-hp"></div>
                                        <div className="row gy-5 flex items-center">
                                            <div className="col-lg-3 col-6">
                                                <div className="case_studies_tabs_content_logo">
                                                    <img src="https://www.digitalsilk.com/wp-content/uploads/2022/07/bo-logo-dark.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xl-5 col-lg-4 d-lg-flex d-none">
                                                <div className="effect-design-line"></div>
                                            </div>
                                            <div className="col-xl-4 col-lg-5 col-6">
                                                <div className="case_studies_tabs_content_description">
                                                    <h3 className='text-xl lg:text-lg font-medium'>HP needed to implement a global rewards program.</h3>
                                                    <p className='mt-3'><span className='font-semibold text-xl lg:text-lg'>In 6 months,</span> we achieved:</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-20">
                                            <div className="col-6">
                                                <div className="case_studies_tab_content_counter">
                                                    <h1 className='text-7xl lg:text-8xl xl:text-9xl text-sky-500 font-semibold'>40 <sub>K</sub></h1>
                                                    <p className='lg:flex justify-center mt-5 text-xl font-semibold'>active members <br /> inside the program</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="case_studies_tab_content_counter">
                                                    <h1 className='text-7xl lg:text-8xl xl:text-9xl text-sky-500 font-semibold'>56 <sub>%</sub></h1>
                                                    <p className='lg:flex justify-center mt-5 text-xl font-semibold'>active members <br /> inside the program</p>
                                                </div>
                                            </div>
                                            <div className="col-12 md:flex items-center mt-5">
                                                <div className="case-studies_tab_content_btn">
                                                    <button className='glowingButton'>
                                                        <span className='me-3'>EXPLORE ALL SERVICES</span>
                                                        <span>➤</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value="2" id='case_studies_tab_panal-xerox'>
                                        <div className="effect case_studies_tab_panal_effect_img_two"></div>
                                        <div className="case_studies_tab_panal_effect_logo case_studies_tab_panal_effect_logo-xerox"></div>
                                        <div className="row gy-5 flex items-center">
                                            <div className="col-lg-3 col-6">
                                                <div className="case_studies_tabs_content_logo">
                                                    <img src="https://www.digitalsilk.com/wp-content/uploads/2022/07/xerox-logo-dark.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xl-5 col-lg-4 d-lg-flex d-none">
                                                <div className="effect-design-line"></div>
                                            </div>
                                            <div className="col-xl-4 col-lg-5 col-6">
                                                <div className="case_studies_tabs_content_description">
                                                    <h3 className='text-xl lg:text-lg font-medium'>HP needed to implement a global rewards program.</h3>
                                                    <p className='mt-3'><span className='font-semibold text-xl lg:text-lg'>In 6 months,</span> we achieved:</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-20">
                                            <div className="col-6">
                                                <div className="case_studies_tab_content_counter">
                                                    <h1 className='text-7xl lg:text-8xl xl:text-9xl text-sky-500 font-semibold'>78 <sub>K</sub></h1>
                                                    <p className='lg:flex justify-center mt-5 text-xl font-semibold'>active members <br /> inside the program</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="case_studies_tab_content_counter">
                                                    <h1 className='text-7xl lg:text-8xl xl:text-9xl text-sky-500 font-semibold'>21 <sub>%</sub></h1>
                                                    <p className='lg:flex justify-center mt-5 text-xl font-semibold'>active members <br /> inside the program</p>
                                                </div>
                                            </div>
                                            <div className="col-12 md:flex items-center mt-5">
                                                <div className="case-studies_tab_content_btn">
                                                    <button className='glowingButton'>
                                                        <span className='me-3'>EXPLORE ALL SERVICES</span>
                                                        <span>➤</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value="3" id='case_studies_tab_panal-doForms'>
                                        <div className="effect case_studies_tab_panal_effect_img_three"></div>
                                        <div className="case_studies_tab_panal_effect_logo case_studies_tab_panal_effect_logo-doForms"></div>
                                        <div className="row gy-5 flex items-center">
                                            <div className="col-lg-3 col-6">
                                                <div className="case_studies_tabs_content_logo">
                                                    <img src="https://www.digitalsilk.com/wp-content/uploads/2022/11/doForms-logo-dark-blue.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xl-5 col-lg-4 d-lg-flex d-none">
                                                <div className="effect-design-line"></div>
                                            </div>
                                            <div className="col-xl-4 col-lg-5 col-6">
                                                <div className="case_studies_tabs_content_description">
                                                    <h3 className='text-xl lg:text-lg font-medium'>DoForms needed to implement a global rewards program.</h3>
                                                    <p className='mt-3'><span className='font-semibold text-xl lg:text-lg'>In 6 months,</span> we achieved:</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-20">
                                            <div className="col-6">
                                                <div className="case_studies_tab_content_counter">
                                                    <h1 className='text-7xl lg:text-8xl xl:text-9xl text-sky-500 font-semibold'>55 <sub>K</sub></h1>
                                                    <p className='lg:flex justify-center mt-5 text-xl font-semibold'>active members <br /> inside the program</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="case_studies_tab_content_counter">
                                                    <h1 className='text-7xl lg:text-8xl xl:text-9xl text-sky-500 font-semibold'>13 <sub>%</sub></h1>
                                                    <p className='lg:flex justify-center mt-5 text-xl font-semibold'>active members <br /> inside the program</p>
                                                </div>
                                            </div>
                                            <div className="col-12 md:flex items-center mt-5">
                                                <div className="case-studies_tab_content_btn">
                                                    <button className='glowingButton'>
                                                        <span className='me-3'>EXPLORE ALL SERVICES</span>
                                                        <span>➤</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value="4" id='case_studies_tab_panal-fieldEdge'>
                                        <div className="effect case_studies_tab_panal_effect_img_four"></div>
                                        <div className="case_studies_tab_panal_effect_logo case_studies_tab_panal_effect_logo-miami"></div>
                                        <div className="row gy-5 flex items-center">
                                            <div className="col-lg-3 col-6">
                                                <div className="case_studies_tabs_content_logo">
                                                    <img src="https://www.digitalsilk.com/wp-content/uploads/2022/11/FieldEdge-logo-dark-blue.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xl-5 col-lg-4 d-lg-flex d-none">
                                                <div className="effect-design-line"></div>
                                            </div>
                                            <div className="col-xl-4 col-lg-5 col-6">
                                                <div className="case_studies_tabs_content_description">
                                                    <h3 className='text-xl lg:text-lg font-medium'>Miami needed to implement a global rewards program.</h3>
                                                    <p className='mt-3'><span className='font-semibold text-xl lg:text-lg'>In 6 months,</span> we achieved:</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-20">
                                            <div className="col-6">
                                                <div className="case_studies_tab_content_counter">
                                                    <h1 className='text-7xl lg:text-8xl xl:text-9xl text-sky-500 font-semibold'>39 <sub>K</sub></h1>
                                                    <p className='lg:flex justify-center mt-5 text-xl font-semibold'>active members <br /> inside the program</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="case_studies_tab_content_counter">
                                                    <h1 className='text-7xl lg:text-8xl xl:text-9xl text-sky-500 font-semibold'>77 <sub>%</sub></h1>
                                                    <p className='lg:flex justify-center mt-5 text-xl font-semibold'>active members <br /> inside the program</p>
                                                </div>
                                            </div>
                                            <div className="col-12 md:flex items-center mt-5">
                                                <div className="case-studies_tab_content_btn">
                                                    <button className='glowingButton'>
                                                        <span className='me-3'>EXPLORE ALL SERVICES</span>
                                                        <span>➤</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value="5" id='case_studies_tab_panal-miami'>
                                        <div className="effect case_studies_tab_panal_effect_img_five"></div>
                                        <div className="case_studies_tab_panal_effect_logo case_studies_tab_panal_effect_logo-miami"></div>
                                        <div className="row gy-5 flex items-center">
                                            <div className="col-lg-3 col-6">
                                                <div className="case_studies_tabs_content_logo">
                                                    <img src="https://www.digitalsilk.com/wp-content/uploads/2022/11/MCDS-logo-dark-blue.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xl-5 col-lg-4 d-lg-flex d-none">
                                                <div className="effect-design-line"></div>
                                            </div>
                                            <div className="col-xl-4 col-lg-5 col-6">
                                                <div className="case_studies_tabs_content_description">
                                                    <h3 className='text-xl lg:text-lg font-medium'>Miami needed to implement a global rewards program.</h3>
                                                    <p className='mt-3'><span className='font-semibold text-xl lg:text-lg'>In 6 months,</span> we achieved:</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-20">
                                            <div className="col-6">
                                                <div className="case_studies_tab_content_counter">
                                                    <h1 className='text-7xl lg:text-8xl xl:text-9xl text-sky-500 font-semibold'>40 <sub>K</sub></h1>
                                                    <p className='lg:flex justify-center mt-5 text-xl font-semibold'>active members <br /> inside the program</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="case_studies_tab_content_counter">
                                                    <h1 className='text-7xl lg:text-8xl xl:text-9xl text-sky-500 font-semibold'>56 <sub>%</sub></h1>
                                                    <p className='lg:flex justify-center mt-5 text-xl font-semibold'>active members <br /> inside the program</p>
                                                </div>
                                            </div>
                                            <div className="col-12 md:flex items-center mt-5">
                                                <div className="case-studies_tab_content_btn">
                                                    <button className='glowingButton'>
                                                        <span className='me-3'>EXPLORE ALL SERVICES</span>
                                                        <span>➤</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </div>
                            </div>
                        </div>
                    </TabContext>
                </div>

                {/* <div className="accordion_container lg:hidden block">
                    <div className="case_studies_accordion">
                        <Accordion className='mb-4'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <div className="case_studies_accordion_tag_line flex flex-col items-center justify-center">
                                    <img src="https://www.digitalsilk.com/wp-content/uploads/2022/07/bo-logo-dark.svg" alt="" />
                                    <h5 className='flex items-center justify-center mt-4'>
                                        <span>Click To View More</span>
                                        <MdArrowDropDownCircle className='mt-1 ms-2 text-xl' />
                                    </h5>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails className="case_studies_accordion_content bg-inherit mt-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='mb-4'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography component="span">Accordion 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='mb-4'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                <Typography component="span">Accordion Actions</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                            <AccordionActions>
                                <Button>Cancel</Button>
                                <Button>Agree</Button>
                            </AccordionActions>
                        </Accordion>
                    </div>
                </div> */}

            </section>
        </>
    )
}

export default HomeCaseStudies
