import React from 'react'
import PageLayout from './layouts/PageLayout';
import ContentLayout from './layouts/ContentLayout';
import PaymentsContainer from '../components/Customer/Payment';


const Payments : React.SFC = () => (
    <PageLayout>
       <ContentLayout>
           <PaymentsContainer />
       </ContentLayout>
    </PageLayout>
);


export default Payments;
