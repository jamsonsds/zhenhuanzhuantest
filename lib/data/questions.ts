import type { Question, ScenarioQuestion, StandardQuestion } from '../types';

const scale = [
  { id: '1', text: '非常不同意', level: 1 },
  { id: '2', text: '比较不同意', level: 2 },
  { id: '3', text: '比较同意', level: 3 },
  { id: '4', text: '非常同意', level: 4 }
] as const;

const standard: StandardQuestion[] = [
  { id: 'q1', type: 'standard', text: '第一次进新圈子时，你会先把人际关系默默记一遍。', dimension: 'strategy', options: [...scale] },
  { id: 'q2', type: 'standard', text: '你希望自己在任何团队里都不是可替代角色。', dimension: 'ambition', options: [...scale] },
  { id: 'q3', type: 'standard', text: '面对突然示好的人，你会保留判断。', dimension: 'guard', options: [...scale] },
  { id: 'q4', type: 'standard', text: '你常能察觉别人一句话背后的情绪。', dimension: 'empathy', options: [...scale] },
  { id: 'q5', type: 'standard', text: '事情按你的节奏推进时，你更有安全感。', dimension: 'control', options: [...scale] },
  { id: 'q6', type: 'standard', text: '情绪上来时，你很难完全藏住。', dimension: 'emotion', options: [...scale] },
  { id: 'q7', type: 'standard', text: '为了结果，你也会坚持某些不愿妥协的底线。', dimension: 'principle', options: [...scale] },
  { id: 'q8', type: 'standard', text: '你认定的人，通常会长期站在同一阵线。', dimension: 'loyalty', options: [...scale] },
  { id: 'q9', type: 'standard', text: '你做决定前，会先估算风险和筹码。', dimension: 'strategy', options: [...scale] },
  { id: 'q10', type: 'standard', text: '你不太接受“差不多就行”的人生版本。', dimension: 'ambition', options: [...scale] },
  { id: 'q11', type: 'standard', text: '你会很快就信任一个新认识的人。', dimension: 'guard', reverse: true, options: [...scale] },
  { id: 'q12', type: 'standard', text: '别人被误解时，你会本能想替他解释。', dimension: 'empathy', options: [...scale] },
  { id: 'q13', type: 'standard', text: '你不喜欢任何超出掌控的变量。', dimension: 'control', options: [...scale] },
  { id: 'q14', type: 'standard', text: '争执时，你通常能迅速冷静下来。', dimension: 'emotion', reverse: true, options: [...scale] },
  { id: 'q15', type: 'standard', text: '规则不合理时，你也更倾向先守住原则。', dimension: 'principle', options: [...scale] },
  { id: 'q16', type: 'standard', text: '局势一变，你对人的忠诚也会很快变化。', dimension: 'loyalty', reverse: true, options: [...scale] },
  { id: 'q17', type: 'standard', text: '你善于在公开场合留话术余地。', dimension: 'strategy', options: [...scale] },
  { id: 'q18', type: 'standard', text: '关键机会来了，你会主动争到最后。', dimension: 'ambition', options: [...scale] },
  { id: 'q19', type: 'standard', text: '你习惯把真心话和场面话分开。', dimension: 'guard', options: [...scale] },
  { id: 'q20', type: 'standard', text: '就算看透别人处境，你也不会被轻易带节奏。', dimension: 'empathy', options: [...scale] }
];

