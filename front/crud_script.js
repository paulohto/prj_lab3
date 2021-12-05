// ABA EDITA / DELETAR

// CATEGORIA
function buscarCat(){
    var ctg = document.getElementById("ctg");
    var select = ctg.options[ctg.selectedIndex];

    var edtctg = document.getElementById("edtctg");
    var delctg = document.getElementById("delctg");

    var ctg_encontrada = select.value;
    //var ctg_apresentada = document.querySelector("[name='edit-ctg']").value = ctg_encontrada;
    //ctg_apresentada.disabled =true;
    

    if (select.value != 0 && (edtctg.checked == true || delctg.checked == true) ){
        
        document.getElementById("infoEditCat").innerHTML = " ";

        if(edtctg.checked == true || delctg.checked == true) {
            if(edtctg.checked == true){
                var x = document.querySelector("[name='edit-ctg']").value = ctg_encontrada;
                //document.getElementById("delet-ctg").innerHTML = "";
                
                
            }
            if(delctg.checked == true){
                //document.getElementById("delet-ctg").innerHTML = ctg_encontrada;
               // document.querySelector("[name='edit-ctg']").value = "";
               //document.getElementById("mostra").innerHTML = ctg_encontrada;
              
            }
        }

  
        
    }
    else {
        document.getElementById("infoEditCat").style.color = "red";
        document.getElementById("infoEditCat").innerHTML = "*Itens obrigatórios";
    }
                        
}

// SUBCATEGORIA
function buscarSubCat(){
    var ctg_busca_insubctg = document.getElementById("ctg_busca_insubctg");
    var select = ctg_busca_insubctg.options[ctg_busca_insubctg.selectedIndex];

    var sub_ctg = document.getElementById("sub_ctg");
    var select2 = sub_ctg.options[sub_ctg.selectedIndex];

    var edtsubctg_s = document.getElementById("edtsubctg_s");
    var edtsubctg_n = document.getElementById("edtsubctg_n");

    if ( select.value != 0 && select2.value != 0 && (edtsubctg_s.checked == true || edtsubctg_n.checked == true) ){

        document.getElementById("infoEditSubCat").innerHTML = " ";

    }
    else {
        document.getElementById("infoEditSubCat").style.color = "red";
        document.getElementById("infoEditSubCat").innerHTML = "*Itens obrigatórios";
    }
                        
}

// ITEM
function buscarItem(){
    var busca_ean = document.getElementById("busca_ean").value;
    //var select = ctg_busca_insubctg.options[ctg_busca_insubctg.selectedIndex];
    var edtitem_s = document.getElementById("edtitem_s");
    var edtitem_n = document.getElementById("edtitem_n");

    if (busca_ean.length == 13 && (edtitem_s.checked == true || edtitem_n.checked == true) ){
        
        document.getElementById("infoEditItem").innerHTML = " ";
        
    }
    else {
        document.getElementById("infoEditItem").style.color = "red";
        document.getElementById("infoEditItem").innerHTML = "*Itens obrigatórios: 13digitos para EAN e selecionae a ação";
    }
                        
}


