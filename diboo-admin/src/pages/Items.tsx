import React from 'react'
import PageLayout from './layouts/PageLayout';
import ContentLayout from './layouts/ContentLayout';
import ItemsContainer from '../components/Menu/Items';


const Items : React.SFC = () => (
    <PageLayout>
       <ContentLayout>
           <ItemsContainer/>
       </ContentLayout>
    </PageLayout>
);


export default Items;
