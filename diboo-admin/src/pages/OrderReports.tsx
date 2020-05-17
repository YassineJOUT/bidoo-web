import React from 'react'
import PageLayout from './layouts/PageLayout';
import ContentLayout from './layouts/ContentLayout';
import OrderReportsContainer from '../components/Restaurants/OrderReport';


const OrderReports : React.SFC = () => (
    <PageLayout>
       <ContentLayout>
           <OrderReportsContainer />
       </ContentLayout>
    </PageLayout>
);


export default OrderReports;
