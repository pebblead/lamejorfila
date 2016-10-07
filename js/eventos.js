var empiezaApp = function()
{
	var Entrar = function()
	{	
		alert("ENTRA");
	}

	var Altas = function(){
		alert("ALTAS");
	}

	var muestralogin= function(){
		$("#sectbl").hide("slow");
		$(".entradaUsuario").show("slow");
	}
	var muestratabla=function(){
		$(".entradaUsuario").hide("slow");
		$("#sectbl").show("slow");
	}

	//Eventos del usuario.
	$("#btnEntrar").on("click",Entrar);
	$("#btnRegistrar").on("click",Altas);
	$("#btnlogin").on("click",muestralogin);
	$("#btninicio").on("click",muestratabla);

	
}
//Inicializar JQuery
$(document).on("ready",empiezaApp);










































