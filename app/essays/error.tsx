"use client";

export default function EssaysError({
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <main id="main-content" lang="el">
      <section className="route-error" role="alert">
        <h1>Δεν ήταν δυνατή η φόρτωση της σελίδας.</h1>
        <p>Δοκίμασε ξανά σε λίγο.</p>
        <button type="button" onClick={() => unstable_retry()}>
          Προσπάθεια ξανά
        </button>
      </section>
    </main>
  );
}
