import React from 'react'
import { TabBar } from 'antd-mobile';



class MyLayout extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedTab: 'redTab',
        hidden: false,
      };
    }
  
  
  
    render() {
        
      return (
        <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
          >
            <TabBar.Item
              title="Home"
              key="Home"
              icon={<span className="iconfont icon-home" />}
              selectedIcon={<span  className="iconfont icon-home" />}
             
              selected={this.state.selectedTab === 'blueTab'}
              
              onPress={() => {
                  
                this.setState({
                  selectedTab: 'blueTab',
                });
                this.props.history.push('/Home')
              }}
              data-seed="logId"
            >
              {this.props.children}
            </TabBar.Item>
            <TabBar.Item
              icon={<span className='iconfont icon-gouwuche'/>}
              selectedIcon={
               <div className='iconfont icon-gouwuche'></div>
              }
              title="Cart"
              key="Cart"
              badge={'1'}
              selected={this.state.selectedTab === 'redTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'redTab',
                });
                this.props.history.push('/Cart')
              }}
              data-seed="logId1"
            >
              {this.props.children}
            </TabBar.Item>
            <TabBar.Item
              icon={
              <span className='iconfont icon-weibiaoti2fuzhi12'></span>
              }
              selectedIcon={
                <span className='iconfont icon-weibiaoti2fuzhi12'></span>
              }
              title="Mine"
              key="Mine"
              dot
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'greenTab',
                });
                this.props.history.push('/Mine')
              }}
            >
              {this.props.children}
            </TabBar.Item>
          
          </TabBar>
        </div>
      );
    }
  }

  export default MyLayout