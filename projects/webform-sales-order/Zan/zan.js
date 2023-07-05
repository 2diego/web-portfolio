let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
document.getElementById("date").innerHTML = day + " / " + month + " / " + year;

const precios = {
  megapack: 2688.41,
  hiperpack: 1939.24,
  pMegapack: 3592.69,
  pHiperpack: 3018.68
};

window.addEventListener('load', () => { // load precios //
  document.getElementById("precioP24").innerHTML = precios.megapack;
  document.getElementById("precioM24").innerHTML = precios.megapack;
  document.getElementById("precioG20").innerHTML = precios.megapack;
  document.getElementById("precioXg18").innerHTML = precios.megapack;
  document.getElementById("precioXxg17").innerHTML = precios.megapack;
  document.getElementById("precioP44").innerHTML = precios.hiperpack;
  document.getElementById("precioM44").innerHTML = precios.hiperpack;
  document.getElementById("precioG38").innerHTML = precios.hiperpack;
  document.getElementById("precioXg32").innerHTML = precios.hiperpack;
  document.getElementById("precioXxg30").innerHTML = precios.hiperpack;
  document.getElementById("precioPP30").innerHTML = precios.pMegapack;
  document.getElementById("precioPM52").innerHTML = precios.pHiperpack;
  document.getElementById("precioPG44").innerHTML = precios.pHiperpack;
  document.getElementById("precioPXg36").innerHTML = precios.pHiperpack;
  document.getElementById("precioPXxg34").innerHTML = precios.pHiperpack;
})

window.addEventListener('load', () => { //hiperpack collapse()//
  const collapser = document.getElementById('hiperpackCollapser');
  const collapsable = document.getElementById('hiperpackCollapsable');

  function collapse(event) {
    if (event) {
      event.stopPropagation();
    };

    collapsable.hidden = !collapsable.hidden;
  };

  collapse();
  collapser.addEventListener('click', collapse);
});

window.addEventListener('load', () => { //megapack collapse()//
  const collapser = document.getElementById('megapackCollapser');
  const collapsable = document.getElementById('megapackCollapsable');

  function collapse(event) {
    if (event) {
      event.stopPropagation();
    };

    collapsable.hidden = !collapsable.hidden;
  };

  collapse();
  collapser.addEventListener('click', collapse);
});

window.addEventListener('load', () => { //premium megapack collapse()//
  const collapser = document.getElementById('pMegapackCollapser');
  const collapsable = document.getElementById('pMegapackCollapsable');

  function collapse(event) {
    if (event) {
      event.stopPropagation();
    };

    collapsable.hidden = !collapsable.hidden;
  };

  collapse();
  collapser.addEventListener('click', collapse);
});

window.addEventListener('load', () => { //premium hiperpack collapse()//
  const collapser = document.getElementById('pHiperpackCollapser');
  const collapsable = document.getElementById('pHiperpackCollapsable');

  function collapse(event) {
    if (event) {
      event.stopPropagation();
    };

    collapsable.hidden = !collapsable.hidden;
  };

  collapse();
  collapser.addEventListener('click', collapse);
});

window.addEventListener('change', () => { // subtotal precio x codigo//
  function subtotalPrecios() {
    let cantidad = {
      p24: Number(p24.value),
      m24: Number(m24.value),
      g20: Number(g20.value),
      xg18: Number(xg18.value),
      xxg17: Number(xxg17.value),
      p44: Number(p44.value),
      m44: Number(m44.value),
      g38: Number(g38.value),
      xg32: Number(xg32.value),
      xxg30: Number(xxg30.value),
      pP30: Number(pP30.value),
      pM52: Number(pM52.value),
      pG44: Number(pG44.value),
      pXg36: Number(pXg36.value),
      pXxg34: Number(pXxg34.value),
    };
    let subtotal = {
      p24: cantidad.p24 * precios.megapack,
      m24: cantidad.m24 * precios.megapack,
      g20: cantidad.g20 * precios.megapack,
      xg18: cantidad.xg18 * precios.megapack,
      xxg17: cantidad.xxg17 * precios.megapack,
      p44: cantidad.p44 * precios.hiperpack,
      m44: cantidad.m44 * precios.hiperpack,
      g38: cantidad.g38 * precios.hiperpack,
      xg32: cantidad.xg32 * precios.hiperpack,
      xxg30: cantidad.xxg30 * precios.hiperpack,
      pP30: cantidad.pP30 * precios.pMegapack,
      pM52: cantidad.pM52 * precios.pHiperpack,
      pG44: cantidad.pG44 * precios.pHiperpack,
      pXg36: cantidad.pXg36 * precios.pHiperpack,
      pXxg34: cantidad.pXxg34 * precios.pHiperpack,
    };

    document.getElementById("subtotalP24").innerHTML = subtotal.p24.toFixed(2);
    document.getElementById("subtotalM24").innerHTML = subtotal.m24.toFixed(2);
    document.getElementById("subtotalG20").innerHTML = subtotal.g20.toFixed(2);
    document.getElementById("subtotalXg18").innerHTML = subtotal.xg18.toFixed(2);
    document.getElementById("subtotalXxg17").innerHTML = subtotal.xxg17.toFixed(2);
    document.getElementById("subtotalP44").innerHTML = subtotal.p44.toFixed(2);
    document.getElementById("subtotalM44").innerHTML = subtotal.m44.toFixed(2);
    document.getElementById("subtotalG38").innerHTML = subtotal.g38.toFixed(2);
    document.getElementById("subtotalXg32").innerHTML = subtotal.xg32.toFixed(2);
    document.getElementById("subtotalXxg30").innerHTML = subtotal.xxg30.toFixed(2);
    document.getElementById("subtotalPP30").innerHTML = subtotal.pP30.toFixed(2);
    document.getElementById("subtotalPM52").innerHTML = subtotal.pM52.toFixed(2);
    document.getElementById("subtotalPG44").innerHTML = subtotal.pG44.toFixed(2);
    document.getElementById("subtotalPXg36").innerHTML = subtotal.pXg36.toFixed(2);
    document.getElementById("subtotalPXxg34").innerHTML = subtotal.pXxg34.toFixed(2);
  };

  subtotalPrecios();
});

