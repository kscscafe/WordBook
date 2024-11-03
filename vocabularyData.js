const vocabularyLists = {
    hsk1: [
        {no: 1, sentence: "爸爸今天不在家", pinyin: " Bà ba jīn tiān bú zài jiā", audioFileName: "HSK1_01",
colors: {yellow: [4], pink: [0,5]}},
{no:2, sentence: "妈妈在上班", pinyin: " Mā ma zài shàng bān", audioFileName: "HSK1_02",
colors: {pink: [2,3]}},
{no:3, sentence: "你儿子今年几岁了？", pinyin: " Nǐ ér zi jīn nián jǐ suì le", audioFileName: "HSK1_03",
colors: {yellow: [0,1,4], blue: [5], pink: [6]}},
{no:4, sentence: "我女儿在北京上大学", pinyin: " Wǒ nǚ ér zài Běi jīng shàng dà xué", audioFileName: "HSK1_04",
colors: {
yellow: [0,2,8],
blue: [1,4],
pink: [3,6,7]
} },
{no:5, sentence: "老師，你会说日语吗？", pinyin: " Lǎo shī, nǐ huì shuō Rì yǔ ma", audioFileName: "HSK1_05",
colors: {
blue: [0,3,7],
pink: [4,6]
} },
{no:6, sentence: "学生应该好好学习", pinyin: " Xué sheng yīng gāi hǎo hāo xué xí", audioFileName: "HSK1_06",
colors: {
yellow: [0,6,7],
blue: [4]
} },
{no:7, sentence: "小王是我同学", pinyin: " Xiǎo Wáng shì wǒ tóng xué ", audioFileName: "HSK1_07",
colors: {
yellow: [1,4,5],
blue: [0,3],
pink: [2]
} },
{no:8, sentence: "这是我朋友送我的礼物", pinyin: " Zhè shì wǒ péng you sòng wǒ de lǐ wù", audioFileName: "HSK1_08",
colors: {
yellow: [3],
blue: [2,6,8],
pink: [0,1,5,9]
} },
{no:9, sentence: "我爸爸是医生", pinyin: " Wǒ bà ba shì yī shēng", audioFileName: "HSK1_09",
colors: {
blue: [0],
pink: [1,3]
} },
{no:10, sentence: "先生，您的钱包丢了", pinyin: " Xiān sheng, nín de qián bāo diū le", audioFileName: "HSK1_10",
colors: {
yellow: [3,5]
} },
{no:11, sentence: "您好，陈女士！", pinyin: " Nín hǎo, Chén nǚ shì", audioFileName: "HSK1_11",
colors: {
yellow: [0,3],
blue: [1,4],
pink: [5]
} },
{no:12, sentence: "我是日本人", pinyin: " Wǒ shì Rì běn rén", audioFileName: "HSK1_12",
colors: {
yellow: [4],
blue: [0,3],
pink: [1,2]
} },
{no:13, sentence: "今天放假", pinyin: " Jīn tiān fàng jià", audioFileName: "HSK1_13",
colors: {
pink: [2,3]
} },
{no:14, sentence: "明天是晴天", pinyin: " Míng tiān shì qíng tiān", audioFileName: "HSK1_14",
colors: {
yellow: [0,3],
pink: [2]
} },
{no:15, sentence: "昨天下雨了", pinyin: " Zuó tiān xià yǔ le", audioFileName: "HSK1_15",
colors: {
yellow: [0],
blue: [3],
pink: [2]
} },
{no:16, sentence: "这是上午的课", pinyin: " Zhè shì shàng wǔ de kè", audioFileName: "HSK1_16",
colors: {
blue: [3],
pink: [0,1,2,5]
} },
{no:17, sentence: "现在是中午12点", pinyin: " Xiàn zài shì zhōng wǔ shí èr diǎn", audioFileName: "HSK1_17",
colors: {
yellow: [5],
blue: [4,7],
pink: [0,1,2,6]
} },
{no:18, sentence: "我下午有空", pinyin: " Wǒ xià wǔ yǒu kòng", audioFileName: "HSK1_18",
colors: {
blue: [0,2,3],
pink: [1,4]
} },
{no:19, sentence: "今年是2022年", pinyin: " Jīn nián shì èr líng èr èr nián", audioFileName: "HSK1_19",
colors: {
yellow: [1,4,7],
pink: [2,3,5,6]
} },
{no:20, sentence: "10月1日是中国的国庆节", pinyin: " Shí yuè yī rì shì Zhōng guó de Guó qìng jié", audioFileName: "HSK1_20",
colors: {
yellow: [0,1,7,9,11],
pink: [2,4,5,10]
} },
{no:21, sentence: "12月1日是我的生日", pinyin: " Shí èr yuè yī rì shì wǒ de shēng rì", audioFileName: "HSK1_21",
colors: {
yellow: [0],
blue: [6],
pink: [1,2,4,5,9]
} },
{no:22, sentence: "今天是10月15号", pinyin: " Jīn tiān shì shí yuè shí wǔ hào", audioFileName: "HSK1_22",
colors: {
yellow: [3,4,6],
blue: [7],
pink: [2,5,8]
} },
{no:23, sentence: "明天是星期六", pinyin: " Míng tiān shì xīng qī liù", audioFileName: "HSK1_23",
colors: {
yellow: [0],
pink: [2,5]
} },
{no:24, sentence: "几点了？", pinyin: " Jǐ diǎn le", audioFileName: "HSK1_24",
colors: {
yellow: [0],
blue: [1]
} },
{no:25, sentence: "现在下午3点了", pinyin: " Xiàn zài xià wǔ sān diǎn le", audioFileName: "HSK1_25",
colors: {
blue: [3,5],
pink: [0,1,2]
} },
{no:26, sentence: "我小時候最喜欢游泳", pinyin: " Wǒ xiǎo shí hou zuì xǐ huan yóu yǒng", audioFileName: "HSK1_26",
colors: {
yellow: [0,2,7],
blue: [1,5,8],
pink: [4]
} },
{no:27, sentence: "今天天气很好", pinyin: " Jīn tiān tiān qì hěn hǎo", audioFileName: "HSK1_27",
colors: {
blue: [4,5],
pink: [3]
} },
{no:28, sentence: "这是小明的东西", pinyin: " Zhè shì xiǎo Míng de dōng xi", audioFileName: "HSK1_28",
colors: {
yellow: [3],
blue: [2],
pink: [0,1]
} },
{no:29, sentence: "你的衣服真好看", pinyin: " Nǐ de yī fu zhēn hǎo kàn", audioFileName: "HSK1_29",
colors: {
blue: [0,5],
pink: [6]
} },
{no:30, sentence: "我不喜欢看书", pinyin: " Wǒ bù xǐ huan kàn shū", audioFileName: "HSK1_30",
colors: {
blue: [0,2],
pink: [1,4]
} },
{no:31, sentence: "我忘记这个字怎么写了", pinyin: " Wǒ wàng jì zhè ge zì zěn me xiě le", audioFileName: "HSK1_31",
colors: {
blue: [0,6,8],
pink: [1,2,3,5]
} },
{no:32, sentence: "我的名字是李小明", pinyin: " Wǒ de míng zi shì Lǐ Xiǎo míng", audioFileName: "HSK1_32",
colors: {
yellow: [2,7],
blue: [0,5,6],
pink: [4]
} },
{no:33, sentence: "你想喝水吗？", pinyin: " Nǐ xiǎng hē shuǐ ma", audioFileName: "HSK1_33",
colors: {
yellow: [0],
blue: [1,3]
} },
{no:34, sentence: "请喝茶", pinyin: " Qǐng hē chá", audioFileName: "HSK1_34",
colors: {
yellow: [2],
blue: [0]
} },
{no:35, sentence: "用这个杯子喝茶吧", pinyin: " Yòng zhè ge bēi zi hē chá ba", audioFileName: "HSK1_35",
colors: {
yellow: [6],
pink: [0,1]
} },
{no:36, sentence: "你喜欢吃什么菜？", pinyin: " Nǐ xǐ huan chī shén me cài", audioFileName: "HSK1_36",
colors: {
yellow: [0,4],
blue: [1],
pink: [6]
} },
{no:37, sentence: "你喜欢面条还是米饭？", pinyin: " Nǐ xǐ huan miàn tiáo hái shi mǐ fàn", audioFileName: "HSK1_37",
colors: {
yellow: [0,4,5],
blue: [1,7],
pink: [3,8]
} },
{no:38, sentence: "饭后吃一点水果吧", pinyin: " Fàn hòu chī yì diǎn shuǐ guǒ ba", audioFileName: "HSK1_38",
colors: {
yellow: [5],
blue: [4,6],
pink: [0,1,3]
} },
{no:39, sentence: "苹果很好吃", pinyin: " Píng guǒ hěn hǎo chī", audioFileName: "HSK1_39",
colors: {
yellow: [0,2],
blue: [1,3]
} },
{no:40, sentence: "桌子上有一本书", pinyin: " Zhuō zi shang yǒu yì běn shū", audioFileName: "HSK1_40",
colors: {
blue: [3,5],
pink: [4]
} },
{no:41, sentence: "椅子在桌子的前面", pinyin: " Yǐ zi zài zhuō zi de qián miàn", audioFileName: "HSK1_41",
colors: {
yellow: [6],
blue: [0],
pink: [2,7]
} },
{no:42, sentence: "这个多少钱？", pinyin: " Zhè ge duō shao qián", audioFileName: "HSK1_42",
colors: {
yellow: [4],
pink: [0]
} },
{no:43, sentence: "狗在椅子的下面", pinyin: " Gǒu zài yǐ zi de xià miàn", audioFileName: "HSK1_43",
colors: {
blue: [0,2],
pink: [1,5,6]
} },
{no:44, sentence: "猫喜欢和狗打架", pinyin: " Māo xǐ huan hé gǒu dǎ jià", audioFileName: "HSK1_44",
colors: {
yellow: [3],
blue: [1,4,5],
pink: [6]
} },
{no:45, sentence: "我是坐飞机来上海的", pinyin: " Wǒ shì zuò fēi jī lái Shàng hǎi de", audioFileName: "HSK1_45",
colors: {
yellow: [5],
blue: [0,7],
pink: [1,2,6]
} },
{no:46, sentence: "我想坐出租車回家", pinyin: " Wǒ xiǎng zuò chū zū chē huí jiā", audioFileName: "HSK1_46",
colors: {
yellow: [0,6],
blue: [1],
pink: [2]
} },
{no:47, sentence: "爸爸在看电视", pinyin: " Bà ba zài kàn diàn shì", audioFileName: "HSK1_47",
colors: {
pink: [0,2,3,4,5]
} },
{no:48, sentence: "小明在玩电脑", pinyin: " Xiǎo Míng zài wán diàn nǎo", audioFileName: "HSK1_48",
colors: {
yellow: [1,3],
blue: [0,5],
pink: [2,4]
} },
{no:49, sentence: "我昨天和朋友去看电影了", pinyin: " Wǒ zuó tiān hé péng you qù kàn diàn yǐng le", audioFileName: "HSK1_49",
colors: {
yellow: [1,3,4],
blue: [0,9],
pink: [6,7,8]
} },
{no:50, sentence: "我在家写作业", pinyin: " Wǒ zài jiā xiě zuò yè", audioFileName: "HSK1_50",
colors: {
blue: [0,3],
pink: [1,4,5]
} },
{no:51, sentence: "学校今天放假", pinyin: " Xué xiào jīn tiān fàng jià", audioFileName: "HSK1_51",
colors: {
yellow: [0],
pink: [1,4,5]
} },
{no:52, sentence: "这个饭店做的菜很好吃", pinyin: " Zhè ge fàn diàn zuò de cài hěn hǎo chī", audioFileName: "HSK1_52",
colors: {
yellow: [7],
blue: [8],
pink: [0,2,3,4,6]
} },
{no:53, sentence: "这个商店卖的东西很多", pinyin: " Zhè ge shāng diàn mài de dōng xi hěn duō", audioFileName: "HSK1_53",
colors: {
blue: [8],
pink: [0,3,4]
} },
{no:54, sentence: "明天我要去医院", pinyin: " Míng tiān wǒ yào qù yī yuàn", audioFileName: "HSK1_54",
colors: {
yellow: [0],
blue: [2],
pink: [3,4,6]
} },
{no:55, sentence: "车站就在医院旁边", pinyin: " Chē zhàn jiù zài yī yuàn páng biān", audioFileName: "HSK1_55",
colors: {
yellow: [6],
pink: [1,2,3,5]
} },
{no:56, sentence: "中国在日本的西边", pinyin: " Zhōng guó zài Rì běn de xī biān", audioFileName: "HSK1_56",
colors: {
yellow: [1],
blue: [4],
pink: [2,3]
} },
{no:57, sentence: "日本离中国很近", pinyin: " Rì běn lí Zhōng guó hěn jìn", audioFileName: "HSK1_57",
colors: {
yellow: [2,4],
blue: [1,5],
pink: [0,6]
} },
{no:58, sentence: "你是怎么来北京的？", pinyin: " Nǐ shì zěn me lái Běi jīng de", audioFileName: "HSK1_58",
colors: {
yellow: [4],
blue: [0,2,5],
pink: [1]
} },
{no:59, sentence: "你会说汉语吗？", pinyin: " Nǐ huì shuō Hàn yǔ ma", audioFileName: "HSK1_59",
colors: {
blue: [0,4],
pink: [1,3]
} },
{no:60, sentence: "椅子上有一只猫", pinyin: " Yǐ zi shang yǒu yì zhī māo", audioFileName: "HSK1_60",
colors: {
blue: [0,3],
pink: [4]
} },
{no:61, sentence: "我在楼下等你", pinyin: " Wǒ zài lóu xià děng nǐ", audioFileName: "HSK1_61",
colors: {
yellow: [2],
blue: [0,4,5],
pink: [1,3]
} },
{no:62, sentence: "前面有一个饭店", pinyin: " Qián miàn yǒu yí ge fàn diàn", audioFileName: "HSK1_62",
colors: {
yellow: [0,3],
blue: [2],
pink: [1,5,6]
} },
{no:63, sentence: "饭店在学校的后面", pinyin: " Fàn diàn zài xué xiào de hòu miàn", audioFileName: "HSK1_63",
colors: {
yellow: [3],
pink: [0,1,2,4,6,7]
} },
{no:64, sentence: "商店里有很多文具", pinyin: " Shāng diàn li yǒu hěn duō wén jù", audioFileName: "HSK1_64",
colors: {
yellow: [6],
blue: [3,4],
pink: [1,7]
} },
{no:65, sentence: "我最近身体不太好", pinyin: " Wǒ zuì jìn shēn tǐ bú tài hǎo", audioFileName: "HSK1_65",
colors: {
yellow: [5],
blue: [0,4,7],
pink: [1,2,6]
} },
{no:66, sentence: "我们一起去吃饭吧？", pinyin: " Wǒ men yì qǐ qù chī fàn ba", audioFileName: "HSK1_66",
colors: {
blue: [0,3],
pink: [2,4,6]
} },
{no:67, sentence: "你什么时候回北京？", pinyin: " Nǐ shén me shí hou huí Běi jīng", audioFileName: "HSK1_67",
colors: {
yellow: [1,3,5],
blue: [0,6]
} },
{no:68, sentence: "你们一起回来吗？", pinyin: " Nǐ men yì qǐ huí lái ma", audioFileName: "HSK1_68",
colors: {
yellow: [4,5],
blue: [0,3],
pink: [2]
} },
{no:69, sentence: "他不回北京了？", pinyin: " Tā bù huí Běi jīng le", audioFileName: "HSK1_69",
colors: {
yellow: [2],
blue: [3],
pink: [1]
} },
{no:70, sentence: "她跟我一起回来", pinyin: " Tā gēn wǒ yì qǐ huí lái", audioFileName: "HSK1_70",
colors: {
yellow: [5,6],
blue: [2,4],
pink: [3]
} },
{no:71, sentence: "他们想去上海旅游", pinyin: " Tā men xiǎng qù Shàng hǎi lǚ yóu", audioFileName: "HSK1_71",
colors: {
yellow: [7],
blue: [2,5,6],
pink: [3,4]
} },
{no:72, sentence: "她们不想坐飞机去上海", pinyin: " Tā men bù xiǎng zuò fēi jī qù Shàng hǎi", audioFileName: "HSK1_72",
colors: {
blue: [3,9],
pink: [2,4,7,8]
} },
{no:73, sentence: "谁都不在家", pinyin: " Shéi dōu bú zài jiā", audioFileName: "HSK1_73",
colors: {
yellow: [0,2],
pink: [3]
} },
{no:74, sentence: "这是我的猫", pinyin: " Zhè shì wǒ de māo", audioFileName: "HSK1_74",
colors: {
blue: [2],
pink: [0,1]
} },
{no:75, sentence: "那是我的书包", pinyin: " Nà shì wǒ de shū bāo", audioFileName: "HSK1_75",
colors: {
blue: [2],
pink: [0,1]
} },
{no:76, sentence: "他去哪了？", pinyin: " Tā qù nǎ le", audioFileName: "HSK1_76",
colors: {
blue: [2],
pink: [1]
} },
{no:77, sentence: "这儿是学校", pinyin: " Zhèr shì xué xiào", audioFileName: "HSK1_77",
colors: {
yellow: [3],
pink: [0,1,2,4]
} },
{no:78, sentence: "那儿是医院", pinyin: " Nàr shì yī yuàn", audioFileName: "HSK1_78",
colors: {
pink: [0,1,2,4]
} },
{no:79, sentence: "车站在哪儿？", pinyin: " Chē zhàn zài nǎr", audioFileName: "HSK1_79",
colors: {
blue: [3,4],
pink: [1,2]
} },
{no:80, sentence: "你爸爸叫什么名字？", pinyin: " Nǐ bà ba jiào shén me míng zi", audioFileName: "HSK1_80",
colors: {
yellow: [4,6],
blue: [0],
pink: [1,3]
} },
{no:81, sentence: "你家有几口人？", pinyin: " Nǐ jiā yǒu jǐ kǒu rén", audioFileName: "HSK1_81",
colors: {
yellow: [3,5],
blue: [0,2,4]
} },
{no:82, sentence: "这些苹果多少钱？", pinyin: " Zhè xiē píng guǒ duō shao qián", audioFileName: "HSK1_82",
colors: {
yellow: [2,6],
blue: [3],
pink: [0]
} },
{no:83, sentence: "这是怎么回事？", pinyin: " Zhè shì zěn me huí shì", audioFileName: "HSK1_83",
colors: {
yellow: [4],
blue: [2],
pink: [0,1,5]
} },
{no:84, sentence: "今天天气怎么样？", pinyin: " Jīn tiān tiān qì zěn me yàng", audioFileName: "HSK1_84",
colors: {
blue: [4],
pink: [3,6]
} },
{no:85, sentence: "我是北京大学的学生", pinyin: " Wǒ shì Běi jīng Dà xué de xué sheng", audioFileName: "HSK1_85",
colors: {
yellow: [5,7],
blue: [0,2],
pink: [1,4]
} },
{no:86, sentence: "我有一只猫", pinyin: " Wǒ yǒu yì zhī māo", audioFileName: "HSK1_86",
colors: {
yellow: [0],
blue: [1],
pink: [2]
} },
{no:87, sentence: "我不会做菜", pinyin: " Wǒ bú huì zuò cài", audioFileName: "HSK1_87",
colors: {
yellow: [1],
blue: [0],
pink: [2,3,4]
} },
{no:88, sentence: "我喜欢看电视", pinyin: " Wǒ xǐ huan kàn diàn shì", audioFileName: "HSK1_88",
colors: {
yellow: [0],
blue: [1],
pink: [3,4,5]
} },
{no:89, sentence: "我喜欢听英文歌", pinyin: " Wǒ xǐ huan tīng Yīng wén gē", audioFileName: "HSK1_89",
colors: {
yellow: [0,5],
blue: [1]
} },
{no:90, sentence: "小明，你会说英语吗？", pinyin: " Xiǎo Míng, nǐ huì shuō Yīng yǔ ma", audioFileName: "HSK1_90",
colors: {
yellow: [1],
blue: [0,3,7],
pink: [4]
} },
{no:91, sentence: "读书是很重要的", pinyin: " Dú shū shì hěn zhòng yào de", audioFileName: "HSK1_91",
colors: {
yellow: [0],
blue: [3],
pink: [2,4,5]
} },
{no:92, sentence: "我每天都会写日记", pinyin: " Wǒ měi tiān dōu huì xiě rì jì", audioFileName: "HSK1_92",
colors: {
yellow: [0],
blue: [1,5],
pink: [4,6,7]
} },
{no:93, sentence: "我在公园看見他了", pinyin: " Wǒ zài gōng yuán kàn jiàn tā le", audioFileName: "HSK1_93",
colors: {
yellow: [3],
blue: [0],
pink: [1,4,5]
} },
{no:94, sentence: "我叫李言", pinyin: " Wǒ jiào Lǐ Yán", audioFileName: "HSK1_94",
colors: {
yellow: [3],
blue: [0,2],
pink: [1]
} },
{no:95, sentence: "我来了", pinyin: " Wǒ lái le", audioFileName: "HSK1_95",
colors: {
yellow: [1],
blue: [0]
} },
{no:96, sentence: "她去上班了", pinyin: " Tā qù shàng bān le", audioFileName: "HSK1_96",
colors: {
pink: [1,2]
} },
{no:97, sentence: "我明年就回日本了", pinyin: " Wǒ míng nián jiù huí Rì běn le", audioFileName: "HSK1_97",
colors: {
yellow: [1,2,4],
blue: [0,6],
pink: [3,5]
} },
{no:98, sentence: "你喜欢吃青菜吗？", pinyin: " Nǐ xǐ huan chī qīng cài ma", audioFileName: "HSK1_98",
colors: {
yellow: [0],
blue: [1],
pink: [5]
} },
{no:99, sentence: "喝点什么好呢？", pinyin: " Hē diǎn shén me hǎo ne", audioFileName: "HSK1_99",
colors: {
yellow: [2],
blue: [1,4]
} },
{no:100, sentence: "我昨天刚买了一本书", pinyin: " Wǒ zuó tiān gāng mǎi le yì běn shū", audioFileName: "HSK1_100",
colors: {
yellow: [1],
blue: [0,4,7],
pink: [6]
} },
{no:101, sentence: "可以帮我开一下灯吗？", pinyin: " Kě yǐ bāng wǒ kāi yí xià dēng ma", audioFileName: "HSK1_101",
colors: {
yellow: [0,5],
blue: [1,3],
pink: [6]
} },
{no:102, sentence: "请坐", pinyin: " Qǐng zuò", audioFileName: "HSK1_102",
colors: {
blue: [0],
pink: [1]
} },
{no:103, sentence: "我住在这儿", pinyin: " Wǒ zhù zài zhèr", audioFileName: "HSK1_103",
colors: {
blue: [0],
pink: [1,2,3,4,]
} },
{no:104, sentence: "小明在房间学习呢", pinyin: " Xiǎo Míng zài fáng jiān xué xí ne", audioFileName: "HSK1_104",
colors: {
yellow: [1,3,5,6],
blue: [0],
pink: [2]
} },
{no:105, sentence: "妈妈工作很辛苦", pinyin: " Mā ma gōng zuò hěn xīn kǔ", audioFileName: "HSK1_105",
colors: {
blue: [4,6],
pink: [3]
} },
{no:106, sentence: "我去给他打电话", pinyin: " Wǒ qù gěi tā dǎ diàn huà", audioFileName: "HSK1_106",
colors: {
blue: [0,2,4],
pink: [1,5,6]
} },
{no:107, sentence: "很晚了，睡觉吧", pinyin: " Hěn wǎn le, shuì jiào ba", audioFileName: "HSK1_107",
colors: {
yellow: [0],
blue: [1],
pink: [4,5]
} },
{no:108, sentence: "怎么又下雨啊？", pinyin: " Zěn me yòu xià yǔ a", audioFileName: "HSK1_108",
colors: {
blue: [0,4],
pink: [2,3]
} },
{no:109, sentence: "我爱学习", pinyin: " Wǒ ài xué xí", audioFileName: "HSK1_109",
colors: {
yellow: [2,3],
blue: [0],
pink: [1]
} },
{no:110, sentence: "我也喜欢打游戏", pinyin: " Wǒ yě xǐ huan dǎ yóu xì", audioFileName: "HSK1_110",
colors: {
yellow: [5],
blue: [0,1,2,4],
pink: [6]
} },
{no:111, sentence: "我想家了", pinyin: " Wǒ xiǎng jiā le", audioFileName: "HSK1_111",
colors: {
yellow: [0],
blue: [1]
} },
{no:112, sentence: "你认识李老师吗？", pinyin: " Nǐ rèn shi Lǐ lǎo shī ma", audioFileName: "HSK1_112",
colors: {
blue: [0,3,4],
pink: [1]
} },
{no:113, sentence: "我会说日语", pinyin: " Wǒ huì shuō Rì yǔ", audioFileName: "HSK1_113",
colors: {
blue: [0,4],
pink: [1,3]
} },
{no:114, sentence: "你能帮我开一下门吗？", pinyin: " Nǐ néng bāng wǒ kāi yí xià mén ma", audioFileName: "HSK1_114",
colors: {
yellow: [1,5,7],
blue: [0,3],
pink: [6]
} },
{no:115, sentence: "谢谢你，小王！", pinyin: " Xiè xie nǐ, xiǎo Wáng", audioFileName: "HSK1_115",
colors: {
yellow: [5],
blue: [2,4],
pink: [0]
} },
{no:116, sentence: "不客气，都是小事！", pinyin: " Bú kè qi, dōu shì xiǎo shì", audioFileName: "HSK1_116",
colors: {
yellow: [0],
blue: [6],
pink: [1,5,7]
} },
{no:117, sentence: "李老师，再见", pinyin: " Lǐ lǎo shī, zài jiàn", audioFileName: "HSK1_117",
colors: {
blue: [0,1],
pink: [4,5]
} },
{no:118, sentence: "请在星期五之前完成作业", pinyin: " Qǐng zài xīng qī wǔ zhī qián wán chéng zuò yè", audioFileName: "HSK1_118",
colors: {
yellow: [6,7,8],
blue: [0,4],
pink: [1,9,10]
} },
{no:119, sentence: "对不起，我不是故意的", pinyin: " Duì bu qǐ, wǒ bú shì gù yì de", audioFileName: "HSK1_119",
colors: {
yellow: [5],
blue: [2,4],
pink: [0,6,7,8]
} },
{no:120, sentence: "不好意思，我来晚了", pinyin: " Bù hǎo yì si, wǒ lái wǎn le", audioFileName: "HSK1_120",
colors: {
yellow: [6],
blue: [1,5,7],
pink: [0,2]
} },
{no:121, sentence: "没关系，别在意", pinyin: " Méi guān xi, bié zài yì", audioFileName: "HSK1_121",
colors: {
yellow: [0,4],
pink: [5,6]
} },
{no:122, sentence: "天气真好！", pinyin: " Tiān qì zhēn hǎo", audioFileName: "HSK1_122",
colors: {
blue: [3],
pink: [1]
} },
{no:123, sentence: "这个商店好大啊！", pinyin: " Zhè ge shāng diàn hǎo dà a", audioFileName: "HSK1_123",
colors: {
blue: [4],
pink: [0,3,5]
} },
{no:124, sentence: "这个苹果太小了", pinyin: " Zhè ge píng guǒ tài xiǎo le", audioFileName: "HSK1_124",
colors: {
yellow: [2],
blue: [3,5],
pink: [0,4]
} },
{no:125, sentence: "饭店现在人多吗？", pinyin: " Fàn diàn xiàn zài rén duō ma", audioFileName: "HSK1_125",
colors: {
yellow: [4],
pink: [0,1,2,3]
} },
{no:126, sentence: "假期，学校里的人很少", pinyin: " Jià qī, xué xiào li de rén hěn shǎo", audioFileName: "HSK1_126",
colors: {
yellow: [3,7],
blue: [8,9],
pink: [0,4]
} },
{no:127, sentence: "今天好热啊！", pinyin: " Jīn tiān hǎo rè a", audioFileName: "HSK1_127",
colors: {
blue: [2],
pink: [3]
} },
{no:128, sentence: "冬天真冷啊！", pinyin: " Dōng tiān zhēn lěng a", audioFileName: "HSK1_128",
colors: {
blue: [3]
} },
{no:129, sentence: "大家都很高兴", pinyin: " Dà jiā dōu hěn gāo xìng", audioFileName: "HSK1_129",
colors: {
blue: [3],
pink: [0,5]
} },
{no:130, sentence: "这只猫真漂亮！", pinyin: " Zhè zhī māo zhēn piào liang", audioFileName: "HSK1_130",
colors: {
pink: [0,4]
} },
{no:131, sentence: "我现在不在家", pinyin: " Wǒ xiàn zài bú zài jiā", audioFileName: "HSK1_131",
colors: {
yellow: [3],
blue: [0],
pink: [1,2,4]
} },
{no:132, sentence: "这个商店没多少东西", pinyin: " Zhè ge shāng diàn méi duō shao dōng xi", audioFileName: "HSK1_132",
colors: {
yellow: [4],
pink: [0,3]
} },
{no:133, sentence: "我很喜欢夏天", pinyin: " Wǒ hěn xǐ huan xià tiān", audioFileName: "HSK1_133",
colors: {
blue: [0,1,2],
pink: [4]
} },
{no:134, sentence: "这件衣服太大了", pinyin: " Zhè jiàn yī fu tài dà le", audioFileName: "HSK1_134",
colors: {
pink: [0,1,4,5]
} },
{no:135, sentence: "我们明天都没空", pinyin: " Wǒ men míng tiān dōu méi kòng", audioFileName: "HSK1_135",
colors: {
yellow: [2,5],
blue: [0],
pink: [6]
} },
{no:136, sentence: "小明在医院看病呢", pinyin: " Xiǎo Míng zài yī yuàn kàn bìng ne", audioFileName: "HSK1_136",
colors: {
yellow: [1],
blue: [0],
pink: [2,4,5,6]
} },
{no:137, sentence: "这是我的书", pinyin: " Zhè shì wǒ de shū", audioFileName: "HSK1_137",
colors: {
blue: [2],
pink: [0,1]
} },
{no:138, sentence: "他回家了", pinyin: " Tā huí jiā le", audioFileName: "HSK1_138",
colors: {
yellow: [1]
} },
{no:139, sentence: "你的汉语老师是李老师吗？", pinyin: " Nǐ de Hàn yǔ lǎo shī shì Lǐ lǎo shī ma", audioFileName: "HSK1_139",
colors: {
blue: [0,3,4,7,8],
pink: [2,6]
} },
{no:140, sentence: "你的杯子呢？", pinyin: " Nǐ de bēi zi ne", audioFileName: "HSK1_140",
colors: {
blue: [0]
} },
{no:141, sentence: "我有一只蓝色的笔", pinyin: " Wǒ yǒu yì zhī lán sè de bǐ", audioFileName: "HSK1_141",
colors: {
yellow: [4],
blue: [0,1,7],
pink: [2,5]
} },
{no:142, sentence: "这是我第二个电脑了", pinyin: " Zhè shì wǒ dì èr ge diàn nǎo le", audioFileName: "HSK1_142",
colors: {
blue: [2,7],
pink: [0,1,3,4,6]
} },
{no:143, sentence: "我来中国三年了", pinyin: " Wǒ lái Zhōng guó sān nián le", audioFileName: "HSK1_143",
colors: {
yellow: [1,3,5],
blue: [0]
} },
{no:144, sentence: "屋里有四把椅子", pinyin: " Wū li yǒu sì bǎ yǐ zi", audioFileName: "HSK1_144",
colors: {
blue: [2,4,5],
pink: [3]
} },
{no:145, sentence: "学校里有五只狗", pinyin: " Xué xiào li yǒu wǔ zhī gǒu", audioFileName: "HSK1_145",
colors: {
yellow: [0],
blue: [3,4,6],
pink: [1]
} },
{no:146, sentence: "他只睡了六个小时", pinyin: " Tā zhǐ shuì le liù ge xiǎo shí", audioFileName: "HSK1_146",
colors: {
yellow: [7],
blue: [1,6],
pink: [2,4]
} },
{no:147, sentence: "一个星期有七天", pinyin: " Yí ge xīng qī yǒu qī tiān", audioFileName: "HSK1_147",
colors: {
yellow: [0],
blue: [4]
} },
{no:148, sentence: "八在中国是幸运数字", pinyin: " Bā zài Zhōng guó shì xìng yùn shù zì", audioFileName: "HSK1_148",
colors: {
yellow: [3],
pink: [1,4,5,6,7,8]
} },
{no:149, sentence: "我女儿九岁了", pinyin: " Wǒ nǚ ér jiǔ suì le", audioFileName: "HSK1_149",
colors: {
yellow: [0,2],
blue: [1,3],
pink: [4]
} },
{no:150, sentence: "还有十天就放假了", pinyin: " Hái yǒu shí tiān jiù fàng jià le", audioFileName: "HSK1_150",
colors: {
yellow: [0,2],
blue: [1],
pink: [4,5,6]
} },
{no:151, sentence: "今天是零度，太冷了！", pinyin: " Jīn tiān shì líng dù, tài lěng le", audioFileName: "HSK1_151",
colors: {
yellow: [3],
blue: [7],
pink: [2,4,6]
} },
{no:152, sentence: "李老师有个儿子", pinyin: " Lǐ lǎo shī yǒu ge ér zi", audioFileName: "HSK1_152",
colors: {
yellow: [5],
blue: [0,1,3]
} },
{no:153, sentence: "他爸爸已经50岁了", pinyin: " Tā bà ba yǐ jīng wǔ shí suì le", audioFileName: "HSK1_153",
colors: {
yellow: [6],
blue: [3,5],
pink: [1,7]
} },
{no:154, sentence: "那儿放了本书", pinyin: " Nàr fàng le běn shū", audioFileName: "HSK1_154",
colors: {
blue: [4],
pink: [0,1,2]
} },
{no:155, sentence: "这些糖都送给你", pinyin: " Zhè xiē táng dōu sòng gěi nǐ", audioFileName: "HSK1_155",
colors: {
yellow: [2],
blue: [5,6],
pink: [0,4]
} },
{no:156, sentence: "这儿有块石头", pinyin: " Zhèr yǒu kuài shí tou", audioFileName: "HSK1_156",
colors: {
yellow: [4],
blue: [2],
pink: [0,1,3]
} },
{no:157, sentence: "我在电影院看电影", pinyin: " Wǒ zài diàn yǐng yuàn kàn diàn yǐng", audioFileName: "HSK1_157",
colors: {
blue: [0,3,7],
pink: [1,2,4,5,6]
} },
{no:158, sentence: "我昨天和小红去公园玩儿了", pinyin: " Wǒ zuó tiān hé xiǎo Hóng qù gōng yuán wánr le", audioFileName: "HSK1_158",
colors: {
yellow: [1,3,5,8,9,10],
blue: [0,4],
pink: [6]
} },
{no:159, sentence: "喂，小明在家吗？", pinyin: " Wéi, xiǎo Míng zài jiā ma", audioFileName: "HSK1_159",
colors: {
yellow: [0,3],
blue: [2],
pink: [4]
} },
],


    hsk2: [
{no:1, sentence: "他是我哥哥", pinyin: " Tā shì wǒ gē ge", audioFileName: "HSK2_01",
colors: {
blue: [2],
pink: [1]
} },
{no:2, sentence: "我姐姐比哥哥小一岁", pinyin: " Wǒ jiě jie bǐ gē ge xiǎo yí suì", audioFileName: "HSK2_02",
colors: {
yellow: [0,7],
blue: [1,3,6],
pink: [8]
} },
{no:3, sentence: "穿白色衣服的是我弟弟", pinyin: " Chuān bái sè yī fu de shì wǒ dì di", audioFileName: "HSK2_03",
colors: {
yellow: [1],
blue: [7],
pink: [2,6,8]
} },
{no:4, sentence: "我和妹妹都喜欢跑步", pinyin: " Wǒ hé mèi mei dōu xǐ huan pǎo bù", audioFileName: "HSK2_04",
colors: {
yellow: [1],
blue: [0,5,7],
pink: [2,8]
} },
{no:5, sentence: "你丈夫是中国人吗？", pinyin: " Nǐ zhàng fu shì Zhōng guó rén ma", audioFileName: "HSK2_05",
colors: {
yellow: [5,6],
blue: [0],
pink: [1,3]
} },
{no:6, sentence: "我妻子很会做饭", pinyin: " Wǒ qī zi hěn huì zuò fàn", audioFileName: "HSK2_06",
colors: {
blue: [0,3],
pink: [4,5,6]
} },
{no:7, sentence: "在那边玩耍的是你的孩子吗？", pinyin: " Zài nà biān wán shuǎ de shì nǐ de hái zi ma", audioFileName: "HSK2_07",
colors: {
yellow: [3,9],
blue: [4,7],
pink: [0,1,6]
} },
{no:8, sentence: "那个男人在做什么？", pinyin: " Nà ge nán rén zài zuò shén me", audioFileName: "HSK2_08",
colors: {
yellow: [2,3,6],
pink: [0,4,5]
} },
{no:9, sentence: "那个女人跳舞跳得非常好", pinyin: " Nà ge nǚ rén tiào wǔ tiào de fēi cháng hǎo", audioFileName: "HSK2_09",
colors: {
yellow: [3,9],
blue: [2,5,10],
pink: [0,4,6]
} },
{no:10, sentence: "服务员，麻烦帮我倒一杯水", pinyin: " Fú wù yuán, má fan bāng wǒ dào yì bēi shuǐ", audioFileName: "HSK2_10",
colors: {
yellow: [0,2,4],
blue: [7,11],
pink: [1,8,9]
} },
{no:11, sentence: "还有一个小时就要上课了", pinyin: " Hái yǒu yí ge xiǎo shí jiù yào shàng kè le", audioFileName: "HSK2_11",
colors: {
yellow: [0,2,5],
blue: [1,4],
pink: [6,7,8,9]
} },
{no:12, sentence: "十分钟后火车就要开了", pinyin: " Shí fēn zhōng hòu huǒ chē jiù yào kāi le", audioFileName: "HSK2_12",
colors: {
yellow: [0],
blue: [4],
pink: [3,6,7]
} },
{no:13, sentence: "我们要花多少时间才能到上海呢？", pinyin: " Wǒ men yào huā duō shao shí jiān cái néng dào Shàng hǎi ne", audioFileName: "HSK2_13",
colors: {
yellow: [6,8,9],
blue: [0,12],
pink: [2,10,11]
} },
{no:14, sentence: "现在是早上八点", pinyin: " Xiàn zài shì zǎo shang bā diǎn", audioFileName: "HSK2_14",
colors: {
blue: [3,6],
pink: [0,1,2]
} },
{no:15, sentence: "晚上的风很冷", pinyin: " Wǎn shang de fēng hěn lěng", audioFileName: "HSK2_15",
colors: {
yellow: [4],
blue: [0,5]
} },
{no:16, sentence: "我是去年来日本的", pinyin: " Wǒ shì qù nián lái Rì běn de", audioFileName: "HSK2_16",
colors: {
yellow: [3,4],
blue: [0,6],
pink: [1,2,5]
} },
{no:17, sentence: "今天是我妹妹的生日", pinyin: " Jīn tiān shì wǒ mèi mei de shēng rì", audioFileName: "HSK2_17",
colors: {
blue: [3],
pink: [2,4,8]
} },
{no:18, sentence: "长时间看手机对眼睛不好", pinyin: " Cháng shí jiān kàn shǒu jī duì yǎn jing bù hǎo", audioFileName: "HSK2_18",
colors: {
yellow: [0,1],
blue: [4,7,10],
pink: [3,6,9]
} },
{no:19, sentence: "老师，我今天身体不舒服", pinyin: " Lǎo shī, wǒ jīn tiān shēn tǐ bù shū fu", audioFileName: "HSK2_19",
colors: {
blue: [0,3,7],
pink: [8]
} },
{no:20, sentence: "他游得比魚还快", pinyin: " Tā yóu de bǐ yú hái kuài", audioFileName: "HSK2_20",
colors: {
yellow: [1,4,5],
blue: [3],
pink: [6]
} },
{no:21, sentence: "羊肉是爸爸最爱吃的食物", pinyin: " Yáng ròu shì bà ba zuì ài chī de shí wù", audioFileName: "HSK2_21",
colors: {
yellow: [0,9],
pink: [1,2,3,5,6,10]
} },
{no:22, sentence: "孩子每天早上都要喝一杯牛奶", pinyin: " Hái zi měi tiān zǎo shang dōu yào hē yì bēi niú nǎi", audioFileName: "HSK2_22",
colors: {
yellow: [0,11],
blue: [2,4,12],
pink: [7,9]
} },
{no:23, sentence: "弟弟最讨厌吃的食物是鸡蛋", pinyin: " Dì di zuì tǎo yàn chī de shí wù shì jī dàn", audioFileName: "HSK2_23",
colors: {
yellow: [7],
blue: [3],
pink: [0,2,4,8,9,11]
} },
{no:24, sentence: "因为西瓜很甜，所以我非常喜欢吃", pinyin: " Yīn wèi xī guā hěn tián, suǒ yǐ wǒ fēi cháng xǐ huan chī", audioFileName: "HSK2_24",
colors: {
yellow: [5,8,11],
blue: [4,7,9,12],
pink: [1]
} },
{no:25, sentence: "我很少喝咖啡，因为太苦了", pinyin: " Wǒ hěn shǎo hē kā fēi, yīn wèi tài kǔ le", audioFileName: "HSK2_25",
colors: {
yellow: [0,1],
blue: [2,10],
pink: [8,9]
} },
{no:26, sentence: "我每天骑自行车去上学", pinyin: " Wǒ měi tiān qí zì xíng chē qù shàng xué", audioFileName: "HSK2_26",
colors: {
yellow: [0,3,5,9],
blue: [1],
pink: [4,7,8]
} },
{no:27, sentence: "她是坐船来上海的", pinyin: " Tā shì zuò chuán lái Shàng hǎi de", audioFileName: "HSK2_27",
colors: {
yellow: [3,4],
blue: [6],
pink: [1,2,5]
} },
{no:28, sentence: "公共汽车是我最常用的交通工具", pinyin: " Gōng gòng qì chē shì wǒ zuì cháng yòng de jiāo tōng gōng jù", audioFileName: "HSK2_28",
colors: {
yellow: [7],
blue: [5],
pink: [1,2,4,6,8,13]
} },
{no:29, sentence: "下雪了，冬天来了", pinyin: " Xià xuě le, dōng tiān lái le", audioFileName: "HSK2_29",
colors: {
yellow: [6],
blue: [1],
pink: [0]
} },
{no:30, sentence: "妈妈，我的药放在哪儿了？", pinyin: " Mā ma, wǒ de yào fàng zài nǎr le", audioFileName: "HSK2_30",
colors: {
blue: [3,8,9],
pink: [5,6,7]
} },
{no:31, sentence: "刚刚他拿着手机去打电话了", pinyin: " Gāng gāng tā ná zhe shǒu jī qù dǎ diàn huà le", audioFileName: "HSK2_31",
colors: {
yellow: [3],
blue: [5,8],
pink: [7,9,10]
} },
{no:32, sentence: "我看了看手表上的时间", pinyin: " Wǒ kàn le kàn shǒu biǎo shang de shí jiān", audioFileName: "HSK2_32",
colors: {
yellow: [4,8],
blue: [0,5],
pink: [1,3]
} },
{no:33, sentence: "我已经买好票了，明天就走", pinyin: " Wǒ yǐ jīng mǎi hǎo piào le, míng tiān jiù zǒu", audioFileName: "HSK2_33",
colors: {
yellow: [0,3,8],
blue: [1,4,11],
pink: [5,10]
} },
{no:34, sentence: "你看今天的报纸了吗？", pinyin: " Nǐ kàn jīn tiān de bào zhǐ le ma", audioFileName: "HSK2_34",
colors: {
blue: [0,6],
pink: [1,5]
} },
{no:35, sentence: "他站在门外", pinyin: " Tā zhàn zài mén wài", audioFileName: "HSK2_35",
colors: {
yellow: [3],
pink: [1,2,4]
} },
{no:36, sentence: "我请假了，今天没去公司", pinyin: " Wǒ qǐng jià le, jīn tiān méi qù gōng sī", audioFileName: "HSK2_36",
colors: {
yellow: [0,7],
blue: [1],
pink: [2,8]
} },
{no:37, sentence: "我们要在下午三点前到达机场", pinyin: " Wǒ men yào zài xià wǔ sān diǎn qián dào dá jī chǎng", audioFileName: "HSK2_37",
colors: {
yellow: [8,10],
blue: [0,5,7,12],
pink: [2,3,4,9]
} },
{no:38, sentence: "教室里一个人都没有", pinyin: " Jiào shì li yí ge rén dōu méi yǒu", audioFileName: "HSK2_38",
colors: {
yellow: [3,5,7],
blue: [8],
pink: [0,1]
} },
{no:39, sentence: "房间的门是关上的", pinyin: " Fáng jiān de mén shì guān shàng de", audioFileName: "HSK2_39",
colors: {
yellow: [0,3],
pink: [4,6]
} },
{no:40, sentence: "现在是放学时间，路上全是小孩", pinyin: " Xiàn zài shì fàng xué shí jiān, lù shang quán shì xiǎo hái", audioFileName: "HSK2_40",
colors: {
yellow: [4,5,10,13],
blue: [12],
pink: [0,1,2,3,8,11]
} },
{no:41, sentence: "女士您好，请问您姓什么？", pinyin: " Nǚ shì nín hǎo, qǐng wèn nín xìng shén me", audioFileName: "HSK2_41",
colors: {
yellow: [2,7,9],
blue: [0,3,5],
pink: [1,6,8]
} },
{no:42, sentence: "现在的孩子周末也要上课，太累了", pinyin: " Xiàn zài de hái zi zhōu mò yě yào shàng kè, tài lèi le", audioFileName: "HSK2_42",
colors: {
yellow: [3],
blue: [7],
pink: [0,1,6,8,9,10,12,13]
} },
{no:43, sentence: "这道题太难了，我不会做", pinyin: " Zhè dào tí tài nán le, wǒ bú huì zuò", audioFileName: "HSK2_43",
colors: {
yellow: [2,4,8],
blue: [7],
pink: [0,1,3,9,10]
} },
{no:44, sentence: "大家还有什么问题吗？", pinyin: " Dà jiā hái yǒu shén me wèn tí ma", audioFileName: "HSK2_44",
colors: {
yellow: [2,4,7],
blue: [3],
pink: [0,6]
} },
{no:45, sentence: "下周就要考试了", pinyin: " Xià zhōu jiù yào kǎo shì le", audioFileName: "HSK2_45",
colors: {
blue: [4],
pink: [0,2,3,5]
} },
{no:46, sentence: "你有什么事情吗？", pinyin: " Nǐ yǒu shén me shì qing ma", audioFileName: "HSK2_46",
colors: {
yellow: [0,2],
blue: [1],
pink: [4]
} },
{no:47, sentence: "事情变得有意思了起来", pinyin: " Shì qing biàn de yǒu yì si le qǐ lái", audioFileName: "HSK2_47",
colors: {
yellow: [9],
blue: [4,8],
pink: [0,2,5]
} },
{no:48, sentence: "那只猫的眼睛是什么颜色的？", pinyin: " Nà zhī māo de yǎn jing shì shén me yán sè de", audioFileName: "HSK2_48",
colors: {
yellow: [7,9],
blue: [4],
pink: [0,6,10]
} },
{no:49, sentence: "学校左边是一条河", pinyin: " Xué xiào zuǒ biān shì yì tiáo hé", audioFileName: "HSK2_49",
colors: {
yellow: [0,6,7],
blue: [2],
pink: [1,4,5]
} },
{no:50, sentence: "这条路的右边就是医院", pinyin: " Zhè tiáo lù de yòu biān jiù shì yī yuàn", audioFileName: "HSK2_50",
colors: {
yellow: [1],
pink: [0,2,4,6,7,9]
} },
{no:51, sentence: "你旁边有一只小猫，别踩到它的尾巴", pinyin: " Nǐ páng biān yǒu yì zhī xiǎo māo, bié cǎi dào tā de wěi ba", audioFileName: "HSK2_51",
colors: {
yellow: [1,9],
blue: [0,3,6,10,14],
pink: [4,11]
} },
{no:52, sentence: "我看向窗外的小鸟，它真漂亮", pinyin: " Wǒ kàn xiàng chuāng wài de xiǎo niǎo, tā zhēn piào liang", audioFileName: "HSK2_52",
colors: {
yellow: [6],
blue: [0,7],
pink: [1,2,4,11]
} },
{no:53, sentence: "麻烦您在这儿写下您的名字", pinyin: " Má fan nín zài zhèr xiě xià nín de míng zi", audioFileName: "HSK2_53",
colors: {
yellow: [0,2,8,10],
blue: [6],
pink: [3,4,5,7]
} },
{no:54, sentence: "它不希望我摸它的头", pinyin: " Tā bù xī wàng wǒ mō tā de tóu", audioFileName: "HSK2_54",
colors: {
yellow: [8],
blue: [4],
pink: [1,3]
} },
{no:55, sentence: "大家已经到了吗？", pinyin: " Dà jiā yǐ jīng dào le ma", audioFileName: "HSK2_55",
colors: {
blue: [2],
pink: [0,4]
} },
{no:56, sentence: "哥哥每天都会锻炼身体", pinyin: " Gē ge měi tiān dōu huì duàn liàn shēn tǐ", audioFileName: "HSK2_56",
colors: {
blue: [2,9],
pink: [5,6,7]
} },
{no:57, sentence: "为什么你看起来这么累？", pinyin: " Wèi shén me nǐ kàn qǐ lái zhè me lèi", audioFileName: "HSK2_57",
colors: {
yellow: [1,6],
blue: [3,5],
pink: [0,4,7,9]
} },
{no:58, sentence: "我们已经走了一个小时了！", pinyin: " Wǒ men yǐ jīng zǒu le yí ge xiǎo shí le", audioFileName: "HSK2_58",
colors: {
yellow: [6,9],
blue: [0,2,4,8]
} },
{no:59, sentence: "每天跑步对身体好", pinyin: " Měi tiān pǎo bù duì shēn tǐ hǎo", audioFileName: "HSK2_59",
colors: {
yellow: [6],
blue: [0,2,7],
pink: [3,4]
} },
{no:60, sentence: "你看见他走进教室了吗？", pinyin: " Nǐ kàn jiàn tā zǒu jìn jiào shì le ma", audioFileName: "HSK2_60",
colors: {
blue: [0,4],
pink: [1,2,5,6,7]
} },
{no:61, sentence: "我喜欢待在家里，不喜欢出门", pinyin: " Wǒ xǐ huan dāi zài jiā li, bù xǐ huan chū mén", audioFileName: "HSK2_61",
colors: {
yellow: [0,12],
blue: [1,9],
pink: [4,8]
} },
{no:62, sentence: "还有四十分钟我们就要到了", pinyin: " Hái yǒu sì shí fēn zhōng wǒ men jiù yào dào le", audioFileName: "HSK2_62",
colors: {
yellow: [0,3],
blue: [1,6],
pink: [2,8,9,10]
} },
{no:63, sentence: "请等一下", pinyin: " Qǐng děng yí xià", audioFileName: "HSK2_63",
colors: {
yellow: [0,2],
blue: [1],
pink: [3]
} },
{no:64, sentence: "我开车送你回家吧", pinyin: " Wǒ kāi chē sòng nǐ huí jiā ba", audioFileName: "HSK2_64",
colors: {
yellow: [5],
blue: [0,4],
pink: [3]
} },
{no:65, sentence: "可以帮我找一下我的钥匙吗？", pinyin: " Kě yǐ bāng wǒ zhǎo yí xià wǒ de yào shi ma", audioFileName: "HSK2_65",
colors: {
yellow: [0,3,5],
blue: [1,4,7],
pink: [6,9]
} },
{no:66, sentence: "这家店是卖衣服的", pinyin: " Zhè jiā diàn shì mài yī fu de", audioFileName: "HSK2_66",
colors: {
pink: [0,2,3,4]
} },
{no:67, sentence: "别穿毛衣，今天不冷", pinyin: " Bié chuān máo yī, jīn tiān bù lěng", audioFileName: "HSK2_67",
colors: {
yellow: [0,2],
blue: [8],
pink: [7]
} },
{no:68, sentence: "我洗个澡就睡觉", pinyin: " Wǒ xǐ ge zǎo jiù shuì jiào", audioFileName: "HSK2_68",
colors: {
yellow: [0],
blue: [1,3],
pink: [4,5,6]
} },
{no:69, sentence: "妈妈，再让我玩一会儿吧！", pinyin: " Mā ma, zài ràng wǒ wán yí huìr ba", audioFileName: "HSK2_69",
colors: {
yellow: [6,7],
blue: [5],
pink: [3,4,8,9]
} },
{no:70, sentence: "你笑起来真漂亮！", pinyin: " Nǐ xiào qǐ lái zhēn piào liang", audioFileName: "HSK2_70",
colors: {
yellow: [3],
blue: [0,2],
pink: [1,5]
} },
{no:71, sentence: "小明，这个问题你听懂了吗？", pinyin: " Xiǎo Míng, zhè ge wèn tí nǐ tīng dǒng le ma", audioFileName: "HSK2_71",
colors: {
yellow: [1,6],
blue: [0,7,9],
pink: [3,5]
} },
{no:72, sentence: "老师问你，这道题的答案是什么？", pinyin: " Lǎo shī wèn nǐ, zhè dào tí de dá àn shì shén me", audioFileName: "HSK2_72",
colors: {
yellow: [7,9,12],
blue: [0,3],
pink: [2,5,6,10,11]
} },
{no:73, sentence: "老师，我回答不出来", pinyin: " Lǎo shī, wǒ huí dá bù chū lái", audioFileName: "HSK2_73",
colors: {
yellow: [4,5,8],
blue: [0,3],
pink: [6]
} },
{no:74, sentence: "小红，你能告诉我这道题乍么算吗？", pinyin: " Xiǎo Hóng, nǐ néng gào su wǒ zhè dào tí zěn me suàn ma", audioFileName: "HSK2_74",
colors: {
yellow: [1,4,10],
blue: [0,3,7,11],
pink: [5,8,9,13]
} },
{no:75, sentence: "我要准备明天的比赛了", pinyin: " Wǒ yào zhǔn bèi míng tiān de bǐ sài le", audioFileName: "HSK2_75",
colors: {
yellow: [4],
blue: [0,2,7],
pink: [1,3,8]
} },
{no:76, sentence: "新学期开始了", pinyin: " Xīn xué qī kāi shǐ le", audioFileName: "HSK2_76",
colors: {
yellow: [1],
blue: [4]
} },
{no:77, sentence: "可以请你自我介绍一下吗？", pinyin: " Kě yǐ qǐng nǐ zì wǒ jiè shào yí xià ma", audioFileName: "HSK2_77",
colors: {
yellow: [0,1,2,8],
blue: [3,5],
pink: [4,6,7,9]
} },
{no:78, sentence: "同学之间要互相帮助", pinyin: " Tóng xué zhī jiān yào hù xiāng bāng zhù", audioFileName: "HSK2_78",
colors: {
yellow: [0,1],
pink: [4,5,8]
} },
{no:79, sentence: "欢迎来到我们班！", pinyin: " Huān yíng lái dào wǒ men bān", audioFileName: "HSK2_79",
colors: {
yellow: [1,2],
blue: [4],
pink: [3]
} },
{no:80, sentence: "七点了，该起床了", pinyin: " Qī diǎn le, gāi qǐ chuáng le", audioFileName: "HSK2_80",
colors: {
yellow: [6],
blue: [1,5]
} },
{no:81, sentence: "好好休息，希望你早点好起来", pinyin: " Hǎo hāo xiū xi, xī wàng nǐ zǎo diǎn hǎo qǐ lái", audioFileName: "HSK2_81",
colors: {
yellow: [7,8,9,10,12],
blue: [0,11],
pink: [6]
} },
{no:82, sentence: "生病了就要好好休息，跟老师请个假吧！", pinyin: " Shēng bìng le jiù yào hǎo hāo xiū xi, gēn lǎo shī qǐng ge jià ba", audioFileName: "HSK2_82",
colors: {
blue: [5,11,13],
pink: [1,3,4,15]
} },
{no:83, sentence: "真不想去上班啊", pinyin: " Zhēn bù xiǎng qù shàng bān a", audioFileName: "HSK2_83",
colors: {
blue: [2],
pink: [1,3,4]
} },
{no:84, sentence: "我们家会在暑假的时候一起去旅游", pinyin: " Wǒ men jiā huì zài shǔ jià de shí hou yì qǐ qù lǚ yóu", audioFileName: "HSK2_84",
colors: {
yellow: [8,14],
blue: [0,5,11,13],
pink: [3,4,6,10,12]
} },
{no:85, sentence: "她很喜欢唱歌，但是唱得不好", pinyin: " Tā hěn xǐ huan chàng gē, dàn shì chàng de bù hǎo", audioFileName: "HSK2_85",
colors: {
yellow: [1],
blue: [2,12],
pink: [4,7,8,9,11]
} },
{no:86, sentence: "对我来说，跳舞是一件非常快乐的事情", pinyin: " Duì wǒ lái shuō, tiào wǔ shì yí jiàn fēi cháng kuài lè de shì qing", audioFileName: "HSK2_86",
colors: {
yellow: [2,8,11],
blue: [1,6],
pink: [0,5,7,9,12,13,15]
} },
{no:87, sentence: "从明天开始，我每天都要运动一个小时", pinyin: " Cóng míng tiān kāi shǐ, wǒ měi tiān dōu yào yùn dòng yí ge xiǎo shí", audioFileName: "HSK2_87",
colors: {
yellow: [0,1,6,13,16],
blue: [4,7,15],
pink: [10,11,12]
} },
{no:88, sentence: "小红正在泳池里游泳", pinyin: " Xiǎo Hóng zhèng zài yǒng chí li yóu yǒng", audioFileName: "HSK2_88",
colors: {
yellow: [1,5,7],
blue: [0,4,8],
pink: [2,3]
} },
{no:89, sentence: "我们班的男孩子都很喜欢踢足球", pinyin: " Wǒ men bān de nán hái zi dōu hěn xǐ huan tī zú qiú", audioFileName: "HSK2_89",
colors: {
yellow: [4,5,8,12,13],
blue: [0,9]
} },
{no:90, sentence: "因为下雨，所以今天他们没去打篮球", pinyin: " Yīn wèi xià yǔ, suǒ yǐ jīn tiān tā men méi qù dǎ lán qiú", audioFileName: "HSK2_90",
colors: {
yellow: [5,11,14,15],
blue: [3,6,13],
pink: [1,2,12]
} },
{no:91, sentence: "我已经写完作业了", pinyin: " Wǒ yǐ jīng xiě wán zuò yè le", audioFileName: "HSK2_91",
colors: {
yellow: [0,4],
blue: [1,3],
pink: [5,6]
} },
{no:92, sentence: "你觉得红色好看还是蓝色好看？", pinyin: " Nǐ jué de hóng sè hǎo kàn hái shi lán sè hǎo kàn", audioFileName: "HSK2_92",
colors: {
yellow: [1,3,7,9],
blue: [0,5,11],
pink: [4,6,10,12]
} },
{no:93, sentence: "我知道他为什么没来", pinyin: " Wǒ zhī dào tā wèi shén me méi lái", audioFileName: "HSK2_93",
colors: {
yellow: [5,7,8],
blue: [0],
pink: [2,4]
} },
{no:94, sentence: "希望大家能和我做朋友", pinyin: " Xī wàng dà jiā néng hé wǒ zuò péng you", audioFileName: "HSK2_94",
colors: {
yellow: [4,5,8],
blue: [6],
pink: [1,2,7]
} },
{no:95, sentence: "我的生日礼物想要一本书", pinyin: " Wǒ de shēng rì lǐ wù xiǎng yào yì běn shū", audioFileName: "HSK2_95",
colors: {
yellow: [4,5],
blue: [0,6,9],
pink: [3,7,8]
} },
{no:96, sentence: "坐公共汽车时，应该给老人让座", pinyin: " Zuò gōng gòng qì chē shí, yīng gāi gěi lǎo rén ràng zuò", audioFileName: "HSK2_96",
colors: {
yellow: [5,9,11],
blue: [10],
pink: [0,2,3,12,13]
} },
{no:97, sentence: "小明给了我一颗糖", pinyin: " Xiǎo Míng gěi le wǒ yì kē táng", audioFileName: "HSK2_97",
colors: {
yellow: [1,7],
blue: [0,2,4],
pink: [5]
} },
{no:98, sentence: "我家住得离学校很远", pinyin: " Wǒ jiā zhù de lí xué xiào hěn yuǎn", audioFileName: "HSK2_98",
colors: {
yellow: [4,5,7],
blue: [0,8],
pink: [2,6]
} },
{no:99, sentence: "医院离学校很近，走路十分钟就到了", pinyin: " Yī yuàn lí xué xiào hěn jìn, zǒu lù shí fēn zhōng jiù dào le", audioFileName: "HSK2_99",
colors: {
yellow: [2,3,10],
blue: [5,8],
pink: [1,4,6,9,13,14]
} },
{no:100, sentence: "快点，我们要迟到了！", pinyin: " Kuài diǎn, wǒ men yào chí dào le", audioFileName: "HSK2_100",
colors: {
yellow: [6],
blue: [1,3],
pink: [0,5,7]
} },
{no:101, sentence: "你走得太慢了！", pinyin: " Nǐ zǒu de tài màn le", audioFileName: "HSK2_101",
colors: {
yellow: [0],
blue: [1],
pink: [3,4]
} },
{no:102, sentence: "我们这儿的羊肉很贵", pinyin: " Wǒ men zhèr de yáng ròu hěn gu", audioFileName: "HSK2_102",
colors: {
yellow: [5],
blue: [0,7],
pink: [2,3,6,8]
} },
{no:103, sentence: "但是牛奶很便宜", pinyin: " Dàn shì niú nǎi hěn pián yi", audioFileName: "HSK2_103",
colors: {
yellow: [2,5],
blue: [3,4],
pink: [0,1]
} },
{no:104, sentence: "这条红裙子真漂亮", pinyin: " Zhè tiáo hóng qún zi zhēn piào liang", audioFileName: "HSK2_104",
colors: {
yellow: [1,2,3],
pink: [0,6]
} },
{no:105, sentence: "妈妈已经有了白头发", pinyin: " Mā ma yǐ jīng yǒu le bái tóu fa", audioFileName: "HSK2_105",
colors: {
yellow: [6,7],
blue: [2,4]
} },
{no:106, sentence: "我们家养丁一只黑猫", pinyin: " Wǒ men jiā yǎng le yì zhī hēi māo", audioFileName: "HSK2_106",
colors: {
blue: [0,3],
pink: [5]
} },
{no:107, sentence: "今天是一个大晴天", pinyin: " Jīn tiān shì yí ge dà qíng tiān", audioFileName: "HSK2_107",
colors: {
yellow: [3,6],
pink: [2,5]
} },
{no:108, sentence: "下午天还是阴的", pinyin: " Xià wǔ tiān hái shi yīn de", audioFileName: "HSK2_108",
colors: {
yellow: [3],
blue: [1],
pink: [0]
} },
{no:109, sentence: "哥哥比我高很多", pinyin: " Gē ge bǐ wǒ gāo hěn duō", audioFileName: "HSK2_109",
colors: {
yellow: [2],
blue: [3,5]
} },
{no:110, sentence: "妹妹没我高，但是头发比我长", pinyin: " Mèi mei méi wǒ gāo, dàn shì tóu fa bǐ wǒ cháng", audioFileName: "HSK2_110",
colors: {
yellow: [2,8,10,12],
blue: [3,11],
pink: [0,6,7]
} },
{no:111, sentence: "学校旁边开了一家新商店", pinyin: " Xué xiào páng biān kāi le yì jiā xīn shāng diàn", audioFileName: "HSK2_111",
colors: {
yellow: [0,2],
pink: [1,6,10]
} },
{no:112, sentence: "大人也会犯错", pinyin: " Dà rén yě huì fàn cuò", audioFileName: "HSK2_112",
colors: {
yellow: [1],
blue: [2],
pink: [0,3,4,5]
} },
{no:113, sentence: "她太累了，我希望她能好好休息一下", pinyin: " Tā tài lèi le, wǒ xī wàng tā néng hǎo hāo xiū xi yí xià", audioFileName: "HSK2_113",
colors: {
yellow: [9,14],
blue: [5,10],
pink: [1,2,7,15]
} },
{no:114, sentence: "这段时间太忙了，我已经很长时间没运动了", pinyin: " Zhè duàn shí jiān tài máng le, wǒ yǐ jīng hěn cháng shí jiān méi yùn dòng le", audioFileName: "HSK2_114",
colors: {
yellow: [2,5,8,12,13,15],
blue: [9,11],
pink: [0,1,4,16,17]
} },
{no:115, sentence: "小红，你的新衣服真漂亮！", pinyin: " Xiǎo Hóng, nǐ de xīn yī fu zhēn piào liang", audioFileName: "HSK2_115",
colors: {
yellow: [1],
blue: [0,3],
pink: [9]
} },
{no:116, sentence: "鱼很好吃，是我的最爱！", pinyin: " Yú hěn hǎo chī, shì wǒ de zuì ài", audioFileName: "HSK2_116",
colors: {
yellow: [0,1],
blue: [2,6],
pink: [5,8,9]
} },
{no:117, sentence: "你会觉得学习是一件快乐的事情吗？", pinyin: " Nǐ huì jué de xué xí shì yí jiàn kuài lè de shì qing ma", audioFileName: "HSK2_117",
colors: {
yellow: [2,4,5,7],
blue: [0],
pink: [1,6,8,9,10,12]
} },
{no:118, sentence: "别吃太多药，对身体不好", pinyin: " Bié chī tài duō yào, duì shēn tǐ bù hǎo", audioFileName: "HSK2_118",
colors: {
yellow: [0],
blue: [8,10],
pink: [2,4,6,9]
} },
{no:119, sentence: "我有一个妹妹，她非常可爱", pinyin: " Wǒ yǒu yí ge mèi mei, tā fēi cháng kě ài", audioFileName: "HSK2_119",
colors: {
yellow: [0,2,9],
blue: [1,10],
pink: [4,11]
} },
{no:120, sentence: "你也喜欢游泳吗？", pinyin: " Nǐ yě xǐ huan yóu yǒng ma", audioFileName: "HSK2_120",
colors: {
yellow: [0,1,4],
blue: [2,5]
} },
{no:121, sentence: "我还有一个弟弟", pinyin: " Wǒ hái yǒu yí ge dì di", audioFileName: "HSK2_121",
colors: {
yellow: [1,3],
blue: [0,2],
pink: [5]
} },
{no:122, sentence: "他最讨厌吃羊肉了", pinyin: " Tā zuì tǎo yàn chī yáng ròu le", audioFileName: "HSK2_122",
colors: {
yellow: [5],
blue: [2],
pink: [1,3,6]
} },
{no:123, sentence: "帮助别人的感觉真好啊！", pinyin: " Bāng zhù bié rén de gǎn jué zhēn hǎo a", audioFileName: "HSK2_123",
colors: {
yellow: [2,3,6],
blue: [5,8],
pink: [1]
} },
{no:124, sentence: "哥哥正在房间里写作业", pinyin: " Gē ge zhèng zài fáng jiān li xiě zuò yè", audioFileName: "HSK2_124",
colors: {
yellow: [4],
blue: [7],
pink: [2,3,8,9]
} },
{no:125, sentence: "他已经不在学校了", pinyin: " Tā yǐ jīng bú zài xué xiào le", audioFileName: "HSK2_125",
colors: {
yellow: [3,5],
blue: [1],
pink: [4,6]
} },
{no:126, sentence: "待会儿我们一起去踢足球吧！", pinyin: " Dāi huìr wǒ men yì qǐ qù tī zú qiú ba", audioFileName: "HSK2_126",
colors: {
yellow: [9,10],
blue: [3,6],
pink: [1,2,5,7]
} },
{no:127, sentence: "明天再见！", pinyin: " Míng tiān zài jiàn", audioFileName: "HSK2_127",
colors: {
yellow: [0],
pink: [2,3]
} },
{no:128, sentence: "妈妈下个星期就回来", pinyin: " Mā ma xià ge xīng qī jiù huí lái", audioFileName: "HSK2_128",
colors: {
yellow: [7,8],
pink: [2,6]
} },
{no:129, sentence: "我明天可能要请假", pinyin: " Wǒ míng tiān kě néng yào qǐng jià", audioFileName: "HSK2_129",
colors: {
yellow: [1,4],
blue: [0,3,6],
pink: [5,7]
} },
{no:130, sentence: "你的篮球打得真厉害！", pinyin: " Nǐ de lán qiú dǎ de zhēn lì hai", audioFileName: "HSK2_130",
colors: {
yellow: [2,3],
blue: [0,4],
pink: [7]
} },
{no:131, sentence: "男人带着一块黑色的手表", pinyin: " Nán rén dài zhe yí kuài hēi sè de shǒu biǎo", audioFileName: "HSK2_131",
colors: {
yellow: [0,1,4,9],
blue: [10],
pink: [2,5,7]
} },
{no:132, sentence: "我学过汉语，所以我会说一点汉语", pinyin: " Wǒ xué guo Hàn yǔ, suǒ yǐ wǒ huì shuō yì diǎn Hàn yǔ", audioFileName: "HSK2_132",
colors: {
yellow: [1,6,7],
blue: [0,8,12,14],
pink: [3,9,11,13]
} },
{no:133, sentence: "你是日本人吧？", pinyin: " Nǐ shì Rì běn rén ba", audioFileName: "HSK2_133",
colors: {
yellow: [4],
blue: [0,3],
pink: [1,2]
} },
{no:134, sentence: "可以帮我看看哪件衣服更好看吗？", pinyin: " Kě yǐ bāng wǒ kàn kan nǎ jiàn yī fu gèng hǎo kàn ma", audioFileName: "HSK2_134",
colors: {
yellow: [0],
blue: [1,3,6,11],
pink: [4,7,10,12]
} },
{no:135, sentence: "你要出国吗？", pinyin: " Nǐ yào chū guó ma", audioFileName: "HSK2_135",
colors: {
yellow: [3],
blue: [0],
pink: [1]
} },
{no:136, sentence: "今年假期你准备去哪儿旅游？", pinyin: " Jīn nián jià qī nǐ zhǔn bèi qù nǎr lǚ yóu", audioFileName: "HSK2_136",
colors: {
yellow: [1,4,11],
blue: [5,8,9,10],
pink: [2,6,7]
} },
{no:137, sentence: "我买了两个杯子", pinyin: " Wǒ mǎi le liǎng ge bēi zi", audioFileName: "HSK2_137",
colors: {
yellow: [0],
blue: [1,3]
} },
{no:138, sentence: "一个年级有大约两百名学生", pinyin: " Yí ge nián jí yǒu dà yuē liǎng bǎi míng xué sheng", audioFileName: "HSK2_138",
colors: {
yellow: [0,2,3,7,9,10],
blue: [4,8],
pink: [5]
} },
{no:139, sentence: "这个手机价值几千元", pinyin: " Zhè ge shǒu jī jià zhí jǐ qiān yuán", audioFileName: "HSK2_139",
colors: {
yellow: [5,8],
blue: [2,6],
pink: [0,4]
} },
{no:140, sentence: "这次考试我拿了第一", pinyin: " Zhè cì kǎo shì wǒ ná le dì yī", audioFileName: "HSK2_140",
colors: {
yellow: [5],
blue: [2,4],
pink: [0,1,3,7]
} },
{no:141, sentence: "我每周要去游泳馆游三次泳", pinyin: " Wǒ měi zhōu yào qù yóu yǒng guǎn yóu sān cì yǒng", audioFileName: "HSK2_141",
colors: {
yellow: [0,5,6,8],
blue: [1,7,11],
pink: [3,4,10]
} },
{no:142, sentence: "我现在有五十公斤里", pinyin: " Wǒ xiàn zài yǒu wǔ shí gōng jīn zhòng", audioFileName: "HSK2_142",
colors: {
yellow: [3,5],
blue: [0,4],
pink: [1,2,8]
} },
{no:143, sentence: "请问一杯咖啡多少元？", pinyin: " Qǐng wèn yì bēi kā fēi duō shao yuán", audioFileName: "HSK2_143",
colors: {
yellow: [8],
blue: [0],
pink: [1,2]
} },
{no:144, sentence: "今年妈妈给我新买了五件衣服", pinyin: " Jīn nián mā ma gěi wǒ xīn mǎi le wǔ jiàn yī fu", audioFileName: "HSK2_144",
colors: {
yellow: [1,4],
blue: [5,7,9],
pink: [10]
} },
{no:145, sentence: "桌上有六张纸", pinyin: " Zhuō shang yǒu liù zhāng zhǐ", audioFileName: "HSK2_145",
colors: {
blue: [2,5],
pink: [3]
} },
{no:146, sentence: "他从对面走来", pinyin: " Tā cóng duì miàn zǒu lái", audioFileName: "HSK2_146",
colors: {
yellow: [1,5],
blue: [4],
pink: [2,3]
} },
{no:147, sentence: "爸爸妈妈对我很好", pinyin: " Bà ba mā ma duì wǒ hěn hǎo", audioFileName: "HSK2_147",
colors: {
yellow: [6],
blue: [5,7],
pink: [0,4]
} },
{no:148, sentence: "和我比起来，他唱歌好听多了", pinyin: " Hé wǒ bǐ qǐ lái, tā chàng gē hǎo tīng duō le", audioFileName: "HSK2_148",
colors: {
yellow: [0,1,2,4],
blue: [3,9],
pink: [7]
} },
{no:149, sentence: "向左走就是我家", pinyin: " Xiàng zuǒ zǒu jiù shì wǒ jiā", audioFileName: "HSK2_149",
colors: {
yellow: [1],
blue: [2,5],
pink: [0,3,4]
} },
{no:150, sentence: "火车站离医院只有三百米远", pinyin: " Huǒ chē zhàn lí yī yuàn zhǐ yǒu sān bǎi mǐ yuǎn", audioFileName: "HSK2_150",
colors: {
yellow: [3,6,9,10],
blue: [0,7,11],
pink: [2,5]
} },
{no:151, sentence: "哥哥让我帮他买一本书", pinyin: " Gē ge ràng wǒ bāng tā mǎi yì běn shū", audioFileName: "HSK2_151",
colors: {
blue: [3,6,8],
pink: [2,7]
} },
{no:152, sentence: "妈妈送了一个新手机给我", pinyin: " Mā ma sòng le yí ge xīn shǒu jī gěi wǒ", audioFileName: "HSK2_152",
colors: {
yellow: [4,9],
blue: [7,10],
pink: [2]
} },
{no:153, sentence: "我准备到中国留学", pinyin: " Wǒ zhǔn bèi dào Zhōng guó liú xué", audioFileName: "HSK2_153",
colors: {
yellow: [0,5,6,7],
blue: [1],
pink: [2,3]
} },
{no:154, sentence: "别去河边游泳，因为不安全", pinyin: " Bié qù hé biān yóu yǒng, yīn wèi bù ān quán", audioFileName: "HSK2_154",
colors: {
yellow: [0,2,4,11],
blue: [5],
pink: [1,8,9]
} },
{no:155, sentence: "因为昨晚没睡好，所以今天感觉很累", pinyin: " Yīn wèi zuó wǎn méi shuì hǎo, suǒ yǐ jīn tiān gǎn jué hěn lèi", audioFileName: "HSK2_155",
colors: {
yellow: [2,4,8,13],
blue: [3,6,9,12,14],
pink: [1,5,15]
} },
{no:156, sentence: "我想去教室学习，但是门是锁着的", pinyin: " Wǒ xiǎng qù jiào shì xué xí, dàn shì mén shì suǒ zhe de", audioFileName: "HSK2_156",
colors: {
yellow: [0,5,6,10],
blue: [1,12],
pink: [2,3,4,8,9,11]
} },



],
    
    conversation: [
        { no: 1, sentence: "你好吗？", pinyin: "Nǐ hǎo ma?", audioFileName: "" },
        { no: 2, sentence: "我很好，谢谢！", pinyin: "Wǒ hěn hǎo, xièxiè!", audioFileName: "" },
    ],
    lesson: [
        { no: 1, sentence: "杉崎康隆", pinyin: "shān qí kāng lóng", audioFileName: "", colors: { 
        yellow: [1,3]
        } },
        { no: 2, sentence: "杉树的杉，崎岖的崎，健康的康，兴隆的隆", pinyin: "shān shù de shān, qí qū de qí, jiàn kāng de kāng, xīng lóng de lóng", audioFileName: "", colors: { 
        yellow: [5,8,16,18],
        pink: [1,10,]
        } },
    ]
};