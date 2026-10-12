const verbs=[{"n":1,"inf":"arise","past":"arose","part":"arisen","ru":"возникать","ipa":"ɜːraɪz","pastIpa":"ɜːroʊz","partIpa":"ɜːrɪzən"},{"n":2,"inf":"awake","past":"awoke","part":"awoken","ru":"просыпаться","ipa":"əweɪk","pastIpa":"əwoʊk","partIpa":""},{"n":3,"inf":"be","past":"was/were","part":"been","ru":"быть","ipa":"biː","pastIpa":"wɑːz / wɜːr","partIpa":"bɪn"},{"n":4,"inf":"bear","past":"bore","part":"borne/born","ru":"переносить, рожать","ipa":"ber","pastIpa":"bɔːr","partIpa":"bɔːrn / bɔːrn"},{"n":5,"inf":"beat","past":"beat","part":"beaten","ru":"бить","ipa":"biːt","pastIpa":"biːt","partIpa":"biːtən"},{"n":6,"inf":"become","past":"became","part":"become","ru":"становиться","ipa":"bɪkʌm","pastIpa":"bɪkeɪm","partIpa":"bɪkʌm"},{"n":7,"inf":"begin","past":"began","part":"begun","ru":"начинать","ipa":"bɪɡɪn","pastIpa":"bɪɡæn","partIpa":"bɪɡʌn"},{"n":8,"inf":"bend","past":"bent","part":"bent","ru":"сгибать","ipa":"bend","pastIpa":"bent","partIpa":"bent"},{"n":9,"inf":"bet","past":"bet","part":"bet","ru":"держать пари","ipa":"bet","pastIpa":"bet","partIpa":"bet"},{"n":10,"inf":"bind","past":"bound","part":"bound","ru":"связывать","ipa":"baɪnd","pastIpa":"baʊnd","partIpa":"baʊnd"},{"n":11,"inf":"bite","past":"bit","part":"bitten","ru":"кусать","ipa":"baɪt","pastIpa":"bɪt","partIpa":"bɪtən"},{"n":12,"inf":"bleed","past":"bled","part":"bled","ru":"кровоточить","ipa":"bliːd","pastIpa":"bled","partIpa":"bled"},{"n":13,"inf":"blow","past":"blew","part":"blown","ru":"дуть","ipa":"bloʊ","pastIpa":"bluː","partIpa":"bloʊn"},{"n":14,"inf":"break","past":"broke","part":"broken","ru":"ломать","ipa":"breɪk","pastIpa":"broʊk","partIpa":"broʊkən"},{"n":15,"inf":"breed","past":"bred","part":"bred","ru":"разводить","ipa":"briːd","pastIpa":"bred","partIpa":"bred"},{"n":16,"inf":"bring","past":"brought","part":"brought","ru":"приносить","ipa":"brɪŋ","pastIpa":"brɔːt","partIpa":"brɔːt"},{"n":17,"inf":"broadcast","past":"broadcast","part":"broadcast","ru":"транслировать","ipa":"brɔːdkæst","pastIpa":"brɔːdkæst","partIpa":"brɔːdkæst"},{"n":18,"inf":"build","past":"built","part":"built","ru":"строить","ipa":"bɪld","pastIpa":"bɪlt","partIpa":"bɪlt"},{"n":19,"inf":"burn","past":"burnt/burned","part":"burnt/burned","ru":"гореть, сжигать","ipa":"bɜːrn","pastIpa":"bɜːrnt / bɜːrnd","partIpa":"bɜːrnt / bɜːrnd"},{"n":20,"inf":"burst","past":"burst","part":"burst","ru":"лопаться","ipa":"bɜːrst","pastIpa":"bɜːrst","partIpa":"bɜːrst"},{"n":21,"inf":"buy","past":"bought","part":"bought","ru":"покупать","ipa":"baɪ","pastIpa":"bɑːt","partIpa":"bɑːt"},{"n":22,"inf":"catch","past":"caught","part":"caught","ru":"ловить","ipa":"kætʃ","pastIpa":"kɑːt","partIpa":"kɑːt"},{"n":23,"inf":"choose","past":"chose","part":"chosen","ru":"выбирать","ipa":"tʃuːz","pastIpa":"tʃoʊz","partIpa":"tʃoʊzən"},{"n":24,"inf":"come","past":"came","part":"come","ru":"приходить","ipa":"kʌm","pastIpa":"keɪm","partIpa":"kʌm"},{"n":25,"inf":"cost","past":"cost","part":"cost","ru":"стоить","ipa":"kɑːst","pastIpa":"kɑːst","partIpa":"kɑːst"},{"n":26,"inf":"creep","past":"crept","part":"crept","ru":"ползти","ipa":"kriːp","pastIpa":"krept","partIpa":"krept"},{"n":27,"inf":"cut","past":"cut","part":"cut","ru":"резать","ipa":"kʌt","pastIpa":"kʌt","partIpa":"kʌt"},{"n":28,"inf":"deal","past":"dealt","part":"dealt","ru":"иметь дело","ipa":"diːl","pastIpa":"delt","partIpa":"delt"},{"n":29,"inf":"dig","past":"dug","part":"dug","ru":"копать","ipa":"dɪɡ","pastIpa":"dʌɡ","partIpa":"dʌɡ"},{"n":30,"inf":"do","past":"did","part":"done","ru":"делать","ipa":"duː","pastIpa":"dɪd","partIpa":"dʌn"},{"n":31,"inf":"draw","past":"drew","part":"drawn","ru":"рисовать, тянуть","ipa":"drɔː","pastIpa":"druː","partIpa":"drɔːn"},{"n":32,"inf":"dream","past":"dreamt/dreamed","part":"dreamt/dreamed","ru":"мечтать","ipa":"driːm","pastIpa":"dremt / driːmd","partIpa":"dremt / driːmd"},{"n":33,"inf":"drink","past":"drank","part":"drunk","ru":"пить","ipa":"drɪŋk","pastIpa":"dræŋk","partIpa":"drʌŋk"},{"n":34,"inf":"drive","past":"drove","part":"driven","ru":"водить","ipa":"draɪv","pastIpa":"droʊv","partIpa":"drɪvən"},{"n":35,"inf":"eat","past":"ate","part":"eaten","ru":"есть","ipa":"iːt","pastIpa":"eɪt","partIpa":"iːtən"},{"n":36,"inf":"fall","past":"fell","part":"fallen","ru":"падать","ipa":"fɔːl","pastIpa":"fel","partIpa":"fɑːlən"},{"n":37,"inf":"feed","past":"fed","part":"fed","ru":"кормить","ipa":"fiːd","pastIpa":"fed","partIpa":"fed"},{"n":38,"inf":"feel","past":"felt","part":"felt","ru":"чувствовать","ipa":"fiːl","pastIpa":"felt","partIpa":"felt"},{"n":39,"inf":"fight","past":"fought","part":"fought","ru":"драться, бороться","ipa":"faɪt","pastIpa":"fɔːt","partIpa":"fɔːt"},{"n":40,"inf":"find","past":"found","part":"found","ru":"находить","ipa":"faɪnd","pastIpa":"faʊnd","partIpa":"faʊnd"},{"n":41,"inf":"flee","past":"fled","part":"fled","ru":"убегать","ipa":"fliː","pastIpa":"fled","partIpa":"fled"},{"n":42,"inf":"fly","past":"flew","part":"flown","ru":"летать","ipa":"flaɪ","pastIpa":"fluː","partIpa":"floʊn"},{"n":43,"inf":"forbid","past":"forbade","part":"forbidden","ru":"запрещать","ipa":"fɜːrbɪd","pastIpa":"fɜːrbeɪd","partIpa":"fɔːrbɪdən"},{"n":44,"inf":"forget","past":"forgot","part":"forgotten","ru":"забывать","ipa":"fɜːrɡet","pastIpa":"fɜːrɡɑːt","partIpa":"fɜːrɡɑːtən"},{"n":45,"inf":"forgive","past":"forgave","part":"forgiven","ru":"прощать","ipa":"fɜːrɡɪv","pastIpa":"fɜːrɡeɪv","partIpa":"fɜːrɡɪvən"},{"n":46,"inf":"freeze","past":"froze","part":"frozen","ru":"замерзать","ipa":"friːz","pastIpa":"froʊz","partIpa":"froʊzən"},{"n":47,"inf":"get","past":"got","part":"got/gotten","ru":"получать","ipa":"ɡet","pastIpa":"ɡɑːt","partIpa":"ɡɑːt / ɡɑːtən"},{"n":48,"inf":"give","past":"gave","part":"given","ru":"давать","ipa":"ɡɪv","pastIpa":"ɡeɪv","partIpa":"ɡɪvən"},{"n":49,"inf":"go","past":"went","part":"gone","ru":"идти, ехать","ipa":"ɡoʊ","pastIpa":"went","partIpa":"ɡɔːn"},{"n":50,"inf":"grow","past":"grew","part":"grown","ru":"расти","ipa":"ɡroʊ","pastIpa":"ɡruː","partIpa":"ɡroʊn"},{"n":51,"inf":"hang","past":"hung","part":"hung","ru":"висеть, вешать","ipa":"hæŋ","pastIpa":"hʌŋ","partIpa":"hʌŋ"},{"n":52,"inf":"have","past":"had","part":"had","ru":"иметь","ipa":"hæv","pastIpa":"hæd","partIpa":"hæd"},{"n":53,"inf":"hear","past":"heard","part":"heard","ru":"слышать","ipa":"hiːr","pastIpa":"hɜːrd","partIpa":"hɜːrd"},{"n":54,"inf":"hide","past":"hid","part":"hidden","ru":"прятать","ipa":"haɪd","pastIpa":"hɪd","partIpa":"hɪdən"},{"n":55,"inf":"hit","past":"hit","part":"hit","ru":"ударять","ipa":"hɪt","pastIpa":"hɪt","partIpa":"hɪt"},{"n":56,"inf":"hold","past":"held","part":"held","ru":"держать","ipa":"hoʊld","pastIpa":"held","partIpa":"held"},{"n":57,"inf":"hurt","past":"hurt","part":"hurt","ru":"причинять боль","ipa":"hɜːrt","pastIpa":"hɜːrt","partIpa":"hɜːrt"},{"n":58,"inf":"keep","past":"kept","part":"kept","ru":"хранить, держать","ipa":"kiːp","pastIpa":"kept","partIpa":"kept"},{"n":59,"inf":"kneel","past":"knelt/kneeled","part":"knelt/kneeled","ru":"становиться на колени","ipa":"niːl","pastIpa":"nelt / ","partIpa":"nelt / "},{"n":60,"inf":"know","past":"knew","part":"known","ru":"знать","ipa":"noʊ","pastIpa":"nuː","partIpa":"noʊn"},{"n":61,"inf":"lay","past":"laid","part":"laid","ru":"класть","ipa":"leɪ","pastIpa":"leɪd","partIpa":"leɪd"},{"n":62,"inf":"lead","past":"led","part":"led","ru":"вести","ipa":"led","pastIpa":"led","partIpa":"led"},{"n":63,"inf":"lean","past":"leant/leaned","part":"leant/leaned","ru":"наклоняться","ipa":"liːn","pastIpa":"liːənt / liːnd","partIpa":"liːənt / liːnd"},{"n":64,"inf":"leap","past":"leapt/leaped","part":"leapt/leaped","ru":"прыгать","ipa":"liːp","pastIpa":"lept / lept","partIpa":"lept / lept"},{"n":65,"inf":"learn","past":"learnt/learned","part":"learnt/learned","ru":"учить, узнавать","ipa":"lɜːrn","pastIpa":"lɜːrnt / lɜːrnd","partIpa":"lɜːrnt / lɜːrnd"},{"n":66,"inf":"leave","past":"left","part":"left","ru":"уходить, оставлять","ipa":"liːv","pastIpa":"left","partIpa":"left"},{"n":67,"inf":"lend","past":"lent","part":"lent","ru":"одалживать","ipa":"lend","pastIpa":"lent","partIpa":"lent"},{"n":68,"inf":"let","past":"let","part":"let","ru":"позволять","ipa":"let","pastIpa":"let","partIpa":"let"},{"n":69,"inf":"lie","past":"lay","part":"lain","ru":"лежать","ipa":"laɪ","pastIpa":"leɪ","partIpa":"leɪn"},{"n":70,"inf":"light","past":"lit/lighted","part":"lit/lighted","ru":"зажигать","ipa":"laɪt","pastIpa":"lɪt / laɪtəd","partIpa":"lɪt / laɪtəd"},{"n":71,"inf":"lose","past":"lost","part":"lost","ru":"терять","ipa":"luːz","pastIpa":"lɔːst","partIpa":"lɔːst"},{"n":72,"inf":"make","past":"made","part":"made","ru":"делать, создавать","ipa":"meɪk","pastIpa":"meɪd","partIpa":"meɪd"},{"n":73,"inf":"mean","past":"meant","part":"meant","ru":"означать, иметь в виду","ipa":"miːn","pastIpa":"ment","partIpa":"ment"},{"n":74,"inf":"meet","past":"met","part":"met","ru":"встречать","ipa":"miːt","pastIpa":"met","partIpa":"met"},{"n":75,"inf":"mistake","past":"mistook","part":"mistaken","ru":"ошибаться","ipa":"mɪsteɪk","pastIpa":"mɪstʊk","partIpa":"mɪsteɪkən"},{"n":76,"inf":"pay","past":"paid","part":"paid","ru":"платить","ipa":"peɪ","pastIpa":"peɪd","partIpa":"peɪd"},{"n":77,"inf":"prove","past":"proved","part":"proven/proved","ru":"доказывать","ipa":"pruːv","pastIpa":"pruːvd","partIpa":"pruːvən / pruːvd"},{"n":78,"inf":"put","past":"put","part":"put","ru":"класть","ipa":"pʊt","pastIpa":"pʊt","partIpa":"pʊt"},{"n":79,"inf":"quit","past":"quit/quitted","part":"quit/quitted","ru":"бросать, прекращать","ipa":"kwɪt","pastIpa":"kwɪt / ","partIpa":"kwɪt / "},{"n":80,"inf":"read","past":"read","part":"read","ru":"читать","ipa":"red","pastIpa":"red","partIpa":"red"},{"n":81,"inf":"ride","past":"rode","part":"ridden","ru":"ездить","ipa":"raɪd","pastIpa":"roʊd","partIpa":"rɪdən"},{"n":82,"inf":"ring","past":"rang","part":"rung","ru":"звонить","ipa":"rɪŋ","pastIpa":"ræŋ","partIpa":"rʌŋ"},{"n":83,"inf":"rise","past":"rose","part":"risen","ru":"подниматься","ipa":"raɪz","pastIpa":"roʊz","partIpa":"rɪzən"},{"n":84,"inf":"run","past":"ran","part":"run","ru":"бегать","ipa":"rʌn","pastIpa":"ræn","partIpa":"rʌn"},{"n":85,"inf":"say","past":"said","part":"said","ru":"говорить","ipa":"seɪ","pastIpa":"sed","partIpa":"sed"},{"n":86,"inf":"see","past":"saw","part":"seen","ru":"видеть","ipa":"siː","pastIpa":"sɔː","partIpa":"siːn"},{"n":87,"inf":"seek","past":"sought","part":"sought","ru":"искать","ipa":"siːk","pastIpa":"sɔːt","partIpa":"sɔːt"},{"n":88,"inf":"sell","past":"sold","part":"sold","ru":"продавать","ipa":"sel","pastIpa":"soʊld","partIpa":"soʊld"},{"n":89,"inf":"send","past":"sent","part":"sent","ru":"отправлять","ipa":"send","pastIpa":"sent","partIpa":"sent"},{"n":90,"inf":"set","past":"set","part":"set","ru":"устанавливать, ставить","ipa":"set","pastIpa":"set","partIpa":"set"},{"n":91,"inf":"shake","past":"shook","part":"shaken","ru":"трясти","ipa":"ʃeɪk","pastIpa":"ʃʊk","partIpa":"ʃeɪkən"},{"n":92,"inf":"shine","past":"shone/shined","part":"shone/shined","ru":"светить","ipa":"ʃaɪn","pastIpa":"ʃoʊn / ʃaɪnd","partIpa":"ʃoʊn / ʃaɪnd"},{"n":93,"inf":"shoot","past":"shot","part":"shot","ru":"стрелять","ipa":"ʃuːt","pastIpa":"ʃɑːt","partIpa":"ʃɑːt"},{"n":94,"inf":"show","past":"showed","part":"shown/showed","ru":"показывать","ipa":"ʃoʊ","pastIpa":"ʃoʊd","partIpa":"ʃoʊn / ʃoʊd"},{"n":95,"inf":"shut","past":"shut","part":"shut","ru":"закрывать","ipa":"ʃʌt","pastIpa":"ʃʌt","partIpa":"ʃʌt"},{"n":96,"inf":"sing","past":"sang","part":"sung","ru":"петь","ipa":"sɪŋ","pastIpa":"sæŋ","partIpa":"sʌŋ"},{"n":97,"inf":"sink","past":"sank/sunk","part":"sunk","ru":"тонуть","ipa":"sɪŋk","pastIpa":"sæŋk / sʌŋk","partIpa":"sʌŋk"},{"n":98,"inf":"sit","past":"sat","part":"sat","ru":"сидеть","ipa":"sɪt","pastIpa":"sæt","partIpa":"sæt"},{"n":99,"inf":"sleep","past":"slept","part":"slept","ru":"спать","ipa":"sliːp","pastIpa":"slept","partIpa":"slept"},{"n":100,"inf":"slide","past":"slid","part":"slid","ru":"скользить","ipa":"slaɪd","pastIpa":"slɪd","partIpa":"slɪd"},{"n":101,"inf":"smell","past":"smelt/smelled","part":"smelt/smelled","ru":"пахнуть","ipa":"smel","pastIpa":"smelt / smeld","partIpa":"smelt / smeld"},{"n":102,"inf":"speak","past":"spoke","part":"spoken","ru":"говорить","ipa":"spiːk","pastIpa":"spoʊk","partIpa":"spoʊkən"},{"n":103,"inf":"spell","past":"spelt/spelled","part":"spelt/spelled","ru":"писать по буквам","ipa":"spel","pastIpa":" / speld","partIpa":" / speld"},{"n":104,"inf":"spend","past":"spent","part":"spent","ru":"тратить, проводить","ipa":"spend","pastIpa":"spent","partIpa":"spent"},{"n":105,"inf":"spill","past":"spilt/spilled","part":"spilt/spilled","ru":"проливать","ipa":"spɪl","pastIpa":"spɪlt / spɪld","partIpa":"spɪlt / spɪld"},{"n":106,"inf":"spin","past":"spun","part":"spun","ru":"вращать","ipa":"spɪn","pastIpa":"spʌn","partIpa":"spʌn"},{"n":107,"inf":"spit","past":"spat/spit","part":"spat/spit","ru":"плевать","ipa":"spɪt","pastIpa":"spæt / spɪt","partIpa":"spæt / spɪt"},{"n":108,"inf":"split","past":"split","part":"split","ru":"разделять","ipa":"splɪt","pastIpa":"splɪt","partIpa":"splɪt"},{"n":109,"inf":"spoil","past":"spoilt/spoiled","part":"spoilt/spoiled","ru":"портить","ipa":"spɔɪl","pastIpa":" / spɔɪld","partIpa":" / spɔɪld"},{"n":110,"inf":"spread","past":"spread","part":"spread","ru":"распространять","ipa":"spred","pastIpa":"spred","partIpa":"spred"},{"n":111,"inf":"stand","past":"stood","part":"stood","ru":"стоять","ipa":"stænd","pastIpa":"stʊd","partIpa":"stʊd"},{"n":112,"inf":"steal","past":"stole","part":"stolen","ru":"красть","ipa":"stiːl","pastIpa":"stoʊl","partIpa":"stoʊlən"},{"n":113,"inf":"stick","past":"stuck","part":"stuck","ru":"приклеивать, застревать","ipa":"stɪk","pastIpa":"stʌk","partIpa":"stʌk"},{"n":114,"inf":"sting","past":"stung","part":"stung","ru":"жалить","ipa":"stɪŋ","pastIpa":"stʌŋ","partIpa":"stʌŋ"},{"n":115,"inf":"stink","past":"stank/stunk","part":"stunk","ru":"вонять","ipa":"stɪŋk","pastIpa":"stæŋk / stʌŋk","partIpa":"stʌŋk"},{"n":116,"inf":"strike","past":"struck","part":"struck/stricken","ru":"ударять","ipa":"straɪk","pastIpa":"strʌk","partIpa":"strʌk / strɪkən"},{"n":117,"inf":"swear","past":"swore","part":"sworn","ru":"клясться","ipa":"swer","pastIpa":"swɔːr","partIpa":"swɔːrn"},{"n":118,"inf":"sweep","past":"swept","part":"swept","ru":"подметать","ipa":"swiːp","pastIpa":"swept","partIpa":"swept"},{"n":119,"inf":"swim","past":"swam","part":"swum","ru":"плавать","ipa":"swɪm","pastIpa":"swæm","partIpa":"swʌm"},{"n":120,"inf":"swing","past":"swung","part":"swung","ru":"качаться","ipa":"swɪŋ","pastIpa":"swʌŋ","partIpa":"swʌŋ"},{"n":121,"inf":"take","past":"took","part":"taken","ru":"брать","ipa":"teɪk","pastIpa":"tʊk","partIpa":"teɪkən"},{"n":122,"inf":"teach","past":"taught","part":"taught","ru":"учить","ipa":"tiːtʃ","pastIpa":"tɔːt","partIpa":"tɔːt"},{"n":123,"inf":"tear","past":"tore","part":"torn","ru":"рвать","ipa":"ter","pastIpa":"tɔːr","partIpa":"tɔːrn"},{"n":124,"inf":"tell","past":"told","part":"told","ru":"рассказывать, говорить","ipa":"tel","pastIpa":"toʊld","partIpa":"toʊld"},{"n":125,"inf":"think","past":"thought","part":"thought","ru":"думать","ipa":"θɪŋk","pastIpa":"θɔːt","partIpa":"θɔːt"},{"n":126,"inf":"throw","past":"threw","part":"thrown","ru":"бросать","ipa":"θroʊ","pastIpa":"θruː","partIpa":"θroʊn"},{"n":127,"inf":"undergo","past":"underwent","part":"undergone","ru":"подвергаться","ipa":"ʌndɜːrɡoʊ","pastIpa":"ʌndɜːrwent","partIpa":"ʌndɜːrɡɔːn"},{"n":128,"inf":"understand","past":"understood","part":"understood","ru":"понимать","ipa":"ʌndɜːrstænd","pastIpa":"ʌndɜːrstʊd","partIpa":"ʌndɜːrstʊd"},{"n":129,"inf":"wake","past":"woke","part":"woken","ru":"просыпаться, будить","ipa":"weɪk","pastIpa":"woʊk","partIpa":"woʊkən"},{"n":130,"inf":"wear","past":"wore","part":"worn","ru":"носить","ipa":"wer","pastIpa":"wɔːr","partIpa":"wɔːrn"},{"n":131,"inf":"weep","past":"wept","part":"wept","ru":"плакать","ipa":"wiːp","pastIpa":"wept","partIpa":"wept"},{"n":132,"inf":"win","past":"won","part":"won","ru":"выигрывать","ipa":"wɪn","pastIpa":"wʌn","partIpa":"wʌn"},{"n":133,"inf":"wind","past":"wound","part":"wound","ru":"заводить, наматывать","ipa":"waɪnd","pastIpa":"waʊnd","partIpa":"waʊnd"},{"n":134,"inf":"withdraw","past":"withdrew","part":"withdrawn","ru":"забирать, снимать","ipa":"wɪðdrɔː","pastIpa":"wɪθdruː","partIpa":"wɪθdrɔːn"},{"n":135,"inf":"withstand","past":"withstood","part":"withstood","ru":"противостоять","ipa":"wɪθstænd","pastIpa":"wɪθstʊd","partIpa":"wɪθstʊd"},{"n":136,"inf":"wring","past":"wrung","part":"wrung","ru":"выкручивать","ipa":"rɪŋ","pastIpa":"rʌŋ","partIpa":"rʌŋ"},{"n":137,"inf":"write","past":"wrote","part":"written","ru":"писать","ipa":"raɪt","pastIpa":"roʊt","partIpa":"rɪtən"},{"n":138,"inf":"overcome","past":"overcame","part":"overcome","ru":"преодолевать","ipa":"oʊvɜːrkʌm","pastIpa":"oʊvɜːrkeɪm","partIpa":"oʊvɜːrkʌm"},{"n":139,"inf":"overtake","past":"overtook","part":"overtaken","ru":"обгонять","ipa":"oʊvɜːrteɪk","pastIpa":"oʊvɜːrtʊk","partIpa":"oʊvɜːrteɪkən"},{"n":140,"inf":"overthrow","past":"overthrew","part":"overthrown","ru":"свергать","ipa":"oʊvɜːrθroʊ","pastIpa":"oʊvɜːrθruː","partIpa":"oʊvɜːrθroʊn"},{"n":141,"inf":"overdo","past":"overdid","part":"overdone","ru":"перестараться","ipa":"oʊvɜːrduː","pastIpa":"oʊvɜːrdɪd","partIpa":"oʊvɜːrdʌn"},{"n":142,"inf":"redo","past":"redid","part":"redone","ru":"переделывать","ipa":"riːduː","pastIpa":"riːdɪd","partIpa":"riːdʌn"},{"n":143,"inf":"remake","past":"remade","part":"remade","ru":"переделывать, переснимать","ipa":"riːmeɪk","pastIpa":"riːmeɪd","partIpa":"riːmeɪd"},{"n":144,"inf":"retake","past":"retook","part":"retaken","ru":"пересдавать, переснимать","ipa":"riːteɪk","pastIpa":"riːtʊk","partIpa":"riːteɪkən"},{"n":145,"inf":"rewrite","past":"rewrote","part":"rewritten","ru":"переписывать","ipa":"riːraɪt","pastIpa":"riːroʊt","partIpa":"riːrɪtən"},{"n":146,"inf":"foresee","past":"foresaw","part":"foreseen","ru":"предвидеть","ipa":"fɔːrsiː","pastIpa":"fɔːrsɔː","partIpa":"fɔːrsiːn"},{"n":147,"inf":"forecast","past":"forecast","part":"forecast","ru":"прогнозировать","ipa":"fɔːrkæst","pastIpa":"fɔːrkæst","partIpa":"fɔːrkæst"},{"n":148,"inf":"misunderstand","past":"misunderstood","part":"misunderstood","ru":"неправильно понимать","ipa":"mɪsəndɜːrstænd","pastIpa":"mɪsəndɜːrstʊd","partIpa":"mɪsəndɜːrstʊd"},{"n":149,"inf":"undertake","past":"undertook","part":"undertaken","ru":"предпринимать","ipa":"ʌndɜːrteɪk","pastIpa":"ʌndɜːrtʊk","partIpa":"ʌndɜːrteɪkən"},{"n":150,"inf":"uphold","past":"upheld","part":"upheld","ru":"поддерживать, отстаивать","ipa":"əphoʊld","pastIpa":"əpheld","partIpa":"əpheld"},{"n":151,"inf":"upset","past":"upset","part":"upset","ru":"расстраивать","ipa":"əpset","pastIpa":"əpset","partIpa":"əpset"}];

