import { useState } from 'preact/hooks';
import { Sheet } from './Sheet';
import { spellDc, defensiveCastChance, initiative, concentration, deathThreshold } from '@/lib/rules/derived';
import { healAmount, channelAverage, roundPatterns } from '@/lib/rules/healing';

const pct = (x: number) => `${Math.round(x * 100)} %`;

type Row = [label: string, value: string, note?: string];

function Block({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <section class="cheat-block">
      <h4>{title}</h4>
      <dl>
        {rows.map(([label, value, note]) => (
          <div key={label} class="cheat-row">
            <dt>{label}</dt>
            <dd>
              <b>{value}</b>
              {note && <small>{note}</small>}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/** Atajo del header: los números que conviene saber de memoria (guía §6) y el esqueleto del turno. */
export function CheatSheet() {
  const [open, setOpen] = useState(false);
  const patterns = roundPatterns();
  const ch = channelAverage();

  const tiradas: Row[] = [
    ['Iniciativa', `+${initiative()}`],
    ['Concentración', `+${concentration()}`],
    ['DC conjuros 1.º → 6.º', [1, 2, 3, 4, 5, 6].map((l) => spellDc(l)).join(' · ')],
    ['A la defensiva', `Heal ${pct(defensiveCastChance(6))} · BoL ${pct(defensiveCastChance(5))} · CCW ${pct(defensiveCastChance(4))}`, 'channel y varita no provocan'],
  ];
  const curacion: Row[] = [
    ['Channel', `8d6 ≈ ${ch}`, 'a todos a 30 pies · DC 17 (19 vs no muertos) · excluís 2 · Quick = movimiento, 2 usos'],
    ['Heal', `${healAmount(11)}`, `Inspired ${healAmount(13)} · Mythic ${healAmount(11, true)} · ambos ${healAmount(13, true)}`],
    ['Cures ×1,5 +1', 'CCW 44 · CSW 38 · CMW 30 · CLW 15', 'Mass CLW 24 y Mass CMW 31 a 11 aliados'],
    ['Breath of Life', '5d8+11 ≈ 34', 'murió hace ≤ 1 asalto · mítico 5d12+11 ≈ 44, ≤ 2 asaltos y efectos de muerte'],
    ['Rebuke Death', '1d4+7', 'solo a quien está bajo 0'],
    ['Curar ya', 'bajo el 40 %', 'Relentless: revive si la cura supera sus pg negativos'],
  ];
  const defensa: Row[] = [
    ['CA', '23', '25 con Magic Vestment · 27 con Shield of Faith · toque 12 · desprevenida 22'],
    ['Salvaciones', 'Fort +15 · Ref +8 · Will +19'],
    ['Pg', `125 · muerte a ${deathThreshold()}`, 'Hard to Kill: bajo 0 quedás estable solo'],
    ['Rescates', 'Surge +1d6 · Hero Point +8 / +4', 'Reactive Healing si el golpe te deja a ≤ 0'],
  ];
  const turno: Row[] = [
    ['Rápida', 'Aura of Heroism', 'una vez por combate'],
    ['Estándar', 'buff, o Heal si hace falta', 'Fervor / Prayer si nadie está mal · Heal bajo 40 %, a 0 o anulado'],
    ['Movimiento', 'Quick Channel', 'si hay heridos; si no, posición: detrás de los tanques, 4 melee a ≤ 30 pies'],
    ['Inmediata', 'en reserva', 'Divine Interference · Reactive Healing · Surge · Liberating Command'],
  ];

  return (
    <>
      <button type="button" class="hs-chip hs-chip--btn" title="Números de memoria" aria-label="Abrir los números de memoria" onClick={() => setOpen(true)}>
        <b>#</b>
      </button>
      <Sheet open={open} title="Números de memoria" onClose={() => setOpen(false)} wide>
        <div class="cheat">
          <Block title="Tiradas propias" rows={tiradas} />
          <Block title="Curación" rows={curacion} />
          <Block title="Defensa" rows={defensa} />
          <Block title="El turno" rows={turno} />
          <section class="cheat-block cheat-block--wide">
            <h4>Patrones por asalto</h4>
            <table class="table cheat-table">
              <thead><tr><th>Combinación</th><th class="num">Herido</th><th class="num">Resto</th><th>Costo</th></tr></thead>
              <tbody>{patterns.map((p) => <tr key={p.label}><td>{p.label}</td><td class="num">{p.single}</td><td class="num">{p.others}</td><td class="muted">{p.cost}</td></tr>)}</tbody>
            </table>
          </section>
        </div>
      </Sheet>
    </>
  );
}
export default CheatSheet;
