# BUILD "La Everbloom de campo" — Clérigo sanador + control del campo e invocaciones (Cleric 11 / Hierophant tier 3, PF1e)

**Versión:** 2026-09-16 · **Sistema:** Pathfinder RPG 1.ª edición · **Fuente de verdad:** Archives of Nethys, sección PF1e (`https://www.aonprd.com/`, sin `2e.`). Base documental: `DOSSIER-Clerigo-PF1e.md` (secciones 1-14, con las correcciones de los auditores) más las páginas de AoN citadas en cada línea de este documento.
**Parámetros confirmados (15/09/2026) que esta build respeta al pie de la letra:** compra por puntos 25 · nivel 11 · tier mítico 3 exacto (Hierophant) · raza y deidad libres (solo Paizo) · grupo 2 tanques + 2 DPS cuerpo a cuerpo + 1 apoyo táctico/social · el clérigo es el ÚNICO sanador · combates muy difíciles · NADA de trampas · Background Skills (Unchained) SÍ · un drawback + 3 rasgos · Hero Points (APG) activos, NO Antihero · Sacred Geometry BANEADA · WBL 82.000 po · sin 3PP · rasgos de campaña solo con permiso del GM.

**Convenciones:** [AoN] = regla verificada en aonprd.com (URL + libro/página tal como los indica AoN) · ⚠️ = depende de una lectura o de un permiso del GM (todas recogidas en la sección 16) · 🚫 = no existe en PF1e oficial. Nombres de reglas en inglés como en AoN; traducción entre paréntesis la primera vez. Abreviaturas de libros: CRB = PRPG Core Rulebook; APG = Advanced Player's Guide; UM = Ultimate Magic; UC = Ultimate Combat; ACG = Advanced Class Guide; UE = Ultimate Equipment; UCam = Ultimate Campaign; ARG = Advanced Race Guide; MA = Mythic Adventures; ISG = Inner Sea Gods; ISF = Inner Sea Faiths; B1/B2/B3 = Bestiary 1/2/3.

---

## 0. Resumen ejecutivo (dos minutos)