const BLOCK_SIZE=15;
const KEY='irregular_trainer_v9';
let state=JSON.parse(localStorage.getItem(KEY)||'{}');

if(!state.v){
  const oldState=JSON.parse(localStorage.getItem('irregular_trainer_v7')||localStorage.getItem('irregular-verbs-trainer-v6')||'null');
  if(oldState&&typeof oldState==='object'){
    state.v={};
    Object.keys(oldState).forEach(function(k){
      if(/^\d+$/.test(k)){
        const x=oldState[k]||{};
        state.v[k]={level:Number(x.level||0),streak:Number(x.streak||0),wrong:Number(x.wrong||0),wrongV2:Number(x.wrongV2||0),wrongV3:Number(x.wrongV3||0),wrongInf:Number(x.wrongInf||0),attempts:Number(x.attempts||0),due:Number(x.due||0),today:Number(x.today||0),spelling:Number(x.spelling||0),skill:x.skill||{}};
      }
    });
    state.selectedBlock=Number(oldState.selectedBlock||localStorage.getItem('irregular-verbs-trainer-v6_block')||1);
  }
}
state.v=state.v||{};
state.customFolders=state.customFolders||{};
state.myWords=state.myWords||{};
(function migrateOldFolders(){
  const folders=state.customFolders||{};
  Object.keys(folders).forEach(function(id){
    const f=folders[id]||{};
    if(Array.isArray(f.words)){
      f.wordIds=Array.isArray(f.wordIds)?f.wordIds:[];
      f.words.forEach(function(w){
        const wid=w.id||('w_'+Date.now()+'_'+Math.random().toString(36).slice(2));
        if(!state.myWords[wid])state.myWords[wid]={id:wid,word:w.word||'',translation:w.translation||''};
        if(!f.wordIds.includes(wid))f.wordIds.push(wid);
      });
      delete f.words;
    }
    f.wordIds=Array.isArray(f.wordIds)?f.wordIds:[];
  });
})();

