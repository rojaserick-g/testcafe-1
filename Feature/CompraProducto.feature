
Feature: Validacion de compra online

  Scenario Outline: compra de producto con pago TC CMR Falabella con despacho a domicilio
	    Given Cliente debe poseer TC CMR Falabella Activa
	    When ingreso en el buscador <buscador> nombre del producto a comprar
	    Then Valido despliegue de listado de los productos disponibles
	    And Valido nombre <producto> que comprare
	    When realizo click en boton ver producto
	    Then Valido despliegue ventana ficha del producto
	    And Valido seleccion <cantidad> producto
	    When realizo click en boton agregar a la bolsa
	    Then Valido despliegue de modal con detalle de la compra
	    When realizo click en boton ver bolsa de compras
	    Then Valido despliegue de ventana carrito de compras
	    When realizo click en boton ir a pagar 
	    Then Valido despliegue ventana despacho
	    When selecciono region de envio 
	    When Selecciono comuna de envio 
	    When realizo click boton continuar 
	    Then Valido despliegue de ventana opciones de despacho
	    When Selecciono opcion plaza oeste 
	    When Realizo click boton continuar 
	    Then Valido despliegue ventana medios de pago
	    When Ingreso numero de tarjeta <numerotc> and rut <rut>   
	    
	    Examples: 
	      | buscador   | producto    																					 | cantidad  | numerotc       | rut          |
	      | "notebook" | "MacBook Air Intel Core i5 8GB RAM - 128GB SDD 13,3 " | 1  		   | "2232323232"   | "15398124-2" |
	 
 
   