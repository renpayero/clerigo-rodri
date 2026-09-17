# 06 — Mythic Adventures (Hierophant) — VERIFICACIÓN ADVERSARIAL

**Fecha:** 2026-09-15. **Auditor:** agente de verificación de reglas PF1e. **Fuente de verdad:** Archives of Nethys PF1e (`aonprd.com`).
**Método:** cada afirmación se cotejó contra el TEXTO REAL de la página de AoN citada. Se usó la caché local (`_raw/`, descargas crudas del HTML de aonprd.com: `base_abilities`, `gaining_tiers`, `hierophant`, `hiero_abilities`, `universal`, `abil_Archmage`, `path_*`, `mythic_rules_all`, `faqs`, `mythicfeats`, `mythicspells`, `feat_*`, `spells/sp_*`) y se hicieron comprobaciones en vivo con WebFetch sobre `PathAbilities.aspx?Path=Hierophant`, `SpellDisplay.aspx?ItemName=Heal` y `Feats.aspx?Category=Mythic` (coinciden con la caché). Las cifras de Wrath of the Righteous se verificaron en `store.paizo.com` (NO AoN, tal como declaraba el investigador).

## Resultado global

- **50 afirmaciones auditadas: 50 confirmadas, 0 corregidas, 0 falsas, 0 no verificables.**
- No se detectó contaminación de 3PP, Pathfinder 2e, Starfinder, D&D 3.5 ni homebrew. Todos los nombres de dotes, habilidades de senda y conjuros existen en AoN 1e con el libro fuente indicado (Mythic Adventures; Mythic Origins / Mythic Realms / Heroes of Golarion solo donde el investigador lo señaló).
- Toda la matemática a nivel 11 se recomprobó (ver abajo).

## Tabla de veredictos

