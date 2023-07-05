let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
document.getElementById("date").innerHTML = day + " / " + month + " / " + year;


const precio = {
  100: 1270.42,
  105: 1959.81,
  127: 942.97,
  128: 1020.12,
  290: 993.76,
  295: 886.60,
  324: 1300.70,
  417: 904.66,
  424: 1300.70, 
  900: 1313.73, 
  901: 2661.95,
  904: 1959.82,
  907: 1922.39,
  908: 1318.15,
  913: 2015.50,
  914: 2465.01,
  915: 1723.38,
  916: 2394.10,
  919: 688.56,
  920: 1202.89,
  921: 1167.87,
  923: 946.03,
  927: 942.97,
  928: 1067.03,
  930: 1066.87,
  941: 2341.79,
  945: 2769.53,
  950: 1520.29,
  984: 1916.18,
  987: 2708.60,
  988: 3482.14,
  989: 2771.50,
  995: 3672.76,
  1000: 1436.84,
  1003: 2672.41,
  1004: 2225.61,
  1010: 1096.08,
  1018: 1603.21,
  1025: 2256.01,
  1026: 1983.96,
  1028: 1473.71,
  1029: 1817.52,
  1030: 1634.41,
  1032: 1942.46,
  1033: 1738.50,
  1035: 1787.57,
  1046: 1885.36,
  1047: 1885.36,
  1094: 4234.93,
  1097: 6028.54,
  1098: 4625.74,
  1099: 4234.93,
  1100: 4222.74,
  1101: 2229.52,
  1102: 4861.96,
  11032: 2784.49
};

window.addEventListener('load', () => { // load precios //

  for (const key in precio) {
    if (precio.hasOwnProperty.call(precio, key)) {
      let id = "precio" + key;
  
      document.getElementById(id).innerHTML = precio[key];
    };
  };
});

  /* LOAD PRECIOS ANTES
  window.addEventListener('load', () => {
  document.getElementById("precio100").innerHTML = precio[100];
  document.getElementById("precio105").innerHTML = precio[105];
  document.getElementById("precio127").innerHTML = precio[127];
  document.getElementById("precio128").innerHTML = precio[128];
  document.getElementById("precio290").innerHTML = precio[290];
  document.getElementById("precio295").innerHTML = precio[295];
  document.getElementById("precio324").innerHTML = precio[324];
  document.getElementById("precio417").innerHTML = precio[417];
  document.getElementById("precio424").innerHTML = precio[424];
  document.getElementById("precio900").innerHTML = precio[900];
  document.getElementById("precio901").innerHTML = precio[901];
  document.getElementById("precio904").innerHTML = precio[904];
  document.getElementById("precio907").innerHTML = precio[907];
  document.getElementById("precio908").innerHTML = precio[908];
  document.getElementById("precio913").innerHTML = precio[913];
  document.getElementById("precio914").innerHTML = precio[914];
  document.getElementById("precio915").innerHTML = precio[915];
  document.getElementById("precio916").innerHTML = precio[916];
  document.getElementById("precio919").innerHTML = precio[919];
  document.getElementById("precio920").innerHTML = precio[920];
  document.getElementById("precio921").innerHTML = precio[921];
  document.getElementById("precio923").innerHTML = precio[923];
  document.getElementById("precio927").innerHTML = precio[927];
  document.getElementById("precio928").innerHTML = precio[928];
  document.getElementById("precio930").innerHTML = precio[930];
  document.getElementById("precio941").innerHTML = precio[941];
  document.getElementById("precio945").innerHTML = precio[945];
  document.getElementById("precio950").innerHTML = precio[950];
  document.getElementById("precio984").innerHTML = precio[984];
  document.getElementById("precio987").innerHTML = precio[987];
  document.getElementById("precio988").innerHTML = precio[988];
  document.getElementById("precio989").innerHTML = precio[989];
  document.getElementById("precio995").innerHTML = precio[995];
  document.getElementById("precio1000").innerHTML = precio[1000];
  document.getElementById("precio1003").innerHTML = precio[1003];
  document.getElementById("precio1004").innerHTML = precio[1004];
  document.getElementById("precio1010").innerHTML = precio[1010];
  document.getElementById("precio1018").innerHTML = precio[1018];
  document.getElementById("precio1025").innerHTML = precio[1025];
  document.getElementById("precio1026").innerHTML = precio[1026];
  document.getElementById("precio1028").innerHTML = precio[1028];
  document.getElementById("precio1029").innerHTML = precio[1029];
  document.getElementById("precio1030").innerHTML = precio[1030];
  document.getElementById("precio1032").innerHTML = precio[1032];
  document.getElementById("precio1033").innerHTML = precio[1033];
  document.getElementById("precio1035").innerHTML = precio[1035];
  document.getElementById("precio1046").innerHTML = precio[1046];
  document.getElementById("precio1047").innerHTML = precio[1047];
  document.getElementById("precio1094").innerHTML = precio[1094];
  document.getElementById("precio1097").innerHTML = precio[1097];
  document.getElementById("precio1098").innerHTML = precio[1098];
  document.getElementById("precio1099").innerHTML = precio[1099];
  document.getElementById("precio1100").innerHTML = precio[1100];
  document.getElementById("precio1101").innerHTML = precio[1101];
  document.getElementById("precio1102").innerHTML = precio[1102];
  document.getElementById("precio11032").innerHTML = precio[11032];
  } */

