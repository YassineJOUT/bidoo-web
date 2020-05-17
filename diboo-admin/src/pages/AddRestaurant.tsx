import React from 'react'
import PageLayout from './layouts/PageLayout';
import ContentLayout from './layouts/ContentLayout';
import AddRestaurantContainer from '../components/Restaurants/Add';


const AddRestaurant : React.SFC = () => (
    <PageLayout>
       <ContentLayout>
           <AddRestaurantContainer />
       </ContentLayout>
    </PageLayout>
);


export default AddRestaurant;
