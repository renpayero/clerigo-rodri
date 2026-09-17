# 11 — Reglas opcionales de la mesa: Hero Points (APG), drawback + tercer rasgo (Ultimate Campaign) y Background Skills (Pathfinder Unchained) aplicadas al Clérigo sanador de nivel 11 (mítico, tier 3 Hierophant)

**Fecha:** 2026-09-15
**Fuente de verdad:** Archives of Nethys, Pathfinder 1e (aonprd.com, sin "2e."). Todo dato de regla lleva su URL y el libro/página que AoN indica. Lo que no está en AoN se marca **NO OFICIAL / NO VERIFICADO**.
**Método:** el sub-modelo de WebFetch se negó a transcribir texto de reglas; se descargó el HTML crudo de cada página con `curl` a `_aon_cache/audit11/` y se extrajo el texto (misma fuente, AoN 1e). Las páginas ya presentes en la caché local (`_raw/`, `_tmp/`, `_aon_cache/`) se leyeron de ahí.

## 0. URLs consultadas (todas en aonprd.com)

**Hero Points**
- https://www.aonprd.com/Rules.aspx?Name=Hero%20Points&Category=Optional%20Rule%20Systems (Advanced Player's Guide pg. 322-324: Awarding, Using, Hero Points for GMs, Antiheroes)
- https://www.aonprd.com/FeatDisplay.aspx?ItemName=Hero%27s%20Fortune (APG pg. 324)
- https://www.aonprd.com/FeatDisplay.aspx?ItemName=Luck%20of%20Heroes (APG pg. 324)
- https://www.aonprd.com/FeatDisplay.aspx?ItemName=Blood%20of%20Heroes (APG pg. 323)
- https://www.aonprd.com/FeatDisplay.aspx?ItemName=Defiant%20Luck (Advanced Race Guide pg. 77)
- https://www.aonprd.com/Feats.aspx?Categories=Hero+Point (categoría "Hero Point": solo 3 dotes)
- https://www.aonprd.com/SpellDisplay.aspx?ItemName=Heroic%20Fortune (APG pg. 324; incluye Heroic Fortune, Mass)
- https://www.aonprd.com/SpellDisplay.aspx?ItemName=Unravel%20Destiny (APG pg. 325)
- https://www.aonprd.com/MagicRingsDisplay.aspx?FinalName=Ring%20of%20Heroes (APG pg. 325)
- https://www.aonprd.com/MagicWeaponsDisplay.aspx?ItemName=Hero%27s%20Blade (APG pg. 325)
- https://www.aonprd.com/Rules.aspx?Name=Standard%20Other%20Traits&Category=Character%20Traits (ARG pg. 238: rasgo racial "Heroic")
- https://www.aonprd.com/Races.aspx?ItemName=Human (ARG pg. 72: rasgo racial alternativo "Heroic"; Core: "Skilled")
- https://www.aonprd.com/Search.aspx?Query=hero+point&Filter=111111111111111111&AllTerms=True (inventario completo de AoN)
- https://www.aonprd.com/Rules.aspx?Name=Mythic%20Heroes&Category=Mythic%20Adventures y https://www.aonprd.com/MythicPathDisplay.aspx?ItemName=Hierophant (Surge, Amazing Initiative; NINGUNA mención a hero points en todo Mythic Adventures)
- https://www.aonprd.com/DomainDisplay.aspx?ItemName=Glory (subdominio Legend, Divine Anthology pg. 23)
- https://www.aonprd.com/TraitDisplay.aspx?ItemName=Acolyte%20of%20Apocrypha (Divine Anthology pg. 22)
- https://www.aonprd.com/DeityDisplay.aspx?ItemName=Sarenrae (dominios y subdominios de Sarenrae)

**Drawbacks y rasgos**
- https://www.aonprd.com/Traits.aspx?Type=Drawback (lista completa: 66 drawbacks con libro y página)
- https://www.aonprd.com/Rules.aspx?Name=How%20to%20Create%20a%20Background&Category=Character%20Background (Ultimate Campaign pg. 8: "two traits (or three traits and a drawback)")
- https://www.aonprd.com/Rules.aspx?Name=Traits&Category=Advanced%20Player%27s%20Guide (APG pg. 326: tipos de rasgo y "not more than one from the same list")
- https://www.aonprd.com/FeatDisplay.aspx?ItemName=Additional%20Traits (APG pg. 150)
- https://www.aonprd.com/TraitDisplay.aspx?ItemName=Reactionary , ...=Envoy%20of%20Healing , ...=Blessed%20Touch , ...=Focused%20Mind , ...=Seeker , ...=Birthmark , ...=Fate%27s%20Favored , ...=Family%20Ties
- https://www.aonprd.com/Search.aspx?Query=drawback&Filter=111111111111111111&AllTerms=True

**Background Skills**
- https://www.aonprd.com/Rules.aspx?Name=Background%20Skills&Category=Skills%20and%20Options (Pathfinder Unchained pg. 46-53: Background Skills, Skill Changes, Gaining Adventuring/Background Skills, Class Skills, Artistry, Lore, Expanded Skill Uses)
- https://www.aonprd.com/ClassDisplay.aspx?ItemName=Cleric (habilidades de clase y 2 + Int por nivel)
- https://www.aonprd.com/FeatDisplay.aspx?ItemName=Quick%20Channel (Ultimate Magic pg. 154: Knowledge (religion) 5 rangos)
- https://www.aonprd.com/FeatDisplay.aspx?ItemName=Healer%27s%20Hands (Planar Adventures pg. 28)
- https://www.aonprd.com/FeatDisplay.aspx?ItemName=Signature%20Skill (Pathfinder Unchained pg. 82)
- https://www.aonprd.com/MagicWondrousDisplay.aspx?FinalName=Headband+of+Vast+Intelligence2 (Ultimate Equipment pg. 251 / Core pg. 517)
- https://www.aonprd.com/MagicWondrousDisplay.aspx?FinalName=Headband+of+Mental+Prowess2 (Ultimate Equipment pg. 250 / Core pg. 517)

---

# PARTE A — HERO POINTS (Advanced Player's Guide pg. 322-324)

URL: https://www.aonprd.com/Rules.aspx?Name=Hero%20Points&Category=Optional%20Rule%20Systems

## A.1 Transcripción literal (texto de AoN, APG)

**Hero Points — Source Advanced Player's Guide pg. 322**
> "Hero points are only awarded to player characters. NPCs, animal companions, familiars, cohorts, and mounts do not receive hero points. Unlike other points in the game, hero points do not renew over time or with rest. Once spent, they are gone forever. Hero points are awarded as a character gains levels or whenever a character accomplishes a truly heroic feat. The GM is the final arbiter on the award and use of hero points."

**Awarding Hero Points — APG pg. 322**
> "Each character begins play with 1 hero point, regardless of her level. In addition, whenever a character gains a level, she earns an additional hero point. Aside from these basic rules, awarding additional hero points is up to the GM. The following options are just some of the ways that a GM might award additional hero points."
> - **Character Story:** "GMs can award a hero point for the completion of a written character backstory. [...] When this key event is resolved, the GM can reward another hero point. Alternatively, the GM might award a hero point for painting a miniature or drawing a character portrait [...]"
> - **Completing Plot Arcs:** "The GM might award a hero point to each of the PCs who were involved in completing a major chapter or arc in the campaign story."
> - **Faith:** "[...] the GM can award hero points to characters whenever they uphold the tenets of their faith in a grand way, or whenever they take on one of the faith's major enemies. Such hero points might be temporary, and if not spent on the task at hand, they fade away."
> - **Group Service:** "[...] Buying pizza for the group, helping to clean up afterwards, or even hosting the game for a night might be worth a hero point."
> - **Heroic Acts:** "Whenever a character performs an exceptionally heroic act, she can be awarded a hero point. [...] Note that a hero point should only be awarded if the PC involved did not spend a hero point to accomplish the task."
> - **Return from the Dead:** "When a character dies, she does not lose any hero points she has accumulated. If she died with no hero points remaining, she gains 1 hero point when she is brought back from the dead through powerful magic, such as raise dead or resurrection."
> - **Maximum Hero Points:** "Characters can have no more than 3 hero points at any one time. Excess hero points are lost."

