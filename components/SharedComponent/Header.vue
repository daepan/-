<template>
	<div class="header">
		<div class="md-display-1 title">{{ title }}</div>
		<div class="logo">
			<img src="https://www.stickpng.com/assets/images/58482acecef1014c0b5e4a1e.png" alt="">
		</div>
	</div>
</template>

<script>
  export default {
    name: 'Header',//이름 설정 Header
    props: {
      title: {
        default: "",
        type: String
      }//props 유효성 검증
    },
    data: function () {
      return {
      }
    }
  }//컴포넌트 메서드 그룹
</script>

<!--scoped를 통해 style 범위 제한--><style scoped>
	.header {
		text-align: center;
		width: 100%;
		margin-top: 100px;
		height: 100px;
		margin-bottom: 50px;
	}

	.logo {
		opacity: 0.2;
		margin-left: auto;
		margin-right: auto;
		width: 100px;
		position: relative;
		bottom: 100px;
	}

	.title {
		margin-bottom: 40px;
		font-weight: 700;
	}
</style>
