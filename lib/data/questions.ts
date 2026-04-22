import type { Question } from '../types';

export const QUESTIONS: Question[] = [
  {
    id: 'q1',
    type: 'scenario',
    text: '你初入宫第三日，内务府只给你次等用度。你会？',
    options: [
      { id: 'a', text: '先记账留证，等合适时机一次翻盘', scores: { strategy: 5, guard: 4, emotion: 2 } },
      { id: 'b', text: '直接去要说法，宁可当场难看', scores: { ambition: 4, emotion: 5, principle: 3 } },
      { id: 'c', text: '先忍一口气，换人情后再追责', scores: { control: 4, loyalty: 3, strategy: 4 } },
      { id: 'd', text: '把好东西让给同住小主，先换口碑', scores: { empathy: 5, loyalty: 4, ambition: 1 } }
    ]
  },
  {
    id: 'q2',
    type: 'scenario',
    text: '请安时你被故意排到末位，前排还回头笑你。你会？',
    options: [
      { id: 'a', text: '当没看见，但把站位规则摸透', scores: { strategy: 4, control: 4, emotion: 1 } },
      { id: 'b', text: '立刻顶回去，位置今天就要拿回来', scores: { ambition: 5, emotion: 5, control: 4 } },
      { id: 'c', text: '笑着让位，暗中把对方短板记下', scores: { guard: 5, strategy: 5, principle: 2 } },
      { id: 'd', text: '下朝后私下沟通，不把冲突公开', scores: { empathy: 4, principle: 4, loyalty: 3 } }
    ]
  },
  {
    id: 'q3',
    type: 'scenario',
    text: '同批新人里有人突然得宠，大家都来打探你态度。你会？',
    options: [
      { id: 'a', text: '先祝贺，再观察她背后是谁', scores: { strategy: 5, guard: 4, empathy: 3 } },
      { id: 'b', text: '主动靠近，抢先绑定新风向', scores: { ambition: 5, control: 3, loyalty: 1 } },
      { id: 'c', text: '明确站中立，不参与任何阵营话题', scores: { guard: 4, principle: 4, control: 4 } },
      { id: 'd', text: '提醒她收锋芒，免得树敌', scores: { empathy: 5, loyalty: 4, emotion: 2 } }
    ]
  },
  {
    id: 'q4',
    type: 'scenario',
    text: '你被安排在宴上献艺，临场发现曲目被换。你会？',
    options: [
      { id: 'a', text: '即兴改词，把局面变成自己的主场', scores: { strategy: 5, control: 5, emotion: 3 } },
      { id: 'b', text: '当众指出有人动手脚，直接查', scores: { principle: 4, emotion: 5, ambition: 4 } },
      { id: 'c', text: '照演但留破绽，事后反查线索', scores: { guard: 5, strategy: 4, control: 3 } },
      { id: 'd', text: '临时退场认罚，保住后续空间', scores: { control: 2, principle: 5, ambition: 1 } }
    ]
  },
  {
    id: 'q5',
    type: 'scenario',
    text: '你最亲近的宫女被别宫高价挖走。你会？',
    options: [
      { id: 'a', text: '放她走，但把消息网络自己接回', scores: { strategy: 5, control: 4, loyalty: 2 } },
      { id: 'b', text: '加码留人，宁可亏也不能失人心', scores: { loyalty: 5, empathy: 4, ambition: 2 } },
      { id: 'c', text: '表面放行，暗中安排反向眼线', scores: { guard: 5, strategy: 5, principle: 1 } },
      { id: 'd', text: '痛快断开，避免以后被拿捏', scores: { principle: 4, emotion: 3, guard: 4 } }
    ]
  },
  {
    id: 'q6',
    type: 'scenario',
    text: '宫里传你“只会装乖”，你听到后第一步是？',
    options: [
      { id: 'a', text: '放任流言扩散，借机看谁最跳', scores: { strategy: 5, guard: 5, emotion: 2 } },
      { id: 'b', text: '当场回击，谁传谁负责', scores: { emotion: 5, ambition: 4, principle: 3 } },
      { id: 'c', text: '通过一次硬事直接改口碑', scores: { control: 5, strategy: 4, ambition: 4 } },
      { id: 'd', text: '不解释，继续把人先照顾好', scores: { empathy: 5, loyalty: 4, ambition: 1 } }
    ]
  },
  {
    id: 'q7',
    type: 'scenario',
    text: '你与闺中密友被迫选边站队，只能保一人前程。你会？',
    options: [
      { id: 'a', text: '先保自己，未来再补情分', scores: { ambition: 5, loyalty: 1, guard: 4 } },
      { id: 'b', text: '先保她，自己另找路', scores: { loyalty: 5, empathy: 5, ambition: 1 } },
      { id: 'c', text: '拖住双方，争取双保方案', scores: { strategy: 5, control: 4, empathy: 3 } },
      { id: 'd', text: '都不站，承担短期代价换独立', scores: { principle: 5, guard: 4, ambition: 2 } }
    ]
  },
  {
    id: 'q8',
    type: 'scenario',
    text: '你被冷落三个月后，突然收到复宠信号。你会？',
    options: [
      { id: 'a', text: '先不激动，核对是谁在推你', scores: { strategy: 5, guard: 4, control: 3 } },
      { id: 'b', text: '立刻高调复出，气势先打满', scores: { ambition: 5, emotion: 4, control: 4 } },
      { id: 'c', text: '低调复位，先修旧关系', scores: { loyalty: 4, empathy: 4, principle: 4 } },
      { id: 'd', text: '先拒一次，逼出更明确诚意', scores: { control: 5, strategy: 4, guard: 3 } }
    ]
  },
  {
    id: 'q9',
    type: 'scenario',
    text: '宴席上强势人物故意点你喝酒试探。你会？',
    options: [
      { id: 'a', text: '顺势敬回去，把试探变社交', scores: { strategy: 4, control: 4, emotion: 2 } },
      { id: 'b', text: '借规矩婉拒，场面给足台阶', scores: { principle: 5, emotion: 1, empathy: 3 } },
      { id: 'c', text: '硬刚到底，态度比酒更重要', scores: { ambition: 4, emotion: 5, principle: 3 } },
      { id: 'd', text: '装醉离席，回头再算账', scores: { guard: 5, strategy: 4, control: 2 } }
    ]
  },
  {
    id: 'q10',
    type: 'scenario',
    text: '你掌握一条会改变格局的秘密，谁都想买。你会？',
    options: [
      { id: 'a', text: '只换一次，换到能保命的筹码', scores: { strategy: 5, guard: 5, control: 4 } },
      { id: 'b', text: '公开透明，谁也别想私吞局势', scores: { principle: 5, emotion: 3, ambition: 2 } },
      { id: 'c', text: '给最值得信任的人，押长期关系', scores: { loyalty: 5, empathy: 4, ambition: 1 } },
      { id: 'd', text: '暂不出手，等最疼的节点再用', scores: { strategy: 5, control: 5, emotion: 2 } }
    ]
  },
  {
    id: 'q11',
    type: 'scenario',
    text: '你被安排替人背锅，只要沉默就能保平安。你会？',
    options: [
      { id: 'a', text: '先背下，回头连本带利要回来', scores: { strategy: 4, guard: 4, ambition: 3 } },
      { id: 'b', text: '拒绝背锅，哪怕当场翻脸', scores: { principle: 5, emotion: 4, control: 3 } },
      { id: 'c', text: '拿出部分真相，保自己也保大局', scores: { strategy: 5, principle: 4, empathy: 3 } },
      { id: 'd', text: '替对方扛一次，记住这份情', scores: { loyalty: 5, empathy: 5, ambition: 1 } }
    ]
  },
  {
    id: 'q12',
    type: 'scenario',
    text: '你宫中有人失手惹祸，牵连到你名声。你会？',
    options: [
      { id: 'a', text: '先止损再追责，流程一项项补齐', scores: { control: 5, strategy: 4, principle: 4 } },
      { id: 'b', text: '先护人，处罚可以晚一点', scores: { loyalty: 5, empathy: 5, control: 2 } },
      { id: 'c', text: '切割责任，立刻换人', scores: { guard: 4, ambition: 4, emotion: 3 } },
      { id: 'd', text: '借此公开整顿，顺便立威', scores: { ambition: 5, control: 5, principle: 2 } }
    ]
  },
  {
    id: 'q13',
    type: 'scenario',
    text: '两宫同时向你抛橄榄枝，只能选其一。你会？',
    options: [
      { id: 'a', text: '选资源更稳的，先把生存位坐实', scores: { ambition: 4, control: 4, loyalty: 2 } },
      { id: 'b', text: '选曾雪中送炭的，情分先还', scores: { loyalty: 5, empathy: 4, principle: 4 } },
      { id: 'c', text: '两边都答应，但节奏掌握在自己手里', scores: { strategy: 5, guard: 5, control: 5 } },
      { id: 'd', text: '谁都不选，保持单线独立', scores: { principle: 4, guard: 4, ambition: 2 } }
    ]
  },
  {
    id: 'q14',
    type: 'scenario',
    text: '你被公开拿来和“更受宠的人”比较。你会？',
    options: [
      { id: 'a', text: '当场夸对方，私下补自己短板', scores: { control: 4, strategy: 4, emotion: 2 } },
      { id: 'b', text: '直接亮成绩，不靠谦让', scores: { ambition: 5, control: 4, emotion: 4 } },
      { id: 'c', text: '不争这口气，守住长线评价', scores: { principle: 4, emotion: 1, guard: 3 } },
      { id: 'd', text: '把比较转成合作，借势共赢', scores: { empathy: 4, strategy: 4, loyalty: 3 } }
    ]
  },
  {
    id: 'q15',
    type: 'scenario',
    text: '你最倚重的盟友要你做一件违心事来表忠。你会？',
    options: [
      { id: 'a', text: '答应，但设置底线不伤无辜', scores: { loyalty: 4, principle: 4, strategy: 4 } },
      { id: 'b', text: '拒绝，忠诚不是失去自我', scores: { principle: 5, emotion: 3, guard: 3 } },
      { id: 'c', text: '先做小部分，换取谈判空间', scores: { strategy: 5, control: 4, loyalty: 3 } },
      { id: 'd', text: '转介绍给别人执行，自己抽身', scores: { guard: 5, strategy: 4, empathy: 1 } }
    ]
  },
  {
    id: 'q16',
    type: 'scenario',
    text: '你失手被抓住把柄，对方暗示“你懂的”。你会？',
    options: [
      { id: 'a', text: '先认错止血，再布局反制', scores: { strategy: 4, control: 4, emotion: 2 } },
      { id: 'b', text: '硬扛到底，不给勒索先例', scores: { principle: 5, emotion: 4, ambition: 3 } },
      { id: 'c', text: '付出代价换沉默，保核心计划', scores: { control: 5, strategy: 4, loyalty: 2 } },
      { id: 'd', text: '公开自曝，抢回叙事权', scores: { emotion: 3, ambition: 4, principle: 4 } }
    ]
  },
  {
    id: 'q17',
    type: 'scenario',
    text: '你看见对家宫女被冤，且无人敢替她说话。你会？',
    options: [
      { id: 'a', text: '先暗中保命，再找证据翻案', scores: { empathy: 4, strategy: 5, guard: 3 } },
      { id: 'b', text: '当场替她说话，后果自己扛', scores: { principle: 5, empathy: 5, emotion: 4 } },
      { id: 'c', text: '不插手，避免被卷入无关战场', scores: { guard: 5, control: 3, ambition: 2 } },
      { id: 'd', text: '借此换对家一个人情', scores: { strategy: 4, loyalty: 2, ambition: 4 } }
    ]
  },
  {
    id: 'q18',
    type: 'scenario',
    text: '你终于等到一次上位机会，但必须踩着旧恩人过去。你会？',
    options: [
      { id: 'a', text: '机会难得，先上位再谈补偿', scores: { ambition: 5, loyalty: 1, guard: 4 } },
      { id: 'b', text: '拒绝这条路，宁慢不脏', scores: { principle: 5, loyalty: 4, ambition: 1 } },
      { id: 'c', text: '试着改规则，争取双留', scores: { strategy: 5, empathy: 4, control: 4 } },
      { id: 'd', text: '借旁线出头，不和恩人正面冲突', scores: { strategy: 4, guard: 4, ambition: 3 } }
    ]
  },
  {
    id: 'q19',
    type: 'scenario',
    text: '你在御前一句话失言，殿内瞬间安静。你会？',
    options: [
      { id: 'a', text: '立刻自嘲化解，把风险吞掉', scores: { emotion: 2, control: 4, strategy: 4 } },
      { id: 'b', text: '据理补充，必须把话说完整', scores: { principle: 4, emotion: 4, ambition: 3 } },
      { id: 'c', text: '马上请罪，保住后续空间', scores: { control: 3, guard: 3, loyalty: 3 } },
      { id: 'd', text: '把注意力引向更重要议题', scores: { strategy: 5, control: 5, emotion: 2 } }
    ]
  },
  {
    id: 'q20',
    type: 'scenario',
    text: '你被赐与不合规矩的偏爱，人人等你犯错。你会？',
    options: [
      { id: 'a', text: '主动降调，先把风头压住', scores: { control: 4, guard: 4, principle: 4 } },
      { id: 'b', text: '既然得宠，就把影响力做满', scores: { ambition: 5, control: 5, emotion: 4 } },
      { id: 'c', text: '把资源分出去，换长期盟友', scores: { empathy: 4, loyalty: 5, strategy: 3 } },
      { id: 'd', text: '维持体面距离，不让人抓把柄', scores: { guard: 5, principle: 4, control: 4 } }
    ]
  },
  {
    id: 'q21',
    type: 'scenario',
    text: '你最信任的人私下提醒：你已在名单上。你会？',
    options: [
      { id: 'a', text: '先确认名单来源，再决定动作', scores: { strategy: 5, guard: 5, emotion: 1 } },
      { id: 'b', text: '先下手为强，主动拆对方局', scores: { ambition: 5, control: 4, emotion: 4 } },
      { id: 'c', text: '稳住阵脚，保护自己人优先', scores: { loyalty: 4, control: 4, empathy: 3 } },
      { id: 'd', text: '公开请查，赌一把清白', scores: { principle: 5, emotion: 3, guard: 2 } }
    ]
  },
  {
    id: 'q22',
    type: 'scenario',
    text: '你被安排与宿敌同办大事，谁都在看你们内斗。你会？',
    options: [
      { id: 'a', text: '先立共同规则，私怨后置', scores: { control: 5, principle: 4, strategy: 4 } },
      { id: 'b', text: '明合作暗较劲，关键点抢主导', scores: { ambition: 5, strategy: 5, guard: 4 } },
      { id: 'c', text: '把难题给她，自己稳结果', scores: { strategy: 4, guard: 4, empathy: 1 } },
      { id: 'd', text: '真心合作一次，试试改关系', scores: { empathy: 5, loyalty: 3, emotion: 2 } }
    ]
  },
  {
    id: 'q23',
    type: 'scenario',
    text: '你受了冤屈，真相要三天后才会到。你会？',
    options: [
      { id: 'a', text: '这三天先固住核心人心', scores: { strategy: 4, loyalty: 4, control: 4 } },
      { id: 'b', text: '立刻对线，不给谣言时间', scores: { emotion: 5, ambition: 4, principle: 3 } },
      { id: 'c', text: '沉默到底，等证据一次定案', scores: { guard: 5, control: 4, emotion: 1 } },
      { id: 'd', text: '先认小错，换取大局喘息', scores: { strategy: 4, principle: 4, empathy: 3 } }
    ]
  },
  {
    id: 'q24',
    type: 'scenario',
    text: '宫宴选座，你被安排在最边角。你要怎么做？',
    options: [
      { id: 'a', text: '不争座位，争发言时机', scores: { strategy: 5, control: 4, emotion: 2 } },
      { id: 'b', text: '当场请调位，体面必须争', scores: { ambition: 4, emotion: 4, principle: 3 } },
      { id: 'c', text: '默默坐下，把边角变信息位', scores: { guard: 5, strategy: 4, control: 3 } },
      { id: 'd', text: '把好位让给新人，先赢口碑', scores: { empathy: 4, loyalty: 4, ambition: 1 } }
    ]
  },
  {
    id: 'q25',
    type: 'scenario',
    text: '你发现身边人对你隐瞒了关键消息。你会？',
    options: [
      { id: 'a', text: '先问动机，再决定是否追责', scores: { empathy: 4, principle: 4, control: 3 } },
      { id: 'b', text: '立刻换人，信任不可破例', scores: { guard: 5, principle: 4, ambition: 3 } },
      { id: 'c', text: '不戳破，反向观察其下一步', scores: { strategy: 5, guard: 5, emotion: 2 } },
      { id: 'd', text: '给一次补救机会，但规则重签', scores: { loyalty: 4, control: 4, principle: 4 } }
    ]
  },
  {
    id: 'q26',
    type: 'scenario',
    text: '你要在“保体面”与“保结果”之间二选一。你会？',
    options: [
      { id: 'a', text: '先保结果，体面可再补', scores: { ambition: 5, strategy: 4, emotion: 3 } },
      { id: 'b', text: '先保体面，失序比失败更可怕', scores: { principle: 5, control: 4, ambition: 2 } },
      { id: 'c', text: '设计成既有结果也不失礼数', scores: { strategy: 5, control: 5, empathy: 3 } },
      { id: 'd', text: '把决定交给团队，多数服从', scores: { loyalty: 4, empathy: 4, control: 2 } }
    ]
  },
  {
    id: 'q27',
    type: 'scenario',
    text: '你被邀请加入一场“稳赢局”，代价是背离旧承诺。你会？',
    options: [
      { id: 'a', text: '加入，承诺本就是阶段性的', scores: { ambition: 5, loyalty: 1, guard: 4 } },
      { id: 'b', text: '拒绝，承诺一破以后都不值钱', scores: { principle: 5, loyalty: 5, ambition: 1 } },
      { id: 'c', text: '先拖住局，争取两边都不撕破', scores: { strategy: 5, control: 4, empathy: 3 } },
      { id: 'd', text: '表面答应，暗中保旧约', scores: { strategy: 4, loyalty: 4, guard: 4 } }
    ]
  },
  {
    id: 'q28',
    type: 'scenario',
    text: '你发现真正危险不是敌人，而是身边的沉默。你会？',
    options: [
      { id: 'a', text: '主动点名沟通，把沉默拆开', scores: { control: 4, empathy: 4, principle: 4 } },
      { id: 'b', text: '先建立替代渠道，不再押单线', scores: { strategy: 5, guard: 5, control: 4 } },
      { id: 'c', text: '立刻清场，宁可误伤也要止险', scores: { ambition: 4, emotion: 4, guard: 4 } },
      { id: 'd', text: '保持表面平静，慢慢筛人', scores: { strategy: 4, control: 4, emotion: 1 } }
    ]
  },
  {
    id: 'q29',
    type: 'scenario',
    text: '你终于拿到位置，却发现代价是常年高压。你会？',
    options: [
      { id: 'a', text: '接受高压，权力本就带重量', scores: { ambition: 5, control: 4, emotion: 3 } },
      { id: 'b', text: '重设边界，不让位置吞掉自己', scores: { principle: 5, control: 5, emotion: 2 } },
      { id: 'c', text: '把权力分层，建立可替代结构', scores: { strategy: 5, control: 5, loyalty: 3 } },
      { id: 'd', text: '优先保住身边人的稳定感', scores: { empathy: 5, loyalty: 5, ambition: 1 } }
    ]
  },
  {
    id: 'q30',
    type: 'scenario',
    text: '若你必须用一句话定义你的宫中生存法则，你选？',
    options: [
      { id: 'a', text: '“先看局，再落子。”', scores: { strategy: 5, guard: 4, control: 4 } },
      { id: 'b', text: '“要赢，就别怕亮锋。”', scores: { ambition: 5, emotion: 4, control: 4 } },
      { id: 'c', text: '“可争可退，但底线不卖。”', scores: { principle: 5, loyalty: 4, emotion: 2 } },
      { id: 'd', text: '“人心先暖，局才走远。”', scores: { empathy: 5, loyalty: 5, ambition: 1 } }
    ]
  }
];
