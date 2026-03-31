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
];

export type KnowledgeCategory = typeof IOF;

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
};
