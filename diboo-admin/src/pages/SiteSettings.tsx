import React from 'react'
import PageLayout from './layouts/PageLayout';
import ContentLayout from './layouts/ContentLayout';
import SiteSettingContainer from '../components/Settings/Site';


const SiteSettings : React.SFC = () => (
    <PageLayout>
       <ContentLayout>
           <SiteSettingContainer />
       </ContentLayout>
    </PageLayout>
);


export default SiteSettings;
