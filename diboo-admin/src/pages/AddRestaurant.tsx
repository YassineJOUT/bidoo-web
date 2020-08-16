import React from 'react'
import PageLayout from './layouts/PageLayout';
import ContentLayout from './layouts/ContentLayout';
import AddRestaurantContainer from '../components/Restaurants/Add';
import Title from '../components/Shared/ContentTitle';
import BreadCrumb from '../components/Shared/BreadCrumb';


const AddRestaurant : React.SFC = () => (
    <PageLayout>
       <ContentLayout>
            <div className="page-title-box">
              <div className="row">
                    <Title title="Add restaurant">
                      <BreadCrumb title={"Website Settings"} url="/home" />
                    </Title>
              </div>
          </div>
         <AddRestaurantContainer editValues=''/> 
       </ContentLayout>
    </PageLayout>
);


export default AddRestaurant;
