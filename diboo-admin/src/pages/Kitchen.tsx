import React from 'react'
import PageLayout from './layouts/PageLayout';
import ContentLayout from './layouts/ContentLayout';
import KitchenContainer from '../components/Menu/Kitchen';


const Kitchen : React.SFC = () => (
    <PageLayout>
       <ContentLayout>
           <KitchenContainer/>
       </ContentLayout>
    </PageLayout>
);


export default Kitchen;
