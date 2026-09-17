# 11 — VERIFICACIÓN adversarial: Hero Points (APG), drawback + tercer rasgo (Ultimate Campaign) y Background Skills (Pathfinder Unchained)

**Fecha:** 2026-09-16. **Auditor:** agente adversarial. **Fuente de verdad:** aonprd.com (Pathfinder 1e). **Método:** cada afirmación se cotejó contra el texto real de AoN, leído de la caché local (`_aon_cache/audit11/`, `_raw/`, `_tmp/`, `_aon_cache/audit04/`) y, cuando la caché estaba vacía o era dudosa, descargado en vivo con curl (páginas: Hero Points, Feats.aspx?Category=Hero Point, Traits.aspx?Type=Drawback, RacesDisplay Human, Rules.aspx (índice), Character Advancement, Base Mythic Abilities, MythicFeats, Guardian/Hierophant). Se buscó también FAQ/errata oficial en paizo.com y en la caché de FAQ de AoN.

## Resultado global

- **51 afirmaciones auditadas: 51 confirmadas, 0 corregidas, 0 falsas, 0 no verificables.**
- No se detectó contaminación de 3PP, Pathfinder 2e, Starfinder ni homebrew en las afirmaciones.
- Dos URLs citadas están mal formadas (devuelven la lista general o una página vacía) aunque el contenido afirmado es correcto: se indican las URLs correctas.
- No existe FAQ ni errata oficial de Paizo sobre el sistema de Hero Points de PF1 (búsqueda `site:paizo.com faq "hero point"` solo devuelve material de PFS 2e y foros; la caché de FAQ de AoN no contiene "hero point", "drawback" ni "background skill").
- Hay un error aritmético en las NOTAS del investigador (no en las afirmaciones): ver sección "Errores en las notas".

## Tabla de veredictos

