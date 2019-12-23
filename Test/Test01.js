import { Selector, ClientFuntion } from 'testcafe';
//import Page from './PageGoogle.js';

fixture ('Random Number Generator tests')
  .page ('https://falabella.com/') 
 

 //const page = new Page(); 


test('Test Buscar Falabella en google.com', async t => {
	const buscador = Selector('input[name=q]')
	const btnBuscar = Selector('input[name=btnK]')
	const clicklink = Selector('h3[class=LC20lb]')
	const buscarProducto = Selector('input[name=Ntt]')

	await t 
	.typeText(buscador, 'Falabella')
	.click(btnBuscar)
	.wait(2000)
	.click(clicklink)
	.wait(15000)

  });

  test('Ingresar producto a buscar', async t => {
	const buscarProducto = Selector('input[name=Ntt]')

	await t 
	.typeText(buscarProducto, 'PlayStation 4 Pro 1TB')
	.wait(2000)
	.click(buscarProducto)
	.wait(2000)
  });

  test('Seleccionar producto', async t => {
	const btnVerProducto = Selector('input[id=testId-Pod-action-6779116]')
	const garantia2años = Selector('input[id=warranty-2578490]')
	const btnCantidad = Selector('button[class=fb-quantity-input__plus]')
	const btnAgregarBolsa = Selector('button[class=fb-btn fb-btn-primary fb-product-cta__controls--actions--choose full-width-btn]')
    const btnIraComprar = Selector('button[class=fb-btn fb-btn-primary fb-btn-icon fb-order-status__continue-purchase js-fb-continue-purchase')
	await t 
	.click(btnVerProducto)
	.wait(2000)
	.click(garantia2años)
	.click(btnCantidad)
	.click(btnAgregarBolsa)
	.wait(2000)
	.click(btnIraComprar)
	.wait(2000);
  });

  test('Seleccionar tipo despacho', async t => {
	const opcionRegion = Selector('option[value=13]')
	const opcionComuna = Selector('option[value=315]')
	const btnContinuar = Selector('button[name=field04]')
	const opcionretiroTienda =  Selector('h3[class=fbra_heading fbra_deliveryGroupTab__heading fbra_test_deliveryGroupTab__heading]')
	const btnSeleccionarPuntoRetiro = Selector('button[name=selectButton]')
	const btnContinuarPagar = Selector('button[class=fbra_button fbra_checkoutComponentDeliveryActions__continueToSecurePaymentButton fbra_test_checkoutComponentDeliveryActions__continueToSecurePaymentButton]')
	
	await t 
	.click(opcionRegion)
	.click(opcionComuna)
	.click(btnContinuar)
	.wait(2000)
	.click(opcionretiroTienda)
	.click(btnSeleccionarPuntoRetiro)
	.click(btnContinuarPagar)
	.wait(2000);
  });