const scenario: ScenarioQuestion[] = [
  {
    id: 'q21',
    type: 'scenario',
    text: '你刚被点名露脸，就有人当众暗讽你资历浅。你怎么回？',
    options: [
      { id: 'a', text: '先笑着接住，再把话题拉回主场', scores: { strategy: 5, control: 4, emotion: 2 } },
      { id: 'b', text: '当场反击，立规矩', scores: { ambition: 4, emotion: 5, control: 4 } },
      { id: 'c', text: '先记住人，账后面算', scores: { guard: 5, strategy: 4, principle: 2 } },
      { id: 'd', text: '不接招，直接淡出焦点', scores: { ambition: 1, control: 1, loyalty: 3 } }
    ]
  },
  {
    id: 'q22',
    type: 'scenario',
    text: '你的同盟忽然被传“脚踩两船”，你会先做什么？',
    options: [
      { id: 'a', text: '先查证，再统一口径', scores: { strategy: 5, guard: 4, loyalty: 4 } },
      { id: 'b', text: '立刻切割，保住自己', scores: { guard: 5, ambition: 4, loyalty: 1 } },
      { id: 'c', text: '公开撑他，先稳军心', scores: { loyalty: 5, empathy: 4, principle: 4 } },
      { id: 'd', text: '借第三方缓冲，自己不站第一线', scores: { strategy: 4, control: 4, empathy: 2 } }
    ]
  },
  {
    id: 'q23',
    type: 'scenario',
    text: '你和好友同时拿到唯一上位名额，你会？',
    options: [
      { id: 'a', text: '全力争取，私情归私情', scores: { ambition: 5, principle: 2, loyalty: 2 } },
      { id: 'b', text: '谈条件，争双赢', scores: { empathy: 4, strategy: 4, principle: 4 } },
      { id: 'c', text: '主动让位，保关系', scores: { loyalty: 5, ambition: 1, empathy: 5 } },
      { id: 'd', text: '表面退让，暗线布局', scores: { strategy: 5, guard: 5, ambition: 4 } }
    ]
  },
  {
    id: 'q24',
    type: 'scenario',
    text: '有人翻你旧账，你短期无法自证。你会？',
    options: [
      { id: 'a', text: '承认可承认部分，先止血', scores: { principle: 5, strategy: 3, emotion: 2 } },
      { id: 'b', text: '放出新议题，转移火力', scores: { strategy: 5, control: 5, principle: 1 } },
      { id: 'c', text: '沉默观察，等对方出错', scores: { guard: 5, strategy: 4, emotion: 2 } },
      { id: 'd', text: '直接对线，宁可撕破脸', scores: { emotion: 5, ambition: 4, control: 3 } }
    ]
  },
  {
    id: 'q25',
    type: 'scenario',
    text: '失宠预警出现，所有人都在观望你。你会？',
    options: [
      { id: 'a', text: '稳住体面，缩表不缩势', scores: { control: 4, strategy: 4, emotion: 2 } },
      { id: 'b', text: '立刻投靠新势力', scores: { ambition: 5, loyalty: 1, guard: 4 } },
      { id: 'c', text: '守住旧盟，先共患难', scores: { loyalty: 5, principle: 4, empathy: 4 } },
      { id: 'd', text: '断联观察，不轻易表态', scores: { guard: 5, control: 3, ambition: 2 } }
    ]
  },
  {
    id: 'q26',
    type: 'scenario',
    text: '你发现最亲近的人在关键节点背刺你。你会？',
    options: [
      { id: 'a', text: '先取回筹码，再谈情分', scores: { strategy: 5, guard: 5, loyalty: 2 } },
      { id: 'b', text: '当面摊牌，给一次解释机会', scores: { principle: 4, loyalty: 4, emotion: 3 } },
      { id: 'c', text: '不谈，直接反制', scores: { control: 5, ambition: 4, emotion: 4 } },
      { id: 'd', text: '沉默离场，永不再信', scores: { guard: 4, principle: 4, empathy: 1 } }
    ]
  },
  {
    id: 'q27',
    type: 'scenario',
    text: '上位者给你偏爱，但条件是牺牲旧友。你选？',
    options: [
      { id: 'a', text: '接受，先保自己位置', scores: { ambition: 5, loyalty: 1, guard: 4 } },
      { id: 'b', text: '拒绝交换，守住底线', scores: { principle: 5, loyalty: 5, ambition: 1 } },
      { id: 'c', text: '拖延决策，找第三条路', scores: { strategy: 5, control: 4, empathy: 3 } },
      { id: 'd', text: '表面应下，暗中护友', scores: { strategy: 4, loyalty: 4, guard: 4 } }
    ]
  },
  {
    id: 'q28',
    type: 'scenario',
    text: '你手里握着能改写局势的秘密，何时用？',
    options: [
      { id: 'a', text: '立刻公开，先抢主动', scores: { control: 5, ambition: 4, emotion: 4 } },
      { id: 'b', text: '只在底线被碰时启用', scores: { principle: 5, guard: 4, emotion: 2 } },
      { id: 'c', text: '交换最大利益后再放', scores: { strategy: 5, ambition: 5, loyalty: 1 } },
      { id: 'd', text: '永远留作护身符', scores: { guard: 5, control: 3, ambition: 1 } }
    ]
  },
  {
    id: 'q29',
    type: 'scenario',
    text: '被冤成“挑事者”，且短期没法翻案。你会？',
    options: [
      { id: 'a', text: '稳核心关系，慢慢洗白', scores: { strategy: 4, loyalty: 4, emotion: 2 } },
      { id: 'b', text: '制造更大议题覆盖旧闻', scores: { control: 5, strategy: 4, principle: 1 } },
      { id: 'c', text: '谁误会谁出局，立刻切割', scores: { guard: 4, emotion: 4, empathy: 1 } },
      { id: 'd', text: '顶住压力，不连累无辜', scores: { principle: 5, empathy: 4, ambition: 1 } }
    ]
  },
  {
    id: 'q30',
    type: 'scenario',
    text: '到了必须站队的夜晚，你最终看重哪一点？',
    options: [
      { id: 'a', text: '谁能给我更大未来', scores: { ambition: 5, control: 4, loyalty: 2 } },
      { id: 'b', text: '谁在我低谷时没弃我', scores: { loyalty: 5, empathy: 4, principle: 4 } },
      { id: 'c', text: '谁更守规则、可长期合作', scores: { principle: 5, strategy: 3, guard: 3 } },
      { id: 'd', text: '谁都不站，先保独立', scores: { guard: 5, control: 3, ambition: 2 } }
    ]
  }
];

export const QUESTIONS: Question[] = [
  standard[0],
  standard[1],
  standard[2],
  standard[3],
  standard[4],
  scenario[0],
  standard[5],
  standard[6],
  standard[7],
  scenario[1],
  standard[8],
  standard[9],
  standard[10],
  scenario[2],
  standard[11],
  standard[12],
  standard[13],
  scenario[3],
  standard[14],
  standard[15],
  standard[16],
  scenario[4],
  standard[17],
  standard[18],
  standard[19],
  scenario[5],
  scenario[6],
  scenario[7],
  scenario[8],
  scenario[9]
];
