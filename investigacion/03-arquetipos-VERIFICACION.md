# 03 — VERIFICACIÓN adversarial: Arquetipos de Cleric (PF1e)

**Fecha:** 2026-09-15 · **Auditado:** `03-arquetipos.md` (50 afirmaciones)
**Método:** cada afirmación se comparó con el texto real de Archives of Nethys 1e (aonprd.com), leído desde la caché local (`_aon_cache/`, descargas de aonprd.com) y, para el listado de arquetipos, verificado en vivo con WebFetch. Se buscaron FAQs/erratas oficiales en paizo.com para Herald Caller y Ecclesitheurge: solo aparecen hilos de foro (no son reglas oficiales), por lo que no hay FAQ que altere el texto de AoN.

**Resultado global:** 49 confirmadas, 1 corregida (matiz), 0 falsas, 0 no verificables. No se detectó contaminación 3PP / 2e / Starfinder / homebrew en las afirmaciones.

## Tabla de veredictos

| # | Afirmación (resumen) | Estado | Evidencia (AoN) | Observación |
|---|---|---|---|---|
| 1 | Listado oficial: 35 arquetipos; sin Divine Commander / Devout Pilgrim / Shoanti Shaman | confirmado | https://www.aonprd.com/Archetypes.aspx?Class=Cleric | Verificado en vivo: 35 entradas exactas, ninguno de los tres nombres aparece. |
| 2 | Apilamiento APG pg. 72 | confirmado | https://www.aonprd.com/Rules.aspx?ID=440 | Cita: "none of the alternate class features can replace or alter the same class feature from the core class as another alternate class feature." |
| 3 | "Alters" sigue contando como la capacidad original | confirmado | https://legacy.aonprd.com/advancedClassGuide/classOptions/index.html | Cita: "any alternate class feature described as altering an existing class feature otherwise functions as that original class feature, and is considered to be that class feature for the purpose of meeting any requirements or prerequisites". La misma página añade la regla de "serie de mejoras retrasadas" (sneak attack ejemplo) que sustenta los 5d6/4d6 de Ecclesitheurge/Evangelist/Scroll Scholar. |
| 4 | Retraining de arquetipo: 5 días por capacidad | confirmado | https://www.aonprd.com/Rules.aspx?ID=1471 | Correcto. Omite que también cuesta oro (ejemplo del texto: fighter 4.º, 2 capacidades = 10 días y 400 gp; 5.º, 3 capacidades = 15 días y 750 gp → 10 gp × nivel × día). Cambiar de arquetipo = dos sesiones. |
| 5 | Cleric 11: channel 6d6, 3+Cha/día, estándar, 30 pies | confirmado | https://www.aonprd.com/ClassDisplay.aspx?ItemName=Cleric | Tabla: 11.º "Channel energy 6d6"; texto: "3 + her Charisma modifier", "standard action that does not provoke", "30-foot radius". DC Will 10 + ½ nivel + Cha. |
| 6 | Slots a 11: 4+1/4+1/4+1/3+1/2+1/1+1 | confirmado | idem | Fila 11.º de la tabla: 4 orisons, 4+1, 4+1, 4+1, 3+1, 2+1, 1+1. |
| 7 | Conjuros de dominio no se lanzan espontáneamente | confirmado | idem | Cita: "Domain spells cannot be used to cast spells spontaneously." y en Spontaneous Casting: "any prepared spell that is not an orison or domain spell". |
| 8 | Rebuke Death 1d4+5 a 11, solo <0 pg, 3+Wis | confirmado | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Healing | "1d4 points of damage plus 1 for every two cleric levels" → 11/2 = 5 → 1d4+5. Acción estándar, toque. |
| 9 | Healer's Blessing: cures empowered, no acumula con Empower, no a no muertos | confirmado | idem | Cita textual coincide. |
| 10 | Merciful Healer: Healing obligatorio, sin 2.º dominio, deidad debe dar Healing, positiva | confirmado | https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Cleric%20Merciful%20Healer | Willing Healer, cita textual. Además su channel "cannot choose to target undead". |
| 11 | Merciful Healer sin bonus feat ni frases "This ability replaces" | confirmado | idem | Ninguna capacidad lleva frase de reemplazo; no hay Selective Channeling. |
| 12 | Merciful Healing a 11: 3 condiciones, 1-2 criaturas; a 12 la cuarta y hasta 3 | confirmado | idem | Solo afecta a criaturas "that she heals within her channel energy burst". |
| 13 | Combat Medic: sin AoO al estabilizar con Heal ni al lanzar healing spells | confirmado | idem | Cita textual. |
| 14 | True Healer: elegir antes de tirar entre Merciful Healing o relanzar 1s | confirmado | idem | Cita: "She must choose which benefit to take before she rolls". |
| 15 | Ecclesitheurge: sin armadura/escudo; Bonded Holy Symbol reemplaza aumento de channel de 3.º → 5d6 a 11 | confirmado | https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Cleric%20Ecclesitheurge | Competente solo con club, dagger, heavy/light crossbow, quarterstaff. "This ability replaces the increase to channel energy gained at 3rd level" + regla ACG de series retrasadas → 5d6 a 11. |
| 16 | Domain Mastery | confirmado | idem | Cita textual; "He does not lose access to his actual secondary domain's granted powers or gain access to the other domain's granted powers". |
| 17 | Blessing of the Faithful: estándar, +2 sagrado/profano, hasta su próximo turno; 1 uso de channel → asaltos = dados de channel (5 a 11) | confirmado | idem | Alcance close (25 + 5/2 niveles = 50 pies a 11). Elige UNA categoría: attack rolls, skill checks, ability checks, saving throws o AC. |
| 18 | Wizard bonded object: 1/día conjuro sin preparar, sin metamagia; DC 20 + nivel sin el objeto | confirmado | https://www.aonprd.com/ClassDisplay.aspx?ItemName=Wizard | Cita: "any one spell that the wizard has in his spellbook and is capable of casting, even if the spell is not prepared ... cannot be modified by metamagic feats". Reemplazo: "after 1 week", 200 gp/nivel, 8 h. |
| 19 | Evangelist: 1 dominio, sin Medium Armor/Shield; Sermonic Performance reemplaza channel de 1.º/9.º/15.º, tope 7d6 → 4d6 a 11 | confirmado | https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Cleric%20Evangelist | Cita: "This caps the cleric's channel energy damage at 7d6 points." Deducción 4d6 consistente con la regla ACG de series retrasadas (3.º 1d6, 5.º 2d6, 7.º 3d6, 11.º 4d6, 13.º 5d6, 17.º 6d6, 19.º 7d6). |
| 20 | Evangelist sin cure/inflict espontáneos; lista command…demand | confirmado | idem | Lista exacta. Usa Perform (oratory). |
| 21 | Bard: 4+Cha +2/nivel (24+Cha a 11); movimiento desde 7.º; Inspire Courage +3 a 11 | confirmado | https://www.aonprd.com/ClassDisplay.aspx?ItemName=Bard | 4 + Cha + 2×10 = 24 + Cha. "+1 at 5th level, and every six bard levels thereafter" → +3 a 11.º. |
| 22 | Cloistered Cleric: ligera, sin escudos, 4+Int, Knowledge (all), Diminished Spellcasting | confirmado | https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Cleric%20Cloistered%20Cleric | Armas: club, heavy/light mace, quarterstaff, sling. |
| 23 | Breadth of Knowledge +½ nivel (mín. +1) y sin entrenar; Verbal Instruction 3 aliados a 11 | confirmado | idem | (11−3)/3 = 2 adicionales → 3 aliados. Full-round si no comparten tarea. |
| 24 | Herald Caller: 1 dominio, sin media/escudos, 4+Int; conjuro preparado → summon monster ≤ nivel | confirmado | https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Cleric%20Herald%20Caller | Cita textual. Bonus concentración defensiva +3 a 11. |
| 25 | Call/Divine/Mighty Heralds sin frase de reemplazo → conserva cure espontáneos | confirmado | idem | Verificado: ninguna de las tres lleva "replaces". Sin FAQ oficial en paizo.com (solo foros). Sigue siendo lectura literal, no ruling. |
| 26 | Augment Summoning a 4.º "cuenta como Spell Focus (conjuration) para prerrequisitos"; Superior Summoning a 8.º; channel incluye invocados fuera del radio | **corregido** | idem | Texto real: "is considered to have Spell Focus (conjuration) **for the purposes of prerequisites for feats that have Augment Summoning as a prerequisite**". No vale para cualquier prerrequisito (p. ej. Greater Spell Focus). El resto es correcto; el channel de curación incluye a los invocados aunque estén fuera del radio "or of a creature type that would not normally be affected". |
| 27 | Angelfire: sin media, −1 slot/nivel, Extra Channel a 1.º, dazzled 1 asalto sin salvación a no buenos | confirmado | https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Cleric%20Angelfire%20Apostle | Cita textual. Altera armor proficiency, spellcasting y channel energy. |
| 28 | Versatile Healing Channel: 2 usos → lista por nivel | confirmado | idem | 5.º remove blindness/deafness o lesser restoration; 7.º remove disease/paralysis; 9.º neutralize poison; 11.º breath of life; 13.º heal. |
| 29 | Cleansing Flames | confirmado | idem | Swift, 1 uso de channel, 1 cubo de 10 pies por nivel del conjuro (contiguos, uno adyacente al apóstol), 1d4/nivel mitad fuego mitad divino, Reflejos DC del conjuro mitad, Cha usos/día. Solo con conjuros de subescuela healing de nivel inferior al máximo lanzable. |
| 30 | Angelfire no altera dominios → apila con Theologian y Divine Paragon | confirmado | idem + https://www.aonprd.com/Rules.aspx?ID=440 | Angelfire altera armor proficiency, spellcasting, channel energy. Theologian "replaces the standard cleric domain ability"; Divine Paragon "alters domains" y "alters aura". Sin solapamiento por texto. |
| 31 | Stoic Caregiver | confirmado | https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Cleric%20Stoic%20Caregiver | Midwife Training: ½ nivel minutos, sangrado a mitad, −5 daño energía negativa. Three-Aspect Channel: ½ curación y ½ daño (¼ con salvación). |
| 32 | Blossoming Light: sin armadura/escudos, sin slots de dominio, 5+Cha +1/2 niveles → 10+Cha a 11 | confirmado | https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Cleric%20Blossoming%20Light | "+1 at 2nd level and every 2 levels thereafter": niveles 2,4,6,8,10 → +5 → 10 + Cha. |
| 33 | Theologian | confirmado | https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Cleric%20Theologian | Cita textual. |
| 34 | Separatist | confirmado | https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Cleric%20Separatist | Cita textual. Requiere servir a una deidad. |
| 35 | Divine Paragon | confirmado | https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Cleric%20Divine%20Paragon | Boons a 5.º/11.º/14.º; obediencia diaria; alineamiento idéntico. |
| 36 | Deific Obedience: ≤1 h/día; 12/16/20 DG | confirmado | https://www.aonprd.com/FeatDisplay.aspx?ItemName=Deific%20Obedience | AoN cita fuentes: Faiths of Golarion pg. 4, Inner Sea Gods pg. 210, Inner Sea Faiths pg. 3. Prerreq.: Knowledge (religion) 3 rangos. |
| 37 | Varisian Pilgrim Caravan Bond | confirmado | https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Cleric%20Varisian%20Pilgrim | Requiere plegaria grupal de 1 minuto; "cleric level + her Wisdom bonus". |
| 38 | Crusader Legion's Blessing | confirmado | https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Cleric%20Crusader | Full-round, ½ nivel criaturas, todos al alcance, gasta el conjuro + otro 3 niveles superior. |
| 39 | Divine Strategist Master Tactician reemplaza channel | confirmado | https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Cleric%20Divine%20Strategist | "This ability replaces channel energy." |
| 40 | Cardinal | confirmado | https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Cleric%20Cardinal | "This ability replaces the cleric's spontaneous casting ability. It alters the cleric's domains, ... base attack bonus." |
| 41 | Scroll Scholar | confirmado | https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Cleric%20Scroll%20Scholar | Cita textual de los tres reemplazos. |
| 42 | Undead Lord | confirmado | https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Cleric%20Undead%20Lord | Death (y Undead subdomain si disponible); Unlife Healer solo curación de no muertos. |
| 43 | Fiendish Vessel Channel Evil | confirmado | https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Cleric%20Fiendish%20Vessel | 1d4 +1d4/2 niveles; buenos Will niega, sickened 1d4 asaltos. |
| 44 | Divine Commander es de Warpriest | confirmado | https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Warpriest+Divine+Commander | Advanced Class Guide pg. 129; reemplaza blessings y bonus feats del warpriest. |
| 45 | Quick Channel | confirmado | https://www.aonprd.com/FeatDisplay.aspx?ItemName=Quick%20Channel | Ultimate Magic pg. 154. |
| 46 | Mythic Selective Channeling | confirmado | https://www.aonprd.com/FeatDisplay.aspx?ItemName=Selective%20Channeling | Mythic Adventures pg. 72; "twice the number of targets you excluded"; 1 poder mítico → +½ tier excluidos. |
| 47 | Hierophant Mythic Domain / Hand of Mercy | confirmado | https://www.aonprd.com/PathAbilities.aspx?Path=Hierophant | Mythic Domain (MA pg. 34): +4 niveles, 1/día acción estándar + 1 poder mítico. Hand of Mercy (MA pg. 36): toque + 1 uso de channel; condiciones por tier (base: dazed/fatigued/shaken/sickened/staggered; 6.º tier: cursed/exhausted/frightened/nauseated; 9.º tier: blinded/deafened/paralyzed/stunned). |
| 48 | Variant Channeling | confirmado | https://www.aonprd.com/ClericVariantChanneling.aspx | Ultimate Magic pg. 28. Salvedad: Bravery/Valor, Revenge/Vengeance y Undeath NO reducen a la mitad la curación ("works like a standard channel (not halved)"). |
| 49 | Milani / Sarenrae dominios | confirmado | https://www.aonprd.com/DeityDisplay.aspx?ItemName=Milani · https://www.aonprd.com/DeityDisplay.aspx?ItemName=Sarenrae | Milani CG, Inner Sea Faiths pg. 71; Sarenrae NG, Inner Sea Gods pg. 132. |

