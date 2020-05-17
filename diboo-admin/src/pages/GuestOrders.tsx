import React from 'react'
import PageLayout from './layouts/PageLayout';
import ContentLayout from './layouts/ContentLayout';
import GuestOrdersContainer from '../components/Orders/Guest';


const GuestOrders : React.SFC = () => (
    <PageLayout>
       <ContentLayout>
           <GuestOrdersContainer/>
       </ContentLayout>
    </PageLayout>
);


export default GuestOrders;
