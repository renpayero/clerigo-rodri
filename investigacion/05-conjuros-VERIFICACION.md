# 05 — Conjuros de Cleric 0-6: VERIFICACIÓN ADVERSARIAL (PF1e, aonprd.com)

**Fecha:** 2026-09-15. **Auditor:** agente adversarial de reglas. **Fuente de verdad:** Archives of Nethys 1e (www.aonprd.com). Cada afirmación se cotejó contra el texto real de la página (caché local `_raw/`, `_tmp/`, `_aon_cache/` descargada de aonprd.com, o WebFetch directo cuando no estaba en caché).

**Resultado global:** 48 confirmadas, 1 corregida (detalle menor), 0 falsas, 0 no verificables. No se detectó contaminación 3PP / 2e / Starfinder / homebrew.

## Tabla de veredictos

| # | Afirmación (resumen) | Estado | Evidencia / corrección |
|---|---|---|---|
| 1 | Conjuros/día nivel 11: 4 orisons, 4+1/4+1/4+1/3+1/2+1/1+1, + bonos por Wis | confirmado | ClassDisplay.aspx?ItemName=Cleric, Table: Cleric fila 11th: "4 \| 4+1 \| 4+1 \| 4+1 \| 3+1 \| 2+1 \| 1+1". Fuente PRPG Core Rulebook pg. 38 |
| 2 | Channel Energy 6d6, Will 10 + 1/2 nivel + Cha, 3 + Cha usos, estándar sin AdO, 30 pies, exceso se pierde | confirmado | Misma página: "1d6 ... plus 1d6 for every two cleric levels beyond 1st"; tabla "Channel energy 6d6" a 11; "DC ... 10 + 1/2 the cleric's level + the cleric's Charisma modifier"; "3 + her Charisma modifier"; "standard action that does not provoke"; "30-foot radius"; "all excess healing is lost" |
| 3 | Spontaneous Casting solo a conjuros con "cure" en el nombre; BoL/Heal/Restoration/Remove X deben prepararse | confirmado | "lose any prepared spell that is not an orison or domain spell in order to cast any cure spell of the same spell level or lower (a cure spell is any spell with 'cure' in its name)" |
| 4 | No puede lanzar conjuros con descriptor de alineamiento opuesto | confirmado | "A cleric can't cast spells of an alignment opposed to her own or her deity's (if she has one)" |
| 5 | Healer's Blessing (6º) = empowered +50%, no a daño a MV, no acumula con Empower; Rebuke Death 1d4 + 1/2 niveles solo <0 pg | confirmado | DomainDisplay.aspx?ItemName=Healing (Core pg. 44): texto literal coincide; 1d4 + 5 a nivel 11 |
| 6 | CLW/CMW/CSW/CCW 1d8/2d8/3d8/4d8 + 1/CL, topes +5/+10/+15/+20 | confirmado | Páginas Cure X Wounds (Core 262-263). A CL 11: 1d8+5, 2d8+10, 3d8+11, 4d8+11 |
| 7 | Mass CLW (cl 5) 1d8+1/CL (+25), 1 crit/nivel ≤30 pies, cercano; Mass CMW (cl 6) 2d8+1/CL (+30) | confirmado | Cure Light Wounds, Mass y Cure Moderate Wounds, Mass (Core 263) |
| 8 | Heal 10/CL (máx 150 a 15º), lista de condiciones, no niveles negativos ni drenaje, MV = harm | confirmado | SpellDisplay Heal (Core 294): lista literal idéntica |
| 9 | Breath of Life 5d8+1/CL (+25), revive si muerto ≤1 asalto y pg negativos < Con, nivel negativo temporal 1 día, no vs efectos de muerte ni MV | confirmado | SpellDisplay Breath of Life (Core 251) |
| 10 | Mythic Breath of Life 5d12+1/CL (+25), 2 asaltos, segunda salvación vs efecto de muerte; Augmented (9º) 2 usos: 1/CL a 30 pies o muerto hace ≤CL asaltos | confirmado | Misma página, sección Mythic Adventures pg. 87 |
| 11 | Muerte a pg negativos ≥ Con; moribundo entre −1 y −(Con−1) | confirmado | Rules.aspx?Name=Injury and Death (Core 189-190): "negative, but not equal to or greater than its Constitution score, you're dying"; "negative amount equal to his Constitution score or lower ... dead" |
| 12 | Míticos: CLW 2d8+2/CL (+10) +1 car.; CMW 4d8+2/CL (+20) +2; CSW 6d8+2/CL (+30) +3; CCW 8d8+2/CL (+40) +4; Mythic Heal 15/CL (225), 2 usos = restoration | confirmado | Secciones Mythic Adventures pg. 89-90 y 97. A CL 11: 2d8+10, 4d8+20, 6d8+22, 8d8+22, Heal 165 |
| 13 | Preparadores nunca preparan la versión mítica; 1 uso al lanzar; mismo espacio y tiempo; Augmented requiere tier y más usos (incluye el primero); no en objetos | confirmado | Rules Mythic Spells (Mythic Adventures): "you never have to prepare the mythic version"; "doesn't change the level of the spell slot"; "includes the one use of mythic power necessary"; "can't be crafted into magic items unless the item is an artifact" |
| 14 | Restoration 3 asaltos, 100 gp / 1.000 gp por nivel negativo permanente (1/semana), cura todo el daño temporal y drenaje de UNA característica; Lesser 3 asaltos, sin coste, 1d4 daño de una característica, quita fatiga | confirmado | SpellDisplay Restoration (Core 334). Matiz: Lesser Restoration "dispels any magical effects reducing one of the subject's ability scores OR cures 1d4 points of temporary ability damage" (es una u otra) y "improves an exhausted condition to fatigued" |
| 15 | Remove Curse/Disease y Neutralize Poison: prueba 1d20+CL vs CD de cada uno; NP no revierte efectos instantáneos ni da inmunidad | confirmado | Páginas Core 332 y 316. NP: "does not reverse instantaneous effects"; la opción de 10 min/nivel es "neutralize the poison in a poisonous creature or object", no inmunidad |
| 16 | Death Ward +4 moral, salvación aunque no la haya, inmune a energy drain y energía negativa incl. canalizada, suspende penalizadores, 1 min/nivel | confirmado | SpellDisplay Death Ward (Core 264) |
| 17 | Raise Dead 1 minuto, diamante 5.000 gp, ≤1 día/CL, 2 niveles negativos permanentes | confirmado | SpellDisplay Raise Dead (Core 329) |
| 18 | Cleanse (cl 5, APG) personal, S DF, 4d8+1/CL (+25), lista de condiciones + break enchantment | confirmado | SpellDisplay Cleanse (APG 211). Nota: escuela evocation |
| 19 | Infernal Healing conj (healing) [evil], cl 1, 1 asalto, 1 minuto FH 1, detecta como malvado, no repara plata/buenas/[good] | confirmado | SpellDisplay Infernal Healing. AoN lista fuentes: Hell's Vengeance Player's Guide 11, PF #29 67, Gods & Magic 7, Inner Sea World Guide 295 |
| 20 | Spell trigger: cualquiera cuya clase pueda lanzar el conjuro, estándar sin AdO; FAQ: varita no es "casting a spell" | confirmado | Rules.aspx?ID=367 (Using Items); FAQ "Items as Spells" 2010/01/08 |
| 21 | Precio varita = nivel × CL × 750 (+50 × componente); Cleric 750/4.500/11.250/21.000; casting time más largo se mantiene | confirmado | Rules.aspx?ID=383 (Core 496): fórmula, tabla CL 1/3/5/7, "If the spell being cast has a longer casting time than 1 action, however, it takes that long to cast the spell from a wand" |
| 22 | Celestial Healing (cl 1, [good]) FH 1 durante 1 round/2 levels, 1 asalto | confirmado | SpellDisplay Celestial Healing (Arcane Anthology 13): "Duration 1 round/2 levels" → 5 asaltos a CL 11 |
| 23 | Empower +2: +50% incluidos bonos a dados; FAQ CMW | confirmado | FeatDisplay Empower Spell (Core 122); FAQ 2011/01/07 |
| 24 | Maximize +3; "empowered, maximized ... maximum result plus half the normally rolled result" | confirmado | FeatDisplay Maximize Spell (Core 130), cita literal |
| 25 | Cure espontáneo con metamagia (salvo Quicken) = asalto completo; preparado = tiempo normal | confirmado | Texto también en www.aonprd.com/Feats.aspx?Categories=Metamagic: "Casting a standard action metamagic spell spontaneously is a full-round action ... exception is for spells modified by the Quicken Spell feat" |
| 26 | Quicken +4, rápida; FAQ: se puede acelerar casting 1 round y metamágico espontáneo | confirmado | FeatDisplay Quicken Spell; FAQ 2011/01/06 "Yes and yes" |
| 27 | Quick Channel (UM 154): movimiento por 2 usos; Knowledge (religion) 5, channel energy | confirmado | FeatDisplay Quick Channel |
| 28 | Selective Channeling (Cha 13) excluye hasta Cha mod; FAQ ver/tocar | confirmado | FeatDisplay Selective Channeling (Core 132); FAQ 2011/01/07 |
| 29 | Phylactery of Positive Channeling 11.000 gp, headband, CL 10, +2d6 | confirmado | MagicWondrousDisplay: "Aura moderate necromancy; CL 10th; Slot headband; Price 11,000 gp"; Source UE 252 / Core 526 |
| 30 | Varas de metamagia: 3/día, no cambian espacio, 1 vara por conjuro, lesser ≤3º / normal ≤6º / greater ≤9º; precios | confirmado | MagicRods.aspx?Category=Metamagic: todos los precios coinciden; Rod of Metamagic, Reach (lesser): "up to three spells per day" |
| 31 | Reach Spell (APG 168): +1 nivel por categoría; toque cuerpo a cuerpo → toque a distancia | confirmado | FeatDisplay Reach Spell |
| 32 | Blessing of Fervor (cl 4, APG 205): 1/nivel, 1 asalto/nivel, 5 opciones, no con haste; mítico 2 opciones | confirmado | SpellDisplay Blessing of Fervor |
| 33 | Divine Favor +1/3 CL (máx +3) 1 min; GMW y Magic Vestment +1/4 CL (máx +5), 1 h/nivel | confirmado | Core 273 y 310. A CL 11: +3 y +2, 11 horas |
| 34 | Spiritual Ally 1d10 + 1/3 CL, BAB + Wis, amenaza/flanquea/AdO, mueve como rápida; Spiritual Weapon 1d8 + 1/3 CL, redirigir = movimiento | confirmado | SpellDisplay Spiritual Ally (APG 246) y Spiritual Weapon (Core 348) |
| 35 | Blade Barrier 1d6/CL (15d6) Ref mitad, 1 min/nivel, cobertura; mítico acción inmediata 1d8/CL (20d8) | confirmado | SpellDisplay Blade Barrier (Core 249 / MA 85) |
| 36 | Summon Monster: con subtipo de alineamiento el conjuro es de ese tipo; * = plantilla celestial si bueno | confirmado | SpellDisplay Summon Monster 1 (Core 350). Nota: la URL con numeral romano ("Summon Monster I") devuelve error 500 en AoN; usar "Summon Monster 1" |
| 37 | Sanctuary: puede usar conjuros que no sean de ataque; mítico: cada curado gana sanctuary 1 asalto | confirmado | SpellDisplay Sanctuary (Core 336 / MA 107) |
| 38 | Communal: reparten la duración en intervalos fijos (1 min / 10 min / 1 h / 2 h) | confirmado | PfE Communal 1 min; Resist Energy, Protection from Energy, Air Walk, Tongues, Water Walk Communal 10 min; Delay Poison y Endure Elements Communal 1 h; Ant Haul Communal 2 h (todas Ultimate Combat) |
| 39 | Water Walk, Communal figura en AoN como cleric 2 | confirmado | SpellDisplay Water Walk, Communal (UC 249): "Level cleric 2, hunter 2, oracle 2, psychic 4, ranger 2, warpriest 2"; base Water Walk cleric 3 |
| 40 | Heroes' Feast 10 min + 1 h, 1/nivel, cura enfermedad/náusea, NP + RD, 1d8 + 1/2 CL (+10) temp, +1 moral ataque/Will, +4 vs veneno y miedo, 12 h | confirmado | SpellDisplay Heroes' Feast (Core 295) |
| 41 | Wind Walk vos + 1/3 niveles, 1 h/nivel, 600 pies/asalto (60 mph); Word of Recall V, vos + 1 Mediano/3 CL; Plane Shift 8 de la mano, 5-500 millas | confirmado | Core 369, 371, 322 |
| 42 | Commune 500 gp, 1 pregunta/CL; Augury 25 gp + foco 25 gp, 70% + 1%/CL (máx 90); Divination 25 gp; True Seeing 250 gp; Glyph 200 gp; Symbol of Healing 500 gp; Undeath to Death 500 gp; Shield Other anillos 50 gp | confirmado | Páginas respectivas (Core 257, 245, 273, 363, 290, 363, 342; Symbol of Healing UM 241) |
| 43 | Ironskin (Monster Codex 45) cleric 2, personal, +4 NA +1/4 CL sobre 4º, descartable vs crítico/furtivo; Barkskin NO cleric | confirmado | SpellDisplay Ironskin; Barkskin Level: "alchemist 2, druid 2, hunter 2, investigator 2, ranger 2, shaman 2, summoner 2, summoner (unchained) 2" |
| 44 | Haste, Fly, Heroism, ... False Life NO están en lista Cleric | confirmado | Verificado en Spells.aspx?Class=Cleric (niveles 1-3) y en las páginas individuales de Haste, Fly, Heroism, Stoneskin, Teleport, Dimension Door, Overland Flight, Slow, Good Hope, Displacement |
| 45 | Restful Sleep bard 1/skald 1; Bestow Grace paladin 2; Hold Person, Mass solo arcanos/psíquicos de 7º | **corregido** | Restful Sleep y Bestow Grace correctos. Hold Person, Mass (Core 296): "Level arcanist 7, mesmerist 6, psychic 7, sorcerer 7, witch 7, wizard 7" → el mesmerist la tiene a **6º**, no todos a 7º. Sigue siendo cierto que no es de Cleric |
| 46 | Regenerate, Resurrection, Greater Restoration, Repulsion cleric 7; Fire Storm y Mass CCW 8; Mass Heal 9 | confirmado | Páginas respectivas (Core) |
| 47 | Mythic Spell Lore: tier conjuros míticos, repetible; poder mítico 3 + 2 × tier | confirmado | FeatDisplay Mythic Spell Lore (MA 70); Rules Mythic Heroes: "3 plus double your mythic tier" |
| 48 | FAQ: energy drain no es efecto de muerte | confirmado | FAQ 2013/01/10 "Energy drain is not a death effect" |
| 49 | Pillar of Life (cl 5, APG 236): 5 pies, medio, 1 asalto/nivel, estándar del aliado, 2d8+1/CL (+20), 1 vez; MV 1d6/CL (10d6) | confirmado | SpellDisplay Pillar of Life |

