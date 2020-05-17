import React from 'react'
import PageLayout from './layouts/PageLayout';
import ContentLayout from './layouts/ContentLayout';
import MenuCategoriesContainer from '../components/Menu/Categories';


const Categories : React.SFC = () => (
    <PageLayout>
       <ContentLayout>
           <MenuCategoriesContainer/>
       </ContentLayout>
    </PageLayout>
);


export default Categories;
