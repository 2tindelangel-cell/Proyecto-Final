const productos = [
  {
    "nombre": "Maseca Harina de Maiz de 1 kg",
    "precio": 22,
    "imagen": "https://i5-mx.walmartimages.com/asr/2b80e918-2a63-41a5-9d86-9f15661a5324.4a15fb5eeef7f055afaa96bc99dbe4de.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
    "categoria": "Abarrotes",
    "alcohol": false,
    "id": "maseca harina de maiz de 1 kg"
  },
  {
    "nombre": "Huevo Blanco 1 pz",
    "precio": 3.50,
    "imagen": "https://app.ovocomercial.com/wp-content/uploads/2022/03/huevo_bco.jpeg",
    "categoria": "Abarrotes",
    "alcohol": false,
    "id": "huevo blanco 1 pz"
  },
  {
    "nombre": "Veladora Fama Limon",
    "precio": 20,
    "imagen": "https://imagedelivery.net/jXAJBAL3QRTbV-u4RVhLOQ/cm3s0t8qy00ety51rfv8fa0bo/9f650356-90e6-4081-8d18-20aa0e649f27/fullscreen",
    "categoria": "Abarrotes",
    "alcohol": false,
    "id": "veladora fama limon"
  },
  {
    "nombre": "Cafe La Providencia 250 g",
    "precio": 67,
    "imagen": "https://imagedelivery.net/jXAJBAL3QRTbV-u4RVhLOQ/cm3s0t8qy00ety51rfv8fa0bo/d61f26ee-f45c-4756-8cc8-d685ccc3229c/fullscreen",
    "categoria": "Abarrotes",
    "alcohol": false,
    "id": "cafe la providencia 250 g"
  },
  {
    "nombre": "Azucar 1 kg",
    "precio": 23,
    "imagen": "https://imagedelivery.net/jXAJBAL3QRTbV-u4RVhLOQ/cm3s0t8qy00ety51rfv8fa0bo/fb923ac0-2197-499a-9306-ae9931f2c1b8/fullscreen",
    "categoria": "Abarrotes",
    "alcohol": false,
    "id": "azucar 1 kg"
  },
  {
    "nombre": "Aceite Vegetal Patrona 1L",
    "precio": 42,
    "imagen": "https://lagranbodega.vteximg.com.br/arquivos/ids/304008-600-600/7501060500019.jpg?v=638875941464930000",
    "categoria": "Abarrotes",
    "alcohol": false,
    "id": "aceite vegetal patrona 1l"
  },
  {
    "nombre": "Nescafé Clasico Sobre 14g",
    "precio": 10,
    "imagen": "https://superlavioleta.com/cdn/shop/products/NESCAFE_CLASICO_SOBRE_14GR.jpg?v=1746744934",
    "categoria": "Abarrotes",
    "alcohol": false,
    "id": "nescafé clasico sobre 14g"
  },
  {
    "nombre": "Huevo Blanco 1/2 Tapa 15pz",
    "precio": 45,
    "imagen": "https://imagedelivery.net/jXAJBAL3QRTbV-u4RVhLOQ/cm3s0t8qy00ety51rfv8fa0bo/83149654-8ba2-4e91-93aa-7e8dc23ecca1/fullscreen",
    "categoria": "Abarrotes",
    "alcohol": false,
    "id": "huevo blanco 1/2 tapa 15pz"
  },
  {
    "nombre": "Maruchan Camaron Limon y Habanero",
    "precio": 18,
    "imagen": "https://www.smartnfinal.com.mx/wp-content/uploads/2023/03/2061-SOPA-CAMARON-HABANERO-MARUCHAN-1-PZA.jpg",
    "categoria": "Abarrotes",
    "alcohol": false,
    "id": "maruchan camaron limon y habanero"
  },
  {
    "nombre": "Sal del Oso Blanco 1 kg",
    "precio": 15,
    "imagen": "https://lagranbodega.vteximg.com.br/arquivos/ids/291272-600-600/7501118342202.jpg?v=638146754691870000",
    "categoria": "Abarrotes",
    "alcohol": false,
    "id": "sal del oso blanco 1 kg"
  },
  {
    "nombre": "Cafe Vencedor",
    "precio": 6,
    "imagen": "https://imagedelivery.net/jXAJBAL3QRTbV-u4RVhLOQ/cm3s0t8qy00ety51rfv8fa0bo/3801a827-7212-4b6a-a4c4-6f6946d78ca2/fullscreen",
    "categoria": "Abarrotes",
    "alcohol": false,
    "id": "cafe vencedor"
  },
  {
    "nombre": "Knorr Caldo de Pollo 2 Cubos",
    "precio": 7,
    "imagen": "https://cdn.joinet.com/wp-content/uploads/2026/07/180306-1.webp",
    "categoria": "Abarrotes",
    "alcohol": false,
    "id": "knorr caldo de pollo 2 cubos"
  },
  {
    "nombre": "Huevo Blanco Tapa 30 pz",
    "precio": 85,
    "imagen": "https://imagedelivery.net/jXAJBAL3QRTbV-u4RVhLOQ/cm3s0t8qy00ety51rfv8fa0bo/199afe59-97cf-44c6-a3a3-ac43b8e2331e/fullscreen",
    "categoria": "Abarrotes",
    "alcohol": false,
    "id": "huevo blanco tapa 30 pz"
  },
  {
    "nombre": "Knorr Tómate 2 Cubos",
    "precio": 7,
    "imagen": "https://cdn.joinet.com/wp-content/uploads/2026/07/180504.webp",
    "categoria": "Abarrotes",
    "alcohol": false,
    "id": "knorr tómate 2 cubos"
  },
  {
    "nombre": "Cabeza de ajo",
    "precio": 5,
    "imagen": "https://imagedelivery.net/jXAJBAL3QRTbV-u4RVhLOQ/cm3s0t8qy00ety51rfv8fa0bo/092e3688-f46a-49ae-872f-7f09c085d424/fullscreen",
    "categoria": "Abarrotes",
    "alcohol": false,
    "id": "cabeza de ajo"
  },
  {
    "nombre": "Arroz Nor-Ver 500 g",
    "precio": 14,
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_767599-MLM72692572105_112023-O.webp",
    "categoria": "Abarrotes",
    "alcohol": false,
    "id": "arroz nor-ver 500 g"
  },
  {
    "nombre": "Aceite Patrona 500 ml",
    "precio": 25,
    "imagen": "https://lagranbodega.vteximg.com.br/arquivos/ids/304010-1000-1000/7501060500026.jpg?v=638875949483300000",
    "categoria": "Abarrotes",
    "alcohol": false,
    "id": "aceite patrona 500 ml"
  },
  {
    "nombre": "Italpasta Pasta Spaghetti 200 g",
    "precio": 12,
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_940364-MLM46027710416_052021-O.webp",
    "categoria": "Abarrotes",
    "alcohol": false,
    "id": "italpasta pasta spaghetti 200 g"
  },
  {
    "nombre": "Italpasta Pasta Fideo grueso 180 g",
    "precio": 10,
    "imagen": "https://lagranbodega.vteximg.com.br/arquivos/ids/308964-1000-1000/7501079016051.jpg?v=639250846325630000",
    "categoria": "Abarrotes",
    "alcohol": false,
    "id": "italpasta pasta fideo grueso 180 g"
  },
  {
    "nombre": "Chocolate Abuelita 90 g",
    "precio": 26,
    "imagen": "https://d2j6dbq0eux0bg.cloudfront.net/images/79773568/3304572903.jpg",
    "categoria": "Abarrotes",
    "alcohol": false,
    "id": "chocolate abuelita 90 g"
  },
 
];