const verbs=[{"n":1,"inf":"arise","past":"arose","part":"arisen","ru":"возникать","ipa":"ɜːraɪz","pastIpa":"ɜːroʊz","partIpa":"ɜːrɪzən"},{"n":2,"inf":"awake","past":"awoke","part":"awoken","ru":"просыпаться","ipa":"əweɪk","pastIpa":"əwoʊk","partIpa":""},{"n":3,"inf":"be","past":"was/were","part":"been","ru":"быть","ipa":"biː","pastIpa":"wɑːz / wɜːr","partIpa":"bɪn"},{"n":4,"inf":"bear","past":"bore","part":"borne/born","ru":"переносить, рожать","ipa":"ber","pastIpa":"bɔːr","partIpa":"bɔːrn / bɔːrn"},{"n":5,"inf":"beat","past":"beat","part":"beaten","ru":"бить","ipa":"biːt","pastIpa":"biːt","partIpa":"biːtən"},{"n":6,"inf":"become","past":"became","part":"become","ru":"становиться","ipa":"bɪkʌm","pastIpa":"bɪkeɪm","partIpa":"bɪkʌm"},{"n":7,"inf":"begin","past":"began","part":"begun","ru":"начинать","ipa":"bɪɡɪn","pastIpa":"bɪɡæn","partIpa":"bɪɡʌn"},{"n":8,"inf":"bend","past":"bent","part":"bent","ru":"сгибать","ipa":"bend","pastIpa":"bent","partIpa":"bent"},{"n":9,"inf":"bet","past":"bet","part":"bet","ru":"держать пари","ipa":"bet","pastIpa":"bet","partIpa":"bet"},{"n":10,"inf":"bind","past":"bound","part":"bound","ru":"связывать","ipa":"baɪnd","pastIpa":"baʊnd","partIpa":"baʊnd"},{"n":11,"inf":"bite","past":"bit","part":"bitten","ru":"кусать","ipa":"baɪt","pastIpa":"bɪt","partIpa":"bɪtən"},{"n":12,"inf":"bleed","past":"bled","part":"bled","ru":"кровоточить","ipa":"bliːd","pastIpa":"bled","partIpa":"bled"},{"n":13,"inf":"blow","past":"blew","part":"blown","ru":"дуть","ipa":"bloʊ","pastIpa":"bluː","partIpa":"bloʊn"},{"n":14,"inf":"break","past":"broke","part":"broken","ru":"ломать","ipa":"breɪk","pastIpa":"broʊk","partIpa":"broʊkən"},{"n":15,"inf":"breed","past":"bred","part":"bred","ru":"разводить","ipa":"briːd","pastIpa":"bred","partIpa":"bred"},{"n":16,"inf":"bring","past":"brought","part":"brought","ru":"приносить","ipa":"brɪŋ","pastIpa":"brɔːt","partIpa":"brɔːt"},{"n":17,"inf":"broadcast","past":"broadcast","part":"broadcast","ru":"транслировать","ipa":"brɔːdkæst","pastIpa":"brɔːdkæst","partIpa":"brɔːdkæst"},{"n":18,"inf":"build","past":"built","part":"built","ru":"строить","ipa":"bɪld","pastIpa":"bɪlt","partIpa":"bɪlt"},{"n":19,"inf":"burn","past":"burnt/burned","part":"burnt/burned","ru":"гореть, сжигать","ipa":"bɜːrn","pastIpa":"bɜːrnt / bɜːrnd","partIpa":"bɜːrnt / bɜːrnd"},{"n":20,"inf":"burst","past":"burst","part":"burst","ru":"лопаться","ipa":"bɜːrst","pastIpa":"bɜːrst","partIpa":"bɜːrst"},{"n":21,"inf":"buy","past":"bought","part":"bought","ru":"покупать","ipa":"baɪ","pastIpa":"bɑːt","partIpa":"bɑːt"},{"n":22,"inf":"catch","past":"caught","part":"caught","ru":"ловить","ipa":"kætʃ","pastIpa":"kɑːt","partIpa":"kɑːt"},{"n":23,"inf":"choose","past":"chose","part":"chosen","ru":"выбирать","ipa":"tʃuːz","pastIpa":"tʃoʊz","partIpa":"tʃoʊzən"},{"n":24,"inf":"come","past":"came","part":"come","ru":"приходить","ipa":"kʌm","pastIpa":"keɪm","partIpa":"kʌm"},{"n":25,"inf":"cost","past":"cost","part":"cost","ru":"стоить","ipa":"kɑːst","pastIpa":"kɑːst","partIpa":"kɑːst"},{"n":26,"inf":"creep","past":"crept","part":"crept","ru":"ползти","ipa":"kriːp","pastIpa":"krept","partIpa":"krept"},{"n":27,"inf":"cut","past":"cut","part":"cut","ru":"резать","ipa":"kʌt","pastIpa":"kʌt","partIpa":"kʌt"},{"n":28,"inf":"deal","past":"dealt","part":"dealt","ru":"иметь дело","ipa":"diːl","pastIpa":"delt","partIpa":"delt"},{"n":29,"inf":"dig","past":"dug","part":"dug","ru":"копать","ipa":"dɪɡ","pastIpa":"dʌɡ","partIpa":"dʌɡ"},{"n":30,"inf":"do","past":"did","part":"done","ru":"делать","ipa":"duː","pastIpa":"dɪd","partIpa":"dʌn"},{"n":31,"inf":"draw","past":"drew","part":"drawn","ru":"рисовать, тянуть","ipa":"drɔː","pastIpa":"druː","partIpa":"drɔːn"},{"n":32,"inf":"dream","past":"dreamt/dreamed","part":"dreamt/dreamed","ru":"мечтать","ipa":"driːm","pastIpa":"dremt / driːmd","partIpa":"dremt / driːmd"},{"n":33,"inf":"drink","past":"drank","part":"drunk","ru":"пить","ipa":"drɪŋk","pastIpa":"dræŋk","partIpa":"drʌŋk"},{"n":34,"inf":"drive","past":"drove","part":"driven","ru":"водить","ipa":"draɪv","pastIpa":"droʊv","partIpa":"drɪvən"},{"n":35,"inf":"eat","past":"ate","part":"eaten","ru":"есть","ipa":"iːt","pastIpa":"eɪt","partIpa":"iːtən"},{"n":36,"inf":"fall","past":"fell","part":"fallen","ru":"падать","ipa":"fɔːl","pastIpa":"fel","partIpa":"fɑːlən"},{"n":37,"inf":"feed","past":"fed","part":"fed","ru":"кормить","ipa":"fiːd","pastIpa":"fed","partIpa":"fed"},{"n":38,"inf":"feel","past":"felt","part":"felt","ru":"чувствовать","ipa":"fiːl","pastIpa":"felt","partIpa":"felt"},{"n":39,"inf":"fight","past":"fought","part":"fought","ru":"драться, бороться","ipa":"faɪt","pastIpa":"fɔːt","partIpa":"fɔːt"},{"n":40,"inf":"find","past":"found","part":"found","ru":"находить","ipa":"faɪnd","pastIpa":"faʊnd","partIpa":"faʊnd"},{"n":41,"inf":"flee","past":"fled","part":"fled","ru":"убегать","ipa":"fliː","pastIpa":"fled","partIpa":"fled"},{"n":42,"inf":"fly","past":"flew","part":"flown","ru":"летать","ipa":"flaɪ","pastIpa":"fluː","partIpa":"floʊn"},{"n":43,"inf":"forbid","past":"forbade","part":"forbidden","ru":"запрещать","ipa":"fɜːrbɪd","pastIpa":"fɜːrbeɪd","partIpa":"fɔːrbɪdən"},{"n":44,"inf":"forget","past":"forgot","part":"forgotten","ru":"забывать","ipa":"fɜːrɡet","pastIpa":"fɜːrɡɑːt","partIpa":"fɜːrɡɑːtən"},{"n":45,"inf":"forgive","past":"forgave","part":"forgiven","ru":"прощать","ipa":"fɜːrɡɪv","pastIpa":"fɜːrɡeɪv","partIpa":"fɜːrɡɪvən"},{"n":46,"inf":"freeze","past":"froze","part":"frozen","ru":"замерзать","ipa":"friːz","pastIpa":"froʊz","partIpa":"froʊzən"},{"n":47,"inf":"get","past":"got","part":"got/gotten","ru":"получать","ipa":"ɡet","pastIpa":"ɡɑːt","partIpa":"ɡɑːt / ɡɑːtən"},{"n":48,"inf":"give","past":"gave","part":"given","ru":"давать","ipa":"ɡɪv","pastIpa":"ɡeɪv","partIpa":"ɡɪvən"},{"n":49,"inf":"go","past":"went","part":"gone","ru":"идти, ехать","ipa":"ɡoʊ","pastIpa":"went","partIpa":"ɡɔːn"},{"n":50,"inf":"grow","past":"grew","part":"grown","ru":"расти","ipa":"ɡroʊ","pastIpa":"ɡruː","partIpa":"ɡroʊn"},{"n":51,"inf":"hang","past":"hung","part":"hung","ru":"висеть, вешать","ipa":"hæŋ","pastIpa":"hʌŋ","partIpa":"hʌŋ"},{"n":52,"inf":"have","past":"had","part":"had","ru":"иметь","ipa":"hæv","pastIpa":"hæd","partIpa":"hæd"},{"n":53,"inf":"hear","past":"heard","part":"heard","ru":"слышать","ipa":"hiːr","pastIpa":"hɜːrd","partIpa":"hɜːrd"},{"n":54,"inf":"hide","past":"hid","part":"hidden","ru":"прятать","ipa":"haɪd","pastIpa":"hɪd","partIpa":"hɪdən"},{"n":55,"inf":"hit","past":"hit","part":"hit","ru":"ударять","ipa":"hɪt","pastIpa":"hɪt","partIpa":"hɪt"},{"n":56,"inf":"hold","past":"held","part":"held","ru":"держать","ipa":"hoʊld","pastIpa":"held","partIpa":"held"},{"n":57,"inf":"hurt","past":"hurt","part":"hurt","ru":"причинять боль","ipa":"hɜːrt","pastIpa":"hɜːrt","partIpa":"hɜːrt"},{"n":58,"inf":"keep","past":"kept","part":"kept","ru":"хранить, держать","ipa":"kiːp","pastIpa":"kept","partIpa":"kept"},{"n":59,"inf":"kneel","past":"knelt/kneeled","part":"knelt/kneeled","ru":"становиться на колени","ipa":"niːl","pastIpa":"nelt / ","partIpa":"nelt / "},{"n":60,"inf":"know","past":"knew","part":"known","ru":"знать","ipa":"noʊ","pastIpa":"nuː","partIpa":"noʊn"},{"n":61,"inf":"lay","past":"laid","part":"laid","ru":"класть","ipa":"leɪ","pastIpa":"leɪd","partIpa":"leɪd"},{"n":62,"inf":"lead","past":"led","part":"led","ru":"вести","ipa":"led","pastIpa":"led","partIpa":"led"},{"n":63,"inf":"lean","past":"leant/leaned","part":"leant/leaned","ru":"наклоняться","ipa":"liːn","pastIpa":"liːənt / liːnd","partIpa":"liːənt / liːnd"},{"n":64,"inf":"leap","past":"leapt/leaped","part":"leapt/leaped","ru":"прыгать","ipa":"liːp","pastIpa":"lept / lept","partIpa":"lept / lept"},{"n":65,"inf":"learn","past":"learnt/learned","part":"learnt/learned","ru":"учить, узнавать","ipa":"lɜːrn","pastIpa":"lɜːrnt / lɜːrnd","partIpa":"lɜːrnt / lɜːrnd"},{"n":66,"inf":"leave","past":"left","part":"left","ru":"уходить, оставлять","ipa":"liːv","pastIpa":"left","partIpa":"left"},{"n":67,"inf":"lend","past":"lent","part":"lent","ru":"одалживать","ipa":"lend","pastIpa":"lent","partIpa":"lent"},{"n":68,"inf":"let","past":"let","part":"let","ru":"позволять","ipa":"let","pastIpa":"let","partIpa":"let"},{"n":69,"inf":"lie","past":"lay","part":"lain","ru":"лежать","ipa":"laɪ","pastIpa":"leɪ","partIpa":"leɪn"},{"n":70,"inf":"light","past":"lit/lighted","part":"lit/lighted","ru":"зажигать","ipa":"laɪt","pastIpa":"lɪt / laɪtəd","partIpa":"lɪt / laɪtəd"},{"n":71,"inf":"lose","past":"lost","part":"lost","ru":"терять","ipa":"luːz","pastIpa":"lɔːst","partIpa":"lɔːst"},{"n":72,"inf":"make","past":"made","part":"made","ru":"делать, создавать","ipa":"meɪk","pastIpa":"meɪd","partIpa":"meɪd"},{"n":73,"inf":"mean","past":"meant","part":"meant","ru":"означать, иметь в виду","ipa":"miːn","pastIpa":"ment","partIpa":"ment"},{"n":74,"inf":"meet","past":"met","part":"met","ru":"встречать","ipa":"miːt","pastIpa":"met","partIpa":"met"},{"n":75,"inf":"mistake","past":"mistook","part":"mistaken","ru":"ошибаться","ipa":"mɪsteɪk","pastIpa":"mɪstʊk","partIpa":"mɪsteɪkən"},{"n":76,"inf":"pay","past":"paid","part":"paid","ru":"платить","ipa":"peɪ","pastIpa":"peɪd","partIpa":"peɪd"},{"n":77,"inf":"prove","past":"proved","part":"proven/proved","ru":"доказывать","ipa":"pruːv","pastIpa":"pruːvd","partIpa":"pruːvən / pruːvd"},{"n":78,"inf":"put","past":"put","part":"put","ru":"класть","ipa":"pʊt","pastIpa":"pʊt","partIpa":"pʊt"},{"n":79,"inf":"quit","past":"quit/quitted","part":"quit/quitted","ru":"бросать, прекращать","ipa":"kwɪt","pastIpa":"kwɪt / ","partIpa":"kwɪt / "},{"n":80,"inf":"read","past":"read","part":"read","ru":"читать","ipa":"red","pastIpa":"red","partIpa":"red"},{"n":81,"inf":"ride","past":"rode","part":"ridden","ru":"ездить","ipa":"raɪd","pastIpa":"roʊd","partIpa":"rɪdən"},{"n":82,"inf":"ring","past":"rang","part":"rung","ru":"звонить","ipa":"rɪŋ","pastIpa":"ræŋ","partIpa":"rʌŋ"},{"n":83,"inf":"rise","past":"rose","part":"risen","ru":"подниматься","ipa":"raɪz","pastIpa":"roʊz","partIpa":"rɪzən"},{"n":84,"inf":"run","past":"ran","part":"run","ru":"бегать","ipa":"rʌn","pastIpa":"ræn","partIpa":"rʌn"},{"n":85,"inf":"say","past":"said","part":"said","ru":"говорить","ipa":"seɪ","pastIpa":"sed","partIpa":"sed"},{"n":86,"inf":"see","past":"saw","part":"seen","ru":"видеть","ipa":"siː","pastIpa":"sɔː","partIpa":"siːn"},{"n":87,"inf":"seek","past":"sought","part":"sought","ru":"искать","ipa":"siːk","pastIpa":"sɔːt","partIpa":"sɔːt"},{"n":88,"inf":"sell","past":"sold","part":"sold","ru":"продавать","ipa":"sel","pastIpa":"soʊld","partIpa":"soʊld"},{"n":89,"inf":"send","past":"sent","part":"sent","ru":"отправлять","ipa":"send","pastIpa":"sent","partIpa":"sent"},{"n":90,"inf":"set","past":"set","part":"set","ru":"устанавливать, ставить","ipa":"set","pastIpa":"set","partIpa":"set"},{"n":91,"inf":"shake","past":"shook","part":"shaken","ru":"трясти","ipa":"ʃeɪk","pastIpa":"ʃʊk","partIpa":"ʃeɪkən"},{"n":92,"inf":"shine","past":"shone/shined","part":"shone/shined","ru":"светить","ipa":"ʃaɪn","pastIpa":"ʃoʊn / ʃaɪnd","partIpa":"ʃoʊn / ʃaɪnd"},{"n":93,"inf":"shoot","past":"shot","part":"shot","ru":"стрелять","ipa":"ʃuːt","pastIpa":"ʃɑːt","partIpa":"ʃɑːt"},{"n":94,"inf":"show","past":"showed","part":"shown/showed","ru":"показывать","ipa":"ʃoʊ","pastIpa":"ʃoʊd","partIpa":"ʃoʊn / ʃoʊd"},{"n":95,"inf":"shut","past":"shut","part":"shut","ru":"закрывать","ipa":"ʃʌt","pastIpa":"ʃʌt","partIpa":"ʃʌt"},{"n":96,"inf":"sing","past":"sang","part":"sung","ru":"петь","ipa":"sɪŋ","pastIpa":"sæŋ","partIpa":"sʌŋ"},{"n":97,"inf":"sink","past":"sank/sunk","part":"sunk","ru":"тонуть","ipa":"sɪŋk","pastIpa":"sæŋk / sʌŋk","partIpa":"sʌŋk"},{"n":98,"inf":"sit","past":"sat","part":"sat","ru":"сидеть","ipa":"sɪt","pastIpa":"sæt","partIpa":"sæt"},{"n":99,"inf":"sleep","past":"slept","part":"slept","ru":"спать","ipa":"sliːp","pastIpa":"slept","partIpa":"slept"},{"n":100,"inf":"slide","past":"slid","part":"slid","ru":"скользить","ipa":"slaɪd","pastIpa":"slɪd","partIpa":"slɪd"},{"n":101,"inf":"smell","past":"smelt/smelled","part":"smelt/smelled","ru":"пахнуть","ipa":"smel","pastIpa":"smelt / smeld","partIpa":"smelt / smeld"},{"n":102,"inf":"speak","past":"spoke","part":"spoken","ru":"говорить","ipa":"spiːk","pastIpa":"spoʊk","partIpa":"spoʊkən"},{"n":103,"inf":"spell","past":"spelt/spelled","part":"spelt/spelled","ru":"писать по буквам","ipa":"spel","pastIpa":" / speld","partIpa":" / speld"},{"n":104,"inf":"spend","past":"spent","part":"spent","ru":"тратить, проводить","ipa":"spend","pastIpa":"spent","partIpa":"spent"},{"n":105,"inf":"spill","past":"spilt/spilled","part":"spilt/spilled","ru":"проливать","ipa":"spɪl","pastIpa":"spɪlt / spɪld","partIpa":"spɪlt / spɪld"},{"n":106,"inf":"spin","past":"spun","part":"spun","ru":"вращать","ipa":"spɪn","pastIpa":"spʌn","partIpa":"spʌn"},{"n":107,"inf":"spit","past":"spat/spit","part":"spat/spit","ru":"плевать","ipa":"spɪt","pastIpa":"spæt / spɪt","partIpa":"spæt / spɪt"},{"n":108,"inf":"split","past":"split","part":"split","ru":"разделять","ipa":"splɪt","pastIpa":"splɪt","partIpa":"splɪt"},{"n":109,"inf":"spoil","past":"spoilt/spoiled","part":"spoilt/spoiled","ru":"портить","ipa":"spɔɪl","pastIpa":" / spɔɪld","partIpa":" / spɔɪld"},{"n":110,"inf":"spread","past":"spread","part":"spread","ru":"распространять","ipa":"spred","pastIpa":"spred","partIpa":"spred"},{"n":111,"inf":"stand","past":"stood","part":"stood","ru":"стоять","ipa":"stænd","pastIpa":"stʊd","partIpa":"stʊd"},{"n":112,"inf":"steal","past":"stole","part":"stolen","ru":"красть","ipa":"stiːl","pastIpa":"stoʊl","partIpa":"stoʊlən"},{"n":113,"inf":"stick","past":"stuck","part":"stuck","ru":"приклеивать, застревать","ipa":"stɪk","pastIpa":"stʌk","partIpa":"stʌk"},{"n":114,"inf":"sting","past":"stung","part":"stung","ru":"жалить","ipa":"stɪŋ","pastIpa":"stʌŋ","partIpa":"stʌŋ"},{"n":115,"inf":"stink","past":"stank/stunk","part":"stunk","ru":"вонять","ipa":"stɪŋk","pastIpa":"stæŋk / stʌŋk","partIpa":"stʌŋk"},{"n":116,"inf":"strike","past":"struck","part":"struck/stricken","ru":"ударять","ipa":"straɪk","pastIpa":"strʌk","partIpa":"strʌk / strɪkən"},{"n":117,"inf":"swear","past":"swore","part":"sworn","ru":"клясться","ipa":"swer","pastIpa":"swɔːr","partIpa":"swɔːrn"},{"n":118,"inf":"sweep","past":"swept","part":"swept","ru":"подметать","ipa":"swiːp","pastIpa":"swept","partIpa":"swept"},{"n":119,"inf":"swim","past":"swam","part":"swum","ru":"плавать","ipa":"swɪm","pastIpa":"swæm","partIpa":"swʌm"},{"n":120,"inf":"swing","past":"swung","part":"swung","ru":"качаться","ipa":"swɪŋ","pastIpa":"swʌŋ","partIpa":"swʌŋ"},{"n":121,"inf":"take","past":"took","part":"taken","ru":"брать","ipa":"teɪk","pastIpa":"tʊk","partIpa":"teɪkən"},{"n":122,"inf":"teach","past":"taught","part":"taught","ru":"учить","ipa":"tiːtʃ","pastIpa":"tɔːt","partIpa":"tɔːt"},{"n":123,"inf":"tear","past":"tore","part":"torn","ru":"рвать","ipa":"ter","pastIpa":"tɔːr","partIpa":"tɔːrn"},{"n":124,"inf":"tell","past":"told","part":"told","ru":"рассказывать, говорить","ipa":"tel","pastIpa":"toʊld","partIpa":"toʊld"},{"n":125,"inf":"think","past":"thought","part":"thought","ru":"думать","ipa":"θɪŋk","pastIpa":"θɔːt","partIpa":"θɔːt"},{"n":126,"inf":"throw","past":"threw","part":"thrown","ru":"бросать","ipa":"θroʊ","pastIpa":"θruː","partIpa":"θroʊn"},{"n":127,"inf":"undergo","past":"underwent","part":"undergone","ru":"подвергаться","ipa":"ʌndɜːrɡoʊ","pastIpa":"ʌndɜːrwent","partIpa":"ʌndɜːrɡɔːn"},{"n":128,"inf":"understand","past":"understood","part":"understood","ru":"понимать","ipa":"ʌndɜːrstænd","pastIpa":"ʌndɜːrstʊd","partIpa":"ʌndɜːrstʊd"},{"n":129,"inf":"wake","past":"woke","part":"woken","ru":"просыпаться, будить","ipa":"weɪk","pastIpa":"woʊk","partIpa":"woʊkən"},{"n":130,"inf":"wear","past":"wore","part":"worn","ru":"носить","ipa":"wer","pastIpa":"wɔːr","partIpa":"wɔːrn"},{"n":131,"inf":"weep","past":"wept","part":"wept","ru":"плакать","ipa":"wiːp","pastIpa":"wept","partIpa":"wept"},{"n":132,"inf":"win","past":"won","part":"won","ru":"выигрывать","ipa":"wɪn","pastIpa":"wʌn","partIpa":"wʌn"},{"n":133,"inf":"wind","past":"wound","part":"wound","ru":"заводить, наматывать","ipa":"waɪnd","pastIpa":"waʊnd","partIpa":"waʊnd"},{"n":134,"inf":"withdraw","past":"withdrew","part":"withdrawn","ru":"забирать, снимать","ipa":"wɪðdrɔː","pastIpa":"wɪθdruː","partIpa":"wɪθdrɔːn"},{"n":135,"inf":"withstand","past":"withstood","part":"withstood","ru":"противостоять","ipa":"wɪθstænd","pastIpa":"wɪθstʊd","partIpa":"wɪθstʊd"},{"n":136,"inf":"wring","past":"wrung","part":"wrung","ru":"выкручивать","ipa":"rɪŋ","pastIpa":"rʌŋ","partIpa":"rʌŋ"},{"n":137,"inf":"write","past":"wrote","part":"written","ru":"писать","ipa":"raɪt","pastIpa":"roʊt","partIpa":"rɪtən"},{"n":138,"inf":"overcome","past":"overcame","part":"overcome","ru":"преодолевать","ipa":"oʊvɜːrkʌm","pastIpa":"oʊvɜːrkeɪm","partIpa":"oʊvɜːrkʌm"},{"n":139,"inf":"overtake","past":"overtook","part":"overtaken","ru":"обгонять","ipa":"oʊvɜːrteɪk","pastIpa":"oʊvɜːrtʊk","partIpa":"oʊvɜːrteɪkən"},{"n":140,"inf":"overthrow","past":"overthrew","part":"overthrown","ru":"свергать","ipa":"oʊvɜːrθroʊ","pastIpa":"oʊvɜːrθruː","partIpa":"oʊvɜːrθroʊn"},{"n":141,"inf":"overdo","past":"overdid","part":"overdone","ru":"перестараться","ipa":"oʊvɜːrduː","pastIpa":"oʊvɜːrdɪd","partIpa":"oʊvɜːrdʌn"},{"n":142,"inf":"redo","past":"redid","part":"redone","ru":"переделывать","ipa":"riːduː","pastIpa":"riːdɪd","partIpa":"riːdʌn"},{"n":143,"inf":"remake","past":"remade","part":"remade","ru":"переделывать, переснимать","ipa":"riːmeɪk","pastIpa":"riːmeɪd","partIpa":"riːmeɪd"},{"n":144,"inf":"retake","past":"retook","part":"retaken","ru":"пересдавать, переснимать","ipa":"riːteɪk","pastIpa":"riːtʊk","partIpa":"riːteɪkən"},{"n":145,"inf":"rewrite","past":"rewrote","part":"rewritten","ru":"переписывать","ipa":"riːraɪt","pastIpa":"riːroʊt","partIpa":"riːrɪtən"},{"n":146,"inf":"foresee","past":"foresaw","part":"foreseen","ru":"предвидеть","ipa":"fɔːrsiː","pastIpa":"fɔːrsɔː","partIpa":"fɔːrsiːn"},{"n":147,"inf":"forecast","past":"forecast","part":"forecast","ru":"прогнозировать","ipa":"fɔːrkæst","pastIpa":"fɔːrkæst","partIpa":"fɔːrkæst"},{"n":148,"inf":"misunderstand","past":"misunderstood","part":"misunderstood","ru":"неправильно понимать","ipa":"mɪsəndɜːrstænd","pastIpa":"mɪsəndɜːrstʊd","partIpa":"mɪsəndɜːrstʊd"},{"n":149,"inf":"undertake","past":"undertook","part":"undertaken","ru":"предпринимать","ipa":"ʌndɜːrteɪk","pastIpa":"ʌndɜːrtʊk","partIpa":"ʌndɜːrteɪkən"},{"n":150,"inf":"uphold","past":"upheld","part":"upheld","ru":"поддерживать, отстаивать","ipa":"əphoʊld","pastIpa":"əpheld","partIpa":"əpheld"},{"n":151,"inf":"upset","past":"upset","part":"upset","ru":"расстраивать","ipa":"əpset","pastIpa":"əpset","partIpa":"əpset"}];
const LEARNING_GROUPS=[
{id:'g1',name:'Блок 1',short:'Учебный блок',nums:[7,33,82,96,97,115,119,29,106,114,120,136,9,55,108,20]},
{id:'g2',name:'Блок 2',short:'Учебный блок',nums:[1,34,81,83,137,145,69,91,116,10,40,57,78,80,90,151]},
{id:'g3',name:'Блок 3',short:'Учебный блок',nums:[13,31,42,50,126,134,140,17,25,27,68,95,110,147,6,24]},
{id:'g4',name:'Блок 4',short:'Учебный блок',nums:[2,14,23,46,48,86,112,129,130,121,139,144,149,8,15,37]},
{id:'g5',name:'Блок 5',short:'Учебный блок',nums:[16,21,22,39,87,93,122,125,43,45,44,47,52,53,61,76]},
{id:'g6',name:'Блок 6',short:'Учебный блок',nums:[12,26,28,38,41,56,58,62,63,64,65,66,67,71,73,74,79,85,88,89,98]},
{id:'g7',name:'Блок 7',short:'Учебный блок',nums:[99,100,101,103,104,105,118,131,135,143,148,3,4,5,11,18,19,30,32,35]},
{id:'g8',name:'Блок 8',short:'Учебный блок',nums:[36,54,59,60,70,72,75,77,84,92,94,102,107,109,111,117,123,124,127,128,132,133,138,141,142,150,49,51,113,146]},
{id:'mixed',name:'Все вперемешку',short:'Все 151 слово без группировки',nums:verbs.map(v=>v.n),mixed:true}
]
const IPA_FIX={63:['lent / liːnd','lent / liːnd'],59:['nelt / niːld','nelt / niːld'],2:[null,'əwoʊkən'],103:['spelt / speld','spelt / speld'],109:['spɔɪlt / spɔɪld','spɔɪlt / spɔɪld'],79:['kwɪt / kwɪtəd','kwɪt / kwɪtəd'],64:['lept / liːpt','lept / liːpt'],43:[null,'fɜːrbɪdən']};
verbs.forEach(v=>{const f=IPA_FIX[v.n];if(f){if(f[0])v.pastIpa=f[0];if(f[1])v.partIpa=f[1]}for(const k of ['pastIpa','partIpa'])v[k]=String(v[k]||'').split('/').map(s=>s.trim()).filter(Boolean).filter((s,i,r)=>r.indexOf(s)===i).join(' / ')});
const KEY='irregular_trainer_v21';
function loadState(){let raw=null;try{raw=localStorage.getItem(KEY)||localStorage.getItem('irregular_trainer_v16')||localStorage.getItem('irregular_trainer_v15');const s=raw?JSON.parse(raw):{};return s&&typeof s==='object'&&!Array.isArray(s)?s:{}}catch(e){try{if(raw)localStorage.setItem(KEY+'_backup',raw)}catch(_){}return {}}}
let state=loadState();if(!state.version)state.version=1;
if(!state.v) state.v={};
if(!state.customFolders) state.customFolders={};
if(!state.customStats) state.customStats={};
if(!state.myWordsFolder) state.myWordsFolder='my';
if(!state.customFolders[state.myWordsFolder]) state.customFolders[state.myWordsFolder]={name:'Мои слова',words:[]};
let selectedGroup=state.selectedGroup||state.selectedBlock||1, selectedFolder=state.selectedFolder||'irregular';
let theme=state.theme||'light';
if(!LEARNING_GROUPS.some(g=>String(g.id)===String(selectedGroup)||LEARNING_GROUPS.indexOf(g)+1===Number(selectedGroup))) selectedGroup=1;
let session=null, soundOn=state.soundOn!==false, advanceTimer=null, fbCtx=null;
function save(){state.selectedGroup=selectedGroup;state.selectedFolder=selectedFolder;state.theme=theme;try{localStorage.setItem(KEY,JSON.stringify(state))}catch(e){}}
function normalize(x){return String(x||'').trim().toLowerCase().replace(/[’‘`]/g,"'").replace(/\s+/g,' ').replace(/[.!?]+$/,'')}
function pluralizeRu(n,one,two,five){const x=Math.abs(Number(n))%100,y=x%10;if(x>=11&&x<=14)return five;if(y===1)return one;if(y>=2&&y<=4)return two;return five}
function countLabel(n){return `${n} ${pluralizeRu(n,'слово','слова','слов')}`}
function verbCountLabel(n){return `${n} ${pluralizeRu(n,'глагол','глагола','глаголов')}`}
function accepted(user,correct){const sl=s=>s.replace(/\s*\/\s*/g,'/'),u=sl(normalize(user)),c=String(correct);return sl(normalize(c))===u||c.split('/').some(x=>normalize(x)===u)}
function ruTokens(s){return String(s||'').split(/[,;]/).map(normalize).filter(Boolean)}
function sameMeaning(a,b){const t=ruTokens(b.ru);return ruTokens(a.ru).some(x=>t.includes(x))}
function pickOthers(v){return shuffle(verbs.filter(x=>x.n!==v.n&&!sameMeaning(x,v)))}
function acceptsInf(v,val){const t=normalize(val);return normalize(v.inf)===t||verbs.some(x=>sameMeaning(x,v)&&normalize(x.inf)===t)}
function shuffle(a){const x=[...a];for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]]}return x}
function groupMeta(n=selectedGroup){const idx=typeof n==='number'?n-1:LEARNING_GROUPS.findIndex(g=>String(g.id)===String(n));return LEARNING_GROUPS[idx]||LEARNING_GROUPS[0]}
function groupVerbs(n=selectedGroup){const g=groupMeta(n);return g.nums.map(id=>verbs.find(v=>v.n===id)).filter(Boolean)}
function groupCount(){return LEARNING_GROUPS.length}
function groupPercent(n=selectedGroup){return percentFor(groupVerbs(n))}
function groupKey(n){return typeof n==='number'&&n>=1&&n<=LEARNING_GROUPS.length?LEARNING_GROUPS[n-1].id:n}
function st(v){state.v=state.v||{};return state.v[v.n]||(state.v[v.n]={level:0,streak:0,wrong:0,attempts:0,due:0,today:0,skill:{}})}
function mastered(v){const x=st(v);return x.level>=3&&x.streak>=3}
function percentFor(vs){if(!vs.length)return 0;return Math.round(vs.reduce((sum,v)=>sum+Math.min(1,st(v).level/3),0)/vs.length*100)}
function due(v){return st(v).due&&st(v).due<=Date.now()}
function todayCount(){const d=new Date().toDateString();if(state.todayDate!==d){Object.values(state.v||{}).forEach(x=>x.today=0);state.todayDate=d}return Object.values(state.v||{}).reduce((a,x)=>a+(x.today||0),0)}
function renderBlocks(){
  const box=document.getElementById('blocks');
  const selected=groupKey(selectedGroup);
  box.innerHTML=LEARNING_GROUPS.map((g,i)=>{
    const n=i+1, key=g.id, vs=groupVerbs(key), p=groupPercent(key), sel=key===selected;
    return `<button class="group-card ${sel?'selected ':''}block-tone-${n%2?'odd':'even'}" data-group="${htmlEscape(String(key))}" data-art="${n}"><div class="group-card-top"><div><div class="block-title">${htmlEscape(g.name)}</div><div class="block-meta">${g.short} · ${countLabel(vs.length)}</div></div><span class="badge ${p>=100?'good':''}">${p}%</span></div><div class="group-art art-${n}"><i class="art-rope rope-a"></i><i class="art-rope rope-b"></i><i class="art-dot"></i><span class="art-word art-word-a"><b>${htmlEscape(vs[0]?.inf||'learn')}</b><small>${htmlEscape(vs[0]?.ru||'учить')}</small></span><span class="art-word art-word-b"><b>${htmlEscape(vs[1]?.inf||'remember')}</b><small>${htmlEscape(vs[1]?.ru||'помнить')}</small></span><span class="art-word art-word-c"><b>${htmlEscape(vs[2]?.inf||'repeat')}</b><small>${htmlEscape(vs[2]?.ru||'повторять')}</small></span><i class="art-spark">✦</i><i class="art-star">✦</i></div><div class="progress"><div class="bar ${p>=100?'good':''}" style="width:${p}%"></div></div></button>`;
  }).join('');
  document.querySelectorAll('[data-group]').forEach(card=>card.onclick=()=>{
    selectedGroup=card.dataset.group;save();renderHome();
    const target=document.querySelector('.home-main');
    if(target)target.scrollIntoView({behavior:'smooth',block:'start'});
  });
}
function renderHome(){
  const g=groupMeta(selectedGroup),vs=groupVerbs(selectedGroup),p=groupPercent(selectedGroup);
  document.getElementById('selected-title').textContent=g.name;
  document.getElementById('selected-sub').textContent=`${g.short} · ${countLabel(vs.length)} · ${p}% выучено`;
  document.getElementById('selected-bar').style.width=p+'%';
  document.getElementById('selected-bar').classList.toggle('good',p>=100);
  const sp=document.getElementById('selected-progress-percent'); if(sp)sp.textContent=p+'%';
  const sr=document.querySelector('.selected-progress-ring'); if(sr){sr.style.setProperty('--ring-progress',p+'%');sr.style.setProperty('--ring-mid',(p*0.45)+'%');sr.style.setProperty('--ring-end',(p*0.80)+'%');}
  document.getElementById('selected-note').textContent=`Закреплено: ${vs.filter(mastered).length} из ${vs.length}`;
  document.getElementById('continue-btn').textContent=p>=100?'Повторить блок':'Начать тренировку';
  renderBlocks();
  document.getElementById('s-mastered').textContent=verbs.filter(mastered).length;
  document.getElementById('s-today').textContent=todayCount();
  const masteredCount=verbs.filter(mastered).length;
  const overall=Math.round(verbs.reduce((sum,v)=>sum+Math.min(1,st(v).level/3),0)/verbs.length*100);
  const hp=document.getElementById('home-progress-percent'); if(hp)hp.textContent=overall+'%';
  const homeRing=document.querySelector('.ring'); if(homeRing)homeRing.style.setProperty('--ring-progress',overall+'%');
  const hm=document.getElementById('home-mastered-count'); if(hm)hm.textContent=masteredCount;
}

function show(id){
  clearTimeout(advanceTimer);
  ['home','learn','quiz','result','dictionary','errors'].forEach(x=>document.getElementById(x).classList.toggle('hidden',x!==id));
  const body=document.body, header=document.querySelector('header'), actions=document.querySelector('.header-actions'), homeHeading=document.querySelector('.home-heading');
  body.classList.toggle('home-page',id==='home');
  if(id==='home'){ if(homeHeading&&actions)homeHeading.appendChild(actions); }
  else { if(header&&actions)header.appendChild(actions); }
  if(id==='home')renderHome();if(id==='learn')renderLearn();if(id==='dictionary')renderDictionary();if(id==='errors')renderErrors();
}
function ipaCell(word,ipa){return `<div class="learn-word"><b>${htmlEscape(word)}</b>${ipa?`<span class="learn-ipa">/${htmlEscape(ipa)}/</span>`:''}</div>`}
function renderLearn(){
  const g=groupMeta(selectedGroup),vs=groupVerbs(selectedGroup);
  document.getElementById('learn-title').textContent=g.name;
  document.getElementById('learn-note').textContent=`${countLabel(vs.length)} · посмотри формы, послушай произношение и потом проверь себя в тренировке.`;
  document.getElementById('learn-list').innerHTML=`<div class="learn-table-wrap"><table class="learn-table"><thead><tr><th>V1 · Infinitive</th><th>V2 · Past Simple</th><th>V3 · Past Participle</th><th>Перевод</th><th></th></tr></thead><tbody>${vs.map(v=>`<tr><td>${ipaCell(v.inf,v.ipa)}</td><td>${ipaCell(v.past,v.pastIpa===v.ipa?'':v.pastIpa)}</td><td>${ipaCell(v.part,v.partIpa===v.pastIpa?'':v.partIpa)}</td><td class="learn-translation">${htmlEscape(v.ru)}</td><td><button class="icon-btn listen-button" title="Прослушать" aria-label="Прослушать" data-speak="${v.n}">🔊</button></td></tr>`).join('')}</tbody></table></div>`;
  document.querySelectorAll('[data-speak]').forEach(b=>b.onclick=()=>speak(verbs.find(v=>v.n==b.dataset.speak).inf,true));
}
function startStudy(){show('learn')}
function makeItem(v,mode){return {v,mode,letterForm:Math.random()<.5?'past':'part',hintLevel:0}}
function chooseModes(vs){let pool=[];for(const v of vs){const x=st(v),wm=x.wrongModes||{};let modes=['write','letters','cloze','ruToEn','enToRu','listen'];if(Object.keys(wm).length){const ranked=Object.entries(wm).sort((a,b)=>b[1]-a[1]);const m=ranked[0][0];if(['write','letters','cloze','ruToEn','enToRu','listen'].includes(m))modes=[m,m,'letters','cloze','ruToEn','listen']}else if(x.wrongV2>x.wrongV3&&x.wrongV2>0)modes=['write','letters','cloze','write','ruToEn','listen'];else if(x.wrongV3>x.wrongV2&&x.wrongV3>0)modes=['write','letters','cloze','cloze','enToRu','listen'];pool.push(makeItem(v,modes[Math.floor(Math.random()*modes.length)]))}return shuffle(pool)}
function startMixed(kind='new',groupN=selectedGroup){
  let base, items=[];
  if(kind==='errors'){
    base=verbs.filter(v=>st(v).wrong>0);
    if(!base.length){renderErrors();return;}
    for(const v of base){
      const wm=st(v).wrongModes||{};
      const ranked=Object.entries(wm).sort((a,b)=>b[1]-a[1]).map(x=>x[0]).filter(x=>['write','letters','cloze','ruToEn','enToRu','listen'].includes(x));
      const modes=[...ranked];
      const all=['write','letters','cloze','ruToEn','enToRu','listen'];
      for(const m of shuffle(all))if(modes.length<Math.min(3,all.length)&&!modes.includes(m))modes.push(m);
      for(const m of modes.slice(0,Math.max(2,Math.min(3,modes.length))))items.push(makeItem(v,m));
    }
  }else{
    selectedGroup=groupN;
    const vs=groupVerbs(groupN);
    const open=vs.filter(v=>!mastered(v));base=kind==='review'?vs.filter(due):kind==='groupRepeat'?vs:open.filter(v=>st(v).level===0||!st(v).due||due(v));
    if(!base.length)base=kind==='groupRepeat'?vs:(open.length?open:vs);
    items=chooseModes(base);
    if(items.length<10){
      const extra=chooseModes(shuffle(vs).slice(0,Math.min(10-items.length,vs.length)));
      items=items.concat(extra);
    }
    items=shuffle(items).slice(0,Math.max(10,Math.min(18,items.length)));
  }
  session={items:shuffle(items),index:0,score:0,kind,group:kind==='errors'?null:groupN,answered:false,folder:false,returnTo:'home'};
  save();show('quiz');renderQ();
}
function renderQ(){const q=session.items[session.index],v=q.v;session.answered=false;document.getElementById('q-meta').innerHTML=`<div class="training-heading">${session.kind==='errors'?'Ошибки':groupMeta(session.group).name}</div><div class="training-badges"><span class="badge">${session.index+1} / ${session.items.length}</span><span class="badge">${Math.round(st(v).level/3*100)}% у глагола</span></div>`;document.getElementById('q-bar').style.width=(session.index/session.items.length*100)+'%';document.getElementById('q-feedback').innerHTML='';document.getElementById('q-hint').textContent='';document.getElementById('q-word').textContent='';document.getElementById('q-ipa').textContent='';document.getElementById('q-ru').textContent='';document.getElementById('sound-btn').classList.add('hidden');let title='',body='';if(q.mode==='write'){title='Укажи 2-ю и 3-ю форму';document.getElementById('q-word').textContent=v.inf;document.getElementById('q-ipa').textContent='';document.getElementById('q-ru').textContent=v.ru;body=writeTask(v)}else if(q.mode==='letters'){title=`Собери ${q.letterForm==='past'?'2-ю':'3-ю'} форму из букв`;document.getElementById('q-word').textContent=v.inf;document.getElementById('q-ru').textContent=v.ru;body=letterTask(v,q.letterForm);document.getElementById('sound-btn').classList.remove('hidden')}else if(q.mode==='cloze'){title=`Вставь пропущенные буквы в ${q.letterForm==='past'?'2-ю':'3-ю'} форму`;document.getElementById('q-word').textContent=v.inf;document.getElementById('q-ru').textContent=v.ru;body=clozeTask(v,q.letterForm);document.getElementById('sound-btn').classList.remove('hidden')}else if(q.mode==='ruToEn'){title='Переведи на английский';document.getElementById('q-ru').innerHTML=`<div class="translation-word">${v.ru}</div>`;body=translationRuToEn(v)}else if(q.mode==='enToRu'){title='Переведи на русский';document.getElementById('q-word').textContent=v.inf;document.getElementById('q-ipa').textContent='';body=translationEnToRu(v);document.getElementById('sound-btn').classList.remove('hidden')}else{title='Послушай и выбери слово';body=listenTask(v);document.getElementById('sound-btn').classList.remove('hidden')}document.getElementById('q-mode').textContent=title;document.getElementById('q-body').innerHTML=body;bindLetters();bindOptions();bindInputs();const safeSound=['write','letters','cloze','enToRu','listen'].includes(q.mode);if(safeSound)document.getElementById('sound-btn').classList.remove('hidden');autoSpeakForQuestion(q)}
function writeTask(v){return `<div class="input-grid"><label>V2<input id="ans-v2" autocomplete="off" spellcheck="false"></label><label>V3<input id="ans-v3" autocomplete="off" spellcheck="false"></label></div>`}
function letterTask(v,form){const target=form==='past'?v.past:v.part;const chars=target.split('/')[0].replace(/[^a-z]/gi,'').toLowerCase().split('');const pool=shuffle(chars.map((c,i)=>({c,i})));return `<div class="built" id="built" aria-label="Собранное слово"></div><div class="letters">${pool.map(x=>`<button class="letter" data-char="${x.c}" data-i="${x.i}">${x.c.toUpperCase()}</button>`).join('')}</div><div class="actions" style="justify-content:center"><button id="remove-letter" class="small-action">← Убрать последнюю</button></div><input type="hidden" id="letter-answer">`}
function clozePattern(word){const w=word.split('/')[0].trim();if(w.length<=3)return w[0]+'_'.repeat(Math.max(0,w.length-1));const hide=Math.max(1,Math.ceil(w.length/3));const idx=shuffle([...Array(w.length).keys()]).slice(0,hide);const set=new Set(idx);return [...w].map((c,i)=>set.has(i)?'_':c).join('')}
function clozeTask(v,form){const target=form==='past'?v.past:v.part;return `<div class="translation-word cloze-pattern">${clozePattern(target)}</div><div class="single-answer compact-answer"><input id="ans-cloze" autocomplete="off" spellcheck="false" aria-label="Ответ"></div>`}
function optionSet(correct,others){const seen=new Set();const all=[correct,...others].filter(x=>{const k=normalize(x);if(seen.has(k))return false;seen.add(k);return true});const target=normalize(correct);return shuffle(all).map(x=>`<button class="option" data-option="${htmlEscape(x)}" data-correct="${normalize(x)===target?'1':'0'}">${htmlEscape(x)}</button>`).join('')}
function htmlEscape(s){return String(s).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;')}
function translationRuToEn(v){const others=pickOthers(v).slice(0,3).map(x=>`${x.inf} — ${x.past} — ${x.part}`);return `<div class="option-list">${optionSet(`${v.inf} — ${v.past} — ${v.part}`,others)}</div>`}
function translationRuToEnWord(v){const others=pickOthers(v).slice(0,3).map(x=>x.inf);return `<div class="option-list">${optionSet(v.inf,others)}</div>`}
function translationEnToRu(v){const others=pickOthers(v).slice(0,3).map(x=>x.ru);return `<div class="option-list">${optionSet(v.ru,others)}</div>`}
function listenTask(v){const others=pickOthers(v).slice(0,3).map(x=>x.inf);return `<div class="listen-box"><button class="icon-btn listen-play" id="listen-play" title="Прослушать" aria-label="Прослушать">🔊</button><div class="option-list">${optionSet(v.inf,others)}</div></div>`}
function currentAnswers(){const q=session.items[session.index];if(q.mode==='write')return {v2:document.getElementById('ans-v2').value,v3:document.getElementById('ans-v3').value};if(q.mode==='letters'||q.mode==='customLetters')return {letters:document.getElementById('letter-answer')?.value||''};if(q.mode==='cloze')return {cloze:document.getElementById('ans-cloze')?.value||''};if(['ruToEnWrite','enToRuWrite','customRuToEnWrite','customEnToRuWrite'].includes(q.mode))return {folder:document.getElementById('ans-folder')?.value||''};
if(q.mode==='customWrite'||q.mode==='customCloze')return {custom:document.getElementById('ans-custom')?.value||'',cloze:document.getElementById('ans-custom')?.value||''};return {option:document.getElementById('selected-option')?.value||''}}
function bindLetters(){const q=session.items[session.index];document.querySelectorAll('.letter').forEach(btn=>btn.onclick=()=>{if(session.answered||btn.disabled)return;const inp=document.getElementById('letter-answer'),built=document.getElementById('built');inp.value+=btn.dataset.char;btn.disabled=true;const span=document.createElement('button');span.type='button';span.className='built-letter';span.textContent=btn.dataset.char.toUpperCase();span.dataset.i=btn.dataset.i;span.title='Нажми, чтобы убрать эту букву';span.onclick=()=>{if(session.answered)return;const idx=span.dataset.i;const source=document.querySelector(`.letter[data-i=\"${idx}\"]`);if(source)source.disabled=false;const spans=[...built.querySelectorAll('.built-letter')];const pos=spans.indexOf(span);spans.slice(pos).forEach(x=>{const src=document.querySelector(`.letter[data-i=\"${x.dataset.i}\"]`);if(src)src.disabled=false;x.remove()});inp.value=spans.slice(0,pos).map(x=>x.textContent.toLowerCase()).join('')};built.appendChild(span);if(inp.value.length===(q.letterForm==='past'?q.v.past:q.v.part).split('/')[0].replace(/[^a-z]/gi,'').length)checkCurrent()});const remove=document.getElementById('remove-letter');if(remove)remove.onclick=()=>{if(session.answered)return;const inp=document.getElementById('letter-answer'),built=document.getElementById('built'),last=built.lastElementChild;if(!last)return;last.click()};const play=document.getElementById('listen-play');if(play)play.onclick=()=>speak(session.items[session.index].v.inf,true)}
function bindOptions(){document.querySelectorAll('.option').forEach(btn=>btn.onclick=()=>{if(session.answered)return;document.querySelectorAll('.option').forEach(x=>x.classList.remove('selected'));btn.classList.add('selected');let hidden=document.getElementById('selected-option');if(!hidden){hidden=document.createElement('input');hidden.type='hidden';hidden.id='selected-option';document.getElementById('q-body').appendChild(hidden)}hidden.value=btn.dataset.option;if(session.folder)checkFolderCurrent();else checkCurrent()})}
function bindInputs(){
  const q=session.items[session.index];
  if(q.mode!=="write"&&q.mode!=="cloze"&&!['ruToEnWrite','enToRuWrite','customRuToEnWrite','customEnToRuWrite'].includes(q.mode)) return;
  if(['ruToEnWrite','enToRuWrite','customRuToEnWrite','customEnToRuWrite'].includes(q.mode)){const el=document.getElementById('ans-folder');if(el){el.oninput=()=>{const v=q.v;const target=['ruToEnWrite','customRuToEnWrite'].includes(q.mode)?(q.custom?v.word:v.inf):(q.custom?v.translation:v.ru);if(normalize(el.value)===normalize(target)||(q.mode==='ruToEnWrite'&&acceptsInf(v,el.value)))checkFolderCurrent();};el.onkeydown=e=>{if(e.key==='Enter'&&el.value.trim())checkFolderCurrent();}}return;}
  if(q.mode==='write'){
    const v=q.v, v2=document.getElementById('ans-v2'), v3=document.getElementById('ans-v3');
    if(!v2||!v3)return;
    v2.oninput=function(){
      const ok2=accepted(v2.value,v.past);
      v2.classList.toggle('correct',ok2);
      if(ok2&&!accepted(v3.value,v.part)){
        v3.focus();
        v3.select?.();
      }
      if(ok2&&accepted(v3.value,v.part))checkCurrent();
    };
    v3.oninput=function(){
      const ok2=accepted(v2.value,v.past), ok3=accepted(v3.value,v.part);
      v2.classList.toggle('correct',ok2);
      v3.classList.toggle('correct',ok3);
      if(ok2&&ok3)checkCurrent();
    };
    return;
  }
  const el=document.getElementById('ans-cloze');
  if(!el)return;
  el.oninput=function(){
    const v=q.v;
    if(accepted(el.value,q.letterForm==='past'?v.past:v.part)){
      el.classList.add('correct');
      checkCurrent();
    }
  };
}

function markAttempt(v,ok,mode){const x=st(v);x.attempts=(x.attempts||0)+1;x.today=(x.today||0)+1;x.last=Date.now();x.wrongModes=x.wrongModes||{};const intervals=[10*60*1000,24*60*60*1000,3*24*60*60*1000],now=Date.now(),gate=!(session&&session.folder);if(ok){x.streak=(x.streak||0)+1;if(!gate||x.level===0||!x.due||x.due<=now){x.level=Math.min(3,x.level+1);x.due=now+intervals[x.level-1]}}else{x.streak=0;x.level=Math.max(0,x.level-1);x.due=now+10*60*1000;x.wrong=(x.wrong||0)+1;x.wrongModes[mode]=(x.wrongModes[mode]||0)+1;if(mode==='write'){x.wrongV2=(x.wrongV2||0)+1;x.wrongV3=(x.wrongV3||0)+1}if(mode==='letters'){if(session.items[session.index].letterForm==='past')x.wrongV2=(x.wrongV2||0)+1;else x.wrongV3=(x.wrongV3||0)+1}if(mode==='cloze')x.spelling=(x.spelling||0)+1}save()}
function checkCurrent(force=false){if(session.answered)return;const q=session.items[session.index],v=q.v,a=currentAnswers();let ok=false,detail='';if(force){ok=false;detail='Ответ: '+(q.mode==='write'?v.past+' — '+v.part:q.mode==='letters'?(q.letterForm==='past'?v.past:v.part):q.mode==='cloze'?(q.letterForm==='past'?v.past:v.part):q.mode==='ruToEn'?v.inf+' — '+v.past+' — '+v.part:q.mode==='enToRu'?v.ru:v.inf)}else if(q.mode==='write'){const a2=accepted(a.v2,v.past),a3=accepted(a.v3,v.part);document.getElementById('ans-v2').classList.toggle('correct',a2);document.getElementById('ans-v3').classList.toggle('correct',a3);if(!(a2&&a3))return;ok=true;detail='V2 и V3 правильно'}else if(q.mode==='letters'){ok=accepted(a.letters,q.letterForm==='past'?v.past:v.part);detail=ok?'✓ Правильно':'Правильно: '+(q.letterForm==='past'?v.past:v.part)}else if(q.mode==='cloze'){ok=accepted(a.cloze,q.letterForm==='past'?v.past:v.part);detail=ok?'✓ Правильно':'Правильно: '+(q.letterForm==='past'?v.past:v.part)}else if(q.mode==='ruToEn'||q.mode==='enToRu'||q.mode==='listen'){const selected=document.querySelector('.option.selected');ok=selected?.dataset.correct==='1';detail=ok?'✓ Правильно':'Правильно: '+(q.mode==='ruToEn'?`${v.inf} — ${v.past} — ${v.part}`:q.mode==='enToRu'?v.ru:v.inf)}markAttempt(v,ok,q.mode);if(!ok){const pos=Math.min(session.items.length,session.index+3);session.items.splice(pos,0,makeItem(v,q.mode))}session.answered=true;if(ok)session.score++;document.querySelectorAll('.option').forEach(btn=>{const val=btn.dataset.option;if((q.mode==='ruToEn'&&val===`${v.inf} — ${v.past} — ${v.part}`)||(q.mode==='enToRu'&&normalize(val)===normalize(v.ru))||(q.mode==='listen'&&normalize(val)===normalize(v.inf))){btn.classList.add('correct')}else if(btn.classList.contains('selected')&&!ok)btn.classList.add('wrong')});document.getElementById('q-feedback').innerHTML=ok?'':'<span class="bad-t">'+htmlEscape(detail)+'</span>';playFeedbackSound(ok);if(!ok&&force&&['letters','cloze','write'].includes(q.mode))document.getElementById('sound-btn').classList.remove('hidden');advanceTimer=setTimeout(nextQ,ok?430:2200);renderHome()}
function dontKnow(){if(session.answered)return;if(session.folder){checkFolderCurrent(true);return}checkCurrent(true)}
function nextQ(){if(!session||!session.answered)return;session.index++;if(session.index>=session.items.length)finishSession();else renderQ()}
function giveHint(){
  if(!session||!session.items[session.index])return;
  const q=session.items[session.index],v=q.v;q.hintLevel=(q.hintLevel||0)+1;
  const partial=(w,n)=>{w=String(w||'').split('/')[0].trim();return n>=w.length?w:w.slice(0,n)+'_'.repeat(Math.max(0,w.length-n))};
  let text='';
  if(q.custom){
    if(q.mode==='customRuToEn'||q.mode==='customRuToEnWrite')text=partial(v.word,q.hintLevel);
    else if(q.mode==='customEnToRu'||q.mode==='customEnToRuWrite')text=partial(v.translation,q.hintLevel);
    else text=v.word;
  }else if(q.mode==='write')text=`V2: ${partial(v.past,q.hintLevel)} · V3: ${partial(v.part,q.hintLevel)}`;
  else if(q.mode==='letters'||q.mode==='cloze')text=partial(q.letterForm==='past'?v.past:v.part,q.hintLevel);
  else if(q.mode==='ruToEn')text=partial(v.inf,q.hintLevel);
  else if(q.mode==='enToRu')text=partial(v.ru,q.hintLevel);
  else text=partial(v.inf||v.word,q.hintLevel);
  document.getElementById('q-hint').textContent='Подсказка: '+text;
}
let speechVoice=null;
let currentAudio=null;
let currentAudioKey='';
function pickSpeechVoice(){if(!('speechSynthesis' in window))return null;const voices=window.speechSynthesis.getVoices();speechVoice=voices.find(v=>/^en-US$/i.test(v.lang))||voices.find(v=>/^en/i.test(v.lang))||voices[0]||null;return speechVoice}
if('speechSynthesis' in window){pickSpeechVoice();window.speechSynthesis.onvoiceschanged=pickSpeechVoice}
function findVerbNumber(text){const t=normalize(text);const v=verbs.find(x=>normalize(x.inf)===t);return v?.n||null}
function playLocalAudio(n,force=false){
  if(!n||(!force&&!soundOn))return false;
  const key=String(n);
  try{
    if(currentAudio){currentAudio.pause();currentAudio.currentTime=0;}
    const src=AUDIO_DATA[key]; if(!src)return false; const audio=currentAudio||new Audio();audio.src=src;
    currentAudio=audio; currentAudioKey=key; audio.preload='auto'; audio.volume=1;
    const p=audio.play();
    if(p&&typeof p.catch==='function')p.catch(()=>{if(currentAudioKey===key)fallbackSpeak(verbs.find(v=>v.n===n)?.inf||'')});
    return true;
  }catch(e){return false}
}
function fallbackSpeak(text){if(!text||!('speechSynthesis' in window))return;try{window.speechSynthesis.cancel();window.speechSynthesis.resume?.();const u=new SpeechSynthesisUtterance(String(text));u.lang='en-US';u.rate=.8;u.pitch=1;u.volume=1;const v=speechVoice||pickSpeechVoice();if(v)u.voice=v;window.speechSynthesis.speak(u)}catch(e){}}
function speak(text,force=false){if(!force&&!soundOn)return;if(!text)return;const n=findVerbNumber(text);if(n&&playLocalAudio(n,force))return;fallbackSpeak(text)}
function autoSpeakCurrent(text){if(!soundOn||!text)return;window.setTimeout(()=>speak(text,false),120)}
function autoSpeakForQuestion(q){if(!soundOn||!q)return;const mode=q.mode;const english=q.v?.inf||q.v?.word;if(!english)return;const modes=['write','letters','cloze','enToRu','listen','enToRuWrite','customEnToRu','customEnToRuWrite','customListen'];if(modes.includes(mode))autoSpeakCurrent(english)}
function playFeedbackSound(ok){
  if(!soundOn)return;
  try{
    const C=window.AudioContext||window.webkitAudioContext;if(!C)return;
    fbCtx=fbCtx||new C();const c=fbCtx;if(c.resume)c.resume();const now=c.currentTime;
    const master=c.createGain();master.gain.setValueAtTime(.0001,now);master.gain.exponentialRampToValueAtTime(.32,now+.012);master.gain.exponentialRampToValueAtTime(.0001,now+(ok?.52:.3));master.connect(c.destination);
    const tones=ok?[{f:784,t:0,d:.22},{f:1046.5,t:.07,d:.30},{f:1318.5,t:.14,d:.32}]:[{f:220,t:0,d:.13},{f:165,t:.08,d:.21}];
    tones.forEach(({f,t,d})=>{const o=c.createOscillator(),g=c.createGain();o.type=ok?'sine':'triangle';o.frequency.setValueAtTime(f,now+t);g.gain.setValueAtTime(.0001,now+t);g.gain.exponentialRampToValueAtTime(ok?.72:.5,now+t+.012);g.gain.exponentialRampToValueAtTime(.0001,now+t+d);o.connect(g);g.connect(master);o.start(now+t);o.stop(now+t+d+.02)});
    
  }catch(e){}
}
function finishSession(){
  const total=session.items.length,score=session.score,folderId=session.folderId;
  const current=folderId?folderPercent(folderId):(session.group?groupPercent(session.group):0), before=session.startedPercent||0;
  const diff=current-before;
  const uniqueDone=session.folder?(session.completedIds?.size||0):score;
  const initial=session.folder?(session.initialCount||total):total;
  const retryCount=session.folder?Math.max(0,initial-uniqueDone):Math.max(0,total-score);
  const complete=uniqueDone>=initial;
  document.getElementById('result-title').textContent=complete?'Супер!':'Так держать!';
  document.getElementById('result-text').innerHTML=session.folder?`<strong>${uniqueDone} из ${initial}</strong> слов закреплено`:`<strong>${score} из ${total}</strong> правильных ответов`;
  document.getElementById('result-grid').innerHTML=`<div class="result-box result-main"><span>${session.folder?'Закреплено':'Правильно'}</span><b>${session.folder?uniqueDone:score}</b></div><div class="result-box"><span>Осталось</span><b>${retryCount}</b></div><div class="result-box"><span>Прогресс</span><b>${current}%</b></div><div class="result-box"><span>Изменение</span><b class="${diff>0?'result-up':''}">${diff>0?'+'+diff+'%':diff===0?'—':'0%'}</b></div>`;
  document.getElementById('result-again').textContent=retryCount?'Повторить сложные слова':'Продолжить';
  document.getElementById('result-home').textContent=session.folder?'В словарь':'К блокам';
  playFeedbackSound(complete);
  show('result');
}
function renderDictionary(){
  const custom=state.customFolders||{}; const myId=state.myWordsFolder;
  const folders=[{id:'irregular',name:'Неправильные глаголы',count:verbs.length,built:true},{id:myId,name:'Мои слова',count:(custom[myId]?.words||[]).length,built:false,system:true},...Object.entries(custom).filter(([id,f])=>id!==myId&&normalize(f.name)!=='мои слова').map(([id,f])=>({id,name:f.name,count:(f.words||[]).length,built:false}))];
  if(!folders.some(f=>f.id===selectedFolder))selectedFolder='irregular';
  document.getElementById('folders').innerHTML=folders.map(f=>{const fp=folderPercent(f.id);return `<div class="folder-card ${selectedFolder===f.id?'selected':''}" data-folder-card="${f.id}" role="button" tabindex="0"><div class="folder-card-head"><h3>📁 ${htmlEscape(f.name)}</h3><span class="badge ${fp>=100?'good':''}">${fp}%</span></div><div class="muted">${countLabel(f.count)}</div><div class="progress"><div class="bar ${fp>=100?'good':''}" style="width:${fp}%"></div></div>${!f.built&&!f.system?'<button class="folder-delete" data-delete-folder="'+f.id+'" title="Удалить папку" aria-label="Удалить папку">×</button>':''}</div>`}).join('');
  document.querySelectorAll('[data-folder-card]').forEach(card=>card.onclick=()=>{selectedFolder=card.dataset.folderCard;save();renderDictionary();if(window.innerWidth<=700){requestAnimationFrame(()=>{const list=document.getElementById('dict-list');if(list)list.scrollIntoView({behavior:'smooth',block:'start'});});}});
  document.querySelectorAll('[data-delete-folder]').forEach(b=>b.onclick=e=>{e.stopPropagation();openModal('confirm','Удалить папку?','Папка будет удалена.','deleteFolder',b.dataset.deleteFolder)});
  const title=folders.find(f=>f.id===selectedFolder)||folders[0];
  const selectedProgress=folderPercent(title.id);
  const selectedWords=title.built?verbs:(custom[title.id]?.words||[]);
  const selectedMastered=selectedWords.filter(v=>title.built?mastered(v):customStat(v.id).level>=3).length;
  document.getElementById('dict-title').textContent=title.name;
  document.getElementById('dict-progress').innerHTML=`<div class="dict-progress-line"><span>Прогресс</span><b>${selectedProgress}%</b></div><div class="progress"><div class="bar ${selectedProgress>=100?'good':''}" style="width:${selectedProgress}%"></div></div><div class="muted">Закреплено: ${selectedMastered} из ${selectedWords.length}</div>`;
  document.getElementById('dict-tools').innerHTML=`<button class="primary" id="train-folder">Тренировать папку</button>${title.built||title.system?'':'<button id="add-to-current">+ Добавить слово</button>'}`;
  document.getElementById('train-folder').onclick=()=>startFolderTraining(false,title.id);
  if(!title.built&&!title.system)document.getElementById('add-to-current').onclick=()=>openModal('word');
  const words=title.built?verbs:(custom[title.id]?.words||[]);
  if(title.built){
    document.getElementById('dict-list').innerHTML=`<div class="learn-table-wrap"><table class="learn-table"><thead><tr><th>V1 · Infinitive</th><th>V2 · Past Simple</th><th>V3 · Past Participle</th><th>Перевод</th><th></th></tr></thead><tbody>${words.map(v=>`<tr><td>${ipaCell(v.inf,v.ipa)}</td><td>${ipaCell(v.past,v.pastIpa===v.ipa?'':v.pastIpa)}</td><td>${ipaCell(v.part,v.partIpa===v.pastIpa?'':v.partIpa)}</td><td class="learn-translation">${htmlEscape(v.ru)}</td><td><button class="icon-btn listen-button" title="Прослушать" aria-label="Прослушать" data-dict-speak="${htmlEscape(v.inf)}">🔊</button></td></tr>`).join('')}</tbody></table></div>`;
  }else{
    document.getElementById('dict-list').innerHTML=words.map(v=>`<div class="word-item custom-word-line"><span><b>${htmlEscape(v.word)}</b></span><span>${htmlEscape(v.translation)}</span><div class="word-actions"><button class="icon-btn small-action" data-edit-word="${v.id}" title="Редактировать" aria-label="Редактировать">✎</button><button class="icon-btn small-action" data-manage-word="${v.id}" title="Переместить" aria-label="Переместить">↔</button><button class="icon-btn danger small-action" data-delete-word="${v.id}" title="Удалить" aria-label="Удалить">🗑</button></div></div>`).join('');
  }
  document.querySelectorAll('[data-dict-speak]').forEach(b=>b.onclick=()=>speak(b.dataset.dictSpeak,true));
  document.querySelectorAll('[data-delete-word]').forEach(b=>b.onclick=()=>openModal('confirm','Удалить слово?','Слово будет удалено из этой папки.','deleteWord',b.dataset.deleteWord,title.id));
  document.querySelectorAll('[data-edit-word]').forEach(b=>b.onclick=()=>openModal('editWord','Редактировать слово',null,'editWord',b.dataset.editWord));
  document.querySelectorAll('[data-manage-word]').forEach(b=>b.onclick=()=>openModal('move','Перенести слово',null,'manageWord',b.dataset.manageWord,title.id));
}

function renderErrors(){
  const es=verbs.filter(v=>st(v).wrong>0).sort((a,b)=>st(b).wrong-st(a).wrong);
  const box=document.getElementById('error-list');
  if(!es.length){box.innerHTML='<div class="section-note">Ошибок пока нет.</div>';return;}
  box.innerHTML=`<div class="errors-summary"><div><b>${es.length}</b> ${pluralizeRu(es.length,'слово с ошибкой','слова с ошибками','слов с ошибками')}</div><button class="primary" id="train-all-errors">Тренировать все ошибки</button></div><div class="learn-table-wrap"><table class="learn-table"><thead><tr><th>V1 · Infinitive</th><th>V2 · Past Simple</th><th>V3 · Past Participle</th><th>Перевод</th><th>Ошибок</th></tr></thead><tbody>${es.map(v=>`<tr><td>${ipaCell(v.inf,v.ipa)}</td><td>${ipaCell(v.past,v.pastIpa===v.ipa?'':v.pastIpa)}</td><td>${ipaCell(v.part,v.partIpa===v.pastIpa?'':v.partIpa)}</td><td class="learn-translation">${htmlEscape(v.ru)}</td><td><span class="badge bad">${st(v).wrong}</span></td></tr>`).join('')}</tbody></table></div>`;
  document.getElementById('train-all-errors').onclick=()=>startMixed('errors',selectedGroup);
}
function customStat(id){state.customStats=state.customStats||{};return state.customStats[id]||(state.customStats[id]={level:0,wrong:0})}
function makeCustomItem(v,mode){return {v,mode,custom:true,hintLevel:0,letterForm:Math.random()<.5?'word':'cloze'}}
function customOptions(v,kind){const custom=state.customFolders||{};const folderWords=(custom[selectedFolder]?.words||[]).filter(x=>x.id!==v.id);const source=kind==='word'?v.word:v.translation;const same=folderWords.map(x=>kind==='word'?x.word:x.translation);const irregular=shuffle(verbs).map(x=>kind==='word'?x.inf:x.ru);const pool=[];for(const x of shuffle(same.concat(irregular))){if(normalize(x)!==normalize(source)&&!pool.some(y=>normalize(y)===normalize(x)))pool.push(x);if(pool.length>=3)break}return [source,...pool]}
function folderAchievementTarget(count){if(count<=5)return 4;if(count<=10)return 3;return 2}
function folderPercent(folderId){
  if(folderId==='irregular')return percentFor(verbs);
  const words=(state.customFolders?.[folderId]?.words||[]);
  if(!words.length)return 0;
  return Math.round(words.reduce((sum,w)=>sum+Math.min(1,(customStat(w.id).level||0)/3),0)/words.length*100);
}
function folderModes(folderId){
  return folderId==='irregular'
    ? ['ruToEn','enToRu','ruToEnWrite','enToRuWrite','listen']
    : ['customRuToEn','customEnToRu','customRuToEnWrite','customEnToRuWrite','customListen'];
}
function makeFolderItem(v,folderId,mode){
  const modes=folderModes(folderId);
  return {v,mode:mode||modes[Math.floor(Math.random()*modes.length)],custom:folderId!=='irregular',retries:0};
}
function buildFolderItems(base,folderId){
  const modes=folderModes(folderId), rounds=[];
  for(let round=0;round<3;round++){
    rounds.push(shuffle(base).map((v,i)=>makeFolderItem(v,folderId,modes[(i+round)%modes.length])));
  }
  return rounds.flat();
}
function startFolderTraining(mix=false, folderId=selectedFolder, reviewWeak=false){
  selectedFolder=folderId||selectedFolder||'irregular';
  const custom=state.customFolders||{};
  let base=selectedFolder==='irregular'?shuffle(verbs).slice(0,15):shuffle(custom[selectedFolder]?.words||[]);
  if(reviewWeak){base=selectedFolder==='irregular'?shuffle(verbs.filter(v=>st(v).level<3)).slice(0,15):shuffle((custom[selectedFolder]?.words||[]).filter(w=>customStat(w.id).level<3));}
  if(!base.length){renderDictionary();return;}
  const items=buildFolderItems(base,selectedFolder);
  session={items,index:0,score:0,kind:'folder',group:selectedGroup,answered:false,folder:true,mix:false,returnTo:'dictionary',folderId:selectedFolder,startedPercent:folderPercent(selectedFolder),initialCount:base.length,initialIds:base.map(v=>v.id||v.n),completedIds:new Set(),pending:base.length,completed:0,reviewed:0};
  save();show('quiz');renderQFolder();
}
function renderQFolder(){
  const q=session.items[session.index],v=q.v;
  session.answered=false;
  const folderName=state.customFolders?.[selectedFolder]?.name||(selectedFolder==='irregular'?'Неправильные глаголы':'Мои слова');
  document.getElementById('q-meta').innerHTML=`<div class="training-heading">${htmlEscape(folderName)}</div><div class="training-badges"><span class="badge">${session.index+1} / ${session.items.length}</span><span class="badge">${folderPercent(session.folderId)}% прогресс</span></div>`;
  document.getElementById('q-bar').style.width=(session.index/session.items.length*100)+'%';
  document.getElementById('q-feedback').innerHTML=''; document.getElementById('q-hint').textContent='';
  document.getElementById('q-word').textContent=''; document.getElementById('q-ipa').textContent=''; document.getElementById('q-ru').textContent='';
  document.getElementById('sound-btn').classList.add('hidden');
  let title='',body='';
  if(q.mode==='ruToEn'){
    title='Переведи на английский'; document.getElementById('q-ru').innerHTML=`<div class="translation-word">${htmlEscape(v.ru)}</div>`; body=translationRuToEnWord(v);
  }else if(q.mode==='enToRu'){
    title='Переведи на русский'; document.getElementById('q-word').textContent=v.inf; body=translationEnToRu(v); document.getElementById('sound-btn').classList.remove('hidden');
  }else if(q.mode==='ruToEnWrite'){
    title='Напиши по-английски'; document.getElementById('q-ru').innerHTML=`<div class="translation-word">${htmlEscape(v.ru)}</div>`; body=`<div class="single-answer compact-answer"><input id="ans-folder" autocomplete="off" spellcheck="false" aria-label="Ответ"></div>`;
  }else if(q.mode==='enToRuWrite'){
    title='Напиши перевод'; document.getElementById('q-word').textContent=v.inf; body=`<div class="single-answer compact-answer"><input id="ans-folder" autocomplete="off" spellcheck="false" aria-label="Ответ"></div>`; document.getElementById('sound-btn').classList.remove('hidden');
  }else if(q.mode==='listen'){
    title='Какое слово ты слышишь?'; body=`<div class="listen-box"><div class="listen-icon">🔊</div><div class="option-list">${optionSet(v.inf,pickOthers(v).slice(0,3).map(x=>x.inf))}</div></div>`; document.getElementById('sound-btn').classList.remove('hidden');
  }else if(q.mode==='customRuToEn'){
    title='Переведи на английский'; document.getElementById('q-ru').innerHTML=`<div class="translation-word">${htmlEscape(v.translation)}</div>`; body=`<div class="option-list">${optionSet(v.word,customOptions(v,'word').slice(1))}</div>`;
  }else if(q.mode==='customEnToRu'){
    title='Переведи на русский'; document.getElementById('q-word').textContent=v.word; body=`<div class="option-list">${optionSet(v.translation,customOptions(v,'translation').slice(1))}</div>`; document.getElementById('sound-btn').classList.remove('hidden');
  }else if(q.mode==='customRuToEnWrite'){
    title='Напиши по-английски'; document.getElementById('q-ru').innerHTML=`<div class="translation-word">${htmlEscape(v.translation)}</div>`; body=`<div class="single-answer compact-answer"><input id="ans-folder" autocomplete="off" spellcheck="false" aria-label="Ответ"></div>`;
  }else if(q.mode==='customEnToRuWrite'){
    title='Напиши перевод'; document.getElementById('q-word').textContent=v.word; body=`<div class="single-answer compact-answer"><input id="ans-folder" autocomplete="off" spellcheck="false" aria-label="Ответ"></div>`; document.getElementById('sound-btn').classList.remove('hidden');
  }else{
    title='Какое слово ты слышишь?'; body=`<div class="listen-box"><div class="listen-icon">🔊</div><div class="option-list">${optionSet(v.word,customOptions(v,'word').slice(1))}</div></div>`; document.getElementById('sound-btn').classList.remove('hidden');
  }
  document.getElementById('q-mode').textContent=title; document.getElementById('q-body').innerHTML=body; bindOptions(); bindInputs();
  autoSpeakForQuestion(q);
}
function checkFolderCurrent(force=false){
  if(session.answered)return;
  const q=session.items[session.index],v=q.v,a=currentAnswers(); let ok=false;
  if(force){ok=false;}
  else if(q.mode==='customRuToEn'||q.mode==='customEnToRu'||q.mode==='customListen'||q.mode==='ruToEn'||q.mode==='enToRu'||q.mode==='listen'){const selected=document.querySelector('.option.selected');ok=selected?.dataset.correct==='1';}
  else if(q.mode==='customRuToEnWrite')ok=normalize(a.folder)===normalize(v.word);
  else if(q.mode==='customEnToRuWrite')ok=normalize(a.folder)===normalize(v.translation);
  else if(q.mode==='ruToEnWrite')ok=acceptsInf(v,a.folder);
  else if(q.mode==='enToRuWrite')ok=normalize(a.folder)===normalize(v.ru);
  session.answered=true;
  if(ok)session.score++;
  if(q.custom){
    const cs=customStat(v.id);cs.attempts=(cs.attempts||0)+1;
    if(ok){cs.level=Math.min(3,(cs.level||0)+1);cs.streak=(cs.streak||0)+1}else{cs.wrong=(cs.wrong||0)+1;cs.level=0;cs.streak=0}
    if(cs.level>=3)session.completedIds?.add(v.id);
  }else{
    markAttempt(v,ok,q.mode);
    if(mastered(v))session.completedIds?.add(v.n);
  }
  save();
  document.querySelectorAll('.option').forEach(btn=>{
    const val=normalize(btn.dataset.option); let correct='';
    if(q.mode==='customRuToEn'||q.mode==='customListen')correct=normalize(v.word);
    else if(q.mode==='customEnToRu')correct=normalize(v.translation);
    else if(q.mode==='ruToEn'||q.mode==='listen')correct=normalize(v.inf);
    else if(q.mode==='enToRu')correct=normalize(v.ru);
    if(val===correct)btn.classList.add('correct'); else if(btn.classList.contains('selected')&&!ok)btn.classList.add('wrong');
  });
  const corr={customRuToEn:v.word,customListen:v.word,customRuToEnWrite:v.word,customEnToRu:v.translation,customEnToRuWrite:v.translation,ruToEn:v.inf,listen:v.inf,ruToEnWrite:v.inf,enToRu:v.ru,enToRuWrite:v.ru}[q.mode];
  document.getElementById('q-feedback').innerHTML=ok||!corr?'':'<span class="bad-t">Правильно: '+htmlEscape(corr)+'</span>';
  playFeedbackSound(ok);
  if(!ok){
    q.retries=(q.retries||0)+1;
    q.mode=makeFolderItem(v,session.folderId).mode;
    const insertAt=Math.min(session.items.length,session.index+4+Math.floor(Math.random()*3));
    session.items.splice(insertAt,0,q);
  }
  advanceTimer=setTimeout(nextFolderQ,ok?430:2200);
}
function nextFolderQ(){if(!session||!session.answered)return;session.index++;if(session.index>=session.items.length)finishSession();else renderQFolder()}

function openModal(type,title,message,action,arg1,arg2){
  const back=document.getElementById('modal-backdrop'),content=document.getElementById('modal-content');
  document.getElementById('modal-title').textContent=title||'';
  back.dataset.type=type;back.dataset.action=action||'';back.dataset.arg1=arg1||'';back.dataset.arg2=arg2||'';
  if(type==='folder'){content.innerHTML='<label>Название папки<input id="modal-folder-name" autocomplete="off"></label>';document.getElementById('modal-ok').textContent='Создать';}
  else if(type==='word'){content.innerHTML='<label>Слово<input id="modal-word" autocomplete="off"></label><label style="margin-top:12px">Перевод<input id="modal-translation" autocomplete="off"></label>';document.getElementById('modal-ok').textContent='Добавить';}
  else if(type==='editWord'){const wordId=arg1,custom=state.customFolders||{};let word=null;for(const f of Object.values(custom)){const w=(f.words||[]).find(x=>x.id===wordId);if(w){word=w;break}}content.innerHTML=`<label>Слово<input id="modal-word" autocomplete="off" value="${htmlEscape(word?.word||'')}"></label><label style="margin-top:12px">Перевод<input id="modal-translation" autocomplete="off" value="${htmlEscape(word?.translation||'')}"></label>`;document.getElementById('modal-ok').textContent='Сохранить';back.dataset.wordId=wordId;}
  else if(type==='move'){
    const wordId=arg1,currentFolder=arg2,custom=state.customFolders||{};
    const word=(custom[currentFolder]?.words||[]).find(w=>w.id===wordId);
    const memberships=[];for(const [id,f] of Object.entries(custom)){if((f.words||[]).some(w=>w.id===wordId))memberships.push(id)}
    content.innerHTML=`<div class="modal-message">${htmlEscape(word?.word||'Слово')}<br><span class="muted">Выбери папки, в которых оно должно остаться.</span></div><div class="folder-checks">${Object.entries(custom).filter(([id])=>id!==state.myWordsFolder||true).map(([id,f])=>`<label><input type="checkbox" data-move-folder="${id}" ${memberships.includes(id)?'checked':''}> ${htmlEscape(f.name)}</label>`).join('')}</div>`;
    document.getElementById('modal-ok').textContent='Сохранить';
    back.dataset.wordId=wordId;back.dataset.currentFolder=currentFolder;
  }
  else {content.innerHTML=`<div class="modal-message">${htmlEscape(message||'')}</div>`;document.getElementById('modal-ok').textContent='Удалить';}
  back.classList.remove('hidden');
}
function closeModal(){document.getElementById('modal-backdrop').classList.add('hidden')}
function addFolder(){openModal('folder','Новая папка')}
function addWord(){if(selectedFolder==='irregular'){selectedFolder=state.myWordsFolder;save();renderDictionary()}openModal('word','Добавить слово')}
function modalConfirm(){
  const back=document.getElementById('modal-backdrop'),type=back.dataset.type,action=back.dataset.action;
  if(type==='folder'){const name=(document.getElementById('modal-folder-name')?.value||'').trim().replace(/\s+/g,' ');if(!name)return;state.customFolders=state.customFolders||{};const id='f_'+Date.now();state.customFolders[id]={name,words:[]};selectedFolder=id;save();closeModal();renderDictionary();return}
  if(type==='word'){const word=document.getElementById('modal-word')?.value.trim(),translation=document.getElementById('modal-translation')?.value.trim();if(!word||!translation)return;state.customFolders=state.customFolders||{};const target=selectedFolder==='irregular'?state.myWordsFolder:selectedFolder;state.customFolders[target]=state.customFolders[target]||{name:'Мои слова',words:[]};state.customFolders[target].words.push({id:'w_'+Date.now(),word,translation});save();closeModal();renderDictionary();return}
  if(type==='editWord'){const wordId=back.dataset.wordId,word=document.getElementById('modal-word')?.value.trim(),translation=document.getElementById('modal-translation')?.value.trim();if(!word||!translation)return;const custom=state.customFolders||{};for(const f of Object.values(custom)){for(const w of (f.words||[])){if(w.id===wordId){w.word=word;w.translation=translation}}}state.customFolders=custom;save();closeModal();renderDictionary();return}
  if(type==='move'){const wordId=back.dataset.wordId,currentFolder=back.dataset.currentFolder,custom=state.customFolders||{};const selected=[...back.querySelectorAll('[data-move-folder]:checked')].map(x=>x.dataset.moveFolder);
    if(!selected.length){const m=back.querySelector('.modal-message .muted');if(m)m.textContent='Выбери хотя бы одну папку или удали слово корзиной.';return}
    let word=null;for(const f of Object.values(custom)){const w=(f.words||[]).find(x=>x.id===wordId);if(w){word=w;break}}
    if(word){for(const f of Object.values(custom))f.words=(f.words||[]).filter(x=>x.id!==wordId);for(const id of selected){custom[id].words=custom[id].words||[];custom[id].words.push({...word})}}
    state.customFolders=custom;save();closeModal();renderDictionary();return}
  if(type==='confirm'){if(action==='deleteFolder'){const custom=state.customFolders||{};delete custom[back.dataset.arg1];state.customFolders=custom;selectedFolder=state.myWordsFolder||'irregular';save();closeModal();renderDictionary()}else if(action==='deleteWord'){const custom=state.customFolders||{},folder=custom[back.dataset.arg2];if(folder)folder.words=(folder.words||[]).filter(w=>w.id!==back.dataset.arg1);state.customFolders=custom;save();closeModal();renderDictionary()}else closeModal()}
}

const nav=id=>document.getElementById(id);
nav('nav-home').onclick=()=>{show('home');window.scrollTo({top:0,behavior:'smooth'})};
nav('dontknow').onclick=dontKnow;
nav('hint-btn').onclick=giveHint;
nav('sound-btn').onclick=()=>speak(session.items[session.index].v.word||session.items[session.index].v.inf,true);
nav('add-folder').onclick=addFolder;
nav('add-word').onclick=addWord;
nav('result-again').onclick=()=>{if(session&&session.folder)startFolderTraining(false,session.folderId,true);else startMixed('new')};
nav('result-home').onclick=()=>{if(session&&session.folder){show('dictionary');window.scrollTo({top:0,behavior:'smooth'});}else{show('home');window.scrollTo({top:0,behavior:'smooth'});}};
nav('finish-training').onclick=()=>{if(session){session.answered=true;const target=session.folder?'dictionary':'home';show(target);window.scrollTo({top:0,behavior:'smooth'});}};
nav('scroll-top').onclick=()=>window.scrollTo({top:0,behavior:'smooth'});
window.addEventListener('scroll',()=>{const b=document.getElementById('scroll-top');if(b)b.classList.toggle('show',window.scrollY>650)},{passive:true});
nav('study-btn').onclick=startStudy;
nav('home-open-dict').onclick=()=>{show('dictionary');window.scrollTo({top:0,behavior:'smooth'})};
nav('continue-btn').onclick=()=>startMixed(groupPercent(selectedGroup)>=100?'groupRepeat':'new',selectedGroup);
nav('learn-start').onclick=()=>startMixed('new',selectedGroup);
nav('learn-finish').onclick=()=>{show('home');window.scrollTo({top:0,behavior:'smooth'});};
const soundToggle=document.getElementById('sound-toggle');
const themeToggle=document.getElementById('theme-toggle');
function renderThemeToggle(){const dark=theme==='dark';document.documentElement.dataset.theme=theme;themeToggle.setAttribute('aria-pressed',String(dark));themeToggle.title=dark?'Переключить на светлую тему':'Переключить на тёмную тему';themeToggle.classList.toggle('is-dark',dark);}
themeToggle.onclick=()=>{theme=theme==='dark'?'light':'dark';save();renderThemeToggle();};
renderThemeToggle();
function renderSoundToggle(){soundToggle.setAttribute('aria-pressed',String(soundOn));soundToggle.title=soundOn?'Выключить звук':'Включить звук';soundToggle.classList.toggle('is-on',soundOn);}
soundToggle.onclick=()=>{soundOn=!soundOn;state.soundOn=soundOn;save();renderSoundToggle()};
renderSoundToggle();
nav('modal-cancel').onclick=closeModal;
nav('modal-ok').onclick=modalConfirm;
document.getElementById('modal-backdrop').onclick=e=>{if(e.target.id==='modal-backdrop')closeModal()};
show('home');
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'))}
nav('errors-btn').onclick=()=>{show('errors');window.scrollTo({top:0,behavior:'smooth'})};
nav('errors-back').onclick=()=>{show('home');window.scrollTo({top:0,behavior:'smooth'})};
document.querySelectorAll('.mini-row').forEach(r=>{const b=r.querySelector('button'),w=r.querySelector('b');if(b&&w)b.onclick=()=>speak(w.textContent,true)});
document.addEventListener('keydown',e=>{const c=e.target;if(c&&c.matches&&c.matches('[data-folder-card]')&&(e.key==='Enter'||e.key===' ')){e.preventDefault();c.click()}});
document.addEventListener('pointerdown',()=>{try{fbCtx=fbCtx||new (window.AudioContext||window.webkitAudioContext)();if(fbCtx.resume)fbCtx.resume()}catch(e){}try{currentAudio=currentAudio||new Audio();const au=currentAudio;au.src=AUDIO_DATA[1];au.volume=0;const p=au.play();if(p&&p.then)p.then(()=>{au.pause();au.currentTime=0;au.volume=1}).catch(()=>{au.volume=1})}catch(e){}},{once:true});
