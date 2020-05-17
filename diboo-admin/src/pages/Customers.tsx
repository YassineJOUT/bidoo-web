import React from 'react'
import PageLayout from './layouts/PageLayout';
import ContentLayout from './layouts/ContentLayout';
import CustomersContainer from '../components/Customer';


const Customers : React.SFC = () => (
    <PageLayout>
       <ContentLayout>
           <CustomersContainer/>
       </ContentLayout>
    </PageLayout>
);


export default Customers;
