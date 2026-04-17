import type { Question, ScenarioQuestion, StandardQuestion } from '../types/domain';

const standardScale = [
  { id: 'o1', text: '非常不同意', level: 1 },
  { id: 'o2', text: '比较不同意', level: 2 },
  { id: 'o3', text: '比较同意', level: 3 },
  { id: 'o4', text: '非常同意', level: 4 }
] as const;

const standardQuestions: StandardQuestion[] = [
  { id: 's1', type: 'standard', text: '面对陌生环境，你会先观察局势再行动。', dimension: 'strategy', options: [...standardScale] },
  { id: 's2', type: 'standard', text: '你希望自己在团队里占据关键位置。', dimension: 'ambition', options: [...standardScale] },
  { id: 's3', type: 'standard', text: '别人示好时，你会先留一分心眼。', dimension: 'guard', options: [...standardScale] },
  { id: 's4', type: 'standard', text: '你很容易读懂别人没说出口的情绪。', dimension: 'empathy', options: [...standardScale] },
  { id: 's5', type: 'standard', text: '你习惯把事情按自己的节奏推进。', dimension: 'control', options: [...standardScale] },
  { id: 's6', type: 'standard', text: '情绪一上来时，你会立刻写在脸上。', dimension: 'emotion', options: [...standardScale] },
  { id: 's7', type: 'standard', text: '即使吃亏，你也尽量守住底线。', dimension: 'principle', options: [...standardScale] },
  { id: 's8', type: 'standard', text: '你认定一个人后，会长期站在他那边。', dimension: 'loyalty', options: [...standardScale] },
  { id: 's9', type: 'standard', text: '你擅长给自己留后手。', dimension: 'strategy', options: [...standardScale] },
  { id: 's10', type: 'standard', text: '你不甘心只做配角。', dimension: 'ambition', options: [...standardScale] },
  { id: 's11', type: 'standard', text: '你倾向先信任别人。', dimension: 'guard', reverse: true, options: [...standardScale] },
  { id: 's12', type: 'standard', text: '遇到弱势者时，你常会主动帮忙。', dimension: 'empathy', options: [...standardScale] },
  { id: 's13', type: 'standard', text: '你不喜欢失控感。', dimension: 'control', options: [...standardScale] },
  { id: 's14', type: 'standard', text: '你能迅速平复情绪，不让场面失态。', dimension: 'emotion', reverse: true, options: [...standardScale] },
  { id: 's15', type: 'standard', text: '原则和人情冲突时，你更看重原则。', dimension: 'principle', options: [...standardScale] },
  { id: 's16', type: 'standard', text: '立场变化时，你也会随之调整忠诚。', dimension: 'loyalty', reverse: true, options: [...standardScale] },
  { id: 's17', type: 'standard', text: '你做决定前会先估算代价与收益。', dimension: 'strategy', options: [...standardScale] },
  { id: 's18', type: 'standard', text: '机会来了，你愿意主动争取到极致。', dimension: 'ambition', options: [...standardScale] },
  { id: 's19', type: 'standard', text: '你会把隐私和真实意图区分开来。', dimension: 'guard', options: [...standardScale] },
  { id: 's20', type: 'standard', text: '你能共情别人，但不轻易被带节奏。', dimension: 'empathy', options: [...standardScale] }
];

