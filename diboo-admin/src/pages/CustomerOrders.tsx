import React from 'react'
import PageLayout from './layouts/PageLayout';
import ContentLayout from './layouts/ContentLayout';
import CustomerOrdersContainer from '../components/Orders/Customer';


const CustomerOrders : React.SFC = () => (
    <PageLayout>
       <ContentLayout>
           <CustomerOrdersContainer/>
       </ContentLayout>
    </PageLayout>
);


export default CustomerOrders;
