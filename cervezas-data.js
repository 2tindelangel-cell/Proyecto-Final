const productos = [
  {
    "nombre": "Cerveza Modelo Especial Lata 355 ml",
    "precio": 20,
    "imagen": "https://i5-mx.walmartimages.com/asr/0a06c569-ad49-406d-845c-5fd81401afd0.62a3e425ca31e4bd239ca5d879a8bbbc.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "cerveza modelo especial Lata 355 ml"
  },
  {
    "nombre": "Cerveza Corona Mega VR 1.2L",
    "precio": 50,
    "imagen": "https://chedrauimx.vtexassets.com/arquivos/ids/81327498/7501064101205_00.jpg?v=639307947588370000",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "cerveza corona mega vr 1.2l"
  },
  {
    "nombre": "Cerveza Victoria Lata 330 ml",
    "precio": 20,
    "imagen": "https://arteli.vtexassets.com/arquivos/ids/253127/7503024460483_01.jpg?v=638635794512500000",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "cerveza victoria lata 330 ml"
  },
  {
    "nombre": "Cerveza XX Lager Cuartito 190 ml Retornable",
    "precio": 10,
    "imagen": "https://static.wixstatic.com/media/de7ae8_7194501c2299447c8409223187a38db2~mv2.png/v1/fill/w_980,h_980,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/de7ae8_7194501c2299447c8409223187a38db2~mv2.png",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "cerveza xx lager cuartito 190 ml retornable"
  },
  {
    "nombre": "Cerveza Tecate Light(Azul) 355 ml",
    "precio": 16,
    "imagen": "https://cdn-superaki.aktiosdigitalservices.com/tol/superaki/media/product/img/300x300/33001_001.jpg?t=20260721100002",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "cerveza tecate light(azul) 355 ml"
  },
  {
    "nombre": "Cerveza Corona Extra Lata 330 ml",
    "precio": 20,
    "imagen": "https://cdzeyqsgba.cloudimg.io/img/upload_20220826/7503034941293.1.jpg",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "cerveza corona extra lata 330 ml"
  },
  {
    "nombre": "Cerveza Corona Media VR 355 ml",
    "precio": 20,
    "imagen": "https://laescocesa.com/cdn/shop/files/CoronaMediaRetornable355Envase.png?v=1722630840",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "cerveza corona media vr 355 ml"
  },
  {
    "nombre": "Cerveza Tecate Original(Roja) 355 ml",
    "precio": 16,
    "imagen": "https://lacubiella.com/cdn/shop/files/tecateroja_1_1200x1200.jpg?v=1695840270",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "cerveza tecate original(roja) 355 ml"
  },
  {
    "nombre": "Six Modelo Especial 355 ml",
    "precio": 120,
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_815677-MLM80711469520_112024-O.webp",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "six modelo especial 355 ml"
  },
  {
    "nombre": "Cerveza Victoria Media VR 355 ml",
    "precio": 20,
    "imagen": "https://i5-mx.walmartimages.com/asr/416eb028-1fd6-4c5e-a6e7-16c2cde0aa7a.d965885a77378c37bf639622aade92a1.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "cerveza victoria media vr 355 ml"
  },
  {
    "nombre": "Cerveza Victoria Mega VR 1.2L",
    "precio": 50,
    "imagen": "https://superlavioleta.com/cdn/shop/files/VERVEZA_VICTORIA_1.2L_MEGA.png?v=1773422711",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "cerveza victoria mega vr 1.2l"
  },
  {
    "nombre": "Cerveza Amstel Ultra 355 ml",
    "precio": 21,
    "imagen": "https://i5-mx.walmartimages.com/asr/8bd947aa-0f7c-4d95-a028-68661c264ac1.4e244f8682b1e11b96c082f3a6321451.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "cerveza amstel ultra 355 ml"
  },
  {
    "nombre": "Cerveza Amstel Ultra Cuartito 190 ml",
    "precio": 10,
    "imagen": "https://maxder.mx/assets/images/products/1000/3232/4118.jpg",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "cerveza amstel ultra cuartito 190 ml"
  },
  {
    "nombre": "Cerveza Indio Cuartito 190 ml",
    "precio": 10,
    "imagen": "https://i5-mx.walmartimages.com/asr/74d7a266-493c-4b5b-ad03-663a6ca4b977.39e1dde86dd8e9f0431c8e92e46b236a.jpeg",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "cerveza indio cuartito 190 ml"
  },
  {
    "nombre": "Six Cerveza Victoria 330 ml",
    "precio": 100,
    "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdM88J8OuD3YJKsaKiqei7qMMxrDLODQ7_hcABubRcGA&s=10",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "six cerveza victoria 330 ml"
  },
  {
    "nombre": "Cerveza Tecate Light(Azul) Caguamon",
    "precio": 50,
    "imagen": "https://dcdn-us.mitiendanube.com/stores/005/347/600/products/productos-bam-spirits-2025-01-29t230350-914-fe19bde0466087156817382134737339-1024-1024.webp",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "cerveza tecate light(azul) 355 ml"
  },
  {
    "nombre": "Cerveza XX Lager Especial 355 ml",
    "precio": 21,
    "imagen": "https://www.tasteboutique.com/cdn/shop/products/Cervezaxxlagerlata355mlpza.png?v=1752267463",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "cerveza xx lager especial 355 ml"
  },
  {
    "nombre": "Six de Cerveza Corona 330 ml",
    "precio": 100,
    "imagen": "https://arteli.vtexassets.com/arquivos/ids/253131/7503024460476_00.jpg?v=638635794520330000",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "cerveza corona extra lata 330 ml"
  },
  {
    "nombre": "Cerveza XX Lager Especial Caguamon 1.18 l",
    "precio": 50,
    "imagen": "https://imagedelivery.net/jXAJBAL3QRTbV-u4RVhLOQ/cm3s0t8qy00ety51rfv8fa0bo/859b75b8-ae2a-499d-b421-7436bd25afc8/fullscreen",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "cerveza xx lager especial caguamon 1.18 l"
  },
  {
    "nombre": "Cerveza Tecate Original(Roja) Laton 473 ml",
    "precio": 25,
    "imagen": "https://chedrauimx.vtexassets.com/arquivos/ids/81030930-800-800?width=800&height=800&aspect=true",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "cerveza tecate original(roja) laton 473 ml"
  },
  {
    "nombre": "Cerveza Sol Clamato Laton 473 ml",
    "precio": 28,
    "imagen": "https://arteli.vtexassets.com/arquivos/ids/251694/7501049967062_00.jpg?v=638635789578670000",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "cerveza sol clamato laton 473 ml"
  },
  {
    "nombre": "Six Tecate Light(Azul) 355 ml",
    "precio": 90,
    "imagen": "https://www.soriana.com/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw8770f1a4/images/product/0000075004132_A.jpg",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "six tecate light(azul) 355 ml"
  },
  {
    "nombre": "Cerveza XX Lager Especial Laton 473 ml",
    "precio": 28,
    "imagen": "https://i5-mx.walmartimages.com/asr/4c946527-85fe-491e-ae8f-549ab97350db.792d418d9d6559d1f847db0d4a412a82.jpeg",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "cerveza xx lager especial laton 473 ml"
  },
  {
    "nombre": "Cerveza Tecate Light(Azul) Laton 473 ml",
    "precio": 25,
    "imagen": "https://arteli.vtexassets.com/arquivos/ids/253159/7501061669289_00.jpg?v=638635794598030000",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "cerveza tecate light(azul) laton 473 ml"
  },
  {
    "nombre": "Cerveza XX Lager Media Retornable 325 ml",
    "precio": 20,
    "imagen": "https://static.mercanto.mx/products/master/f6b734d2d7304832b662fb23e320b150/24567c1e62f4f9c32df29a1390d1e7c893bff176bfcfd9e3ed2fcb5a1b7fefa7.jpg",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "cerveza xx lager media retornable 325 ml"
  },
  {
    "nombre": "Carton de Cerveza XX Lager Cuartito",
    "precio": 160,
    "imagen": "https://lamaschiquita.com/cdn/shop/products/1717_carton_cuartito_xx_lager_1024x.jpg?v=1578674234",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "carton de cerveza xx lager cuartito"
  },
  {
    "nombre": "Cerveza Sol Mangoyada Laton 473 ml",
    "precio": 28,
    "imagen": "https://chedrauimx.vtexassets.com/arquivos/ids/81252004/7503032272375_00.jpg?v=639307100968200000",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "cerveza sol mangoyada laton 473 ml"
  },
  {
    "nombre": "Six Tecate Original(Roja) 355 ml",
    "precio": 90,
    "imagen": "https://cdn.alsuper.com/products/5131796_p.webp",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "six tecate original(roja) 355 ml"
  },
  {
    "nombre": "Carton de Cerveza Corona Mega",
    "precio": 485,
    "imagen": "https://imagedelivery.net/jXAJBAL3QRTbV-u4RVhLOQ/cm3s0t8qy00ety51rfv8fa0bo/36137bef-203b-4a59-bdaa-d836d7c33fac/fullscreen",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "carton de cerveza corona mega"
  },
  {
    "nombre": "Six Cerveza Amstel Ultra 355 ml",
    "precio": 485,
    "imagen": "https://heb-prod.styrk.io/loolu/cdn/ecommerce/img/1/314824/314824_01.webp?v=44a5a6ab",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "six cerveza amstel ultra 355 ml"
  },
  {
    "nombre": "Cerveza XX Lager Ambar Caguamon 1.18 L",
    "precio": 50,
    "imagen": "https://dcdn-us.mitiendanube.com/stores/005/347/600/products/productos-bam-spirits-2025-01-29t231521-048-dd9defa3d994df5f4e17382141616539-640-0.webp",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "cerveza xx lager ambar caguamon 1.18 l"
  },
  {
    "nombre": "Six Cerveza XX Lager Especial 355 ml",
    "precio": 120,
    "imagen": "https://www.soriana.com/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw03823376/images/product/0000075003821_A.jpg",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "six cerveza xx lager especial 355 ml"
  },
  {
    "nombre": "Cerveza Tecate Original(Roja) Cuartito 190 ml",
    "precio": 10,
    "imagen": "https://imagedelivery.net/jXAJBAL3QRTbV-u4RVhLOQ/cm3s0t8qy00ety51rfv8fa0bo/02598a0b-b9a7-42bc-8540-3ef75e72dc0f/fullscreen",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "cerveza tecate original(roja) cuartito 190 ml"
  },
  {
    "nombre": "Cerveza Tecate Light(Azul) Cuartito 190 ml",
    "precio": 10,
    "imagen": "https://imagedelivery.net/jXAJBAL3QRTbV-u4RVhLOQ/cm3s0t8qy00ety51rfv8fa0bo/1d18d1e0-bd14-40af-9932-6fc4997a8907/fullscreen",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "cerveza tecate light(azul) cuartito 190 ml"
  },
  {
    "nombre": "Caribe Cooler Ultra Durazno 300 ml",
    "precio": 28,
    "imagen": "https://arteli.vtexassets.com/arquivos/ids/243691/7501032485412_00.jpg?v=638635764758300000",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "caribe cooler ultra durazno 300 ml"
  },
  {
    "nombre": "Caribe Cooler Mandarina 300 ml",
    "precio": 32,
    "imagen": "https://vinosamerica.com/cdn/shop/products/Caribe-Cooler-Mandarina-2_9a2428ff-60ef-42dd-a1a5-7457dd545d8b.png?v=1748270579",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "caribe cooler ultra mandarina 300 ml"
  },
  {
    "nombre": "Caribe Cooler Fresa 300 ml",
    "precio": 28,
    "imagen": "https://arteli.vtexassets.com/arquivos/ids/272317-800-auto?v=638870037987630000&width=800&height=auto&aspect=true",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "caribe cooler ultra fresa 300 ml"
  },
  {
    "nombre": "Plancha Modelo Especial 355 ml",
    "precio": 385,
    "imagen": "https://i5.walmartimages.com.mx/samsmx/images/product-images/img_large/000084570l.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "plancha modelo especial 355 ml"
  },
  {
    "nombre": "Cerveza Tecate Original(Roja) Caguamon",
    "precio": 50,
    "imagen": "https://www.soriana.com/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dwd813cd1a/images/product/7503046919358_A.jpg",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "cerveza tecate original(roja) caguamon"
  },
  {
    "nombre": "Carton de Cerveza Amstel Ultra Cuartito 190 ml",
    "precio": 170,
    "imagen": "https://imagedelivery.net/jXAJBAL3QRTbV-u4RVhLOQ/cm3s0t8qy00ety51rfv8fa0bo/d5acf141-a640-4009-8052-79bd3925b78e/fullscreen",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "carton de cerveza amstel ultra cuartito 190 ml"
  },
  {
    "nombre": "Cerveza Indio Caguamon",
    "precio": 50,
    "imagen": "https://chedrauimx.vtexassets.com/arquivos/ids/81253206/7503032272924_00.jpg?v=639307103837300000",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "cerveza indio caguamon"
  },
  {
    "nombre": "VIÑA MANGO-MARACUYA",
    "precio": 30,
    "imagen": "https://i5-mx.walmartimages.com/asr/e280ad69-6ff5-46c3-bdf1-cd1a8e4d8ecf.f71467964815674194be531adc707f74.jpeg",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "viña mango-maracuya"
  },
  {
    "nombre": "Plancha Tecate Light(Azul) 355 ml",
    "precio": 330,
    "imagen": "https://imagedelivery.net/jXAJBAL3QRTbV-u4RVhLOQ/cm3s0t8qy00ety51rfv8fa0bo/b1807815-d78d-48ab-8e4b-a9304acf9c84/fullscreen",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "plancha tecate light(azul) 355 ml"
  },
  {
    "nombre": "Carton de Cerveza Indio Cuartito 190 ml",
    "precio": 160,
    "imagen": "https://lamaschiquita.com/cdn/shop/products/1677_carton_cuartito_indio_800x.jpg?v=1578674281",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "carton de cerveza indio cuartito 190 ml"
  },
  {
    "nombre": "Viña Real Tropical Kiwi",
    "precio": 30,
    "imagen": "https://garis.mayoreoenlinea.mx/cdn/shop/files/7501053670873_33ddf467-df76-4642-b283-4116fe0e053e.png?v=1784770746&width=1445",
    "categoria": "Cervezas",
    "alcohol": true,
    "id": "viña real tropical kiwi"
  },
];