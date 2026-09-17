# DOSSIER EXPERTO — Clérigo (Cleric) sanador mítico de nivel 11, Pathfinder 1.ª edición

**Versión:** 2026-09-16 · **Sistema:** Pathfinder Roleplaying Game, primera edición (Paizo, 2009-2019) · **Fuente de verdad:** Archives of Nethys, sección PF1e (`https://www.aonprd.com/`, sin el prefijo `2e.`).
**Base documental:** 12 frentes de investigación auditados (archivos `01-…` a `12-…` en `C:/Users/renzo/Desktop/DAKODEV/Clerigo/investigacion/`), cada uno con su informe `-VERIFICACION.md`. Cuando el auditor corrigió algo, este dossier usa la versión corregida.

**Convenciones:**
- **[AoN]** + URL + libro = regla oficial verificada en aonprd.com (el libro y la página son los que AoN indica).
- **[COMUNIDAD]** = opinión de una guía o hilo; no es regla.
- **⚠️** = no verificable en AoN (sin FAQ, texto ambiguo, decisión de mesa) o dato con confianza parcial.
- **🚫** = NO OFICIAL: material de terceros (3PP), Pathfinder 2e, videojuegos de Owlcat, D&D 3.5 o inexistente. No usar.
- **➡️ Para NUESTRA build** = recuadro que aplica los parámetros confirmados por el jugador el 15/09/2026: compra por puntos 25, nivel 11, tier mítico 3 (Hierophant), raza y deidad libres (cualquier opción oficial de Paizo), grupo de 2 tanques + 2 DPS cuerpo a cuerpo + 1 apoyo táctico/social sin daño, el clérigo es el ÚNICO sanador, combates muy difíciles, NADA de trampas/exploración de trampas, Background Skills (Unchained) SÍ, un drawback (3 rasgos), Hero Points (APG) activos (no Antihero), Sacred Geometry baneada, WBL 82.000 po, sin 3PP, rasgos de campaña solo con permiso del GM.
- Nombres de reglas, dotes, conjuros, dominios, sendas y objetos en inglés tal como figuran en AoN; traducción entre paréntesis la primera vez.
- Abreviaturas de libros (las que usa AoN): CRB = PRPG Core Rulebook; APG = Advanced Player's Guide; UM = Ultimate Magic; UC = Ultimate Combat; ACG = Advanced Class Guide; UE = Ultimate Equipment; UCam = Ultimate Campaign; ARG = Advanced Race Guide; MA = Mythic Adventures; ISG = Inner Sea Gods; ISWG = Inner Sea World Guide; Unchained = Pathfinder Unchained; DA = Divine Anthology; HH = Healer's Handbook.

---

## ÍNDICE

0. Cómo usar este dossier + las 10 reglas de oro contra la desinformación en PF1e
1. La clase Cleric a nivel 11 (tabla, channel, dominios, conjuros, spontaneous casting, orisons, alineamiento, WBL, compra por puntos)
2. Matemática de la curación a nivel 11 (tabla de curación por acción, con todas las variantes y las cuentas)
3. Dominios y subdominios (ranking, poderes a nivel 11, conjuros de dominio, regla de subdominios)
4. Arquetipos (ranking, qué reemplazan, comparativa)
5. Dotes y rasgos (imprescindibles / muy buenas / situacionales / trampas / que no existen; secuencias)
6. Conjuros clave 0-6 (curación, condiciones, buffs, control, utilidad, divinación, viaje; qué preparar; qué NO tiene el clérigo)
7. Reglas míticas (tabla 1-10, base abilities, Hierophant completo, universales, dotes y conjuros míticos, ritmo, mejores elecciones)
8. Qué hacer cuando no hay nada que curar (cinco roles, economía de acciones, cuadro comparativo)
9. Equipo con WBL 82.000 po (núcleo / recomendado / lujo; reglas de varitas, pergaminos, varas, crafting, ranuras; Headband vs Phylactery)
10. Razas, deidades, alineamiento y atributos (compra 25 con el +2 de tier 2)
11. Reglas opcionales de la mesa: Hero Points, drawback + tercer rasgo, Background Skills
12. Kit de supervivencia y emergencias (morir con Hard to Kill, lanzar amenazado, aflicciones que Heal no cura, recarga mítica, bloque defensivo)
13. Consenso de la comunidad (guías citadas) y mitos desmentidos
14. Preguntas abiertas para el jugador y el GM
15. Índice de fuentes

---

## 0. CÓMO USAR ESTE DOSSIER + LAS 10 REGLAS DE ORO CONTRA LA DESINFORMACIÓN

### 0.1 Cómo usarlo

Este documento es a la vez **referencia general** (sirve para cualquier clérigo sanador de PF1e) y **hoja de ruta de nuestra build**. Cada sección tiene dos capas:

1. La capa general, con la regla, el número a nivel 11, la URL de AoN y el libro. Si mañana cambian la deidad o el arquetipo, esta capa sigue valiendo.
2. El recuadro **➡️ Para NUESTRA build**, que aplica los parámetros confirmados y descarta lo que ya no aplica (por ejemplo, todo lo relacionado con trampas y exploración de trampas queda descartado por decisión del jugador).

La **build de referencia** que se usa en todos los recuadros (justificada en las secciones 3, 5, 7, 9 y 10) es:

> **"Sanadora de Sarenrae"** — Aasimar (ARG; rasgo alternativo Scion of Humanity opcional), Cleric 11 de Sarenrae (NG), alineamiento NG, dominios **Healing + Glory (subdominio Heroism)** [alternativa: Healing + Good (subdominio Agathion)], Hierophant tier 3 con **Inspired Spell**, Faith's Reach, Relentless Healing y Abundant Healing (+ Mythic Domain vía Extra Path Ability); dotes Selective Channeling, Extra Channel, Quick Channel, Reactive Healing, Toughness, Divine Interference; dotes míticas Mythic Spell Lore y Extra Path Ability (alternativa: Mythic Selective Channeling); rasgos Reactionary + Envoy of Healing + Focused Mind con drawback Scarred; atributos finales Str 10 / Dex 14 / Con 16 / Int 10 / Wis 27 / Cha 14 (Headband of Inspired Wisdom +4; decisión de la sección 9).
>
> Los números que se repiten en todo el dossier salen de ahí: **CL 11; Wis 27 (+8); Cha 14 (+2); Con 16 (+3); channel 6d6 (8d6 con Phylactery of Positive Channeling añadida a la diadema, si el GM lo permite), 5 usos (7 con Extra Channel), DC 17; conjuros por día 4 / 7 / 7 / 7 / 6 / 4 / 3 (niveles 0-6); DC de conjuros 10 + nivel + 8 (6.º → 24); pg ≈ 109 (120 con Toughness); CA 24 (26 con Magic Vestment ×2, 28 con Shield of Faith); Fort +13 / Ref +8 / Will +18; iniciativa +7; concentración +19 (+21 con Focused Mind); poder mítico 9/día; Surge 1d6.**

Cuando el jugador quiera cambiar una pieza (otra deidad, otro segundo dominio, humano en vez de aasimar), la sección correspondiente tiene la alternativa ya calculada.

### 0.2 Las 10 reglas de oro contra la desinformación en PF1e