window.addEventListener('load', () => { // higienicos collapse //
  const collapser = document.getElementById('higienicosCollapser');
  const collapsable = document.getElementById('higienicosCollapsable');

  function collapse(event) {
      if (event) {
          event.stopPropagation();
      }
      
      collapsable.hidden = !collapsable.hidden;
  }
  collapse();
  collapser.addEventListener('click', collapse);
});

window.addEventListener('load', () => { // servilletas collapse //
  const collapser = document.getElementById('servilletasCollapser');
  const collapsable = document.getElementById('servilletasCollapsable');

  function collapse(event) {
      if (event) {
          event.stopPropagation();
      }
      
      collapsable.hidden = !collapsable.hidden;
  }
  collapse();
  collapser.addEventListener('click', collapse);
});

window.addEventListener('load', () => { // panuelos collapse //
  const collapser = document.getElementById('panuelosCollapser');
  const collapsable = document.getElementById('panuelosCollapsable');

  function collapse(event) {
      if (event) {
          event.stopPropagation();
      }
      
      collapsable.hidden = !collapsable.hidden;
  }
  collapse();
  collapser.addEventListener('click', collapse);
});

window.addEventListener('load', () => { //bobinas collapse //
  const collapser = document.getElementById('bobinasCollapser');
  const collapsable = document.getElementById('bobinasCollapsable');

  function collapse(event) {
      if (event) {
          event.stopPropagation();
      }
      
      collapsable.hidden = !collapsable.hidden;
  }
  collapse();
  collapser.addEventListener('click', collapse);
});

window.addEventListener('change', () => { // subtotal precio x codigo//
  for (const key in precio) {
      const id = "subtotal" + key; 
      document.getElementById(id).innerHTML = (Number(document.getElementById(key).value) * (Number(precio[key]))).toFixed(2);
  };
});