let selectedBlock=Number(state.selectedBlock||1);
let selectedFolder=state.selectedFolder||'irregular';
let session=null, autoSound=!!state.autoSound;

function save(){
  state.selectedBlock=selectedBlock;
  state.selectedFolder=selectedFolder;
  state.autoSound=autoSound;
  localStorage.setItem(KEY,JSON.stringify(state));
}
function normalize(x){return String(x||'').trim().toLowerCase().replace(/\s+/g,' ')}
function accepted(user,correct){const u=normalize(user);return String(correct).split('/').some(x=>normalize(x)===u)}
function shuffle(a){const x=[...a];for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]]}return x}
function blockVerbs(n=selectedBlock){const start=(n-1)*BLOCK_SIZE;return verbs.slice(start,start+BLOCK_SIZE)}
function blockCount(){return Math.ceil(verbs.length/BLOCK_SIZE)}
function st(v){state.v=state.v||{};return state.v[v.n]||(state.v[v.n]={level:0,streak:0,wrong:0,attempts:0,due:0,today:0,skill:{}})}
function mastered(v){const x=st(v);return x.level>=3&&x.streak>=3}
function percentFor(vs){if(!vs.length)return 0;return Math.round(vs.reduce((sum,v)=>sum+Math.min(1,st(v).level/3),0)/vs.length*100)}
function blockPercent(n=selectedBlock){return percentFor(blockVerbs(n))}
function due(v){return st(v).due&&st(v).due<=Date.now()}
function todayCount(){return Object.values(state.v||{}).reduce((a,x)=>a+(x.today||0),0)}

