var lang = [];

if (JSON.parse(localStorage.getItem("lang"))==undefined){
    lang[0]="es";
    localStorage.setItem("lang", JSON.stringify(lang));
}

/****************************************************************************************
 * 
 * 
 * ACA TENEMOS QUE VER SI ESTO ES LO MEJOR; PERO DE MOMENTO LO VOY A HACER ASI
 * 
 * 
 ****************************************************************************************/

function FiltrarIdioma(cod){

    lang[0]=cod;
    localStorage.setItem("lang", JSON.stringify(lang));

    /*Esto se tiene que poder hacer de una forma mas simple, pero en este momento no me da la cabeza */
    /* Selecciono la bandera del menú */
    switch (lang[0]) {
        case 'es':
            document.getElementById('selected-flag').innerHTML='<img class="flag" src="media/flags/espana.png" alt="">';
        break;
        case 'pt':
            document.getElementById('selected-flag').innerHTML='<img class="flag" src="media/flags/brasil.png" alt="">';
        break;
        case 'en':
            document.getElementById('selected-flag').innerHTML='<img class="flag" src="media/flags/reino-unido.png" alt="">';
        break;
        case 'it':
            document.getElementById('selected-flag').innerHTML='<img class="flag" src="media/flags/italia.png" alt="">';
        break;
        case 'fr':
            document.getElementById('selected-flag').innerHTML='<img class="flag" src="media/flags/francia.png" alt="">';
        break;
    }


    switch (lang[0]) {
        case 'es':
            document.getElementById('paq').innerHTML="Paquetes Sugeridos";
            document.getElementById('paq-bsas').innerHTML="Paquete Buenos Aires";
            document.getElementById('paq-mendoza').innerHTML="Paquete Mendoza";
            document.getElementById('paq-bariloche').innerHTML="Paquete bariloche";
            document.getElementById('paq-cataratas').innerHTML="Paquete cataratas";
            document.getElementById('paq-bsas-text').innerHTML="La ciudad de Buenos Aires se encuentra a orillas del Rio de la Plata, se destaca como el centro favorito de los turistas extranjeros y nacionales.​ Son atraídos por una ciudad cosmopolita, de varios contrastes y con amplia infraestructura. Entre otros muchos factores, el tango es uno de los motivos para la visita a la capital argentina.​ La característica noche porteña es uno de los grandes atrayentes por su variada oferta cultural, gastronómica y de entretenimiento. Los viajeros eligen generalmente una visita nocturna a los locales donde se baila tango y un paseo a una típica estancia en la provincia de Buenos Aires, para degustar el tradicional asado.";
            document.getElementById('paq-mendoza-text').innerHTML="La provincia de Mendoza es una de las principales capitales vitivinícolas del mundo y uno de los principales centros turísticos de Argentina. Atrae numerosos turistas que recorren los circuitos de viñedos y bodegas. Hay sitios de interés histórico, en su mayoría relacionados con José de San Martin y el Ejército de los Andes, destacándose el Cerro de la Gloria, las rutas sanmartinianas y los caminos del vino. La Cordillera de los Andes atrae a numerosos turistas, argentinos y extranjeros, interesados en ver los paisajes montañosos, las actividades deportivas como el andinismo, el ráfting o el esquí, o los que desean tomar contacto con la nieve";
            document.getElementById('paq-bariloche-text').innerHTML="Bariloche es la capital de los lagos del sur y forma parte del importante circuito turístico de los Siete Lagos. La ciudad cuenta con un importante flujo turístico todo el año. Se encuentra sobre la orilla del lago Nahuel Huapi, tiene muchas ofertas gastronómicas y es famosa por sus chocolates. Las principales actividades son los deportes invernales, la pesca, campamentos en pleno bosque, excursiones en barco, cabalgatas, entre otras. Bariloche es el segundo destino turístico más elegido por los visitantes. Un imperdible de la zona es el Parque Nacional Los Arrayanes, que protege uno de los pocos bosques de arrayanes que quedan en el mundo.";
            document.getElementById('paq-cataratas-text').innerHTML="Las Cataratas del Iguazú son una de las Siete Maravillas del Mundo, están conformadas por 275 saltos de agua que caen desde las más diversas alturas. Desde el inferior se llega a la base de los saltos, donde la fuerza del agua se transforma en rocío o vapor que moja a los concurrentes. Están ubicadas al noreste, zona de selva subtropical, son las cataratas más conocidas de toda la región y su explotación turística cuenta con buen desarrollo de infraestructura y con paseos muy diversos. Es zona del parque nacional Iguazú, donde se preservan la flora y fauna originales. Su salto más imponente es la llamada Garganta del Diablo.";            
        break;
        case 'pt':
            document.getElementById('paq').innerHTML="Pacotes Sugeridos";
            document.getElementById('paq-bsas').innerHTML="Buenos Aires";
            document.getElementById('paq-mendoza').innerHTML="Mendoza";
            document.getElementById('paq-bariloche').innerHTML="Bariloche";
            document.getElementById('paq-cataratas').innerHTML="Cataratas";
            document.getElementById('paq-bsas-text').innerHTML="A cidade de Buenos Aires está localizada às margens do Rio de la Plata, destaca-se como o centro preferido dos turistas estrangeiros e nacionais, são atraídos por uma cidade cosmopolita, de vários contrastes e com ampla infraestrutura. Entre tantos outros fatores, o tango é um dos motivos para uma visita à capital argentina. A característica noite portenha é um dos grandes atrativos por sua variada oferta cultural, gastronômica e de lazer. Os viajantes geralmente optam por uma visita noturna aos locais onde se dança o tango e uma caminhada a uma típica fazenda da província de Buenos Aires, para saborear o tradicional churrasco.";
            document.getElementById('paq-mendoza-text').innerHTML="A província de Mendoza é uma das principais capitais mundiais do vinho e um dos principais centros turísticos da Argentina. Atrai muitos turistas que visitam os circuitos de vinhedos e adegas. Existem locais de interesse histórico, principalmente relacionados com José de San Martin e o Exército dos Andes, destacando-se o Cerro de la Gloria, as rotas de San Martín e as estradas do vinho. A Cordilheira dos Andes atrai muitos turistas, argentinos e estrangeiros, interessados ​​em conhecer as paisagens montanhosas, praticar esportes como montanhismo, rafting ou esqui, ou ainda aqueles que desejam entrar em contato com a neve.";
            document.getElementById('paq-bariloche-text').innerHTML="Bariloche é a capital dos lagos do sul e faz parte do importante circuito turístico dos Sete Lagos. A cidade possui um importante fluxo turístico durante todo o ano. Está localizada às margens do Lago Nahuel Huapi, tem muitas ofertas gastronômicas e é famosa por seus chocolates. As principais atividades são esportes de inverno, pesca, camping no meio da floresta, passeios de barco, cavalgadas, entre outras. Bariloche é o segundo destino turístico mais procurado pelos visitantes. Um local imperdível na área é o Parque Nacional Los Arrayanes, que protege uma das poucas florestas de murta remanescentes no mundo.";
            document.getElementById('paq-cataratas-text').innerHTML="As Cataratas do Iguaçu são uma das Sete Maravilhas do Mundo, são formadas por 275 cachoeiras que caem das mais diversas alturas. Do fundo chega-se à base das quedas, onde a força da água se transforma em orvalho ou vapor que molha os participantes. Localizadas ao Nordeste, uma área de selva subtropical, são as cachoeiras mais conhecidas de toda a região e seu aproveitamento turístico conta com bom desenvolvimento de infraestrutura e passeios muito diversos. É uma área do Parque Nacional do Iguaçu, onde a flora e a fauna originais são preservadas. Seu salto mais impressionante é a chamada Garganta do Diabo.";
        break;
        case 'en':
            document.getElementById('paq').innerHTML="Suggested packages";
            document.getElementById('paq-bsas').innerHTML="Buenos Aires";
            document.getElementById('paq-mendoza').innerHTML="Mendoza";
            document.getElementById('paq-bariloche').innerHTML="Bariloche";
            document.getElementById('paq-cataratas').innerHTML="Cataratas";
            document.getElementById('paq-bsas-text').innerHTML="The city of Buenos Aires is located on the banks of the Rio de la Plata, stands out as the favorite center of foreign and national tourists, they are attracted by a cosmopolitan city, of various contrasts and with extensive infrastructure. Among many other factors, tango is one of the reasons for visiting the Argentine capital.The characteristic Buenos Aires night is one of the great attractions due to its varied cultural, gastronomic and entertainment offer. Travelers generally choose a night visit to the places where tango is danced and a walk to a typical ranch in the province of Buenos Aires, to taste the traditional barbecue.";
            document.getElementById('paq-mendoza-text').innerHTML="The province of Mendoza is one of the main wine capitals in the world and one of the main tourist centers in Argentina. It attracts many tourists who visit the circuits of vineyards and wineries. There are sites of historical interest, mostly related to José de San Martin and the Army of the Andes, highlighting the Cerro de la Gloria, the San Martín routes and the wine roads. The Cordillera de los Andes attracts many tourists, Argentines and foreigners, interested in seeing the mountainous landscapes, sports activities such as mountaineering, rafting or skiing, or those who want to get in touch with the snow.";
            document.getElementById('paq-bariloche-text').innerHTML="Bariloche is the capital of the southern lakes and is part of the important Seven Lakes tourist circuit. The city has an important tourist flow all year round. It is located on the shore of Lake Nahuel Huapi, has many gastronomic offers and is famous for its chocolates. The main activities are winter sports, fishing, camping in the forest, boat trips, horseback riding, among others. Bariloche is the second most popular tourist destination for visitors. A must see in the area is Los Arrayanes National Park, which protects one of the few remaining myrtle forests in the world.";
            document.getElementById('paq-cataratas-text').innerHTML="The Iguazu Falls are one of the Seven Wonders of the World, they are made up of 275 waterfalls that fall from the most diverse heights. From the bottom one reaches the base of the falls, where the force of the water is transformed into dew or steam that wets the attendees. They are located to the northeast, a subtropical jungle area, they are the best known waterfalls in the entire region and their tourist exploitation has good infrastructure development and very diverse walks. It is an area of the Iguazú National Park, where the original flora and fauna are preserved. Its most impressive jump is the so-called Devil's Throat.";
        break;
        case 'it':
            document.getElementById('paq').innerHTML="Pacchetti suggeriti";
            document.getElementById('paq-bsas').innerHTML="Buenos Aires";
            document.getElementById('paq-mendoza').innerHTML="Mendoza";
            document.getElementById('paq-bariloche').innerHTML="Bariloche";
            document.getElementById('paq-cataratas').innerHTML="Cataratas";
            document.getElementById('paq-bsas-text').innerHTML="La città di Buenos Aires si trova sulle rive del Rio de la Plata, si distingue come il centro preferito di turisti stranieri e nazionali, sono attratti da una città cosmopolita, di vari contrasti e con ampie infrastrutture. Tra molti altri fattori, il tango è uno dei motivi per visitare la capitale argentina. La caratteristica notte di Buenos Aires è una delle grandi attrazioni per la sua variegata offerta culturale, gastronomica e di intrattenimento. I viaggiatori generalmente scelgono una visita notturna nei luoghi dove si balla il tango e una passeggiata in un tipico ranch della provincia di Buenos Aires, per gustare il tradizionale barbecue.";
            document.getElementById('paq-mendoza-text').innerHTML="La provincia di Mendoza è una delle principali capitali mondiali del vino e uno dei principali centri turistici dell'Argentina. Attira molti turisti che visitano i circuiti dei vigneti e delle cantine. Ci sono siti di interesse storico, principalmente legati a José de San Martin e all'Esercito delle Ande, evidenziando il Cerro de la Gloria, le strade di San Martín e le strade del vino. La Cordillera de los Andes attira molti turisti, argentini e stranieri, interessati a vedere i paesaggi montuosi, ad attività sportive come l'alpinismo, il rafting o lo sci, o coloro che vogliono entrare in contatto con la neve.";
            document.getElementById('paq-bariloche-text').innerHTML="Bariloche è la capitale dei laghi meridionali e fa parte dell'importante circuito turistico dei Sette Laghi. La città ha un importante flusso turistico tutto l'anno. Si trova sulla riva del lago Nahuel Huapi, ha molte offerte gastronomiche ed è famoso per i suoi cioccolatini. Le attività principali sono gli sport invernali, la pesca, il campeggio in mezzo alla foresta, le gite in barca, l'equitazione, tra le altre. Bariloche è la seconda destinazione turistica più popolare per i visitatori. Da vedere nella zona è il Parco Nazionale Los Arrayanes, che protegge una delle poche foreste di mirto rimaste al mondo.";
            document.getElementById('paq-cataratas-text').innerHTML="Le Cascate di Iguazu sono una delle Sette Meraviglie del Mondo, sono formate da 275 cascate che cadono dalle altezze più diverse. Dal basso si raggiunge la base delle cascate, dove la forza dell'acqua si trasforma in rugiada o vapore che bagna i partecipanti. Si trovano a nord-est, un'area di giungla subtropicale, sono le cascate più conosciute dell'intera regione e il loro sfruttamento turistico ha un buon sviluppo delle infrastrutture e passeggiate molto diverse. È un'area del Parco Nazionale dell'Iguazú, dove sono conservate la flora e la fauna originali. Il suo salto più impressionante è la cosiddetta gola del diavolo.";
        break;
        case 'fr':
            document.getElementById('paq').innerHTML="Forfaits suggérés";
            document.getElementById('paq-bsas').innerHTML="Buenos Aires";
            document.getElementById('paq-mendoza').innerHTML="Mendoza";
            document.getElementById('paq-bariloche').innerHTML="Bariloche";
            document.getElementById('paq-cataratas').innerHTML="Cataratas";
            document.getElementById('paq-bsas-text').innerHTML="La ville de Buenos Aires est située sur les rives du Rio de la Plata, se distingue comme le centre de prédilection des touristes étrangers et nationaux, ils sont attirés par une ville cosmopolite, aux contrastes variés et aux infrastructures étendues. Parmi de nombreux autres facteurs, le tango est l'une des raisons de visiter la capitale argentine. La nuit caractéristique de Buenos Aires est l'une des grandes attractions en raison de son offre culturelle, gastronomique et de divertissement variée. Les voyageurs choisissent généralement une visite nocturne des lieux où l'on danse le tango et une promenade dans un ranch typique de la province de Buenos Aires, pour goûter au barbecue traditionnel.";
            document.getElementById('paq-mendoza-text').innerHTML="La province de Mendoza est l'une des principales capitales mondiales du vin et l'un des principaux centres touristiques d'Argentine. Elle attire de nombreux touristes qui visitent les circuits des vignobles et des caves. Il existe des sites d'intérêt historique, principalement liés à José de San Martin et à l'armée des Andes, mettant en évidence le Cerro de la Gloria, les routes de San Martín et les routes des vins. La Cordillera de los Andes attire de nombreux touristes, argentins et étrangers, intéressés par les paysages montagneux, les activités sportives telles que l'alpinisme, le rafting ou le ski, ou ceux qui veulent entrer en contact avec la neige.";
            document.getElementById('paq-bariloche-text').innerHTML="Bariloche est la capitale des lacs du sud et fait partie de l'important circuit touristique des Sept Lacs. La ville a un flux touristique important toute l'année. Il est situé au bord du lac Nahuel Huapi, propose de nombreuses offres gastronomiques et est célèbre pour ses chocolats. Les principales activités sont les sports d'hiver, la pêche, le camping en pleine forêt, les excursions en bateau, l'équitation, entre autres. Bariloche est la deuxième destination touristique la plus populaire auprès des visiteurs. Le parc national de Los Arrayanes est un incontournable de la région, qui protège l'une des rares forêts de myrte au monde.";
            document.getElementById('paq-cataratas-text').innerHTML="Les chutes d'Iguazu sont l'une des sept merveilles du monde, elles sont composées de 275 cascades qui tombent des hauteurs les plus diverses. Du bas, on atteint la base des chutes, où la force de l'eau se transforme en rosée ou en vapeur qui mouille les participants. Elles sont situées au nord-est, une zone de jungle subtropicale, ce sont les cascades les plus connues de toute la région et leur exploitation touristique a un bon développement des infrastructures et des promenades très diverses. C'est une zone du parc national d'Iguazú, où la flore et la faune d'origine sont préservées. Son saut le plus impressionnant est ce qu'on appelle la gorge du diable.";
        break;
    }
}//Fin funcion "filtrar idioma".


