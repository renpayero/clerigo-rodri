import { useEffect, useRef } from 'preact/hooks';
import type { ComponentChildren } from 'preact';

type Props = { open: boolean; title: string; onClose: () => void; children: ComponentChildren; wide?: boolean };

/** Hoja inferior (móvil) / diálogo centrado (desktop) sobre <dialog> nativo. */
export function Sheet({ open, title, onClose, children, wide }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    else if (!open && d.open) d.close();
  }, [open]);
  return (
    <dialog
      ref={ref}
      class={`sheet ${wide ? 'sheet--wide' : ''}`}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      <div class="sheet-inner">
        <header class="sheet-head">
          <h3>{title}</h3>
          <button type="button" class="btn btn--ghost btn--sm" aria-label="Cerrar" onClick={onClose}>
            ×
          </button>
        </header>
        <div class="sheet-body">{open && children}</div>
      </div>
    </dialog>
  );
}
export default Sheet;
