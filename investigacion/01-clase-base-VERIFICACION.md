# Verificación adversarial — Frente 01: Clérigo, reglas base y números a nivel 11 (PF1e)

**Fecha:** 2026-09-15. **Auditor:** agente adversarial. **Método:** descarga directa del HTML de cada página citada (aonprd.com y paizo.com) y comparación del texto real con cada afirmación. Ninguna afirmación se dio por buena de memoria. Todas las páginas de AoN consultadas son de la sección Pathfinder First Edition (dominio `www.aonprd.com`, sin `2e.`).

## Resumen

- 51 afirmaciones auditadas: **47 confirmadas**, **3 corregidas** (detalles menores), **1 FALSA**.
- **Hallazgo crítico:** la afirmación "FAQ: con Selective Channeling no hace falta ver a la criatura que se excluye" es **exactamente al revés**. La FAQ oficial (jul-2011) dice: *"Just like using a Target: creature spell, you must be able to see or touch a creature to affect it (or, in the case of this feat, select it to be unaffected). Pinpointing the square of an invisible creature isn't sufficient—you must be able to see or touch the creature."* Afecta directamente a la táctica del sanador (no se puede excluir a un enemigo invisible ni a uno fuera de línea de visión).
- No se detectó contaminación 3PP / 2e / Starfinder / homebrew en las afirmaciones. El único enlace no-oficial (pittsburghpfs.com) era redundante: la FAQ "Positive and Negative Energy" está en la propia página de FAQ del Core Rulebook de Paizo, con fecha **July 2016**.
- El único URL de AoN que no carga es `MythicPathDisplay.aspx?ItemName=Hierophant` (404). La página vigente es `https://www.aonprd.com/MythicPaths.aspx?Path=Hierophant` (Mythic Adventures pg. 32) y las path abilities están en `https://www.aonprd.com/PathAbilities.aspx?Path=Hierophant` (Faith's Reach: MA pg. 34). `legacy.aonprd.com` es el PRD antiguo de Paizo alojado por AoN: coincide textualmente, pero conviene citar la página vigente.

## Tabla de veredictos

| # | Afirmación (resumen) | Veredicto | Observación / cita | Evidencia |
|---|---|---|---|---|
| 1 | Cleric CRB pg. 38, d8, 2 + Int | **confirmado** | "Source PRPG Core Rulebook pg. 38", "Hit Die: d8", "Skill Points at each Level: 2 + Int modifier" | https://www.aonprd.com/ClassDisplay.aspx?ItemName=Cleric |
| 2 | Alineamiento a un paso, un eje | **confirmado** | "must be within one step of her deity's, along either the law/chaos axis or the good/evil axis" | ídem |
| 3 | Nivel 11: BAB +8/+3, Fort +7, Ref +3, Will +7 | **confirmado** | Fila 11th: "+8/+3 \| +7 \| +3 \| +7 \| Channel energy 6d6" | ídem |
| 4 | Habilidades de clase; Perception no | **confirmado** | Lista exacta; Perception ausente | ídem |
| 5 | Competencias | **confirmado** | "all simple weapons, light armor, medium armor, and shields (except tower shields)... favored weapon of their deity" | ídem |
| 6 | FAQ bastard sword | **confirmado** | "he receives the Exotic Weapon proficiency with the weapon, allowing him to use it one-handed." posted July 2011 | https://paizo.com/paizo/faq/v5748nruor1fm |
| 7 | Fallo arcano solo arcanos | **confirmado** | "Arcane spellcasters face the possibility of arcane spell failure if they're wearing armor." (CRB pg. 149). El clérigo lanza conjuros divinos. | https://www.aonprd.com/Rules.aspx?ID=361 |
| 8 | Aura overwhelming a nivel 11 | **confirmado** | Tabla: "Cleric or paladin of an aligned deity (class levels): 1 \| 2-4 \| 5-10 \| 11 or higher" | https://www.aonprd.com/SpellDisplay.aspx?ItemName=Detect%20Evil |
| 9 | Channel 6d6 a nivel 11 | **confirmado** | "1d6 ... plus 1d6 for every two cleric levels beyond 1st"; tabla "Channel energy 6d6" en 11th. 6 × 3,5 = 21. | Cleric |
| 10 | DC 10 + 1/2 nivel + Car = 15 + Car | **confirmado** | "10 + 1/2 the cleric's level + the cleric's Charisma modifier"; redondeo hacia abajo (Common Terms) → 5 | Cleric; Common Terms |
| 11 | 3 + Car usos; estándar; no provoca | **confirmado** | "3 + her Charisma modifier. This is a standard action that does not provoke an attack of opportunity." | Cleric |
| 12 | Estallido 30 pies, un tipo, Will mitad, incluirse, símbolo | **confirmado** | Texto literal coincide; añade "all excess healing is lost" | Cleric |
| 13 | Positiva/negativa por alineamiento; neutral elige, irreversible | **confirmado** | "Once this choice is made, it cannot be reversed. This decision also determines whether the cleric casts spontaneous cure or inflict spells" | Cleric |
| 14 | Selective Channeling (Car 13) | **confirmado** | "Prerequisites: Cha 13, channel energy class feature... up to your Charisma modifier... Normal: ... You can only choose whether or not you are affected." CRB pg. 132 | https://www.aonprd.com/FeatDisplay.aspx?ItemName=Selective%20Channeling |
| 15 | Mythic Selective Channeling | **confirmado** | "increases by a number of points equal to twice the number of targets you excluded... expend one use of mythic power to increase the number of targets you exclude... by half your tier." MA pg. 72 | ídem |
| 16 | Extra Channel +2 usos | **confirmado** | "You can channel energy two additional times per day." Fuente AoN: ACG pg. 146 / CRB pg. 123 | https://www.aonprd.com/FeatDisplay.aspx?ItemName=Extra%20Channel |
| 17 | Improved Channel +2 DC | **confirmado** | "Add 2 to the DC of saving throws made to resist the effects of your channel energy ability." CRB pg. 126 | https://www.aonprd.com/FeatDisplay.aspx?ItemName=Improved%20Channel |
| 18 | Phylactery of Positive Channeling | **confirmado** | "Slot headband; Price 11,000 gp"; "CL 10th"; "+2d6"; "Craft Wondrous Item, creator must be a 10th-level cleric; Cost 5,500 gp". UE pg. 252 / CRB pg. 526 | https://www.aonprd.com/MagicWondrousDisplay.aspx?FinalName=Phylactery%20of%20Positive%20Channeling |
| 19 | Holy symbol (tattoo) 100 po | **confirmado** | "you may use it as a divine focus for spellcasting, channeling energy, and so on. The tattoo must be fully visible" UE pg. 57 | https://www.aonprd.com/EquipmentMiscDisplay.aspx?ItemName=Holy+symbol+%28tattoo%29 |
| 20 | Precios holy symbol | **confirmado** | "100 gp (gold), 5 gp (iron), 500 gp (platinum), 25 gp (silver), 1 gp (wooden)"; "The material used... has no effect on its powers" | https://aonprd.com/EquipmentMiscDisplay.aspx?ItemName=Holy+symbol+%28iron%29 |
| 21 | Dos dominios; alineamiento; sin deidad GM | **confirmado** | Texto literal coincide | Cleric |
| 22 | Ranura de dominio por nivel; no espontáneo | **confirmado** | "one domain spell slot for each level of cleric spell she can cast, from 1st on up... Domain spells cannot be used to cast spells spontaneously." | Cleric |
| 23 | Rebuke Death | **confirmado** | "1d4 points of damage plus 1 for every two cleric levels... below 0 hit points... 3 + your Wisdom modifier". 11/2 = 5 → 1d4+5 | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Healing |
| 24 | Healer's Blessing | **confirmado** | "At 6th level, all of your cure spells are treated as if they were empowered... does not apply to damage dealt to undead... does not stack with the Empower Spell metamagic feat." | ídem |
| 25 | Conjuros base nivel 11 | **confirmado** | Fila 11th: "4 \| 4+1 \| 4+1 \| 4+1 \| 3+1 \| 2+1 \| 1+1" | Cleric |
| 26 | Conjuros extra por Sab | **corregido** | Todo correcto salvo la fila 26-27, que además da 1 conjuro extra de **8º**: "26-27 \| +8 \| — \| 2 \| 2 \| 2 \| 2 \| 1 \| 1 \| 1 \| 1 \| —". Irrelevante a nivel 11. | https://www.aonprd.com/Rules.aspx?Name=Ability%20Scores&Category=Getting%20Started |
| 27 | FAQ bonus spells requieren nivel de clase | **confirmado** | "ignore the columns for higher-level spells on table 1–3... until your class grants you access to those spell levels." July 2011 | https://paizo.com/paizo/faq/v5748nruor1fm |
| 28 | DC y Sab mínima | **confirmado** | "Wisdom score equal to at least 10 + the spell level... DC... 10 + the spell level + the cleric's Wisdom modifier" | Cleric |
| 29 | Spontaneous Casting | **confirmado** | "any prepared spell that is not an orison or domain spell in order to cast any cure spell of the same spell level or lower" | Cleric |
| 30 | Orisons | **confirmado** | "not expended when cast and may be used again" | Cleric |
| 31 | Descriptores de alineamiento | **confirmado** | "can't cast spells of an alignment opposed to her own or her deity's (if she has one)" | Cleric |
| 32 | Preparación divina sin descanso | **confirmado** | "does not require a period of rest... chooses a particular time of day to pray... must do so as soon as possible... wait until the next day"; "(1 hour)". CRB pg. 220 | https://www.aonprd.com/Rules.aspx?Name=Preparing+Divine+Spells&Category=Divine+Spells |
| 33 | Ranuras vacías; 8 horas | **corregido** | Correcto; falta un detalle: las sesiones extra "takes at least 15 minutes, and it takes longer if she prepares more than one-quarter of her spells". "Recent Casting Limit: ... within the previous 8 hours count against the number of spells that can be prepared." | ídem |
| 34 | Dotes impares; +1 a 4/8/12 | **confirmado** | Tabla 3-1: 11th → Feats "6th"; 4th → Ability "1st"; 8th → "2nd"; 12th → "3rd" | https://www.aonprd.com/Rules.aspx?Name=Character%20Advancement&Category=Getting%20Started |
| 35 | XP nivel 11 y 12 | **confirmado** | "11th \| 235,000 \| 155,000 \| 105,000"; "12th \| 330,000 \| 220,000 \| 145,000" | ídem |
| 36 | Riqueza nivel 11 = 82.000 po; reparto | **confirmado** | Tabla 12-4: "10 \| 62,000; 11 \| 82,000; 12 \| 108,000"; "no more than half... 25%/25%/25%/15%/10%" CRB pg. 399 | https://www.aonprd.com/Rules.aspx?ID=254 |
| 37 | Compra por puntos | **confirmado** | Tabla 1-1 y 1-2 coinciden; "No score can be reduced below 7 or raised above 18"; "After all the points are spent, apply any racial modifiers" | Ability Scores |
| 38 | HP máximos en 1er DG de clase | **confirmado** | "A creature gains maximum hit points if its first Hit Die roll is for a character class level." CRB pg. 11 | https://www.aonprd.com/Rules.aspx?Name=Common%20Terms&Category=Getting%20Started |
| 39 | Redondeo hacia abajo | **confirmado** | "Unless otherwise stated, always round down. For example, if you are asked to take half of 7, the result would be 3." | ídem |
| 40 | Clase predilecta | **confirmado** | "+1 hit point or +1 skill rank... (including his first level) cannot be changed once made for a particular level" CRB pg. 31 | https://aonprd.com/Rules.aspx?ID=344 |
| 41 | HP promedio 53 / 75 / 86 | **confirmado** | 8 + 10 × 4,5 = 53; Con 14 → +2 × 11 = 22 → 75; +11 favored → 86. Reglas verificadas en Common Terms y Favored Class. Es un promedio estadístico (tirando), no una regla. | Cleric; Common Terms; Favored Class |
| 42 | Bonos de característica | **confirmado** | "Ability bonuses with a duration greater than 1 day actually increase the relevant ability score after 24 hours"; Wisdom temporal → "Wisdom-based skill checks and Will saving throws... any spell DCs based on Wisdom". CRB pg. 554 | https://www.aonprd.com/Rules.aspx?Name=Ability+Score+Bonuses&Category=Special+Abilities |
| 43 | Heal | **confirmado** | "10 hit points of damage per level of the caster, to a maximum of 150 points at 15th level"; lista de condiciones idéntica; "does not remove negative levels or restore permanently drained ability score points". 11 × 10 = 110. CRB pg. 294 | https://www.aonprd.com/SpellDisplay.aspx?ItemName=Heal |
| 44 | Topes CL de los cure | **corregido** | Números correctos (máx +5/+10/+15/+20/+25/+30; a CL 11: 1d8+5, 2d8+10, 3d8+11, 4d8+11, 1d8+11, 2d8+11). Corrección de página: CCW es CRB pg. **262**; CLW/CMW/CSW/Mass CLW/Mass CMW pg. 263. Mass: "one creature/level, no two of which can be more than 30 ft. apart", alcance close. | https://www.aonprd.com/SpellDisplay.aspx?ItemName=Cure%20Critical%20Wounds (+ páginas de cada cure) |
| 45 | Breath of Life | **confirmado** | "5d8 + 1 point per caster level (maximum +25)"; "died within 1 round"; "temporary negative level that lasts for 1 day"; "slain by death effects cannot be saved". Mythic: "5d12... + 1 point per caster level (maximum +25)... within the past 2 rounds"; además permite repetir la salvación contra un death effect y Augmented (9th). CRB pg. 251 / MA pg. 87 | https://www.aonprd.com/SpellDisplay.aspx?ItemName=Breath%20of%20Life |
| 46 | FAQ channel de varias clases no acumula | **confirmado** | "cleric channeling doesn't stack with paladin channeling, necromancer channeling, oracle of life channeling, and so on." July 2011 | https://paizo.com/paizo/faq/v5748nruor1fm |
| 47 | FAQ Empower sobre cure | **confirmado** | "the +50% from the feat applies to the 2d8 and to the level-based bonus." July 2011 | ídem |
| 48 | FAQ Selective Channeling no requiere ver | **FALSO** | La FAQ dice lo contrario: "you must be able to see or touch a creature to affect it (or, in the case of this feat, select it to be unaffected). Pinpointing the square of an invisible creature isn't sufficient". July 2011 | ídem |
| 49 | FAQ Positive and Negative Energy | **confirmado** | "Positive and negative energy are two damage types... usually not included on the list of energy types you can choose with spells like resist energy... Positive energy never heals or harms creatures or objects that are neither living nor undead (such as constructs)". Fecha: **July 2016**, en la propia FAQ del CRB (no hace falta la fuente pittsburghpfs). | ídem |
| 50 | Reglas míticas base | **confirmado** | "3 plus double your mythic tier"; "1d8 at 4th tier, 1d10 at 7th tier, and 1d12 at 10th tier"; tabla 1-1: Ability Score en tiers 2/4/6/8/10, Mythic Feat en 1/3/5/7/9. MA pg. 12 | https://www.aonprd.com/Rules.aspx?Name=Mythic%20Heroes&Category=Mythic%20Adventures |
| 51 | Hierophant | **confirmado** | "you gain 4 bonus hit points"; Recalled Blessing: "cast any one divine spell without expending a prepared spell or spell slot... must be one you prepared today... heals damage... roll twice and take the higher result"; Inspired Spell: "treating your caster level as 2 levels higher" (y tampoco gasta ranura); Faith's Reach: "range of touch... instead... 30 feet... ranged touch attack". URL vigente en AoN: MythicPaths.aspx?Path=Hierophant (MA pg. 32) y PathAbilities.aspx?Path=Hierophant (MA pg. 34). | https://www.aonprd.com/MythicPaths.aspx?Path=Hierophant |

## Errores en las NOTAS del investigador (fuera de las afirmaciones)

1. **"Extra Channel +2 (se puede tomar más de una vez según su Special)"** — FALSO. El texto de AoN no incluye ninguna línea "can be taken multiple times". El único *Special* habla de paladines (4 usos de lay on hands) y warpriests (4 usos de fervor). La FAQ de jul-2011 añade que con varias clases da exactamente 2 usos "flotantes" en total. https://www.aonprd.com/FeatDisplay.aspx?ItemName=Extra%20Channel
2. **Selective Channeling "no requiere ver al excluido"** (sección 7 de las notas) — FALSO, ver #48.
3. **Fecha de la FAQ Positive/Negative Energy "≈2016, no confirmada"** — confirmada: July 2016, en https://paizo.com/paizo/faq/v5748nruor1fm.
4. **Hierophant "MythicPathDisplay dio 404"** — la página vigente es https://www.aonprd.com/MythicPaths.aspx?Path=Hierophant.
5. **Birthmark** — verificado: "This birthmark can serve you as a divine focus for casting spells"; no menciona channel energy (correcto en las notas). Fuente AoN: Ultimate Campaign pg. 54, Second Darkness Player's Guide pg. 12, APG pg. 328. https://www.aonprd.com/TraitDisplay.aspx?ItemName=Birthmark
6. Dato adicional útil: la sección "Preparing Divine Spells" (CRB pg. 220) contiene su propia versión de Spontaneous Casting: "in place of a prepared spell of the same level or higher, but not in place of a bonus domain spell" — coherente con la clase.
7. La FAQ "Preparing Spells in Open Slots" (ago-2013) trata solo de clases arcanas (magus, witch); para el clérigo la regla de dejar ranuras abiertas está explícita en CRB pg. 220.

## Archivos de trabajo
HTML descargados y script de extracción en `C:\Users\renzo\Desktop\DAKODEV\Clerigo\investigacion\_tmp\` (pueden borrarse).

## Addendum — segunda pasada (2026-09-15, auditor de cierre)

Se releyó el informe completo y se re-verificaron contra la caché local de AoN/Paizo (`_tmp/cleric.html`, `_tmp/d_healing.html`, `_tmp/faq.html.txt`, `_tmp/extrachannel.html`, `_tmp/ability.html`, `_tmp/divprep.html`, `_tmp/clw|csw|ccw.html`, `_tmp/r_mythicheroes.txt`, `_tmp/aon_hierophant.txt`, `_tmp/aon_hiero_abil.txt`) los puntos más sensibles:

- **#48 (Selective Channeling / ver al excluido): se ratifica FALSO.** Texto literal de la FAQ (July 2011): "you must be able to see or touch a creature to affect it (or, in the case of this feat, select it to be unaffected). Pinpointing the square of an invisible creature isn't sufficient".
- #6 (bastard sword), #27 (bonus spells por nivel de clase), #46 (channel no acumula), #47 (Empower sobre cure) y #49 (Positive/Negative Energy, July 2016): texto literal coincidente en la FAQ del CRB.
- #1-#5, #9-#13, #21-#22, #25, #28-#31: texto literal coincidente en la página del Cleric (CRB pg. 38), incluida la fila 11th "+8/+3 | +7 | +3 | +7 | Channel energy 6d6 | 4 | 4+1 | 4+1 | 4+1 | 3+1 | 2+1 | 1+1".
- #23-#24 (Rebuke Death, Healer's Blessing): literal en DomainDisplay Healing.
- #26 (fila 26-27 incluye 1 conjuro extra de 8º), #33 (sesiones extra de preparación: "at least 15 minutes"), #44 (CCW pg. 262; CLW/CSW pg. 263): correcciones ratificadas.
- #50: "3 plus double your mythic tier"; "1d8 at 4th tier, 1d10 at 7th tier, and 1d12 at 10th tier"; Ability Score en tiers 2/4/6/8/10; Mythic Feat en tier 1, 3 "and again every 2 tiers thereafter".
- #51: "you gain 4 bonus hit points"; Recalled Blessing "roll twice and take the higher result"; Inspired Spell "caster level as 2 levels higher"; Faith's Reach (MA pg. 34) "range of 30 feet... ranged touch attack". Nota adicional: en AoN **Inspired Spell** también se lanza "without expending a prepared spell or spell slot" (la afirmación solo mencionaba el CL +2; no es un error, es una omisión).

Veredicto final: 47 confirmadas, 3 corregidas, 1 falsa. Sin contaminación 3PP / 2e / Starfinder / homebrew.