//levanto la información del lenguaje guardado en LocalStorage
lang=JSON.parse(localStorage.getItem("lang"));

var itinerario = [];
function FiltrarItinerario(cod){

    itinerario[0]=cod;
    itinerario[1]=lang[0];
    localStorage.setItem("itinerario", JSON.stringify(itinerario));
}


/****************************************************************************************
 * 
 * 
 * ACA TENEMOS QUE VER SI ESTO ES LO MEJOR; PERO DE MOMENTO LO VOY A HACER ASI
 * 
 * 
 ****************************************************************************************/

switch (lang[0]) {
    case 'es':
        document.getElementById('selected-flag').innerHTML='<img class="flag" src="media/flags/espana.png" alt="">';
    break;
    case 'pt':
        document.getElementById('selected-flag').innerHTML='<img class="flag" src="media/flags/brasil.png" alt="">';
    break;
    case 'en':
        document.getElementById('selected-flag').innerHTML='<img class="flag" src="media/flags/reino-unido.png" alt="">';
    break;
    case 'it':
        document.getElementById('selected-flag').innerHTML='<img class="flag" src="media/flags/italia.png" alt="">';
    break;
    case 'fr':
        document.getElementById('selected-flag').innerHTML='<img class="flag" src="media/flags/francia.png" alt="">';
    break;
}


