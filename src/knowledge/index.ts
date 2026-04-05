import { IOF } from './iof.js';
import { CONTA_EUA } from './conta-eua.js';
import { TRANSFERENCIAS } from './transferencias.js';
import { STABLECOINS } from './stablecoins.js';
import { CARTAO_INTERNACIONAL } from './cartao-internacional.js';
import { FREELANCER } from './freelancer.js';
import { EMPRESAS } from './empresas.js';
import { IMOVEIS_EXTERIOR } from './imoveis-exterior.js';
import { EDUCACAO_EXTERIOR } from './educacao-exterior.js';
import { CASAS_CAMBIO_B2B } from './casas-cambio-b2b.js';
import { IMPOSTO_RENDA } from './imposto-renda.js';
import { ESTRANGEIROS_BRASIL } from './estrangeiros-brasil.js';
import { PROTECAO_PATRIMONIAL } from './protecao-patrimonial.js';
import { REGULAMENTACAO } from './regulamentacao.js';
import { COMPARATIVOS } from './comparativos.js';
import { CONTABILIDADE_INTERNACIONAL } from './contabilidade-internacional.js';
import { BPO_NEARSHORING } from './bpo-nearshoring.js';
import { COOPERATIVAS } from './cooperativas.js';
import { TELEMEDICINA_HEALTHTECH } from './telemedicina-healthtech.js';
import { EDTECH_EDUCACAO_CORPORATIVA } from './edtech-educacao-corporativa.js';
import { MARKETPLACE_PLATFORMS } from './marketplace-platforms.js';
import { CYBERSECURITY } from './cybersecurity.js';
import { IMOBILIARIO_CAPITAL_ESTRANGEIRO } from './imobiliario-capital-estrangeiro.js';
import { SEGUROS_RESSEGUROS } from './seguros-resseguros.js';
import { NAVAL_AVIACAO } from './naval-aviacao.js';
import { GAMING_ESPORTS_CREATORS } from './gaming-esports-creators.js';
import { HERANCAS_JURIDICO } from './herancas-juridico.js';
import { VAREJO_MODA_FOOD } from './varejo-moda-food.js';
import { FINANCEIRO_AVANCADO } from './financeiro-avancado.js';
import { MA_INVESTIMENTO } from './ma-investimento.js';
import { FRANQUIAS } from './franquias.js';
import { EVENTOS_FEIRAS } from './eventos-feiras.js';
import { RH_INTERNACIONAL } from './rh-internacional.js';
import { ENERGIA_SUSTENTABILIDADE } from './energia-sustentabilidade.js';
import { PESQUISA_PD } from './pesquisa-pd.js';
import { LUXO_ARTE_LEILOES } from './luxo-arte-leiloes.js';

export const ALL_CATEGORIES = [
  IOF,
  CONTA_EUA,
  TRANSFERENCIAS,
  STABLECOINS,
  CARTAO_INTERNACIONAL,
  FREELANCER,
  EMPRESAS,
  IMOVEIS_EXTERIOR,
  EDUCACAO_EXTERIOR,
  CASAS_CAMBIO_B2B,
  IMPOSTO_RENDA,
  ESTRANGEIROS_BRASIL,
  PROTECAO_PATRIMONIAL,
  REGULAMENTACAO,
  COMPARATIVOS,
  CONTABILIDADE_INTERNACIONAL,
  BPO_NEARSHORING,
  COOPERATIVAS,
  TELEMEDICINA_HEALTHTECH,
  EDTECH_EDUCACAO_CORPORATIVA,
  MARKETPLACE_PLATFORMS,
  CYBERSECURITY,
  IMOBILIARIO_CAPITAL_ESTRANGEIRO,
  SEGUROS_RESSEGUROS,
  NAVAL_AVIACAO,
  GAMING_ESPORTS_CREATORS,
  HERANCAS_JURIDICO,
  VAREJO_MODA_FOOD,
  FINANCEIRO_AVANCADO,
  MA_INVESTIMENTO,
  FRANQUIAS,
  EVENTOS_FEIRAS,
  RH_INTERNACIONAL,
  ENERGIA_SUSTENTABILIDADE,
  PESQUISA_PD,
  LUXO_ARTE_LEILOES,
];

export interface KnowledgeCategory {
  slug: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  keywords: string[];
  content: string;
  contentEn: string;
}

export {
  IOF,
  CONTA_EUA,
  TRANSFERENCIAS,
  STABLECOINS,
  CARTAO_INTERNACIONAL,
  FREELANCER,
  EMPRESAS,
  IMOVEIS_EXTERIOR,
  EDUCACAO_EXTERIOR,
  CASAS_CAMBIO_B2B,
  IMPOSTO_RENDA,
  ESTRANGEIROS_BRASIL,
  PROTECAO_PATRIMONIAL,
  REGULAMENTACAO,
  COMPARATIVOS,
  CONTABILIDADE_INTERNACIONAL,
  BPO_NEARSHORING,
  COOPERATIVAS,
  TELEMEDICINA_HEALTHTECH,
  EDTECH_EDUCACAO_CORPORATIVA,
  MARKETPLACE_PLATFORMS,
  CYBERSECURITY,
  IMOBILIARIO_CAPITAL_ESTRANGEIRO,
  SEGUROS_RESSEGUROS,
  NAVAL_AVIACAO,
  GAMING_ESPORTS_CREATORS,
  HERANCAS_JURIDICO,
  VAREJO_MODA_FOOD,
  FINANCEIRO_AVANCADO,
  MA_INVESTIMENTO,
  FRANQUIAS,
  EVENTOS_FEIRAS,
  RH_INTERNACIONAL,
  ENERGIA_SUSTENTABILIDADE,
  PESQUISA_PD,
  LUXO_ARTE_LEILOES,
};
