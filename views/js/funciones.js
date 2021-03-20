function eliminarProducto(id)
{
    if (typeof(id)!='undefined')
	{
	
        axios.delete(`http://localhost:8080/admin/movimientos/${id}`)
        .then(()=>{
            alert('Producto eliminado en forma  EXITOSA!');
            location.reload();
			
        })
	}	
		
    }

function editarProducto(id,idtipo)
{
window.location="admin/movimientos/"+id+"/"+idtipo;
	axios.get(`http://localhost:8080/admin/movimientos/${id}/${idtipo}`);
	
}

function ModificarMovimiento()
{
    var idMovimiento=document.getElementById("idMovimiento").value;
	var idTipoMovimiento = document.getElementById("idTipo").value;
	var idCategoria = document.getElementById("idCategoria").value;
	var idConcepto = document.getElementById("idConcepto").value;
	var Monto = document.getElementById("idMonto").value;
	var Fecha = document.getElementById("idFecha").value;
	
	/*aca no me esta andando el put*/
    axios.put(`http://localhost:8080/admin/movimientos/${idMovimiento}/Monto`);	
}



function limpiarcombo(combo)
	{
    let cmbcategoria=combo; 
    let length=cmbcategoria.options.length
	
   for (let i = length-1 ;i>=0;  i--) 
   {
     cmbcategoria.options[i] = null;
   }
    
	}		
		
 function cargarCategorias()
 {
	 let cmbTipo = document.getElementById("idTipo"); 
     let idtipo = cmbTipo.options[cmbTipo.selectedIndex].value; 
	
	 axios.get(`http://localhost:8080/admin/categorias/${idtipo}`,
	 {
         responseType: 'json'
     })
        .then((res)=>
		{
 
		//--limpiar combo categorias
		limpiarcombo(document.getElementById("idCategoria"));
		limpiarcombo(document.getElementById("idConcepto"));
        if(res.status==200) 
			{
             const select = document.getElementById("idCategoria");
		   	 for (i=0; i < res.data.length; i++)
				{
				 select.innerHTML += "<option value='"+res.data[i].idCategoria+"'>"+res.data[i].Categoria+"</option>"; 
				}
			 if (idtipo==1)
			 {
				 const cmbConcepto = document.getElementById("idConcepto");
                 cmbConcepto.innerHTML += "<option value='1'>Sueldo</option>"; 				 
				 
			 }
		     
		    }
		})
 }
 
 function cargarConceptos()
 {
	 let cmbCategorias = document.getElementById("idCategoria"); 
     let idCategoria = cmbCategorias.options[cmbCategorias .selectedIndex].value; 
    
  
	 axios.get(`http://localhost:8080/admin/conceptos/${idCategoria}`,{
    responseType: 'json'
  })
        .then((res)=>{
           if(res.status==200) 
			{
			 limpiarcombo(document.getElementById("idConcepto"));
             const select = document.getElementById("idConcepto");
		     
			
			 for (i=0; i < res.data.length; i++)
			 {
				 select.innerHTML += "<option value='"+res.data[i].idConcepto+"'>"+res.data[i].Concepto+"</option>"; 

			}
		     
		    }
			
        })
 }
 
 function inicio() {
    document.getElementById("idFormMovimientos").addEventListener('submit', validar, false);
  }

  function validar(evt) {
    var idTipoMovimiento = document.getElementById("idTipo").value;
	var idCategoria = document.getElementById("idCategoria").value;
	var idConcepto = document.getElementById("idConcepto").value;
	var Monto = document.getElementById("idMonto").value;
	var Fecha = document.getElementById("idFecha").value;
	let cond=true;
	if (idTipoMovimiento==0)
	{
		alert ("Falta indicar un tipo de movimiento");
		cond=false;
	}
	if (idCategoria==0)
		{
		alert ("Falta indicar una Categoria");
		cond=false;
	}
	if (idConcepto==0)
		{
		alert ("Falta indicar un Concepto");
		cond=false;
	}
	
	if (Monto=='')
		{
		alert ("Falta indicar un Monto");
		cond=false;
	}
	
	if (Fecha=='')
		{
		alert ("Falta indicar una Fecha");
		cond=false;
	}
	
	if (cond==false)
	{
	evt.preventDefault();
	}
  }
