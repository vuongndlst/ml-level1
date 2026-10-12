import * as THREE from 'three';
import {descentBoard,descentMove,descentVisible,kernelBoard,kernelMatches,kernelPick,iouState,iouTarget,iouBox,iouPlace,RELU_GATE,reluState,reluStep,reluPress,lightsBoard,lightsPress,lightsHint,agentBoard,agentMove} from './arcade-dl-rules.js?v=129b322c5fdd';
// Deep Learning station games (theme 'neural'). Same contract as setupBoard: start/key/pointer/frame/inspect/dispose.
const KEYS=['ArrowUp','ArrowRight','ArrowDown','ArrowLeft'],DIRS=[[0,-1],[1,0],[0,1],[-1,0]];
export function setupDL({type,seed,art,scene,camera,canvas,control,status,active,win,lose,tone}){const group=new THREE.Group();scene.add(group);const ray=new THREE.Raycaster(),point=new THREE.Vector2(),pickable=[];let s={},clock=0;
 const vn=(x,d=2)=>x.toFixed(d).replace('.',','),ease=(o,dt,k=14)=>{o.position.x+=(o.userData.tx-o.position.x)*Math.min(1,dt*k);o.position.z+=(o.userData.tz-o.position.z)*Math.min(1,dt*k);};
 function flat(text,color,size,x,y,z,parent=group){const o=art.label(text,color,size,parent);o.rotation.x=-Math.PI/2;o.position.set(x,y,z);return o;}
 function base(w,h,z=0){art.box(w+.5,.18,h+.5,0x241f5c,0,-.14,z,group);art.box(w,.03,h,0x161340,0,-.03,z,group);}
 function pick(e){if(!active()||e.target!==canvas)return;const r=canvas.getBoundingClientRect();point.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);ray.setFromCamera(point,camera);for(const hit of ray.intersectObjects(pickable,true)){let o=hit.object;while(o&&!o.userData.choose)o=o.parent;if(o?.userData.choose){o.userData.choose();break;}}}
 function arrows(fn){for(const[k,l]of[['ArrowLeft','←'],['ArrowUp','↑'],['ArrowDown','↓'],['ArrowRight','→']])control(l,()=>fn(k));}
 function outline(g,L,R,T,B,color,h=.2,t=.08){for(const[w,d,x,z]of[[R-L+t,t,(L+R)/2,T],[R-L+t,t,(L+R)/2,B],[t,B-T+t,L,(T+B)/2],[t,B-T+t,R,(T+B)/2]]){const m=art.box(1,h,1,color,x,h/2+.05,z,g);m.scale.set(w,1,d);}}
 function dispose(){scene.remove(group);}

 if(type==='descent'){
  const c=.82,xy=i=>[(i%7-3)*c,(Math.floor(i/7)-3)*c];base(7*c,7*c);s=descentBoard(seed);
  const shade=[0x22d3ee,0x26bfe0,0x3aa3d0,0x4a87c0,0x586fb2,0x655aa4,0x6e4a95,0x743d86,0x773378,0x782a6a],tiles=[],nums=[],fog=[];
  for(let i=0;i<49;i++){const[x,z]=xy(i);tiles.push(art.box(c-.07,.12,c-.07,0x2b2a6b,x,.06,z,group));nums.push(flat(String(s.loss[i]),0xffffff,.52,x,.135,z));fog.push(flat('?',0x8b86c9,.42,x,.135,z));}
  const ball=art.sphere(.26,0xf4c258,0,.42,0,group);
  function paint(){const seen=descentVisible(s);for(let i=0;i<49;i++){const v=seen.has(i);nums[i].visible=v;fog[i].visible=!v;tiles[i].material=art.mat(v?shade[s.loss[i]]:0x2b2a6b);}const[x,z]=xy(s.p);ball.userData.tx=x;ball.userData.tz=z;status.textContent=`Loss ${s.loss[s.p]} · còn ${s.budget-s.moves} bước`;}
  function key(k){const d=KEYS.indexOf(k);if(d<0||!active())return;const r=descentMove(s,d);if(r===false)return;tone('step');paint();if(r==='win')win();else if(r==='lose')lose('Hết bước trước khi tới ô loss 0. Ô thấp nhất quanh mình chưa chắc là đáy thật.');}
  arrows(key);
  return {start(){s=descentBoard(seed);paint();ball.position.set(ball.userData.tx,.42,ball.userData.tz);},key,frame(dt){clock+=dt;ease(ball,dt);ball.position.y=.42+Math.abs(Math.sin(clock*5))*.06;},inspect:()=>({...s,visited:[...s.visited]}),dispose};
 }

 if(type==='kernel'){
  const c=.62,oz=.95,xy=(x,y)=>[(x-3.5)*c,(y-3.5)*c+oz],pc=.4,pz=-2.75;base(8*c,8*c,oz);s=kernelBoard(seed);
  const cells=[];for(let i=0;i<64;i++){const x=i%8,y=Math.floor(i/8),[px,pz2]=xy(x,y),o=art.box(c-.06,.1,c-.06,0x2b2a6b,px,.05,pz2,group);o.userData.choose=()=>{s.fx=Math.max(0,Math.min(5,x-1));s.fy=Math.max(0,Math.min(5,y-1));tone('step');place();};pickable.push(o);cells.push(o);}
  art.box(3*pc+.32,.08,3*pc+.32,0x241f5c,0,0,pz,group);const pcells=[];for(let k=0;k<9;k++)pcells.push(art.box(pc-.05,.12,pc-.05,0x2b2a6b,(k%3-1)*pc,.09,pz+(Math.floor(k/3)-1)*pc,group));
  outline(group,-1.5*pc-.16,1.5*pc+.16,pz-1.5*pc-.16,pz+1.5*pc+.16,0xf4c258,.16,.06);
  const frame=new THREE.Group();group.add(frame);const H=1.5*c;outline(frame,-H,H,-H,H,0x22d3ee,.24,.08);const marks=[];
  function paintImage(){s.img.forEach((v,i)=>cells[i].material=art.mat(v?0xe9e6ff:0x2b2a6b));s.pattern.forEach((v,k)=>pcells[k].material=art.mat(v?0xe9e6ff:0x2b2a6b));}
  function place(){const[x,z]=xy(s.fx+1,s.fy+1);frame.userData.tx=x;frame.userData.tz=z;status.textContent=`${s.found.length}/3 vị trí khớp · sai ${s.misses}/3`;}
  function key(k){if(!active())return;const d=KEYS.indexOf(k);if(d>=0){s.fx=Math.max(0,Math.min(5,s.fx+DIRS[d][0]));s.fy=Math.max(0,Math.min(5,s.fy+DIRS[d][1]));tone('step');place();return;}
   if(k!=='Space'&&k!=='Enter')return;const r=kernelPick(s);if(r==='hit'||r==='win'){tone('point');const[x,z]=xy(s.fx+1,s.fy+1);marks.push(art.sphere(.16,0x34d399,x,.32,z,group));place();if(r==='win')win();}
   else if(r==='again'){status.textContent='Vị trí này đã tìm rồi — trượt khung sang chỗ khác.';}else{tone('hit');place();if(r==='lose')lose('Khung chưa khớp mẫu 3 lần. So từng ô sáng, tối với mẫu ở trên.');}}
  arrows(key);control('Chọn',()=>key('Space'),'Chọn vị trí khung');
  return {start(){s=kernelBoard(seed);marks.forEach(m=>group.remove(m));marks.length=0;paintImage();place();frame.position.set(frame.userData.tx,0,frame.userData.tz);},key,pointer:pick,frame(dt){ease(frame,dt,18);marks.forEach((m,i)=>m.position.y=.32+Math.sin(clock*4+i)*.04);clock+=dt;},inspect:()=>({...s,found:[...s.found],matches:kernelMatches(s)}),dispose};
 }

 if(type==='iou'){
  const c=.7,xy=(x,y)=>[(x-4.5)*c,(y-3)*c];base(10*c,7*c);s=iouState(seed);
  for(let y=0;y<7;y++)for(let x=0;x<10;x++){const[px,pz]=xy(x,y),o=art.box(c-.05,.05,c-.05,(x+y)%2?0x2b2a6b:0x322f78,px,.02,pz,group);o.userData.choose=()=>{s.cx=x;s.cy=y;key('Space');};pickable.push(o);}
  const object=new THREE.Group(),drawn=new THREE.Group(),cursor=art.box(c*.86,.06,c*.86,0xf4c258,0,.09,0,group),anchor=art.sphere(.13,0xf4c258,0,.3,0,group);group.add(object,drawn);
  const colors=[0x9b7fcc,0xdb7461,0x64b895,0x4a95c1];
  const edges=r=>{const[x0,z0]=xy(r.x,r.y),[x1,z1]=xy(r.x+r.w-1,r.y+r.h-1);return [x0-c/2,x1+c/2,z0-c/2,z1+c/2];};
  function paint(){const t=iouTarget(s),[L,R,T,B]=edges(t);object.clear();const block=art.box(1,.42,1,colors[s.ti%4],(L+R)/2,.24,(T+B)/2,object);block.scale.set(R-L-.12,1,B-T-.12);
   drawn.clear();if(s.a){const[l,r,tt,b]=edges(iouBox(s.a,[s.cx,s.cy]));outline(drawn,l,r,tt,b,0x22d3ee,.6,.08);}
   const[x,z]=xy(s.cx,s.cy);cursor.position.set(x,.5,z);anchor.visible=!!s.a;if(s.a){const[ax,az]=xy(...s.a);anchor.position.set(ax,.62,az);}
   status.textContent=`${s.score}/4 vật · IoU vừa rồi ${s.last==null?'—':vn(s.last)} · trượt ${s.misses}/3`;}
  function key(k){if(!active())return;const d=KEYS.indexOf(k);if(d>=0){s.cx=Math.max(0,Math.min(9,s.cx+DIRS[d][0]));s.cy=Math.max(0,Math.min(6,s.cy+DIRS[d][1]));tone('step');paint();return;}
   if(k!=='Space'&&k!=='Enter')return;const r=iouPlace(s);tone(r==='corner'?'flip':r==='miss'||r==='lose'?'hit':'point');paint();if(r==='win')win();else if(r==='lose')lose('Ba hộp có IoU dưới 0,6. Hộp bao cần ôm sát vật: không thừa, không thiếu.');}
  arrows(key);control('Đặt góc',()=>key('Space'),'Đặt một góc hộp bao');
  return {start(){s=iouState(seed);paint();},key,pointer:pick,frame(dt){clock+=dt;cursor.position.y=.5+Math.sin(clock*5)*.04;},inspect:()=>({...s,target:iouTarget(s)}),dispose};
 }

 if(type==='relu'){
  base(13,2.2);art.box(13,.1,1.3,0x2b2a6b,0,.04,0,group);art.box(RELU_GATE[1]-RELU_GATE[0],.03,1.3,0x1e6f86,(RELU_GATE[0]+RELU_GATE[1])/2,.11,0,group);
  for(const x of RELU_GATE)art.box(.14,1,.14,0x22d3ee,x,.5,-.75,group),art.box(.14,1,.14,0x22d3ee,x,.5,.75,group);art.box(RELU_GATE[1]-RELU_GATE[0]+.14,.14,.14,0x22d3ee,(RELU_GATE[0]+RELU_GATE[1])/2,1,-.75,group);
  const meshes=new Map();
  function tileMesh(t){const g=new THREE.Group();group.add(g);g.userData.block=art.box(.9,.32,.9,t.v<0?0xdb7461:0x64b895,0,.2,0,g);g.userData.text=flat(t.v<0?'−'+(-t.v):'+'+t.v,0xffffff,.62,0,.37,0,g);meshes.set(t.id,g);return g;}
  function zero(g){g.userData.block.material=art.mat(0x8b86c9);g.remove(g.userData.text);g.userData.text=flat('0',0xffffff,.62,0,.37,0,g);}
  function sync(){const alive=new Set(s.tiles.map(t=>t.id));for(const[id,g]of meshes)if(!alive.has(id)){group.remove(g);meshes.delete(id);}for(const t of s.tiles){const g=meshes.get(t.id)||tileMesh(t);g.position.set(t.x,0,0);if(t.zeroed&&!g.userData.zeroed){g.userData.zeroed=true;zero(g);}}status.textContent=`${s.score}/12 đúng · sai ${s.misses}/3`;}
  function key(k){if(!active()||(k!=='Space'&&k!=='Enter'))return;const r=reluPress(s);if(r==='zero')tone('point');else if(r==='miss'){tone('hit');sync();if(s.misses>=3)lose('Số dương đi qua ReLU giữ nguyên — chỉ số âm mới thành 0.');}}
  control('ReLU',()=>key('Space'),'Áp ReLU cho số trong cổng');
  return {start(){for(const g of meshes.values())group.remove(g);meshes.clear();s=reluState(seed);sync();},key,pointer:e=>{if(e.target===canvas)key('Space');},frame(dt){const events=reluStep(s,dt);sync();if(events.includes('miss'))tone('hit');else if(events.includes('ok'))tone('step');if(s.misses>=3)lose('Có số âm đi qua cổng mà chưa thành 0. ReLU(x) = max(0, x).');else if(s.score>=12)win();},inspect:()=>({...s,tiles:s.tiles.map(t=>({...t}))}),dispose};
 }

 if(type==='lights'){
  const g=1.45,xy=i=>[(i%4-1.5)*g,(Math.floor(i/4)-1.5)*g];base(4*g,4*g);s=lightsBoard(seed);
  for(let i=0;i<16;i++){const[x,z]=xy(i);if(i%4<3)art.box(g-.5,.06,.08,0x4c46a8,x+g/2,.12,z,group);if(i<12)art.box(.08,.06,g-.5,0x4c46a8,x,.12,z+g/2,group);}
  const nodes=[],focusRing=art.box(1,.05,1,0x22d3ee,0,.05,0,group);let focus=0,hint=-1,hintTime=0;
  for(let i=0;i<16;i++){const[x,z]=xy(i),o=art.sphere(.42,0x3b3486,x,.45,z,group);o.userData.choose=()=>{focus=i;press(i);};pickable.push(o);nodes.push(o);}
  function paint(){nodes.forEach((o,i)=>o.material=art.mat(s.on[i]?0xf4c258:0x3b3486));const[x,z]=xy(focus);focusRing.position.set(x,.05,z);status.textContent=`${s.on.filter(Boolean).length}/16 nơ-ron sáng · ${s.moves} lần chạm`;}
  function press(i){if(!active())return;hint=-1;tone('flip');const r=lightsPress(s,i);paint();if(r==='win')win();}
  function key(k){if(!active())return;const d=KEYS.indexOf(k);if(d>=0){const x=Math.max(0,Math.min(3,focus%4+DIRS[d][0])),y=Math.max(0,Math.min(3,Math.floor(focus/4)+DIRS[d][1]));focus=y*4+x;paint();return;}if(k==='Space'||k==='Enter')press(focus);}
  arrows(key);control('Chạm',()=>key('Space'),'Chạm nơ-ron đang chọn');control('Gợi ý',()=>{if(!active())return;hint=lightsHint(s);hintTime=1.6;status.textContent='Gợi ý: thử chạm nơ-ron đang nhấp nháy.';});
  return {start(){s=lightsBoard(seed);focus=0;hint=-1;paint();},key,pointer:pick,frame(dt){clock+=dt;nodes.forEach((o,i)=>{const sc=i===hint&&hintTime>0?1+Math.abs(Math.sin(clock*9))*.35:s.on[i]?1.06:1;o.scale.setScalar(sc);});if(hintTime>0)hintTime-=dt;},inspect:()=>({...s,on:[...s.on],pressed:[...s.pressed],focus,positions:nodes.map(o=>({x:o.position.x,z:o.position.z}))}),dispose};
 }

 if(type==='agent'){
  const c=.82,xy=i=>[(i%7-3)*c,(Math.floor(i/7)-3)*c];base(7*c,7*c);s=agentBoard(seed);
  for(let i=0;i<49;i++){const[x,z]=xy(i);art.box(c-.06,.06,c-.06,(i%7+Math.floor(i/7))%2?0x2b2a6b:0x322f78,x,.03,z,group);}
  for(const p of s.pits){const[x,z]=xy(p);art.box(c-.16,.04,c-.16,0x0b0a24,x,.07,z,group);flat('−1',0xdb7461,.5,x,.1,z);}
  const[ex,ez]=xy(s.exit);art.box(c-.1,.1,c-.1,0x22d3ee,ex,.08,ez,group);flat('RA',0x161340,.5,ex,.15,ez);
  const stars=s.stars.map(p=>{const[x,z]=xy(p);return art.sphere(.22,0xf4c258,x,.4,z,group);}),avatar=art.human(.42);group.add(avatar);
  function paint(){const[x,z]=xy(s.p);avatar.userData.tx=x;avatar.userData.tz=z;stars.forEach((o,i)=>o.visible=!s.got.includes(s.stars[i]));status.textContent=`Thưởng ${s.got.length}/3 · còn ${s.budget-s.moves} bước`+(s.p===s.exit&&s.got.length<3?' · nhặt đủ thưởng trước':'');}
  function key(k){const d=KEYS.indexOf(k);if(d<0||!active())return;const old=s.p,r=agentMove(s,d);if(r===false)return;const[a,b]=xy(old),[x,z]=xy(s.p);avatar.rotation.y=Math.atan2(x-a,z-b);tone(r==='star'?'point':'step');paint();
   if(r==='win')win();else if(r==='pit')lose('Rơi vào hố (phần thưởng −1). Đi vòng tránh các ô −1.');else if(r==='out')lose('Hết bước. Thử thứ tự nhặt thưởng khác để đường ngắn hơn.');}
  arrows(key);
  return {start(){s=agentBoard(seed);paint();avatar.position.set(avatar.userData.tx,.05,avatar.userData.tz);},key,frame(dt){clock+=dt;const dist=Math.hypot(avatar.userData.tx-avatar.position.x,avatar.userData.tz-avatar.position.z);ease(avatar,dt,16);avatar.userData.animate?.(clock,'run',dist>.02?1:0);stars.forEach((o,i)=>o.position.y=.4+Math.sin(clock*3+i)*.06);},inspect:()=>({...s,got:[...s.got]}),dispose};
 }
 throw Error('Unsupported DL game: '+type);
}
