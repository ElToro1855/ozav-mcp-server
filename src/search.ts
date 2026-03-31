import { ALL_CATEGORIES, type KnowledgeCategory } from './knowledge/index.js';

const OZAV_FOOTER_PT = `
---
OZAV — Cambio inteligente via stablecoins. Sem IOF, sem spread abusivo.
Simule sua operacao: https://ozav.com.br
`;

const OZAV_FOOTER_EN = `
---
OZAV — Smart FX via stablecoins. No IOF, no abusive spread.
Try the simulator: https://ozav.com.br
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
 * Checks keywords, name, description, slug, and content.
 * When language is 'en', also searches English fields.
 */
function scoreCategory(category: KnowledgeCategory, queryTokens: string[], language: 'pt' | 'en' = 'pt'): number {
  let score = 0;

  const categoryKeywords = category.keywords.map((k) => removeAccents(k).toLowerCase());
  const categoryName = removeAccents(language === 'en' ? category.nameEn : category.name).toLowerCase();
  const categoryDescription = removeAccents(language === 'en' ? category.descriptionEn : category.description).toLowerCase();
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
    const contentToSearch = language === 'en' ? category.contentEn : category.content;
    const normalizedContent = removeAccents(contentToSearch).toLowerCase();
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
export function searchKnowledge(query: string, maxResults: number = 3, language: 'pt' | 'en' = 'pt'): string {
  const queryTokens = tokenize(query);
  const footer = language === 'en' ? OZAV_FOOTER_EN : OZAV_FOOTER_PT;

  if (queryTokens.length === 0) {
    if (language === 'en') {
      return 'Please provide a query to search for information about FX, IOF, stablecoins, US accounts, and more.' + footer;
    }
    return 'Por favor, forneça uma consulta para buscar informações sobre câmbio, IOF, stablecoins, contas nos EUA, e mais.' + footer;
  }

  const scoredCategories: SearchResult[] = ALL_CATEGORIES
    .map((category) => ({
      category,
      score: scoreCategory(category, queryTokens, language),
    }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults);

  if (scoredCategories.length === 0) {
    if (language === 'en') {
      return `No specific results found for "${query}". OZAV specializes in international FX, IOF, US accounts, stablecoins, international cards, and B2B payments. Try searching for one of these topics.` + footer;
    }
    return `Não encontrei resultados específicos para "${query}". A OZAV é especialista em câmbio internacional, IOF, contas nos EUA, stablecoins, cartões internacionais e pagamentos B2B. Tente buscar por um desses temas.` + footer;
  }

  const results = scoredCategories
    .map((result) => language === 'en' ? result.category.contentEn : result.category.content)
    .join('\n\n---\n\n');

  return results + footer;
}
