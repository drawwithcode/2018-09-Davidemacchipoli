var myMap;
var canvas;
var myLoc;
var mappa = new Mappa('MapboxGL', 'pk.eyJ1IjoiZGF2aWRlbWFjY2hpIiwiYSI6ImNqb3p2YmxmdTBla3YzcWp6aHoybGo2MW0ifQ.NZlHnrBwIYAi_Zzf6l4XkA');

//latitudini e longitudini dei posti
var parLat = 48.910786;
var parLon = 2.241964;
var madLat= 40.4378693;
var madLon= -3.8199644;
var lisLat= 38.7436056;
var lisLon= -9.230415;
var lonLat= 51.528308;
var lonLon= -0.3817765;
var dubLat= 53.3242377;
var dubLon= -6.3861299;
var berLat= 46.9546485;
var berLon= 7.3246586;
var romLat= 41.9099856;
var romLon= 12.3955703;
var tirLat= 41.330961;
var tirLon= 19.7477833;
var fraLat= 50.1211273;
var fraLon= 8.4961375;
var stoLat= 59.3260664;
var stoLon= 17.8416278;
var varLat= 52.2322568;
var varLon= 21.0134946;
var kieLat= 50.4016974;
var kieLon= 30.2518239;
var vieLat= 48.2205994;
var vieLon= 16.2396333;
var bucLat= 44.4377397;
var bucLon= 25.9542103;
var zagLat= 45.8401099;
var zagLon= 15.8239046;
var oslLat= 59.8937803;
var oslLon= 10.6446919;

var distanza;

// Lets put all our map options in a single object
var options = {
	lat: 0,
	lng: 0,
	zoom: 4,
	style: 'mapbox://styles/davidemacchi/cjozve39n0q142rqv1tjnv9sz',
	pitch: 30
};

var options1 = {
	lat: parLat,
	lng: parLon,
	zoom: 4,
	style: 'mapbox://styles/davidemacchi/cjozve39n0q142rqv1tjnv9sz',
	pitch: 30
};

var options2 = {
	lat: madLat,
	lng: madLon,
	zoom: 4,
	style: 'mapbox://styles/davidemacchi/cjozve39n0q142rqv1tjnv9sz',
	pitch: 30
};

var options3 = {
	lat: lisLat,
	lng: lisLon,
	zoom: 4,
	style: 'mapbox://styles/davidemacchi/cjozve39n0q142rqv1tjnv9sz',
	pitch: 30
};


var options4 = {
	lat: lonLat,
	lng: lonLon,
	zoom: 4,
	style: 'mapbox://styles/davidemacchi/cjozve39n0q142rqv1tjnv9sz',
	pitch: 30
};

var options5 = {
	lat: dubLat,
	lng: dubLon,
	zoom: 4,
	style: 'mapbox://styles/davidemacchi/cjozve39n0q142rqv1tjnv9sz',
	pitch: 30
};

var options6 = {
	lat: berLat,
	lng: berLon,
	zoom: 4,
	style: 'mapbox://styles/davidemacchi/cjozve39n0q142rqv1tjnv9sz',
	pitch: 30
};

var options7 = {
	lat: romLat,
	lng: romLon,
	zoom: 4,
	style: 'mapbox://styles/davidemacchi/cjozve39n0q142rqv1tjnv9sz',
	pitch: 30
};

var options8 = {
	lat: tirLat,
	lng: tirLon,
	zoom: 4,
	style: 'mapbox://styles/davidemacchi/cjozve39n0q142rqv1tjnv9sz',
	pitch: 30
};

var options9 = {
	lat: fraLat,
	lng: fraLon,
	zoom: 4,
	style: 'mapbox://styles/davidemacchi/cjozve39n0q142rqv1tjnv9sz',
	pitch: 30
};

var options10 = {
	lat: fraLat,
	lng: fraLon,
	zoom: 4,
	style: 'mapbox://styles/davidemacchi/cjozve39n0q142rqv1tjnv9sz',
	pitch: 30
};

