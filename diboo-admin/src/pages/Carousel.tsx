import React from "react";
import PageLayout from "./layouts/PageLayout";
import ContentLayout from "./layouts/ContentLayout";
import CarouselContainer from "../components/Carousel";
import YesNoModal from "../components/Shared/ConfirmModal";

const Carousel: React.FunctionComponent = () => (
  <PageLayout>
    <ContentLayout>
      <CarouselContainer />
    </ContentLayout>
  </PageLayout>
);

export default Carousel;