| # | Afirmación (resumen) | Estado | Observación / cita | URL |
|---|---|---|---|---|
| 1 | Mythic Power = 3 + 2×tier; es el máximo | confirmado | "3 plus double your mythic tier (5/day at 1st tier, 7/day at 2nd, etc.). This amount is your maximum amount of mythic power." | https://www.aonprd.com/Rules.aspx?ID=1618 |
| 2 | Surge 1d6 inmediata tras ver el resultado; 1d8/1d10/1d12 a tier 4/7/10 | confirmado | Texto literal coincide. | https://www.aonprd.com/Rules.aspx?ID=1618 |
| 3 | +2 a característica en tiers 2,4,6,8,10, repetible | confirmado | "this can be an ability score you've already increased or a different ability score." | https://www.aonprd.com/Rules.aspx?ID=1618 |
| 4 | Dote mítica (o no mítica) en tiers 1,3,5,7,9; cumplir prerrequisitos | confirmado | "Select one mythic feat or non-mythic feat as a bonus feat. You must qualify for this feat normally." | https://www.aonprd.com/Rules.aspx?ID=1618 |
| 5 | Hierophant +4 pv/tier; Archmage 3, Guardian 5, Marshal 4 | confirmado | Verificado en las 4 páginas de senda. | https://www.aonprd.com/MythicPaths.aspx?Path=Hierophant |
| 6 | Tabla 1-2 trials: —/1/2/2/3/3/4/4/5/5; máx. 10; GM puede modificar | confirmado | Tabla literal. | https://www.aonprd.com/Rules.aspx?ID=1619 |
| 7 | Ritmo: tier ≈ ½ nivel → tier 5 a nivel 11 | confirmado | "keep the character's mythic tier roughly equal to 1/2 the character's overall level" (MA pg. 129). | https://www.aonprd.com/Rules.aspx?Name=Mythic%20Trials&Category=Running%20a%20Mythic%20Game |
| 8 | WotR vol. 3 = nivel 9/3 tiers; vol. 4 = 12/5; vol. 5 = 15/7; vol. 6 = 18/9 (Paizo, no AoN) | confirmado | Vol. 3 leído directo en store.paizo.com ("for 9th-level characters with 3 mythic tiers"); vols. 4-6 vía fichas de store.paizo.com en resultados de búsqueda (las URL directas dieron 404). Correctamente marcado como NO AoN. | https://store.paizo.com/pathfinder-adventure-path-75-demon-s-heresy-wrath-of-the-righteous-3-of-6/ |
| 9 | Amazing Initiative (tier 2) | confirmado | Texto literal coincide (acción gratuita, no lanzar conjuro, 1/asalto). | https://www.aonprd.com/Rules.aspx?ID=1618 |
| 10 | Recuperation (tier 3) | confirmado | Menciona "spells per day" explícitamente; no recarga mythic power. | https://www.aonprd.com/Rules.aspx?ID=1618 |
| 11 | Mythic Saving Throws (tier 5) | confirmado | | https://www.aonprd.com/Rules.aspx?ID=1618 |
| 12 | Force of Will (tier 7) | confirmado | | https://www.aonprd.com/Rules.aspx?ID=1618 |
| 13 | Hard to Kill (tier 1) | confirmado | Nota: el sangrado (bleed) sigue restando pv bajo 0. | https://www.aonprd.com/Rules.aspx?ID=1618 |
| 14 | Inspired Spell | confirmado | Texto de AoN = texto propuesto por la FAQ 2013/01/10. | https://www.aonprd.com/MythicPaths.aspx?Path=Hierophant |
| 15 | Recalled Blessing | confirmado | | https://www.aonprd.com/MythicPaths.aspx?Path=Hierophant |
| 16 | Divine Vessel (tier 10) | confirmado | | https://www.aonprd.com/MythicPaths.aspx?Path=Hierophant |
| 17 | Faith's Reach (tier 1), sin coste | confirmado | El texto no menciona gasto de mythic power ni cambio de ranura. | https://www.aonprd.com/PathAbilities.aspx?Path=Hierophant |
| 18 | Mythic Domain (tier 1) | confirmado | Requiere el rasgo de clase domain (o mystery). | https://www.aonprd.com/PathAbilities.aspx?Path=Hierophant |
| 19 | Abundant Healing (tier 3) | confirmado | "one ally adjacent to you". | https://www.aonprd.com/PathAbilities.aspx?Path=Hierophant |
| 20 | Divine Metamastery (tier 3) | confirmado | Además: solo un uso activo a la vez; un nuevo uso termina el anterior. | https://www.aonprd.com/PathAbilities.aspx?Path=Hierophant |
| 21 | Enduring Blessing (tier 3; 2.ª toma tier 6) | confirmado | | https://www.aonprd.com/PathAbilities.aspx?Path=Hierophant |
| 22 | Relentless Healing (tier 1) | confirmado | | https://www.aonprd.com/PathAbilities.aspx?Path=Hierophant |
| 23 | Overflowing Grace (tier 1) | confirmado | Con energía negativa sobre no muertos el bono es profane. | https://www.aonprd.com/PathAbilities.aspx?Path=Hierophant |
| 24 | Life Current (tier 3, hasta 4 tomas) | confirmado | | https://www.aonprd.com/PathAbilities.aspx?Path=Hierophant |
| 25 | Hand of Mercy (tier 3) | confirmado | | https://www.aonprd.com/PathAbilities.aspx?Path=Hierophant |
| 26 | Empathic Healing (tier 1) | confirmado | | https://www.aonprd.com/PathAbilities.aspx?Path=Hierophant |
| 27 | Divine Guardian (tier 1) | confirmado | Ejemplo del texto: 10th-level/5th-tier → SM II (1 uso) o SM V (2 usos), 10 asaltos. | https://www.aonprd.com/PathAbilities.aspx?Path=Hierophant |
| 28 | Sustained by Faith (tier 1) | confirmado | | https://www.aonprd.com/PathAbilities.aspx?Path=Hierophant |
| 29 | Mythic Spellcasting (Universal) | confirmado | | https://www.aonprd.com/PathAbilities.aspx?Path=Universal |
| 30 | Extra Mythic Power (path ability y dote) | confirmado | Ability pg. 50 (hasta 3 veces); dote pg. 65 (+2 usos). | https://www.aonprd.com/PathAbilities.aspx?Path=Universal |
| 31 | Enhanced Ability (Universal tier 3) | confirmado | | https://www.aonprd.com/PathAbilities.aspx?Path=Universal |
| 32 | Divine Source (Universal tier 3) | confirmado | Detalle omitido: los dominios deben ser de alineamiento coincidente "if possible" (salvo neutral); a tier 6 y 9 agrega 1 dominio + 2 subdominios. | https://www.aonprd.com/PathAbilities.aspx?Path=Universal |
| 33 | Reglas de conjuros míticos (aprender, lanzar, augmented, objetos, Potent, Resilient) | confirmado | | https://www.aonprd.com/Rules.aspx?ID=1608 |
| 34 | Mythic Heal 15/CL (máx. 225) → 165 a CL 11; Augmented = restoration | confirmado | 15×11 = 165; normal 10×11 = 110. | https://www.aonprd.com/SpellDisplay.aspx?ItemName=Heal |
| 35 | Mythic Breath of Life | confirmado | Augmented requiere tier 9. | https://www.aonprd.com/SpellDisplay.aspx?ItemName=Breath%20of%20Life |
| 36 | Mythic Cure Light/Moderate/Serious/Critical | confirmado | CLW/CMW/CCW pg. 89; CSW pg. 90. | https://www.aonprd.com/SpellDisplay.aspx?ItemName=Cure%20Critical%20Wounds |
| 37 | Mythic Prayer | confirmado | | https://www.aonprd.com/SpellDisplay.aspx?ItemName=Prayer |
| 38 | Mythic Blade Barrier | confirmado | | https://www.aonprd.com/SpellDisplay.aspx?ItemName=Blade%20Barrier |
| 39 | No hay versiones míticas de Empower/Maximize/Extend/Quicken/Heighten/Reach Spell, Extra Channel, Combat Casting, Sacred Summons, Craft Wondrous Item | confirmado | Listado Feats.aspx?Category=Mythic (caché y en vivo) no las incluye; cada FeatDisplay solo muestra la versión normal. | https://www.aonprd.com/Feats.aspx?Category=Mythic |
| 40 | Mythic Selective Channeling | confirmado | | https://www.aonprd.com/FeatDisplay.aspx?ItemName=Selective%20Channeling |
| 41 | Dual Path | confirmado | | https://www.aonprd.com/FeatDisplay.aspx?ItemName=Dual%20Path |
| 42 | Extra Path Ability (tier 3) | confirmado | | https://www.aonprd.com/FeatDisplay.aspx?ItemName=Extra%20Path%20Ability |
| 43 | Mythic Paragon | confirmado | | https://www.aonprd.com/FeatDisplay.aspx?ItemName=Mythic%20Paragon |
| 44 | Mythic Toughness (22 pv a nivel 11; RD 10/epic bajo 0) | confirmado | Toughness a 11 DG = 3 + 8 = 11; ×2 = 22. | https://www.aonprd.com/FeatDisplay.aspx?ItemName=Toughness |
| 45 | Lista de conjuros SIN versión mítica | confirmado | Ninguno figura entre los 287 de Spells.aspx?Class=Mythic; cada SpellDisplay carece de sección "Mythic". | https://www.aonprd.com/Spells.aspx?Class=Mythic |
| 46 | Abundant Casting (Archmage tier 1), no restringido a arcanos | confirmado | El texto habla de "a spell", sin la palabra "arcane"; queda a criterio del GM. | https://www.aonprd.com/PathAbilities.aspx?Path=Archmage |
| 47 | Mythic Boons; "Master Healer" | confirmado | | https://www.aonprd.com/Rules.aspx?Name=Mythic%20Boons&Category=Running%20a%20Mythic%20Game |
| 48 | Nivel efectivo = nivel + ½ tier (mín. 1) | confirmado | En AoN la sección "Adjusting CR and Level" cuelga de "Designing Encounters", fuente MA pg. 128 (no 129); el contenido coincide. | https://www.aonprd.com/Rules.aspx?ID=1608 |
| 49 | FAQ 2013/01/10 Inspired Spell / Wild Arcana | confirmado | Entradas "Archmage (Mythic Path)" y "Hierophant (Mythic Path)"; texto "proposed ... pending an official errata"; AoN muestra ese texto. | https://www.aonprd.com/FAQs.aspx |
| 50 | Cleric 11: channel 6d6, 3 + Car/día, CD 10 + ½ nivel + Car; ranuras 4/4+1/4+1/4+1/3+1/2+1/1+1 | confirmado | Fila 11th de la tabla de clase. | https://www.aonprd.com/ClassDisplay.aspx?ItemName=Cleric |