function selectBlock(n){
  selectedBlock=n;
  save();
  renderHome();
}
function renderBlocks(){
  const box=document.getElementById('blocks');
  box.innerHTML='';
  for(let n=1;n<=blockCount();n++){
    const vs=blockVerbs(n),p=blockPercent(n),sel=n===selectedBlock;
    const card=document.createElement('div');
    card.className='block-card'+(sel?' selected':'');
    const last=vs.at(-1).n;
    const masteredCount=vs.filter(mastered).length;
    const dueCount=vs.filter(due).length;
    const repeat=p>=100;
    card.innerHTML=`
      <div class="block-head">
        <div>
          <div class="block-title">Блок ${n}</div>
          <div class="block-meta">${vs[0].n}–${last} · ${vs.length} глаголов</div>
        </div>
        <span class="badge ${repeat?'good':''}">${p}%</span>
      </div>
      <div class="block-progress"><div class="progress"><div class="bar ${repeat?'good':''}" style="width:${p}%"></div></div></div>
      <div class="block-status">${masteredCount} из ${vs.length} закреплено${dueCount?` · к повторению сегодня: ${dueCount}`:''}</div>
      <div class="block-actions">
        <button class="primary" data-train="${n}">${repeat?'Повторить блок':'Начать тренировку'}</button>
        <button data-study="${n}">Показать слова</button>
      </div>`;
    card.onclick=function(){selectBlock(n)};
    card.querySelector('[data-train]').onclick=function(e){e.stopPropagation();selectedBlock=n;save();startMixed(repeat?'blockRepeat':'new',n)};
    card.querySelector('[data-study]').onclick=function(e){e.stopPropagation();selectedBlock=n;save();startStudy(n)};
    box.appendChild(card);
  }
}
function renderHome(){renderBlocks()}

