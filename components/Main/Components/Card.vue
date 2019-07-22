<template>
	<div>
		<md-card
			class="md-accent"
			md-with-hover>
			<md-ripple>
				<div @click="clickCard(link)"><!--클릭시 clickCard(link)발동-->
					<md-card-media>
						<img :src="imgUrl" :alt="title">
					</md-card-media><!--이미지-->

					<md-card-header>
						<div class="md-title">{{ title }}</div>
						<div class="md-subhead">{{ desc }}</div>
					</md-card-header><!--이미지 밑 설명란-->
				</div>
			</md-ripple>
		</md-card>
	</div>
</template>

<script>
  export default {
    name: 'Card',
		props: {
      		title: {
       		 	default: "",
       			type: String
      	},//title에 대한 props 유효성, type은 문자열 default는 ""이다.
			link: {
       			default: "",
      			type: String
		},//link에 대한 props 유효성, type은 문자열 default는 ""이다.
     		imgUrl: {
        		default: "",
       			type: String
      	},//imgUrl에 대한 props 유효성, type은 문자열 default는 ""이다.
			desc: {
        		default: "",
				type: String
		}//desc에 대한 props 유효성, type은 문자열 default는 ""이다.
    },//props 유효성 검사
    data: function () {
      return {
        msg: 'Card'
      }
    },
		methods: {
			clickCard: function(link) {
			  this.$router.push(link)
			}//router링크 이용
		}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.md-card {
		width: 100%;
		margin: 4px;
		vertical-align: top;
		display: block;
		background: white;
	}

	.md-card img {
		height: 200px;
		width: auto;
	}
</style>
