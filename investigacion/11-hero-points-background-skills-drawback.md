# 11 — Reglas opcionales de la mesa: Hero Points (APG), Background Skills (Pathfinder Unchained) y drawback + 3 rasgos, aplicadas al Clérigo sanador de nivel 11 (mítico tier 3, Hierophant)

**Fecha:** 2026-09-15
**Fuente de verdad:** Archives of Nethys, Pathfinder 1e (aonprd.com, sin "2e."). Cada afirmación de regla lleva la URL de AoN y el libro/página que AoN indica. Lo que no está en AoN se marca **NO OFICIAL / NO VERIFICADO**.
**Método:** el sub-modelo de WebFetch no transcribe texto de reglas de forma fiable, así que cada página se descargó con `curl` (HTML crudo de aonprd.com, guardado en `_aon_cache/frente11b/`) y se extrajo el texto; las páginas ya presentes en la caché local (`_aon_cache/audit11/`, `_aon_cache/audit04/`, `_raw/`, `_tmp/`, `_raw12/`) se leyeron de ahí (misma fuente). Se cotejó además el frente anterior `11-hero-points-drawback-background-skills.md` y su auditoría; este documento lo reconstruye con los parámetros confirmados el 15/09/2026 (compra 25, Wis 24, Cha 14-16, tier 3) y con los cruces que faltaban (Recalled Blessing / Inspired Spell, Fate's Favored + hero points, Act Out of Turn como acción preparada, distribución de rangos con Wis 24).

## 0. URLs consultadas (todas verificadas por título y contenido)

**Hero Points (Advanced Player's Guide pg. 322-324)**
- https://www.aonprd.com/Rules.aspx?ID=445 — "Hero Points" (introducción). Alias: `Rules.aspx?Name=Hero%20Points&Category=Optional%20Rule%20Systems`
- https://www.aonprd.com/Rules.aspx?ID=446 — "Awarding Hero Points"
- https://www.aonprd.com/Rules.aspx?ID=447 — "Using Hero Points"
- https://www.aonprd.com/Rules.aspx?ID=448 — "Hero Points for GMs"
- https://www.aonprd.com/Rules.aspx?ID=449 — "Antiheroes" (subpágina no listada en el brief; existe)
- https://www.aonprd.com/Rules.aspx?Category=Hero+Points — el índice general de reglas; la categoría Hero Points solo tiene las 5 subpáginas anteriores (no hay reglas de "puntos iniciales para PJ de nivel alto")
- https://www.aonprd.com/Feats.aspx?Category=Hero%20Point — categoría de dotes "Hero Point": exactamente 3 (Blood of Heroes, Hero's Fortune, Luck of Heroes). Ojo: `Feats.aspx?Category=Hero+Point` con "+" también funciona; `Categories=` (plural) devuelve la lista general.
- https://www.aonprd.com/FeatDisplay.aspx?ItemName=Hero%27s%20Fortune · https://www.aonprd.com/FeatDisplay.aspx?ItemName=Luck%20of%20Heroes · https://www.aonprd.com/FeatDisplay.aspx?ItemName=Blood%20of%20Heroes · https://www.aonprd.com/FeatDisplay.aspx?ItemName=Defiant%20Luck
- https://www.aonprd.com/SpellDisplay.aspx?ItemName=Heroic%20Fortune (incluye Heroic Fortune, Mass) · https://www.aonprd.com/SpellDisplay.aspx?ItemName=Malediction%20(Hero%20Points) · https://www.aonprd.com/SpellDisplay.aspx?ItemName=Unravel%20Destiny
- https://www.aonprd.com/MagicWeaponsDisplay.aspx?ItemName=Hero%27s%20Blade · https://www.aonprd.com/MagicWeaponsDisplay.aspx?ItemName=Reaver%27s%20Scythe · https://www.aonprd.com/MagicRingsDisplay.aspx?FinalName=Ring%20of%20Heroes
- https://www.aonprd.com/RacesDisplay.aspx?ItemName=Human (rasgos raciales Skilled y Heroic)
- https://www.aonprd.com/DomainDisplay.aspx?ItemName=Glory (subdominio Legend) · https://www.aonprd.com/TraitDisplay.aspx?ItemName=Acolyte%20of%20Apocrypha · https://www.aonprd.com/DomainDisplay.aspx?ItemName=Healing (subdominio Medicine)
- https://www.aonprd.com/Search.aspx?Query=hero+point&Filter=111111111111111111&AllTerms=True (inventario completo de AoN para "hero point")
- https://www.aonprd.com/Rules.aspx?ID=1618 — "Base Mythic Abilities" (Mythic Adventures pg. 12: Surge, Amazing Initiative, Recuperation, Mythic Power)
- https://www.aonprd.com/MythicPathDisplay.aspx?ItemName=Hierophant (Mythic Adventures pg. 32: Divine Surge → Inspired Spell / Recalled Blessing)
- https://www.aonprd.com/FeatDisplay.aspx?ItemName=Mythic%20Spell%20Lore (Mythic Adventures pg. 70)
- https://www.aonprd.com/Rules.aspx?ID=199 — "Special Initiative Actions" (Core pg. 203: Ready, Delay)
- https://www.aonprd.com/Rules.aspx?ID=82 — "Common Terms" (Core: los bonificadores del mismo tipo no se acumulan)
- https://www.aonprd.com/SpellDisplay.aspx?ItemName=Prayer · https://www.aonprd.com/SpellDisplay.aspx?ItemName=Divine%20Favor · https://www.aonprd.com/SpellDisplay.aspx?ItemName=Heal (incluye Mythic Heal) · https://www.aonprd.com/SpellDisplay.aspx?ItemName=Breath%20of%20Life · https://www.aonprd.com/SpellDisplay.aspx?ItemName=Cure%20Critical%20Wounds
- https://www.aonprd.com/FeatDisplay.aspx?ItemName=Reactive%20Healing (ACG pg. 155) · https://www.aonprd.com/Rules.aspx?Name=Casting%20Spells&Category=Magic (DC de lanzar a la defensiva)

**Background Skills (Pathfinder Unchained pg. 46-53)**
- https://www.aonprd.com/Rules.aspx?ID=1725 — "Pathfinder Unchained" (índice)
- https://www.aonprd.com/Rules.aspx?ID=1732 — "Background Skills" (pg. 46, con la tabla aventura/trasfondo)
- https://www.aonprd.com/Rules.aspx?ID=1733 — "Skill Changes" (pg. 46)
- https://www.aonprd.com/Rules.aspx?ID=1734 — "Gaining Adventuring Skills" (pg. 47)
- https://www.aonprd.com/Rules.aspx?ID=1735 — "Gaining Background Skills" (pg. 47)
- https://www.aonprd.com/Rules.aspx?ID=1736 — "Class Skills" (pg. 48)
- https://www.aonprd.com/Rules.aspx?ID=1738 — "New Skills" · https://www.aonprd.com/Rules.aspx?ID=1739 — "Artistry (Int)" (pg. 48) · https://www.aonprd.com/Rules.aspx?ID=1740 — "Lore (Int; Trained Only)" (pg. 50). **AoN no tiene páginas `Skills.aspx?ItemName=Artistry` ni `=Lore`**: ambas viven en Rules.
- https://www.aonprd.com/Rules.aspx?ID=1744 — "Expanded Profession" (pg. 53: Herbalist, Librarian, Midwife…)
- https://www.aonprd.com/ClassDisplay.aspx?ItemName=Cleric (Core pg. 38: habilidades de clase, 2 + Int)
- https://www.aonprd.com/Rules.aspx?ID=85 — "Character Advancement" (Core pg. 30-31: clase predilecta +1 pg o +1 rango)
- https://www.aonprd.com/Skills.aspx?ItemName=Heal (Core pg. 98 + desbloqueo Unchained pg. 84) · https://www.aonprd.com/Skills.aspx?ItemName=Perception
- https://www.aonprd.com/FeatDisplay.aspx?ItemName=Quick%20Channel · https://www.aonprd.com/FeatDisplay.aspx?ItemName=Deific%20Obedience · https://www.aonprd.com/FeatDisplay.aspx?ItemName=Healer%27s%20Hands · https://www.aonprd.com/FeatDisplay.aspx?ItemName=Signature%20Skill · https://www.aonprd.com/FeatDisplay.aspx?ItemName=Divine%20Protection

**Drawback y rasgos**
- https://legacy.aonprd.com/ultimateCampaign/characterBackground/traits.html (Ultimate Campaign: "If you choose to take a drawback, you can take a third trait that you have access to. You don't have to take a drawback.")
- https://www.aonprd.com/Rules.aspx?ID=1222 — "How to Create a Background" (Ultimate Campaign pg. 8: "two traits (or three traits and a drawback)")
- https://www.aonprd.com/Rules.aspx?ID=450 — "Traits" (APG pg. 326) · https://www.aonprd.com/Rules.aspx?ID=452 — "Types of Traits" (APG pg. 326) · (subpáginas: Gaining Traits, Restrictions on Trait Selection)
- https://www.aonprd.com/Traits.aspx?Type=Drawback — lista completa de drawbacks (66 entradas)
- https://www.aonprd.com/FeatDisplay.aspx?ItemName=Additional%20Traits (APG pg. 150)
- https://www.aonprd.com/TraitDisplay.aspx?ItemName=Reactionary · Fate%27s%20Favored · Birthmark · Blessed%20Touch · Indomitable%20Faith · Focused%20Mind · Seeker · Envoy%20of%20Healing · Acolyte%20of%20Apocrypha · Family%20Ties · Paranoid%20(Drawback) (patrón `TraitDisplay.aspx?ItemName=<nombre>`; los drawbacks con nombre duplicado llevan "(Drawback)": Betrayed (Drawback), Superstitious (Drawback))

---

# PARTE 1 — HERO POINTS (Advanced Player's Guide pg. 322-324)

## 1.1 Texto literal de AoN (lo que importa, entrecomillado)

**Hero Points — APG pg. 322** (https://www.aonprd.com/Rules.aspx?ID=445)
> "Hero points are only awarded to player characters. NPCs, animal companions, familiars, cohorts, and mounts do not receive hero points. Unlike other points in the game, hero points do not renew over time or with rest. Once spent, they are gone forever. Hero points are awarded as a character gains levels or whenever a character accomplishes a truly heroic feat. The GM is the final arbiter on the award and use of hero points."

**Awarding Hero Points — APG pg. 322** (https://www.aonprd.com/Rules.aspx?ID=446)
> "Each character begins play with 1 hero point, regardless of her level. In addition, whenever a character gains a level, she earns an additional hero point. Aside from these basic rules, awarding additional hero points is up to the GM."
> - **Character Story:** "GMs can award a hero point for the completion of a written character backstory. [...] When this key event is resolved, the GM can reward another hero point. Alternatively, the GM might award a hero point for painting a miniature or drawing a character portrait [...]"
> - **Completing Plot Arcs:** "The GM might award a hero point to each of the PCs who were involved in completing a major chapter or arc in the campaign story."
> - **Faith:** "the GM can award hero points to characters whenever they uphold the tenets of their faith in a grand way, or whenever they take on one of the faith's major enemies. Such hero points might be temporary, and if not spent on the task at hand, they fade away."
> - **Group Service:** pizza, limpiar, hospedar la partida.
> - **Heroic Acts:** "Note that a hero point should only be awarded if the PC involved did not spend a hero point to accomplish the task."
> - **Return from the Dead:** "When a character dies, she does not lose any hero points she has accumulated. If she died with no hero points remaining, she gains 1 hero point when she is brought back from the dead through powerful magic, such as raise dead or resurrection."
> - **Maximum Hero Points:** "Characters can have no more than 3 hero points at any one time. Excess hero points are lost."

**Using Hero Points — APG pg. 323** (https://www.aonprd.com/Rules.aspx?ID=447)
> "Hero points can be spent at any time and do not require an action to use (although the actions they modify consume part of your character's turn as normal). You cannot spend more than 1 hero point during a single round of combat. Whenever a hero point is spent, it can have any one of the following effects."
> - **Act Out of Turn:** "You can spend a hero point to take your turn immediately. Treat this as a readied action, moving your initiative to just before the currently acting creature. You may only take a move or a standard action on this turn."
> - **Bonus:** "If used before a roll is made, a hero point grants you a +8 luck bonus to any one d20 roll. If used after a roll is made, this bonus is reduced to +4. You can use a hero point to grant this bonus to another character, as long as you are in the same location and your character can reasonably affect the outcome of the roll (such as distracting a monster, shouting words of encouragement, or otherwise aiding another with the check). Hero points spent to aid another character grant only half the listed bonus (+4 before the roll, +2 after the roll)."
> - **Extra Action:** "You can spend a hero point on your turn to gain an additional standard or move action this turn."
> - **Inspiration:** "If you feel stuck at one point in the adventure, you can spend a hero point and petition the GM for a hint about what to do next. If the GM feels that there is no information to be gained, the hero point is not spent."
> - **Recall:** "You can spend a hero point to recall a spell you have already cast or to gain another use of a special ability that is otherwise limited. This should only be used on spells and abilities possessed by your character that recharge on a daily basis."
> - **Reroll:** "You may spend a hero point to reroll any one d20 roll you just made. You must take the results of the second roll, even if it is worse."
> - **Special:** "You can petition the GM to allow a hero point to be used to attempt nearly anything that would normally be almost impossible. Such uses are not guaranteed and should be considered carefully by the GM. Possibilities include casting a single spell that is one level higher than you could normally cast (or a 1st-level spell if you are not a spellcaster), making an attack that blinds a foe or bypasses its damage reduction entirely, or attempting to use Diplomacy to convince a raging dragon to give up its attack. Regardless of the desired action, the attempt should be accompanied by a difficult check or penalty on the attack roll. No additional hero points may be spent on such an attempt, either by the character or her allies."
> - **Cheat Death:** "A character can spend 2 hero points to cheat death. How this plays out is up to the GM, but generally the character is left alive, with negative hit points but stable. For example, a character is about to be slain by a critical hit from an arrow. If the character spends 2 hero points, the GM decides that the arrow pierced the character's holy symbol, reducing the damage enough to prevent him from being killed, and that he made his stabilization roll at the end of his turn. Cheating death is the only way for a character to spend more than 1 hero point in a turn. The character can spend hero points in this way to prevent the death of a familiar, animal companion, eidolon, or special mount, but not another character or NPC."

**Hero Points for GMs — APG pg. 324** (https://www.aonprd.com/Rules.aspx?ID=448): "A number of spells and magic items, as well as the Hero's Fortune feat, grant hero points to a character. Such hero points should be used sparingly, and should be reserved for major villains or truly important characters."

**Antiheroes — APG pg. 324** (https://www.aonprd.com/Rules.aspx?ID=449): "Such characters do not receive hero points, regardless of the source, and can never benefit from their use. In exchange, such characters receive a bonus feat at 1st level." → El jugador eligió Hero Points: renuncia a esa dote extra a cambio del sistema. Coherente con la build (las dotes del clérigo son escasas, pero un Cheat Death propio o un segundo Heal en el asalto decisivo valen más que una 7.ª dote de relleno en combates "muy difíciles").

## 1.2 ¿Con cuántos puntos arranca un PJ creado a nivel 11?

- Por RAW: **1**. "Each character begins play with 1 hero point, **regardless of her level**" (APG pg. 322). Los puntos "por nivel" se ganan "whenever a character **gains** a level" durante el juego; un PJ que se crea directamente a nivel 11 no "ganó" niveles. **No** es "1 + 10 capado a 3": es 1.
- Lo que sí es realista pedir al GM (todo es "up to the GM", pero está en la lista oficial de opciones): **Character Story** (+1 por historia escrita) y **retrato/miniatura** (+1). Con eso el sanador arranca con **2-3**, y con 2 ya tiene **Cheat Death** (cuesta 2) desde el primer combate.
- Máximo **3** (5 con la dote Hero's Fortune). Los puntos de Hero's Blade **no cuentan** contra el máximo (ver 1.7).
- No se recuperan con descanso ni con Recuperation mítica (Recuperation solo restaura pg y "class features that are limited to a certain number of uses per day", Mythic Adventures pg. 12; un hero point no es un class feature). No se pierden al morir; si morís sin puntos y te reviven, ganás 1.
- Cuenta de "presupuesto" de campaña: con 1 punto inicial + 1 por nivel futuro + arcos, el sanador dispondrá de **1-3 puntos por bloque de aventuras**. Es un recurso más escaso que el poder mítico (9/día a tier 3) y hay que tratarlo como tal.

## 1.3 Límites de uso (verificados)

1. **"You cannot spend more than 1 hero point during a single round of combat."** La única excepción es Cheat Death (2 puntos en un turno). Consecuencia: no se pueden combinar dos usos (p. ej. Extra Action + Reroll) en el mismo asalto; y **Act Out of Turn, aunque se gasta fuera de tu turno, cuenta para el asalto**: si lo usás, ese asalto no podés usar Extra Action en tu turno.
2. **No requiere acción**: "can be spent at any time and do not require an action to use". Bonus se declara antes o después de tirar; Reroll "you just made"; Act Out of Turn fuera de turno; Extra Action "on your turn".
3. Solo PJ. Ni cohortes ni compañeros animales reciben puntos (pero Cheat Death sí puede salvar familiar/compañero/eidolon/montura especial).
4. No hay FAQ ni errata oficial sobre hero points en AoN (la caché de FAQ no contiene "hero point"; la búsqueda de reglas devuelve solo estas páginas). Cualquier "regla" adicional que circule es house rule.

## 1.4 Cada uso, leído para el sanador (nivel 11, tier 3)

Marco numérico (parámetros confirmados: Wis 24 → +7; Cha 14 → +2 o Cha 16 → +3; se asume Con 14 → +2 y Dex 12 → +1 como en el frente 10; nivel de lanzador 11):
- Salvaciones base del clérigo a nivel 11 (Core, tabla de la clase): **Fort +7, Ref +3, Will +7** → con atributos: **Fort +9, Ref +4, Will +14**; con Cloak of Resistance +3: **+12 / +7 / +17**.
- Concentración = NL 11 + Wis 7 = **+18**; +4 (Combat Casting) = +22; +2 (Focused Mind) = +20; ambos = +24. Lanzar a la defensiva: DC 15 + 2 × nivel del conjuro (https://www.aonprd.com/Rules.aspx?Name=Casting%20Spells&Category=Magic) → **Heal (6.º) DC 27; Breath of Life (5.º) DC 25**. Probabilidad P(d20 ≥ n) = (21 − n)/20: Heal a la defensiva con +18 necesita 9+ → **60 %**; +20 → 7+ → **70 %**; +22 → 5+ → **80 %**; +24 → 3+ → **90 %**. Breath of Life: +18 → 7+ → 70 %; +20 → 80 %; +22 → 90 %; +24 → 1+ → 100 % (las pruebas de concentración no fallan automáticamente con 1 natural: esa regla es solo de ataques y salvaciones).
- **Heal** (Core pg. 294): 10 pg/NL, tope 150 → **110** a NL 11. **Mythic Heal** (Mythic Adventures pg. 97, misma página de AoN): 15 pg/NL (máx. 225) → **165**; requiere conocer la versión mítica con **Mythic Spell Lore** (dote mítica, MA pg. 70: "You can learn a number of mythic spells equal to your tier" → 3 conjuros a tier 3) y gastar **1 poder mítico** al lanzarla.
- **Breath of Life** (Core): 5d8 + 1/NL (máx. +25) → **5d8+11** (media 33,5; máx. 51); solo si murió "within 1 round"; no contra death effects. **Cure Critical Wounds**: 4d8+11 (media 29). **Channel Energy** a nivel 11: **6d6** (media 21), 3 + Cha usos/día (Cha 14 → 5; Cha 16 → 6).
- Poder mítico tier 3 = 3 + 2 × 3 = **9 usos/día**; Surge = **1d6** (1d8 recién a tier 4).

| Uso | Costo | Lectura RAW estricta | Valor para el sanador en combates muy difíciles |
|---|---|---|---|
| **Act Out of Turn** | 1 | "take your turn immediately. Treat this as a readied action [...] You may only take a move **or** a standard action on this turn." Es **tu turno**, adelantado: como acción preparada, tu iniciativa se mueve a ese punto ("your initiative result is the count on which you took the readied action", Core pg. 203, Ready) y, por la misma regla de Ready ("you do not get your regular action that round"), no repetís tu turno normal en ese asalto → lectura conservadora: es un **cambio de iniciativa con turno recortado**, no un turno adicional (GM). Por analogía con Ready podés dar un **paso de 5 pies** "as part of your readied action, but only if you don't otherwise move any distance during the round" (Core pg. 203, https://www.aonprd.com/Rules.aspx?ID=199) → **decisión del GM** si aplica a este uso. | **El uso más valioso del sanador**: interrumpir al enemigo que va a rematar a un aliado. Con una sola acción estándar sin desplazamiento: **Channel Energy** (30 pies, sin toque, 6d6 a todos), **Breath of Life / Heal por toque si ya estás adyacente (o con paso de 5 pies)**, o CCW/Heal a 50 pies con Reach Spell / Rod of Reach. Si el aliado **ya murió** en el turno del enemigo, no gastes el punto: Breath of Life en tu turno normal llega dentro del asalto. |
| **Bonus** | 1 | +8 **de suerte** a una tirada de d20 propia si se declara antes; +4 después de ver el dado. A otro personaje +4/+2, "same location" y poder "reasonably affect the outcome" (gritar aliento cuenta). | La mejor defensa contra **death effects / desintegración / Dominate**: Fort +9 vs DC 23 → sin punto 14+ (35 %), con +8 → 6+ (**75 %**); con Fate's Favored +9 → 5+ (80 %). Will +14 vs DC 22 → 8+ (65 %) → con +8 solo falla con 1 natural (95 %). **Es bonificador de suerte**: no se suma a Prayer (+1 luck) ni Divine Favor (luck), se toma el mayor (Core, Common Terms: "bonuses of the same type are not cumulative"). Con Fate's Favored: **+9 / +5** propio. Alcance para dar el +4 a un tanque: AoN no da pies → GM. |
| **Extra Action** | 1 | "an additional standard **or** move action this turn". **Sin restricción de tipo**: sí puede ser lanzar un conjuro (compárese con Amazing Initiative, que dice "can't be used to cast a spell"). | Segundo **Heal** (110 + 110 = 220 sobre un aliado o 110 a dos), o Heal + Breath of Life, o un movimiento extra para llegar al caído. Combinable por RAW con Amazing Initiative y Quick Channel (ver 1.5c). |
| **Inspiration** | 1 (0 si no hay información) | Pista del GM. | Fuera de combate; nulo para el rol de sanador. |
| **Recall** | 1 | "recall a spell you have already cast **or** to gain another use of a special ability that is otherwise limited [...] that recharge on a daily basis." Sin tope de nivel de conjuro en el texto. | Recuperar el espacio de **Heal (6.º)** ya lanzado = el efecto de una Pearl of Power de 6.º (36.000 gp, Core/UE — https://www.aonprd.com/MagicWondrousDisplay.aspx?FinalName=Pearl+of+Power6th) por 1 punto. Channel Energy ("uses per day") y Rebuke Death (3 + Wis/día) entran en la letra. **Poder mítico**: también es "per day", pero es el meta-recurso de otro sistema → GM. **Comparar con Recalled Blessing** (1.5d): si el Hierophant eligió Recalled Blessing, el hero point NO debería gastarse en esto salvo que el poder mítico se haya agotado. |
| **Reroll** | 1 | Repetís cualquier d20 que acabás de tirar; te quedás con la segunda aunque sea peor. | Salvación fallada contra algo letal cuando el GM no revela el margen, o concentración fallada de un Heal a la defensiva (si el GM permite rehacer una prueba de concentración: es "any one d20 roll"). Con Will +14 vs DC 22, la repetición acierta con 8+ (65 %). Si el GM revela el margen: fallo ≤ 4 → **Bonus después (+4)** garantiza; ≤ 5 con Fate's Favored; fallo mayor → Reroll. |
| **Special** | 1 (nadie puede sumar puntos) | Ejemplo literal: "casting a single spell that is one level higher than you could normally cast" con "a difficult check or penalty". | A nivel 11 el máximo es 6.º → el ejemplo literal habilita **un conjuro de 7.º**: Resurrection, Regenerate, Greater Restoration (o Heal, Mass en 9.º no: solo un nivel más). Es el "milagro" narrativo para un aliado muerto hace días. 100 % decisión del GM y "not guaranteed". |
| **Cheat Death** | **2** | "generally the character is left alive, with negative hit points but stable" ; "How this plays out is up to the GM" ; **"but not another character or NPC"**. | **Solo sirve para vos** (o tu familiar/compañero/eidolon/montura). El sanador **no puede comprarle la vida a un tanque**: para eso están Breath of Life (dentro de 1 asalto) y Raise Dead. Contra death effects/desintegración/daño masivo: el texto no distingue causas; el ejemplo es daño de flecha → **GM** (la lectura habitual es que sí, con narración). Con **1 solo punto al crearse no está disponible**: hay que tener 2 (historia escrita, Hero's Fortune, Hero's Blade, o **Heroic Fortune lanzado sobre uno mismo antes del combate del jefe**: el punto temporal "is spent before any other hero points", así que suma para los 2). |

## 1.5 Sinergias verificadas con texto

**(a) Fate's Favored sobre el Bonus del hero point.** Texto (Ultimate Campaign pg. 55, Basic (Faith), https://www.aonprd.com/TraitDisplay.aspx?ItemName=Fate%27s%20Favored): "Whenever you are under the effect of a luck bonus of any kind, that bonus increases by 1." El Bonus del hero point es "a +8 luck bonus" → con Fate's Favored **+9 antes / +5 después**. Cuando **otro** PJ gasta su punto para darte +4/+2, vos (con el rasgo) recibís **+5/+3**. Cuando vos le das el bono a un aliado, él recibe +4/+2 salvo que él tenga Fate's Favored. Además el rasgo sube Prayer sobre vos a +2 (Core: "+1 luck bonus on attack rolls, weapon damage rolls, saves, and skill checks", https://www.aonprd.com/SpellDisplay.aspx?ItemName=Prayer) y Divine Favor a +4 en ataque/daño (irrelevante para el sanador). Como los bonos de suerte no se acumulan entre sí, en un asalto con Prayer activo el hero point vale +8 (+9) en lugar de +9 (+10): se toma el mayor y se le suma 1 una sola vez.

**(b) Hero point + Surge en la misma tirada.** Surge (Mythic Adventures pg. 12, https://www.aonprd.com/Rules.aspx?ID=1618): "expend one use of mythic power to increase any d20 roll you just made by rolling 1d6 and adding it to the result. Using this ability is an immediate action taken after the result of the original roll is revealed." Se buscó "hero point" en Mythic Heroes, Base Mythic Abilities, Hierophant, Guardian, Mythic Feats y Mythic Spells: **cero menciones** (la búsqueda de AoN devuelve "Guardian" solo por las palabras sueltas "hero" y "points" de "Bonus Hit Points"). Análisis RAW: el Surge es un dado sin tipo que se suma tras ver el resultado; el Bonus es un bonificador de suerte sin acción; el Reroll es una tirada nueva. Nada prohíbe (1) **Bonus después (+4/+5) + Surge (+1d6)** sobre la misma tirada = +7,5/+8,5 de media, ni (2) **Reroll y luego Surge sobre la segunda tirada** ("d20 roll you just made" también describe la repetición). Cada sistema respeta su propio límite (1 hero point/asalto; Surge es una acción inmediata, o sea consume tu acción rápida del siguiente turno). Orden óptimo: tirar → si el margen de fallo es ≤ 4 (5) gastar Bonus después; si es 5-6, Surge (1d6, 1 poder mítico, mucho más abundante); si es más, Reroll y guardar el Surge para la repetición. **Confirmar con el GM** (son libros distintos que no se referencian).

**(c) Extra Action + Amazing Initiative + Quick Channel en el asalto de emergencia.** Amazing Initiative (MA pg. 12): "as a free action on your turn, you can expend one use of mythic power to take an additional standard action during that turn. This additional standard action can't be used to cast a spell. You can't gain an extra action **in this way** more than once per round." El "in this way" limita solo a Amazing Initiative; el hero point es otra fuente y su texto no excluye conjuros → por RAW se acumulan (confirmar con el GM). Quick Channel (Ultimate Magic pg. 154): "You may channel energy as a move action by spending 2 daily uses". Turno máximo del sanador:

| Acción | Fuente | Qué hace | Costo |
|---|---|---|---|
| Estándar normal | — | **Heal** 110 (165 si mítico) | 1 espacio de 6.º (+1 poder mítico si mítico) |
| Estándar extra | **Hero point (Extra Action)** | **Heal** 110 sobre el mismo o sobre otro aliado, o Breath of Life 5d8+11 | 1 hero point + 1 espacio |
| Estándar extra | **Amazing Initiative** (tier 2) | **Channel Energy** 6d6 a todos en 30 pies (es aptitud Su, no conjuro) | 1 poder mítico + 1 uso de canalización |
| Movimiento | **Quick Channel** | **Channel Energy** 6d6 a todos | 2 usos de canalización |
| Rápida | — | conjuro Quickened si lo hubiera (p. ej. Quicken Spell sobre CLW: nivel 5.º) | 1 espacio |

Resultado: **220 (o 275 con un Heal mítico) + 12d6 (media 42) sobre el aliado crítico y 12d6 sobre el resto del grupo, en un solo asalto**, por 1 hero point + 1-2 poderes míticos + 3 usos de canalización + 2 espacios de 6.º. Variante "de grupo": el estándar extra del hero point puede ser en cambio un **movimiento** → segundo Quick Channel (2 usos más): Heal 110 + 18d6 (media 63) a todos, con 5 usos de canalización (Cha 14 da exactamente 5/día; con Extra Channel, 7). Solo una vez por combate por el límite de 1 hero point/asalto.

**(d) Recall (hero point) vs Recalled Blessing e Inspired Spell (Hierophant).** Las dos son las opciones de **Divine Surge**, la aptitud de tier 1 del Hierophant: "Select one of the following abilities. Once chosen, it can't be changed." (Mythic Adventures pg. 32, https://www.aonprd.com/MythicPathDisplay.aspx?ItemName=Hierophant).
- **Recalled Blessing (Su):** "You can expend one use of mythic power to cast any one divine spell without expending a prepared spell or spell slot. If you prepare spells, this spell must be one you prepared today [...]. You can't apply metamagic feats to this spell. [...] If the spell heals damage or requires you to attempt a caster level check to cure an affliction or remove a condition, roll twice and take the higher result." → Equivale a un **Recall por poder mítico (9/día)** y además mejora las curas con dados: Breath of Life con "roll twice, take higher" sobre 5d8 sube la media de 22,5 a ≈25,4 (+11 → **≈36**). No dice que sea acción estándar: el conjuro se lanza con su tiempo normal.
- **Inspired Spell (Su):** "As a standard action, you can expend one use of mythic power to cast any one divine spell [...] must be of a level that you can cast [...] must have a casting time of '1 standard action' (or less). You don't need to have the spell prepared [...] you treat your caster level as 2 levels higher for the purpose of any effect dependent on level." → **Heal a NL 13 = 130** (mítico: 195, 2 poderes míticos); Breath of Life 5d8+13; Death Ward/Freedom of Movement sin haberlos preparado. Es el "libro de conjuros infinito" del sanador.
- Conclusión: con cualquiera de las dos, el uso **Recall del hero point pasa a ser el último recurso** (solo cuando se agotaron los 9 poderes míticos). El hero point se reserva para lo que el poder mítico **no** puede hacer: Cheat Death, Act Out of Turn, Extra Action (Amazing Initiative no lanza conjuros), Bonus antes de tirar (+8 fijo; Surge es +1d6 después) y Special. Para el sanador único de un grupo de 4 cuerpo a cuerpo, **Inspired Spell** rinde más (flexibilidad + NL 13) salvo que el plan de conjuros ya esté cerrado y se prefiera el doble dado de Recalled Blessing sobre Breath of Life; ver frente 06.

## 1.6 Dotes de la categoría Hero Point y su lugar entre las 6 dotes (7 si humano)

| Dote | Fuente AoN | Prerreq. | Texto | Veredicto |
|---|---|---|---|---|
| **Hero's Fortune** (Hero Point) | APG pg. 324 — https://www.aonprd.com/FeatDisplay.aspx?ItemName=Hero%27s%20Fortune | ninguno | "You gain a hero point. The maximum number of hero points you can have at any one time is increased to 5." Normal: máx. 3. | Al crearse: 1 → **2 puntos** (Cheat Death disponible el día 1) y tope 5. Es "media dote" de valor y compite con **Selective Channeling, Quick Channel, Extra Channel, Reactive Healing, Divine Interference, Toughness** por 6 (7) plazas. **Solo como última dote** si el GM no da el punto por historia y no se permite Hero's Blade. **No puede ser dote mítica** (no es mítica). |
| **Luck of Heroes** (Hero Point) | APG pg. 324 — https://www.aonprd.com/FeatDisplay.aspx?ItemName=Luck%20of%20Heroes | Hero's Fortune | "Whenever you spend a hero point to reroll a die roll or to grant yourself a bonus before a die roll is made [...] roll a d20. If the result is greater than 15, the hero point is not spent. You cannot use this feat when you cheat death." | 16-20 = **25 %** de reembolso, solo en Reroll y Bonus-antes. Con 1-3 puntos por tramo de campaña, vale ≈0,25-0,75 puntos en total. **Trampa** como dote; el Ring of Heroes la da sin dote. |
| **Blood of Heroes** (Hero Point) | APG pg. 323 — https://www.aonprd.com/FeatDisplay.aspx?ItemName=Blood%20of%20Heroes | Hero's Fortune | "Whenever you gain a level, you gain 2 hero points instead of 1." | Nada al crearse; +1 por nivel futuro (12+). Dos dotes por eso: **NO**. |
| **Defiant Luck** (no es de la categoría, pero interactúa) | Advanced Race Guide pg. 77 — https://www.aonprd.com/FeatDisplay.aspx?ItemName=Defiant%20Luck | Humano | 1/día, tras un 1 natural en salvación o un crítico confirmado en tu contra, repetís la salvación o el enemigo repite la confirmación. Special: "you can also spend 1 hero point when a critical hit is confirmed against you to have the opponent reroll the critical hit confirmation roll." | Defensa propia real y gratis 1/día; solo humano. Por debajo de Toughness/Reactive Healing, por encima de Luck of Heroes. Relleno aceptable de 7.ª dote humana. |

**Conclusión de dotes:** ninguna de las tres dotes de hero point supera a Selective Channeling (imprescindible con 4 cuerpo a cuerpo mezclados con enemigos), Quick Channel (curación por acción), Extra Channel, Reactive Healing (anti-muerte propia sin gastar hero points), Divine Interference ni Toughness (+11 pg; versión mítica más). Hero's Fortune es el único que merece considerarse, y solo si el GM no regala puntos.

## 1.7 Conjuros, objetos, rasgos raciales y subdominios que dan o usan hero points (inventario completo de la búsqueda de AoN)

La búsqueda `hero point` en AoN devuelve, además de las reglas y las 3 dotes: conjuros **Heroic Fortune** (y Mass), **Malediction (Hero Points)**, **Unravel Destiny**; armas **Hero's Blade** y **Reaver's Scythe**; anillo **Ring of Heroes**; rasgo racial humano **Heroic**; subdominio **Legend**. (Los demás resultados —Cayden Cailean "The Drunken Hero", rasgos Hero Worship / Star Struck, arquetipo Hooded Champion, monstruos— son coincidencias de la palabra "hero" y no tocan hero points.)

| Elemento | Fuente | Texto clave | Valor |
|---|---|---|---|
| **Heroic Fortune** (conjuro) | APG pg. 324 — https://www.aonprd.com/SpellDisplay.aspx?ItemName=Heroic%20Fortune | Evocación; **cleric 2** (también alchemist 2, bard 2, investigator 2, oracle 2, paladin 3, skald 2, warpriest 2); estándar; V, S, DF, **M (polvo de diamante 100 gp)**; toque; **1 asalto/nivel (11 asaltos)**; Will niega (inofensivo). "This spell grants 1 hero point to the target. This hero point must be spent before the duration expires, or it is lost. The bonus hero point is spent before any other hero points the target might possess." | **La forma de regalarle un hero point a un tanque** (100 gp + un espacio de 2.º): +8 a su salvación, un Reroll, o el 2.º punto de **su** Cheat Death. Sobre uno mismo antes del jefe: 2.º punto para Cheat Death propio. **Muy recomendable**; llevar 2-3 dosis de polvo de diamante (300 gp) y un pergamino de reserva. |
| **Heroic Fortune, Mass** | APG pg. 324 (misma página) | **cleric 5**; cercano (25 + 5 × 5 = **50 pies**); "one or more creatures, no two of which can be more than 30 ft. apart"; **polvo de diamante 1.000 gp**; 11 asaltos. | Los 5 miembros con un punto temporal para el combate final. Compite con Breath of Life por el espacio de 5.º → mejor en **pergamino** (CL 9 → 9 asaltos). Situacional. |
| **Malediction (Hero Points)** | APG pg. 324 — https://www.aonprd.com/SpellDisplay.aspx?ItemName=Malediction%20(Hero%20Points) | Nigromancia [death, evil], solo arcanist/sorcerer/witch/wizard 3; matás a una criatura moribunda y ganás 1 punto por cada 5 DG (máx. 3), temporales. | No es de clérigo y es malvado. **NO.** Existe otra "Malediction" (Book of the Damned, cleric 4) que no tiene nada que ver con hero points. |
| **Unravel Destiny** | APG pg. 325 — https://www.aonprd.com/SpellDisplay.aspx?ItemName=Unravel%20Destiny | cleric 3; penaliza a criaturas con hero points. | Solo contra villanos con Hero's Fortune. **NO.** |
| **Hero's Blade** | APG pg. 325 — https://www.aonprd.com/MagicWeaponsDisplay.aspx?ItemName=Hero%27s%20Blade | **17.315 gp**; +2 longsword; "When made, this sword holds 6 hero points. The wielder can use these points at any time, and they do not count against the wielder's maximum." Cuando se gastan queda una +2 longsword. | **6 hero points por 17.315 gp** (≈2.900 gp/punto): 3 Cheat Death propios o 6 Extra Action/Bonus. Sigue rigiendo 1 punto por asalto. No hace falta competencia para **empuñarla** (solo para atacar sin −4; el clérigo no ataca). Con WBL 82.000 gp es un 21 % del presupuesto: caro pero es el "seguro de vida" más barato del juego. El GM puede vetarlo por "reservado a villanos" (APG pg. 324) → **preguntar**. |
| **Reaver's Scythe** | APG pg. 325 — https://www.aonprd.com/MagicWeaponsDisplay.aspx?ItemName=Reaver%27s%20Scythe | 80.318 gp, +2 keen unholy; da 1 punto temporal al matar. | Maligno y caro. **NO.** |
| **Ring of Heroes** | APG pg. 325 — https://www.aonprd.com/MagicRingsDisplay.aspx?FinalName=Ring%20of%20Heroes | 8.000 gp; concede Luck of Heroes tras 24 h; puede destruirse para ganar 1 punto de uso inmediato. | Ocupa ranura de anillo (Ring of Protection / Freedom of Movement). **NO** a nivel 11. |
| Rasgo racial **Heroic** (humano) | Advanced Race Guide pg. 72 — https://www.aonprd.com/RacesDisplay.aspx?ItemName=Human | "each time these humans gain a level, they gain 2 hero points instead of 1. If they take the Blood of Heroes feat, they gain 3 hero points each level instead of 2. This racial trait replaces the bonus feat trait." | Nada al crearse a nivel 11 y cuesta la dote extra. **Trampa.** |
| Subdominio **Legend** (Glory) | Divine Anthology pg. 23 — https://www.aonprd.com/DomainDisplay.aspx?ItemName=Glory | "This subdomain requires the Acolyte of Apocrypha trait to access. Associated Deities: General Susumu, Gorum, Shizuru. [...] In campaigns that use the optional hero point system, you gain Hero's Fortune as a bonus feat. Otherwise, you gain Marked for Glory as a bonus feat [...]. These replace the Glory domain's increased save DC when channeling positive energy." Además reemplaza Divine Presence (8.º) por Witness the Legend y cambia los conjuros de dominio de 2.º/3.º/4.º/6.º. | Exige el rasgo Acolyte of Apocrypha (Faith), el dominio Glory (en lugar de Healing/Community/Luck) y adorar a **General Susumu, Gorum o Shizuru** (los tres marciales; Gorum es CN "Our Lord in Iron"). **Sarenrae NO lo tiene** (sus subdominios apócrifos son Medicine y Thirst; Iomedae tiene Hubris). Para un sanador: **NO**. |

## 1.8 Tabla "emergencia → mejor gasto" y protocolo de decisión

| Emergencia | Mejor gasto | Números | Sin hero point |
|---|---|---|---|
| Un enemigo va a rematar a un aliado en negativos **antes de tu turno** | **Act Out of Turn** (1) → Channel 6d6 (30 pies) / Heal 110 o Breath of Life por toque si estás adyacente / CCW-Heal a 50 pies con Reach | Una sola acción estándar (más paso de 5 pies si el GM lo admite). Si ya murió: Breath of Life en tu turno normal (dentro de 1 asalto), sin gastar punto. | Reach Spell / Rod of Reach (lesser 3.000 gp), Delay/Ready preventivo |
| Vas a tirar una salvación letal (death effect, disintegrate, Dominate) | **Bonus antes** (+8; +9 con Fate's Favored) | Fort +9 → 75-80 % vs DC 23; Will +14 vs DC 22 → 95 %. Prayer no se suma (mismo tipo). | Death Ward (4.º), Freedom of Movement, Spell Immunity, Surge +1d6 después |
| Fallaste una salvación y el GM revela el margen | fallo ≤ 4 (5 con FF): **Bonus después**; fallo mayor: **Reroll** (o Surge si es ≤ 6 y querés guardar el punto) | Reroll con Will +14 vs DC 22 → 65 %. Surge cuesta poder mítico (9/día): gastarlo primero. | Surge |
| Hace falta un segundo Heal en el mismo turno / dos aliados críticos | **Extra Action** (1) + Amazing Initiative (1 mítico) + Quick Channel | 220 + 12d6 al crítico, 12d6 al resto (1.5c). | Quick Channel + Heal ya suman ≈131 a uno y 21 al resto |
| Se gastó el último espacio de 6.º y quedan poderes míticos | **NO gastes el punto**: Recalled Blessing / Inspired Spell (1 mítico) | Inspired Spell = Heal 130 sin prepararlo. | — |
| Se gastaron los 9 poderes míticos y el último Heal | **Recall** (1) → recuperás Heal | Vale una Pearl of Power 6.º (36.000 gp). | Pearl of Power 5.º (25.000 gp) para Breath of Life |
| Vos vas a morir (daño masivo o fallaste la salvación letal sin margen) | **Cheat Death** (2) | Quedás "alive, with negative hit points but stable"; solo si tenés 2 puntos. Contra death effects: GM. | Reactive Healing (inmediata, 6d6 al llegar a ≤ 0), Hard to Kill (mítico: no morís hasta −2 × Con = −28 con Con 14), Death Ward |
| Alguien murió hace días / miembro perdido / maldición mayor y no hay quien lance 7.º | **Special** (1) → pedir al GM un conjuro de 7.º (Resurrection, Regenerate, Greater Restoration) | Ejemplo literal de la regla; prueba difícil; nadie puede sumar puntos. | Pergamino de Raise Dead (5.º) + Restoration |

**Protocolo escrito "cuándo gastar el hero point" (sanador único, combates muy difíciles):**
1. **Antes de la sesión:** entregar la historia escrita (+1). Antes del combate del jefe, lanzar **Heroic Fortune** (100 gp) sobre vos mismo (2.º punto → Cheat Death) o sobre el tanque que más va a tanquear.
2. **Regla de reserva:** nunca bajar de **2 puntos** si hay un combate de jefe pendiente (Cheat Death). Con 1 punto, Cheat Death no existe: el punto es para Act Out of Turn / Bonus / Extra Action.
3. **Prioridad de gasto en combate (de mayor a menor):** (i) Cheat Death propio (si el sanador muere, muere el grupo); (ii) Act Out of Turn para evitar que un aliado pase de −pg a muerto antes de tu turno (Breath of Life solo llega 1 asalto); (iii) Bonus +8 antes de una salvación letal propia; (iv) Extra Action en el asalto en que dos aliados están críticos; (v) Reroll de una salvación letal fallada; (vi) Bonus +4 a un tanque en su salvación contra un efecto que lo sacaría de combate (Dominate/Hold).
4. **Nunca** gastar el punto en: Recall mientras queden poderes míticos (Recalled Blessing / Inspired Spell hacen lo mismo o más), Inspiration, tiradas de habilidad no letales, ni en Bonus a un ataque propio.
5. **Fuera de combate:** solo Special para un milagro narrativo (7.º) si el GM lo acepta y no hay alternativa (pergamino).
6. **Diferenciar recursos:** poder mítico (9/día, recarga) → Surge, Amazing Initiative, Recalled Blessing/Inspired Spell, conjuros míticos. Hero point (1-3 por tramo, no recarga) → lo que el poder mítico no hace: morir, actuar fuera de turno, conjuro extra en el turno, +8 fijo antes de tirar.

---

# PARTE 2 — BACKGROUND SKILLS (Pathfinder Unchained pg. 46-53)

## 2.1 Texto literal (https://www.aonprd.com/Rules.aspx?ID=1732 y subpáginas)

- **Background Skills (pg. 46, ID 1732):** "In a campaign that uses the background skills system, each character gains an additional 2 skill ranks per level, which must be spent on background skills." **Converting Characters:** "the total number of background skill ranks she has—this is equal to 2 × the PC's character level."
- **Skill Changes (pg. 46, ID 1733):** "Appraise, Craft, Handle Animal, Linguistics, Perform, Profession, and some Knowledge specialties are all background skills. [...] This system also adds two new background skills: Artistry and Lore."
- **Tabla (pg. 46, en ID 1732):**
  - **Adventuring Skills:** Acrobatics, Bluff, Climb, Diplomacy, Disable Device, Disguise, Escape Artist, Fly, **Heal**, Intimidate, **Knowledge (arcana)**, Knowledge (dungeoneering), Knowledge (local), Knowledge (nature), **Knowledge (planes)**, **Knowledge (religion)**, **Perception**, Ride, **Sense Motive**, **Spellcraft**, Stealth, Survival, Swim, Use Magic Device.
  - **Background Skills:** Appraise, Artistry, Craft, Handle Animal, Knowledge (engineering), Knowledge (geography), Knowledge (history), Knowledge (nobility), Linguistics, Lore, Perform, Profession, Sleight of Hand.
  - → Confirmado: la lista del brief es exacta. **Heal, Perception, Knowledge (planes/religion/arcana), Sense Motive, Diplomacy y Spellcraft son de AVENTURA**: los rangos de fondo no sirven para ellas.
- **Gaining Adventuring Skills (pg. 47, ID 1734):** "Adventuring skills are purchased with the standard skill ranks each character class receives, modified by a character's Intelligence (and sometimes by race or other factors). No adjustments need to be made to these skills when using the background skills system."
- **Gaining Background Skills (pg. 47, ID 1735):** "In addition to their normal allotment of regular skill ranks, all characters gain 2 background skill ranks each time they gain a level in a PC class. **The character's Intelligence modifier doesn't adjust this value. Background skill ranks can be used to gain ranks only in background skills, not adventuring skills. Characters can expend their regular skill ranks on background skills if they desire.**"
- **Class Skills (pg. 48, ID 1736):** "classes use their standard class skill lists. Any class that gains Craft or Perform as a class skill also counts Artistry as a class skill. **Lore is always considered a class skill for all characters.**"
- **Artistry (Int) (pg. 48, ID 1739):** creación no material (choreography, criticism, literature, musical composition, philosophy, playwriting); ganancias por DC 10-30; "masterwork tools are of no use in their creation". Sin utilidad para el sanador salvo color.
- **Lore (Int; Trained Only) (pg. 50, ID 1740):** "A Lore skill must be narrow—far narrower than the most relevant Knowledge skill." "Lore skills use the same DC scale as Knowledge skills [...] In many cases, Lore can substitute for a Knowledge skill, such as Lore (elven history) filling in for Knowledge (history)"; −5 si es parcial (GM); no identifica monstruos salvo Lore de un tipo concreto. En la tabla de ejemplos apropiados figura **"Sarenrae"** (inapropiado: "Gods") y "Dagon" (inapropiado: "Demon lords").
- **Expanded Profession (pg. 53, ID 1744)**, usos con DC útiles para un sanador: **Herbalist** — "Identify common medicinal herbs" DC 10, "Identify rare medicinal herbs" DC 15; **Librarian** — "Aid another on a Knowledge check using reference material" DC 5; **Midwife** — "Safely deliver a child" DC 15 / "despite complications" DC 20.

## 2.2 ¿Cómo cuenta cada fuente de rangos? (verificado)

| Fuente | Cantidad a nivel 11 | ¿Dónde puede ir? | Cita |
|---|---|---|---|
| Rangos de clase del clérigo | (2 + Int) × 11 → **Int 10: 22; Int 12: 33; Int 14: 44** | Cualquier habilidad (aventura o fondo) | Cleric: "Skill Points at each Level: 2 + Int modifier" (Core pg. 38, https://www.aonprd.com/ClassDisplay.aspx?ItemName=Cleric); "Characters can expend their regular skill ranks on background skills if they desire" (Unchained pg. 47) |
| Clase predilecta a rangos | **+11** (o +11 pg) | Cualquier habilidad: es un "skill rank" normal | "he receives either +1 hit point or +1 skill rank" (Core pg. 31, https://www.aonprd.com/Rules.aspx?ID=85). La opción se fija nivel a nivel y no se cambia. |
| Humano **Skilled** | **+11** | Cualquier habilidad | "Humans gain 1 additional skill rank at 1st level and 1 additional rank whenever they gain a level" (Core, https://www.aonprd.com/RacesDisplay.aspx?ItemName=Human). Nota: el aasimar del frente 10 tiene otro "Skilled" (+2 racial a Diplomacy y Perception), que **no** son rangos. |
| **Background skills** | **22 fijos** (2 × 11), Int no los modifica | **Solo** las 13 habilidades de fondo | Unchained pg. 47 (ID 1735) |

Regla de dirección: rangos normales → a fondo **sí**; rangos de fondo → a aventura **no**. Bono de clase +3 al tener ≥1 rango (Core, Acquiring Skills).

## 2.3 Habilidades de clase del clérigo bajo este sistema

Clase (Core): Appraise, Craft, Diplomacy, Heal, Knowledge (arcana, history, nobility, planes, religion), Linguistics, Profession, Sense Motive, Spellcraft. **Perception NO es de clase** → de ahí el rasgo Seeker (Perception de clase, +1) o Cosmopolitan.
- **De fondo y de clase:** Appraise, Craft, **Artistry** (vía Craft), Knowledge (history), Knowledge (nobility), Linguistics, Profession, **Lore** (siempre de clase).
- **De fondo y no de clase:** Handle Animal, Knowledge (engineering), Knowledge (geography), Perform, Sleight of Hand.
- Consecuencia: **los 22 rangos de fondo no liberan nada para Heal/Perception**; solo evitan gastar rangos normales en Linguistics/Knowledge (history)/Profession, que antes solían quedar en 0.

## 2.4 Prerrequisitos de rangos de las dotes candidatas (texto verificado)

| Dote | Fuente | Prerrequisito de rangos | Otros |
|---|---|---|---|
| **Quick Channel** | Ultimate Magic pg. 154 — https://www.aonprd.com/FeatDisplay.aspx?ItemName=Quick%20Channel | **Knowledge (religion) 5 ranks** | channel energy |
| **Deific Obedience** | Faiths of Golarion pg. 4 / Inner Sea Gods pg. 210 / Inner Sea Faiths pg. 3 — https://www.aonprd.com/FeatDisplay.aspx?ItemName=Deific%20Obedience | **Knowledge (religion) 3 ranks** | "must worship a deity"; ≤ 1 h/día; los boons exigen 12/16/20 DG (a nivel 11 solo la obediencia base) |
| **Healer's Hands** (Conduit) | Planar Adventures pg. 28 — https://www.aonprd.com/FeatDisplay.aspx?ItemName=Healer%27s%20Hands | **Heal 1 rank, Knowledge (planes) 1 rank** | usos/día = rangos en Knowledge (planes); si superás la DC por 10+, sumás esos rangos a la curación; acción de asalto completo; sin penalización por falta de healer's kit; más de una vez por día sobre la misma criatura |
| **Signature Skill** | Pathfinder Unchained pg. 82 — https://www.aonprd.com/FeatDisplay.aspx?ItemName=Signature%20Skill | **5 rangos en la habilidad elegida**; con 10+ rangos los desbloqueos de 10 se ganan de inmediato; solo una vez | Desbloqueo de **Heal** (Unchained pg. 84, en https://www.aonprd.com/Skills.aspx?ItemName=Heal): 5 rangos "the target recovers hit points and ability damage as if it had rested for a full day"; 10 rangos "as if it had rested for a full day with long-term care" |
| **Divine Protection** | Advanced Class Guide pg. 144 — https://www.aonprd.com/FeatDisplay.aspx?ItemName=Divine%20Protection | **Knowledge (religion) 5 ranks** | **Cha 13**; 1/día, inmediata, sumás Cha a una salvación antes de tirar |

Todas se satisfacen con **Knowledge (religion) 5 + Heal 5+ + Knowledge (planes) ≥ 1** y Cha ≥ 13.

## 2.5 Distribución completa de rangos a nivel 11 (Wis 24 → +7; Cha 14 → +2 / Cha 16 → +3)

**A) Los 22 rangos de fondo (iguales en todos los escenarios; todas de clase, +3):**

| Habilidad de fondo | Rangos | Total | Para qué |
|---|---|---|---|
| **Linguistics** (Int) | 5 | Int 10: **+8** / Int 12: +9 | 5 idiomas (Celestial, Abyssal, Infernal, Draconic, Undercommon): hablar con extraplanares, leer inscripciones, descifrar (DC 20-30) |
| **Knowledge (history)** (Int) | 5 | +8 / +9 | Contexto de campaña; identificar reliquias |
| **Knowledge (nobility)** (Int) | 2 | +5 / +6 | Apoyo al personaje social |
| **Profession (herbalist)** (Wis) | 5 | **+15** | Es de **Wis**: tomando 10 = 25 → hierbas medicinales comunes (DC 10) y raras (DC 15) automáticas; ingreso trivial (25/2 = 12 gp/semana) |
| **Lore (la propia deidad / su iglesia)** (Int) | 5 | +8 / +9 | Sustituye a Knowledge (religion) en todo lo que atañe a la fe propia; "Sarenrae" es ejemplo oficial de Lore apropiado |
| **Total** | **22** | | Alternativas: Craft (alchemy) 5 en lugar de Knowledge (nobility) + parte de Lore si se fabrican antitoxinas/antiplague en tiempo muerto; Appraise si el grupo no tiene tasador |

**B) Rangos de aventura por escenario** (Heal, Perception, Knowledge (religion), Knowledge (planes), Spellcraft, Sense Motive, Diplomacy; nada de Disable Device). Bono de clase +3 salvo Perception (sin Seeker).

| Escenario | Pool | Heal | Perception | Kn (religion) | Kn (planes) | Spellcraft | Sense Motive | Diplomacy | Suma |
|---|---|---|---|---|---|---|---|---|---|
| **A0** Int 10, clase predilecta a pg | 22 | 11 | 6 | 5 | 0 | 0 | 0 | 0 | 22 |
| **A1** Int 10, clase predilecta a rangos, sin Healer's Hands | 33 | 11 | 11 | 5 | 0 | 3 | 3 | 0 | 33 |
| **A2** Int 10, clase predilecta a rangos, **con Healer's Hands** (sacrifica Perception) | 33 | 11 | 6 | 5 | 11 | 0 | 0 | 0 | 33 |
| **A3** Int 10, clase predilecta a rangos, Healer's Hands "mínimo" | 33 | 11 | 11 | 5 | 3 | 3 | 0 | 0 | 33 |
| **B** Int 12 + clase predilecta a rangos **o** humano Int 10 + clase predilecta | 44 | 11 | 11 | 5 | 11 | 3 | 3 | 0 | 44 |
| **C** humano Int 12 + clase predilecta a rangos | 55 | 11 | 11 | 5 | 11 | 6 | 6 | 5 | 55 |

Cuenta de referencia: la "necesidad completa" (Heal 11 + Perception 11 + Knowledge (planes) 11 + Knowledge (religion) 5) son **38 rangos de aventura**; con Int 10 y clase predilecta a rangos hay 33 → **faltan 5**. Soluciones: Int 12 (+11 → 44), humano Skilled (+11 → 44), o recortar Perception/Knowledge (planes) (A2/A3). Con Int 14 sin humano: 44 + 11 = 55 (igual a C).

**C) Totales finales por habilidad** (rangos + 3 de clase + característica). Perception: sin Seeker = rangos + Wis; con Seeker = rangos + 3 + 1 + Wis; el aasimar suma además +2 racial (Skilled). Int 10 → +0; Int 12 → +1.

| Habilidad | A1 (Int 10) | A2 (Int 10, HH) | B (Int 12) | B (humano Int 10) | C (humano Int 12) |
|---|---|---|---|---|---|
| **Heal** (11 r.) | 11+3+7 = **+21** | +21 | +21 | +21 | +21 |
| **Perception** sin Seeker | 11+7 = **+18** | 6+7 = **+13** | +18 | +18 | +18 |
| **Perception con Seeker** | 11+3+1+7 = **+22** | 6+3+1+7 = **+17** | +22 | +22 | +22 |
| (aasimar: +2 racial) | +20 / +24 | +15 / +19 | +20 / +24 | — | — |
| **Knowledge (religion)** (5 r.) | 5+3+0 = **+8** | +8 | 5+3+1 = **+9** | +8 | +9 |
| **Knowledge (planes)** | 0 (sin entrenar: +0, solo DC ≤ 10) | 11+3+0 = **+14** | 11+3+1 = **+15** | +14 | +15 |
| **Spellcraft** | 3+3+0 = **+6** | — | 3+3+1 = **+7** | +6 | 6+3+1 = **+10** |
| **Sense Motive** | 3+3+7 = **+13** | 0+7 = +7 | +13 | +13 | 6+3+7 = **+16** |
| **Diplomacy** (0 r.) | Cha 14: **+2** / Cha 16: +3 (aasimar +4/+5) | +2/+3 | +2/+3 | +2/+3 | 5+3+2 = **+10** (Cha 16: +11) |
| **Profession (herbalist)** (5 r., fondo) | 5+3+7 = **+15** | +15 | +15 | +15 | +15 |
| Linguistics / Kn (history) / Lore (5 r., fondo) | **+8** | +8 | **+9** | +8 | +9 |

Lecturas útiles de los totales:
- **Heal +21**: tomando 10 = 31 → "Treat deadly wounds" (DC 20) se supera por 11 → con Healer's Hands, como acción de asalto completo y sin healer's kit: 1 pg/nivel del paciente (11) + Wis 7 (por superar la DC por 5) + rangos en Knowledge (planes) (11, por superar por 10) = **29 pg** por uso, hasta 11 usos/día (escenarios A2/B/C). Con **Signature Skill (Heal)** a 10+ rangos se añade "as if it had rested for a full day with long-term care" (Core, Heal: 4 pg/nivel del paciente por día de reposo completo con cuidados → **+44** sobre un aliado de nivel 11) → **≈73 pg por asalto completo** fuera de combate, sin gastar espacios: es la "varita de curación infinita" del frente 04. Stabilize / First aid (DC 15) automática.
- **Perception +18 / +22**: es la única alarma del grupo (4 cuerpo a cuerpo con armadura rara vez la suben). A2 (+13/+17) es el precio de Healer's Hands con Int 10 sin humano: −5 en la habilidad más tirada del juego → preferir Int 12 o humano.
- **Knowledge (religion) +8/+9**: identificar muertos vivientes (DC 10 + CR; CR 11 → DC 21) exige tomar 20 o suerte: no es una habilidad de "sabio", solo cumple prerrequisitos. Si se quiere rol de identificador, Knowledge (planes) +14/+15 (extraplanares, DC 21 a CR 11: 7+ = 70 %) es la que rinde.
- **Sense Motive +13** con 3 rangos gracias a Wis 24; **Profession (herbalist) +15** por lo mismo.

**Comprobación de prerrequisitos por escenario:** Quick Channel (Kn religion 5) ✓ todos; Deific Obedience (Kn religion 3) ✓ todos; Divine Protection (Kn religion 5, Cha 13) ✓ todos con Cha 14+; Signature Skill (Heal 5+, unlock de 10 con 11 rangos) ✓ todos; Healer's Hands (Heal 1, Kn planes 1) ✓ solo A2, A3, B, C (A0/A1 tienen Knowledge (planes) 0 → **no cumple**).

**Recomendación:** escenario **B** (Int 12 con compra de 25 —cuesta 2 puntos— o humano; clase predilecta a rangos en los 11 niveles) si el frente 04 confirma Healer's Hands + Signature Skill; si no, **A1** con clase predilecta a rangos (Perception 11) y la clase predilecta a pg solo si el frente 10 necesita los 11 pg. Con el aasimar del frente 10 (Int 10, sin Skilled humano) la elección es entre Int 12 (B) y A1/A3.

## 2.6 Atajo para Knowledge (planes) sin rangos propios (a confirmar con el GM)

Headband of Vast Intelligence +2 (Core pg. 517 / UE pg. 251, https://www.aonprd.com/MagicWondrousDisplay.aspx?FinalName=Headband+of+Vast+Intelligence2): 4.000 gp; "grants a number of skill ranks in those skills equal to the wearer's total Hit Dice. These ranks do not stack with the ranks a creature already possesses." La versión Wis/Int (Headband of Mental Prowess +2, 10.000 gp, UE pg. 250) da 11 rangos en Knowledge (planes) y +1 Int (→ Int 12 → +11 rangos retroactivos de aventura). El auditor del frente anterior señaló la FAQ oficial (2011): los rangos del headband **son** los rangos retroactivos del aumento de Int, no un segundo juego. Que esos rangos satisfagan el prerrequisito y el conteo de usos de Healer's Hands es lectura RAW razonable ("skill ranks") pero se pierde al quitarse el objeto → **preguntar al GM**. Esto pertenece al frente 08; se menciona porque resuelve la cuenta 33 vs 38.

---

# PARTE 3 — DRAWBACK Y LOS 3 RASGOS

## 3.1 Reglas literales

- **Ultimate Campaign (legacy AoN):** "Drawbacks are traits in reverse. Instead of granting you a boon, they grant you a negative effect, typically in particular circumstances. **If you choose to take a drawback, you can take a third trait that you have access to.** You don't have to take a drawback." (https://legacy.aonprd.com/ultimateCampaign/characterBackground/traits.html). El texto habla de **"a drawback"** y **"a third trait"** en singular: un drawback, un rasgo extra. **AoN no transcribe ninguna regla que permita dos drawbacks**; la mesa ya fijó uno.
- **Ultimate Campaign pg. 8** (https://www.aonprd.com/Rules.aspx?ID=1222): "Select two traits (or three traits and a drawback) that capture the background you imagined. [...] The drawback, if you choose to take one, represents an emotional vulnerability or character flaw that should not only provide a slight mechanical disadvantage, but also (more importantly) serve as a roleplaying tool for making interesting choices."
- **Types of Traits (APG pg. 326**, https://www.aonprd.com/Rules.aspx?ID=452): "There are five types of character traits to choose from: basic (split among four categories: Combat, Faith, Magic, and Social), campaign, race, regional, and religion." Regional: "At 1st level, you can only select one regional trait". Religion: "religion traits can go away if you abandon your religion".
- **Restrictions on Trait Selection (APG pg. 326**, subpágina de https://www.aonprd.com/Rules.aspx?ID=450): "**When selecting traits, you may not select more than one from the same list of traits (the four basic traits each count as a separate list for this purpose).**" → El tercer rasgo **no** puede ser de una categoría ya usada; Combat, Faith, Magic y Social son cuatro listas distintas; Religion, Race, Regional y Campaign son otras. AoN indexa además listas posteriores (Cosmic, Equipment, Exemplar, Faction, Family, Mount) que cuentan como listas propias.
- **Bonificadores de rasgo no se acumulan** ("Trait bonuses do not stack", APG pg. 326).
- **Additional Traits (APG pg. 150**, https://www.aonprd.com/FeatDisplay.aspx?ItemName=Additional%20Traits): "You gain two character traits of your choice [...]. These traits must be chosen from different lists, and cannot be chosen from lists from which you have already selected a character trait." → Con drawback + Additional Traits: **5 rasgos de 5 listas distintas**. El drawback no ocupa ninguna lista de rasgo.
- **Rasgos de campaña** (APG pg. 326: "tailored to give new characters an instant hook into a new campaign [...] found in that Adventure Path's Player's Guide") → **requieren permiso del GM**; ninguno de los recomendados abajo lo es.

## 3.2 Los 66 drawbacks que indexa AoN, con texto y costo real para este perfil

Perfil evaluado: Wis 24, armadura media, canaliza, conjuros de toque, casi nunca ataca; **no** usa Bluff/Disguise/Stealth/Intimidate/Sleight of Hand/Disable Device ni habilidades sin entrenar; el personaje de apoyo lleva la Diplomacy del grupo; Will +14 (fuerte), Ref +4 (débil). Escala: **0** nulo; **1** bajo/situacional; **2** medio; **X** descartado (toca Will, concentración, salvaciones, pg/AC, iniciativa o acciones en combate). Fuente de todos: https://www.aonprd.com/Traits.aspx?Type=Drawback (libro y página según AoN; recuento: Quests & Campaigns 23, Ultimate Campaign 17, Spymaster's Handbook 12, Antihero's Handbook 10, Champions of Corruption 3, Blood of the Coven 1).

| Drawback | Fuente | Penalización (resumen fiel del texto de AoN) | Costo |
|---|---|---|---|
| Anxious | Quests & Campaigns pg. 22 | −2 Diplomacy; "must speak slowly"; se asume que no hablás por encima de un susurro | X (riesgo con componentes verbales) |
| Arcane Malignancies | Blood of the Coven pg. 10 | Solo changeling; efecto aleatorio d% | X |
| Attached | Ultimate Campaign pg. 64 | −1 Will y −2 vs miedo mientras el objeto esté amenazado/en peligro/en manos ajenas; si se pierde → Doubt | X |
| Avarice | Ultimate Campaign pg. 65 | Si no recibís ≥10 % más botín que cualquier compañero: sin aid another por 1 semana | 1 (mecánica casi nula; veneno de mesa) |
| Betrayed (Drawback) | Spymaster's Handbook pg. 6 | Sense Motive para corazonadas: dos tiradas, la peor; sin reroll | 0-1 |
| Bitter | Antihero's Handbook pg. 6 | "When you receive healing from an ally's class feature, spell, or spell-like ability, reduce the amount of that healing by 1 hit point." | 0-1 (sos el único sanador; tus curas sobre vos no son "de un aliado": interpretación, no texto) |
| Burned | Quests & Campaigns pg. 22 | −1 salv. vs fuego; adyacente a llamas −1 ataque/salv./habilidades | X |
| Condescending | Quests & Campaigns pg. 22 | −5 Diplomacy/Intimidate para mejorar actitudes de otras razas/etnias/naciones | 1 |
| Cowardly | Antihero's Handbook pg. 6 | Penalizaciones de miedo +1; perdés inmunidad al miedo | X |
| Cruelty | Quests & Campaigns pg. 22 | −2 ataque vs no indefensos si hay moribundos/indefensos a 30 pies | 0 (no atacás) |
| Dependent | Ultimate Campaign pg. 65 | Shaken 1 hora al fallar una Diplomacy | 2 |
| Doubt | Ultimate Campaign pg. 65 | −4 a ese tipo de prueba 1 h tras fallar una habilidad/característica | X |
| Empty Mask | Spymaster's Handbook pg. 7 | −1 Will vs compulsiones (−2 si conocen tu identidad) | X |
| Entomophobe | Antihero's Handbook pg. 6 | −2 ataque vs sabandijas; −2 salv. vs náusea de enjambres | X (estrecho) |
| Envy | Quests & Campaigns pg. 22 | Will DC 20 diario si no robaste 10 gp; −1 acumulativo Will/Ref/concentración | X |
| Family Ties | Ultimate Campaign pg. 65 | Pedido familiar no cumplido → −2 a **todas** las pruebas de característica y habilidad de Wis y Cha hasta cumplirlo o superar Will DC 20 (1/día); sin familia → Doubt | 1-2 (toca Heal, Perception, Sense Motive; Will +14 → 6+ = 75 %) |
| Fey-Taken | Quests & Campaigns pg. 22 | −2 salv. vs enfermedad, ilusiones, veneno y aptitudes feéricas | X |
| Forgetful | Quests & Campaigns pg. 22 | Wis DC 10 al dejar un lugar tras >1 h o perdés un objeto mundano aleatorio | 1 (Wis +7 → falla solo con 1-2 = 10 %; el objeto podría ser el símbolo sagrado) |
| Foul Brand | Champions of Corruption pg. 29 | Símbolo de deidad maligna marcado; en la mano −1 Disable Device/Disguise/Sleight of Hand; en la cara −2 Bluff/Diplomacy/Disguise; no sirve como foco divino | **0** (mano) |
| Guilty Fraud | Spymaster's Handbook pg. 7 | −4 Bluff vs criaturas indiferentes o mejores | **0** |
| Haunted | Antihero's Handbook pg. 6 | −2 salv. vs conjuros con descriptor [evil] | X |
| Haunting Regret | Quests & Campaigns pg. 22 | −2 salv. vs distracción de enjambres y mind-affecting; −2 concentración | X |
| Headstrong | Ultimate Campaign pg. 65 | Shaken 1 h si no corregís (o fallás al corregir) acciones contrarias a tu alineamiento | X |
| Hedonistic | Ultimate Campaign pg. 65 | Fort DC 20 al final de un día sin ≥10 gp de recompensa ni 1 h de placer; fatigado 4 h | 1 |
| Helpless | Antihero's Handbook pg. 6 | **Dazed** hasta el final de tu siguiente turno la primera vez por combate que un aliado a 30 pies cae inconsciente o muere | X (catastrófico para el sanador) |
| Impatient | Antihero's Handbook pg. 6 | No podés retrasar ni preparar; −1 a todo si actuás último | X |
| Infamous | Spymaster's Handbook pg. 7 | Vos y tus aliados −4 Diplomacy con ciudadanos respetuosos de la ley | 2 (castiga al personaje social) |
| Information Overload | Spymaster's Handbook pg. 7 | −2 a todas las Knowledge; fallo por 5+ → información opuesta | 2 |
| Insatiable | Antihero's Handbook pg. 6 | Bienes y servicios +10 % (no pagables por aliados); doble comida/agua | 2 (≈−8.200 gp de poder de compra sobre 82.000) |
| Lonely | Spymaster's Handbook pg. 7 | −2 Sense Motive, Perception vs disfraces y salv. vs charm | X |
| Loner | Quests & Campaigns pg. 22 | −1 AC y ataque adyacente a aliados o al aid another | X (el sanador de toque vive adyacente) |
| Lovesick | Ultimate Campaign pg. 65 | −2 iniciativa y Perception cada día lejos de la persona amada | X |
| Magical Klutz | Spymaster's Handbook pg. 7 | UMD a ciegas y **Reflejos vs efectos de objetos mágicos**: dos tiradas, la peor | X |
| Mark of Slavery | Quests & Campaigns pg. 22 | Al fallar una habilidad, −2 a habilidades y ataque hasta el fin de tu siguiente turno | 1 |
| Meticulous | Ultimate Campaign pg. 65 | −2 a habilidades **sin entrenar** | 1 (Climb/Swim/Escape Artist forzadas; Perception si quedara en 0) |
| Misbegotten | Quests & Campaigns pg. 22 | −2 a habilidades de Dex | 1 |
| Naive | Quests & Campaigns pg. 22 | −2 AC vs armas improvisadas; −2 CMD vs dirty trick | 0-1 |
| Nervous | Quests & Campaigns pg. 22 | Al tomar 10 con penalización por fallo, contás 8 | 2 (sabotea el "tomar 10" en Heal) |
| Oblivious | Quests & Campaigns pg. 22 | −2 Sense Motive y Perception visual | 2 |
| Occult Bargain | Spymaster's Handbook pg. 7 | −1 concentración; sin invocar el nombre cada día no recuperás espacios | X |
| Oppressive Expectations | Quests & Campaigns pg. 23 | Al fallar una habilidad, −2 en ella hasta acertar o fallar otra | 1 |
| Overprotective | Quests & Campaigns pg. 23 | −2 ataque y habilidades a >10 pies de un aliado caído | 1 |
| Paranoid | Ultimate Campaign pg. 65 | Aid another sobre vos: DC 15 en vez de 10 | 0-1 |
| Power-Hungry | Ultimate Campaign pg. 65 | −2 Will vs charm/compulsion si prometen poder/riqueza | X |
| Pride | Ultimate Campaign pg. 65 | −2 Diplomacy y Sense Motive contra quien te amenazó/acusó/desafió, hasta que se disculpe | 1 |
| Provincial | Ultimate Campaign pg. 65 | −2 Diplomacy y Sense Motive vs criaturas de otra religión o alineamiento | 1 |
| Righteous Indignation | Spymaster's Handbook pg. 7 | Debés tomar todo AoO salvo Will DC 10 + nivel (21); −1 Will vs [emotion] sin [fear] | X |
| Scarred | Antihero's Handbook pg. 6 | −5 Disguise, −2 Bluff | **0** |
| Secret Shame | Spymaster's Handbook pg. 7 | −1 salv. vs miedo; DC para desmoralizarte −1; perdés inmunidad al miedo | X |
| Self-Doubting | Antihero's Handbook pg. 6 | Primer Will o habilidad fallada del día → −2 a la siguiente del mismo tipo | X |
| Sentimental | Ultimate Campaign pg. 65 | −2 Perception para evitar sorpresa; −2 Reflejos vs trampas/peligros | X |
| Shadow-Scarred | Quests & Campaigns pg. 23 | −1 a salvaciones en luz tenue u oscuridad | X |
| Sheltered | Quests & Campaigns pg. 23 | Shaken bajo la mitad de pg | X |
| Sleepy | Quests & Campaigns pg. 23 | 12 h de descanso para el "full night's rest"; −2 salv. vs sueño | 1-2 (a 11 DG sos inmune a Sleep/Deep Slumber por tope de DG; el costo es logístico) |
| Spooked | Quests & Campaigns pg. 23 | Shaken 1d4 asaltos al ver feérico/extraplanar/muerto viviente a 60 pies salvo Will DC 15 + Cha | X |
| Stigmatized | Antihero's Handbook pg. 6 | −3 Diplomacy para reunir información o mejorar actitud | 1 |
| Superstitious (Drawback) | Quests & Campaigns pg. 23 | "Whenever you are affected with a harmless spell, there is a 50% chance that you must roll a saving throw to prevent that effect, even if it would benefit you. This does not apply to harmless spells cast by you upon yourself." | 1 (**ojo, brief**: solo penaliza conjuros benéficos **de otros** sobre vos; con Will +14 vs DC 11-16 de varitas ajenas solo fallás con 1 natural, pero podés perder un Heroism del bardo o una cura de emergencia ajena: no lo tomes) |
| Tainted Spirit | Quests & Campaigns pg. 23 | Fort DC 10 + asaltos actuados al terminar cada combate; fatigado 10 min/asalto | 2 |
| Too Many Secrets | Spymaster's Handbook pg. 7 | −2 Bluff y salv. vs ilusiones | X |
| Umbral Unmasking | Champions of Corruption pg. 29 | No proyectás sombra (o es monstruosa); se nota con Wis DC 15; "cannot be concealed by misdirection, nondetection, or illusions, except those that also affect shadows" | **0** mecánico; costo social |
| Unlearned | Quests & Campaigns pg. 23 | Elegís una Knowledge; no podés tirar **sin entrenar** las demás (con biblioteca, −2) | 0-1 |
| Vain | Ultimate Campaign pg. 65 | Al fallar una prueba **opuesta** de Cha: −2 a pruebas de Cha 24 h | 0-1 (Channel no es prueba) |
| Vainglory | Spymaster's Handbook pg. 7 | −1 Bluff, Disguise, Stealth; DC de tus ilusiones −1 | **0** (el único conjuro de ilusión con salvación del clérigo es Silence) |
| Warded Against Nature | Champions of Corruption pg. 29 | Los animales no se acercan a 30 pies salvo Handle Animal/Ride/wild empathy DC 20; inmunes los de clase | 1-2 (logística de monturas) |
| Xenophobic | Ultimate Campaign pg. 65 | −2 Diplomacy y Sense Motive vs otras razas/culturas | 1 |
| Zealous | Ultimate Campaign pg. 65 | −5 ataque y +2 daño (rasgo) en el **primer** ataque contra quien sabés que adora otra religión | 0 (no atacás) |

**Sobre los ejemplos del brief:** Meticulous 1, Paranoid 0-1, Pride 1, Vain 0-1, Provincial 1, Zealous 0, Family Ties 1-2, **Attached X (Will)**, **Lovesick X (iniciativa)**, **Headstrong X (shaken)**, Avarice 1, **Superstitious 1 pero desaconsejado** (afecta buffs ajenos), Betrayed 0-1.

## 3.3 Los 5 drawbacks de menor costo para esta build

1. **Scarred** (Antihero's Handbook pg. 6): −5 Disguise, −2 Bluff. Ninguna es de clase ni se tira nunca; no toca salvaciones, AC, acciones ni conjuros. Historia: cicatrices de una guerra santa o de un rescate. El "most people distrustful" es solo color.
2. **Vainglory** (Spymaster's Handbook pg. 7): −1 Bluff/Disguise/Stealth y −1 DC de ilusiones. Con 4 combatientes con armadura el grupo no hace Stealth; el clérigo no tiene ilusiones relevantes. Historia: busca que sus obras sean reconocidas (campeón de la fe).
3. **Guilty Fraud** (Spymaster's Handbook pg. 7): −4 Bluff contra indiferentes o mejores. Historia: recibió algo inmerecido (una ordenación, una reliquia); gancho de redención.
4. **Foul Brand, en la mano** (Champions of Corruption pg. 29): −1 Disable Device/Disguise/Sleight of Hand. Cero uso. Historia: converso o exesclavo de un culto maligno, redimido (encaja con Sarenrae). Elegir **mano**, no cara.
5. **Umbral Unmasking** (Champions of Corruption pg. 29): sin penalización numérica; los PNJ perceptivos (Wis DC 15) desconfían. Es el más "gratis" y por eso el que más GMs vetan a un personaje bueno.

Menciones: **Bitter** (0-1 siendo el único sanador; depende de que el GM acepte que tus curas no son "de un aliado"), **Zealous** (0 si nunca atacás; ruinoso para la variante de batalla), **Vain**, **Naive**, **Paranoid**, **Betrayed**, **Unlearned**. Opciones "honestas" de costo 1 para un GM que exija una desventaja real: **Provincial**, **Pride**, **Xenophobic** o **Meticulous**.

**Advertencia de mesa:** UC pg. 8 exige "a slight mechanical disadvantage" y una herramienta de rol. Llevar a la mesa un drawback de costo 0 **y** una alternativa de costo 1.

## 3.4 Rasgos candidatos (texto y categoría verificados)

| Rasgo | Categoría | Fuente | Texto | Valor a nivel 11 |
|---|---|---|---|---|
| **Reactionary** | Basic (**Combat**) | Ultimate Campaign pg. 53 / APG pg. 328 — https://www.aonprd.com/TraitDisplay.aspx?ItemName=Reactionary | "+2 trait bonus on initiative checks" | Actuar antes del segundo golpe del enemigo; se suma a Amazing Initiative (+3 a tier 3, es bonus sin tipo… AoN lo llama "a bonus on initiative checks equal to your mythic tier") y a Improved Initiative. **Imprescindible.** |
| **Fate's Favored** | Basic (**Faith**) | Ultimate Campaign pg. 55 — https://www.aonprd.com/TraitDisplay.aspx?ItemName=Fate%27s%20Favored | "Whenever you are under the effect of a luck bonus of any kind, that bonus increases by 1." | Hero point Bonus **+9/+5** (y +5/+3 cuando un aliado te lo da); Prayer +2 sobre vos; luckstone/jingasa +2. Ver 3.5. |
| **Birthmark** | Basic (**Faith**) | UC pg. 54 / APG pg. 328 — https://www.aonprd.com/TraitDisplay.aspx?ItemName=Birthmark | Foco divino incorporado; "+2 trait bonus on all saving throws against charm and compulsion effects" | Will +14 → +16 vs Dominate/charm; y no te pueden desarmar/robar el símbolo sagrado. Muy buena defensa del sanador (un clérigo dominado es la peor pesadilla del grupo). |
| **Blessed Touch** | Basic (**Faith**) | Champions of Purity pg. 7 — https://www.aonprd.com/TraitDisplay.aspx?ItemName=Blessed%20Touch | "You heal 1 additional point of damage when using lay on hands, channeling energy, or casting a cure spell." | +1 por objetivo y canalización: con 6 objetivos y Quick Channel (2 canalizaciones/asalto) = **+12 pg/asalto**; en Heal no aplica (no es "cure spell"). |
| **Indomitable Faith** | Basic (**Faith**) | UC pg. 55 / APG pg. 328 — https://www.aonprd.com/TraitDisplay.aspx?ItemName=Indomitable%20Faith | "+1 trait bonus on Will saves" | Will +15. Peor que Birthmark contra lo que importa (charm/compulsion) y no da foco. |
| **Acolyte of Apocrypha** | Basic (**Faith**) | Divine Anthology pg. 22 — https://www.aonprd.com/TraitDisplay.aspx?ItemName=Acolyte%20of%20Apocrypha | "You can select one of the apocryphal subdomains detailed below, provided the subdomain is associated with your patron deity." **Medicine** (Healing): Dalenydra, Immonhiel, Irori, Korada, Qi Zhong, **Sarenrae**. **Legend** (Glory): General Susumu, Gorum, Shizuru. | Habilita el subdominio **Medicine** (Divine Anthology pg. 24, https://www.aonprd.com/DomainDisplay.aspx?ItemName=Healing): reemplaza **Rebuke Death** por **Blessed Surgery** ("roll the check twice and take the higher result" en Heal, usos de 1 h pasan a 1 minuto, 3 + Wis = 10/día) y los conjuros de dominio 1.º/2.º por Diagnose Disease / Placebo Effect. Solo tiene sentido si el plan de dominios usa Healing y Healer's Hands (Heal como recurso); pierde Rebuke Death (1d4+5, 10/día, solo a pg < 0). Es el rasgo Faith que compite con Fate's Favored/Birthmark. |
| **Focused Mind** | Basic (**Magic**) | UC pg. 57 / APG pg. 329 — https://www.aonprd.com/TraitDisplay.aspx?ItemName=Focused%20Mind | "+2 trait bonus on concentration checks" | Heal a la defensiva DC 27: +18 → 60 %; **+20 → 70 %**; con Combat Casting +24 → 90 %. Es la tirada que más Heals le cuesta a un sanador rodeado. |
| **Seeker** | Basic (**Social**) | UC pg. 61 — https://www.aonprd.com/TraitDisplay.aspx?ItemName=Seeker | "+1 trait bonus on Perception checks, and Perception is always a class skill for you." | Perception +18 → **+22** (11 rangos). La única alarma del grupo. |
| **Envoy of Healing** | **Religion** (Sarenrae) | Healer's Handbook pg. 12 — https://www.aonprd.com/TraitDisplay.aspx?ItemName=Envoy%20of%20Healing | "Whenever you use channel energy, fervor, or lay on hands to heal a living creature, you can reroll any healing die roll that results in a natural 1 (you must use the new result)." | Media de cada d6: (1/6) × 3,5 + (5/6) × 4 = **3,92** en vez de 3,5 → 6d6 pasa de 21 a **23,5** (+2,5 por canalización, a cada aliado; +5/asalto con Quick Channel). Solo si la deidad es Sarenrae. No afecta a Heal ni a los cure. |

## 3.5 Fate's Favored, revalorado con Hero Points activos

Sin hero points, Fate's Favored solo rendía con Prayer (+1 → +2) y objetos de suerte (Stone of Good Luck +1 → +2 en salvaciones/habilidades/pruebas de característica; Jingasa of the Fortunate Soldier +1 AC → +2). Con hero points, cada Bonus propio vale **+9 antes / +5 después** y cada Bonus que un aliado te regale **+5/+3**. Cuenta: con 1-3 puntos por tramo y suponiendo que uno de cada dos se gaste en Bonus, el rasgo añade +1 a 1-2 tiradas letales por tramo. El valor concreto: la franja "fallé por exactamente 5" pasa a salvarse con Bonus después (+5) en lugar de exigir un Reroll (65 %). Es un beneficio real pero **pequeño y esporádico**; en la lista Faith sigue por debajo de **Birthmark** (+2 permanente contra charm/compulsion en la salvación que decide si el sanador se vuelve contra el grupo) salvo que el plan de equipo incluya luckstone + jingasa y se lance Prayer cada combate (entonces Fate's Favored da +1 AC, +1 salvaciones, +1 habilidades y +1 al hero point de forma permanente: ahí sí gana).

## 3.6 Terna recomendada y alternativas (3 rasgos de listas distintas + 1 drawback)

**Terna principal (deidad Sarenrae):**
1. **Reactionary** (Combat) — +2 iniciativa.
2. **Birthmark** (Faith) — +2 vs charm/compulsion + foco divino incorporado. (Si el frente 08 confirma luckstone + jingasa + Prayer habitual → **Fate's Favored** en su lugar.)
3. **Envoy of Healing** (Religion, Sarenrae) — +2,5 por canalización a cada aliado.
- **Drawback:** **Scarred** (o **Foul Brand** en la mano si se quiere el trasfondo de converso); alternativa de costo 1 si el GM exige mordida: **Provincial**.
- Con **Additional Traits** (APG pg. 150) más adelante: **Focused Mind** (Magic) + **Seeker** (Social).

**Alternativa 1 (deidad sin rasgo Religion útil, p. ej. Iomedae/Pharasma/otra):**
1. Reactionary (Combat), 2. Birthmark o Fate's Favored (Faith), 3. **Focused Mind** (Magic). Drawback: Scarred. Additional Traits → Seeker (Social) + un rasgo Regional/Race.

**Alternativa 2 (sanador de habilidad: Healing + Medicine + Healer's Hands + Signature Skill):**
1. Reactionary (Combat), 2. **Acolyte of Apocrypha** (Faith → subdominio Medicine: Blessed Surgery, 10/día, Heal con dos dados y usos de 1 h en 1 minuto), 3. **Seeker** (Social) para no perder Perception. Drawback: Guilty Fraud. Envoy of Healing solo con Additional Traits. Costo: se pierde Rebuke Death y no hay Birthmark → llevar Protection from Evil activa contra dominaciones.

**Por qué no Blessed Touch en la terna base:** compite en Faith con Birthmark; +12 pg/asalto en el mejor caso (Quick Channel a 6 objetivos) contra +2 en la salvación que puede hacer que el sanador cure al enemigo. En un grupo de 4 cuerpo a cuerpo que **siempre** está en el channel, Blessed Touch es la alternativa legítima si la mesa no abusa de encantamientos.

**Ninguno de los rasgos anteriores es de campaña**: no se pierde nada si el GM no los permite.

---

# 4. Advertencias, desinformación y erratas

- "Un PJ creado a nivel alto arranca con 3 hero points": **falso**; APG pg. 322 dice 1 "regardless of her level". Lo único que sube el arranque son los premios del GM (historia escrita, retrato) y Hero's Fortune.
- "El sanador puede gastar 2 hero points para salvar a un aliado": **falso**; Cheat Death "but not another character or NPC".
- "La acción extra del hero point no puede ser un conjuro": **falso**; esa cláusula es de **Amazing Initiative** (Mythic Adventures), no de Hero Points.
- "Los hero points se recuperan al descansar / con Recuperation": **falso**; "do not renew over time or with rest"; Recuperation restaura pg y class features, no hero points.
- "Se puede gastar Act Out of Turn y Extra Action en el mismo asalto": **falso**; 1 punto por asalto salvo Cheat Death.
- "El Bonus del hero point se suma a Prayer/Divine Favor": **falso**; todos son de **suerte**, se toma el mayor (Core, Common Terms). Fate's Favored suma +1 una sola vez.
- "Sarenrae da el subdominio Legend (Hero's Fortune gratis)": **falso**; Legend = General Susumu, Gorum, Shizuru y exige el rasgo Acolyte of Apocrypha + dominio Glory. Sarenrae tiene Glory pero sus subdominios apócrifos son Medicine y Thirst.
- "Superstitious (drawback) te obliga a salvar contra tus propias curas": **falso**; "This does not apply to harmless spells cast by you upon yourself"; sí contra las de **otros**. Sigue siendo mala idea para un sanador que recibe buffs.
- "Background Skills da 2 + Int rangos de trasfondo": **falso**; "The character's Intelligence modifier doesn't adjust this value".
- "Los rangos de trasfondo sobrantes pueden ir a Perception/Heal": **falso**; "only in background skills, not adventuring skills". Al revés sí.
- "Knowledge (planes) es de trasfondo": **falso**; es de aventura (solo engineering, geography, history y nobility son de fondo).
- "Perception es habilidad de clase del clérigo": **falso** (Core); por eso Seeker.
- "Lore necesita ser habilidad de clase de la clase": Lore "is always considered a class skill for all characters" (Unchained pg. 48).
- "AoN tiene páginas Skills.aspx para Artistry y Lore": **no**; están en Rules (ID 1739 y 1740).
- "Se pueden tomar dos drawbacks para cinco rasgos": la regla de Ultimate Campaign en AoN habla de "a drawback" y "a third trait"; no hay texto que habilite dos. La mesa fijó uno.
- "Luck of Heroes reembolsa cualquier uso": **falso**; solo Reroll y Bonus-antes, nunca Cheat Death, y 25 %.
- "Mythic Heal es gratis para un clérigo mítico": **falso**; hay que conocerla con Mythic Spell Lore (dote mítica, 3 conjuros a tier 3) y gastar 1 poder mítico por lanzamiento.
- d20pfsrd.com lista drawbacks y hero points mezclados con material de terceros (p. ej. "Hero Points" de otros editores y drawbacks 3PP); **no usado como fuente**. Ningún dato de este documento proviene de 2e, Starfinder ni 3PP.
- FAQ/erratas: no existe FAQ oficial de Paizo sobre hero points ni sobre drawbacks; la única FAQ tangencial es la del Headband of Vast Intelligence (los rangos del objeto son los retroactivos de Int).
- Errores del frente anterior corregidos aquí: la probabilidad de Reroll con Will +12 vs DC 20 era 65 % (no 70 %); ahora con Wis 24 los números cambian (Will +14). Las URLs `Feats.aspx?Categories=Hero+Point` y `Races.aspx?ItemName=Human` no muestran la entrada: usar `Feats.aspx?Category=Hero%20Point` y `RacesDisplay.aspx?ItemName=Human`.

# 5. Preguntas abiertas / decisiones del GM o del jugador

1. **Hero points iniciales:** RAW 1. ¿El GM concede el punto por **historia escrita** y/o **retrato** (APG pg. 322)? Con 2, Cheat Death existe desde la sesión 1.
2. **Cheat Death contra death effects / desintegración / daño masivo:** "How this plays out is up to the GM".
3. **Act Out of Turn:** ¿se permite el paso de 5 pies de las acciones preparadas? ¿"Take your turn immediately" consume el turno del asalto (lectura de Ready) o es un turno adicional?
4. **Extra Action (hero point) + Amazing Initiative en el mismo turno:** RAW se acumulan (fuentes distintas); confirmar.
5. **Surge + Bonus/Reroll sobre la misma tirada:** Mythic Adventures no menciona hero points; confirmar.
6. **Recall sobre Channel Energy / Rebuke Death / poder mítico:** los dos primeros entran en la letra; el poder mítico es ambiguo.
7. **Special para lanzar un conjuro de 7.º a nivel 11** (Resurrection/Regenerate): ejemplo literal, "not guaranteed".
8. **Hero's Blade** (6 puntos, 17.315 gp): ¿el GM lo permite a un PJ? (APG pg. 324 sugiere reservar objetos que dan hero points a villanos.)
9. **Alcance del Bonus a un aliado:** "same location", sin pies.
10. **Divine Surge del Hierophant:** ¿Inspired Spell (flexibilidad, NL +2) o Recalled Blessing (doble dado en curas)? Depende del frente 06 y del jugador; cambia el valor del uso Recall.
11. **Clase predilecta:** ¿los 11 puntos a rangos (Perception 11 + Knowledge (planes)) o a pg? Depende del reparto de pg del frente 10.
12. **Int 12 vs 10 / humano vs aasimar:** define si entran Healer's Hands + Signature Skill sin sacrificar Perception (escenario B vs A1/A2).
13. **Rangos del headband como prerrequisito de Healer's Hands:** GM.
14. **Drawback de costo cero (Scarred, Vainglory, Guilty Fraud, Foul Brand, Umbral Unmasking):** ¿el GM exige un costo real? Tener Provincial/Pride de reserva.
15. **Bitter:** ¿tus propias curas cuentan como "de un aliado"? RAW dice "an ally's": no, pero es interpretación.
16. **Deidad:** Envoy of Healing exige Sarenrae; Acolyte of Apocrypha → Medicine exige Sarenrae/Irori/Korada/Qi Zhong/Dalenydra/Immonhiel; Legend exige Gorum/Susumu/Shizuru (descartado). La terna final depende de la deidad elegida en el frente 10.
17. **Rasgos de campaña:** ninguno recomendado; si el GM ofrece los de su AP, revisar si alguno da Perception de clase o +1 canalización antes de gastar la plaza Social/Faith.
18. **Heroic Fortune sobre uno mismo para el 2.º punto de Cheat Death:** RAW válido (el punto temporal "is spent before any other"); confirmar que el GM acepta contar el temporal para los 2 puntos.
