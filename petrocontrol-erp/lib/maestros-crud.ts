type NormalizedUpdate = Record<string, string | number | boolean | null>;

export function normalizeUpdatePayload(input: Record<string, unknown>): NormalizedUpdate {
  const normalized: NormalizedUpdate = {};

  for (const [key, value] of Object.entries(input)) {
    if (value === undefined) continue;

    if (value === '' || value === null) {
      normalized[key] = null;
      continue;
    }

    if (value === 'on' || value === 'true') {
      normalized[key] = true;
      continue;
    }

    if (value === 'off' || value === 'false') {
      normalized[key] = false;
      continue;
    }

    if (typeof value === 'string' && /^-?\d+(\.\d+)?$/.test(value)) {
      normalized[key] = Number(value);
      continue;
    }

    normalized[key] = value as string | number | boolean;
  }

  return normalized;
}
