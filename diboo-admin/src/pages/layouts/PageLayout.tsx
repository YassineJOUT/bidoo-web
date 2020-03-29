
import React, { ReactNode } from 'react';
import SideBar from '../../components/Shared/SideBar';
import TopBar from '../../components/Shared/TopBar';

type Props = {
  children: ReactNode
}

const PageLayout: React.SFC<Props> = ({ children }) => (
    <div>
        <TopBar />
        <SideBar />
        { children }
    </div>
);

export default PageLayout;