/* subtotal precio x codigo ANTES 
window.addEventListener('change', () => { // subtotal precio x codigo//
  function subtotalPrecios() {
    let cantidad = {
      100: Number(document.getElementById("100").value),
      105: Number(document.getElementById("105").value),
      127: Number(document.getElementById("127").value),
      128: Number(document.getElementById("128").value),
      290: Number(document.getElementById("290").value),
      295: Number(document.getElementById("295").value),
      324: Number(document.getElementById("324").value),
      417: Number(document.getElementById("417").value),
      424: Number(document.getElementById("424").value),
      900: Number(document.getElementById("900").value),
      901: Number(document.getElementById("901").value),
      904: Number(document.getElementById("904").value),
      907: Number(document.getElementById("907").value),
      908: Number(document.getElementById("908").value),
      913: Number(document.getElementById("913").value),
      914: Number(document.getElementById("914").value),
      915: Number(document.getElementById("915").value),
      916: Number(document.getElementById("916").value),
      919: Number(document.getElementById("919").value),
      920: Number(document.getElementById("920").value),
      921: Number(document.getElementById("921").value),
      923: Number(document.getElementById("923").value),
      927: Number(document.getElementById("927").value),
      928: Number(document.getElementById("928").value),
      930: Number(document.getElementById("930").value),
      941: Number(document.getElementById("941").value),
      945: Number(document.getElementById("945").value),
      950: Number(document.getElementById("950").value),
      984: Number(document.getElementById("984").value),
      987: Number(document.getElementById("987").value),
      988: Number(document.getElementById("988").value),
      989: Number(document.getElementById("989").value),
      995: Number(document.getElementById("995").value),
      1000: Number(document.getElementById("1000").value),
      1003: Number(document.getElementById("1003").value),
      1004: Number(document.getElementById("1004").value),
      1010: Number(document.getElementById("1010").value),
      1018: Number(document.getElementById("1018").value),
      1025: Number(document.getElementById("1025").value),
      1026: Number(document.getElementById("1026").value),
      1028: Number(document.getElementById("1028").value),
      1029: Number(document.getElementById("1029").value),
      1030: Number(document.getElementById("1030").value),
      1032: Number(document.getElementById("1032").value),
      1033: Number(document.getElementById("1033").value),
      1035: Number(document.getElementById("1035").value),
      1046: Number(document.getElementById("1046").value),
      1047: Number(document.getElementById("1047").value),
      1094: Number(document.getElementById("1094").value),
      1097: Number(document.getElementById("1097").value),
      1098: Number(document.getElementById("1098").value),
      1099: Number(document.getElementById("1099").value),
      1100: Number(document.getElementById("1100").value),
      1101: Number(document.getElementById("1101").value),
      1102: Number(document.getElementById("1102").value),
      11032: Number(document.getElementById("11032").value),
    };
    let subtotal = {
      100: Number(cantidad[100] * precio[100]),
      105: Number(cantidad[105] * precio[105]),
      127: Number(cantidad[127] * precio[127]),
      128: Number(cantidad[128] * precio[128]),
      290: Number(cantidad[290] * precio[290]),
      295: Number(cantidad[295] * precio[295]),
      324: Number(cantidad[324] * precio[324]),
      417: Number(cantidad[417] * precio[417]),
      424: Number(cantidad[424] * precio[424]),
      900: Number(cantidad[900] * precio[900]),
      901: Number(cantidad[901] * precio[901]),
      904: Number(cantidad[904] * precio[904]),
      907: Number(cantidad[907] * precio[907]),
      908: Number(cantidad[908] * precio[908]),
      913: Number(cantidad[913] * precio[913]),
      914: Number(cantidad[914] * precio[914]),
      915: Number(cantidad[915] * precio[915]),
      916: Number(cantidad[916] * precio[916]),
      919: Number(cantidad[919] * precio[919]),
      920: Number(cantidad[920] * precio[920]),
      921: Number(cantidad[921] * precio[921]),
      923: Number(cantidad[923] * precio[923]),
      927: Number(cantidad[927] * precio[927]),
      928: Number(cantidad[928] * precio[928]),
      930: Number(cantidad[930] * precio[930]),
      941: Number(cantidad[941] * precio[941]),
      945: Number(cantidad[945] * precio[945]),
      950: Number(cantidad[950] * precio[950]),
      984: Number(cantidad[984] * precio[984]),
      987: Number(cantidad[987] * precio[987]),
      988: Number(cantidad[988] * precio[988]),
      989: Number(cantidad[989] * precio[989]),
      995: Number(cantidad[995] * precio[995]),
      1000: Number(cantidad[1000] * precio[1000]),
      1003: Number(cantidad[1003] * precio[1003]),
      1004: Number(cantidad[1004] * precio[1004]),
      1010: Number(cantidad[1010] * precio[1010]),
      1018: Number(cantidad[1018] * precio[1018]),
      1025: Number(cantidad[1025] * precio[1025]),
      1026: Number(cantidad[1026] * precio[1026]),
      1028: Number(cantidad[1028] * precio[1028]),
      1029: Number(cantidad[1029] * precio[1029]),
      1030: Number(cantidad[1030] * precio[1030]),
      1032: Number(cantidad[1032] * precio[1032]),
      1033: Number(cantidad[1033] * precio[1033]),
      1035: Number(cantidad[1035] * precio[1035]),
      1046: Number(cantidad[1046] * precio[1046]),
      1047: Number(cantidad[1047] * precio[1047]),
      1094: Number(cantidad[1094] * precio[1094]),
      1097: Number(cantidad[1097] * precio[1097]),
      1098: Number(cantidad[1098] * precio[1098]),
      1099: Number(cantidad[1099] * precio[1099]),
      1100: Number(cantidad[1100] * precio[1100]),
      1101: Number(cantidad[1101] * precio[1101]),
      1102: Number(cantidad[1102] * precio[1102]),
      11032: Number(cantidad[11032] * precio[11032]),
    };

    document.getElementById("subtotal100").innerHTML = subtotal[100].toFixed(2);
    document.getElementById("subtotal105").innerHTML = subtotal[105].toFixed(2);
    document.getElementById("subtotal127").innerHTML = subtotal[127].toFixed(2);
    document.getElementById("subtotal128").innerHTML = subtotal[128].toFixed(2);
    document.getElementById("subtotal290").innerHTML = subtotal[290].toFixed(2);
    document.getElementById("subtotal295").innerHTML = subtotal[295].toFixed(2);
    document.getElementById("subtotal324").innerHTML = subtotal[324].toFixed(2);
    document.getElementById("subtotal417").innerHTML = subtotal[417].toFixed(2);
    document.getElementById("subtotal424").innerHTML = subtotal[424].toFixed(2);
    document.getElementById("subtotal900").innerHTML = subtotal[900].toFixed(2);
    document.getElementById("subtotal901").innerHTML = subtotal[901].toFixed(2);
    document.getElementById("subtotal904").innerHTML = subtotal[904].toFixed(2);
    document.getElementById("subtotal907").innerHTML = subtotal[907].toFixed(2);
    document.getElementById("subtotal908").innerHTML = subtotal[908].toFixed(2);
    document.getElementById("subtotal913").innerHTML = subtotal[913].toFixed(2);
    document.getElementById("subtotal914").innerHTML = subtotal[914].toFixed(2);
    document.getElementById("subtotal915").innerHTML = subtotal[915].toFixed(2);
    document.getElementById("subtotal916").innerHTML = subtotal[916].toFixed(2);
    document.getElementById("subtotal919").innerHTML = subtotal[919].toFixed(2);
    document.getElementById("subtotal920").innerHTML = subtotal[920].toFixed(2);
    document.getElementById("subtotal921").innerHTML = subtotal[921].toFixed(2);
    document.getElementById("subtotal923").innerHTML = subtotal[923].toFixed(2);
    document.getElementById("subtotal927").innerHTML = subtotal[927].toFixed(2);
    document.getElementById("subtotal928").innerHTML = subtotal[928].toFixed(2);
    document.getElementById("subtotal930").innerHTML = subtotal[930].toFixed(2);
    document.getElementById("subtotal941").innerHTML = subtotal[941].toFixed(2);
    document.getElementById("subtotal945").innerHTML = subtotal[945].toFixed(2);
    document.getElementById("subtotal950").innerHTML = subtotal[950].toFixed(2);
    document.getElementById("subtotal984").innerHTML = subtotal[984].toFixed(2);
    document.getElementById("subtotal987").innerHTML = subtotal[987].toFixed(2);
    document.getElementById("subtotal988").innerHTML = subtotal[988].toFixed(2);
    document.getElementById("subtotal989").innerHTML = subtotal[989].toFixed(2);
    document.getElementById("subtotal995").innerHTML = subtotal[995].toFixed(2);
    document.getElementById("subtotal1000").innerHTML = subtotal[1000].toFixed(2);
    document.getElementById("subtotal1003").innerHTML = subtotal[1003].toFixed(2);
    document.getElementById("subtotal1004").innerHTML = subtotal[1004].toFixed(2);
    document.getElementById("subtotal1010").innerHTML = subtotal[1010].toFixed(2);
    document.getElementById("subtotal1018").innerHTML = subtotal[1018].toFixed(2);
    document.getElementById("subtotal1025").innerHTML = subtotal[1025].toFixed(2);
    document.getElementById("subtotal1026").innerHTML = subtotal[1026].toFixed(2);
    document.getElementById("subtotal1028").innerHTML = subtotal[1028].toFixed(2);
    document.getElementById("subtotal1029").innerHTML = subtotal[1029].toFixed(2);
    document.getElementById("subtotal1030").innerHTML = subtotal[1030].toFixed(2);
    document.getElementById("subtotal1032").innerHTML = subtotal[1032].toFixed(2);
    document.getElementById("subtotal1033").innerHTML = subtotal[1033].toFixed(2);
    document.getElementById("subtotal1035").innerHTML = subtotal[1035].toFixed(2);
    document.getElementById("subtotal1046").innerHTML = subtotal[1046].toFixed(2);
    document.getElementById("subtotal1047").innerHTML = subtotal[1047].toFixed(2);
    document.getElementById("subtotal1094").innerHTML = subtotal[1094].toFixed(2);
    document.getElementById("subtotal1097").innerHTML = subtotal[1097].toFixed(2);
    document.getElementById("subtotal1098").innerHTML = subtotal[1098].toFixed(2);
    document.getElementById("subtotal1099").innerHTML = subtotal[1099].toFixed(2);
    document.getElementById("subtotal1100").innerHTML = subtotal[1100].toFixed(2);
    document.getElementById("subtotal1101").innerHTML = subtotal[1101].toFixed(2);
    document.getElementById("subtotal1102").innerHTML = subtotal[1102].toFixed(2);
    document.getElementById("subtotal11032").innerHTML = subtotal[11032].toFixed(2);
  };

  subtotalPrecios();
}); */

