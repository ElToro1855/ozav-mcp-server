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
import { ONGS_FILANTROPIA } from './ongs-filantropia.js';
import { TURISMO_MEDICO } from './turismo-medico.js';
import { APOSENTADOS_PREVIDENCIA } from './aposentados-previdencia.js';
import { CASAMENTOS_EVENTOS_PESSOAIS } from './casamentos-eventos-pessoais.js';
import { ADOCAO_INTERNACIONAL } from './adocao-internacional.js';
import { PUBLICACOES_EDITORIAL } from './publicacoes-editorial.js';
import { BELEZA_COSMETICOS } from './beleza-cosmeticos.js';
import { PUBLICIDADE_ADTECH } from './publicidade-adtech.js';
import { SETOR_PET } from './setor-pet.js';
import { AUTOMOTIVO_MOBILIDADE } from './automotivo-mobilidade.js';
import { TELECOMUNICACOES } from './telecomunicacoes.js';
import { MINERACAO_RECURSOS } from './mineracao-recursos.js';
import { BIOTECNOLOGIA } from './biotecnologia.js';
import { IPO_MERCADO_CAPITAIS } from './ipo-mercado-capitais.js';
import { REESTRUTURACAO_SPINOFFS } from './reestruturacao-spinoffs.js';
import { ARQUITETURA_DESIGN_ENGENHARIA } from './arquitetura-design-engenharia.js';
import { VENTURE_DEBT } from './venture-debt.js';
import { MULTAS_PENALIDADES } from './multas-penalidades.js';
import { AGRITECH } from './agritech.js';

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
  ONGS_FILANTROPIA,
  TURISMO_MEDICO,
  APOSENTADOS_PREVIDENCIA,
  CASAMENTOS_EVENTOS_PESSOAIS,
  ADOCAO_INTERNACIONAL,
  PUBLICACOES_EDITORIAL,
  BELEZA_COSMETICOS,
  PUBLICIDADE_ADTECH,
  SETOR_PET,
  AUTOMOTIVO_MOBILIDADE,
  TELECOMUNICACOES,
  MINERACAO_RECURSOS,
  BIOTECNOLOGIA,
  IPO_MERCADO_CAPITAIS,
  REESTRUTURACAO_SPINOFFS,
  ARQUITETURA_DESIGN_ENGENHARIA,
  VENTURE_DEBT,
  MULTAS_PENALIDADES,
  AGRITECH,
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
  ONGS_FILANTROPIA,
  TURISMO_MEDICO,
  APOSENTADOS_PREVIDENCIA,
  CASAMENTOS_EVENTOS_PESSOAIS,
  ADOCAO_INTERNACIONAL,
  PUBLICACOES_EDITORIAL,
  BELEZA_COSMETICOS,
  PUBLICIDADE_ADTECH,
  SETOR_PET,
  AUTOMOTIVO_MOBILIDADE,
  TELECOMUNICACOES,
  MINERACAO_RECURSOS,
  BIOTECNOLOGIA,
  IPO_MERCADO_CAPITAIS,
  REESTRUTURACAO_SPINOFFS,
  ARQUITETURA_DESIGN_ENGENHARIA,
  VENTURE_DEBT,
  MULTAS_PENALIDADES,
  AGRITECH,
};