window.addEventListener('change', () => { // Megapack subtotal cantidad //
  function qSubtotalMegapack(cantidades) {
    let qSubMegapack = Number(p24.value) + Number(m24.value) + Number(g20.value) + Number(xg18.value) + Number(xxg17.value);

    document.getElementById("qSubtotalMegapack").innerHTML = qSubMegapack;
  };

  qSubtotalMegapack();
});

window.addEventListener('change', ()=> { //Megapack subtotal precio//
  function pSubtotalMegapack(precios) {
    let pSubMegapack = Number(document.getElementById("subtotalP24").innerHTML) + Number(document.getElementById("subtotalM24").innerHTML) + Number(document.getElementById("subtotalG20").innerHTML) + Number(document.getElementById("subtotalXg18").innerHTML) + Number(document.getElementById("subtotalXxg17").innerHTML);
    
    document.getElementById("pSubtotalMegapack").innerHTML = "$" + pSubMegapack.toFixed(2);
  };

  pSubtotalMegapack();
}); 

window.addEventListener('change', () => { // Hiperpack subtotal cantidad //
  function qSubtotalHiperpack(cantidades) {
    let qSubHiperpack = Number(p44.value) + Number(m44.value) + Number(g38.value) + Number(xg32.value) + Number(xxg30.value);

    document.getElementById("qSubtotalHiperpack").innerHTML = qSubHiperpack;
  };

  qSubtotalHiperpack();
});

window.addEventListener('change', ()=> { // Hiperpack subtotal precio//
  function pSubtotalHiperpack(precios) {
    let pSubHiperpack = Number(document.getElementById("subtotalP44").innerHTML) + Number(document.getElementById("subtotalM44").innerHTML) + Number(document.getElementById("subtotalG38").innerHTML) + Number(document.getElementById("subtotalXg32").innerHTML) + Number(document.getElementById("subtotalXxg30").innerHTML);
    
    document.getElementById("pSubtotalHiperpack").innerHTML = "$" + pSubHiperpack.toFixed(2);
  };

  pSubtotalHiperpack();
}); 

window.addEventListener('change', () => { // pMegapack subtotal cantidad //
  function qSubtotalPMegapack(cantidades) {
    let qSubPMegapack = Number(pP30.value);

    document.getElementById("qSubtotalPMegapack").innerHTML = qSubPMegapack;
  };

  qSubtotalPMegapack();
});

window.addEventListener('change', ()=> { // pMegapack subtotal precio//
  function pSubtotalPMegapack(precios) {
    let pSubPMegapack = Number(document.getElementById("subtotalPP30").innerHTML);
    
    document.getElementById("pSubtotalPMegapack").innerHTML = "$" + pSubPMegapack.toFixed(2);
  };

  pSubtotalPMegapack();
}); 

window.addEventListener('change', () => { // pHiperpack subtotal cantidad //
  function qSubtotalPHiperpack(cantidades) {
    let qSubPHiperpack = Number(pM52.value) + Number(pG44.value) + Number(pXg36.value) + Number(pXxg34.value);

    document.getElementById("qSubtotalPHiperpack").innerHTML = qSubPHiperpack;
  };

  qSubtotalPHiperpack();
});

window.addEventListener('change', ()=> { // pHiperpack subtotal precio//
  function pSubtotalPHiperpack(precios) {
    let pSubPHiperpack = Number(document.getElementById("subtotalPM52").innerHTML) + Number(document.getElementById("subtotalPG44").innerHTML) + Number(document.getElementById("subtotalPXg36").innerHTML) + Number(document.getElementById("subtotalPXxg34").innerHTML);
    
    document.getElementById("pSubtotalPHiperpack").innerHTML = "$" + pSubPHiperpack.toFixed(2);
  };

  pSubtotalPHiperpack();
});

window.addEventListener('change', () => { // Total cantidades //
  let qHiperpack = Number(document.getElementById("qSubtotalHiperpack").innerHTML); 
  let qMegapack = Number(document.getElementById("qSubtotalMegapack").innerHTML);
  let qPHiperpack = Number(document.getElementById("qSubtotalPHiperpack").innerHTML);
  let qPMegapack = Number(document.getElementById("qSubtotalPMegapack").innerHTML);
  
  document.getElementById("qTotal").innerHTML = qHiperpack + qMegapack + qPHiperpack + qPMegapack;
});

window.addEventListener('change', () => { // Total precio //
  let pHiperpack = Number(document.getElementById("pSubtotalHiperpack").innerHTML.slice(1));
  let pMegapack = Number(document.getElementById("pSubtotalMegapack").innerHTML.slice(1));
  let pPHiperpack = Number(document.getElementById("pSubtotalPHiperpack").innerHTML.slice(1));
  let pPMegapack = Number(document.getElementById("pSubtotalPMegapack").innerHTML.slice(1));

  document.getElementById("pTotal").innerHTML = "$" + (pHiperpack + pMegapack + pPHiperpack + pPMegapack).toFixed(2);
});