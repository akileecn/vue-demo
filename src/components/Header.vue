<template>
<div class="header">
		<div class="container"  >
			<div class="header_top">
				<div class="logo">
					<a href="/index"><img src="images/logo.jpg"/></a>
				</div>
				<div class="menu">					
					<ul class="nav" id="nav">
						<li><a href="/index"/>">首页</a></li>
						<li><a href="/job/list?recruitType=campus"/>">校园招聘</a></li>
						<li><a href="/job/list?recruitType=society"/>">社会招聘</a></li>
						<li><a href="/job/list?recruitType=trainee"/>">实习生招聘</a></li>
						<li><a href="/about"/>">认识瑞丰</a></li>								
					</ul>
					<script type="text/javascript" src="js/responsive-nav.js"/></script>
				</div>							
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

</style>