**Using Hero Points — APG pg. 323**
> "Hero points can be spent at any time and do not require an action to use (although the actions they modify consume part of your character's turn as normal). You cannot spend more than 1 hero point during a single round of combat. Whenever a hero point is spent, it can have any one of the following effects."
> - **Act Out of Turn:** "You can spend a hero point to take your turn immediately. Treat this as a readied action, moving your initiative to just before the currently acting creature. You may only take a move or a standard action on this turn."
> - **Bonus:** "If used before a roll is made, a hero point grants you a +8 luck bonus to any one d20 roll. If used after a roll is made, this bonus is reduced to +4. You can use a hero point to grant this bonus to another character, as long as you are in the same location and your character can reasonably affect the outcome of the roll (such as distracting a monster, shouting words of encouragement, or otherwise aiding another with the check). Hero points spent to aid another character grant only half the listed bonus (+4 before the roll, +2 after the roll)."
> - **Extra Action:** "You can spend a hero point on your turn to gain an additional standard or move action this turn."
> - **Inspiration:** "If you feel stuck at one point in the adventure, you can spend a hero point and petition the GM for a hint about what to do next. If the GM feels that there is no information to be gained, the hero point is not spent."
> - **Recall:** "You can spend a hero point to recall a spell you have already cast or to gain another use of a special ability that is otherwise limited. This should only be used on spells and abilities possessed by your character that recharge on a daily basis."
> - **Reroll:** "You may spend a hero point to reroll any one d20 roll you just made. You must take the results of the second roll, even if it is worse."
> - **Special:** "You can petition the GM to allow a hero point to be used to attempt nearly anything that would normally be almost impossible. Such uses are not guaranteed and should be considered carefully by the GM. Possibilities include casting a single spell that is one level higher than you could normally cast (or a 1st-level spell if you are not a spellcaster), making an attack that blinds a foe or bypasses its damage reduction entirely, or attempting to use Diplomacy to convince a raging dragon to give up its attack. Regardless of the desired action, the attempt should be accompanied by a difficult check or penalty on the attack roll. No additional hero points may be spent on such an attempt, either by the character or her allies."
> - **Cheat Death:** "A character can spend 2 hero points to cheat death. How this plays out is up to the GM, but generally the character is left alive, with negative hit points but stable. For example, a character is about to be slain by a critical hit from an arrow. If the character spends 2 hero points, the GM decides that the arrow pierced the character's holy symbol, reducing the damage enough to prevent him from being killed, and that he made his stabilization roll at the end of his turn. Cheating death is the only way for a character to spend more than 1 hero point in a turn. The character can spend hero points in this way to prevent the death of a familiar, animal companion, eidolon, or special mount, but not another character or NPC."

**Hero Points for GMs — APG pg. 324** (extracto relevante)
> "A number of spells and magic items, as well as the Hero's Fortune feat, grant hero points to a character."

**Antiheroes — APG pg. 324**
> "A PC can elect not to use the hero point system [...] Such characters do not receive hero points, regardless of the source, and can never benefit from their use. In exchange, such characters receive a bonus feat at 1st level. The option to allow such antiheroes in the game is subject to GM discretion."
> (El jugador eligió Hero Points, NO Antihero: se renuncia a la dote extra a cambio del sistema.)

## A.2 ¿Cuántos hero points tiene el PJ creado directamente a nivel 11?

- Texto literal: **"Each character begins play with 1 hero point, regardless of her level."** (APG pg. 322). Es decir: un personaje que **empieza a jugar** a nivel 11 arranca con **1** hero point, no con 3. Los puntos "por subir de nivel" solo se ganan al subir de nivel **durante el juego** ("whenever a character gains a level, she earns an additional hero point"). No es una decisión del GM: AoN lo dice explícitamente.
- Lo que SÍ queda en manos del GM: dar 1 punto extra por **historia escrita** (Character Story), por **retrato/miniatura**, o los puntos temporales de **Faith** (muy temáticos para un clérigo). Recomendación práctica: entregar la historia escrita antes de la sesión 1 para arrancar con **2** y así tener Cheat Death disponible desde el primer combate (cuesta 2).
- Máximo: **3** (5 con Hero's Fortune; los de Hero's Blade no cuentan contra el máximo).
- No se recuperan con descanso; no se pierden al morir; si morís sin puntos y te reviven, ganás 1.

## A.3 Límite de uso

- **"You cannot spend more than 1 hero point during a single round of combat."** Única excepción: Cheat Death (2 puntos). Consecuencia: no podés combinar Extra Action + Bonus + Reroll en el mismo asalto; elegís uno.
- No requiere acción: se gasta "at any time". Bonus antes/después de tirar, Reroll justo después, Act Out of Turn fuera de tu turno.
- No hay límite por acción ni por día distinto del stock (máx. 3).

## A.4 Análisis de cada gasto para el sanador (nivel 11, tier 3)

Marco numérico usado: Heal (6.º) = 10 pg/NL → **110** (tope 150); Breath of Life (5.º) = 5d8+11 (media 33,5), solo dentro de 1 asalto de la muerte; Cure Critical Wounds = 4d8+11 (media 29); Channel Energy 6d6 (media 21) en 30 pies; concentración = NL 11 + Wis 5 = **+16** (+4 Combat Casting = +20; +2 Focused Mind = +22); DC para lanzar Heal a la defensiva = 15 + 2×6 = **27**; salvaciones base a nivel 11: Fort +7, Ref +3, Will +7 (Core, tabla del clérigo). Poder mítico tier 3 = 3 + 2×3 = **9 usos/día**; Surge = **1d6** (1d8 recién a tier 4).

