<script>
	import Cookies  from "js-cookie";
	export let user;


</script>

<main>
		<canvas id="cnv" class="given" width="500" height="500"></canvas>
	<div id="number"></div>
	<script  type="module" defer>

		main();

		function main(){
			const canvas = document.querySelector("#cnv");
			const ctx = canvas.getContext("webgl");
	
			if(!ctx){
				alert("Desculpe! Mas seu navegador não possuí os recursos suficientes, ou a sua máquina não suporta o conteúdo");
				 return;
			}
			
			ctx.clearColor(0.0, 0.0, 0.0, 1.0);
			ctx.clear(ctx.COLOR_BUFFER_BIT);
		}

		function initShaders(){
			var fragment_shader = getShader(ctx, "shader-fs");
			var vertex_shader = getShader(ctx, "shader-vs");

			shader_program = ctx.createProgram();
			ctx.attachShader(shader_program, vertex_shader);
			ctx.attachShader(shader_program, fragment_shader);
			ctx.linkProgram(shader_program);

			if(!ctx.getProgramParamater(shader_program, ctx.LINK_STATUS)){
				alert("Error: initShaders");
			}
			
			ctx.useProgram(shader_program);

			vertex_position_attribute = ctx.getAttribLocation(shader_program, "aVertexPosition");
			
			ctx.enableVertexAttribArray(vertex_position_attribute);
		}
		

	</script>
</main>

<style>
	main {
		text-align: center;
		padding: 0px;
		margin: 0;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(to top, black, green);
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>