window.addEventListener('change', () => { // higienicos subtotal precio //
  function pSubtotalHigienicos(precios) {
    let pSubHigienicos = Number(document.getElementById("subtotal100").innerHTML) + Number(document.getElementById("subtotal105").innerHTML) + Number(document.getElementById("subtotal900").innerHTML) + Number(document.getElementById("subtotal901").innerHTML) + Number(document.getElementById("subtotal904").innerHTML) + Number(document.getElementById("subtotal907").innerHTML) + Number(document.getElementById("subtotal908").innerHTML) + Number(document.getElementById("subtotal913").innerHTML) + Number(document.getElementById("subtotal914").innerHTML) + Number(document.getElementById("subtotal915").innerHTML) + Number(document.getElementById("subtotal916").innerHTML) + Number(document.getElementById("subtotal919").innerHTML) + Number(document.getElementById("subtotal950").innerHTML)  + Number(document.getElementById("subtotal1010").innerHTML);

    document.getElementById("pSubtotalHigienicos").innerHTML = "$ " + pSubHigienicos.toFixed(2);
  };

  pSubtotalHigienicos();
});

window.addEventListener('change', () => { // higienicos subtotal cantidad //
  function qSubtotalHigienicos(cantidades) {
    let qSubHigienicos = Number(document.getElementById("100").value) + Number(document.getElementById("105").value) + Number(document.getElementById("900").value) + Number(document.getElementById("901").value) + Number(document.getElementById("904").value) + Number(document.getElementById("907").value) + Number(document.getElementById("908").value) + Number(document.getElementById("913").value) + Number(document.getElementById("914").value) + Number(document.getElementById("915").value) + Number(document.getElementById("916").value) + Number(document.getElementById("919").value) + Number(document.getElementById("950").value)  + Number(document.getElementById("1010").value);

    document.getElementById("qSubtotalHigienicos").innerHTML = qSubHigienicos;
  };

  qSubtotalHigienicos();
});

