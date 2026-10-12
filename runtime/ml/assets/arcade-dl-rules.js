// Pure rules for the Deep Learning station games (theme 'neural'). Seeded, renderer-free, testable in Node.
// The games borrow DL ideas as play mechanics only; they never train or grade a model.
import {rng,shuffle,DIRECTIONS} from './arcade-rules.js?v=129b322c5fdd';

const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const step=(i,d,w,h=w)=>{const x=i%w+DIRECTIONS[d][0],y=Math.floor(i/w)+DIRECTIONS[d][1];return x<0||y<0||x>=w||y>=h?-1:y*w+x;};

// 1. Gradient descent on a fogged 7 x 7 loss map with one false valley.
export function descentBoard(seed){const random=rng(seed),W=7,corners=[0,6,42,48];
 for(let attempt=0;attempt<400;attempt++){const start=corners[Math.floor(random()*4)],sx=start%W,sy=Math.floor(start/W),gx=Math.floor(random()*W),gy=Math.floor(random()*W);
  if(Math.abs(gx-sx)+Math.abs(gy-sy)<6)continue;
  const lx=clamp(Math.round((sx*2+gx)/3+(random()-.5)*2),0,6),ly=clamp(Math.round((sy*2+gy)/3+(random()-.5)*2),0,6);
  if(Math.hypot(lx-gx,ly-gy)<3.5||(lx===sx&&ly===sy))continue;
  const loss=[];for(let y=0;y<W;y++)for(let x=0;x<W;x++)loss.push(Math.min(9,Math.round(Math.min(1.25*Math.hypot(x-gx,y-gy),1.1*Math.hypot(x-lx,y-ly)+3))));
  const goal=gy*W+gx;return {width:W,loss,start,goal,trap:ly*W+lx,p:start,visited:[start],moves:0,budget:Math.abs(gx-sx)+Math.abs(gy-sy)+8};}
 throw Error('descent layout');}
export function descentVisible(s){const seen=new Set(s.visited);for(const i of s.visited)for(let d=0;d<4;d++){const n=step(i,d,s.width);if(n>=0)seen.add(n);}return seen;}
export function descentMove(s,d){const n=step(s.p,d,s.width);if(n<0)return false;s.p=n;s.moves++;if(!s.visited.includes(n))s.visited.push(n);if(n===s.goal)return 'win';return s.moves>=s.budget?'lose':true;}
export function isLocalMin(s,i){for(let d=0;d<4;d++){const n=step(i,d,s.width);if(n>=0&&s.loss[n]<s.loss[i])return false;}return true;}

// 2. Slide a 3 x 3 kernel over an 8 x 8 binary image; find the three exact matches.
export function kernelMatches(s){const out=[];for(let y=0;y<6;y++)for(let x=0;x<6;x++){let ok=true;for(let k=0;k<9&&ok;k++)ok=s.img[(y+Math.floor(k/3))*8+x+k%3]===s.pattern[k];if(ok)out.push(y*6+x);}return out;}
export function kernelBoard(seed){const random=rng(seed);
 for(let attempt=0;attempt<400;attempt++){const pattern=Array.from({length:9},()=>random()<.5?1:0),ones=pattern.reduce((a,b)=>a+b,0);if(ones<4||ones>6)continue;
  const spots=[];for(let t=0;t<200&&spots.length<3;t++){const x=Math.floor(random()*6),y=Math.floor(random()*6);if(spots.every(([a,b])=>Math.abs(a-x)>=3||Math.abs(b-y)>=3))spots.push([x,y]);}
  if(spots.length<3)continue;
  const img=Array.from({length:64},()=>random()<.42?1:0),fixed=new Set();
  for(const[x,y]of spots)for(let k=0;k<9;k++){const i=(y+Math.floor(k/3))*8+x+k%3;img[i]=pattern[k];fixed.add(i);}
  const planted=spots.map(([x,y])=>y*6+x),s={img,pattern};let ok=false;
  for(let it=0;it<300;it++){const extra=kernelMatches(s).filter(n=>!planted.includes(n));if(!extra.length){ok=true;break;}
   const x=extra[0]%6,y=Math.floor(extra[0]/6),free=[...Array(9).keys()].map(k=>(y+Math.floor(k/3))*8+x+k%3).filter(i=>!fixed.has(i));if(!free.length)break;img[free[Math.floor(random()*free.length)]]^=1;}
  if(ok)return {img,pattern,planted,found:[],misses:0,fx:0,fy:0};}
 throw Error('kernel layout');}
export function kernelPick(s){const at=s.fy*6+s.fx;if(s.found.includes(at))return 'again';if(kernelMatches(s).includes(at)){s.found.push(at);return s.found.length>=3?'win':'hit';}s.misses++;return s.misses>=3?'lose':'miss';}

// 3. Draw a bounding box on a 10 x 7 grid; IoU >= 0,6 catches the object.
export function iouBox(a,b){return {x:Math.min(a[0],b[0]),y:Math.min(a[1],b[1]),w:Math.abs(a[0]-b[0])+1,h:Math.abs(a[1]-b[1])+1};}
export function iouValue(a,b){const w=Math.max(0,Math.min(a.x+a.w,b.x+b.w)-Math.max(a.x,b.x)),h=Math.max(0,Math.min(a.y+a.h,b.y+b.h)-Math.max(a.y,b.y)),inter=w*h;return inter/(a.w*a.h+b.w*b.h-inter);}
export function iouState(seed){const random=rng(seed),targets=[];for(let i=0;i<12;i++){const w=2+Math.floor(random()*4),h=2+Math.floor(random()*3);targets.push({x:Math.floor(random()*(10-w+1)),y:Math.floor(random()*(7-h+1)),w,h});}
 return {W:10,H:7,targets,ti:0,score:0,misses:0,cx:0,cy:0,a:null,last:null};}
