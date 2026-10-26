/**
 * theme.js — shared design base for the brand-red business report template.
 *
 * The palette is a flat, editorial red system for formal management reporting:
 * red is reserved for emphasis, cyan/orange/green are data-series colours only,
 * and neutral grey carries body copy and dividers. Gradient, glow, lens and
 * barcode decorations are switched off at the default-props layer in metadata.js.
 */

export const THEME = {
  // brand — restrained report red
  accent:       '#D33941',   // primary brand red
  accentBright: '#E18189',   // light red highlight
  accentDeep:   '#A9242F',   // deep red for emphasis / dark panels
  accentSoft:   '#FBEAEA',   // pale red wash
  // neutrals (cool grey, low chroma)
  ink:    '#555757',         // primary text / dark panels
  inkDim: '#666868',
  paper:  '#FAFAFA',         // off-white page
  card:   '#FFFFFF',
  muted:  '#898989',         // secondary text
  faint:  '#B5B5B5',         // tertiary text / labels
  hair:   '#DDDDDD',         // hairline divider
  hairStrong: '#CFCFCF',
  // data semantics — green is a chart-series colour only
  pos:  '#62B230',
  neg:  '#D33941',
  warn: '#ED6D00',
  // type
  fontDisplay: "'Microsoft YaHei','微软雅黑',Arial,sans-serif",
  fontText:    "'Microsoft YaHei','微软雅黑',Arial,sans-serif",
};

let _fontsDone = false;
export function ensureFonts() {
  if (_fontsDone || typeof document === 'undefined') return;
  _fontsDone = true;
}

const _styleIds = new Set();
/** Inject a <style> exactly once, keyed by id. CSS must be self-scoped. */
export function injectScopedStyle(id, css) {
  if (typeof document === 'undefined' || _styleIds.has(id)) return;
  _styleIds.add(id);
  const el = document.createElement('style');
  el.setAttribute('data-aic-style', id);
  el.textContent = css;
  document.head.appendChild(el);
}

/** Build the CSS-custom-property style object set on a page root element.
 *  Accent is overridable per-page via the `accentColor` prop. */
export function themeVars(accent) {
  const a = accent || THEME.accent;
  return {
    '--aic-accent': a,
    '--aic-accent-bright': THEME.accentBright,
    '--aic-accent-deep': THEME.accentDeep,
    '--aic-accent-soft': THEME.accentSoft,
    '--aic-ink': THEME.ink,
    '--aic-ink-dim': THEME.inkDim,
    '--aic-paper': THEME.paper,
    '--aic-card': THEME.card,
    '--aic-muted': THEME.muted,
    '--aic-faint': THEME.faint,
    '--aic-hair': THEME.hair,
    '--aic-hair-strong': THEME.hairStrong,
    '--aic-pos': THEME.pos,
    '--aic-neg': THEME.neg,
    '--aic-warn': THEME.warn,
    '--aic-font-display': THEME.fontDisplay,
    '--aic-font-text': THEME.fontText,
  };
}