window.addEventListener('change', () => { // servilletas subtotal precio //
  function pSubtotalServilletas(precios) {
    let pSubServilletas = Number(document.getElementById("subtotal127").innerHTML) + Number(document.getElementById("subtotal128").innerHTML) + Number(document.getElementById("subtotal290").innerHTML) + Number(document.getElementById("subtotal295").innerHTML) + Number(document.getElementById("subtotal324").innerHTML) + Number(document.getElementById("subtotal417").innerHTML) + Number(document.getElementById("subtotal424").innerHTML) + Number(document.getElementById("subtotal920").innerHTML) + Number(document.getElementById("subtotal921").innerHTML) + Number(document.getElementById("subtotal923").innerHTML) + Number(document.getElementById("subtotal927").innerHTML) + Number(document.getElementById("subtotal928").innerHTML) + Number(document.getElementById("subtotal930").innerHTML)  + Number(document.getElementById("subtotal941").innerHTML) + Number(document.getElementById("subtotal945").innerHTML)  + Number(document.getElementById("subtotal995").innerHTML);

    document.getElementById("pSubtotalServilletas").innerHTML = "$ " + pSubServilletas.toFixed(2);
  };

  pSubtotalServilletas();
});

window.addEventListener('change', () => { // servilletas subtotal cantidad //
  function qSubtotalServilletas(cantidades) {
    let qSubServilletas = Number(document.getElementById("127").value) + Number(document.getElementById("128").value) + Number(document.getElementById("290").value) + Number(document.getElementById("295").value) + Number(document.getElementById("324").value) + Number(document.getElementById("417").value) + Number(document.getElementById("424").value) + Number(document.getElementById("920").value) + Number(document.getElementById("921").value) + Number(document.getElementById("923").value) + Number(document.getElementById("927").value) + Number(document.getElementById("928").value) + Number(document.getElementById("930").value)  + Number(document.getElementById("941").value) + Number(document.getElementById("945").value)  + Number(document.getElementById("995").value);

    document.getElementById("qSubtotalServilletas").innerHTML = qSubServilletas;
  };

  qSubtotalServilletas();
});