switch (lang[0]) {
    case 'es':

        document.getElementById('paq').innerHTML="Paquetes Sugeridos";
        document.getElementById('paq-bsas').innerHTML="Paquete Buenos Aires";
        document.getElementById('paq-mendoza').innerHTML="Paquete Mendoza";
        document.getElementById('paq-bariloche').innerHTML="Paquete bariloche";
        document.getElementById('paq-cataratas').innerHTML="Paquete cataratas";
        document.getElementById('paq-bsas-text').innerHTML="La ciudad de Buenos Aires se encuentra a orillas del Rio de la Plata, se destaca como el centro favorito de los turistas extranjeros y nacionales.​ Son atraídos por una ciudad cosmopolita, de varios contrastes y con amplia infraestructura. Entre otros muchos factores, el tango es uno de los motivos para la visita a la capital argentina.​ La característica noche porteña es uno de los grandes atrayentes por su variada oferta cultural, gastronómica y de entretenimiento. Los viajeros eligen generalmente una visita nocturna a los locales donde se baila tango y un paseo a una típica estancia en la provincia de Buenos Aires, para degustar el tradicional asado.";
        document.getElementById('paq-mendoza-text').innerHTML="La provincia de Mendoza es una de las principales capitales vitivinícolas del mundo y uno de los principales centros turísticos de Argentina. Atrae numerosos turistas que recorren los circuitos de viñedos y bodegas. Hay sitios de interés histórico, en su mayoría relacionados con José de San Martin y el Ejército de los Andes, destacándose el Cerro de la Gloria, las rutas sanmartinianas y los caminos del vino. La Cordillera de los Andes atrae a numerosos turistas, argentinos y extranjeros, interesados en ver los paisajes montañosos, las actividades deportivas como el andinismo, el ráfting o el esquí, o los que desean tomar contacto con la nieve";
        document.getElementById('paq-bariloche-text').innerHTML="Bariloche es la capital de los lagos del sur y forma parte del importante circuito turístico de los Siete Lagos. La ciudad cuenta con un importante flujo turístico todo el año. Se encuentra sobre la orilla del lago Nahuel Huapi, tiene muchas ofertas gastronómicas y es famosa por sus chocolates. Las principales actividades son los deportes invernales, la pesca, campamentos en pleno bosque, excursiones en barco, cabalgatas, entre otras. Bariloche es el segundo destino turístico más elegido por los visitantes. Un imperdible de la zona es el Parque Nacional Los Arrayanes, que protege uno de los pocos bosques de arrayanes que quedan en el mundo.";
        document.getElementById('paq-cataratas-text').innerHTML="Las Cataratas del Iguazú son una de las Siete Maravillas del Mundo, están conformadas por 275 saltos de agua que caen desde las más diversas alturas. Desde el inferior se llega a la base de los saltos, donde la fuerza del agua se transforma en rocío o vapor que moja a los concurrentes. Están ubicadas al noreste, zona de selva subtropical, son las cataratas más conocidas de toda la región y su explotación turística cuenta con buen desarrollo de infraestructura y con paseos muy diversos. Es zona del parque nacional Iguazú, donde se preservan la flora y fauna originales. Su salto más imponente es la llamada Garganta del Diablo.";            
    break;
    case 'pt':

        document.getElementById('paq').innerHTML="Pacotes Sugeridos";
        document.getElementById('paq-bsas').innerHTML="Buenos Aires";
        document.getElementById('paq-mendoza').innerHTML="Mendoza";
        document.getElementById('paq-bariloche').innerHTML="Bariloche";
        document.getElementById('paq-cataratas').innerHTML="Cataratas";
        document.getElementById('paq-bsas-text').innerHTML="A cidade de Buenos Aires está localizada às margens do Rio de la Plata, destaca-se como o centro preferido dos turistas estrangeiros e nacionais, são atraídos por uma cidade cosmopolita, de vários contrastes e com ampla infraestrutura. Entre tantos outros fatores, o tango é um dos motivos para uma visita à capital argentina. A característica noite portenha é um dos grandes atrativos por sua variada oferta cultural, gastronômica e de lazer. Os viajantes geralmente optam por uma visita noturna aos locais onde se dança o tango e uma caminhada a uma típica fazenda da província de Buenos Aires, para saborear o tradicional churrasco.";
        document.getElementById('paq-mendoza-text').innerHTML="A província de Mendoza é uma das principais capitais mundiais do vinho e um dos principais centros turísticos da Argentina. Atrai muitos turistas que visitam os circuitos de vinhedos e adegas. Existem locais de interesse histórico, principalmente relacionados com José de San Martin e o Exército dos Andes, destacando-se o Cerro de la Gloria, as rotas de San Martín e as estradas do vinho. A Cordilheira dos Andes atrai muitos turistas, argentinos e estrangeiros, interessados ​​em conhecer as paisagens montanhosas, praticar esportes como montanhismo, rafting ou esqui, ou ainda aqueles que desejam entrar em contato com a neve.";
        document.getElementById('paq-bariloche-text').innerHTML="Bariloche é a capital dos lagos do sul e faz parte do importante circuito turístico dos Sete Lagos. A cidade possui um importante fluxo turístico durante todo o ano. Está localizada às margens do Lago Nahuel Huapi, tem muitas ofertas gastronômicas e é famosa por seus chocolates. As principais atividades são esportes de inverno, pesca, camping no meio da floresta, passeios de barco, cavalgadas, entre outras. Bariloche é o segundo destino turístico mais procurado pelos visitantes. Um local imperdível na área é o Parque Nacional Los Arrayanes, que protege uma das poucas florestas de murta remanescentes no mundo.";
        document.getElementById('paq-cataratas-text').innerHTML="As Cataratas do Iguaçu são uma das Sete Maravilhas do Mundo, são formadas por 275 cachoeiras que caem das mais diversas alturas. Do fundo chega-se à base das quedas, onde a força da água se transforma em orvalho ou vapor que molha os participantes. Localizadas ao Nordeste, uma área de selva subtropical, são as cachoeiras mais conhecidas de toda a região e seu aproveitamento turístico conta com bom desenvolvimento de infraestrutura e passeios muito diversos. É uma área do Parque Nacional do Iguaçu, onde a flora e a fauna originais são preservadas. Seu salto mais impressionante é a chamada Garganta do Diabo.";
    break;
    case 'en':

        document.getElementById('paq-bsas').innerHTML="Buenos Aires";
        document.getElementById('paq-mendoza').innerHTML="Mendoza";
        document.getElementById('paq-bariloche').innerHTML="Bariloche";
        document.getElementById('paq-cataratas').innerHTML="Cataratas";
        document.getElementById('paq-bsas-text').innerHTML="The city of Buenos Aires is located on the banks of the Rio de la Plata, stands out as the favorite center of foreign and national tourists, they are attracted by a cosmopolitan city, of various contrasts and with extensive infrastructure. Among many other factors, tango is one of the reasons for visiting the Argentine capital.The characteristic Buenos Aires night is one of the great attractions due to its varied cultural, gastronomic and entertainment offer. Travelers generally choose a night visit to the places where tango is danced and a walk to a typical ranch in the province of Buenos Aires, to taste the traditional barbecue.";
        document.getElementById('paq-mendoza-text').innerHTML="The province of Mendoza is one of the main wine capitals in the world and one of the main tourist centers in Argentina. It attracts many tourists who visit the circuits of vineyards and wineries. There are sites of historical interest, mostly related to José de San Martin and the Army of the Andes, highlighting the Cerro de la Gloria, the San Martín routes and the wine roads. The Cordillera de los Andes attracts many tourists, Argentines and foreigners, interested in seeing the mountainous landscapes, sports activities such as mountaineering, rafting or skiing, or those who want to get in touch with the snow.";
        document.getElementById('paq-bariloche-text').innerHTML="Bariloche is the capital of the southern lakes and is part of the important Seven Lakes tourist circuit. The city has an important tourist flow all year round. It is located on the shore of Lake Nahuel Huapi, has many gastronomic offers and is famous for its chocolates. The main activities are winter sports, fishing, camping in the forest, boat trips, horseback riding, among others. Bariloche is the second most popular tourist destination for visitors. A must see in the area is Los Arrayanes National Park, which protects one of the few remaining myrtle forests in the world.";
        document.getElementById('paq-cataratas-text').innerHTML="The Iguazu Falls are one of the Seven Wonders of the World, they are made up of 275 waterfalls that fall from the most diverse heights. From the bottom one reaches the base of the falls, where the force of the water is transformed into dew or steam that wets the attendees. They are located to the northeast, a subtropical jungle area, they are the best known waterfalls in the entire region and their tourist exploitation has good infrastructure development and very diverse walks. It is an area of the Iguazú National Park, where the original flora and fauna are preserved. Its most impressive jump is the so-called Devil's Throat.";
    break;
    case 'it':
        document.getElementById('paq').innerHTML="Pacchetti suggeriti";
        document.getElementById('paq-bsas').innerHTML="Buenos Aires";
        document.getElementById('paq-mendoza').innerHTML="Mendoza";
        document.getElementById('paq-bariloche').innerHTML="Bariloche";
        document.getElementById('paq-cataratas').innerHTML="Cataratas";
        document.getElementById('paq-bsas-text').innerHTML="La città di Buenos Aires si trova sulle rive del Rio de la Plata, si distingue come il centro preferito di turisti stranieri e nazionali, sono attratti da una città cosmopolita, di vari contrasti e con ampie infrastrutture. Tra molti altri fattori, il tango è uno dei motivi per visitare la capitale argentina. La caratteristica notte di Buenos Aires è una delle grandi attrazioni per la sua variegata offerta culturale, gastronomica e di intrattenimento. I viaggiatori generalmente scelgono una visita notturna nei luoghi dove si balla il tango e una passeggiata in un tipico ranch della provincia di Buenos Aires, per gustare il tradizionale barbecue.";
        document.getElementById('paq-mendoza-text').innerHTML="La provincia di Mendoza è una delle principali capitali mondiali del vino e uno dei principali centri turistici dell'Argentina. Attira molti turisti che visitano i circuiti dei vigneti e delle cantine. Ci sono siti di interesse storico, principalmente legati a José de San Martin e all'Esercito delle Ande, evidenziando il Cerro de la Gloria, le strade di San Martín e le strade del vino. La Cordillera de los Andes attira molti turisti, argentini e stranieri, interessati a vedere i paesaggi montuosi, ad attività sportive come l'alpinismo, il rafting o lo sci, o coloro che vogliono entrare in contatto con la neve.";
        document.getElementById('paq-bariloche-text').innerHTML="Bariloche è la capitale dei laghi meridionali e fa parte dell'importante circuito turistico dei Sette Laghi. La città ha un importante flusso turistico tutto l'anno. Si trova sulla riva del lago Nahuel Huapi, ha molte offerte gastronomiche ed è famoso per i suoi cioccolatini. Le attività principali sono gli sport invernali, la pesca, il campeggio in mezzo alla foresta, le gite in barca, l'equitazione, tra le altre. Bariloche è la seconda destinazione turistica più popolare per i visitatori. Da vedere nella zona è il Parco Nazionale Los Arrayanes, che protegge una delle poche foreste di mirto rimaste al mondo.";
        document.getElementById('paq-cataratas-text').innerHTML="Le Cascate di Iguazu sono una delle Sette Meraviglie del Mondo, sono formate da 275 cascate che cadono dalle altezze più diverse. Dal basso si raggiunge la base delle cascate, dove la forza dell'acqua si trasforma in rugiada o vapore che bagna i partecipanti. Si trovano a nord-est, un'area di giungla subtropicale, sono le cascate più conosciute dell'intera regione e il loro sfruttamento turistico ha un buon sviluppo delle infrastrutture e passeggiate molto diverse. È un'area del Parco Nazionale dell'Iguazú, dove sono conservate la flora e la fauna originali. Il suo salto più impressionante è la cosiddetta gola del diavolo.";
    break;
    case 'fr':
        document.getElementById('paq').innerHTML="Forfaits suggérés";
        document.getElementById('paq-bsas').innerHTML="Buenos Aires";
        document.getElementById('paq-mendoza').innerHTML="Mendoza";
        document.getElementById('paq-bariloche').innerHTML="Bariloche";
        document.getElementById('paq-cataratas').innerHTML="Cataratas";
        document.getElementById('paq-bsas-text').innerHTML="La ville de Buenos Aires est située sur les rives du Rio de la Plata, se distingue comme le centre de prédilection des touristes étrangers et nationaux, ils sont attirés par une ville cosmopolite, aux contrastes variés et aux infrastructures étendues. Parmi de nombreux autres facteurs, le tango est l'une des raisons de visiter la capitale argentine. La nuit caractéristique de Buenos Aires est l'une des grandes attractions en raison de son offre culturelle, gastronomique et de divertissement variée. Les voyageurs choisissent généralement une visite nocturne des lieux où l'on danse le tango et une promenade dans un ranch typique de la province de Buenos Aires, pour goûter au barbecue traditionnel.";
        document.getElementById('paq-mendoza-text').innerHTML="La province de Mendoza est l'une des principales capitales mondiales du vin et l'un des principaux centres touristiques d'Argentine. Elle attire de nombreux touristes qui visitent les circuits des vignobles et des caves. Il existe des sites d'intérêt historique, principalement liés à José de San Martin et à l'armée des Andes, mettant en évidence le Cerro de la Gloria, les routes de San Martín et les routes des vins. La Cordillera de los Andes attire de nombreux touristes, argentins et étrangers, intéressés par les paysages montagneux, les activités sportives telles que l'alpinisme, le rafting ou le ski, ou ceux qui veulent entrer en contact avec la neige.";
        document.getElementById('paq-bariloche-text').innerHTML="Bariloche est la capitale des lacs du sud et fait partie de l'important circuit touristique des Sept Lacs. La ville a un flux touristique important toute l'année. Il est situé au bord du lac Nahuel Huapi, propose de nombreuses offres gastronomiques et est célèbre pour ses chocolats. Les principales activités sont les sports d'hiver, la pêche, le camping en pleine forêt, les excursions en bateau, l'équitation, entre autres. Bariloche est la deuxième destination touristique la plus populaire auprès des visiteurs. Le parc national de Los Arrayanes est un incontournable de la région, qui protège l'une des rares forêts de myrte au monde.";
        document.getElementById('paq-cataratas-text').innerHTML="Les chutes d'Iguazu sont l'une des sept merveilles du monde, elles sont composées de 275 cascades qui tombent des hauteurs les plus diverses. Du bas, on atteint la base des chutes, où la force de l'eau se transforme en rosée ou en vapeur qui mouille les participants. Elles sont situées au nord-est, une zone de jungle subtropicale, ce sont les cascades les plus connues de toute la région et leur exploitation touristique a un bon développement des infrastructures et des promenades très diverses. C'est une zone du parc national d'Iguazú, où la flore et la faune d'origine sont préservées. Son saut le plus impressionnant est ce qu'on appelle la gorge du diable.";
    break;
}