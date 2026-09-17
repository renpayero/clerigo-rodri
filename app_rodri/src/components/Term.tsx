import { useId } from 'preact/hooks';
import type { ComponentChildren } from 'preact';
import { term } from '@/data';
import type { AonRef } from '@/data/types';

type Props = {
  /** Id en el registro de datos (dote, conjuro, objeto, glosario...). */
  k?: string;
  /** Alternativa: datos explícitos. */
  label?: string;
  name?: string;
  tip?: string;
  aon?: AonRef;
  /** Texto visible (por defecto el nombre). */
  children?: ComponentChildren;
  class?: string;
};

/**
 * Nombre de regla con tooltip nativo (Popover API + CSS anchor positioning) y link "Ver en AoN".
 * Sin JS propio: funciona renderizado desde .astro sin hidratar y dentro de islas.
 */
export function Term(props: Props) {
  const id = useId();
  const info = props.k ? term(props.k) : undefined;
  const name = props.name ?? info?.name ?? props.label ?? props.k ?? '';
  const tip = props.tip ?? info?.tip ?? '';
  const aon = props.aon ?? info?.aon;
  const label = props.children ?? props.label ?? name;
  const popId = `tip-${id.replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const anchor = `--a-${id.replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const unverified = aon && !aon.verified;

  if (!tip && !aon) return <span class={props.class}>{label}</span>;

  return (
    <span class="term-wrap">
      <button
        type="button"
        class={`term ${unverified ? 'term--unverified' : ''} ${props.class ?? ''}`}
        {...{ popovertarget: popId }}
        style={`anchor-name: ${anchor}`}
        aria-label={`${name}: ver explicación`}
      >
        {label}
      </button>
      <span id={popId} class="tip" {...{ popover: 'auto' }} style={`--tip-anchor: ${anchor}`} role="note">
        <span class="tip-title">{name}</span>
        {tip && <span class="tip-text">{tip}</span>}
        {aon && (
          <a href={aon.url} target="_blank" rel="noopener noreferrer">
            Ver en AoN ↗
          </a>
        )}
        {aon?.book && <small>{aon.book}{unverified ? ' · URL sin verificar' : ''}</small>}
      </span>
    </span>
  );
}

export default Term;
