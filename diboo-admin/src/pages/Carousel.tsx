import React from 'react'
import PageLayout from './layouts/PageLayout';
import ContentLayout from './layouts/ContentLayout';
import CarouselContainer from '../components/Carousel';


const Carousel : React.SFC = () => (
    <PageLayout>
       <ContentLayout>
           <CarouselContainer/>
       </ContentLayout>
    </PageLayout>
);


export default Carousel;