var options11 = {
	lat: varLat,
	lng: varLon,
	zoom: 4,
	style: 'mapbox://styles/davidemacchi/cjozve39n0q142rqv1tjnv9sz',
	pitch: 30
};

var options12 = {
	lat: kieLat,
	lng: kieLon,
	zoom: 4,
	style: 'mapbox://styles/davidemacchi/cjozve39n0q142rqv1tjnv9sz',
	pitch: 30
};

var options13 = {
	lat: vieLat,
	lng: vieLon,
	zoom: 4,
	style: 'mapbox://styles/davidemacchi/cjozve39n0q142rqv1tjnv9sz',
	pitch: 30
};

var options14 = {
	lat: bucLat,
	lng: bucLon,
	zoom: 4,
	style: 'mapbox://styles/davidemacchi/cjozve39n0q142rqv1tjnv9sz',
	pitch: 30
};


var options15 = {
	lat: zagLat,
	lng: zagLon,
	zoom: 4,
	style: 'mapbox://styles/davidemacchi/cjozve39n0q142rqv1tjnv9sz',
	pitch: 30
};


var options16 = {
	lat: oslLat,
	lng: oslLon,
	zoom: 4,
	style: 'mapbox://styles/davidemacchi/cjozve39n0q142rqv1tjnv9sz',
	pitch: 30
};


function preload(){
  // put preload code here
  myLoc = getCurrentPosition();
}




function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	// background(100); let's uncomment this, we don't need it for now

	//update options according to current location
	options.lat = myLoc.latitude;
	options.lng = myLoc.longitude;

	// Create a tile map with the options declared
	myMap = mappa.tileMap(options);
	myMap = mappa.tileMap(options1);
		myMap = mappa.tileMap(options2);
			myMap = mappa.tileMap(options3);
myMap = mappa.tileMap(options4);
myMap = mappa.tileMap(options5);
myMap = mappa.tileMap(options6);
myMap = mappa.tileMap(options7);
myMap = mappa.tileMap(options8);
myMap = mappa.tileMap(options9);
myMap = mappa.tileMap(options10);
myMap = mappa.tileMap(options11);
myMap = mappa.tileMap(options12);
myMap = mappa.tileMap(options13);
myMap = mappa.tileMap(options14);
myMap = mappa.tileMap(options15);
myMap = mappa.tileMap(options16);

	myMap.overlay(canvas);
}

