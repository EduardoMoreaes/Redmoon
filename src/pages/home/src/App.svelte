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

		function getShader(ctx, id){
			var shader_script, the_source, current_child, shader;

			shader_script = document.getElementById(id);
			
			if(!shader_script){
				return null;
			}

			the_source = '';
			current_child = shader_script.firstChild;

			while(current_child){
				if(current_child.nodeType == current_child.TEXT_NODE){
					the_source += current_child.textContext;
				}

				current_child = current_child.nextSibling;
			}

			if(shader_script == "x-shader/x-fragment"){
				shader = ctx.createShader(ctx.FRAGMENT_SHADER);
			} else if(shader_script.type == "x-shader/x-vertex"){
				shader = ctx.createShader(ctx.VERTEX_SHADER);
			} else {
				return null;
			}

			ctx.shaderSource(shader, the_source);

			ctx.compileShader(shader);

			if(!ctx.getShaderParameter(shader, ctx.COMPILE_STATUS)){
				alert("um erro ocorreu ao compilar os shaders" + ctx.getShaderInfoLog(shader))
				return null;
			}

			return shader;
		}

		var horiz_aspect = 480.0/640.0;

		function initBuffer(){
			square_vertice_buffer = ctx.createBuffer();
			ctx.bindBuffer(ctx.ARRAY_BUFFER, square_vertice_buffer);

			var Vertices = [
				1.0, 1.0, 0.0,
				-1.0, 1.0, 0.0,
				1.0, -1.0, 0.0,
				-1.0, -1.0, 0.0
			];

			ctx.bufferData(ctx.ARRAY_BUFFER, new Float32Array(Vertices), ctx.STATIC_DRAW);
		}
	</script>
	<script id="shader-fs" type="x-shader/x-fragment">
		void main(void){
			ctx_fragColor = vec4(1.0, 1.0, 1.0, 1.0);
		}
	</script>
	<script id="shader-vs" type="x-shader/x-vertex">
		attribute vec3 aVertexPosition

		uniform mat4 uMVMatrix;
		uniform mat4 uPMatrix;

		void main(void){
			ctx_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
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
