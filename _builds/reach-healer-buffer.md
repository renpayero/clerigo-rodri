# BUILD "LA MANO A TREINTA PIES" — Cleric 11 / Hierophant tier 3, sanador máximo + buffer de grupo desde segunda línea

**Sistema:** Pathfinder Roleplaying Game, 1.ª edición (Paizo). **Fuente de verdad:** Archives of Nethys PF1e (`https://www.aonprd.com/`). **Fecha:** 2026-09-16.
**Base:** `DOSSIER-Clerigo-PF1e.md` (investigación auditada) + verificación puntual en la caché local de páginas de aonprd.com (`investigacion/_raw`, `_tmp`, `_aon_cache`).
**Convenciones:** [AoN] = regla verificada en aonprd.com con URL y libro; ⚠️ = depende de una decisión del GM o de un texto ambiguo; 🚫 = no oficial / no usar. Nombres de reglas en inglés como figuran en AoN (traducción entre paréntesis la primera vez).

---

## 0. Resumen ejecutivo (para leer en dos minutos)

**Concepto.** Una clériga aasimar de Sarenrae que **nunca pisa la primera línea**: se planta 5-30 pies detrás del muro de los dos tanques, adyacente a uno o dos de ellos, y desde ahí **toca a todo el grupo a 30 pies** (Faith's Reach), **cura con la acción de movimiento** (Quick Channel + Selective Channeling) y **reserva la acción estándar para el buff que decide el combate** (Blessing of Fervor, Prayer, Communal…) o para el Heal / Breath of Life que evita una muerte. La acción rápida va siempre a **Aura of Heroism** (+2 moral a ataques, salvaciones y habilidades de los cinco). Las acciones inmediatas están reservadas a "curación negativa": **Divine Interference** (el crítico que iba a matar al DPS se repite con −4), **Reactive Healing** (8d6 a nosotros antes de caer) y **Mythic Blade Barrier** (11d8 como inmediata para cortar la sala).

**Por qué esta dirección.** Con 2 tanques + 2 DPS cuerpo a cuerpo apiñados en 30 pies, cada channel toca a 4-5 personas; con combates muy difíciles, el único sanador no puede permitirse estar amenazado ni gastar su estándar en "llegar"; y con 4 atacantes, un ataque extra por asalto para cada uno (Blessing of Fervor) rinde más que cualquier daño que la clériga pudiera hacer.

**Números de referencia a nivel 11 / tier 3 (ver sección 12):** Wis 27 (+8) · Cha 14 (+2) · Con 16 (+3) · **pg 120** (muere a −32) · **CA 24 / 26 con Magic Vestment ×2 / 28 con Shield of Faith** · Fort +14 / Ref +9 / **Will +19** · Iniciativa **+8** · Concentración +19 · Conjuros/día **4 / 7 / 7 / 7 / 6 / 4 / 3** (DC 18-24) · Channel **8d6 (28; ≈32 con rasgos) × 7 usos/día**, excluye 2 · Heal **110** (130 Inspired / **165 mítico** / 195 ambos) · Breath of Life 5d8+11 (mítico 5d12+11, 2 asaltos de ventana) · Poder mítico **9/día** · Surge 1d6 · Aura of Heroism **15 + 15 asaltos/día**.

---

## 1. Raza: Aasimar (ARG) — con rasgos raciales de serie

**[AoN] https://www.aonprd.com/RacesDisplay.aspx?ItemName=Aasimar — Advanced Race Guide pg. 84-85 (raza del Bestiary pg. 7).**

| Rasgo racial | Texto aplicado | Por qué nos sirve |
|---|---|---|
| **+2 Wis, +2 Cha** | Los dos atributos del sanador sin penalización a Con ni Dex. | Wis = DC, ranuras, usos de Rebuke Death, Will; Cha = usos y exclusiones del channel (Selective Channeling exige **Cha 13**). |
| Native Outsider | Tipo ajeno (nativo): inmune a *charm person* / *hold person* (solo humanoides). | Menos formas de sacar al único sanador del combate. |
| Darkvision 60 pies | — | La clériga no necesita luz para ver a quién curar. |
| Celestial Resistance | Resistencia 5 a ácido, frío y electricidad. | Contra alientos y áreas. |
| Skilled | +2 racial a Diplomacy y **Perception**. | Perception +21: somos la alarma del grupo (única inversión "de exploración" que hacemos). |
| Spell-Like Ability | *Daylight* 1/día (CL 11). | Contra *deeper darkness*. |
| Idiomas | Common, Celestial. | — |
| FCB Cleric (ARG pg. 85) | "+1/2 to damage when using positive energy against undead" | **No lo usamos**: clase predilecta a **+1 pg/nivel** (+11). |

**Rasgos alternativos considerados (misma página de AoN):**
- **Deathless Spirit** (reemplaza Celestial Resistance): resistencia 5 a energía negativa, +2 vs muerte/drenaje/energía negativa/nigromancia, no pierde pg por nivel negativo. **Tomarlo solo si el GM confirma campaña de no muertos** (y entonces considerar Sun en vez de Glory).
- **Exalted Resistance** (reemplaza Celestial Resistance): RC 5 + nivel = **16** contra conjuros [evil] y de ajenos malvados. Contra CL 11 la superan el 75 %: flojo.
- **Scion of Humanity** (reemplaza Celestial y altera el subtipo): cuenta como humano para prerrequisitos. No tomamos dotes solo-humano y perderíamos la inmunidad a *charm/hold person*: **no**.
- Herencias de *Blood of Angels* pg. 21-23 (Lawbringer +2 Con/+2 Wis, Plumekith +2 Dex/+2 Wis, etc.): ninguna da Wis **y** Cha. Lawbringer daría Con 16 base (+11 pg) a costa de Cha 12 (4 usos de channel, excluye 1): **no** para una build de channel.

**Alternativas de raza (1-2, con la compra ajustada):**
1. **Human** ([AoN] https://www.aonprd.com/RacesDisplay.aspx?ItemName=Human — CRB pg. 27): +2 Wis, **dote extra a nivel 1** (7.ª dote → Improved Initiative o Combat Casting) y Skilled (+11 rangos → Perception 11 + Knowledge (planes) 11, que abriría Healer's Hands). Compra: Str 10 / Dex 12 (2) / Con 14 (5) / Int 10 / Wis 17 (13) / Cha 14 (5) = 25 → Wis 19 / Cha 14 / **Dex 12** (−1 CA, −1 Ref, −1 iniciativa respecto al aasimar).
2. **Half-Elf** ([AoN] https://www.aonprd.com/RacesDisplay.aspx?ItemName=Half-Elf — CRB pg. 24; ARG pg. 42): +2 Wis, **FCB de clérigo +1/3 al channel (+3 a nivel 11 a cada objetivo)** — el mejor FCB de sanador —, Dual Minded (+2 Will), inmune a sueño. Pierde el +2 Cha (hay que comprar Cha 14: 5 puntos, como el humano).

---

## 2. Deidad y alineamiento: Sarenrae (NG), clériga NG

**[AoN] https://www.aonprd.com/DeityDisplay.aspx?ItemName=Sarenrae — Inner Sea Gods pg. 132 (también CRB pg. 43).** Dominios: Fire, Glory, Good, Healing, Sun. Subdominios: Agathion, Day, Heroism, Light, Redemption, Restoration, Resurrection, Revelation (+ Medicine y Thirst apócrifos). Arma predilecta: **scimitar** (marcial, 18-20/×2). Alineamiento NG → clérigos LG, NG, CG o N ([AoN] Cleric — CRB pg. 38: "within one step of her deity's").

**Por qué Sarenrae (y no otra):** es la **única deidad Core con Healing + Glory/Heroism** (el buff de grupo de **acción rápida**), tiene el rasgo de religión **Envoy of Healing** (repetir los 1 del channel), Sun como plan B anti-no muertos y Good/Agathion como plan B anti-dominadores. La obediencia (Deific Obedience, ISG pg. 210) da +2 sagrado a Perception y boons de sanación desde 12 DG.

**Alineamiento NG (no LG ni CG):** canaliza **energía positiva** y convierte espontáneamente a *cure* sin ninguna elección irreversible ([AoN] Cleric — CRB pg. 38); puede lanzar conjuros [lawful] **y** [chaotic] (Archon's Aura, Order's Wrath, Chaos Hammer); solo tiene vetado [evil] (nada de Infernal Healing 🚫).

**Alternativas (1-2):**
1. **Dalenydra** (NG, señora empírea — [AoN] https://www.aonprd.com/DeityDisplay.aspx?ItemName=Dalenydra — ISG pg. 322): Healing + **Repose** (Ward Against Death: aura de 30 pies, 11 asaltos/día, vivos inmunes a efectos de muerte y drenaje). La deidad "sanadora de campo" si la campaña es de vampiros/nigromantes. ⚠️ Señora empírea: permiso del GM. Pierde Envoy of Healing y Heroism.
2. **Milani** (CG — [AoN] https://www.aonprd.com/DeityDisplay.aspx?ItemName=Milani — Inner Sea Faiths pg. 71): Healing + **Liberation** (Freedom's Call: aura que suprime confused/grappled/frightened/panicked/paralyzed/pinned/shaken). Contra agarradores y paralizadores. Pierde Envoy of Healing, Heroism y los conjuros [lawful].

---

## 3. Dominios: Healing (base) + Glory con subdominio Heroism

### 3.1 Healing — [AoN] https://www.aonprd.com/DomainDisplay.aspx?ItemName=Healing — CRB pg. 44

- **Rebuke Death (Sp):** toque (30 pies con Faith's Reach), estándar, **1d4+5** (media 7,5) solo a criaturas bajo 0 pg, **3 + Wis = 11 usos/día** (con Mythic Domain se calcula como nivel 15: **1d4+7**). Recurso de "levantar del negativo" cuando se acabaron ranuras y channels; provoca (es Sp).
- **Healer's Blessing (Su), nivel 6:** "all of your cure spells are treated as if they were empowered (+50 %)"; no se acumula con Empower Spell; **solo conjuros con "cure" en el nombre** (no Heal, no Breath of Life, no channel). Es la razón por la que **jamás** tomamos Empower/Maximize como dotes y por la que cualquier ranura normal convertida en *cure* vale ×1,5.
- **Conjuros de dominio:** 1 CLW · 2 CMW · 3 CSW · 4 CCW · **5 Breath of Life** · **6 Heal** · 7 Regenerate · 8 Mass CCW · 9 Mass Heal. Las ranuras de dominio de 5.º y 6.º son **un Breath of Life y un Heal diarios gratis** (las ranuras de dominio no se convierten espontáneamente — CRB pg. 38).

### 3.2 Glory → subdominio Heroism — [AoN] https://www.aonprd.com/DomainDisplay.aspx?ItemName=Glory — CRB pg. 44 (Glory) / Advanced Player's Guide (subdominio Heroism; AoN lista a Sarenrae entre las deidades asociadas)

- **Pasivo de Glory:** +2 a la DC del channel positivo contra no muertos (DC 17 → 19).
- **Touch of Glory (Sp):** toque, estándar, +nivel (**+11**; +15 con Mythic Domain) a UNA prueba de Cha de una criatura, 1 hora o hasta usarla, 3 + Wis = **11/día**. Se la damos al apoyo social antes de la negociación; en combate no se usa.
- **Aura of Heroism (Su)** (reemplaza Divine Presence): **"At 8th level, you can emit a 30-foot aura of heroism for a number of rounds per day equal to your cleric level. Using this ability is a swift action. Allies in the area are treated as if they were under the effects of heroism. These rounds do not need to be consecutive."** → **11 asaltos/día** (15 con Mythic Domain, y otros 15 con la recarga: ver sección 8), **acción rápida**, aliados con **+2 moral a ataques, salvaciones y habilidades**. Se enciende y apaga por asaltos: en un combate de 6 asaltos gastamos 6.
- **Conjuros de dominio (Glory con Heroism):** 1 Shield of Faith · 2 Bless Weapon · **3 Heroism** (no está en la lista de clérigo: +2 moral 110 min a UN aliado) · 4 Holy Smite · 5 Righteous Might · **6 Greater Heroism** (+4 moral, inmune a miedo, 11 pg temporales, 11 min) · 7 Holy Sword.
- **Regla de subdominios** ([AoN] https://www.aonprd.com/ClericDomains.aspx — Ultimate Magic pg. 30): la deidad debe conceder dominio Y subdominio (Sarenrae concede ambos ✓); no se puede tomar Glory y Heroism como los dos dominios (no lo hacemos ✓); DC de salvación de un poder de subdominio = 10 + 1/2 nivel + Wis = **23** (irrelevante para Heroism).

**Interacción de bonos (para no prometer lo que no se acumula):** el +2 **moral** de Heroism no se acumula con Bless (+1 moral) ni con Heroes' Feast (+1 moral al ataque), pero sí con **Prayer (suerte)**, **Blessing of Fervor (esquiva / sin tipo)**, Divine Favor (suerte) y Haste ([AoN] https://www.aonprd.com/Rules.aspx?ID=211 — CRB pg. 208). Por eso el paquete de buffs es Heroism + Fervor + Prayer y **no** Bless.

**Alternativas de segundo dominio (1-2):**
1. **Good → Agathion** (Sarenrae; [AoN] https://www.aonprd.com/DomainDisplay.aspx?ItemName=Good — APG pg. 88): Protective Aura a 8.º (estándar, 30 pies, aliados +2 desvío, +2 resistencia y *protection from evil* de área, 11 asaltos/día). Solo si la campaña es de dominadores/invocadores malvados: los +2 no se acumulan con Ring of Protection / Cloak of Resistance y cuesta la **estándar** para activarse.
2. **Sun** (Sarenrae; [AoN] https://www.aonprd.com/DomainDisplay.aspx?ItemName=Sun — CRB pg. 47): channel +11 de daño a no muertos ignorando channel resistance, Nimbus of Light 11 asaltos/día. Solo con campaña de no muertos (junto con Deathless Spirit).

---

## 4. Arquetipo: NINGUNO (clériga base) — justificación

[AoN] https://www.aonprd.com/Archetypes.aspx?Class=Cleric (35 arquetipos oficiales). Para esta dirección de build, cada arquetipo relevante **quita algo que la build necesita**:

| Arquetipo | Qué nos daría | Qué nos quita (fatal para esta dirección) |
|---|---|---|
| **Merciful Healer** (UC pg. 41 — https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Cleric%20Merciful%20Healer) | Combat Medic (no provoca al lanzar curas), Merciful Healing (limpia 2 condiciones por channel). **No** regala Selective Channeling (mito). | **El segundo dominio** → sin Aura of Heroism (el buff de acción rápida que define la build). Como no estamos amenazados (30 pies), Combat Medic vale menos aquí. Es la **alternativa 1** si el GM castiga con condiciones y hay pocos no muertos. |
| **Angelfire Apostle** (Healer's Handbook pg. 7) | 7 channels gratis, Breath of Life por 2 channels, Cleansing Flames. | **Diminished Spellcasting (−1 ranura por nivel: −5 buffs/día)** y solo armadura ligera (−2 CA). Un buffer sin ranuras no es buffer. |
| Ecclesitheurge / Evangelist / Herald Caller / Cloistered | utilidad, Inspire Courage, invocación | sin armadura media y/o sin escudo, sin cure espontáneos (Evangelist), −1d6/−2d6 de channel. Incompatibles con "supervivencia propia". |
| Theologian / Divine Paragon | poderes de dominio +2 / boons | un solo dominio con poderes → sin Aura of Heroism. |

**Variant Channeling** ([AoN] https://www.aonprd.com/ClericVariantChanneling.aspx — UM pg. 28): reduce la curación del channel a la mitad: 🚫 para una build de channel.

---

## 5. Atributos: compra por puntos 25 (con el desglose)

Reglas: [AoN] https://aonprd.com/Rules.aspx?ID=90 — CRB pg. 15-16 (costos: 7 −4 · 8 −2 · 9 −1 · 10 0 · 11 1 · 12 2 · 13 3 · 14 5 · 15 7 · 16 10 · 17 13 · 18 17; rango 7-18 antes de raciales); +1 a niveles 4 y 8 ([AoN] https://www.aonprd.com/Rules.aspx?ID=85 — CRB pg. 30); +2 a tier 2 ([AoN] https://www.aonprd.com/Rules.aspx?ID=1618 — Mythic Adventures pg. 12); bonos de objeto tras 24 h ([AoN] https://aonprd.com/Rules.aspx?ID=415 — CRB pg. 554).

| Atributo | Comprado (costo) | + aasimar | Nivel 4 | Nivel 8 | Tier 2 | Objeto | **Final nivel 11 (mod.)** |
|---|---|---|---|---|---|---|---|
| Str | 10 (**0**) | 10 | | | | | **10 (+0)** |
| Dex | 14 (**5**) | 14 | | | | | **14 (+2)** |
| Con | 14 (**5**) | 14 | | | | Belt of Mighty Constitution +2 | **16 (+3)** |
| Int | 10 (**0**) | 10 | | | | | **10 (+0)** |
| Wis | 17 (**13**) | **19** | 20 | 21 | **23** | Headband of Inspired Wisdom +4 | **27 (+8)** |
| Cha | 12 (**2**) | **14** | | | | | **14 (+2)** |
| **Suma** | 0 + 5 + 5 + 0 + 13 + 2 = **25** ✓ | | | | | | |

**Cuentas que dependen de esto:** Wis 27 → conjuros extra 2/2/2/2/1/1 (1.º-6.º) ([AoN] https://www.aonprd.com/Rules.aspx?Name=Ability%20Scores&Category=Getting%20Started — CRB pg. 17, Table 1-3), DC 10 + nivel + 8, Rebuke Death y Touch of Glory 11/día, Will +8. Cha 14 → channel 3 + 2 = 5 usos (7 con Extra Channel), Selective excluye 2, DC 17. Con 16 → +33 pg, Fort +3. Dex 14 → CA +2 (tope de Dex +5 de la mithral breastplate ✓), Ref +2, iniciativa +2. Str 10 → carga ligera 33 lb (equipo ≈ 31 lb ✓).

**Por qué Wis 17 y no 18:** con 17 llegamos a 27 (+8) ahora y a 28 (+9) a nivel 12; con 18 llegaríamos a 28 (+9) ahora y 29 (+9) a nivel 12: **convergen a nivel 12** y los 4 puntos extra cuestan Dex 14 → 12 (−1 CA, −1 Ref, −1 iniciativa) o Con 14 → 12 (−11 pg). Supervivencia propia manda.

**Alternativas (1-2):**
1. **Cha 16 para excluir 3 y tener 8 channels/día:** Str 10 / **Dex 12** (2) / Con 14 (5) / Int 10 / Wis 17 (13) / **Cha 14** (5) = 25 → Cha 16 (+3): 6 + 2 = **8 usos**, Selective excluye **3**, DC 18. Cuesta −1 CA / −1 Ref / −1 iniciativa. Recomendable **solo** si el GM confirma combates con 3+ enemigos mezclados entre los cuerpo a cuerpo dentro de los 30 pies del channel. (A tier 5, Mythic Selective Channeling da la 3.ª exclusión por 1 uso de poder mítico sin tocar la Dex.)
2. **Wis 18 ya (Wis 28 / +9 a nivel 11):** Str 11 (1) / Dex 10 (0) / Con 14 (5) / Int 10 / Wis 18 (17) / Cha 12 (2) = 25 → ranuras 4/8/7/7/6/5/3 y +1 DC hoy a cambio de Dex 10 (−2 CA / Ref / iniciativa). Solo si el jugador prioriza DCs (control) por encima de la CA.

**Puntos de golpe (nivel 11):** 8 (máximo a nivel 1 — [AoN] https://www.aonprd.com/Rules.aspx?Name=Common%20Terms&Category=Getting%20Started — CRB pg. 11) + 10 × 4,5 = 53 → + 11 × 3 (Con 16) = 86 → + 11 (clase predilecta a pg — [AoN] https://aonprd.com/Rules.aspx?ID=344 — CRB pg. 31) = 97 → + 11 (Toughness) = 108 → + 12 (Hierophant, +4/tier — [AoN] https://www.aonprd.com/MythicPaths.aspx?Path=Hierophant — MA pg. 32) = **120**. ⚠️ Con "promedio 5 por d8" (convención PFS, no está en AoN): 125. **Hard to Kill:** muerte a −2 × Con = **−32**.

---

## 6. Dotes por nivel (6) — prerrequisitos verificados

Regla: 6 dotes a niveles 1, 3, 5, 7, 9, 11 ([AoN] https://aonprd.com/Rules.aspx?ID=85 — CRB pg. 30, Table 3-1); el aasimar **no** tiene dote extra; Hero Points (no Antihero) tampoco ([AoN] https://www.aonprd.com/Rules.aspx?ID=449 — APG pg. 324). 🚫 Sacred Geometry baneada por el GM.

| Nivel | Dote | Fuente / URL | Prerrequisitos (verificados) | Qué hace en ESTA build |
|---|---|---|---|---|
| **1** | **Selective Channeling** | CRB pg. 132 — [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Selective%20Channeling | **Cha 13** ✓ (14), channel energy ✓ | "you can choose a number of targets in the area up to your Charisma modifier. These targets are not affected" → excluye **2**. FAQ jul-2011 (https://paizo.com/paizo/faq/v5748nruor1fm): hay que **ver o tocar** al excluido. Sin ella, cada channel entre los 4 cuerpo a cuerpo cura también a sus enemigos. |
| **3** | **Extra Channel** | CRB pg. 123 — [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Extra%20Channel | channel energy ✓ | +2 usos/día → **7**. Una sola vez (sin cláusula de repetición; FAQ 2011 "exactly two extra uses per day"). |
| **5** | **Quick Channel** | UM pg. 154 — [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Quick%20Channel | **Knowledge (religion) 5 rangos** ✓ (5 rangos a nivel 5), channel energy ✓ | "You may channel energy as a move action by spending 2 daily uses of that ability." **Acción de MOVIMIENTO, no rápida.** Es el corazón de la build: estándar (buff/Heal) + movimiento (channel a todos). |
| **7** | **Reactive Healing** | ACG pg. 155 — [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Reactive%20Healing | **Quick Channel** ✓ (o Quicken Spell), channel energy ✓ | Acción **inmediata** + 1 uso de channel para curarnos (solo a nosotros) cuando un ataque nos dejaría a 0 o menos: 8d6 (28) antes de aplicar el daño. El seguro de vida del único sanador. |
| **9** | **Toughness** | CRB pg. 135 — [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Toughness | — | +3 y +1 por DG sobre el 3.º = **+11 pg**. A tier 5, Mythic Toughness lo duplica (+22) y da RD 10/epic bajo 0 pg. |
| **11** | **Divine Interference** | UM pg. 149 — [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Divine%20Interference | lanzador divino ✓, **CL 10** ✓ (11) | Acción inmediata cuando un enemigo a 30 pies **acierta** a un aliado: sacrificamos un conjuro preparado de nivel N y el enemigo **repite el ataque con −N** (1 vez por criatura y día). Sacrificar un 4.º = −4 (un 3.º = −3). A tier 5-7, Mythic Divine Interference: −2N / −3N. |

**¿Y la dote Reach Spell?** ([AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Reach%20Spell — APG pg. 168: "You can alter a spell with a range of touch, close, or medium to increase its range to a higher range category… uses up a spell slot one level higher… for each increase in range category. Spells modified by this feat that require melee touch attacks instead require ranged touch attacks.") El "reach" de esta build lo entrega **Faith's Reach** (sección 8): **todos** los conjuros divinos de toque a 30 pies, **sin subir la ranura y sin costo** (Heal a 30 pies seguiría siendo de 6.º; con Reach Spell sería de 7.º: imposible). Lo único que Reach Spell añadiría es toque → *close* (50 pies) por +1 nivel (CCW en 5.º, Breath of Life en 6.º) o *close* → *medium* (Blessing of Fervor a 210 pies), que no necesitamos con el grupo apiñado. **Veredicto: no se toma.** Seguro barato si el GM suspende lo mítico en alguna zona: **Rod of Metamagic, Reach (lesser)** (3.000 po, ≤ 3.º — primera compra de la lista de lujo). Divine Metamastery (tier 3) + Reach Spell daría 50 pies gratis 10 asaltos por 1 uso: dos recursos por +20 pies sobre Faith's Reach: descartado.

**Alternativa en la plaza de nivel 9 (si el jugador prefiere actuar primero a tener +11 pg):** **Improved Initiative** (CRB pg. 127 — [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Improved%20Initiative): iniciativa +8 → **+12**, para que Blessing of Fervor caiga antes del primer ataque completo de los cuerpo a cuerpo. Con "supervivencia propia" como prioridad confirmada, Toughness va primero.

**Descartadas con motivo:** Empower/Maximize (Healer's Blessing ya empodera y no se acumula), Quicken Spell (a nivel 11 solo acelera 1.º-2.º), Combat Casting (a 30 pies casi nunca estamos amenazados; Focused Mind/Surge cubren el resto), Channeled Revival (Relentless Healing lo hace por 1 uso y acción gratuita), Healer's Hands (Campaign Setting + 11 rangos en Knowledge (planes) que no tenemos), Fey Foundling (solo a nivel 1, solo nos cura a nosotros), dotes de Hero Point (sección 10), Sacred Summons (invocador: fuera de esta dirección), Trap Finder y cualquier cosa de trampas.

---

## 7. Rasgos (3) + drawback (1)

Reglas: 2 rasgos de listas distintas ([AoN] https://www.aonprd.com/Rules.aspx?ID=450 — APG pg. 326) + 1 por el drawback ([AoN] https://www.aonprd.com/Rules.aspx?ID=1222 — Ultimate Campaign pg. 8; https://legacy.aonprd.com/ultimateCampaign/characterBackground/traits.html — UCam pg. 64). Los bonos "de rasgo" no se acumulan entre sí.

| Lista | Rasgo | Fuente / URL | Texto (AoN) | Efecto aquí |
|---|---|---|---|---|
| **Combat** | **Reactionary** | UCam pg. 53 / APG pg. 328 — [AoN] https://www.aonprd.com/TraitDisplay.aspx?ItemName=Reactionary | +2 rasgo a iniciativa | Iniciativa +2 (Dex) +2 +3 (Amazing Initiative) +1 (Dusty Rose cracked) = **+8**. Buffear antes de que peguen. |
| **Religion (Sarenrae)** | **Envoy of Healing** | Healer's Handbook pg. 12 — [AoN] https://www.aonprd.com/TraitDisplay.aspx?ItemName=Envoy%20of%20Healing | "Whenever you use channel energy, fervor, or lay on hands to heal a living creature, you can reroll any healing die roll that results in a natural 1 (you must use the new result)." | Cada d6 pasa de 3,5 a ≈3,92: 6d6 21 → **≈23,5**; 8d6 28 → **≈31,3** a cada aliado, en cada channel. ⚠️ Player Companion. |
| **Faith** | **Blessed Touch** | Champions of Purity pg. 7 — [AoN] https://www.aonprd.com/TraitDisplay.aspx?ItemName=Blessed%20Touch | "You heal 1 additional point of damage when using lay on hands, channeling energy, or casting a cure spell." | +1 a cada objetivo de cada channel y a cada *cure*: con 5 aliados y dos channels por asalto, +10 pg/asalto. No es un "trait bonus" numérico del mismo tipo que Envoy (uno repite dados, el otro suma): se acumulan. ⚠️ Player Companion. |
| Drawback | **Scarred** | Antihero's Handbook pg. 6 — [AoN] https://www.aonprd.com/TraitDisplay.aspx?ItemName=Scarred | "−5 penalty on Disguise checks and a −2 penalty on Bluff checks" | Costo ≈ 0 para una sanadora (cicatrices de una guerra santa). ⚠️ Player Companion. |

**Sustitutos de hardcover (si el GM veta los Player Companion):** Faith → **Birthmark** (UCam pg. 54 / APG pg. 328 — [AoN] https://www.aonprd.com/TraitDisplay.aspx?ItemName=Birthmark: foco divino incorporado y **+2 vs charm/compulsion**; la sanadora dominada es la pesadilla del grupo) o **Focused Mind** (Magic; UCam pg. 57 — [AoN] https://www.aonprd.com/TraitDisplay.aspx?ItemName=Focused%20Mind: +2 concentración → Heal a la defensiva 65 % → 75 %); Religion → no hay sustituto de Sarenrae en hardcover: usar Magic + Faith (Focused Mind + Birthmark) con Reactionary. Drawback → **Provincial** (UCam pg. 65: −2 Diplomacy y Sense Motive contra otra religión/alineamiento) como opción "honesta" de costo real.

**Nunca:** Helpless (dazed cuando cae un aliado), Superstitious, Loner (−1 CA adyacente a aliados: justo donde nos ponemos), los que tocan Will, concentración o iniciativa. **Ningún rasgo es de campaña** (no hace falta permiso por ese lado).

---

## 8. Mítico: Hierophant tier 3 (exacto)

Fuentes: [AoN] https://www.aonprd.com/Rules.aspx?ID=1618 (Base Mythic Abilities, Table 1-1 — MA pg. 12); https://www.aonprd.com/MythicPaths.aspx?Path=Hierophant (MA pg. 32); https://www.aonprd.com/PathAbilities.aspx?Path=Hierophant (MA pg. 32-37); https://www.aonprd.com/PathAbilities.aspx?Path=Universal (MA pg. 50-51); https://www.aonprd.com/Feats.aspx?Category=Mythic ; https://www.aonprd.com/Spells.aspx?Class=Mythic. (La URL `MythicPathDisplay.aspx?ItemName=Hierophant` devuelve 404.)

### 8.1 Lo que da tier 3 de base
- **Hard to Kill (Ex)** (t1): estable automáticamente bajo 0; muerte a **−2 × Con = −32**.
- **Mythic Power (Su)**: **9 usos/día** (3 + 2 × tier).
- **Surge (Su)**: acción inmediata, 1 uso, **+1d6** a un d20 propio tras ver el resultado (salvación, concentración, prueba de CL). 1d8 a tier 4.
- **Divine Surge (senda, t1) → INSPIRED SPELL (Su)** (texto vigente = FAQ 2013, https://www.aonprd.com/FAQs.aspx): acción estándar + 1 uso → **cualquier conjuro divino de nuestra lista o de dominio, de nivel ≤ 6.º y tiempo ≤ 1 estándar, sin haberlo preparado ni gastar ranura, con CL +2 (13)**. Heal 130, Mythic Heal 195 (2 usos), Death Ward / Freedom of Movement / Remove X / Dispel sin prepararlos. (Recalled Blessing es la alternativa excluyente: descartada para un único sanador que necesita versatilidad.)
- **Amazing Initiative (Ex)** (t2): **+3 iniciativa**; acción gratuita + 1 uso → **una acción estándar extra** que "can't be used to cast a spell" → **un channel más** (Su). 1/asalto.
- **Recuperation (Ex)** (t3): 1 uso + 1 hora → mitad de los pg y **recupera "class features limited to a certain number of uses per day (such as … spells per day)"** → volver a preparar conjuros y recuperar los 7 channels a mitad del día. No recarga poder mítico. ⚠️ Cruce con la preparación divina (Recent Casting Limit): pactar con el GM.
- **+2 a una característica (t2): Wis** (21 → 23).
- **+4 pg por tier** (+12).

### 8.2 Habilidades de senda (3 de tier + 1 por Extra Path Ability)

| Tier | Path ability | Texto aplicado ([AoN] PathAbilities Hierophant) | Función en la build |
|---|---|---|---|
| **1** | **Faith's Reach (Su)** (MA pg. 34) | "Whenever you cast a divine spell with a range of touch, you can instead cast the spell with a range of 30 feet. If the spell normally requires a melee touch attack, it instead requires a ranged touch attack." | **La dote Reach Spell gratis y sin ranura, siempre.** Heal, Breath of Life, cures, Death Ward, Freedom of Movement, Restoration, Remove Blindness/Curse/Disease, Magic Vestment, Shield of Faith, Protection from Evil (y Communal), Communal Resist Energy, Status, Delay Poison, Heroism, Weapon of Awe, Bull's Strength… todo a 30 pies desde la segunda línea. ⚠️ Sobre un aliado dispuesto el toque es automático (CRB pg. 185: "You can automatically touch one friend"): la lectura mayoritaria es que no hay tirada; la estricta pide ataque de toque a distancia (+10). Pactar. |
| **2** | **Relentless Healing (Su)** (MA pg. 35) | "If a creature has died within 1 round, as a free action you can expend one use of mythic power to apply healing magic to that creature… If this healing brings the creature's hit points above the threshold for death, it comes back to life and stabilizes at its new hit point total." | **Cualquier cura se vuelve Breath of Life** por 1 uso y **acción gratuita**: Heal (110) sobre un tanque muerto a −45 → +65 pg y vivo, en cualquier lectura del umbral. También channel (8d6) + 1 uso sobre un muerto de este asalto. ⚠️ No menciona efectos de muerte ni nivel negativo: preguntar. |
| **3** | **Abundant Healing (Su)** (MA pg. 35) | "When you use a spell or class ability to heal a creature's hit point damage, you can apply excess healing (over the target's full hit points) to one ally adjacent to you. You can continue to apply excess healing to other adjacent allies…" | Heal 110 sobre un tanque al que le faltaban 40 → **70 al aliado adyacente a nosotros** → el resto al siguiente. Vale también para el channel ("class ability"). **Condiciona la posición:** segunda línea = la casilla inmediatamente detrás del tanque, adyacente a 1-2 aliados (ver sección 13.1). |
| **Extra Path Ability** (dote mítica t3) | **Mythic Domain (Su)** (MA pg. 34) | "When determining the effects of your domain's granted powers, you're considered 4 levels higher… Once per day, you can expend one use of mythic power as a standard action to regain the use of all your domain granted powers as if you had rested for 8 hours." | **Aura of Heroism 15 asaltos/día + 15 más con la recarga** (30 asaltos de +2 moral al grupo por día); Rebuke Death 1d4+7 y +11 usos con la recarga; Touch of Glory +15. ⚠️ "your domain's granted powers" (singular): la lectura mayoritaria es que se refiere al rasgo de clase *domains* (los dos); si el GM lo limita a uno, se declara **Glory/Heroism** (la aura es lo que importa). Si el GM no acepta esa lectura, la dote mítica de tier 3 pasa a **Mythic Selective Channeling** (ver 8.3). |

**Por qué no otras:** Overflowing Grace (t1: +1 sagrado 1 min a quien quede a pg máximos tras nuestra cura — muy buena para un buffer, es la **primera candidata de tier 4**); Enduring Blessing (t3: Freedom of Movement 24 h a un objetivo — candidata de tier 4/5); Divine Metamastery (t3: exige tener dotes de metamagia — no tenemos); Hand of Mercy (t3: Heal ya quita casi todo); Life Current (t3: 6d6 21 → 22: marginal); Divine Guardian (a tier 3 solo SM I/III); Eldritch Breach (t1: dos tiradas en pruebas de CL — candidata si la campaña castiga con maldiciones/enfermedades); Divine Source (Universal t3: SLA de 1.º-3.º: menor que Abundant Healing).

### 8.3 Dotes míticas (2: tier 1 y tier 3)

Regla (MA pg. 54; [AoN] https://www.aonprd.com/Rules.aspx?ID=1618): una dote mítica (o normal) a tiers 1, 3, 5, 7, 9; hay que cumplir prerrequisitos.

| Tier | Dote mítica | Fuente / URL | Prerreq. | Efecto |
|---|---|---|---|---|
| **1** | **Mythic Spell Lore** | MA pg. 70 — [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Mythic%20Spell%20Lore | lanzar conjuros ✓ | "You can learn a number of mythic spells equal to your tier… Every time you gain a new tier, you can select an additional mythic spell." → **3 conjuros míticos** (sección 8.4), +1 por tier. |
| **3** | **Extra Path Ability** | MA pg. 65 — [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Extra%20Path%20Ability | **3rd mythic tier** ✓ | "Choose one mythic ability from your path or from the universal path abilities" → **Mythic Domain** (8.2). |

**Alternativa a Extra Path Ability (si el GM restringe Mythic Domain):** **Mythic Selective Channeling** (MA pg. 72 — [AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Selective%20Channeling, sección "Mythic"): "the damage you heal or deal increases by a number of points equal to twice the number of targets you excluded… You can expend one use of mythic power to increase the number of targets you exclude… by half your tier." → excluyendo 2: **+4 a cada aliado por channel** (≈36 por channel con Phylactery y rasgos); por 1 uso, excluir **3**.

**No se toma Dual Path a tier 3** (MA pg. 63): costaría la dote de tier 1 (sin Mythic Spell Lore hasta tier 3) para una habilidad de tier 1 de Marshal/Guardian; a **tier 5** sí es la primera candidata (Marshal → Rally: rápida + 1 uso, todos los aliados a 30 pies repiten una d20).

### 8.4 Conjuros míticos (Mythic Spell Lore, 3 a tier 3)

Regla ([AoN] https://www.aonprd.com/Rules.aspx?ID=1608, Mythic Spells — MA pg. 78): no se preparan aparte; al lanzar la versión normal (preparada o convertida espontáneamente) se gasta **1 uso** y sube a la mítica; misma ranura, mismo tiempo; "Augmented" cuesta el total indicado.

| # | Conjuro | Versión mítica ([AoN] SpellDisplay, sección "Mythic") | Números a CL 11 |
|---|---|---|---|
| 1 | **Heal** | MA pg. 97: "The damage cured increases to 15 points of damage per caster level (maximum 225 points). Augmented: If you expend two uses of mythic power, the spell also acts as restoration." | **165** (195 con Inspired Spell, 2 usos); augmented (2 usos) = Heal + Restoration en 1 acción estándar (⚠️ el texto no exige el polvo de diamante: GM). |
| 2 | **Blessing of Fervor** | MA pg. 86: "Affected creatures can choose two of the spell's bonuses each round rather than one." | Los 4 cuerpo a cuerpo eligen **ataque extra Y +2 ataque / +2 esquiva a CA y Reflejos** cada asalto, 11 asaltos, 11 objetivos, a 50 pies. **La firma del buffer.** |
| 3 | **Breath of Life** | MA pg. 87: "heals 5d12 + 1/CL (max +25). It can revive a creature that died of hp damage within the past 2 rounds. If the target was slain by a death effect that allows a saving throw, this spell allows the creature to attempt another save… revived with –10 hp plus the amount healed." | 5d12+11 = **43,5 (máx. 71)**, ventana de **2 asaltos**, y la **única respuesta de nivel 11 a Slay Living / Finger of Death** (repite la salvación). |

**Siguientes (tier 4, 5):** Cure Critical Wounds (8d8+22 → **87** con Healer's Blessing: el cuarto "Heal" en ranura de 4.º), Prayer (MA pg. 104: **±2** y cura 2 × tier = 6 a cada aliado al lanzar), Blade Barrier (MA pg. 85: **acción inmediata**, 11d8; augmented a tier 3 por 2 usos: moverla 10 pies como movimiento). Nota: **Mythic Blade Barrier ya se puede usar como inmediata solo si es uno de nuestros conjuros míticos**; en esta build entra a tier 4 (o ahora en lugar de Breath of Life si el jugador prefiere el control al seguro anti-death-effect — ver 13.4 y 15).

### 8.5 Qué agregar a tier 4 y 5 (la campaña sigue)

- **Tier 4** (2 trials): Surge **1d8**; **+2 característica → Wis** (nivel 12 da +1 → 28; tier 4 → **30, +10**); poder mítico 11/día; **4.ª path ability: Overflowing Grace** (t1) — channel al inicio del combate con todos a tope = +1 sagrado a ataques/salvaciones/habilidades de los cinco durante 10 asaltos, acumulable con moral (Heroism) y suerte (Prayer) — o Enduring Blessing (FoM 24 h al DPS más agarrado); **4.º conjuro mítico: Cure Critical Wounds** (o Prayer).
- **Tier 5** (3 trials): **Mythic Saving Throws** (salvación superada = sin efecto contra no míticos); poder mítico 13; **3.ª dote mítica: Mythic Toughness** (+22 pg, RD 10/epic bajo 0) o **Dual Path (Marshal)** (Rally) o Mythic Selective Channeling; **5.ª path ability: Enduring Blessing / Eldritch Breach / Enhanced Ability (+2 Wis)**; 5.º conjuro mítico: Blade Barrier o Prayer.

### 8.6 Presupuesto de los 9 poderes míticos en un día de dos combates grandes

| Uso | Coste | Cuándo |
|---|---|---|
| Mythic Blessing of Fervor ×2 | 2 | asalto 1 de cada combate grande (11 asaltos cada uno) |
| Mythic Heal ×2 | 2 | el tanque baja de 40 pg |
| Inspired Spell ×1 | 1 | Death Ward / Freedom of Movement / tercer Heal no preparados |
| Amazing Initiative ×1 | 1 | el asalto de crisis (Heal + dos channels) |
| Relentless Healing ×1 | 1 | un aliado muere este asalto |
| Recuperation ×1 | 1 | tras el primer combate: 1 h → conjuros y channels de nuevo |
| Surge ×1 | 1 | salvación letal propia o concentración |
| **Total** | **9** | Boons del GM (+1 por encuentro, MA pg. 132; "Master Healer" = curar a un moribundo a pg máximos con una sola cura) alargan el día. Mythic Domain (recarga de la aura) compite por el último uso. |

---

## 9. Conjuros preparados de un día típico (mazmorra / combate esperado)

Ranuras (base + dominio + Wis 27): **0: 4 · 1.º: 4+1+2 = 7 · 2.º: 4+1+2 = 7 · 3.º: 4+1+2 = 7 · 4.º: 3+1+2 = 6 · 5.º: 2+1+1 = 4 · 6.º: 1+1+1 = 3** ([AoN] Cleric — CRB pg. 38, Table 3-5; extras CRB pg. 17). **[D]** = ranura de dominio (no convertible). **[libre]** = se deja sin preparar; se rellena en 15 min si hace falta ([AoN] https://www.aonprd.com/Rules.aspx?Name=Preparing+Divine+Spells&Category=Divine+Spells — CRB pg. 220) o se convierte al lanzar. DC = 10 + nivel + 8. CL 11; *close* = 50 pies; *medium* = 210 pies. **Regla de oro: nunca se prepara un cure fuera de la ranura de dominio** (todo lo no usado se convierte en CLW / CMW / CSW / CCW / Mass CLW (5.º) / Mass CMW (6.º), ×1,5 por Healer's Blessing).

| Nivel | Preparados (fuente AoN) | Notas de uso |
|---|---|---|
| **0 (4)** | Detect Magic · Guidance · Light · **Stabilize** (CRB pg. 348: *close* 50 pies, estabiliza a −1 o menos sin tirada) | No se gastan. Stabilize es el "frenar la muerte" a distancia sin ranura. |
| **1.º (7)** | **[D] Shield of Faith** (CRB pg. 342: +3 desvío 11 min; mítico +4) · Protection from Evil ×2 (CRB pg. 327: +2/+2 vs malvados, nueva salvación e inmunidad a nuevos intentos de control 11 min) · Liberating Command (UC pg. 230: **inmediata**, el aliado hace Escape Artist con +22) · Remove Fear (CRB pg. 332: 3 criaturas, +4 moral vs miedo y suprime un miedo activo) · **2 [libres]** | Bless **no**: su +1 moral lo pisa Aura of Heroism. Divine Favor no: no pegamos. Las libres → CLW espontáneo (1d8+5 ×1,5 = 14) o Comprehend Languages / Deathwatch si el día lo pide. |
| **2.º (7)** | **[D] Cure Moderate Wounds** (comodín: 2d8+10 ×1,5 = 28,5 a 30 pies) · **Protection from Evil, Communal** (UC pg. 240: toque, 11 min repartidos de a 1 min: 3/2/2/2/2) · Status (CRB pg. 349: 3 aliados, 11 h) · Remove Paralysis (CRB pg. 332: *close*, hasta 4) · Silence (CRB pg. 343: 840 pies, radio 20, 11 asaltos; sobre un punto sin salvación) · Lesser Restoration (CRB pg. 334: 3 asaltos, fuera de combate) · Weapon of Awe (APG: +2 sagrado al daño y shaken al crítico, al DPS) — en día de jefe, **Heroic Fortune** (APG pg. 324: 100 po de polvo, 1 Hero Point temporal) en su lugar | Silence sobre el lanzador enemigo es el "control ligero" más barato. |
| **3.º (7)** | **[D] Heroism** (CRB; solo vía subdominio: +2 moral a ataques/salvaciones/habilidades **110 min** al DPS que más se aleja de la aura) · **Magic Vestment ×2** (CRB pg. 310: +2 mejora a armadura y a escudo, 11 h → 22 h con la Rod of Extend) · **Prayer** (CRB pg. 324: 40 pies alrededor nuestro, 11 asaltos, sin salvación: aliados +1 suerte a ataque/daño/salvaciones/habilidades, enemigos −1; mítico a tier 4: ±2 y cura 6) · **Resist Energy, Communal** (UC pg. 242: resistencia **30** a un tipo, 110 min en bloques de 10 min: 5 × 20 min) · Dispel Magic (CRB pg. 272: 1d20+11) · Remove Blindness/Deafness (o Remove Curse / Remove Disease según el sitio) | Magic Vestment se lanza al amanecer; el resto en combate/pre-combate. |
| **4.º (6)** | **[D] Cure Critical Wounds** (comodín: 4d8+11 ×1,5 = 43,5) — o Holy Smite si hay grupos de malvados · **Blessing of Fervor ×2** (APG pg. 205: *close*, 11 criaturas a ≤ 30 pies entre sí, 11 asaltos, Fort niega (inofensivo): cada asalto cada aliado elige +30 pies / levantarse como rápida / **un ataque extra en ataque completo** / +2 ataque y +2 esquiva a CA y Reflejos / lanzar ≤ 2.º modificado; **no se acumula con haste**; mítico: dos opciones) · **Freedom of Movement** (CRB pg. 287: 110 min, los agarres contra el objetivo fallan automáticamente) · **Death Ward** (CRB pg. 264: 11 min, +4 moral vs muerte, inmune a drenaje y energía negativa) · Restoration (CRB pg. 334: 3 asaltos, 100 po / 1.000 po) — o Spiritual Ally (APG pg. 246) los días de "nada que curar" | Dos Blessing of Fervor = dos combates grandes buffeados. FoM y Death Ward preparados fijos (Inspired Spell los cubre si no). |
| **5.º (4)** | **[D] Breath of Life** (CRB pg. 251: 5d8+11, muerto ≤ 1 asalto, a 30 pies; mítico 5d12+11 y 2 asaltos) · **Cleanse** (APG pg. 211: personal, S/DF, 4d8+11 y quita ability damage, blinded, confused, dazzled, deafened, diseased, exhausted, fatigued, nauseated, poisoned, sickened) · **Wall of Stone** (CRB pg. 366: 11 cuadros de 5 pies, permanente) o Flame Strike (11d6, Ref DC 23) · **1 [libre]** → Mass Cure Light Wounds espontáneo (1d8+11 ×1,5 = 23,25 a 11 objetivos) o 2.º Breath of Life en día de jefe | Breath of Life va SIEMPRE en la ranura de dominio. |
| **6.º (3)** | **[D] Heal** (CRB pg. 294: 110 pg y quita ability damage, blinded, confused, dazed, dazzled, deafened, diseased, exhausted, fatigued, feebleminded, insanity, nauseated, poisoned, sickened, stunned; **no** niveles negativos ni parálisis ni miedo) · **Heal** · **Blade Barrier** (CRB pg. 249: muro de 220 pies o anillo de radio 25, 11 min, **11d6** Ref DC 24 mitad, cobertura +4 CA) | Greater Heroism (dominio 6.º) compite con Heal: solo en días de un único combate. Blade Barrier es la única herramienta de control que, mítica (tier 4), no cuesta la estándar. |

**Reserva sin preparar (vía Inspired Spell, 1 uso, CL 13):** tercer/cuarto Heal (130), Death Ward, Freedom of Movement, Remove Curse/Disease/Blindness, Neutralize Poison, Dispel Magic, Air Walk, Break Enchantment (1 minuto: **no**, excede la estándar), Restoration (3 asaltos: **no**), Summon Monster (1 asalto: **no**).

**Día de viaje/social:** cambiar 1.º por Comprehend Languages / Endure Elements / Ant Haul, 2.º por Augury / Zone of Truth / Gentle Repose, 3.º por Locate Object / Water Walk, 4.º por Divination / Sending / Air Walk, 5.º por Commune / Communal Air Walk, 6.º por **Heroes' Feast** (CRB pg. 295: 1d8+5 temporales, +1 moral al ataque y Will, +4 moral vs veneno y miedo, 12 h) / Wind Walk / Word of Recall.

**Fin del día:** las ranuras sobrantes de 1.º-3.º se guardan (15 min para rellenar); las de 4.º-6.º sobrantes se queman como Mass CLW / Mass CMW (30 c/u) si el grupo está tocado y disperso; si no, varita de CLW.

---

## 10. Equipo (WBL 82.000 po) — cierra en 81.829 po

Reglas: WBL nivel 11 = **82.000 po**, tope 41.000 por objeto ([AoN] https://aonprd.com/Rules.aspx?ID=254 — CRB pg. 399, Table 12-4); ranuras ([AoN] https://www.aonprd.com/Rules.aspx?ID=369 — CRB pg. 459: Headband y **Phylactery comparten "headband"**); añadir una habilidad a un objeto con ranura +50 % ([AoN] https://www.aonprd.com/Rules.aspx?ID=412 — CRB pg. 553). Mythic Adventures no modifica la WBL.

### 10.1 Núcleo (50.679 po)

| # | Objeto | Ranura | Precio | Fuente AoN | Qué aporta |
|---|---|---|---|---|---|
| 1 | **+1 Mithral Breastplate** | armor | 5.200 | https://www.aonprd.com/SpecialMaterials.aspx — UE pg. 51 / CRB pg. 154 | +7 CA, Dex máx +5, ACP −1, **velocidad 30**, 15 lb; sigue siendo media (competencia OK). |
| 2 | **+1 Darkwood heavy wooden shield** | shield | 1.257 | SpecialMaterials (7 + 150 mw + 100 darkwood + 1.000) | +3 CA, ACP 0, 5 lb. Se suelta el arma para gesticular, no el escudo. |
| 3 | **Headband of Inspired Wisdom +4** | headband | 16.000 | https://www.aonprd.com/MagicWondrousDisplay.aspx?FinalName=Headband+of+Inspired+Wisdom4 — UE pg. 250 / CRB pg. 516 | Wis 27: +1 DC, +1 Will, +1 concentración, **+1 ranura de 4.º** (un Blessing of Fervor más), +1 Rebuke Death y Touch of Glory. |
| 4 | **Cloak of Resistance +3** | shoulders | 9.000 | https://www.aonprd.com/MagicWondrousDisplay.aspx?FinalName=Cloak+of+Resistance3 — UE pg. 264 / CRB pg. 507 | Fort +13 / Ref +8 / Will +18. |
| 5 | **Ring of Protection +1** | ring | 2.000 | https://www.aonprd.com/MagicRingsDisplay.aspx?FinalName=Ring+of+Protection1 — UE pg. 172 / CRB pg. 479 | Desvío permanente (Shield of Faith +3 lo reemplaza mientras dura). |
| 6 | **Amulet of Natural Armor +1** | neck | 2.000 | UE pg. 256 / CRB pg. 500 | +1 CA acumulable. |
| 7 | **Belt of Mighty Constitution +2** | belt | 4.000 | UE pg. 209 / CRB pg. 502 | Con 16: +11 pg, +1 Fort. |
| 8 | **Handy Haversack** | — | 2.000 | https://www.aonprd.com/MagicWondrousDisplay.aspx?FinalName=Handy+Haversack — UE pg. 301 / CRB pg. 516 | Pergaminos/varitas como **acción de movimiento sin AdO**. |
| 9 | **+1 Scimitar** | mano | 2.315 | https://www.aonprd.com/EquipmentWeaponsDisplay.aspx?ItemName=Scimitar — UE pg. 18 | Arma predilecta; para incorpóreos y para el asalto que sobra (+9/+4, 1d6+1, 18-20). |
| 10 | **Wand of Cure Light Wounds** (CL 1) | — | 750 | https://aonprd.com/Rules.aspx?ID=383 — CRB pg. 496 | ≈275 pg fuera de combate a 2,7 po/pg. |
| 11 | **Pergaminos:** Breath of Life ×2 (CL 9: 1.125 c/u), Restoration (700 + 100 polvo), Remove Curse (375), Neutralize Poison (700) | — | 4.125 | https://aonprd.com/Rules.aspx?ID=381 — CRB pg. 490 | Emergencias sin haberlas preparado (Inspired Spell no cubre Restoration: 3 asaltos). |
| 12 | **Polvo de diamante** 100 po ×2 + 1.000 po ×1 | — | 1.200 | https://www.aonprd.com/SpellDisplay.aspx?ItemName=Restoration — CRB pg. 334 | Dos Restoration normales y una contra un nivel negativo permanente. |
| 13 | **Holy symbol (tattoo)** 100 + mundano 532 (healer's kit, spell component pouch, silver holy symbol, cleric's kit, everburning torch, silk rope, holy water ×2, antitoxin ×2, antiplague ×2, smelling salts, alchemist's fire ×2) | — | 632 | https://www.aonprd.com/EquipmentMiscDisplay.aspx?ItemName=Holy+symbol+%28tattoo%29 — UE pg. 57 | El tatuaje es foco divino "for spellcasting, channeling energy, and so on": canalizar con escudo y arma sin discusión. |
| 14 | Polvo de diamante para **Heroic Fortune** 100 ×2 | — | 200 | https://www.aonprd.com/SpellDisplay.aspx?ItemName=Heroic%20Fortune — APG pg. 324 | Un Hero Point temporal para el tanque o para nuestro Cheat Death. |
| | **Subtotal** | | **50.679** | | 5.200 + 1.257 + 16.000 + 9.000 + 2.000 + 2.000 + 4.000 + 2.000 + 2.315 + 750 + 4.125 + 1.200 + 632 + 200 |

### 10.2 Recomendado (31.150 po) → total 81.829 (sobran 171)

| # | Objeto | Precio | Por qué |
|---|---|---|---|
| 15 | **Phylactery of Positive Channeling añadida a la diadema** (11.000 × 1,5) | 16.500 | https://www.aonprd.com/MagicWondrousDisplay.aspx?FinalName=Phylactery%20of%20Positive%20Channeling — UE pg. 252 / CRB pg. 526: "+2d6… This also increases the amount of damage healed by living creatures." → **channel 8d6** (y Reactive Healing 8d6). ⚠️ Objeto combinado: hay que encargarlo/craftearlo (CRB pg. 553). **Si el GM no lo permite:** no comprar la Phylactery (no cabe en la ranura), channel 6d6, y los 16.500 van a Pearl of Power 2.º (4.000) + Ring of Sustenance (2.500) + Rod of Metamagic, Reach (lesser) (3.000) + ahorro para el objeto combinado a nivel 12. |
| 16 | **Cloak of Resistance +3 → +4** | 7.000 | Fort +14 / Ref +9 / Will +19. La salvación es la mejor curación. |
| 17 | **Rod of Metamagic, Extend (lesser)** | 3.000 | https://www.aonprd.com/MagicRodsDisplay.aspx?FinalName=Rod+of+Metamagic%2C+Extendlesser — UE pg. 189: 3/día, ≤ 3.º: **Magic Vestment ×2 a 22 h** (CA 26 todo el día) + Communal Resist Energy / Heroism extendido. |
| 18 | **Scroll of Heal** (CL 11) | 1.650 | Un cuarto/quinto Heal del día sin ranura ni poder mítico (leerlo provoca; ⚠️ Faith's Reach sobre pergamino: asumir toque). |
| 19 | **Pearl of Power (1st)** | 1.000 | https://www.aonprd.com/MagicWondrousDisplay.aspx?FinalName=Pearl+of+Power1st — UE pg. 315: un Protection from Evil / Liberating Command más. |
| 20 | **Wand of Protection from Evil** (CL 1) | 750 | Inmunidad a control mental 1 min × 50, sin ranuras. |
| 21 | **Wand of Lesser Restoration** (CL 1; el conjuro es paladin 1) | 750 | Fatiga y 1d4 de daño de característica ×50 fuera de combate. ⚠️ Confirmar acción (estándar vs 3 asaltos). |
| 22 | **Ioun Stone, Dusty Rose Prism (cracked)** | 500 | https://www.aonprd.com/MagicWondrousDisplay.aspx?FinalName=Ioun+Stone+Dusty+Rose+Prism — Seekers of Secrets pg. 46: "+1 competence bonus on initiative checks" → **+8**. ⚠️ Campaign Setting. |
| | **Subtotal** | **31.150** | 16.500 + 7.000 + 3.000 + 1.650 + 1.000 + 750 + 750 + 500 |

**Total: 50.679 + 31.150 = 81.829 ≤ 82.000 ✓.** Objeto más caro: la diadema combinada (32.500 < 41.000 ✓). Ranuras ocupadas: armor, shield, headband, shoulders, neck, belt, ring ×1. Libres: head, eyes, hands, feet, chest, body, wrist, ring 2.

### 10.3 Lujo (niveles 12-13; WBL 108.000 / 140.000), en orden
1. **Rod of Metamagic, Reach (lesser)** 3.000 (seguro anti-antimagia/mítico suspendido para cures ≤ 3.º) · 2. **Pearl of Power (2nd)** 4.000 y **(3rd)** 9.000 · 3. **Lesser Talisman of Life's Breath** 3.500 para el tanque (Occult Adventures pg. 263: Breath of Life automático la primera vez que muere) · 4. **Boots of Speed** 12.000 (un movimiento extra para posicionarse) · 5. **Ioun Stone Pale Green Prism (cracked)** 4.000 (+1 salvaciones) · 6. **Ring of Sustenance** 2.500 · 7. **Rod of Metamagic, Reach (normal)** 11.000 (Heal/BoL a 50 pies 3/día) · 8. Armadura +2 (3.000) cuando Magic Vestment llegue a +3 (CL 12) · 9. **Rod of Quicken (lesser)** 35.000 solo a nivel 13+ · 10. **Diamante de 5.000 (Raise Dead)** del botín común en cuanto se pueda.

**Política de consumibles:** fuera de combate varita de CLW (2,7 po/pg) → channel sobrante → Recuperation; nunca ranuras. Pergaminos de emergencia en el haversack (movimiento sin AdO). Polvo de diamante y componentes siempre encima.

---

## 11. Habilidades (Background Skills activos)

Reglas: 2 + Int = **2 rangos/nivel de aventura** (Int 10) = **22**; Background Skills ([AoN] https://www.aonprd.com/Rules.aspx?ID=1732 — Pathfinder Unchained pg. 46-53): **+2 rangos/nivel solo para habilidades de trasfondo** (Int no los modifica) = **22**; clase predilecta a pg (no a rangos). Habilidades de clase del clérigo: Appraise, Craft, Diplomacy, Heal, Knowledge (arcana, history, nobility, planes, religion), Linguistics, Profession, Sense Motive, Spellcraft ([AoN] Cleric — CRB pg. 38). **Perception NO es de clase.** Lore siempre es de clase.

| Habilidad | Tipo | Rangos | Modificador a nivel 11 | Cuenta |
|---|---|---|---|---|
| **Perception** | aventura (no de clase) | 11 | **+21** | 11 + 8 (Wis) + 2 (Skilled aasimar) |
| **Knowledge (religion)** | aventura (clase) | 5 | **+8** | 5 + 0 (Int) + 3 (clase). Prerrequisito de Quick Channel ✓ |
| **Heal** | aventura (clase) | 3 | **+14** | 3 + 8 + 3. Tomando 10 = 24: First Aid (DC 15) y Treat Deadly Wounds (DC 20) automáticos |
| **Spellcraft** | aventura (clase) | 3 | **+6** | 3 + 0 + 3 |
| Sense Motive | aventura (clase, sin rangos) | 0 | +8 | Wis |
| Diplomacy | aventura (clase, sin rangos) | 0 | +4 | 2 (Cha) + 2 (Skilled) |
| **Linguistics** | trasfondo (clase) | 5 | **+8** | 5 + 3 → Abyssal, Infernal, Draconic, Undercommon, Sylvan (además de Common y Celestial) |
| **Knowledge (history)** | trasfondo (clase) | 5 | **+8** | 5 + 3 |
| **Knowledge (nobility)** | trasfondo (clase) | 2 | **+5** | 2 + 3 |
| **Profession (herbalist)** | trasfondo (clase, Wis) | 5 | **+16** | 5 + 8 + 3 (hierbas medicinales DC 10/15) |
| **Lore (Sarenrae)** | trasfondo (siempre de clase) | 5 | **+8** | 5 + 3 |
| **Totales** | | **22 aventura + 22 trasfondo** ✓ | | |

Sin rangos en Disable Device, Stealth ni Use Magic Device (no son de clase y la build no invierte en trampas). Opción del jugador: cambiar Kn (nobility) 2 + Lore 3 por **Craft (alchemy) 5** para fabricar antitoxinas/antiplague en tiempo muerto.

---

## 12. Números clave a nivel 11 / tier 3

| Bloque | Valor | Cuenta / fuente |
|---|---|---|
| **Iniciativa** | **+8** | 2 (Dex) + 2 (Reactionary) + 3 (Amazing Initiative) + 1 (Dusty Rose cracked) |
| **CA** | **24** (toque 13, desprevenida 22) · **26** con Magic Vestment ×2 · **28** con Shield of Faith +3 · +2 esquiva si tomamos esa opción de Blessing of Fervor · +4 cobertura tras Blade Barrier | 10 + 7 (breastplate +1) + 3 (escudo +1) + 2 (Dex) + 1 (anillo) + 1 (amuleto). Magic Vestment +2 reemplaza el +1 de armadura y escudo (mejora: no se acumula) → +1 y +1 |
| **pg** | **120** | 53 + 33 + 11 + 11 + 12 (sección 5); Righteous Might activo: +22 |
| **Umbral de muerte** | **−32** | Hard to Kill: −2 × Con 16 |
| **Salvaciones** | **Fort +14 / Ref +9 / Will +19** (+20 vs charm/compulsion con Birthmark si se elige) | Fort 7 + 3 + 4; Ref 3 + 2 + 4; Will 7 + 8 + 4 (Cloak +4). Con Cloak +3: +13 / +8 / +18 |
| **CMB / CMD** | +8 / **21** (23 con Shield of Faith) | 10 + 8 (BAB) + 0 + 2 + 1 (desvío) |
| **BAB / ataque** | +8/+3 · scimitar +1: **+9/+4** (1d6+1, 18-20) · toque a distancia (Searing Light): **+10** | — |
| **Velocidad** | 30 pies | mithral breastplate |
| **Concentración** | **+19** | 11 + 8. Lanzar a la defensiva: Heal DC 27 → 8+ (65 %); Blessing of Fervor / CCW DC 23 → 4+ (85 %); Surge +1d6 rescata una tirada fallada por ≤ 6 |
| **Conjuros/día** | **4 / 7 / 7 / 7 / 6 / 4 / 3** | base 4 / 4+1 / 4+1 / 4+1 / 3+1 / 2+1 / 1+1 + Wis 27 (2/2/2/2/1/1). ⚠️ El primer día con la diadema (bono temporal 24 h, Wis 23 → extras 2/2/1/1/1/1): 4/7/7/6/5/4/3 |
| **DC de conjuros** | **18 / 19 / 20 / 21 / 22 / 23 / 24** (0.º-6.º) | 10 + nivel + 8. Blade Barrier Ref 24; Flame Strike Ref 23; Greater Command Will 23; Holy Smite Will 22; Hold Person / Silence Will 20 |
| **Pruebas de CL** | 1d20 + 11 (13 con Inspired Spell) | Dispel, Remove Curse/Disease, Neutralize Poison, Break Enchantment |
| **Channel Energy** | **8d6 = 28 (8-48)** por objetivo con Phylactery; **≈31,3 con Envoy of Healing; ≈32,3 con Blessed Touch** · 6d6 = 21 (≈24,5) sin Phylactery · **7 usos/día** · DC 17 (19 vs no muertos) · excluye 2 | Estándar (1 uso) o **movimiento (2 usos, Quick Channel)**, 30 pies de radio, no provoca |
| **Curación por acción (un objetivo)** | Mythic Heal + Inspired **195** (2 usos) > Mythic Heal **165** (1 uso) > Heal Inspired **130** (1 uso) > **Heal 110** > Mythic BoL 43,5 > CCW ×1,5 **43,5** > CSW ×1,5 36,75 > BoL 33,5 > CMW ×1,5 28,5 > **channel ≈32 (a TODOS los aliados, sin provocar, como movimiento)** > Rebuke Death 7,5 (11/día, solo bajo 0) | secciones 2 y 3 del dossier |
| **Curación por asalto (patrón)** | Heal 110 al tanque + channel ≈32 a los 4-5 (movimiento) = **≈142 al tanque, ≈32 al resto** por 1 ranura de 6.º + 2 usos de channel; con Amazing Initiative (+1 channel): ≈174 / ≈64; con Hero Point Extra Action (2.º Heal): ≈284 / ≈64 | ver sección 13 |
| **Curación de área** | 2 channels (estándar + movimiento, 3 usos) = **≈64 a cada aliado a 30 pies**, sin ranuras; Mass CMW ×1,5 = 30 c/u (6.º); Mass CLW ×1,5 = 23,25 c/u (5.º) | con 4-5 aliados apiñados, channel ×2 > Mass CMW y deja libre el 6.º |
| **Resurrección (≤ 1 asalto)** | Heal + Relentless Healing (110, 1 uso) > BoL de dominio (33,5) > CCW + Relentless (43,5) > channel + Relentless (≈32) · **2 asaltos / efectos de muerte:** Mythic BoL | sección 13 |
| **Buffs de grupo** | Aura of Heroism **+2 moral** (rápida, 15+15 asaltos/día) · Blessing of Fervor (11 asaltos, 11 objetivos; mítico: 2 opciones) · Prayer **+1 suerte / −1** (11 asaltos) · Communal Protection from Evil (11 min) · Communal Resist Energy 30 (110 min) · Magic Vestment +2 ×2 (22 h) · Heroism +2 moral 110 min a uno · Greater Magic Weapon +2 (11 h) · Status ×3 (11 h) · Heroes' Feast (12 h) | — |
| **Reactivos (inmediatas / gratuitas)** | Reactive Healing 8d6 a nosotros · Divine Interference −4 a un ataque que acertó a un aliado · Surge +1d6 · Liberating Command (+22 Escape Artist a un aliado) · Relentless Healing (gratuita) · Mythic Blade Barrier (tier 4) | — |
| **Poder mítico** | **9/día**; Surge 1d6 | — |
| **Hero Points** | 1 al crearse (+1 historia, +1 retrato: ⚠️ GM); máx. 3; 1 por asalto (Cheat Death 2) | [AoN] https://www.aonprd.com/Rules.aspx?ID=445 — APG pg. 322 |
| **Perception** | **+21** | la alarma del grupo |

**Contra el enemigo de referencia CR 11** ([AoN] https://aonprd.com/Rules.aspx?ID=1673 — MA pg. 228, Table 6-8: 145 pg, CA 25, ataque +19/+14, daño 50/37 por asalto, DC 20, salvación buena +14 / mala +10): nos acierta con 7+ contra CA 26 (70 %) → un asalto completo ≈ 35 pg; **Blade Barrier DC 24** falla la salvación mala el 65 % y la buena el 45 %; nuestro Will +19 falla su DC 20 solo con 1 natural; Fort +14 vs DC 20: 6+ (75 %).

---

## 13. Rutina de combate

### 13.1 Posición (lo primero, cada combate)
- **Segunda línea = la fila inmediatamente detrás de los tanques**, a 5-10 pies de la primera línea, **adyacente a 1-2 aliados** (Abundant Healing) y con **los 4 cuerpo a cuerpo dentro de 30 pies** (channel, Faith's Reach, Aura of Heroism). Nunca en una esquina lejos del grupo: perdemos la aura y el channel.
- Si hay enemigos con alcance o cargadores: un paso más atrás (10-15 pies) y renunciar a Abundant Healing ese asalto; **nunca "tragarse" un AdO con un conjuro de 5.º-6.º** (lanzar a la defensiva DC 27 para Heal → 65 %; paso de 5 pies primero; o channel, que no provoca).
- Selective Channeling: contar los enemigos dentro de 30 pies **que vemos**; excluimos 2. Si hay 3+, o reposicionarse o aceptar curar a uno (o usar Heal en vez de channel).

### 13.2 Asalto 1 (nadie sangra todavía)
1. **Rápida:** Aura of Heroism (+2 moral a los 5; gasta 1 de los 15 asaltos).
2. **Estándar:** **Blessing of Fervor** (11 asaltos, 11 objetivos a 50 pies) — **mítico** (1 uso) en los combates grandes: cada cuerpo a cuerpo con ataque extra Y +2 ataque / +2 esquiva. Si el arcano del grupo lanza *haste*, en su lugar **Prayer** (+1/−1 a todo, 40 pies) o Communal Protection from Evil si hay dominadores.
3. **Movimiento:** posicionarse (ver 13.1). Si ya estamos bien puestos y algún aliado ya perdió pg del asalto de sorpresa: **Quick Channel** (2 usos).
4. **Inmediata en reserva:** Divine Interference (un 3.º/4.º preparado → −3/−4 al ataque que acertó al DPS), Reactive Healing, Surge.

### 13.3 Asaltos siguientes: cuándo curar y con qué
- **Regla de decisión:** curar con la **estándar** solo cuando (a) un aliado está por debajo de ~40 % y sigue en primera línea, (b) hay una condición que anula a un DPS (nauseated, stunned, blinded → **Heal** a 30 pies la quita) o (c) alguien está a 0 o menos. Si nadie cumple (a)-(c), la estándar es un buff o control (13.4) y la curación va **solo en la acción de movimiento** (Quick Channel).
- **Un aliado tocado (60-70 % pg):** movimiento Quick Channel (≈32 a todos) + estándar buff/control. Es el asalto "normal".
- **Un aliado bajo 40 %:** estándar **Heal** (110; a 30 pies; Abundant Healing pasa el exceso al adyacente) + movimiento Quick Channel a los demás.
- **El tanque bajo 40 % y el jefe con daño 50+/asalto:** **Mythic Heal (165, 1 uso)**. Si además otro aliado está mal: **Amazing Initiative (1 uso) → channel extra** (3 channels el asalto: ≈96 a todos, o Heal + 2 channels: ≈174 al tanque, ≈64 al resto).
- **Dos aliados críticos a la vez:** Hero Point **Extra Action** → segundo Heal (la estándar del Hero Point sí puede ser un conjuro) + Amazing Initiative channel + Quick Channel: ≈284 al tanque y ≈64 a los demás en un asalto (1 Hero Point, 1-2 usos de poder mítico, 3 usos de channel, 2 ranuras de 6.º). Una vez por combate.
- **Ranuras de 6.º agotadas:** Inspired Spell → Heal 130 (1 uso) → CCW espontáneo ×1,5 (43,5; mítico a tier 4: 87) → Scroll of Heal → Rebuke Death (bajo 0) → channels.
- **Fuera de combate:** varita de CLW hasta pg máximos; channel sobrante; **Recuperation** (1 uso + 1 h) si quedan combates y ya gastamos la mitad de las ranuras.

### 13.4 Cuando no hay nada que curar (que no es "nada que hacer")
1. **Buffs por prioridad:** Blessing of Fervor (si no está activo) → Prayer → Communal Protection from Evil (dominadores) → Weapon of Awe / Bull's Strength al DPS → Death Ward al tanque (no muertos) → Freedom of Movement al DPS (agarradores).
2. **Control ligero (no cuesta dotes):** **Silence** sobre el punto donde está el lanzador (sin salvación, 840 pies) · **Blade Barrier** (11d6, Ref DC 24, muro/anillo para cortar refuerzos o encerrar al jefe; a tier 4, mítico como **inmediata**) · **Wall of Stone** (dividir la sala) · **Greater Command** (11 criaturas, Will DC 23 cada asalto) · **Hold Person** en esbirros humanoides (Will DC 20) · **Greater Dispel Magic** (dirigido a los buffs del jefe) · **Banishment** contra extraplanares (Will DC 24).
3. **Daño limpio para el grupo bueno:** Holy Smite (5d8 + ceguera a malvados, 10d6 a ajenos malvados, Will DC 22; los aliados buenos no sufren), Flame Strike (11d6, Ref DC 23), Searing Light (toque a distancia +10; 10d6 a no muertos).
4. **Un quinto cuerpo a cuerpo:** Spiritual Ally (4.º: +16/+11, 1d10+3, flanquea y hace AdO, se mueve como rápida) para dar flanqueo a los 2 DPS.
5. **Social / pre-combate:** Touch of Glory (+11 a una prueba de Cha del apoyo social), Heroes' Feast de mañana, Status a los 3 que se alejan.
6. **Lo que NO hacemos:** entrar en cuerpo a cuerpo (CA 26 contra +19: 70 % de recibir 50/asalto; el sanador se vuelve su propio paciente), gastar la estándar en Rebuke Death o en varitas mientras haya ranuras, buscar trampas.

### 13.5 Emergencias
- **Aliado a 0 o negativo, amenazado:** subirlo a **1+** (consciente, ya no *helpless* → no hay coup de grace): Heal 110 / CCW 43,5 a 30 pies; si estamos amenazados, **channel** (no provoca). No amenazado: **Stabilize** (orison, 50 pies) y seguir con lo urgente.
- **Aliado muerto este asalto (por pg):** **Heal + Relentless Healing** (1 uso, acción gratuita; 110 de curación supera cualquier umbral: desde −45 queda a +65) > **Breath of Life** de dominio (33,5; 30 pies) > CCW + Relentless > channel + Relentless. Si el turno del enemigo sigue y hay Hero Point: **Act Out of Turn** (turno adelantado de una acción) para llegar antes del coup de grace.
- **Muerto hace 2 asaltos o por efecto de muerte (Slay Living, Finger of Death):** **Mythic Breath of Life** (1 uso + ranura de 5.º): 2 asaltos de ventana y repite la salvación contra el efecto. Si falla: Gentle Repose, Raise Dead (5.000 po, 2 niveles negativos permanentes) o Resurrection (7.º: pergamino 12.275 po / NPC) — y **Death Ward preventivo** al tanque la próxima vez.
- **Nos matan a nosotros:** antes del daño, **Reactive Healing** (inmediata, 1 uso de channel, 8d6); bajo 0, Hard to Kill estabiliza; si el golpe nos dejaría a −32, **Cheat Death (2 Hero Points)**. Rodeados: **Sanctuary** (Will DC 19; podemos curar y buffear sin romperlo) o Antilife Shell (6.º, 1 asalto).
- **Salvación letal propia:** Hero Point **Bonus +8** antes de tirar (Fort +14 + 8 = solo falla con 1 contra DC 22) o Surge +1d6 después (1 uso; más barato si faltaron ≤ 6).
- **Aliado dominado:** Protection from Evil (toque: el dominado no es voluntario → ataque de toque a 30 pies con Faith's Reach; nueva salvación con +2 y bloqueo 11 min), Dispel Evil (5.º, sin prueba vs encantamiento de fuente malvada), Dispel Magic (1d20+11).
- **Aliado agarrado / paralizado:** Liberating Command (inmediata, +22 Escape Artist), Remove Paralysis (close, hasta 4), Freedom of Movement preventivo.
- **Un aliado tragado entero:** fuera de la línea de efecto: ni channel ni Heal llegan. Freedom of Movement preventivo al DPS que suele acabar dentro.

### 13.6 Hero Points y poder mítico: qué gastar primero
- **Poder mítico (9):** Mythic Blessing of Fervor en cada combate grande; Mythic Heal cuando el tanque cae bajo 40; Inspired Spell para lo no preparado; Amazing Initiative en el asalto de crisis; Relentless Healing ante una muerte; Recuperation entre combates; Surge solo en salvaciones letales o concentración de un Heal. Mythic Domain (recarga de la aura) con el último uso si el día tiene un tercer combate.
- **Hero Points (1-3, no se recuperan):** reserva de **2 con jefe pendiente** (Cheat Death). Prioridad: (i) Cheat Death propio; (ii) Act Out of Turn para llegar antes de un coup de grace; (iii) Bonus +8 antes de una salvación letal; (iv) Extra Action = 2.º Heal en el asalto con dos críticos; (v) Reroll de una salvación letal fallada. **Nunca** Recall mientras queden poderes míticos (Inspired Spell hace lo mismo por 1 uso), ni en habilidades. Antes del jefe: **Heroic Fortune** (2.º, 100 po) sobre nosotros (2.º punto → Cheat Death) o sobre el tanque.

---

## 14. Fortalezas

1. **Curación por acción sin rival a nivel 11:** Heal 110/130/165/195 a 30 pies como estándar, ≈32 a todos los aliados como **acción de movimiento** (Quick Channel), 8d6 a nosotros como **inmediata** (Reactive Healing), y cualquier cura convertida en resurrección como **acción gratuita** (Relentless Healing). Tres channels en un asalto (≈96 a cada aliado) por 1 poder mítico.
2. **El mejor buff de grupo para 4 cuerpo a cuerpo** (Blessing of Fervor mítico: ataque extra + +2/+2 a cada uno, 11 asaltos) apilado con **+2 moral de acción rápida** (Aura of Heroism, 30 asaltos/día) y **+1 suerte** (Prayer): +4 al ataque y ~4-8 ataques extra por asalto para el grupo sin que la clériga renuncie a curar (la curación va en el movimiento).
3. **Nunca tiene que "llegar":** Faith's Reach pone todo conjuro de toque a 30 pies; Selective Channeling permite canalizar con enemigos mezclados; el channel no provoca. La clériga casi nunca está amenazada.
4. **Supervivencia propia real:** CA 26-28, Will +19, Fort +14, 120 pg con muerte a −32, Reactive Healing, Cheat Death, Sanctuary, Cloak +4.
5. **Versatilidad diaria sin preparar:** Inspired Spell (cualquier conjuro divino ≤ 6.º, CL 13) + spontaneous casting (toda ranura es un cure latente) + Recuperation (segunda preparación a mitad del día) + pergaminos de Breath of Life/Restoration/Heal.
6. **Respuesta a casi todas las aflicciones a 30 pies y en 1 acción:** Heal (condiciones), Remove Paralysis (close), Remove Fear (close), Liberating Command (inmediata), Death Ward y Freedom of Movement preventivos, Mythic Breath of Life contra efectos de muerte.
7. **Sin arquetipo ni rasgos de campaña:** todo es material de Paizo en AoN; los pocos Player Companion tienen sustituto de hardcover ya calculado.

## 15. Debilidades

1. **Abundant Healing exige aliados adyacentes a NOSOTROS**, y Selective Channeling exige **ver o tocar** a los excluidos (FAQ jul-2011): contra invisibles o cuando el grupo se dispersa, la curación de área y el "exceso" se pierden. Mitigación: Status ×3, Invisibility Purge (3.º), disciplina de posición.
2. **La estándar sigue siendo una:** en el peor asalto (dos aliados a negativos y el tanque a 20 pg) hacen falta Hero Point + Amazing Initiative, y solo una vez por combate. Sin ellos, alguien espera un asalto.
3. **Ranuras de 5.º-6.º escasas (4 + 3):** Breath of Life, Heal ×2, Blade Barrier, Cleanse y Wall of Stone compiten; el segundo Blessing of Fervor ocupa un 4.º que podría ser Death Ward. Inspired Spell descomprime, pero cuesta poder mítico (9/día).
4. **Dependencia del poder mítico:** con los 9 usos gastados, la build vuelve a "Heal 110 + channel 8d6": sigue siendo excelente, pero sin Mythic Fervor ni Mythic Heal. Racionar según 8.6.
5. **Poco daño propio:** sin dotes ni atributos para pegar. "No sentirse inútil" se resuelve con buffs, control ligero (Blade Barrier, Silence, Wall of Stone), Spiritual Ally y Holy Smite / Flame Strike, no con la cimitarra.
6. **Cha 14 = solo 2 exclusiones y 7 channels:** contra hordas (3+ enemigos a 30 pies) hay que reposicionar o curar a un enemigo; si el GM confirma ese tipo de combates, cambiar a la compra Cha 16 / Dex 12 (sección 5) o tomar Mythic Selective Channeling.
7. **Lo que no podemos a nivel 11** (hablar con el GM): Resurrection, Regenerate, Greater Restoration, Stone to Flesh (solo Break Enchantment de 1 minuto), licantropía (Wolfsbane hasta nivel 12), más de un nivel negativo permanente por semana.
8. **Contabilidad:** asaltos de Aura of Heroism, duraciones de Fervor/Prayer/Magic Vestment/Status, 9 poderes míticos, 7 channels, Hero Points. Si el jugador no quiere llevarla, la versión simple es Healing + Good/Agathion sin Mythic Domain.

---

## 16. Riesgo de legalidad (todo lo que depende de un permiso del GM o de una lectura)

| # | Elemento | Tipo de riesgo | Fuente | Plan B |
|---|---|---|---|---|
| 1 | **Envoy of Healing** (rasgo de religión) | Player Companion (Healer's Handbook pg. 12) — permiso de libro | https://www.aonprd.com/TraitDisplay.aspx?ItemName=Envoy%20of%20Healing | Focused Mind (Magic, UCam/APG) |
| 2 | **Blessed Touch** (rasgo de fe) | Player Companion (Champions of Purity pg. 7) | https://www.aonprd.com/TraitDisplay.aspx?ItemName=Blessed%20Touch | Birthmark (Faith, UCam/APG) |
| 3 | **Scarred** (drawback) | Player Companion (Antihero's Handbook pg. 6) | https://www.aonprd.com/TraitDisplay.aspx?ItemName=Scarred | Provincial (UCam pg. 65) |
| 4 | **Headband of Inspired Wisdom +4 con Phylactery of Positive Channeling añadida (32.500 po)** | Objeto combinado por la regla "+50 %" (CRB pg. 553): hay que craftearlo o encargarlo; no es "de tienda" | https://www.aonprd.com/Rules.aspx?ID=412 | Sin Phylactery: channel 6d6; 16.500 po a Pearl 2.º + Ring of Sustenance + Rod of Reach (lesser) + ahorro |
| 5 | **Ioun Stone, Dusty Rose Prism (cracked)** | Campaign Setting (Seekers of Secrets pg. 46; 500 po; "+1 competence bonus on initiative checks") | https://www.aonprd.com/MagicWondrousDisplay.aspx?FinalName=Ioun+Stone+Dusty+Rose+Prism (la página lista las tres variantes: normal 5.000 / flawed 4.000 / cracked 500) | Iniciativa +7; 500 po a una poción |
| 6 | **Aasimar** | Raza del Bestiary/ARG (no Core): el jugador tiene raza libre, pero conviene confirmar | https://www.aonprd.com/RacesDisplay.aspx?ItemName=Aasimar | Humano (sección 1) |
| 7 | **Mythic Domain: "your domain's granted powers"** (singular) | Lectura: ¿aplica a los dos dominios? ¿la recarga devuelve los asaltos de Aura of Heroism? | https://www.aonprd.com/PathAbilities.aspx?Path=Hierophant (MA pg. 34) | Declarar Glory/Heroism como el dominio; si tampoco, Extra Path Ability → Mythic Selective Channeling |
| 8 | **Faith's Reach sobre aliados dispuestos** | ¿toque automático o ataque de toque a distancia (+10, provoca)? Sin FAQ | https://www.aonprd.com/PathAbilities.aspx?Path=Hierophant | Aceptar la tirada (CA de toque de un aliado es baja); paso de 5 pies |
| 9 | **Relentless Healing** | ¿funciona contra efectos de muerte? ¿impone nivel negativo como BoL? ¿se gasta el uso si el aliado no estaba muerto? | MA pg. 35 | Breath of Life de dominio / Mythic BoL |
| 10 | **Umbral de Breath of Life sobre aliados míticos** | −Con (literal) o −2 × Con (Hard to Kill); sin FAQ | https://www.aonprd.com/SpellDisplay.aspx?ItemName=Breath%20of%20Life | Heal + Relentless Healing (110 supera cualquier umbral) |
| 11 | **Amazing Initiative** | ¿la estándar extra sirve para varita (spell trigger) o Rebuke Death (Sp)? Seguro: channel | https://www.aonprd.com/Rules.aspx?ID=1618 (MA pg. 12) | Usarla solo para channel |
| 12 | **Recuperation + preparación divina** | ¿habilita una sesión de preparación de 1 h sin el Recent Casting Limit? ¿cuándo se recarga el poder mítico? | MA pg. 12; CRB pg. 220 | Pactar "hora de rezo" como reloj de todo |
| 13 | **Mythic Heal augmented "acts as restoration"** | ¿exige los 100/1.000 po de polvo de diamante? | https://www.aonprd.com/SpellDisplay.aspx?ItemName=Heal (MA pg. 97) | Llevar el polvo igual |
| 14 | **Wand of Lesser Restoration (CL 1)** | ¿activar tarda 1 estándar o 3 asaltos (tiempo del conjuro)? | https://aonprd.com/Rules.aspx?ID=383 (CRB pg. 496) | Solo se usa fuera de combate: da igual |
| 15 | **Scroll of Heal + Faith's Reach** | ¿un conjuro leído de pergamino cuenta como "cast a divine spell with a range of touch"? | — | Asumir toque (5 pies) para el pergamino |
| 16 | **Hero Points iniciales** | +1 por historia escrita y +1 por retrato (APG pg. 322) los concede el GM | https://www.aonprd.com/Rules.aspx?ID=445 | Con 1 solo punto no hay Cheat Death: Heroic Fortune antes del jefe |
| 17 | **Selective Channeling: ver o tocar** | FAQ oficial (jul-2011), no permiso, pero hay que llevarla impresa: no se excluye a un invisible señalando la casilla | https://paizo.com/paizo/faq/v5748nruor1fm | Invisibility Purge |
| 18 | **Massive Damage (regla opcional)** | Si está activa, un golpe de 60+ obliga a Fort DC 15 o muerte; ni Death Ward ni Hard to Kill protegen | CRB pg. 191 | Preguntar |
| 19 | **Método de pg** | Promedio 4,5 (120) vs "PFS" 5 (125) vs tirada | — | Preguntar |
| 20 | **Deific Obedience de Sarenrae** (futuro, nivel 12-13) y **Inner Sea Gods** como fuente de la lista de dominios/subdominios de Sarenrae | Campaign Setting; la lista Core (CRB pg. 43) coincide en los dominios, el subdominio Heroism sale de APG y AoN lista a Sarenrae | https://www.aonprd.com/DeityDisplay.aspx?ItemName=Sarenrae | — |
| 21 | **Ironskin** (si se prepara alguna vez) | Monster Codex pg. 45 | — | Righteous Might |
| 22 | **Lesser Talisman of Life's Breath** (lujo) | Occult Adventures pg. 263 | — | Pergamino de BoL en el haversack |

**Sin riesgo (todo hardcover / Core):** clase Cleric base, dominios Healing y Glory/Heroism (CRB + APG), Selective Channeling, Extra Channel, Toughness (CRB), Quick Channel y Divine Interference (UM), Reactive Healing (ACG), Reactionary (APG/UCam), todo lo mítico (Mythic Adventures), Background Skills (Unchained), Hero Points (APG), objetos del núcleo (CRB/UE), Blessing of Fervor / Cleanse / Spiritual Ally (APG), Communal (UC).

---

## 17. Hoja resumen (para copiar a la ficha)

**Aasimar Cleric 11 de Sarenrae (NG) / Hierophant tier 3** · Dominios **Healing + Glory (Heroism)** · Sin arquetipo.
**Atributos:** Str 10 / Dex 14 / Con 16 / Int 10 / **Wis 27** / Cha 14 (compra 25: 10/14/14/10/17/12).
**pg 120 · CA 24 (26 MV / 28 SoF) · Fort +14 / Ref +9 / Will +19 · Init +8 · Vel 30 · CMD 21.**
**Dotes:** Selective Channeling (1) · Extra Channel (3) · Quick Channel (5) · Reactive Healing (7) · Toughness (9) · Divine Interference (11).
**Rasgos:** Reactionary · Envoy of Healing · Blessed Touch · Drawback: Scarred.
**Mítico:** Inspired Spell · Faith's Reach (t1) · Relentless Healing (t2) · Abundant Healing (t3) · Mythic Domain (Extra Path Ability, t3) · Mythic Spell Lore (t1): Heal, Blessing of Fervor, Breath of Life · +2 Wis (t2) · 9 poderes · Surge 1d6 · Hard to Kill −32 · Amazing Initiative · Recuperation.
**Channel:** 8d6 (≈32) × 7/día, excluye 2, movimiento por 2 usos. **Rebuke Death** 1d4+7 × 11. **Aura of Heroism** 15 + 15 asaltos, rápida. **Touch of Glory** +15 × 11.
**Conjuros/día:** 4 / 7 / 7 / 7 / 6 / 4 / 3; DC 18-24; CL 11 (13 Inspired).
**Equipo (81.829 po):** +1 mithral breastplate, +1 darkwood heavy shield, Headband of Inspired Wisdom +4 (+ Phylactery of Positive Channeling), Cloak of Resistance +4, Ring of Protection +1, Amulet of Natural Armor +1, Belt of Mighty Constitution +2, Handy Haversack, +1 scimitar, Rod of Extend (lesser), Pearl of Power 1.º, Dusty Rose cracked, varitas CLW / Protection from Evil / Lesser Restoration, pergaminos BoL ×2 / Heal / Restoration / Remove Curse / Neutralize Poison, polvo de diamante 100 ×4 y 1.000 ×1, holy symbol tattoo, kit.
**Habilidades:** Perception +21, Heal +14, Kn (religion) +8, Spellcraft +6, Sense Motive +8, Diplomacy +4; trasfondo: Linguistics +8, Kn (history) +8, Kn (nobility) +5, Profession (herbalist) +16, Lore (Sarenrae) +8.
**Asalto tipo:** rápida Aura of Heroism · estándar Blessing of Fervor (asalto 1) / Heal / Prayer / control · movimiento Quick Channel · inmediata Divine Interference / Reactive Healing / Surge.

*Fin de la build. Toda regla lleva URL de aonprd.com y libro; ⚠️ = pactar con el GM; nada de material de terceros, 2e ni videojuegos.*
