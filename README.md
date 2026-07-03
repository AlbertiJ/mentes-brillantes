# 🧠 Claude para Mentes Brillantes

**Repo Bonus del proyecto Claude Academia**
Autor: **Alberti Juan** · Licencia: MIT · Libre uso recreativo y educativo

> *"No existe el imposible. Todo es simple si se sabe explicar bien."*

---

## 💡 La idea del proyecto

Hay una creencia silenciosa que frena a mucha gente: pensar que las cosas grandiosas solo se construyen en las universidades, en los laboratorios, con títulos y con permisos.

Es mentira.

Las herramientas para construir cosas increíbles —telecomunicaciones, programación, sistemas de emergencia, redes que funcionan sin internet— **están al alcance de todos**. Son libres, son gratis, y están a un clic de distancia.

Lo único que casi siempre falta es **una persona adecuada que te enseñe.** Alguien que agarre algo que parece imposible y te lo explique tan simple que te dan ganas de probarlo ahora mismo.

Este proyecto es esa persona.

Elegimos un rango de **6 a 15 años**, pero no para limitar a nadie. Lo elegimos porque a esa edad la imaginación todavía no aprendió a decir "eso no se puede". Es la edad de las ideas grandes, de los planes locos, de creer que uno puede construir un sistema que mande un SOS solo o hablar por radio sin internet.

Spoiler: **se puede.** Y esta app te muestra cómo, un poder por vez.

Está diseñada especialmente para **mentes con TDA** —que se distraen fácil, que saltan de idea en idea, que necesitan que les expliquen distinto— porque una mente que se distrae no es una mente que no puede. Es una mente creativa esperando el formato correcto.

---

## 🎯 Qué vas a aprender

10 "poderes", cada uno con un prompt simple que hace algo real:

| # | Poder | Qué construís |
|---|-------|---------------|
| 01 | 👋 Hablá con la máquina | Tu primera conversación con Claude |
| 02 | 📩 SMS que siempre llega | Un mensaje que viaja sin internet |
| 03 | 🆘 SOS que viaja solo | Un botón de emergencia real |
| 04 | 📡 La señal invisible | Aparatos que se hablan sin cables |
| 05 | 🗃️ Base de datos que recuerda | Una memoria que responde preguntas |
| 06 | 🕵️ Red Team: sé el detective | Pensar como quien protege sistemas |
| 07 | 🧩 Programá sin saber programar | Código real desde tus palabras |
| 08 | 📻 Radio sin internet | Tu voz por el aire, sin WiFi |
| 09 | 🌉 El puente automático | El sistema que se adapta solo |
| 10 | 🚀 Dejalo funcionando | Tu primer sistema completo y vivo |

Todo con herramientas **100% open source**: SQLite, Python, LoRa, módulos GSM, Raspberry Pi. Nada privado, nada de pago.

---

## 🌉 Funciona con y sin internet

La app detecta sola si hay conexión y se adapta:

- **Con internet** → Claude en tiempo real, mapas, datos completos
- **Sin internet** → todo guardado, los prompts listos, el código corre local, SMS y radio funcionando

La Lección 9 enseña exactamente esa lógica. La app misma es el ejemplo vivo de lo que enseña.

---

## 🧩 Diseñado para mentes creativas (y para TDA)

- Un solo foco por pantalla — nada de muros de texto
- Botones grandes, colores claros, tipografía redonda y amable
- Cada lección: 1 idea + 1 prompt + 1 resultado en menos de 10 minutos
- Recompensa visible: cada lección desbloquea un "poder"
- Explicaciones de 3 líneas máximo

---

## 🚀 Cómo empezar

```bash
git clone https://github.com/AlbertiJ/mentes-brillantes
cd mentes-brillantes
python3 -m http.server 8000
# Abrí http://localhost:8000
```

**En el celular:** abrí la URL → menú → "Añadir a pantalla de inicio". Instalada, funciona sin internet.

---

## 🗺️ Roadmap

Lo que ya está y lo que viene:

### ✅ Versión 1.0 — Los 10 poderes (actual)
- [x] 10 lecciones completas con prompts simples
- [x] Diseño para TDA (un foco por pantalla, botones grandes)
- [x] Detección automática online/offline
- [x] PWA instalable en celular
- [x] Funcionamiento 100% offline
- [x] Seguimiento de progreso (poderes desbloqueados)

### 🔜 Versión 1.5 — Más manos a la obra
- [ ] Modo "constructor": guías paso a paso con fotos del hardware
- [ ] Lista de compras de componentes con precios reales por país
- [ ] Videos cortos (30 seg) por lección para quien aprende mirando
- [ ] Modo lectura en voz alta para quien aprende escuchando

### 🔮 Versión 2.0 — La comunidad
- [ ] Galería de proyectos: chicos muestran lo que construyeron
- [ ] Retos semanales con temas nuevos
- [ ] Modo "mentor": un adulto acompaña el progreso de un chico
- [ ] Traducción a lenguas originarias (guaraní, quechua, mapuche)

### 🌟 Versión 3.0 — El salto
- [ ] Kit físico opcional (los componentes en una cajita lista)
- [ ] Certificado de "Constructor de Mentes Brillantes"
- [ ] Conexión con proyectos reales de la comunidad
- [ ] Segundo set de 10 poderes (nivel 2)

*El roadmap es abierto. Si tenés una idea, es bienvenida.*

---

## 🤝 Contribuir

Este proyecto es libre. Si querés sumar una lección, mejorar una explicación o traducir:

1. Fork del repo
2. Agregá o mejorá en `js/lecciones.js`
3. Pull Request contando qué enseña y por qué

Regla de oro para nuevas lecciones: **si no lo entiende alguien de 8 años, hay que explicarlo mejor.**

---

## 📜 Licencia

MIT — Libre uso, modificación y distribución.
Se agradece mencionar a **Alberti Juan** como autor original.

---

**Creado por Alberti Juan**
Parte del proyecto Claude Academia · Libre uso recreativo y educativo

*"Las herramientas están al alcance de todos. Solo falta encontrar a la persona adecuada para que te enseñe."*
