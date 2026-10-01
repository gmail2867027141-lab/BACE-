(function(){
  'use strict';

  const TRAITS=[['T1','灵视'],['T2','灵听'],['T3','灵嗅／灵触'],['T4','空间感知'],['T5','预知直觉'],['T6','梦境通道'],['T7','共情感知'],['T8','身体信号'],['T9','裂隙感知'],['T10','家族印记'],['T11','环境共振'],['T12','认知训练']];
  const BANK={
    T1:['我会注意到别人略过的光影、反射或空间细节。','在照片、镜面或昏暗处，我会反复确认一个难以判断来源的轮廓。','我对一个地点的视觉记忆，常包含很细的颜色、摆设或路径。','一幅画面或一个符号会在我脑中停留很久。','我会主动分辨：眼前的细节是事实、错觉还是暂时无法解释的体验。'],
    T2:['我会注意到别人没有提及的环境音、语调或回响。','安静时，我容易留意到细微、重复或难以判断来源的声音。','我会通过一个人的语气判断其状态是否变化。','醒来后，我有时会记住梦里的声音、对话或旋律。','听到不确定的声音时，我会尝试寻找现实来源。'],
    T3:['气味、温度、风感或材质会快速唤起我的具体联想。','我对一个空间的“熟悉或陌生”，常先来自触感或气味。','我会记得某件旧物的质地、温度或气味。','身体接触到不同材质时，我会明显调整自己的状态。','我能区分当下的感官刺激与后来附加的想象。'],
    T4:['进入陌生空间时，我会先注意动线、布局、出口或方位。','有些房间、建筑或路线会让我立刻感到舒适或不想停留。','我对地点的记忆常比对人物名字更清楚。','我会留意空间里不协调的摆设、光线或距离感。','我会通过重新走一遍路线来确认自己的空间判断。'],
    T5:['事情发生前，我有时会先出现一种难以解释的预感。','我会留意巧合、重复出现的讯号或时机变化。','我常能较早察觉一段关系或计划可能发生变化。','我会在事后核对自己的预感有没有现实依据。','即使预感强烈，我也能保留它只是一个待验证线索。'],
    T6:['我的梦境常有完整的人物、地点或连续情节。','我会反复梦见相近的地点、道路、房间或人物。','醒来后，梦里的情绪或画面会停留较久。','我会把梦中的片段和现实中的经历进行对照。','我会记录、复盘或主动调整自己的睡眠与梦境习惯。'],
    T7:['我通常能较快察觉亲近的人情绪变化。','在群体沉默或气氛微妙时，我会感到未说出口的信息。','我容易受他人的情绪或关系张力影响。','我会判断一份感受是自己的，还是来自周围的人。','面对强烈情绪时，我能给自己留出边界。'],
    T8:['紧张、陌生或不协调的场景会先引发我的身体反应。','我会注意到心跳、呼吸、疲劳或发冷等变化。','环境太嘈杂或人太多时，我需要主动恢复状态。','身体状态会影响我对地点、关系或事件的判断。','我有一套让身体回到稳定状态的方法。'],
    T9:['未完成的经历、矛盾细节或记忆空白会让我反复思考。','我会注意到叙事中前后对不上的细节。','某些地点、照片或旧物会让我感到一种“尚未结束”的意味。','我会把难以解释的断层先记录下来，而不是立刻下结论。','我可以允许一段经历暂时没有答案。'],
    T10:['家族故事、旧物或地方传说会让我想追溯来源。','我常把当下的感受与成长环境联系起来理解。','长辈说过的话、家庭习惯或旧照片会在我心中留下痕迹。','我会主动询问一个故事、物件或传统从哪里来。','我能把家族叙事当作线索，而不是唯一解释。'],
    T11:['天气、光线、自然环境或季节变化会明显影响我的状态。','我对旧建筑、车站、山林或特定街区有持续的感受。','我会反复注意同一路线、地点或场域中的变化。','某些自然场景会让我恢复、沉静或更容易思考。','我会把场域感受与睡眠、身体和现实事件一起记录。'],
    T12:['我会通过记录、阅读、独处或复盘整理强烈体验。','面对不确定信息时，我会寻找不同角度而非只相信第一反应。','我会给自己的体验建立分类、笔记或规律。','我愿意在新证据出现时修正先前的解释。','我能区分感受、记忆、推测与可验证的现实信息。']
  };
  const STRUCT=[
    ['S61','灵骸外壳／主接口','当多种线索同时出现时，我通常很快知道自己最先注意到的是哪一种。','outer'],
    ['S62','灵骸外壳／场域响应','不同地点会以相对稳定的方式影响我的注意力、情绪或身体状态。','outer'],
    ['S63','鞘—皮质屏蔽体／通透度','在紧张的人群或强烈环境里，我很难不接收到周围的情绪和刺激。','permeability'],
    ['S64','鞘—皮质屏蔽体／筛选力','我通常能区分自己的情绪、他人的状态与环境带来的影响。','filter'],
    ['S65','鞘—皮质屏蔽体／复位力','体验过强后，我有办法让自己回到较稳定的日常节奏。','reset'],
    ['S66','核心信念岩层／求证','遇到难解释的体验时，我优先想找事实、来源或可核对的证据。','evidence'],
    ['S67','核心信念岩层／意义','反复出现的梦、符号或巧合，会让我想理解它和当下生活的关系。','meaning'],
    ['S68','核心信念岩层／传承','我会自然地把强烈体验放进家族、地方或更早的故事中理解。','heritage'],
    ['S69','认知程序群／记录','我倾向于把值得注意的体验写下来，而不是只在脑中反复回想。','record'],
    ['S70','认知程序群／校准','我会主动区分感受、记忆、推测与现实信息，并在必要时求证。','calibrate']
  ];
  const ROLE_MATRIX=[
    ['CLASS-001','灵视者',['T1','T4','T9']],['CLASS-002','灵听者',['T2','T7','T6']],['CLASS-003','灵嗅灵触者',['T3','T8','T11']],
    ['CLASS-004','预知者',['T5','T6','T12']],['CLASS-005','梦行者',['T6','T5','T9']],['CLASS-006','共情者',['T7','T8','T2']],
    ['CLASS-007','体感者',['T8','T3','T4']],['CLASS-008','场域感应者',['T4','T11','T1']],['CLASS-009','裂隙感应者',['T9','T10','T5']],
    ['CLASS-010','传承者',['T10','T9','T12']],['CLASS-011','环境共振者',['T11','T4','T8']],['CLASS-012','校准者',['T12','T5','T6']]
  ];
  const ROLE={
    'CLASS-001':{en:'VISUAL ANOMALY PROFILE',type:'视觉显像型',mark:'01',folk:'灵视体质',summary:'你的注意系统会优先捕捉光影、轮廓、反射与图像残留，并把难以归类的视觉细节保留为待核查线索。',quote:'“先看见，不等于已经看懂。”',interface:'视觉异常信号接收',path:['环境光影','轮廓显现','图像残留','多源核对'],phenomena:[['VIS-001','余光显影','视野边缘出现一闪而过的轮廓或移动感'],['MIR-002','镜面回声','在反射、玻璃或暗面中注意到异常细节'],['IMG-003','图像残留','照片、符号或画面在记忆中持续停留']],manifest:['对余光中的移动或阴影高度敏感','容易记住照片、反射和空间边缘','某些符号会在脑中停留很久','进入昏暗空间后迅速扫描轮廓','比别人更早发现视觉不协调','会主动寻找第二视角确认'],triggers:'昏暗光线、镜面反射、疲劳、陌生建筑、旧照片与快速光影变化。',resource:'视觉记忆、细节识别、图像比较与现场复原。',risks:[['低照度错视','光线不足时，大脑会自动补全轮廓。'],['期待效应','预先相信某处异常，会提高发现“像异常”的概率。'],['疲劳残像','用眼过度、睡眠不足会增加闪光与残影体验。'],['单一视角','未改变光线、角度或距离就形成结论。']],task:'七日视觉交叉核验：记录时间、光线、距离、角度；改变一次观察条件，再请另一人独立描述。'},
    'CLASS-002':{en:'AUDITORY ANOMALY PROFILE',type:'无源听觉型',mark:'02',folk:'灵听体质',summary:'你的感知入口偏向细微声音、语调、回响与梦中听觉；你会从声场变化中判断环境和人的状态。',quote:'“声音先抵达，意义稍后才出现。”',interface:'无源听觉信号接收',path:['背景声场','异常音点','语义联想','声源追踪'],phenomena:[['AUD-001','无源声响','在安静环境中注意到难以判断来源的声音'],['CALL-002','呼唤感','偶尔产生像被叫到名字的瞬间感受'],['DRA-003','梦内听觉','醒后仍记得梦中的对话、旋律或提示']],manifest:['能迅速注意环境中的微弱声响','对语气与停顿十分敏感','安静时更容易察觉重复声音','梦中对话醒后保留较清楚','会从回响判断空间变化','常主动寻找声音的现实来源'],triggers:'夜间安静、持续背景噪声、半梦半醒、压力、陌生空间与回声环境。',resource:'声源辨认、语调识别、听觉记忆与环境监听。',risks:[['环境底噪','管道、电器、风与建筑传声常被误认。'],['半梦听觉','入睡或醒来阶段可能出现短暂听觉体验。'],['语义补全','模糊声音会被大脑补成熟悉词句。'],['持续困扰','若声音持续影响生活，应优先寻求专业评估。']],task:'七日声源定位：记录声音方向、持续时间、当时状态；关闭或移动可能声源后再次确认。'},
    'CLASS-003':{en:'RESIDUAL SENSORY PROFILE',type:'残留感官型',mark:'03',folk:'灵嗅／灵触体质',summary:'气味、温度、风感与材质是你的主要线索。地点或旧物往往先以身体接触感唤起记忆与联想。',quote:'“有些档案，不以文字留下。”',interface:'嗅觉—触觉残留接收',path:['气味温差','身体接触','记忆唤起','材质核对'],phenomena:[['OLF-001','无源气味','短暂闻到难以立即定位来源的气味'],['TAC-002','触觉残留','接触物件后产生持续的温度或触感印象'],['TMP-003','局部温差','在同一空间注意到局部冷热或风感变化']],manifest:['气味会快速唤起具体场景','对旧物材质与温度印象深刻','进入空间先注意空气与触感','能记住物件的细微表面差异','身体接触会改变当下情绪','倾向通过实物确认一段故事'],triggers:'旧物、古建、潮湿环境、通风变化、强烈气味、温差与皮肤疲劳。',resource:'多感官记忆、物件观察、环境细节与身体边界。',risks:[['隐蔽来源','霉菌、管道、织物和清洁剂可能造成气味。'],['温差误读','空调、缝隙和湿度会制造局部冷热。'],['联想附着','熟悉气味容易自动召回人物与故事。'],['健康优先','持续异常嗅觉或触觉需先做现实检查。']],task:'七日物件观察：每次只记录气味、温度、材质和来源；不先阅读物件故事，再进行对照。'},
    'CLASS-004':{en:'PRECOGNITIVE PATTERN PROFILE',type:'时间同步型',mark:'04',folk:'预知体质',summary:'你会优先注意事件发生前的预感、重复信号与巧合时机，并自然地把当前线索投向未来可能性。',quote:'“预感是一条假设，不是一份判决。”',interface:'时间—同步性线索接收',path:['微弱预感','事件预测','提前记录','事后核验'],phenomena:[['PRE-001','前兆感','事件前出现方向不明但强烈的倾向判断'],['SYN-002','同步巧合','想法、联系与事件在短时间内重复对应'],['TIM-003','时序压缩','感觉若干事件像沿同一路径快速聚集']],manifest:['容易在变化前产生方向感','关注重复数字、话题与时机','能较早察觉关系趋势','常把梦境与后续事件对照','愿意记录命中与未命中','直觉强时仍保留验证空间'],triggers:'关系转折、计划变化、信息密集期、睡眠波动、重大决定与重复刺激。',resource:'趋势识别、时机敏感、风险预演与模式追踪。',risks:[['事后偏差','事件发生后会高估先前预感的明确程度。'],['只记命中','忽略没有发生的预测会制造高准确感。'],['模糊预测','越宽泛的内容越容易与现实对应。'],['焦虑投射','担忧本身也会被体验为强烈预感。']],task:'七日预感盲记：在事件前写明内容、期限和可验证标准；期限后同时统计命中与未命中。'},
    'CLASS-005':{en:'DREAM INTERFACE PROFILE',type:'梦境接触型',mark:'05',folk:'通梦体质',summary:'你的异常信息主要通过梦境叙事、重复场景与醒后残留进入；预知直觉和裂隙感知会放大其中未完成的部分。',quote:'“梦不是结论；它是等待现实校对的内部记录。”',interface:'非清醒信息接收',path:['现实经历','睡眠重组','醒后残留','现实对照'],phenomena:[['DREAM-004','重复场景梦','同一地点、道路、房间或人物跨梦境出现'],['SYNC-002','梦境同步','梦中元素与后续现实产生相似或巧合对应'],['RIFT-003','醒后残留','画面、声音、情绪或身体感在醒后持续']],manifest:['梦境具有连续人物与地点','反复梦见相近道路或房间','醒后保留清晰画面和情绪','进入现实场景时产生梦境熟悉感','重大变化前后梦境密度增加','会对照梦境与现实重复符号'],triggers:'睡眠节律变化、陌生地点、关系转折、重大压力、旧物照片与连续疲劳。',resource:'梦境叙事记忆、象征联想、重复线索识别与长期记录。',risks:[['事后选择性对应','只记住与现实相符的梦境部分。'],['醒后补写','回忆和解释时加入原梦没有的细节。'],['睡眠污染','疲劳、压力和作息变化会增强梦境。'],['单次体验定论','一次相似不等于预知或外部讯息。']],task:'七日梦境—现实对照：醒来只记录原始人物、地点、物件、声音与情绪；第七天才分析重复结构。'},
    'CLASS-006':{en:'EMPATHIC RESONANCE PROFILE',type:'情绪共振型',mark:'06',folk:'共情体质',summary:'你会快速捕捉他人的情绪变化、关系张力与群体气氛，身体信号和听觉语调会成为重要协同通道。',quote:'“感受到别人，不等于必须替别人承担。”',interface:'人际情绪场接收',path:['群体气氛','情绪镜像','身体共振','边界复位'],phenomena:[['EMP-001','他感共振','接近某人后情绪或身体状态快速改变'],['GRP-002','群体场压','进入群体后感到明显的紧张、兴奋或疲惫'],['MIR-003','情绪镜像','在对方未明说时先感到相似情绪']],manifest:['很快察觉熟人情绪变化','群体沉默时感到未说出口的信息','容易被冲突氛围消耗','身体会随关系张力变化','能判断一部分感受的来源','需要独处恢复边界'],triggers:'密集人群、亲密关系冲突、照护角色、封闭会议、持续社交与睡眠不足。',resource:'情绪识别、人际洞察、气氛调节与关系预警。',risks:[['读心误区','察觉情绪不等于知道对方具体想法。'],['边界模糊','长期代入他人可能忽略自己的需求。'],['情绪感染','压力环境会自然改变个体情绪。'],['责任过载','不必为所有人的状态负责。']],task:'七日情绪边界表：分别记录“我的感受、观察到的事实、我猜测的他人状态”，事后再核对。'},
    'CLASS-007':{en:'SOMATIC WARNING PROFILE',type:'身体预警型',mark:'07',folk:'体感体质',summary:'你的身体往往先于语言作出反应。心跳、寒意、压迫、疲劳和肌肉紧张会成为判断环境的第一组信号。',quote:'“身体会报警，但报警原因仍需排查。”',interface:'身体预警信号接收',path:['环境刺激','身体报警','状态辨识','恢复核验'],phenomena:[['SOM-001','无故寒意','特定地点或话题出现短暂发冷或起鸡皮'],['SOM-002','心律预警','压力或异常场景中先感到心跳呼吸变化'],['PRS-003','空间压迫','进入某些环境后出现明显沉重或不适']],manifest:['进入陌生场景先有身体反应','会留意心跳呼吸和冷热变化','人多嘈杂时容易疲惫','身体状态影响空间判断','能觉察压力累积','有自己的恢复方式'],triggers:'高压、噪声、人群、封闭空间、疲劳、咖啡因、温差与身体不适。',resource:'身体觉察、风险预警、节律管理与恢复意识。',risks:[['生理因素','睡眠、血糖、咖啡因等都可能改变体感。'],['焦虑循环','关注身体信号会进一步放大信号。'],['环境误归因','不适不一定来自地点或他人。'],['医疗优先','持续胸痛、呼吸困难等应及时就医。']],task:'七日身体基线：记录睡眠、饮食、咖啡因、地点与体感强度；先比较生理变量，再讨论场域。'},
    'CLASS-008':{en:'SPATIAL FIELD PROFILE',type:'场域读取型',mark:'08',folk:'场域感应体质',summary:'你对空间动线、建筑尺度、出入口与氛围变化特别敏感；环境共振和视觉细节共同构成地点判断。',quote:'“空间会说话，但先要听懂它的结构。”',interface:'空间—场域信息接收',path:['进入地点','动线扫描','氛围判断','路径复核'],phenomena:[['GEO-001','场域压感','进入地点后迅速产生舒适或排斥感'],['HSE-002','建筑记忆','对旧建筑、房间和走廊形成持续印象'],['PTH-003','路径回声','对路线、出口与空间错位高度敏感']],manifest:['进入陌生处先看出口动线','能快速记住建筑布局','对不协调摆设十分敏感','特定房间带来稳定情绪变化','容易记住地点胜过人名','会重走路线确认判断'],triggers:'旧建筑、地下空间、狭窄通道、复杂动线、陌生城市与光线变化。',resource:'空间记忆、现场观察、路线规划与环境安全感。',risks:[['建筑因素','光线、通风、噪声会直接影响场域感。'],['首因效应','第一次不适可能长期影响后续判断。'],['故事污染','先知道传说会改变地点体验。'],['路径疲劳','迷路或疲劳会增强空间压迫。']],task:'七日盲场域记录：先不查地点故事，记录光线、气味、声音、动线与身体感，再查现实资料。'},
    'CLASS-009':{en:'RIFT PERCEPTION PROFILE',type:'叙事裂隙型',mark:'09',folk:'裂隙感应体质',summary:'你会被矛盾、记忆空白、未完成事件与叙事断层吸引，并持续追踪“这里还有什么没有被说清楚”。',quote:'“裂隙不是答案，而是需要标记的位置。”',interface:'叙事断层信息接收',path:['矛盾细节','未闭合感','持续追踪','多源复原'],phenomena:[['RIFT-001','记忆断层','某段经历存在难以还原的空白或跳接'],['RIFT-002','重复残片','同一图像、地点或叙述片段反复返回'],['RIFT-003','未闭合感','对旧物、照片或事件产生尚未结束的感觉']],manifest:['容易发现前后不一致','会记住别人略过的空白','未完成事件长时间占据注意','旧照片和物件触发追问','允许部分问题暂时无解','倾向建立多版本时间线'],triggers:'失落事件、旧档案、模糊记忆、矛盾叙述、废弃地点与重大人生转折。',resource:'漏洞发现、档案追踪、时间线重建与问题意识。',risks:[['记忆重构','人的记忆会在回想中被重新编辑。'],['叙事执念','持续追问可能让普通空白显得异常。'],['信息拼接','不同来源的片段可能被错误合并。'],['未知容忍','没有答案不等于存在超自然原因。']],task:'七日裂隙时间线：把事实、他人说法、个人记忆、推测分四栏；不以推测填补事实空白。'},
    'CLASS-010':{en:'ANCESTRAL IMPRINT PROFILE',type:'家族传承型',mark:'10',folk:'传承体质',summary:'家族故事、地方传统、旧物和长辈叙述会成为你的主要解释入口；你倾向追溯体验背后的来处。',quote:'“传承给你线索，也可能给你一副滤镜。”',interface:'家族—地方叙事接收',path:['旧物传说','家族叙事','身份共鸣','来源考证'],phenomena:[['ANC-001','家族回声','不同长辈反复提到相近人物、禁忌或经历'],['OBJ-002','旧物附着','特定物件持续承载强烈情感和故事'],['LOC-003','地方传承','个人体验与地方民俗、传说产生连接']],manifest:['喜欢追问家族故事来源','旧照片和遗物带来强烈联想','会记住长辈的禁忌与习惯','将当下感受联系成长环境','对地方史和民俗敏感','能把传承当线索而非定论'],triggers:'祭祀节日、返乡、旧物整理、长辈叙述、地方遗址与身份转折。',resource:'口述史、文化记忆、来源追溯与代际理解。',risks:[['口述变形','家族故事会随代际传播而改变。'],['身份投射','希望归属会放大与传说相符的部分。'],['禁忌压力','传统解释可能增加不必要的恐惧。'],['证据分层','故事价值不等于事实已被证明。']],task:'七日家族双源访谈：同一事件分别询问两位知情者，标出一致、不同与无法确认的部分。'},
    'CLASS-011':{en:'ENVIRONMENTAL RESONANCE PROFILE',type:'自然共振型',mark:'11',folk:'环境共振体质',summary:'天气、季节、地貌、自然声场和城市环境会明显改变你的注意与能量状态，空间感知和体感共同参与判断。',quote:'“环境改变状态，状态也改变你看到的环境。”',interface:'自然—环境场接收',path:['天气地貌','状态变化','重复地点','节律校准'],phenomena:[['ENV-001','天气响应','天气变化前后情绪或身体状态明显改变'],['LAND-002','地貌共振','山林、水域、车站或街区带来稳定感受'],['SEA-003','季节回波','特定季节反复出现相近梦境、情绪或记忆']],manifest:['对天气和光线变化敏感','在自然环境中恢复更快','特定地点带来稳定状态','反复注意同一路线变化','季节会改变梦境与情绪','愿意长期记录场域差异'],triggers:'气压变化、季节交替、山林水域、旧街区、交通节点与持续室内生活。',resource:'生态观察、节律感知、地点比较与恢复环境选择。',risks:[['气象因素','气压、温度和光照会直接影响身体状态。'],['生活节律','作息变化可能与季节同时发生。'],['地点偏好','熟悉与安全感会被误认作特殊共振。'],['相关非因果','同时发生不代表环境造成全部体验。']],task:'七日环境网格：固定时间记录天气、地点、睡眠、身体和情绪，比较同地不同日与异地同状态。'},
    'CLASS-012':{en:'COGNITIVE CALIBRATION PROFILE',type:'多通道校准型',mark:'12',folk:'研究型通灵体质',summary:'你最突出的不是单一感官，而是记录、分类、复盘与修正。你能够把多通道体验组织成可持续观察的档案。',quote:'“最可靠的天赋，是知道何时修正解释。”',interface:'多通道研究接收',path:['体验采集','分类建模','反证核验','持续修订'],phenomena:[['CAL-001','主动校准','强烈体验后会寻找事实、替代解释与反例'],['LOG-002','档案化','把梦、巧合、身体和场域体验持续记录'],['MUL-003','多通道联动','多个感知入口在同一事件中共同出现']],manifest:['习惯记录和分类体验','愿意寻找不同解释','能区分感受与事实','新证据出现时愿意修正','多种通道相对均衡','重视方法胜过单次神奇体验'],triggers:'长期研究、密集阅读、冥想记录、复杂事件、多源信息与重复复盘。',resource:'研究日志、结构建模、现实校准与跨通道整合。',risks:[['过度分析','持续建模可能让普通体验变得沉重。'],['体系偏见','已有术语会影响新体验的描述。'],['确认循环','只收集支持模型的材料会让模型封闭。'],['生活脱离','研究应服务日常，而不是替代日常。']],task:'七日双假设日志：每条体验同时写“BACE解释”和“普通现实解释”，寻找能区分两者的新证据。'}
  };
  const BASELINE={en:'BASELINE OBSERVATION PROFILE',type:'基础观察型',mark:'00',folk:'基础观察样本',summary:'本次记录没有形成足够突出的主导通道。你的回答更接近日常感知基线，暂时不应被强行归入十二种异常认知角色。',quote:'“没有形成异常峰值，也是一份有效记录。”',interface:'日常感知基线',path:['日常刺激','一般注意','现实判断','持续观察'],phenomena:[['BASE-001','低频体验','各类异常体验均未形成稳定高频响应'],['BASE-002','分布平缓','十二通道之间没有明显突出的主入口'],['BASE-003','待观察状态','当前状态不足以支持更具体的角色归档']],manifest:['大部分体验处于日常可解释范围','没有持续突出的单一感知入口','对异常线索的响应频率较低','能够维持普通现实判断','可能受当前状态和答题时段影响','适合先记录再决定是否复测'],triggers:'状态变化、睡眠波动、重大生活事件或进入陌生环境后，可重新观察。',resource:'现实判断、稳定边界、低过载风险与开放观察。',risks:[['强行认领','不要因为期待某个角色而修改真实回答。'],['一次定型','低响应只代表当前记录，不是永久身份。'],['忽略状态','疲劳、压力和答题理解会改变结果。'],['神秘化压力','不需要通过异常身份证明个人价值。']],task:'七日日常基线记录：只记录确实发生的体验、当时状态和现实来源；若仍无稳定峰值，保留基础观察身份。'};
  const LABEL=['从未符合','极少符合','偶尔符合','有时符合','经常符合','高度符合'];
  const $=s=>document.querySelector(s);
  const $$=s=>Array.from(document.querySelectorAll(s));
  const byId=id=>document.getElementById(id);
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  function installScreens(){
    const result=byId('result');
    const test=document.createElement('section');
    test.id='test';test.className='screen final-test';
    test.innerHTML='<div class="scan-top"><div><p id="module" class="eyebrow"></p><p id="subjectId" class="mono"></p></div><div><p id="progressText" class="mono"></p><div id="progressRail" class="progress-rail"></div><p id="progressCaption" class="entry-note"></p></div></div><article class="question"><div class="q-index"><strong id="qNumber"></strong><p id="qCode" class="eyebrow"></p></div><div class="q-copy"><p class="eyebrow">CURRENT OBSERVATION / 当前观察点</p><h1 id="qText"></h1><p class="question-hint">请选择最接近你过去三个月稳定状态的一项。犹豫时选中间档；这不是对超自然能力的证明。</p><div id="options" class="options"></div></div></article><div class="test-nav"><button id="prev" class="text-button" type="button">← 返回上一观察点</button><span class="entry-note">答案可返回修改 · 自动保存在本设备</span></div>';
    const analysis=document.createElement('section');
    analysis.id='analysis';analysis.className='screen final-analysis';
    analysis.innerHTML='<p class="eyebrow">ARCHIVE CORE / STRUCTURAL READING</p><div class="analysis-glyph">∆</div><h1>正在装配你的<br>完整异常认知档案</h1><p id="log" class="mono">读取十二感知接口…</p><div class="analysis-lines"><i></i><i></i><i></i><i></i></div>';
    result.before(test,analysis);
  }

  function installForm(){
    const form=$('.archive-form');
    const inputs=form.querySelectorAll('input');
    const selects=form.querySelectorAll('select');
    inputs[0].id='alias';
    selects[0].id='age';selects[1].id='gender';
    inputs[1].id='region';selects[2].id='occupation';
    form.setAttribute('onsubmit','event.preventDefault();BACE70.start()');
    $('.quick-nav').style.display='none';
    const coverTitle=$('#cover h1');
    coverTitle.innerHTML='70题，识别你的<br><em>灵异体质与通灵天赋原型</em>';
    $('#cover .lead').textContent='从灵视、灵听、梦境、预知、共情、体感、场域到家族印记，70 个观察点将继续剖读你的灵骸外壳、鞘—皮质屏蔽体、核心信念岩层与认知程序，生成一份完整 BACE 研究者档案。';
    const boundary=document.createElement('p');
    boundary.className='cover-boundary';
    boundary.textContent='BACE 原创超自然世界观互动测试 · 结果是体验倾向与角色原型，不是超自然能力认证，也不具有医疗或心理诊断效力。';
    $('#cover .entry-note').after(boundary);
  }

  const QUESTIONS=TRAITS.flatMap(([id,name])=>BANK[id].map((text,i)=>({id:`${id}-${i+1}`,module:`${name} / ${id}`,text,trait:id}))).concat(STRUCT.map(x=>({id:x[0],module:x[1],text:x[2],metric:x[3]})));
  const phaseOf=i=>i<60?'十二感知通道':i<62?'灵骸外壳':i<65?'鞘—皮质屏蔽体':i<68?'核心信念岩层':'认知程序群';
  const fmtDate=()=>new Date().toLocaleDateString('zh-CN',{year:'numeric',month:'2-digit',day:'2-digit'}).replaceAll('/','.');
  const average=a=>a.length?Math.round(a.reduce((x,y)=>x+y,0)/a.length):0;

  window.BACE70={
    answers:Array(70).fill(null),index:0,person:null,id:'',result:null,
    go(id){$$('.screen').forEach(x=>x.classList.remove('active'));byId(id).classList.add('active');window.scrollTo({top:0,behavior:'smooth'});},
    start(){
      const alias=byId('alias').value.trim();if(!alias){byId('alias').focus();return;}
      const state=$('input[name="state"]:checked')?.parentElement?.textContent.trim()||'普通观察者';
      this.person={alias,age:byId('age').value,gender:byId('gender').value,region:byId('region').value.trim()||'未登记',occupation:byId('occupation').value,wechat:byId('wechat')?.value.trim()||'',state};
      this.id=`BACE-CN-70-${String(Math.floor(Math.random()*999999)).padStart(6,'0')}`;
      this.index=0;this.answers=Array(70).fill(null);this.go('test');this.render();this.saveDraft();
    },
    render(){
      const q=QUESTIONS[this.index],percent=Math.round((this.index+1)/70*100);
      byId('module').textContent=`${phaseOf(this.index)} / ${q.module}`;byId('subjectId').textContent=this.id;
      byId('qCode').textContent=q.id;byId('qNumber').textContent=String(this.index+1).padStart(2,'0');byId('qText').textContent=q.text;
      byId('progressText').textContent=`STRUCTURE READ: ${percent}%`;byId('progressCaption').textContent=`当前层：${phaseOf(this.index)}｜第 ${this.index+1} / 70 个观察点`;
      byId('progressRail').innerHTML=Array.from({length:14},(_,i)=>`<i class="${i<Math.ceil((this.index+1)/5)?'ready':''}"></i>`).join('');
      byId('prev').style.visibility=this.index?'visible':'hidden';
      byId('options').innerHTML=LABEL.map((x,i)=>`<button type="button" class="option ${this.answers[this.index]===i?'selected':''}" data-value="${i}"><b>0${i}</b><span>${x}</span></button>`).join('');
      $$('#options .option').forEach(btn=>btn.addEventListener('click',()=>this.answer(Number(btn.dataset.value))));
    },
    answer(v){this.answers[this.index]=v;this.saveDraft();if(this.index===69)this.analyze();else{this.index++;this.render();}},
    prev(){if(this.index){this.index--;this.render();}},
    saveDraft(){localStorage.setItem('bace-70-draft',JSON.stringify({id:this.id,person:this.person,index:this.index,answers:this.answers}));},
    analyze(){
      this.go('analysis');
      const logs=['读取十二感知接口…','定位灵骸外壳主入口…','解析鞘—皮质屏蔽体…','比对核心信念岩层…','匹配十二研究者 CLASS…','挂靠异常现象与现实校验…','生成个人档案编号与七日协议…'];
      let i=0;byId('log').textContent=logs[0];
      const timer=setInterval(()=>{i++;if(i<logs.length){byId('log').textContent=logs[i];}else{clearInterval(timer);this.result=this.calculate();setTimeout(()=>this.present(),450);}},360);
    },
    calculate(){
      const traits=Object.fromEntries(TRAITS.map(([id])=>[id,0]));
      const metrics={outer:[],permeability:[],filter:[],reset:[],evidence:[],meaning:[],heritage:[],record:[],calibrate:[]};
      QUESTIONS.forEach((q,i)=>{const v=this.answers[i]??0;if(q.trait)traits[q.trait]+=v*4;else metrics[q.metric].push(v*20);});
      // 每个维度有5题：单题0—5分乘4，五题合计即为0—100，不能再次除以5。
      Object.keys(traits).forEach(k=>traits[k]=Math.max(0,Math.min(100,Math.round(traits[k]))));
      Object.keys(metrics).forEach(k=>metrics[k]=average(metrics[k]));
      let roles=ROLE_MATRIX.map(([id,name,keys])=>({id,name,score:Math.round(traits[keys[0]]*.4+traits[keys[1]]*.32+traits[keys[2]]*.28)})).sort((a,b)=>b.score-a.score);
      const top=Object.entries(traits).map(([id,score])=>({id,name:TRAITS.find(x=>x[0]===id)[1],score})).sort((a,b)=>b.score-a.score);
      const values=Object.values(traits),mean=average(values),std=Math.sqrt(values.reduce((sum,v)=>sum+(v-mean)**2,0)/values.length);
      const hybrid=mean>=50&&std<=12&&values.filter(v=>v>=50).length>=8;
      if(hybrid){const h=roles.find(x=>x.id==='CLASS-012');h.score=Math.max(h.score,Math.min(96,Math.round(mean+6)));roles=[h,...roles.filter(x=>x.id!=='CLASS-012')].sort((a,b)=>b.score-a.score||Number(b.id==='CLASS-012')-Number(a.id==='CLASS-012'));}
      const spread=roles[0].score-roles[1].score;
      return{traits,metrics,roles,top,spread,hybrid,mean,std:Math.round(std)};
    },
    present(){
      const r=this.result,p=r.roles[0],secondary=r.roles[1],latent=r.roles[2],top=r.top;
      const baseline=top[0].score<35;
      const d=baseline?BASELINE:ROLE[p.id];
      const grade=top.filter(x=>x.score>=80).length>=3?'L4 / 特殊观察样本':top[0].score>=80?'L3 / α级高响应样本':top[0].score>=60?'L2 / β级活跃样本':top[0].score>=40?'L1 / γ级敏感样本':'L0 / 基础观察样本';
      const m=r.metrics;
      const sheath=m.permeability>=65&&m.filter<55?'高通透响应型':m.filter>=65&&m.reset>=55?'选择性通透型':m.permeability<45?'高屏蔽型':'复位观察型';
      const sheathText=m.permeability>=65&&m.filter<55?'外部刺激较容易越过筛选边界；本次档案更重视信息减量、身体复位和现实来源检查。':m.filter>=65&&m.reset>=55?'你能接收较强体验，也有较明确的筛选与复位方式；继续保持记录和现实核对。':m.permeability<45?'你通常不会让外部刺激长时间停留，只有在特定条件下才形成高强度响应。':'你会在接收与恢复之间寻找节律，稳定作息和记录有助于分辨信号。';
      const layers=[['求证岩层',m.evidence],['意义岩层',m.meaning],['传承岩层',m.heritage],['秩序岩层',average([m.record,m.calibrate])]].sort((a,b)=>b[1]-a[1]);
      const belief=layers[0][0];
      const beliefText={求证岩层:'你会优先追问来源、证据与可复查时间线。',意义岩层:'你会追问体验与当前人生、关系和选择之间的意义。',传承岩层:'你会把体验放入家族、地方和历史叙事中理解。',秩序岩层:'你会通过分类、记录和方法建立个人解释秩序。'}[belief];
      const program=m.record>=65&&m.calibrate>=65?'双重校准程序':m.record>=m.calibrate?'记录归档程序':'现实校准程序';
      const programText=program==='双重校准程序'?'先完整保留体验，再利用新证据修正解释。':program==='记录归档程序'?'先留下原始材料，延后解释，避免记忆被结论改写。':'先寻找普通现实解释与反例，再决定是否进入异常档案。';
      const shell=`${top[0].name}主接口型`;
      const shellText=`你首先通过「${top[0].name}」接收线索，并由「${top[1].name}」与「${top[2].name}」形成协同放大。`;

      $('.identity-card .stamp').textContent=grade;$('.identity-card h2').textContent=this.person.alias;$('.role-mark').textContent=d.mark;
      $('.identity-card .mono').textContent=this.id;
      const idPs=$$('.identity-card p');if(idPs[2])idPs[2].textContent=`生成日期：${fmtDate()}`;if(idPs[3])idPs[3].textContent=`${this.person.region} / ${this.person.occupation}`;
      const roleCard=$('.role-card');roleCard.querySelector('h1').textContent=baseline?'基础观察样本':p.name;
      roleCard.querySelector('h3').textContent=baseline?'CLASS-000 · BASELINE OBSERVATION':`${p.id} · ${d.en}`;
      roleCard.querySelector('h3').nextElementSibling.textContent=baseline?'本次未形成足够清晰的主导通道。它不代表“没有体质”，而表示当前回答更接近日常基线；建议在状态变化后重新观察，不强行认领身份。':`${d.summary} 你的前三通道是${top[0].name}、${top[1].name}与${top[2].name}；分类区分度为${r.spread>=10?'高':r.spread>=5?'中':'低'}，因此结果应作为个人观察假设，而非能力证明。`;
      roleCard.querySelector('.tag-row').innerHTML=[d.folk,shell,sheath,belief].map(x=>`<span>${esc(x)}</span>`).join('');roleCard.querySelector('blockquote').textContent=d.quote;
      const layerCards=$$('.layer');
      [[shell,shellText],[sheath,sheathText],[belief,beliefText],[program,programText]].forEach((v,i)=>{layerCards[i].querySelector('h3').textContent=v[0];layerCards[i].querySelector('p:last-child').textContent=v[1];});
      this.renderMatrix(r.traits);
      const relation=$$('.relation-grid .note');relation[0].querySelector('p:last-child').innerHTML=baseline?'当前不强行分配十二 CLASS。建议先记录高频体验，再于不同睡眠、压力和环境状态下复测。':`<b>主角色：${p.name}</b>负责${d.interface}；<b>次角色：${secondary.name}</b>提供第二组解释通道；<b>潜在角色：${latent.name}</b>描述较低频但可能在特定情境出现的结构。三者不是互相排斥的人格标签，而是同一感知网络中的主入口、协同层与背景层。`;
      relation[1].querySelector('p:last-child').textContent=d.task;
      this.updateExpanded(d,r,{p,secondary,latent,grade,shell,sheath,belief,program,baseline});
      const safeRecord={id:this.id,person:{...this.person,wechat:this.person.wechat?'已登记（仅本设备）':''},result:r,generated:new Date().toISOString()};
      localStorage.setItem('bace-full70',JSON.stringify(safeRecord));localStorage.removeItem('bace-70-draft');this.go('result');
    },
    renderMatrix(traits){
      const matrix=$('.matrix');let radar=matrix.querySelector('.radar-wrap');if(!radar){radar=document.createElement('div');radar.className='radar-wrap';matrix.querySelector('.trait-grid').before(radar);}
      const cx=210,cy=210,max=145,keys=TRAITS.map(x=>x[0]);
      const point=(i,r)=>{const a=-Math.PI/2+i*Math.PI*2/12;return`${(cx+Math.cos(a)*r).toFixed(1)},${(cy+Math.sin(a)*r).toFixed(1)}`;};
      const rings=[.25,.5,.75,1].map(k=>`<polygon points="${keys.map((_,i)=>point(i,max*k)).join(' ')}"/>`).join('');
      const axes=keys.map((_,i)=>`<line x1="${cx}" y1="${cy}" x2="${point(i,max).split(',')[0]}" y2="${point(i,max).split(',')[1]}"/>`).join('');
      const values=keys.map((k,i)=>point(i,max*traits[k]/100)).join(' ');
      const labels=TRAITS.map(([id,name],i)=>{const [x,y]=point(i,max+28).split(',');return`<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle">${id} ${name}</text>`;}).join('');
      radar.innerHTML=`<div><p class="eyebrow">PERSONAL PERCEPTION NETWORK</p><h3>个人感知网络图</h3><p>黄色区域显示十二通道相对分布；它是本次答题倾向，不是能力强度。</p></div><svg viewBox="0 0 420 420" role="img" aria-label="十二维感知雷达图"><g class="radar-grid">${rings}${axes}</g><polygon class="radar-value" points="${values}"/>${labels}</svg>`;
      $('.trait-grid').innerHTML=TRAITS.map(([id,name])=>`<div class="trait"><span>${id} ${name}</span><i><b style="width:${traits[id]}%"></b></i><strong>${traits[id]}%</strong></div>`).join('');
    },
    updateExpanded(d,r,x){
      const classId=x.baseline?'CLASS-000':x.p.id;
      const className=x.baseline?'基础观察样本':x.p.name;
      $('.verdict-main .archive-code').textContent=`${classId} / ${d.type}`;
      $('.verdict-main h2').innerHTML=`你的灵异体质原型：<em>${esc(d.folk)}</em>`;
      $('.verdict-main h2').nextElementSibling.textContent=`在 BACE 世界观中，你更接近「${d.type}」：${d.summary} 这是超自然叙事框架下的角色解释，不是对通灵能力的事实认证。`;
      const dd=$$('.verdict-meta dd');if(dd[0])dd[0].textContent=d.interface;if(dd[1])dd[1].textContent=x.shell;if(dd[2])dd[2].textContent=x.sheath;if(dd[3])dd[3].textContent=x.belief;if(dd[4])dd[4].textContent=x.grade;
      $('.phenomena-grid').innerHTML=d.phenomena.map((p,i)=>`<article><span>0${i+1} / ${esc(p[0])}</span><h3>${esc(p[1])}</h3><p>${esc(p[2])}</p><b>${i===0?'主现象':'协同现象'}</b><em>${i===0?'高关联':'中度关联'}</em></article>`).join('');
      const evidenceHeading=$('.evidence-section .section-heading h2');
      if(evidenceHeading)evidenceHeading.textContent=x.baseline?'为什么暂不分配十二种CLASS':`为什么被归档为“${className}”`;
      const interfaceCaption=$('.interface-section .section-heading > p');
      if(interfaceCaption)interfaceCaption.textContent=`灵骸外壳：${x.baseline?'基础观察接口':x.shell}`;
      const evidence=$('.evidence-grid');
      evidence.innerHTML=`<article><span>01 / 主通道</span><h3>${r.top[0].id} ${r.top[0].name} · ${r.top[0].score}%</h3><p>构成主要信息入口，决定你最先注意到什么。</p></article><article><span>02 / 协同通道</span><h3>${r.top[1].id} ${r.top[1].name} · ${r.top[1].score}%</h3><p>负责放大、连接或解释主通道线索。</p></article><article><span>03 / 背景通道</span><h3>${r.top[2].id} ${r.top[2].name} · ${r.top[2].score}%</h3><p>在特定环境、压力或睡眠条件下更容易出现。</p></article><article><span>04 / 分类区分度</span><h3>${r.spread>=10?'高':r.spread>=5?'中':'低'} · 差值 ${r.spread}</h3><p>${r.spread<5?'主、次角色高度重叠，应把结果理解为复合结构。':'主角色与相邻角色之间已形成可辨识边界。'}</p></article>`;
      const nodes=$$('.signal-path div');d.path.forEach((v,i)=>{nodes[i].querySelector('b').textContent=v;nodes[i].querySelector('small').textContent=['原始刺激或经历进入注意范围','在主通道中形成可感知线索','经由鞘与信念岩层被赋予意义','通过记录、对照与反证完成校准'][i];});
      const dual=$$('.dual-reading article');dual[0].querySelector('h3').textContent=d.interface;dual[0].querySelector('p:last-child').textContent=x.baseline?`在 BACE 超自然世界观中，基础观察样本不会被强行解释为梦行者或其他角色。${d.summary}`:`在 BACE 超自然世界观中，${d.summary} 相关体验会被暂时归入${d.phenomena.map(x=>x[1]).join('、')}等现象档案，等待持续观察。`;
      dual[1].querySelector('h3').textContent='普通现实解释必须同时保留';dual[1].querySelector('p:last-child').textContent='睡眠、压力、记忆重构、环境刺激、感官错觉与期待效应都可能产生相似体验。BACE 要求两套解释并列记录，不能把相关性直接当因果。';
      $('.manifest-grid ul').innerHTML=d.manifest.map(v=>`<li>${esc(v)}</li>`).join('');
      const manifestAside=$('.manifest-grid aside');const mp=manifestAside.querySelectorAll('p');manifestAside.querySelectorAll('h3')[0].nextElementSibling.textContent=d.triggers;manifestAside.querySelectorAll('h3')[1].nextElementSibling.textContent=d.resource;
      $('.risk-grid').innerHTML=d.risks.map(v=>`<article><b>${esc(v[0])}</b><p>${esc(v[1])}</p></article>`).join('');
      const protocol=$('.protocol-card');protocol.querySelector('h2').textContent=d.task.split('：')[0];
      protocol.querySelector('ol').innerHTML=`<li><b>原始记录：</b>先写发生了什么，不先解释。</li><li><b>双重假设：</b>同时保留 BACE 解释与普通现实解释。</li><li><b>现实核对：</b>改变一个环境条件，或寻找独立来源。</li><li><b>七日复盘：</b>${esc(d.task.includes('：')?d.task.split('：').slice(1).join('：'):d.task)}</li>`;
    },
    restart(){this.answers=Array(70).fill(null);this.index=0;this.go('cover');}
  };

  function installStyles(){
    const s=document.createElement('style');
    s.textContent=`
      .cover-boundary{max-width:720px;margin:14px 0 0;padding-left:12px;border-left:2px solid var(--cyan);color:#cfd4ed;font-size:13px}
      .final-test{padding:45px 0}.scan-top{display:grid;grid-template-columns:1fr auto;gap:25px;padding-bottom:18px;border-bottom:1px solid var(--line)}.progress-rail{display:flex;gap:3px;margin-top:9px}.progress-rail i{display:block;width:18px;height:6px;background:rgba(255,255,255,.12)}.progress-rail i.ready{background:linear-gradient(90deg,var(--cyan),var(--yellow))}
      .question{display:grid;grid-template-columns:105px 1fr;gap:34px;min-height:540px;padding:56px 0 30px}.q-index{padding-top:8px;border-top:2px solid var(--yellow)}.q-index strong{display:block;color:var(--yellow);font:52px/1 'Share Tech Mono'}.q-index p{margin:9px 0}.q-copy h1{max-width:850px;margin:17px 0 13px;font-size:clamp(31px,4.6vw,56px);line-height:1.28;letter-spacing:-.035em}.question-hint{color:#c4c1de}.options{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:28px}.option{min-height:100px;padding:16px;border:1px solid rgba(82,233,225,.34);background:rgba(30,25,91,.65);color:var(--ink);text-align:left;cursor:pointer}.option:hover,.option.selected{border-color:var(--yellow);background:rgba(255,174,37,.13);transform:translateY(-1px)}.option b{display:block;color:var(--amber);font:15px 'Share Tech Mono'}.option span{display:block;margin-top:9px;font:16px 'Noto Serif SC'}.test-nav{display:flex;justify-content:space-between;gap:15px;border-top:1px solid var(--line);padding-top:18px}
      .final-analysis{min-height:70vh;padding:12vh 0}.analysis-glyph{display:grid;place-items:center;width:92px;height:92px;border:1px solid var(--cyan);border-radius:50%;color:var(--yellow);font:42px 'Share Tech Mono';animation:baceSpin 2.4s linear infinite;box-shadow:0 0 42px rgba(82,233,225,.16)}.final-analysis h1{font-size:clamp(38px,6vw,68px)}.analysis-lines{display:flex;gap:7px;max-width:420px;margin-top:26px}.analysis-lines i{height:5px;flex:1;background:var(--cyan);animation:bacePulse 1.1s ease-in-out infinite}.analysis-lines i:nth-child(2){animation-delay:.14s}.analysis-lines i:nth-child(3){animation-delay:.28s}.analysis-lines i:nth-child(4){animation-delay:.42s}@keyframes baceSpin{to{transform:rotate(360deg)}}@keyframes bacePulse{50%{opacity:.18}}
      .radar-wrap{display:grid;grid-template-columns:.62fr 1.38fr;align-items:center;gap:18px;padding:18px 0 8px}.radar-wrap h3{margin:4px 0;font-size:24px}.radar-wrap p:last-child{color:#c8c4df}.radar-wrap svg{width:100%;max-height:480px}.radar-grid polygon,.radar-grid line{fill:none;stroke:rgba(82,233,225,.23);stroke-width:1}.radar-value{fill:rgba(255,174,37,.28);stroke:var(--yellow);stroke-width:3;stroke-linejoin:round}.radar-wrap text{fill:#fff2c4;font:12px 'Noto Serif SC'}
      @media(max-width:760px){.final-test{padding-top:28px}.scan-top{grid-template-columns:1fr;gap:5px}.question{grid-template-columns:1fr;gap:16px;min-height:auto;padding:32px 0}.q-index{display:flex;align-items:center;gap:12px}.q-index strong{font-size:31px}.q-copy h1{font-size:30px}.options{grid-template-columns:1fr 1fr}.option{min-height:84px;padding:13px}.radar-wrap{grid-template-columns:1fr}.radar-wrap svg{margin-top:-6px}.radar-wrap text{font-size:10px}.test-nav{align-items:flex-start}.cover-boundary{font-size:12px}}
      @media(max-width:390px){.options{grid-template-columns:1fr}.option{min-height:68px}.option b,.option span{display:inline;margin:0 8px 0 0}.radar-wrap text{font-size:9px}}
    `;document.head.appendChild(s);
  }

  installScreens();installForm();installStyles();
  byId('prev').addEventListener('click',()=>window.BACE70.prev());
  $$('.result-head .text-button').forEach(b=>b.setAttribute('onclick','BACE70.restart()'));
})();

