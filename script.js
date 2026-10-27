const COLS = [
 ["Fajr","after prayer",1],["Commute","7:00 – 8:00",1],
 ["1","8:00 – 8:30"],["2","8:30 – 9:00"],["3","9:00 – 9:30"],["4","9:30 – 10:00"],
 ["5/Break","10:00 – 10:30",1],["6","10:30 – 11:00"],["7/Break","11:00 – 11:30",1],["8","11:30 – 12:00"],
 ["9","12:00 – 12:30"],["10","12:30 – 1:00"],["11","1:00 – 1:30"],["12","1:30 – 2:00"],
 ["13","2:00 – 2:30"],["14/Prayer","2:30 – 2:50",1],
 ["Way home","3:00 – 5:00",1],["Home","5:00 – 7:00",1],["Evening","7:00 – 10:00",1]
];
// [startCol, endCol, cat, label, sub, arabicLabel?]
const DAYS = [
 {key:"sat",js:6,name:"Sat",items:[
  [0,0,"hifz","حفظ صفحة","باقي ورد الأربعاء"],
  [1,3,"rest","Rest & breakfast","take it slow"],
  [1,3,"tath","تثبيت الحفظ","بعد الفطار ١٥ د"],
  [4,6,"rev","النمل، القصص، العنكبوت","p. 377–403",1],
  [7,11,"clean","Clean the house","with a lecture or podcast"],
  [12,13,"rev","الروم، لقمان، السجدة","p. 404–417",1],
  [14,15,"rest","Lunch",""],
  [14,15,"tath","تثبيت السورة الأخيرة","بعد الغدا ١٠ د"],
  [16,16,"clean","Light cleaning","3:00 – 4:00"],
  [16,16,"tath","تثبيت الحفظ","4:00 – 4:45"],
  [17,17,"rest","Free time","outing or family"],
  [17,17,"tath","تثبيت السورة الأخيرة","١٠ د"],
  [18,18,"listen","Rest & video","pack bag for tomorrow"]
 ]},
 {key:"sun",js:0,name:"Sun",items:[
  [0,0,"rest","Adhkar & get ready",""],
  [1,1,"tath","تثبيت الحفظ","سماع وترديد"],
  [2,3,"work","2A",""],
  [4,5,"rev","الأحزاب وسبأ","p. 418–433",1],
  [6,6,"rest","Breakfast",""],
  [6,6,"tath","تثبيت السورة الأخيرة","١٠ د"],
  [7,7,"rev","فاطر","p. 434–439",1],
  [8,8,"work","1E",""],
  [9,9,"rev","يس","p. 440–445",1],
  [10,11,"work","2B",""],
  [12,12,"rev","الصافات","p. 446–452",1],
  [13,13,"rest","Rest & tea",""],
  [13,13,"tath","تثبيت السورة الأخيرة","١٠ د"],
  [14,14,"tath","تثبيت الحفظ","من غير مصحف"],
  [15,15,"rest","Prayer",""],
  [16,16,"listen","Video or podcast",""],
  [17,17,"rest","Lunch & rest",""],
  [18,18,"rest","Free time","sleep early"]
 ]},
 {key:"mon",js:1,name:"Mon",items:[
  [0,0,"rest","Adhkar & get ready",""],
  [1,1,"tath","تثبيت الحفظ","ورد المقرأة"],
  [2,2,"work","2D",""],
  [3,3,"tath","تثبيت الحفظ","تسميع لنفسك"],
  [4,5,"work","2B",""],
  [6,6,"rest","Breakfast",""],
  [6,6,"tath","تثبيت السورة الأخيرة","١٠ د"],
  [7,8,"rev","ص والزمر","p. 453–466",1],
  [9,9,"rest","Rest",""],
  [9,9,"tath","تثبيت السورة الأخيرة","١٠ د"],
  [10,11,"rev","غافر","p. 467–476",1],
  [12,13,"work","2A",""],
  [14,14,"tath","تثبيت الحفظ","قبل المقرأة"],
  [15,15,"rest","Prayer",""],
  [16,17,"maq","المقرأة ٣ – ٦","وبعدها الطريق من غير مهام"],
  [18,18,"rest","Lunch & full rest","sleep early"]
 ]},
 {key:"tue",js:2,name:"Tue",items:[
  [0,0,"hifz","حفظ ورد الإثنين","١.٥ صفحة"],
  [1,1,"tath","تثبيت الحفظ","حفظ الصبح"],
  [2,3,"rev","فصلت والشورى","p. 477–488",1],
  [4,5,"work","2B",""],
  [6,6,"rest","Breakfast",""],
  [6,6,"tath","تثبيت السورة الأخيرة","١٠ د"],
  [7,8,"work","2F",""],
  [9,9,"rev","الزخرف","p. 489–495",1],
  [10,11,"work","2A",""],
  [12,12,"rev","الدخان والجاثية","p. 496–501",1],
  [13,13,"rev","الأحقاف","p. 502–506",1],
  [14,14,"work","2D",""],
  [15,15,"rest","Prayer",""],
  [16,16,"tath","تثبيت الحفظ","سماع في الطريق"],
  [16,16,"listen","Video or podcast","long day"],
  [17,17,"rest","Lunch & rest",""],
  [17,17,"tath","تثبيت السورة الأخيرة","بعد الغدا ١٠ د"],
  [18,18,"rest","Free time","sleep early"]
 ]},
 {key:"wed",js:3,name:"Wed",items:[
  [0,0,"rest","Adhkar & get ready",""],
  [0,0,"tath","تثبيت السورة الأخيرة","وانتي بتجهزي"],
  [1,1,"tath","تثبيت الحفظ","ورد المقرأة"],
  [2,2,"tath","تثبيت الحفظ","تسميع لنفسك"],
  [3,3,"rev","محمد","p. 507–510",1],
  [4,5,"work","2B",""],
  [6,6,"work","B",""],
  [7,7,"rest","Breakfast",""],
  [7,7,"tath","تثبيت السورة الأخيرة","١٠ د"],
  [8,9,"rev","الفتح، الحجرات، ق","p. 511–519",1],
  [10,10,"work","2E",""],
  [11,12,"work","2A",""],
  [13,14,"rev","الذاريات، الطور، النجم","p. 520–527",1],
  [15,15,"rest","Prayer",""],
  [15,15,"tath","تثبيت الحفظ","قبل المقرأة"],
  [16,17,"maq","المقرأة ٣ – ٦","وبعدها الطريق من غير مهام"],
  [18,18,"rest","Lunch & full rest","sleep early"]
 ]},
 {key:"thu",js:4,name:"Thu",items:[
  [0,0,"rest","Adhkar & get ready",""],
  [0,0,"tath","تثبيت السورة الأخيرة","وانتي بتجهزي"],
  [1,1,"listen","سماع الورد الجديد","تمهيد للحفظ",1],
  [2,3,"work","2A",""],
  [4,5,"rev","القمر، الرحمن، الواقعة","p. 528–536",1],
  [6,6,"work","B",""],
  [7,7,"rest","Breakfast",""],
  [7,7,"tath","تثبيت الحفظ","١٠ د"],
  [8,8,"rev","الحديد والمجادلة","p. 537–544",1],
  [9,10,"work","2B",""],
  [11,11,"rev","الحشر ← الجمعة","p. 545–553",1],
  [12,13,"work","2F",""],
  [14,14,"rev","المنافقون ← التحريم","p. 554–561",1],
  [15,15,"rest","Prayer",""],
  [16,16,"tath","تثبيت السورة الأخيرة","أول الطريق"],
  [16,16,"listen","A video you enjoy","end-of-week treat"],
  [17,17,"rest","Lunch & rest",""],
  [17,17,"tath","تثبيت الحفظ","بعد الغدا ١٠ د"],
  [18,18,"rest","Family evening",""]
 ]},
 {key:"fri",js:5,name:"Fri",items:[
  [0,0,"hifz","حفظ ١.٥ صفحة","من ورد الأربعاء"],
  [1,4,"rest","Sleep, rest & breakfast",""],
  [1,4,"tath","تثبيت الحفظ","بعد الفطار ١٥ د"],
  [5,5,"rev","سورة الكهف","",1],
  [6,8,"rev","جزء تبارك","p. 562–581",1],
  [9,12,"rest","Get ready & Jumu'ah",""],
  [9,12,"tath","تثبيت السورة الأخيرة","قبل الخطبة"],
  [13,15,"rest","Family lunch",""],
  [16,16,"rest","Nap","3:00 – 4:00"],
  [16,16,"rev","جزء عمّ","4:00 – 5:00",1],
  [17,17,"tath","تثبيت الحفظ","حفظ الصبح"],
  [17,17,"tath","تثبيت السورة الأخيرة","١٠ د"],
  [17,17,"rest","Dua — hour before Maghrib",""],
  [18,18,"listen","Free time","sleep early"]
 ]}
];

