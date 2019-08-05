import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: localStorage.getItem('loginToken') ? localStorage.getItem('loginToken') : '',
    themeColor: localStorage.getItem('themeColor') ? JSON.parse(localStorage.getItem('themeColor')) : 'themea',
    zIndex:99,
    chooseTabName:'',//任务栏右键被选中的tab
    fixTabs:localStorage.getItem('fixTabs')?JSON.parse(localStorage.getItem('fixTabs')) : {},//任务栏固定的tab
    desktopImg: localStorage.getItem('desktopImg')? localStorage.getItem('desktopImg'):'',//桌面壁纸
    iconSize:localStorage.getItem('iconSize')?localStorage.getItem('iconSize'):'small',//桌面applist的图标大小 value => small normal big 
  },
  mutations: {
    changeThemeColor( state, curColor) {//切换主题
      this.state.themeColor = curColor;
      localStorage.setItem('themeColor', JSON.stringify(curColor));
    },
    addzIndex( state ){//增加被点击层的zindex
      this.state.zIndex++;
    },
    getTabName( state,name ){//获取任务栏右键被选中的tab
      this.state.chooseTabName = name;
    },
    addFixTabs( state ){//增加任务栏固定tab项
      this.state.fixTabs = {...this.state.fixTabs,...this.state.chooseTabName};
    },
    reduceFixTabs( state,tab ){//取消任务栏固定项
      let _tab = JSON.parse(tab)
      delete this.state.fixTabs[Object.keys(_tab)];
      localStorage.setItem('fixTabs',JSON.stringify(this.state.fixTabs))
    },
    changeDesktopImg ( state, curImg) {//改变桌面壁纸
      this.state.desktopImg = curImg;
      localStorage.setItem('desktopImg', curImg);
    },
    changeIconSize( state,size ){//修改图标大小
      this.state.iconSize = size;
    },
  },
  actions: {},
  getters:{},
});