1. **Solo cuenta lo que está en `aonprd.com` (PF1e).** Archives of Nethys es el archivo oficial licenciado por Paizo para la primera edición. Si una regla no aparece ahí, no es oficial hasta que se demuestre lo contrario. `2e.aonprd.com` es **otro juego** (Pathfinder 2e): mismos nombres, reglas distintas (por ejemplo, ahí existe un objeto "Elixir of Life" y un "Healer's Gloves" con otro efecto; en PF1e no). 🚫
2. **Cada entrada de AoN dice el libro fuente ("Source …").** Anotarlo siempre: el GM puede permitir solo hardcovers (CRB, APG, UM, UC, ACG, UE, UCam, ARG, MA, Unchained) y vetar Player Companions (Healer's Handbook, Champions of Purity, Blood of Angels, Divine Anthology…) o Campaign Setting (ISWG, ISG, Planar Adventures). En este dossier cada regla lleva su libro.
3. **`d20pfsrd.com` mezcla material de terceros (3PP) y renombra deidades** (Sarenrae aparece con otro nombre, "Devout Pilgrim" es el Varisian Pilgrim renombrado, hay un "Vermin domain" que no existe en Paizo). Solo sirve como pista; se confirma siempre en AoN. 🚫 si no está en AoN.
4. **Las reglas de D&D 3.5 no son las de PF1e.** Ejemplos que circulan: armadura pesada del clérigo (falso), Divine Power = BAB de guerrero (falso), muerte a −10 pg (falso: −Con), estabilización al 10 % (falso: prueba de Con), Dispel Magic con tope +10 (falso: sin tope), Neutralize Poison da inmunidad (falso), licantropía con remove curse (falso). Sección 13.
5. **Los videojuegos de Owlcat (Kingmaker, Wrath of the Righteous) usan reglas modificadas.** Sus wikis muestran arquetipos, precios y dotes distintos (ej. "Rod of Reach 1.500 gp", Ecclesitheurge alterado). 🚫
6. **Las FAQ oficiales de Paizo son reglas.** Están indexadas en `https://www.aonprd.com/FAQs.aspx` y en `https://paizo.com/paizo/faq/v5748nruor1fm` (Core Rulebook). Las que más afectan a un sanador: Selective Channeling exige VER O TOCAR al excluido (jul-2011); Extra Channel da exactamente 2 usos (2011); Empower aplica al bono por nivel de los cure (2011); Positive/Negative Energy no afectan constructos (jul-2016); "Items as Spells": usar varita/pergamino no es "lanzar un conjuro" (2010); Channeled Revival usa el alcance del channel (2013, ⚠️ ver sección 5); ataque de toque a distancia amenazado provoca dos AdO (2012); Inspired Spell/Wild Arcana errata (2013); drenaje de energía no es efecto de muerte (2013).
7. **Las erratas cambian textos impresos.** Divine Protection (ACG) pasó de "Cha a todas las salvaciones" a 1/día en la 2.ª impresión (2015); Inspired Spell fue reescrita por FAQ. AoN muestra siempre el texto vigente: no usar PDFs viejos ni resúmenes.
8. **Los hilos de foro no son reglas, ni siquiera los de paizo.com.** Solo cuentan las respuestas marcadas como FAQ o las decisiones de campaña de PFS (que son de PFS, no del Core). Cuando en este dossier una lectura depende de un hilo, va con ⚠️.
9. **"Existe" no significa "sirve".** Muchas guías recomiendan dotes que existen pero no hacen lo que dicen (Quick Channel es acción de MOVIMIENTO, no rápida; Fate's Favored no mejora Bit of Luck; Healer's Blessing no empodera Heal ni Breath of Life). Y otras directamente no existen (Blessed Hands, Deity's Favor, Selective Channel, Mythic Empower Spell, Mythic Extra Channel).
10. **Verificar en AoN es fácil:** patrón `https://www.aonprd.com/FeatDisplay.aspx?ItemName=<Nombre>`, `SpellDisplay.aspx?ItemName=<Nombre>` (Summon Monster con número arábigo: `Summon%20Monster%206`), `DomainDisplay.aspx?ItemName=<Dominio>`, `ArchetypeDisplay.aspx?FixedName=Cleric%20<Nombre>`, `DeityDisplay.aspx?ItemName=<Deidad>`, `RacesDisplay.aspx?ItemName=<Raza>`, `TraitDisplay.aspx?ItemName=<Rasgo>`, `MythicPaths.aspx?Path=Hierophant`, `PathAbilities.aspx?Path=Hierophant`. Si la URL devuelve una página vacía o el índice general, el objeto no existe con ese nombre.

---

## 1. LA CLASE CLERIC A NIVEL 11

### 1.1 Identidad, dado de golpe, habilidades, competencias

- Fuente de todo el apartado salvo indicación: **[AoN] https://www.aonprd.com/ClassDisplay.aspx?ItemName=Cleric — CRB pg. 38.**
- **Dado de golpe d8.** Riqueza inicial 4d6 × 10 po (irrelevante: se crea a nivel 11).
- **Rangos de habilidad: 2 + Int por nivel.** Habilidades de clase: Appraise, Craft, Diplomacy, Heal, Knowledge (arcana, history, nobility, planes, religion), Linguistics, Profession, Sense Motive, Spellcraft. **Perception NO es de clase** (tampoco Stealth, Disable Device ni Use Magic Device).
- **Competencias:** "all simple weapons, light armor, medium armor, and shields (except tower shields)" más el **arma predilecta de la deidad**. **No armadura pesada** (diferencia con D&D 3.5). FAQ (jul-2011, https://paizo.com/paizo/faq/v5748nruor1fm): si el arma predilecta es exótica (bastard sword), se obtiene la competencia exótica.
- **Sin fallo de conjuro por armadura:** el fallo arcano aplica a "arcane spellcasters" ([AoN] https://www.aonprd.com/Rules.aspx?ID=361 — CRB pg. 149; https://www.aonprd.com/Rules.aspx?Name=Arcane+Spells&Category=Magic+Basics — CRB pg. 83). El clérigo lanza conjuros divinos: usa armadura media sin penalización a los conjuros. Sí aplica la penalización por armadura a las habilidades y el tope de Dex.
- **Aura (Ex):** clérigo de deidad C/E/G/L tiene aura del alineamiento de la deidad; a nivel 11+ es "overwhelming" en la tabla de *detect evil* ([AoN] https://www.aonprd.com/SpellDisplay.aspx?ItemName=Detect%20Evil — CRB pg. 266). El aura importa para la dote Sacred Summons (sección 8).
- **Alineamiento:** "within one step of her deity's, along either the law/chaos axis or the good/evil axis". Deidad NG (Sarenrae) → clérigos LG, NG, CG o N.
- **Ex-clérigos:** violar gravemente el código → pierde conjuros y rasgos (salvo competencias) hasta *atonement*.

### 1.2 Tabla de progresión (niveles 10-12)

| Nivel | BAB | Fort | Ref | Will | Especial | 0 | 1.º | 2.º | 3.º | 4.º | 5.º | 6.º |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 10 | +7/+2 | +7 | +3 | +7 | — | 4 | 4+1 | 4+1 | 3+1 | 3+1 | 2+1 | — |
| **11** | **+8/+3** | **+7** | **+3** | **+7** | **Channel energy 6d6** | **4** | **4+1** | **4+1** | **4+1** | **3+1** | **2+1** | **1+1** |
| 12 | +9/+4 | +8 | +4 | +8 | — | 4 | 4+1 | 4+1 | 4+1 | 3+1 | 3+1 | 2+1 |

[AoN] https://www.aonprd.com/ClassDisplay.aspx?ItemName=Cleric — CRB pg. 38. El "+1" es la **ranura de dominio**, no el bono por Sabiduría. **Corrección del auditor (frente 10):** los conjuros de 4.º a nivel 11 son **3+1**, no 4+1 (varias notas de investigación lo inflaban).

**Qué se gana exactamente a nivel 11:** channel 6d6; **acceso al 6.º nivel de conjuros** (1 base + 1 de dominio + 1 extra con Wis 22+); BAB +8/+3 (segundo ataque iterativo); **6.ª dote** (dotes en 1, 3, 5, 7, 9, 11 — [AoN] https://www.aonprd.com/Rules.aspx?Name=Character%20Advancement&Category=Getting%20Started — CRB pg. 30); aura overwhelming. Las mejoras de característica +1 se recibieron a nivel 4 y 8 (la 3.ª llega a 12). XP para nivel 11: 155.000 (medium); para 12: 220.000.

### 1.3 Puntos de golpe

- Máximos a nivel 1 ("A creature gains maximum hit points if its first Hit Die roll is for a character class level" — [AoN] https://www.aonprd.com/Rules.aspx?Name=Common%20Terms&Category=Getting%20Started — CRB pg. 11). Redondeo siempre hacia abajo (misma página).
- **Cuenta:** 8 + 10 × 4,5 = **53** de base. + 11 × mod Con: Con 14 → 75; Con 16 → 86; Con 18 → 97.
- Clase predilecta: +1 pg o +1 rango por nivel, incluido el 1.º ([AoN] https://aonprd.com/Rules.aspx?ID=344 — CRB pg. 31) → +11.
- Toughness: +3 y +1 por cada DG más allá del 3.º → **+11** a nivel 11 ([AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Toughness — CRB pg. 135); Mythic Toughness lo duplica (+22) y da RD 10/epic bajo 0 pg (MA pg. 75).
- Hierophant: **+4 pg por tier** ([AoN] https://www.aonprd.com/MythicPaths.aspx?Path=Hierophant — MA pg. 32) → +12 a tier 3.
- ⚠️ La variante "promedio fijo 5 por d8" (convención PFS) **no está en AoN**: preguntar al GM el método de pg.

### 1.4 Channel Energy (Su) — texto completo aplicado

[AoN] https://www.aonprd.com/ClassDisplay.aspx?ItemName=Cleric — CRB pg. 38.

- Clérigo bueno (o de deidad buena) → **energía positiva** (cura vivos o daña muertos vivientes). Malvado (o de deidad malvada) → negativa. **Neutral de deidad neutral (o sin deidad) → elige una vez, irreversible**, y esa elección fija también el spontaneous casting (cure/inflict). **Corrección del auditor (frente 10):** un clérigo neutral de deidad BUENA no elige: canaliza positiva obligatoriamente.
- **Estallido de 30 pies de radio centrado en el clérigo.** Afecta a **todas las criaturas de UN tipo** (vivas o muertas vivientes) por uso: no cura aliados y daña no muertos a la vez. No es un cono ni una línea, no se apunta.
- **Dados:** 1d6 + 1d6 por cada dos niveles más allá del 1.º → **6d6 a nivel 11** (promedio 21, rango 6-36).
- **Salvación:** solo quien recibe daño tira **Will para mitad**; DC = 10 + 1/2 nivel de clérigo + mod Cha = **15 + Cha** a nivel 11 (11/2 = 5,5 → 5). Cha 12 → 16; 14 → 17; 16 → 18; 18 → 19.
- **Usos/día = 3 + mod Cha:** Cha 8 → 2; 10 → 3; 12 → 4; **14 → 5**; 16 → 6; 18 → 7. No hay mínimo: con Cha 5 serían 0.
- **Acción estándar que NO provoca ataques de oportunidad.** Es una habilidad sobrenatural (Su): no se interrumpe, no requiere concentración ([AoN] https://www.aonprd.com/Rules.aspx?Name=Actions%20in%20Combat&Category=Combat — CRB pg. 183, tabla de acciones; AoN la etiqueta "Table 7-2").
- El clérigo **elige si se incluye** en el efecto. **Debe presentar su símbolo sagrado.** El exceso de curación se pierde.
- **FAQ:** el channel de varias clases **no se acumula** (jul-2011). Positive/Negative Energy (jul-2016, https://paizo.com/paizo/faq/v5748nruor1fm): son dos tipos de daño, no elegibles en *resist energy*, **nunca afectan constructos ni objetos**; "negative energy effect" ≡ "negative energy damage".
- ⚠️ No hay FAQ sobre qué significa "presentar" el símbolo ni si hace falta una mano libre. Solución oficial: **Holy symbol (tattoo), 100 po** ([AoN] https://www.aonprd.com/EquipmentMiscDisplay.aspx?ItemName=Holy+symbol+%28tattoo%29 — UE pg. 57): "as a divine focus for spellcasting, channeling energy, and so on", debe estar totalmente visible. El rasgo Birthmark solo cubre el foco divino de los conjuros, **no menciona channel** ([AoN] https://www.aonprd.com/TraitDisplay.aspx?ItemName=Birthmark — UCam pg. 54 / APG pg. 328).

**Mejoras verificadas:** Selective Channeling (excluir hasta Cha mod objetivos; **FAQ jul-2011: hay que poder VER O TOCAR a la criatura para excluirla; señalar la casilla de un invisible no basta** — corrección del auditor del frente 01); Extra Channel (+2 usos; **NO repetible**: la dote no tiene cláusula de repetición y la FAQ de 2011 dice "exactly two extra uses per day"); Quick Channel (acción de movimiento por 2 usos); Improved Channel (+2 DC, solo ofensivo); Phylactery of Positive Channeling (+2d6, 11.000 po, ranura headband, CL 10) ([AoN] https://www.aonprd.com/MagicWondrousDisplay.aspx?FinalName=Phylactery%20of%20Positive%20Channeling — UE pg. 252 / CRB pg. 526). Detalle en secciones 2 y 5.

### 1.5 Dominios y ranura de dominio

[AoN] https://www.aonprd.com/ClassDisplay.aspx?ItemName=Cleric — CRB pg. 38; índice https://www.aonprd.com/ClericDomains.aspx.

- **Dos dominios de entre los de la deidad.** Dominio de alineamiento (Chaos/Evil/Good/Law) solo si el alineamiento del clérigo coincide. Sin deidad: dos dominios "subject to GM approval", misma restricción.
- **Una ranura de dominio por nivel de conjuro desde 1.º** (6 a nivel 11; los orisons no tienen). Solo admite conjuros de los dos dominios; si el conjuro no está en la lista de clérigo, solo se prepara ahí.
- **"Domain spells cannot be used to cast spells spontaneously."** La ranura de dominio nunca se convierte en un cure.
- **"Unless otherwise noted, activating a domain power is a standard action."** Casi todos los poderes de toque compiten con la acción de curar (clave para el ranking de la sección 3).
- **Subdominios** (regla en https://www.aonprd.com/ClericDomains.aspx — UM): reemplazan un poder y algunos conjuros; la deidad debe conceder dominio Y subdominio; no se puede tomar dominio + su subdominio; el subdominio cuenta como el dominio para prerrequisitos; si un subdominio tiene dos dominios asociados solo se elige para uno; **"If a subdomain ability calls for a saving throw, the DC of the save is equal to 10 + 1/2 the character's cleric level + her Wisdom modifier"** (corrección del auditor del frente 02: fija la DC de Blinding Flash y similares).
- **Healing** ([AoN] https://www.aonprd.com/DomainDisplay.aspx?ItemName=Healing — CRB pg. 44): *Rebuke Death (Sp)* — toque, estándar, **1d4 + 1 por cada 2 niveles = 1d4+5**, solo criaturas bajo 0 pg, 3 + Wis usos/día (Wis 27 → 11); *Healer's Blessing (Su)* a **nivel 6**: "all of your cure spells are treated as if they were empowered (+50%)", no aplica al daño a no muertos, **no se acumula con Empower Spell**. Conjuros de dominio: 1 CLW, 2 CMW, 3 CSW, 4 CCW, **5 Breath of Life, 6 Heal**, 7 Regenerate, 8 Mass CCW, 9 Mass Heal.

### 1.6 Conjuros: preparación divina, DC, Sabiduría, bonos

- **Divinos, preparados.** Requisito: **Wis ≥ 10 + nivel del conjuro** (6.º → Wis 16). **DC = 10 + nivel del conjuro + mod Wis.** [AoN] Cleric, CRB pg. 38.
- **Preparación** ([AoN] https://www.aonprd.com/Rules.aspx?Name=Preparing+Divine+Spells&Category=Divine+Spells — CRB pg. 220): **no requiere descanso** — el clérigo elige una hora fija del día y reza 1 hora; si no puede a esa hora, lo hace "as soon as possible" o espera al día siguiente; ambiente tranquilo. Puede **dejar ranuras vacías** y llenarlas más tarde (cada sesión extra "takes at least 15 minutes, and it takes longer if she prepares more than one-quarter of her spells" — corrección del auditor del frente 01). **No** puede cambiar un conjuro ya preparado ni rellenar una ranura gastada. **Recent Casting Limit:** lo lanzado en las 8 horas previas cuenta contra el límite. Conjuro de nivel inferior en ranura superior: permitido (regla general de ranuras). Contraste: el mago sí necesita 8 h de sueño ([AoN] https://aonprd.com/Rules.aspx?ID=234 — CRB pg. 219).
- **Bonos por Wis** ([AoN] https://www.aonprd.com/Rules.aspx?Name=Ability%20Scores&Category=Getting%20Started — CRB pg. 15-17): 18-19 → 1/1/1/1 (1.º-4.º); 20-21 → 2/1/1/1/1; 22-23 → 2/2/1/1/1/1; **24-25 → 2/2/2/1/1/1/1**; 26-27 → 2/2/2/2/1/1/1/1. FAQ jul-2011: el extra de un nivel que la clase aún no puede lanzar (7.º a nivel 11) **no se usa**.
- **Totales a nivel 11 (base + dominio + Wis), corregidos:** Wis 20 → 4 / 7 / 6 / 6 / 5 / 4 / 2; Wis 22 → 4 / 7 / 7 / 6 / 5 / 4 / 3; Wis 24-25 → 4 / 7 / 7 / 7 / 5 / 4 / 3; **Wis 26-27 → 4 / 7 / 7 / 7 / 6 / 4 / 3**; Wis 28-29 → 4 / 8 / 7 / 7 / 6 / 5 / 3.
- **Bonos de característica** ([AoN] https://www.aonprd.com/Rules.aspx?Name=Ability+Score+Bonuses&Category=Special+Abilities — CRB pg. 554): un aumento permanente (> 1 día, p. ej. Headband o Ioun Stone) **sube la puntuación recién tras 24 horas**; hasta entonces es temporal (bono a habilidades, Will y DC de conjuros, pero **no** conjuros extra).
- **Alineamiento de conjuros:** "A cleric can't cast spells of an alignment opposed to her own or her deity's". Un clérigo NG (o LG/CG de Sarenrae) no lanza [evil]: nada de Infernal Healing, Unholy Blight, Contagion. Un clérigo LG tampoco [chaotic]; uno CG tampoco [lawful] (Order's Wrath, Archon's Aura).
- **Divine Focus** = símbolo sagrado ([AoN] https://www.aonprd.com/Rules.aspx?ID=225 — CRB pg. 212); componentes somáticos requieren **una mano libre**.

### 1.7 Spontaneous Casting

[AoN] Cleric, CRB pg. 38: clérigo bueno (o neutral de deidad buena) "can 'lose' any prepared spell that is not an orison or domain spell in order to cast any cure spell of the same spell level or lower (**a cure spell is any spell with 'cure' in its name**)". Malvado → inflict. Neutral de deidad neutral → elige una vez.

Consecuencia práctica: a nivel 11, **cualquier ranura normal de 1.º a 6.º es un CLW / CMW / CSW / CCW / Mass CLW (5.º) / Mass CMW (6.º) latente**. Por lo tanto **nunca se preparan cure spells** fuera de la ranura de dominio; se preparan buffs, control y utilidad, y lo que no se usa se convierte. Lo que NO se convierte (hay que prepararlo o llevarlo en pergamino): Breath of Life, Heal, Restoration, Lesser Restoration, Remove X, Death Ward, Freedom of Movement (no llevan "cure" en el nombre).

### 1.8 Orisons

4 por día a nivel 11; se preparan pero **no se gastan** al lanzarse. Sin ranura de dominio ni extra por Wis. Los útiles: Detect Magic, Guidance, Light, Stabilize (estándar, alcance close 50 pies, estabiliza a −1 o menos sin tirada — [AoN] https://www.aonprd.com/SpellDisplay.aspx?ItemName=Stabilize — CRB pg. 348), Create Water, Purify Food and Drink, Virtue (1 pg temporal), Mending.

### 1.9 Wealth by Level y compra por puntos

- **WBL nivel 11 = 82.000 po** ([AoN] https://www.aonprd.com/Rules.aspx?ID=254 — CRB pg. 399, Table 12-4; nivel 10: 62.000; nivel 12: 108.000; 13: 140.000). "No more than half their total wealth on any single item" → tope **41.000 po** por objeto. Reparto orientativo: 25 % armas, 25 % armadura/protección, 25 % otros mágicos, 15 % consumibles, 10 % equipo y monedas. Mythic Adventures **no** modifica la WBL (nada en AoN).
- **Compra por puntos** ([AoN] https://www.aonprd.com/Rules.aspx?Name=Ability%20Scores&Category=Getting%20Started — CRB pg. 15-16): 7: −4 · 8: −2 · 9: −1 · 10: 0 · 11: 1 · 12: 2 · 13: 3 · 14: 5 · 15: 7 · 16: 10 · 17: 13 · 18: 17. Rango 7-18 antes de raciales. Low 10 / Standard 15 / High 20 / **Epic 25**.
- Mejoras de característica +1 a niveles 4 y 8 ([AoN] https://www.aonprd.com/Rules.aspx?ID=342 — CRB pg. 30); mítico +2 a tiers 2, 4, 6, 8, 10 ([AoN] https://www.aonprd.com/Rules.aspx?ID=1618 — MA pg. 12).

> **➡️ Para NUESTRA build (sección 1)**
> - Alineamiento **NG** con Sarenrae (NG): energía positiva y conversión espontánea a cure garantizadas, sin decisiones irreversibles; podemos lanzar [lawful] y [chaotic], nunca [evil].
> - Compra 25 (aasimar +2 Wis/+2 Cha): Str 10 (0) / Dex 14 (5) / Con 14 (5) / Int 10 (0) / Wis 17 (13) / Cha 12 (2) = 25 → Wis 19, Cha 14. Niveles 4 y 8 → Wis 21. Tier 2 → **Wis 23**. Headband of Inspired Wisdom +4 (16.000 po; decisión de la sección 9, crítico #12) → **Wis 27 (+8)** tras 24 h. Belt of Mighty Constitution +2 → Con 16.
> - Conjuros por día: **4 / 7 / 7 / 7 / 6 / 4 / 3**. DC 18 (1.º) … 24 (6.º). Channel **6d6 (8d6 con Phylactery), 5 usos (7 con Extra Channel), DC 17**, Selective excluye 2. Rebuke Death 1d4+5, 11/día.
> - Pg: 53 + 33 (Con 16) + 11 (clase predilecta) + 12 (Hierophant) = **109**; 120 con Toughness. Hard to Kill: muerte a **−32**.
> - Clase predilecta a **pg** (no a rangos): con Background Skills, los 22 rangos de aventura alcanzan para Perception 11, Knowledge (religion) 5 (prerrequisito de Quick Channel), Heal 3 y Spellcraft 3.
> - Hora de rezo fija (proponer el amanecer, temático de Sarenrae) y dejar 1-2 ranuras de 1.º-3.º vacías cada mañana.
> - Comprar el **Holy symbol (tattoo)** (100 po) para canalizar con escudo y arma sin discusión.
> - Descartado: todo lo referido a Perception/Disable Device para trampas (el jugador no invierte en eso); solo Perception por percepción general (el clérigo lo usa para no ser sorprendido).

---

## 2. MATEMÁTICA DE LA CURACIÓN A NIVEL 11

Todo lo de esta sección se calcula con **CL 11** (caster level = nivel de clérigo; ningún rasgo ni objeto de la build lo sube salvo Inspired Spell, que se indica aparte). Las medias se muestran con decimales; en mesa se redondea hacia abajo ([AoN] https://www.aonprd.com/Rules.aspx?Name=Common%20Terms&Category=Getting%20Started — CRB pg. 11). Fuentes base de todo el apartado: clase Cleric ([AoN] https://www.aonprd.com/ClassDisplay.aspx?ItemName=Cleric — CRB pg. 38), dominio Healing ([AoN] https://www.aonprd.com/DomainDisplay.aspx?ItemName=Healing — CRB pg. 44) y las páginas de cada conjuro (patrón `https://www.aonprd.com/SpellDisplay.aspx?ItemName=<Nombre>`; CRB pg. 262-263 para los cure, pg. 294 Heal, pg. 251 Breath of Life).

### 2.1 Las reglas que gobiernan todas las cuentas

1. **Topes de nivel de lanzador (caps) de los cure** — CLW 1d8 + 1/CL (máx. +5); CMW 2d8 + 1/CL (máx. +10); CSW 3d8 + 1/CL (máx. +15); CCW 4d8 + 1/CL (máx. +20); Mass CLW 1d8 + 1/CL (máx. +25); Mass CMW 2d8 + 1/CL (máx. +30). A CL 11 **solo CLW y CMW están capados** (+5 y +10); los demás usan +11. [AoN] CRB pg. 262-263 (CCW en pg. 262; el resto en 263 — corrección del auditor del frente 01).
2. **Heal = 10 pg por CL, máximo 150 a CL 15 → 110 a CL 11.** Sin dados: ni Empower ni Maximize ni Healer's Blessing lo tocan. [AoN] https://www.aonprd.com/SpellDisplay.aspx?ItemName=Heal — CRB pg. 294.
3. **Healer's Blessing (dominio Healing, nivel 6):** "all of your cure spells are treated as if they were empowered (+50%) … does not stack with the Empower Spell metamagic feat". Aplica **solo a conjuros con "cure" en el nombre** (CLW…CCW, Mass CLW, Mass CMW y sus versiones míticas). **NO aplica a Heal ni a Breath of Life** (veredicto del crítico: la cifra "BoL 50,25" de las notas del frente 04 es errónea). Tampoco al daño a no muertos. [AoN] DomainDisplay Healing — CRB pg. 44.
4. **Empower Spell** (+2 niveles): "+50% including bonuses to those dice rolls"; FAQ jul-2011 (https://paizo.com/paizo/faq/v5748nruor1fm): el +50 % se aplica **a los dados y al bono por nivel**. [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Empower%20Spell — CRB pg. 122.
5. **Maximize Spell** (+3 niveles): dados al máximo; "An empowered, maximized spell gains the separate benefits of each feat: the maximum result plus half the normally rolled result". [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Maximize%20Spell — CRB pg. 130. ⚠️ Que "half the normally rolled result" incluya el +CL es la lectura mayoritaria y coherente con la FAQ de Empower, pero no hay FAQ propia; y que Healer's Blessing ("treated as if empowered") se combine con Maximize también es lectura de texto: acordar con el GM.
6. **Metamagia y curas espontáneas:** "Casting a standard action metamagic spell spontaneously is a full-round action" (salvo Quicken). Preparada de antemano: tiempo normal. Las varas de metamagia **no evitan** el asalto completo en la conversión espontánea (solo la vara de Quicken). Una sola vara por conjuro; la vara **no** cambia la ranura. [AoN] https://www.aonprd.com/Feats.aspx?Categories=Metamagic — CRB pg. 112; https://www.aonprd.com/MagicRods.aspx?Category=Metamagic — UE / CRB.
7. **Nivel máximo de ranura a nivel 11: 6.º.** Toda combinación que supere 6.º es imposible (se marca "7.º ✗").
8. **Channel Energy** no es un conjuro: no admite metamagia ni Healer's Blessing; sí admite Phylactery, Life Current, Mythic Selective Channeling, Blessed Touch y Envoy of Healing.
9. **Versiones míticas:** se lanzan gastando 1 uso de poder mítico sobre el conjuro **normal preparado** (o convertido espontáneamente), sin cambiar la ranura ni el tiempo; hay que conocerlas (Mythic Spellcasting o Mythic Spell Lore). [AoN] https://www.aonprd.com/Rules.aspx?ID=1608 (Mythic Spells) — MA pg. 78. **No existe versión mítica de Mass CLW/CMW, Cleanse, Restoration ni Raise Dead** ([AoN] https://www.aonprd.com/Spells.aspx?Class=Mythic).

### 2.2 Ranuras que ocupa cada combinación (nivel de ranura; ✗ = imposible a nivel 11)

| Conjuro (nivel) | Base | Empower (+2) | Maximize (+3) | Emp + Max (+5) | Quicken (+4) | Reach → close (+1) |
|---|---|---|---|---|---|---|
| CLW (1) | 1 | 3 | 4 | 6 | 5 | 2 |
| CMW (2) | 2 | 4 | 5 | 7 ✗ | 6 | 3 |
| CSW (3) | 3 | 5 | 6 | ✗ | 7 ✗ | 4 |
| CCW (4) | 4 | 6 | 7 ✗ | ✗ | ✗ | 5 |
| Mass CLW (5) | 5 | 7 ✗ | ✗ | ✗ | ✗ | ya es close |
| Breath of Life (5) | 5 | 7 ✗ | ✗ | ✗ | ✗ | 6 |
| Heal (6) | 6 | inútil | inútil | inútil | ✗ | 7 ✗ (solo con vara Reach normal) |

Con varas ([AoN] https://www.aonprd.com/MagicRods.aspx?Category=Metamagic): *lesser* (≤3.º): Reach 3.000 / Extend 3.000 / Empower 9.000 / Maximize 14.000 / **Quicken 35.000** po; *normal* (≤6.º): Reach 11.000 / Empower 32.500 / Maximize 54.000 / Quicken 75.500 po. La lesser cubre CLW/CMW/CSW; la normal llega a CCW, Mass CLW/CMW, Breath of Life y Heal. Además, **Faith's Reach** (Hierophant, tier 1) da 30 pies a todo conjuro divino de toque sin coste ni ranura ([AoN] https://www.aonprd.com/PathAbilities.aspx?Path=Hierophant — MA pg. 34), y **Divine Metamastery** (tier 3) aplica una metamagia +0/+1 conocida (Reach, Extend…) gratis durante 10 asaltos por 1 uso (MA pg. 36).

### 2.3 Tabla maestra: curación por acción a CL 11 (media / máximo por objetivo)

| Fuente | Acción | Base | Healer's Blessing o Empower (×1,5) | Maximize | Emp + Max (máx. + ½ tirada) |
|---|---|---|---|---|---|
| **Channel Energy 6d6** (todos los vivos a 30 pies) | Estándar (1 uso) · **Movimiento con Quick Channel (2 usos)** | **21 / 36** | no aplica | no aplica | no aplica. **Con Phylactery of Positive Channeling 8d6 = 28 / 48.** |
| **Rebuke Death** 1d4+5 (solo < 0 pg) | Estándar, toque, 3 + Wis/día | **7,5 / 9** | — | — | — |
| **CLW** 1d8+5 | Estándar (rápida en ranura de 5.º o vara Quicken lesser) | **9,5 / 13** | (1d8+5) × 1,5 = **14,25 / 19,5** | 8+5 = **13** | 13 + 4,75 = **17,75** |
| **CMW** 2d8+10 | Estándar (rápida en 6.º o vara lesser) | **19 / 26** | **28,5 / 39** | 16+10 = **26** | 26 + 9,5 = **35,5** |
| **CSW** 3d8+11 | Estándar (rápida solo con vara Quicken lesser) | **24,5 / 35** | **36,75 / 52,5** | 24+11 = **35** (ranura 6.º o vara lesser) | 35 + 12,25 = **47,25** (solo Healer's Blessing + Maximize, o vara + dote) |
| **CCW** 4d8+11 | Estándar | **29 / 43** | **43,5 / 64,5** | 32+11 = **43** (solo vara Maximize normal) | 43 + 14,5 = **57,5** |
| **Mass CLW** 1d8+11 × hasta 11 objetivos, close (50 pies), ≤30 pies entre sí | Estándar | **15,5 / 19** c/u → 170,5 total con 11 | **23,25 / 28,5** c/u → 255,75 total | 8+11 = **19** c/u (vara normal) | 19 + 7,75 = **26,75** c/u |
| **Mass CMW** 2d8+11 × 11 | Estándar | **20 / 27** c/u → 220 total | **30 / 40,5** c/u → 330 total | 16+11 = **27** c/u (vara normal) | 27 + 10 = **37** c/u |
| **Heal** 110 | Estándar, toque (rápida solo con vara Quicken normal, 75.500 po) | **110** | 110 (no es "cure"; sin dados) | 110 | 110 |
| **Breath of Life** 5d8+11 | Estándar, toque, muerto ≤ 1 asalto | **33,5 / 51** | 33,5 (no es "cure"; Empower → 7.º ✗) | ✗ | ✗ |
| **Cleanse** 4d8+11 (APG pg. 211; evocation, corrección del auditor) | Estándar, **personal** | **29 / 43** solo a vos + quita condiciones | no es "cure" | — | — |
| **Pillar of Life** 2d8+11 (APG pg. 236) | Estándar del clérigo; luego **estándar de cada aliado** que lo toca, 1 vez c/u, 11 asaltos | **20 / 27** c/u | no es "cure" | — | — |
| **Blessing of Courage and Life** 1d8+10 (APG pg. 205) | Estándar previa; el aliado lo descarga como **rápida** | **14,5 / 18** | no es "cure" | — | — |
| **Symbol of Healing** 2d8+11 (UM pg. 241) | 10 minutos + 500 po de componentes; 1 vez/24 h a todos a 60 pies | **20 / 27** c/u | no es "cure" | — | — |
| **Varita CLW** (CL 1) 1d8+1 | Estándar (spell trigger), 750 po / 50 cargas | **5,5 / 9** (15 po la carga) | metamagia no aplica a varitas | — | — |
| **Varita CMW** (CL 3) 2d8+3 | Estándar, 4.500 po | **12 / 19** | — | — | — |
| **Healer's Hands** (Planar Adventures pg. 28) | **Asalto completo**, 11/día, sin coste; requiere Heal DC 30 | nivel del aliado + Wis + rangos Kn (planes) (ver §5) | — | — | — |

**Versiones míticas** (1 uso de poder mítico cada una; [AoN] páginas de cada conjuro, sección "Mythic" — MA pg. 87, 89-90, 97, 103):

| Conjuro mítico | Fórmula | A CL 11 (media / máx.) | Con Healer's Blessing | Extra |
|---|---|---|---|---|
| Mythic CLW | 2d8 + 2/CL (máx. +10) | **19 / 26** | 28,5 | cura 1 punto de daño de característica |
| Mythic CMW | 4d8 + 2/CL (máx. +20) | **38 / 52** | 57 | 2 puntos de daño de característica |
| Mythic CSW | 6d8 + 2/CL (máx. +30) | **49 / 70** | 73,5 | 3 puntos |
| Mythic CCW | 8d8 + 2/CL (máx. +40) | **58 / 86** | 87 | 4 puntos |
| Mythic Heal | 15/CL (máx. 225) | **165** | 165 | **Augmented (2 usos en total): actúa además como *restoration*** (⚠️ el texto no menciona los 1.000 po del nivel negativo permanente: preguntar al GM) |
| Mythic Breath of Life | 5d12 + 1/CL (máx. +25) | **43,5 / 71** | 43,5 | ventana **2 asaltos**; contra un efecto de muerte con salvación permite repetirla (vuelve a −10 + curación); Augmented exige tier 9 |
| Mythic Pillar of Life | 3d8 + 1/CL (máx. +20) | **24,5 / 35** c/u | — | revive como *breath of life* a un muerto que metan en su casilla |

**Con las habilidades de Hierophant** ([AoN] https://www.aonprd.com/MythicPaths.aspx?Path=Hierophant y PathAbilities — MA pg. 32-37):
- **Inspired Spell** (Divine Surge, tier 1): 1 uso, acción estándar, **cualquier conjuro divino de ≤ 6.º sin ranura y sin haberlo preparado**, CL +2 → CL 13: Heal **130**, Mythic Heal **195** (2 usos), CSW 3d8+13 (26,5), CCW 4d8+13 (31), Breath of Life 5d8+13 (35,5), Mass CLW 1d8+13 c/u. Metamagia gratis dentro del tope de 6.º (Reach CCW, Maximize CSW…), pero la acción sigue siendo estándar aunque se aplique Quicken.
- **Recalled Blessing** (alternativa excluyente): relanzar un conjuro **preparado hoy** sin ranura, sin metamagia, con la curación "roll twice, take the higher": BoL 5d8+11 pasa de 33,5 a ≈36,4; Mythic BoL de 43,5 a ≈47,9; CCW 29 → ≈32 (simulación del frente 06, confirmada por el auditor). Veredicto del crítico: Inspired Spell y Recalled Blessing **no se acumulan**, se elige una para siempre.
- **Relentless Healing** (tier 1): acción **gratuita** + 1 uso para que **cualquier** curación (Heal, CCW, channel, varita) sobre alguien que murió hace ≤ 1 asalto funcione como *breath of life* (si supera el umbral de muerte, revive). Heal (110) sobre un cuerpo a −40 → 70 pg y vivo.
- **Abundant Healing** (tier 3): el exceso de una curación de conjuro o rasgo de clase pasa a un aliado **adyacente a vos**, y así sucesivamente. Heal 110 sobre un tanque al que le faltaban 40 → 70 al siguiente adyacente → el resto al siguiente.
- **Life Current** (tier 3, hasta 4 tomas): los 1 naturales cuentan como 2 en dados de channel/cure: 6d6 pasa de 21 a 22 (una toma), 24 (dos). Modesto.
- **Mythic Selective Channeling** (dote mítica): +2 pg curados por cada objetivo excluido; excluyendo 2 (Cha 14) → +4 a cada aliado; 1 uso de poder mítico → excluir ½ tier más (tier 3 → +1 = 3 excluidos, +6).
- **Enhance Magic Items** (tier 1): +½ tier (= +1 a tier 3) al CL de varitas: varita de CLW cura 1d8+2; y se puede activar una varita gastando 1 uso de poder mítico en vez de una carga.

**Rasgos y dotes que modifican el channel** ([AoN] Traits — HH pg. 12; Champions of Purity pg. 7): **Envoy of Healing** (Religion, Sarenrae): repetir los 1 naturales al curar con channel → media por d6 3,5 → ≈3,92; 6d6: 21 → **≈23,5**; 8d6: 28 → **≈31,3**. **Blessed Touch** (Faith): +1 por channel o cure. Son de listas distintas (Religion y Faith), así que se pueden tener ambos; y como uno repite dados y el otro suma +1 fijo, no hay conflicto de "trait bonus" ([AoN] https://www.aonprd.com/Rules.aspx?ID=450 — APG pg. 326: los bonos de rasgo no se acumulan entre sí, pero aquí ninguno es un bono numérico del mismo tipo).

### 2.4 Cuentas de ejemplo (para ver el método)

- **Healer's Blessing sobre CSW:** tirada 3d8 = 14, +11 = 25; × 1,5 = 37,5 → **37**.
- **Healer's Blessing + Maximize CSW** (ranura de 6.º o vara Maximize lesser): máximo 24 + 11 = 35; "half the normally rolled result": tirada 25 → 12,5 → 35 + 12 = **47**. Lectura alternativa (solo los dados: 3d8/2 ≈ 6,75) → ≈41,75. ⚠️ Acordar con el GM.
- **Breath of Life real:** un tanque con Con 16 muere a −16. Queda a −30. BoL 5d8+11 con tirada 32 → **+2 pg, vivo**, con 1 nivel negativo temporal por 1 día. Con tirada mínima (5 + 11 = 16): −30 + 16 = −14 → **vivo, estable, inconsciente** (−14 es "menos negativo" que −16). A −45 solo revive con tirada ≥ 45… es decir, casi nunca (máximo 51); con la mítica (5d12+11, máx. 71) sí es alcanzable. [AoN] Breath of Life — CRB pg. 251; Injury and Death — CRB pg. 189-190.
- **Un asalto "de crisis" de nuestra build:** acción estándar Heal (110) sobre el tanque + acción de movimiento Quick Channel (2 usos; 8d6 con Phylactery = 28, ≈31 con Envoy of Healing) a los cuatro aliados + acción rápida libre (o CLW acelerado si preparamos uno en 5.º: +9,5) + acción inmediata en reserva para Reactive Healing (6d6/8d6 a nosotros mismos si un golpe nos bajaría a 0) o Divine Interference. Total: ≈141 al tanque y ≈31 a cada uno de los otros tres, por 1 ranura de 6.º + 2 usos de channel.
- **Amazing Initiative (tier 2):** 1 uso de poder mítico → acción estándar extra "que no puede usarse para lanzar un conjuro" → **un channel más** (Su, no es conjuro): asalto de Heal + channel (movimiento) + channel (estándar extra) = 110 + 28 + 28 al tanque y 56 al resto, por 3 usos de channel y 1 de poder mítico. ⚠️ Usar una varita o Rebuke Death (Sp) con esa acción es zona gris: preguntar.
- **Hero Point "Recall":** un Hero Point permite "recall a spell you have already cast" ([AoN] https://www.aonprd.com/Rules.aspx?ID=447 — APG pg. 322): es un **segundo Heal** del día sin ranura (ver sección 11).
- **Comparación "una acción estándar, un objetivo":** Mythic Heal 165 (195 con Inspired Spell) > Heal 110 (130) > Mythic CCW + Healer's Blessing 87 > Mythic CSW + HB 73,5 > Mythic CCW 58 > Mythic CSW 49 > CCW + HB 43,5 > CSW + HB 36,75 > Breath of Life 33,5 > CCW 29 > channel 21-28 (pero a todos los aliados a 30 pies y sin provocar).
- **Comparación "curación de área":** Mass CMW con Healer's Blessing = 30 c/u a 11 objetivos (330 total) por una ranura de 6.º (la misma que Heal); Mass CLW + HB = 23,25 c/u (5.º); dos channels con Phylactery (estándar + movimiento, 3 usos) = 56 c/u sin gastar ranuras. Con 4 aliados cuerpo a cuerpo apiñados, **channel ×2 > Mass CMW** y deja libre la ranura de 6.º.

### 2.5 Coste por punto de golpe (para elegir qué gastar fuera de combate)

- Varita de CLW: 750 po / 50 cargas / 5,5 pg = **≈2,7 po por pg** (con Enhance Magic Items a tier 3: 1d8+2 = 6,5 → 2,3 po/pg). Es la herramienta de curación fuera de combate; nunca gastar ranuras ni channel para "rellenar" tras un combate si hay tiempo.
- Varita de CMW (CL 3): 4.500 / 50 / 12 = **7,5 po/pg** (peor; solo por acción).
- Channel fuera de combate: gratis pero limitado (5-7/día) y se recupera con Recuperation (tier 3: 1 uso + 1 hora → recupera "spells per day" y usos de rasgos de clase, no poder mítico — [AoN] https://www.aonprd.com/Rules.aspx?ID=1618 — MA pg. 12).
- Healer's Hands (si el GM permite Planar Adventures): asalto completo, gratis, 11/día: ≈27 pg (49 con Signature Skill a 10 rangos, ⚠️ lectura de suma). Ver sección 5.
- 🚫 "Infernal Healing en varita para un clérigo bueno": mecánicamente es spell trigger y la FAQ "Items as Spells" (2010) dice que usar una varita no es lanzar un conjuro, pero el conjuro es [evil], el objetivo "detects as evil" y tarda 1 asalto; el auditor del frente 05 confirma la regla, no la conveniencia. ⚠️ Decisión de mesa y de deidad (Sarenrae: no). Celestial Healing (Arcane Anthology pg. 13, [good]) dura "1 round/2 levels" → inútil en varita.

> **➡️ Para NUESTRA build (sección 2)**
> - **Números propios:** channel **8d6 con Phylactery** (28 / 48; ≈31 con Envoy of Healing) en cuanto se compre; **6d6 (21 / 36; ≈23,5)** mientras tanto. 5 usos/día con Cha 14 (**7 con Extra Channel**). Quick Channel convierte 2 usos en una acción de movimiento: el patrón de asalto es **estándar (Heal / Mythic Heal / Breath of Life / buff) + movimiento (channel)**. Selective Channeling excluye 2 (si en lugar de Extra Path Ability se tomara Mythic Selective Channeling: 3 gastando 1 poder mítico y +4/+6 a cada curado; ver sección 7.8).
> - **Healer's Blessing** hace que TODOS nuestros cure (espontáneos incluidos) valgan ×1,5 sin coste: CSW 36,75, CCW 43,5, Mass CLW 23,25 c/u, Mass CMW 30 c/u; **Mythic CCW 87**, Mythic CSW 73,5. Por eso **nunca** tomamos Empower/Maximize como dotes (trampa doble: no se acumulan y a nivel 11 no entran en ranura).
> - **Heal (110) es la cura estándar de un solo objetivo a nivel 11**; con Inspired Spell 130; **Mythic Heal 165 (195 con Inspired Spell, 2 usos)** es la única cura que llena a un tanque de 130-150 pg de una vez. Con la ranura de dominio de 6.º (Heal) + 1 ranura de 6.º preparada + Inspired Spell + Hero Point (Recall) tenemos **hasta 4 Heal al día** sin contar Recuperation.
> - **Breath of Life:** siempre en la ranura de dominio de 5.º; con Faith's Reach a 30 pies (ataque de toque a distancia contra aliado dispuesto: ⚠️ AoN no exime de la tirada explícitamente; la práctica común es no tirar contra un aliado que baja su defensa). Con Relentless Healing, **cualquier** cura sobre un muerto de este asalto hace lo mismo por 1 uso y acción gratuita: es la razón de tomarla.
> - **Abundant Healing** (tier 3) es la habilidad clave con 4 cuerpo a cuerpo: el exceso de cada Heal/channel pasa a los que están pegados a nosotros. Táctica: el clérigo se coloca **detrás del muro de tanques, adyacente a 2-3 aliados**, dentro de los 30 pies de todos.
> - **Fuera de combate:** varita de CLW (750 po) para rellenar, channel sobrante, Recuperation (1 uso + 1 h) para volver a preparar conjuros a mitad del día.
> - Comprar **Rod of Metamagic, Reach (lesser)** (3.000 po) solo si no se toma Faith's Reach; con Faith's Reach a 30 pies, la vara lesser es redundante y la normal (11.000) solo suma 20 pies a Heal/BoL. La **Rod of Quicken (lesser)** (35.000 po) es demasiado cara para lo que da (CSW 24,5 / 36,75 como rápida 3/día): la descartamos a este WBL (ver sección 9).

---

## 3. DOMINIOS Y SUBDOMINIOS

### 3.1 Reglas verificadas que condicionan el ranking

- **Dos dominios de la deidad; una ranura de dominio por nivel de conjuro (6 a nivel 11); las ranuras de dominio no se convierten en cure.** [AoN] https://www.aonprd.com/ClassDisplay.aspx?ItemName=Cleric — CRB pg. 38.
- **"Unless otherwise noted, activating a domain power is a standard action."** (misma página). Consecuencia: todo poder de toque (Rebuke Death, Touch of Good, Bit of Luck, Calming Touch, Restorative Touch…) **compite con la acción de curar**. Para un sanador que ya tiene su estándar ocupada, valen mucho más los poderes de **aura** (activación única y duran asaltos/día), los de **acción rápida** (Aura of Heroism, Spirit Touch) y los de **acción inmediata** (Unity, Adoration, Sacrificial Bond) o **gratuita** (Agile Feet, Blessed Surgery).
- **Regla de subdominios** ([AoN] https://www.aonprd.com/ClericDomains.aspx — UM pg. 30; texto completo verificado por el auditor del frente 02): "Each subdomain replaces a granted power and a number of spells in the domain's granted spell list. A cleric who chooses a subdomain must have access to both the domain and its subdomain from her deity. If a cleric selects a subdomain, she cannot select its associated domain as her other domain choice … Subdomains are treated as equivalent to their associated domain for any effect or prerequisite based on domains. If a subdomain has two associated domains, the cleric can only select the subdomain for one of her domains … **If a subdomain ability calls for a saving throw, the DC of the save is equal to 10 + 1/2 the character's cleric level + her Wisdom modifier.**" → A nivel 11 toda DC de subdominio es **15 + Wis** (23 con Wis +8). Corrección del auditor: la nota del frente 02 "AoN no da regla general de DC" era falsa para subdominios (los poderes de dominio base imprimen cada uno su DC).
- **Subdominios apócrifos** (Divine Anthology pg. 22-26: Medicine, Legend, Hubris, Alchemy, Portal, Thirst…) exigen el rasgo **Acolyte of Apocrypha** (Faith) ([AoN] https://www.aonprd.com/TraitDisplay.aspx?ItemName=Acolyte%20of%20Apocrypha — DA pg. 22): cuesta uno de nuestros 3 rasgos.
- **Mythic Domain (Hierophant, tier 1)** ([AoN] https://www.aonprd.com/PathAbilities.aspx?Path=Hierophant — MA pg. 34): poderes de dominio calculados como **nivel 15** (no otorga poderes antes de tiempo) y **1/día, 1 uso de poder mítico como acción estándar, recupera todos los usos de poderes de dominio**. En las fichas se anota "[MD: …]".
- **Escalado de usos a nivel 11:** "once per day at 8th, +1 per four levels beyond 8th" → 1 uso (el 2.º a nivel 12); "+1 per two levels beyond 8th" → 2 usos; "3 + Wis" → 11 usos con Wis +8; auras "rounds per day = cleric level" → 11 asaltos (15 con Mythic Domain).

### 3.2 Healing al detalle (obligatorio)

[AoN] https://www.aonprd.com/DomainDisplay.aspx?ItemName=Healing — CRB pg. 44.

- **Rebuke Death (Sp):** toque, estándar, **1d4+5** (media 7,5) solo a criaturas **por debajo de 0 pg**, 3 + Wis/día (**11**). [MD: 1d4+7.] Es el "levantar del negativo" barato cuando la ranura de curar ya se usó… pero cuesta la estándar: en la práctica, Heal/CCW/channel lo hacen mejor; sirve como recurso cuando se agotó todo.
- **Healer's Blessing (Su), nivel 6:** todos los cure ×1,5 (sección 2). Sin FAQ; lectura RAW confirmada por el auditor: no afecta channel, Heal, Breath of Life, Rebuke Death, ni (consenso, ⚠️ sin FAQ) varitas/pergaminos.
- **Conjuros de dominio:** 1 CLW · 2 CMW · 3 CSW · 4 CCW · **5 Breath of Life** · **6 Heal** · 7 Regenerate · 8 Mass CCW · 9 Mass Heal. A nivel 11 los cure de 1.º-4.º en la ranura de dominio son "comodines" (lo que no se convierte espontáneamente igual es un cure), y las ranuras de 5.º y 6.º dan **Breath of Life y Heal extra cada día sin gastar ranuras normales** (= +110 pg y una resurrección de 1 asalto diarias).
- **Subdominio Restoration** (APG): **Restorative Touch (Su)** reemplaza Rebuke Death: toque, quita **dazed, fatigued, shaken, sickened o staggered** (una), 3 + Wis/día. Pierde como conjuros de dominio CMW (2.º → remove disease), CCW (4.º → neutralize poison) y **Breath of Life (5.º → break enchantment)**. Deidades: Sarenrae, Milani, Irori, Qi Zhong, Dalenydra, Korada, Osiris… (**Pharasma NO**). Veredicto: a tier ≥ 3 lo solapa **Hand of Mercy** (mismas cinco condiciones por 1 uso de channel — MA pg. 36) y perder la ranura de Breath of Life es grave: **Healing base**.
- **Subdominio Resurrection** (APG): **Gift of Life (Su)** reemplaza **Healer's Blessing**: 1/día, un muerto hace ≤ 1 minuto vuelve 11 asaltos con 5 pg y luego muere. Conjuros 5 raise dead, 7 resurrection, 9 true resurrection. 🚫 para un sanador principal: pierde el ×1,5.
- **Subdominio Medicine** (DA pg. 24, apócrifo): Blessed Surgery (acción gratuita, tirar Heal dos veces; los usos de 1 hora de la habilidad Heal pasan a ≤ 1 minuto), 3 + Wis/día; conjuros 1 diagnose disease, 2 placebo effect. Solo interesa con Healer's Hands (sección 5); cuesta un rasgo.

### 3.3 Ranking de segundo dominio para NUESTRO grupo (4 cuerpo a cuerpo, combates muy difíciles, sin trampas)

Criterios: (1) valor con 4 aliados cuerpo a cuerpo apiñados a 30 pies; (2) economía de acciones (no gastar la estándar); (3) supervivencia; (4) deidad con Healing. Números a nivel 11 con Wis +8.

| # | Dominio (variante) | Poderes a nivel 11 | Conjuros de dominio que importan | Veredicto |
|---|---|---|---|---|
| 1 | **Glory → subdominio Heroism** (APG; Sarenrae, Iomedae, Shizuru, Ra, Myr) | Pasivo **+2 DC del channel contra no muertos**; **Touch of Glory** +11 a UNA prueba de Cha (estándar, 11/día; útil en social); **Aura of Heroism (Su)**: **acción rápida**, aura de 30 pies, aliados bajo *heroism* (**+2 moral a ataques, salvaciones y habilidades**) **11 asaltos/día** [MD: 15], no consecutivos. [AoN] https://www.aonprd.com/DomainDisplay.aspx?ItemName=Glory — CRB pg. 44 / APG pg. 92 | 1 shield of faith · 2 bless weapon · **3 heroism** (no está en la lista de clérigo: +2 moral 110 min a un aliado) · 4 holy smite · 5 righteous might · **6 greater heroism** (+4 moral, inmune a miedo, 11 pg temporales, 11 min) · 7 holy sword | **El mejor para 4 cuerpo a cuerpo:** +2 a ~10 ataques por asalto y a todas las salvaciones del grupo **sin gastar la estándar**; con Quick Channel la ronda es rápida (aura) + movimiento (channel) + estándar (Heal). El bono moral no se acumula con Bless (+1 moral a ataques) ni Heroes' Feast (+1 moral), pero sí con Prayer (suerte), Blessing of Fervor (esquiva/sin tipo), Divine Favor (suerte), Haste. |
| 2 | **Good → subdominio Agathion** (APG; Sarenrae, Shelyn, Korada, Qi Zhong, Dalenydra) | **Touch of Good** +5 sagrado 1 asalto (estándar, 11/día; mala economía); **Protective Aura (Su)** a 8.º: acción estándar, aura 30 pies, aliados +2 desvío CA, +2 resistencia a salvaciones y **efectos de *protection from evil*** (inmunidad a nuevos intentos de control mental de fuentes malvadas, bloquea el contacto de invocados malvados), 11 asaltos/día [MD: 15]. [AoN] https://www.aonprd.com/DomainDisplay.aspx?ItemName=Good — APG pg. 88 | 1 shield of faith · 2 align weapon · 3 tongues · 4 holy smite · 5 dispel evil · 6 planar ally (agathion) — **pierde blade barrier** como conjuro de dominio | **Muy bueno pero con solapamiento:** a nivel 11 todos llevan Ring of Protection (desvío) y Cloak of Resistance (resistencia), así que **los +2 no se acumulan** con ellos ([AoN] https://www.aonprd.com/Rules.aspx?ID=211 — CRB pg. 208, Combining Magic Effects: "Two bonuses of the same type don't stack even if they come from different spells (or from effects other than spells)"); lo que queda es la *protection from evil* de área (que Communal Protection from Evil, cleric 2, también da). Segunda opción si la campaña es contra malvados que dominan o invocan (demonios, diablos, nigromantes). |
| 3 | **Community** (CRB; Erastil, Isis, Shei, Kurgess…; **no Sarenrae**) | Calming Touch 1d6+11 no letal + quita fatigued/shaken/sickened (estándar, 11/día); **Unity (Su)** a 8.º: **acción inmediata**, los aliados a 30 pies usan TU salvación contra un efecto que os afecte a todos, 1/día [MD: 2]. [AoN] https://www.aonprd.com/DomainDisplay.aspx?ItemName=Community — CRB pg. 42 | 1 bless · 2 shield other · 3 prayer · 5 telepathic bond · **6 heroes' feast** | El "soporte de grupo" más completo: Unity con Will +18 salva al grupo de un *mass hold* / *fear* aunque sea 1/día. Requiere otra deidad (Erastil LG: Animal, Community, Good, Law, Plant — no tiene Healing: descartado; Isis/Shei: sí Healing + Community). |
| 4 | **Liberation** (CRB; Milani, Desna, Shei…) | Liberation: *freedom of movement* propio automático 11 asaltos/día; **Freedom's Call (Su)** a 8.º: aura 30 pies, aliados no sufren confused, grappled, frightened, panicked, paralyzed, pinned ni shaken (suprime) 11 asaltos/día [MD: 15]. [AoN] https://www.aonprd.com/DomainDisplay.aspx?ItemName=Liberation — CRB pg. 45 | 1 remove fear · 2 remove paralysis · 3 remove curse · **4 freedom of movement** · 5 break enchantment · **6 greater dispel magic** | El mejor "cura lo que cure no cura": contra agarradores y parálisis (combates difíciles con ghouls, gigantes, dragones) el aura salva turnos enteros de los 4 cuerpo a cuerpo. Milani (CG) lo combina con Healing. |
| 5 | **Repose** (CRB; Pharasma, Dalenydra, Anubis, Osiris) | Gentle Rest: toque cuerpo a cuerpo, **staggered 1 asalto sin salvación** (estándar, 11/día); **Ward Against Death (Su)** a 8.º: aura 30 pies, vivos inmunes a efectos de muerte, drenaje y niveles negativos, 11 asaltos/día [MD: 15]; los niveles negativos ya sufridos no se quitan pero **"have no effect while the creature is inside"** (corrección del auditor). [AoN] https://www.aonprd.com/DomainDisplay.aspx?ItemName=Repose — CRB pg. 46 | 1 deathwatch · 2 gentle repose · 3 speak with dead · **4 death ward** · 5 slay living · 6 undeath to death | Contra no muertos y nigromantes es un Death Ward de grupo. Dalenydra (NG, empyreal lord: Good, Healing, Protection, Repose) es la deidad "sanadora de campo" que lo permite junto a Healing. |
| 6 | **Sun** (CRB; Sarenrae, Iomedae, Ra) | Sun's Blessing: +11 al daño del channel a no muertos e ignoran channel resistance (6d6+11, 8d6+11 con Phylactery); **Nimbus of Light** a 8.º: *daylight* 30 pies, 11 daño/asalto automático a no muertos, disipa [darkness], 11 asaltos/día [MD: 15/15]. Subdominio **Day** (Sarenrae): Day's Resurgence = 10 minutos, una criatura descansa "8 horas" (pg y nueva salvación contra aflicciones), **2/día** a nivel 11 [MD: 4]. [AoN] https://www.aonprd.com/DomainDisplay.aspx?ItemName=Sun — CRB pg. 47 | 1 endure elements · 3 searing light · 4 fire shield · **5 flame strike** (11d6) · 6 fire seeds | El mejor "plan ofensivo" **solo si hay no muertos**; sin ellos, Sun aporta poco a un grupo de 4 cuerpo a cuerpo. Sarenrae lo concede: es la alternativa temática si la campaña es de no muertos (preguntar, sección 14). |
| 7 | **Protection** (CRB; Milani, Qi Zhong, Dalenydra, Korada, Torag) | Pasivo +3 resistencia (**no se acumula con Cloak of Resistance +3**); Resistant Touch (estándar); **Aura of Protection** a 8.º: +1 desvío CA (+2 a nivel 12) y **resistencia 5 a toda energía** a los aliados, 11 asaltos/día [MD: +2/10/15]. [AoN] https://www.aonprd.com/DomainDisplay.aspx?ItemName=Protection — CRB pg. 46 | 1 sanctuary · 2 shield other · 3 protection from energy · 4 spell immunity · 5 spell resistance · 6 antimagic field | Contra alientos y bolas de fuego, resistencia 5-10 a 4 aliados por asalto = curación preventiva; el resto se solapa con nuestros objetos. |
| 8 | **Luck** (CRB; Desna, Shelyn…; sin Healing en Desna) | Bit of Luck (toque, estándar, 11/día: 1 asalto de "tirar dos d20"); **Good Fortune** a 6.º: acción inmediata, repetir un d20 propio, 1/día [MD: 2]. **Fate's Favored NO lo mejora** (Bit of Luck no es un bono de suerte — confirmado por el auditor). [AoN] https://www.aonprd.com/DomainDisplay.aspx?ItemName=Luck — CRB pg. 45 | 3 protection from energy · **4 freedom of movement** · **5 break enchantment** | Bueno pero cuesta la estándar; sin deidad con Healing + Luck relevante. |
| 9 | **Knowledge / Travel** | Lore Keeper 15 + 11 + 8 = 34 de resultado con un toque; Remote Viewing 11 asaltos / +10 pies, Agile Feet (gratuita), **Dimensional Hop** 110 pies/día como movimiento sin AdO [MD: 150]. [AoN] DomainDisplay Knowledge / Travel — CRB pg. 45 / 47 | true seeing (5), find the path (6) / fly (3), dimension door (4), teleport (5) | Utilidad de campaña y movilidad. **Descartados por parámetros:** el jugador no invierte en exploración; Faith's Reach + Quick Channel resuelven el "llegar" mejor que Dimensional Hop. |
| 10 | **Strength → Resolve** (APG; Irori, Kurgess, Gorum, Cayden) | **Bestow Resolve** a 8.º: aliados a 20 pies ganan **pg temporales = nivel + Wis = 19** por 1 minuto, 1/día [MD: 21, 2/día]. | 1 bless · 3 magic vestment · 5 righteous might · 6 heroes' feast | 19 × 5 = 95 pg "curados antes de ocurrir" 1/día; sleeper, pero sin deidad NG con Healing + Strength (Irori es LN: obliga a elegir energía positiva al crear el personaje y no da Glory). |

**Descartados con motivo:** Evil (exige alineamiento malvado), Death (Death's Embrace es para energía negativa), Darkness, Destruction (pocas deidades buenas; Destructive Aura +5 daño y críticos automáticos es tremendo para 4 cuerpo a cuerpo, pero ninguna deidad buena con Healing lo da), War (Torag no lo tiene según AoN; Gorum no da Healing), Animal (un compañero más que gestionar y nivel efectivo 8), Trickery/Charm (defensa personal: Adoration de Love es buena para un sanador acosado, pero Shelyn no da Healing), **"Vermin"** (🚫 no existe en AoN; lo más parecido es el subdominio Insect de Animal, DA pg. 23).

### 3.4 Deidades con Healing y su menú (verificado en AoN, sección 10 para el detalle)

- **Sarenrae** (NG; Fire, Glory, Good, Healing, Sun; subdominios Agathion, Day, Heroism, Light, Medicine\*, Redemption, Restoration, Resurrection, Revelation, Thirst\*) — [AoN] https://www.aonprd.com/DeityDisplay.aspx?ItemName=Sarenrae — ISG pg. 132. Combos: **Healing + Glory/Heroism** (buff de acción rápida) · Healing + Good/Agathion · Healing + Sun (no muertos).
- **Dalenydra** (NG, señora empírea; Good, Healing, Protection, Repose; Agathion, Defense, Medicine, Restoration, Resurrection) — [AoN] https://www.aonprd.com/DeityDisplay.aspx?ItemName=Dalenydra — ISG pg. 322. Combos: Healing + Repose (anti-muerte) · Healing + Good/Agathion.
- **Milani** (CG; Chaos, Good, Healing, Liberation, Protection; Azata, Defense, Freedom, Purity, Restoration, Revolution, Riot) — [AoN] https://www.aonprd.com/DeityDisplay.aspx?ItemName=Milani — Inner Sea Faiths pg. 71. Combos: **Healing + Liberation** · Healing + Protection/Purity. No da Agathion ni Archon.
- **Qi Zhong** (NG, Tian Xia; Good, Healing, Knowledge, Magic, Protection; Agathion, Alchemy\*, Divine, Medicine\*, Memory, Purity, Restoration, Resurrection) — [AoN] https://www.aonprd.com/DeityDisplay.aspx?ItemName=Qi%20Zhong — Dragon Empires Gazetteer pg. 58. Combos: Healing + Magic/Divine (*cleanse* 5.º y *resurrection* 7.º en dominio) · Healing + Good/Agathion.
- **Korada** (NG, señor empíreo; Good, Healing, Magic, Protection; Agathion, Defense, Divine, Medicine\*, Restoration) — [AoN] https://www.aonprd.com/DeityDisplay.aspx?ItemName=Korada — ISG pg. 322.
- **Pharasma** (N; Death, Healing, Knowledge, Repose, Water; Ancestors, Flowing, Ice, Memory, Psychopomp, Resurrection, Souls, Thought; **no Restoration**) — [AoN] https://www.aonprd.com/DeityDisplay.aspx?ItemName=Pharasma — ISG pg. 116. Clérigo N de deidad N: **elige energía positiva una vez, irreversible**. Combos: Healing + Repose.
- **Irori** (LN; Healing, Knowledge, Law, Rune, Strength; Resolve, Restoration, Medicine\*…) — [AoN] https://www.aonprd.com/DeityDisplay.aspx?ItemName=Irori — ISG pg. 68.

(\* = apócrifo, requiere Acolyte of Apocrypha.)

### 3.5 Interacción con lo mítico (tier 3)

- **Mythic Domain** (tier 1) sube Aura of Heroism a **15 asaltos/día** y la recarga 1/día por 1 uso (30 asaltos de +2 moral al grupo por día). Es competitiva con Relentless Healing como tercera path ability; ver sección 7.
- **Hand of Mercy** (tier 3): toque + 1 uso de channel → quita dazed, fatigued, shaken, sickened o staggered (tier 6: cursed, exhausted, frightened, nauseated). Hace redundante el subdominio Restoration y Calming Touch. No la tomamos (Abundant Healing vale más con 4 cuerpo a cuerpo), pero es la alternativa si el GM castiga con condiciones.
- **Overflowing Grace** (tier 1): al curar con energía positiva, cada afectado que quede a pg máximos gana +1 sagrado a ataques, salvaciones, habilidades y característica por 1 minuto. Con channel al inicio del combate (todos a tope) = +1 sagrado al grupo 10 asaltos, acumulable con Heroism (moral) y Prayer (suerte).
- **Divine Source** (Universal, tier 3): concede conjuros como SLA (uno de cada nivel ≤ tier: 1.º-3.º) de dos dominios a elección. A tier 3 son 3 SLA/día (p. ej. Healing: CLW, CMW, CSW). Menor que Abundant Healing.

> **➡️ Para NUESTRA build (sección 3)**
> - **Healing (base) + Glory (subdominio Heroism)** de Sarenrae. Ronda típica de combate difícil: **rápida** Aura of Heroism (+2 moral a ataques/salvaciones/habilidades de los 4 cuerpo a cuerpo y del apoyo, 11 asaltos/día; se puede apagar y encender por asaltos) + **movimiento** Quick Channel + **estándar** Heal/BoL/buff. Es la única combinación de dominio que suma al grupo **sin gastar nuestra estándar** en cada turno.
> - Ranura de dominio diaria propuesta: 1.º Shield of Faith (+3 desvío, 11 min) · 2.º CMW (comodín) · **3.º Heroism** (110 min al tanque principal: +2 moral que no tenemos de otra forma) o CSW · 4.º CCW (comodín) o Holy Smite · **5.º Breath of Life** · **6.º Heal**. Greater Heroism (6.º) compite con Heal: solo si el día pinta de "un solo combate grande".
> - Rebuke Death: 11/día (Wis +8). Touch of Glory: +11 a una Diplomacia/Intimidación del día (el apoyo social del grupo lo hará mejor; nuestro uso es puntual).
> - **DC de subdominio** = 10 + 5 + 8 = **23** (irrelevante para Heroism; importaría con Light/Blinding Flash).
> - **Alternativa 1: Healing + Good/Agathion** (Sarenrae) si el GM anuncia una campaña de exteriores malvados/dominadores: la *protection from evil* de área 11 asaltos/día vale más que el +2 moral. Pierde Blade Barrier de dominio (lo preparamos en ranura normal).
> - **Alternativa 2: Healing + Sun** (Sarenrae) si la campaña es de no muertos: channel 8d6+11 sin channel resistance + Nimbus 11/asalto + Glory ya no (ojo: el +2 DC de Glory se pierde).
> - **Alternativa 3 (otra deidad): Healing + Liberation** con Milani (CG): Freedom's Call contra agarres/parálisis. Pierde Envoy of Healing (rasgo de Sarenrae) y Heroism.
> - Descartado: Restoration (Hand of Mercy a tier 3 y la ranura de BoL), Resurrection (pierde Healer's Blessing), Knowledge/Travel (exploración: no invertimos), apócrifos (cuestan un rasgo).

---

## 4. ARQUETIPOS DE CLERIC

### 4.1 Reglas de arquetipos que hay que citar al GM

- **Apilamiento** ([AoN] https://www.aonprd.com/Rules.aspx?ID=440 — APG pg. 72): "A character can take more than one archetype … but none of the alternate class features can replace or alter the same class feature from the core class as another alternate class feature." Quien toma una capacidad alternativa **no cuenta como si tuviera la reemplazada** para prerrequisitos.
- **"Alters" sigue siendo la capacidad original** ([AoN] https://legacy.aonprd.com/advancedClassGuide/classOptions/index.html — ACG "Selecting Archetypes"): "any alternate class feature described as altering an existing class feature otherwise functions as that original class feature, and is considered to be that class feature for the purpose of meeting any requirements or prerequisites". El channel "alterado" del Angelfire Apostle sigue valiendo para Selective/Quick/Extra Channel y para las habilidades míticas que piden channel. La misma página fija la regla de "series de mejoras retrasadas" (de ahí los 5d6/4d6 de Ecclesitheurge/Evangelist a nivel 11).
- **Retraining** ([AoN] https://www.aonprd.com/Rules.aspx?ID=1471 — UCam pg. 189): adquirir o abandonar un arquetipo cuesta **5 días por capacidad alternativa** y oro (ejemplo del libro: 10 po × nivel × día — corrección del auditor: las notas omitían el oro). Cambiar de arquetipo son dos sesiones.
- **Listado oficial:** 35 arquetipos de Cleric en [AoN] https://www.aonprd.com/Archetypes.aspx?Class=Cleric (verificado en vivo por el auditor). 🚫 **No existen** como arquetipos de Cleric: "Divine Commander" (es de **Warpriest**, ACG pg. 129 — https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Warpriest+Divine+Commander), "Devout Pilgrim" (renombre de d20pfsrd del **Varisian Pilgrim**, Inner Sea Magic pg. 42), "Shoanti Shaman" (Humans of Golarion; no indexado en AoN como arquetipo), "Hospitaler" (Paladin), "Life Oracle" (misterio de Oracle), "Holy Vindicator" (clase de prestigio, APG). Las versiones de Ecclesitheurge/Herald Caller/Crusader de los videojuegos de Owlcat están modificadas: 🚫.
- **Variant Channeling** ([AoN] https://www.aonprd.com/ClericVariantChanneling.aspx — UM pg. 28) NO es un arquetipo: se elige al crear el personaje, es irreversible y **reduce la curación del channel a la mitad** a cambio de un efecto (salvo Bravery/Valor, Revenge/Vengeance y Undeath, que no la reducen — corrección del auditor). Para un sanador de channel es casi siempre peor: 🚫 para nuestra build.

### 4.2 Fichas de los arquetipos que un sanador debe conocer (números a nivel 11)

**Merciful Healer** — UC pg. 41 — [AoN] https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Cleric%20Merciful%20Healer
- **Pierde:** el segundo dominio (Willing Healer: Healing obligatorio, la deidad debe concederlo, energía positiva obligatoria); su channel **no puede elegir a no muertos como objetivo** (no daña no muertos). **NO regala Selective Channeling** (mito muy extendido; verificado tres veces por el investigador y el auditor). Sin frases "replaces" en AoN: de facto altera *domains* y *channel energy*.
- **Gana:** **Combat Medic (Ex)**: no provoca AdO al estabilizar con Heal ni **al lanzar conjuros de curación** (healing spells) — enorme para un sanador rodeado; **Merciful Healing (Su)**: al canalizar quita condiciones a las criaturas que cura dentro del estallido — a nivel 11 tiene **3 condiciones elegidas** (de fatigued, shaken, sickened; dazed, diseased, staggered; cursed, exhausted, frightened, nauseated, poisoned) y limpia **hasta 2 criaturas** por channel (a 12: 4.ª condición y 3 criaturas); **True Healer (Su)** a 8.º: antes de tirar, elegir Merciful Healing **o** repetir los 1 (6d6: 21 → ≈23,5). Solo limpia a quien **cura** (si excluís con Selective, no limpiás).
- **Compatibilidad:** choca con casi todos (toca dominios y channel). **Costo real para nosotros:** perder Glory/Heroism (el +2 moral de acción rápida al grupo) y el ataque a no muertos con channel.

**Angelfire Apostle** — Healer's Handbook pg. 7 — [AoN] https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Cleric%20Angelfire%20Apostle
- **Pierde:** armadura media (**solo ligera**: mithral chain shirt +4 vs mithral breastplate +6 → **−2 CA**); **Diminished Spellcasting: una ranura menos por nivel** (a nivel 11, sin Wis: 1.º 3+1 / 2.º 3+1 / 3.º 3+1 / 4.º 2+1 / 5.º 1+1 / **6.º 0+1**; el extra de Wis 26+ devuelve un 6.º). Mantiene 2 dominios y cure espontáneos.
- **Gana:** **Extra Channel** gratis a 1.º (5 + Cha usos); **Channel Angelfire**: los no buenos afectados quedan **dazzled 1 asalto sin salvación**; **Versatile Healing Channel (Sp)**: 2 usos de channel → *remove blindness/deafness* o *lesser restoration* (5.º), *remove disease* / *remove paralysis* (7.º), *neutralize poison* (9.º), **breath of life (11.º)**, *heal* (13.º)…; **Cleansing Flames (Su)** a 9.º: acción rápida + 1 uso de channel al lanzar un conjuro [healing] de nivel inferior al máximo (≤ 5.º): cubos de 10 pies por nivel del conjuro (contiguos, uno adyacente a vos), **1d4 por nivel del conjuro** mitad fuego / mitad divino, Reflejos (DC del conjuro) mitad, Cha usos/día — Mass CLW (5.º) → 5d4 (12,5) en cinco cubos, DC 23.
- **Compatibilidad:** no toca dominios → apila con **Theologian** y **Divine Paragon**. **Costo real:** −5 conjuros/día y −2 CA en combates muy difíciles.

**Herald Caller** — Monster Summoner's Handbook pg. 7 — [AoN] https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Cleric%20Herald%20Caller
- **Pierde:** un dominio, armadura media y escudos; 4 + Int rangos. Channel 6d6 intacto. Call Heralds: convierte conjuros preparados en *summon monster* ≤ nivel; Augment Summoning gratis (4.º; cuenta como Spell Focus (conjuration) **solo** para dotes que exijan Augment Summoning — corrección del auditor), Superior Summoning (8.º); su channel cura a sus invocados a cualquier distancia. ⚠️ **Cure espontáneos:** el texto de AoN no dice que Call Heralds reemplace el spontaneous casting (RAW los conserva, frente 03); el frente 09 lo marca como pérdida probable; **decisión del GM**. Veredicto del crítico: irrelevante para nuestra build, porque pierde armadura media y un dominio (incompatible con "supervivencia propia").

**Ecclesitheurge** — ACG pg. 91 — [AoN] https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Cleric%20Ecclesitheurge
- **Pierde:** toda armadura y escudo (voto), competencias marciales, **1d6 de channel (5d6 a nivel 11)**. **Gana:** Domain Mastery (prepara el dominio primario en ranuras normales; cambia a diario la lista del secundario), Bonded Holy Symbol (1/día un conjuro no preparado, como el objeto vinculado del mago; reemplazo 200 po × nivel, 8 h y solo tras 1 semana), Blessing of the Faithful (+2 sagrado a una categoría, estándar; 5 asaltos por 1 uso de channel). El rey de la utilidad; 🚫 para "supervivencia propia" (sin armadura).

**Evangelist** — UC pg. 40 — [AoN] https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Cleric%20Evangelist
- **Pierde:** un dominio, armadura media y escudo, **los cure espontáneos** (convierte a command/enthrall/tongues/suggestion/greater command/geas), y channel cae a **4d6** a nivel 11 (tope 7d6). **Gana:** Sermonic Performance = bardic performance (Inspire Courage **+3** competencia a ataque y daño, acción de movimiento, 24 + Cha asaltos/día). 🚫 para un sanador excelente: sin cure espontáneos hay que preparar cada cure.

**Cloistered Cleric** (UM pg. 31): armadura ligera, sin escudo, 1 dominio, −1 ranura/nivel; Knowledge (todas) +5, Scribe Scroll, Verbal Instruction. **Theologian** (UM pg. 32): 1 dominio con poderes a +2 niveles (Rebuke Death 1d4+6), conjuros de dominio en ranuras normales (no convertibles), Domain Secret (2 metamagias fijas gratis a nivel 11: Silent/Still/Extend… sin Reach). **Divine Paragon** (DA pg. 15): Deific Obedience gratis con boons acelerados (5.º/11.º/14.º), alineamiento idéntico a la deidad, del segundo dominio solo los conjuros. **Separatist** (UM pg. 32): Healing con una deidad que no lo concede (poderes a −2 niveles/Wis). **Stoic Caregiver** (HH pg. 6): 1 dominio; Midwife Training (−5 al daño de energía negativa a quien cure, 5 min), Three-Aspect Channel. **Sacred Attendant / Blossoming Light**: sin armadura (🚫). **Crusader** (UC pg. 40): Diminished Spellcasting, 3 dotes de combate, Legion's Blessing (un conjuro de toque de ≤ 3.º a 5 aliados quemando otro 3 niveles superior). **Varisian Pilgrim** (ISM pg. 42): poderes de dominio a 30 pies sobre 11 + Wis compañeros, pero exige Chaos/Community/Liberation/Luck/Travel/Weather y pierde armadura media (Sarenrae no califica). **Descartados sin discusión:** Divine Strategist / Divine Scourge / Foundation of Faith / Forgemaster (sin channel), Cardinal / Iron Priest / Crashing Wave / Elder Mythos Cultist / Channeler of the Unknown (tocan el spontaneous casting), Idealist (channel que no cura), Undead Lord, Fiendish Vessel, Demonic Apostle, Asmodean Advocate, Appeaser (malignos/negativos).

### 4.3 Comparativa a nivel 11 (Cha 14 → 5 usos; Healing entre los dominios)

| Criterio | **Cleric base** | Merciful Healer | Angelfire Apostle | Herald Caller | Ecclesitheurge | Evangelist |
|---|---|---|---|---|---|---|
| Channel (dados / usos) | **6d6 / 5** | 6d6 / 5 (no a no muertos) | 6d6 / **7** (+dazzle) | 6d6 / 5 | 5d6 / 5 | 4d6 / 5 |
| Cure espontáneos | sí | sí | sí | ⚠️ RAW sí (GM) | sí | **no** |
| Ranuras no-dominio 1.º-6.º (sin Wis) | 4/4/4/3/2/1 | 4/4/4/3/2/1 | **3/3/3/2/1/0** | 4/4/4/3/2/1 | 4/4/4/3/2/1 | 4/4/4/3/2/1 |
| Dominios (poderes) | **2** | 1 (Healing) | 2 | 1 | 2 (+ listas) | 1 |
| Armadura / CA con +1 mithral breastplate y escudo | **media + escudo (CA 24)** | media + escudo | ligera + escudo (−2) | ligera, sin escudo (−5) | ninguna (−10) | ligera, sin escudo |
| "Cuando no hay nada que curar" | Aura of Heroism (rápida) + conjuros | igual pero sin 2.º dominio | Cleansing Flames (rápida) | SM I-VI espontáneo | Blessing of the Faithful | Inspire Courage +3 |
| Compatibilidad mítica (Hierophant) | completa | completa | completa (+ usos) | completa | 5d6 | reducida |
| Costo para NUESTROS parámetros | — | Heroism y channel vs no muertos | 5 conjuros/día y 2 CA | armadura media, escudo, dominio | armadura, 1d6 | cure espontáneos, armadura, 2d6 |

### 4.4 Combos oficiales legales (no tocan la misma capacidad)

1. **Angelfire Apostle + Theologian** (Healing único a +2 niveles; cure en cualquier ranura; −1 ranura/nivel; 7 channels; BoL por channels).
2. **Angelfire Apostle + Divine Paragon** (boons de Sarenrae a 5.º/11.º/14.º; obediencia diaria obligatoria).
3. Todo lo demás relevante (Merciful Healer, Ecclesitheurge, Herald Caller, Cloistered, Evangelist, Crusader, Varisian Pilgrim) **va solo**.

> **➡️ Para NUESTRA build (sección 4)**
> - **Recomendación: SIN arquetipo.** Con los parámetros confirmados (combates muy difíciles, supervivencia propia prioritaria, 4 cuerpo a cuerpo, nada de trampas) el clérigo base es el mejor sanador: **2 dominios (Healing + Glory/Heroism), armadura media + escudo, 6d6, todas las ranuras, cure espontáneos y compatibilidad mítica completa.** Ningún arquetipo suma más de lo que quita: Merciful Healer nos cuesta Aura of Heroism; Angelfire nos cuesta 5 conjuros/día y 2 puntos de CA; Herald Caller/Ecclesitheurge/Evangelist nos cuestan la armadura.
> - **Alternativa 1 (si el GM avisa que la campaña castiga con condiciones — fatiga, náusea, enfermedad, miedo — y hay pocos no muertos): Merciful Healer.** Combat Medic (curar rodeados sin AdO) es la mejor defensa que un sanador puede tener en combates difíciles; Merciful Healing limpia 2 criaturas por channel. Se compensa la pérdida de Heroism con Bless/Prayer; no se pierde nada de conjuros ni de armadura. Requiere igualmente comprar Selective Channeling.
> - **Alternativa 2 (si el GM permite Healer's Handbook y el grupo va sobrado de CA para el clérigo): Angelfire Apostle**, por los 7 channels, Breath of Life por 2 usos de channel (sin ranura) y Cleansing Flames como "castigo" en cada Mass CLW. No con Diminished Spellcasting si el jugador quiere el máximo de buffs.
> - Descartados por parámetros: Herald Caller (armadura media + dominio; el rol de invocador se cubre mejor con Sacred Summons o Divine Guardian, sección 8), Ecclesitheurge y todo lo sin armadura, Evangelist (sin cure espontáneos), los que pierden channel y Variant Channeling.
> - Nota mítica: sin arquetipo, todas las habilidades del Hierophant que gastan channel o dependen de dominios (Mythic Domain, Hand of Mercy, Contingent Channel Energy, Life Current, Conduit of Divine Will) siguen disponibles.

---

## 5. DOTES Y RASGOS (INCLUIDOS DRAWBACK Y RASGOS DE CAMPAÑA)

### 5.1 Cuántas dotes y cuántos rasgos tenemos

- **Dotes normales: 6** (niveles 1, 3, 5, 7, 9, 11) — [AoN] https://aonprd.com/Rules.aspx?ID=85 — CRB pg. 30, Table 3-1. Un humano suma 1 a nivel 1 ("Humans select one extra feat at 1st level" — [AoN] https://www.aonprd.com/RacesDisplay.aspx?ItemName=Human — CRB pg. 27); el aasimar NO. Hero Points **no** dan la dote extra de Antihero (el jugador eligió Hero Points; APG pg. 324 — [AoN] https://www.aonprd.com/Rules.aspx?ID=449).
- **Dotes míticas: 2 a tier 3** (tier 1 y 3; "one mythic feat or non-mythic feat as a bonus feat. You must qualify for this feat normally" — [AoN] https://www.aonprd.com/Rules.aspx?ID=1618 — MA pg. 12). Solo se eligen ahí (o con Extra Mythic Feat, Universal). Sección 7.
- **Rasgos: 2 + 1 por el drawback = 3**, de listas distintas ("you may not select more than one from the same list of traits (the four basic traits each count as a separate list…)" — [AoN] https://www.aonprd.com/Rules.aspx?ID=450 — APG pg. 326; "If you choose to take a drawback, you can take a third trait" — [AoN] https://legacy.aonprd.com/ultimateCampaign/characterBackground/traits.html — UCam pg. 64; "Select two traits (or three traits and a drawback)" — [AoN] https://www.aonprd.com/Rules.aspx?ID=1222 — UCam pg. 8). Los bonos de rasgo no se acumulan entre sí. **Additional Traits** (APG pg. 150 — [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Additional%20Traits) da 2 más de listas no usadas.
- **Regla general de repetición** ([AoN] https://legacy.aonprd.com/coreRulebook/feats.html — CRB pg. 112): "If a character has the same feat more than once, its benefits do not stack unless indicated otherwise in the description." → **Extra Channel se toma UNA vez** (sin cláusula Special de repetición; FAQ 2011: "exactly two extra uses per day" — veredicto del crítico #2).

### 5.2 Imprescindibles (numeradas por prioridad)

| # | Dote | Fuente / URL | Prerrequisitos | Qué hace a nivel 11 |
|---|---|---|---|---|
| 1 | **Selective Channeling** | CRB pg. 132 — [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Selective%20Channeling | **Cha 13**, channel energy | Excluye hasta **mod. Cha** criaturas del estallido (Cha 14 → 2; 16 → 3). FAQ jul-2011: **hay que ver o tocar a la criatura excluida**; señalar la casilla de un invisible no basta (crítico #3). Sin ella, con 4 cuerpo a cuerpo trabados, cada channel cura a los enemigos. |
| 2 | **Quick Channel** | UM pg. 154 — [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Quick%20Channel | **Knowledge (religion) 5 rangos**, channel energy | "You may channel energy as a move action by spending 2 daily uses". **Acción de MOVIMIENTO, no rápida** (error frecuente de guías). Estándar (1 uso) + movimiento (2 usos) = 12d6 (42) / 16d6 (56 con Phylactery) a todos los aliados en un asalto por 3 usos; o Heal + channel en el mismo turno. Sin versión mítica. |
| 3 | **Extra Channel** | CRB pg. 123 / ACG pg. 146 — [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Extra%20Channel | channel energy | +2 usos/día (5 → 7 con Cha 14) = una ronda doble más de Quick Channel o dos Reactive Healing. **Una sola vez** (RAW + FAQ). |
| 4 | **Reactive Healing** | ACG pg. 155 — [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Reactive%20Healing | **Quick Channel** o Quicken Spell; channel energy o lay on hands | "When the damage from an attack or an effect would reduce you to 0 or fewer hit points, you can expend one use of channel energy … as an immediate action to heal yourself. The healing affects only you". 6d6/8d6 (21/28) como inmediata para no caer. El seguro de vida del único sanador. |
| 5 | **Divine Interference** | UM pg. 149 — [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Divine%20Interference | lanzador divino, **CL 10** | Acción inmediata cuando un enemigo a 30 pies **acierta** a un aliado: sacrificás un conjuro preparado de nivel N y el enemigo **repite el ataque con −N** (una vez por criatura y día). Sacrificar un 4.º = −4; **Mythic Divine Interference** (MA pg. 63): −2N (−8), y con 1 uso de poder mítico −3N (−12). Es "curación negativa": el crítico que iba a matar al DPS no ocurre. |
| 6 | **Toughness** | CRB pg. 135 — [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Toughness | — | +3 y +1 por DG sobre 3 → **+11 pg** a nivel 11. **Mythic Toughness** (MA pg. 75): ×2 (+22) y **RD 10/epic por debajo de 0 pg**. |

### 5.3 Muy buenas (compiten por las últimas plazas)

- **Combat Casting** (CRB pg. 119 — [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Combat%20Casting): +4 a concentración defensiva/agarrado. Concentración = CL 11 + Wis 8 = **+19**; lanzar a la defensiva DC 15 + 2 × nivel ([AoN] https://www.aonprd.com/Rules.aspx?Name=Casting%20Spells&Category=Magic — CRB pg. 206: "DC 15 + double the level of the spell"; Heal DC 27, BoL DC 25, CCW DC 23): con +19, Heal necesita 8+ (65 %); +21 (Focused Mind) 6+ (75 %); +23 (+ Combat Casting) 4+ (85 %); +25 (+ Warrior Priest) 2+ (95 %). Con **Faith's Reach** (30 pies) rara vez estamos amenazados: por eso queda fuera de la lista principal.
- **Warrior Priest** (UM pg. 159 — [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Warrior%20Priest): +1 iniciativa, +2 concentración defensiva; mítica +½ tier a ambos (acumulable).
- **Improved Initiative** (CRB pg. 127): +4; mítica +tier y 1 uso → 20 natural en iniciativa. Curar antes del segundo golpe.
- **Iron Will / Great Fortitude / Lightning Reflexes** (CRB): +2; las míticas (MA pg. 68/66/68) tiran dos veces contra conjuros/Sp/Su de fuente **no mítica** (no vs. venenos, trampas ni Ex).
- **Reach Spell** (APG pg. 168 — [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Reach%20Spell): +1 nivel por categoría; CCW → 5.º y BoL → 6.º a 50 pies; Heal → 7.º ✗. **Redundante con Faith's Reach** (30 pies gratis); si no se toma Faith's Reach, es imprescindible (o la Rod of Reach lesser, 3.000 po, ≤ 3.º).
- **Channeled Revival** (UC pg. 92 — [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Channeled%20Revival): requiere channel 6d6 positivo (justo a nivel 11); asalto completo que provoca, 3 usos de channel → Breath of Life sin ranura; FAQ 2013: alcance = el del channel (30 pies). Redundante con Relentless Healing (tier 1).
- **Channel Ray** (Ranged Tactics Toolbox pg. 12): rayo de 30 pies × dado (**180 pies**) a un solo objetivo, DC +2. Player Companion; situacional.
- **Sacred Summons** (UM pg. 155 — [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Sacred%20Summons): Summon Monster como **acción estándar** si los subtipos de alineamiento coinciden **exactamente** con el aura. Aura "good" (Sarenrae NG) → **solo agathiones** (subtipo [good] a secas): silvanshee (SM III), y con Summon Good Monster vulpinal/avoral… **No** azatas [chaotic, good] ni arcontes [lawful, good] (crítico #5). Sección 8.
- **Spell Focus (conjuration) + Augment Summoning + Superior Summoning**: solo para la variante invocadora (sección 8).
- **Healer's Hands** (Planar Adventures pg. 28 — [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Healer%27s%20Hands; Campaign Setting: pedir permiso): Heal 1 rango, Knowledge (planes) 1 rango; Treat Deadly Wounds como **asalto completo**, sin botiquín, varias veces por criatura, usos/día = rangos en Kn (planes); si superás la DC (20) por 10 sumás esos rangos. Con Heal a 11 rangos (+22) tomando 10 = 32: 11 (nivel del aliado) + 8 (Wis, por superar por 5) + rangos Kn (planes) = **19 + rangos** por uso, gratis. No sirve sobre no muertos/constructos. Exige 11 rangos en Kn (planes) para 11 usos (sección 11: no nos alcanzan los rangos sin Int 12).
- **Signature Skill (Heal)** (Unchained pg. 82 — [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Signature%20Skill; desbloqueo en https://www.aonprd.com/Skills.aspx?ItemName=Heal): 10 rangos → Treat Deadly Wounds cura "as if it had rested for a full day with long-term care". ⚠️ AoN no fija "2 pg/nivel": según Healing (CRB pg. 191) un día de reposo con cuidados es 2 pg/nivel (8 h) o 4 pg/nivel (día completo), y si se suma al Treat Deadly Wounds base es criterio del GM (corrección del auditor). Solo vale junto a Healer's Hands.
- **Craft Wondrous Item** (CRB pg. 120): objetos a mitad de precio si el GM da tiempo muerto (Phylactery 5.500 po en 11 días; requisito "creator must be a 10th-level cleric": cumplido). Sección 9.
- **Deific Obedience** (ISG pg. 210 / Faiths of Golarion pg. 4 — [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Deific%20Obedience): Kn (religion) 3; obediencia diaria ≤ 1 h; **boons recién a 12/16/20 DG**. A nivel 11 solo el beneficio base (Sarenrae: sección 10). Buena desde 12.
- **Leadership** (CRB pg. 129): nivel 7; cohorte de nivel 9. La más fuerte si el GM la permite; casi siempre vetada.

### 5.4 Situacionales

Alignment Channel / Elemental Channel (CRB; contra exteriores de un subtipo: en una campaña de demonios pasa a muy buena; mítica afecta a cualquier criatura del alineamiento), Turn Undead (CRB; mítica destruye 2d4 DG/tier), Heighten / Persistent / Dazing / Bouncing Spell (rol de control; Dazing Sound Burst → 5.º), Spell Penetration, Evolved Summoned Monster, Boon Companion (dominio Animal), Divine Fighting Technique (Sarenrae tiene **Sarenrae's Mercy**, DA pg. 30 — [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Divine%20Fighting%20Technique: cimitarra sin penalización por daño no letal; beneficio avanzado: recuperás 1d6/2d6 pg al golpear con daño no letal — solo para la variante de batalla), Cosmopolitan (Perception/UMD de clase; Seeker lo hace más barato), Skill Focus (Heal) (solo con Healer's Hands), Merciful Spell, Curative Mastery, Contingent Spell (HH pg. 14: CCW latente en el tanque, +2 niveles), Scribe Scroll / Craft Wand (con tiempo muerto), Fey Foundling (ISWG pg. 286; **solo a nivel 1**, solo te cura a vos: +2 por dado recibido → tu propio channel 6d6 +12; **Heal +0**; el aasimar no tiene dote extra para pagarla), Defiant Luck (ARG pg. 77; solo humanos; 1/día repetir salvación con 1 natural o hacer repetir un crítico; Special: gastar 1 Hero Point para forzar repetir la confirmación de un crítico).

### 5.5 Trampas (para este personaje)

- **Empower Spell** (CCW empoderada 43,5 en ranura de 6.º frente a Heal 110 en la misma ranura; y **no se acumula con Healer's Blessing**), **Maximize Spell** (CSW 35 en 6.º), **Quicken Spell a nivel 11** (solo acelera 1.º-2.º; Quickened CMW = 19 pg en un 6.º), **Extend Spell** (comprar la Rod of Extend lesser, 3.000 po).
- **Improved Channel** y rasgo **Sacred Conduit**: solo suben la DC ofensiva; curar no tiene salvación.
- **Divine Protection** (ACG pg. 144 — [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Divine%20Protection): **errateada** (2.ª impresión 2015): ahora "Once per day as an immediate action before rolling a saving throw, you can add your Charisma modifier". Si alguien la vende como "Cha a todas las salvaciones", es el texto viejo (🚫 no está en AoN).
- **Steadfast Personality** (Cha en vez de Wis: nunca para un clérigo), **Fast Healer** y **Heroic Recovery** (3 dotes cada una), **Combat Medic** (dote de trabajo en equipo, UC pg. 91: nadie más la tomará), **Channeled Shield Wall** (desvío: no se acumula con Ring of Protection), **Versatile Channeler** (solo clérigos neutrales), **Believer's Boon**, **Eldritch Heritage (celestial)**, **Improved Improvisation**, **Lifebound**, **Spell Perfection** (nivel 15), **Blood of Heroes / Luck of Heroes** (sección 11), rasgos **Magical Knack** (CL ya al máximo), **Caretaker**, **Sacred Touch**, **Precise Treatment / Pragmatic Activator / Clever Wordplay** (Int).
- 🚫 **Sacred Geometry**: baneada por el GM (además de ser la dote más discutida de Occult Adventures).

### 5.6 Dotes que NO existen en AoN (para desmentir en la mesa)

"Blessed Hands", "Deity's Favor", "Selective Channel" (sin -ing), "Merciful Healing" como dote (es aptitud del arquetipo), "Mythic Empower/Maximize/Quicken/Extend/Heighten/Reach Spell", "Mythic Extra Channel", "Mythic Quick Channel", "Mythic Combat Casting", "Mythic Fey Foundling" (verificado por el auditor en el índice completo de dotes y en la lista de 162 dotes de Mythic Adventures). "Healer's Hands" existe pero en **Planar Adventures**, no en Healer's Handbook. 🚫 Cualquier "Mythic Empower Spell" que circule es de Legendary Games (3PP).

### 5.7 Rasgos: candidatos verificados por lista

| Rasgo | Lista | Fuente / URL | Texto | Valor para nosotros |
|---|---|---|---|---|
| **Reactionary** | Combat | UCam pg. 53 / APG pg. 328 — [AoN] https://www.aonprd.com/TraitDisplay.aspx?ItemName=Reactionary | +2 rasgo a iniciativa | Imprescindible: iniciativa +2 (Dex) +2 +3 (Amazing Initiative, tier 3) = **+7**. |
| **Focused Mind** | Magic | UCam pg. 57 / APG pg. 329 — [AoN] https://www.aonprd.com/TraitDisplay.aspx?ItemName=Focused%20Mind | +2 rasgo a concentración | Heal a la defensiva 65 % → 75 %. (Desperate Focus, Cheliax pg. 19, es idéntico.) |
| **Birthmark** | Faith | UCam pg. 54 / APG pg. 328 — [AoN] https://www.aonprd.com/TraitDisplay.aspx?ItemName=Birthmark | Foco divino incorporado (solo conjuros; no menciona channel) y +2 rasgo a salvaciones vs charm/compulsion | Will +18 → +20 contra Dominate: el sanador dominado es la peor pesadilla del grupo. Alternativa de igual valor a Focused Mind (distinta lista). |
| **Fate's Favored** | Faith | UCam pg. 55 — [AoN] https://www.aonprd.com/TraitDisplay.aspx?ItemName=Fate%27s%20Favored | "Whenever you are under the effect of a luck bonus of any kind, that bonus increases by 1." | Hero Point Bonus **+9/+5**; Prayer +2 sobre vos; Divine Favor +4. **No mejora Bit of Luck** (no es bono de suerte). Solo gana si se lanza Prayer cada combate y se llevan luckstone/jingasa. |
| **Blessed Touch** | Faith | Champions of Purity pg. 7 — [AoN] https://www.aonprd.com/TraitDisplay.aspx?ItemName=Blessed%20Touch | +1 pg por channel o cure | Con 5 objetivos y ronda doble: +10 pg/asalto. Compite en Faith con Birthmark. |
| **Envoy of Healing** | Religion (Sarenrae) | HH pg. 12 — [AoN] https://www.aonprd.com/TraitDisplay.aspx?ItemName=Envoy%20of%20Healing | Repetir los 1 al curar con channel | 6d6: 21 → ≈23,5; 8d6: 28 → ≈31,3 a cada aliado, cada channel. Solo con Sarenrae; no afecta cure ni Heal. |
| **Seeker** | Social | UCam pg. 61 (solo; no APG — corrección del auditor) — [AoN] https://www.aonprd.com/TraitDisplay.aspx?ItemName=Seeker | +1 Perception y **de clase** | Perception +21 → +25 con 11 rangos. Con 4 cuerpo a cuerpo acorazados, somos la alarma del grupo. Sin trampas que buscar, es "solo" no ser sorprendidos. |
| **Indomitable Faith** | Faith | UCam pg. 55 | +1 Will | Peor que Birthmark. |
| **Acolyte of Apocrypha** | Faith | DA pg. 22 — [AoN] https://www.aonprd.com/TraitDisplay.aspx?ItemName=Acolyte%20of%20Apocrypha | Habilita un subdominio apócrifo (Medicine para Sarenrae) | Solo para la variante de habilidad Heal. |
| **Exalted of the Society** | Faith | Shattered Star PG pg. 5 / Faction Guide pg. 62 | +1 uso de channel | Exige pertenecer a la Pathfinder Society: ⚠️ permiso del GM (rasgo de facción/campaña). |
| **Trap Finder** | Campaign (Mummy's Mask) | Mummy's Mask PG pg. 10 | Disable Device de clase y trampas mágicas | 🚫 Descartado: el jugador no invierte en trampas y es rasgo de campaña ajena. |
| **Wisdom in the Flesh** | Religion (Irori) | UCam pg. 64 | Wis en una habilidad física | Solo con Irori. |

**Drawback** ([AoN] https://www.aonprd.com/Traits.aspx?Type=Drawback — 66 en AoN: Quests & Campaigns 23, UCam 17, Spymaster's Handbook 12, Antihero's Handbook 10, Champions of Corruption 3, Blood of the Coven 1). Los cinco de menor costo para un sanador que no usa Bluff/Disguise/Stealth: **Scarred** (Antihero's Handbook pg. 6: −5 Disguise, −2 Bluff), **Vainglory** (Spymaster's pg. 7: −1 Bluff/Disguise/Stealth, −1 DC de ilusiones), **Guilty Fraud** (Spymaster's pg. 7: −4 Bluff vs indiferentes o mejores), **Foul Brand en la mano** (Champions of Corruption pg. 29: −1 Disable Device/Disguise/Sleight of Hand; no sirve como foco), **Umbral Unmasking** (sin sombra; sin penalización numérica; el más vetado). Opción "honesta" de costo real si el GM exige mordida: **Provincial** (UCam pg. 65: −2 Diplomacy y Sense Motive vs otra religión/alineamiento). **Descartados** por tocar lo que nos mata: Helpless (dazed cuando cae un aliado: catastrófico), Attached/Empty Mask/Power-Hungry (Will), Haunting Regret/Occult Bargain (concentración), Loner (−1 CA adyacente a aliados), Lovesick (iniciativa), Sheltered/Headstrong/Dependent (shaken), Superstitious (50 % de tener que salvar contra los buffs **de otros**; no contra los propios).

### 5.8 Secuencias de dotes propuestas (niveles 1/3/5/7/9/11; sin dote de humano)

**(A) Sanador de supervivencia (NUESTRA build):** 1 Selective Channeling · 3 Extra Channel · 5 Quick Channel (Kn religion 5 ✓) · 7 Reactive Healing · 9 Toughness · 11 Divine Interference (CL 10 ✓). Míticas: tier 1 **Mythic Spell Lore** (Heal, Breath of Life, Cure Critical Wounds; se puede retomar para 3 más); tier 3 **Extra Path Ability** (→ Mythic Domain: Aura of Heroism 15 asaltos + recarga; ver sección 7) — alternativa: Mythic Selective Channeling. Rasgos: Reactionary (Combat) + Envoy of Healing (Religion) + Focused Mind (Magic) [o Birthmark (Faith)] + drawback Scarred.

**(B) Sanador + invocador (si el GM confirma pocas ranuras de utilidad ajenas):** 1 Selective Channeling · 3 Spell Focus (conjuration) · 5 Quick Channel · 7 Augment Summoning · 9 Sacred Summons (solo agathiones con aura good) · 11 Extra Channel o Divine Interference. Míticas: Mythic Spell Lore; Mythic Augment Summoning o Extra Path Ability.

**(C) Sanador de batalla (arma predilecta, Wis al ataque):** 1 Selective Channeling · 3 Channel Smite · 5 Guided Hand (UC pg. 103: Wis al ataque con el arma de la deidad) · 7 Quick Channel · 9 Reactive Healing · 11 Divine Interference. Míticas: Mythic Guided Hand (Wis al daño), Mythic Selective Channeling. Rasgos: Reactionary + Fate's Favored (Divine Favor +4) + Focused Mind. Ataque +8/+3 + 8 (Wis) + 1 (arma) = +17/+12; con Divine Favor +4 → +21/+16.

> **➡️ Para NUESTRA build (sección 5)**
> - **Dotes (6):** Selective Channeling (1) · Extra Channel (3) · Quick Channel (5) · Reactive Healing (7) · Toughness (9) · Divine Interference (11). Todas cumplen prerrequisitos con Cha 14, Kn (religion) 5 rangos y CL 11. Nada de metamagia: Healer's Blessing + varas + Inspired Spell cubren lo que haría falta.
> - **Dotes míticas (2):** tier 1 Mythic Spell Lore (Heal, Breath of Life, Cure Critical Wounds — o Blade Barrier en lugar de CCW si el rol secundario es control); tier 3 Extra Path Ability → Mythic Domain (justificación en 7.6). Mythic Toughness a tier 5 y Mythic Divine Interference a tier 7 son las siguientes.
> - **Rasgos (3 + drawback):** **Reactionary** (Combat, +2 iniciativa) · **Envoy of Healing** (Religion — Sarenrae; ≈+2,5/+3,3 por channel a cada aliado) · **Focused Mind** (Magic, +2 concentración) — con **Birthmark** (Faith) como sustituto de igual valor si el GM abusa de Dominate/charm (y en ese caso el foco divino también queda cubierto por el rasgo para conjuros; para channel seguimos con el tatuaje). Drawback: **Scarred** (llevar Provincial como alternativa de costo real). Ningún rasgo es de campaña.
> - **Números que dependen de las dotes:** channel 7 usos/día; ronda estándar + Quick Channel; Reactive Healing 8d6 al llegar a 0; Divine Interference −4 (mítica −8/−12) sacrificando un 4.º; pg +11 por Toughness (**120** con Con 16, clase predilecta a pg y Hierophant +12).
> - **Descartados con motivo:** Reach Spell (Faith's Reach), Channeled Revival (Relentless Healing), Combat Casting (nos mantenemos a 30 pies; Focused Mind cubre el resto), Healer's Hands (Campaign Setting + 11 rangos en Kn planes que no tenemos: sección 11), Fey Foundling (solo nivel 1 y solo nos cura a nosotros), Sacred Geometry (baneada), dotes de Hero Point (sección 11), Trap Finder (sin trampas).

---

## 6. CONJUROS CLAVE POR NIVEL (0-6)

Convenciones: CL 11; "close" = 25 + 5 × (11/2 = 5) = **50 pies** (crítico #8: no 55); "medium" = 100 + 10 × 11 = **210 pies**; "long" = 400 + 40 × 11 = **840 pies**. DC = 10 + nivel + 8 (Wis 27): **18 / 19 / 20 / 21 / 22 / 23 / 24** (0.º-6.º). Ranuras totales de nuestra build (base + dominio + Wis 27): **4 / 7 / 7 / 7 / 6 / 4 / 3**. Fuente por defecto: la página de cada conjuro en AoN (`https://www.aonprd.com/SpellDisplay.aspx?ItemName=<Nombre>`; Summon Monster con numeral arábigo), libro y página como indica AoN. Lista completa de clase: [AoN] https://www.aonprd.com/Spells.aspx?Class=Cleric (⚠️ se trunca al leerla por WebFetch a partir de 4.º-5.º: para negar que un conjuro sea de clérigo hay que abrir su página).

### 6.1 Regla de oro de preparación

**Nunca se prepara un cure fuera de la ranura de dominio.** Cualquier ranura normal de 1.º-6.º se convierte al lanzar en CLW / CMW / CSW / CCW / Mass CLW (5.º) / Mass CMW (6.º) ([AoN] Cleric — CRB pg. 38). Lo que SÍ hay que preparar (no lleva "cure" en el nombre): **Breath of Life, Heal, Restoration, Lesser Restoration, Remove Blindness/Deafness, Remove Curse, Remove Disease, Remove Paralysis, Remove Fear, Neutralize Poison, Delay Poison, Death Ward, Freedom of Movement, Break Enchantment, Raise Dead**. Con Inspired Spell (tier 1) cualquiera de ellos de ≤ 6.º y de 1 acción estándar se puede lanzar sin haberlo preparado por 1 uso de poder mítico: eso reduce cuántos "seguros" hay que preparar cada día.

### 6.2 Nivel 0 (orisons, 4; no se gastan)

Detect Magic (cono 60 pies, concentración) · **Guidance** (+1 competencia a una tirada) · Light · **Stabilize** (close 50 pies; estabiliza a una criatura a −1 o menos sin tirada — CRB pg. 348: el orison de emergencia a distancia) · Create Water · Purify Food and Drink · Mending · Virtue (1 pg temporal) · Read Magic · Vigor (Orcs of Golarion pg. 28: +1 competencia a un daño cuerpo a cuerpo; no es curación).

### 6.3 Nivel 1 (7 ranuras)

| Conjuro | Fuente | Números a CL 11 | Uso |
|---|---|---|---|
| **Shield of Faith** | CRB pg. 342 | toque, **+3 desvío** (2 +1/6 niveles), 11 min; mítica + ½ tier (+1 a tier 3 → +4) | CA propia o del tanque; pisa al Ring of Protection (desvío). |
| **Protection from Evil** | CRB pg. 327, [good] | toque, 11 min; +2 desvío/+2 resistencia vs malvados; nueva salvación con +2 vs control mental e **inmunidad a nuevos intentos de posesión/control** de fuentes malvadas; bloquea el contacto de invocados malvados; mítica +4 y daño de retroalimentación | La defensa n.º 1 contra Dominate para el DPS. Communal (2.º) para el grupo. |
| **Bless** | CRB pg. 249 | 50 pies, +1 moral ataques y vs miedo, 11 min; mítica también a daño y a todas las salvaciones + una tirada doble por aliado | No se acumula con Heroism/Heroes' Feast (moral). Con Aura of Heroism activa, Bless sobra. |
| **Divine Favor** | CRB pg. 273 | personal, 1 min, **+3 suerte** ataque/daño (+4 con Fate's Favored); mítica también a salvaciones y habilidades o lanzable a otro | Solo si pegamos. |
| **Remove Fear** | CRB pg. 332 | close, **3 criaturas** (1 + 1/4 niveles), +4 moral vs miedo 10 min y suprime un miedo activo | Contra dragones/aullidos. |
| **Liberating Command** | UC pg. 230, V | acción **inmediata**, close; el aliado hace Escape Artist con **+22** (2 × CL) como inmediata para escapar de una presa | El "anti-grapple" de bolsillo por una ranura de 1.º. |
| **Sanctuary** | CRB pg. 336 | toque, 11 asaltos, Will niega (DC 18); el protegido no puede atacar pero **sí curar y buffear**; mítica: cada curado gana sanctuary 1 asalto | Sobre nosotros cuando nos apuntan. |
| **Endure Elements / Comprehend Languages / Ant Haul / Deadeye's Lore / Ears of the City / Air Bubble / Remove Sickness / Deathwatch** | CRB / APG / UC / HotS | 24 h / 110 min / 22 h / 11 h / 11 asaltos / 11 min / — / 11 min | Utilidad de viaje; Deathwatch = triage instantáneo (quién está moribundo). |
| **Celestial Healing** | Arcane Anthology pg. 13, [good] | 1 asalto de lanzamiento, curación rápida 1 durante 1 round/2 levels = **5 asaltos** = 5 pg | Inútil. 🚫 Infernal Healing ([evil], ISWG pg. 295): un clérigo bueno no puede lanzarlo. |

### 6.4 Nivel 2 (7 ranuras)

| Conjuro | Fuente | Números | Uso |
|---|---|---|---|
| **Protection from Evil, Communal** | UC pg. 240 | toque, 11 min repartidos en bloques de 1 min (4 aliados: 3/3/3/2) | Antes del jefe encantador. |
| **Lesser Restoration** | CRB pg. 334 | **3 asaltos** de lanzamiento, toque; disipa un efecto mágico que reduzca una característica **o** cura 1d4 de daño temporal de una característica (una u otra — corrección del auditor); quita fatiga; exhausto → fatigado; sin coste | Fuera de combate. Varita a CL 1 = 750 po (crítico #10: la línea de nivel incluye paladin 1) con el mismo efecto. |
| **Shield Other** | CRB pg. 342 | close, 11 h, F: dos anillos de platino de 50 po; el objetivo +1 desvío/+1 resistencia y **recibe solo la mitad del daño de pg; el resto lo recibís vos**; termina si salís de 50 pies; mítica: alcance largo y restás tu tier al daño transferido | Solo sobre el DPS más frágil, y solo con pg de sobra: con 120 pg y combates muy difíciles es un riesgo real para el único sanador. |
| **Status** | CRB pg. 349 | toque, **3 aliados** (1/3 niveles), 11 h; dirección, distancia y condición | La "pantalla de grupo" de todo el día. |
| **Remove Paralysis** | CRB pg. 332 | **close (50 pies)**, hasta 4 criaturas; 1: niega parálisis y staggered mágico; 2: repiten con +4; 3-4: con +2 | Contra ghouls/hold person. |
| **Delay Poison** | CRB pg. 265 | toque, **11 h**; inmune al veneno mientras dure (no cura lo ya hecho); Communal (UC pg. 227, cleric 3) en bloques de 1 h | Preventivo. |
| **Silence** | CRB pg. 343 | 1 asalto de lanzamiento, **840 pies**, radio 20 pies, 11 asaltos; sobre un punto sin salvación; sobre criatura Will niega + RC; mítica: corta telepatía y os exime a vos y a tier criaturas | Anula a lanzadores enemigos. |
| **Hold Person** | CRB pg. 296 | 210 pies, 1 humanoide, 11 asaltos, Will DC 19; repite cada asalto como asalto completo | Control barato; Mass es 7.º arcano (mesmerist 6 — corrección del auditor). |
| **Weapon of Awe / Bull's Strength / Bear's Endurance / Owl's Wisdom / Eagle's Splendor** | APG / CRB | +2 sagrado al daño (y shaken al crítico) / +4 mejora 11 min | Buffs de un solo aliado; Weapon of Awe al DPS crítico. Cat's Grace y Fox's Cunning NO son de clérigo. |
| **Ironskin** | Monster Codex pg. 45 | **personal**, +4 armadura natural +1/4 CL sobre 4.º = **+5**, 11 min; descartable para negar un crítico/furtivo | Barkskin NO es de clérigo; Ironskin sí (Monster Codex: pedir permiso). |
| **Calm Emotions / Enthrall / Zone of Truth / Augury / Gentle Repose / Make Whole / Find Traps / Water Walk (Communal, cleric 2) / Endure Elements Communal / Ant Haul Communal / Ghostbane Dirge / Sound Burst / Burst of Radiance / Spear of Purity** | varios | — | Find Traps (personal, +5 Perception para trampas, 11 min): descartado por parámetros. Ghostbane Dirge (APG): un incorpóreo recibe daño completo de armas mágicas 11 asaltos (Will DC 19). Burst of Radiance (Champions of Purity pg. 29, [good, light]): 840 pies, 10 pies, ciega 1d4 asaltos (Reflejos DC 19) y 5d4 a malvados aunque salven. |
| **Heroic Fortune** | APG pg. 324 | toque, M polvo de diamante 100 po, 11 asaltos; 1 Hero Point temporal (se gasta antes que los propios) | Ver sección 11. |

### 6.5 Nivel 3 (7 ranuras)

| Conjuro | Fuente | Números | Uso |
|---|---|---|---|
| **Magic Vestment** | CRB pg. 310 | toque, **11 h**, +2 mejora (1/4 CL) a armadura o escudo; mítica: una propiedad ≤ +1/4.000 po (light fortification) | Dos por la mañana (armadura + escudo): CA +2… o sobre el tanque. Rod of Extend lesser → 22 h. |
| **Dispel Magic** | CRB pg. 272 | 210 pies, 1d20+11 vs 11 + CL; dirigido; mítica: 2 conjuros y te curás 1d4 × nivel disipado | Sin tope +10 (eso era 3.5). |
| **Communal Resist Energy** | UC pg. 242 | toque; **resistencia 30** (CL 11+) a un tipo, 110 min en bloques de 10 min (5 aliados × 20 min) | Contra el dragón conocido. Mítica: +4 salv. y un adyacente gana resistencia 15/asalto. |
| **Remove Blindness/Deafness · Remove Curse · Remove Disease** | CRB pg. 332 | estándar, toque; Remove Curse/Disease: prueba **1d20+11** vs DC de cada maldición/enfermedad | Kit de aflicciones (sección 12). Eldritch Breach (tier 1) tiraría dos veces. |
| **Prayer** | CRB pg. 324 | 40 pies a tu alrededor, 11 asaltos, sin salvación; aliados +1 suerte a ataque/daño/salvaciones/habilidades, enemigos −1; mítica ±2 y cura 2 × tier (6) al lanzar | Se acumula con Heroism (moral). Fate's Favored: +2 sobre vos. |
| **Invisibility Purge** | CRB pg. 302 | personal, radio **55 pies**, 11 min | Contra el asesino invisible. |
| **Daylight / Deeper Darkness** | CRB pg. 264 | 110 min; Daylight no cuenta como luz solar real contra vampiros | — |
| **Searing Light** | CRB pg. 338 | 210 pies, toque a distancia; 5d8; no muertos **10d6**, vulnerables a la luz 10d8; mítica 10d6/10d8/20d6 | Ofensiva estándar. |
| **Archon's Aura** | UM pg. 206, [good, lawful] | 20 pies, 11 min, Will DC 20: hostiles −2 ataque/salvaciones/CA hasta que te acierten | Un NG puede lanzarlo (no es [chaotic]); un CG no. |
| **Wind Wall · Water Breathing (22 h repartidas) · Water Walk (11 criaturas, 110 min) · Locate Object · Speak with Dead · Stone Shape · Glyph of Warding (200 po) · Symbol of Healing (500 po) · Delay Poison Communal · Heroism (solo dominio Heroism)** | varios | — | Heroism (CRB): +2 moral a ataques/salvaciones/habilidades **110 min** a un aliado: solo con el subdominio Heroism (no está en la lista de clérigo). |

### 6.6 Nivel 4 (6 ranuras)

| Conjuro | Fuente | Números | Uso |
|---|---|---|---|
| **Blessing of Fervor** | APG pg. 205 | close, **11 criaturas**, **11 asaltos**, Fort niega (inofensivo); cada asalto cada aliado elige: +30 pies / levantarse como rápida sin provocar / **un ataque extra en ataque completo** / +2 ataque, +2 esquiva a CA y Reflejos / lanzar ≤ 2.º como enlarged/extended/silent/still. **No se acumula con haste.** Mítica: dos opciones por asalto | **El buff de grupo para 4 cuerpo a cuerpo**: ≈ +4 ataques por asalto durante todo el combate por una acción estándar. Si nadie lanza haste, es lo primero del asalto 1. |
| **Freedom of Movement** | CRB pg. 287 | estándar, toque, **110 min**, M tira de cuero + DF; inmune a parálisis, solid fog, slow, web; **los agarres contra el objetivo fallan automáticamente**; combate normal bajo el agua | Sobre el DPS que más agarran, o sobre nosotros antes de un jefe agarrador. Enduring Blessing (tier 3) → 24 h. |
| **Death Ward** | CRB pg. 264 | toque, **11 min**; +4 moral vs muerte, salvación aunque no la haya, **inmune a drenaje de energía y energía negativa (channel negativo incluido)**; suspende (no quita) niveles negativos | Contra vampiros/wights/nigromantes y contra Slay Living. FAQ 2013: drenaje ≠ efecto de muerte. |
| **Restoration** | CRB pg. 334 | **3 asaltos**, toque, M polvo de diamante **100 po** (temporales/daño/drenaje de una característica) o **1.000 po** (un nivel negativo permanente; **máx. 1 por semana por objetivo**) | Fuera de combate; llevar 2 × 100 y 1 × 1.000 de polvo. No mítica (Mythic Heal augmented la imita). |
| **Divine Power** | CRB pg. 273 | personal, 11 asaltos; **+3 suerte** ataque/daño/pruebas de Fue (11/3 = 3; +4 con Fate's Favored — crítico #9), 11 pg temporales, un ataque extra (no con haste) | Variante de batalla. |
| **Greater Magic Weapon** | CRB pg. 310 | close, **11 h**, **+2** (1/4 CL, máx. +5) al arma o a 50 proyectiles; mítica añade una propiedad | Para el DPS con arma +1. |
| **Spiritual Ally** | APG pg. 246 | 210 pies, 11 asaltos; 1d10+3 fuerza, BAB +8/+3 + Wis 8 = **+16/+11**; **amenaza, flanquea y hace AdO**; se mueve 30 pies como rápida | El "quinto cuerpo a cuerpo" cuando no hay nada que curar (sección 8). |
| **Holy Smite** | CRB pg. 297, [good] | 210 pies, 20 pies; malvados 5d8 (máx.) + ciegos 1 asalto, ajenos malvados 10d6; Will DC 21 mitad/niega ceguera; neutrales mitad, buenos nada; mítica 5d12/10d10 | Área segura para el grupo bueno. Order's Wrath [lawful] y Chaos Hammer [chaotic]: un NG puede ambos; Unholy Blight [evil] no. |
| **Air Walk / Tongues / Sending / Divination (25 po, 81 %) / Spell Immunity / Dismissal / Communal Protection from Energy / Greater Make Whole** | varios | Air Walk 110 min; Dismissal Will DC 21 + RC | Utilidad. |

### 6.7 Nivel 5 (4 ranuras)

| Conjuro | Fuente | Números | Uso |
|---|---|---|---|
| **Breath of Life** | CRB pg. 251 | toque (30 pies con Faith's Reach), 5d8+11; revive a quien murió hace ≤ 1 asalto si queda por encima de −Con; nivel negativo temporal 1 día; no vs efectos de muerte ni no muertos; mítica 5d12+11, 2 asaltos, repite la salvación vs muerte | **Ranura de dominio de 5.º SIEMPRE.** Segunda copia en ranura normal solo en días de jefe; Inspired Spell la cubre sin prepararla. |
| **Cleanse** | APG pg. 211, **evocation** (corrección del auditor) | **personal**, S/DF (sin verbal: funciona bajo Silence), 4d8+11 y quita ability damage, blinded, confused, dazzled, deafened, diseased, exhausted, fatigued, nauseated, poisoned, sickened + break enchantment sobre un efecto | El "reset" propio. |
| **Righteous Might** | CRB pg. 335 | personal, 11 asaltos; +1 tamaño, +4 Fue/Con, −2 Des, +2 armadura natural, **RD 5/evil** | Variante de batalla o supervivencia (+4 Con = +2 al modificador → +22 pg y +2 Fort mientras dure). |
| **Flame Strike** | CRB pg. 283 | 210 pies, cilindro 10 × 40; **11d6** mitad fuego / mitad divino, Reflejos DC 22; mítica 11d8, radio 20 | Daño de área cuando no hay nada que curar. |
| **Wall of Stone** | CRB pg. 366 | 210 pies, 11 cuadrados de 5 pies, 2 pulgadas (dureza 8, 30 pg/sección), instantáneo | Cortar la sala. |
| **Greater Command / Greater Forbid Action** | CRB / UM | 11 criaturas, 11 asaltos, Will DC 22 cada asalto | Control de grupo. |
| **Life Bubble** | APG pg. 230 | toque, 11 criaturas, 22 h repartibles; respirar bajo el agua/vacío, inmune a gases inhalados, temperatura | Utilidad. |
| **Raise Dead** | CRB pg. 329 | **1 minuto**, diamante **5.000 po**, muerto ≤ 11 días, **2 niveles negativos permanentes** (sección 12) | Solo fuera de combate. |
| **Commune (500 po, 11 preguntas) · True Seeing (250 po, 11 min) · Plane Shift · Communal Air Walk · Communal Tongues · Break Enchantment (≤ 5.º; mítica: éxito automático vs no míticos) · Spell Resistance · Disrupting Weapon · Pillar of Life · Mass Cure Light Wounds (espontáneo) · Heroic Fortune, Mass (1.000 po)** | varios | — | — |

### 6.8 Nivel 6 (3 ranuras)

| Conjuro | Fuente | Números | Uso |
|---|---|---|---|
| **Heal** | CRB pg. 294 | toque (30 pies), **110 pg** (Inspired 130; mítico 165/195) y quita ability damage, blinded, confused, dazed, dazzled, deafened, diseased, exhausted, fatigued, feebleminded, insanity, nauseated, poisoned, sickened, stunned; **no** niveles negativos ni drenaje; vs no muertos = harm | Ranura de dominio + 1-2 normales. |
| **Blade Barrier** | CRB pg. 249, [force] | 210 pies, muro 220 pies o anillo radio 25, 20 pies de alto, 11 min; **11d6** Reflejos DC 23 mitad; cobertura +4 CA; **mítica: acción INMEDIATA**, 11d8; Augmented (tier 3): moverla 10 pies como movimiento | La mejor herramienta de control/daño del clérigo de 11 (sección 8). |
| **Greater Dispel Magic** | CRB pg. 272 | dirigido: 2 conjuros (1/4 CL); área 20 pies con una tirada para todo | Contra buffs del jefe. |
| **Heroes' Feast** | CRB pg. 295 | 10 min + 1 h de comida; 11 criaturas; cura enfermedad/náusea, neutralize poison, remove disease; **1d8+5 pg temporales, +1 moral ataque/Will, +4 moral vs veneno y miedo, 12 h** | El buff de "mañana" si el día lo permite (moral: no se acumula con Heroism al ataque, sí el +4 vs miedo). |
| **Wind Walk** | CRB pg. 369 | vos + 3, 11 h, 60 mph → 660 millas | Viaje. |
| **Word of Recall** | CRB pg. 371, V | estándar, vos + 3 Medianos, al santuario | La huida de emergencia del grupo entero (preparado en días de "todo o nada"). |
| **Banishment · Antilife Shell · Undeath to Death (500 po) · Find the Path · Greater Glyph · Mass Cure Moderate Wounds (espontáneo) · Greater Heroism (solo subdominio Heroism)** | varios | Banishment 22 DG a 30 pies, Will DC 23 | — |

### 6.9 Qué preparar un día típico (build: 4 / 7 / 7 / 7 / 6 / 4 / 3)

**(a) Mazmorra / combate esperado**
- 0: Detect Magic, Guidance, Light, **Stabilize**.
- 1.º (6 + dominio): Protection from Evil ×2, Shield of Faith, Liberating Command, Remove Fear, **1 vacía** (→ CLW espontáneo). Dominio: Shield of Faith (o CLW).
- 2.º (6 + dominio): Communal Protection from Evil, Lesser Restoration, Status, Silence, Remove Paralysis, **1 vacía**. Dominio: CMW.
- 3.º (6 + dominio): **Magic Vestment ×2** (de mañana), Communal Resist Energy, Dispel Magic, Prayer, Remove Blindness/Deafness (o Remove Curse/Disease según el sitio). Dominio: **Heroism** (110 min al tanque) o CSW.
- 4.º (5 + dominio): **Blessing of Fervor**, **Freedom of Movement**, **Death Ward**, Restoration (con polvo encima), Spiritual Ally (o Greater Magic Weapon de mañana). Dominio: CCW (comodín) o Holy Smite.
- 5.º (3 + dominio): Breath of Life (2.ª copia) o Mass CLW espontáneo, Flame Strike o Righteous Might, Cleanse. Dominio: **Breath of Life**.
- 6.º (2 + dominio): **Heal**, **Blade Barrier** (o Word of Recall en días de "todo o nada"). Dominio: **Heal**.
- Con Inspired Spell en reserva para lo no preparado (Dispel, Air Walk, Plane Shift, Remove X, tercer Heal).

**(b) Viaje / social / investigación**
- 0: Detect Magic, Guidance, Create Water, Purify Food and Drink.
- 1.º: Comprehend Languages, Endure Elements, Ant Haul, Deadeye's Lore (o Ears of the City), Remove Fear, Bless, 1 vacía.
- 2.º: Augury, Zone of Truth, Status, Lesser Restoration, Delay Poison Communal (3.º) → aquí Calm Emotions, Gentle Repose, 1 vacía.
- 3.º: Locate Object, Speak with Dead, Water Walk/Breathing, Remove Disease, Glyph of Warding (campamento), Magic Vestment.
- 4.º: Divination, Sending, Tongues, Air Walk, Freedom of Movement, Death Ward.
- 5.º: Commune, Communal Air Walk, Life Bubble / True Seeing; dominio Breath of Life.
- 6.º: **Heroes' Feast** (de mañana), Find the Path / Word of Recall / Wind Walk; dominio Heal.

Dejar siempre **al menos una ranura de 1.º, 2.º y 3.º sin usar** al final del día; quemar las de nivel alto sobrantes como Mass CLW / Mass CMW cuando el grupo esté disperso. **Recuperation** (tier 3: 1 uso + 1 h → re-preparar todo) cambia el cálculo en días largos.

### 6.10 Conjuros que la gente cree que tiene el clérigo y NO (verificado en la línea "Level" de cada página)

| No es de clérigo | Quién lo tiene | Parche de clérigo |
|---|---|---|
| **Haste** | arcanos/bard/… 3 | Blessing of Fervor (4; no se acumula con haste) |
| **Fly** | arcanos/shaman/witch 3 | Air Walk (4), Communal Air Walk (5), Wind Walk (6) |
| **Heroism / Greater Heroism** | arcanos/bard/inquisitor | Bless, Prayer, Aid — o el subdominio Heroism (dominio) |
| **Enlarge Person** | arcanos | Righteous Might (5, solo vos) |
| **Mirror Image / Displacement / Invisibility / See Invisibility** | arcanos | Sanctuary, Shield of Faith; Invisibility Purge (3), True Seeing (5) |
| **Stoneskin** | arcanos/druid 5/inquisitor 4 | Ironskin (2, Monster Codex), Righteous Might |
| **Teleport / Dimension Door** | arcanos | Word of Recall (6), Plane Shift (5) |
| **Cat's Grace / Fox's Cunning** | arcanos | solo Bull's / Bear's / Eagle's / Owl's |
| **Mage Armor / False Life / Good Hope / Longstrider / Darkvision / Spider Climb / Slow / Glitterdust / Web / Grease / Overland Flight** | arcanos / bard / druid | Shield of Faith, Magic Vestment, Aid (1d8+10 temp), Bless/Prayer, Blessing of Fervor (+30 pies), Daylight, Air Walk, Hold Person, Burst of Radiance, Wind Walk |
| **Barkskin** | alchemist/druid/hunter/ranger/shaman/summoner 2 | **Ironskin** (cleric 2: SÍ) |
| **Restful Sleep** | bard/skald 1 | — |
| **Bestow Grace** | paladin 2 | Bestow Grace of the Champion es cleric 7 |
| **Hold Person, Mass** | arcanist/psychic/sorcerer/witch/wizard 7, mesmerist 6 | Greater Command (5), Greater Forbid Action (5) |
| **Neutralize Poison "da inmunidad"** | 🚫 (era 3.5) | Delay Poison (2) sí da inmunidad temporal |
| **Dispel Magic "tope +10"** | 🚫 (era 3.5) | sin tope en PF1e |

**De clérigo pero fuera de alcance a nivel 11:** Regenerate (7), Resurrection (7), Greater Restoration (7), Repulsion (7), Fire Storm (8), Mass CCW (8), Mass Heal (9).

> **➡️ Para NUESTRA build (sección 6)**
> - Cada mañana: Magic Vestment ×2 (armadura + escudo, 11 h: CA 26 base con +1 mithral breastplate y +1 darkwood heavy shield), Status a los 3 que más se alejan, Heroes' Feast si hay 1 h de sobra (12 h de +4 vs veneno/miedo y 1d8+5 temporales a los 5).
> - **Asalto 1 de un combate difícil:** rápida Aura of Heroism (+2 moral) · estándar **Blessing of Fervor** (11 asaltos: los 4 cuerpo a cuerpo eligen ataque extra o +2/+2) · movimiento acercarse/posicionarse a ≤ 30 pies de todos. Asalto 2 en adelante: rápida (aura sigue) · estándar Heal/BoL/Prayer · movimiento Quick Channel.
> - Reserva permanente: Death Ward y Freedom of Movement preparados (o vía Inspired Spell); Breath of Life en dominio; Heal ×2-3; Blade Barrier ×1.
> - Ranuras "muertas" del día → Mass CLW / Mass CMW con Healer's Blessing (23,25 / 30 c/u a 11 objetivos) o Communal Protection from Evil.
> - Nunca preparar: cures (salvo dominio), Empower/Maximize de nada, Infernal Healing (🚫 [evil]), Find Traps (sin trampas), Aid (Heroism lo pisa).

---

## 7. REGLAS MÍTICAS (MYTHIC ADVENTURES) — HIEROPHANT A TIER 3

Fuente base de todo el apartado: **Mythic Adventures** (MA). Reglas: [AoN] https://www.aonprd.com/Rules.aspx?ID=1618 (Base Mythic Abilities + Table 1-1 — MA pg. 12), https://www.aonprd.com/Rules.aspx?ID=1619 (Gaining Tiers + Table 1-2 — MA pg. 13), https://www.aonprd.com/Rules.aspx?ID=1608 (Mythic Rules completo: Mythic Feats, Mythic Spells, Running a Mythic Game, Boons, Adjusting CR and Level — MA pg. 54, 78, 128-134). Senda: [AoN] https://www.aonprd.com/MythicPaths.aspx?Path=Hierophant (MA pg. 32) y https://www.aonprd.com/PathAbilities.aspx?Path=Hierophant (MA pg. 32-37; la URL `MythicPathDisplay.aspx?ItemName=Hierophant` devuelve 404 — corrección del auditor del frente 01). Universales: https://www.aonprd.com/PathAbilities.aspx?Path=Universal (MA pg. 50-51). Dotes: https://www.aonprd.com/Feats.aspx?Category=Mythic (`MythicFeats.aspx` no existe). Conjuros: https://www.aonprd.com/Spells.aspx?Class=Mythic (287 con versión mítica).

### 7.1 Qué es "mítico" y cómo se gana tier

- "A creature is mythic if it has a mythic tier or mythic rank." No hay bono genérico por ser mítico; lo que hay son habilidades concretas que distinguen fuentes míticas y no míticas (MA pg. 5-7).
- **Tiers 1-10**, independientes del nivel y de la XP; se ganan superando **trials** que fija el GM: Table 1-2 — tier 2: 1 trial; **tier 3: 2**; tier 4: 2; tier 5: 3; 6: 3; 7: 4; 8: 4; 9: 5; 10: 5. Guía de ritmo (MA pg. 129): "mythic tier roughly equal to 1/2 the character's overall level" → a nivel 11 lo "esperado" sería tier 5; **el jugador confirmó tier 3**: todo lo que sigue usa 3.
- **Nivel efectivo** para encuentros y tesoro = nivel + ½ tier (mín. 1): 11 + 1 = **12** (MA pg. 128; el crítico y el auditor confirman la sección "Adjusting CR and Level").
- **Boons** (MA pg. 132 — [AoN] https://www.aonprd.com/Rules.aspx?Name=Mythic%20Boons&Category=Running%20a%20Mythic%20Game): recompensa del GM por un momento heroico, devuelve **1 uso de poder mítico**, máximo 1 por encuentro. Los que nos tocan: **Master Healer** ("Using only a single spell, item, or ability, the character heals a dying creature to full hit points" — Heal 110 sobre un aliado moribundo de ≤ 110 pg lo cumple), **Final Gift**, **Undead Bane** (un channel que derrota 8+ no muertos), **Shield Ally**, **Push On**.
- ⚠️ Nada en AoN vincula Hero Points con Mythic Adventures (búsqueda del auditor del frente 11): la interacción Surge + Hero Point es decisión del GM (sección 11).

### 7.2 Tabla tier 1-10 (Hierophant)

| Tier | Trials | Pg extra (acum.; +4/tier) | Poder mítico/día (3 + 2 × tier) | Surge | Dote mítica | +2 característica | Base ability nueva | Path abilities (acum.) |
|---|---|---|---|---|---|---|---|---|
| 1 | — | 4 | 5 | 1d6 | 1.ª | — | Hard to Kill, Mythic Power, Surge; **Divine Surge** (senda) | 1 |
| 2 | 1 | 8 | 7 | 1d6 | — | 1.º | **Amazing Initiative** | 2 |
| **3** | **2** | **12** | **9** | **1d6** | **2.ª** | — | **Recuperation** | **3** |
| 4 | 2 | 16 | 11 | 1d8 | — | 2.º | Surge 1d8 | 4 |
| 5 | 3 | 20 | 13 | 1d8 | 3.ª | — | Mythic Saving Throws | 5 |
| 6 | 3 | 24 | 15 | 1d8 | — | 3.º | Force of Will | 6 |
| 7 | 4 | 28 | 17 | 1d10 | 4.ª | — | Surge 1d10 | 7 |
| 8 | 4 | 32 | 19 | 1d10 | — | 4.º | Unstoppable | 8 |
| 9 | 5 | 36 | 21 | 1d10 | 5.ª | — | Immortal | 9 |
| 10 | 5 | 40 | 23 | 1d12 | — | 5.º | Legendary Hero; Divine Vessel (senda) | 10 |

### 7.3 Base mythic abilities que tenemos a tier 3 (texto aplicado)

- **Hard to Kill (Ex)** (tier 1): por debajo de 0 pg te estabilizás automáticamente sin tirada; el sangrado sigue; **no morís hasta −2 × Con** → con Con 16, **−32**.
- **Mythic Power (Su)**: **9 usos/día** a tier 3 (máximo; nada permite superarlo salvo Extra Mythic Power, que sube el máximo).
- **Surge (Su)**: 1 uso, acción **inmediata** tras ver el resultado: **+1d6** a cualquier d20 propio (salvación, concentración, prueba de CL de Remove Disease/Dispel, toque a distancia, habilidad). 1d8 recién a tier 4. Consume la acción rápida del siguiente turno.
- **Divine Surge** (senda, tier 1): **Inspired Spell** o **Recalled Blessing**, "Once chosen, it can't be changed" (crítico #6: no se acumulan). Texto vigente = FAQ 2013/01/10 (https://www.aonprd.com/FAQs.aspx, "Hierophant (Mythic Path)"; no usar PDFs viejos).
  - **Inspired Spell (Su):** acción estándar + 1 uso: **cualquier conjuro divino de tu lista (o de dominio) de nivel ≤ 6.º y tiempo de lanzamiento ≤ 1 estándar, sin haberlo preparado ni gastar ranura**, con **CL +2** (13): Heal 130, CCW 4d8+13, BoL 5d8+13, Mass CLW 1d8+13; **admite metamagia conocida** dentro del tope de 6.º (no tenemos ninguna) y sigue siendo estándar. Excluye Summon Monster (1 asalto), Restoration (3 asaltos), Raise Dead (1 min). Paga componentes materiales caros si los hay.
  - **Recalled Blessing (Su):** 1 uso: relanzar un conjuro **preparado hoy** sin ranura (⚠️ "prepared today": la lectura habitual es que vale aunque ya se haya lanzado; Arcane Surge lo dice explícito y Recalled Blessing no → GM), sin metamagia ni CL +2, con el tiempo normal del conjuro (sí vale Restoration/Raise Dead); curación "roll twice, take the higher"; no míticos tiran dos veces la salvación (peor).
- **Amazing Initiative (Ex)** (tier 2): **+3 a iniciativa**; acción gratuita + 1 uso → **una acción estándar extra** en tu turno, "This additional standard action can't be used to cast a spell", 1/asalto. → **Channel** (Su), Rebuke Death (Sp — ⚠️ no es "cast a spell", zona gris), beber poción, moverse. Varitas (spell trigger) ⚠️ zona gris: preguntar.
- **Recuperation (Ex)** (tier 3): pg completos tras 8 h de descanso; **1 uso + 1 hora de descanso → recuperás la mitad de tus pg máximos y "class features that are limited to a certain number of uses per day (such as … spells per day)"**; "This rest is treated as 8 hours of sleep"; **no** recarga poder mítico ni habilidades míticas por día. Para un clérigo = **volver a preparar todos los conjuros y recuperar los 7 channels a mitad del día**.
- **No tenemos** (tier ≥ 5): Mythic Saving Throws (salvación exitosa = sin efecto contra no míticos), Force of Will, Unstoppable, Immortal, Legendary Hero.
- **+2 a una característica a tier 2**: **Wis** (21 → 23; con Headband +4 → 27).

### 7.4 Habilidades de senda Hierophant (con tier mínimo) — las relevantes para un sanador

Cada tier da UNA path ability (Hierophant o Universal); "Once you select an ability, it can't be changed"; cada una solo una vez salvo indicación. A tier 3: **3 path abilities** (+1 con Extra Path Ability).

**Tier 1 (elegibles en cualquier tier):**
- **Faith's Reach (Su)** (MA pg. 34): "Whenever you cast a divine spell with a range of touch, you can instead cast the spell with a range of 30 feet. If the spell normally requires a melee touch attack, it instead requires a ranged touch attack." Sin coste, sin ranura, siempre. Aplica a cure X, Heal, Breath of Life, Restoration, Remove X, Delay Poison, FoM, Death Ward, Air Walk, Magic Vestment, Shield of Faith, Bull's Strength… ⚠️ contra un aliado dispuesto la práctica común es no tirar el toque a distancia, pero AoN no lo exime.
- **Relentless Healing (Su)** (MA pg. 35): "If a creature has died within 1 round, as a free action you can expend one use of mythic power to apply healing magic to that creature. This healing can be from a spell or effect you cause or from a magic item you wield. If this healing brings the creature's hit points above the threshold for death, it comes back to life and stabilizes…" (Alternativa: 2 usos para que un muerto con magia curativa propia la dispare.) ⚠️ No dice que falle contra efectos de muerte; "similar to the way breath of life functions" hace que muchos GMs lo restrinjan: preguntar.
- **Mythic Domain (Su)** (MA pg. 34): poderes de dominio como **nivel 15** y 1/día (1 uso, estándar) recuperar todos los usos de poderes de dominio. Con Healing + Heroism: Rebuke Death 1d4+7; **Aura of Heroism 15 asaltos/día y otros 15 con la recarga**; Touch of Glory +15. ⚠️ El texto dice "your domain's granted powers" (singular): la lectura mayoritaria es que se refiere al rasgo de clase *domains* (ambos dominios), pero un GM literal podría limitarlo a uno; preguntar (sección 14).
- **Overflowing Grace (Su)** (MA pg. 34): quien queda a pg máximos tras tu curación positiva (channel, cure, lay on hands) gana **+1 sagrado** a ataques, habilidades, característica y salvaciones 1 minuto.
- **Eldritch Breach (Su)** (MA pg. 34): pruebas de CL (disipar, RC, Remove Disease/Curse, Neutralize Poison, Break Enchantment) **dos veces, la mejor**.
- **Empathic Healing (Su)** (MA pg. 34): 1 uso → transferir hasta 10 pg/tier (**30**) de daño de un aliado tocado a vos; 2 usos → asumir su enfermedad/veneno. Acción no especificada (⚠️ estándar por defecto).
- **Enhance Magic Items (Ex)** (MA pg. 34): +½ tier (**+1**) al CL de pociones/pergaminos/varitas/bastones; **activar una varita gastando 1 uso de poder mítico en vez de una carga**.
- **Divine Guardian (Sp)** (MA pg. 33): asalto completo + 1 uso → una criatura como Summon Monster de nivel = ½ tier (**SM I**); 2 usos → nivel = tier (**SM III**); CL = nivel (11 asaltos). A tier 3 es pobre (crítico #15).
- **Sustained by Faith (Su)** (MA pg. 35): sin comer/beber/dormir; 1/día re-preparar en 1 h de meditación **sin gastar poder mítico**; a tier 3+, 1 uso → no respirar 24 h.
- **Contingent Channel Energy** (channel "condicionado", 1 uso + 1 channel), **Bleed Holy Power**, **Alter Channel**, **Symbol of the Holy**, **Water of Life**, **Insightful Interaction**, **Divine Countenance**, **Flexible Counterspell**, **Inverted Spontaneous Casting**: situacionales o de otro rol.

**Tier 3 (mínimo tier 3) — verificado por el crítico en PathAbilities.aspx?Path=Hierophant: Abundant Healing, Divine Metamastery, Enduring Blessing, Hand of Mercy y Life Current son de 3.º; Conduit of Divine Will y Undying Healer de 6.º (el frente 07 §7.2 estaba equivocado, crítico #1):**
- **Abundant Healing (Su)** (MA pg. 35): "When you use a spell or class ability to heal a creature's hit point damage, you can apply excess healing (over the target's full hit points) to one ally adjacent to you. You can continue to apply excess healing to other adjacent allies until no injured allies are adjacent or you run out of excess healing." Adyacentes **a vos**. Heal 110 al tanque que necesitaba 40 → 70 al siguiente → resto al siguiente. Con channel también ("class ability").
- **Divine Metamastery (Su)** (MA pg. 36): rápida + 1 uso → durante 10 asaltos una metamagia **que conozcas** de +0/+1 sin subir ranura ni tiempo (también sobre varitas/pergaminos); 2.ª toma +2 (Empower), 3.ª +3, 4.ª +4 (Quicken). **Requiere tener la dote** ("metamagic feat you know"): sin dotes de metamagia en la build, vale cero.
- **Enduring Blessing (Su)** (MA pg. 36): conjuro de duración ≥ 10 min/nivel sobre UN objetivo dispuesto → **24 h** (uno por criatura): Freedom of Movement, Air Walk, Water Breathing, Protection from Energy, Magic Vestment. 2.ª toma a tier 6 (≥ 1 min/nivel: Death Ward, Bull's Strength…).
- **Hand of Mercy (Su)** (MA pg. 36): toque + 1 uso de channel → quita dazed, fatigued, shaken, sickened o staggered (tier 6: cursed, exhausted, frightened, nauseated; tier 9: blinded, deafened, paralyzed, stunned). Sin poder mítico. ⚠️ acción no especificada.
- **Life Current (Su)** (MA pg. 37): los 1 naturales de dados de cure/channel cuentan como 2 (hasta 4 tomas: 3, 4, 5). 6d6: 21 → 22 (→ 24 con dos). Flojo.
- **Divine Potency**: +4 ranuras de 1.º (2.ª toma: de 2.º). **Domain Immunity**, **Alignment Insight**, **Shape Channel** (Mythic Origins pg. 27: channel en cono/línea), **Hear the Word** (Mythic Origins), **Flowers in Your Footsteps** (Mythic Origins): situacionales.

**Tier 6 (fuera de alcance):** Arcane Knowledge, **Conduit of Divine Will**, Overcome Curse, **Undying Healer**, Servant of Balance, Psychic Healing, Pilgrim of the Sky.

**Universales relevantes (tier 1):** **Mythic Spellcasting** (tier conjuros míticos; hasta 3 tomas — mismo efecto que la dote Mythic Spell Lore), **Extra Mythic Power** (+2 usos, hasta 3 veces), **Extra Mythic Feat** (hasta ½ tier veces = 1), **Display of Wisdom** (gratuita + 1 uso: +20 a una prueba de Wis: Heal, Perception, Sense Motive), **Legendary Item**, **Mythic Sustenance**, **Commune with Power**. **Tier 3:** **Enhanced Ability** (+2 permanente a una característica), **Divine Source** (conceder conjuros; SLA 1 de cada nivel ≤ tier de dos dominios), **Pure Body** (inmune a enfermedad/veneno no míticos), **Fearless**, **Sleepless**, **Unchanging** (inmune a polimorfia/petrificación no míticas).

### 7.5 Dotes míticas relevantes (2 a tier 3)

Regla (MA pg. 54): solo se eligen en tiers 1/3/5/7/9 (o con Extra Mythic Feat); pueden ser dotes no míticas; "You must qualify for this feat normally".

| Dote | MA pg. | Prerreq. | Efecto para nosotros |
|---|---|---|---|
| **Mythic Spell Lore** | 70 | lanzar conjuros | **Tier (3) conjuros míticos**; +1 por tier ganado; repetible con otros conjuros. Sustituye a la path ability Mythic Spellcasting. |
| **Extra Path Ability** | 65 | **tier 3** | Una habilidad de senda más (Hierophant o Universal). |
| **Mythic Selective Channeling** | 72 | Selective Channeling | +2 pg curados por objetivo excluido (2 excluidos → +4); 1 uso → excluir ½ tier (**+1**) más. |
| **Extra Mythic Power** | 65 | — | +2 usos/día (9 → 11). |
| **Dual Path** | 63 | tier 1 | Habilidad de tier 1 de otra senda + acceso a su lista: **Archmage** (Arcane Surge/Wild Arcana solo arcanos; interesa **Abundant Casting** ⚠️ no dice "arcane": Heal a 2 objetivos por 1 uso, +tier objetivos en Mass CLW — GM), **Guardian** (Absorb Blow: inmediata + 1 uso, −5/tier al daño = −15; Fast Healing), **Marshal** (Rally: rápida + 1 uso, todos los aliados a 30 pies repiten una d20; Words of Hope tier 3). **Costo:** una de nuestras 2 dotes míticas (la de tier 1) → sin Mythic Spell Lore hasta tier 3 (o sin Extra Path Ability). No lo recomendamos a tier 3; a tier 5 sí es la primera candidata (Marshal). |
| **Mythic Toughness** | 75 | Toughness | +22 pg y RD 10/epic bajo 0 (tier 5). |
| **Mythic Divine Interference** | 63 | Divine Interference | penalizador −2N / −3N con 1 uso (tier 5-7). |
| **Mythic Iron Will / Great Fortitude / Lightning Reflexes** | 68/66/68 | la dote base | dos tiradas contra conjuros/Sp/Su no míticos. |
| **Mythic Improved Initiative / Spell Focus / Spell Penetration / Augment Summoning / Guided Hand / Warrior Priest / Turn Undead / Alignment Channel / Improved Channel / Channel Smite / Paragon / Eschew Materials / Crafter** | varias | — | Situacionales (Mythic Paragon sube "tier" a efectos de potencia: Empathic Healing 50, Prayer mítico 10, Shield Other −5; no da usos ni surge). |
| 🚫 **No existen**: Mythic Empower/Maximize/Quicken/Extend/Heighten/Reach Spell, Mythic Extra Channel, Mythic Quick Channel, Mythic Combat Casting, Mythic Sacred Summons, Mythic Craft Wondrous Item (existe Mythic Crafter). Lo oficial de metamagia mítica es **Ascendant Spell** (MA pg. 55: metamagia NO mítica, +5 niveles, imita la versión mítica: inútil a nivel 11) y Divine Metamastery. | | | |

### 7.6 Conjuros míticos (MA pg. 78 + páginas de cada conjuro)

- Se aprenden con Mythic Spellcasting o Mythic Spell Lore (cantidad = tier; +1 por tier). "You never have to prepare the mythic version"; al lanzar la versión normal se gasta **1 uso** y se convierte; misma ranura, mismo tiempo. **Augmented**: cuesta el total indicado ("two uses" = 2 en total, no 3) y exige el tier entre paréntesis. Potent (+1 uso: DC +2 y +2 vs RC) y Resilient (+1: −4 a disiparlo). **No se pueden meter en objetos** (nada de varitas de mythic CLW).

| Conjuro | Mítico (MA pg.) | A CL 11 | Tier mínimo |
|---|---|---|---|
| **Heal** | 97 | **165**; Augmented (2 usos): + *restoration* (⚠️ ¿1.000 po del nivel negativo permanente? el texto no lo pide: GM) | 1 (augmented sin tier) |
| **Breath of Life** | 87 | 5d12+11 (43,5 / 71); revive ≤ **2 asaltos**; contra efecto de muerte con salvación: repite y vuelve a −10 + curación; Augmented (9.º) | 1 |
| **Cure Critical / Serious / Moderate / Light Wounds** | 89-90 | 8d8+22 / 6d8+22 / 4d8+20 / 2d8+10 + 4/3/2/1 puntos de daño de característica; ×1,5 con Healer's Blessing | 1 |
| **Blade Barrier** | 85 | **acción inmediata**, 11d8 (49,5) Reflejos mitad; Augmented (3.º, 2 usos): moverla 10 pies como movimiento | 1 (aug. 3) |
| **Prayer** | 104 | ±2 y cura 2 × tier (**6**) a los aliados / daña 6 a enemigos al lanzar | 1 |
| **Bless** | 85 | +1 moral a ataque, daño y **todas** las salvaciones; una tirada doble por aliado | 1 |
| **Sanctuary** | 107 | +tier a CA si superan la Will; cada criatura que cures gana sanctuary 1 asalto; Augmented (2.º) | 1 |
| **Shield of Faith** | 108 | +½ tier al desvío (+4 total) | 1 |
| **Blessing of Fervor** | 86 | **dos opciones por asalto** | 1 |
| **Dispel Magic** | 92 | 2 conjuros; te curás 1d4 × nivel disipado | 1 |
| **Magic Vestment** | 100 | +1 propiedad ≤ +1 / 4.000 po; Augmented (3.º): ≤ +2 / 15.000 | 1 (aug. 3) |
| **Protection from Evil / Resist Energy / Silence / Divine Favor / Shield Other / Searing Light / Flame Strike / Holy Smite / Pillar of Life / Command / Break Enchantment / Regenerate (7.º)** | varias | ver sección 6 | 1 |
| **Sin versión mítica** (verificado en Spells.aspx?Class=Mythic): Mass CLW/CMW/CSW/CCW, Mass Heal, Restoration (todas), Remove Disease/Curse/Blindness, Neutralize Poison, Aid, Divine Power, Righteous Might, Freedom of Movement, Death Ward, Hold Person, Bull's Strength y familia, Air Walk, Sound Burst, Burst of Radiance, Summon Monster I-IX. | | | |

### 7.7 Presupuesto de poder mítico en un día difícil (9 usos)

| Uso | Coste | Cuándo |
|---|---|---|
| Mythic Heal ×2 | 2 | los dos momentos en que el tanque cae bajo 40 pg |
| Inspired Spell ×1-2 | 1-2 | Death Ward / FoM / Dispel / tercer Heal no preparados |
| Amazing Initiative ×1 | 1 | el asalto en que hacen falta Heal + dos channels |
| Relentless Healing ×1 | 1 | un aliado muere este asalto y no tenemos BoL a mano |
| Surge ×2 | 2 | salvación letal propia; concentración de un Heal |
| Recuperation ×1 | 1 | tras el segundo combate grande, 1 h → conjuros y channels de nuevo |
| **Total** | **8-9** | Boons del GM (+1 por encuentro) alargan el día |

### 7.8 Mejores elecciones para un sanador con tier 3 exacto

1. **Divine Surge: Inspired Spell.** Para el único sanador de un grupo que no quiere "sentirse inútil": cualquier conjuro de ≤ 6.º sin prepararlo, CL 13 (Heal 130 / Mythic Heal 195). Recalled Blessing (dados dobles sobre BoL: 33,5 → ≈36,4; Restoration/Raise Dead sin ranura) solo si hay otro lanzador versátil en el grupo (no lo hay).
2. **Path abilities (3): Faith's Reach (t1) · Relentless Healing (t1) · Abundant Healing (t3).** Faith's Reach resuelve el problema n.º 1 del sanador de toque (llegar) sin gastar ranuras ni oro; Relentless Healing convierte cualquier cura en Breath of Life por 1 uso y acción gratuita; Abundant Healing convierte Heal/channel en curación de grupo con 4 aliados apiñados.
3. **Dotes míticas (2): Mythic Spell Lore (t1: Heal, Breath of Life, Cure Critical Wounds — Blade Barrier si el jugador prefiere control) · Extra Path Ability (t3) → Mythic Domain.** Justificación: Mythic Selective Channeling suma +4 a cada aliado por channel (≈ +16-20 pg por aliado y día); Mythic Domain suma **+4 asaltos de Aura of Heroism y una recarga completa (30 asaltos/día de +2 moral a ataques, salvaciones y habilidades de los 5)**, Rebuke Death 1d4+7 y +4 usos… y con Healing la recarga también devuelve los 11 Rebuke Death. Con 4 cuerpo a cuerpo, el +2 moral vale más que +4 pg. (Si el GM no permite Extra Path Ability por alguna razón: Mythic Selective Channeling.)
4. **+2 característica (t2): Wis.**
5. **Siguientes (t4-t5):** Enhanced Ability (Universal t3, +2 Wis) o Overflowing Grace o Enduring Blessing (t3) como path abilities; Mythic Toughness / Extra Mythic Power / Dual Path (Marshal → Rally) como dotes; Surge 1d8 y Mythic Saving Throws llegan solos.
6. **Legendary Item** (Universal): solo si el GM da un objeto por trama (símbolo sagrado legendario con Legendary Surge en pruebas de CL). No se invierte una path ability en él a tier 3.

> **➡️ Para NUESTRA build (sección 7)**
> - Tier 3 exacto: **9 poderes míticos/día, Surge 1d6, +12 pg, iniciativa +3, 3 path abilities, 2 dotes míticas, Wis +2 (tier 2), Hard to Kill (muerte a −32), Amazing Initiative (channel extra por 1 uso), Recuperation (re-preparar en 1 h por 1 uso).** No tenemos Mythic Saving Throws (tier 5).
> - **Inspired Spell + Faith's Reach + Relentless Healing + Abundant Healing + Mythic Domain (vía Extra Path Ability) + Mythic Spell Lore (Heal, Breath of Life, Cure Critical Wounds).**
> - Números míticos propios: Mythic Heal **165** (195 con Inspired Spell por 2 usos); Mythic BoL 5d12+11 a 30 pies y 2 asaltos de ventana; Mythic CCW 8d8+22 → **87** con Healer's Blessing; Aura of Heroism 15 + 15 asaltos/día; Rebuke Death 1d4+7 × 11 (+11 con la recarga).
> - Dual Path queda para tier 5 (Marshal: Rally como rápida por 1 uso). Divine Metamastery no sirve sin dotes de metamagia; Divine Guardian a tier 3 solo invoca SM I/III; Hand of Mercy se cubre con Heal/Restoration; Life Current es marginal.
> - Preguntas al GM que salen de aquí (sección 14): Relentless Healing contra efectos de muerte; Recalled Blessing con conjuros ya lanzados (no aplica si elegimos Inspired Spell); Amazing Initiative con varitas/Rebuke Death; Mythic Heal augmented y los 1.000 po; Abundant Casting (Archmage) sobre conjuros divinos si algún día se toma Dual Path.

---

## 8. QUÉ HACER CUANDO NO HAY NADA QUE CURAR

### 8.1 Lo que condiciona los cinco roles

- **Spontaneous casting** hace que preparar buffs, control o invocaciones **no comprometa la curación**: toda ranura que no se usa es un cure latente ([AoN] Cleric — CRB pg. 38). El único conflicto real está en las ranuras de **5.º y 6.º** (Breath of Life / Heal frente a Flame Strike / Blade Barrier / Summon Monster VI), y lo descomprime **Inspired Spell** (Heal sin ranura por 1 uso).
- **Economía de acciones del asalto:** estándar (conjuro/channel), movimiento (Quick Channel / moverse / redirigir Spiritual Weapon), rápida (Aura of Heroism / mover Spiritual Ally), inmediata (Reactive Healing / Divine Interference / Mythic Blade Barrier / Surge / Liberating Command). Amazing Initiative (1 uso) añade una estándar **que no puede ser un conjuro** (channel, ataque, poción). El Hero Point "Extra Action" añade una estándar o movimiento sin esa restricción (sección 11).
- **Enemigo de referencia CR 11** ([AoN] https://aonprd.com/Rules.aspx?ID=1673 — MA pg. 228, Table 6-8, idéntica al Bestiary): **145 pg, CA 25, ataque +19/+14, daño 50/37 por asalto, DC 20, salvación buena +14 / mala +10**. CR 13: 180 pg, CA 28, +21, buena +16 / mala +12. Probabilidad de fallo contra nuestras DC (Wis +8): DC 22 (5.º) → buena 35 % / mala 55 %; DC 23 (6.º) → 40 % / 60 %; DC 24 (6.º + Spell Focus) → 45 % / 65 %.
- **No acumulan** ([AoN] https://www.aonprd.com/Rules.aspx?ID=82 — CRB pg. 11): Bless / Aid / Heroes' Feast / Heroism (moral); Prayer / Divine Favor / Divine Power / Hero Point Bonus (suerte); GMW +2 sobre arma +1 (mejora: reemplaza); Blessing of Fervor con Haste; Resist Energy con Protection from Energy (se solapan); Righteous Might con otros aumentos de tamaño.

### 8.2 Rol 1 — BUFFER (costo 0)

Ya detallado en la sección 6. Con 4 cuerpo a cuerpo:
- **Asalto 1:** rápida Aura of Heroism (+2 moral a ataques/salvaciones/habilidades, 11-30 asaltos/día) + estándar **Blessing of Fervor** (11 objetivos a 50 pies, ≤ 30 pies entre sí — corrección del auditor: 30 pies es la separación, no el alcance —, 11 asaltos; ataque extra al BAB máximo o +2 ataque/+2 esquiva CA y Reflejos, a elección cada asalto; mítica: dos opciones). Cuatro atacantes con un ataque extra cada uno ≈ +4 ataques por asalto durante todo el combate = el buff con mejor retorno del juego para este grupo.
- **Asalto 2 (si nadie sangra):** **Prayer** (40 pies, +1 suerte a los 5 y −1 a todos los enemigos, 11 asaltos; mítica ±2 y cura 6 al lanzar) o Communal Protection from Evil si hay dominadores.
- **De mañana (11 h):** Magic Vestment ×2 (o uno a la armadura del tanque), Greater Magic Weapon +2 al DPS que lleve arma +1, Status ×3, Heroes' Feast (12 h; +4 moral vs veneno/miedo, 1d8+5 temporales).
- **Preparatorios (11 min):** Bull's Strength / Weapon of Awe al DPS, Death Ward al tanque contra no muertos, Aid (1d8+10 temporales; su +1 moral lo pisa Heroism).
- Costo: cero dotes, cero dominios, ranuras de 1.º-4.º que igual se convertirían en cures.

### 8.3 Rol 2 — CONTROL (costo 0-3 dotes)

| Conjuro | Nivel | DC (Wis +8) | Lo que hace a CL 11 |
|---|---|---|---|
| **Blade Barrier** | 6 | Ref 23 mitad | Muro de 220 pies o anillo de radio 25 pies, 20 pies de alto, 11 min; **11d6 (38,5)**; cobertura +4 CA/+2 Ref detrás. **Mítica: acción INMEDIATA, 11d8 (49,5)**; Augmented (tier 3, 2 usos): moverla 10 pies como movimiento. Es la única herramienta de control que **no cuesta la acción de curar**. |
| **Wall of Stone** | 5 | Ref 22 (solo para no quedar atrapado) | 11 cuadros de 5 pies, 2 pulgadas (dureza 8, 30 pg/cuadro; romper Fue DC 24); permanente; debe apoyarse en piedra. Mítica: 5 pulgadas, dureza 12. Corta la sala en dos. |
| **Antilife Shell** | 6 | — (RC) | 1 asalto de lanzamiento; 10 pies móviles, 11 min; ningún vivo entra (sí constructos, elementales, ajenos, no muertos). Refugio total del sanador rodeado de cuerpo a cuerpo vivos. |
| **Silence** | 2 | Will 19 (sobre criatura) / ninguna (punto) | 1 asalto; 840 pies; 20 pies; 11 asaltos. Sobre un punto: los lanzadores dentro no tienen componentes verbales; mítica: nos exime a nosotros y a 3. |
| **Greater Dispel Magic** | 6 | — | Dirigido 2 conjuros (1d20+11 vs 11 + CL: 50 % contra CL 11) o área 20 pies. Mítico: cura 1d4 × nivel disipado. |
| **Greater Command / Greater Forbid Action** | 5 | Will 22 cada asalto | 11 criaturas, 11 asaltos: "flee" / "no cast". Contra Will +14: fallan 35 %. |
| **Hold Person / Sound Burst / Calm Emotions / Obscuring Mist / Consecrate / Glyph of Warding / Symbol of Pain-Sleep-Fear** | 1-6 | 19-23 | Hold Person solo humanoides y repite cada asalto: para esbirros. Consecrate (22 h, 25 po): +3 sagrado a la DC del channel positivo vs no muertos. Symbols: 10 min y 1.000-5.000 po. |
| **Banishment / Dismissal** | 6 / 4 | Will 23 / 21 | 22 DG de extraplanares a 30 pies (+2 DC por objeto odiado) / 1 criatura. Contra invocadores y demonios. |
| 🚫 **Repulsion** | 7 | — | No disponible a nivel 11 (ni como conjuro de dominio de Protection: los dominios siguen el nivel). |

**Dotes opcionales:** Spell Focus (evocation) +1 y Greater +1 (Blade Barrier, Flame Strike, Cleanse); Mythic Spell Focus: +1 más y, por 1 uso, el objetivo tira dos veces la salvación (Reflejos mala +10 vs DC 25: falla 70 % → 91 %). Solo si el jugador quiere jugar DCs; los muros funcionan sin salvación.

### 8.4 Rol 3 — CLÉRIGO DE BATALLA (costo alto; descartado como eje)

- Piezas: Divine Power (4.º: +3 suerte a ataque/daño, 11 pg temporales, ataque extra en ataque completo; personal, 11 asaltos), Righteous Might (5.º: Grande, +4 Fue/Con, −2 Des, +2 armadura natural, RD 5/evil), Bull's Strength, Weapon of Awe, GMW, **Guided Hand** (UC pg. 103: Wis al ataque con el arma predilecta; requiere Channel Smite) y Mythic Guided Hand (Wis al daño).
- **La cuenta del frente 09 (Str 16, cimitarra +1, contra CA 25):** sin buffs +12/+7 → ≈4 de daño por asalto; con Divine Power + Righteous Might + Bull's Strength + GMW + Bless + Weapon of Awe: ataque +20/+15 + extra a +20, daño 1d8+14 (18,5) → **≈40/asalto durante 3-4 asaltos tras 2 asaltos de preparación** (un CR 11 tiene 145 pg). Con Guided Hand (Wis +8) en lugar de Fue: +21/+16/+21 (sin Bull's Strength), daño 1d8+12 (16,5) → ≈37/asalto; sin buffs +17/+12.
- **Por qué no:** 2 asaltos de buffs personales son 2 asaltos sin curar; en cuerpo a cuerpo con CA 24-26 el CR 11 nos acierta 70-75 % con +19 → 100-150 pg recibidos en 3-4 asaltos: **el sanador se vuelve su propio paciente**. Crusader (−1 conjuro/nivel) y Divine Strategist (sin channel) recortan el rol principal. Fue en la compra por puntos roba a Wis/Con/Dex.
- **Lo que sí queda del rol, gratis:** **Spiritual Ally** (4.º, APG pg. 246: 1d10+3 fuerza, +16/+11, **flanquea y hace AdO**, vuela 30 pies como rápida, 11 asaltos; ≈8/asalto contra CA 25 + flanqueo para los 2 DPS) y **Spiritual Weapon** (2.º: 1d8+3, +16/+11, redirigir como movimiento; mítico: redirigir como rápida y propiedad keen/flaming); ambos ignoran RD y pegan a incorpóreos. **Blasting sin preparación:** Flame Strike (11d6 mitad divino, Ref 22), Holy Smite (5d8 + ceguera a malvados, 10d6 a ajenos malvados, Will 21), Searing Light (5d8; 10d6 a no muertos, toque a distancia +10 con Dex 14). Divine Power + un ataque estándar cuando sobra un asalto.

### 8.5 Rol 4 — UTILIDAD / TRAMPAS / EXPLORACIÓN (descartado por parámetros: solo una nota)

Reglas ([AoN] https://www.aonprd.com/Rules.aspx?Name=Traps&Category=Environment — CRB pg. 417): una trampa mágica se detecta con Perception DC 25 + nivel del conjuro y **solo se desarma con el rasgo de clase trapfinding** (Disable Device DC 25 + nivel); "Other characters have no chance to disarm a magic trap". El clérigo puede: Find Traps (2.º, personal, +5 de intuición a Perception para trampas 11 min), Dispel Magic dirigido contra la trampa (50 % vs CL 11), Glyph of Warding propio, invocaciones que las disparen, y el rasgo de campaña Trap Finder (Mummy's Mask PG pg. 10; ⚠️ permiso del GM) para desarmar como pícaro. **El jugador decidió no invertir aquí: los tanques absorben las trampas y el sanador los cura.** Lo único que conservamos del rol es Perception alta (ser la alarma del grupo) y la divinación/viaje de la sección 6 (Augury 81 %, Divination 81 %, Commune 11 preguntas, Wind Walk, Word of Recall, Find the Path).

### 8.6 Rol 5 — INVOCADOR (versión ligera)

- **Reglas** ([AoN] https://www.aonprd.com/SpellDisplay.aspx?ItemName=Summon%20Monster%201 — CRB pg. 350; la URL con numeral romano da error 500): **1 asalto** de lanzamiento (aparece justo antes de tu siguiente turno), close, **11 asaltos**; no puede invocar ni teletransportarse ni usar SLA con componentes caros; los marcados \* llevan plantilla celestial si sos bueno y adoptan tu alineamiento; **invocar una criatura con subtipo de alineamiento convierte el conjuro en uno de ese tipo** → un NG puede invocar arcontes [lawful, good] y azatas [chaotic, good] pero nada [evil]; un LG no azatas; un CG no arcontes.
- **Sacred Summons** (UM pg. 155): acción estándar solo si los subtipos coinciden **exactamente** con el aura. Aura de Sarenrae = **good** → solo criaturas con subtipo [good] a secas: **agathiones** (crítico #5). Los animales celestiales no ganan subtipo [good] con la plantilla (⚠️ sin FAQ; GM). Con **Summon Good Monster** (Champions of Purity pg. 33 — [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Summon%20Good%20Monster; prerreq. alineamiento bueno; da Diehard a los invocados): **SM III silvanshee** (Bestiary 2 pg. 20: stabilize a voluntad, Cat's Luck, explorador que vuela 90) y **SM V vulpinal** (Bestiary 2 pg. 21: CR 6, CA 22, 59 pg, pounce; **lay on hands 3d6 6/día como paladín 7**, aura calm emotions, 3/día holy smite, dispel evil, remove disease; invisibilidad a voluntad) como **acción estándar**. Vulpinal es "un segundo sanador de bolsillo" que cura 3d6 × 6 = 63 pg en 11 asaltos sin gastar nuestras acciones.
- **Otras invocaciones de 6.º para un NG (1 asalto):** Celestial Dire Tiger (Bestiary pg. 265: 105 pg, pounce + rake ≈ 62 de daño en la carga con Augment Summoning; CA 17: esponja), **Huge Earth Elemental** (95 pg, RD 5/—, earth glide, ocupa 15 pies: bloquea un pasillo), Triceratops (119 pg, carga 4d10+16), Lillend (CG, Bestiary pg. 26: inspire courage +2 como bardo 7 y conjuros de bardo con cures), Invisible Stalker (explorador invisible), 1d3 bralani (CG: 2 CSW/día cada uno), 1d4+1 hound archons (LG, Bestiary pg. 19: aid a voluntad, magic circle against evil constante, RD 10/evil), 1d4+1 lantern archons (rayos de toque 1d6 que ignoran toda RD).
- **Dotes:** Spell Focus (conjuration) → Augment Summoning (+4 Fue/Con) → Superior Summoning (+1 criatura); Sacred Summons; Summon Good Monster. Paquete completo: 5 dotes. Versión ligera: **Summon Good Monster + Sacred Summons (2 dotes)** y preparar 1 SM V. Mítico: **Mighty Summons** (tier 1: RD 5/epic y +1 criatura), Divine Guardian (a tier 3 solo SM I / SM III: pobre), Mythic Augment Summoning.
- **Herald Caller:** descartado (sección 4).

### 8.7 Cuadro comparativo para NUESTRO grupo (2 tanques + 2 DPS cuerpo a cuerpo + apoyo social)

| Rol | Costo en dotes | Costo en dominios / arquetipo | Compromete la curación | Potencia real a nivel 11 | Complejidad | Veredicto |
|---|---|---|---|---|---|---|
| **Buffer** | 0 | 0 (Glory/Heroism lo potencia) | Ninguna | Blessing of Fervor (+4 ataques/asalto al grupo), Heroism +2, Prayer, GMW/Magic Vestment, Heroes' Feast | Baja | **Rol secundario por defecto** |
| **Control de muros** | 0 (Spell Focus opcional) | 0 | Media (6.º: Heal vs Blade Barrier; Inspired Spell lo resuelve) | Mythic Blade Barrier 11d8 como **inmediata**; Wall of Stone; Silence; Greater Dispel | Media | **Segundo rol: 1 Blade Barrier preparado y mítico** |
| **Invocador ligero** | 2 (Summon Good Monster + Sacred Summons) | 0 | Media (SM V vs Breath of Life; con Sacred Summons, acción estándar) | Vulpinal: 63 pg de lay on hands + holy smite + calm emotions sin nuestras acciones | Alta (stat blocks) | Opcional a partir de nivel 12-13, cuando sobren dotes |
| **Batalla** | 2-4 | Crusader/Divine Strategist recortan | Alta (asaltos de buff, pg propios) | ≈40/asalto tras 2 asaltos | Media | **Descartado**; queda Spiritual Ally/Weapon |
| **Utilidad / trampas** | 0 | Knowledge/Travel | Nula en conjuros; alta en rangos | Find Traps, Dispel, Perception | Baja | **Descartado por el jugador** (solo Perception y divinación) |

> **➡️ Para NUESTRA build (sección 8)**
> - **Plan "nadie sangra":** asalto 1 Aura of Heroism (rápida) + Blessing of Fervor (estándar); asalto 2 Prayer o Spiritual Ally (flanqueo para los 2 DPS) o Flame Strike/Holy Smite si hay grupo enemigo; en cualquier momento **Mythic Blade Barrier como acción inmediata** (1 uso + ranura de 6.º; 11d8 Ref 23 mitad) para cortar una carga o encerrar al jefe con sus refuerzos fuera — sin renunciar a la estándar del turno siguiente.
> - **Plan "lanzador enemigo":** Silence sobre un punto (sin salvación), Greater Dispel Magic dirigido a sus buffs, Banishment si es extraplanar (Will 23).
> - **Plan "agarradores/paralizadores":** Freedom of Movement al DPS + Liberating Command (inmediata, +22 a Escape Artist) + Remove Paralysis a distancia (close, hasta 4).
> - **Invocaciones:** no invertimos dotes ahora; con Inspired Spell **no** se pueden lanzar (1 asalto de lanzamiento). Si a nivel 13 sobra una dote: Summon Good Monster + Sacred Summons para el vulpinal (estándar) como segundo sanador; hasta entonces, un SM VI de Huge Earth Elemental preparado solo en días de "pasillo".
> - **Batalla:** ni Guided Hand ni Fue. Cimitarra +1 (arma predilecta de Sarenrae) para rematar incorpóreos con Ghostbane Dirge o cuando sobra un asalto con Divine Power.
> - **Trampas:** nada. Perception +21 (11 rangos + Wis 8 + 2 racial aasimar; +25 con Seeker si se quiere) para no ser sorprendidos; el resto lo absorben los tanques.

---

## 9. EQUIPO CON EL WBL DE NIVEL 11 (82.000 PO)

### 9.1 Reglas de presupuesto y ranuras

- **WBL nivel 11 = 82.000 po** (nivel 12: 108.000; 13: 140.000). "Characters should spend no more than half their total wealth on any single item" → **tope 41.000 po por objeto**. Reparto orientativo del CRB (25/25/25/15/10 %) no obliga a un lanzador. Mythic Adventures **no** modifica la WBL (nada en AoN). [AoN] https://aonprd.com/Rules.aspx?ID=254 — CRB pg. 399, Table 12-4.
- **Ranuras** ([AoN] https://www.aonprd.com/Rules.aspx?ID=369 — CRB pg. 459): armor, belt, body, chest, eyes, feet, hands, head, **headband** (cintas y **filacterias**), neck, **ring (hasta dos)**, shield, shoulders, wrist. Sin ranura: rods, ioun stones, pearls of power, haversack, wayfinder, varitas, pergaminos. **Phylactery of Positive Channeling y Headband of Inspired Wisdom comparten la ranura headband** (muchas listas de "big six" de internet lo omiten).
- **Añadir una habilidad a un objeto con ranura: +50 %** ("the cost of adding any additional ability to that item increases by 50%" — [AoN] https://www.aonprd.com/Rules.aspx?ID=412 — CRB pg. 553). Headband +4 + Phylactery = 16.000 + 11.000 × 1,5 = **32.500 po** (< 41.000). ⚠️ Comprar un objeto combinado "de tienda" no está garantizado: hay que craftearlo o encargarlo (GM).
- **Bonos de característica**: los objetos de +Wis/+Con son temporales las primeras 24 h ("Ability bonuses with a duration greater than 1 day actually increase the relevant ability score after 24 hours" — [AoN] https://aonprd.com/Rules.aspx?ID=415 — CRB pg. 554): sin conjuros extra el primer día. Enhancement: Headband y Ioun Stone Incandescent Blue Sphere **no se acumulan**.

### 9.2 Varitas, pergaminos, pociones, varas y crafting (reglas)

- **Spell trigger (varitas):** "can be used by anyone whose class can cast the corresponding spell" (basta que esté en la lista de clase); estándar, no provoca; 50 cargas; solo conjuros ≤ 4.º; precio nivel × CL × 750 (+ 50 × componente con costo); **no se recargan** (UCam pg. 171: opción del GM con mínimo 25 cargas). [AoN] https://aonprd.com/Rules.aspx?ID=367 y https://aonprd.com/Rules.aspx?ID=383 — CRB pg. 458-459, 496; https://aonprd.com/Rules.aspx?ID=1430. ⚠️ Una varita de un conjuro de 3 asaltos (Lesser Restoration): RAW "usually a standard action"; hay mesas que aplican el tiempo del conjuro (el frente 05 cita "If the spell being cast has a longer casting time than 1 action … it takes that long" de la misma página 496): preguntar.
- **Spell completion (pergaminos):** conjuro en la lista de clase, tipo divino y Wis ≥ 10 + nivel; si tu CL < CL del pergamino, prueba de CL (DC = CL + 1) y Wis DC 5 si fallás; el CL del pergamino es el mínimo del creador (BoL CL 9, Heal CL 11) → a nivel 11 nunca fallamos con pergaminos de clérigo ≤ 6.º. Precio nivel × CL × 25 + componentes con costo. Activar = estándar (o el tiempo del conjuro) y **provoca**. [AoN] https://aonprd.com/Rules.aspx?ID=381 — CRB pg. 490.
- **Pociones:** ≤ 3.º, nivel × CL × 50; beber es estándar y **provoca**; administrar a un inconsciente es asalto completo. [AoN] https://aonprd.com/Rules.aspx?ID=378 — CRB pg. 477.
- **Varas de metamagia:** 3 usos/día; lesser ≤ 3.º, normal ≤ 6.º, greater ≤ 9.º; una sola vara por conjuro; no cambian la ranura ni (para un preparador) el tiempo; no dan la dote; no sirven sobre channel (no es conjuro). [AoN] https://www.aonprd.com/MagicRods.aspx?Category=Metamagic — CRB pg. 484 (AoN lo etiqueta por error como "Pathfinder #1: Burnt Offerings pg. 484" — nota del auditor). Precios: Reach/Extend/Selective/Silent 3.000 / 11.000 / 24.500; Empower 9.000 / 32.500 / 73.000; Maximize 14.000 / 54.000 / 121.500; Quicken 35.000 / 75.500 / 170.000; Merciful 1.500 / 5.500 / 12.250.
- **Crafting** (si se tomara Craft Wondrous Item, CRB pg. 120): materiales = mitad del precio; 8 h por cada 1.000 po; DC 5 + CL (+5 por prerrequisito no cumplido); un objeto por día. [AoN] https://www.aonprd.com/Rules.aspx?ID=401 — CRB pg. 548-553. UCam pg. 173: un PJ crafter puede superar la WBL "about 25 %" (≈ 102.500 po de valor) ([AoN] https://www.aonprd.com/Rules.aspx?ID=1432). Con nuestras 6 dotes ocupadas, **no** craftearemos: se anota como alternativa si el GM regala tiempo muerto y una dote.

### 9.3 La decisión Headband vs Phylactery + Ioun Stone (crítico #12)

| Opción | Precio | Wis final | Efecto | Veredicto |
|---|---|---|---|---|
| A. Phylactery (11.000) + Ioun Stone Incandescent Blue Sphere (8.000; sin ranura; CL 12 para craftearla) | 19.000 | 23 + 2 = **25 (+7)** | channel 8d6; ranuras 4/7/7/7/5/4/3 | La del frente 08. Solapa: Sphere y Headband son enhancement. |
| **B. Headband of Inspired Wisdom +4** (UE pg. 250 / CRB pg. 516 — [AoN] https://www.aonprd.com/MagicWondrousDisplay.aspx?FinalName=Headband+of+Inspired+Wisdom4) | **16.000** | 23 + 4 = **27 (+8)** | +1 DC a todos los conjuros, +1 Will, +1 concentración, +1 Rebuke Death, +1 Perception/Heal/Sense Motive, **+1 ranura de 4.º** (4/7/7/7/**6**/4/3); channel 6d6 | **Elegida.** Con 4 cuerpo a cuerpo y combates muy difíciles, +1 a DC de Blade Barrier/Hold/Command, +1 Will y un Blessing of Fervor/Death Ward más al día pesan más que +7 pg por channel. |
| C. Headband +4 **con la Phylactery añadida** | 32.500 (16.250 crafteado) | 27 (+8) | todo lo de B + channel 8d6 | La meta a nivel 12 (WBL 108.000) o ya, si el GM permite encargarlo y se recorta la lista "recomendado" (ver 9.5). |

Con la compra por puntos ya fijada (Wis 17 → 19 aasimar → 21 niveles 4/8 → 23 tier 2), B da **Wis 27**; a nivel 12 (+1) → 28 (+9): 4/8/7/7/6/5/3.

### 9.4 Lista NÚCLEO (obligatoria) — 50.679 po

| # | Objeto | Ranura | Precio | Fuente AoN | Por qué |
|---|---|---|---|---|---|
| 1 | **+1 Mithral Breastplate** | armor | 5.200 | https://www.aonprd.com/SpecialMaterials.aspx — UE pg. 51 / CRB pg. 154; https://aonprd.com/Rules.aspx?ID=376 | +7 CA, Dex máx +5, ACP −1, **30 pies**, 15 lb; sigue siendo armadura media (competencia OK). 🚫 Mithral Full Plate exige Heavy Armor Proficiency. |
| 2 | **+1 Darkwood heavy wooden shield** | shield | 1.257 | SpecialMaterials (darkwood: mw incluido, ACP −2 → 0, +10 po/lb) | +3 CA, ACP 0, 5 lb (7 + 150 + 100 + 1.000). Mithral heavy steel (1.020 + 1.000) da lo mismo por más. Se suelta el arma para lanzar, no el escudo. |
| 3 | **Headband of Inspired Wisdom +4** | headband | 16.000 | UE pg. 250 / CRB pg. 516 | Wis 27 (ver 9.3). Es el objeto más caro (20 % de la WBL). |
| 4 | **Cloak of Resistance +3** | shoulders | 9.000 | https://www.aonprd.com/MagicWondrousDisplay.aspx?FinalName=Cloak+of+Resistance3 — UE pg. 264 / CRB pg. 507 | Fort +13 / Ref +8 / Will +18. El sanador que falla la salvación no cura a nadie. |
| 5 | **Ring of Protection +1** | ring | 2.000 | https://www.aonprd.com/MagicRingsDisplay.aspx?FinalName=Ring+of+Protection1 — UE pg. 172 / CRB pg. 479 | Desvío permanente (Shield of Faith +3 lo pisa cuando está activo). |
| 6 | **Amulet of Natural Armor +1** | neck | 2.000 | UE pg. 256 / CRB pg. 500 | +1 CA acumulable con todo. |
| 7 | **Belt of Mighty Constitution +2** | belt | 4.000 | UE pg. 209 / CRB pg. 502 | Con 16: +11 pg y +1 Fort. |
| 8 | **Handy Haversack** | — | 2.000 | https://www.aonprd.com/MagicWondrousDisplay.aspx?FinalName=Handy+Haversack — UE pg. 301 / CRB pg. 516 | Pergaminos/varitas como **acción de movimiento sin AdO**. |
| 9 | **+1 Scimitar** (arma predilecta de Sarenrae) | mano | 2.315 | https://www.aonprd.com/EquipmentWeaponsDisplay.aspx?ItemName=Scimitar — UE pg. 18; https://aonprd.com/Rules.aspx?ID=377 | 15 + 300 + 2.000. Para incorpóreos y para el asalto que sobra. |
| 10 | **Wand of Cure Light Wounds** (CL 1) | — | 750 | https://aonprd.com/Rules.aspx?ID=383 | ≈ 275 pg fuera de combate sin gastar ranuras (2,7 po/pg). |
| 11 | **Pergaminos:** Breath of Life ×2 (CL 9: 1.125 c/u = 2.250), Restoration ×1 (700 + 100 de polvo = 800), Remove Curse (375), Neutralize Poison (700) | — | 4.125 | https://aonprd.com/Rules.aspx?ID=381 | Emergencias sin haberlas preparado ese día (Inspired Spell cubre los de 1 estándar, no Restoration). |
| 12 | **Polvo de diamante:** 100 po ×2 + **1.000 po ×1** | — | 1.200 | https://www.aonprd.com/SpellDisplay.aspx?ItemName=Restoration — CRB pg. 334 | Dos Restoration "normales" y una contra un nivel negativo permanente (1/semana por objetivo). |
| 13 | **Holy symbol (tattoo)** 100 + equipo mundano 532 (healer's kit 50, spell component pouch 5, silver holy symbol 25, wooden 1, cleric's kit 16, everburning torch 110, silk rope 10, holy water ×2 50, antitoxin ×2 100, antiplague ×2 100, smelling salts 25, alchemist's fire ×2 40) | — | 632 | https://www.aonprd.com/EquipmentMiscDisplay.aspx?ItemName=Holy+symbol+%28tattoo%29 — UE pg. 57 | El tatuaje es foco divino para conjuros **y channel** (resuelve "presentar el símbolo" con escudo y arma). |
| 14 | **Polvo de diamante para Heroic Fortune** 100 po ×2 | — | 200 | https://www.aonprd.com/SpellDisplay.aspx?ItemName=Heroic%20Fortune — APG pg. 324 | Un Hero Point temporal para el tanque (o para nuestro Cheat Death) antes del jefe. |
| | **Subtotal núcleo** | | **50.679** | | |

Suma: 5.200 + 1.257 = 6.457; + 16.000 = 22.457; + 9.000 = 31.457; + 2.000 = 33.457; + 2.000 = 35.457; + 4.000 = 39.457; + 2.000 = 41.457; + 2.315 = 43.772; + 750 = 44.522; + 4.125 = 48.647; + 1.200 = 49.847; + 632 = 50.479; + 200 = **50.679**.

**CA resultante:** 10 + 7 + 3 + 2 (Dex 14) + 1 + 1 = **24**; con Magic Vestment ×2 (mañana) **26**; con Shield of Faith +3 activo (reemplaza el anillo) **28**. **Salvaciones:** Fort 7 + 3 + 3 = **+13**; Ref 3 + 2 + 3 = **+8**; Will 7 + 8 + 3 = **+18**. **Iniciativa:** +2 (Dex) + 2 (Reactionary) + 3 (Amazing Initiative) = **+7**.

### 9.5 Lista RECOMENDADA — 31.150 po (total 81.829; sobran 171 po)

| # | Objeto | Precio | Por qué |
|---|---|---|---|
| 15 | **Phylactery of Positive Channeling añadida a la diadema** (11.000 × 1,5) | 16.500 | Channel 8d6 (28) y Reactive Healing 8d6. ⚠️ Requiere que el GM permita encargar/craftear el objeto combinado (UE pg. 252 / CRB pg. 526: "creator must be a 10th-level cleric"). Si no lo permite: **no comprar la Phylactery** (no cabe en la ranura) y pasar los 16.500 a: Cloak +4 ya incluida abajo + Pearl of Power 2.º (4.000) + Ring of Sustenance (2.500) + Boots of Speed (12.000) … o guardar para nivel 12. |
| 16 | **Cloak of Resistance +3 → +4** | 7.000 | (16.000 − 9.000). Fort +14 / Ref +9 / Will +19. Con combates muy difíciles, la salvación es la mejor "curación". |
| 17 | **Rod of Metamagic, Extend (lesser)** | 3.000 | 3/día, ≤ 3.º: Magic Vestment ×2 a **22 h** (CA 26 todo el día, sin rezar dos veces) + Communal Resist Energy o Bless extendido. https://www.aonprd.com/MagicRodsDisplay.aspx?FinalName=Rod+of+Metamagic%2C+Extendlesser — UE pg. 189 |
| 18 | **Scroll of Heal** (CL 11) | 1.650 | Un cuarto Heal del día sin ranura ni poder mítico. Activar un pergamino (spell completion) es lanzar el conjuro y **provoca AdO**; ⚠️ que Faith's Reach ("Whenever you cast a divine spell with a range of touch") aplique a un conjuro leído de pergamino es discutible: asumir toque salvo que el GM diga lo contrario. |
| 19 | **Pearl of Power (1st)** | 1.000 | https://www.aonprd.com/MagicWondrousDisplay.aspx?FinalName=Pearl+of+Power1st — UE pg. 315: un Protection from Evil / Shield of Faith / Liberating Command extra. |
| 20 | **Wand of Protection from Evil** (CL 1) | 750 | +2/+2 e inmunidad a control mental 1 min, 50 veces, sin ranuras. |
| 21 | **Wand of Lesser Restoration** (CL 1, cleric 2 pero paladin 1 — crítico #10) | 750 | Fatiga y 1d4 de daño de característica ×50 fuera de combate; **no 4.500 po**. ⚠️ Confirmar con el GM la acción de la varita (3 asaltos vs estándar). |
| 22 | **Ioun Stone, Dusty Rose Prism (cracked)** | 500 | +1 competencia a iniciativa → **+8**. Seekers of Secrets pg. 46. |
| | **Subtotal** | **31.150** | |

Suma: 16.500 + 7.000 = 23.500; + 3.000 = 26.500; + 1.650 = 28.150; + 1.000 = 29.150; + 750 = 29.900; + 750 = 30.650; + 500 = **31.150**. Total **50.679 + 31.150 = 81.829 ≤ 82.000**.

Ranuras ocupadas: armor, shield, headband, shoulders, neck, belt, ring ×1. Libres: head, eyes, hands, feet, chest, body, wrist, ring 2.

### 9.6 Lista LUJO (niveles 12-13; WBL 108.000 / 140.000), en orden de compra

1. **Pearl of Power (2nd)** 4.000 y **(3rd)** 9.000 (Lesser Restoration / Magic Vestment extra).
2. **Boots of Speed** 12.000 (haste 10 asaltos/día como acción gratuita: un movimiento extra para llegar; no se acumula con Blessing of Fervor sobre nosotros).
3. **Lesser Talisman of Life's Breath** 3.500 para el tanque (Occult Adventures pg. 263: "The first time that the wearer dies, he is automatically affected by breath of life"; ranura neck, compite con el amuleto del tanque) o **Healing Power** 2.400.
4. **Ioun Stone Pale Green Prism (cracked)** 4.000 (+1 competencia a salvaciones) y **Dusty Rose Prism** 5.000 (+1 CA perspicacia).
5. **Ring of Sustenance** 2.500 (2 h de sueño; guardias) o **Ring of Freedom of Movement** 40.000 (nivel 13+).
6. **Armadura +2** 3.000 (solo cuando Magic Vestment llegue a +3 a CL 12) y **Comfort** +5.000 (dormir con armadura; ACP 0; PFS Field Guide pg. 50 — 🚫 "+1.000" es falso).
7. **Rod of Metamagic, Reach (normal)** 11.000: Heal/BoL a 50 pies (+20 sobre Faith's Reach) 3/día; **Rod of Quicken (lesser)** 35.000 (CSW rápida 3/día): tope 41.000, solo a nivel 13+.
8. **Ring of Inner Fortitude (minor)** 18.000 (UE pg. 171: −2 daño/penalizador de característica, −1 drenaje).
9. Arma **Holy** (+2: 18.000 total) o **Bane (undead)** (8.000 total); **Healer's Gloves** 2.500 (UE pg. 238, +5 Heal: sí existe en 1e; la de 2e es otra cosa); **Eyes of the Eagle** 2.500; **Wayfinder** 500 (solo si hay ioun stones).
10. **Restorative Ointment** 4.000 (5 dosis: neutralize poison / remove disease +5, 1d8+5) — lujo: lo hacemos con conjuros.

**Descartados con motivo:** Belt of Physical Might (10.000 por +2/+2), Bracers of Armor (no acumulan con armadura), Muleback Cords (shoulders), Mask of Giants (wild shape), armadura Champion (smite), Spell Storing (dispara contra el atacante), Mithral Full Plate, Robe of Arcane Heritage, Ring of Heroes (8.000: ocupa anillo y da Luck of Heroes: sección 11), Hero's Blade 17.315 (6 Hero Points; ⚠️ "reservado a villanos" APG pg. 324: preguntar antes de soñar), 🚫 "Elixir of Life" (no existe como objeto en PF1: es un discovery de alquimista de nivel 16, APG pg. 30 — corrección del auditor), 🚫 propiedad Guided (Pathfinder #10, era 3.5, no reimpresa), 🚫 Impact "solo contundentes" (regla 3.5; en UE pg. 143 vale para cualquier arma c/c no ligera), **Wand of Infernal Healing** (750 po, 500 pg; [evil]: un clérigo de Sarenrae no la activa sin consecuencias temáticas; la FAQ "Items as Spells" no resuelve la prohibición de alineamiento — ⚠️ GM; postura PFS 2012 de Mike Brock solo para PFS).

### 9.7 Política de consumibles

- **Fuera de combate:** varita de CLW (2,7 po/pg) → channel sobrante → Recuperation. Nunca ranuras.
- **Pergaminos de emergencia** en el haversack (movimiento sin AdO para sacarlos): BoL ×2, Restoration, Remove Curse, Neutralize Poison, Heal. Reponer BoL en cada ciudad (1.125).
- **Componentes con costo siempre encima:** polvo de diamante 100 ×4 (Restoration ×2 + Heroic Fortune ×2), 1.000 ×1 (nivel negativo permanente), 250 (True Seeing) cuando haya un invisible conocido, y **el diamante de 5.000 de Raise Dead** en cuanto la WBL lo permita (a nivel 12); mientras tanto, un pergamino de Raise Dead cuesta 6.125 (incluye el diamante): mejor el diamante solo.
- Holy water ×2, antitoxin/antiplague ×2 (+5 alquímico 1 h), smelling salts (despierta a un moribundo "conscious and staggered" — [AoN] https://www.aonprd.com/EquipmentMiscDisplay.aspx?ItemName=Smelling+salts).

> **➡️ Para NUESTRA build (sección 9)**
> - **Núcleo 50.679 + recomendado 31.150 = 81.829 po.** Objeto más caro: la diadema combinada (32.500 < 41.000).
> - Bloque defensivo final: **CA 24 / 26 con Magic Vestment ×2 (22 h con la Rod of Extend) / 28 con Shield of Faith; Fort +14, Ref +9, Will +19; pg 120; iniciativa +8; concentración +19 (+21 con Focused Mind)**.
> - **Channel 8d6** si el GM acepta el objeto combinado; si no, 6d6 y los 16.500 van a Pearl 2.º + Ring of Sustenance + ahorro para nivel 12 (donde el objeto combinado se encarga con 26.000 de tesoro nuevo).
> - Faith's Reach hace innecesarias las varas de Reach: no se compran. Quicken lesser (35.000) no entra hasta nivel 13.
> - Todo lo de trampas/exploración (Eyes of the Eagle, Wayfinder, Feather Tokens) queda para el lujo o para nunca.

---

## 10. RAZAS, DEIDADES, ALINEAMIENTO Y ATRIBUTOS

### 10.1 Razas (patrón `https://www.aonprd.com/RacesDisplay.aspx?ItemName=<Raza>`)

Criterio: **Wis** (conjuros, DC, usos de dominio, Will), **Cha** (usos y DC de channel; **Cha 13** para Selective Channeling), **Con** (pg), Dex (CA/Ref/iniciativa). Un −2 a Con siempre duele; un −2 a Cha mata el plan de channel.

| # | Raza | Atributos | Lo que aporta | Fuente | Veredicto |
|---|---|---|---|---|---|
| 1 | **Aasimar** (base) | **+2 Wis, +2 Cha** | Native Outsider (inmune a *charm/hold person* salvo Scion of Humanity), darkvision 60, resist ácido/frío/electricidad 5, Skilled (+2 Diplomacy y **Perception**), *daylight* 1/día (CL = nivel). Rasgos alternativos: **Deathless Spirit** (ARG pg. 84: resist 5 a energía negativa, +2 vs muerte/drenaje/nigromancia, no pierde pg por nivel negativo; reemplaza Celestial Resistance — ideal contra no muertos), **Scion of Humanity** (ARG pg. 85: cuenta como humano para prerrequisitos; pasa a ser vulnerable a *charm person*), Exalted Resistance (SR 16 vs [evil] y ajenos malvados). Heritages (Blood of Angels pg. 21-23): Lawbringer +2 Con/+2 Wis, Plumekith +2 Dex/+2 Wis; el resto no da Wis. FCB clérigo: +½ daño de channel vs no muertos (solo ofensivo). | ARG pg. 84-85; ISR pg. 214 | **La referencia:** los dos atributos del sanador sin penalización. |
| 2 | **Human** | +2 a uno (Wis) | **Dote extra a nivel 1** (7.ª dote: Improved Initiative o Combat Casting) y **Skilled (+11 rangos)** que resuelven Perception/Kn (planes). Alternativos: **Dual Talent** (ARG pg. 72: +2 Wis/+2 Con, pierde dote y Skilled), **Awareness** (ISR pg. 213: +1 a todas las salvaciones y concentración, reemplaza la dote), Focused Study. FCB: +1 CL vs RC de ajenos (flojo). | CRB pg. 27; ARG pg. 72; ISR pg. 213-214 | Alternativa 1. Para Cha 14 hay que comprar Cha 14 (5 puntos): la compra queda Str 10 / Dex 12 / Con 14 / Int 10 / Wis 17 / Cha 14 → Wis 19 / Cha 14, con −2 Dex respecto al aasimar a cambio de una dote y 11 rangos. |
| 3 | **Half-Elf** | +2 a uno (Wis) | Skill Focus gratis (Adaptability) o **Dual Minded** (ARG pg. 42: +2 Will); inmune a sueño mágico, +2 vs encantamientos; **FCB clérigo: +1/3 al channel → +3 a nivel 11** (el mejor FCB de sanador). | CRB pg. 24; ARG pg. 42 | Alternativa 2 (pierde el +2 Cha). |
| 4 | **Dwarf** | +2 Con, +2 Wis, **−2 Cha** | 20 pies no reducidos por armadura, Hardy (+2 vs veneno/conjuros/Sp), **Spiritual Support** (ISR pg. 210: +1 CL en conjuros de conjuration (healing) sobre aliados: Heal 120; reemplaza Greed y Hardy), FCB +½ uso de un poder de dominio de 1.º (+5 Rebuke Death). | CRB pg. 21; ARG; ISR pg. 210 | Solo para un sanador que no dependa del channel (Cha 8-13). |
| 5 | **Samsaran** | +2 Int, +2 Wis, **−2 Con** | **Mystic Past Life** (ARG pg. 198: 1 + Wis mod conjuros de otra lista divina — druida/oráculo/paladín — de por vida; ⚠️ sin FAQ sobre el nivel), Lifebound (+2 vs muerte y a estabilizar). | ARG pg. 198 | Interesante (Barkskin de druida 2, Stoneskin de druida 5, Bestow Grace de paladín 2: listas divinas; Restful Sleep es de bardo y no vale); el −2 Con lo descarta con combates muy difíciles. |
| 6 | **Undine / Grippli / Kasatha** | +2 Dex, +2 Wis (−2 Str; kasatha sin penalización y +2 esquiva) | Sanador a distancia; kasatha (People of the Stars pg. 8) sería mecánicamente #1 si el GM la permite (4 brazos). | ARG; People of the Stars | Permiso del GM. |

🚫 **No compatibles con un sanador positivo:** dhampir y wayang (Light and Dark): la energía positiva los daña; wyrwood (constructo: los cure no lo curan); svirfneblin/drow/enano Magic Resistant (la RC propia bloquea las curas ajenas salvo que la bajen).

### 10.2 Deidades con Healing (verificadas página por página)

Lista oficial del dominio ([AoN] https://www.aonprd.com/DomainDisplay.aspx?ItemName=Healing): Aerekostes, Aesocar, Barravoclair, Bolka, Cihua Couatl, Dalenydra, Dammar, Immonhiel, Irori, Isis, Jiraviddain, Korada, Lorcan, Lythertida, Marishi, Milani, Mother Vulture, Osiris, Osolmyr, Pharasma, Qi Zhong, Raetorgash, Reymenda, Sarenrae, Sekhmet, Selket, Shei, Teshallas, Vildeis. **No lo conceden** (aunque circulen listas que lo digan): Erastil, Iomedae, Shelyn, Desna, Torag, Cayden Cailean, Abadar, Gozreh, Nethys, Arshea, Kurgess, Ragathiel… (verificado por el auditor en las 9 páginas principales). Regla: alineamiento del clérigo a **un paso** de la deidad en un solo eje ([AoN] Cleric — CRB pg. 38).

| Deidad | Al. | Fuente | Dominios | Subdominios útiles | Arma | Obediencia (Deific Obedience: Kn religion 3; boons a 12/16/20 DG) | Clérigos |
|---|---|---|---|---|---|---|---|
| **Sarenrae** | NG | ISG pg. 132 — [AoN] https://www.aonprd.com/DeityDisplay.aspx?ItemName=Sarenrae | Fire, Glory, Good, **Healing**, Sun | Agathion, Day, **Heroism**, Light, Medicine\*, Redemption, Restoration, Resurrection, Revelation, Thirst\* | **Scimitar** (marcial, 18-20) | "Offer to heal a stranger of his wounds… +2 sacred bonus on Perception checks". Boons (desde 12 DG): Evangelist 1 *Healing Spirit* (CLW 3/día, aid 2/día o remove curse 1/día); Exalted 2 *Healing Sunburst*; Sentinel 2 *Channel Efficiency* (+4 Heal). | LG, NG, CG, N |
| **Dalenydra** | NG | ISG pg. 322 — [AoN] https://www.aonprd.com/DeityDisplay.aspx?ItemName=Dalenydra | Good, **Healing**, Protection, Repose | Agathion, Defense, Medicine\*, Restoration, Resurrection | Light mace | Sin obediencia en AoN (Celestial Obedience: Kn planes 3 — corrección del auditor). | LG, NG, CG, N |
| **Milani** | CG | Inner Sea Faiths pg. 71 — [AoN] https://www.aonprd.com/DeityDisplay.aspx?ItemName=Milani | Chaos, Good, **Healing**, Liberation, Protection | Azata, Defense, **Freedom**, Purity, Restoration, Revolution | Morningstar | "+2 sacred bonus on all saving throws against charm and compulsion effects, and a +2 sacred bonus on all rolls made to dispel or remove such effects from others". | NG, CG, CN |
| **Qi Zhong** | NG | Dragon Empires Gazetteer pg. 58 — [AoN] https://www.aonprd.com/DeityDisplay.aspx?ItemName=Qi%20Zhong | Good, **Healing**, Knowledge, Magic, Protection | Agathion, Alchemy\*, **Divine**, Medicine\*, Memory, Purity, Restoration, Resurrection | Heavy mace | Sin obediencia en AoN. | LG, NG, CG, N |
| **Korada** | NG | ISG pg. 322 — [AoN] https://www.aonprd.com/DeityDisplay.aspx?ItemName=Korada | Good, **Healing**, Magic, Protection | Agathion, Defense, Divine, Medicine\*, Restoration | Unarmed strike | "+4 sacred bonus on saves against effects with the chaotic or lawful descriptor" (Celestial Obedience). | LG, NG, CG, N |
| **Pharasma** | N | ISG pg. 116 — [AoN] https://www.aonprd.com/DeityDisplay.aspx?ItemName=Pharasma | Death, **Healing**, Knowledge, Repose, Water | Ancestors, Flowing, Ice, Memory, Psychopomp, Resurrection, Souls, Thought (**sin Restoration**) | Dagger | "+2 profane or sacred bonus on attack rolls made with daggers". Nota (ISG pg. 123): clérigos con Death cambian *animate dead* por *speak with dead*. | LN, N, CN, NG, NE |
| **Irori** | LN | ISG pg. 84 — [AoN] https://www.aonprd.com/DeityDisplay.aspx?ItemName=Irori | **Healing**, Knowledge, Law, Rune, Strength | Medicine\*, Resolve, Restoration, Memory, Thought… | Unarmed strike | +4 a Knowledge. Rasgo Wisdom in the Flesh. | LG, LN, LE, N |
| **Immonhiel** | CG | ISG pg. 322 | Chaos, Good, **Healing**, Plant | Azata, Growth, Medicine, Restoration, Resurrection | Handaxe | "+4 sacred bonus on saves against disease" (Celestial Obedience). | NG, CG, CN |
| **Shei / Lythertida / Bolka / Isis** | NG | ISG pg. 320-324; Pathfinder #80 pg. 65 | Community + **Healing** (+ Good; Isis + Charm, Magic) | Agathion, Family, Friendship, Restoration… | Sickle / unarmed / mace / quarterstaff | Panteones empíreo/osiriano: permiso del GM. | LG, NG, CG, N |
| **Vildeis / Osiris / Aesocar** | LG | ISG pg. 324; Pathfinder #80; #123 | **Healing** + Law (+ Destruction / Repose / Protection, Artifice) | Archon, Martyr, Restoration, Resurrection… | Dagger / flail / mancatcher | Vildeis: "+4 sacred bonus on saving throws against effects that damage, drain, or penalize ability scores". | LG, NG, LN |

(\* = apócrifo, rasgo Acolyte of Apocrypha.) **Lymnieris** (LG; sin Healing) tiene una obediencia que dice "Healing spells you cast heal 1 more point of damage per die" (+6 en CCW; Heal +0): curiosidad; ritual explícito y sin Healing. **Clérigo sin deidad**: elige dos dominios cualesquiera con aprobación del GM, sin arma predilecta, sin Deific Obedience, sin aura salvo por el propio alineamiento; ⚠️ la restricción de Golarion que exige deidad no está en AoN.

**Por qué Sarenrae gana para nosotros:** única deidad Core con **Healing + Glory/Heroism** (buff de acción rápida) + Sun (plan anti-no muertos) + Good/Agathion; rasgo de religión **Envoy of Healing** (HH pg. 12); cimitarra marcial; obediencia con +2 Perception y boons de sanación desde nivel 12; alineamiento NG (puede lanzar [lawful] y [chaotic]: Archon's Aura, Order's Wrath, Chaos Hammer). **Alternativas:** Dalenydra (Healing + Repose contra no muertos, misma NG, señora empírea: permiso del GM) y Milani (Healing + Liberation, CG, obediencia anti-encantamiento).

### 10.3 Alineamiento (reglas exactas; [AoN] Cleric — CRB pg. 38-41)

1. "A cleric's alignment must be within one step of her deity's, along either the law/chaos axis or the good/evil axis" → Sarenrae NG admite LG, NG, CG y N.
2. **Channel:** "A good cleric (or one who worships a good deity) channels positive energy… A neutral cleric who worships a neutral deity (or one who is not devoted to a particular deity) must choose… Once this choice is made, it cannot be reversed." → **un clérigo N de deidad buena canaliza positivo obligatoriamente** (corrección del auditor del frente 10); solo eligen los N de deidad N o sin deidad (Pharasma).
3. **Spontaneous casting:** "A good cleric (or a neutral cleric of a good deity)" → cure. N de deidad N: elige una vez cure/inflict.
4. **Descriptores:** "can't cast spells of an alignment opposed to her own or her deity's" → NG de Sarenrae: nada [evil]; sí [lawful] y [chaotic]. LG de Sarenrae: nada [evil] ni [chaotic]. Un N de Pharasma no tiene descriptor bloqueado por regla (lo limita el código: crear no muertos = ex-clérigo).
5. **Dominios de alineamiento** solo si coincide el propio (Good solo si sos bueno).
6. Los **cure no tienen descriptor**: cualquier alineamiento los lanza; lo que cambia es la conversión espontánea y el channel.
7. **Ex-clérigo:** violar gravemente el código → pierde todo salvo competencias hasta *atonement*.

### 10.4 Atributos: compra por puntos 25 (con +1 a niveles 4 y 8, +2 de tier 2 y Headband +4)

Reglas: [AoN] https://aonprd.com/Rules.aspx?ID=90 — CRB pg. 15-16 (7: −4 · 8: −2 · 9: −1 · 10: 0 · 11: 1 · 12: 2 · 13: 3 · 14: 5 · 15: 7 · 16: 10 · 17: 13 · 18: 17; rango 7-18 antes de raciales; Epic 25). Avance: +1 a niveles 4 y 8 ([AoN] https://www.aonprd.com/Rules.aspx?ID=85 — CRB pg. 30). Mítico: +2 a tier 2 ([AoN] https://www.aonprd.com/Rules.aspx?ID=1618 — MA pg. 12). Objetos: enhancement tras 24 h.

**Distribución de referencia (aasimar base):**

| Atributo | Comprado (costo) | + raza | Niveles 4/8 | Tier 2 | Objeto | **Final (mod.)** |
|---|---|---|---|---|---|---|
| Str | 10 (0) | 10 | | | | **10 (+0)** — carga ligera 33 lb: breastplate 15 + escudo 5 + cimitarra 4 + haversack 5 + varios ≈ 31 lb ✓ |
| Dex | 14 (5) | 14 | | | | **14 (+2)** — CA, Ref, iniciativa; Dex máx. de la mithral breastplate +5 |
| Con | 14 (5) | 14 | | | Belt +2 | **16 (+3)** |
| Int | 10 (0) | 10 | | | | **10 (+0)** — 22 rangos + 22 de trasfondo (sección 11) |
| Wis | 17 (13) | **19** | 20 → 21 | **23** | Headband +4 | **27 (+8)** |
| Cha | 12 (2) | **14** | | | | **14 (+2)** — 5 usos de channel (7 con Extra Channel), excluye 2 |
| **Total** | **25** | | | | | |

Por qué Wis 17 y no 18 (crítico #12 sugería 18 → 28): con 17 base el personaje llega a 27 (+8) a nivel 11 y **a 28 (+9) a nivel 12** con el +1 de nivel; con 18 base llegaría a 28 ahora y 29 (+9) a nivel 12: **los dos convergen a nivel 12**, y el punto de Wis 18 (4 puntos más) cuesta exactamente **Dex 14 → 12** (−1 CA, −1 Ref, −1 iniciativa) o **Con 14 → 12** (−11 pg) para un solo nivel de diferencia. Con "supervivencia propia" como prioridad, Wis 17 / Dex 14 / Con 14 es la distribución correcta.

**Alternativas:**
- **Wis 18 base:** Str 10 (0) / Dex 12 (2) / Con 14 (5) / Int 10 / Wis 18 (17) / Cha 11 (1) = 25 → Cha 13 (Selective OK, pero 4 usos y excluye 1: **no**). O Str 11 (1) / Dex 10 / Con 14 (5) / Wis 18 (17) / Cha 12 (2) = 25 → Wis 28 (+9) a nivel 11 (ranuras 4/8/7/7/6/5/3, DC +1) a costa de Dex 10 (−2 CA/Ref/init). Solo si el jugador valora el +1 DC ahora más que la CA.
- **Cha 16 (excluir 3, 6-8 usos):** Str 10 / Dex 12 (2) / Con 14 (5) / Int 10 / Wis 17 (13) / Cha 14 (5) = 25 → Cha 16. Pierde 2 Dex. Recomendable si el GM confirma combates con **muchos enemigos mezclados** entre los 4 cuerpo a cuerpo.
- **Humano (+2 Wis, dote extra, Skilled):** Str 10 / Dex 12 (2) / Con 14 (5) / Int 10 / Wis 17 (13) / Cha 14 (5) = 25 → Wis 19 / Cha 14 / Dex 12; 7.ª dote (Improved Initiative) y +11 rangos (Perception 11 + Kn planes 11 → habilita Healer's Hands).

**Puntos de golpe (nivel 11):** 8 (máx. a nivel 1) + 10 × 4,5 = 53; + 11 × 3 (Con 16) = 86; + 11 (clase predilecta a pg) = 97; + 11 (Toughness) = 108; + 12 (Hierophant tier 3) = **120**. ⚠️ El GM decide el método de pg por nivel (promedio 4,5 vs 5 "PFS": 125). Hard to Kill: muerte a **−32**. Con Righteous Might activo: +22.

**Salvaciones:** Fort 7 + 3 + 3 (capa +3) = **+13** (+14 con capa +4); Ref 3 + 2 + 3 = **+8**; Will 7 + 8 + 3 = **+18**. Concentración 11 + 8 = **+19** (+21 Focused Mind). Iniciativa 2 + 2 + 3 = **+7** (+8 con la Dusty Rose cracked). CA **24 / 26 / 28** (sección 9).

**Habilidades de referencia** (clase predilecta a pg; 22 rangos de aventura + 22 de trasfondo, sección 11): Perception 11 + 8 + 2 (Skilled) = **+21**; Heal 3 + 3 + 8 = **+14** (tomando 10 = 24: Treat Deadly Wounds DC 20 y First Aid automáticos); Kn (religion) 5 + 3 = **+8**; Spellcraft 3 + 3 = **+6**; Sense Motive 0 + 8 = **+8**; Diplomacy 0 + 2 + 2 = **+4**; Profession (herbalist) 5 + 3 + 8 = **+16**; Linguistics / Kn (history) / Lore 5 + 3 = **+8**.

> **➡️ Para NUESTRA build (sección 10)**
> - **Aasimar base (+2 Wis/+2 Cha), clérigo NG de Sarenrae, dominios Healing + Glory (Heroism), cimitarra.** Rasgo alternativo racial: ninguno por defecto; **Deathless Spirit** en lugar de Celestial Resistance si la campaña es de no muertos (y en ese caso Sun en vez de Glory).
> - Compra 25: **Str 10 / Dex 14 / Con 14 / Int 10 / Wis 17 / Cha 12** → finales **10 / 14 / 16 / 10 / 27 / 14**. Ranuras 4/7/7/7/6/4/3; DC 18-24; channel 5 (7) usos, DC 17, excluye 2.
> - Alternativa de raza: **humano** (Str 10 / Dex 12 / Con 14 / Int 10 / Wis 17 / Cha 14) por la 7.ª dote y los rangos; de deidad: **Dalenydra** (Repose) o **Milani** (Liberation).
> - Sin deidad neutral: nada de elecciones irreversibles de channel; sin Versatile Channeler.

---

## 11. REGLAS OPCIONALES DE LA MESA: HERO POINTS, DRAWBACK + TERCER RASGO, BACKGROUND SKILLS

### 11.1 Hero Points (APG pg. 322-325)

**Texto de regla** ([AoN] https://www.aonprd.com/Rules.aspx?ID=445, https://www.aonprd.com/Rules.aspx?ID=446, https://www.aonprd.com/Rules.aspx?ID=447):
- "Each character begins play with 1 hero point, **regardless of her level**. In addition, whenever a character **gains** a level, she earns an additional hero point." Máximo **3** ("Excess hero points are lost"). "Hero points do not renew over time or with rest. Once spent, they are gone forever." Premios del GM: historia escrita (+1), retrato/miniatura (+1), cerrar un arco, actos heroicos (solo si no se gastó un punto para lograrlo), volver de la muerte sin puntos (+1). → **Un PJ creado a nivel 11 arranca con 1** (no "1 + 10 capado a 3"); con historia escrita y retrato, 2-3.
- "You cannot spend more than 1 hero point during a single round of combat" (Cheat Death, 2 puntos, es la única excepción). "Hero points can be spent at any time and do not require an action to use."
- **Usos:** **Act Out of Turn** ("take your turn immediately. Treat this as a readied action… You may only take a move or a standard action on this turn"); **Bonus** ("+8 luck bonus to any one d20 roll" antes de tirar, **+4** después; a otro personaje en el mismo lugar +4/+2); **Extra Action** ("an additional standard or move action this turn" — **sin la restricción "can't be used to cast a spell" de Amazing Initiative**: confirmado por el auditor); **Inspiration** (pista); **Recall** ("recall a spell you have already cast or to gain another use of a special ability that is otherwise limited … that recharge on a daily basis" — sin tope de nivel); **Reroll** (cualquier d20 recién tirado; se acepta el segundo); **Special** (petición al GM de algo casi imposible, ejemplo literal: "casting a single spell that is one level higher than you could normally cast" — a nivel 11, **un conjuro de 7.º**: Resurrection, Regenerate, Greater Restoration —, con prueba difícil y sin que nadie sume puntos); **Cheat Death** (**2 puntos**; "generally the character is left alive, with negative hit points but stable"; "but not another character or NPC": **solo para vos**, familiar, compañero, eidolon o montura).
- **No hay FAQ ni errata oficial** sobre Hero Points ni sobre su interacción con Mythic Adventures (búsqueda del auditor): Surge + Hero Point en la misma tirada es decisión del GM (RAW nada lo impide: Surge es un dado sin tipo como inmediata; el Bonus es un bono de suerte sin acción).
- **Antiheroes** (APG pg. 324 — [AoN] https://www.aonprd.com/Rules.aspx?ID=449): sin hero points, dote extra a nivel 1. El jugador eligió Hero Points → sin la 7.ª dote.

**Sinergias verificadas:**
- **Fate's Favored** (UCam pg. 55): el Bonus del Hero Point es "luck bonus" → **+9 / +5** (y +5/+3 cuando un aliado te lo regala). Como Prayer/Divine Favor también son suerte, no se suman: se toma el mayor y Fate's Favored suma 1 una sola vez. Con Will +18 vs DC 22, el Bonus antes hace que solo falle con 1 natural; Fort +13 vs DC 23 (Slay Living / Disintegrate de CR 11): sin punto 10+ (55 %), con +8 → 2+ (95 %).
- **Extra Action + Amazing Initiative + Quick Channel** en el asalto de crisis (Amazing Initiative dice "in this way": su límite no cubre la acción del Hero Point; ⚠️ confirmar): estándar Heal (110/165) + estándar extra del Hero Point **Heal** (110) o Breath of Life + estándar extra de Amazing Initiative **channel** (8d6) + movimiento Quick Channel (8d6) → **220-275 + 16d6 (56) al aliado crítico y 16d6 al resto**, por 1 Hero Point, 1-2 poderes míticos, 3 usos de channel y 2 ranuras de 6.º. Una vez por combate (1 punto/asalto).
- **Recall vs Inspired Spell:** con Inspired Spell (1 poder mítico = cualquier conjuro sin ranura), el Recall del Hero Point pasa a ser **el último recurso** (solo con los 9 poderes agotados). El Hero Point se reserva para lo que el poder mítico no hace: Cheat Death, Act Out of Turn, Extra Action (conjuro incluido), Bonus +8 fijo antes de tirar, Special.

**Dotes, conjuros y objetos de Hero Point** ([AoN] https://www.aonprd.com/Feats.aspx?Category=Hero%20Point — exactamente 3 dotes): **Hero's Fortune** (APG pg. 324: +1 punto y máximo 5; sin prerrequisitos; "media dote": solo si el GM no regala el punto de historia), **Luck of Heroes** (25 % de no gastar el punto en Reroll/Bonus-antes: trampa), **Blood of Heroes** (2 puntos por nivel futuro: no). **Heroic Fortune** (conjuro, APG pg. 324 — [AoN] https://www.aonprd.com/SpellDisplay.aspx?ItemName=Heroic%20Fortune): **cleric 2**, toque, M polvo de diamante 100 po, 11 asaltos: un Hero Point temporal que "is spent before any other hero points" → **regalarle un punto al tanque** (+8 a su salvación / un Reroll / el 2.º punto de SU Cheat Death) o darse el 2.º punto para el Cheat Death propio antes del jefe. **Heroic Fortune, Mass** (cleric 5, 1.000 po, close): situacional. **Hero's Blade** (APG pg. 325: +2 longsword, 17.315 po, 6 puntos que no cuentan para el máximo; "reservado a villanos" según APG pg. 324: ⚠️ preguntar). **Ring of Heroes** (8.000: Luck of Heroes; puede gastarse para 1 punto y queda inerte — corrección del auditor: no se destruye). Subdominio **Legend** (Glory, DA pg. 23: Hero's Fortune gratis) solo con General Susumu, Gorum o Shizuru: 🚫 no con Sarenrae. Rasgo racial humano **Heroic**: nada al crearse a nivel 11.

**Protocolo del sanador (1-3 puntos por tramo; no se recuperan):**
1. Entregar historia escrita y retrato antes de la sesión 1 (2-3 puntos). Antes del jefe: **Heroic Fortune** sobre uno mismo (2.º punto → Cheat Death) o sobre el tanque.
2. Reserva mínima de **2** con jefe pendiente. Con 1 solo punto, Cheat Death no existe.
3. Prioridad: (i) **Cheat Death** propio; (ii) **Act Out of Turn** para que un aliado a −pg no muera antes de nuestro turno (channel 30 pies o Heal/BoL a 30 pies con Faith's Reach; ⚠️ es un turno adelantado con una sola acción, no un turno extra, por analogía con Ready — CRB pg. 203, [AoN] https://www.aonprd.com/Rules.aspx?ID=199); (iii) **Bonus +8** antes de una salvación letal propia; (iv) **Extra Action** en el asalto con dos aliados críticos; (v) **Reroll** de una salvación letal fallada (fallo ≤ 4 → Bonus después +4; ≤ 6 → Surge 1d6, más barato); (vi) +4 al tanque contra Dominate.
4. **Nunca**: Recall mientras queden poderes míticos; Inspiration; tiradas de habilidad; Bonus a un ataque propio.
5. **Special** solo fuera de combate para un conjuro de 7.º (Resurrection de un aliado muerto hace días; Regenerate; Greater Restoration) si no hay pergamino.

### 11.2 Drawback y tercer rasgo

Reglas en la sección 5.1 (UCam pg. 8 y 64; APG pg. 326; Additional Traits). Un solo drawback (AoN habla de "a drawback" y "a third trait"; no hay texto que permita dos). El drawback "should not only provide a slight mechanical disadvantage, but also (more importantly) serve as a roleplaying tool" (UCam pg. 8): llevar a la mesa un drawback de costo ≈ 0 **y** una alternativa de costo real por si el GM exige mordida.

**Elegido: Scarred** (Antihero's Handbook pg. 6 — [AoN] https://www.aonprd.com/TraitDisplay.aspx?ItemName=Scarred: −5 Disguise, −2 Bluff; cicatrices de una guerra santa o de un rescate). Alternativa "honesta": **Provincial** (UCam pg. 65: −2 Diplomacy y Sense Motive contra otra religión/alineamiento) o **Guilty Fraud** (Spymaster's Handbook pg. 7: −4 Bluff vs indiferentes o mejores; gancho de redención de Sarenrae). 🚫 Nunca: Helpless (dazed cuando cae un aliado), Superstitious (50 % de tener que salvar contra buffs **ajenos**; no contra los propios — mito desmentido por el auditor), los que tocan Will, concentración, iniciativa, CA adyacente (Loner) o shaken.

**Terna:** Reactionary (Combat) + Envoy of Healing (Religion, Sarenrae) + Focused Mind (Magic) [alternativa Faith: Birthmark]. Con Additional Traits en el futuro: Seeker (Social) + Birthmark/Blessed Touch (Faith).

### 11.3 Background Skills (Pathfinder Unchained pg. 46-53)

**Texto** ([AoN] https://www.aonprd.com/Rules.aspx?ID=1732 a 1744): "each character gains an additional 2 skill ranks per level, which must be spent on background skills"; "The character's Intelligence modifier doesn't adjust this value. Background skill ranks can be used to gain ranks only in background skills, not adventuring skills. Characters can expend their regular skill ranks on background skills if they desire." "Lore is always considered a class skill for all characters"; Artistry es de clase para quien tenga Craft.
- **Habilidades de AVENTURA** (solo con rangos normales): Acrobatics, Bluff, Climb, Diplomacy, Disable Device, Disguise, Escape Artist, Fly, **Heal**, Intimidate, **Knowledge (arcana, dungeoneering, local, nature, planes, religion)**, **Perception**, Ride, **Sense Motive**, **Spellcraft**, Stealth, Survival, Swim, Use Magic Device.
- **Habilidades de TRASFONDO** (los 22 rangos extra): Appraise, Artistry, Craft, Handle Animal, Knowledge (engineering, geography, **history, nobility**), **Linguistics, Lore**, Perform, **Profession**, Sleight of Hand.
- Mitos desmentidos: "Background Skills da 2 + Int" (no: Int no modifica); "los rangos de trasfondo sobrantes pueden ir a Perception/Heal" (no; al revés sí); "Knowledge (planes) es de trasfondo" (no: solo engineering/geography/history/nobility); "Perception es de clase del clérigo" (no: CRB; de ahí Seeker o Cosmopolitan).
- **Lore** (Unchained pg. 50): debe ser estrecha ("Sarenrae" es ejemplo oficial de Lore apropiada; "Gods" no); misma escala de DC que Knowledge; puede sustituir a Knowledge (religion) en lo que atañe a la propia fe (−5 si parcial, GM). **Profession (herbalist)** (Expanded Profession, pg. 53): identificar hierbas medicinales comunes DC 10 / raras DC 15.

**Cuenta de rangos a nivel 11 (Int 10, clase predilecta a pg — decisión de la sección 1):**
- Aventura: (2 + 0) × 11 = **22**: **Perception 11** (+21 con Wis 8 y Skilled +2; no es de clase), **Knowledge (religion) 5** (+8; prerrequisito de Quick Channel), **Heal 3** (+14; tomando 10 = 24 → First Aid DC 15 y Treat Deadly Wounds DC 20 automáticos), **Spellcraft 3** (+6; identificar un conjuro al ser lanzado DC 15 + nivel: 55 % contra un conjuro de 5.º). Total 22.
- Trasfondo: **22**: **Linguistics 5** (+8; Celestial ya lo tiene el aasimar: Abyssal, Infernal, Draconic, Undercommon, Sylvan), **Knowledge (history) 5** (+8), **Knowledge (nobility) 2** (+5), **Profession (herbalist) 5** (+16, es de Wis), **Lore (Sarenrae) 5** (+8). Alternativa: Craft (alchemy) 5 en lugar de nobility + parte de Lore para fabricar antitoxinas/antiplague en tiempo muerto.
- **Lo que NO alcanza:** Knowledge (planes) (necesario para Healer's Hands: 1 rango para la dote y 11 para 11 usos/día) y Sense Motive. Soluciones si se quiere Healer's Hands: **clase predilecta a rangos** (+11: Perception 11, Kn religion 5, Heal 11, Kn planes 6 = 33) a costa de 11 pg; **Int 12** (+11 rangos retroactivos, cuesta 2 puntos de compra); **humano** (Skilled +11); o ⚠️ Headband of Vast Intelligence +2 con Knowledge (planes) como habilidad (4.000 po; FAQ 2011: esos rangos son los retroactivos del +1 Int; que cuenten para el prerrequisito y los usos es lectura RAW razonable pero se pierden al quitarse el objeto: GM).
- Prerrequisitos cubiertos: Quick Channel (Kn religion 5 ✓), Deific Obedience (Kn religion 3 ✓), Divine Protection (Kn religion 5 + Cha 13 ✓, no la tomamos), Signature Skill (Heal 5 ✗ con 3 rangos: no la tomamos).

> **➡️ Para NUESTRA build (sección 11)**
> - **Hero Points:** arrancamos con 1 (pedir +1 por historia y +1 por retrato). Reserva de 2 para Cheat Death propio; **Heroic Fortune** (2.º nivel, 100 po de polvo) preparado los días de jefe. Act Out of Turn con channel a 30 pies es nuestro mejor uso "para otros"; Extra Action = segundo Heal en el mismo asalto (con Amazing Initiative y Quick Channel: 220 + 16d6/16d6). Recall solo con los 9 poderes míticos agotados. Fate's Favored no está en la terna (Focused Mind/Birthmark rinden más): el Bonus queda en +8/+4.
> - **Drawback Scarred** (Provincial de reserva) + **Reactionary / Envoy of Healing / Focused Mind**.
> - **Rangos:** 22 de aventura (Perception 11, Kn religion 5, Heal 3, Spellcraft 3) + 22 de trasfondo (Linguistics 5, Kn history 5, Kn nobility 2, Profession herbalist 5, Lore Sarenrae 5). Clase predilecta a pg (+11 pg). Sin Healer's Hands ni Signature Skill.

---

## 12. KIT DE SUPERVIVENCIA Y EMERGENCIAS

### 12.1 Morir, moribundo, estable (CRB pg. 189-191)

[AoN] https://www.aonprd.com/Rules.aspx?Name=Injury%20and%20Death&Category=Combat — CRB pg. 189-191; Conditions pg. 565-567.
- **Disabled (0 pg):** staggered; una acción estándar "extenuante" cuesta 1 pg y lo deja a −1 moribundo.
- **Dying (−1 a −(Con−1)):** inconsciente (helpless), pierde 1 pg por asalto; en su turno prueba de **Con DC 10 con penalizador igual a los pg negativos** (20 natural = éxito; con bleed o daño continuo falla automáticamente). 🚫 "Estabilizar al 10 %" es 3.5.
- **Dead:** pg negativos ≥ Con (🚫 "−10" es 3.5), o daño masivo, o **Con 0** por daño/drenaje.
- **Massive Damage (Optional Rule):** un solo ataque ≥ la mitad de los pg totales (mín. 50) → Fort DC 15 o muerte. ⚠️ Es opcional (FAQ PFS: no legal en Society): **preguntar si está activa**; ni Death Ward ni Hard to Kill protegen de ella.
- **Curar a un moribundo:** ≥ 1 pg → estable (sigue inconsciente y helpless); llegar a 0 → consciente y disabled; **llegar a 1+ → funcional**. Un CLW de varita (5,5) sobre un aliado a −12 lo deja a −6,5: vivo pero **todavía helpless**.
- **Coup de grace** ([AoN] https://www.aonprd.com/Rules.aspx?Name=Helpless%20Defenders&Category=Combat%20Modifiers — CRB pg. 197): asalto completo contra un helpless adyacente, crítico automático y Fort DC 10 + daño o muerte; provoca. Un aliado moribundo o estable-inconsciente junto a un enemigo inteligente **muere en el siguiente asalto completo del enemigo** salvo que lo subamos a 0+ (consciente = no helpless) o lo alejen. Death Ward "does not protect against other sorts of attacks"; Hard to Kill tampoco.
- **Hard to Kill (tier 1)** ([AoN] https://www.aonprd.com/Rules.aspx?ID=1618 — MA pg. 12): bajo 0 se estabiliza sin tirada; el bleed sigue; muere a **−2 × Con**: nosotros (Con 16) a **−32**; un tanque mítico con Con 20 a −40. Todos los PJ son míticos → todos usan −2×Con.
- **Herramientas de "frenar la muerte" sin gastar ranuras:** **Stabilize** (orison, close 50 pies, estable sin tirada, no despierta); **Rebuke Death** (1d4+5, toque/30 pies con Faith's Reach, 11/día; es Sp: provoca y admite lanzar a la defensiva; despierta si estaba entre −1 y −8); cualquier cura de pg frena el bleed ("Bleeding can be stopped by a DC 15 Heal check or through the application of any spell that cures hit point damage"); **Deathwatch** (1.º, cono 30 pies, 110 min: "dead / fragile (≤ 3 pg) / fighting off death") para saber si está muerto o moribundo (⚠️ el GM decide si el jugador conoce los pg del aliado sin el conjuro).

### 12.2 Breath of Life, Hard to Kill y Relentless Healing: el umbral

- **Breath of Life** revive si murió hace ≤ 1 asalto y, tras la cura, queda "at a negative amount **less than its Constitution score**". ⚠️ Sobre un aliado mítico que muere a −2×Con no hay FAQ (hilo paizo.com/threads/rzs2qcem sin respuesta de staff): **lectura A (literal)** exige quedar por encima de −Con; **lectura B (funcional)** por encima de −2×Con (Relentless Healing usa la redacción genérica "above the threshold for death"). Tanque mítico Con 16 muerto a −45: BoL 5d8+11 lo revive 78 % (A) / 100 % (B); Mythic BoL 5d12+11: 97 % / 100 %; **Heal + Relentless Healing (110): 100 % en ambas lecturas** (−45 + 110 = +65). → Contra golpes enormes, **Heal + Relentless Healing** (1 ranura de 6.º + 1 uso, acción estándar) es mejor que BoL. Un aliado no mítico (muere a −Con) desde −30 con Con 16: BoL 100 % (mínimo 16 → −14).
- **Nivel negativo temporal de 1 día** con BoL (Fort del efecto a las 24 h no aplica: es temporal y desaparece solo). ⚠️ Relentless Healing no menciona nivel negativo ni efectos de muerte: dos decisiones del GM.
- **Muertos por efecto de muerte** (Slay Living, Finger of Death, Wail of the Banshee, Destruction, Phantasmal Killer): BoL y Raise Dead **no**; **Mythic Breath of Life** da una nueva salvación y revive a −10 + cura; si no, **Resurrection (7.º)**: pergamino 7 × 13 × 25 + 10.000 = **12.275 po** con prueba de CL DC 14 (1d20+11: 90 %; Surge → 99 %; Hero Point Bonus → solo falla el 1) o clérigo NPC en una metrópolis (13 × 7 × 10 + 10.000 = 10.910 po; ⚠️ UE pg. 99: por encima de 3.000 po "the spell is not generally available"). **Prevención: Death Ward** (+4 moral y salvación aunque no la hubiera).
- **Muertos por Con 0 o por niveles negativos ≥ DG:** BoL habla de "hit point total" / "died of hp damage" → ⚠️ por texto no cubre estas muertes; Raise Dead sí ("Any ability scores damaged to 0 are raised to 1"); FAQ 2013: el drenaje de energía no es un efecto de muerte.
- **Raise Dead** (5.º, 1 minuto, diamante 5.000 po, ≤ 11 días — Gentle Repose (2.º, 1 día/nivel) no cuenta esos días —, cuerpo entero, alma dispuesta, no vs efectos de muerte ni no muertos): el revivido vuelve con **2 niveles negativos permanentes** (🚫 "1 nivel" es 3.5), pg = DG − 10 = **1 pg**, 50 % de perder cada conjuro preparado. Quitar cada nivel permanente: Restoration con **1.000 po, máximo uno por semana por objetivo** → un Raise Dead completo son **7.000 po y 15 días**. Por eso BoL/Relentless Healing a tiempo valen oro.
- **Cheat Death** (2 Hero Points) solo para el propio clérigo (sección 11); **Talisman of Life's Breath (lesser)** (OA pg. 263, 3.500 po, cuello, se consume): BoL automático a CL 9 (5d8+9) la primera vez que muere quien lo lleva — para el tanque, cuando la WBL lo permita.

**Protocolo "un aliado cae":**
1. **Asalto 0 (turno del enemigo):** si caemos nosotros → Reactive Healing (inmediata, 1 channel, 6d6/8d6) antes de aplicar el daño; si aun así quedamos bajo 0, Hard to Kill estabiliza; si el daño nos mataría (≤ −32), Cheat Death (2 puntos). Si cae un aliado y hay Hero Point → **Act Out of Turn**: BoL a 30 pies o Heal + Relentless Healing antes del coup de grace.
2. **Asalto 1 (nuestro turno):** ¿muerto o moribundo? Si no se sabe: **Heal + Relentless Healing "por si acaso"** (⚠️ confirmar que el uso solo se gasta si estaba muerto). Moribundo no amenazado: Stabilize (orison) y seguir con lo urgente. Moribundo amenazado: **subirlo a 0+** (Heal 110 / CCW 43,5 a 30 pies; channel 8d6 sin provocar si estamos amenazados). Muerto por pg ≤ 1 asalto: Heal + Relentless (1 uso), BoL (ranura de dominio 5.º), CCW + Relentless (4.º + 1 uso) o, sin ranuras, channel + Relentless (1 uso, 6d6/8d6) o Channeled Revival (no la tenemos). Muerto por efecto de muerte: Mythic BoL (1 uso + ranura 5.º).
3. **Asalto 2:** solo Mythic BoL ("within the past 2 rounds").
4. **Después:** Gentle Repose si no hay diamante; Raise Dead (5.000 po) → Restoration ×2 (1.000 po cada una, 1 por semana) → curar los 1 pg iniciales antes de moverse.

### 12.3 Lanzar amenazado (CRB pg. 180-185, 206)

- Lanzar un conjuro amenazado **provoca**; si el AdO acierta: concentración **DC 10 + daño + nivel** o se pierde (Heal tras un AdO de 20: DC 36 vs +19 → 20 %). **Lanzar a la defensiva** ([AoN] https://www.aonprd.com/Rules.aspx?Name=Casting%20Spells&Category=Magic — CRB pg. 206): sin AdO, DC 15 + 2 × nivel: **Heal DC 27, BoL 25, CCW 23, Blessing of Fervor 23**. Con +19: 8+ / 6+ / 4+ / 4+ = **65 / 75 / 85 / 85 %**; con Focused Mind (+21): 75 / 85 / 95 / 95 %; Surge +1d6 (1 uso) sobre la tirada fallida por ≤ 6. Regla: **amenazado, nunca "tragarse" el AdO con un conjuro de 5.º-6.º**; lanzar a la defensiva o dar un paso de 5 pies y lanzar (Faith's Reach: no hace falta llegar al aliado).
- **No provocan** (Table 8-2, CRB pg. 183 — AoN la rotula "Table 7-2" — [AoN] https://www.aonprd.com/Rules.aspx?Name=Actions%20in%20Combat&Category=Combat): **channel energy** (Su), Quick Channel, usar una **varita** (spell trigger), un paso de 5 pies. **Provocan:** lanzar, leer un pergamino (spell completion), beber una poción, Rebuke Death (Sp), estabilizar con Heal, tocar a 6 aliados como asalto completo, un ataque de toque a distancia (incluso si el conjuro se lanzó a la defensiva).
- **Tocar a un aliado dispuesto es automático y no provoca** (CRB pg. 185: "You can automatically touch one friend"); lo que provoca es lanzar. ⚠️ Faith's Reach: "If the spell normally requires a melee touch attack, it instead requires a ranged touch attack" — un cure sobre un aliado dispuesto **no** "requires a melee touch attack" (el toque es automático) → lectura mayoritaria: sin tirada; lectura estricta: toque a distancia +10 contra la CA de toque del aliado, que provoca otro AdO y falla con 1 natural. Sin FAQ: pactar por escrito.
- **Sanctuary** (1.º) sobre nosotros: quien quiera atacarnos hace Will DC 18 o pierde el ataque; podemos curar y buffear sin romperlo (sección 6). **Antilife Shell** (6.º, 1 asalto): ningún vivo entra en 10 pies.

### 12.4 Aflicciones y condiciones: qué cura cada conjuro y qué NO cura Heal

**Heal** (6.º, 1 estándar, 30 pies) quita: ability damage, blinded, confused, dazed, dazzled, deafened, diseased, exhausted, fatigued, feebleminded, insanity, nauseated, poisoned, sickened, stunned + 110 pg. **NO quita:** niveles negativos, drenaje permanente de característica, petrificación, maldiciones, **parálisis**, **miedo**, dominación/posesión, **staggered**, miembros perdidos, muerte. Regla de aflicciones (CRB pg. 555): el daño causado no se quita al curar la aflicción (dos acciones) y no cura naturalmente mientras persista.

Pruebas de nivel de lanzador (Remove Curse/Disease, Neutralize Poison, Break Enchantment, Dispel): **1d20 + 11** (13 con Inspired Spell); un 1 natural **no** falla automáticamente. Probabilidades: DC 16 → 80 %; DC 18 → 70 %; DC 20 → 60 %; DC 22 → 50 %; DC 24 → 40 %. Con **Surge** (+1d6 tras ver la tirada): 95 / 88 / 78 / 68 / 57 %. Con **Eldritch Breach** (tier 1: tirar dos veces): 96 / 91 / 84 / 75 / 64 %. No la tomamos (Abundant Healing pesa más), pero es la path ability a añadir si la campaña castiga con aflicciones. 🚫 "Remove curse/disease/neutralize poison curan automáticamente" es 3.5.

| Aflicción | Respuesta del Cleric 11 (acción / probabilidad) | Mítico | ¿Imposible a nivel 11? Plan B |
|---|---|---|---|
| **Niveles negativos temporales** (UMR Energy Drain: a las 24 h Fort por nivel o se vuelven permanentes; FAQ 2017: antes son temporales) | **Restoration** (4.º, **3 asaltos**, 100 po) post-combate, antes de 24 h; **Death Ward** preventivo (11 min: inmune a drenaje y energía negativa, suspende los penalizadores) | Mythic Heal augmented (2 usos): la única *restoration* de 1 acción (⚠️ ¿1.000 po? GM); Ward Against Death (Repose, no lo tenemos) | No (pero no en combate). |
| **Niveles negativos permanentes** | Restoration 1.000 po, **1 por semana** | Mythic Heal augmented | Parcial: varios a la vez = Greater Restoration (7.º): pergamino 2.275 + 5.000 = 7.275 po (DC 14, 90 %). |
| **Ability damage** | Heal (todo, 1 estándar); Lesser Restoration 1d4 (3 asaltos; varita CL 1 750 po); Restoration (todo, 100 po) | Mythic CLW/CMW/CSW/CCW +1/+2/+3/+4 | No. Con 0 = muerte (Raise Dead lo sube a 1); Str/Dex/Wis 0 = inconsciente hasta curar 1 punto. |
| **Ability drain** | **Restoration** (3 asaltos, 100 po, **una** característica por lanzamiento) | Greater Neutralize Poison (cleric 6, Dirty Tactics Toolbox pg. 28: automático, solo drenaje por veneno) | Parcial: varias características = Greater Restoration (7.º). |
| **Petrificación** (medusa DC 16 / basilisco (Ex) 15 / gorgona 21 / cockatrice 1d4 Dex / mago con Flesh to Stone) | **Break Enchantment** (5.º, **1 minuto**, close, 11 criaturas): revierte incluso instantáneos; prueba vs 11 + CL del efecto (⚠️ el CL de una mirada Su no está fijado en AoN; convención = DG: medusa DC 19 → 65 %, basilisco 18 → 70 %, mago CL 12 → DC 23 → 45 %); la limitación "≤ 5.º" no aplica a Flesh to Stone porque Stone to Flesh la revierte | **Mythic Break Enchantment** (1 uso): **automático contra efectos no míticos**; +3 contra míticos; nivel máx. 5 + ½ tier = 6.º | **Stone to Flesh NO es de clérigo** (arcano 6.º; pergamino con UMD DC 31: 15 % → 🚫). Plan B: NPC arcano (660 po), sangre fresca de basilisco. Nunca en combate. |
| **Maldiciones** (Bestow Curse DC 18) | **Remove Curse** (3.º, 1 estándar, 70 %; abjuración: no paga la DC 20 de mummy rot) | Inspired Spell CL 13 (80 %); Eldritch Breach (91 %) | Maldiciones de artefacto y *geas* de 6.º ("cannot be dispelled" y Stone to Flesh no lo revierte → Break Enchantment solo ≤ 5.º): **sí**. |
| **Mummy rot** (maldición + enfermedad, DC 16; toda cura de conjuration (healing) exige CL DC 20 o se pierde; polvo al morir) | 1) Remove Curse (80 %); 2) **Heal** (DC 20: 60 %, luego quita "diseased" sin más prueba y cura el daño de Con/Cha) o Remove Disease (60 % × 80 % = 48 %); mientras tanto **channel** (no es conjuro: cura sin la DC 20) | Eldritch Breach: 96 % / 84 % | Si muere: polvo → Resurrection. ⚠️ AoN cita Bestiary pg. 110 (el libro físico dice 210). |
| **Licantropía** (Fort DC 15) | **Ninguna con conjuros a nivel 11**: "remove disease or heal spell cast by a **cleric of 12th level or higher**" en ≤ 3 días (nivel de clase, no CL; Inspired Spell no cuenta: ⚠️ GM). El texto no menciona remove curse/break enchantment (⚠️ GM) | — | **Sí**: **Wolfsbane** (CRB pg. 560 / UE pg. 111: ingerido, 500 po, Fort DC 16, 1d3 Con/min × 6) da una nueva Fort DC 15; luego Neutralize Poison y Heal. Llevar 2 dosis (1.000 po) si hay licántropos. A nivel 12: Remove Disease. |
| **Enfermedades** (ghoul fever DC 13; CR 12 DC ~21) | Remove Disease (3.º, 1 estándar; 95 % / 55 %) o **Heal** (sin prueba) | Eldritch Breach | No. |
| **Venenos** (CR 11-13 DC 20-22) | Neutralize Poison (4.º, 1 estándar; 60-50 %; no revierte daño ya hecho, 🚫 no da inmunidad) o Heal ("poisoned", sin prueba); Delay Poison preventivo 11 h | Eldritch Breach; Greater Neutralize Poison (6.º) | No. |
| **Miembro / ojo perdido** | — (Remove Blindness/Deafness "does not restore ears or eyes that have been lost") | Mythic Regenerate: 7.º, fuera de alcance | **Sí**: Regenerate (7.º): pergamino 2.275 po (DC 14, 90 %, 3 asaltos completos) o NPC 910 po. Raise Dead devuelve el cuerpo **sin** la parte perdida: decapitado por *vorpal* = Regenerate + Raise Dead, o Resurrection. |
| **Parálisis** (hold person, ghoul, mummy despair) | **Remove Paralysis** (2.º, 1 estándar, close 50 pies: 1 objetivo = automático; 2 → +4; 3-4 → +2); **Freedom of Movement** preventivo (110 min) | Inspired Spell; Freedom's Call (Liberation: no lo tenemos) | No. Un paralizado es helpless → coup de grace: prioridad alta. Heal **no** lo quita. |
| **Dominado / hechizado / poseído** | **Protection from Evil** (1.º, toque: el aliado dominado NO es voluntario → ataque de toque; nueva salvación +2 y bloqueo 11 min, solo vs malignos); **Dispel Evil** (5.º: "automatically dispel any one enchantment spell cast by an evil creature", sin prueba); Dispel Magic (vs CL 12: DC 23 → 45 %); Dismissal/Banishment contra el poseedor | Mythic Protection from Evil (+4 y 1d6/2 CL al controlador); Mythic Dispel Magic (2 conjuros) | Contra dominadores no malvados: solo Dispel Magic / Break Enchantment con prueba. |
| **Miedo** (shaken/frightened/panicked) | **Remove Fear** (1.º, close, 3 objetivos, suprime 10 min); Heroes' Feast +4 moral vs miedo 12 h | Hand of Mercy (shaken t3, frightened t6) | No. Heal **no** lo quita. Calm Emotions suprime también Bless/rage: mala con 4 cuerpo a cuerpo. |
| **Confused / nauseated / stunned / dazed / blinded / deafened / sickened / exhausted / fatigued / feebleminded / insanity** | **Heal** (1 estándar, 30 pies); baratos: Remove Blindness/Deafness (3.º), Lesser Restoration (fatiga; 3 asaltos), Cleanse (solo nosotros) | Hand of Mercy (dazed, fatigued, shaken, sickened, staggered por 1 channel) | No. Nauseated y stunned anulan a un DPS: Heal es la única respuesta de 1 acción a 30 pies. |
| **Staggered** (mágico) | Remove Paralysis | Hand of Mercy | No. Heal **no** lo quita. |
| **Grappled / pinned / entangled / swallowed whole** | **Freedom of Movement** preventivo (los agarres fallan automáticamente); Liberating Command (inmediata, +22 Escape Artist); nada lo "cura" desde fuera | Freedom's Call | Un tragado está **fuera de la línea de efecto**: ni channel ni Heal a 30 pies llegan. |
| **Sleep** | Sacudirlo (estándar, aid another) | — | No. |

### 12.5 Recuperación del poder mítico y del día

- **Mythic Power**: "Each day, you can expend…" — AoN **no fija hora ni 8 h de descanso**; solo Legendary Hero (tier 10) y Boons lo recargan. ⚠️ Proponer al GM que se recargue en la **hora de rezo** (el reloj diario de conjuros).
- **Recuperation** (tier 3): 1 uso + 1 h → ½ pg máximos y "class features limited to a certain number of uses per day (such as … spells per day)"; "treated as 8 hours of sleep"; **no** recarga poder mítico. ⚠️ Cruce con la preparación divina ("she must wait until the next day"; Recent Casting Limit 8 h): pedir al GM que Recuperation habilite una sesión de preparación de 1 h sin contar los conjuros recientes (si no, no recargaría nada). Sustained by Faith (no la tomamos) da lo mismo 1/día sin coste.
- **Preparación divina:** hora fija (amanecer), 1 h, sin descanso previo; ranuras vacías se rellenan en 15 min; los conjuros de las 8 h previas cuentan contra el límite.
- Un día con dos combates grandes: mañana (rezo: conjuros + channels + poder mítico) → combate 1 → Recuperation 1 h (1 uso: conjuros + channels, no poder) → combate 2 con 8 poderes.

### 12.6 Bloque defensivo esperado contra CR 11-13

Referencia ([AoN] https://aonprd.com/Rules.aspx?ID=1673 — MA pg. 228, Table 6-8 = Bestiary): CR 11 ataque +19/+14, daño 50/37 por asalto, DC 20; CR 12 +21/+16, 55/40, DC 21; CR 13 +22/+17, 60/45, DC 22.

| Nuestro número | Valor | Contra CR 11 | Contra CR 13 |
|---|---|---|---|
| **CA** 24 (26 con Magic Vestment ×2; 28 con Shield of Faith; +4 con cobertura de Blade Barrier) | 26 típica | +19 acierta con 7+ (**70 %**); iterativo +14 con 12+ (45 %) | +22 con 4+ (85 %) |
| **pg** 120 (142 con Righteous Might; +11 temporales con Divine Power) | 120 | un asalto completo de CR 11 (50 × 0,7 ≈ 35) = 3-4 asaltos en cuerpo a cuerpo | 60 × 0,85 ≈ 51: 2 asaltos |
| **Fort** +13 (+14 capa +4) | | DC 20: 7+ (**70 %**) | DC 22: 9+ (60 %) |
| **Ref** +8 (+9) | | DC 20: 12+ (45 %); +4 esquiva con Blessing of Fervor sobre nosotros → 65 % | DC 22: 14+ (35 %) |
| **Will** +18 (+19; +20 con Birthmark vs charm/compulsion) | | DC 20: 2+ (**95 %**) | DC 22: 4+ (85 %) |
| **Iniciativa** +7/+8 | | actuar antes que un CR 11 típico (+5 a +8) ≈ 50-60 % | — |
| **Concentración** +19 (+21) | | Heal a la defensiva 65-75 % | — |
| **Reservas** | Reactive Healing 8d6 inmediata; Hard to Kill −32; Cheat Death (2 HP); Surge +1d6; Divine Interference −4/−8 sobre un ataque a un aliado | | |

Lectura: el sanador **no aguanta un asalto completo de CR 13 dos veces**; su defensa real es la distancia (30 pies detrás de los tanques), la CA 26-28, el Will alto y las reservas. Contra alientos/áreas, Communal Resist Energy 30 y Protection from Energy 120; contra Slay Living/Finger of Death, Death Ward (+4, salvación garantizada) y Hero Point Bonus (+8 antes).

### 12.7 Reserva de emergencias (ya incluida en la lista de equipo de la sección 9)

Diamante de 5.000 (Raise Dead) → **a comprar del botín común en cuanto se pueda** (no entra en los 82.000: es un seguro del grupo); polvo de diamante 100 ×4 y 1.000 ×1; pergaminos BoL ×2, Restoration, Remove Curse, Neutralize Poison, Heal, Gentle Repose (150 po: +3 días); varitas CLW y Lesser Restoration; Wolfsbane ×2 (1.000) solo con licántropos; pergaminos de 7.º (Regenerate 2.275 / Greater Restoration 7.275 / Resurrection 12.275) como gasto reactivo del grupo o servicio de NPC (910 po + componentes en una metrópolis).

> **➡️ Para NUESTRA build (sección 12)**
> - **Muerte propia:** 120 pg, Hard to Kill a −32, Reactive Healing (8d6 con Phylactery) como inmediata, Cheat Death con 2 Hero Points, Sanctuary/Antilife Shell si nos rodean. Posición: 30 pies detrás del muro de tanques, adyacentes a 2-3 aliados para Abundant Healing.
> - **Muerte ajena (≤ 1 asalto):** Heal + Relentless Healing (1 uso, funciona con cualquier lectura del umbral y contra golpes enormes) > Breath of Life de dominio > CCW + Relentless > channel + Relentless. Con Hero Point: Act Out of Turn antes del coup de grace. Efectos de muerte: Mythic Breath of Life (2.º asalto también).
> - **Lo que NO podemos a nivel 11 y hay que hablar con el GM:** Resurrection (death effects, cuerpos destruidos, mummy rot mortal), Regenerate (miembros/ojos), Greater Restoration (varios niveles permanentes), Stone to Flesh (solo Break Enchantment de 1 minuto; mítico automático), licantropía (Wolfsbane), más de un nivel negativo permanente por semana.
> - **Preparados fijos:** Death Ward y Freedom of Movement (o vía Inspired Spell), Remove Paralysis, Protection from Evil ×2, Remove Fear; Restoration con polvo encima para después del combate; Break Enchantment como conjuro mítico opcional (4.º de Mythic Spell Lore a tier 4) si aparecen medusas/basiliscos.
> - **Preguntas al GM que salen de aquí:** umbral de BoL sobre míticos; Relentless Healing (nivel negativo, death effects, gasto condicional); Massive Damage activa; CL de las miradas; licantropía y Remove Curse; Mythic Heal augmented y los 1.000 po; Faith's Reach sobre aliados; hora de recarga del poder mítico y rezo tras Recuperation (sección 14).

---

## 13. CONSENSO DE LA COMUNIDAD Y MITOS DESMENTIDOS

Todo lo de esta sección es **[COMUNIDAD]** (opinión) salvo donde se indica **[AoN]**. El frente 07 fue el que más correcciones recibió del auditor (11, todas de precisión: cuentas de nivel, citas atribuidas al hilo equivocado, precios); aquí se usan las versiones corregidas.

### 13.1 Guías consultadas (URL, autor, fecha, cobertura)

| Guía | Autor / URL | Fecha | Qué aporta |
|---|---|---|---|
| The Comprehensive Pathfinder Guides Guide (índice) | Zenith Games — https://zenithgames.blogspot.com/2012/11/the-comprehensive-pathfinder-guides.html | 2012-2022 | Índice de todas las guías de Cleric (Tark, Brewer, Pupsocket, Elder Mythos, Rogue Eidolon, In Totality, Analysis Paralysis, Iluzry; "Ravingdork's Crazy Character Emporium" en "Other Useful Guides"). "Walter's Guide", "Being God's Chosen" y "Dr. Brainiac" no existen en el índice. |
| Blessed Be the Faithful: Iluzry's Guide to the Pathfinder 1e Clerics | Iluzry — https://docs.google.com/document/d/15_OF0nNyOvMjjdcKkpWRHzWKHP4oZWPMcBWpKGT9e9s/edit | 2022 | La más completa y reciente (todos los libros). Errores detectados: "Healer's Blessing llega a nivel 8" (es 6.º), "Channeled Revival funciona al alcance del channel" (⚠️ sin texto en AoN; FAQ 2013 sí lo dice: ver 13.3). |
| Tark's Big Holy Book of Clerical Optimization | Tark — https://docs.google.com/document/d/1h6-_4HvPvV-Tt7I67Gi_oPhgHmeDVA5SBl-WrJSgf5s/edit (portada y subdocumentos) | 2011-2014 | Los "9 mandamientos" ("THOU ART NOT A BANDAID", "Never ever memorize cure or inflict spells", dejar ranuras abiertas); roles support/battle/archer/bad touch/caster; copia el análisis de dominios de Rogue Eidolon. |
| Brewer's Guide to Reach Clerics | Brewer — https://feeneygames.github.io/PFGuideArchive/archive/ReachCleric.pdf | 2010-2013 | Reach Cleric (longspear + Combat Reflexes); "Absolute Essentials": **Combat Reflexes, Power Attack, Improved Initiative, Sacred Summons, Divine Interference** (5 dotes — corrección del auditor); Desna "the best deity"; Heroism "party buff at Swift Action speed". |
| PF1 Cleric Guide + Domains + Channel Energy | RPGBOT — https://rpgbot.net/pathfinder/characters/classes/cleric/ ; https://rpgbot.net/pathfinder/characters/classes/cleric/domains/ ; https://rpgbot.net/pathfinder/characters/channel_energy/ | 2021 | Headband of Inspired Wisdom "Crucial"; Heal "The best in-combat healing"; BoL "a permanent tax on clerics"; Quick Channel "If you only take one Channel Energy feat, make it this one". **Error:** llama "swift" a Quick Channel (es movimiento). Sobre la Phylactery dice que "a Headband of Alluring Charisma is probably a better option" (no de Wisdom — corrección del auditor). |
| Axe's Guide to Finding Divinity (PFS) | Axe — http://zenithgames.blogspot.com/2015/01/axes-guide-to-finding-divinity.html (hilo: https://paizo.com/threads/rzs2l5bw) | 2010 | Clérigo lanzador de PFS; Selective Channeling "pretty much necessary"; varita de CLW "essential"; "Metamagic feats: use metamagic rods instead". |
| Analysis Paralysis: Only the Good Spells… | anónimo — https://docs.google.com/document/d/1A677mTLubyEKu-0EZGfePWbnfTt3rvWt6ffGYoPaUPk/edit | 2019 | Lista curada de conjuros; "a clw wand is cheap". |
| Mythic Guide to Universal Path Abilities | anónimo — https://docs.google.com/document/d/1fD5YATlBMj5MuPOSDYlnLpnOQJZzn43bBE8LT6860B8/edit | post-2013 | Extra Mythic Feat / Commune with Power / Pierce the Darkness / Tongues en rojo ("your path abilities are generally worth more than any feat"). |
| CTP's Guide to Mythic Adventures | CTP — http://www.giantitp.com/forums/showthread.php?t=316045 | 2014 | Sendas míticas (GitP bloquea el acceso automatizado: solo fragmentos). |
| Rogue Eidolon's Guide to Clerics | Rogue Eidolon — https://docs.google.com/document/edit?id=1bGYV4nTaUQ7DZ0K-bLJsigtWujhQl9gJsW5tVOtmuuE | 2010 | 403; su análisis de dominios está dentro de Tark. |
| Hilos de paizo.com | "Cleric NOT healing in combat" https://paizo.com/threads/rzs2rc4y (2014); "Advice building a dedicated healer Cleric" https://paizo.com/threads/rzs2m51x (2011); "Cleric & Combat Healing" https://paizo.com/threads/rzs2og9g (2012); "Would a mythic Cleric taking Hierophant benefit from dual path" https://paizo.com/threads/rzs2rvar (2015); "Wrath of the Righteous - healing character assistance requested" https://paizo.com/threads/rzs2v9dc (2018); "Mythic Question: Range on Relentless Healing" https://paizo.com/threads/rzs43b04 (2021); "Sustained by faith" https://paizo.com/threads/rzs2scdy (2015); Divine Protection errata https://paizo.com/threads/rzs2sloz (2015); Infernal Healing y actos malvados https://paizo.com/threads/rzs2qe61 (2012); BoL + Hard to Kill https://paizo.com/threads/rzs2qcem | 2011-2022 | Opiniones; ninguna respuesta de staff salvo el hilo de Mike Brock (PFS). 🚫 "The Unfortunate Necessity of the Cleric" (https://paizo.com/threads/rzs42y5j) es de **2e**. |

### 13.2 En qué coincide la comunidad (y cómo lo aplicamos)

1. **"Curar en combate es, por defecto, una mala inversión de la estándar"** (Tark: "the role of a party healer is a wasted one… Proactivity is the key word"; RPGBOT: "Healbots are dumb"; Zhayne: "Dealing damage and KOing foes is like healing in advance"; contrapunto de Lincoln Hills: "a cleric who never heals is deliberately crippling himself… and a cleric who does nothing but heal is deliberately crippling himself"). **Aplicación:** nuestro clérigo cura con la **acción de movimiento** (Quick Channel) y con **inmediatas/gratuitas** (Reactive Healing, Relentless Healing, Divine Interference), y reserva la estándar para Blessing of Fervor / Heal cuando decide el combate / Mythic Blade Barrier como inmediata. La comunidad tiene razón en la economía y se equivoca en el contexto: con combates muy difíciles y un único sanador, "curar" es lo que hace que los 4 cuerpo a cuerpo sigan pegando.
2. **Fuera de combate: varita de CLW, channel sobrante y conversión espontánea** (Axe "essential"; Kydeem "Just use the CLW wand"; Tark "Never ever memorize cure or inflict spells"). **Aplicación:** sección 9.7.
3. **Cuándo SÍ curar en combate:** el aliado cuya caída decide el combate; Breath of Life en 1 asalto (Brewer: "your party won't forgive you if it costs them 7,000 gp because someone dies"); Heal cuando además quita condiciones (Tark: "BAM! Eat 110 healing right out of the box"); cuando la cura no cuesta la estándar; curación "pasiva" preparada (Shield Other — Mike Schneider lo llama "the cleric suicide spell"); cuando sobran estándares (Reach Cleric).
4. **Dominios:** Travel y Luck en azul en casi todas las guías (nosotros los descartamos por parámetros: sin exploración y Bit of Luck cuesta la estándar); Liberation/Freedom "incredibly powerful" (RPGBOT); **Healing divide** (RPGBOT "bland", Iluzry 1/5 aunque celebra Healer's Blessing; los hilos de sanador dedicado lo ponen primero) — **con un único sanador y combates difíciles, Healer's Blessing + las ranuras de BoL/Heal ganan**; Glory/Heroism "party buff at Swift Action speed" (Brewer) — coincide con nuestra elección.
5. **Dotes:** Selective Channeling, Improved Initiative, Toughness, Divine Interference ("spending a first level spell slot to undo a crit is a STEAL", Iluzry), Quick Channel, Reactive Healing ("This will absolutely save your life", RPGBOT); varas antes que dotes de metamagia (Axe, Tark, Brewer). Coincide con la sección 5 salvo Improved Initiative (lo cubren Reactionary + Amazing Initiative + Dusty Rose).
6. **Objetos:** Headband of Inspired Wisdom > Cloak > Belt > varitas de CLW/Lesser Restoration > Rod of Extend lesser > Rod of Reach lesser > Pearl of Power 3.º > Rod of Quicken lesser > Rod of Reach normal > Phylactery (nadie la pone azul: compite con la diadema). Coincide con la decisión de la sección 9.
7. **Razas:** humano y aasimar (Scion of Humanity) primero; enano "the OG clerics" pero malo para canalizar; elfo "offer nothing useful". **Deidades:** Sarenrae (canónica), Iomedae (WotR: Tactics + Heroism), Desna ("the best deity for clerics", Brewer — pero sin Healing).
8. **Mítico:** Inspired Spell > Recalled Blessing para un único sanador (frente 06/07); Faith's Reach y Relentless Healing como primeras path abilities; Dual Path hacia Guardian ("a healer that you can't kill means the rest of the party stays up", Aleron, rzs2rvar) o Marshal; Archmage no sin conjuros arcanos ("without the ability to cast arcane spells the rest of tha path isn't really that good", Trevor86, rzs2v9dc); "I think having the Heal spell is more important than your spec" (Taja the Barbarian, rzs2v9dc).

### 13.3 Mitos frecuentes y el veredicto de AoN

| Mito | Origen | Veredicto [AoN] |
|---|---|---|
| "El clérigo tiene armadura pesada" | D&D 3.5 | 🚫 Solo ligera, media y escudos (no torre); Heavy Armor Proficiency es una dote. https://www.aonprd.com/ClassDisplay.aspx?ItemName=Cleric |
| "Divine Power da BAB de guerrero" | 3.5 | 🚫 +1 suerte por 3 CL (máx. +6; **+3 a CL 11**), pg temporales = CL, un ataque extra no acumulable con haste. |
| "Se muere a −10" / "estabilizar es 10 %" | 3.5 | 🚫 −Con (−2×Con con Hard to Kill) / prueba de Con DC 10 con penalizador = pg negativos. CRB pg. 189-190. |
| "Raise Dead da 1 nivel negativo" | 3.5 | 🚫 **2 niveles permanentes** (Resurrection da 1). |
| "Remove curse / disease / neutralize poison curan automáticamente" y "Neutralize Poison da inmunidad" | 3.5 | 🚫 Los tres exigen prueba de CL vs la DC; Neutralize Poison no da inmunidad (Delay Poison sí, temporal). |
| "Dispel Magic tiene tope +10" | 3.5 | 🚫 1d20 + CL sin tope (Break Enchantment sí tiene tope +15). |
| "Licantropía se cura con remove curse" | 3.5 / mesa | ⚠️ El template solo cita remove disease/heal de un **clérigo de nivel 12+** o wolfsbane; remove curse es decisión del GM. |
| "Heroes' Feast da inmunidad al miedo" / "Righteous Might + Enlarge Person = Enorme" | 3.5 | 🚫 +4 moral vs miedo / los aumentos de tamaño no se acumulan. |
| "Heal quita niveles negativos" | confusión con Restoration | 🚫 "Heal does not remove negative levels or restore permanently drained ability score points." |
| "Breath of Life revive a cualquiera" | — | Parcial: ≤ 1 asalto, por encima de −Con, no vs efectos de muerte, nivel negativo temporal 1 día. |
| "El clérigo necesita dormir 8 h para recuperar conjuros" | costumbre | 🚫 1 hora de rezo a hora fija, "does not require a period of rest"; ranuras abiertas en 15 min. |
| "Puedo convertir la ranura de dominio en un cure" | — | 🚫 "Domain spells cannot be used to cast spells spontaneously." |
| "Channel cura a los vivos y daña a los no muertos a la vez" | — | 🚫 "all creatures of one type (either undead or living)" por uso. |
| "Quick Channel es acción rápida" | RPGBOT | 🚫 Acción de **movimiento** por 2 usos. |
| "Selective Channeling excluye a todos los enemigos" / "no hace falta verlos" | — / frente 01 | Parcial: hasta mod. Cha; FAQ jul-2011: **hay que ver o tocar** al excluido. |
| "Extra Channel se puede tomar varias veces" | mesa | 🚫 Sin cláusula de repetición; FAQ 2011: "exactly two extra uses per day". |
| "Merciful Healer da Selective Channeling gratis" | mezcla de arquetipos | 🚫 No figura en AoN. |
| "Healer's Blessing llega a nivel 8" / "se acumula con Empower" / "empodera Heal y Breath of Life" | Iluzry / mesa / frente 04 | 🚫 Nivel 6; no se acumula; solo conjuros con "cure" en el nombre. |
| "Channeled Revival funciona al alcance del channel" | Iluzry | ✅ FAQ 2013 (https://www.aonprd.com/FAQ.aspx): "It uses the range of your channel energy ability" (30 pies) — corrección del auditor del frente 04; el texto de la dote no lo dice. |
| "La vara de Reach lesser alcanza para Heal" | — | 🚫 Lesser ≤ 3.º; Heal exige la normal (11.000). |
| "Fate's Favored mejora Bit of Luck" | guías | 🚫 Bit of Luck es "roll twice", no un bono de suerte. Sí mejora Divine Favor (+4), Divine Power (**+4 a CL 11**, no +5), Prayer (+2), el Bonus de Hero Point (+9/+5), Sacred Tattoo, Adaptable Luck. Halfling Luck es racial, no suerte. |
| "Divine Protection da Cha a todas las salvaciones" | 1.ª impresión ACG | 🚫 Errata 2015: 1/día como inmediata. |
| "Un clérigo bueno puede lanzar Infernal Healing" | — | 🚫 Descriptor [evil]; la varita es zona gris (FAQ "Items as Spells" no resuelve el alineamiento; postura PFS de Mike Brock 2012 solo para PFS). |
| "La estándar extra de Amazing Initiative sirve para un Heal" | — | 🚫 "can't be used to cast a spell" (sí channel). El Extra Action del Hero Point sí puede ser un conjuro. |
| "Recuperation recupera poder mítico" / "el poder mítico vuelve al dormir" | — | 🚫 "doesn't refresh uses of mythic power" / AoN solo dice "each day" (GM). |
| "Inspired Spell exige tener el conjuro preparado" / "Inspired Spell y Recalled Blessing se acumulan" | confusión / frente 09 | 🚫 No lo exige (Recalled Blessing sí) / son excluyentes (crítico #6). |
| "Enduring Blessing y Divine Metamastery son de tier 6" | frente 07 §7.2 | 🚫 Son de **tier 3** (crítico #1). |
| "Aura of Perseverance" y "Divine Potential" son path abilities de Hierophant | resumen automático | 🚫 No existen en Hierophant (Aura of Perseverance es de Marshal). |
| "Existen Mythic Empower/Maximize/Quicken/Reach/Extra Channel" | Legendary Games (3PP) | 🚫 No en AoN; lo oficial es Ascendant Spell y Divine Metamastery. |
| "Mass Cure Light Wounds cura más que un channel a nivel 11" | — | 🚫 Mass CLW 15,5 c/u (23,25 con Healer's Blessing) vs channel 21-28 a todos, sin ranura; Mass CMW (30 c/u con HB) sí supera al channel. |
| "Sacred Summons con clérigo NG invoca cualquier [good]" | frente 04 | 🚫 Coincidencia **exacta** de subtipos: aura good → solo agathiones (crítico #5). |
| "Herald Caller pierde los cure espontáneos" | comunidad / videojuego | ⚠️ El texto de AoN no lo dice (RAW los conserva); GM. |
| "Devout Pilgrim", "Divine Commander" (de clérigo), "Vermin domain", "Elixir of Life" (objeto), propiedad "Guided" vigente, "Blessed Hands", "Deity's Favor", "Selective Channel" | d20pfsrd / 3.5 / 2e | 🚫 No existen en AoN PF1e (Varisian Pilgrim; Warpriest; subdominio Insect; discovery de alquimista nivel 16; Pathfinder #10 era 3.5; inexistentes). |
| "Los videojuegos de Owlcat reflejan las reglas de mesa" | Kingmaker / WotR (PC) | 🚫 Ecclesitheurge, Herald Caller, Crusader, precios (Rod of Reach 1.500 = coste de creación, no precio) y dotes están alterados. |
| "Un PJ creado a nivel 11 arranca con 3 Hero Points" / "Cheat Death salva a un aliado" / "la Extra Action no puede ser un conjuro" | mesa | 🚫 1 punto "regardless of her level" / "but not another character or NPC" / esa cláusula es de Amazing Initiative. |
| "Background Skills da 2 + Int" / "los rangos de trasfondo sirven para Perception" / "Perception es de clase del clérigo" | mesa | 🚫 Int no modifica / solo habilidades de trasfondo / no es de clase (Seeker). |
| "Sarenrae da el subdominio Legend (Hero's Fortune gratis)" | — | 🚫 Legend = General Susumu, Gorum, Shizuru + Acolyte of Apocrypha. |

> **➡️ Para NUESTRA build (sección 13)**
> - Tomamos de la comunidad lo verificado: economía de acciones (curar con movimiento/inmediatas), nunca preparar cures, ranuras abiertas, varita de CLW, diadema antes que filacteria, Heal como cura de combate, BoL como "impuesto" diario, varas antes que dotes de metamagia, Heroism como buff de acción rápida.
> - Nos apartamos donde los parámetros lo exigen: Healing como dominio principal (los "healbot are dumb" asumen otro sanador o combates normales), nada de Travel/Luck (sin exploración; Bit of Luck cuesta la estándar), sin Reach Cleric (armadura media y escudo; supervivencia), sin Improved Initiative como dote (Reactionary + Amazing Initiative + Dusty Rose), sin Fate's Favored (no lanzamos Divine Favor/Power).
> - Todo lo marcado 🚫 arriba se lleva a la mesa impreso: son las discusiones que más tiempo consumen y en todas AoN tiene la respuesta.

---

## 14. PREGUNTAS ABIERTAS PARA EL JUGADOR Y EL GM

Ya confirmado (no se pregunta): compra 25, nivel 11, tier 3 Hierophant, raza/deidad libres, composición del grupo, combates muy difíciles, nada de trampas, Background Skills, 1 drawback, Hero Points (no Antihero), Sacred Geometry baneada, WBL 82.000, sin 3PP, rasgos de campaña con permiso.

**Fuentes y objetos**
1. **¿Se permite comprar o encargar el objeto combinado Headband of Inspired Wisdom +4 + Phylactery of Positive Channeling (32.500 po; regla "+50 %" de CRB pg. 553)?** Sí → channel 8d6 desde el día 1 (lista recomendada de la sección 9). No → channel 6d6; los 16.500 po van a Pearl of Power 2.º + Ring of Sustenance + ahorro, y la Phylactery se encarga a nivel 12.
2. **¿Qué libros fuera de los hardcovers se permiten?** Healer's Handbook (Envoy of Healing), Antihero's Handbook (Scarred), Champions of Purity (Blessed Touch, Summon Good Monster), Ultimate Campaign (rasgos, drawbacks: hardcover, debería estar), Divine Anthology, Inner Sea Gods (obediencia de Sarenrae), Monster Codex (Ironskin), Planar Adventures (Healer's Hands), Occult Adventures (Talisman of Life's Breath), Mythic Origins (Shape Channel, Insightful Interaction), Seekers of Secrets (ioun stones cracked). Si no hay Healer's Handbook → tercer rasgo Birthmark o Blessed Touch; si no hay Antihero's Handbook → drawback Provincial (UCam) o Guilty Fraud (Spymaster's Handbook).
3. **¿El diamante de 5.000 po de Raise Dead (y un futuro Talisman of Life's Breath para el tanque) salen del botín común?** Sí → no se recorta la lista de equipo. No → sacrificar Cloak +4 → +3 (7.000) y llevar el diamante desde la sesión 1.
4. **¿Hay una metrópolis o un NPC de 7.º accesible para Resurrection / Regenerate / Greater Restoration / Stone to Flesh, y aplica el GM la cláusula "not generally available" por encima de 3.000 po (UE pg. 99)?** Si no hay acceso, hay que presupuestar pergaminos de 7.º (2.275-12.275 po) del botín común y el GM debería saber que un death effect deja al grupo sin respuesta.
5. **¿Una varita de Lesser Restoration (CL 1, versión paladín, 750 po) se activa como estándar o tarda 3 asaltos por carga?** Solo afecta fuera de combate; si son 3 asaltos, sigue valiendo.

**Reglas míticas**
6. **Umbral de Breath of Life sobre aliados míticos: ¿−Con (literal) o −2×Con (Hard to Kill)?** Con −Con, contra golpes que dejan al tanque a −45 o peor conviene Heal + Relentless Healing en vez de BoL (tabla de la sección 12.2).
7. **Relentless Healing: ¿impone el nivel negativo temporal de BoL? ¿Funciona sobre muertos por efecto de muerte? ¿El uso de poder mítico se gasta si el aliado resultaba estar vivo?** Define si es nuestra primera o segunda herramienta de resurrección.
8. **Faith's Reach sobre un aliado dispuesto: ¿toque automático o ataque de toque a distancia (que provoca y falla con 1 natural)?** Con la lectura estricta, contra aliados agarrados/inconscientes sigue siendo automático (CA de toque baja), pero cada Heal a distancia provocaría un AdO extra si estamos amenazados.
9. **Amazing Initiative: ¿la estándar extra puede usarse para una varita (spell trigger) o para Rebuke Death (Sp)?** Sí → más opciones para el asalto de crisis; no → solo channel/poción/movimiento.
10. **Mythic Domain (vía Extra Path Ability): ¿aplica a los dos dominios ("your domain's granted powers") y la recarga devuelve también los asaltos de Aura of Heroism?** Si el GM lo limita a un dominio o solo a usos "por día", la dote mítica de tier 3 pasa a Mythic Selective Channeling.
11. **Mythic Heal augmented ("acts as restoration"): ¿exige los 100/1.000 po de polvo de diamante?** Cambia si vale la pena gastar 2 usos para un nivel negativo permanente en combate.
12. **¿Cuándo se recarga el poder mítico (hora de rezo / 8 h / medianoche) y Recuperation habilita una nueva sesión de preparación sin el Recent Casting Limit?** Con "hora de rezo" y rezo tras Recuperation, un día de dos combates grandes es sostenible; si no, hay que racionar.
13. **¿Habrá enemigos míticos con frecuencia?** Mythic Break Enchantment solo es automático contra no míticos; Mythic Iron Will/Great Fortitude (futuras) solo tiran dos veces contra fuentes no míticas; Recalled Blessing/Mythic Spell Focus solo castigan a no míticos.
14. **¿A qué ritmo se ganan tiers (Table 1-2: 2 trials para el 4.º) y cuál es el origen de la ascensión (Granted puede perder poderes si se traiciona al patrón)?** Define cuándo llegan Surge 1d8, Mythic Saving Throws (tier 5) y la tercera dote mítica.

**Hero Points**
15. **¿Se conceden +1 por historia escrita y +1 por retrato/miniatura al crear el personaje (APG pg. 322)?** Con 2-3 puntos, Cheat Death existe desde la sesión 1; con 1, solo Act Out of Turn/Bonus/Extra Action.
16. **¿Se acumulan en el mismo asalto la Extra Action del Hero Point y la estándar extra de Amazing Initiative? ¿Se puede sumar Surge (+1d6) a una tirada ya mejorada con el Bonus (+4 después) o repetida con Reroll? ¿A qué distancia se puede dar el Bonus +4 a un aliado?** Define el "asalto máximo" (220-275 + 16d6/16d6) y el orden Bonus → Surge → Reroll.
17. **¿Está disponible una Hero's Blade (APG pg. 325: "reservado a villanos")?** Si sí, es el seguro de vida más barato del juego (6 puntos por 17.315 po) para nivel 12-13.

**Reglas de combate y mesa**
18. **¿Está activa la regla opcional de Massive Damage (CRB pg. 191)?** Con 120 pg, cualquier golpe de 60+ obliga a Fort DC 15 o muerte: Death Ward y Hard to Kill no protegen.
19. **¿Método de pg por nivel (promedio 4,5, "PFS" 5 o tirada)?** 120 vs 125 pg.
20. **¿El jugador conoce los pg de los aliados caídos sin Deathwatch (muerto vs moribundo)?** Si no, preparar Deathwatch (1.º, 110 min) cada día de combate o usar Heal + Relentless Healing "por si acaso".
21. **¿Qué CL asigna a las miradas y alientos petrificantes (Su) para la DC de Break Enchantment (convención = DG)?** Define si Mythic Break Enchantment merece la 4.ª plaza de Mythic Spell Lore a tier 4.
22. **Licantropía: ¿acepta Remove Curse / Break Enchantment con prueba de CL, o solo remove disease/heal de clérigo de nivel 12+ y wolfsbane? ¿Inspired Spell (CL 13) cuenta como "cleric of 12th level"?**
23. **¿Qué tipo de enemigo predomina?** No muertos → Deathless Spirit (aasimar) y considerar Sun en lugar de Heroism; exteriores malvados → Alignment Channel (evil) como dote futura y Good/Agathion; dominadores → Birthmark en lugar de Focused Mind; agarradores → FoM extendido con Enduring Blessing; lanzadores de death effects → acceso a Resurrection.
24. **¿Permite retraining (UCam pg. 188-189) para cambiar dotes/dominio si el rol secundario cambia con la campaña?** Si no, la 6.ª dote (Divine Interference) y el subdominio Heroism quedan fijos.
25. **¿Deific Obedience de Sarenrae (1 h diaria; boon Healing Spirit a 12 DG) se juega con normalidad?** Decide la 7.ª dote a nivel 13 (Deific Obedience vs Mythic Toughness normal).

**Para el jugador**
26. **¿Confirma el segundo dominio Glory/Heroism (buff de acción rápida) frente a Good/Agathion (protección) o Sun (no muertos)?**
27. **¿Prefiere Wis 17 / Dex 14 / Con 14 (recomendado) o Wis 18 / Dex 10 / Str 11 (Wis 28 a nivel 11, −2 CA/Ref/iniciativa) o Cha 16 / Dex 12 (excluir 3 y 6-8 channels)?**
28. **¿Está dispuesto a llevar la contabilidad de duraciones (Aura of Heroism por asaltos, Blessing of Fervor, Magic Vestment, Status) y de los 9 poderes míticos, o prefiere una versión más simple (Healing + Good/Agathion, sin Mythic Domain)?**

---

## 15. ÍNDICE DE FUENTES

Todas las URL de Archives of Nethys son de la sección Pathfinder First Edition (`www.aonprd.com`, sin `2e.`). Las de `legacy.aonprd.com` son el PRD oficial de Paizo alojado por AoN (mismo texto). Las de `paizo.com/paizo/faq` son las FAQ oficiales. Todo lo demás es opinión de la comunidad.

### 15.1 Reglas generales (CRB, APG, UCam, Unchained)
- Clase Cleric: https://www.aonprd.com/ClassDisplay.aspx?ItemName=Cleric — CRB pg. 38
- Common Terms (redondeo, pg máximos a nivel 1, bonos del mismo tipo): https://www.aonprd.com/Rules.aspx?Name=Common%20Terms&Category=Getting%20Started ; https://www.aonprd.com/Rules.aspx?ID=82 — CRB pg. 11
- Ability Scores / compra por puntos / conjuros extra: https://www.aonprd.com/Rules.aspx?Name=Ability%20Scores&Category=Getting%20Started ; https://aonprd.com/Rules.aspx?ID=90 ; https://aonprd.com/Rules.aspx?ID=84 — CRB pg. 15-17
- Character Advancement (dotes, +1 característica, XP): https://www.aonprd.com/Rules.aspx?Name=Character%20Advancement&Category=Getting%20Started ; https://aonprd.com/Rules.aspx?ID=85 ; https://www.aonprd.com/Rules.aspx?ID=342 — CRB pg. 30
- Favored Class: https://aonprd.com/Rules.aspx?ID=344 — CRB pg. 31
- Definitions of Terms: https://www.aonprd.com/Rules.aspx?ID=346
- Armor / arcane spell failure: https://www.aonprd.com/Rules.aspx?ID=361 — CRB pg. 149; Arcane Spells: https://www.aonprd.com/Rules.aspx?Name=Arcane+Spells&Category=Magic+Basics — CRB pg. 83
- Casting Spells / Concentration: https://www.aonprd.com/Rules.aspx?Name=Casting%20Spells&Category=Magic ; https://www.aonprd.com/Rules.aspx?ID=205 — CRB pg. 206-207
- Range: https://www.aonprd.com/Rules.aspx?Name=Range&Category=Casting+Spells — CRB pg. 213; Casting Time: https://www.aonprd.com/Rules.aspx?Name=Casting%20Time&Category=Casting%20Spells
- Components / Divine Focus: https://www.aonprd.com/Rules.aspx?ID=225 — CRB pg. 212
- Combining Magic Effects (bonos del mismo tipo): https://www.aonprd.com/Rules.aspx?ID=211 — CRB pg. 208
- Preparing Divine Spells: https://www.aonprd.com/Rules.aspx?Name=Preparing+Divine+Spells&Category=Divine+Spells ; https://www.aonprd.com/Rules.aspx?Name=Divine+Spells&Category=Casting+Spells — CRB pg. 220; Arcane (8 h): https://aonprd.com/Rules.aspx?ID=234
- Saving Throw DC: https://www.aonprd.com/Rules.aspx?Name=Saving%20Throw&Category=Spells — CRB pg. 216
- Metamagic (espontáneo = asalto completo): https://www.aonprd.com/Feats.aspx?Categories=Metamagic ; https://legacy.aonprd.com/coreRulebook/feats.html — CRB pg. 112
- Actions in Combat (Table 8-2; AoN "Table 7-2"): https://www.aonprd.com/Rules.aspx?Name=Actions%20in%20Combat&Category=Combat ; Cast a Spell: https://aonprd.com/Rules.aspx?ID=133 — CRB pg. 181-185
- Attacks of Opportunity: https://www.aonprd.com/Rules.aspx?Name=Attacks%20of%20Opportunity&Category=Combat — CRB pg. 180
- Ready: https://www.aonprd.com/Rules.aspx?ID=199 — CRB pg. 203
- Helpless Defenders / coup de grace: https://www.aonprd.com/Rules.aspx?Name=Helpless%20Defenders&Category=Combat%20Modifiers — CRB pg. 197
- Injury and Death: https://www.aonprd.com/Rules.aspx?Name=Injury%20and%20Death&Category=Combat — CRB pg. 189-191; Healing: https://www.aonprd.com/Rules.aspx?Name=Healing&Category=Injury%20and%20Death — CRB pg. 191; Conditions: https://www.aonprd.com/Rules.aspx?Name=Conditions&Category=Combat — CRB pg. 565-567
- Afflictions / Curses / Diseases: https://www.aonprd.com/Rules.aspx?Name=Afflictions&Category=Special%20Abilities ; https://www.aonprd.com/Rules.aspx?Name=Curses&Category=Special%20Abilities — CRB pg. 555-557
- Ability Score Damage/Drain/Bonuses: https://aonprd.com/Rules.aspx?ID=416 ; https://www.aonprd.com/Rules.aspx?Name=Ability+Score+Bonuses&Category=Special+Abilities ; https://aonprd.com/Rules.aspx?ID=415 — CRB pg. 554-555
- Energy Drain and Negative Levels: https://www.aonprd.com/Rules.aspx?Name=Energy%20Drain%20and%20Negative%20Levels&Category=Special%20Abilities — CRB pg. 562; UMR Energy Drain: https://www.aonprd.com/UMR.aspx?ItemName=Energy%20Drain ; UMR Gaze: https://www.aonprd.com/UMR.aspx?ItemName=Gaze ; UMR Spell-Like Abilities: https://www.aonprd.com/UMR.aspx?ItemName=Spell-Like%20Abilities ; UMR Swallow Whole: https://www.aonprd.com/UMR.aspx?ItemName=Swallow%20Whole
- Special Abilities (Sp/Su/Ex): https://www.aonprd.com/Rules.aspx?Name=Special+Abilities&Category=Magic+Basics — CRB pg. 221
- Traps: https://www.aonprd.com/Rules.aspx?Name=Traps&Category=Environment — CRB pg. 417
- Weapons (Table 6-5 tamaños): https://www.aonprd.com/Rules.aspx?Name=Weapons&Category=Equipment — CRB pg. 144
- Wealth by Level: https://aonprd.com/Rules.aspx?ID=254 — CRB pg. 399
- Magic Items on the Body: https://www.aonprd.com/Rules.aspx?ID=369 — CRB pg. 459; Using Items: https://aonprd.com/Rules.aspx?ID=367 ; Scrolls: https://aonprd.com/Rules.aspx?ID=381 — CRB pg. 490; Wands: https://aonprd.com/Rules.aspx?ID=383 — CRB pg. 496; Potions: https://aonprd.com/Rules.aspx?ID=378 — CRB pg. 477
- Magic Item Creation / Adding New Abilities / precios: https://www.aonprd.com/Rules.aspx?ID=401 ; https://www.aonprd.com/Rules.aspx?ID=412 ; https://aonprd.com/Rules.aspx?ID=402 ; https://aonprd.com/Rules.aspx?ID=376 ; https://aonprd.com/Rules.aspx?ID=377 ; https://aonprd.com/Rules.aspx?ID=408 ; https://aonprd.com/Rules.aspx?ID=410 — CRB pg. 461-468, 548-553
- Archetypes (APG pg. 72): https://www.aonprd.com/Rules.aspx?ID=440 ; ACG Selecting Archetypes: https://legacy.aonprd.com/advancedClassGuide/classOptions/index.html
- Traits: https://www.aonprd.com/Rules.aspx?ID=450 ; https://www.aonprd.com/Rules.aspx?ID=452 — APG pg. 326; Drawbacks: https://legacy.aonprd.com/ultimateCampaign/characterBackground/traits.html ; https://www.aonprd.com/Rules.aspx?ID=1222 — UCam pg. 8, 64; lista: https://www.aonprd.com/Traits.aspx?Type=Drawback
- Hero Points: https://www.aonprd.com/Rules.aspx?ID=445 ; https://www.aonprd.com/Rules.aspx?ID=446 ; https://www.aonprd.com/Rules.aspx?ID=447 ; https://www.aonprd.com/Rules.aspx?ID=448 ; https://www.aonprd.com/Rules.aspx?ID=449 — APG pg. 322-324; dotes: https://www.aonprd.com/Feats.aspx?Category=Hero%20Point
- Background Skills: https://www.aonprd.com/Rules.aspx?ID=1732 a https://www.aonprd.com/Rules.aspx?ID=1744 (Lore 1740, Artistry 1739) — Unchained pg. 46-53; Skill Unlocks: https://www.aonprd.com/SkillUnlocks.aspx — Unchained pg. 84
- Retraining: https://www.aonprd.com/Rules.aspx?ID=1471 — UCam pg. 188-189; Wands no se recargan: https://aonprd.com/Rules.aspx?ID=1430 — UCam pg. 171; crafting y WBL: https://www.aonprd.com/Rules.aspx?ID=1432 — UCam pg. 173
- Exorcism / Possession: https://www.aonprd.com/Rules.aspx?Name=Exorcism&Category=Possession
- Spellcasting (servicios de NPC): https://www.aonprd.com/EquipmentMiscDisplay.aspx?ItemName=Spellcasting — UE pg. 99 / CRB pg. 159
- Table 6-8 monstruos por CR: https://aonprd.com/Rules.aspx?ID=1673 — MA pg. 228 (= Bestiary)
- Skills: Heal https://www.aonprd.com/Skills.aspx?ItemName=Heal ; Use Magic Device https://www.aonprd.com/Skills.aspx?ItemName=Use%20Magic%20Device

### 15.2 FAQ oficiales
- FAQ del Core Rulebook (Paizo): https://paizo.com/paizo/faq/v5748nruor1fm — bastard sword (jul-2011); bonus spells por nivel de clase (jul-2011); channel no acumula entre clases (jul-2011); Empower sobre cure (ene-2011); **Selective Channeling: ver o tocar** (jul-2011); Extra Channel "exactly two extra uses" (2011); Positive and Negative Energy (jul-2016); Items as Spells (ene-2010); Quicken Spell (ene-2011).
- Índice de FAQ en AoN: https://www.aonprd.com/FAQs.aspx — Channeled Revival alcance = channel (2013); Energy Drain no es death effect (ene-2013); Energy Drain and Negative Levels (ene-2017); Hierophant/Archmage Inspired Spell/Wild Arcana (ene-2013); DR/epic; Headband of Vast Intelligence (2011); FAQ ARG: https://paizo.com/paizo/faq/v5748nruor1gh
- Erratas: Divine Protection (ACG 2.ª impresión, 2015): https://legacy.aonprd.com/updates.html ; hilo https://paizo.com/threads/rzs2sloz

### 15.3 Dominios, arquetipos, deidades, razas
- Índice de dominios y regla de subdominios: https://www.aonprd.com/ClericDomains.aspx — UM pg. 30
- Dominios (patrón `DomainDisplay.aspx?ItemName=`): Healing, Good, Community, Luck, Protection, Sun, Knowledge, Travel, Liberation, Repose, Glory, Nobility, Strength, War, Law, Charm, Plant, Earth, Air, Water, Fire, Magic, Rune, Artifice, Animal, Weather, Darkness, Death, Destruction, Trickery, Chaos, Evil, Madness, Void, Scalykind (p. ej. https://www.aonprd.com/DomainDisplay.aspx?ItemName=Healing — CRB pg. 44; https://www.aonprd.com/DomainDisplay.aspx?ItemName=Glory — CRB pg. 44 / APG)
- Variant Channeling: https://www.aonprd.com/ClericVariantChanneling.aspx — UM pg. 28
- Arquetipos (índice): https://www.aonprd.com/Archetypes.aspx?Class=Cleric ; fichas (patrón `ArchetypeDisplay.aspx?FixedName=Cleric%20<Nombre>`): Merciful Healer (UC pg. 41), Angelfire Apostle (HH pg. 7), Stoic Caregiver (HH pg. 6), Blossoming Light, Sacred Attendant (HH pg. 4), Ecclesitheurge (ACG pg. 91), Evangelist (UC pg. 40), Cloistered Cleric (UM pg. 31), Herald Caller (Monster Summoner's Handbook pg. 7), Theologian (UM pg. 32), Separatist (UM pg. 32), Divine Paragon (DA pg. 15), Varisian Pilgrim (ISM pg. 42), Crusader (UC pg. 40), Divine Strategist (UC pg. 40), Hidden Priest, Scroll Scholar, Cardinal, Undead Lord, Fiendish Vessel…; Warpriest Divine Commander: https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Warpriest+Divine+Commander
- Clases de referencia: Wizard (bonded object) https://www.aonprd.com/ClassDisplay.aspx?ItemName=Wizard ; Bard https://www.aonprd.com/ClassDisplay.aspx?ItemName=Bard ; Oracle / misterio Life https://www.aonprd.com/MysteryDisplay.aspx?ItemName=Life
- Deidades (patrón `DeityDisplay.aspx?ItemName=`): Sarenrae (ISG pg. 132), Pharasma (ISG pg. 116), Irori (ISG pg. 84), Milani (Inner Sea Faiths pg. 71), Qi Zhong (Dragon Empires Gazetteer pg. 58), Dalenydra, Korada, Immonhiel, Shei, Lythertida, Vildeis (ISG pg. 320-324), Lymnieris, Iomedae (ISG pg. 76), Desna (ISG pg. 44), Erastil, Shelyn, Torag, Cayden Cailean, Abadar, Gozreh, Nethys; índice https://www.aonprd.com/Deities.aspx
- Razas (patrón `RacesDisplay.aspx?ItemName=`): Aasimar (ARG pg. 84-85; Blood of Angels pg. 21-23), Human (CRB pg. 27; ARG pg. 72; ISR pg. 213-214), Half-Elf, Half-Orc, Dwarf (ISR pg. 210), Halfling, Elf, Gnome, Samsaran (ARG pg. 198), Undine, Kasatha, Dhampir, Tiefling…; Celestial template: https://www.aonprd.com/MonsterTemplates.aspx?ItemName=Celestial ; Lycanthrope: https://www.aonprd.com/MonsterTemplates.aspx?ItemName=Lycanthrope
- Monstruos: Hound Archon, Lantern Archon, Vulpinal, Silvanshee, Bralani, Lillend, Dire Tiger (Smilodon), Huge Earth Elemental, Triceratops, Invisible Stalker, Medusa, Basilisk, Cockatrice, Gorgon, Mummy, Ghoul (patrón `MonsterDisplay.aspx?ItemName=`)

### 15.4 Dotes y rasgos (patrón `FeatDisplay.aspx?ItemName=` / `TraitDisplay.aspx?ItemName=`)
- Dotes: Selective Channeling (CRB pg. 132; mítica MA pg. 72), Extra Channel (CRB pg. 123 / ACG pg. 146), Quick Channel (UM pg. 154), Reactive Healing (ACG pg. 155), Divine Interference (UM pg. 149; mítica MA pg. 63), Toughness (CRB pg. 135; mítica MA pg. 75), Improved Channel, Channel Smite, Guided Hand (UC pg. 103), Alignment Channel, Elemental Channel, Turn Undead, Channeled Revival (UC pg. 92), Channel Ray, Contingent Channeling (UC pg. 93), Versatile Channeler, Reach Spell (APG pg. 168), Empower Spell (CRB pg. 122), Maximize Spell (CRB pg. 130), Quicken Spell (CRB pg. 132), Extend, Heighten, Persistent, Dazing, Merciful, Combat Casting (CRB pg. 119), Warrior Priest (UM pg. 159), Sacred Summons (UM pg. 155), Augment Summoning, Superior Summoning, Summon Good Monster (Champions of Purity pg. 33), Fey Foundling (ISWG pg. 286), Divine Protection (ACG pg. 144), Healer's Hands (Planar Adventures pg. 28), Signature Skill (Unchained pg. 82), Combat Medic (UC pg. 91), Deific Obedience (ISG pg. 210), Celestial Obedience (Chronicle of the Righteous pg. 5), Leadership, Cosmopolitan, Additional Traits (APG pg. 150), Craft Wondrous Item, Scribe Scroll, Craft Wand, Hero's Fortune / Luck of Heroes / Blood of Heroes (APG pg. 323-324), Defiant Luck (ARG pg. 77), Divine Fighting Technique (DA pg. 28-31), Steel Soul, Extra Lay on Hands (CRB pg. 124: cláusula de repetición, contraste)
- Dotes míticas (misma página que la base): Mythic Spell Lore (MA pg. 70), Extra Path Ability (MA pg. 65), Extra Mythic Power (MA pg. 65), Dual Path (MA pg. 63), Mythic Paragon (MA pg. 70), Mythic Toughness, Mythic Iron Will / Great Fortitude / Lightning Reflexes, Mythic Improved Initiative, Mythic Spell Focus, Mythic Augment Summoning, Potent/Lucky/Maximize Surge, Ascendant Spell (MA pg. 55), Mythic Crafter; índice: https://www.aonprd.com/Feats.aspx?Category=Mythic ; https://legacy.aonprd.com/mythicAdventures/mythicFeats.html
- No existen (URL devuelve el índice): Blessed Hands, Deity's Favor, Selective Channel, Merciful Healing, Mythic Empower/Maximize/Quicken/Extend/Reach Spell, Mythic Extra Channel
- Rasgos: Reactionary (UCam pg. 53), Focused Mind (UCam pg. 57), Birthmark (UCam pg. 54), Fate's Favored (UCam pg. 55), Blessed Touch (Champions of Purity pg. 7), Envoy of Healing (HH pg. 12), Seeker (UCam pg. 61), Indomitable Faith, Sacred Conduit, Magical Knack, Acolyte of Apocrypha (DA pg. 22), Exalted of the Society, Trap Finder (Mummy's Mask PG pg. 10), Wisdom in the Flesh, Vagabond Child; drawbacks: Scarred, Vainglory, Guilty Fraud, Foul Brand, Umbral Unmasking, Provincial, Helpless, Superstitious (Drawback)

### 15.5 Conjuros (patrón `SpellDisplay.aspx?ItemName=`; lista de clase https://www.aonprd.com/Spells.aspx?Class=Cleric ; míticos https://www.aonprd.com/Spells.aspx?Class=Mythic)
Cure Light/Moderate/Serious/Critical Wounds (CRB pg. 262-263; míticos MA pg. 89-90), Cure Light/Moderate Wounds Mass, Heal (CRB pg. 294; MA pg. 97), Breath of Life (CRB pg. 251; MA pg. 87), Restoration / Lesser / Greater (CRB pg. 334), Remove Blindness/Deafness, Remove Curse, Remove Disease, Remove Paralysis, Remove Fear (CRB pg. 332), Neutralize Poison (CRB pg. 316), Delay Poison (+Communal), Death Ward (CRB pg. 264), Freedom of Movement (CRB pg. 287), Cleanse (APG pg. 211), Pillar of Life (APG pg. 236), Blessing of Courage and Life (APG pg. 205), Symbol of Healing (UM pg. 241), Stabilize, Deathwatch, Gentle Repose, Raise Dead (CRB pg. 329), Resurrection (CRB pg. 334), Reincarnate, Regenerate (CRB pg. 331), Break Enchantment (CRB pg. 251; MA pg. 87), Stone to Flesh / Flesh to Stone (CRB pg. 350/284), Status, Shield Other, Sanctuary (MA pg. 107), Bless (MA pg. 85), Aid, Prayer (MA pg. 104), Blessing of Fervor (APG pg. 205; MA pg. 86), Divine Favor, Divine Power, Righteous Might, Shield of Faith, Magic Weapon (+Greater), Magic Vestment (MA pg. 100), Weapon of Awe, Bull's Strength y familia, Ironskin (Monster Codex pg. 45), Barkskin, Protection from Evil (+Communal; MA pg. 105), Resist Energy (+Communal), Protection from Energy (+Communal), Endure Elements, Ant Haul, Air Walk (+Communal), Water Walk (+Communal), Water Breathing, Wind Walk, Plane Shift, Word of Recall, Find the Path, Heroes' Feast (CRB pg. 295), Spiritual Weapon, Spiritual Ally (APG pg. 246), Summon Monster 1-6 (numeral arábigo en la URL), Blade Barrier (CRB pg. 249; MA pg. 85), Wall of Stone, Hold Person (+Mass), Command (+Greater), Forbid Action (+Greater), Calm Emotions, Silence, Sound Burst, Obscuring Mist, Wind Wall, Dispel Magic (+Greater), Daylight, Deeper Darkness, Invisibility Purge, Searing Light, Spear of Purity, Burst of Radiance, Holy Smite, Order's Wrath, Chaos Hammer, Unholy Blight, Flame Strike, Dismissal, Banishment, Antilife Shell, Repulsion, Undeath to Death, Ghostbane Dirge, Slay Living, Bestow Curse, Contagion, True Seeing, Glyph of Warding, Symbols, Detect Magic, Make Whole, Find Traps, Comprehend Languages, Tongues, Augury, Divination, Commune, Sending, Speak with Dead, Locate Object, Zone of Truth, Infernal Healing, Celestial Healing, Heroic Fortune (+Mass), Malediction (Hero Points), Unravel Destiny, Life Bubble, Liberating Command, Archon's Aura, Angelic Aspect (Lesser), Sacred Bond, Vigor; y los NO de clérigo verificados: Haste, Fly, Heroism, Enlarge Person, Mirror Image, Invisibility, Stoneskin, Teleport, Dimension Door, Cat's Grace, Fox's Cunning, Mage Armor, See Invisibility, Longstrider, Darkvision, Spider Climb, Slow, Glitterdust, Web, Grease, Overland Flight, False Life, Restful Sleep, Bestow Grace, Detect Thoughts, Sleep.

### 15.6 Mythic Adventures
- Mythic Heroes / Base Mythic Abilities / Table 1-1: https://www.aonprd.com/Rules.aspx?ID=1618 ; https://www.aonprd.com/Rules.aspx?Name=Mythic%20Heroes&Category=Mythic%20Adventures ; https://aonprd.com/Rules.aspx?ID=1613 — MA pg. 10-12
- Gaining Tiers / Table 1-2: https://www.aonprd.com/Rules.aspx?ID=1619 — MA pg. 13; Creating / Ascension / Selecting a Path: https://www.aonprd.com/Rules.aspx?ID=1614 ; ...1615 ; ...1616 ; ...1617
- Mythic Rules completo (Feats, Spells, Running, Boons, Flaws, CR/Level, Legendary Items): https://www.aonprd.com/Rules.aspx?ID=1608 ; Mythic Spells: https://www.aonprd.com/Rules.aspx?Name=Mythic%20Spells&Category=Mythic%20Rules ; https://aonprd.com/Rules.aspx?ID=1621 — MA pg. 54, 78, 128-134
- Mythic versus Non-Mythic: https://www.aonprd.com/Rules.aspx?Name=Mythic%20versus%20Non-Mythic&Category=What%20is%20Mythic? — MA pg. 5; Trials: https://www.aonprd.com/Rules.aspx?Name=Mythic%20Trials&Category=Running%20a%20Mythic%20Game — MA pg. 129; Boons: https://www.aonprd.com/Rules.aspx?Name=Mythic%20Boons&Category=Running%20a%20Mythic%20Game — MA pg. 132; Legendary Items: https://www.aonprd.com/Rules.aspx?Name=Base%20Legendary%20Abilities&Category=Legendary%20Items — MA pg. 169
- Hierophant: https://www.aonprd.com/MythicPaths.aspx?Path=Hierophant (MA pg. 32) ; https://www.aonprd.com/PathAbilities.aspx?Path=Hierophant (MA pg. 32-37; Mythic Origins pg. 26-27; Heroes of Golarion pg. 29) ; Starstone: https://www.aonprd.com/PathAbilities.aspx?Path=Hierophant+(Starstone) ; **`MythicPathDisplay.aspx?ItemName=Hierophant` devuelve 404**
- Universal: https://www.aonprd.com/PathAbilities.aspx?Path=Universal — MA pg. 50-51; Archmage / Guardian / Marshal: https://www.aonprd.com/PathAbilities.aspx?Path=Archmage ; ...=Guardian ; ...=Marshal ; https://www.aonprd.com/MythicPaths.aspx?Path=Archmage (etc.)
- Ritmo de Wrath of the Righteous (NO AoN; fichas de producto de Paizo): https://store.paizo.com/pathfinder/pathfinder-first-edition/adventure-paths/wrath-of-the-righteous/

### 15.7 Objetos (patrón `MagicWondrousDisplay.aspx?FinalName=` etc.)
- Phylactery of Positive Channeling (UE pg. 252 / CRB pg. 526); Headband of Inspired Wisdom +2/+4/+6 (UE pg. 250 / CRB pg. 516); Cloak of Resistance; Belt of Mighty Constitution; Belt of Physical Might; Ring of Protection; Amulet of Natural Armor; Ring of Sustenance; Ring of Inner Fortitude; Ring of Heroes; Ring of Curing; Handy Haversack; Bag of Holding; Muleback Cords; Wayfinder; Feather Token; Sipping Jacket; Boots of Speed; Boots of Striding and Springing; Eyes of the Eagle; Circlet of Persuasion; Brooch of Shielding; Healer's Gloves (UE pg. 238); Healer's Satchel (HH pg. 28); Restorative Ointment; Pearl of Power (UE pg. 315); Ioun Stones (Incandescent Blue Sphere, Dusty Rose Prism, Pale Green Prism, Clear Spindle, Dark Blue Rhomboid; cracked/flawed: Seekers of Secrets pg. 46-48); Talisman (Lesser): Life's Breath / Healing Power (OA pg. 263); Quick Runner's Shirt; Recondite Holy Symbol
- Rods: https://www.aonprd.com/MagicRods.aspx?Category=Metamagic ; Reach https://www.aonprd.com/MagicRodsDisplay.aspx?FinalName=Rod+of+Metamagic%2C+Reachlesser ; Extend; Empower; Maximize; Quicken; Selective; Merciful (UE pg. 187-191 / CRB pg. 484-485 / APG pg. 294-296)
- Armas y armaduras: Scimitar (UE pg. 18); Breastplate / Agile Breastplate / Full Plate / Heavy shields / Buckler (UE pg. 9 / CRB pg. 151); Special Materials (mithral, darkwood): https://www.aonprd.com/SpecialMaterials.aspx — UE pg. 49-51 / CRB pg. 154; propiedades Fortification, Comfort (PFS Field Guide pg. 50), Glamered, Spell Storing, Champion, Holy, Merciful, Bane, Impact (UE pg. 143), Guided (Pathfinder #10 pg. 22); Hero's Blade, Reaver's Scythe (APG pg. 325)
- Mundano: Holy symbol (wooden/silver/iron/gold/platinum/compartment/**tattoo** UE pg. 57), Healer's kit, Cleric's kit, Spell component pouch, Holy water, Alchemist's fire, Antitoxin, Antiplague, Smelling salts, Everburning torch, Sunrod, Silk rope, Wolfsbane (https://www.aonprd.com/PoisonDisplay.aspx?ItemName=Wolfsbane — CRB pg. 560 / UE pg. 111)
- Alchemist Discoveries (Elixir of Life no es objeto): https://www.aonprd.com/AlchemistDiscoveries.aspx

### 15.8 Guías y foros de la comunidad (no son reglas)
Zenith Games (índice) https://zenithgames.blogspot.com/2012/11/the-comprehensive-pathfinder-guides.html · Iluzry https://docs.google.com/document/d/15_OF0nNyOvMjjdcKkpWRHzWKHP4oZWPMcBWpKGT9e9s/edit · Tark https://docs.google.com/document/d/1h6-_4HvPvV-Tt7I67Gi_oPhgHmeDVA5SBl-WrJSgf5s/edit · Brewer https://feeneygames.github.io/PFGuideArchive/archive/ReachCleric.pdf · RPGBOT https://rpgbot.net/pathfinder/characters/classes/cleric/ (+ /domains/ y /channel_energy/) · Axe http://zenithgames.blogspot.com/2015/01/axes-guide-to-finding-divinity.html · Analysis Paralysis https://docs.google.com/document/d/1A677mTLubyEKu-0EZGfePWbnfTt3rvWt6ffGYoPaUPk/edit · Mythic Guide to Universal Path Abilities https://docs.google.com/document/d/1fD5YATlBMj5MuPOSDYlnLpnOQJZzn43bBE8LT6860B8/edit · CTP http://www.giantitp.com/forums/showthread.php?t=316045 · Rogue Eidolon (403) https://docs.google.com/document/edit?id=1bGYV4nTaUQ7DZ0K-bLJsigtWujhQl9gJsW5tVOtmuuE · Hilos de paizo.com: rzs2rc4y, rzs2m51x, rzs2og9g, rzs2ly1q, rzs2nl79, rzs2qi4n, rzs2rd23, rzs2ucsa, rzs2v9dc, rzs2rvar, rzs2qqs4, rzs2v8od, rzs43k7v, rzs2rb0r, rzs43b04, rzs2scdy, rzs2sloz, rzs2qe61, rzs2qcem, rzs2oag2, rzs2mguc, rzs2tiur, rzs2k1jo, rzs2u0pg, rzs43azm, rzs2m8ne, rzs2l5bw (patrón https://paizo.com/threads/<id>) · 🚫 rzs42y5j (2e) · Giant in the Playground (archivo, bloqueado) · d20pfsrd solo como pista (Varisian Pilgrim renombrado).

---

*Fin del dossier. Versión 2026-09-16. Toda afirmación de regla lleva su URL de aonprd.com y su libro; lo marcado ⚠️ es decisión de mesa o texto ambiguo; lo marcado 🚫 no existe en PF1e oficial y no debe usarse.*
