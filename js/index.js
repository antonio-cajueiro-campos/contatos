$(document).ready(function(){
	$('.tabs').tabs();
	codigo = 0;

	//seu codigo aqui

$("#btn-add").on("click", function(){
	let tel;
	let nome = $("#addNome").val();
	let telefone = $("#addTelefone").val();
	
	
	let l = $("table tbody tr").length;
	if (nome=="") {
		alert("Campos Vazios");
	}else if(telefone==""){
		alert("Campos Vazios");
		//$("#addTelefone").addClass("red");
	}else if(checarTelefone($("#addTelefone").val()) == false){
		$("#addTelefone").addClass("red");
	}else{
		$("table tbody").append('<tr id="'+l+'"><td>'+l+'</td><td class="nome">'+nome+'</td><td>'+telefone+'</td><td><a href="#!" class="edit"><i class="material-icons">edit</i></a></td><td><a href="#" class="del" id="'+l+'"><i class="material-icons">delete_forever</i></a></td></tr>	');
	    $("#addNome").val(" ");
	    $("#addTelefone").val(" ");		
	    $("#addTelefone").removeClass("red");
	}
	
		
	
		
});



$("#btn-up").on("click", function(){
	let cod = $("#upId").val();
	let nomeup = $("#upNome").val();
	let telefoneup = $("#upTelefone").val();

	if(nomeup=="") {
		alert("Campos Vazios");
	}else if(telefoneup==""){
		alert("Campos Vazios");
	}else if(cod==""){
		alert("Campos Vazios");
	}else if(checarTelefone($("#upTelefone").val()) == false){
		$("#upTelefone").addClass("red");
	}else{
		$('table tbody tr').each(function(index, element) {
		//console.log(index + ' : ' + element.innerHTML);
		if (cod==index) {
			element.remove();
			$("table tbody").append('<tr id="'+cod+'"><td>'+cod+'</td><td class="nome">'+nomeup+'</td><td>'+telefoneup+'</td><td><a href="#!" class="edit"><i class="material-icons">edit</i></a></td><td><a href="#" class="del" id="'+cod+'"><i class="material-icons">delete_forever</i></a></td></tr>	');
	   		$("#upId").val(" ");
	   		$("#upNome").val(" ");
			$("#upTelefone").val(" ");
		}
	});
	}

$("#upId").prop('disabled', false);
	
	


});




$("table tbody").on("click", "tr a.del", function(){
	let id = $(this).attr("id");
	$("tr#"+id+"").remove();
});

$("table tbody").on("click", "tr .edit", function(){
	
	let editTel = $(this).parent().prev().text();
	let nomeTel = $(this).parent().prev().prev().text();
	let codTel = $(this).parent().prev().prev().prev().text();
	$("#upId").val(codTel);
	$("#upId").prop('disabled', true);
	$("#upNome").val(nomeTel);
	$("#upTelefone").val(editTel);
});


$("#btn-find").on("click", function(){
	let fnNome = $("#findNome").val();
	$(".nome").each(function(index, element){
		if (element.innerHTML.includes(fnNome)) {
			//alert("dljkdal");
		}else{
			$(this).parent().addClass("hide");
		}
	});
	
	
});



$("#btn-show-all").on("click", function(){
	$("tr").each(function(index, element){
		$(this).removeClass("hide");
	});
});

	


});