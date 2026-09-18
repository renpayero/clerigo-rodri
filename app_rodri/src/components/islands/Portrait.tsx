import { useEffect, useRef, useState } from 'preact/hooks';

const SRC = '/img/rodri.jpg';
const FILE = 'Rodri.jpg';

/**
 * Retrato de Rodri. `avatar`: miniatura redonda para el header (toca → vista ampliada).
 * `card`: retrato en la Ficha con los botones de ampliar y descargar.
 */
export function Portrait({ variant = 'card' }: { variant?: 'avatar' | 'card' }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    else if (!open && d.open) d.close();
  }, [open]);

  const download = (
    <a class="btn btn--sm" href={SRC} download={FILE} title="Guardar la imagen en el dispositivo">
      ⤓ Descargar
    </a>
  );

  return (
    <>
      {variant === 'avatar' ? (
        <button type="button" class="avatar" onClick={() => setOpen(true)} title="Ver el retrato de Rodri" aria-label="Ver el retrato de Rodri">
          <img src={SRC} alt="" width={36} height={48} loading="lazy" decoding="async" />
        </button>
      ) : (
        <figure class="portrait">
          <button type="button" class="portrait-btn" onClick={() => setOpen(true)} aria-label="Ampliar el retrato">
            <img src={SRC} alt="Retrato de Rodri" width={736} height={981} loading="lazy" decoding="async" />
          </button>
          <figcaption class="btn-row">
            <button type="button" class="btn btn--sm" onClick={() => setOpen(true)}>⤢ Ampliar</button>
            {download}
          </figcaption>
        </figure>
      )}

      <dialog ref={ref} class="lightbox" onClose={() => setOpen(false)} onClick={(e) => { if (e.target === ref.current) setOpen(false); }}>
        {open && (
          <div class="lightbox-inner">
            <img src={SRC} alt="Retrato de Rodri" width={736} height={981} />
            <div class="lightbox-bar">
              <span class="help">Rodri · clérigo de Sarenrae</span>
              <span class="btn-row">
                {download}
                <button type="button" class="btn btn--sm" onClick={() => setOpen(false)}>Cerrar</button>
              </span>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
export default Portrait;
