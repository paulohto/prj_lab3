/* -- ### ABA EDITA DELETAR ### -- */

/*---------------------------------------------------------------------------------
-------------------------------  CATEGORIA  ---------------------------------------
-----------------------------------------------------------------------------------*/
function buscarCtg(){
    var ctg = document.getElementById("ctg");
    var select = ctg.options[ctg.selectedIndex];

    var edtctg = document.getElementById("edtctg");
    var delctg = document.getElementById("delctg");

    var ctg_encontrada = select.value;
    var input = document.querySelector("#edit-ctg");    

    if (select.value != 0 && (edtctg.checked == true || delctg.checked == true) ){
        
        document.getElementById("infoEditCat").innerHTML = " ";
        document.querySelector("[name='edit-ctg']").value = ctg_encontrada;
            if(edtctg.checked == true){
                input.disabled = false;
            } else {
               input.disabled = true;
            }
          
    }
    else {
        if (select.value == 0) {
        document.querySelector("[name='edit-ctg']").value = " ";
        }
        document.getElementById("infoEditCat").style.color = "red";
        document.getElementById("infoEditCat").innerHTML = "*Itens obrigatórios";
    }
}

function actionCtg(){
     if (delctg.checked == true) {
        var x = document.getElementById("ctg");
        x.remove(x.selectedIndex);
    }
    else if (edtctg.checked == true) {
        var z = document.getElementById("edit-ctg");
        document.getElementById("ctg").selectedIndex = z;
       //y.replaceValue(y.selectedIndex,z)
    }
}

/*---------------------------------------------------------------------------------
-------------------------------  SUBCATEGORIA  ------------------------------------
-----------------------------------------------------------------------------------*/
function buscarSubCtg(){
    //seleciona categoria
    var ctg_busca_insubctg = document.getElementById("ctg_busca_insubctg");
    var select = ctg_busca_insubctg.options[ctg_busca_insubctg.selectedIndex];
    
    //seleciona subcategoria
    var sub_ctg = document.getElementById("sub_ctg");
    var select2 = sub_ctg.options[sub_ctg.selectedIndex];

    var edtsubctg = document.getElementById("edtsubctg");
    var deltsubctg = document.getElementById("deltsubctg");

    var subctg_encontrada = select2.value;
    var input = document.querySelector("#edit-sub-ctg");    

    if ( select.value != 0 && select2.value != 0 && (edtsubctg.checked == true || deltsubctg.checked == true) ){

        document.getElementById("infoEditSubCat").innerHTML = " ";
        document.querySelector("[name='edit-sub-ctg']").value = subctg_encontrada;
            
            if(edtsubctg.checked == true){
                input.disabled = false;
            } else {
               input.disabled = true;
            }
    }
    else {
        if(select.value == 0 || select2.value == 0){
            document.querySelector("[name='edit-sub-ctg']").value = "";
        }
        document.getElementById("infoEditSubCat").style.color = "red";
        document.getElementById("infoEditSubCat").innerHTML = "*Itens obrigatórios";
    }        
}

function actionSubCtg(){
    if (deltsubctg.checked == true) {
       var x = document.getElementById("sub_ctg");
       x.remove(x.selectedIndex);
   }
   else if (edtsubctg.checked == true) {
       var z = document.getElementById("edit-sub-ctg");
       document.getElementById("sub_ctg").selectedIndex = z;
      //y.replaceValue(y.selectedIndex,z)
   }
}

/*---------------------------------------------------------------------------------
-------------------------------  ITEM  --------------------------------------------
-----------------------------------------------------------------------------------*/
function buscarItem(){
    var busca_ean = document.getElementById("busca_ean").value;

    var edtitem = document.getElementById("edtitem");
    var delitem = document.getElementById("delitem");

    if (busca_ean.length == 13 && (edtitem.checked == true || delitem.checked == true) ){
        document.getElementById("infoEditItem").innerHTML = " ";
    }
    else {
        document.getElementById("infoEditItem").style.color = "red";
        document.getElementById("infoEditItem").innerHTML = "*Itens obrigatórios: 13digitos para EAN e selecionae a ação";
    }

    //
    var input_ean = document.querySelector("#ean");
    var input_ctg = document.querySelector("#ctginitem"); 
    var input_subctg = document.querySelector("#subctg"); 
    var input_marca = document.querySelector("#marca"); 
    var input_embalagem = document.querySelector("#embalagem");
    var input_preco = document.querySelector("#preco"); 
    var input_desc_cli = document.querySelector("#desc-cli"); 

    if (busca_ean.length == 13){
        
        if (delitem.checked == true ){
            input_ean.disabled = true;
            input_ctg.disabled = true;
            input_subctg.disabled = true;
            input_marca.disabled = true;
            input_embalagem.disabled = true;
            input_preco.disabled = true;
            input_desc_cli.disabled = true;
        }else{
            input_ean.disabled = false;
            input_ctg.disabled = false;
            input_subctg.disabled = false;
            input_marca.disabled = false;
            input_embalagem.disabled = false;
            input_preco.disabled = false;
            input_desc_cli.disabled = false;
        }
    }
                        
}


