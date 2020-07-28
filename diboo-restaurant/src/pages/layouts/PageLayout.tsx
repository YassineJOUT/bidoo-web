
import React, { ReactNode } from 'react';
import SideBar from '../../components/Shared/SideBar';
import TopBar from '../../components/Shared/TopBar';


type Props = {
  children: ReactNode
}

class PageLayout extends React.Component<Props>  {
  state = {
		collapse: false
	};

setCollaps = () => {
  this.setState(
    {
      collapse: !this.state.collapse
    }
  )
}
render = () =>{
  
  return (
    <div className="top-level">
        <TopBar />
        <SideBar  />
        { this.props.children }
    </div>
  )
}
    
}
export default PageLayout;
