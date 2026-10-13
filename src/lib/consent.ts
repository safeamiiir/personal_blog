// Reader's choice about third-party embeds. Storing the choice itself is
// exempt from consent, as it's needed to respect that choice.
const KEY = "embed-consent";
export const CONSENT_EVENT = "embed-consent-change";

export type Consent = "accepted" | "rejected" | null;

export function getConsent(): Consent {
  try {
    const value = localStorage.getItem(KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

export function setConsent(value: Consent) {
  try {
    if (value) localStorage.setItem(KEY, value);
    else localStorage.removeItem(KEY);
  } catch {}
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}
