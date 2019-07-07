import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import {getGoods} from '../api/index'

class Home extends React.Component{
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
      }
    componentDidMount(){
        getGoods()
        .then(res=>{
            console.log(res)
            if(res.data.status===0){
               this.setState({data:res.data.message.sliderlist})
            }
        })

      
    }
    render(){
        return(
            <WingBlank>
            <Carousel
              autoplay={true}
              infinite
              autoplayInterval={3000}
             
            >
              {this.state.data.map(val => (
                    <a
                    key={val.id}
                    href="http://www.alipay.com"
                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                  >
                  <img
                  key={val}
                    src={val.img_url}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                  </a>
             
              ))}
            </Carousel>
          </WingBlank>
        )
    }
}

export default Home