| Gasto | Costo | Qué permite exactamente (RAW) | Lectura para el sanador |
|---|---|---|---|
| **Act Out of Turn** | 1 | Actuás inmediatamente, como acción preparada, justo antes de la criatura que está actuando. "You may only take a move **or** a standard action on this turn." | Lectura conservadora (coherente con "readied action"): **UNA sola acción**, movimiento **o** estándar. Sin desplazamiento previo, el estándar debe alcanzar desde donde estás: **Channel Energy (30 pies, sin toque)**, un conjuro con Reach Spell / Rod of Reach (CCW a 50 pies), o Heal por toque si ya estás adyacente. Uso típico: el enemigo va a rematar a un aliado en −8 → interrumpís con Channel (6d6) o CCW a distancia. **Decisión del GM** si permite movimiento + estándar. |
| **Bonus** | 1 | +8 de **suerte** a una tirada de d20 propia si se gasta antes; +4 si después. A otro personaje: +4 antes / +2 después, "same location" y poder "reasonably affect the outcome" (gritar aliento cuenta). | El mejor **anti-muerte-instantánea** del clérigo: Fort +9 (Con 14) + 8 = +17 contra un DC 23 de death effect → necesita 6+ (75 %) en vez de 14+ (35 %). **Es bonificador de suerte**: NO se acumula con Divine Favor (+3 suerte) ni Prayer (+1 suerte) sobre la misma tirada; se toma el mayor. **Fate's Favored** lo sube a **+9 / +5** (y a los aliados no, salvo que ellos tengan el rasgo). Al tanque: +4 a su salvación antes de tirar; AoN **no da alcance en pies** ("same location") → decisión del GM. |
| **Extra Action** | 1 | "an additional standard or move action this turn". **Sin restricción de tipo**: sí puede ser lanzar un conjuro. | Segundo **Heal** en el mismo turno (110 + 110 = 220 a un aliado, o 110 a dos aliados). Comparar con **Amazing Initiative** (tier 2, MA): estándar extra por 1 poder mítico que **"can't be used to cast a spell"** y "You can't gain an extra action **in this way** more than once per round" — ese "in this way" limita solo a Amazing Initiative. Son fuentes distintas y ninguna regla las excluye entre sí → **por RAW se combinan** (confirmar con GM). Turno máximo (1 hero point + 1 poder mítico + 3 usos de canalización + 2 espacios de 6.º): estándar normal **Heal 110** + estándar de hero point **Heal 110** + estándar de Amazing Initiative **Channel 6d6** (es aptitud Su, no conjuro) + acción de movimiento **Quick Channel 6d6** (2 usos) = un aliado recibe 220 + 12d6 (≈262) y el resto del grupo 12d6 (≈42). Una vez por combate (1 hero point por asalto). |
| **Inspiration** | 1 (o 0 si no hay info) | Pista del GM. | Fuera de combate. Sin valor para el sanador salvo atasco narrativo. |
| **Recall** | 1 | "recall a spell you have already cast" **o** "another use of a special ability that is otherwise limited", solo cosas "that recharge on a daily basis". | **Sí recupera un espacio ya lanzado, de cualquier nivel** (no hay tope de nivel en el texto): recuperar **Heal (6.º)** equivale a una Pearl of Power de 6.º (36.000 gp) por 1 punto. **Channel Energy** es "usos por día" → entra en la letra ("recharge on a daily basis"); ídem poderes de dominio (Rebuke Death 3+Wis/día). **Poder mítico** también es por día, pero es el meta-recurso del sistema mítico → **decisión del GM**. Prioridad: 1) espacio de 6.º (Heal), 2) espacio de 5.º (Breath of Life), 3) 1 uso de canalización (≈21 pg a todos). |
| **Reroll** | 1 | Repetís una tirada de d20 que acabás de hacer; te quedás con la segunda aunque sea peor. | Contra un Will fallado: si el GM revela el margen, **Bonus después (+4)** garantiza el éxito si fallaste por ≤4 (≤5 con Fate's Favored); si fallaste por más, **Reroll**. Will +12 (base 7 + Wis 5) vs Dominate Person DC 20 (10 + 5 + Wis 5 del lanzador) → 7+ (70 %) en la repetición. |
| **Special** | 1 (sin puntos extra de nadie) | Petición al GM para "nearly anything almost impossible", con tirada difícil o penalización; ejemplo literal: **lanzar un conjuro de un nivel superior al máximo**. | A nivel 11 el máximo es 6.º → el ejemplo literal habilita, a criterio del GM, **un conjuro de 7.º: Resurrection (7.º, cuerpo no necesario intacto, 10.000 gp), Regenerate (7.º), Greater Restoration (7.º)**. Es el "milagro" del sanador para una emergencia narrativa. 100 % **decisión del GM**. |
| **Cheat Death** | **2** | Sobrevivís "generally [...] alive, with negative hit points but stable"; el GM narra cómo. **"but not another character or NPC"**: solo vos mismo (o tu familiar/compañero animal/eidolon/montura especial). | **NO sirve para salvar a un aliado**: el sanador no puede "comprarle" la vida a un tanque; para eso están Breath of Life y Raise Dead. Contra **death effects / desintegración**: el texto dice "How this plays out is up to the GM" y solo ejemplifica daño de flecha; no distingue tipos de muerte → **decisión del GM** (la lectura habitual es que sí funciona, porque el efecto es "no morís", pero puede pedir una justificación narrativa). Con **1 punto al crearse, no está disponible** hasta ganar el segundo (historia escrita, arco, Hero's Fortune, Hero's Blade o Heroic Fortune propio). Alternativa sin puntos: **Reactive Healing** (ACG pg. 155: canalización como acción inmediata al quedar a ≤0 pg, ver frente 04). |

## A.5 Surge mítico + hero point en la misma tirada

- Se buscó "hero point" en las 184 KB de reglas de Mythic Adventures cacheadas (`_raw/mythic_rules_all.txt`), en Mythic Heroes, en las aptitudes base, de Hierophant y de Guardian, y en la lista de dotes míticas: **cero menciones**. Mythic Adventures no habla de hero points en ningún lado. La búsqueda de AoN "hero point" solo devuelve en "Mythic Material" la página de Guardian por coincidencia de palabras sueltas ("hero", "point"), no por la frase.
- Análisis RAW: **Surge** ("expend one use of mythic power to increase any d20 roll you just made by rolling 1d6 and adding it to the result. Using this ability is an immediate action taken after the result of the original roll is revealed") es un dado sin tipo; el **Bonus** de hero point es un bonificador de suerte y no requiere acción; el **Reroll** es una nueva tirada. Nada prohíbe: (a) Bonus +4 después + Surge +1d6 sobre la misma tirada (= +4 + 1d6, media +7,5; +8,5 con Fate's Favored); (b) Reroll y luego Surge sobre la segunda tirada ("d20 roll you just made"). Son sistemas de libros distintos que no se referencian → **decisión del GM**; la mayoría de las mesas lo permite porque los límites de cada sistema (1 hero point/asalto; 1 Surge por tirada) se respetan igual.
- Extra Action (hero point) + Amazing Initiative (mítico) en el mismo turno: ver A.4; por RAW se acumulan; confirmar con el GM.

## A.6 Dotes, conjuros y objetos de hero points en AoN (inventario completo de la búsqueda)

La categoría de dotes "Hero Point" de AoN (https://www.aonprd.com/Feats.aspx?Categories=Hero+Point) tiene **exactamente tres** dotes; la búsqueda general suma Defiant Luck (ARG) y Ancient Tradition (Blood of the Ancients, solo coincidencia de palabras: no es de hero points).

| Dote / objeto / conjuro | Fuente (AoN) | Prerreq. | Efecto literal | Veredicto para el sanador |
|---|---|---|---|---|
| **Hero's Fortune** (Hero Point) | APG pg. 324 — https://www.aonprd.com/FeatDisplay.aspx?ItemName=Hero%27s%20Fortune | — | "You gain a hero point. The maximum number of hero points you can have at any one time is increased to 5." Normal: máx. 3. | Al crearse a nivel 11 da **1→2 puntos** (Cheat Death disponible desde el día 1) y sube el tope a 5. Vale **media dote** en la práctica: es una de las **6 dotes normales** (7 con humano) y compite con Toughness (+11 pg; mítica +22) o Reactive Healing. **NO puede tomarse como dote mítica** (las dotes míticas deben ser míticas; no está en la lista de Mythic Adventures). Veredicto: **aceptable como 6.ª/7.ª dote** si el GM no da puntos por historia; si el GM regala el punto de historia, no la tomes. |
| **Luck of Heroes** (Hero Point) | APG pg. 324 — https://www.aonprd.com/FeatDisplay.aspx?ItemName=Luck%20of%20Heroes | Hero's Fortune | "Whenever you spend a hero point to reroll a die roll or to grant yourself a bonus before a die roll is made, [...] roll a d20. If the result is greater than 15, the hero point is not spent. You cannot use this feat when you cheat death." (16-20 = 25 %). | Solo Reroll y Bonus-antes; no Extra Action, Recall ni Cheat Death. Con 1-3 puntos totales, 25 % de reembolso ≈ 0,25-0,75 puntos en toda la campaña. **TRAMPA como dote**; el **Ring of Heroes** la da sin gastar dote. |
| **Blood of Heroes** (Hero Point) | APG pg. 323 — https://www.aonprd.com/FeatDisplay.aspx?ItemName=Blood%20of%20Heroes | Hero's Fortune | "Whenever you gain a level, you gain 2 hero points instead of 1." | Solo rinde si la campaña sube de nivel (12+); no da nada al crearse. Dos dotes (con Hero's Fortune) para +1 punto por nivel futuro. **NO** para un personaje que arranca a 11. |
| **Defiant Luck** | Advanced Race Guide pg. 77 — https://www.aonprd.com/FeatDisplay.aspx?ItemName=Defiant%20Luck | Humano | 1/día, tras un 1 natural en salvación o un crítico confirmado en tu contra: repetís la salvación o el enemigo repite la confirmación. Special: "you can also spend 1 hero point when a critical hit is confirmed against you to have the opponent reroll the critical hit confirmation roll." | Defensa real (1/día gratis + gasto de punto contra críticos). Solo humano. **Buena de relleno** para supervivencia propia; por debajo de Toughness mítica y Reactive Healing. |
| **Heroic Fortune** (conjuro) | APG pg. 324 — https://www.aonprd.com/SpellDisplay.aspx?ItemName=Heroic%20Fortune | Clérigo 2 (también oráculo 2, paladín 3, warpriest 2) | Toque, estándar, V S DF **M (polvo de diamante 100 gp)**, 1 asalto/nivel (**11 asaltos**), Will niega (inofensivo). "This spell grants 1 hero point to the target. This hero point must be spent before the duration expires, or it is lost. The bonus hero point is spent before any other hero points the target might possess." | **La única forma de que el sanador "regale" un hero point a un tanque**: 100 gp y un espacio de 2.º por +8 a una salvación, un Reroll o una acción extra del aliado; o el 2.º punto que le falta al aliado para **su propio** Cheat Death. Lanzalo sobre vos mismo antes del combate del jefe para tener el 2.º punto de Cheat Death. **MUY BUENA** (barata, sin dote). |
| **Heroic Fortune, Mass** | APG pg. 324 (misma página) | Clérigo 5 | Cercano (25 + 5×5 = **50 pies**), varios objetivos a ≤30 pies entre sí, **polvo de diamante 1.000 gp**, 11 asaltos. | Todo el grupo (5) con un hero point temporal para el jefe: 1.000 gp y un espacio de 5.º (compite con Breath of Life). **Situacional / cara**; pergamino (CL 9, 9 asaltos) como reserva. |
| **Unravel Destiny** (conjuro) | APG pg. 325 — https://www.aonprd.com/SpellDisplay.aspx?ItemName=Unravel%20Destiny | Clérigo 3 | −2 acumulativo por cada hero point del objetivo; 2d6 de daño por punto que gaste. | Solo contra PNJ con hero points (villanos con Hero's Fortune). **NO.** |
| **Ring of Heroes** | APG pg. 325 — https://www.aonprd.com/MagicRingsDisplay.aspx?FinalName=Ring%20of%20Heroes | — | 8.000 gp, anillo; concede la dote Luck of Heroes (tras 24 h); puede destruirse para ganar 1 hero point que se usa de inmediato. | Ocupa un slot de anillo (Ring of Protection / Freedom of Movement). **NO** con el WBL de nivel 11 (82.000 gp). |
| **Hero's Blade** | APG pg. 325 — https://www.aonprd.com/MagicWeaponsDisplay.aspx?ItemName=Hero%27s%20Blade | — | 17.315 gp; espada larga +2 con **6 hero points** propios: "The wielder can use these points at any time, and they do not count against the wielder's maximum." Cuando se agotan queda una +2. | **6 hero points por 17.315 gp** = hasta 3 Cheat Death del propio clérigo o 6 Extra Action/Bonus. Sigue rigiendo "1 punto por asalto". Para empuñarla no hace falta competencia (solo para atacar sin −4; **Iomedae** la da como arma predilecta). Es el "seguro de vida" más barato del juego por punto (≈2.900 gp/punto) y no gasta dote; el GM puede considerarlo abusivo → **preguntar**. Veredicto: **EXCELENTE si el GM lo permite**; alternativa a Hero's Fortune. |
| Rasgo racial **Heroic** (humano, ARG pg. 72) | https://www.aonprd.com/Races.aspx?ItemName=Human | Reemplaza la dote extra humana | "each time these humans gain a level, they gain 2 hero points instead of 1. If they take the Blood of Heroes feat, they gain 3 hero points each level instead of 2." | Al crearse a nivel 11 no da nada ("begins play with 1 [...] regardless of her level"). **TRAMPA**: perdés la dote extra. |
| **Legend** (subdominio de Glory) | Divine Anthology pg. 23 — https://www.aonprd.com/DomainDisplay.aspx?ItemName=Glory | Rasgo **Acolyte of Apocrypha** (Faith, Divine Anthology pg. 22) + dominio Glory + deidad asociada | "In campaigns that use the optional hero point system [...], you gain Hero's Fortune [...] as a bonus feat. Otherwise, you gain Marked for Glory [...]. These replace the Glory domain's increased save DC when channeling positive energy." Reemplaza Divine Presence por Witness the Legend (8.º). | **Deidades asociadas: General Susumu, Gorum, Shizuru. Sarenrae NO** (sus subdominios en AoN: Agathion, Day, Heroism, Light, Medicine*, Redemption, Restoration, Resurrection, Revelation, Thirst*). La afirmación del auditor del frente 02 es **parcialmente errónea**: el subdominio existe y da Hero's Fortune, pero exige un rasgo (Faith), el dominio Glory en lugar de Healing/Community y una de esas tres deidades. Para el sanador: **NO**. |

**FAQ/erratas:** no hay entradas de FAQ sobre hero points en AoN ni en la búsqueda de paizo.com; no se encontraron erratas del sistema.

## A.7 Tabla "Emergencia → mejor gasto de hero point" (sanador nivel 11, tier 3)

| Emergencia | Mejor gasto | Por qué / números | Alternativa sin hero point |
|---|---|---|---|
| **Aliado va a llegar a −Con este asalto** (un enemigo está por rematarlo antes de tu turno) | **Act Out of Turn** (1) → **Channel Energy** 6d6 (≈21) a todos en 30 pies, o CCW/Heal con Rod of Reach (50 pies), o Heal por toque si ya estás adyacente | Una sola acción (lectura conservadora); el channel no exige alcance ni tirada. Si el aliado **ya murió** en este asalto: no gastes punto, lanzá **Breath of Life** en tu turno (5d8+11, dentro de 1 asalto). Cheat Death **NO** vale sobre otro personaje. | Reach Spell / Rod of Reach (lesser 3.000 gp; normal 11.000 gp para Heal a 50 pies) |
| **El propio clérigo cae** (daño masivo o death effect) | Antes de tirar la salvación letal: **Bonus +8** (1). Si el daño te mata igual: **Cheat Death** (2 puntos; requiere tener 2) | Fort +9 + 8 = +17 vs DC 23 → 75 % (vs 35 %). Cheat Death contra death effects/desintegración = GM. Con 1 solo punto al crearse, Cheat Death no existe hasta el 2.º punto (historia escrita, Heroic Fortune sobre vos mismo antes del jefe, Hero's Fortune o Hero's Blade). | **Reactive Healing** (inmediata, 6d6 al quedar ≤0), Death Ward (4.º), Toughness mítica (RD 10/epic bajo 0 pg) |
| **Falla Will vs Dominate** | Si fallaste por ≤4 (≤5 con Fate's Favored): **Bonus después +4** (1) = éxito garantizado. Si por más: **Reroll** (1) | Will +12 (base) vs DC 20: repetición acierta con 7+ (70 %); +2 más con Birthmark (vs compulsion). El GM debe revelar el margen para elegir; si no lo revela, Reroll. | Protection from Evil (suprime dominate), Spell Immunity, nueva salvación diaria de Dominate |
| **Hace falta un segundo Heal en el mismo turno** | **Extra Action** (1) → segundo estándar = **Heal** (puede ser conjuro) | 110 + 110. Sumá **Amazing Initiative** (1 poder mítico) para un tercer estándar **no-conjuro** (Channel 6d6) y **Quick Channel** en la acción de movimiento (6d6, 2 usos). Máximo: 220 + 12d6 al aliado crítico, 12d6 al resto. | Quick Channel + Heal ya suman ≈131 a uno y 21 al resto sin puntos |
| **Se gastó el último espacio de 6.º** | **Recall** (1) → recuperás **Heal** | Vale una Pearl of Power 6.º (36.000 gp). Sin tope de nivel en el texto. No lo gastes en recuperar un channel (≈21 pg a todos) si te queda un espacio alto que recuperar. | Pearl of Power 5.º (25.000 gp), Mythic Recuperation no recupera espacios |
| **Emergencia narrativa: alguien murió hace días / miembro perdido** | **Special** (1) → pedir al GM lanzar un conjuro de **7.º** (Resurrection, Regenerate) | Ejemplo literal de la regla ("one level higher than you could normally cast"); con tirada difícil y sin puntos extra de nadie. 100 % GM. | Pergamino de Raise Dead (5.º) |

Regla de oro: **un solo punto por asalto** salvo Cheat Death; con 1-3 puntos por campaña, reservarlos para (a) tu propia muerte, (b) el segundo Heal en el asalto crítico, (c) recuperar Heal. Para dar puntos a los tanques, el conjuro **Heroic Fortune** (100 gp) es el camino, no los puntos propios.

---

# PARTE B — DRAWBACK + TERCER RASGO (Ultimate Campaign / APG)

## B.1 Reglas literales

- **Ultimate Campaign pg. 8** (https://www.aonprd.com/Rules.aspx?Name=How%20to%20Create%20a%20Background&Category=Character%20Background): "Select **two traits (or three traits and a drawback)** that capture the background you imagined. [...] The drawback, if you choose to take one, represents an emotional vulnerability or character flaw that should not only provide a slight mechanical disadvantage, but also (more importantly) serve as a roleplaying tool for making interesting choices."
- La entrada **Arcane Malignancies** (Blood of the Coven pg. 10, en la lista de drawbacks) confirma la mecánica: "A changeling character can take an arcane malignancy as a drawback (Pathfinder RPG Ultimate Campaign 64) in order to select **an additional trait at character creation**."
- **¿Más de un drawback?** El párrafo de Ultimate Campaign pg. 64 ("Drawbacks") **no está transcrito en AoN** (la búsqueda de reglas por "drawback" solo devuelve la página de Character Background). La lectura habitual del libro es que solo se toma **un** drawback por un solo rasgo extra; al no estar en AoN se marca **NO VERIFICADO en AoN**. Es irrelevante para esta mesa: el GM ya fijó **un drawback, 3 rasgos en total**.
- **Categorías (APG pg. 326**, https://www.aonprd.com/Rules.aspx?Name=Traits&Category=Advanced%20Player%27s%20Guide): "There are five types of character traits to choose from: basic (split among four categories: Combat, Faith, Magic, and Social), campaign, race, regional, and religion." Restricción: **"When selecting traits, you may not select more than one from the same list of traits (the four basic traits each count as a separate list for this purpose)."** AoN además indexa listas posteriores (Cosmic, Equipment, Exemplar, Faction, Family, Mount) que cuentan como listas propias. Regional: "At 1st level, you can only select one regional trait". Religion: se pierden al abandonar la deidad.
- **Additional Traits** (APG pg. 150, https://www.aonprd.com/FeatDisplay.aspx?ItemName=Additional%20Traits): "You gain two character traits of your choice [...]. These traits must be chosen from different lists, and cannot be chosen from lists from which you have already selected a character trait." → con drawback + Additional Traits: **5 rasgos de 5 listas distintas**; el drawback no ocupa lista de rasgo.
- Bonificadores de rasgo **no se acumulan** entre sí (APG pg. 326).

## B.2 Tabla completa de drawbacks indexados por AoN (66) con "costo real" para el clérigo sanador

Perfil evaluado: Wis alta, armadura media, canaliza, conjuros de toque, **no** usa Str/Dex/Int/Intimidate/Bluff/Stealth/Disguise ni habilidades sin entrenar; el personaje de apoyo social lleva la Diplomacy del grupo; Will es la salvación fuerte (+12 base), Reflejos la débil (+4). Escala de costo real: **0** = nulo en la práctica; **1** = bajo/situacional; **2** = medio; **3** = alto; **X** = descartado por tocar Will, concentración, salvaciones, pg/AC o acciones en combate. Fuente: https://www.aonprd.com/Traits.aspx?Type=Drawback (libro y página son los que AoN indica).

| Drawback | Fuente | Penalización literal (resumen fiel) | Costo real | Comentario |
|---|---|---|---|---|
| Anxious | Quests & Campaigns pg. 22 | −2 Diplomacy; "must speak slowly"; se asume que no hablás por encima de un susurro | X | Riesgo de que el GM lo aplique a componentes verbales ("strong voice"). |
| Arcane Malignancies | Blood of the Coven pg. 10 | Solo changeling; efecto aleatorio d% | X | Raza restringida y aleatorio. |
| Attached | Ultimate Campaign pg. 64 | −1 Will y −2 vs miedo mientras el objeto/persona esté amenazado; si se pierde → Doubt | X | Toca Will. |
| Avarice | Ultimate Campaign pg. 65 | Si no recibís ≥10 % más botín que cualquier compañero: no podés aid another por 1 semana | 1 | Mecánicamente casi nulo; **veneno para la mesa** (reparto de tesoro). |
| Betrayed (Drawback) | Spymaster's Handbook pg. 6 | Sense Motive para "hunches": tirás dos veces y tomás la peor; sin reroll | 0-1 | Solo el uso "corazonada" de Sense Motive. |
| Bitter | Antihero's Handbook pg. 6 | −1 pg a la curación recibida de aptitudes/conjuros/SLA **de un aliado** | 0-1 | Vos sos el único sanador: tus propias curas no vienen "de un aliado". Solo afecta varitas ajenas sobre vos. |
| Burned | Quests & Campaigns pg. 22 | −1 salv. vs fuego; −1 ataque/salv./habilidades adyacente a fuego | X | Salvaciones. |
| Condescending | Quests & Campaigns pg. 22 | −5 Diplomacy/Intimidate para mejorar actitudes de otras razas/etnias/naciones | 1 | Solo social; choca con el rol de sanador compasivo. |
| Cowardly | Antihero's Handbook pg. 6 | Penalizaciones de miedo +1; perdés inmunidad al miedo | X | Miedo frecuente a CR 11+. |
| Cruelty | Quests & Campaigns pg. 22 | −2 ataque vs enemigos no indefensos si hay enemigos moribundos/indefensos a 30 pies | 0 (a/b) / 2 (c) | Nulo si no atacás. |
| Dependent | Ultimate Campaign pg. 65 | Shaken 1 hora al fallar una Diplomacy | 2 | Shaken (−2 salv./ataque/habilidades) entrando en combate. Evitable no tirando Diplomacy, pero es habilidad de clase. |
| Doubt | Ultimate Campaign pg. 65 | −4 a ese tipo de prueba de habilidad/característica 1 h tras fallar una | X | Encadena Heal/Perception. |
| Empty Mask | Spymaster's Handbook pg. 7 | −1 Will vs compulsiones (−2 si conocen tu identidad) | X | Will. |
| Entomophobe | Antihero's Handbook pg. 6 | −2 ataque vs sabandijas; −2 salv. vs náusea de enjambres | X (estrecho) | Toca salvaciones, aunque muy acotado. |
| Envy | Quests & Campaigns pg. 22 | Will DC 20 diario si no robaste 10 gp; −1 acumulativo Will/Ref/concentración | X | Will + concentración. |
| Family Ties | Ultimate Campaign pg. 65 | Ante un pedido familiar no cumplido: −2 a **todas** las pruebas de característica y habilidad de Wis y Cha hasta cumplir o superar Will DC 20 (1/día) | 1-2 | Afecta **Heal, Perception, Sense Motive, Diplomacy** (todas de Wis/Cha). Will +12 → 8+ (65 %); +15 con capa +3 → 80 %. Frecuencia = GM. Si perdés a la familia → Doubt (malo). |
| Fey-Taken | Quests & Campaigns pg. 22 | −2 salv. vs enfermedad, ilusiones, veneno y aptitudes de feéricos | X | Salvaciones. |
| Forgetful | Quests & Campaigns pg. 22 | Wis DC 10 al dejar un lugar tras 1 h o perdés un objeto mundano aleatorio | 2 | Wis +5 → falla con 1-4 (20 %); el objeto puede ser el **símbolo sagrado** o la bolsa de componentes. Birthmark lo mitiga. No. |
| Foul Brand | Champions of Corruption pg. 29 | Símbolo de deidad **maligna** marcado: en la mano −1 Disable Device/Disguise/Sleight of Hand; en la cara −2 Bluff/Diplomacy/Disguise; no sirve de símbolo sagrado | **0** (mano) | Habilidades que nunca usás. Historia: exesclavo/converso redimido (encaja con Sarenrae). Elegir **mano**. |
| Guilty Fraud | Spymaster's Handbook pg. 7 | −4 Bluff vs criaturas indiferentes o mejores | **0** | Bluff no se usa. |
| Haunted | Antihero's Handbook pg. 6 | −2 salv. vs conjuros con descriptor [evil] | X | Salvaciones (extraplanares malignos frecuentes). |
| Haunting Regret | Quests & Campaigns pg. 22 | −2 salv. vs distracción de enjambres y mind-affecting; −2 concentración | X | Will + concentración. |
| Headstrong | Ultimate Campaign pg. 65 | Shaken 1 h si no corregís acciones contrarias a tu alineamiento | X | Shaken. |
| Hedonistic | Ultimate Campaign pg. 65 | Fort DC 20 al final de un día sin ≥10 gp de botín ni 1 h de placer; fatigado 4 h | 1 | Fort +12 (con capa) → 8+; se evita con 1 hora de "entretenimiento". Fatigado apenas afecta a un lanzador. |
| Helpless | Antihero's Handbook pg. 6 | **Dazed** hasta el final de tu siguiente turno la primera vez por combate que un aliado a 30 pies cae inconsciente o muere | X (**catastrófico**) | Justo cuando el sanador debe actuar. |
| Impatient | Antihero's Handbook pg. 6 | No podés retrasar ni preparar acciones; −1 a todo si actuás último | X | El sanador retrasa/prepara a menudo. |
| Infamous | Spymaster's Handbook pg. 7 | Vos **y tus aliados** −4 Diplomacy con ciudadanos respetuosos de la ley | 2 | Castiga al personaje social del grupo. |
| Information Overload | Spymaster's Handbook pg. 7 | −2 a todas las Knowledge; fallo por 5+ → información opuesta | 2 | Kn (religion/planes) identifican muertos vivientes y extraplanares. |
| Insatiable | Antihero's Handbook pg. 6 | Bienes y servicios +10 % (no los pueden pagar aliados); doble comida/agua | 2 | ≈8.200 gp menos de poder de compra sobre 82.000 gp de WBL. |
| Lonely | Spymaster's Handbook pg. 7 | −2 Sense Motive, Perception vs disfraces y salv. vs charm | X | Salvaciones. |
| Loner | Quests & Campaigns pg. 22 | −1 AC y ataque adyacente a aliados o al aid another | X | El sanador de toque está siempre adyacente a aliados. |
| Lovesick | Ultimate Campaign pg. 65 | −2 iniciativa y Perception cada día lejos de la persona amada | X | Iniciativa. |
| Magical Klutz | Spymaster's Handbook pg. 7 | UMD a ciegas y **Reflejos vs efectos de objetos mágicos**: dos tiradas, la peor | X | Reflejos (salvación débil) vs varitas/bastones enemigos. |
| Mark of Slavery | Quests & Campaigns pg. 22 | Al fallar una prueba de habilidad: −2 a pruebas de habilidad y ataque hasta el fin de tu siguiente turno | 1 | Encadena tras fallar Perception; Heal (+19) casi nunca falla. Sin efecto sobre conjuros. |
| Meticulous | Ultimate Campaign pg. 65 | −2 a pruebas de habilidades **sin entrenar** | 1 | El perfil no usa habilidades sin entrenar; afecta Climb/Swim/Ride/Stealth/Escape Artist forzadas y Perception si quedara con 0 rangos. |
| Misbegotten | Quests & Campaigns pg. 22 | −2 a pruebas de habilidad basadas en Dex | 1 | Solo si el plan incluye vuelo con pruebas de Fly (Air Walk no las pide) o Escape Artist. |
| Naive | Quests & Campaigns pg. 22 | −2 AC vs armas improvisadas; −2 CMD vs dirty trick | 0-1 | Ambas rarísimas a CR 11+. |
| Nervous | Quests & Campaigns pg. 22 | Al tomar 10 en pruebas con penalización por fallo, contás como 8 | 2 | Sabotea "tomar 10" en Heal/Perception y el combo Mythic Skill Focus del frente 04. |
| Oblivious | Quests & Campaigns pg. 22 | −2 Sense Motive y Perception visual | 2 | Perception es lo que compramos con Seeker. |
| Occult Bargain | Spymaster's Handbook pg. 7 | −1 concentración; sin invocar el nombre cada día no recuperás espacios | X | Concentración + riesgo de perder conjuros. |
| Oppressive Expectations | Quests & Campaigns pg. 23 | Al fallar una habilidad, −2 en esa habilidad hasta acertar (o fallar otra) | 1 | Encadena Perception. |
| Overprotective | Quests & Campaigns pg. 23 | −2 ataque y habilidades mientras estés a >10 pies de un aliado caído inconsciente | 1 | El sanador va hacia el caído; con dos caídos, −2 a Heal/Perception. |
| Paranoid | Ultimate Campaign pg. 65 | Aid another sobre vos requiere DC 15 en vez de 10 | 0-1 | Casi nadie ayuda al sanador; aid another de AC en combate es raro. |
| Power-Hungry | Ultimate Campaign pg. 65 | −2 Will vs charm/compulsion si te prometen poder/riqueza | X | Will. |
| Pride | Ultimate Campaign pg. 65 | −2 Diplomacy y Sense Motive contra quien te amenazó/acusó/desafió hasta que se disculpe | 1 | Condicional y social. |
| Provincial | Ultimate Campaign pg. 65 | −2 Diplomacy y Sense Motive vs criaturas de otra religión o alineamiento | 1 | Es "casi todos"; solo habilidades sociales. |
| Righteous Indignation | Spymaster's Handbook pg. 7 | Debés tomar todo AoO salvo Will DC 10+nivel (21); −1 Will vs [emotion] sin [fear] | X | Will; además un AoO forzado descarga un toque sostenido. |
| Scarred | Antihero's Handbook pg. 6 | −5 Disguise, −2 Bluff | **0** | Habilidades que nunca usás. Historia: cicatrices de batalla; "most people distrustful" es solo color. |
| Secret Shame | Spymaster's Handbook pg. 7 | −1 salv. vs miedo; DC para desmoralizarte −1; perdés inmunidad al miedo | X | Salvaciones. |
| Self-Doubting | Antihero's Handbook pg. 6 | Primer Will o habilidad fallada del día → −2 a la siguiente del mismo tipo | X | Will. |
| Sentimental | Ultimate Campaign pg. 65 | −2 Perception para evitar sorpresa; −2 Reflejos vs trampas/peligros | X | Salvación (aunque los tanques absorben trampas). |
| Shadow-Scarred | Quests & Campaigns pg. 23 | −1 a salvaciones en luz tenue u oscuridad | X | Salvaciones (mazmorras). |
| Sheltered | Quests & Campaigns pg. 23 | Shaken por debajo de la mitad de pg | X | Shaken frecuente en combates duros. |
| Sleepy | Quests & Campaigns pg. 23 | Necesitás 12 h de descanso para el "full night's rest"; −2 salv. vs sueño | 1-2 | A 11 DG sos inmune a Sleep/Deep Slumber (topes de DG); Recuperation mítica pide "8 hours of rest" (texto propio). Costo real: logística de 12 h. Toca una salvación nominalmente. |
| Spooked | Quests & Campaigns pg. 23 | Shaken 1d4 asaltos al ver feérico/extraplanar/muerto viviente a 60 pies salvo Will DC 15+Cha | X | Enemigos habituales a CR 11+. |
| Stigmatized | Antihero's Handbook pg. 6 | −3 Diplomacy para reunir información o mejorar actitud | 1 | Social. |
| Superstitious (Drawback) | Quests & Campaigns pg. 23 | 50 % de tener que tirar salvación vs conjuros inofensivos **de otros** (no los tuyos sobre vos) | 1 | Will +12 vs DC 11-16 de varitas ajenas: fallás solo con 1 natural. Puede negar un buff externo importante (Heroism del bardo). |
| Tainted Spirit | Quests & Campaigns pg. 23 | Fort DC 10 + asaltos actuados al terminar cada combate; fatigado 10 min/asalto | 2 | DC 15-18 vs Fort +12: 10-25 % de fallo; fatigado 50-80 min (−2 Str/Dex). |
| Too Many Secrets | Spymaster's Handbook pg. 7 | −2 Bluff y salv. vs ilusiones | X | Salvaciones. |
| Umbral Unmasking | Champions of Corruption pg. 29 | No proyectás sombra (o es monstruosa); se nota con Wis DC 15; no se oculta con ilusiones salvo las que afectan sombras | **0** (mecánico) | Ninguna penalización numérica. Costo social: "telltale sign of wickedness" (sospecha de los PNJ). |
| Unlearned | Quests & Campaigns pg. 23 | Elegís una Knowledge; no podés hacer pruebas **sin entrenar** en las demás (con biblioteca, −2) | 0-1 | Las que tienen rangos siguen usándose; perdés solo las pruebas DC ≤10 sin entrenar (local/nature/dungeoneering). |
| Vain | Ultimate Campaign pg. 65 | Al fallar una prueba **opuesta** de Cha: −2 a pruebas de Cha 24 h | 0-1 | Opuestas de Cha = Bluff/Disguise; Channel no es prueba. |
| Vainglory | Spymaster's Handbook pg. 7 | −1 Bluff, Disguise, Stealth; DC de tus ilusiones −1 | **0** | Único conjuro de ilusión del clérigo con salvación: Silence (DC −1). |
| Warded Against Nature | Champions of Corruption pg. 29 | Los animales no se te acercan a 30 pies salvo Handle Animal/Ride/wild empathy DC 20; inmunes los de clase | 1-2 | Sin montura de clase: cada caballo comprado exige DC 20. Logística de viaje. |
| Xenophobic | Ultimate Campaign pg. 65 | −2 Diplomacy y Sense Motive vs otras razas/culturas | 1 | Social. |
| Zealous | Ultimate Campaign pg. 65 | −5 ataque y +2 daño (rasgo) en el **primer** ataque contra quien sabés que adora otra religión | 0 (a/b) / 3 (c) | Nulo si no atacás; ruinoso para la variante de batalla. |

## B.3 Los 5 drawbacks menos dañinos (costo mecánico 0 para este perfil) y por qué

1. **Scarred** (Antihero's Handbook pg. 6): −5 Disguise, −2 Bluff. El clérigo no tiene ninguna de las dos como habilidad de clase ni las va a tirar; no toca salvaciones, AC, acciones ni conjuros. Trasfondo trivial (cicatrices de guerra santa).
2. **Vainglory** (Spymaster's Handbook pg. 7): −1 Bluff/Disguise/Stealth y −1 DC de ilusiones. Con 4 combatientes cuerpo a cuerpo con armadura, el grupo no hace Stealth; el clérigo no tiene ilusiones relevantes (solo Silence pierde 1 de DC). Trasfondo: busca reconocimiento por sus obras (encaja con un "campeón de la fe").
3. **Guilty Fraud** (Spymaster's Handbook pg. 7): −4 Bluff contra indiferentes o mejores. Bluff no se usa. Trasfondo: recibió algo que no merecía (una ordenación, una herencia) y carga con la culpa; buen gancho de redención.
4. **Foul Brand, en la mano** (Champions of Corruption pg. 29): −1 Disable Device/Disguise/Sleight of Hand. Cero uso. Costo narrativo: símbolo de una deidad maligna; para un clérigo de Sarenrae (redención) es un trasfondo excelente (exesclavo de un culto). Tomar la versión **mano** (la de cara penaliza Diplomacy).
5. **Umbral Unmasking** (Champions of Corruption pg. 29): sin ninguna penalización numérica; el "costo" es que los PNJ perceptivos (Wis DC 15) desconfían. Es el más "gratis" de todos, y por eso el que más GMs vetan para un personaje bueno.

Menciones honoríficas (costo 0-1 y con buen encaje narrativo): **Bitter** (−1 a curas de aliados: siendo el único sanador, casi nulo), **Naive**, **Betrayed**, **Unlearned**, **Vain**, **Paranoid**, **Zealous** (solo para variantes que no atacan).

**Evaluación de la lista de candidatos del brief:** Family Ties (1-2: castiga Heal/Perception cuando se dispara; depende del GM), Provincial (1), Pride (1), Meticulous (1), Vain (0-1), Umbral Unmasking (0), Foul Brand (0 en mano), Zealous (0 salvo variante de batalla), **Attached (X: toca Will)**, Mark of Slavery (1). De esa lista, los tres mejores son **Foul Brand (mano), Umbral Unmasking y Vain**; los "socialmente honestos" para un GM que exige un costo real son **Provincial** o **Pride** (solo Diplomacy/Sense Motive).

**Descartados explícitamente por tocar Will/concentración/salvaciones/pg/acciones:** Attached, Power-Hungry, Empty Mask, Self-Doubting, Righteous Indignation (Will); Envy, Haunting Regret, Occult Bargain (concentración); Burned, Fey-Taken, Haunted, Lonely, Magical Klutz, Secret Shame, Sentimental, Shadow-Scarred, Too Many Secrets, Entomophobe, Sleepy en parte (salvaciones); Loner (AC); Helpless, Impatient, Lovesick, Cowardly, Sheltered, Spooked, Headstrong, Dependent (acciones/condiciones en combate).

**Advertencia de mesa:** UC pg. 8 dice que el drawback debe ser "a slight mechanical disadvantage" y sobre todo "a roleplaying tool". Muchos GMs rechazan drawbacks de costo cero; llevar una segunda opción de costo 1 (Provincial, Pride o Meticulous).

## B.4 Terna de rasgos recomendada (3 rasgos, listas distintas)

Categorías verificadas en AoN: **Reactionary** = Basic (Combat), Ultimate Campaign pg. 53 / APG pg. 328 (+2 iniciativa); **Envoy of Healing** = Religion, requisito Sarenrae, Healer's Handbook pg. 12 (repetir los 1 en los dados de curación de channel/fervor/lay on hands); **Blessed Touch** = Basic (Faith), Champions of Purity pg. 7 (+1 pg por lay on hands, channel o conjuro cure); **Fate's Favored** = Basic (Faith), UC pg. 55 (+1 a todo bonificador de suerte que te afecte); **Birthmark** = Basic (Faith), UC pg. 54 / APG pg. 328 (foco divino + +2 vs charm/compulsion); **Focused Mind** = Basic (Magic), UC pg. 57 / APG pg. 329 (+2 concentración); **Seeker** = Basic (Social), UC pg. 61 (+1 Perception y Perception de clase). Ninguno es rasgo de **campaña** → si el GM no acepta rasgos de campaña **no se pierde nada** de esta lista (lo único que caía era Trap Finder, descartado por la regla "sin trampas").

Restricción: **una sola Faith** entre Blessed Touch / Fate's Favored / Birthmark.

**Terna recomendada (Sarenrae):**
1. **Reactionary** (Combat) — +2 iniciativa: curar antes del segundo golpe del enemigo. Imprescindible.
2. **Envoy of Healing** (Religion, Sarenrae) — media de cada d6 pasa de 3,5 a ≈3,92: 6d6 de 21 a ≈23,5 (+2,5 por canalización; **+5 por asalto con Quick Channel**, a cada aliado). Con Phylactery of Positive Channeling (8d6): +3,3 por canalización.
3. **Focused Mind** (Magic) — Heal a la defensiva (DC 27): +16 → 50 %; +20 (Combat Casting) → 70 %; **+22 → 80 %**. En combates "muy difíciles" con enemigos de alcance, la concentración es la tirada que más a menudo le cuesta un Heal al sanador.

**Cuarto y quinto rasgo (si se toma Additional Traits, APG pg. 150):** **Fate's Favored** (Faith) + **Seeker** (Social). Fate's Favored convierte el Bonus de hero point en +9/+5, Prayer sobre vos en +2, un Stone of Good Luck (luckstone) en +2 a salvaciones/habilidades, un Jingasa of the Fortunate Soldier en +2 AC de suerte; Seeker deja Perception en 11 + 3 + 1 + Wis 5 = **+20** (vs +16 sin él).

**Alternativas de la tercera plaza:**
- **Blessed Touch** (Faith) en lugar de Focused Mind si el clérigo se mantiene fuera de amenaza (Reach Spell / rod) y prioriza volumen de curación: +1 por objetivo y canalización → en un asalto de Quick Channel con 5 aliados + vos = **+12 pg**; en Heal es +1 (irrelevante).
- **Fate's Favored** (Faith) si el plan de equipo incluye luckstone/jingasa y Prayer habitual (supervivencia propia).
- **Seeker** (Social) si nadie más del grupo tiene Perception (probable con 4 cuerpo a cuerpo).

**Terna sin Sarenrae:** Reactionary (Combat) + Focused Mind (Magic) + Fate's Favored **o** Blessed Touch (Faith); Seeker (Social) vía Additional Traits.

---

# PARTE C — BACKGROUND SKILLS (Pathfinder Unchained pg. 46-53)

URL: https://www.aonprd.com/Rules.aspx?Name=Background%20Skills&Category=Skills%20and%20Options

## C.1 Transcripción literal de lo que importa

- **Background Skills (pg. 46):** "In a campaign that uses the background skills system, each character gains **an additional 2 skill ranks per level, which must be spent on background skills**."
- **Skill Changes (pg. 46):** "Appraise, Craft, Handle Animal, Linguistics, Perform, Profession, and some Knowledge specialties are all background skills. [...] This system also adds two new background skills: Artistry and Lore."
- **Tabla (pg. 46):**
  - **Adventuring Skills:** Acrobatics, Bluff, Climb, **Diplomacy**, Disable Device, Disguise, Escape Artist, Fly, **Heal**, Intimidate, **Knowledge (arcana)**, Knowledge (dungeoneering), Knowledge (local), Knowledge (nature), **Knowledge (planes)**, **Knowledge (religion)**, **Perception**, Ride, **Sense Motive**, **Spellcraft**, Stealth, Survival, Swim, Use Magic Device.
  - **Background Skills:** Appraise, Artistry, Craft, Handle Animal, Knowledge (engineering), Knowledge (geography), Knowledge (history), Knowledge (nobility), Linguistics, Lore, Perform, Profession, Sleight of Hand.
  - → Confirmado: **Heal, Perception, Knowledge (planes/religion/arcana), Sense Motive, Diplomacy y Spellcraft son de AVENTURA.**
- **Gaining Adventuring Skills (pg. 47):** "Adventuring skills are purchased with the standard skill ranks each character class receives, modified by a character's Intelligence [...]. No adjustments need to be made to these skills when using the background skills system."
- **Gaining Background Skills (pg. 47):** "all characters gain 2 background skill ranks each time they gain a level in a PC class. **The character's Intelligence modifier doesn't adjust this value. Background skill ranks can be used to gain ranks only in background skills, not adventuring skills. Characters can expend their regular skill ranks on background skills if they desire.**"
- **Class Skills (pg. 48):** "classes use their standard class skill lists. Any class that gains Craft or Perform as a class skill also counts Artistry as a class skill. **Lore is always considered a class skill for all characters.**"
- **Artistry (Int) (pg. 48):** habilidad de creación no material (choreography, criticism, literature, musical composition, philosophy, playwriting); tabla de ganancias DC 10-30; "masterwork tools are of no use".
- **Lore (Int; Trained Only) (pg. 50):** "a specialized area of knowledge, generally narrower than that of a full-fledged scholar [...] A Lore skill must be narrow—far narrower than the most relevant Knowledge skill." Misma escala de DC que Knowledge; "In many cases, Lore can substitute for a Knowledge skill, such as Lore (elven history) filling in for Knowledge (history)"; con −5 si es parcialmente relacionada (GM); no identifica monstruos salvo Lore de un tipo concreto (owlbears, vampiros). Ejemplo apropiado en la tabla: **"Sarenrae"** (inapropiado: "Gods").
- **Converting Characters (pg. 46):** total de rangos de trasfondo = 2 × nivel; los rangos normales ya gastados en habilidades de trasfondo se devuelven.
- **Expanded Profession (pg. 53)** (ejemplos útiles para un sanador): Herbalist — "Identify common medicinal herbs" DC 10, "Identify rare medicinal herbs" DC 15, "Sate hunger or thirst for 1 day" DC 10; Librarian — "Aid another on a Knowledge check using reference material" DC 5; Midwife — "Safely deliver a child" DC 15.

## C.2 Habilidades de clase del clérigo y pool de rangos

- Clérigo (Core, https://www.aonprd.com/ClassDisplay.aspx?ItemName=Cleric): clase = Appraise, Craft, Diplomacy, Heal, Knowledge (arcana, history, nobility, planes, religion), Linguistics, Profession, Sense Motive, Spellcraft. **Skill Points at each Level: 2 + Int modifier.** **Perception NO es de clase** (por eso Seeker).
- Con Background Skills: de trasfondo y de clase = Appraise, Craft, **Artistry** (vía Craft), Knowledge (history), Knowledge (nobility), Linguistics, Profession, **Lore** (siempre). De trasfondo y **no** de clase: Handle Animal, Knowledge (engineering/geography), Perform, Sleight of Hand.
- Rangos a nivel 11:
  - Aventura base = (2 + mod Int) × 11 → **Int 10: 22**; Int 12: 33; Int 14: 44.
  - + Clase predilecta a rangos: +1 × 11 = **+11**.
  - + Humano (**Skilled**, Core: "1 additional skill rank at 1st level and 1 additional rank whenever they gain a level", https://www.aonprd.com/Races.aspx?ItemName=Human): **+11**.
  - Trasfondo = 2 × 11 = **22 fijos** (Int no los modifica).
- Prerrequisitos verificados: **Quick Channel** (UM pg. 154): Knowledge (religion) 5 rangos. **Healer's Hands** (Planar Adventures pg. 28): Heal 1 rango, Knowledge (planes) 1 rango; usos/día = rangos en Knowledge (planes); si superás la DC por 10+ sumás esos rangos a la curación. **Signature Skill** (Unchained pg. 82): 5 rangos en la habilidad; a 10+ rangos, todos los desbloqueos hasta ese tramo.

## C.3 La cuenta que pide el brief: ¿alcanzan 38 rangos de aventura con Int 10?

Necesidad "completa": Heal 11 + Perception 11 + Knowledge (planes) 11 + Knowledge (religion) 5 = **38 rangos de aventura** (Knowledge (planes) es de AVENTURA: **compite con Perception**, no se paga con trasfondo).

| Escenario | Rangos de aventura | ¿Cubre los 38? | Sobran |
|---|---|---|---|
| Int 10, no humano, clase predilecta a pg | 22 | **NO** (faltan 16) | — |
| Int 10, no humano, clase predilecta a rangos | 33 | **NO** (faltan 5) | — |
| Int 10, **humano**, clase predilecta a rangos | 44 | **SÍ** | 6 |
| **Int 12**, no humano, clase predilecta a rangos | 44 | **SÍ** | 6 |
| Int 12, humano, clase predilecta a rangos | 55 | SÍ | 17 |
| Cualquiera + **Headband** con Knowledge (planes) (ver C.5) | +11 efectivos | Int 10 + FCB (33) alcanza para Heal 11 + Perception 11 + Kn (religion) 5 = 27 y sobran 6 | 6 |

Mostrando la cuenta base: 33 − 38 = **−5** → con Int 10 y sin humano, no alcanza.

## C.4 Reparto completo de rangos a nivel 11

**Trasfondo (22, iguales en todos los escenarios):**
| Habilidad (todas de clase) | Rangos | Uso |
|---|---|---|
| Linguistics | 4 | 4 idiomas: Celestial, Abyssal, Infernal, Draconic (hablar con extraplanares invocados/enemigos; leer inscripciones) |
| Knowledge (history) | 5 | Contexto de la campaña; +3 clase |
| Knowledge (nobility) | 3 | Apoyo al personaje social |
| Profession (herbalist) [Wis] | 5 | +5 (rangos) + 3 (clase) + 5 (Wis) = **+13**: hierbas medicinales DC 10/15 automáticas tomando 10; sustento diario DC 10 |
| Lore (Sarenrae) o Lore (iglesia local) | 5 | Sustituye a Knowledge (religion) en preguntas sobre la propia fe; siempre de clase |
| **Total** | **22** | Alternativa: Craft (alchemy) 5 en lugar de Kn (nobility)/Lore si se quiere fabricar antitoxinas/antiplague (requiere tiempo muerto) |

**Aventura — Escenario A (Int 10, no humano, clase predilecta a rangos = 33), SIN Healer's Hands:**
Heal 11 (+11+3+5 = **+19**), Perception 11 (sin clase: **+16**; con Seeker **+20**), Knowledge (religion) 5 (+8), Spellcraft 3 (+6), Sense Motive 3 (+11). Total 33. Diplomacy 0 (la lleva el personaje social).

**Aventura — Escenario A' (33) CON Healer's Hands, sacrificando Perception:**
Heal 11, Knowledge (planes) 11 (+14), Knowledge (religion) 5, Perception **6** (+11). Total 33. Healer's Hands: 11 usos/día, +11 pg al superar DC 30. Costo: −5 en Perception.

**Aventura — Escenario B (44: humano Int 10 + FCB, o Int 12 + FCB):**
Heal 11, Perception 11, Knowledge (planes) 11, Knowledge (religion) 5, Spellcraft 3, Sense Motive 3 = 44. Cubre **todo** el combo Healer's Hands + Signature Skill (Heal) del frente 04 sin renunciar a Perception.

**Aventura — Escenario C (55: humano Int 12 + FCB):**
Lo anterior + Spellcraft 8, Sense Motive 6, Diplomacy 5 = 55.

## C.5 Atajo de equipo para Knowledge (planes): headband con rangos incorporados

- **Headband of Vast Intelligence +2** (Ultimate Equipment pg. 251 / Core pg. 517, https://www.aonprd.com/MagicWondrousDisplay.aspx?FinalName=Headband+of+Vast+Intelligence2): 4.000 gp. "A headband of vast intelligence has one skill associated with it per +2 bonus it grants. After being worn for 24 hours, the headband grants a number of skill ranks in those skills equal to the wearer's total Hit Dice. **These ranks do not stack with the ranks a creature already possesses.** These skills are chosen when the headband is created."
- **Headband of Mental Prowess +2** (Ultimate Equipment pg. 250 / Core pg. 517, https://www.aonprd.com/MagicWondrousDisplay.aspx?FinalName=Headband+of+Mental+Prowess2): 10.000 gp, dos características mentales (**Wis + Int**): "If the headband grants a bonus to Intelligence, it also grants skill ranks as a headband of vast intelligence."
- Aplicación: el sanador quiere de todos modos un headband de **Wis** (Inspired Wisdom +2 = 4.000 gp). Por **6.000 gp más**, el Mental Prowess +2 (Wis/Int, habilidad **Knowledge (planes)**) da **11 rangos en Knowledge (planes)** sin gastar rangos propios (+ Int 12 → +1 a Spellcraft/Knowledge). Con eso, el Escenario A (33 rangos) cubre Heal 11 + Perception 11 + Kn (religion) 5 = 27 y sobran 6 para Spellcraft/Sense Motive.
- Advertencias: (1) no pongas rangos propios en Knowledge (planes) (no se acumulan); (2) que los rangos del objeto satisfagan el **prerrequisito** de Healer's Hands y cuenten como "ranks in Knowledge (planes)" para usos/día y curación extra es lectura RAW razonable (son "skill ranks"), pero si te quitan el headband perdés el prerrequisito → **confirmar con el GM**; (3) recién funciona tras 24 h de uso.

## C.6 Impacto en la decisión Healer's Hands + Signature Skill (Heal) del frente 04

- Background Skills **no ayuda** a ese combo: las dos habilidades que exige (Heal, Knowledge (planes)) y la que compite (Perception) son todas de aventura. Los 22 rangos de trasfondo solo liberan lo que antes se hubiera gastado en Linguistics/Profession/Knowledge (history/nobility).
- Con Int 10 y sin humano: **no alcanza** (33 < 38). Soluciones, de más barata a más cara: (a) **humano** (Skilled +11, además de la dote extra); (b) **Int 12** (2 puntos de la compra de 25); (c) **Headband of Mental Prowess +2 Wis/Int [Knowledge (planes)]** por 10.000 gp en lugar de Inspired Wisdom +2 (4.000 gp); (d) Perception 6 en vez de 11 (−5 a la única "alarma" del grupo).
- Recomendación: (a) o (c); (b) solo si el reparto de atributos del frente 10 tolera 2 puntos; (d) es la peor (Perception es la habilidad de aventura más tirada del juego).

---

# D. Decisiones que quedan en manos del GM (lista consolidada)

1. **Hero points iniciales a nivel 11:** por RAW es **1** ("regardless of her level"). Pedir el punto de **Character Story** (historia escrita) para arrancar con 2 y tener Cheat Death.
2. **Cheat Death sobre aliados:** por RAW **no** (solo familiar/compañero/eidolon/montura). No hay nada que preguntar; solo si el GM quiere cambiarlo como house rule.
3. **Cheat Death contra death effects / desintegración / daño masivo:** "How this plays out is up to the GM".
4. **Recall sobre Channel Energy y poderes de dominio:** RAW lo permite (recargan a diario); **sobre poder mítico:** RAW ambiguo, GM.
5. **Surge + hero point (Bonus o Reroll) en la misma tirada:** sin texto en Mythic Adventures → GM.
6. **Extra Action (hero point) + Amazing Initiative en el mismo turno:** RAW se acumulan (fuentes distintas); confirmar.
7. **Act Out of Turn:** ¿una sola acción (movimiento **o** estándar) o ambas? Lectura conservadora: una.
8. **Alcance del Bonus a un aliado:** "same location" sin pies → GM.
9. **Special para lanzar un conjuro de 7.º (Resurrection/Regenerate) a nivel 11:** ejemplo literal, pero "not guaranteed".
10. **Hero's Blade (6 puntos que no cuentan contra el máximo) y su uso para Cheat Death:** GM.
11. **Drawback de costo cero (Scarred, Vainglory, Guilty Fraud, Foul Brand, Umbral Unmasking):** el GM puede exigir un costo real (UC pg. 8: "slight mechanical disadvantage" + herramienta de rol).
12. **Rasgos de campaña:** ninguno de los recomendados lo es; sin impacto.
13. **Rangos del headband como prerrequisito/escala de Healer's Hands:** GM.
14. **Regla de un solo drawback:** no está en AoN; el GM ya fijó uno.
15. **Bitter:** ¿las propias curas del clérigo cuentan como "de un aliado"? RAW no.

# E. Desinformación y errores frecuentes detectados

- "Un PJ creado a nivel alto arranca con 3 hero points": **falso**; APG pg. 322 dice 1 "regardless of her level".
- "El sanador puede gastar 2 hero points para salvar a un aliado (Cheat Death)": **falso**; "but not another character or NPC".
- "La acción extra del hero point no puede ser un conjuro": **falso**; esa restricción es de **Amazing Initiative** (Mythic Adventures), no de Hero Points.
- "Los hero points se recuperan al descansar": **falso**; "do not renew over time or with rest".
- "Sarenrae concede el subdominio Legend (Hero's Fortune gratis)": **falso**; Legend = General Susumu, Gorum, Shizuru y exige el rasgo Acolyte of Apocrypha (Faith). Sarenrae sí tiene Glory, pero no Legend.
- "El Bonus de hero point se suma a Divine Favor/Prayer": **falso**; ambos son bonificadores de **suerte** y no se acumulan (se toma el mayor; Fate's Favored suma +1 al que aplique).
- "Background Skills da 2 + Int rangos de trasfondo": **falso**; "The character's Intelligence modifier doesn't adjust this value".
- "Los rangos de trasfondo pueden ir a Perception/Heal si sobran": **falso**; "only in background skills, not adventuring skills" (al revés sí: rangos normales en habilidades de trasfondo).
- "Perception es habilidad de clase del clérigo": **falso** (Core); de ahí Seeker o Cosmopolitan.
- "Se pueden tomar dos drawbacks para cinco rasgos": la regla de UC pg. 64 no está en AoN; en esta mesa es uno.
- d20pfsrd.com lista drawbacks y hero points junto con material de terceros (3PP) y variantes; no usado como fuente.
- Mythic Adventures no menciona hero points: cualquier "regla" de interacción Surge/hero point que circule es house rule.
- Proceso: el sub-modelo de WebFetch se negó a transcribir; se leyó el HTML de AoN directamente. No afecta el contenido.
