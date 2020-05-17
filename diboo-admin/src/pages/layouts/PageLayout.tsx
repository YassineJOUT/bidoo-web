
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
    <div>
        <TopBar fireCollapse={
          ()=>{
            this.setCollaps()
          }
        }/>
        <SideBar  collapse={
          this.state.collapse
        }/>
        { this.props.children }
    </div>
  )
}
    
}
export default PageLayout;
