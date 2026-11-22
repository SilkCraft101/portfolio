"use client";

export default function PaintingsError({
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <main id="main-content" lang="el">
      <section className="route-error" role="alert">
        <h1>Δεν ήταν δυνατή η φόρτωση της γκαλερί.</h1>
        <p>Η τελευταία επιτυχημένη έκδοση παραμένει διαθέσιμη. Δοκίμασε ξανά.</p>
        <button type="button" onClick={() => unstable_retry()}>
          Προσπάθεια ξανά
        </button>
      </section>
    </main>
  );
}