const STORE="samar-week-done-v2";
let done={};
try{ done=JSON.parse(localStorage.getItem(STORE))||{}; }catch(e){ done={}; }
function save(){ try{ localStorage.setItem(STORE,JSON.stringify(done)); }catch(e){} }

const tt=document.getElementById("tt");
const today=new Date().getDay();
let total=0;

function render(){
  total=0;
  let h='<thead><tr><th class="day">Day</th>'+COLS.map(c=>`<th class="${c[2]?'alt':''}"><b>${c[0]}</b>${c[1]}</th>`).join("")+'</tr></thead><tbody>';
  DAYS.forEach(d=>{
    h+=`<tr class="${d.js===today?'today':''}"><th class="day">${d.name}</th>`;
    let col=0;
    const groups=[];
    d.items.forEach((it,i)=>{
      const g=groups.find(g=>g.s===it[0]&&g.e===it[1]);
      if(g) g.list.push([it,i]); else groups.push({s:it[0],e:it[1],list:[[it,i]]});
    });
    groups.sort((a,b)=>a.s-b.s);
    groups.forEach(g=>{
      while(col<g.s){ h+='<td></td>'; col++; }
      h+=`<td colspan="${g.e-g.s+1}"><div class="cell">`+g.list.map(([it,i])=>{
        const id=d.key+"-"+i, isDone=!!done[id]; total++;
        const isAr = it[5] || ["hifz","tath","rev","maq"].includes(it[2]);
        const sub = isAr ? it[4].replace(/^p\. /,"ص ").replace(/([\d٠-٩][\d٠-٩:.]*\s*[–-]\s*[\d٠-٩][\d٠-٩:.]*)/g,'<span dir="ltr">$1</span>') : it[4];
        const lbl = isAr ? `<span class="lbl ar" dir="rtl">${it[3]}</span>` : `<span class="lbl">${it[3]}</span>`;
        return `<button type="button" class="chip c-${it[2]}${isDone?' done':''}" data-id="${id}" aria-pressed="${isDone}">${lbl}${sub?`<small${isAr?' dir="rtl"':''}>${sub}</small>`:''}</button>`;
      }).join("")+'</div></td>';
      col=g.e+1;
    });
    while(col<COLS.length){ h+='<td></td>'; col++; }
    h+='</tr>';
  });
  tt.innerHTML=h+'</tbody>';
  tt.querySelectorAll(".chip").forEach(b=>b.addEventListener("click",()=>{
    const id=b.dataset.id;
    if(done[id]) delete done[id]; else done[id]=true;
    b.classList.toggle("done",!!done[id]); b.setAttribute("aria-pressed",!!done[id]);
    save(); prog();
  }));
  prog();
}
function prog(){
  const n=Object.keys(done).length;
  document.getElementById("progress").textContent=`Done: ${n} of ${total} blocks this week`;
}
document.getElementById("reset").addEventListener("click",()=>{ done={}; save(); render(); });
render();

