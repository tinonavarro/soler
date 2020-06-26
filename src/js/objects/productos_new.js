const example = {
  division: [
    {
      category: "",
      products: [
        {
          name: "",
          description: "",
          img: "",
          specs: "",
          models: [
            {
              model: "",
              description: "",
              img: ""
            }
          ]
        }
      ]
    }
  ]
};

export const productsObj = {
  habitad: [
    {
      category: "Accesorios Hábitat",
      products: [
        {
          name: "ATENUADORES ACÚSTICOS",
          description:
            "Cuando seleccionamos un atenuador es importante considerar los siguientes parámetros. IL (Insertion Loss) se refiere a la diferencia entre dos niveles de presión sonora, cuando son medidos en el mismo punto antes y después de que el atenuador se ha instalado. Static Pressure Drop que se define como la pérdida de carga a través del atenuador",
          img: "habitad/COMATEAC.jpg",
          specs: "habitad/AtenuadorSIL.pdf"
        },
        {
          name: "DIFUSORES",
          img: "HABACHDIF.jpg",
          description:
            "Difusores redondos plásticos o de acero con recubrimiento en color blanco, para sistemas de ventilación en general:</br>Casas habitación, hoteles, comercios, salas de juntas, gimnasios, baños, etc.",
          specs: "Difusores.pdf",
          models: [
            {
              ref: "5RG-100",
              description: "DIFUSOR REDONDO 100",
              img: "habitad/difusores/19-RG.jpg"
            },
            {
              ref: "5RG-150",
              description: "DIFUSOR REDONDO 150",
              img: "habitad/difusores/19-RG.jpg"
            },
            {
              ref: "5RG-200",
              description: "DIFUSOR REDONDO 200",
              img: "habitad/difusores/19-RG.jpg"
            }
          ]
        },
        {
          name: "DUCTOS",
          img: "habitad/HABACHDUC.jpg",
          description:
            "Ductos semi rígidos y flexibles para sistemas de ventilación en general:</br>Casas habitación, hoteles, comercios, salas de juntas, gimnasios, baños, etc.",
          specs: "habitad/Ductos.pdf",
          models: [
            {
              ref: "5DUC-404",
              description: "DUCTO AO48/9 SEMIFLEXIBLE ALUM",
              img: "habitad/ductos/19-DSRA.jpg"
            },
            {
              ref: "5DUC-405",
              description: "DUCTO AO68/4 SEMIFLEXIBLE ALUM",
              img: "habitad/ductos/19-DSRA.jpg"
            },
            {
              ref: "5DUC-406",
              description: "DUCTO A088/4 SEMIFLEXIBLE ALUM",
              img: "habitad/ductos/19-DSRA.jpg"
            }
          ]
        },
        {
          name: "HIGRÓMETRO",
          img: "habitad/HABACHHIG.jpg",
          description:
            "Permite regular la operación del ventilador de acuerdo con el porcentaje de humedad indicado, garantizando las condiciones internas deseadas.\nAumenta el control del flujo dependiendo de las necesidades del usuario.\nIdeal para su colocación en baños, cocinas o lavanderías.",
          specs: "habitad/Higrometro.pdf",
          models: [
            {
              ref: "5-ACC-SHW20",
              description:
                "SHW-20 WALL MOUNTED DEHUMIDIST AT - J10-810-300 - SHW-20",
              img: "habitad/HABACHHIG.jpg"
            }
          ]
        },
        {
          name: "REJILLAS",
          img: "habitad/HABACHREJ.jpg",
          description:
            "Rejillas plásticas, de acero con recubrimiento en color blanco o de aluminio para sistemas de ventilación en general:\nCasas habitación, hoteles, comercios, salas de juntas, gimnasios, baños, etc.",
          specs: "habitad/Rejillas.pdf",
          models: [
            {
              ref: "5WG-200",
              description: "WALL GRILLE 200",
              img: "habitad/rejillas/19-WG.jpg"
            },
            {
              ref: "5WG-250",
              description: "WALL GRILLE 250",
              img: "habitad/rejillas/19-WG.jpg"
            },
            {
              ref: "5WG-300",
              description: "WALL GRILLE 300",
              img: "habitad/rejillas/19-WG.jpg"
            },
            {
              ref: "5WG-350",
              description: "WALL GRILLE 350",
              img: "habitad/rejillas/19-WG.jpg"
            }
          ]
        },
        {
          name: "REGULADOR DE VELOCIDAD",
          img: "habitad/COMACCRVE.jpg",
          description:
            "Proporciona un absoluto control del flujo del aire, regulado por la velocidad de giro del ventilador.\nMonofásico 115 V AC 50/60 Hz.\nMecanismo electromecánico giratorio.\nTemperatura ambiente 40°C.\nMáximo amperaje de funcionamiento 5 y 10 A.\nPerilla fabricada en plástico oscuro y tapa metálica color aluminio.",
          specs: "habitad/FTREGULADORVEL.pdf"
        },
        {
          name: "TEMPORIZADOR",
          img: "habitad/HABACHTEM.jpg",
          description:
            "Utilizable en aplicaciones de gama hábitat, debido a su agradable presentación y fácil manejo.\nFabricado en plástico y certificado con normativa de seguridad UL.\n4 diferentes rangos de tiempo delimitables por el usuario.\nRango de carga: 20A/1HP",
          specs: "",
          models: [
            {
              ref: "5-ACC-IE005",
              description: "ACC INTERRUPTOR ELECTRONICO",
              img: "habitad/HABACHTEM.jpg"
            }
          ]
        }
      ]
    },
    {
      category: "Centrífugo para campana",
      products: [
        {
          name: "CK",
          img: "habitad/HABCK.jpg",
          description:
            "Alto poder de extracción, facilidad de instalación, limpieza y mantenimiento, bajo consumo de energía, sólidos y compactos, colector de grasas.\nCampanas extractoras: cocinas domésticas, laboratorios, bares, cafeterías, etc.",
          specs: "habitad/FTCK.pdf",
          models: [
            {
              ref: "CK 25",
              description: "",
              img: "habitad/HABCK.jpg"
            }
          ]
        }
      ]
    },
    {
      category: "Centrífugos de falso plafón",
      products: [
        {
          name: "CFP",
          img: "habitad/HABCFP.jpg",
          description:
            "Turbinas de palas curvas adelantadas con balanceo preciso, motores monofásicos con protector térmico integrado para operación continua, rejilla plástica que integra un diseño estético, acabado en pintura de alta resistencia a la corrosión (CFP 225, 500, 600 y 900).\nDebido a su construcción compacta, este equipo es ideal para espacios reducidos en techos o falsos plafones de: hoteles, oficinas, baños, escuelas, restaurantes, etc. CFP 100, 120, 160, 300 Material Plástico CFP 225, 500, 600 y 900 Metal.",
          specs: "habitad/SP-CFP.pdf",
          models: [
            {
              ref: "CFP-120-127V",
              description: "",
              img: "habitad/HABCFP.jpg"
            },
            {
              ref: "CFP-160-127V",
              description: "",
              img: "habitad/HABCFP.jpg"
            },
            {
              ref: "CFP-225-127V",
              description: "",
              img: "habitad/HABCFP.jpg"
            },
            {
              ref: "CFP-500-127V",
              description: "",
              img: "habitad/HABCFP.jpg"
            },
            {
              ref: "CFP-600-127V",
              description: "",
              img: "habitad/HABCFP.jpg"
            },
            {
              ref: "CFP-900-127V",
              description: "",
              img: "habitad/HABCFP.jpg"
            },
            {
              ref: "CFP-300-127V",
              description: "",
              img: "habitad/HABCFP.jpg"
            }
          ]
        },
        {
          name: "PC",
          img: "habitad/HABPC.jpg",
          description:
            "La serie Premium Choice de S&P le brinda la mayor flexibilidad para crear el sistema de ventilación que usted necesita. La simplicidad de los ventiladores de la línea PC reside en la posibilidad de elegir. Mientras que otros extractores Premium vienen iluminados o con control de humedad, control de velocidad o un sensor de humedad integrado, nuestros extractores Premium Choice le ofrecen la flexibilidad para elegir la rejilla y el control por separado.",
          specs: "habitad/SP-PC.pdf",
          models: [
            {
              ref: 'EXT. PC 110 60HZ 4"',
              description: "",
              img: "habitad/HABPC.jpg"
            },
            {
              ref: 'EXT. PC 80 60HZ 4"',
              description: "",
              img: "habitad/HABPC.jpg"
            },
            {
              ref: 'EXT. PC 110 60HZ 6"',
              description: "",
              img: "habitad/HABPC.jpg"
            },
            {
              ref: 'EXT. PC 150 60HZ 6"',
              description: "",
              img: "habitad/HABPC.jpg"
            },
            {
              ref: 'EXT. PC 80 60HZ 6"',
              description: "",
              img: "habitad/HABPC.jpg"
            }
          ]
        }
      ]
    },
    {
      category: "Extractor para baño",
      products: [
        {
          name: "FUTURE",
          img: "habitad/HABFUT.jpg",
          description:
            "Perfil extraplano, alto poder de aspiración, fácil limpieza e instalación, silenciosos, seguridad eléctrica total, funcionamiento en cualquier posición, adaptable a todo tipo de decoración o ambiente.",
          specs: "habitad/FTFUTURE.pdf",
          models: [
            {
              ref: "EXTRACTOR FUTURE-100",
              description: "",
              img: "habitad/HABFUT.jpg"
            },
            {
              ref: "EXTRACTOR FUTURE-120",
              description: "",
              img: "habitad/HABFUT.jpg"
            },
            {
              ref: "EXTRACTOR FUTURE-150",
              description: "",
              img: "habitad/HABFUT.jpg"
            }
          ]
        },
        {
          name: "SILENT",
          img: "habitad/HABSIL.jpg",
          description:
            "Diseño patentado por S&P que incluye silentblocks construidos en bimaterial con componentes altamente resistentes y a la vez, capaces de absorber las vibraciones generadas por el motor.\nIncorpora rodamientos a bolas que aseguran una larga vida con las máximas prestaciones.\nCompuerta antirretorno para evitar la entrada del aire del exterior cuando el equipo se encuentra apagado.\nVentilación de aseos y baños en: hoteles, restaurantes, oficinas, locales comerciales, etc. en donde el nivel sonoro sea un requisito importante para la aplicación.",
          specs: "habitad/HABSIL.jpg",
          models: [
            {
              ref: "EXTRACTOR SILENT-100",
              description: "",
              img: "habitad/HABSIL.jpg"
            },
            {
              ref: "EXTRACTOR SILENT-200",
              description: "",
              img: "habitad/HABSIL.jpg"
            },
            {
              ref: "EXTRACTOR SILENT-300",
              description: "",
              img: "habitad/HABSIL.jpg"
            }
          ]
        },
        {
          name: "SILENT DESIGN",
          img: "habitad/HABSILDES.jpg",
          description:
            "Con los extractores SILENT 100 y 200 se pone la más avanzada tecnología al servicio del confort. Su novedoso diseño, hace que las vibraciones generadas por el motor, queden absorbidas en el interior del extractor y no se transmitan al entorno. De esta manera se reduce tanto el ruido del extractor como el de la vibración de techos y paredes.",
          specs: "habitad/F.TSILENTDESIGN.pdf.jpg",
          models: [
            {
              ref: "SILENT-100 CZ DESIGN-127V-60Hz",
              description: "",
              img: "habitad/HABSIL.jpg"
            },
            {
              ref: "SILENT-200 CZ DESIGN-127V-60Hz",
              description: "",
              img: "habitad/HABSIL.jpg"
            }
          ]
        }
      ]
    },
    {
      category: "Extractor para pared y cristal",
      products: [
        {
          name: "HAE",
          img: "habitad/HABHAE.jpg",
          description:
            "La serie HAE de la gama hábitat ha sido desarrollada para aplicaciones en donde se requiera un sistema compacto de ventilación que incluya: ventilador, rejilla frontal de protección y persiana posterior para evitar la introducción de agua, polvo o suciedades en un sólo equipo.",
          specs: "habitad/SP-HAE.pdf",
          models: [
            {
              ref: "HAE-150-127V",
              description: "",
              img: "habitad/HABHAE.jpg"
            },
            {
              ref: "HAE-200-127V",
              description: "",
              img: "habitad/HABHAE.jpg"
            },
            {
              ref: "HAE-250-127V",
              description: "",
              img: "habitad/HABHAE.jpg"
            },
            {
              ref: "HAE-300-127V",
              description: "",
              img: "habitad/HABHAE.jpg"
            }
          ]
        },
        {
          name: "HCM",
          img: "habitad/HABHCM.jpg",
          description: "",
          specs: "habitad/FTHCM.pdf",
          models: [
            {
              ref: "HCM-150-127V",
              description: "",
              img: "habitad/FTHCM.jpg"
            },
            {
              ref: "HCM-180-127V",
              description: "",
              img: "habitad/FTHCM.jpg"
            },
            {
              ref: "HCM-225-127V",
              description: "",
              img: "habitad/FTHCM.jpg"
            }
          ]
        }
      ]
    },
    {
      category: "Extractor para pared y cristal",
      products: [
        {
          name: "TD",
          description: "Carcaza: Fabricado en polipropileno. motor de inducción asíncrono monofásico.\n" +
            "Hélices: fabricadas en ABS.\n" +
            "Su facilidad de instalación y mantenimiento permite el acoplamiento en cualquier parte del ducto de ventilación en: falsos plafones espacios interiores, áreas aisladas, oficinas y salas de juntas, locales comerciales, cuartos de baño, laboratorios, captaciones localizadas. * AMCA Certifified Ratings: AirPerformance.",
          img: "habitad/19-TD.jpg",
          specs: "habitad/F.T.TD.pdf",
          models: [
            {
              model: "TD-250/100-127V-60HZ",
              description: "TD-250/100-127V-60HZ",
              img: "habitad/19-TD.jpg"
            },
            {
              model: "TD-350/125-127V-60Hz",
              description: "TD-350/125-127V-60Hz",
              img: "habitad/19-TD.jpg"
            },
            {
              model: "TD-500/150-127V-60Hz",
              description: "TD-500/150-127V-60Hz",
              img: "habitad/19-TD.jpg"
            },
            {
              model: "TD-800/200-127V-60Hz",
              description: "TD-800/200-127V-60Hz",
              img: "habitad/19-TD.jpg"
            },
            {
              model: "TD-1300/250-127V-60Hz",
              description: "TD-1300/250-127V-60Hz",
              img: "habitad/19-TD.jpg"
            },
            {
              model: "TD-2000/315-127V-60Hz",
              description: "TD-2000/315-127V-60Hz",
              img: "habitad/19-TD.jpg"
            },
            {
              model: "EXT.TD-4000",
              description: "EXT.TD-4000",
              img: "habitad/19-TD.jpg"
            },
            {
              model: "EXTRACTOR TD-6000",
              description: "EXTRACTOR TD-6000",
              img: "habitad/19-TD.jpg"
            }
          ]
        },
        {
          name: "TD",
          description: "Fabricados en aluminio con acabado tipo poliéster termoendurecible color beige, soporte reforzado mediante una estructura metálica, aislamiento eléctrico, motores monofásicos con protector térmico de fusible. \n Renovación ambiental en aplicaciones de tipo hábitat así como oficinas, baños, cafeterías, salas de juntas, escuelas, bares, locales comerciales, etc.",
          img: "habitad/19-Tdh.jpg",
          specs: "habitad/SP-TDH.pdf",
          models: [
            {
              model: "TDH-500-127V",
              description: "TDH-500-127V",
              img: "habitad/19-Tdh.jpg"
            },
            {
              model: "TDH-800-127V",
              description: "TDH-800-127V",
              img: "habitad/19-Tdh.jpg"
            },
            {
              model: "TDH-1300-127V",
              description: "TDH-1300-127V",
              img: "habitad/19-Tdh.jpg"
            },
            {
              model: "TDH-2000-127V",
              description: "TDH-2000-127V",
              img: "habitad/19-Tdh.jpg"
            }
          ]
        },
        {
          name: "TD-SILENT",
          description: "Ventiladores helicocentrífugos de bajo perfil, extremedamente silenciosos, fabricados en material plástico, con recubrimiento interno que direcciona las ondas sonoras y aislamiento fonoabsorbente, juntas de goma en impulsión y descarga para absorber las vibraciones, cuerpo motor desmontable sin necesidad de tocar los conductos, caja de bornes externa orientable 360º, motor regulable 127V 60Hz, de 2 velocidades, Clase B, IP44, rodamientos a bolas de engrase permanente y protector térmico. Excepto TD-Silent 160, que incorpora sistema de motor flotante, montado sobre silent-blocks elásticos, patentado por Soler y Palau.",
          img: "habitad/19-TDSILENT.jpg",
          specs: "habitad/F.T.TDSILENT.pdf",
          models: [
            {
              model: "TD-250/100 SILENT-127V-60Hz",
              description: "TD-250/100 SILENT-127V-60Hz",
              img: "habitad/19-TDSILENT.jpg"
            },
            {
              model: "EXTRACTOR TD-160",
              description: "EXTRACTOR TD-160",
              img: "habitad/19-TDSILENT.jpg"
            },
            {
              model: "TD-350/125 SILENT-127V-60Hz",
              description: "TD-350/125 SILENT-127V-60Hz",
              img: "habitad/19-TDSILENT.jpg"
            },
            {
              model: "TD-500/150-SILENT-127V-60Hz",
              description: "TD-500/150-SILENT-127V-60Hz",
              img: "habitad/19-TDSILENT.jpg"
            },
            {
              model: "TD-1000/200 SILENT-127V-60Hz",
              description: "TD-1000/200 SILENT-127V-60Hz",
              img: "habitad/19-TDSILENT.jpg"
            },
            {
              model: "TD-800/200 SILENT-127V-60Hz",
              description: "TD-800/200 SILENT-127V-60Hz",
              img: "habitad/19-TDSILENT.jpg"
            },
            {
              model: "TD-1300/250 SILENT-127V-60HZ",
              description: "TD-1300/250 SILENT-127V-60HZ",
              img: "habitad/19-TDSILENT.jpg"
            },
            {
              model: "TD-2000/315 SILENT-127V-60Hz",
              description: "TD-2000/315 SILENT-127V-60Hz",
              img: "habitad/19-TDSILENT.jpg"
            }
          ]
        }
      ]
    }
  ],
  Comercial: [
    {
      "category": "accesorios",
      products : [
        {
          name : "AFS",
          description :  "El conector AFS® está diseñado específicamente para sistemas de aire acondicionado, sistemas de ventilación y de calentamiento y enfriamiento.\nAl usar el conector AFS® para conectar equipo mecánico con uno o dos ductos de ventilación rígidos tendrá protección contra daños causados por vibraciones mediante la absorción de movimientos laterales",
          img : "comercial/COMACCAFS.jpg",
          specs : "comercial/SP-AFS.pdf",
          models : [
            {
              model : "CONFLEXLONA",
              img : "comercial/19-AFS.jpg",
              description : "CONECTOR FLEXIBLE DE LONA"
            },
            {
              model : "CONFLEX1000",
              img : "comercial/19-AFS.jpg",
              description : "CONECTOR FLEXIBLE DE LONA BDB-1000"
            },
            {
              model : "CONFLEX1120",
              img : "comercial/19-AFS.jpg",
              description : "CONECTOR FLEXIBLE DE LONA BDB-1120"
            },
            {
              model : "CONFLEX1250",
              img : "comercial/19-AFS.jpg",
              description : "CONECTOR FLEXIBLE DE LONA BDB-1250"
            },
            {
              model : "CONFLEX1400",
              img : "comercial/19-AFS.jpg",
              description : "CONECTOR FLEXIBLE DE LONA BDB-1400"
            },
            {
              model : "CONFLEX280",
              img : "comercial/19-AFS.jpg",
              description : "CONECTOR FLEXIBLE DE LONA BDB-280"
            },
            {
              model : "CONFLEX315",
              img : "comercial/19-AFS.jpg",
              description : "CONECTOR FLEXIBLE DE LONA BDB-315"
            },
            {
              model : "CONFLEX355",
              img : "comercial/19-AFS.jpg",
              description : "CONECTOR FLEXIBLE DE LONA BDB-355"
            },
            {
              model : "CONFLEX400",
              img : "comercial/19-AFS.jpg",
              description : "CONECTOR FLEXIBLE DE LONA BDB-400"
            },
            {
              model : "CONFLEX450",
              img : "comercial/19-AFS.jpg",
              description : "CONECTOR FLEXIBLE DE LONA BDB-450"
            },
            {
              model : "CONFLEX500",
              img : "comercial/19-AFS.jpg",
              description : "CONECTOR FLEXIBLE DE LONA BDB-500"
            },
            {
              model : "CONFLEX560",
              img : "comercial/19-AFS.jpg",
              description : "CONECTOR FLEXIBLE DE LONA BDB-560"
            },
            {
              model : "CONFLEX630",
              img : "comercial/19-AFS.jpg",
              description : "CONECTOR FLEXIBLE DE LONA BDB-630"
            },
            {
              model : "CONFLEX710",
              img : "comercial/19-AFS.jpg",
              description : "CONECTOR FLEXIBLE DE LONA BDB-710"
            },
            {
              model : "CONFLEX800",
              img : "comercial/19-AFS.jpg",
              description : "CONECTOR FLEXIBLE DE LONA BDB-800"
            },
            {
              model : "CONFLEX900",
              img : "comercial/19-AFS.jpg",
              description : "CONECTOR FLEXIBLE DE LONA BDB-900"
            }
          ]
        },
        {
          name : "ELC",
          description :  "Libera calor, humos, vapores y gases en suspensión en: almacenes, naves industriales, áticos, bodegas, talleres, etc.\nPermite la salida de aire, en sistemas donde la inyección de aire es constante.",
          img : "comercial/19-ELC.jpg",
          specs : "comercial/SP-ELC.pdf",
          models : [
            {
              model : "5ELC17",
              img : "comercial/19-ELC.jpg",
              description : "ACCESORIO EOLICO DE 17"
            },
            {
              model : "5ELC21",
              img : "comercial/19-ELC.jpg",
              description : "ACCESORIO EOLICO DE 21"
            },
            {
              model : "5ELC24",
              img : "comercial/19-ELC.jpg",
              description : "ACCESORIO EOLICO DE 24"
            }
          ]
        },
        {
          name : "ECL",
          description :  "Permite la extracción de aire con ayuda del viento circundante, generando la salida del mismo por diferencia de densidades.",
          img : "comercial/19-ECL.jpg",
          specs : "comercial/Gravitacionales.pdf",
          models : [
            {
              model : "5ECL-10/10",
              img : "comercial/19-ECL.jpg",
              description : "ECCL-10/10"
            },
            {
              model : "5ECL-12/12",
              img : "comercial/19-ECL.jpg",
              description : "ECCL-12/12"
            },
            {
              model : "5ECL-15/15",
              img : "comercial/19-ECL.jpg",
              description : "ECCL-15/15"
            },
            {
              model : "5ECL-18/18",
              img : "comercial/19-ECL.jpg",
              description : "ECCL-18/18"
            },
            {
              model : "5ECL-7/7",
              img : "comercial/19-ECL.jpg",
              description : "ECCL-7/7"
            },
            {
              model : "5ECL-9/9",
              img : "comercial/19-ECL.jpg",
              description : "ECCL-9/9"
            }
          ]
        },
        {
          name : "ECL",
          description :  "Permite la extracción de aire con ayuda del viento circundante, generando la salida del mismo por diferencia de densidades. Está fabricado en lámina galvanizada.\n\n",
          img : "comercial/19-EDX.jpg",
          specs : "comercial/Gravitacionales.pdf",
          models : [
            {
              model : "5EDX-1000",
              img : "comercial/19-EDX.jpg",
              description : "EDX-1000"
            },
            {
              model : "5EDX-1250",
              img : "comercial/19-EDX.jpg",
              description : "EDX-1250"
            },
            {
              model : "5EDX-1500",
              img : "comercial/19-EDX.jpg",
              description : "EDX-1500"
            },
            {
              model : "5EDX-1800",
              img : "comercial/19-EDX.jpg",
              description : "EDX-1800"
            },
            {
              model : "5EDX-800",
              img : "comercial/19-EDX.jpg",
              description : "EDX-800"
            }
          ]
        },
        {
          name : "ECL",
          description :  "Permite la extracción de aire con ayuda del viento circundante, generando la salida del mismo por diferencia de densidades.",
          img : "comercial/19-EHM.jpg",
          specs : "comercial/Gravitacionales.pdf",
          models : [
            {
              model : "5EHM-200",
              img : "comercial/19-EHM.jpg",
              description : "EHM-200"
            },
            {
              model : "5EHM-250",
              img : "comercial/19-EHM.jpg",
              description : "EHM-250"
            },
            {
              model : "5EHM-350",
              img : "comercial/19-EHM.jpg",
              description : "EHM-350"
            }
          ]
        },
        {
          name : "DAMPER",
          description :  "Producto con aplicación en las unidades de aire acondicionado y ventilación, ya que son accesorios de control de flujo y velocidad.\nSu fabricación consiste en marcos y aletas de aluminio extruido. Los mecanismos y sellos son de nylon, que ofrecen un alto nivel de impermeabilidad.\nPueden suministrarse con una manija para apertura y cierre manual o con un actuador para movimientos motorizados.\nTemperatura de trabajo -20°C / + 80°C.\nMateriales de acuerdo a los estándares VDI6022 / ROHS (Estándar de higiene en Sistemas de Ventilación y Climatización / Estándar de restricción de sustancias peligrosas).",
          img : "comercial/19-DAMPERS.jpg",
          specs : "comercial/DAMPERSS&P.pdf",
          models : [
            {
              model : "5DAMP-10x10",
              img : "comercial/19-DAMPERS.jpg",
              description : "DAMPER GALVANIZADO 10\"x10\""
            },
            {
              model : "5DAMP-12x12",
              img : "comercial/19-DAMPERS.jpg",
              description : "DAMPER GALVANIZADO 12\"x12\""
            },
            {
              model : "5DAMP-14x14",
              img : "comercial/19-DAMPERS.jpg",
              description : "DAMPER GALVANIZADO 14\"x14\""
            },
            {
              model : "5DAMP-16x16",
              img : "comercial/19-DAMPERS.jpg",
              description : "DAMPER GALVANIZADO 16\"x16\""
            },
            {
              model : "5DAMP-18x18",
              img : "comercial/19-DAMPERS.jpg",
              description : "DAMPER GALVANIZADO 18\"x18\""
            },
            {
              model : "5DAMP-20x20",
              img : "comercial/19-DAMPERS.jpg",
              description : "DAMPER GALVANIZADO 20\"x20\""
            },
            {
              model : "5DAMP-24x24",
              img : "comercial/19-DAMPERS.jpg",
              description : "DAMPER GALVANIZADO 24\"x24\""
            },
            {
              model : "5DAMP-30x30",
              img : "comercial/19-DAMPERS.jpg",
              description : "DAMPER GALVANIZADO 30\"x30\""
            },
            {
              model : "5DAMP-36x36",
              img : "comercial/19-DAMPERS.jpg",
              description : "DAMPER GALVANIZADO 36\"x36\""
            },
            {
              model : "5DAMP-42x42",
              img : "comercial/19-DAMPERS.jpg",
              description : "DAMPER GALVANIZADO 42\"x42\""
            },
            {
              model : "5DAMP-48x48",
              img : "comercial/19-DAMPERS.jpg",
              description : "DAMPER GALVANIZADO 48\"x48\""
            },
            {
              model : "5DAMP-8x8",
              img : "comercial/19-DAMPERS.jpg",
              description : "DAMPER GALVANIZADO 8\"x8\""
            }
          ]
        }
      ]
    },
    {
      "category": "accesorios de montaje",
      products : [
        {
          "name": "ROOF CURB",
          "description": "Accesorios para realizar el montaje e instalación de equipos centrífugos de tejado.\nFabricados en lámina galvanizados",
          "img": "comercial/19-RFCCR.jpg",
          "specs": "comercial/RoofCurb.pdf",
          "models": [
            {
              model : "55RFCCR-18/20",
              img : "comercial/19-RFCCR.jpg",
              description : "ROOF CURB PARA CRH/V-18/20"
            },
            {
              model : "55RFCCR-22/24",
              img : "comercial/19-RFCCR.jpg",
              description : "ROOF CURB PARA CRH/V-22/24"
            },
            {
              model : "55RFCCR-26/28",
              img : "comercial/19-RFCCR.jpg",
              description : "ROOF CURB PARA CRH/V-26/28"
            },
            {
              model : "55RFCCR-30/33",
              img : "comercial/19-RFCCR.jpg",
              description : "ROOF CURB PARA CRH/V-30/33"
            },
            {
              model : "55RFCCR-12/16",
              img : "comercial/19-RFCCR.jpg",
              description : "ROOF CURB PARA CRH/V-12/16"
            },
            {
              model : "55RFCCR-14/16",
              img : "comercial/19-RFCCR.jpg",
              description : "ROOF CURB PARA CRH/V-14/16"
            },
            {
              model : "55RFCCR-7",
              img : "comercial/19-RFCCR.jpg",
              description : "ROOF CURB PARA CRH/V-7"
            }
          ]
        },
        {
          "name": "CUBIERTA INTEMPERIE",
          "description": "Accesorio fabricado en lámina galvanizada, especial para adaptarse a equipos axiales, en donde la protección contra agentes climáticos es necesaria.\nPara instalaciones con ventiladores o extractores axiales, diámetros 350 al 1800.\nPara instalaciones con inyectores axiales, diámetros 400 al 1800.\nPara proteger de la lluvia u objetos extraños, el interior del local que se esté ventilando.",
          "img": "comercial/19-CUBINT.jpg",
          "specs": "comercial/Cubierta.pdf",
          "models": [
            {
              model : "5CIE-1000",
              img : "comercial/19-CUBINT.jpg",
              description : "CUBIERTA INTEMPERIE 1000 45°"
            },
            {
              model : "5CIE-1250",
              img : "comercial/19-CUBINT.jpg",
              description : "CUBIERTA INTEMPERIE 1250 45°"
            },
            {
              model : "5CIE-1500",
              img : "comercial/19-CUBINT.jpg",
              description : "CUBIERTA INTEMPERIE 1500 45°"
            },
            {
              model : "5CIE-1800",
              img : "comercial/19-CUBINT.jpg",
              description : "CUBIERTA INTEMPERIE 1800 45°"
            },
            {
              model : "5CIE-400",
              img : "comercial/19-CUBINT.jpg",
              description : "CUBIERTA INTEMPERIE 400 45°"
            },
            {
              model : "5CIE-500",
              img : "comercial/19-CUBINT.jpg",
              description : "CUBIERTA INTEMPERIE 500 45°"
            },
            {
              model : "5CIE-630",
              img : "comercial/19-CUBINT.jpg",
              description : "CUBIERTA INTEMPERIE 630 45°"
            },
            {
              model : "5CIE-800",
              img : "comercial/19-CUBINT.jpg",
              description : "CUBIERTA INTEMPERIE 800 45°"
            }
          ]
        },
        {
          "name": "LV",
          "description": "Totalmente construido en lámina galvanizada, recubrimiento en acabado aluminio matizado y marco de sujeción exterior.\nInstalación en áreas para las cuales se necesita una libre entrada o salida de aire con un diseño arquitectónicamente estético: Centros comerciales, naves industriales, bodegas, etc.\nAccesorio opcional: Malla mosquitero.",
          "img": "comercial/19-LV.jpg",
          "specs": "comercial/LV.pdf",
          "models": [
            {
              model : "5LOU-AL21",
              img : "comercial/19-LV.jpg",
              description : "LOUVER 21x12 ALUM.ALETAS FIJA"
            },
            {
              model : "5LOU-AL30",
              img : "comercial/19-LV.jpg",
              description : "LOUVER 30x21 ALUM.ALETAS FIJA"
            },
            {
              model : "5LOU-AL36",
              img : "comercial/19-LV.jpg",
              description : "LOUVER 36x24 ALUM.ALETAS FIJA"
            },
            {
              model : "5LOU-AL42",
              img : "comercial/19-LV.jpg",
              description : "LOUVER 42x30 ALUM.ALETAS FIJA"
            },
            {
              model : "5LOU-AL48",
              img : "comercial/19-LV.jpg",
              description : "LOUVER 48x36 ALUM.ALETAS FIJA"
            }
          ]
        },
        {
          "name": "MALLA DE PROTECCIÓN",
          "description": "Se recomienda para instalaciones en las cuales sea necesario proteger el interior de los locales de la entrada de objetos extraños, animales, etc., para evitar la entrada de objetos extraños a la instalación del local.",
          "img": "comercial/19-MAWX.jpg",
          "specs": "comercial/ft-mallaproteccion.pdf",
          "models": [
            {
              model : "3-ZRE-1000G",
              img : "comercial/19-MAWX.jpg",
              description : "REJ.PROT.1110X1108mm GALV."
            },
            {
              model : "3-ZRE-1250GA",
              img : "comercial/19-MAWX.jpg",
              description : "REJ.PROT.1400X685mm GALV."
            },
            {
              model : "3-ZRE-1500G",
              img : "comercial/19-MAWX.jpg",
              description : "REJ.PROT.WX.1500 GALV."
            },
            {
              model : "3-ZRE-630G",
              img : "comercial/19-MAWX.jpg",
              description : "REJ.PROT.WX.630 GALV."
            },
            {
              model : "3-ZRE-800G",
              img : "comercial/19-MAWX.jpg",
              description : "REJ.PROT.835X845mm GALV."
            }
          ]
        },
        {
          "name": "PER",
          "description": "Fabricación del marco de la persiana en lámina galvanizada con acabado en pintura electrostática en polvo; palas de aluminio, mecanismo de apertura simultánea.\nLos modelos PER/X-630, PER/X-800 y PER/X-1000 están fabricados en materiales reforzados y su diseño es especial para manejar presiones más altas que las persianas convencionales.\nLos modelos 1500 y 1800 están construidos en 2 partes para facilidad de transporte. Reforzada y con altos calibres para poder ser usada en los ventiladores de tamaño 1500 y 1800 mm de diámetro.\nSe fijan directo sobre la pared exterior en 4 puntos de sujeción, las medidas coinciden directamente con el tamaño de los ventiladores. No precisan mantenimiento salvo una limpieza periódica.",
          "img": "comercial/19-PER.jpg",
          "specs": "comercial/1FTPERSIANA.pdf",
          "models": [
            {
              model : "5PER/X-1000",
              img : "comercial/19-MAWX.jpg",
              description : "PERSIANA 1000 REFORZADA"
            },
            {
              model : "5PER/X-800",
              img : "comercial/19-MAWX.jpg",
              description : "PERSIANA 800 REFORZADA"
            },
            {
              model : "5PERALAL-1000",
              img : "comercial/19-MAWX.jpg",
              description : "PERSIANA 1000 APERTURA SIM. NEA"
            },
            {
              model : "5PERALAL-1250",
              img : "comercial/19-MAWX.jpg",
              description : "PERSIANA 1250 APERTURA SIM. NEA"
            },
            {
              model : "5PERALAL-1500",
              img : "comercial/19-MAWX.jpg",
              description : "PERSIANA 1500 APERTURA SIM. NEA"
            },
            {
              model : "5PER-1800E",
              img : "comercial/19-MAWX.jpg",
              description : "PERSIANA EXT.1800 NUEVO MODELO"
            },
            {
              model : "5PERAL-200",
              img : "comercial/19-MAWX.jpg",
              description : "PERSIANA 200 APERTURA SIM. EA"
            },
            {
              model : "5PERAL-250",
              img : "comercial/19-MAWX.jpg",
              description : "PERSIANA 250 APERTURA SIM. EA"
            },
            {
              model : "5PERAL-350",
              img : "comercial/19-MAWX.jpg",
              description : "PERSIANA 350 APERTURA SIM. EA"
            },
            {
              model : "5PERAL-400",
              img : "comercial/19-MAWX.jpg",
              description : "PERSIANA 400 APERTURA SIM. EA"
            },
            {
              model : "5PERAL-500",
              img : "comercial/19-MAWX.jpg",
              description : "PERSIANA 500 APERTURA SIM. EA"
            },
            {
              model : "5PERAL-630",
              img : "comercial/19-MAWX.jpg",
              description : "PERSIANA 630 APERTURA SIM. EA"
            },
            {
              model : "5PERAL-800",
              img : "comercial/19-MAWX.jpg",
              description : "PERSIANA 800 APERTURA SIM. EA"
            }
          ]
        },
        {
          "name": "UNIÓN PERSIANA",
          "description": "Su uso se recomienda para aplicaciones en donde la persiana del ventilador queda alejada del mismo por motivos de instalación y es necesario una unión que nos ayude con la correcta adaptación de las piezas a la pared en donde se van a instalar.",
          "img": "comercial/19-UP.jpg",
          "specs": "comercial/FTUNIONPERSIANA.pdf",
          "models": [
            {
              model : "5UP-1000",
              img : "comercial/19-UP.jpg",
              description : "UNION PERSIANA HX-1000 NUEVA"
            },
            {
              model : "5UP-1250",
              img : "comercial/19-UP.jpg",
              description : "UNION PERSIANA HX-1250 NUEVA"
            },
            {
              model : "5UP-1500",
              img : "comercial/19-UP.jpg",
              description : "UNION PERSIANA HX-1500 NUEVA"
            },
            {
              model : "5UP-1800",
              img : "comercial/19-UP.jpg",
              description : "UNION PERSIANA HX-1800 NUEVA"
            },
            {
              model : "5UP-400",
              img : "comercial/19-UP.jpg",
              description : "UNION PERSIANA HX-400 NUEVA"
            },
            {
              model : "5UP-500",
              img : "comercial/19-UP.jpg",
              description : "UNION PERSIANA HX-500 NUEVA"
            },
            {
              model : "5UP-630",
              img : "comercial/19-UP.jpg",
              description : "UNION PERSIANA HX-630 NUEVA"
            },
            {
              model : "5UP-800",
              img : "comercial/19-UP.jpg",
              description : "UNION PERSIANA HX-800 NUEVA"
            }
          ]
        }
      ]
    },
    {
      "category": "accesorios de eléctricos",
      products : [
        {
          "name": "INTERRUPTOR DE PRESIÓN",
          "description": "Interruptor de presión sencillo con diafragma a prueba de fugas de acción simple, incluye temporizador de retardo integral con 10 minutos de tiempo encendido, ciclo de desconexión de 15 segundos.\nTemporizador de retardo de reciclaje integral, con 10 min encendido y 15 segundos, apagado por ciclo, 120 volts de entrada. 20 V AC +10%/-15%, 50/60 Hz.\nRango de tiempo: 10 minutos (600 segundos) 10%.\nSalidas: Sin relevador de 8 A (resistivo) @ 250 V AC o 1/8 hp @ 250 V AC.\nConexiones eléctricas: Reglilla de conexión adecuada para cable de 12-26 AWG.\nRango de temperatura: -40 a 60 °C.",
          "img": "comercial/COMACCIPR.jpg",
          "specs": "comercial/InterruptordePresion.pdf",
          "models": [
          ]
        },
        {
          "name": "REGULADOR DE VELOCIDAD",
          "description": "Proporciona un absoluto control del flujo del aire, regulado por la velocidad de giro del ventilador.\nMonofásico 115 V AC 50/60 Hz.\nMecanismo electromecánico giratorio.\nTemperatura ambiente 40°C.\nMáximo amperaje de funcionamiento 5 y 10 A.\nPerilla fabricada en plástico oscuro y tapa metálica color aluminio.",
          "img": "comercial/COMACCRVE.jpg",
          "specs": "comercial/FTREGULADORVEL.pdf",
          "models": [
          ]
        }
      ]
    },
    {
      "category": "accesorios para axiales de pared",
      products : [
        {
          "name": "Banco Portafiltros",
          "description": "El módulo de filtros se fabrica en lámina galvanizada con puerta lateral para facilitar la inspección y reemplazo de sus filtros sobre el riel.\nPuede fabricarse con una o dos etapas de filtrado.",
          "img": "comercial/COMAXPBP.jpg",
          "specs": "comercial/PORTAFILTROS.pdf",
          "models": [
            {
              model : "5APF-2000/24",
              img : "comercial/COMAXPBP.jpg",
              description : "BANCO P.FILTRO 24\"x24\" 4E S/FI"
            },
            {
              model : "5APF-4000/22\t",
              img : "comercial/COMAXPBP.jpg",
              description : "BANCO P.FILTRO 24\"x48\" 2E S/FI"
            },
            {
              model : "5APF-4000/24",
              img : "comercial/COMAXPBP.jpg",
              description : "BANCO P.FILTRO 24\"x48\" 2E S/FI"
            },
            {
              model : "5APF-8000/22",
              img : "comercial/COMAXPBP.jpg",
              description : "BANCO P.FILTRO 48\"x48\" 2E S/FI"
            },
            {
              model : "5APF-8000/24",
              img : "comercial/COMAXPBP.jpg",
              description : "BANCO P.FILTRO 48\"x48\" 4E S/FI"
            }
          ]
        },
        {
          "name": "CUBIERTA INTEMPERIE 45",
          "description": "Accesorio fabricado en lámina galvanizada, especial para adaptarse a equipos axiales, en donde la protección contra agentes climáticos es necesaria.\nPara instalaciones con ventiladores o extractores axiales, diámetros 350 al 1800.\nPara instalaciones con inyectores axiales, diámetros 400 al 1800.\nPara proteger de la lluvia u objetos extraños, el interior del local que se esté ventilando.",
          "img": "comercial/19-CUBINT.jpg",
          "specs": "comercial/Cubierta.pdf",
          "models": [
            {
              model : "5CIE-1000",
              img : "comercial/19-CUBINT.jpg",
              description : "CUBIERTA INTEMPERIE 1000 45°"
            },
            {
              model : "5CIE-1250",
              img : "comercial/19-CUBINT.jpg",
              description : "CUBIERTA INTEMPERIE 1250 45°"
            },
            {
              model : "5CIE-1500",
              img : "comercial/19-CUBINT.jpg",
              description : "CUBIERTA INTEMPERIE 1500 45°"
            },
            {
              model : "5CIE-1800",
              img : "comercial/19-CUBINT.jpg",
              description : "CUBIERTA INTEMPERIE 1800 45°"
            },
            {
              model : "5CIE-400",
              img : "comercial/19-CUBINT.jpg",
              description : "CUBIERTA INTEMPERIE 400 45°"
            },
            {
              model : "5CIE-500",
              img : "comercial/19-CUBINT.jpg",
              description : "CUBIERTA INTEMPERIE 500 45°"
            },
            {
              model : "5CIE-630",
              img : "comercial/19-CUBINT.jpg",
              description : "CUBIERTA INTEMPERIE 630 45°"
            },
            {
              model : "5CIE-800",
              img : "comercial/19-CUBINT.jpg",
              description : "CUBIERTA INTEMPERIE 800 45°"
            }
          ]
        },
        {
          "name": "CUBIERTA INTEMPERIE 90",
          "description": "Accesorio fabricado en lámina galvanizada, su uso se recomienda en donde la protección contra agentes climáticos u objetos extraños es necesaria.",
          "img": "comercial/COMAXPCI90.jpg",
          "specs": "comercial/Cubierta.pdf",
          "models": []
        },
        {
          "name": "Persiana Inyección con Mecanismo",
          "description": "La apertura se logra a través de un mecanismo, lo que permite una regulación de la cantidad de aire deseado a la presión estática requerida, con pérdidas de fricción mínima.",
          "img": "comercial/COMAXPIM.jpg",
          "specs": "#",
          "models": []
        },
        {
          "name": "MALLA DE PROTECCIÓN",
          "description": "Se recomienda para instalaciones en las cuales sea necesario proteger el interior de los locales de la entrada de objetos extraños, animales, etc., para evitar la entrada de objetos extraños a la instalación del local.",
          "img": "comercial/19-MAWX.jpg",
          "specs": "comercial/ft-mallaproteccion.pdf",
          "models": [
            {
              model : "3-ZRE-1000G",
              img : "comercial/19-MAWX.jpg",
              description : "REJ.PROT.1110X1108mm GALV."
            },
            {
              model : "3-ZRE-1250GA",
              img : "comercial/19-MAWX.jpg",
              description : "REJ.PROT.1400X685mm GALV."
            },
            {
              model : "3-ZRE-1500G",
              img : "comercial/19-MAWX.jpg",
              description : "REJ.PROT.WX.1500 GALV."
            },
            {
              model : "3-ZRE-630G",
              img : "comercial/19-MAWX.jpg",
              description : "REJ.PROT.WX.630 GALV."
            },
            {
              model : "3-ZRE-800G",
              img : "comercial/19-MAWX.jpg",
              description : "REJ.PROT.835X845mm GALV."
            }
          ]
        },
        {
          "name": "Persiana Extracción con Mecanismo",
          "description": "La apertura se logra a través de un mecanismo, lo que permite una regulación de la cantidad de aire deseado a la presión estática requerida, con pérdidas de fricción mínima.",
          "img": "comercial/COMAXPIM.jpg",
          "specs": "#",
          "models": []
        }
      ]
    },
    {
      "category": "Atenuadores Acústicos",
      products : [
        {
          "name": "ATS",
          "description": "Manejo en sistemas de acondicionamiento de aire, ventilación comercial, sistemas de manejadoras, manejadoras de filtración, aire lavado, sistemas de ductos, aire limpio, aire acondicionado, calefacción, hotelería, hospitales, centros comerciales, edificios públicos, etc.",
          "img": "comercial/19-ATS.jpg",
          "specs": "comercial/SP-ATS.pdf",
          "models": [
            {
              model : "5ATS-1000/1",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 1000 1D"
            },
            {
              model : "5ATS-1000/15",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 1000 1.5D"
            },
            {
              model : "5ATS-1000/2",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 1000 2D"
            },
            {
              model : "5ATS-1120/1",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 1120 1D"
            },
            {
              model : "5ATS-1120/15",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 1120 1.5D"
            },
            {
              model : "5ATS-1120/2",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 1120 2D"
            },
            {
              model : "5ATS-1250/1",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 1250 1D"
            },
            {
              model : "5ATS-1250/15",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 1250 1.5D"
            },
            {
              model : "5ATS-1250/2",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 1250 2D"
            },
            {
              model : "5ATS-1400/1",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 1400 1D"
            },
            {
              model : "5ATS-1400/15",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 1400 1.5D"
            },
            {
              model : "5ATS-1400/2",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 1400 2D"
            },
            {
              model : "5ATS-400/1",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 400 1D"
            },
            {
              model : "5ATS-400/15",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 400 1.5D"
            },
            {
              model : "5ATS-400/2",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 400 2D"
            },
            {
              model : "5ATS-450/1",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 450 1D"
            },
            {
              model : "5ATS-450/15",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 450 1.5D"
            },
            {
              model : "5ATS-450/2",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 450 2D"
            },
            {
              model : "5ATS-500/1",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 500 1D"
            },
            {
              model : "5ATS-500/15",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 500 1.5D"
            },
            {
              model : "5ATS-500/2",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 500 2D"
            },
            {
              model : "5ATS-560/1",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 560 1D"
            },
            {
              model : "5ATS-560/15",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 560 1.5D"
            },
            {
              model : "5ATS-560/2",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 560 2D"
            },
            {
              model : "5ATS-630/1",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 630 1D"
            },
            {
              model : "5ATS-630/15",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 630 1.5D"
            },
            {
              model : "5ATS-630/2",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 630 2D"
            },
            {
              model : "5ATS-710/1",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 710 1D"
            },
            {
              model : "5ATS-710/15",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 710 1.5D"
            },
            {
              model : "5ATS-710/2",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 710 2D"
            },
            {
              model : "5ATS-800/1",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 800 1D"
            },
            {
              model : "5ATS-800/15",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 800 1.5D"
            },
            {
              model : "5ATS-800/2",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 800 2D"
            },
            {
              model : "5ATS-900/1",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 900 1D"
            },
            {
              model : "5ATS-900/15",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 900 1.5D"
            },
            {
              model : "5ATS-900/2",
              img : "comercial/19-ATS.jpg",
              description : "ATENUADOR S/NUCLEO 900 2D"
            }
          ]
        },
        {
          "name": "ATN",
          "description": "De fabricación similar al ATS, cuenta con un núcleo de perfil aerodinámico al centro que disminuye las pérdidas generadas por la presión dinámica, y a su vez; incrementar el área de absorción del material fonoabsorbente, logrando una mayor reducción del nivel sonoro.",
          "img": "comercial/19-ATN.jpg",
          "specs": "comercial/SP-ATN.pdf",
          "models": [
            {
              model : "5ATN-1000/1",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 1000 1D"
            },
            {
              model : "5ATN-1000/15",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 1000 1.5D"
            },
            {
              model : "5ATN-1000/2",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 1000 2D"
            },
            {
              model : "5ATN-1120/1",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 1120 1D"
            },
            {
              model : "5ATN-1120/15",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 1120 1.5D"
            },
            {
              model : "5ATN-1120/2",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 1120 2D"
            },
            {
              model : "5ATN-1250/1",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 1250 1D"
            },
            {
              model : "5ATN-1250/15",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 1250 1.5D"
            },
            {
              model : "5ATN-1250/2",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 1250 2D"
            },
            {
              model : "5ATN-1400/1",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 1400 1D"
            },
            {
              model : "5ATN-1400/15",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 1400 1.5D"
            },
            {
              model : "5ATN-1400/2",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 1400 2D"
            },
            {
              model : "5ATN-400/1",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 400 1D"
            },
            {
              model : "5ATN-400/15",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 400 1.5D"
            },
            {
              model : "5ATN-400/2",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 400 2D"
            },
            {
              model : "5ATN-450/1",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 450 1D"
            },
            {
              model : "5ATN-450/15",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 450 1.5D"
            },
            {
              model : "5ATN-450/2",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 450 2D"
            },
            {
              model : "5ATN-500/1",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 500 1D"
            },
            {
              model : "5ATN-500/15",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 500 1.5D"
            },
            {
              model : "5ATN-500/2",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 500 2D"
            },
            {
              model : "5ATN-560/1",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 560 1D"
            },
            {
              model : "5ATN-560/15",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 560 1.5D"
            },
            {
              model : "5ATN-560/2",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 560 2D"
            },
            {
              model : "5ATN-630/1",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 630 1D"
            },
            {
              model : "5ATN-630/15",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 630 1.5D"
            },
            {
              model : "5ATN-630/2",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 630 2D"
            },
            {
              model : "5ATN-710/1",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 710 1D"
            },
            {
              model : "5ATN-710/15",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 710 1.5D"
            },
            {
              model : "5ATN-710/2",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 710 2D"
            },
            {
              model : "5ATN-800/1",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 800 1D"
            },
            {
              model : "5ATN-800/15",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 800 1.5D"
            },
            {
              model : "5ATN-800/2",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 800 2D"
            },
            {
              model : "5ATN-900/1",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 900 1D"
            },
            {
              model : "5ATN-900/15",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 900 1.5D"
            },
            {
              model : "5ATN-900/2",
              img : "comercial/19-ATN.jpg",
              description : "ATENUADOR S/NUCLEO 900 2D"
            }
          ]
        }
      ]
    },
    {
      "category": "Axiales de Pared",
      products : [
        {
          "name": "WXD-A",
          "description": "Esta serie cuenta con dos opciones de acoplamiento, transmisión directa con banco portafiltros hasta con dos etapas de filtrado y transmisión por poleas y bandas con una sola etapa de filtrado.\nHélice de aluminio inyectado.\nWXD, opción en transmisión directa, ofrece tres tamaños con diámetro nominal de 630, 800 y 1000 mm.\nAplicaciones: bodegas, gimnasios, talleres, y fábricas.",
          "img": "comercial/19-WX-D-A2018.jpg",
          "specs": "comercial/WX.pdf",
          "models": [
            {
              model : "WXD-I-800-5HP",
              img : "comercial/19-WX-D-A2018.jpg",
              description : "WXD-I-800-5HP-4P-H-A/208-230/460V-60HZ-3"
            },
            {
              model : "WXD-I-800-0.75HP",
              img : "comercial/19-WX-D-A2018.jpg",
              description : "WXD-I-800-0.75HP-6P-L-A/208-230/460V-60HZ-3"
            },
            {
              model : "WXD-I-800-1.5HP",
              img : "comercial/19-WX-D-A2018.jpg",
              description : "WXD-I-800-1.5HP-4P-L0-A/208-230/460V-60HZ-3"
            },
            {
              model : "WXD-I-800-3HP",
              img : "comercial/19-WX-D-A2018.jpg",
              description : "WXD-I-800-3HP-4P-L-A/208-230/460V-60HZ-3"
            },
            {
              model : "WXD-I-800-1HP",
              img : "comercial/19-WX-D-A2018.jpg",
              description : "WXD-E-800-1HP-6P-H-A/208-230/460V-60HZ-3"
            }
          ]
        },
        {
          "name": "WXD-P",
          "description": "Esta serie cuenta con dos opciones de acoplamiento, transmisión directa con banco portafiltros hasta con dos etapas de filtrado y transmisión por poleas y bandas con una sola etapa de filtrado.\nHélice termo plástica reforzada con fibra de vidrio.\nWXD, opción en transmisión directa, ofrece tres tamaños con diámetro nominal de 630, 800 y 1000 mm.\nAplicaciones: bodegas, gimnasios, talleres, y fábricas.",
          "img": "comercial/comercial/19-WX-D-A2018.jpg",
          "specs": "comercial/WX.pdf",
          "models": [
            {
              model : "WXD-E-800-2HP-4P",
              img : "comercial/19-WX-D-A2018.jpg",
              description : "WXD-E-800-2HP-4P-L1-P/208-230/460V-60HZ-3"
            },
            {
              model : "WXD-E-800-3HP-4P",
              img : "comercial/19-WX-D-A2018.jpg",
              description : "WXD-E-800-3HP-4P-L-P/208-230/460V-60HZ-3"
            },
            {
              model : "WXD-E-800-0.75HP-6P",
              img : "comercial/19-WX-D-A2018.jpg",
              description : "WXD-E-800-0.75HP-6P-L-P/208-230/460V-60HZ-3"
            },
            {
              model : "WXD-E-800-1.5HP-4P",
              img : "comercial/19-WX-D-A2018.jpg",
              description : "WXD-E-800-1.5HP-4P-L0-P/208-230/460V-60HZ-3"
            },
            {
              model : "WXD-I-800-3HP-4P",
              img : "comercial/19-WX-D-A2018.jpg",
              description : "WXD-I-800-3HP-4P-L-P/208-230/460V-60HZ-3"
            }
          ]
        },
        {
          "name": "WXD-S",
          "description": "Esta serie cuenta con dos opciones de acoplamiento, transmisión directa con banco portafiltros hasta con dos etapas de filtrado y transmisión por poleas y bandas con una sola etapa de filtrado.\nHélice de acero al carbón.\nWXD, opción en transmisión directa, ofrece tres tamaños con diámetro nominal de 630, 800 y 1000 mm.\nAplicaciones: bodegas, gimnasios, talleres, y fábricas.",
          "img": "comercial/comercial/19-WX-D-A2018.jpg",
          "specs": "comercial/WX.pdf",
          "models": [
            {
              model : "WXD-I-630-0.75HP-6P",
              img : "comercial/19-WX-D-A2018.jpg",
              description : "WXD-I-630-0.75HP-6P-H-S/208-230/460V-60HZ-3"
            },
            {
              model : "WXD-E-630-0.75HP-6P",
              img : "comercial/19-WX-D-A2018.jpg",
              description : "WXD-E-630-0.75HP-6P-H-S/208-230/460V-60HZ-3"
            },
            {
              model : "WXD-I-630-0.5HP-6P",
              img : "comercial/19-WX-D-A2018.jpg",
              description : "WXD-I-630-0.5HP-6P-L-S/208-230/460V-60HZ-3"
            },
            {
              model : "WXD-I-630-1.5HP-4P",
              img : "comercial/19-WX-D-A2018.jpg",
              description : "WXD-I-630-1.5HP-4P-H-S/208-230/460V-60HZ-3"
            },
            {
              model : "WXD-E-630-1.5HP-4P",
              img : "comercial/19-WX-D-A2018.jpg",
              description : "WXD-E-630-1.5HP-4P-H-S/208-230/460V-60HZ-3"
            }
          ]
        },
        {
          "name": "WXT",
          "description": "Esta serie cuenta con dos opciones de acoplamiento, transmisión directa con banco portafiltros hasta con dos etapas de filtrado y transmisión por poleas y bandas con una sola etapa de filtrado.\nHélices de acero al carbón.\nWXT opción transmisión poleas-bandas, ofrece cuatro tamaños con diámetro nominal de 800, 1000, 1250 y 1500 mm.\nAplicaciones: bodegas, gimnasios, talleres, y fábricas.",
          "img": "comercial/comercial/19-WX-D-A2018.jpg",
          "specs": "comercial/WX.pdf",
          "models": [
            {
              model : "WXT-E-800-0.5HP-S",
              img : "comercial/19-WX-D-A2018.jpg",
              description : "WXT-E-800-0.5HP-S-208-230/460V-60HZ-3"
            },
            {
              model : "WXT-E-800-0.75HP-S",
              img : "comercial/19-WX-D-A2018.jpg",
              description : "WXT-E-800-0.75HP-S-208-230/460V-60HZ-3"
            },
            {
              model : "WXT-E-800-1HP-S",
              img : "comercial/19-WX-D-A2018.jpg",
              description : "WXT-E-800-1HP-S-208-230/460V-60HZ-3"
            },
            {
              model : "WXT-I-800-0.5HP-S",
              img : "comercial/19-WX-D-A2018.jpg",
              description : "WXT-I-800-0.5HP-S-208-230/460V-60HZ-3"
            },
            {
              model : "WXT-I-800-0.75HP-S",
              img : "comercial/19-WX-D-A2018.jpg",
              description : "WXT-I-800-0.75HP-S-208-230/460V-60HZ-3"
            }
          ]
        }
      ]
    },
    {
      "category": " Axiales de tejado",
      "products": [
        {
          "name": "HAB-T",
          "description": "Estructurado en tres tamaños y diferentes ángulos de ataque, con sistema de acoplamiento directo hélice-motor. Su construcción le garantiza una excelente protección contra la corrosión y daños a condiciones de intemperie en los que son utilizados.\nEquipo fabricado en lámina galvanizada.",
          "img": "comercial/19-HAB-T2018.jpg",
          "specs": "comercial/FTHAB-T.pdf",
          "models": [
            {
              model : "HAB/4-400/H",
              img : "comercial/19-HAB-T2018.jpg",
              description : "HAB/4-400/H"
            },
            {
              model : "HAB/6-500/H",
              img : "comercial/19-HAB-T2018.jpg",
              description : "HAB/6-500/H"
            },
            {
              model : "HAB/4-500/H",
              img : "comercial/19-HAB-T2018.jpg",
              description : "HAB/4-500/H"
            },
            {
              model : "HAB/6-630/H",
              img : "comercial/19-HAB-T2018.jpg",
              description : "HAB/6-630/H"
            },
            {
              model : "HAB/6-630/L",
              img : "comercial/19-HAB-T2018.jpg",
              description : "HAB/6-630/L"
            }
          ]
        },
        {
          "name": "HAIB-T",
          "description": "Esta gama de extractores axiales, en transmisión polea y banda, pensado para mover grandes volúmenes de aire.\nSu diseño constructivo le garantiza una excelente protección contra la corrosión y ambientes de intemperie.\nEstos extractores tienen el marco embocadura y cubierta protectora fabricados en fibra de vidrio de alta resistencia.",
          "img": "comercial/19-HAIB-T18.jpg",
          "specs": "comercial/FTHAB-T.pdf",
          "models": [
            {
              model : "HAIT-800",
              img : "comercial/19-HAIB-T18.jpg",
              description : "HAIT-800"
            },
            {
              model : "HAIT-800",
              img : "comercial/19-HAIB-T18.jpg",
              description : "HAIT-800"
            },
            {
              model : "HAIB-1000",
              img : "comercial/19-HAIB-T18.jpg",
              description : "HAIB-1000"
            },
            {
              model : "HAIT-1000",
              img : "comercial/19-HAIB-T18.jpg",
              description : "HAIT-1000"
            },
            {
              model : "HAIB-1250",
              img : "comercial/19-HAIB-T18.jpg",
              description : "HAIB-1250"
            },,
            {
              model : "HAIT-1250",
              img : "comercial/19-HAIB-T18.jpg",
              description : "HAIT-1250"
            },
            {
              model : "HAIT-1-1250",
              img : "comercial/19-HAIB-T18.jpg",
              description : "HAIT-1-1250"
            }
          ]
        },
        {
          "name": "HAM",
          "description": "Gama de extractores axiales en acoplamiento directo, normalizados en tres diámetros, con gran estética y diseño compacto. Cuenta con caudales apropiados al diámetro y aplicaciones, manteniendo un nivel sonoro bajo y mínimo consumo de potencia.\nDomo, venturi y embocadura de fijación, fabricados en aluminio, sometidos a un proceso de repulsado, ofreciendo al equipo estética, características anticorrosivas y gran versatilidad.",
          "img": "comercial/19-HAM18.jpg",
          "specs": "comercial/SP-HAM.pdf",
          "models": [
            {
              model : "HAM-200-127V",
              img : "comercial/19-HAM18.jpg",
              description : "HAM-200-127V"
            },
            {
              model : "HAM-250-127V",
              img : "comercial/19-HAM18.jpg",
              description : "HAM-250-127V"
            },
            {
              model : "HAM-350-127V",
              img : "comercial/19-HAM18.jpg",
              description : "HAM-350-127V"
            }
          ]
        },
        {
          "name": "RX-D-A",
          "description": "Extracción de aire en grandes cantidades, para industrias, bodegas, almacenes en general, estacionamientos, etc.\nEste modelo cuenta con una hélice de alumnio inyectado.",
          "img": "comercial/19-RX2018.jpg",
          "specs": "comercial/SP-RXTD.pdf",
          "models": [
            {
              model : "EXT.RXD 800-1 1/2-6P/A",
              img : "comercial/19-RX2018.jpg",
              description : "EXT.RXD 800-1 1/2-6P/A"
            },
            {
              model : "EXT.RXD 800-3-6P/A",
              img : "comercial/19-RX2018.jpg",
              description : "EXT.RXD 800-3-6P/A"
            },
            {
              model : "EXT.RXD 800-2-6P/A",
              img : "comercial/19-RX2018.jpg",
              description : "EXT.RXD 800-2-6P/A"
            },
            {
              model : "EXT.RXD 1000-5-6P/A",
              img : "comercial/19-RX2018.jpg",
              description : "EXT.RXD 1000-5-6P/A"
            },
            {
              model : "EXT.RXD 1000-2-6P/A",
              img : "comercial/19-RX2018.jpg",
              description : "EXT.RXD 1000-2-6P/A"
            },
            {
              model : "EXT.RXD 1000-3-6P/A",
              img : "comercial/19-RX2018.jpg",
              description : "EXT.RXD 1000-3-6P/A"
            }
          ]
        },
        {
          "name": "RX-D-P",
          "description": "Extracción de aire en grandes cantidades, para industrias, bodegas, almacenes en general, estacionamientos, etc.\nEste modelo cuenta con una hélice termoplástica reforzada con fibra de vidrio que le confiere alta resistencia.",
          "img": "comercial/19-RX2018.jpg",
          "specs": "comercial/SP-RXTD.pdf",
          "models": [
            {
              model : "EXT.RXD 800-2-6P/P",
              img : "comercial/19-RX2018.jpg",
              description : "EXT.RXD 800-2-6P/P"
            },
            {
              model : "EXT.RXD 800-1 1/2-6P/P",
              img : "comercial/19-RX2018.jpg",
              description : "EXT.RXD 800-1 1/2-6P/P"
            },
            {
              model : "EXT.RXD 800-3-6P/P",
              img : "comercial/19-RX2018.jpg",
              description : "EXT.RXD 800-3-6P/P"
            },
            {
              model : "EXT.RXD 1000-3-6P/P",
              img : "comercial/19-RX2018.jpg",
              description : "EXT.RXD 1000-3-6P/P"
            },
            {
              model : "EXT.RXD 1000-5-6P/P",
              img : "comercial/19-RX2018.jpg",
              description : "EXT.RXD 1000-5-6P/P"
            },
            {
              model : "EXT.RXD 1000-2-6P/P",
              img : "comercial/19-RX2018.jpg",
              description : "EXT.RXD 1000-2-6P/P"
            }
          ]
        },
        {
          "name": "RX-T",
          "description": "RXT, opción en transmisión poleas-bandas, cuenta con dos tipos de arreglo, con motor dentro del flujo de aire para el manejo de aire limpio y con motor fuera del flujo, con accesorios que facilitan el montaje y mantenimiento\ndel motor. Ofrece cuatro tamaños de diámetro nominal 800, 1000, 1250 y 1500 mm, con la ventaja de ser equipos silenciosos, debido a las velocidades reducidas a las que trabajan.",
          "img": "comercial/19-RXT-C.jpg",
          "specs": "comercial/SP-RXTD.pdf",
          "models": [
            {
              model : "EXT.RXT 800-1/2-27/S",
              img : "comercial/19-RXT-C.jpg",
              description : "EXT.RXT 800-1/2-27/S"
            },
            {
              model : "EXT.RXT 800-1-27/S",
              img : "comercial/19-RXT-C.jpg",
              description : "EXT.RXT 800-1-27/S"
            },
            {
              model : "EXT.RXT 800-3/4-27/S",
              img : "comercial/19-RXT-C.jpg",
              description : "EXT.RXT 800-3/4-27/S"
            },
            {
              model : "EXT.RXT 1000-1-27/S",
              img : "comercial/19-RXT-C.jpg",
              description : "EXT.RXT 1000-1-27/S"
            },
            {
              model : "EXT.RXT 1000-1 1/2-27/S",
              img : "comercial/19-RXT-C.jpg",
              description : "EXT.RXT 1000-1 1/2-27/S"
            },
            {
              model : "EXT.RXT 1000-3/4-27/S",
              img : "comercial/19-RXT-C.jpg",
              description : "EXT.RXT 1000-3/4-27/S"
            }
          ]
        }
      ]
    },
    {
      "category": "Axiales Directos",
      "products": [
        {
          "name": "HEP",
          "description": "Extractores desarrollados con base en normas internacionales para operar en ambientes de riesgo explosivo.\nMotor a prueba de explosión, 4 polos, trifásico 208-230/460, acoplado directamente a la hélice.\nEl conjunto embocadura-hélice-motor forma un sistema antichispa, con base en la publicación ANSI/AMCA Standard 99-0401.",
          "img": "comercial/19-HEP2018.jpg",
          "specs": "comercial/sp-hepcat11022020.pdf",
          "models": [
            {
              model : "HEP-400",
              img : "comercial/19-HEP2018.jpg",
              description : "HEP-400"
            },
            {
              model : "HEP-500",
              img : "comercial/19-HEP2018.jpg",
              description : "HEP-500"
            },
            {
              model : "HEP-6300",
              img : "comercial/19-HEP2018.jpg",
              description : "HEP-6300"
            }
          ]
        },
        {
          "name": "HXA/P",
          "description": "Diseño de álabes con perfil aerodinámico en el cual el flujo de aire se distribuye uniformemente en un área efectiva de trabajo mayor que los extractores convencionales, dando como resultado menor turbulencia y mayor eficiencia sobre los demás diseños de álabes.",
          "img": "comercial/19-HXA-P2018.jpg",
          "specs": "comercial/SP-HXAP.pdf",
          "models": [
            {
              model : "HXA-4-800L0",
              img : "comercial/19-HXA-P2018.jpg",
              description : "HXA-4-800L0"
            },
            {
              model : "HXA-4-800L",
              img : "comercial/19-HXA-P2018.jpg",
              description : "HXA-4-800L"
            },
            {
              model : "HXP-4-800L",
              img : "comercial/19-HXA-P2018.jpg",
              description : "HXP-4-800L"
            },
            {
              model : "HXA-6-800H",
              img : "comercial/19-HXA-P2018.jpg",
              description : "HXA-6-800H"
            },
            {
              model : "HXP-4-800L0",
              img : "comercial/19-HXA-P2018.jpg",
              description : "HXP-4-800L0"
            },
            {
              model : "HXP-6-800L",
              img : "comercial/19-HXA-P2018.jpg",
              description : "HXP-6-800L"
            }
          ]
        },
        {
          "name": "HXB-T",
          "description": "Gama de extractores axiales, diseñados en aplicación directa, destacando su alto rendimiento y bajo consumo de energía.\nDisponible en algunos modelos con motores monofásicos y trifásicos.",
          "img": "comercial/19-HXB-T2018.jpg",
          "specs": "comercial/SP-HXB-T.pdf",
          "models": [
            {
              model : "HXT-400H-1/4HP",
              img : "comercial/19-HXB-T2018.jpg",
              description : "HXT-400H-1/4HP"
            },
            {
              model : "HXB-400H-1/4HP",
              img : "comercial/19-HXB-T2018.jpg",
              description : "HXB-400H-1/4HP"
            },
            {
              model : "HXB-400L-1/8HP",
              img : "comercial/19-HXB-T2018.jpg",
              description : "HXB-400L-1/8HP"
            },
            {
              model : "HXT-500H-1/2HP",
              img : "comercial/19-HXB-T2018.jpg",
              description : "HXT-500H-1/2HP"
            },
            {
              model : "HXB-500H-1/2HP",
              img : "comercial/19-HXB-T2018.jpg",
              description : "HXB-500H-1/2HP"
            },
            {
              model : "HXT-500L-1/2HP",
              img : "comercial/19-HXB-T2018.jpg",
              description : "HXT-500L-1/2HP"
            }
          ]
        },
        {
          "name": "HXM",
          "description": "Extractores axiales para aplicación en muro.\nEntre sus características, se encuentran: motor monofásico fraccionario, hélices con alineación y balanceo preciso, marco protector fabricado en lámina de acero y alambre pulido, acabado de pintura en polvo poliéster.",
          "img": "comercial/COMAXDHXM.jpg",
          "specs": "comercial/SP-HXM.pdf",
          "models": []
        }
      ]
    },
    {
      "category": "Cajas de ventilación Axiales",
      "products": [
        {
          "name": "CGT",
          "description": "Las cajas de ventilación axiales CGT están fabricadas en lámina galvanizada y cuentan con aislamiento interior ignífugo de fibra\nde vidrio, que disminuye el ruido radiado por el ventilador. La hélice de estos ventiladores es tipo ?airfoil?, elaborada en aluminio.",
          "img": "comercial/19-CGT2018.jpg",
          "specs": "comercial/SP-CGT.pdf",
          "models": [
            {
              model : "CGT/4-800-3/2HP-U-230/460V-60HZ-3",
              img : "comercial/19-CGT2018.jpg",
              description : "CGT/4-800-3/2HP-U-230/460V-60HZ-3"
            },
            {
              model : "CGT/4-800-3/3HP-F-230/460V-60HZ-3",
              img : "comercial/19-CGT2018.jpg",
              description : "CGT/4-800-3/3HP-F-230/460V-60HZ-3"
            },
            {
              model : "CGT/6-800-6/1HP-F-230/460V-60HZ-3",
              img : "comercial/19-CGT2018.jpg",
              description : "CGT/6-800-6/1HP-F-230/460V-60HZ-3"
            },
            {
              model : "CGT/6-800-6/3HP-M-230/460V-60HZ-3",
              img : "comercial/19-CGT2018.jpg",
              description : "CGT/6-800-6/3HP-M-230/460V-60HZ-3"
            },
            {
              model : "CGT/4-800-3/1.5HP-A-230/460V-60HZ-3",
              img : "comercial/19-CGT2018.jpg",
              description : "CGT/4-800-3/1.5HP-A-230/460V-60HZ-3"
            },
            {
              model : "CGT/6-800-6/2HP-I-230/460V-60HZ-3",
              img : "comercial/19-CGT2018.jpg",
              description : "CGT/6-800-6/2HP-I-230/460V-60HZ-3"
            }
          ]
        }
      ]
    }
  ],
  industrial: [
    {
      category: "Unidades de Ventilación",
      products: [
        {
          name: "C/DAHF",
          description: "Cajas de Ventilación descarga horizontal con Louvers y Prefiltros.\n Ventilación de locales comerciales o industriales con condiciones de pre-filtración.\n Filtros metálicos de aluminio y/o plisados. Inyección de aire en industria alimenticia, farmacéutica, etc.",
          img: "industrial/19-CDAHF18.jpg",
          specs: "industrial/SP-CDAFH.pdf",
          models: [
            {
              model: "CDAFH-12/12",
              description: "CDAFH-12/12",
              img: "industrial/19-CDAHF18.jpg"
            },
            {
              model: "CDAFH-18/18",
              description: "CDAFH-18/18",
              img: "industrial/19-CDAHF18.jpg"
            },
            {
              model: "CDAFH-20/20",
              description: "CDAFH-20/20",
              img: "industrial/19-CDAHF18.jpg"
            },
            {
              model: "CDAFH-22/22",
              description: "CDAFH-22/22",
              img: "industrial/19-CDAHF18.jpg"
            },
            {
              model: "CDAFH-25/25",
              description: "CDAFH-25/25",
              img: "industrial/19-CDAHF18.jpg"
            },
            {
              model: "CDAFH-30/26",
              description: "CDAFH-30/26",
              img: "industrial/19-CDAHF18.jpg"
            },
            {
              model: "CDAFH-36/36",
              description: "CDAFH-36/36",
              img: "industrial/19-CDAHF18.jpg"
            },
            {
              model: "CDAFH-9/9",
              description: "CDAFH-9/9",
              img: "industrial/19-CDAHF18.jpg"
            }
          ]
        },
        {
          name: "C/DAVF",
          description: "Cajas de ventilación descarga vertical con Louvers y Prefiltros.\n Ventilación de locales comerciales o industriales con condiciones de pre-filtración.\n Filtros metálicos de aluminio y/o plisados. Inyección de aire en industria alimenticia, farmacéutica, etc.",
          img: "industrial/19-CDAVF18.jpg",
          specs: "industrial/SP-CDAFV.pdf",
          models: [
            {
              model: "CDAFV-12/12",
              description: "CDAFV-12/12",
              img: "industrial/19-CDAVF18.jpg"
            },
            {
              model: "CDAFV-18/18",
              description: "CDAFV-18/18",
              img: "industrial/19-CDAVF18.jpg"
            },
            {
              model: "CDAFV-20/20",
              description: "CDAFV-20/20",
              img: "industrial/19-CDAVF18.jpg"
            },
            {
              model: "CDAFV-22/22",
              description: "CDAFV-22/22",
              img: "industrial/19-CDAVF18.jpg"
            },
            {
              model: "CDAFV-25/25",
              description: "CDAFV-25/25",
              img: "industrial/19-CDAVF18.jpg"
            },
            {
              model: "CDAFV-30/26",
              description: "CDAFV-30/26",
              img: "industrial/19-CDAVF18.jpg"
            },
            {
              model: "CDAFV-36/36",
              description: "CDAFV-36/36",
              img: "industrial/19-CDAVF18.jpg"
            },
            {
              model: "CDAFV-9/9",
              description: "CDAFV-9/9",
              img: "industrial/19-CDAVF18.jpg"
            }
          ]
        },
        {
          name: "C/DA-H",
          description: "Cajas de Ventilación Descarga Horizontal.\nExtracción de aire o ventilación de locales comerciales, salas de juntas, centros comerciales, escuelas, etc. Inyección de aire para presurización de locales.",
          img: "industrial/INDUDVCDH.jpg",
          specs: "industrial/SP-CDA.pdf",
          models: []
        },
        {
          name: "C/DA-V",
          description: "Cajas de Ventilación Descarga Vertical.\n Extracción de aire o ventilación de locales comerciales, salas de juntas, centros comerciales, escuelas, etc. Inyección de aire para presurización de locales.",
          img: "industrial/19-CDAV18.jpg",
          specs: "industrial/SP-CDA.pdf",
          models: [
            {
              model: "CDAV-10/10",
              description: "CDAV-10/10",
              img: "industrial/19-CDAV18.jpg"
            },
            {
              model: "CDAV-12/12",
              description: "CDAV-12/12",
              img: "industrial/19-CDAV18.jpg"
            },
            {
              model: "CDAV-15/15",
              description: "CDAV-15/15",
              img: "industrial/19-CDAV18.jpg"
            },
            {
              model: "CDAV-18/18",
              description: "CDAV-18/18",
              img: "industrial/19-CDAV18.jpg"
            },
            {
              model: "CDAV-20/20",
              description: "CDAV-20/20",
              img: "industrial/19-CDAV18.jpg"
            },
            {
              model: "CDAV-22/22",
              description: "CDAV-22/22",
              img: "industrial/19-CDAV18.jpg"
            },
            {
              model: "CDAV-25/25",
              description: "CDAV-25/25",
              img: "industrial/19-CDAV18.jpg"
            },
            {
              model: "CDAV-30/28",
              description: "CDAV-30/28",
              img: "industrial/19-CDAV18.jpg"
            },
            {
              model: "CDAV-36/36",
              description: "CDAV-36/36",
              img: "industrial/19-CDAV18.jpg"
            },
            {
              model: "CDAV-7/7",
              description: "CDAV-7/7",
              img: "industrial/19-CDAV18.jpg"
            },
            {
              model: "CDAV-9/9",
              description: "CDAV-9/9",
              img: "industrial/19-CDAV18.jpg"
            }
          ]
        },
        {
          name: "DAL",
          description: "Esta serie ofrece una alternativa confiable para sistemas en los que es necesaria la disminución de temperautra por medio de un método sencillo y económico.",
          img: "industrial/INDUDVDAL.jpg",
          specs: "industrial/dal2702020.pdf",
          models: []
        },
      ]
    },
    {
      category: "Ventilador Axial con Domo para Techo",
      products: [
        {
          name: "DX-S",
          description: "Unidades de ventilación diseñadas para la extracción o inyección de aire limpio. Están perfiladas para instalaciones de tejado, fabricadas en lámina galvanizada, esto con la finalidad de prevenir la corrosión.\n Esta serie cuenta con 2 opciones de transmisión; directa y poleas-bandas.\n Hélice disponible en distintos materiales: aluminio, plástico reforzado con fibra de vidrio o acero al carbón.",
          img: "industrial/19-DX2018.jpg",
          specs: "industrial/SP-DX.pdf",
          models: [
            {
              model: "DX-800/L 1/2M",
              description: "DX-800/L 1/2M",
              img: "industrial/19-DX2018.jpg"
            },
            {
              model: "EXT.DX-800/L1 3/4M",
              description: "EXT.DX-800/L1 3/4M",
              img: "industrial/19-DX2018.jpg"
            },
            {
              model: "INY.DX-800/L1 3/4M",
              description: "INY.DX-800/L1 3/4M",
              img: "industrial/19-DX2018.jpg"
            },
            {
              model: "INY.DX-800/H 1T",
              description: "INY.DX-800/H 1T",
              img: "industrial/19-DX2018.jpg"
            },
            {
              model: "EXT.DX-800/H 1T",
              description: "EXT.DX-800/H 1T",
              img: "industrial/19-DX2018.jpg"
            },
            {
              model: "EXT.DX-800/L 1/2T",
              description: "EXT.DX-800/L 1/2T",
              img: "industrial/19-DX2018.jpg"
            },
            {
              model: "DX-800/H 1M",
              description: "DX-800/H 1M",
              img: "industrial/19-DX2018.jpg"
            },
            {
              model: "INY.DX-800/L 1/2M",
              description: "INY.DX-800/L 1/2M",
              img: "industrial/19-DX2018.jpg"
            },
            {
              model: "INY.DX-800/L 1/2T",
              description: "INY.DX-800/L 1/2T",
              img: "industrial/19-DX2018.jpg"
            },
            {
              model: "INY.DX-800/H 1M",
              description: "INY.DX-800/H 1M",
              img: "industrial/19-DX2018.jpg"
            },
            {
              model: "EXT.DX-1000/L1 1T",
              description: "EXT.DX-1000/L1 1T",
              img: "industrial/19-DX2018.jpg"
            },
            {
              model: "EXT.DX-1000/L 3/4T",
              description: "EXT.DX-1000/L 3/4T",
              img: "industrial/19-DX2018.jpg"
            }
          ]
        },
      ]
    },
    {
      category: "Ventiladores Axiales",
      products: [
        {
          name: "AVR",
          description: "Los ventiladores axiales de la línea AVR, se los fabrica en diferentes tamaños. Su hélice tiene álabes en perfil airfoil, con paso variable y fue proyectada para obtener un elevado rendimiento aliado a excelentes características de desempeño.\n En sistemas de ventilación, extracción, renovación, circulación forzada, calefacción, refrigeración, enfriamiento, humidificación o deshumidificación de aire. En sistemas de ventilación, extracción, renovación o circulación forzada, plataformas de perforación o extracción de petróleo, minas, túneles entre otras aplicaciones.",
          img: "industrial/INDAVR.jpg",
          specs: "indistrial/SP-AVR.pdf",
          models: []
        }
      ]
    },
    {
      category: "VENTILADORES CENTRIFUGOS TUBULARES",
      products: [
        {
          name: "TBN",
          description: "Un equipo tubular centrífugo construido con rodete de álabes curvos atrasados, con un nivel de alta eficiencia y un bajo nivel sonoro. Integrado por 12 tamaños nominales que van del 315 al 1120.\n Esta serie está disponible en acoplamiento directo y transmisión poleas-bandas",
          img: "industrial/INDTBNTD.jpg",
          specs: "indistrial/TBN.pdf",
          models: []
        }
      ]
    },
    {
      category: "Ventiladores de Alabes Curvos Adelantados",
      products: [
        {
          name: "TBN",
          description: "Manejo en sistemas de acondicionamiento de aire, ventilación comercial, sistemas de manejadoras, manejadoras de filtración, aire lavado, sistemas de ductos, aire limpio, aire acondicionado, calefacción, hotelería, hospitales, centros comerciales, edificios públicos, etc.",
          img: "industrial/INDTBNTD.jpg",
          specs: "indistrial/SP-DA-B-T.pdf",
          models: [
            {
              model: "19-DA-10/10",
              description: "19-DA-10/10",
              img: "industrial/INDTBNTD.jpg"
            },
            {
              model: "19-DA-12/12",
              description: "19-DA-12/12",
              img: "industrial/INDTBNTD.jpg"
            },
            {
              model: "19-DA-15/15",
              description: "19-DA-15/15",
              img: "industrial/INDTBNTD.jpg"
            },
            {
              model: "19-DA-18/18",
              description: "19-DA-18/18",
              img: "industrial/INDTBNTD.jpg"
            },
            {
              model: "19-DA-20/20",
              description: "19-DA-20/20",
              img: "industrial/INDTBNTD.jpg"
            },
            {
              model: "19-DA-22/22",
              description: "19-DA-22/22",
              img: "industrial/INDTBNTD.jpg"
            },
            {
              model: "19-DA-25/25",
              description: "19-DA-25/25",
              img: "industrial/INDTBNTD.jpg"
            },
            {
              model: "19-DA-30/28",
              description: "19-DA-30/28",
              img: "industrial/INDTBNTD.jpg"
            },
            {
              model: "19-DA-7/7",
              description: "19-DA-7/7",
              img: "industrial/INDTBNTD.jpg"
            },
            {
              model: "19-DA-9/9",
              description: "19-DA-9/9",
              img: "industrial/INDTBNTD.jpg"
            }
          ]
        },
        {
          name: "DAB",
          description: "Manejo en sistemas de acondicionamiento de aire, ventilación comercial, sistemas de manejadoras, manejadoras de filtración, aire lavado, sistemas de ductos, aire limpio, aire acondicionado, calefacción, hotelería, hospitales, centros comerciales, edificios públicos, etc.",
          img: "industrial/19-DAB2018.jpg",
          specs: "indistrial/SP-DA-B-T.pdf",
          models: [
            {
              model: "19-DAB-10/10",
              description: "19-DAB-10/10",
              img: "industrial/INDTBNTD.jpg"
            },
            {
              model: "19-DAB-12/12",
              description: "19-DAB-12/12",
              img: "industrial/INDTBNTD.jpg"
            },
            {
              model: "19-DAB-15/15",
              description: "19-DAB-15/15",
              img: "industrial/INDTBNTD.jpg"
            },
            {
              model: "19-DAB-18/18",
              description: "19-DAB-18/18",
              img: "industrial/INDTBNTD.jpg"
            },
            {
              model: "19-DAB-20/20",
              description: "19-DAB-20/20",
              img: "industrial/INDTBNTD.jpg"
            },
            {
              model: "19-DAB-22/22",
              description: "19-DAB-22/22",
              img: "industrial/INDTBNTD.jpg"
            },
            {
              model: "19-DAB-25/25",
              description: "19-DAB-25/25",
              img: "industrial/INDTBNTD.jpg"
            },
            {
              model: "19-DAB-30/28",
              description: "19-DAB-30/28",
              img: "industrial/INDTBNTD.jpg"
            },
            {
              model: "19-DAB-7/7",
              description: "19-DAB-7/7",
              img: "industrial/INDTBNTD.jpg"
            },
            {
              model: "19-DAB-9/9",
              description: "19-DAB-9/9",
              img: "industrial/INDTBNTD.jpg"
            }
          ]
        },
        {
          name: "DAT",
          description: "Diseño compacto para manejadoras de aire, procesos de filtración, ventilación general, etc.",
          img: "industrial/INDVACDAT.jpg",
          specs: "indistrial/SP-DA-B-T.pdf",
          models: []
        }
      ]
    },
    {
      category: "Ventiladores de Alabes Rectos",
      products: [
        {
          name: "CXW",
          description: "Disponibles en cinco capacidades de potencia y prestaciones de caudal dentro de una construcción robusta que le permite adaptarse a cualquier instalación o maquinaria de transporte neumático.\n Rodete de álabes rectos radiales.\n Motor de dos polos con brida en acoplamiento directo.\n Carcasa soldada con brida en descarga.",
          img: "industrial/19-CXW18.jpg",
          specs: "indistrial/CXW.pdf",
          models: [
            {
              model: "EXT. CXW-375 7.5HP 2P",
              description: "EXT. CXW-375 7.5HP 2P",
              img: "industrial/19-CXW18.jpg"
            },
            {
              model: "EXT. CXW-410 10HP 2P",
              description: "EXT. CXW-410 10HP 2P",
              img: "industrial/19-CXW18.jpg"
            },
            {
              model: "EXT. CXW-305 5HP 2P",
              description: "EXT. CXW-305 5HP 2P",
              img: "industrial/19-CXW18.jpg"
            },
            {
              model: "EXT. CXW-415 15HP 2P",
              description: "EXT. CXW-415 15HP 2P",
              img: "industrial/19-CXW18.jpg"
            },
            {
              model: "EXT. CXW-420 20HP 2P",
              description: "EXT. CXW-420 20HP 2P",
              img: "industrial/19-CXW18.jpg"
            }
          ]
        }
      ]
    }
  ],
  oem: [
    {
      category: "Ventiladores Centrífugos Tipo Pleno",
      products: [
        {
          name: "BNC R",
          description: "Esta serie ha sido diseñada para aplicaciones de cámara plena donde la turbina opera sin envolvente. Esto resulta en el ahorro de espacio. Diseñada para aplicaciones donde se requiera el manejo de aire limpio y caudal y presión regulares\n El diseño de la turbina de álabes curvos atrasados resulta en un nivel de alta eficiencia y excelentes prestaciones de caudal-presión con bajo nivel sonoro, solo con giro CW.\n Esta serie está disponible en transmisión directa, poleas y bandas y motor conmutado eletrónicamente, cuenta con clases I y II y 4 tipos de arreglos.",
          img: "oem/INDVCTBNC.jpg",
          specs: "oem/SP-BNC-RPQ-web03102019.pdf",
          models: []
        },
        {
          name: "BNC P",
          description: "Esta serie ha sido diseñada para aplicaciones de cámara plena donde la turbina opera sin envolvente. Esto resulta en el ahorro de espacio. Diseñada para aplicaciones donde se requiera el manejo de aire limpio y caudal y presión regulares\n El diseño de la turbina de álabes curvos atrasados resulta en un nivel de alta eficiencia y excelentes prestaciones de caudal-presión con bajo nivel sonoro, solo con giro CW.\n Esta serie está disponible en transmisión directa, poleas y bandas y motor conmutado eletrónicamente, cuenta con clases I y II y 4 tipos de arreglos.",
          img: "oem/INDVCTBNC.jpg",
          specs: "oem/SP-BNC-RPQ-web03102019.pdf",
          models: []
        },
        {
          name: "BNC Q",
          description: "Esta serie ha sido diseñada para aplicaciones de cámara plena donde la turbina opera sin envolvente. Esto resulta en el ahorro de espacio. Diseñada para aplicaciones donde se requiera el manejo de aire limpio y caudal y presión regulares\n El diseño de la turbina de álabes curvos atrasados resulta en un nivel de alta eficiencia y excelentes prestaciones de caudal-presión con bajo nivel sonoro, solo con giro CW.\n Esta serie está disponible en transmisión directa, poleas y bandas y motor conmutado eletrónicamente, cuenta con clases I y II y 4 tipos de arreglos.",
          img: "oem/INDVCTBNC.jpg",
          specs: "oem/SP-BNC-RPQ-web03102019.pdf",
          models: []
        }
      ]
    },
    {
      category: "Ventiladores Gama Vent-Set",
      products: [
        {
          name: "BDB",
          description: "Suministro de aire en unidades de ventilación para aire acondicionado ó filtración de aire, ventilación industrial, etc.",
          img: "oem/19-BDB2018.jpg",
          specs: "oem/SP-BDB.pdf",
          models: [
            {
              model: "BDB-I1000",
              description: "BDB-I1000",
              img: "oem/19-BDB2018.jpg"
            },
            {
              model: "BDB-I1120",
              description: "BDB-I1120",
              img: "oem/19-BDB2018.jpg"
            },
            {
              model: "BDB-I1250",
              description: "BDB-I1250",
              img: "oem/19-BDB2018.jpg"
            },
            {
              model: "BDB-I1400",
              description: "BDB-I1400",
              img: "oem/19-BDB2018.jpg"
            },
            {
              model: "BDB-I-280",
              description: "BDB-I-280",
              img: "oem/19-BDB2018.jpg"
            },
            {
              model: "BDB-I315",
              description: "BDB-I315",
              img: "oem/19-BDB2018.jpg"
            },
            {
              model: "BDB-I355",
              description: "BDB-I355",
              img: "oem/19-BDB2018.jpg"
            },
            {
              model: "BDB-I400",
              description: "BDB-I400",
              img: "oem/19-BDB2018.jpg"
            },
            {
              model: "BDB-I450",
              description: "BDB-I450",
              img: "oem/19-BDB2018.jpg"
            },
            {
              model: "BDB-I500",
              description: "BDB-I500",
              img: "oem/19-BDB2018.jpg"
            },
            {
              model: "BDB-I560",
              description: "BDB-I560",
              img: "oem/19-BDB2018.jpg"
            },
            {
              model: "BDB-I630",
              description: "BDB-I630",
              img: "oem/19-BDB2018.jpg"
            },
            {
              model: "BDB-I710",
              description: "BDB-I710",
              img: "oem/19-BDB2018.jpg"
            },
            {
              model: "BDB-I800",
              description: "BDB-I800",
              img: "oem/19-BDB2018.jpg"
            },
            {
              model: "BDB-I900",
              description: "BDB-I900",
              img: "oem/19-BDB2018.jpg"
            }
          ]
        },
        {
          name: "CMD",
          description: "Equipos robustos de álabes atrasados para aplicaciones totalmente industriales.\n Construido con materiales altamente resistentes, adecuados para cada tamaño y capacidad de funcionamiento.\n Carcasa y rodete reforzado en lámina negra y bastidor con canal estructural, acabado es con pintura poliéster de aplicación electrostática en polvo.\n Rotación:CW y CCW",
          img: "oem/19-CMD2018.jpg",
          specs: "oem/SP-CMD.pdf",
          models: [
            {
              model: "EXT.CMD-I1000",
              description: "EXT.CMD-I1000",
              img: "oem/19-CMD2018.jpg"
            },
            {
              model: "EXT.CMD-I1120",
              description: "EXT.CMD-I1120",
              img: "oem/19-CMD2018.jpg"
            },
            {
              model: "EXT.CMD-I1250",
              description: "EXT.CMD-I1250",
              img: "oem/19-CMD2018.jpg"
            },
            {
              model: "EXT.CMD-I1400",
              description: "EXT.CMD-I1400",
              img: "oem/19-CMD2018.jpg"
            },
            {
              model: "EXT.CMD-I-280",
              description: "EXT.CMD-I-280",
              img: "oem/19-CMD2018.jpg"
            },
            {
              model: "EXT.CMD-I315",
              description: "EXT.CMD-I315",
              img: "oem/19-CMD2018.jpg"
            },
            {
              model: "EXT.CMD-I355",
              description: "EXT.CMD-I355",
              img: "oem/19-CMD2018.jpg"
            },
            {
              model: "EXT.CMD-I400",
              description: "EXT.CMD-I400",
              img: "oem/19-CMD2018.jpg"
            },
            {
              model: "EXT.CMD-I450",
              description: "EXT.CMD-I450",
              img: "oem/19-CMD2018.jpg"
            },
            {
              model: "EXT.CMD-I500",
              description: "EXT.CMD-I500",
              img: "oem/19-CMD2018.jpg"
            },
            {
              model: "EXT.CMD-I560",
              description: "EXT.CMD-I560",
              img: "oem/19-CMD2018.jpg"
            },
            {
              model: "EXT.CMD-I630",
              description: "EXT.CMD-I630",
              img: "oem/19-CMD2018.jpg"
            },
            {
              model: "EXT.CMD-I710",
              description: "EXT.CMD-I710",
              img: "oem/19-CMD2018.jpg"
            },
            {
              model: "EXT.CMD-I800",
              description: "EXT.CMD-I800",
              img: "oem/19-CMD2018.jpg"
            },
            {
              model: "EXT.CMD-I900",
              description: "EXT.CMD-I900",
              img: "oem/19-CMD2018.jpg"
            }
          ]
        }
      ]
    },
    {
      category: "Ventiladores Tubulares",
      products: [
        {
          name: "VT",
          description: "Esta gama de ventiladores ha sido diseñada en tres tamaños, con hélice en 2 y 4 palas para ofrecer un amplio rango de caudal con máxima eficiencia en la aplicación de enfriamiento de transformadores eléctricos, prestando una óptima relación entre consumo de energía y prestaciones.\n La línea VT incorpora componentes excepcionales para un excelente desempeño bajo cualquier condición de operación. Esta línea está disponible en tres diámetros de hélices para mover diferentes caudales de descarga para satisfacer los requerimientos de la aplicación.",
          img: "oem/119-VT2018.jpg",
          specs: "oem/SP-VT.pdf",
          models: [
            {
              model: "EXT.VT-446 1/6TF 6P",
              description: "EXT.VT-446 1/6TF 6P",
              img: "oem/119-VT2018.jpg"
            },
            {
              model: "EXT.VT-644 1/2TF 4P",
              description: "EXT.VT-644 1/2TF 4P",
              img: "oem/119-VT2018.jpg"
            },
            {
              model: "EXT.VT-646 1/6TF 6P",
              description: "EXT.VT-646 1/6TF 6P",
              img: "oem/119-VT2018.jpg"
            },
            {
              model: "EXT.VT-724 1/2TF 4P",
              description: "EXT.VT-724 1/2TF 4P",
              img: "oem/119-VT2018.jpg"
            },
            {
              model: "EXT.VT-726 1/6TF 6P",
              description: "EXT.VT-726 1/6TF 6P",
              img: "oem/119-VT2018.jpg"
            },
            {
              model: "EXT.VT-746 1/3TF 6P",
              description: "EXT.VT-746 1/3TF 6P",
              img: "oem/119-VT2018.jpg"
            }
          ]
        }
      ]
    }
  ]
};
