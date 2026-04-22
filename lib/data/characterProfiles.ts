import type { CharacterProfile } from '../types';

const genericProfile = (name: string): CharacterProfile => ({
  id: name,
  verdict: `你像${name}：心中有尺，手里有招，场面再乱也能守体面。`,
  methods: '你在复杂关系中的行动方式偏策略型，会先盘面、再出手，且擅长给自己留下后路。',
  temperament: '你外在情绪有分寸，不轻易失态；真正关键时刻，你会把锋芒留给结果。',
  affection: '你重视关系中的稳定与信任，不轻许诺，但一旦认定就会持续投入。',
  highlight: '“这局我不急，但每一步都算数。”',
  almanacLine: '此人处世如行棋，慢半拍，却往往先到终局。',
  almanacIntro: `${name}型人格善于在情绪与理性之间找平衡，既有手腕，也有底线。`
});

export const CHARACTER_PROFILES: Record<string, CharacterProfile> = {
  zhenhuan: {
    id: 'zhenhuan',
    verdict: '你像甄嬛：眼里看得透人心，手里拿得住分寸与胜负。',
    methods: '你擅长在不确定局势中建立判断路径，常以“先稳后击”的方式完成逆转。',
    temperament: '你不靠情绪压场，而靠节奏控场。外柔内刚，是你最稀缺的锋芒。',
    affection: '你重情，但不盲信。你给出的情分，是经过判断后仍选择的认真。',
    highlight: '“局势越乱，我越清醒。”',
    almanacLine: '温声不等于退让，藏锋也能定局。',
    almanacIntro: '甄嬛型人格属于高适应、高洞察的复合型，能在关系与博弈中都保持主动。'
  },
  huafei: genericProfile('华妃'),
  empress: genericProfile('皇后'),
  meizhuang: genericProfile('沈眉庄'),
  anlingrong: genericProfile('安陵容'),
  jingfei: genericProfile('敬妃'),
  caoguiren: genericProfile('曹贵人'),
  chuner: genericProfile('淳儿'),
  emperor: genericProfile('皇帝'),
  queenmother: genericProfile('太后'),
  supeisheng: genericProfile('苏培盛'),
  wenshichu: genericProfile('温实初'),
  liuzhu: genericProfile('流朱'),
  cuijinxi: genericProfile('崔槿汐'),
  guojunwang: genericProfile('果郡王')
};
