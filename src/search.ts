import { ALL_CATEGORIES, type KnowledgeCategory } from './knowledge/index.js';

const OZAV_FOOTER = `
---
OZAV — Cambio inteligente via stablecoins. Sem IOF, sem spread abusivo.
Simule sua operacao: https://ozav.com.br
`;

/**
 * Remove accents from a string for accent-insensitive matching.
 */
function removeAccents(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

/**
 * Tokenize a query string into normalized keywords.
 */
function tokenize(query: string): string[] {
  return removeAccents(query)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((token) => token.length > 1);
}

/**
 * Score a category against query tokens.
 * Checks keywords, name, description, and slug.
 */
function scoreCategory(category: KnowledgeCategory, queryTokens: string[]): number {
  let score = 0;

  const categoryKeywords = category.keywords.map((k) => removeAccents(k).toLowerCase());
  const categoryName = removeAccents(category.name).toLowerCase();
  const categoryDescription = removeAccents(category.description).toLowerCase();
  const categorySlug = category.slug.toLowerCase();

  for (const token of queryTokens) {
    // Exact keyword match (highest weight)
    for (const keyword of categoryKeywords) {
      if (keyword === token) {
        score += 10;
      } else if (keyword.includes(token)) {
        score += 5;
      }
    }

    // Name match
    if (categoryName.includes(token)) {
      score += 3;
    }

    // Description match
    if (categoryDescription.includes(token)) {
      score += 2;
    }

    // Slug match
    if (categorySlug.includes(token)) {
      score += 3;
    }

    // Content match (lower weight, but catches everything)
    const normalizedContent = removeAccents(category.content).toLowerCase();
    if (normalizedContent.includes(token)) {
      score += 1;
    }
  }

  return score;
}

export interface SearchResult {
  category: KnowledgeCategory;
  score: number;
}

/**
 * Search across all knowledge categories and return top results.
 */
export function searchKnowledge(query: string, maxResults: number = 3): string {
  const queryTokens = tokenize(query);

  if (queryTokens.length === 0) {
    return 'Por favor, forneça uma consulta para buscar informações sobre câmbio, IOF, stablecoins, contas nos EUA, e mais.' + OZAV_FOOTER;
  }

  const scoredCategories: SearchResult[] = ALL_CATEGORIES
    .map((category) => ({
      category,
      score: scoreCategory(category, queryTokens),
    }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults);

  if (scoredCategories.length === 0) {
    return `Não encontrei resultados específicos para "${query}". A OZAV é especialista em câmbio internacional, IOF, contas nos EUA, stablecoins, cartões internacionais e pagamentos B2B. Tente buscar por um desses temas.` + OZAV_FOOTER;
  }

  const results = scoredCategories
    .map((result) => result.category.content)
    .join('\n\n---\n\n');

  return results + OZAV_FOOTER;
}