- **Concepto:** un clérigo humano de **Milani** (CG) con dominios **Healing + Good**, Hierophant tier 3, que gana los combates difíciles **controlando el terreno** (Blade Barrier mítica como acción inmediata, Wall of Stone, Hold Person, Greater Command, Silence) y **poniendo cuerpos en el campo** (Summon Monster V/VI como **acción estándar** gracias a **Sacred Summons**: bralanis y lillends, que además flanquean y curan por su cuenta), mientras **cura con la acción de movimiento** (Quick Channel 8d6 +4 con Mythic Selective Channeling) y reserva Heal / Mythic Heal / Breath of Life para el momento en que el combate se decide.
- **Por qué Milani y no Sarenrae:** el aura de un clérigo es la del alineamiento de su deidad ([AoN] Cleric, CRB pg. 38) y **Sacred Summons exige que los subtipos de alineamiento del invocado coincidan EXACTAMENTE con el aura** ([AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Sacred%20Summons — UM pg. 155). Con aura *chaotic good* la lista básica de Summon Monster ya trae **bralani azata (SM V)** y **lillend azata (SM VI)** ([AoN] https://www.aonprd.com/SpellDisplay.aspx?ItemName=Summon%20Monster%205 y ...%206 — CRB pg. 352): no hace falta gastar una dote en Summon Good Monster. Con Sarenrae (aura *good* a secas) solo los agathiones califican y hay que comprar la dote. Además Milani concede **Healing**, y sus clérigos pueden preparar **Good Hope como conjuro de 3.º** (+2 moral a ataques, daño, salvaciones y habilidades para hasta 11 aliados durante 11 minutos) ([AoN] https://www.aonprd.com/DeityDisplay.aspx?ItemName=Milani — ISF pg. 71/74), que reemplaza con ventaja el Aura of Heroism del subdominio Heroism de Sarenrae.
- **Raza humana** (+2 Wis, dote extra, +11 rangos): la dote extra paga la "tasa" de Spell Focus (conjuration) → Augment Summoning sin sacrificar el núcleo sanador (Selective Channeling, Quick Channel, Extra Channel, Reactive Healing).
- **Números a nivel 11 / tier 3:** Wis 27 (+8) · conjuros por día 4 / 7 / 7 / 7 / 6 / 4 / 3 · DC 18-24 · channel 8d6 (con Phylactery) +4 por Mythic Selective Channeling, 7 usos, DC 17, excluye 2 (3 con 1 poder mítico) · pg 109 · CA 23 / 25 con Magic Vestment ×2 / 27 con Shield of Faith · Fort +14 / Ref +8 / Will +19 (+2 más vs charm/compulsion) · iniciativa +7 · concentración +21 · poder mítico 9/día · Surge 1d6 · Hard to Kill: muerte a −32.
- **Asalto típico de combate difícil:** estándar **Summon Monster V** (bralani aparece y actúa ya, flanqueando) o **Blessing of Fervor** · movimiento **Quick Channel** (8d6+4 a los 4 cuerpo a cuerpo y a los invocados) · inmediata en reserva: **Mythic Blade Barrier** (11d8, Ref DC 24 mitad) para cortar una carga o encerrar refuerzos, o **Reactive Healing** si nos bajan a 0.

---

## 1. Raza: Humano (CRB) — rasgos raciales de serie

[AoN] https://www.aonprd.com/RacesDisplay.aspx?ItemName=Human — CRB pg. 27; rasgos alternativos ARG pg. 72-73.

| Rasgo racial | Texto (AoN) | Qué nos da |
|---|---|---|
| +2 a una característica | "+2 to one ability score" → **Wisdom** | Wis 17 → 19 |
| **Bonus Feat** | "Humans select one extra feat at 1st level." | **7 dotes en total** (6 de nivel + 1): paga Spell Focus (conjuration) |
| **Skilled** | "1 additional skill rank at 1st level and 1 additional rank whenever they gain a level." | +11 rangos: Perception 11, Knowledge (planes) 5 y Sense Motive sin sacrificar Heal/Spellcraft |
| Velocidad 30 pies, tamaño Mediano, Común + idioma étnico | — | — |
| Clase predilecta (Cleric) | Elegimos **+1 pg por nivel** (+11). El FCB específico de humano ("+1 on caster level checks made to overcome the spell resistance of outsiders", ARG pg. 73) es marginal | 109 pg |

**Rasgos alternativos evaluados y descartados:** Dual Talent (+2 Wis/+2 Con pero pierde la dote y Skilled: la dote vale más aquí), Awareness (Inner Sea Races pg. 213: +1 a todas las salvaciones y concentración a cambio de la dote — la mejor alternativa defensiva si el GM veta Augment Summoning), Focused Study, Heroic (2 Hero Points por nivel futuro: nada al crearse a nivel 11).

**Alternativas de raza (1-2 por elección):**
1. **Aasimar** (ARG pg. 84): +2 Wis/+2 Cha, darkvision, resistencias 5, Skilled (+2 Perception/Diplomacy). Pierde la 7.ª dote → hay que soltar Reactive Healing (secuencia: 1 Selective · 3 Spell Focus (conj) · 5 Quick Channel · 7 Augment Summoning · 9 Sacred Summons · 11 Extra Channel). Compra: Str 10 / Dex 14 (5) / Con 14 (5) / Int 10 / Wis 17 (13) / Cha 12 (2) = 25 → Wis 19 / Cha 14 / Dex 14 (+1 CA/Ref/iniciativa respecto al humano).
2. **Half-Elf** (CRB pg. 24; ARG pg. 42): +2 Wis; rasgo alternativo **Dual Minded** (+2 Will); FCB de clérigo "+1/3 to the amount of damage dealt or damage healed when the cleric uses channel energy" (ARG pg. 42) → +3 por channel a nivel 11. Sin dote extra: misma pérdida que el aasimar.

---

## 2. Deidad y alineamiento: Milani (CG), clérigo CG

[AoN] https://www.aonprd.com/DeityDisplay.aspx?ItemName=Milani — Inner Sea Faiths pg. 71 (AoN cita ISF como fuente de la entrada; es una de las deidades menores canónicas de Golarion, no una creación de AP).

- **Alineamiento CG** · **Dominios:** Chaos, Good, **Healing**, Liberation, Protection · **Subdominios:** Azata (Chaos), Azata (Good), Defense, Freedom, Purity, Restoration, Revolution, Riot · **Arma predilecta:** morningstar (simple: no cambia nuestras competencias) · **Clérigos:** NG, CG, CN (a un paso de CG — [AoN] Cleric, CRB pg. 38).
- **Aura (Ex):** "A cleric of a chaotic, evil, good, or lawful deity has a particularly powerful aura corresponding to the deity's alignment" ([AoN] https://www.aonprd.com/ClassDisplay.aspx?ItemName=Cleric — CRB pg. 38) → nuestra aura es **chaotic + good**; a nivel 11 es *overwhelming*. Es la llave de Sacred Summons (sección 6).
- **Unique Spell Rules (ISF pg. 74):** "Cleric/Warpriest: Coordinated Effort can be prepared as a 3rd-level spell; **Good Hope can be prepared as a 3rd-level spell**". Good Hope ([AoN] https://www.aonprd.com/SpellDisplay.aspx?ItemName=Good%20Hope — CRB pg. 291; bard 3): "Each affected creature gains a +2 morale bonus on saving throws, attack rolls, ability checks, skill checks, and weapon damage rolls"; medium (210 pies), **11 criaturas vivas** a ≤ 30 pies entre sí, **11 minutos**; mind-affecting/emotion. ⚠️ Regla de un Campaign Setting: permiso del GM (sección 16).
- **Unique Summon Rules (Pathfinder #68 pg. 69):** "Summon Monster I: Great Horned Owl; **Summon Monster IV: Hound Archon – CG**". ⚠️ Regla de un AP: si el GM la admite, un hound archon CG (RD 10/evil, *aid* a voluntad, *magic circle against evil* constante) entra en la lista de SM IV como acción estándar; **no** contamos con ella en la build base.
- **Obediencia** (Deific Obedience, no la tomamos): +2 sagrado vs charm/compulsion y +2 a las pruebas para disiparlos en otros.
- **Consecuencias de ser CG:** no podemos lanzar conjuros [lawful] (Order's Wrath, Archon's Aura, Magic Circle against Chaos) ni [evil]; sí [chaotic] (Chaos Hammer) y [good] (Holy Smite). Invocar un bralani o lillend convierte el conjuro en [chaotic, good]: legal. Invocar arcontes [lawful, good] sería un conjuro [lawful]: **prohibido** para nosotros ([AoN] Cleric, CRB pg. 38: "can't cast spells of an alignment opposed to her own or her deity's"). Energía positiva y cure espontáneos garantizados (clérigo bueno).
- **Rasgos de religión de Milani en AoN:** Split-Second Defense (ISG pg. 222: 1/día, inmediata, un flanqueador pierde el bono de flanqueo contra vos) y Talented Organizer. No los usamos (Birthmark rinde más), pero Split-Second Defense es el sustituto legal si el GM veta el drawback.

**Alternativas de deidad:**
1. **Sarenrae (NG)** — ISG pg. 132 — Healing + Glory (Heroism): Aura of Heroism (rápida, +2 moral 11 asaltos/día) y rasgo Envoy of Healing; pero el aura *good* a secas obliga a comprar **Summon Good Monster** ([AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Summon%20Good%20Monster — Champions of Purity pg. 33) para tener algo que invocar con Sacred Summons: **vulpinal agathion (SM V)**, silvanshee (SM III), 1d3 vulpinales (SM VI). Cuesta una dote más (se pierde Reactive Healing o Extra Channel) y el vulpinal (CR 6, 59 pg, CA 22, lay on hands 3d6 6/día) es peor bloqueador que el bralani. Es la opción si el GM no permite Inner Sea Faiths.
2. **Osiris (LG)** — [AoN] https://www.aonprd.com/DeityDisplay.aspx?ItemName=Osiris — Pathfinder #80 pg. 65 — Good, Healing, Law, Plant, Repose; subdominios Archon (Good/Law), Restoration, Resurrection, Souls…: Healing + **Good/Archon** (Aura of Menace: enemigos a 30 pies −2 CA/ataques/salvaciones, 11 asaltos/día) y Sacred Summons sobre **hound archons** (SM IV base; 1d3 con SM V; **1d4+1 con SM VI**, cada uno con RD 10/evil y *aid* a voluntad). Mecánicamente es la mejor "muralla" del juego a este nivel, pero es una deidad de Adventure Path (permiso), pierde Blade Barrier como conjuro de dominio y Good Hope.

---

## 3. Dominios: Healing (base) + Good (base)

Reglas: dos dominios de la deidad; una ranura de dominio por nivel de conjuro (1.º-6.º); las ranuras de dominio **no** se convierten en cure; "Unless otherwise noted, activating a domain power is a standard action" ([AoN] Cleric — CRB pg. 38; https://www.aonprd.com/ClericDomains.aspx — UM pg. 30). Good exige alineamiento bueno: CG ✓.

### 3.1 Healing — [AoN] https://www.aonprd.com/DomainDisplay.aspx?ItemName=Healing — CRB pg. 44
- **Rebuke Death (Sp):** toque, estándar, **1d4+5** solo a criaturas bajo 0 pg, 3 + Wis = **11/día**. Recurso de última hora (cuesta la estándar).
- **Healer's Blessing (Su), nivel 6:** todos nuestros conjuros con "cure" en el nombre valen ×1,5 (no se acumula con Empower; no afecta a Heal, Breath of Life ni channel — corrección del auditor del dossier). CSW espontáneo 36,75; CCW 43,5; Mass CLW 23,25 c/u; Mass CMW 30 c/u; Mythic CCW 87.
- **Conjuros de dominio:** 1 CLW · 2 CMW · 3 CSW · 4 CCW · **5 Breath of Life** · **6 Heal** · 7 Regenerate. En esta build la ranura de dominio de **5.º es siempre Breath of Life**; la de **6.º va a Blade Barrier (Good)** los días de combate y a Heal los días tranquilos.

### 3.2 Good — [AoN] https://www.aonprd.com/DomainDisplay.aspx?ItemName=Good — CRB pg. 44
- **Touch of Good (Sp):** toque, estándar, +5 sagrado (½ nivel) a ataques, habilidades, características y salvaciones **1 asalto**, 11/día. Mala economía; solo cuando sobra la estándar (p. ej. sobre el DPS antes de su salvación clave).
- **Holy Lance (Su), nivel 8:** el arma tocada gana la propiedad *holy* (+2d6 vs malvados) 5 asaltos (½ nivel); **1/día** a nivel 11 (+1 uso por cada 4 niveles más allá de 8.º → 2 usos a nivel 12).
- **Conjuros de dominio:** 1 protection from evil · 2 align weapon · **3 magic circle against evil** · **4 holy smite** · 5 dispel evil · **6 blade barrier** · 7 holy word · 8 holy aura · 9 summon monster IX (solo bueno).
- **Por qué Good y no otro:** a nivel 11 tenemos **3 ranuras de 6.º** (1 base + 1 dominio + 1 por Wis 26+). Con Blade Barrier en la ranura de dominio, las dos normales quedan para **Heal ×2**; con Healing en el dominio (Heal) habría que preparar Blade Barrier en una normal: mismo total, pero **Good añade** Magic Circle against Evil (3.º: *protection from evil* de 10 pies de radio 110 min alrededor del tanque: bloquea el contacto de invocados malvados y da nueva salvación contra dominación de fuentes malvadas), Holy Smite (4.º: área segura para un grupo bueno) y Dispel Evil (5.º: "automatically dispel any one enchantment spell cast by an evil creature"). Todo son ranuras "gratis" que apuntan al rol de control.

**Subdominios de Milani evaluados:** Azata (Good) reemplaza Touch of Good por Elysium's Call (reroll de salvaciones fallidas contra encantamientos, +2 sagrado) pero cambia los conjuros 1/3/6 por expeditious retreat / fly / planar ally: **pierde blade barrier**, descartado. Restoration y Resurrection: descartados (ver dossier §3.2). Freedom/Revolution/Riot: no aportan al concepto.

**Alternativas de segundo dominio:**
1. **Liberation** (CRB pg. 45 — [AoN] https://www.aonprd.com/DomainDisplay.aspx?ItemName=Liberation): Liberation (Su) = *freedom of movement* propio automático 11 asaltos/día; **Freedom's Call (Su)** a 8.º: aura de 30 pies, "Allies within this aura are not affected by the confused, grappled, frightened, panicked, paralyzed, pinned, or shaken conditions" (suprime; 11 asaltos/día, activación estándar por defecto). Conjuros: 1 remove fear · 2 remove paralysis · 3 remove curse · **4 freedom of movement** · 5 break enchantment · **6 greater dispel magic**. Es la elección si la campaña está llena de agarradores, ghouls y aullidos; pierde Blade Barrier/Magic Circle de dominio.
2. **Protection** (CRB pg. 46): +3 resistencia (no se acumula con la capa), Aura of Protection a 8.º (+1 desvío y resistencia 5 a toda energía para los aliados, 11 asaltos). Solo contra campañas de alientos y bolas de fuego.

---

## 4. Arquetipo: NINGUNO (clérigo base) — justificación

- **Herald Caller** (Monster Summoner's Handbook pg. 7 — [AoN] https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Cleric%20Herald%20Caller) es "el arquetipo invocador", pero **pierde un dominio, la armadura media y los escudos** (−5 CA con nuestra lista de equipo) y sus cure espontáneos quedan en zona gris (⚠️ RAW los conserva; muchos GMs no). Con "supervivencia propia" entre las prioridades y un solo sanador en el grupo, es inaceptable. Todo lo que hace Call Heralds (SM espontáneo, Augment Summoning gratis a 4.º, Superior Summoning a 8.º) lo cubrimos con la 7.ª dote humana, Sacred Summons y **Mighty Summons** (tier 2).
- Merciful Healer, Angelfire Apostle, Ecclesitheurge, Evangelist: descartados por los motivos del dossier §4 (pierden dominio, ranuras, armadura o cure espontáneos). Ningún arquetipo de Cleric de los 35 indexados en [AoN] https://www.aonprd.com/Archetypes.aspx?Class=Cleric mejora a la vez control, invocación y curación sin recortar lo que el jugador pidió proteger.
- Regla de apilamiento y "alters" por si el GM propone algo: [AoN] https://www.aonprd.com/Rules.aspx?ID=440 — APG pg. 72.

---

## 5. Atributos: compra por puntos 25 (desglose)

Tabla de costos [AoN] https://aonprd.com/Rules.aspx?ID=90 — CRB pg. 15-16 (7: −4 · 8: −2 · 9: −1 · 10: 0 · 11: 1 · 12: 2 · 13: 3 · 14: 5 · 15: 7 · 16: 10 · 17: 13 · 18: 17). Mejoras +1 a niveles 4 y 8 ([AoN] https://www.aonprd.com/Rules.aspx?ID=85 — CRB pg. 30). +2 mítico a tier 2 ([AoN] https://www.aonprd.com/Rules.aspx?ID=1618 — MA pg. 12). Objetos: enhancement, cuentan tras 24 h ([AoN] https://aonprd.com/Rules.aspx?ID=415 — CRB pg. 554).

| Atributo | Comprado (costo) | Humano | Niveles 4 / 8 | Tier 2 | Objeto | **Final (mod.)** |
|---|---|---|---|---|---|---|
| Str | 10 (0) | 10 | | | | **10 (+0)** — carga ligera 33 lb (breastplate 15 + escudo 5 + morningstar 6 + haversack 5 = 31 ✓) |
| Dex | 12 (2) | 12 | | | | **12 (+1)** |
| Con | 14 (5) | 14 | | | Belt +2 | **16 (+3)** |
| Int | 10 (0) | 10 | | | | **10 (+0)** |
| Wis | 17 (13) | **19** | 20 → 21 | **23** | Headband +4 | **27 (+8)** |
| Cha | 14 (5) | 14 | | | | **14 (+2)** — 5 usos de channel (7 con Extra Channel), excluye 2 |
| **Total** | **0 + 2 + 5 + 0 + 13 + 5 = 25** ✓ | | | | | |

- **Por qué Cha 14 y Dex 12 (y no Dex 14 / Cha 12 como el aasimar del dossier):** el humano no tiene +2 Cha; Selective Channeling exige **Cha 13** ([AoN] https://www.aonprd.com/FeatDisplay.aspx?ItemName=Selective%20Channeling — CRB pg. 132) y Cha 14 da el 5.º uso y el 2.º excluido. Los 3 puntos salen de Dex (−1 CA / −1 Reflejos / −1 iniciativa). Con muros, invocados por delante y Faith's Reach a 30 pies, la CA del clérigo importa menos que en la build de "reach healer".
- **Alternativa:** Str 11 (1) / Dex 14 (5) / Con 13 (3) / Int 10 (0) / Wis 17 (13) / Cha 13 (3) = 25 → Cha 13 (4 usos, excluye 1), Con 13 → 15 con cinturón (+2: −11 pg, −1 Fort). Solo si el jugador prefiere CA a channels; no la recomendamos.
- **Puntos de golpe:** 8 (máx. a nivel 1) + 10 × 4,5 = 53; + 11 × 3 (Con 16) = 86; + 11 (clase predilecta) = 97; + 12 (Hierophant +4/tier) = **109**. ⚠️ Método de pg por nivel según el GM (promedio 5 "PFS" → 114). Sin Toughness (ver dotes); con Righteous Might activo +22.
- **Wis 27 → conjuros por día** (base + dominio + Wis): **4 / 7 / 7 / 7 / 6 / 4 / 3** (tabla del dossier §1.6; corrección del auditor: 4.º base es 3+1). DC = 10 + nivel + 8: **18 / 19 / 20 / 21 / 22 / 23 / 24** (0.º-6.º); +1 en conjuros de conjuración con salvación (Spell Focus).

---

## 6. Dotes por nivel (6 + 1 humana) — prerrequisitos verificados

Dotes en niveles 1, 3, 5, 7, 9, 11 ([AoN] https://aonprd.com/Rules.aspx?ID=85 — CRB pg. 30, Table 3-1) + humano a 1.º. Hero Points **no** dan la dote de Antihero (elegido Hero Points).

| Nivel | Dote | Fuente / URL | Prerrequisitos (verificados) | Qué hace en esta build |
|---|---|---|---|---|
| 1 | **Selective Channeling** | CRB pg. 132 — https://www.aonprd.com/FeatDisplay.aspx?ItemName=Selective%20Channeling | Cha 13 ✓ (14), channel energy ✓ | Excluye hasta 2 criaturas (mod. Cha) del estallido; FAQ jul-2011: hay que **ver o tocar** al excluido. Imprescindible con 4 cuerpo a cuerpo trabados con el enemigo. |
| 1 (humano) | **Spell Focus (conjuration)** | CRB pg. 134 — https://www.aonprd.com/FeatDisplay.aspx?ItemName=Spell%20Focus | — | +1 DC a conjuración (Plane Shift, Wall of Stone para no quedar atrapado). Es la **tasa** de Augment Summoning; lo asumimos con la dote gratis del humano. |
| 3 | **Augment Summoning** | CRB pg. 118 — https://www.aonprd.com/FeatDisplay.aspx?ItemName=Augment%20Summoning | Spell Focus (conjuration) ✓ | "Each creature you conjure with any summon spell gains a +4 enhancement bonus to Strength and Constitution for the duration". Bralani: 66 → **80 pg**, +15/+10 al ataque; lillend 73 → **87 pg**. Aplica también a Spiritual Ally? **No** (no es "summon spell"). |
| 5 | **Quick Channel** | UM pg. 154 — https://www.aonprd.com/FeatDisplay.aspx?ItemName=Quick%20Channel | Knowledge (religion) **5 rangos** ✓ (a nivel 5 el máximo por rango es 5), channel energy ✓ | Canalizar como **acción de movimiento** (no rápida) gastando 2 usos. El motor de curación de la build: la estándar queda para invocar/controlar. |
| 7 | **Sacred Summons** | UM pg. 155 — https://www.aonprd.com/FeatDisplay.aspx?ItemName=Sacred%20Summons | "Aura class feature, ability to cast summon monster" ✓ | "When using summon monster to summon creatures whose alignment subtype or subtypes exactly match your aura, you may cast the spell as a standard action instead of with a casting time of 1 round." Aura CG → **bralani (SM V) y lillend (SM VI)** [chaotic, good]. Y el invocado "acts immediately, on your turn" ([AoN] https://www.aonprd.com/SpellDisplay.aspx?ItemName=Summon%20Monster%201 — CRB pg. 350): aparece **y actúa** en nuestro turno. |
| 9 | **Extra Channel** | CRB pg. 123 — https://www.aonprd.com/FeatDisplay.aspx?ItemName=Extra%20Channel | channel energy ✓ | +2 usos (5 → **7**). Una sola vez (sin cláusula de repetición; FAQ 2011 "exactly two extra uses"). |
| 11 | **Reactive Healing** | ACG pg. 155 — https://www.aonprd.com/FeatDisplay.aspx?ItemName=Reactive%20Healing | Quick Channel ✓ (o Quicken Spell), channel energy ✓ | "When the damage from an attack or an effect would reduce you to 0 or fewer hit points, you can expend one use of channel energy… as an immediate action to heal yourself." 8d6 (28) para no caer: el seguro de vida del único sanador. |

**Alternativas para la plaza de nivel 11** (según lo que el GM confirme en la sección 16): **Toughness** (+11 pg; Mythic Toughness a tier 5), **Divine Interference** (UM pg. 149; CL 10 ✓: inmediata, un enemigo repite el ataque que acertó a un aliado con −N sacrificando un conjuro de nivel N), **Superior Summoning** (UM pg. 157: +1 criatura cuando se invocan varias; solo rinde con SM VI → 1d3+2 bralanis con Mighty Summons), **Summon Good Monster** (lyrakien azata en SM III como estándar; Diehard a los invocados). Con la secuencia (A) nivel 13 → Superior Summoning o Divine Interference.

**Variante "invocador ligero" (si el GM veta Augment Summoning o el jugador prefiere blindaje):** 1 Selective Channeling · 1h Toughness · 3 Quick Channel (Kn religion 3 rangos ✗ → cambiar por Extra Channel a 3.º y Quick Channel a 5.º) · 7 Sacred Summons · 9 Reactive Healing · 11 Divine Interference. Los bralanis siguen llegando como estándar, sin +4/+4.

**Descartados con motivo:** Empower/Maximize (no se acumulan con Healer's Blessing y a nivel 11 no entran en ranura), Reach Spell (Faith's Reach), Channeled Revival (Relentless Healing), Combat Casting (nos mantenemos a 30 pies detrás de muros e invocados; Focused Mind cubre el resto), Healer's Hands (Campaign Setting + rangos), Spell Focus (evocation) para Blade Barrier (+1 DC no vale una dote frente al núcleo), Improved Initiative (Reactionary + Amazing Initiative + ioun stone), Evolved Summoned Monster, Leadership (vetada casi siempre). 🚫 **Sacred Geometry** (baneada). 🚫 "Mythic Sacred Summons", "Mythic Extra Channel", "Mythic Quick Channel": no existen en AoN.

---

## 7. Rasgos (3) + drawback (1)

Reglas: dos rasgos de listas distintas; "If you choose to take a drawback, you can take a third trait" ([AoN] https://www.aonprd.com/Rules.aspx?ID=1222 — UCam pg. 8; https://www.aonprd.com/Rules.aspx?ID=450 — APG pg. 326). Los bonos de rasgo no se acumulan entre sí.

| Rasgo | Lista | Fuente / URL | Efecto | Por qué |
|---|---|---|---|---|
| **Reactionary** | Combat | UCam pg. 53 / APG pg. 328 — https://www.aonprd.com/TraitDisplay.aspx?ItemName=Reactionary | +2 rasgo a iniciativa | Iniciativa +1 (Dex) +2 +3 (Amazing Initiative) = **+6** (+7 con ioun stone). El invocador que actúa primero pone el muro **antes** de la carga enemiga. |
| **Focused Mind** | Magic | UCam pg. 57 / APG pg. 329 — https://www.aonprd.com/TraitDisplay.aspx?ItemName=Focused%20Mind | +2 rasgo a concentración | Concentración **+21**: Summon Monster V a la defensiva (DC 25) con 4+ (85 %); Heal (DC 27) con 6+ (75 %). |
| **Birthmark** | Faith | UCam pg. 54 / APG pg. 328 — https://www.aonprd.com/TraitDisplay.aspx?ItemName=Birthmark | Foco divino incorporado (conjuros) y **+2 rasgo a salvaciones vs charm/compulsion** | Will +19 → **+21** contra Dominate: un invocador dominado vuelve sus bralanis contra el grupo. |
| **Drawback: Scarred** | Drawback | Antihero's Handbook pg. 6 — https://www.aonprd.com/TraitDisplay.aspx?ItemName=Scarred | −5 Disguise, −2 Bluff | Costo ≈ 0 para este personaje. ⚠️ Player Companion: alternativa "honesta" **Provincial** (UCam pg. 65: −2 Diplomacy y Sense Motive vs otra fe/alineamiento). |

Otros candidatos: **Blessed Touch** (Faith, Champions of Purity pg. 7: +1 por channel o cure) si el GM veta Birthmark; **Seeker** (Social, UCam pg. 61: Perception de clase, +1); **Split-Second Defense** (Religion, Milani). Ningún rasgo de campaña. Envoy of Healing es solo de Sarenrae: no aplica.

---

## 8. Mítico: Hierophant tier 3 (exacto)

Fuentes: [AoN] https://www.aonprd.com/Rules.aspx?ID=1618 (Base Mythic Abilities, Table 1-1 — MA pg. 12); https://www.aonprd.com/MythicPaths.aspx?Path=Hierophant (MA pg. 32); https://www.aonprd.com/PathAbilities.aspx?Path=Hierophant (MA pg. 32-37); https://www.aonprd.com/PathAbilities.aspx?Path=Universal (MA pg. 50-51); dotes https://www.aonprd.com/Feats.aspx?Category=Mythic; conjuros https://www.aonprd.com/Spells.aspx?Class=Mythic.

### 8.1 Lo que da tier 3 de base
- **Hard to Kill:** bajo 0 pg nos estabilizamos sin tirada; morimos a −2 × Con = **−32**.
- **Mythic Power:** **9 usos/día** (3 + 2 × tier). **Surge 1d6** (inmediata, +1d6 a un d20 propio tras ver el resultado).
- **Divine Surge → Inspired Spell** (tier 1, elección irreversible): estándar + 1 uso → "cast any one divine spell without expending a prepared spell or spell slot… must have a casting time of '1 standard action' (or less)… you treat your caster level as 2 levels higher". Heal 130, Mythic Heal 195 (2 usos), BoL 5d8+13, Death Ward / Freedom of Movement / Dispel sin prepararlos. ⚠️ **Summon Monster NO se puede lanzar con Inspired Spell**: su tiempo de lanzamiento impreso es "1 round"; Sacred Summons cambia cómo lo lanzamos, no el tiempo de la entrada (sección 16). Alternativa excluyente **Recalled Blessing**: relanzar un conjuro "prepared today" sin metamagia, con salvaciones dobles (peor resultado) para no míticos — para un controlador es tentadora (Blade Barrier / Greater Command con dos tiradas; volver a lanzar el SM V preparado) pero ⚠️ depende de que el GM lea "prepared today" como "aunque ya lo hayas lanzado"; elegimos Inspired Spell por seguridad y porque descomprime la curación (BoL/Heal sin prepararlos).
- **Amazing Initiative (tier 2):** +3 iniciativa; 1 uso → una acción estándar extra "that can't be used to cast a spell" → **un channel más** (Su) o activar Touch of Good/Holy Lance (⚠️ Sp: zona gris) o beber una poción.
- **Recuperation (tier 3):** 1 uso + 1 h → ½ pg y "class features limited to a certain number of uses per day (such as… spells per day)": re-preparar conjuros y recuperar los 7 channels a mitad del día. No recarga poder mítico.
- **+2 característica (tier 2): Wis** (21 → 23). **+4 pg por tier** (+12).
- **Nivel efectivo** para encuentros: 11 + ½ tier = 12 (MA pg. 128).

### 8.2 Habilidades de senda (3)

| Tier | Path ability | Texto (AoN) | Aplicación |
|---|---|---|---|
| 1 | **Faith's Reach (Su)** (MA pg. 34) | "Whenever you cast a divine spell with a range of touch, you can instead cast the spell with a range of 30 feet. If the spell normally requires a melee touch attack, it instead requires a ranged touch attack." | Heal, Breath of Life, cure X, Restoration, Death Ward, FoM, Magic Circle a **30 pies**: el clérigo se queda detrás del muro y de los invocados. ⚠️ Toque a distancia sobre aliados dispuestos: lectura mayoritaria = automático (sección 16). |
| 2 | **Mighty Summons (Su)** (MA pg. 34) | "Each creature you conjure with any summon spell gains DR 5/epic for the duration of the summoning. If you cast a summon spell to summon more than one creature, you summon one additional creature of the same type. If you cast a summon spell to summon just one creature, you can expend one use of mythic power to give it the agile or savage mythic simple template (see page 224)." | Todos nuestros invocados tienen **suelo de RD 5/epic** (contra armas de hierro frío o malvadas, que atraviesan la RD 10 del bralani, sigue aplicando la 5/epic: las RD no se suman, se usa la mejor en cada caso — [AoN] https://www.aonprd.com/UMR.aspx?ItemName=Damage%20Reduction). SM VI → **1d3+1 bralanis** (2-4). Un solo bralani + 1 uso → plantilla **agile** (Init +20, +2 esquiva, evasión, +30 pies, **dual initiative**: actúa dos veces por asalto) o **savage** (+2 armadura natural, pg míticos extra, RD 5/epic y resistencia 10 a toda energía, bleed 1, feral savagery) — [AoN] https://www.aonprd.com/Rules.aspx?ID=1667 — MA pg. 224. |
| 3 | **Relentless Healing (Su)** (MA pg. 35) | "If a creature has died within 1 round, as a free action you can expend one use of mythic power to apply healing magic to that creature… If this healing brings the creature's hit points above the threshold for death, it comes back to life and stabilizes…" | **Heal (110) + Relentless Healing** a 30 pies revive a un tanque muerto a −45 (−45 + 110 = 65) sin depender de la ranura de BoL ni de la lectura del umbral (sección 16). También sirve con channel (8d6) o CCW. |

**Por qué no Abundant Healing (tier 3):** exige que los aliados estén **adyacentes a nosotros**; en esta build el clérigo se coloca 25-30 pies detrás de la línea, con los invocados delante: casi nunca hay adyacencia. Queda como cuarta habilidad (tier 4) si la mesa de juego se juega apiñada. **Divine Guardian** (tier 1: asalto completo + 1 uso → SM I; 2 usos → SM III) es pobre a tier 3 frente a Sacred Summons. **Mythic Domain** vale poco con Good (Holy Lance 2/día como nivel 15). **Divine Metamastery** (tier 3) exige conocer dotes de metamagia: no tenemos.

### 8.3 Dotes míticas (2: tier 1 y tier 3)

| Tier | Dote mítica | Fuente / URL | Prerreq. | Efecto |
|---|---|---|---|---|
| 1 | **Mythic Spell Lore** | MA pg. 70 — https://www.aonprd.com/FeatDisplay.aspx?ItemName=Mythic%20Spell%20Lore | lanzar conjuros ✓ | Conocemos **3** conjuros míticos (= tier); +1 por tier ganado. Elegidos en 8.4. |
| 3 | **Mythic Selective Channeling** | MA pg. 72 — https://www.aonprd.com/FeatDisplay.aspx?ItemName=Selective%20Channeling (sección Mythic) | Selective Channeling ✓ | "When you channel energy, the damage you heal or deal increases by a number of points equal to twice the number of targets you excluded from your channeled energy. You can expend one use of mythic power to increase the number of targets you exclude from your channeled energy by half your tier." Excluyendo 2 enemigos → **+4 pg a CADA curado** (4 cuerpo a cuerpo + 2-4 invocados + apoyo = +28-36 pg por channel); 1 uso → excluye 3 (+6). ⚠️ Cuenta solo criaturas realmente excluidas del estallido (sección 16). |

**Alternativas para tier 3:** **Extra Path Ability** (MA pg. 65) → Abundant Healing (si se juega apiñado) o Enduring Blessing (FoM 24 h en el DPS); **Mythic Augment Summoning** (MA pg. 60 — https://www.aonprd.com/FeatDisplay.aspx?ItemName=Augment%20Summoning: los invocados cuentan como míticos de tier 1 y **su RD pasa a /epic** → bralani RD 10/epic) — es la mejor si el GM juega enemigos con armas de hierro frío/malvadas; a tier 5 la tomamos. 🚫 No existen Mythic Sacred Summons ni Mythic Extra Channel.

### 8.4 Conjuros míticos (Mythic Spell Lore, 3)

Regla: se lanza la versión normal preparada (o espontánea) gastando 1 uso; misma ranura, mismo tiempo; "Augmented" cuesta el total indicado y exige el tier entre paréntesis ([AoN] https://www.aonprd.com/Rules.aspx?ID=1608 — MA pg. 78).

| Conjuro | Mítico (MA pg.) | A CL 11 |
|---|---|---|
| **Blade Barrier** | 85 — https://www.aonprd.com/SpellDisplay.aspx?ItemName=Blade%20Barrier | "You may cast this spell as an **immediate action**. The barrier's damage increases to **1d8 per caster level** (maximum 20d8)." → **11d8 (49,5) Ref DC 24 mitad**, fuera de nuestro turno, sin gastar la estándar. **Augmented (3rd)**: 2 usos → moverla 10 pies como acción de movimiento (mover el anillo sobre un enemigo: nueva salvación para evitarlo). |
| **Heal** | 97 | **165** pg (15/CL); Augmented (2 usos): además *restoration* (⚠️ polvo de diamante: GM). |
| **Breath of Life** | 87 | 5d12+11 (43,5 / 71), ventana **2 asaltos**; contra un efecto de muerte con salvación permite repetirla. |

Tier 4 (+1): **Wall of Stone** (MA pg. 112: "1 inch thick per 2 caster levels. The wall's hardness increases to 12" → 5 pulgadas, 75 pg por sección, Str DC 30) o **Prayer** (±2 y cura 6 al lanzar). Verificado en https://www.aonprd.com/Spells.aspx?Class=Mythic: **no existe** versión mítica de Summon Monster, Hold Person, Freedom of Movement, Death Ward ni Greater Command.

### 8.5 Qué agregar a tier 4 y 5 (la campaña sigue)
- **Tier 4** (2 trials): +2 característica → **Wis** (23 → 25; 29 con la diadema: +9, DC +1, ranuras 4/8/7/7/6/5/3); path ability #4 → **Abundant Healing** o **Enduring Blessing**; Surge 1d8; Mythic Spell Lore +1 → Wall of Stone; poder mítico 11/día.
- **Tier 5** (3 trials): 3.ª dote mítica → **Mythic Augment Summoning** (RD 10/epic en los bralanis) o **Extra Path Ability**; path ability #5 → **Overflowing Grace** (quien queda a tope tras un channel gana +1 sagrado 1 min) o **Eldritch Breach**; **Mythic Saving Throws** llega sola. Dual Path (Marshal → Rally) es la alternativa "de grupo".
- **Nivel 12-13 (no mítico):** Wis +1 a 12; dote de 13 → Superior Summoning (1d3+2 bralanis) o Divine Interference; Holy Lance 2/día; SM VI a 2+1 ranuras.

### 8.6 Presupuesto de los 9 poderes míticos (día de dos combates grandes)

| Uso | Coste | Cuándo |
|---|---|---|
| Mythic Blade Barrier (inmediata) | 1 | La carga enemiga del asalto 1 o los refuerzos que entran por la puerta |
| Mythic Heal | 1-2 | Tanque por debajo de 40 pg |
| Inspired Spell | 1-2 | Breath of Life / Death Ward / FoM / tercer Heal no preparados |
| Relentless Healing | 1 | Un aliado murió este asalto |
| Mighty Summons (plantilla agile/savage) | 0-1 | El bralani único del combate del jefe |
| Mythic Selective Channeling (excluir 3) | 0-1 | Tres enemigos mezclados con los nuestros |
| Surge | 1 | Salvación letal propia o concentración de un Heal |
| Recuperation | 1 | Entre combates (1 h) |
| **Total** | **8-9** | Boons del GM (+1 por encuentro) alargan el día |

---

## 9. Conjuros preparados de un día típico (mazmorra / combate esperado)

Ranuras: **4 / 7 / 7 / 7 / 6 / 4 / 3** (0.º-6.º). [D] = ranura de dominio (no convertible). Regla de oro: **nunca se prepara un cure fuera de la ranura de dominio**: cualquier ranura normal se convierte al lanzar en CLW / CMW / CSW / CCW / Mass CLW (5.º) / Mass CMW (6.º) ([AoN] Cleric — CRB pg. 38). Alcances a CL 11: close 50 pies, medium 210, long 840. DC 18-24.

| Nivel | Preparados | Notas |
|---|---|---|
| **0 (4)** | Detect Magic, Guidance, Light, **Stabilize** | Stabilize a 50 pies: estabiliza sin tirada. |
| **1.º (6 + D)** | [D] **Protection from Evil** (Good) · Shield of Faith · Liberating Command · Remove Fear · Protection from Evil · **Obscuring Mist** · **1 vacía** (→ CLW / Sanctuary en 15 min) | Obscuring Mist (CRB pg. 318): niebla de 20 pies, 11 min: "cortina" para retirar a un aliado o cegar arqueros; ojo, también ciega a nuestros cuerpo a cuerpo. |
| **2.º (6 + D)** | [D] **Cure Moderate Wounds** (Healing, comodín) · **Hold Person** · **Silence** · Communal Protection from Evil · Status · Lesser Restoration · **1 vacía** (→ CMW / Remove Paralysis) | Hold Person: 210 pies, 1 humanoide, Will **DC 20**, 11 asaltos, repite cada asalto como asalto completo ([AoN] https://www.aonprd.com/SpellDisplay.aspx?ItemName=Hold%20Person — CRB pg. 296). Silence: 1 asalto de lanzamiento, 840 pies, 20 pies, sin salvación sobre un punto ([AoN] …=Silence — CRB pg. 343). |
| **3.º (6 + D)** | [D] **Magic Circle against Evil** (Good) · **Good Hope ×2** (Milani) · Magic Vestment ×2 · **Prayer** · Dispel Magic | Good Hope: 11 aliados, +2 moral a ataque/daño/salvaciones/habilidades, 11 min (22 con la Rod of Extend lesser). Prayer: 40 pies, 11 asaltos, +1 suerte a los nuestros / −1 a los suyos, sin salvación. |
| **4.º (5 + D)** | [D] **Holy Smite** (Good) · **Blessing of Fervor** · **Freedom of Movement** · **Death Ward** · **Spiritual Ally** · Restoration (con polvo encima) | Holy Smite: 210 pies, 20 pies, 5d8 a malvados (10d6 a ajenos malvados) + ceguera 1 asalto, Will DC 22; los buenos no sufren nada. Spiritual Ally (APG pg. 246 — https://www.aonprd.com/SpellDisplay.aspx?ItemName=Spiritual%20Ally): 210 pies, 11 asaltos, **+16/+11 (1d10+3 fuerza)**, "threatens adjacent squares and can flank and make attacks of opportunity", se mueve 30 pies como **rápida**: el quinto flanqueador cuando no queda ranura de invocación. |
| **5.º (3 + D)** | [D] **Breath of Life** (Healing) · **Summon Monster V** · **Wall of Stone** · **Greater Command** (día de humanoides) / Flame Strike (día de horda) / Righteous Might (día de "nos van a rodear") | SM V = bralani como estándar. Wall of Stone: 11 cuadros de 5 pies, 2 pulgadas (dureza 8, 30 pg/cuadro, Str DC 24), instantáneo, debe apoyarse en piedra ([AoN] https://www.aonprd.com/SpellDisplay.aspx?ItemName=Wall%20of%20Stone — CRB pg. 367). Greater Command: 11 criaturas, 11 asaltos, Will DC 23 cada asalto ([AoN] …=Command%2C%20Greater — CRB pg. 257). |
| **6.º (2 + D)** | [D] **Blade Barrier** (Good) · **Heal** · **Heal** | Día de jefe: Heal + **Summon Monster VI** (lillend o 1d3+1 bralanis) y el segundo Heal sale de Inspired Spell (130). Blade Barrier: 210 pies, muro de 220 pies o anillo de radio ≤ 25 pies, 20 pies de alto, 11 min, 11d6 Ref DC 24 mitad, cobertura +4 CA / +2 Ref ([AoN] https://www.aonprd.com/SpellDisplay.aspx?ItemName=Blade%20Barrier — CRB pg. 249). |

- **Reserva de Inspired Spell** (1 uso cada uno, CL 13): Breath of Life (2.ª copia), Heal (3.º), Communal Resist Energy, Remove Blindness/Deafness, Remove Curse, Air Walk, Plane Shift, Dispel Evil, Antilife Shell (no: 1 asalto), **cualquier control de ≤ 6.º de 1 estándar** (Hold Person extra, Silence no: 1 asalto).
- **Día de viaje / social:** como el dossier §6.9 (b), sustituyendo Heroes' Feast (6.º) por Word of Recall si el día es de "todo o nada".
- **Ranuras muertas al final del día** → Mass CLW / Mass CMW con Healer's Blessing (23,25 / 30 c/u), o un SM V para explorar (bralani en wind form vuela 100 pies).

---

## 10. Equipo (WBL 82.000 po) — cierra en 81.347 po

Reglas: WBL 82.000 ([AoN] https://aonprd.com/Rules.aspx?ID=254 — CRB pg. 399); tope 41.000 por objeto; ranuras ([AoN] https://www.aonprd.com/Rules.aspx?ID=369 — CRB pg. 459): Headband e Ioun Stone no acumulan enhancement; Phylactery y Headband **comparten ranura**; añadir una habilidad a un objeto con ranura +50 % ([AoN] https://www.aonprd.com/Rules.aspx?ID=412 — CRB pg. 553). Precios: varitas nivel × CL × 750; pergaminos nivel × CL × 25 (+ componentes) ([AoN] https://aonprd.com/Rules.aspx?ID=383 y …=381).

### 10.1 Núcleo (48.672 po)

| # | Objeto | Ranura | Precio | Fuente AoN | Por qué |
|---|---|---|---|---|---|
| 1 | **+1 Mithral Breastplate** | armor | 5.200 | https://www.aonprd.com/SpecialMaterials.aspx — UE pg. 51 / CRB pg. 154 | +7 CA, Dex máx. +5, ACP −1, 30 pies, armadura media (competencia OK). |
| 2 | **+1 Darkwood heavy wooden shield** | shield | 1.257 | SpecialMaterials (darkwood) | +3 CA, ACP 0. Soltamos el arma (no el escudo) para los componentes somáticos. |
| 3 | **Headband of Inspired Wisdom +4** | headband | 16.000 | https://www.aonprd.com/MagicWondrousDisplay.aspx?FinalName=Headband+of+Inspired+Wisdom4 — UE pg. 250 | Wis 27: +1 DC, +1 Will, +1 ranura de 4.º. |
| 4 | **Cloak of Resistance +3** | shoulders | 9.000 | https://www.aonprd.com/MagicWondrousDisplay.aspx?FinalName=Cloak+of+Resistance3 — UE pg. 264 | El sanador que falla la salvación no cura. |
| 5 | **Ring of Protection +1** | ring | 2.000 | https://www.aonprd.com/MagicRingsDisplay.aspx?FinalName=Ring+of+Protection1 — UE pg. 172 | Desvío permanente. |
| 6 | **Amulet of Natural Armor +1** | neck | 2.000 | UE pg. 256 | +1 CA acumulable. |
| 7 | **Belt of Mighty Constitution +2** | belt | 4.000 | UE pg. 209 | Con 16: +11 pg, +1 Fort. |
| 8 | **Handy Haversack** | — | 2.000 | https://www.aonprd.com/MagicWondrousDisplay.aspx?FinalName=Handy+Haversack — UE pg. 301 | Pergaminos y varitas como movimiento sin AdO. |
| 9 | **Masterwork morningstar** (arma predilecta de Milani) | mano | 308 | https://www.aonprd.com/EquipmentWeaponsDisplay.aspx?ItemName=Morningstar — UE pg. 16 | 8 + 300. No pegamos: no gastamos en +1. |
| 10 | **Wand of Cure Light Wounds** (CL 1) | — | 750 | https://aonprd.com/Rules.aspx?ID=383 | ≈ 275 pg fuera de combate (2,7 po/pg). |
| 11 | **Pergaminos:** Breath of Life ×2 (1.125 c/u), Restoration (700 + 100), Remove Curse (375), Neutralize Poison (700) | — | 4.125 | https://aonprd.com/Rules.aspx?ID=381 | Emergencias no preparadas (Restoration no entra en Inspired Spell: 3 asaltos). |
| 12 | **Polvo de diamante** 100 ×2 + 1.000 ×1 | — | 1.200 | https://www.aonprd.com/SpellDisplay.aspx?ItemName=Restoration — CRB pg. 334 | Dos Restoration normales y una contra un nivel negativo permanente. |
| 13 | **Holy symbol (tattoo)** 100 + equipo mundano 532 (healer's kit, spell component pouch, símbolo de plata, cleric's kit, everburning torch, silk rope, holy water ×2, antitoxin ×2, antiplague ×2, smelling salts, alchemist's fire ×2) | — | 632 | https://www.aonprd.com/EquipmentMiscDisplay.aspx?ItemName=Holy+symbol+%28tattoo%29 — UE pg. 57 | Foco divino para conjuros **y channel** con escudo en mano. |
| 14 | **Polvo de diamante para Heroic Fortune** 100 ×2 | — | 200 | https://www.aonprd.com/SpellDisplay.aspx?ItemName=Heroic%20Fortune — APG pg. 324 | Un Hero Point temporal (2.º nivel). |
| | **Subtotal núcleo** | | **48.672** | | |

Cuenta: 5.200 + 1.257 = 6.457; + 16.000 = 22.457; + 9.000 = 31.457; + 2.000 = 33.457; + 2.000 = 35.457; + 4.000 = 39.457; + 2.000 = 41.457; + 308 = 41.765; + 750 = 42.515; + 4.125 = 46.640; + 1.200 = 47.840; + 632 = 48.472; + 200 = **48.672**.

### 10.2 Recomendado (32.675 po) → total 81.347 (sobran 653 po en efectivo)

| # | Objeto | Precio | Por qué |
|---|---|---|---|
| 15 | **Phylactery of Positive Channeling añadida a la diadema** (11.000 × 1,5) | 16.500 | Channel **8d6** (+4 con Mythic Selective): 32 de media a cada aliado e invocado por acción de movimiento. ⚠️ Objeto combinado: encargar/craftear (GM). Si no se permite: Pearl of Power 3.º (9.000: un Good Hope más) + Pearl 2.º (4.000: un Hold Person/Silence más) + Ring of Sustenance (2.500). |
| 16 | **Cloak +3 → +4** | 7.000 | Fort +14 / Ref +8 / Will +19. |
| 17 | **Rod of Metamagic, Extend (lesser)** | 3.000 | https://www.aonprd.com/MagicRodsDisplay.aspx?FinalName=Rod+of+Metamagic%2C+Extendlesser — UE pg. 189: 3/día, ≤ 3.º: **Good Hope 22 min**, Magic Vestment 22 h, Prayer 22 asaltos. |
| 18 | **Scroll of Heal** (CL 11) | 1.650 | Cuarto Heal del día sin ranura ni poder mítico (provoca; ⚠️ Faith's Reach sobre pergamino). |
| 19 | **Scroll of Summon Monster V** (CL 9) | 1.125 | Un bralani de reserva (9 asaltos). ⚠️ Desde pergamino el tiempo es 1 asalto salvo que el GM aplique Sacred Summons a la activación (sección 16). |
| 20 | **Pearl of Power (1st)** | 1.000 | https://www.aonprd.com/MagicWondrousDisplay.aspx?FinalName=Pearl+of+Power1st — UE pg. 315: un Protection from Evil / Liberating Command más. |
| 21 | **Wand of Protection from Evil** (CL 1) | 750 | 50 usos de +2/+2 e inmunidad a control mental 1 min. |
| 22 | **Wand of Lesser Restoration** (CL 1, paladín 1) | 750 | Fatiga y 1d4 de característica fuera de combate (⚠️ tiempo de activación: GM). |
| 23 | **Ioun Stone, Dusty Rose Prism (cracked)** | 500 | Seekers of Secrets pg. 46: +1 competencia a iniciativa → **+7**. ⚠️ Campaign Setting. |
| 24 | **Scroll of Gentle Repose** (CL 3) | 150 | +3 días para el diamante de Raise Dead. |
| 25 | **Ungüento para True Seeing** (250 po) | 250 | Para el asesino invisible conocido (True Seeing vía Inspired Spell). |
| | **Subtotal** | **32.675** | |

Cuenta: 16.500 + 7.000 = 23.500; + 3.000 = 26.500; + 1.650 = 28.150; + 1.125 = 29.275; + 1.000 = 30.275; + 750 = 31.025; + 750 = 31.775; + 500 = 32.275; + 150 = 32.425; + 250 = **32.675**. **Total 48.672 + 32.675 = 81.347 ≤ 82.000** (objeto más caro: diadema combinada 32.500 < 41.000). Ranuras ocupadas: armor, shield, headband, shoulders, neck, belt, ring ×1. Libres: head, eyes, hands, feet, chest, body, wrist, ring 2.

### 10.3 Lujo (niveles 12-13; WBL 108.000 / 140.000), en orden
1. **Pearl of Power (3rd)** 9.000 (Good Hope/Magic Vestment extra) y **(2nd)** 4.000 (Hold Person/Silence extra).
2. **Rod of Metamagic, Extend (normal)** 11.000: **Summon Monster V a 22 asaltos** y Blessing of Fervor/FoM extendidos, 3/día.
3. **Boots of Speed** 12.000; **Ioun Stone Pale Green Prism (cracked)** 4.000 (+1 competencia a salvaciones).
4. **Lesser Talisman of Life's Breath** 3.500 (OA pg. 263) para el tanque; diamante de 5.000 de Raise Dead del botín común.
5. **Rod of Quicken (lesser)** 35.000 solo a nivel 13+ (Hold Person/CSW como rápida 3/día).
6. Descartados: Ring of Freedom of Movement (40.000; FoM preparado), Rod of Reach (Faith's Reach), varitas de Summon Monster IV (21.000 y sin criaturas CG en la lista IV), 🚫 "Elixir of Life", 🚫 Wand of Infernal Healing ([evil]).

---

## 11. Habilidades (Background Skills activos)

Reglas ([AoN] https://www.aonprd.com/Rules.aspx?ID=1732 a 1744 — Unchained pg. 46-53): +2 rangos de trasfondo por nivel, no modificados por Int, solo en habilidades de trasfondo. Clérigo 2 + Int (0) = 2 por nivel; humano Skilled +1 por nivel. Habilidades de clase del clérigo: Appraise, Craft, Diplomacy, Heal, Knowledge (arcana, history, nobility, planes, religion), Linguistics, Profession, Sense Motive, Spellcraft (Perception **no** es de clase). ACP −1 (solo Str/Dex).

**Rangos de aventura: (2 + 0 + 1) × 11 = 33**

| Habilidad | Rangos | Clase | Característica | Otros | **Total** |
|---|---|---|---|---|---|
| Perception | 11 | no | Wis +8 | — | **+19** (la alarma del grupo; nada de trampas) |
| Knowledge (religion) | 5 | +3 | Int +0 | — | **+8** (prerrequisito de Quick Channel) |
| Knowledge (planes) | 5 | +3 | +0 | — | **+8** (identificar ajenos: DC 10 + CR; y conocer a nuestros propios invocados) |
| Spellcraft | 5 | +3 | +0 | — | **+8** (identificar un conjuro al lanzarse: DC 15 + nivel) |
| Heal | 3 | +3 | Wis +8 | — | **+14** (tomando 10 = 24: Treat Deadly Wounds DC 20 automático) |
| Sense Motive | 4 | +3 | Wis +8 | — | **+15** |
| **Suma** | **33** ✓ | | | | |

**Rangos de trasfondo: 2 × 11 = 22**

| Habilidad | Rangos | Total | Uso |
|---|---|---|---|
| Linguistics | 5 | +8 | Celestial (para hablar con los azatas: tienen truespeech, pero el Celestial ayuda al roleo), Abisal, Infernal, Dracónico, Sylvan |
| Knowledge (history) | 5 | +8 | — |
| Knowledge (nobility) | 2 | +5 | — |
| Profession (herbalist) | 5 | +16 | Hierbas medicinales (Unchained pg. 53) |
| Lore (fe de Milani) | 5 | +8 | Sustituye a Kn (religion) en lo propio de la fe |
| **Suma** | **22** ✓ | | |

Diplomacy/Intimidate/Bluff: 0 rangos (el apoyo social del grupo). Use Magic Device: no (los pergaminos y varitas de la lista son de clérigo).

---

## 12. Números clave a nivel 11 / tier 3

| Bloque | Valor | Cuenta |
|---|---|---|
| **Iniciativa** | **+7** | Dex +1 + Reactionary +2 + Amazing Initiative +3 + ioun stone +1 |
| **CA** | **23** / 25 con Magic Vestment ×2 / **27** con Shield of Faith (+3 desvío reemplaza al anillo) / +4 con cobertura de Blade Barrier | 10 + 7 (armadura) + 3 (escudo) + 1 (Dex) + 1 (desvío) + 1 (natural) |
| **CA de toque / desprevenido** | 12 / 22 | |
| **CMD** | **20** | 10 + 8 (BAB) + 0 (Str) + 1 (Dex) + 1 (desvío) → Freedom of Movement propio los días de agarradores |
| **Pg** | **109** | 53 + 33 + 11 + 12 (⚠️ 114 con promedio 5). Hard to Kill: muerte a −32 |
| **Salvaciones** | Fort **+14** / Ref **+8** / Will **+19** (+21 vs charm/compulsion) | 7 + 3 + 4 / 3 + 1 + 4 / 7 + 8 + 4; Birthmark +2 |
| **BAB / ataque** | +8/+3; morningstar +8/+3 (1d8) | No se usa salvo rematar |
| **Concentración** | **+21** | 11 + 8 + 2; a la defensiva: SM V (DC 25) 85 %, Heal (DC 27) 75 %, Wall of Stone (DC 25) 85 % |
| **CL** | 11 (13 con Inspired Spell) | Dispel: 1d20+11 |
| **Conjuros/día** | 4 / 7 / 7 / 7 / 6 / 4 / 3 | DC 18 / 19 / 20 / 21 / 22 / 23 / 24 (+1 conjuración) |
| **Channel** | **8d6** (28) **+4** (Mythic Selective, excluyendo 2) = **32** de media a cada aliado/invocado; 6d6+4 = 25 sin Phylactery; **7 usos/día**; DC 17 (solo daño a no muertos); estándar o **movimiento** (2 usos) | 1 poder mítico → excluye 3 y +6 |
| **Poder mítico** | 9/día · Surge 1d6 | |
| **Hero Points** | 1 al crearse (+1 historia, +1 retrato si el GM los concede) · máx. 3 | |

**Curación por acción (sin Inspired Spell / con):**

| Acción | Herramienta | Media / máximo |
|---|---|---|
| Estándar, 1 objetivo, 30 pies | **Heal** 110 / Inspired 130 / **Mythic Heal 165** (195) | fija |
| Estándar, 1 objetivo | CCW espontáneo con Healer's Blessing | 43,5 / 64,5 (Mythic CCW 87) |
| Estándar, muerto ≤ 1 asalto | Breath of Life 5d8+11 / Mythic 5d12+11 | 33,5 / 43,5 |
| **Movimiento**, todos a 30 pies | **Quick Channel 8d6+4** (2 usos) | **32 / 52** a cada uno |
| Estándar extra (Amazing Initiative, 1 uso) | channel 8d6+4 | 32 |
| Inmediata (al llegar a 0) | Reactive Healing 8d6 (a vos) | 28 |
| Gratuita (1 uso) | Relentless Healing sobre cualquier cura | revive |
| Sin acción nuestra | **Bralani:** *cure serious wounds* 2/día c/u (3d8+6 = 19,5) · **Lillend:** CSW 2/día (3d8+7), CLW 5/día | 39 por bralani, 41 + 47,5 por lillend |

**Control por acción:**

| Acción | Herramienta | Números |
|---|---|---|
| **Inmediata** (1 uso + ranura 6.º) | **Mythic Blade Barrier** | 11d8 (49,5), Ref DC 24 mitad; muro 220 pies o anillo radio ≤ 25 pies; 11 min; cobertura +4 CA |
| Estándar (6.º) | Blade Barrier | 11d6 (38,5), DC 24 |
| **Estándar (5.º, Sacred Summons)** | **Summon Monster V → bralani** (aparece y actúa ya) | ver 13.2 |
| Estándar (6.º, Sacred Summons) | **Summon Monster VI → lillend** o **1d3+1 bralanis** (Mighty Summons) | |
| Estándar (5.º) | Wall of Stone | 11 cuadros, 2 pulgadas, dureza 8, 30 pg/cuadro, Str DC 24, permanente |
| Estándar (5.º) | Greater Command | 11 criaturas, Will DC 23 cada asalto |
| Estándar (2.º) | Hold Person | 1 humanoide, Will DC 20, 11 asaltos |
| 1 asalto (2.º) | Silence sobre un punto | 20 pies, sin salvación, 11 asaltos |
| Estándar (4.º) | Spiritual Ally | +16/+11, 1d10+3, flanquea y hace AdO, 11 asaltos; se mueve como rápida |
| Estándar (4.º / 3.º) | Blessing of Fervor / Good Hope / Prayer | ataque extra o +2/+2 · +2 moral a todo · ±1 suerte |

**Probabilidades contra el monstruo de referencia** ([AoN] https://aonprd.com/Rules.aspx?ID=1673 — MA pg. 228, Table 6-8): CR 11 = salvación buena +14 / mala +10; CR 13 = +16 / +12. Blade Barrier DC 24: falla 45 % (buena) / 65 % (mala). Greater Command DC 23: 40 % / 60 %. Hold Person DC 20: 25 % / 45 % (y repite cada asalto: es para esbirros y lugartenientes, no para el jefe). Holy Smite DC 22: 35 % / 55 %.

**Los invocados (con Augment Summoning +4 Str/+4 Con; suelo de RD 5/epic por Mighty Summons):**

| Criatura | Fuente | Stats relevantes con Augment Summoning |
|---|---|---|
| **Bralani azata** (SM V; 1d3+1 con SM VI) | B1 pg. 24 — https://www.aonprd.com/MonsterDisplay.aspx?ItemName=Bralani | CR 6; Mediano; CA 20 (toque 14); **80 pg**; Fort +11 / Ref +9 / Will +6; **RD 10/cold iron or evil** (+ 5/epic); inmune electricidad y petrificación; resist frío/fuego 10; **SR 17**; 40 pies (wind form: vuela 100, perfecto); *+1 scimitar* **+15/+10 (1d6+11, 18-20)** o slam +14 (1d6+10); arco +12/+7 (1d8+6); whirlwind blast 3d6 en línea de 20 pies (Ref DC 17); SLA CL 6: a voluntad **blur, mirror image, gust of wind (DC 14), wind wall**, charm person; **2/día lightning bolt (6d6, DC 15) y cure serious wounds**. Contra CA 25: 55 % / 30 % → ≈ 12 de daño/asalto (≈ 15 flanqueando). |
| **Lillend azata** (SM VI) | B1 pg. 26 — https://www.aonprd.com/MonsterDisplay.aspx?ItemName=Lillend | CR 7; **Grande (10 pies de espacio y alcance)**: tapa un pasillo; CA 20; **87 pg**; Fort +9 / Ref +10 / Will +10; sin RD propia (queda la 5/epic); inmune electricidad, petrificación, veneno; resist frío/fuego 10; vuela 70; *+1 longsword* +14/+9 (2d6+11), tail slap +8 (2d6+3 + **grab**), constrict 2d6+7; **bardic performance 20 asaltos como bardo 7: inspire courage +2 (competencia a ataque y daño de todo el grupo)**, inspire competence +3; conjuros de bardo 7: **hold person ×4 (DC 16)**, sound burst, suggestion, **cure serious wounds ×2**, cure light wounds ×5, charm monster ×2; SLA: darkness, hallucinatory terrain (DC 18) 3/día. |

Bonos que se **acumulan** sobre nuestros 4 cuerpo a cuerpo ([AoN] https://www.aonprd.com/Rules.aspx?ID=211 — CRB pg. 208): Good Hope +2 **moral** (ataque/daño/salvaciones) + lillend +2 **competencia** (ataque/daño) + Prayer +1 **suerte** + Blessing of Fervor ataque extra o +2 sin tipo/esquiva + flanqueo +2 = hasta **+7 al ataque, +5 al daño y un ataque más** para cada uno, sin contar Holy Lance. Lo que **no** se acumula: Good Hope con Heroes' Feast/Bless (moral), Prayer con Divine Favor (suerte), Blessing of Fervor con Haste.

---

## 13. Rutina de combate

### 13.1 Posición (lo primero, cada combate)
- **25-30 pies detrás de la línea de tanques**, con los 4 cuerpo a cuerpo dentro de los 30 pies (channel y Faith's Reach) y una casilla libre delante para colocar al invocado. Nunca adyacente al pasillo por donde entran refuerzos: ese pasillo es para Wall of Stone o Blade Barrier.
- Los invocados aparecen a ≤ 50 pies (close): **siempre en la casilla que da flanqueo a un DPS** o en la boca del pasillo (lillend Grande = tapón de 10 pies).
- Escudo en mano, arma envainada (una mano libre para los componentes somáticos; el tatuaje resuelve el foco y el channel).

### 13.2 Antes de abrir la puerta (si hay aviso)
1. **Good Hope** (3.º, 11 min; 22 con la vara de Extend) sobre los 5 PJ: +2 moral a ataque, daño, salvaciones y habilidades.
2. **Magic Circle against Evil** (dominio 3.º, 110 min) sobre el tanque principal: los invocados malvados del enemigo no pueden tocar a nadie a 10 pies de él y todos ganan +2/+2 y nueva salvación contra dominación de fuentes malvadas.
3. **Freedom of Movement** (110 min) sobre el DPS que más agarran; **Death Ward** (11 min) solo si se sabe que hay no muertos o *slay living*.
4. De mañana (11-22 h): Magic Vestment ×2, Status ×3.

### 13.3 Asalto 1
- **Estándar:** **Summon Monster V** (Sacred Summons → estándar): el bralani aparece en flanqueo y **actúa ya** (ataque completo +15/+10 o *gust of wind* para tirar a los pequeños o *cure serious wounds* si alguien ya sangra). Si la iniciativa nos puso después de que los nuestros ya están pegando y nadie sangra: **Blessing of Fervor** (11 aliados, 11 asaltos: los 4 eligen ataque extra o +2/+2 cada asalto) y el bralani va en el asalto 2.
- **Movimiento:** colocarse (o Quick Channel si el asalto sorpresa ya hizo daño).
- **Inmediata en reserva (fuera de turno):** **Mythic Blade Barrier** (1 uso + ranura de dominio de 6.º) cuando (a) los refuerzos cruzan la puerta → muro de 220 pies **sobre** ellos (11d8, Ref DC 24 para quedar del lado que elijan… fuera), o (b) el jefe carga hacia nosotros → anillo alrededor del jefe: para salir come 11d8. Ojo con la cobertura: el +4 a la CA lo recibe **quien es atacado a través del muro** (si el jefe golpea a través, protege a los nuestros; si los nuestros golpean a través, protege al jefe), así que el anillo se reserva para aislar refuerzos, arqueros y lanzadores, y contra el jefe se usa el muro plano entre él y sus refuerzos. Es la única herramienta de control que **no cuesta la estándar del asalto siguiente** (solo la rápida).
- Hero Point **Act Out of Turn** si el enemigo actúa antes y un aliado ya está a −pg.

### 13.4 Asaltos siguientes: cuándo curar y con qué
- **Regla:** curamos con la **acción de movimiento** (Quick Channel 8d6+4 = 32 a cada aliado e invocado) cuando **dos o más** cuerpo a cuerpo están por debajo del 60 %; la **estándar** se dedica a curar solo cuando un aliado está en zona de muerte (≤ 40 pg contra un CR 11 que hace 50/asalto) → **Heal 110** (a 30 pies) o **Mythic Heal 165** (1 uso). Si el que cae decide el combate y no hay ranura: Inspired Spell (Heal 130).
- Segunda estándar de control por prioridad: **Prayer** (si el combate va a durar 4+ asaltos) > **Wall of Stone** (cortar la sala: 11 cuadros = una línea de 55 pies o un cajón de 25 × 10) > **Hold Person** sobre el lugarteniente humanoide (DC 20) > **Greater Command "flee" / "halt"** sobre la horda (DC 23) > **Holy Smite** (área segura, ciega 1 asalto) > **Spiritual Ally** (flanqueador n.º 6).
- **Selective Channeling:** excluir a los 2 enemigos mezclados con los nuestros (3 con 1 uso); los invocados **se incluyen** (son vivos: reciben 32 cada uno).
- Amazing Initiative (1 uso) en el asalto de crisis: estándar Heal + estándar extra channel (8d6+4) + movimiento Quick Channel = 110 + 64 al tanque y 64 a cada uno de los demás por 3 usos de channel y 1 poder mítico.

### 13.5 Cuando no hay nada que curar (que no es "nada que hacer")
- **Ciclo de control:** SM V (bralani) → Blessing of Fervor → Prayer → Wall of Stone / Hold Person / Silence sobre el lanzador enemigo (1 asalto, sin salvación sobre un punto) / Greater Command → Flame Strike (11d6, Ref DC 23) si hay grupo enemigo → Touch of Good (+5 a la salvación clave del DPS) cuando literalmente sobra la estándar.
- **Día de jefe:** **Summon Monster VI → lillend** (inspire courage +2 competencia a ataque y daño de los 4, 20 asaltos; tapón Grande; *hold person* ×4 propio) o **1d3+1 bralanis** (Mighty Summons) para rodear al jefe con RD 5/epic y flancos por todos lados. Un solo bralani en el combate del jefe: **1 uso → plantilla agile** (dual initiative: dos turnos por asalto = dos ataques completos a +15/+10).
- **Lanzador enemigo:** Silence (punto), Dispel Magic dirigido, Dispel Evil (auto-disipa un encantamiento de un malvado), Banishment vía Inspired Spell (Will DC 23).
- **Agarradores:** FoM al DPS + Liberating Command (inmediata, +22 a Escape Artist) + Remove Paralysis a distancia.

### 13.6 Emergencias
- **Aliado a 0 o moribundo, amenazado:** subirlo a 1+ (Heal 110 / CCW 43,5 a 30 pies) para que no sea helpless ante el coup de grace; si no está amenazado, Stabilize (orison, 50 pies) y seguir.
- **Aliado muerto ≤ 1 asalto:** **Heal + Relentless Healing** (1 uso, acción gratuita; funciona con cualquier lectura del umbral: −45 + 110 = 65) > Breath of Life (dominio 5.º; 5d8+11) > Mythic Breath of Life (1 uso + la misma ranura; 5d12+11, vale también en el 2.º asalto y contra efectos de muerte con salvación) > channel 8d6+4 + Relentless. Con Hero Point: **Act Out of Turn** antes del coup de grace.
- **Nosotros a 0:** **Reactive Healing** (inmediata, 1 channel, 8d6 antes de aplicar el daño); si igual caemos, Hard to Kill estabiliza; si el golpe nos mataría (≤ −32): **Cheat Death** (2 Hero Points, solo para nosotros).
- **Nos rodean:** paso de 5 pies detrás del bralani/lillend (Grande: bloquea), Sanctuary (Will DC 18, podemos seguir curando), Antilife Shell (1 asalto; ningún vivo entra a 10 pies), Obscuring Mist para retirarse, o **Mythic Blade Barrier en anillo alrededor nuestro** (radio 5-10 pies: quien entre come 11d8).
- **Dominación:** Will +21 vs charm/compulsion; Protection from Evil de la varita (inmunidad 1 min) antes del jefe encantador; si dominan al DPS: Protection from Evil (toque; nueva salvación) o Dispel Evil.
- **Aflicciones:** tabla del dossier §12.4 (Heal quita casi todo salvo niveles negativos, parálisis, miedo, staggered y maldiciones).

### 13.7 Hero Points y poder mítico: qué gastar primero
- **Poder mítico (9):** Mythic Blade Barrier (1) → Mythic Heal (1-2) → Inspired Spell (1-2) → Relentless Healing (1) → Surge en salvación letal (1) → plantilla agile (1) → Recuperation (1). Nunca "por si acaso".
- **Hero Points (1-3, no se recuperan):** (i) Cheat Death propio (2); (ii) Act Out of Turn para llegar antes que el coup de grace; (iii) Bonus +8 antes de una salvación letal propia; (iv) **Extra Action** = una segunda estándar **que sí puede ser un conjuro** (a diferencia de Amazing Initiative — [AoN] https://www.aonprd.com/Rules.aspx?ID=447 — APG pg. 322): Heal + SM V, o SM V + Blessing of Fervor en el asalto 1; (v) Reroll. Recall solo con los 9 poderes agotados. Heroic Fortune (2.º, 100 po) sobre uno mismo el día del jefe para tener el 2.º punto del Cheat Death.

---

## 14. Fortalezas
1. **Economía de acciones completa:** inmediata (Mythic Blade Barrier / Reactive Healing / Surge / Liberating Command), estándar (invocar / controlar / Heal), movimiento (Quick Channel), rápida (mover Spiritual Ally), gratuita (Relentless Healing). Cada asalto hace dos cosas, y a menudo tres.
2. **Cuerpos en el campo sin perder el turno:** Sacred Summons convierte SM V/VI en estándar y el invocado actúa de inmediato; con Augment Summoning y Mighty Summons los bralanis tienen 80 pg, RD 10/cold iron or evil con suelo 5/epic, SR 17, vuelan, flanquean, tiran *gust of wind* y llevan 2 CSW cada uno. El lillend regala +2 competencia a ataque y daño a los 4 cuerpo a cuerpo.
3. **Buffs de grupo que se acumulan:** Good Hope (moral, incluye daño), inspire courage (competencia), Prayer (suerte), Blessing of Fervor (ataque extra), Holy Lance (holy), Magic Circle (protección de área). Con 4 atacantes cuerpo a cuerpo es el grupo que más rinde por buff del juego.
4. **Curación por acción alta y sin ranuras:** Quick Channel 8d6+4 = 32 a todos (aliados e invocados) por acción de movimiento; Heal 110 / Mythic 165 / Inspired 130-195 a 30 pies; Relentless Healing convierte cualquier cura en resurrección de 1 asalto.
5. **Control sin salvación:** Wall of Stone, Silence sobre un punto, Blade Barrier como bloqueo (la salvación solo reduce el daño, el muro sigue ahí), invocados que ocupan casillas.
6. **Supervivencia razonable para un lanzador de retaguardia:** CA 23-27 más cobertura +4, Will +19/+21, Fort +14, 109 pg, Hard to Kill a −32, Reactive Healing, Cheat Death, y muros e invocados entre nosotros y el enemigo.
7. **Sin arquetipo, sin rasgos de campaña, todo en hardcovers salvo Milani/Good Hope (ISF), Scarred (Antihero's Handbook) y la ioun stone cracked (Seekers of Secrets)**: fácil de defender ante el GM.

## 15. Debilidades
1. **Complejidad de mesa:** dos stat blocks de invocados (bralani, lillend) con SLA propias, duraciones (Good Hope, Fervor, Prayer, Magic Circle, muros, 11 asaltos de invocación), 9 poderes míticos y 7 channels. El jugador tiene que llevar las fichas impresas; si no le gusta la contabilidad, la build de "reach healer" es más simple.
2. **Conflicto de ranuras de 5.º/6.º:** SM V, Wall of Stone y Greater Command compiten con la 2.ª Breath of Life y Righteous Might; SM VI compite con el 2.º Heal. Inspired Spell lo descomprime (BoL/Heal sin preparar), pero cuesta poder mítico.
3. **Sin Toughness ni Divine Interference** en la secuencia base: 109 pg (11 menos que la build sanadora) y ningún "deshacer el crítico" al DPS. Dex 12 → CA 23 base, Reflejos +8 (vs Ref DC 22 de un CR 13 hace falta 14+: 35 %). Communal Resist Energy vía Inspired Spell contra alientos.
4. **Los invocados mueren:** contra un CR 13 (+22, 60/asalto) un bralani dura 2-3 asaltos aunque tenga RD; contra enemigos con armas malvadas o de hierro frío pierde la RD 10 (queda 5/epic). Y Sacred Summons no vale para elementales ni animales celestiales (sin subtipo de alineamiento): esos siguen costando 1 asalto.
5. **Spell Focus (conjuration) es una dote-tasa** (+1 DC casi sin uso) que solo el humano puede permitirse; con aasimar hay que soltar Reactive Healing.
6. **Enemigos sin mente / inmunes:** Hold Person solo humanoides; Greater Command y Good Hope son mind-affecting; Silence y Blade Barrier no. Contra no muertos y constructos el plan es muros + invocados + Holy Smite, no encantamientos.
7. **Dependencia de Milani e Inner Sea Faiths:** si el GM no permite el libro, Good Hope de 3.º desaparece (queda Prayer/Bless) y hay que decidir entre Sarenrae + Summon Good Monster (vulpinales) u Osiris (arcontes).
8. **Recalled Blessing no elegida:** perdemos la posibilidad (⚠️ lectura del GM) de relanzar el SM V del día por 1 uso y de forzar salvaciones dobles en Blade Barrier/Greater Command. Es un cambio legítimo a tier 1 si el GM confirma la lectura amplia.

---

## 16. Riesgo de legalidad (todo lo que depende de un permiso del GM o de una lectura)

1. **Milani (Inner Sea Faiths pg. 71 — Campaign Setting) y la regla "Good Hope can be prepared as a 3rd-level spell" (ISF pg. 74).** Oficial de Paizo, pero fuera de los hardcovers: pedir permiso explícito. Sin ISF: Sarenrae + Summon Good Monster (vulpinal) u Osiris (arcontes), ambos con sus propios permisos (Champions of Purity pg. 33 es Player Companion; Osiris es de Pathfinder #80).
2. **Sacred Summons y el aura:** el aura de la clase es la del alineamiento de la deidad (CRB pg. 38) → chaotic + good; bralani y lillend [chaotic, good] "exactly match". Confirmar que el GM acepta esa lectura literal (un GM que use el alineamiento del clérigo llega al mismo resultado porque somos CG). Los animales celestiales, elementales y el hound archon CG de Milani (Pathfinder #68 pg. 69, regla de AP) **no** cuentan salvo decisión del GM.
3. **Summon Monster + Inspired Spell:** RAW no (tiempo impreso "1 round"). Si el GM lo permite porque Sacred Summons lo vuelve estándar, ganamos un SM V extra por poder mítico. No lo presupuestamos.
4. **Pergaminos de Summon Monster + Sacred Summons:** activar un pergamino es lanzar el conjuro (spell completion); que la dote reduzca la activación a estándar es lectura del GM. Sin ella, el scroll de SM V tarda 1 asalto.
5. **Mythic Selective Channeling:** "targets you excluded" → contamos solo criaturas que estaban en el estallido y excluimos; con el campo vacío de enemigos no hay +4. Confirmar que se puede excluir a criaturas vistas/tocadas conforme a la FAQ de Selective Channeling (jul-2011).
6. **Mighty Summons + RD del bralani:** aplicamos la regla general de RD múltiple (la mejor en cada situación, no se suman). Un GM podría leer la RD 5/epic como sustitución: en ese caso conviene Mythic Augment Summoning a tier 3 (RD 10/epic).
7. **Objeto combinado Headband of Inspired Wisdom +4 + Phylactery of Positive Channeling (32.500 po; regla +50 %, CRB pg. 553):** hay que encargarlo o craftearlo; si no se permite, ver el reemplazo del 10.2.
8. **Faith's Reach sobre aliados dispuestos:** toque a distancia automático (lectura mayoritaria) o tirada +9 que provoca (estricta). Pactar por escrito.
9. **Relentless Healing:** ¿impone nivel negativo? ¿funciona contra efectos de muerte? ¿se gasta el uso si el aliado estaba vivo? (dossier §12.2).
10. **Amazing Initiative con Touch of Good / Holy Lance (Sp/Su):** "can't be used to cast a spell": channel sí; Sp en zona gris.
11. **Recalled Blessing vs Inspired Spell:** elegimos Inspired Spell; si el GM confirma que Recalled Blessing sirve sobre conjuros ya lanzados hoy, es la opción más fuerte para este rol (SM V repetido, salvaciones dobles).
12. **Drawback Scarred (Antihero's Handbook, Player Companion):** alternativa Provincial (UCam). Ioun Stone cracked (Seekers of Secrets, Campaign Setting): 500 po prescindibles.
13. **Wand of Lesser Restoration (CL 1 por la línea de paladín 1):** tiempo de activación (estándar vs 3 asaltos) según el GM; solo afecta fuera de combate.
14. **Método de pg (4,5 vs 5), Massive Damage opcional (CRB pg. 191), hora de recarga del poder mítico y sesión de preparación tras Recuperation** (dossier §12.5 y §14).
15. **Nada baneado ni de terceros:** sin Sacred Geometry, sin rasgos de campaña, sin d20pfsrd-only. Todo elemento lleva su URL de aonprd.com.

---

## 17. Hoja resumen (para copiar a la ficha)

**Humano, Cleric 11 de Milani (CG), Hierophant tier 3.** Str 10 / Dex 12 / Con 16 / Int 10 / Wis 27 / Cha 14. Pg 109. Init +7. CA 23 (25 MV / 27 SoF). Fort +14 / Ref +8 / Will +19 (+2 vs charm/compulsion). CMD 20. BAB +8/+3. Concentración +21. Velocidad 30.
**Dominios:** Healing (Rebuke Death 1d4+5 ×11; Healer's Blessing) + Good (Touch of Good +5 ×11; Holy Lance 1/día 5 asaltos).
**Channel:** 8d6+4 (con Phylactery y Mythic Selective), 7/día, DC 17, excluye 2 (3 con 1 poder), Quick Channel (movimiento, 2 usos), Reactive Healing (inmediata).
**Dotes:** Selective Channeling, Spell Focus (conjuration), Augment Summoning, Quick Channel, Sacred Summons, Extra Channel, Reactive Healing. **Rasgos:** Reactionary, Focused Mind, Birthmark; drawback Scarred.
**Mítico:** Inspired Spell · Faith's Reach · Mighty Summons · Relentless Healing · Mythic Spell Lore (Blade Barrier, Heal, Breath of Life) · Mythic Selective Channeling · Amazing Initiative · Recuperation · Hard to Kill (−32) · 9 poderes · Surge 1d6.
**Conjuros/día:** 4 / 7 / 7 / 7 / 6 / 4 / 3; DC 18-24. Día típico: sección 9.
**Habilidades:** Perception +19, Sense Motive +15, Heal +14, Kn (religion/planes) +8, Spellcraft +8; trasfondo Linguistics +8, Kn (history) +8, Kn (nobility) +5, Profession (herbalist) +16, Lore (Milani) +8.
**Equipo:** +1 mithral breastplate, +1 darkwood heavy shield, Headband of Inspired Wisdom +4 con Phylactery of Positive Channeling, Cloak +4, Ring of Protection +1, Amulet of Natural Armor +1, Belt of Con +2, Handy Haversack, Rod of Extend (lesser), Pearl of Power 1.º, ioun stone cracked (init), mw morningstar, varitas CLW / Protection from Evil / Lesser Restoration, pergaminos BoL ×2 / Heal / Restoration / Remove Curse / Neutralize Poison / SM V / Gentle Repose, polvo de diamante 100 ×4 + 1.000 ×1, tatuaje de símbolo sagrado, kit mundano. Total 81.347 po.
**Invocados de cabecera:** bralani (SM V, estándar: 80 pg, +15/+10 1d6+11, RD 10/cold iron or evil + 5/epic, CSW ×2, gust of wind) · lillend (SM VI, estándar: 87 pg, Grande, inspire courage +2, hold person ×4, CSW ×2) · 1d3+1 bralanis (SM VI) · Spiritual Ally (4.º).

*Fin de la build. Toda regla lleva su URL de aonprd.com; lo marcado ⚠️ está listado en la sección 16 para hablarlo con el GM antes de la sesión 1.*
