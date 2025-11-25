type SearchParamsInput = Record<string, string | string[] | undefined>;

function toURLSearchParams(params: SearchParamsInput): URLSearchParams {
  const urlParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) {
      if (Array.isArray(value)) {
        value.forEach((v) => urlParams.append(key, v));
      } else {
        urlParams.set(key, value);
      }
    }
  }

  return urlParams;
}

export function buildFilterUrl(
  currentParams: SearchParamsInput,
  update: {
    skills?: string;
    difficulty?: string;
    unfinished?: 'true' | undefined;
  },
): string {
  const params = toURLSearchParams(currentParams);

  if (update.skills?.trim()) {
    params.set('skills', update.skills.trim());
  } else {
    params.delete('skills');
  }

  if (update.difficulty?.trim()) {
    params.set('difficulty', update.difficulty.trim());
  } else {
    params.delete('difficulty');
  }

  if (update.unfinished === 'true') {
    params.set('unfinished', 'true');
  } else {
    params.delete('unfinished');
  }

  const queryString = params.toString();
  return `/scenarios${queryString ? `?${queryString}` : ''}`;
}
