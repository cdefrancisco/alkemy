const express = require('express');
//obtengo los controladores de productoController.js
const movimiento_controller = require('../controllers/productoController');
const movimientosRouter = express.Router();
//------- obtengo listado
movimientosRouter.get('/listado',movimiento_controller.obtenerListado);

//--------obtengo todos los movimientos---------------
movimientosRouter.get('/',movimiento_controller.obtenerMovimientos);
//-----llamo a pantalla donde se insertan movimientos
movimientosRouter.get('/movimientos',(req,res)=>{
	   res.render("AgregarMovimiento.ejs");
	}
	);

//obtengo un movimiento en particular
movimientosRouter.get('/movimientos/:movimiento/:tipomovimiento',movimiento_controller.obtenerMovimiento);

movimientosRouter.get('/categorias/:movimiento',movimiento_controller.obtenerCategorias);

movimientosRouter.get('/conceptos/:idCategoria',movimiento_controller.obtenerConceptos);

movimientosRouter.post('/movimientos', movimiento_controller.agregarMovimiento);
movimientosRouter.put('/movimientos/:idmovimiento-:monto',movimiento_controller.modificarMovimiento);

movimientosRouter.delete('/movimientos/:movimiento',movimiento_controller.eliminarMovimiento);


module.exports = movimientosRouter;