function show(id){
  ['home','learn','quiz','result','dictionary','errors'].forEach(x=>document.getElementById(x).classList.toggle('hidden',x!==id));
  if(id==='home')renderHome();
  if(id==='learn')renderLearn();
  if(id==='dictionary')renderDictionary();
  if(id==='errors')renderErrors();
}
function startStudy(n=selectedBlock){selectedBlock=n;save();show('learn')}
function renderLearn(){
  const vs=blockVerbs();
  document.getElementById('learn-title').textContent=`Блок ${selectedBlock} · глаголы ${vs[0].n}–${vs.at(-1).n}`;
  document.getElementById('learn-note').textContent='Здесь английские слова открыты полностью, поэтому рядом можно показывать транскрипцию и прослушивание.';
  document.getElementById('learn-list').innerHTML=vs.map(v=>`
    <div class="learn-card">
      <div class="row">
        <div><b>${v.inf}</b><div class="ipa">/${v.ipa||''}/</div><div class="muted">${v.ru}</div></div>
        <button class="listen-button" data-speak="${v.n}">🔊 Прослушать</button>
      </div>
      <div class="actions"><button data-open="${v.n}">Показать формы</button></div>
      <div id="learn-${v.n}" class="hidden learn-forms">
        <div><b>V2:</b> ${v.past} <span class="ipa">/${v.pastIpa||''}/</span></div>
        <div><b>V3:</b> ${v.part} <span class="ipa">/${v.partIpa||''}/</span></div>
      </div>
    </div>`).join('');
  document.querySelectorAll('[data-speak]').forEach(b=>b.onclick=()=>speak(verbs.find(v=>v.n==b.dataset.speak).inf));
  document.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>{
    const el=document.getElementById('learn-'+b.dataset.open);
    el.classList.toggle('hidden');
    b.textContent=el.classList.contains('hidden')?'Показать формы':'Скрыть формы';
  });
}
function makeItem(v,mode){return {v,mode,letterForm:Math.random()<.5?'past':'part',hintLevel:0}}
function chooseModes(vs){
  let pool=[];
  for(const v of vs){
    const x=st(v);
    let modes=['write','letters','cloze','ruToEn','enToRu','listen'];
    if(x.wrongV2>x.wrongV3&&x.wrongV2>0)modes=['write','letters','cloze','write','ruToEn','listen'];
    if(x.wrongV3>x.wrongV2&&x.wrongV3>0)modes=['write','letters','cloze','cloze','enToRu','listen'];
    pool.push(makeItem(v,modes[Math.floor(Math.random()*modes.length)]));
  }
  return shuffle(pool);
}
function startMixed(kind='new',blockN=selectedBlock){
  let vs=blockVerbs(blockN),base;
  if(kind==='errors')base=vs.filter(v=>st(v).wrong>0);
  else if(kind==='review')base=vs.filter(due);
  else if(kind==='blockRepeat')base=vs;
  else base=vs.filter(v=>!mastered(v));
  if(!base.length)base=vs;
  let items=chooseModes(base);
  if(items.length<10){
    const extra=chooseModes(shuffle(vs).slice(0,Math.min(10-items.length,vs.length)));
    items=items.concat(extra);
  }
  session={items:shuffle(items).slice(0,Math.max(10,Math.min(18,items.length))),index:0,score:0,kind,block:blockN,answered:false};
  selectedBlock=blockN;save();show('quiz');renderQ();
}
function renderQ(){
  const q=session.items[session.index],v=q.v;
  session.answered=false;
  document.getElementById('q-meta').innerHTML=`<span class="badge">Блок ${session.block}</span><span class="badge">${session.index+1} / ${session.items.length}</span><span class="badge">${Math.round(st(v).level/3*100)}% у глагола</span>`;
  document.getElementById('q-bar').style.width=(session.index/session.items.length*100)+'%';
  document.getElementById('q-feedback').innerHTML='';
  document.getElementById('q-hint').textContent='';
  document.getElementById('q-word').textContent='';
  document.getElementById('q-ipa').textContent='';
  document.getElementById('q-ru').textContent='';
  document.getElementById('sound-btn').classList.add('hidden');
  let title='',body='';
  if(q.mode==='write'){
    title='Напиши V2 и V3';document.getElementById('q-word').textContent=v.inf;document.getElementById('q-ipa').textContent='/'+(v.ipa||'')+'/';document.getElementById('q-ru').textContent=v.ru;body=writeTask(v);
  }else if(q.mode==='letters'){
    title=`Собери ${q.letterForm==='past'?'V2':'V3'} из букв`;document.getElementById('q-word').textContent=v.inf;document.getElementById('q-ipa').textContent='/'+(v.ipa||'')+'/';document.getElementById('q-ru').textContent=v.ru;body=letterTask(v,q.letterForm);
  }else if(q.mode==='cloze'){
    title=`Заполни пропуски ${q.letterForm==='past'?'V2':'V3'}`;document.getElementById('q-word').textContent=v.inf;document.getElementById('q-ipa').textContent='/'+(v.ipa||'')+'/';document.getElementById('q-ru').textContent=v.ru;body=clozeTask(v,q.letterForm);
  }else if(q.mode==='ruToEn'){
    title='Перевод → английский';document.getElementById('q-ru').innerHTML=`<div class="translation-word">${v.ru}</div>`;body=translationRuToEn(v);
  }else if(q.mode==='enToRu'){
    title='Перевод → русский';document.getElementById('q-word').textContent=v.inf;document.getElementById('q-ipa').textContent='/'+(v.ipa||'')+'/';body=translationEnToRu(v);
  }else{
    title='Что ты услышала?';body=listenTask(v);
  }
  document.getElementById('q-mode').textContent=title;
  document.getElementById('q-body').innerHTML=body;
  bindLetters();bindOptions();bindInputs();
  if(q.mode==='listen' && autoSound)setTimeout(()=>speak(v.inf),250);
}
function formsHtml(v,target,cloze=false){
  const arr=[['Infinitive',v.inf],['V2',v.past],['V3',v.part]];
  return `<div class="forms-row">${arr.map(([lab,val])=>`
    <div class="form-card ${lab===target?'hidden-form':''}">
      <small>${lab}</small>
      <b>${lab===target?(cloze?clozePattern(val):'_'.repeat(Math.max(4,val.length))):val}</b>
      ${lab==='Infinitive'?'<div class="ipa">/'+(v.ipa||'')+'/</div>':''}
    </div>`).join('')}</div>`;
}
function writeTask(v){return `<div class="input-grid"><label>V2<input id="ans-v2" autocomplete="off" spellcheck="false"></label><label>V3<input id="ans-v3" autocomplete="off" spellcheck="false"></label></div>`}
function letterTask(v,form){
  const target=form==='past'?v.past:v.part;
  const chars=target.split('/')[0].replace(/[^a-z]/gi,'').toLowerCase().split('');
  const pool=shuffle(chars.map((c,i)=>({c,i})));
  return formsHtml(v,form==='past'?'V2':'V3')+
    `<div class="built" id="built"></div><div class="letters">${pool.map((x,i)=>`<button class="letter" data-char="${x.c}" data-i="${i}">${x.c.toUpperCase()}</button>`).join('')}</div><input type="hidden" id="letter-answer">`;
}
function clozePattern(word){
  const w=word.split('/')[0].trim();
  if(w.length<=3)return w[0]+'_'.repeat(Math.max(0,w.length-1));
  const hide=Math.max(1,Math.ceil(w.length/3));
  const idx=shuffle([...Array(w.length).keys()]).slice(0,hide);
  const set=new Set(idx);
  return [...w].map((c,i)=>set.has(i)?'_':c).join('');
}
function clozeTask(v,form){
  const target=form==='past'?v.past:v.part;
  return formsHtml(v,form==='past'?'V2':'V3',true)+
    `<div class="single-answer"><label>Введи полное слово<input id="ans-cloze" autocomplete="off"></label></div>`;
}
function optionSet(correct,others){return shuffle([correct,...others]).map(x=>`<button class="option" data-option="${htmlEscape(x)}">${x}</button>`).join('')}
function htmlEscape(s){return String(s).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;')}
function translationRuToEn(v){
  const others=shuffle(verbs.filter(x=>x.n!==v.n)).slice(0,3).map(x=>`${x.inf} — ${x.past} — ${x.part}`);
  return `<div class="option-list">${optionSet(`${v.inf} — ${v.past} — ${v.part}`,others)}</div>`;
}
function translationEnToRu(v){
  const others=shuffle(verbs.filter(x=>x.n!==v.n)).slice(0,3).map(x=>x.ru);
  return `<div class="option-list">${optionSet(v.ru,others)}</div>`;
}
function listenTask(v){
  const others=shuffle(verbs.filter(x=>x.n!==v.n)).slice(0,3).map(x=>x.inf);
  return `<div class="listen-box"><div class="listen-icon">🔊</div><button class="primary" id="listen-play">Прослушать</button><div class="option-list">${optionSet(v.inf,others)}</div></div>`;
}
function currentAnswers(){
  const q=session.items[session.index];
  if(q.mode==='write')return {v2:document.getElementById('ans-v2').value,v3:document.getElementById('ans-v3').value};
  if(q.mode==='letters')return {letters:document.getElementById('letter-answer')?.value||''};
  if(q.mode==='cloze')return {cloze:document.getElementById('ans-cloze')?.value||''};
  return {option:document.getElementById('selected-option')?.value||''};
}
function bindLetters(){
  document.querySelectorAll('.letter').forEach(btn=>btn.onclick=()=>{
    if(session.answered||btn.disabled)return;
    const inp=document.getElementById('letter-answer'),built=document.getElementById('built');
    inp.value+=btn.dataset.char;btn.disabled=true;
    built.innerHTML+=`<span>${btn.dataset.char.toUpperCase()}</span>`;
    const target=session.items[session.index].letterForm==='past'?session.items[session.index].v.past:session.items[session.index].v.part;
    if(inp.value.length===target.split('/')[0].replace(/[^a-z]/gi,'').length)checkCurrent();
  });
  const play=document.getElementById('listen-play');
  if(play)play.onclick=()=>speak(session.items[session.index].v.inf);
}
function bindOptions(){
  document.querySelectorAll('.option').forEach(btn=>btn.onclick=()=>{
    if(session.answered)return;
    document.querySelectorAll('.option').forEach(x=>x.classList.remove('selected'));
    btn.classList.add('selected');
    let hidden=document.getElementById('selected-option');
    if(!hidden){hidden=document.createElement('input');hidden.type='hidden';hidden.id='selected-option';document.getElementById('q-body').appendChild(hidden)}
    hidden.value=btn.dataset.option;checkCurrent();
  });
}
function bindInputs(){
  const q=session.items[session.index];
  if(q.mode!=="write"&&q.mode!=="cloze")return;
  const ids=q.mode==="write"?["ans-v2","ans-v3"]:["ans-cloze"];
  ids.forEach(function(id){
    const el=document.getElementById(id);if(!el)return;
    el.oninput=function(){
      const v=q.v;
      if(q.mode==="write"){
        const a2=accepted(document.getElementById("ans-v2").value,v.past);
        const a3=accepted(document.getElementById("ans-v3").value,v.part);
        document.getElementById("ans-v2").classList.toggle("correct",a2);
        document.getElementById("ans-v3").classList.toggle("correct",a3);
        if(a2&&a3)checkCurrent();
      }else if(accepted(el.value,q.letterForm==="past"?v.past:v.part)){
        el.classList.add("correct");checkCurrent();
      }
    };
  });
}
function markAttempt(v,ok,mode){
  const x=st(v);x.attempts=(x.attempts||0)+1;x.today=(x.today||0)+1;x.last=Date.now();
  const intervals=[10*60*1000,24*60*60*1000,3*24*60*60*1000,7*24*60*60*1000];
  if(ok){
    x.streak=(x.streak||0)+1;x.level=Math.min(3,x.level+1);x.due=Date.now()+intervals[Math.min(x.level-1,intervals.length-1)];
  }else{
    x.streak=0;x.level=0;x.due=Date.now()+10*60*1000;x.wrong=(x.wrong||0)+1;
    if(mode==='write'){x.wrongV2=(x.wrongV2||0)+1;x.wrongV3=(x.wrongV3||0)+1}
    if(mode==='letters'){if(session.items[session.index].letterForm==='past')x.wrongV2=(x.wrongV2||0)+1;else x.wrongV3=(x.wrongV3||0)+1}
    if(mode==='cloze')x.spelling=(x.spelling||0)+1;
  }
  save();
}
function checkCurrent(force=false){
  if(session.answered)return;
  const q=session.items[session.index],v=q.v,a=currentAnswers();
  let ok=false,detail='';
  if(force){
    ok=false;
    detail='Ответ: '+(q.mode==='write'?v.past+' — '+v.part:q.mode==='letters'?(q.letterForm==='past'?v.past:v.part):q.mode==='cloze'?(q.letterForm==='past'?v.past:v.part):q.mode==='ruToEn'?v.inf+' — '+v.past+' — '+v.part:q.mode==='enToRu'?v.ru:v.inf);
  }else if(q.mode==='write'){
    const a2=accepted(a.v2,v.past),a3=accepted(a.v3,v.part);
    document.getElementById('ans-v2').classList.toggle('correct',a2);
    document.getElementById('ans-v3').classList.toggle('correct',a3);
    if(!(a2&&a3))return;ok=true;detail='V2 и V3 правильно';
  }else if(q.mode==='letters'){
    ok=accepted(a.letters,q.letterForm==='past'?v.past:v.part);detail=ok?'✓ Правильно':'Правильно: '+(q.letterForm==='past'?v.past:v.part);
  }else if(q.mode==='cloze'){
    ok=accepted(a.cloze,q.letterForm==='past'?v.past:v.part);detail=ok?'✓ Правильно':'Правильно: '+(q.letterForm==='past'?v.past:v.part);
  }else if(q.mode==='ruToEn'){
    ok=a.option===`${v.inf} — ${v.past} — ${v.part}`;detail=ok?'✓ Правильно':'Правильно: '+v.inf+' — '+v.past+' — '+v.part;
  }else if(q.mode==='enToRu'){
    ok=normalize(a.option)===normalize(v.ru);detail=ok?'✓ Правильно':'Правильно: '+v.ru;
  }else{
    ok=normalize(a.option)===normalize(v.inf);detail=ok?'✓ Правильно':'Правильно: '+v.inf;
  }
  markAttempt(v,ok,q.mode);
  if(!ok&&!force&&q.mode!=='write'){
    const pos=Math.min(session.items.length,session.index+3);
    session.items.splice(pos,0,makeItem(v,q.mode));
  }
  session.answered=true;if(ok)session.score++;
  document.querySelectorAll('.option').forEach(btn=>{
    const val=btn.dataset.option;
    if((q.mode==='ruToEn'&&val===`${v.inf} — ${v.past} — ${v.part}`)||(q.mode==='enToRu'&&normalize(val)===normalize(v.ru))||(q.mode==='listen'&&normalize(val)===normalize(v.inf)))btn.classList.add('correct');
    else if(btn.classList.contains('selected')&&!ok)btn.classList.add('wrong');
  });
  document.getElementById('q-feedback').innerHTML=`<span class="${ok?'good-t':'bad-t'}">${ok?'Правильно':'Нужно повторить'}.</span> ${detail}`;
  setTimeout(nextQ,ok||force?430:1400);
  renderHome();
}
function dontKnow(){if(session.answered)return;checkCurrent(true)}
function nextQ(){if(!session||!session.answered)return;session.index++;if(session.index>=session.items.length)finishSession();else renderQ()}
function giveHint(){
  const q=session.items[session.index],v=q.v;q.hintLevel=(q.hintLevel||0)+1;
  let text='';
  const partial=(w,n)=>{w=w.split('/')[0];return n>=w.length?w:w.slice(0,n)+'_'.repeat(w.length-n)};
  if(q.mode==='write')text=`V2: ${partial(v.past,Math.min(q.hintLevel,3))} · V3: ${partial(v.part,Math.min(q.hintLevel,3))}`;
  else if(q.mode==='letters')text=`Начало формы: ${partial(q.letterForm==='past'?v.past:v.part,Math.min(q.hintLevel,3))}`;
  else if(q.mode==='cloze')text=`Форма: ${partial(q.letterForm==='past'?v.past:v.part,Math.min(q.hintLevel+1,4))}`;
  else if(q.mode==='ruToEn')text=`Начальная буква: ${v.inf[0].toUpperCase()}`;
  else if(q.mode==='enToRu')text=`Первая буква перевода: ${v.ru[0]}`;
  else text='Послушай ещё раз и сравни первые звуки.';
  document.getElementById('q-hint').textContent=text;
}
function speak(text){
  if(!('speechSynthesis' in window))return;
  window.speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);u.lang='en-US';u.rate=.82;window.speechSynthesis.speak(u);
}
function finishSession(){
  const total=session.items.length,score=session.score,p=blockPercent(session.block);
  document.getElementById('result-title').textContent='Тренировка закончена';
  document.getElementById('result-text').textContent=`Правильных ответов: ${score} из ${total}. Блок ${session.block} сейчас освоен на ${p}%.`;
  document.getElementById('result-grid').innerHTML=`<div class="result-box">Заданий<b>${total}</b></div><div class="result-box">Правильно<b>${score}</b></div><div class="result-box">Ошибок<b>${total-score}</b></div><div class="result-box">Блок<b>${p}%</b></div>`;
  show('result');
}