// ---- zoom ----
const board=document.getElementById("board");
const pct=document.getElementById("pct");
let z=1, natural=0;
function measure(){ tt.style.zoom=1; natural=tt.offsetWidth; tt.style.zoom=z; }
function fitZ(){ return Math.min(1,(board.clientWidth-24)/natural); }
function setZ(v){
  z=Math.max(fitZ()*0.9,Math.min(2,v));
  tt.style.zoom=z;
  pct.textContent=Math.round(z*100)+"%";
}
measure(); setZ(fitZ());
document.getElementById("zin").addEventListener("click",()=>setZ(z*1.25));
document.getElementById("zout").addEventListener("click",()=>setZ(z/1.25));
document.getElementById("zfit").addEventListener("click",()=>setZ(fitZ()));
let pinch=null;
function dist(t){ return Math.hypot(t[0].clientX-t[1].clientX,t[0].clientY-t[1].clientY); }
board.addEventListener("touchstart",e=>{ if(e.touches.length===2){ pinch={d:dist(e.touches),z}; } },{passive:true});
board.addEventListener("touchmove",e=>{ if(pinch&&e.touches.length===2){ e.preventDefault(); setZ(pinch.z*dist(e.touches)/pinch.d); } },{passive:false});
board.addEventListener("touchend",e=>{ if(e.touches.length<2) pinch=null; });
board.addEventListener("wheel",e=>{ if(e.ctrlKey){ e.preventDefault(); setZ(z*(e.deltaY<0?1.1:0.9)); } },{passive:false});
let rt; window.addEventListener("resize",()=>{ clearTimeout(rt); rt=setTimeout(()=>{ const wasFit=Math.abs(z-fitZ())<0.01; measure(); if(wasFit) setZ(fitZ()); else setZ(z); },150); });
