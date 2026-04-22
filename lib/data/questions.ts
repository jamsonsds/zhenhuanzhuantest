import type { Question } from '../types';

export const QUESTIONS: Question[] = [
  {
    id: 'q1',
    type: 'scenario',
    text: '你初入宫，第一次去给高位嫔妃请安。席间有人故意略过你，不接你的话。你会：',
    options: [
      { id: 'a', text: '面上不显，先把这人的脾气和站位记下来', scores: { strategy: 3, guard: 1 } },
      { id: 'b', text: '当场补一句，至少不让自己太难看', scores: { control: 3, ambition: 1 } },
      { id: 'c', text: '告诉自己先忍一忍，来日方长', scores: { principle: 3, emotion: 1 } },
      { id: 'd', text: '心里发酸，回去会一直想自己是不是哪里做错了', scores: { emotion: 3, empathy: 1 } }
    ]
  },
  {
    id: 'q2',
    type: 'scenario',
    text: '你刚进宫不久，就有人私下提醒你：“在宫里，少说少错。”你更可能：',
    options: [
      { id: 'a', text: '表面应下，暗中照样观察每个人', scores: { strategy: 3, guard: 1 } },
      { id: 'b', text: '觉得她是好意，先记下这份情', scores: { loyalty: 3, empathy: 1 } },
      { id: 'c', text: '认为太过小心反而显得没气度', scores: { ambition: 3, control: 1 } },
      { id: 'd', text: '从这一刻起说话做事都收得更紧', scores: { guard: 3, principle: 1 } }
    ]
  },
  {
    id: 'q3',
    type: 'scenario',
    text: '一个和你差不多位分的人，表面同你亲近，转头却在别人面前学你说话。你会：',
    options: [
      { id: 'a', text: '装作不知道，再看看她到底想做什么', scores: { strategy: 3, guard: 1 } },
      { id: 'b', text: '私下问明白，不想让这种事再发生', scores: { principle: 3, control: 1 } },
      { id: 'c', text: '以后不再交心，但表面仍过得去', scores: { guard: 3, emotion: 1 } },
      { id: 'd', text: '你会很生气，甚至想找机会回敬她', scores: { emotion: 3, ambition: 1 } }
    ]
  },
  {
    id: 'q4',
    type: 'scenario',
    text: '你第一次得了赏赐，身边人都在看你反应。你更倾向于：',
    options: [
      { id: 'a', text: '不露太多喜色，免得惹人惦记', scores: { guard: 3, strategy: 1 } },
      { id: 'b', text: '该高兴就高兴，没必要处处缩着', scores: { ambition: 3, emotion: 1 } },
      { id: 'c', text: '先分一点出去，让身边人都舒服些', scores: { empathy: 3, loyalty: 1 } },
      { id: 'd', text: '会想，这赏赐背后是不是还有别的意思', scores: { strategy: 3, control: 1 } }
    ]
  },
  {
    id: 'q5',
    type: 'scenario',
    text: '你发现，有人总在你面前装作无意地提起另一个比你更得宠的人。你会：',
    options: [
      { id: 'a', text: '听着，不接这话', scores: { principle: 3, control: 1 } },
      { id: 'b', text: '心里不舒服，但不愿让人看出来', scores: { emotion: 3, guard: 1 } },
      { id: 'c', text: '你会忍不住比较，想知道自己差在哪', scores: { emotion: 3, ambition: 1 } },
      { id: 'd', text: '暗暗记下这人，以后多防一层', scores: { guard: 3, strategy: 1 } }
    ]
  },
  {
    id: 'q6',
    type: 'scenario',
    text: '宫里一位前辈对你释放善意，明显有意拉拢你。你会：',
    options: [
      { id: 'a', text: '先靠近，但不急着表忠心', scores: { strategy: 3, control: 1 } },
      { id: 'b', text: '若她待你真心，你也愿意站过去', scores: { loyalty: 3, empathy: 1 } },
      { id: 'c', text: '会先想，她图你什么', scores: { guard: 3, strategy: 1 } },
      { id: 'd', text: '不想过早站队，宁可先观望', scores: { principle: 3, guard: 1 } }
    ]
  },
  {
    id: 'q7',
    type: 'scenario',
    text: '你被安排和另一位小主一起办事，对方明显想把功劳都往自己身上揽。你会：',
    options: [
      { id: 'a', text: '先把事情做好，事后再留痕自保', scores: { strategy: 3, principle: 1 } },
      { id: 'b', text: '当下就把话挑明，不让她踩着你上去', scores: { control: 3, ambition: 1 } },
      { id: 'c', text: '觉得一次功劳没那么重要，不必撕破脸', scores: { empathy: 3, principle: 1 } },
      { id: 'd', text: '面上忍着，心里已经把这人划出去了', scores: { guard: 3, emotion: 1 } }
    ]
  },
  {
    id: 'q8',
    type: 'scenario',
    text: '你很信任的宫女忽然替别人说了一句话，像是在劝你别争。你会：',
    options: [
      { id: 'a', text: '先问她为什么这样说', scores: { control: 3, principle: 1 } },
      { id: 'b', text: '表面不问，先观察她最近接触了谁', scores: { guard: 3, strategy: 1 } },
      { id: 'c', text: '你会失落，觉得她是不是已经不站你这边了', scores: { emotion: 3, loyalty: 1 } },
      { id: 'd', text: '觉得她也许是为你好，未必要往坏处想', scores: { empathy: 3, loyalty: 1 } }
    ]
  },
  {
    id: 'q9',
    type: 'scenario',
    text: '有人当众夸你温顺懂事，但那语气分明带着轻视。你会：',
    options: [
      { id: 'a', text: '听懂了，但笑着接下', scores: { control: 3, principle: 1 } },
      { id: 'b', text: '回一句软中带刺的话', scores: { strategy: 3, emotion: 1 } },
      { id: 'c', text: '表面不说，之后会一直记着', scores: { emotion: 3, guard: 1 } },
      { id: 'd', text: '会反思是不是自己真的显得太弱了', scores: { emotion: 3, empathy: 1 } }
    ]
  },
  {
    id: 'q10',
    type: 'scenario',
    text: '你第一次意识到，在宫里“被看见”本身就是一种位置。你更会：',
    options: [
      { id: 'a', text: '学着把握时机，让自己适时出现', scores: { control: 3, strategy: 1 } },
      { id: 'b', text: '觉得顺其自然，不必太刻意', scores: { principle: 3, empathy: 1 } },
      { id: 'c', text: '心里会有一点不甘，想往前走一步', scores: { ambition: 3, emotion: 1 } },
      { id: 'd', text: '更在意是不是有人真心待你，而不只是看见你', scores: { loyalty: 3, empathy: 1 } }
    ]
  },
  {
    id: 'q11',
    type: 'scenario',
    text: '你发现，一位原本对你不错的人，近来开始疏远你。你会：',
    options: [
      { id: 'a', text: '先想清楚是不是局势变了', scores: { strategy: 3, control: 1 } },
      { id: 'b', text: '会失落，但不愿主动去问', scores: { emotion: 3, principle: 1 } },
      { id: 'c', text: '你想问个明白，不喜欢这样不清不楚', scores: { control: 3, emotion: 1 } },
      { id: 'd', text: '会默默把心收回来，以后少交底', scores: { guard: 3, principle: 1 } }
    ]
  },
  {
    id: 'q12',
    type: 'scenario',
    text: '有个能让你往上走一步的机会，但你知道接了就会得罪一些人。你会：',
    options: [
      { id: 'a', text: '接，机会难得', scores: { ambition: 3, control: 1 } },
      { id: 'b', text: '先算清代价值不值得', scores: { strategy: 3, principle: 1 } },
      { id: 'c', text: '不接，不想因此失了分寸', scores: { principle: 3, loyalty: 1 } },
      { id: 'd', text: '很想接，但会担心以后的人情账', scores: { empathy: 3, ambition: 1 } }
    ]
  },
  {
    id: 'q13',
    type: 'scenario',
    text: '你无意中知道，一位与你交好的小主，其实背后说过你的短处。你会：',
    options: [
      { id: 'a', text: '不惊动她，先看她到底要走到哪一步', scores: { strategy: 3, guard: 1 } },
      { id: 'b', text: '以后还能来往，但不会再交心', scores: { guard: 3, principle: 1 } },
      { id: 'c', text: '直接冷下来，这种情分不要也罢', scores: { principle: 3, emotion: 1 } },
      { id: 'd', text: '会难过很久，甚至比生气更多', scores: { emotion: 3, loyalty: 1 } }
    ]
  },
  {
    id: 'q14',
    type: 'scenario',
    text: '你发现自己喜欢上了一个本不该太靠近的人。你会：',
    options: [
      { id: 'a', text: '尽量压住，不让这份心思露出来', scores: { principle: 3, control: 1 } },
      { id: 'b', text: '觉得喜欢本就难得，不想太快放弃', scores: { emotion: 3, loyalty: 1 } },
      { id: 'c', text: '会先想，这份感情会不会害到自己', scores: { strategy: 3, guard: 1 } },
      { id: 'd', text: '若对方真心，你愿意为此冒一点险', scores: { loyalty: 3, emotion: 1 } }
    ]
  },
  {
    id: 'q15',
    type: 'scenario',
    text: '你被人拿来和另一位更受宠的小主比较。你第一反应更像：',
    options: [
      { id: 'a', text: '表面不动，心里已经开始衡量差距', scores: { strategy: 3, ambition: 1 } },
      { id: 'b', text: '你会不服，觉得自己未必不如她', scores: { ambition: 3, emotion: 1 } },
      { id: 'c', text: '很难过，会怀疑自己是不是本就不够好', scores: { emotion: 3, empathy: 1 } },
      { id: 'd', text: '觉得比较本身就没意思，不想跟着起伏', scores: { principle: 3, control: 1 } }
    ]
  },
  {
    id: 'q16',
    type: 'scenario',
    text: '有人劝你：“在宫里，真心不能给太满。”你更可能：',
    options: [
      { id: 'a', text: '认同，真心要留给值得的人', scores: { loyalty: 3, guard: 1 } },
      { id: 'b', text: '表面认同，但心里还是想赌一次真心', scores: { emotion: 3, loyalty: 1 } },
      { id: 'c', text: '不喜欢这种说法，觉得人不能活得太冷', scores: { empathy: 3, principle: 1 } },
      { id: 'd', text: '你其实早就这么做了', scores: { guard: 3, strategy: 1 } }
    ]
  },
  {
    id: 'q17',
    type: 'scenario',
    text: '你受了委屈，但眼下发作对你没有好处。你会：',
    options: [
      { id: 'a', text: '忍下，等更合适的时候再还回去', scores: { strategy: 3, control: 1 } },
      { id: 'b', text: '你可以不闹，但一定要让对方知道你记住了', scores: { control: 3, emotion: 1 } },
      { id: 'c', text: '会逼自己算了，不想让委屈把自己困住', scores: { principle: 3, empathy: 1 } },
      { id: 'd', text: '面上过得去，心里其实很难放下', scores: { emotion: 3, loyalty: 1 } }
    ]
  },
  {
    id: 'q18',
    type: 'scenario',
    text: '一位高位人物突然对你格外和气，身边人都提醒你小心。你会：',
    options: [
      { id: 'a', text: '接住这份和气，但不放松警惕', scores: { guard: 3, control: 1 } },
      { id: 'b', text: '既然是机会，就先顺势走一步', scores: { ambition: 3, strategy: 1 } },
      { id: 'c', text: '更想知道她为什么忽然看中你', scores: { strategy: 3, guard: 1 } },
      { id: 'd', text: '你会紧张，怕自己应对不好', scores: { emotion: 3, empathy: 1 } }
    ]
  },
  {
    id: 'q19',
    type: 'scenario',
    text: '你身边最亲近的人劝你别再争了，说再争会伤到自己。你会：',
    options: [
      { id: 'a', text: '听进去一点，但不会完全照做', scores: { control: 3, loyalty: 1 } },
      { id: 'b', text: '你若决定了，就不会轻易回头', scores: { ambition: 3, principle: 1 } },
      { id: 'c', text: '会因为她的话认真动摇', scores: { empathy: 3, emotion: 1 } },
      { id: 'd', text: '你想的不是争不争，而是值不值得争', scores: { strategy: 3, principle: 1 } }
    ]
  },
  {
    id: 'q20',
    type: 'scenario',
    text: '你第一次尝到“被偏爱”的滋味，也开始明显感到别人对你的眼神变了。你会：',
    options: [
      { id: 'a', text: '更小心，不想让自己太扎眼', scores: { guard: 3, principle: 1 } },
      { id: 'b', text: '会享受这份被看重，不想假装无所谓', scores: { ambition: 3, emotion: 1 } },
      { id: 'c', text: '表面稳住，心里已经在想之后怎么办', scores: { strategy: 3, control: 1 } },
      { id: 'd', text: '会担心自己是不是因此失去一些真心朋友', scores: { empathy: 3, loyalty: 1 } }
    ]
  },
  {
    id: 'q21',
    type: 'scenario',
    text: '你发现，和你交好的两拨人彼此不对付，都希望你站自己这边。你会：',
    options: [
      { id: 'a', text: '暂时都不站，先看谁更值得', scores: { strategy: 3, guard: 1 } },
      { id: 'b', text: '站更讲情分的那一边', scores: { loyalty: 3, empathy: 1 } },
      { id: 'c', text: '站更有利于你今后位置的那一边', scores: { ambition: 3, control: 1 } },
      { id: 'd', text: '表面两边都过得去，尽量不把路走死', scores: { control: 3, strategy: 1 } }
    ]
  },
  {
    id: 'q22',
    type: 'scenario',
    text: '你看出一位前辈其实并不喜欢你，只是碍于场面不能明说。你会：',
    options: [
      { id: 'a', text: '更收敛，不给她挑你的机会', scores: { principle: 3, guard: 1 } },
      { id: 'b', text: '你也不会再主动贴上去', scores: { control: 3, principle: 1 } },
      { id: 'c', text: '表面照旧，心里已经开始防她', scores: { guard: 3, strategy: 1 } },
      { id: 'd', text: '会不甘，想找机会让她重新看你', scores: { ambition: 3, emotion: 1 } }
    ]
  },
  {
    id: 'q23',
    type: 'scenario',
    text: '有人把过错推到你头上，若你不辩解，就会吃这个亏。你会：',
    options: [
      { id: 'a', text: '立刻解释清楚，不想背这口锅', scores: { control: 3, principle: 1 } },
      { id: 'b', text: '先稳住场面，再找最有效的人说清楚', scores: { strategy: 3, control: 1 } },
      { id: 'c', text: '你会解释，但也会记住是谁推了你一把', scores: { emotion: 3, guard: 1 } },
      { id: 'd', text: '觉得眼下解释未必有用，不如以后补回来', scores: { strategy: 3, emotion: 1 } }
    ]
  },
  {
    id: 'q24',
    type: 'scenario',
    text: '你发现自己越往前走，越难像从前那样轻易相信别人。你会：',
    options: [
      { id: 'a', text: '觉得这是代价，没什么可抱怨的', scores: { principle: 3, strategy: 1 } },
      { id: 'b', text: '心里有点难过，但仍觉得值得', scores: { ambition: 3, emotion: 1 } },
      { id: 'c', text: '会强迫自己留一点真心，不想变得太冷', scores: { empathy: 3, loyalty: 1 } },
      { id: 'd', text: '你反而觉得这样更安全', scores: { guard: 3, control: 1 } }
    ]
  },
  {
    id: 'q25',
    type: 'scenario',
    text: '一个你曾帮过的人，在关键时刻没有替你说话。你更像：',
    options: [
      { id: 'a', text: '当下就知道，这份情以后得重新算', scores: { guard: 3, strategy: 1 } },
      { id: 'b', text: '先替她找理由，也许她有不得已', scores: { empathy: 3, loyalty: 1 } },
      { id: 'c', text: '会失望，但不想立刻翻脸', scores: { emotion: 3, principle: 1 } },
      { id: 'd', text: '从此不再对这种人抱希望', scores: { principle: 3, control: 1 } }
    ]
  },
  {
    id: 'q26',
    type: 'scenario',
    text: '你终于有机会把曾经受过的一口气还回去。你会：',
    options: [
      { id: 'a', text: '出手，但会做得很体面', scores: { control: 3, principle: 1 } },
      { id: 'b', text: '只要能还回去，方式不重要', scores: { emotion: 3, ambition: 1 } },
      { id: 'c', text: '会犹豫，怕自己因此变成不喜欢的样子', scores: { principle: 3, empathy: 1 } },
      { id: 'd', text: '你可能还是忍下来，觉得翻旧账没意思', scores: { empathy: 3, loyalty: 1 } }
    ]
  },
  {
    id: 'q27',
    type: 'scenario',
    text: '你逐渐明白，在宫里“规矩”有时是保护，有时也是束缚。你更会：',
    options: [
      { id: 'a', text: '学会利用规矩保护自己', scores: { strategy: 3, principle: 1 } },
      { id: 'b', text: '不太喜欢这一套，但必要时也会遵守', scores: { empathy: 3, control: 1 } },
      { id: 'c', text: '你很看重规矩，因为那是底线', scores: { principle: 3, loyalty: 1 } },
      { id: 'd', text: '你更在意结果，规矩只是手段之一', scores: { ambition: 3, control: 1 } }
    ]
  },
  {
    id: 'q28',
    type: 'scenario',
    text: '若你发现，自己最亲近的人和你并不是一路人，你会：',
    options: [
      { id: 'a', text: '仍珍惜旧情，但不再强求', scores: { loyalty: 3, principle: 1 } },
      { id: 'b', text: '会痛，但不会轻易放手', scores: { emotion: 3, loyalty: 1 } },
      { id: 'c', text: '你会慢慢退开，让彼此都体面些', scores: { principle: 3, control: 1 } },
      { id: 'd', text: '若早知如此，不如从一开始就别靠近', scores: { guard: 3, emotion: 1 } }
    ]
  },
  {
    id: 'q29',
    type: 'scenario',
    text: '你意识到，想在宫里站稳，单靠真心是不够的。你会：',
    options: [
      { id: 'a', text: '学着更会看人、看局、看时机', scores: { strategy: 3, control: 1 } },
      { id: 'b', text: '仍想保住一点不那么复杂的自己', scores: { principle: 3, empathy: 1 } },
      { id: 'c', text: '你会变得更想往上走，因为站稳才有余地', scores: { ambition: 3, control: 1 } },
      { id: 'd', text: '你其实很抗拒这种变化', scores: { emotion: 3, loyalty: 1 } }
    ]
  },
  {
    id: 'q30',
    type: 'scenario',
    text: '若你已经看清，这宫里很多情分都未必靠得住，你最后更愿意：',
    options: [
      { id: 'a', text: '让自己变得更会筹谋，至少不输', scores: { strategy: 3, control: 1 } },
      { id: 'b', text: '守住底线，不让自己变得太难看', scores: { principle: 3, loyalty: 1 } },
      { id: 'c', text: '仍给值得的人留一点真心', scores: { loyalty: 3, empathy: 1 } },
      { id: 'd', text: '只要能站稳位置，其他都可以往后放', scores: { ambition: 3, control: 1 } }
    ]
  }
];
