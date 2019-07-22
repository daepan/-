<template>
	<div>
		<v-header title="Vue.js Example Code"></v-header><!--v-header컴포넌트 확인 중앙제목-->
		<div class="md-layout md-gutter"><!--클래스 지정:style적용을 위해 + 레이아웃 설정-->
			<div
				class="md-layout-item"
				v-for="data in mainData"
				:key="data.id"><!--클래스 mod-layout-item지정 v-for를 통해 mainData란 이름의 데이터를 배열한다. key값은 islent문법상 필수적으로 존재해야한다.-->
				<card
					:title="data.title"
					:desc="data.desc"
					:link="data.link"
					:imgUrl="data.imgUrl">
				</card><!--card컴포넌트 확인, card에 있는 컴포넌트 속성data에 내용을 연결한다.-->
			</div>
		</div>
	</div>
</template>

<script>
	import Card from './Components/Card';//로컬 하위 컴포넌트 파일 ./Components/Card 불러오기
	import Header from '../SharedComponent/Header';//로컬 하위 컴포넌트 파일 ../SharedComponent/Header 불러오기
	
  export default {
    name: 'Main',//이름설정, 
		components: {
      		'card': Card,
			'v-header': Header
		},//컴포넌트 등록
    data: function () {
      return {
        mainData: [
			{
				title: "ADDRESS",
				link: "/address",
				imgUrl: "https://ak9.picdn.net/shutterstock/videos/14941789/thumb/1.jpg?i10cx3dimg.resize(height:160)",
				desc: "Just Local Address"
			},//Address창으로 옴겨가는 링크, 제목, 이미지링크, 설명이 있다.
          {
            title: "CALENDAR ",
            link: "/calendar",
            imgUrl: "https://media.gettyimages.com/photos/calendar-page-background-picture-id643126222?b=1&k=6&m=643126222&s=612x612&w=0&h=2NzlkCzSQ0foeHG_tjaf2vA4J3tgUaCSK28yTMMmYR0=",
            desc: "Just Calendar"
          },//Calendar창으로 옴겨가는 링크, 제목, 이미지링크, 설명이 있다.
          {
            title: "TEST",
            link: "/test",
            imgUrl: "http://www.w3.org/Graphics/PNG/text2.png",
			desc: "JUST TEST"
          }//Test창으로 옴겨가는 링크, 제목, 이미지링크, 설명이 있다.
				]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.md-layout {
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		width: 1000px;
	}
</style><!--md-layout에 대한 CSS-->