| # | Afirmación (resumen) | Estado | Evidencia / observación |
|---|---|---|---|
| 1 | 1 hero point inicial sin importar nivel | confirmado | Hero Points (APG 322): "Each character begins play with 1 hero point, regardless of her level." |
| 2 | Máximo 3; no se recuperan con descanso; no se pierden al morir | confirmado | "Characters can have no more than 3 hero points at any one time. Excess hero points are lost." / "hero points do not renew over time or with rest" / "When a character dies, she does not lose any hero points". |
| 3 | 1 punto por asalto; Cheat Death única excepción; sin acción | confirmado | "Hero points can be spent at any time and do not require an action to use" / "You cannot spend more than 1 hero point during a single round of combat" / "Cheating death is the only way for a character to spend more than 1 hero point in a turn." |
| 4 | Cheat Death no salva a otro PJ/PNJ | confirmado | "...familiar, animal companion, eidolon, or special mount, but not another character or NPC." / "generally the character is left alive, with negative hit points but stable" / "How this plays out is up to the GM". |
| 5 | Bonus +8/+4 propio; +4/+2 a otro; mismo lugar; sin alcance en pies | confirmado | Texto literal coincide; la única condición es "same location and your character can reasonably affect the outcome". |
| 6 | Extra Action sin restricción de conjuros | confirmado | "You can spend a hero point on your turn to gain an additional standard or move action this turn." Sin ninguna cláusula sobre conjuros. |
| 7 | Amazing Initiative (tier 2): estándar extra que no puede lanzar conjuros, 1/asalto | confirmado | Base Mythic Abilities (MA): "This additional standard action can't be used to cast a spell. You can't gain an extra action in this way more than once per round." |
| 8 | Recall sin tope de nivel de conjuro | confirmado | "recall a spell you have already cast or to gain another use of a special ability that is otherwise limited. This should only be used on spells and abilities possessed by your character that recharge on a daily basis." |
| 9 | Act Out of Turn = acción preparada, solo move o standard | confirmado | Texto literal coincide. |
| 10 | Special: conjuro un nivel superior, prueba difícil, sin puntos adicionales | confirmado | "...casting a single spell that is one level higher than you could normally cast ... accompanied by a difficult check or penalty ... No additional hero points may be spent on such an attempt, either by the character or her allies." |
| 11 | Mythic Adventures no menciona hero points | confirmado | 0 coincidencias de "hero point" en: Mythic Heroes (ID 1613), Base Mythic Abilities (ID 1618), reglas míticas completas cacheadas (186 KB), Hierophant, Guardian, Archmage, Champion, Marshal, Trickster (paths y listas de aptitudes), MythicFeats, MythicSpells. El único hit de la búsqueda de AoN ("Mythic Material: Guardian") es por las palabras sueltas "hero" y "points" (Bonus Hit Points). |
| 12 | Surge: inmediata tras el resultado, 1d6/1d8 (4)/1d10 (7)/1d12 (10) | confirmado | Base Mythic Abilities: texto literal coincide. |
| 13 | Hero's Fortune: +1 punto, máximo 5; PNJ 1 y máx. 3 | confirmado | FeatDisplay Hero's Fortune (APG 324). |
| 14 | Luck of Heroes: d20 > 15 no se gasta (Reroll / Bonus antes); no con Cheat Death | confirmado | FeatDisplay Luck of Heroes (APG 324): "If the result is greater than 15, the hero point is not spent. You cannot use this feat when you cheat death." 16-20 = 25 %. |
| 15 | Blood of Heroes: 2 puntos por nivel | confirmado | FeatDisplay Blood of Heroes (APG 323). |
| 16 | Categoría Hero Point = 3 dotes | confirmado | La URL correcta es `Feats.aspx?Category=Hero%20Point` (la citada, `Categories=Hero+Point`, devuelve la lista general de dotes). Lista: Blood of Heroes, Hero's Fortune, Luck of Heroes (APG 323). |
| 17 | Heroic Fortune (clérigo 2, 100 gp, toque, 1 asalto/nivel) y Mass (clérigo 5, 1.000 gp, cercano) | confirmado | SpellDisplay Heroic Fortune (APG 324). Extra: Will negates (harmless), SR no; Mass: "one or more creatures, no two of which can be more than 30 ft. apart". |
| 18 | Hero's Blade 17.315 gp, +2 longsword, 6 puntos que no cuentan contra el máximo | confirmado | MagicWeaponsDisplay Hero's Blade (APG 325). CL 9, construcción 8.815 gp. |
| 19 | Ring of Heroes 8.000 gp: Luck of Heroes tras 24 h; destruir por 1 punto inmediato | confirmado | MagicRingsDisplay Ring of Heroes (APG 325). |
| 20 | Defiant Luck (humano) | confirmado | FeatDisplay Defiant Luck (ARG 77). Extra: "does not stack with other effects that allow you to reroll ... You may only make one reroll." |
| 21 | Rasgo racial Heroic (ARG 72): 2 puntos por nivel (3 con Blood of Heroes) | confirmado | URL correcta: `RacesDisplay.aspx?ItemName=Human` (la citada `Races.aspx?ItemName=Human` devuelve solo el índice). Texto literal coincide; también en Standard Other Traits (ARG 238). |
| 22 | Legend (Glory): Hero's Fortune o Marked for Glory; requiere Acolyte of Apocrypha; General Susumu, Gorum, Shizuru | confirmado | DomainDisplay Glory → Legend Subdomain (Divine Anthology 23). Además reemplaza divine presence (8.º) por Witness the Legend y cambia conjuros de dominio 2.º/3.º/4.º/6.º. |
| 23 | Sarenrae: dominios y subdominios; Legend no | confirmado | DeityDisplay Sarenrae (Inner Sea Gods 132): "Domains Fire, Glory, Good, Healing, Sun / Subdomains Agathion, Day, Heroism, Light, Medicine*, Redemption, Restoration, Resurrection, Revelation, Thirst*". |
| 24 | Acolyte of Apocrypha: Basic (Faith); Legend = General Susumu, Gorum, Shizuru; Medicine incluye Sarenrae | confirmado | TraitDisplay Acolyte of Apocrypha (Divine Anthology 22). Medicine: Dalenydra, Immonhiel, Irori, Korada, Qi Zhong, Sarenrae. |
| 25 | UC pg. 8: "two traits (or three traits and a drawback)" | confirmado | Rules How to Create a Background (UC 8): texto literal coincide. |
| 26 | Restricción de listas; cinco tipos de rasgo | confirmado | Rules Traits (APG 326): texto literal coincide. |
| 27 | Additional Traits: dos rasgos de listas distintas y no usadas | confirmado | FeatDisplay Additional Traits (APG 150): "must be chosen from different lists, and cannot be chosen from lists from which you have already selected a character trait". |
| 28 | UC pg. 64 (regla de un solo drawback) no transcrito en AoN | confirmado | El índice de reglas de AoN para Ultimate Campaign (Character Background, Downtime, Campaign Systems, Kingdoms...) no tiene sección de Traits/Drawbacks; Traits.aspx?Type=Drawback lista entradas sin texto introductorio; la única referencia a "Ultimate Campaign 64" está en Arcane Malignancies (Blood of the Coven 10). |
| 29 | 66 drawbacks: UC 17, Q&C 23, CoC 3, AH 10, SH 12, BotC 1 | confirmado | Recuento sobre la página en vivo (2026-09-16): 66 entradas; Quests & Campaigns 23, Ultimate Campaign 17, Spymaster's Handbook 12, Antihero's Handbook 10, Champions of Corruption 3, Blood of the Coven 1. |
| 30 | Scarred: −5 Disguise, −2 Bluff | confirmado | Antihero's Handbook 6. |
| 31 | Vainglory: −1 Bluff/Disguise/Stealth; DC ilusiones −1 | confirmado | Spymaster's Handbook 7. |
| 32 | Guilty Fraud: −4 Bluff vs indiferente o mejor | confirmado | Spymaster's Handbook 7. |
| 33 | Foul Brand | confirmado | Champions of Corruption 29: texto literal coincide. |
| 34 | Umbral Unmasking | confirmado | Champions of Corruption 29: "cannot be concealed by misdirection, nondetection, or illusions, except those that also affect shadows (such as invisibility)". |
| 35 | Family Ties | confirmado | TraitDisplay Family Ties (UC 65): texto literal coincide. |
| 36 | Attached: −1 Will, −2 vs miedo | confirmado | UC 64: "you take a –1 penalty on Will saves and a –2 penalty on saves against fear effects" mientras el objeto está amenazado/en peligro/en posesión ajena. |
| 37 | Helpless: dazed hasta el final del siguiente turno | confirmado | Antihero's Handbook 6. |
| 38 | Bitter: −1 pg a curas de aliado | confirmado | Antihero's Handbook 6: "When you receive healing from an ally's class feature, spell, or spell-like ability, reduce the amount of that healing by 1 hit point." Que las curas propias no cuenten es inferencia razonable (uno no es su propio "ally"), no texto explícito: confirmar con el GM. |
| 39 | Reactionary / Focused Mind / Seeker | confirmado | TraitDisplay: Reactionary Basic (Combat) +2 iniciativa (UC 53); Focused Mind Basic (Magic) +2 concentración (UC 57); Seeker Basic (Social) +1 Perception y clase (UC 61). |
| 40 | Blessed Touch, Fate's Favored, Birthmark = Basic (Faith) | confirmado | Los tres figuran como Category Basic (Faith) (CoP 7 / UC 55 / UC 54). |
| 41 | Envoy of Healing (Religion, Sarenrae) | confirmado | Healer's Handbook 12: "channel energy, fervor, or lay on hands ... reroll any healing die roll that results in a natural 1 (you must use the new result)". Media d6 = (1/6)(3,5) + (5/6)(4) = 3,917. |
| 42 | Background Skills: 2 rangos/nivel de clase de PJ, sin Int, solo trasfondo | confirmado | Unchained 47: texto literal coincide. |
| 43 | Tabla aventura/trasfondo | confirmado | Unchained 46: tabla coincide. |
| 44 | Lore siempre de clase; Artistry si Craft/Perform; Lore (Sarenrae) válido | confirmado | Unchained 48/50; "Sarenrae" figura en la tabla de Lore apropiados. |
| 45 | Clérigo 2 + Int; lista de habilidades de clase; Perception no | confirmado | ClassDisplay Cleric (Core 38): "Skill Points at each Level: 2 + Int modifier"; lista coincide. |
| 46 | Cuenta 33 vs 38; humano o Int 12 → 44 | confirmado | 2×11 + 11 (clase predilecta, Core 31: "+1 hit point or +1 skill rank") = 33; 11+11+11+5 = 38; humano Skilled +1/nivel → 44; Int 12 → 3×11+11 = 44. |
| 47 | Quick Channel (Kn religion 5, channel) / Healer's Hands (Heal 1, Kn planes 1) | confirmado | UM 154 / Planar Adventures 28 (dote Conduit): texto literal coincide. |
| 48 | Headband of Vast Intelligence (+2: 4.000 gp) / Mental Prowess (+2: 10.000 gp) | confirmado | UE 251/250: texto literal coincide. FAQ oficial (2011/01/08): los rangos del headband SON los rangos retroactivos del Int; no se obtiene un segundo juego de rangos. |
| 49 | Signature Skill: 5 rangos; con 10+ los desbloqueos inmediatos | confirmado | Unchained 82: texto literal coincide. Solo puede tomarse una vez. |
| 50 | Antihéroes: sin hero points, dote extra a nivel 1, a criterio del GM | confirmado | APG 324: texto literal coincide. |