## Corrección detallada (#26)

Texto real (Monster Summoner's Handbook pg. 7, AoN): *"At 4th level, a herald caller receives Augment Summoning as a bonus feat, and is considered to have Spell Focus (conjuration) for the purposes of prerequisites for feats that have Augment Summoning as a prerequisite (such as Evolved Summoned Monster...). At 8th level, she gains Superior Summoning (Ultimate Magic 157) as a bonus feat."*
La afirmación generaliza a "para prerrequisitos"; el texto lo limita a dotes que tengan Augment Summoning como prerrequisito.

## Observaciones sobre las notas del investigador (no son afirmaciones auditadas)

1. **Ecclesitheurge, reemplazo del símbolo vinculado:** las notas dicen "200 gp×nivel + 8 h" pero omiten que el ritual solo puede hacerse "after 1 week" (Core pg. 77, ClassDisplay Wizard).
2. **Retraining:** además de los 5 días por capacidad hay costo en oro (10 gp × nivel × día según el ejemplo de UCam pg. 189).
3. **Shape Channel** figura en AoN como *Mythic Origins pg. 27*, no en Mythic Adventures 32–37 como sugiere la sección 10.
4. **Variant Channeling:** la sección 11 dice "curación a la mitad + efecto" en general; tres variantes (Bravery/Valor, Revenge/Vengeance, Undeath) no reducen la curación.
5. **Deific Obedience:** AoN cita tres fuentes (Faiths of Golarion pg. 4, Inner Sea Gods pg. 210, Inner Sea Faiths pg. 3); "ISG 210" es válida pero no la única.
6. **Cleansing Flames:** las notas omiten que los cubos deben ser contiguos y que al menos un lado debe ser adyacente al apóstol; las llamas duran 1 asalto.
7. **Merciful Healing:** solo limpia condiciones a criaturas "that she heals within her channel energy burst" (las notas lo recogen en Advertencias; bien).
8. Las cuentas numéricas revisadas (CLW 14,25; CMW 28,5; CSW 36,75; CCW 43,5; mass CLW 23,25; breath of life 33,5; heal 110; True Healer ≈23,5; Blessing 50 pies; Verbal Instruction 3 aliados; Blossoming 10+Cha; Caster Support +4; Tactical Expertise 2/día) son correctas.

## Contaminación detectada
Ninguna. Devout Pilgrim (renombre de d20pfsrd) y Shoanti Shaman se citan correctamente como no indexados en AoN; Divine Commander correctamente atribuido a Warpriest.
