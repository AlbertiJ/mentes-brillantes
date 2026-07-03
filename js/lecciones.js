// ============================================================
// CLAUDE PARA MENTES BRILLANTES
// 10 lecciones · Diseño para TDA · Online + Offline
// Autor: Alberti Juan | Licencia: MIT
// ============================================================

const LECCIONES = [

  {
    id: 'L1',
    num: 1,
    emoji: '👋',
    titulo: 'Hablá con la máquina',
    gancho: 'Le decís algo. Te responde. Así de fácil empieza todo.',
    color: '#6affcc',
    // Explicación en 3 líneas máximo (TDA)
    idea: 'Claude es como un amigo que sabe muchísimo. Vos le hablás normal, como a una persona. No hay forma equivocada de empezar.',
    // El prompt simple
    prompt: 'Explicame cómo funciona el WiFi como si tuviera 8 años, con un dibujo hecho de palabras.',
    // Qué va a pasar
    resultado: 'Claude te va a explicar algo difícil de forma súper simple. Probá cambiar "WiFi" por cualquier cosa que te dé curiosidad.',
    // La lógica online/offline
    conexion: {
      online: 'Le escribís y responde al toque.',
      offline: 'Guardás el prompt en la app. Cuando vuelva internet, lo usás.'
    },
    reto: 'Preguntale a Claude cómo funciona algo que siempre quisiste saber. Lo que sea.',
    palabra_clave: 'HABLAR'
  },

  {
    id: 'L2',
    num: 2,
    emoji: '📩',
    titulo: 'SMS: el mensaje que siempre llega',
    gancho: 'Un mensaje de texto no necesita internet. Solo necesita señal.',
    color: '#ffd86a',
    idea: 'El SMS es más viejo que internet y por eso es más fuerte. Cuando el WiFi se cae, el SMS sigue funcionando. Es como el superhéroe que aparece cuando todo falla.',
    prompt: 'Escribime un programa simple en Python que mande un SMS usando un módulo GSM SIM800L. Explicá cada línea como si fuera mi primera vez.',
    resultado: 'Claude te da el código para que un aparato chiquito mande mensajes solo, sin internet. El módulo GSM cuesta muy poco y usa una tarjeta SIM común.',
    conexion: {
      online: 'Claude te arma el código.',
      offline: 'El aparato con el código manda SMS con solo señal de celular. Cero internet.'
    },
    reto: 'Pedile a Claude que el mensaje diga "Estoy bien" y se mande apretando un botón.',
    palabra_clave: 'SMS'
  },

  {
    id: 'L3',
    num: 3,
    emoji: '🆘',
    titulo: 'SOS que viaja solo',
    gancho: 'Un botón. Lo apretás. Tu ubicación llega a quien te quiere.',
    color: '#ff6a9b',
    idea: 'Un SOS es un pedido de ayuda que se manda solo. No tenés que escribir nada, no tenés que explicar nada. Apretás y ya. Esto puede salvar a alguien de verdad.',
    prompt: 'Ayudame a diseñar un botón de SOS que mande mi ubicación por SMS a 3 personas cuando lo aprieto. Que funcione sin internet. Explicámelo paso a paso, simple.',
    resultado: 'Claude te ayuda a armar un sistema de emergencia real: apretás el botón y 3 personas reciben dónde estás. Funciona con señal de celular, sin WiFi.',
    conexion: {
      online: 'Si hay internet, además manda un mapa con el lugar exacto.',
      offline: 'Si no hay internet, manda las coordenadas por SMS igual. Siempre llega.'
    },
    reto: 'Diseñá con Claude quiénes serían tus 3 personas de confianza para el SOS.',
    palabra_clave: 'SOS'
  },

  {
    id: 'L4',
    num: 4,
    emoji: '📡',
    titulo: 'La señal invisible',
    gancho: 'Dos aparatos que se saludan sin cables y sin internet.',
    color: '#7c6aff',
    idea: 'La señalización es cuando dos aparatos se mandan mensajitos entre ellos. Como cuando vos y un amigo se hacen señas de lejos. No necesitan internet, solo saber el código secreto para entenderse.',
    prompt: 'Explicame qué es la señalización entre aparatos con un ejemplo de dos walkie-talkies. Después mostrame cómo dos módulos LoRa se mandan un mensaje a 5 kilómetros de distancia sin internet.',
    resultado: 'Claude te explica cómo los aparatos "hablan" entre ellos. LoRa es una tecnología que manda mensajitos muy lejos gastando poca batería. Perfecta para lugares sin señal.',
    conexion: {
      online: 'Claude te explica y te da el código.',
      offline: 'Los módulos LoRa se hablan entre ellos sin ninguna red. Solo ellos dos.'
    },
    reto: 'Preguntale a Claude cómo harías una cadena de aparatos que se pasan el mensaje de uno a otro.',
    palabra_clave: 'SEÑALIZAMIENTO'
  },

  {
    id: 'L5',
    num: 5,
    emoji: '🗃️',
    titulo: 'Tu base de datos que recuerda',
    gancho: 'Una caja mágica que guarda todo y te lo devuelve cuando preguntás.',
    color: '#6affcc',
    idea: 'Una base de datos es como una mochila con bolsillos ordenados. Guardás cosas y siempre sabés dónde están. Lo mejor: podés preguntarle cosas y te contesta con lo que guardaste.',
    prompt: 'Enseñame a crear una base de datos SQLite en mi computadora para guardar los nombres y cumpleaños de mi familia. Que funcione sin internet. Bien simple.',
    resultado: 'Claude te enseña a hacer tu propia base de datos que vive en tu computadora. SQLite es gratis, no necesita internet, y guarda todo lo que quieras.',
    conexion: {
      online: 'Claude te ayuda a armarla.',
      offline: 'La base vive en tu compu. Preguntás y responde sin internet, siempre.'
    },
    reto: 'Pedile a Claude que te ayude a preguntarle a tu base "¿quién cumple años este mes?".',
    palabra_clave: 'BASES DATOS'
  },

  {
    id: 'L6',
    num: 6,
    emoji: '🕵️',
    titulo: 'Red Team: sé el detective',
    gancho: 'Para proteger algo, primero pensá cómo se rompería.',
    color: '#ffd86a',
    idea: 'Un Red Team es un equipo de detectives buenos que buscan los errores antes que los malos. Piensan "¿cómo rompería yo esto?" para poder arreglarlo. Es como revisar que tu bici esté bien antes de una carrera.',
    prompt: 'Enseñame a pensar como un Red Team ético. Dame un juego donde vos escondés un error en una historia y yo tengo que encontrarlo, para entrenar mi mente de detective.',
    resultado: 'Claude te entrena para encontrar errores y debilidades. Esto se usa para PROTEGER, nunca para dañar. Los mejores del mundo piensan así para cuidar a los demás.',
    conexion: {
      online: 'Claude te da acertijos nuevos cada vez.',
      offline: 'Guardás los acertijos y jugás cuando quieras, sin internet.'
    },
    reto: 'Pedile a Claude un caso de detective donde tengas que encontrar el punto débil de un plan.',
    palabra_clave: 'EQUIPO REDTEAM'
  },

  {
    id: 'L7',
    num: 7,
    emoji: '🧩',
    titulo: 'Programá sin saber programar',
    gancho: 'Describís lo que querés. Claude lo convierte en código real.',
    color: '#ff6a9b',
    idea: 'No necesitás saber los códigos raros. Vos le contás a Claude qué querés que haga la computadora, con tus palabras. Él lo traduce al idioma de las máquinas. Vos sos el jefe que da las ideas.',
    prompt: 'Quiero un programa que dibuje estrellas de colores en la pantalla cuando aprieto una tecla. No sé programar. Dame el código completo y decime exactamente dónde pegarlo.',
    resultado: 'Claude te da un programa que funciona, aunque nunca hayas programado. Vos tenés la idea, él escribe el código. Después lo cambiás y lo hacés tuyo.',
    conexion: {
      online: 'Claude escribe el código nuevo.',
      offline: 'El código que ya tenés corre en tu compu sin internet, para siempre.'
    },
    reto: 'Inventá un programa loco y pedíselo a Claude. No existe el imposible.',
    palabra_clave: 'PROGRAMACION'
  },

  {
    id: 'L8',
    num: 8,
    emoji: '📻',
    titulo: 'Radio: hablar sin internet',
    gancho: 'Tu voz viajando por el aire, sin cables, sin WiFi, sin nada.',
    color: '#7c6aff',
    idea: 'La radio manda sonido por el aire usando ondas invisibles. No necesita internet ni teléfono. Por eso, cuando pasa algo grave y todo se cae, la radio sigue hablando. Es magia real.',
    prompt: 'Explicame cómo funciona la radio FM con palabras simples. Después contame cómo una Raspberry Pi puede transmitir mi voz por FM para que se escuche en una radio común cerca.',
    resultado: 'Claude te explica cómo transmitir por radio con una Raspberry Pi chiquita. Tu voz o un mensaje llega a cualquier radio FM cerca, sin internet.',
    conexion: {
      online: 'Claude te explica cómo armarlo.',
      offline: 'La radio transmite sola, sin internet. Solo ondas por el aire.'
    },
    reto: 'Preguntale a Claude cómo convertir un mensaje de texto en voz para transmitir por la radio.',
    palabra_clave: 'TELECOMUNICACIONES'
  },

  {
    id: 'L9',
    num: 9,
    emoji: '🌉',
    titulo: 'El puente automático',
    gancho: 'El sistema se da cuenta solo si hay internet, y se adapta.',
    color: '#6affcc',
    idea: 'Este es el truco más inteligente. El programa pregunta "¿hay internet?". Si hay, usa internet. Si no hay, usa radio o SMS. Cambia solo, sin que vos hagas nada. Como un auto que anda en la calle o en el barro.',
    prompt: 'Enseñame a hacer un programa con un "if" simple: SI hay internet, que mande el mensaje por WiFi. SI NO hay internet, que lo mande por SMS. Explicame el if como si fuera una decisión de la vida real.',
    resultado: 'Claude te enseña la lógica del "si pasa esto, hacé esto otro". Tu sistema detecta la conexión y elige el mejor camino solo. Nunca queda sin funcionar.',
    conexion: {
      online: 'El sistema usa internet cuando lo detecta.',
      offline: 'El mismo sistema salta a SMS o radio cuando internet no está. Automático.'
    },
    reto: 'Pedile a Claude que agregue un tercer camino: "si no hay internet NI señal, guardá el mensaje para después".',
    palabra_clave: 'S7'
  },

  {
    id: 'L10',
    num: 10,
    emoji: '🚀',
    titulo: 'Dejalo funcionando',
    gancho: 'Juntás todo lo que aprendiste en un sistema que queda vivo.',
    color: '#c46aff',
    idea: 'Ahora sos constructor. Vas a juntar las piezas: el SOS, el SMS, la radio, el puente automático. Todo en un sistema que funciona aunque vos no estés. Eso es dejar algo operativo: sigue ayudando cuando te vas a dormir.',
    prompt: 'Ayudame a juntar todo en un sistema de emergencia para mi casa o mi barrio: un botón de SOS que mande SMS si no hay internet, y avise por WiFi si hay. Dame el plan completo, paso a paso, para alguien que recién empieza.',
    resultado: 'Claude te ayuda a construir tu primer sistema real y completo. Uno que detecta la conexión, elige el mejor camino, y queda funcionando para cuidar a los que querés.',
    conexion: {
      online: 'El sistema usa internet para mapas y avisos ricos.',
      offline: 'Sin internet, sigue mandando SMS y usando radio. Nunca se apaga.'
    },
    reto: 'Diseñá con Claude tu propio sistema. Puede ser para tu casa, tu escuela o tu barrio. Vos elegís qué proteger.',
    palabra_clave: 'HABLAR + SOS + SMS'
  }

];

if (typeof module !== 'undefined') module.exports = LECCIONES;