function draw() {
	var distanzaParigi = calcGeoDistance(myLoc.latitude, myLoc.longitude, parLat, parLon, "km");
	var distanzaLondra = calcGeoDistance(myLoc.latitude, myLoc.longitude, lonLat, lonLon, "km");
	var distanzaLisbona = calcGeoDistance(myLoc.latitude, myLoc.longitude, lisLat, lisLon, "km");
	var distanzaMadrid = calcGeoDistance(myLoc.latitude, myLoc.longitude, madLat, madLon, "km");
	var distanzaDublino = calcGeoDistance(myLoc.latitude, myLoc.longitude, dubLat, dubLon, "km");
	var distanzaBerna = calcGeoDistance(myLoc.latitude, myLoc.longitude, berLat, berLon, "km");
	var distanzaRoma = calcGeoDistance(myLoc.latitude, myLoc.longitude, romLat, romLon, "km");
	var distanzaTirana = calcGeoDistance(myLoc.latitude, myLoc.longitude, tirLat, tirLon, "km");
	var distanzaFrancoforte = calcGeoDistance(myLoc.latitude, myLoc.longitude, fraLat, fraLon, "km");
	var distanzaStoccolma = calcGeoDistance(myLoc.latitude, myLoc.longitude, stoLat, stoLon, "km");
	var distanzaVarsavia = calcGeoDistance(myLoc.latitude, myLoc.longitude, varLat, varLon, "km");
	var distanzaKiev = calcGeoDistance(myLoc.latitude, myLoc.longitude, kieLat, kieLon, "km");
	var distanzaVienna = calcGeoDistance(myLoc.latitude, myLoc.longitude, vieLat, vieLon, "km");
	var distanzaBucarest= calcGeoDistance(myLoc.latitude, myLoc.longitude, bucLat, bucLon, "km");
	var distanzaZagabria= calcGeoDistance(myLoc.latitude, myLoc.longitude, zagLat, zagLon, "km");
	var distanzaOslo= calcGeoDistance(myLoc.latitude, myLoc.longitude, oslLat, oslLon, "km");

	clear();

	var point = myMap.latLngToPixel(parLat,parLon);
fill('white');
noStroke();
ellipse(point.x,point.y,15);
textSize(14);
textAlign(CENTER);
textFont('Fjalla One');
	text('Parigi', point.x, point.y - 16);


	var point = myMap.latLngToPixel(madLat,madLon);
fill('white');
noStroke();
ellipse(point.x,point.y,15);
textSize(14);
textAlign(CENTER);
textFont('Fjalla One');
	text('Madrid', point.x, point.y - 16);


	var point = myMap.latLngToPixel(lisLat,lisLon);
fill('white');
noStroke();
ellipse(point.x,point.y,15);
textSize(14);
textAlign(CENTER);
textFont('Fjalla One');
	text('Lisbona', point.x, point.y - 16);

	var point = myMap.latLngToPixel(lonLat,lonLon);
	fill('white');
	noStroke();
	ellipse(point.x,point.y,15);
	textSize(14);
	textAlign(CENTER);
	textFont('Fjalla One');
	text('Londra', point.x, point.y - 16);


	var point = myMap.latLngToPixel(myLoc.latitude, myLoc.longitude);
	fill(204, 255, 238);
		ellipse(point.x, point.y, 11);
	textSize(14);
	textAlign(CENTER);
	textFont('Fjalla One');
		text('You are here', point.x, point.y - 16);

		var point = myMap.latLngToPixel(dubLat, dubLon);
		fill('white');
		noStroke();
			ellipse(point.x, point.y, 11);
		textSize(14);
		textAlign(CENTER);
		textFont('Fjalla One');
			text('Dublino', point.x, point.y - 16);


			var point = myMap.latLngToPixel(berLat, berLon);
			fill('white');
			noStroke();
				ellipse(point.x, point.y, 11);
			textSize(14);
			textAlign(CENTER);
			textFont('Fjalla One');
				text('Berna', point.x, point.y - 16);


				var point = myMap.latLngToPixel(romLat, romLon);
				fill('white');
				noStroke();
					ellipse(point.x, point.y, 11);
				textSize(14);
				textAlign(CENTER);
				textFont('Fjalla One');
					text('Roma', point.x, point.y - 16);

					var point = myMap.latLngToPixel(tirLat, tirLon);
					fill('white');
					noStroke();
						ellipse(point.x, point.y, 11);
					textSize(14);
					textAlign(CENTER);
					textFont('Fjalla One');
						text('Tirana', point.x, point.y - 16);


						var point = myMap.latLngToPixel(fraLat, fraLon);
						fill('white');
						noStroke();
							ellipse(point.x, point.y, 11);
						textSize(14);
						textAlign(CENTER);
						textFont('Fjalla One');
							text('Francoforte', point.x, point.y - 16);

							var point = myMap.latLngToPixel(stoLat, stoLon);
							fill('white');
							noStroke();
								ellipse(point.x, point.y, 11);
							textSize(14);
							textAlign(CENTER);
							textFont('Fjalla One');
								text('Stoccolma', point.x, point.y - 16);


								var point = myMap.latLngToPixel(varLat, varLon);
								fill('white');
								noStroke();
									ellipse(point.x, point.y, 11);
								textSize(14);
								textAlign(CENTER);
								textFont('Fjalla One');
									text('Varsavia', point.x, point.y - 16);


									var point = myMap.latLngToPixel(kieLat, kieLon);
									fill('white');
									noStroke();
										ellipse(point.x, point.y, 11);
									textSize(14);
									textAlign(CENTER);
									textFont('Fjalla One');
										text('Kiev', point.x, point.y - 16);


										var point = myMap.latLngToPixel(vieLat, vieLon);
										fill('white');
										noStroke();
											ellipse(point.x, point.y, 11);
										textSize(14);
										textAlign(CENTER);
										textFont('Fjalla One');
											text('Vienna', point.x, point.y - 16);

											var point = myMap.latLngToPixel(bucLat, bucLon);
											fill('white');
											noStroke();
												ellipse(point.x, point.y, 11);
											textSize(14);
											textAlign(CENTER);
											textFont('Fjalla One');
												text('Bucarest', point.x, point.y - 16);

												var point = myMap.latLngToPixel(zagLat, zagLon);
												fill('white');
												noStroke();
													ellipse(point.x, point.y, 11);
												textSize(14);
												textAlign(CENTER);
												textFont('Fjalla One');
													text('Zagabria', point.x, point.y - 16);

													var point = myMap.latLngToPixel(oslLat, oslLon);
													fill('white');
													noStroke();
														ellipse(point.x, point.y, 11);
													textSize(14);
													textAlign(CENTER);
													textFont('Fjalla One');
														text('Oslo', point.x, point.y - 16);


if (keyCode === UP_ARROW) {
			var point = myMap.latLngToPixel(parLat,parLon);
			textSize(14);
			textAlign(CENTER);
			textFont('Fjalla One');
				text(distanzaParigi + 'km', point.x, point.y - 28);
				var point = myMap.latLngToPixel(lonLat,lonLon);
    text(distanzaLondra + 'km', point.x, point.y - 28);
		var point = myMap.latLngToPixel(lisLat,lisLon);
text(distanzaLisbona + 'km', point.x, point.y - 28);
var point = myMap.latLngToPixel(madLat,madLon);
text(distanzaMadrid + 'km', point.x, point.y - 28);
var point = myMap.latLngToPixel(dubLat,dubLon);
text(distanzaDublino + 'km', point.x, point.y - 28);
var point = myMap.latLngToPixel(berLat,berLon);
text(distanzaBerna + 'km', point.x, point.y - 28);
var point = myMap.latLngToPixel(romLat,romLon);
text(distanzaRoma + 'km', point.x, point.y - 28);
var point = myMap.latLngToPixel(tirLat,tirLon);
text(distanzaTirana + 'km', point.x, point.y - 28);
var point = myMap.latLngToPixel(fraLat,fraLon);
text(distanzaFrancoforte + 'km', point.x, point.y - 28);
var point = myMap.latLngToPixel(stoLat,stoLon);
text(distanzaStoccolma + 'km', point.x, point.y - 28);
var point = myMap.latLngToPixel(varLat,varLon);
text(distanzaVarsavia + 'km', point.x, point.y - 28);
var point = myMap.latLngToPixel(kieLat,kieLon);
text(distanzaKiev + 'km', point.x, point.y - 28);
var point = myMap.latLngToPixel(vieLat,vieLon);
text(distanzaVienna + 'km', point.x, point.y - 28);
var point = myMap.latLngToPixel(bucLat,bucLon);
text(distanzaBucarest + 'km', point.x, point.y - 28);
var point = myMap.latLngToPixel(zagLat,zagLon);
text(distanzaZagabria + 'km', point.x, point.y - 28);
var point = myMap.latLngToPixel(oslLat,oslLon);
text(distanzaOslo + 'km', point.x, point.y - 28);



		} else if (keyCode === DOWN_ARROW) {
			text('', point.x, point.y - 26);
		}


//titolo
textSize(24);
textAlign(CENTER);
textFont('Patua One');
	text('Premi le frecce Su e Giù per scoprire quanto sei distante da alcune città europee', windowWidth/2, windowHeight/12);

}