const scenarioQuestions: ScenarioQuestion[] = [
  {
    id: 'c1',
    type: 'scenario',
    text: '你被临时安排去接待上位者，现场有人故意给你挖坑。你会？',
    options: [
      { id: 'a', text: '先稳住场面，顺势把功劳做实', scores: { strategy: 5, control: 4, emotion: 2 } },
      { id: 'b', text: '当场反击，让对方下不来台', scores: { emotion: 5, ambition: 4, control: 3 } },
      { id: 'c', text: '暂时忍下，记住人情账以后算', scores: { guard: 5, strategy: 4, principle: 2 } },
      { id: 'd', text: '退到边上，不卷这趟浑水', scores: { ambition: 1, control: 1, loyalty: 3 } }
    ]
  },
  {
    id: 'c2',
    type: 'scenario',
    text: '你最信任的人被传与对家来往，你的第一反应是？',
    options: [
      { id: 'a', text: '先私下查证，不让风声扩散', scores: { strategy: 4, guard: 4, loyalty: 4 } },
      { id: 'b', text: '立刻切割关系，保全自己', scores: { guard: 5, ambition: 4, loyalty: 1 } },
      { id: 'c', text: '公开力挺，对外统一口径', scores: { loyalty: 5, empathy: 4, principle: 4 } },
      { id: 'd', text: '把矛盾推给第三方缓冲', scores: { strategy: 5, control: 4, empathy: 2 } }
    ]
  },
  {
    id: 'c3',
    type: 'scenario',
    text: '上位机会只给一个人，而你和好友都在候选名单。你会？',
    options: [
      { id: 'a', text: '全力争取，感情归感情', scores: { ambition: 5, principle: 2, loyalty: 2 } },
      { id: 'b', text: '先与好友谈判，争取双赢', scores: { empathy: 4, strategy: 4, principle: 4 } },
      { id: 'c', text: '让给好友，保全关系', scores: { loyalty: 5, ambition: 1, empathy: 4 } },
      { id: 'd', text: '表面退让，暗中布局反超', scores: { strategy: 5, guard: 5, ambition: 4 } }
    ]
  },
  {
    id: 'c4',
    type: 'scenario',
    text: '有人拿你的旧事做文章，你会怎样处理舆论？',
    options: [
      { id: 'a', text: '主动承认一部分，堵住后续口实', scores: { principle: 5, emotion: 2, strategy: 3 } },
      { id: 'b', text: '反向放料，转移注意力', scores: { strategy: 5, control: 5, principle: 1 } },
      { id: 'c', text: '沉默观察，等对方露破绽', scores: { guard: 5, strategy: 4, emotion: 2 } },
      { id: 'd', text: '直接开撕，绝不示弱', scores: { emotion: 5, control: 3, ambition: 4 } }
    ]
  },
  {
    id: 'c5',
    type: 'scenario',
    text: '你被安排带新人，但她明显想踩着你上位。你会？',
    options: [
      { id: 'a', text: '照带不误，规则先立清楚', scores: { principle: 4, control: 4, empathy: 3 } },
      { id: 'b', text: '把关键资源握在自己手里', scores: { guard: 5, control: 5, strategy: 4 } },
      { id: 'c', text: '暗中观察，必要时借力打力', scores: { strategy: 5, ambition: 4, emotion: 2 } },
      { id: 'd', text: '不带了，直接划清边界', scores: { principle: 3, empathy: 1, guard: 4 } }
    ]
  },
  {
    id: 'c6',
    type: 'scenario',
    text: '你发现同盟在背后留了你一手证据。你会？',
    options: [
      { id: 'a', text: '先换回筹码，再谈关系', scores: { strategy: 5, guard: 5, loyalty: 2 } },
      { id: 'b', text: '当面摊牌，给最后一次机会', scores: { principle: 4, loyalty: 4, emotion: 3 } },
      { id: 'c', text: '立刻反制，不给二次伤害机会', scores: { control: 5, ambition: 4, emotion: 4 } },
      { id: 'd', text: '保持沉默，彻底退出同盟', scores: { principle: 4, emotion: 2, ambition: 1 } }
    ]
  },
  {
    id: 'c7',
    type: 'scenario',
    text: '上位者突然对你示好，但代价是牺牲旧友。你会？',
    options: [
      { id: 'a', text: '接受示好，先活下来再说', scores: { ambition: 5, loyalty: 1, guard: 4 } },
      { id: 'b', text: '拒绝交换，哪怕失去机会', scores: { principle: 5, loyalty: 5, ambition: 1 } },
      { id: 'c', text: '拖延决策，争取第三种路径', scores: { strategy: 5, empathy: 3, control: 4 } },
      { id: 'd', text: '表面答应，私下保旧友', scores: { strategy: 4, loyalty: 4, guard: 4 } }
    ]
  },
  {
    id: 'c8',
    type: 'scenario',
    text: '你手里有能左右格局的秘密，最佳使用时机是？',
    options: [
      { id: 'a', text: '立刻出手，先占主动权', scores: { control: 5, ambition: 4, emotion: 4 } },
      { id: 'b', text: '只在自保底线被碰时使用', scores: { principle: 5, guard: 4, emotion: 2 } },
      { id: 'c', text: '换取最大利益后再公开', scores: { strategy: 5, ambition: 5, loyalty: 1 } },
      { id: 'd', text: '永远不用，秘密只做防身', scores: { guard: 5, control: 3, ambition: 1 } }
    ]
  },
  {
    id: 'c9',
    type: 'scenario',
    text: '你被误会成挑起争斗的人，且暂时无法自证。你会？',
    options: [
      { id: 'a', text: '先稳住核心关系，慢慢翻案', scores: { loyalty: 4, strategy: 4, emotion: 2 } },
      { id: 'b', text: '制造更大的议题覆盖误会', scores: { control: 5, strategy: 4, principle: 1 } },
      { id: 'c', text: '谁误会谁负责，直接切割', scores: { guard: 4, emotion: 4, empathy: 1 } },
      { id: 'd', text: '坦然承压，不为自证伤及无辜', scores: { principle: 5, empathy: 4, ambition: 1 } }
    ]
  },
  {
    id: 'c10',
    type: 'scenario',
    text: '到了必须站队的时刻，你最看重哪条标准？',
    options: [
      { id: 'a', text: '谁能给我确定未来', scores: { ambition: 5, control: 4, loyalty: 2 } },
      { id: 'b', text: '谁在低谷时拉过我一把', scores: { loyalty: 5, empathy: 4, principle: 4 } },
      { id: 'c', text: '谁更守规则，值得长期合作', scores: { principle: 5, strategy: 3, guard: 3 } },
      { id: 'd', text: '谁都不站，先保留独立空间', scores: { guard: 5, control: 3, ambition: 2 } }
    ]
  }
];

export const QUESTIONS: Question[] = [...standardQuestions, ...scenarioQuestions];
