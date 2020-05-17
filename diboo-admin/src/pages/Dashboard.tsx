import React from 'react'
import PageLayout from './layouts/PageLayout';
import ContentLayout from './layouts/ContentLayout';
import DashboardContainer from '../components/Dashboard';


const Dashboard : React.SFC = () => (
    <PageLayout>
       <ContentLayout>
           <DashboardContainer/>
       </ContentLayout>
    </PageLayout>
);


export default Dashboard;