## Errores en las notas del investigador (no en las afirmaciones)

1. **A.3 / A.6 — "Reroll vs Will fallado: Will +12 vs DC 20 → 70 %"**: es **65 %**. Con +12 hace falta un 8 natural o más (20 − 12 = 8): 13 resultados de 20 = 65 %. (En B.2, para Family Ties, la misma cuenta está bien: 65 %.)
2. **A.5 — Hero's Blade "sin competencia se puede empuñar (Iomedae la da como arma predilecta)"**: cierto para un clérigo de Iomedae, pero el personaje es de **Sarenrae (arma predilecta: scimitar)**; un clérigo de Sarenrae empuña la longsword sin competencia (−4 al ataque), lo que es irrelevante si solo se usa como depósito de hero points, pero conviene decirlo.
3. **URLs**: `Feats.aspx?Categories=Hero+Point` devuelve la lista general de dotes; la página de categoría es `Feats.aspx?Category=Hero%20Point`. `Races.aspx?ItemName=Human` devuelve el índice vacío; la página del humano es `RacesDisplay.aspx?ItemName=Human`.
4. **A.5 Legend**: además de sustituir el +2 a la DC de canalización, el subdominio sustituye divine presence (8.º) por Witness the Legend y cambia los conjuros de dominio de 2.º, 3.º, 4.º y 6.º. No cambia la conclusión (Sarenrae no lo otorga).
5. **B.3 Bitter**: la exclusión de las curas propias es interpretación (RAW dice "an ally's"), no texto explícito.

