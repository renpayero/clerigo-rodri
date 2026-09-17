import { useState } from 'preact/hooks';
import { useStore } from '@nanostores/preact';
import { $snapshot, initSnapshot } from './store';
import type { StateSnapshot } from '@/lib/snapshot';
import { armorClass, cmd, saves } from '@/lib/rules/derived';

/** CA y salvaciones actuales según los buffs activos (con interruptores para "qué pasaría si"). */
export function AcCalculator({ snapshot }: { snapshot: StateSnapshot }) {
  initSnapshot(snapshot);
  const snap = useStore($snapshot) ?? snapshot;
  const active = new Set(snap.buffs.filter((b) => b.status === 'active').map((b) => b.buffKey));
  const onSelf = (key: string) => snap.buffs.some((b) => b.status === 'active' && b.buffKey === key && b.targets.some((t) => t.allyId === 'self'));
  const auto = {
    magicVestment: snap.buffs.filter((b) => b.status === 'active' && b.buffKey === 'magic-vestment' && b.targets.some((t) => t.allyId === 'self')).length,
    shieldOfFaith: onSelf('shield-of-faith'),
    fervor: onSelf('blessing-of-fervor'),
    prayer: active.has('prayer'),
    aura: snap.character.auraActive,
  };
  const [over, setOver] = useState<Partial<{ mv1: boolean; mv2: boolean; sof: boolean; fervor: boolean; prayer: boolean; aura: boolean; cover: boolean }>>({});
  const mv1 = over.mv1 ?? auto.magicVestment >= 1;
  const mv2 = over.mv2 ?? auto.magicVestment >= 2;
  const sof = over.sof ?? auto.shieldOfFaith;
  const fervor = over.fervor ?? auto.fervor;
  const prayer = over.prayer ?? auto.prayer;
  const aura = over.aura ?? auto.aura;
  const cover = over.cover ?? false;
  const ac = armorClass({ magicVestmentArmor: mv1, magicVestmentShield: mv2, shieldOfFaith: sof, fervorDodge: fervor, cover });
  const sv = saves({ auraInside: aura, prayer });
  const b = ac.breakdown;
  const toggles: { k: keyof typeof over; label: string; on: boolean; hint: string }[] = [
    { k: 'mv1', label: 'Magic Vestment (armadura)', on: mv1, hint: '+1 mejora extra' },
    { k: 'mv2', label: 'Magic Vestment (escudo)', on: mv2, hint: '+1 mejora extra' },
    { k: 'sof', label: 'Shield of Faith', on: sof, hint: '+3 desvío (reemplaza el anillo +1)' },
    { k: 'fervor', label: 'Fervor: esquiva', on: fervor, hint: '+2 esquiva a CA y Reflejos' },
    { k: 'prayer', label: 'Prayer', on: prayer, hint: '+1 suerte a salvaciones' },
    { k: 'aura', label: 'Dentro del aura', on: aura, hint: '+2 moral (la aura no te incluye si sos vos: el DM decide)' },
    { k: 'cover', label: 'Cobertura', on: cover, hint: '+4 a CA y Reflejos' },
  ];
  return (
    <section class="card" id="ca-actual">
      <h2>CA y salvaciones ahora</h2>
      <p class="help">Se marcan solas con los buffs activos de la Mesa; tocá para simular.</p>
      <div class="stat-grid">
        <div class="stat"><span class="label">CA</span><span class="value big">{ac.total}</span><span class="detail">10 + {b.armor} arm + {b.shield} esc + {b.dex} Des + {b.deflection} desv + {b.natural} nat{b.dodge ? ` + ${b.dodge} esq` : ''}{b.cover ? ' + 4 cob' : ''}</span></div>
        <div class="stat"><span class="label">Toque</span><span class="value">{ac.touch}</span></div>
        <div class="stat"><span class="label">Desprevenida</span><span class="value">{ac.flatFooted}</span></div>
        <div class="stat"><span class="label">CMD</span><span class="value">{cmd({ shieldOfFaith: sof, fervorDodge: fervor })}</span></div>
        <div class="stat"><span class="label">Fort</span><span class="value">+{sv.fort}</span></div>
        <div class="stat"><span class="label">Ref</span><span class="value">+{sv.ref + (fervor ? 2 : 0) + (cover ? 4 : 0)}</span>{(fervor || cover) && <span class="detail">incluye esquiva/cobertura</span>}</div>
        <div class="stat"><span class="label">Will</span><span class="value">+{sv.will}</span></div>
      </div>
      <div class="btn-row" style="margin-top: var(--s3)">
        {toggles.map((t) => (
          <button key={t.k} type="button" class={`btn btn--sm ${t.on ? 'is-active' : ''}`} title={t.hint} aria-pressed={t.on} onClick={() => setOver((o) => ({ ...o, [t.k]: !t.on }))}>{t.label}</button>
        ))}
      </div>
    </section>
  );
}
export default AcCalculator;
