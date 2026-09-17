# 02 — Dominios y subdominios: VERIFICACIÓN ADVERSARIAL (PF1e, aonprd.com)

**Fecha:** 2026-09-15
**Método:** cada afirmación se cotejó contra el texto real de la página de Archives of Nethys (PF1e). Se usó la caché local (`_tmp/`, `_raw/`, `_aon_cache/`) cuando la página ya estaba descargada y se descargaron a `_audit/` las que faltaban (ClericDomains, Repose, Strength, Magic, Charm, Nobility, Animal, Vermin, deidades, rasgo Acolyte of Apocrypha). Se buscó además FAQ oficial de Paizo para Healer's Blessing e Inspiring Command.
**Resultado global:** 48 confirmadas, 3 corregidas, 0 falsas, 0 no verificables. No se detectó contaminación 3PP / 2e / Starfinder / homebrew en las afirmaciones.

## Tabla de veredictos

| # | Afirmación (resumen) | Estado | Corrección / nota | Evidencia |
|---|---|---|---|---|
| 1 | Regla de subdominios (texto "exacto") | **corregido** (incompleta) | Las 4 frases citadas son textuales, pero el párrafo de AoN sigue: "If a subdomain has two associated domains, the cleric can only select the subdomain for one of her domains. Subdomains can be selected by Druids (except the metal subdomain) and inquisitors (if their deity allows it). **If a subdomain ability calls for a saving throw, the DC of the save is equal to 10 + 1/2 the character's cleric level + her Wisdom modifier.**" Esa última frase afecta la afirmación 50. | https://www.aonprd.com/ClericDomains.aspx |
| 2 | Dos dominios de la deidad; 1 slot de dominio por nivel de conjuro; no espontáneos | confirmado | Texto: "A cleric chooses two domains from among those belonging to her deity… A cleric gains one domain spell slot for each level of cleric spell she can cast, from 1st on up… Domain spells cannot be used to cast spells spontaneously." | https://www.aonprd.com/ClassDisplay.aspx?ItemName=Cleric |
| 3 | "Unless otherwise noted, activating a domain power is a standard action." | confirmado | Textual en la página de clase (ClericDomains.aspx dice "using a domain power"; mismo sentido). | https://www.aonprd.com/ClassDisplay.aspx?ItemName=Cleric |
| 4 | "a cure spell is any spell with 'cure' in its name" | confirmado | Textual en Spontaneous Casting. | https://www.aonprd.com/ClassDisplay.aspx?ItemName=Cleric |
| 5 | Channel Energy 6d6 a 11, 3+Cha/día, DC 10 + 1/2 nivel + Cha | confirmado | "1d6 … plus 1d6 for every two cleric levels beyond 1st" → 1 + (10/2) = 6d6. DC y usos textuales. | https://www.aonprd.com/ClassDisplay.aspx?ItemName=Cleric |
| 6 | Healer's Blessing (texto) | confirmado | Textual (Core Rulebook pg. 44). | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Healing |
| 7 | Healer's Blessing no afecta channel / heal / breath of life / Rebuke Death; sin FAQ | confirmado | Lectura RAW consistente con "cure spells" + definición de clase. Sin FAQ oficial en paizo.com; hilo rzs2oag2 sin respuesta de staff. | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Healing |
| 8 | Rebuke Death 1d4+5 a 11, solo <0 HP, 3+Wis | confirmado | "1d4 … plus 1 for every two cleric levels" → 11/2 = 5. | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Healing |
| 9 | Lista de conjuros de Healing | confirmado | Textual. | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Healing |
| 10 | Restoration: Restorative Touch / conjuros | confirmado | Textual; AoN muestra "Source Advanced Player's Guide pg. 1" (número de página de AoN es placeholder). | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Healing |
| 11 | Resurrection: Gift of Life / conjuros | confirmado | Textual. | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Healing |
| 12 | Medicine: Blessed Surgery / conjuros | confirmado | Textual; además es "free action" y "at most 1 minute". | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Healing |
| 13 | Acolyte of Apocrypha: lista de 15 apócrifos | confirmado | Textual; nota: deidades con asterisco pueden tomar el subdominio aunque no concedan el dominio base; con dos dominios asociados solo se puede modificar uno al que se tenga acceso. | https://www.aonprd.com/TraitDisplay.aspx?ItemName=Acolyte%20of%20Apocrypha |
| 14 | Fate's Favored texto; no mejora Bit of Luck | confirmado | Texto del rasgo textual (Ultimate Campaign pg. 55). Bit of Luck es "roll twice", sin bonus de suerte. | https://www.aonprd.com/TraitDisplay.aspx?ItemName=Fate%27s%20Favored |
| 15 | Bit of Luck / Good Fortune | confirmado | Textual; Good Fortune: "one additional time per day for every six cleric levels beyond 6th". | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Luck |
| 16 | Divine favor luck bonus +1/3 CL (máx +3), 1 min | confirmado | Textual (Core Rulebook pg. 273). | https://www.aonprd.com/SpellDisplay.aspx?ItemName=Divine%20Favor |
| 17 | Calming Touch | confirmado | Textual. | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Community |
| 18 | Unity | confirmado | Textual. | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Community |
| 19 | Conjuros de Community | confirmado | Textual. | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Community |
| 20 | Protection: pasivo, Resistant Touch, Aura of Protection | confirmado | Textual; el aura dice "You and your allies". | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Protection |
| 21 | Purity: Purifying Touch | confirmado | Textual. (Conjuros: 1 protection from chaos/evil/good/law, **3rd** remove blindness/deafness, 5 atonement.) | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Protection |
| 22 | Touch of Good / Holy Lance | confirmado | Textual. | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Good |
| 23 | Agathion: Protective Aura / conjuros | confirmado | Textual; activación como acción estándar. | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Good |
| 24 | Archon: Aura of Menace / conjuros | confirmado | Textual. | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Good |
| 25 | Sun's Blessing / Nimbus of Light | confirmado | Textual. | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Sun |
| 26 | Day's Resurgence | confirmado | Textual; "plus one additional time per day for every 2 levels beyond 8th" → 2/día a 11. | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Sun |
| 27 | Revelation: Guided Eyes / conjuros / deidades | confirmado | Textual (Champions of Purity pg. 21). | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Sun |
| 28 | Travel: +10 pies, Agile Feet, Dimensional Hop | confirmado | Textual. | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Travel |
| 29 | Conjuros de Travel | confirmado | Textual. | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Travel |
| 30 | Lore Keeper / Remote Viewing | confirmado | Textual; Lore Keeper no lista usos/día. | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Knowledge |
| 31 | Gentle Rest / Ward Against Death | confirmado | Textual; el aura agrega: "This ward does not remove negative levels… but the negative levels have no effect while the creature is inside the warded area." | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Repose |
| 32 | Liberation / Freedom's Call | confirmado | Textual. | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Liberation |
| 33 | Freedom: Liberty's Blessing | confirmado | Textual. | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Liberation |
| 34 | Heroism: Aura of Heroism (swift) | confirmado | "Using this ability is a swift action." | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Glory |
| 35 | Glory: +2 DC channel vs no muertos; Divine Presence | confirmado | Textual; activación acción estándar. | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Glory |
| 36 | Resolve: Bestow Resolve | confirmado | Textual. | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Strength |
| 37 | Divine: Divine Vessel / conjuros | confirmado | Textual ("+2 bonus on the next attack roll, skill check, or ability check made before the end of their next turn"). | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Magic |
| 38 | Alchemy: Divine Alchemy | confirmado | Textual; 1 + 11/4 = 1 + 2 = nivel 3.º. Solo conjuros que apuntan a criaturas; "treated as alchemist extracts for the purpose of your domain spells". | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Magic |
| 39 | Dazing Touch / Adoration | confirmado | Textual: "Creatures with more Hit Dice than your cleric level are unaffected" (sin salvación); Adoration acción inmediata, Will niega, mente. | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Charm |
| 40 | Mythic Domain (tier 1) | confirmado | Textual, en la sección 1st-Tier. | https://www.aonprd.com/PathAbilities.aspx?Path=Hierophant |
| 41 | Hand of Mercy (tier 3) | confirmado | Textual, en la sección 3rd-Tier. | https://www.aonprd.com/PathAbilities.aspx?Path=Hierophant |
| 42 | Overflowing Grace (tier 1) | confirmado | Textual, 1st-Tier. | https://www.aonprd.com/PathAbilities.aspx?Path=Hierophant |
| 43 | CLW / breath of life / heal números | confirmado | CLW "1d8 + 1 per CL (max +5)"; BoL "5d8 + 1 per CL (max +25)", muerto ≤1 round; heal "10 hp per level, max 150 at 15th". | https://www.aonprd.com/SpellDisplay.aspx?ItemName=Heal |
| 44 | Sarenrae dominios/subdominios | confirmado | Textual (Inner Sea Gods pg. 132); Medicine* y Thirst* con asterisco (rasgo). | https://www.aonprd.com/DeityDisplay.aspx?ItemName=Sarenrae |
| 45 | Pharasma dominios/subdominios (sin Restoration) | confirmado | Textual (Inner Sea Gods pg. 116). | https://www.aonprd.com/DeityDisplay.aspx?ItemName=Pharasma |
| 46 | Milani | confirmado | Textual (Inner Sea Faiths pg. 71). | https://www.aonprd.com/DeityDisplay.aspx?ItemName=Milani |
| 47 | Dalenydra | confirmado | Textual (Inner Sea Gods pg. 322). | https://www.aonprd.com/DeityDisplay.aspx?ItemName=Dalenydra |
| 48 | Qi Zhong | confirmado | Textual (Dragon Empires Gazetteer pg. 58). | https://www.aonprd.com/DeityDisplay.aspx?ItemName=Qi%20Zhong |
| 49 | No existe dominio Vermin; URL da 404 | **corregido** | La conclusión es correcta: ClericDomains.aspx lista 35 dominios y ninguno es "Vermin"; el más cercano es el subdominio Insect (Animal, Divine Anthology pg. 23). Pero la URL **no devuelve 404**: devuelve HTTP 200 con una página vacía (sin contenido). | https://www.aonprd.com/ClericDomains.aspx |
| 50 | Blinding Flash sin DC en AoN; a criterio del GM | **corregido** | La entrada del poder no imprime la DC, pero la regla general de subdominios en AoN sí la fija: "If a subdomain ability calls for a saving throw, the DC of the save is equal to 10 + 1/2 the character's cleric level + her Wisdom modifier." → Fort DC 10 + 5 + Wis (21 con Wis +6). No es decisión del GM. | https://www.aonprd.com/ClericDomains.aspx |
| 51 | Inspiring Command: 1 + 1/3 niveles aliados, sin usos/día en AoN | confirmado | Textual; sin límite de usos en AoN ni FAQ oficial (hilo paizo rzs2m8ne sin respuesta de staff). | https://www.aonprd.com/DomainDisplay.aspx?ItemName=Nobility |