## Matemática recomprobada (nivel 11, CL 11)

- Mythic power: tier 4 → 3 + 8 = 11; tier 5 → 3 + 10 = 13.
- Heal: 10×11 = 110; mítico 15×11 = 165; Inspired Spell (CL 13): 130 / 195.
- Cure Light: 1d8+5 (tope +5) = 9,5; mítico 2d8+10 (tope +10) = 19. Cure Moderate: 2d8+10 = 19; mítico 4d8+20 = 38. Cure Serious: 3d8+11 = 24,5; mítico 6d8+22 = 49. Cure Critical: 4d8+11 = 29; mítico 8d8+22 = 58.
- Breath of Life: 5d8+11 = 33,5; mítico 5d12+11 = 43,5. Media "roll twice take higher" ≈ 36,4 / 47,9 (aprox. media + 0,564·desvío; coincide con la simulación del investigador).
- Channel 6d6 = 21; Life Current ×1 → 22; ×2 → 24. Mythic Selective Channeling con 4 excluidos: +8 → 29.
- Rebuke Death (Healing): 1d4 + 11/2 = 1d4+5; con Mythic Domain (nivel 15): 1d4+7.
- Mythic Toughness: 22 pv.

## Observaciones sobre las notas del investigador (no son afirmaciones auditadas)