## FAQ / errata

- Búsqueda `site:paizo.com faq "hero point"`: sin FAQ oficial de PF1 sobre hero points (solo PFS 2e y hilos de foro).
- Caché de FAQ de AoN: sin entradas para "hero point", "drawback" ni "background skill".
- FAQ relevante encontrado: **Headband of Vast Intelligence (2011/01/08)** — los rangos del objeto representan los rangos retroactivos del aumento de Int; no se acumulan con otro juego de rangos.

## URLs de evidencia

- https://www.aonprd.com/Rules.aspx?Name=Hero%20Points&Category=Optional%20Rule%20Systems (= Rules.aspx?ID=445)
- https://www.aonprd.com/Rules.aspx?Name=Base%20Mythic%20Abilities&Category=Mythic%20Heroes (= Rules.aspx?ID=1618)
- https://www.aonprd.com/Rules.aspx?Name=Mythic%20Heroes&Category=Mythic%20Adventures (= Rules.aspx?ID=1613)
- https://www.aonprd.com/Feats.aspx?Category=Hero%20Point
- https://www.aonprd.com/FeatDisplay.aspx?ItemName=Hero%27s%20Fortune · Luck%20of%20Heroes · Blood%20of%20Heroes · Defiant%20Luck · Additional%20Traits · Quick%20Channel · Healer%27s%20Hands · Signature%20Skill
- https://www.aonprd.com/SpellDisplay.aspx?ItemName=Heroic%20Fortune
- https://www.aonprd.com/MagicWeaponsDisplay.aspx?ItemName=Hero%27s%20Blade
- https://www.aonprd.com/MagicRingsDisplay.aspx?FinalName=Ring%20of%20Heroes
- https://www.aonprd.com/RacesDisplay.aspx?ItemName=Human
- https://www.aonprd.com/DomainDisplay.aspx?ItemName=Glory
- https://www.aonprd.com/DeityDisplay.aspx?ItemName=Sarenrae
- https://www.aonprd.com/TraitDisplay.aspx?ItemName=Acolyte%20of%20Apocrypha · Family%20Ties · Reactionary · Focused%20Mind · Seeker · Blessed%20Touch · Fate%27s%20Favored · Birthmark · Envoy%20of%20Healing
- https://www.aonprd.com/Rules.aspx?Name=How%20to%20Create%20a%20Background&Category=Character%20Background
- https://www.aonprd.com/Rules.aspx?Name=Traits&Category=Advanced%20Player%27s%20Guide
- https://www.aonprd.com/Traits.aspx?Type=Drawback
- https://www.aonprd.com/Rules.aspx?Name=Background%20Skills&Category=Skills%20and%20Options
- https://www.aonprd.com/ClassDisplay.aspx?ItemName=Cleric
- https://www.aonprd.com/Rules.aspx?Name=Character%20Advancement&Category=Basics
- https://www.aonprd.com/MagicWondrousDisplay.aspx?FinalName=Headband+of+Mental+Prowess2 · Headband+of+Vast+Intelligence2
