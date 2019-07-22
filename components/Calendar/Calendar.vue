<template>
	<div class="hello">
		<v-header title="CALENDAR"></v-header><!--v-header 컴포넌트 설정 -->
	>
		<v-calendar
			v-model="year"
			:activeDates.sync="activeDates"
			@toggleDate="toggleDate"
			prefixClass="selected__date"
			:activeClass="activeClass"
		></v-calendar><!--v-model 유형은 String|Number activeDate.sync는 기본값은 배열이며 객체배열이다.  -->
	</div><!--prefix는 selected__date로 사용자 정의 CSS 래퍼 클래스명으로 이용할 수 있다.-->
</template><!--toggleDate를 통해 날짜를 선택과 취소가 가능토록한다. method를 확인함으로 알 수 있음-->

<script>
  import Header from '../SharedComponent/Header';//로컬 지역 컴포넌트 추가
  import YearCalendar from 'vue-material-year-calendar';//vue-material-year-calendar 추가

  export default {
    name: 'Calendar',
    components: {
      'v-header': Header,
      'v-calendar':  YearCalendar
    },//컴포넌트 등록
    data () {
      return {
        year: 2019,
        activeDates: [
          { date: '2019-02-13' },
          { date: '2019-02-14', className: 'red' },
          { date: '2019-02-15', className: 'blue' },
          { date: '2019-02-16', className: 'your_customized_classname' }
        ],//classname을 통해 style을 적용 시킬 수 있다. 스타일이 추가가 안되서 딱히 다른 점은 없다.
        activeClass: '',//토글할 클래스의 이름이다. 
      }
    },
    methods: {
      toggleDate (dateInfo) {
        console.log(dateInfo)  // { date: '2010-10-23', selected: true } 
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.selected__date {
		background-color: #0aa;
		color: white;
	}
</style>
