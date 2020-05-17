import React from 'react'
import PageLayout from './layouts/PageLayout';
import ContentLayout from './layouts/ContentLayout';
import CommissionSettingsContainer from '../components/Settings/Commission';


const SiteSettings : React.SFC = () => (
    <PageLayout>
       <ContentLayout>
           <CommissionSettingsContainer />
       </ContentLayout>
    </PageLayout>
);


export default SiteSettings;
