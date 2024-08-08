# Vue ReadCycle

En este repositorio tenemos el proyecto ReadCycle. Se trata de una aplicación de intercambio de libros de segunda mano

## Objectius

- Fer servir components de Vue per construir un portfolio web.
- Passar _props_ als components fills (child components) i provocar canvis retroactius als
  components pares.
- Fer servir l'_state_ per respondre als canvis.

## Configuració

- Executa `npm install` per instal·lar els paquets (packages).
- Executa `npm run dev` per executar el servidor de desenvolupament.

## Requisits bàsics

### 1. Afegeix dues vistes - una per l'usuari i una altra per l'admin

- Afegeix la funcionalitat.
  - Quan fem click sobre "Admin" hauria de mostrar la vista admin i quan fem click a "User" hauria de mostrar la vista user.
- Afegeix els estils.
  - Gràcies als estils, hauria de quedar clar a quina pàgina ens trobem.

### 2. _Vista Admin_ - crea un formulari que afegeixi imatges a la pàgina.

![Admin View](support/admin_view.png)

- Afegeix la funcionalitat.
  - Aquest formulari hauria d'acceptar una URL, una descripció i un títol.
  - El formulari hauria de tenir un botó de "submit".
  - Després de fer click al botó, la nova imatge hauria d'aparèixer a la vista d'usuari.
- Afegeix els estils.
  - Tot hauria d'estar centrat. Mira la imatge adjunta.

### 3. _Visita User_ - mostra les imatges de tots els projectes i actualitza el projecte destacat quan es faci click a sobre.

![User View](support/user_view.png)

- Afegeix la funcionalitat.
  - Afegeix tres projectes per defecte.
  - Afegeix un _event listener_ a cada element _imatge_ de la teva pàgina. Quan cliquem sobre la imatge s'hauria de reemplaçar el projecte destacat de la part superior de la pàgina.
  - Quan fem click sobre altres imatges s'hauria de reemplaçar el projecte destacat pel projecte que hem clicat.
  - El projecte destacat hauria de contenir la imatge, el títol i la descripció.
  - Fes servir el primer projecte com a projecte destacat per defecte.
- Afegeix els estils.
  - Totes les imatges haurien de ser de la mateixa amplada, amb padding entremig.
  - Les imatges hauria de situar-se en forma de _grid_ per què hi apareguin 4 horitzontalment quan la finestra del navegador té la mida màxima, però hauria de ser _responsive_ - així que hauria de mostrar-ne menys a mesura que la finestra es fa petita.
  - En el projecte destacat, la imatge hauria d'estar a l'esquerra i el títol i la descripció a la dreta.

### 4. Millora els estils

- Juga un mica amb els estils per què tingui un aspecte professional!

## Recursos

- [Vue docs - single file components](https://vuejs.org/guide/scaling-up/sfc.html)
- [Vue docs - components](https://vuejs.org/guide/essentials/component-basics.html)

## Notes

_Aquest és un projecte d'estudiant creat a [CodeOp](http://CodeOp.tech), al bootcamp de Front End Development a Barcelona._