## Observaciones sobre las NOTAS del investigador (no son afirmaciones auditadas)

1. **Precio de varita de Infernal Healing** — marcado como "[GM/NO VERIFICADO]". La regla es explícita en Rules.aspx?ID=383: "If the wand has a material component cost, it is added to the base price and cost to create once for each charge (50 × material component cost)". Con agua impía (25 gp) → 750 + 50 × 25 = 2.000 gp. Sin embargo, el componente es "1 drop of devil blood **or** 1 dose of unholy water": la sangre de diablo no tiene precio listado, así que el creador puede fabricarla a 750 gp. Queda como decisión de mesa cuál componente usa el creador, no si la regla existe.
2. **Cleanse** es de escuela **evocation** (no conjuration [healing]); no cambia nada mecánico relevante pero conviene anotarlo (interactúa con Spell Focus, etc.).
3. **URL de metamagia**: en lugar de legacy.aonprd.com se puede citar https://www.aonprd.com/Feats.aspx?Categories=Metamagic (mismo texto Core pg. 112, "Spontaneous Casting and Metamagic Feats").
4. **Summon Monster**: en AoN la URL con numeral romano (SpellDisplay.aspx?ItemName=Summon%20Monster%20I) devuelve error 500; la correcta usa numeral arábigo (Summon%20Monster%201), como el investigador ya anotó.
5. **Spells.aspx?Class=Cleric**: al leerla con WebFetch la página se trunca (aprox. a partir de 4º-5º nivel); no confiar en ella para negar que un conjuro de 5º+ esté en la lista sin abrir la página del conjuro.
6. **Bestow Grace of the Champion** = cleric 7, oracle 7, paladin 4 (UM 208): correcto como dicen las notas.
7. Las cuentas de la Sección B (medias, máximos, Emp+Max, niveles de espacio) se rehicieron y cierran: CLW Emp+Max 13 + 9,5/2 = 17,75; CSW 35 + 24,5/2 = 47,25; mCMW 4d8+20 = 38/52; mCSW 6d8+22 = 49/70; mCCW 8d8+22 = 58/86.
8. Bonos por Wis (Rules Ability Scores): Wis 20-21 → +2/+1/+1/+1/+1; Wis 22-23 → +2/+2/+1/+1/+1/+1: la hipótesis A.8 (Wis 22: 6+1D / 6+1D / 5+1D / 4+1D / 3+1D / 2+1D) es correcta.

## Contaminación detectada
Ninguna: todas las entradas citadas existen en aonprd.com (PF1e) con el libro fuente indicado.
