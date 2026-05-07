const fs = require('fs');
fs.readFile('detail.json','utf-8',(err,data)=>{
    if(err){
        console.log('Unable to open file:',err)
        return
    }
    let detail = JSON.parse(data);
    //[ 'tamil', 'section', 'repo' ] tamil has thirukkural and sections has the other main content.
    console.log(Object.keys(detail[0]));
    //this has [ 'tamil', 'detail' ] ,tamil has pal! there are three major ones.
    //0->arathupal
    //1->porutpal
    //2->kamathupal
    console.log(Object.keys(detail[0]['section'])); 
    console.log(Object.keys(detail[0]['section']['detail']));
    //[ 'name', 'transliteration', 'translation', 'number', 'chapterGroup' ]
    //transliteration is english to tanglish
    //translation is tamil to english
    console.log(Object.keys(detail[0]['section']['detail'][0]));
    console.log(Object.keys(detail[0]['section']['detail'][0]['chapterGroup'])); //[ 'tamil', 'detail' ]
    console.log(Object.keys(detail[0]['section']['detail'][0]['chapterGroup']['detail']));
    console.log(Object.keys(detail[0]['section']['detail'][0]['chapterGroup']['detail'][0])); //[ 'name', 'transliteration', 'translation', 'number', 'chapters' ]
    console.log(Object.keys(detail[0]['section']['detail'][0]['chapterGroup']['detail'][0]['chapters']));//[ 'tamil', 'detail' ]
    console.log(Object.keys(detail[0]['section']['detail'][0]['chapterGroup']['detail'][0]['chapters']['detail'][0]));
    //[ 'name', 'translation', 'transliteration', 'number', 'start', 'end' ] start and end says the kural!
    //name says the athigrama,we know about translation and transliteration.
});