window.addEventListener('change', () => { // panuelos subtotal precio //
  function pSubtotalPanuelos(precios) {
    let pSubPanuelos = Number(document.getElementById("subtotal984").innerHTML) + Number(document.getElementById("subtotal987").innerHTML) + Number(document.getElementById("subtotal988").innerHTML) + Number(document.getElementById("subtotal989").innerHTML) + Number(document.getElementById("subtotal1025").innerHTML) + Number(document.getElementById("subtotal1026").innerHTML) + Number(document.getElementById("subtotal1028").innerHTML) + Number(document.getElementById("subtotal1029").innerHTML) + Number(document.getElementById("subtotal1030").innerHTML) + Number(document.getElementById("subtotal1032").innerHTML) + Number(document.getElementById("subtotal1033").innerHTML) + Number(document.getElementById("subtotal1035").innerHTML) + Number(document.getElementById("subtotal11032").innerHTML);

    document.getElementById("pSubtotalPanuelos").innerHTML = "$ " + pSubPanuelos.toFixed(2);
  };

  pSubtotalPanuelos();
});

window.addEventListener('change', () => { // panuelos subtotal cantidad //
  function qSubtotalPanuelos(cantidades) {
    let qSubPanuelos = Number(document.getElementById("984").value) + Number(document.getElementById("987").value) + Number(document.getElementById("988").value) + Number(document.getElementById("989").value) + Number(document.getElementById("1025").value) + Number(document.getElementById("1026").value) + Number(document.getElementById("1028").value) + Number(document.getElementById("1029").value) + Number(document.getElementById("1030").value) + Number(document.getElementById("1032").value) + Number(document.getElementById("1033").value) + Number(document.getElementById("1035").value) + Number(document.getElementById("11032").value);

    document.getElementById("qSubtotalPanuelos").innerHTML = qSubPanuelos;
  };

  qSubtotalPanuelos();
});

