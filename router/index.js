import Vue from 'vue'//뷰 불러오기
import Router from 'vue-router'//뷰 라우터 불러오기

import Main from '@/components/Main/Main'//로컬 영역 하위 컴포넌트 불러오기
import Address from '@/components/Address/Address'//로컬 영역 하위 컴포넌트 불러오기
import Calendar from '@/components/Calendar/Calendar'//로컬 영역 하위 컴포넌트 불러오기

Vue.use(Router)//Vuerouter 사용 

export default new Router({
  mode: 'history',//히스토리 모드 사용,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },//main화면 path main 컴포넌트로 실행
    {
      path: '/address',
      name: 'Address',
      component: Address
    },//Address화면으로 path /address 이동 Address 컴포넌트 실행
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    }//Calendar화면으로  path /calendar 이동 Calendar 컴포넌트 실행
   
 
  ]//라우트 설정
})
