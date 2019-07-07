import axios from 'axios'
var aioss=axios({
    url:'http://react.zbztb.cn/site/goods/gettopdata/goods',
})
export const getGoods = () => aioss;