window.addEventListener('change', () => { // bobinas subtotal precio //
  function pSubtotalBobinas(precios) {
    let pSubBobinas = Number(document.getElementById("subtotal1000").innerHTML) + Number(document.getElementById("subtotal1003").innerHTML) + Number(document.getElementById("subtotal1004").innerHTML) + Number(document.getElementById("subtotal1018").innerHTML) + Number(document.getElementById("subtotal1046").innerHTML) + Number(document.getElementById("subtotal1047").innerHTML) + Number(document.getElementById("subtotal1094").innerHTML) + Number(document.getElementById("subtotal1097").innerHTML) + Number(document.getElementById("subtotal1098").innerHTML) + Number(document.getElementById("subtotal1099").innerHTML) + Number(document.getElementById("subtotal1100").innerHTML) + Number(document.getElementById("subtotal1101").innerHTML) + Number(document.getElementById("subtotal1102").innerHTML);

    document.getElementById("pSubtotalBobinas").innerHTML = "$ " + pSubBobinas.toFixed(2);
  };

  pSubtotalBobinas();
});

window.addEventListener('change', () => { // bobinas subtotal cantidad //
  function qSubtotalBobinas(cantidades) {
    let qSubBobinas = Number(document.getElementById("1000").value) + Number(document.getElementById("1003").value) + Number(document.getElementById("1004").value) + Number(document.getElementById("1018").value) + Number(document.getElementById("1046").value) + Number(document.getElementById("1047").value) + Number(document.getElementById("1094").value) + Number(document.getElementById("1097").value) + Number(document.getElementById("1098").value) + Number(document.getElementById("1099").value) + Number(document.getElementById("1100").value) + Number(document.getElementById("1101").value) + Number(document.getElementById("1102").value);

    document.getElementById("qSubtotalBobinas").innerHTML = qSubBobinas;
  };

  qSubtotalBobinas();
});

window.addEventListener('change', () => { // Total cantidades //
  let qHigienicos = Number(document.getElementById("qSubtotalHigienicos").innerHTML); 
  let qServilletas = Number(document.getElementById("qSubtotalServilletas").innerHTML);
  let qPanuelos = Number(document.getElementById("qSubtotalPanuelos").innerHTML);
  let qBobinas = Number(document.getElementById("qSubtotalBobinas").innerHTML);
  
  document.getElementById("qTotal").innerHTML = qHigienicos + qServilletas + qPanuelos + qBobinas;
});

window.addEventListener('change', () => { // Total precio //
  let pHigienicos = Number(document.getElementById("pSubtotalHigienicos").innerHTML.slice(1));
  let pServilletas = Number(document.getElementById("pSubtotalServilletas").innerHTML.slice(1));
  let pPanuelos = Number(document.getElementById("pSubtotalPanuelos").innerHTML.slice(1));
  let pBobinas = Number(document.getElementById("pSubtotalBobinas").innerHTML.slice(1));

  document.getElementById("pTotal").innerHTML = "$" + (pHigienicos + pServilletas + pPanuelos + pBobinas).toFixed(2);
});