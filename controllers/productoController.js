const conexion_db = require('../config/bdConfig')
const obtenerListado = (req,res)=>
{
    conexion_db.query('SELECT idMovimiento,idTipo,idCategoria,Concepto,sum(Monto) Monto,Fecha FROM `movimientos` union select idMovimiento,idTipo,idCategoria,Concepto,Monto,Fecha FROM `movimientos` ',(err,results)=>
	{
        if(err)
          throw err;
	    else
		{
			var string=JSON.stringify(results);

			var json=JSON.parse(string);

            res.render('listado.ejs',{
					               data:json
                                 }
				    );
		}
    })
    
}


const obtenerMovimientos = (req,res)=>
{
    conexion_db.query('SELECT idMovimiento,idTipo,idCategoria,Concepto,sum(Monto) Monto,Fecha FROM `movimientos` union select idMovimiento,idTipo,idCategoria,Concepto,Monto,Fecha FROM `movimientos` ',(err,results)=>
	{
        if(err)
          throw err;
	    else
		{
			var string=JSON.stringify(results);

			var json=JSON.parse(string);

            res.render('index.ejs',{
					               data:json
                                 }
				    );
		}
    })
    
}

const obtenerMovimiento = (req,res)=>
{
    let idMovimiento = req.params.movimiento;
	let idTipoMovimiento=req.params.tipomovimiento;
	
	
	var queries = ['SELECT idMovimiento,idTipo,idCategoria,Concepto,Monto,Fecha,TipoMovimiento FROM `movimientos` inner join tipomovimiento on tipomovimiento.idtipomovimiento=movimientos.idtipo   WHERE idMovimiento ='+ idMovimiento,
	               'SELECT * from `categoria` WHERE idTipoMovimiento=' + idTipoMovimiento,
				   'SELECT * from `concepto`'
	              ];
    conexion_db.query(queries.join(';'), (err, results, fields) =>
    
	{
        if(err)
          throw err;
	    else
		{
			var string=JSON.stringify(results);
			
			var json=JSON.parse(string);
		    
			

            res.render('ModificarMovimiento.ejs',{
					               data:json[0],
								   categoria:json[1],
								   concepto:json[2]
                                 }
				    );
		}
    })
    
}


const agregarMovimiento = (req,res)=>
{
    let  idTipo=req.body.Tipo;
	let  Concepto=req.body.Concepto;
	let  Monto=req.body.Monto;
	let  Fecha=req.body.Fecha;
	
	
	let  idCategoria=req.body.Categoria;
	if (idTipo==2) {Monto=-Monto};
    conexion_db.query('INSERT INTO `movimientos`(`idTipo`, `idCategoria`,`Concepto`, `Monto`,`Fecha`) VALUES (?,?,?,?,?)',[idTipo,idCategoria,Concepto,Monto,Fecha],(err,results)=>
	{
        if(err)
          throw err;
          res.redirect('/admin');
	}
	                )
   
}


const obtenerCategorias = (req,res)=>
{
	let idTipoMovimiento = req.params.movimiento;
   
    
    conexion_db.query('SELECT idCategoria,Categoria FROM `categoria` WHERE idTipoMovimiento = ?',[idTipoMovimiento],(err,results)=>
	{
        if(err)
          throw err;
	    else
		{
			var string=JSON.stringify(results);

			var json=JSON.parse(string);
			res.json(json);

		}
    })
    
}


const obtenerConceptos = (req,res)=>
{
	
    
	let idCategoria = req.params.idCategoria;
	
    conexion_db.query('SELECT idConcepto,Concepto FROM `concepto` WHERE idCategoria = ?',[idCategoria],(err,results)=>
	{
        if(err)
          throw err;
	    else
		{
			var string=JSON.stringify(results);
			
			var json=JSON.parse(string);
			res.json(json);
			
		}
    })
    
}



const modificarMovimiento = (req,res)=>
{
   
idmovimiento=req.params.idmovimiento;

idcategoria=req.params.idcategoria;
idconcepto=req.params.idconcepto;
idtipomovimiento=req.params.idtipomovimiento;
monto=req.params.monto;

if (idtipomovimiento==2)
{
	monto=-monto;
}
conexion_db.query('UPDATE `movimientos` SET idcategoria=?,concepto= ?,monto=? WHERE idmovimiento = ?',[idcategoria,idconcepto,monto,idmovimiento],(err,results)=>{
        if(err)
        throw err;
	    res.send('Modificacion exitosa!!');
    })
   
    }
	

const eliminarMovimiento = (req,res)=>{
    
   let idMovimiento = req.params.movimiento;

   conexion_db.query('DELETE FROM `movimientos` WHERE idMovimiento = ?',[idMovimiento],(err,results)=>{
        if(err)
        throw err;
		else
    res.send('Movimiento Eliminado');
    })
	
}








module.exports = {
	obtenerListado,
    obtenerMovimientos,
    agregarMovimiento,
	modificarMovimiento,
    eliminarMovimiento,
	obtenerCategorias,
	obtenerConceptos,
	obtenerMovimiento
}