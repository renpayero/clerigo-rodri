import { useStore } from '@nanostores/preact';
import { $toasts, dismissToast } from './store';

/** Avisos apilados (aria-live). Se monta una vez, dentro de HeaderStatus. */
export function Toast() {
  const toasts = useStore($toasts);
  return (
    <div class="toasts" aria-live="polite">
      {toasts.map((t) => (
        <div key={t.id} class={`toast toast--${t.kind}`} role={t.kind === 'error' ? 'alert' : 'status'}>
          <div class="toast-body">
            <strong>{t.title}</strong>
            {t.detail && <span>{t.detail}</span>}
            {t.roll && <code class="toast-roll">{t.roll.text}</code>}
          </div>
          <button type="button" class="btn btn--ghost btn--sm" aria-label="Cerrar aviso" onClick={() => dismissToast(t.id)}>
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
export default Toast;