## Errores encontrados en las NOTAS (fuera de las afirmaciones)

1. **§1.1 "AoN no muestra ninguna regla general de DC para poderes de dominio"** — falso para subdominios: ClericDomains.aspx fija DC = 10 + 1/2 nivel de clérigo + Wis para cualquier habilidad de subdominio que pida salvación. (Para poderes de dominio base cada poder sigue indicando su DC.) https://www.aonprd.com/ClericDomains.aspx
2. **§3.5 Purity**: los conjuros reemplazados son 1st protection from chaos/evil/good/law, **3rd** remove blindness/deafness (no 2.º), 5th atonement. https://www.aonprd.com/DomainDisplay.aspx?ItemName=Protection
3. **§3.11 Chivalry**: el poder se llama **Bolstering Touch (Sp)**, no "Cool Head". https://www.aonprd.com/DomainDisplay.aspx?ItemName=Glory
4. **§3.11 Legend**: el poder se llama **Witness the Legend (Su)** (no "Extol"), es acción de movimiento sobre un aliado a 60 pies, y el subdominio además **reemplaza el +2 a la DC del channel** de Glory por una dote extra (Hero's Fortune si hay hero points; si no, Marked for Glory). **Hubris** también reemplaza ese +2 a la DC por Intimidate como habilidad de clase. https://www.aonprd.com/DomainDisplay.aspx?ItemName=Glory
5. **§3.36 Insect (Exoskeleton)**: el bonus de armadura natural sube +1 por cada 5 niveles → **+3 a nivel 11** (no +1); los temp HP son 1d4+5 por 1 asalto; el conjuro de 5.º es **vermin shape II** (no III). https://www.aonprd.com/DomainDisplay.aspx?ItemName=Animal
6. **§2.k / §3.10 Repose**: Ward Against Death no quita niveles negativos previos, pero "the negative levels have no effect while the creature is inside the warded area" — es más fuerte que lo anotado. https://www.aonprd.com/DomainDisplay.aspx?ItemName=Repose
7. **§1.2**: falta la cláusula "If a subdomain has two associated domains, the cleric can only select the subdomain for one of her domains" (relevante para Archon, Azata, Education, Espionage, Alchemy, Self-Realization, Hubris).
8. **§1.3 / afirmación 13**: el rasgo aclara que "When selecting a subdomain associated with two domains, a priest can choose only a subdomain that modifies a domain to which he has access."

## Contaminación detectada
Ninguna. Todas las fuentes citadas existen en aonprd.com (PF1e) y los libros indicados coinciden con los que muestra AoN. El "Vermin domain" ya estaba correctamente marcado como inexistente (posible 3PP en d20pfsrd).

## Archivos de evidencia
- Caché previa: `C:/Users/renzo/Desktop/DAKODEV/Clerigo/investigacion/_tmp/d_*.txt`, `_raw/cleric.txt`, `_raw/hiero_abilities.txt`, `_tmp/s_*.txt`, `_tmp/t_fates.txt`
- Descargas de esta auditoría: `C:/Users/renzo/Desktop/DAKODEV/Clerigo/investigacion/_audit/` (clericdomains, d_Repose, d_Strength, d_Magic, d_Charm, d_Nobility, animal, vermin, de_*, t_acolyte; .html y .txt)