/* Dictionary */
function folderEntries(){
  const folders=[
    {id:'irregular',name:'Неправильные глаголы',count:verbs.length,built:true},
    {id:'myWords',name:'Мои слова',count:Object.keys(state.myWords||{}).length,built:true}
  ];
  Object.entries(state.customFolders||{}).forEach(([id,f])=>folders.push({id,name:f.name,count:(f.wordIds||[]).length,built:false}));
  return folders;
}
function wordsInFolder(id){
  if(id==='irregular')return verbs;
  if(id==='myWords')return Object.values(state.myWords||{});
  const ids=state.customFolders[id]?.wordIds||[];
  return ids.map(wid=>state.myWords[wid]).filter(Boolean);
}
function renderDictionary(){
  const folders=folderEntries();
  if(!folders.some(f=>f.id===selectedFolder))selectedFolder='irregular';
  const selected=folders.find(f=>f.id===selectedFolder)||folders[0];
  document.getElementById('folders').innerHTML=folders.map(f=>`
    <div class="folder-card ${selectedFolder===f.id?'selected-folder':''}" data-folder-card="${f.id}">
      <h3>📁 ${htmlEscape(f.name)}</h3>
      <div class="muted">${f.count} слов</div>
      ${f.built?'':'<button class="danger folder-delete" data-delete-folder="'+f.id+'">Удалить папку</button>'}
    </div>`).join('');
  document.querySelectorAll('[data-folder-card]').forEach(card=>card.onclick=()=>{
    selectedFolder=card.dataset.folderCard;save();renderDictionary();
  });
  document.querySelectorAll('[data-delete-folder]').forEach(b=>b.onclick=e=>{
    e.stopPropagation();
    const id=b.dataset.deleteFolder;
    if(confirm('Удалить папку? Слова из «Моих слов» не удалятся.')){
      delete state.customFolders[id];
      if(selectedFolder===id)selectedFolder='myWords';
      save();renderDictionary();
    }
  });

  document.getElementById('dict-title').textContent=selected.name;
  document.getElementById('dict-tools').innerHTML=`
    <button class="primary" id="train-folder">Тренировать папку</button>
    <button id="mix-folder">+ Подмешать случайные</button>
    ${selected.id!=='irregular'?'<button id="add-to-current">+ Добавить слово</button>':''}`;
  document.getElementById('train-folder').onclick=()=>startFolderTraining(false);
  document.getElementById('mix-folder').onclick=()=>startFolderTraining(true);
  if(document.getElementById('add-to-current'))document.getElementById('add-to-current').onclick=addWord;

  const words=wordsInFolder(selected.id);
  if(selected.id==='irregular'){
    document.getElementById('dict-list').innerHTML=words.map(v=>`
      <div class="word-item">
        <div><b>${v.inf}</b><div class="ipa">/${v.ipa||''}/</div></div>
        <div>${v.ru}</div>
        <button class="listen-button" data-dict-speak="${htmlEscape(v.inf)}">🔊 Прослушать</button>
      </div>`).join('');
  }else{
    document.getElementById('dict-list').innerHTML=words.length?words.map(w=>`
      <div class="word-item">
        <div><b>${htmlEscape(w.word)}</b></div>
        <div>${htmlEscape(w.translation)}</div>
        <div class="word-actions">
          <button data-word-folders="${w.id}">Папки</button>
          <button class="danger" data-remove-word="${w.id}">${selected.id==='myWords'?'Удалить':'Убрать'}</button>
        </div>
      </div>`).join(''):'<div class="section-note">В этой папке пока нет слов.</div>';
  }
  document.querySelectorAll('[data-dict-speak]').forEach(b=>b.onclick=()=>speak(b.dataset.dictSpeak));
  document.querySelectorAll('[data-word-folders]').forEach(b=>b.onclick=e=>{e.stopPropagation();chooseFoldersForWord(b.dataset.wordFolders)});
  document.querySelectorAll('[data-remove-word]').forEach(b=>b.onclick=e=>{
    e.stopPropagation();
    if(selected.id==='myWords')deleteWord(b.dataset.removeWord);
    else removeWordFromFolder(selected.id,b.dataset.removeWord);
  });
}
function addFolder(){
  const name=prompt('Название папки');
  if(!name||!name.trim())return;
  const id='f_'+Date.now();
  state.customFolders[id]={name:name.trim(),wordIds:[]};
  selectedFolder=id;save();renderDictionary();
}
function addWord(){
  const word=prompt('Слово');
  if(!word||!word.trim())return;
  const translation=prompt('Перевод');
  if(!translation||!translation.trim())return;
  const id='w_'+Date.now()+'_'+Math.random().toString(36).slice(2);
  state.myWords[id]={id,word:word.trim(),translation:translation.trim()};
  const folderNames=Object.values(state.customFolders||{}).map(f=>f.name);
  let defaultName='';
  if(selectedFolder!=='irregular'&&selectedFolder!=='myWords')defaultName=state.customFolders[selectedFolder]?.name||'';
  const answer=prompt(`В какие папки добавить?\nДоступные: ${folderNames.join(', ')||'пока нет'}\nМожно указать несколько названий через запятую.${defaultName?`\nТекущая папка: ${defaultName}`:''}`,defaultName);
  assignWordToFolders(id,answer||defaultName);
  selectedFolder='myWords';save();renderDictionary();
}
function assignWordToFolders(wordId,names){
  if(!names)return;
  const wanted=String(names).split(',').map(x=>normalize(x)).filter(Boolean);
  Object.entries(state.customFolders||{}).forEach(([id,f])=>{
    if(wanted.includes(normalize(f.name))&&!f.wordIds.includes(wordId))f.wordIds.push(wordId);
  });
}
function chooseFoldersForWord(wordId){
  const current=[];
  Object.values(state.customFolders||{}).forEach(f=>{if(f.wordIds.includes(wordId))current.push(f.name)});
  const available=Object.values(state.customFolders||{}).map(f=>f.name);
  const answer=prompt(`Папки для слова через запятую.\nДоступные: ${available.join(', ')||'пока нет'}\nСейчас: ${current.join(', ')||'нет'}`,current.join(', '));
  if(answer===null)return;
  Object.values(state.customFolders||{}).forEach(f=>f.wordIds=f.wordIds.filter(id=>id!==wordId));
  assignWordToFolders(wordId,answer);
  save();renderDictionary();
}
function removeWordFromFolder(folderId,wordId){
  const f=state.customFolders[folderId];if(!f)return;
  f.wordIds=f.wordIds.filter(id=>id!==wordId);save();renderDictionary();
}
function deleteWord(wordId){
  if(!confirm('Удалить слово из «Моих слов» и всех папок?'))return;
  delete state.myWords[wordId];
  Object.values(state.customFolders||{}).forEach(f=>f.wordIds=f.wordIds.filter(id=>id!==wordId));
  save();renderDictionary();
}
function startFolderTraining(mix){
  const base=wordsInFolder(selectedFolder);
  if(!base.length){alert('В этой папке пока нет слов.');return;}
  let words=shuffle(base).slice(0,15);
  if(mix){
    const all=verbs.filter(v=>!words.some(w=>w.n===v.n));
    words=words.concat(shuffle(all).slice(0,Math.min(5,all.length)));
  }
  session={items:shuffle(words.map(w=>({v:w,mode:selectedFolder==='irregular'?(Math.random()<.5?'enToRu':'ruToEn'):'custom'}))),index:0,score:0,kind:'folder',block:selectedBlock,answered:false,folder:true};
  show('quiz');renderQFolder();
}
function renderQFolder(){
  const q=session.items[session.index],v=q.v;session.answered=false;
  document.getElementById('q-meta').innerHTML=`<span class="badge">Словарь</span><span class="badge">${session.index+1} / ${session.items.length}</span>`;
  document.getElementById('q-bar').style.width=(session.index/session.items.length*100)+'%';
  document.getElementById('q-feedback').innerHTML='';document.getElementById('q-hint').textContent='';
  document.getElementById('q-word').textContent='';document.getElementById('q-ipa').textContent='';document.getElementById('q-ru').textContent='';document.getElementById('sound-btn').classList.add('hidden');
  if(q.mode==='custom'){
    document.getElementById('q-mode').textContent='Перевод → слово';
    document.getElementById('q-ru').textContent=v.translation;
    const pool=wordsInFolder(selectedFolder).filter(x=>x.id!==v.id);
    const opts=shuffle([v.word,...shuffle(pool).slice(0,3).map(x=>x.word)]);
    document.getElementById('q-body').innerHTML=`<div class="option-list">${opts.map(x=>`<button class="option" data-option="${htmlEscape(x)}">${htmlEscape(x)}</button>`).join('')}</div>`;
  }else if(q.mode==='enToRu'){
    document.getElementById('q-mode').textContent='Перевод → русский';
    document.getElementById('q-word').textContent=v.inf;document.getElementById('q-ipa').textContent='/'+(v.ipa||'')+'/';
    document.getElementById('q-body').innerHTML=translationEnToRu(v);
  }else{
    document.getElementById('q-mode').textContent='Перевод → английский';
    document.getElementById('q-ru').textContent=v.ru;
    document.getElementById('q-body').innerHTML=translationRuToEn(v);
  }
  bindFolderOptions();
}
function bindFolderOptions(){
  document.querySelectorAll('.option').forEach(btn=>btn.onclick=()=>{
    if(session.answered)return;
    document.querySelectorAll('.option').forEach(x=>x.classList.remove('selected'));
    btn.classList.add('selected');
    const q=session.items[session.index],v=q.v;
    const correct=q.mode==='custom'?normalize(btn.dataset.option)===normalize(v.word):
      q.mode==='enToRu'?normalize(btn.dataset.option)===normalize(v.ru):
      btn.dataset.option===`${v.inf} — ${v.past} — ${v.part}`;
    document.querySelectorAll('.option').forEach(x=>{
      if((q.mode==='custom'&&normalize(x.dataset.option)===normalize(v.word))||
         (q.mode==='enToRu'&&normalize(x.dataset.option)===normalize(v.ru))||
         (q.mode==='ruToEn'&&x.dataset.option===`${v.inf} — ${v.past} — ${v.part}`))x.classList.add('correct');
    });
    if(!correct)btn.classList.add('wrong');
    session.answered=true;if(correct)session.score++;
    document.getElementById('q-feedback').innerHTML=`<span class="${correct?'good-t':'bad-t'}">${correct?'Правильно':'Нужно повторить'}.</span>`;
    setTimeout(nextQ,correct?430:1100);
  });
}
function renderErrors(){
  const es=verbs.filter(v=>st(v).wrong>0).sort((a,b)=>st(b).wrong-st(a).wrong);
  document.getElementById('error-list').innerHTML=es.length?es.map(v=>`
    <div class="word-item">
      <div><b>${v.inf}</b><div class="ipa">/${v.ipa||''}/</div></div>
      <div>${v.ru} · ошибок: ${st(v).wrong}</div>
      <button data-error-train="${v.n}">Тренировать</button>
    </div>`).join(''):'<div class="section-note">Ошибок пока нет.</div>';
  document.querySelectorAll('[data-error-train]').forEach(b=>b.onclick=()=>{
    const v=verbs.find(x=>x.n==b.dataset.errorTrain);
    session={items:[makeItem(v,'write'),makeItem(v,'letters'),makeItem(v,'cloze')],index:0,score:0,kind:'errors',block:Math.ceil(v.n/BLOCK_SIZE),answered:false};
    selectedBlock=Math.ceil(v.n/BLOCK_SIZE);save();show('quiz');renderQ();
  });
}
function resetProgress(){if(confirm('Сбросить весь прогресс?')){state={selectedBlock:1,v:{},customFolders:{},myWords:{}};save();renderHome()}}

/* navigation */
function nav(id){return document.getElementById(id)}
nav('nav-home').onclick=()=>show('home');
nav('nav-train').onclick=()=>startMixed('new');
nav('nav-dictionary').onclick=()=>show('dictionary');
nav('nav-errors').onclick=()=>show('errors');
nav('learn-start').onclick=()=>startMixed('new');
nav('learn-home').onclick=()=>show('home');
nav('result-again').onclick=()=>startMixed('new');
nav('result-home').onclick=()=>show('home');
nav('add-folder').onclick=addFolder;
nav('add-word').onclick=addWord;
nav('dontknow').onclick=dontKnow;
nav('hint-btn').onclick=giveHint;
nav('sound-btn').onclick=()=>{if(session&&session.items[session.index])speak(session.items[session.index].v.inf)};
renderHome();
