(this["webpackJsonpautocomplete-search-react"]=this["webpackJsonpautocomplete-search-react"]||[]).push([[0],[,,,,,,,function(n,a,e){n.exports=e(15)},,,,,function(n,a,e){},function(n,a,e){},function(n,a,e){},function(n,a,e){"use strict";e.r(a);var i=e(0),t=e.n(i),r=e(2),o=e.n(r),l=(e(12),e(13),e(14),e(3)),s=e(4),u=e(6),c=e(5),m=function(n){Object(u.a)(e,n);var a=Object(c.a)(e);function e(n){var i;return Object(l.a)(this,e),(i=a.call(this,n)).onTextChange=function(n){var a=i.props.items,e=n.target.value,t=[];if(0<e.length){var r=new RegExp("^".concat(e),"i");t=a.sort().filter((function(n){return r.test(n)}))}i.setState({suggestion:t,text:e})},i.state={suggestion:[],text:""},i}return Object(s.a)(e,[{key:"suggesSelected",value:function(n){this.setState({suggestion:[],text:n})}},{key:"renderSuggestion",value:function(){var n=this,a=this.state.suggestion;return 0===a.length?t.a.createElement("div",null):t.a.createElement("ul",null,a.map((function(a){return t.a.createElement("li",{onClick:function(){return n.suggesSelected(a)}},a)})))}},{key:"render",value:function(){var n=this.state.text;return t.a.createElement("div",{className:"AutoCompleteText"},t.a.createElement("input",{value:n,onChange:this.onTextChange,type:"text"}),this.renderSuggestion())}}]),e}(t.a.Component),d="Afghanistan\nAlbania\nAlgeria\nAndorra\nAngola\nAntigua & Deps\nArgentina\nArmenia\nAustralia\nAustria\nAzerbaijan\nBahamas\nBahrain\nBangladesh\nBarbados\nBelarus\nBelgium\nBelize\nBenin\nBhutan\nBolivia\nBosnia Herzegovina\nBotswana\nBrazil\nBrunei\nBulgaria\nBurkina\nBurundi\nCambodia\nCameroon\nCanada\nCape Verde\nCentral African Rep\nChad\nChile\nChina\nColombia\nComoros\nCongo\nCongo {Democratic Rep}\nCosta Rica\nCroatia\nCuba\nCyprus\nCzech Republic\nDenmark\nDjibouti\nDominica\nDominican Republic\nEast Timor\nEcuador\nEgypt\nEl Salvador\nEquatorial Guinea\nEritrea\nEstonia\nEthiopia\nFiji\nFinland\nFrance\nGabon\nGambia\nGeorgia\nGermany\nGhana\nGreece\nGrenada\nGuatemala\nGuinea\nGuinea-Bissau\nGuyana\nHaiti\nHonduras\nHungary\nIceland\nIndia\nIndonesia\nIran\nIraq\nIreland {Republic}\nIsrael\nItaly\nIvory Coast\nJamaica\nJapan\nJordan\nKazakhstan\nKenya\nKiribati\nKorea North\nKorea South\nKosovo\nKuwait\nKyrgyzstan\nLaos\nLatvia\nLebanon\nLesotho\nLiberia\nLibya\nLiechtenstein\nLithuania\nLuxembourg\nMacedonia\nMadagascar\nMalawi\nMalaysia\nMaldives\nMali\nMalta\nMarshall Islands\nMauritania\nMauritius\nMexico\nMicronesia\nMoldova\nMonaco\nMongolia\nMontenegro\nMorocco\nMozambique\nMyanmar, {Burma}\nNamibia\nNauru\nNepal\nNetherlands\nNew Zealand\nNicaragua\nNiger\nNigeria\nNorway\nOman\nPakistan\nPalau\nPanama\nPapua New Guinea\nParaguay\nPeru\nPhilippines\nPoland\nPortugal\nQatar\nRomania\nRussian Federation\nRwanda\nSt Kitts & Nevis\nSt Lucia\nSaint Vincent & the Grenadines\nSamoa\nSan Marino\nSao Tome & Principe\nSaudi Arabia\nSenegal\nSerbia\nSeychelles\nSierra Leone\nSingapore\nSlovakia\nSlovenia\nSolomon Islands\nSomalia\nSouth Africa\nSouth Sudan\nSpain\nSri Lanka\nSudan\nSuriname\nSwaziland\nSweden\nSwitzerland\nSyria\nTaiwan\nTajikistan\nTanzania\nThailand\nTogo\nTonga\nTrinidad & Tobago\nTunisia\nTurkey\nTurkmenistan\nTuvalu\nUganda\nUkraine\nUnited Arab Emirates\nUnited Kingdom\nUnited States\nUruguay\nUzbekistan\nVanuatu\nVatican City\nVenezuela\nVietnam\nYemen\nZambia\nZimbabwe".split("\n"),h="Bob Pettit\nBob Cousy\nBill Russell\nBob Pettit\nWilt Chamberlain\nBill Russell\nBill Russell\nBill Russell\nOscar Robertson\nBill Russell\nWilt Chamberlain\nWilt Chamberlain\nWilt Chamberlain\nWes Unseld\nWillis Reed\nKareem Abdul-Jabbar\nKareem Abdul-Jabbar\nDace Cowens\nKareem Abdul-Jabbar\nBob McAdoo\nKareem Abdul-Jabbar\nKareem Abdul-Jabbar\nBill Walton\nMoses Malone\nKareem Abdul-Jabbar\nJulius Erving\nMoses Malone\nMoses Malone\nLarry Bird\nLarry Bird\nLarry Bird\nMagic Johnson\nMichael Jordan\nMagic Johnson\nMagic Johnson\nMichael Jordan\nMichael Jordan\nCharles Barkley\nHakeem Olajuwon\nDavid Robinson\nMichael Jordan\nKarl Malone\nMichael Jordan\nKarl Malone\nShaquille O\u2019Neal\nAllen Iverson\nTim Duncan\nTim Duncan\nKevin Garnett\nSteve Nash\nSteve Nash\nDirk Nowitzki\nKobe Bryant\nLeBron James\nLeBron James\nDerrick Rose\nLeBron James\nLeBron James\nKevin Durant\nStephen Curry\nStephen Curry\nRussell Westbrook\nJames Harden\nGiannis Antetokounmpo".split("\n");var g=function(){return t.a.createElement("div",{className:"App"},t.a.createElement("h2",null,"Autocomplete Search Component Display [",t.a.createElement("a",{href:"https://github.com/phase7/autocomplete-search-react"},"Source"),"]"),t.a.createElement("h3",null,"Countries"),t.a.createElement(m,{items:d}),t.a.createElement("h3",null,"NBA MVPs"),t.a.createElement(m,{items:h}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(t.a.createElement(t.a.StrictMode,null,t.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.33906038.chunk.js.map