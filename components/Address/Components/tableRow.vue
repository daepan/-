<template>
	<div class="row__container"><!--row__containder 클래스부여-->
		<div
			:class="{'first-row': flag==='first', 'add-row': flag==='add'}"
			class="row__content"
			v-if="inputData.type==='person'"><!--만약 inputData.type가 person인 경우 :class를 부여-->
			<!-- index part -->
			<div
				class="row__content__index"
				v-if="index === 0">
				No.
			</div><!--class=row__content__index index===0인 경우 No.표현-->
			<div
				class="row__content__index"
				v-else>
				{{ index }}
			</div><!--index===0이 아닌경우 index 1부터 표현-->
			<!-- index part end -->

			<!-- content part -->
			<div
				v-if="flag==='default' || flag==='first'"
				class="row__content__name">
				{{ inputData.data.name }}
			</div><!--만약 flag가 defaul또는 first인 경우 inputData.data.name표현-->
			<div
				v-if="flag==='add'"
				class="row__content__name">
				<input type="text" v-model="name" placeholder="JEFF">
			</div><!--만약 flag가 add인 경우 input의 name 모델을 형성 -->

			<div
				v-if="flag==='default' || flag==='first'"
				class="row__content__email">
				{{ inputData.data.email }}
			</div><!--만약 flag가 defaul또는 first인 경우 inputData.data.name표현-->
			<div
				v-if="flag==='add'"
				class="row__content__email">
				<input type="text" v-model="email" placeholder="asdf@bcsdlab.com">
			</div><!--만약 flag가 add인 경우 input의 email 모델을 형성 -->


			<div
				v-if="flag==='default' || flag==='first'"
				class="row__content__gender">
				{{ inputData.data.gender }}
			</div><!--만약 flag가 defaul또는 first인 경우 inputData.data.gender표현-->
			<div
				v-if="flag==='add'"
				class="row__content__gender">
				<input type="text" v-model="gender" placeholder="gender">
			</div><!--만약 flag가 add인 경우 input의 gender 모델을 형성 -->


			<div
				v-if="flag==='default' || flag==='first'"
				class="row__content__title">
				{{ inputData.data.title }}
			</div><!--만약 flag가 defaul또는 first인 경우 inputData.data.title표현-->
			<div
				v-if="flag==='add'"
				class="row__content__title">
				<input type="text" v-model="title" placeholder="ADMIN">
			</div><!--만약 flag가 add인 경우 input의 title 모델을 형성 -->
			<!-- content part end -->


			<div
				v-if="flag==='default'"
				class="row__content__remove">
				<md-button
					@click="remove"
					class="md-raised md-accent row__content__remove--btn">
					REMOVE
				</md-button><!--remove 버튼, 만약 flag가 defalut인 경우 이 버튼을 형성-->
			</div><!--@click을 하게 된다면 method remove를 실행-->
			<div
				v-if="flag==='add'"
				class="row__content__add">
				<md-button
					@click="add"
					class="md-raised md-accent row__content__add--btn">
					ADD
				</md-button><!--ADD버튼. 만약 flag===add인 경우 이 버튼을 형성-->
			</div><!--class를 row__content__add 지정 @==v-on디렉티브를 통해 클릭시 method의 add를 실행-->

		</div>
	</div>
</template>

<script>
  export default {
    name: 'TableRow',//Tablerow 컴포넌트 형성
    props: {//props형성 (자식 컴포넌트)
      index: {
        default: 0,
				type: Number
			},//index 타입 넘버 default값 0으로 선언
      inputData: {//
        default: {
          type: '',
					data: null
				},
				type: Object
			},//inpuData default값 null로 선언, type은 객체로 선언
      flag: {
        default: "default",
				type: String
			}//flag default값 "default"로 선언 type은 문자열 
    },//props유효성 체크
    data: function () {//컴포넌트 데이터는 객체를 반환하는 함수
      return {
				name: "",
				email: "",
				gender: "",
				title: ""
      }//
    },
    methods: {
      remove: function() {
        this.$emit("removePerson", this.index);
			},//만약 REMOVE버튼이 눌렸을 경우 상위컴포넌트에 존재하는 method removePerson쪽으로 이동됨

		add: function() {
        this.$emit("addPerson", {
          	name: this.name,
			email: this.email,
			gender: this.gender,
			title: this.title
				})//add는 event emit을 통해 name, email, gender, title을 보내진다.
        this.name = ""
        this.email = ""
      	this.gender = ""
        this.title = ""
			}//
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.row__content {
		width: 100%;
		border: 1px #bebebe solid;
		margin-bottom: -1px;
		height: 40px;
		line-height: 40px;
		float:left;
		text-align: center;
		background: #fefefe;
	}

	.row__content:hover {
		background: #bebebe;
		font-weight: 700;
	}

	.first-row {
		background: #363636;
		color: white;
		font-weight: 700;
		text-align: center;
	}

	.first-row:hover {
		background: #363636;
	}

	.add-row {
		border: 1px solid #00bb00;
		margin-bottom: 1px;
	}

	.add-row:hover {
		background: white;
		font-weight: 400;
	}

	.row__content__index {
		float: left;
		width: 50px;
		border-right: 1px #bebebe solid;
	}

	.row__content__name, .row__content__name input {
		float: left;
		border-right: 1px #bebebe solid;
		width: 200px;
	}

	.row__content__email, .row__content__email input {
		float: left;
		border-right: 1px #bebebe solid;
		width: 250px;
	}

	.row__content__gender, .row__content__gender input {
		float:left;
		border-right: 1px #bebebe solid;
		width: 100px;
	}

	.row__content__title {
		float: left;
		width: calc(100% - 700px);
	}
	.row__content__title input{
		 float: left;
		 width: 360px;
	 }

	.row__content__remove--btn, .row__content__add--btn {
		height: 25px;
		margin: 0;
		padding: 0;
		line-height: 1.2;
		font-size: 13px;
		color: white;
		float: right;
		margin-right: 5px;
		margin-top: 5px;
	}

	.row__content__remove--btn {
		background: #bb0000;
	}

	.row__content__add--btn {
		background: #00bb00;
	}

	input {
		border : none;
		height: 38px;
		font-size: 15px;
		padding-left: 10px;
	}

	input:focus {
		outline: none;
	}
</style>
