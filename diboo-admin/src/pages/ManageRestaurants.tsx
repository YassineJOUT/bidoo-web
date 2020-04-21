import React from 'react'
import PageLayout from './layouts/PageLayout';
import ContentLayout from './layouts/ContentLayout';
import ManageRestaurantsContainer from '../components/Restaurants/Manage';


const ManageRestaurants : React.SFC = () => (
    <PageLayout>
       <ContentLayout>
           <ManageRestaurantsContainer/>
       </ContentLayout>
    </PageLayout>
);


export default ManageRestaurants;