export const iouTarget=s=>s.targets[s.ti%s.targets.length];
export function iouPlace(s){if(!s.a){s.a=[s.cx,s.cy];return 'corner';}const v=iouValue(iouBox(s.a,[s.cx,s.cy]),iouTarget(s));s.last=v;s.a=null;
 if(v>=.6){s.score++;s.ti++;return s.score>=4?'win':'hit';}s.misses++;return s.misses>=3?'lose':'miss';}

// 4. ReLU gate: zero the negative numbers inside the gate, let positives pass.
export const RELU_GATE=[1.2,2.4];
export function reluState(seed){const random=rng(seed),values=[];for(let i=0;i<60;i++){const v=1+Math.floor(random()*5);values.push(random()<.5?-v:v);}
 return {values,next:0,tiles:[],spawn:.2,score:0,misses:0,id:0};}
export function reluStep(s,dt){const events=[],speed=2.3+Math.min(1.2,s.score*.07);s.spawn-=dt;
 if(s.spawn<=0){s.tiles.push({id:s.id++,x:-6.2,v:s.values[s.next++%s.values.length],zeroed:false,judged:false});s.spawn=1.3-Math.min(.45,s.score*.03);}
 for(const t of s.tiles){t.x+=speed*dt;if(!t.judged&&t.x>RELU_GATE[1]){t.judged=true;if(t.v<0&&!t.zeroed){s.misses++;events.push('miss');}else{s.score++;events.push('ok');}}}
 s.tiles=s.tiles.filter(t=>t.x<6.6);return events;}
export function reluPress(s){const t=s.tiles.filter(t=>!t.judged&&!t.zeroed&&t.x>=RELU_GATE[0]-.25&&t.x<=RELU_GATE[1]).sort((a,b)=>b.x-a.x)[0];if(!t)return 'none';
 t.zeroed=true;if(t.v<0)return 'zero';t.judged=true;s.misses++;return 'miss';}

// 5. Light every neuron: a press toggles the neuron and its four neighbours (4 x 4).
export function lightsToggle(on,i){for(const n of [i,step(i,0,4),step(i,1,4),step(i,2,4),step(i,3,4)])if(n>=0)on[n]^=1;}
export function lightsBoard(seed){const random=rng(seed);for(let attempt=0;attempt<100;attempt++){const need=shuffle([...Array(16).keys()],random).slice(0,5+Math.floor(random()*3)),on=Array(16).fill(1);need.forEach(i=>lightsToggle(on,i));if(on.some(v=>!v))return {on,need,pressed:[],moves:0};}throw Error('lights layout');}
export function lightsPress(s,i){lightsToggle(s.on,i);s.moves++;const k=s.pressed.indexOf(i);if(k>=0)s.pressed.splice(k,1);else s.pressed.push(i);return s.on.every(Boolean)?'win':true;}
export function lightsHint(s){const set=new Set(s.need);for(const p of s.pressed)set.has(p)?set.delete(p):set.add(p);return [...set].sort((a,b)=>a-b)[0]??-1;}

// 6. Grid-world agent: collect three rewards, avoid pits, reach the exit within the step budget.
export function agentDistances(s,from){const dist=Array(49).fill(Infinity),q=[from];dist[from]=0;for(let i=0;i<q.length;i++)for(let d=0;d<4;d++){const n=step(q[i],d,7);if(n>=0&&!s.pits.includes(n)&&dist[n]===Infinity){dist[n]=dist[q[i]]+1;q.push(n);}}return dist;}
export function agentBest(s){const pts=[s.start,...s.stars],D=pts.map(p=>agentDistances(s,p));let best=Infinity;
 for(const order of [[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]]){let len=D[0][s.stars[order[0]]];for(let k=1;k<3;k++)len+=D[order[k-1]+1][s.stars[order[k]]];len+=D[order[2]+1][s.exit];best=Math.min(best,len);}return best;}
export function agentBoard(seed){const random=rng(seed);for(let attempt=0;attempt<400;attempt++){const c=shuffle([...Array(49).keys()],random),s={start:c[0],exit:c[1],stars:c.slice(2,5),pits:c.slice(5,12)};
  const sx=s.start%7,sy=Math.floor(s.start/7),ex=s.exit%7,ey=Math.floor(s.exit/7);if(Math.abs(sx-ex)+Math.abs(sy-ey)<5)continue;
  const best=agentBest(s);if(!Number.isFinite(best)||best<10)continue;return {...s,width:7,p:s.start,got:[],moves:0,best,budget:best+6};}throw Error('agent layout');}
export function agentMove(s,d){const n=step(s.p,d,7);if(n<0)return false;s.p=n;s.moves++;if(s.pits.includes(n))return 'pit';
 if(s.stars.includes(n)&&!s.got.includes(n)){s.got.push(n);if(s.moves>=s.budget)return 'out';return 'star';}
 if(n===s.exit&&s.got.length===3)return 'win';return s.moves>=s.budget?'out':true;}