1. **Lucky Surge**: los prerrequisitos son "Potent Surge, 3rd mythic tier" (MA pg. 68); las notas solo mencionan tier 3. https://www.aonprd.com/FeatDisplay.aspx?ItemName=Lucky%20Surge
2. **Maximize Surge** (MA pg. 69): tier 6, **1/día** y cuesta **2 usos**; repetible para más usos diarios. Las notas solo dicen "tier 6".
3. **Divine Metamastery**: agregar que no puede haber más de un uso activo; usarlo de nuevo termina el anterior.
4. **Divine Source**: los dos dominios deben ser de alineamiento coincidente si es posible (salvo neutral); las tomas de tier 6 y 9 agregan 1 dominio y 2 subdominios.
5. **Adjusting CR and Level**: AoN lo indexa bajo "Designing Encounters" (MA pg. 128); "Rewarding Mythic Characters" y "Mythic Trials" son pg. 129.
6. **Feats.aspx?Category=Mythic**: en la caché el listado tiene 176 dotes con página propia; la cifra exacta no afecta el veredicto.
7. Todo lo demás de las notas (textos de Universal, Archmage, Guardian, Marshal, conjuros míticos citados, Legendary Items, FAQ de DR/epic) coincide con el texto de AoN leído.

## Contaminación detectada

Ninguna. No se encontraron elementos de 3PP, Pathfinder 2e, Starfinder, D&D 3.5 ni homebrew en las afirmaciones ni en las notas.
