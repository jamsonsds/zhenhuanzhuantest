import type { CharacterCopy, CharacterProfile } from '../types/domain';

export const CHARACTER_PROFILES: CharacterProfile[] = [
  { id: 'zhenhuan', name: '甄嬛', matrix: { strategy: 5, ambition: 4, guard: 4, empathy: 4, control: 4, emotion: 3, principle: 4, loyalty: 4 } },
  { id: 'huafei', name: '华妃', matrix: { strategy: 3, ambition: 5, guard: 2, empathy: 2, control: 5, emotion: 5, principle: 3, loyalty: 4 } },
  { id: 'empress', name: '皇后', matrix: { strategy: 5, ambition: 5, guard: 5, empathy: 1, control: 5, emotion: 2, principle: 2, loyalty: 2 } },
  { id: 'meizhuang', name: '沈眉庄', matrix: { strategy: 3, ambition: 2, guard: 3, empathy: 4, control: 3, emotion: 2, principle: 5, loyalty: 5 } },
  { id: 'anlingrong', name: '安陵容', matrix: { strategy: 4, ambition: 4, guard: 5, empathy: 3, control: 3, emotion: 5, principle: 2, loyalty: 2 } },
  { id: 'jingfei', name: '敬妃', matrix: { strategy: 3, ambition: 1, guard: 3, empathy: 4, control: 2, emotion: 1, principle: 4, loyalty: 5 } },
  { id: 'caoguiren', name: '曹贵人', matrix: { strategy: 5, ambition: 3, guard: 5, empathy: 2, control: 4, emotion: 2, principle: 1, loyalty: 2 } },
  { id: 'chuner', name: '淳儿', matrix: { strategy: 1, ambition: 1, guard: 1, empathy: 5, control: 1, emotion: 4, principle: 3, loyalty: 5 } },
  { id: 'emperor', name: '皇帝', matrix: { strategy: 4, ambition: 5, guard: 5, empathy: 1, control: 5, emotion: 2, principle: 1, loyalty: 1 } },
  { id: 'queenmother', name: '太后', matrix: { strategy: 4, ambition: 3, guard: 4, empathy: 2, control: 4, emotion: 1, principle: 5, loyalty: 3 } },
  { id: 'supeisheng', name: '苏培盛', matrix: { strategy: 4, ambition: 1, guard: 3, empathy: 4, control: 2, emotion: 1, principle: 3, loyalty: 5 } },
  { id: 'wenshichu', name: '温实初', matrix: { strategy: 2, ambition: 1, guard: 2, empathy: 5, control: 1, emotion: 3, principle: 5, loyalty: 5 } },
  { id: 'liuzhu', name: '流朱', matrix: { strategy: 1, ambition: 1, guard: 1, empathy: 5, control: 1, emotion: 5, principle: 4, loyalty: 5 } },
  { id: 'cuijinxi', name: '崔槿汐', matrix: { strategy: 4, ambition: 1, guard: 4, empathy: 5, control: 3, emotion: 1, principle: 4, loyalty: 5 } },
  { id: 'guojunwang', name: '果郡王', matrix: { strategy: 2, ambition: 1, guard: 1, empathy: 5, control: 1, emotion: 4, principle: 4, loyalty: 5 } }
];

const defaultCopy = (name: string): CharacterCopy => ({
  verdict: `你像${name}：进退有章，眼里有局，心里也有温度。`,
  methods: '你处理问题偏向先评估再出手，重视时机、路径和可持续性，属于策略型执行者。',
  temperament: '你的情绪表达有层次，既能在关键时刻强势，也能在必要时收住锋芒。',
  affection: '你并非盲目站队，而是基于价值感与关系质量来投入，认定后通常会长期维护。',
  highlight: '“有些局，不争是输；乱争，也是输。”',
  almanacLine: `此人行事如棋，落子不急，却总在关键处见分晓。`,
  almanacIntro: `${name}型人格常见于复杂关系场中：既懂人心，也懂边界，外柔内稳，后劲极强。`
});

export const CHARACTER_COPY: Record<string, CharacterCopy> = {
  zhenhuan: {
    verdict: '你像甄嬛：看似温润，实则布局深远，分寸与锋芒并存。',
    methods: '你擅长在信息不完整时建立判断框架，先稳后发，关键节点会精准提速。',
    temperament: '你情绪并不外放，但并非软弱；压力越高，你的理性和表达越清晰。',
    affection: '你重情，但不失边界。情分是你的底色，清醒是你的保护色。',
    highlight: '“我不是来争一时输赢，我是来定局的。”',
    almanacLine: '浮沉之间自有章法，柔声细语里藏着定盘星。',
    almanacIntro: '甄嬛型人格属于“清醒共情者”，能在复杂关系里兼顾人心与策略。'
  },
  huafei: defaultCopy('华妃'),
  empress: defaultCopy('皇后'),
  meizhuang: defaultCopy('沈眉庄'),
  anlingrong: defaultCopy('安陵容'),
  jingfei: defaultCopy('敬妃'),
  caoguiren: defaultCopy('曹贵人'),
  chuner: defaultCopy('淳儿'),
  emperor: defaultCopy('皇帝'),
  queenmother: defaultCopy('太后'),
  supeisheng: defaultCopy('苏培盛'),
  wenshichu: defaultCopy('温实初'),
  liuzhu: defaultCopy('流朱'),
  cuijinxi: defaultCopy('崔槿汐'),
  guojunwang: defaultCopy('果郡王')
};
