import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import "./homeCaseStudies.css";

const HomeCaseStudies = () => {

    // State Variables
    const [value, setValue] = useState('1');

    // Changing Tabs
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <section id="case_studies" className='case_studies py-32'>
                <div className="container">
                    <TabContext value={value}>
                        <div className="row">
                            <div className="col-lg-3 case_studies_tabs">
                                <div className="case_studies_tabs_list">
                                    <TabList onChange={handleChange} aria-label="lab API tabs example" orientation="vertical">
                                        <Tab className='mt-5' label={<img src="https://www.digitalsilk.com/wp-content/uploads/2022/07/hp-logo.svg" />} value="1" />
                                        <Tab className='mt-5' label={<img src="https://www.digitalsilk.com/wp-content/uploads/2022/07/xerox-logo.svg" />} value="2" />
                                        <Tab className='mt-5' label={<img src="https://www.digitalsilk.com/wp-content/uploads/2022/11/doForms-logo-blue.svg" />} value="3" />
                                        <Tab className='mt-5' label={<img src="https://www.digitalsilk.com/wp-content/uploads/2022/11/FieldEdge-logo-blue.svg" />} value="4" />
                                        <Tab className='mt-5' label={<img src="https://www.digitalsilk.com/wp-content/uploads/2022/11/MCDS-logo-blue.svg" />} value="5" />
                                    </TabList>
                                </div>
                            </div>
                            <div className="col-lg-9 case_studies_tabs_content">
                                <div className="case_studies_tabs_content_tab_panal bg-white">
                                    <TabPanel value="1">
                                        <div className="effect case_studies_tab_panal_effect_img_one"></div>
                                        Item One
                                    </TabPanel>
                                    <TabPanel value="2">
                                        <div className="effect case_studies_tab_panal_effect_img_two"></div>
                                        Item Two
                                    </TabPanel>
                                    <TabPanel value="3">
                                        <div className="effect case_studies_tab_panal_effect_img_three"></div>
                                        Item Three
                                    </TabPanel>
                                    <TabPanel value="4">
                                        <div className="effect case_studies_tab_panal_effect_img_four"></div>
                                        Item Four
                                    </TabPanel>
                                    <TabPanel value="5">
                                        <div className="effect case_studies_tab_panal_effect_img_five"></div>
                                        Item Five
                                    </TabPanel>
                                </div>
                            </div>
                        </div>
                    </TabContext>
                </div>
            </section>
        </>
    )
}

export default HomeCaseStudies
