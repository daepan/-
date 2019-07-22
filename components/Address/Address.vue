<template>
	<div>
		<v-header title="ADDRESS"></v-header><!--중앙 제목-->
		<div class="md-layout md-gutter"><!--레이아웃 중앙정렬-->
			<div class="md-layout-item"><!---->
				<div class="table__container"><!--table__container 지정-->
					<div class="table__header"><!--table__header (소제목)-->
						<h3>My Address</h3>
					</div>

					<div class="table__content"><!--테이블 내용-->
						<tableRow
							flag="first"
							:index="0"
							:input-data="{ type:'person', data:rowTitle }">
						</tableRow><!--flag=first로 지정, index가 0일 경우 type person에서의 rowTitle의 data를 바인드-->

						<div v-for="(person, index) in people" :key="person.id">
							<tableRow
								@removePerson="removePerson"
								:index="index+1"
								:input-data="{ type:'person', data:person }"></tableRow>
						</div><!--@removePerson은 하위 컴포넌트에서 removePerson을 수신한다. 컴포넌트의 index와 input-data type속성개체를 바인딩 한다. index+1로 index값을 시작한다. -->

						<tableRow
							@addPerson="addPerson"
							flag="add"
							:index="people.length + 1"
							:input-data="{ type:'person', data:null }">
						</tableRow><!--입력란:@addperson은 하위 컴포넌트에서 addPerson을 수신한다. flag는 add로 선언 index의 값은 people.legth+1이 된다.-->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import TableRow from './Components/tableRow';//로컬 영역 컴포넌트 선언 ./Components/tableRow
import Header from '../SharedComponent/Header';//로컬 영역 컴포넌트 선언 ../SharedComponent/Header

  export default {
    name: 'Address',//이름 설정
		components: {
			'tableRow': TableRow,
      		'v-header': Header
		},//컴포넌트 등록
    data: function () {
      return {
        selected: [],//
				rowTitle: {
          			name: "NAME",
					email: "EMAIL",
					gender: "GENDER",
					title: "MEMO"
				},//rowtitle의 값을 지정
        people: [
          {
            name: 'Shawna Dubbin',
            email: 'sdubbin0@geocities.com',
            gender: 'Male',
            title: 'Assistant Media Planner'
          },
          {
            name: 'Odette Demageard',
            email: 'odemageard1@spotify.com',
            gender: 'Female',
            title: 'Account Coordinator'
          },
          {
            name: 'Lonnie Izkovitz',
            email: 'lizkovitz3@youtu.be',
            gender: 'Female',
            title: 'Operator'
          },
          {
            name: 'Thatcher Stave',
            email: 'tstave4@reference.com',
            gender: 'Male',
            title: 'Software Test Engineer III'
          },
          {
            name: 'Clarinda Marieton',
            email: 'cmarietonh@theatlantic.com',
            gender: 'Female',
            title: 'Paralegal'
          }
        ]
      }
    },
    methods: {
      removePerson: function(index) {
        this.people.splice(index-1, 1)
			},// splice(start(배열을 변경을 시작할 인덱스),delete-count(배열에서 제거할 요소의 수)) 

		addPerson: function(data) {
			let values = Object.values(data);//values라는 변수를 Object.values(data)로 지정. data객체의 속성값으로 지정한다는 것이다.

			for(let i=0; i<values.length; i++) {
				if(values[i] === "") {
				    alert("빈값을 입력하실 수는 없습니다.")
				    return;
					}
				}//addPerson은 ADD의 입력을 받을 때 빈칸이 존재할 경우 alert를 통해 빈칸입력을 막는다.
//for문에 넣은 이유는 values로 지정된 data객체의 속성값이 하나가 아니기 때문에 다 검사하여야 한다.
        this.people.push(data)//data people에 data를 push한다.
			}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.md-table + .md-table {

	}

	.md-layout {
		margin-left: auto;
		margin-right: auto;
	}

	.md-title {
		text-align: center;
	}

</style>
