/* Sáu khu học tập 3D trên trang chủ. Mỗi bài có thế giới riêng ở baiNN/quest.html. */
import * as THREE from 'three';
const regions=window.KHU_ML||[], box=document.getElementById('sea-scene'), canvas=document.getElementById('island-canvas');
const labelsBox=document.getElementById('island-hotspots'), fallback=document.getElementById('sea-fallback');
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
let renderer;
try{renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true,powerPreference:'low-power'});}catch(e){fallback.hidden=false;throw e;}
renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputColorSpace=THREE.SRGBColorSpace;
renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.3;
const scene=new THREE.Scene();scene.fog=new THREE.Fog('#123D5A',55,130);
const camera=new THREE.PerspectiveCamera(44,1,.1,200);
scene.add(new THREE.HemisphereLight('#D8F4FF','#315064',2.5));
const sun=new THREE.DirectionalLight('#FFF1D0',3);sun.position.set(-20,42,26);scene.add(sun);
const mat=(color,extra={})=>new THREE.MeshStandardMaterial({color,flatShading:true,roughness:.75,...extra});
function mesh(g,geo,color,x,y,z,extra){const m=new THREE.Mesh(geo,mat(color,extra));m.position.set(x,y,z);g.add(m);return m;}
function block(g,color,x,y,z,w,h,d,extra){return mesh(g,new THREE.BoxGeometry(w,h,d),color,x,y,z,extra);}
function orb(g,color,x,y,z,r){return mesh(g,new THREE.IcosahedronGeometry(r,1),color,x,y,z,{emissive:color,emissiveIntensity:.7,roughness:.25});}
const desktop=[[-16,-10],[0,-10],[16,-10],[-16,10],[0,10],[16,10]],mobile=[[-8,-18],[8,-18],[-8,0],[8,0],[-8,18],[8,18]];
let positions=desktop,selected=0,hover=-1;
const islands=[],pickers=[],moving=[];
function makeIsland(i){
  const r=regions[i],group=new THREE.Group(),[x,z]=positions[i];group.position.set(x,0,z);scene.add(group);
  const edge=['#CDBB8B','#C5BDE1','#D4BB94','#A9D2AA','#C9B4D8','#BDD4E1'][i],land=['#70B6AC','#8F9BC1','#BB9B82','#87AD8F','#9A91B7','#82A9C4'][i];
  const sides=[10,12,10,11,12,12][i];
  const cliff=mesh(group,new THREE.CylinderGeometry(5.6,3.6,3.5,sides),'#566C76',0,-1.9,0);
  const coast=mesh(group,new THREE.CylinderGeometry(5.85,5.5,.45,sides),edge,0,-.25,0);
  const top=mesh(group,new THREE.CylinderGeometry(5.4,5.55,.32,sides),land,0,.05,0);
  top.userData.region=i;cliff.userData.region=i;pickers.push(top,cliff);
  top.material.emissive=new THREE.Color(r.mau);coast.material.emissive=new THREE.Color(r.mau);
  const halo=mesh(group,new THREE.TorusGeometry(6.25,.13,8,48),r.mau,0,-.38,0,{transparent:true,opacity:.08,emissive:r.mau,emissiveIntensity:.9,depthWrite:false});halo.rotation.x=Math.PI/2;
  const light=new THREE.PointLight(r.mau,0,18);light.position.set(0,3,0);group.add(light);
  const sparks=Array.from({length:7},()=>mesh(group,new THREE.OctahedronGeometry(.13,0),r.mau,0,0,0,{transparent:true,opacity:0,emissive:r.mau,emissiveIntensity:1,depthWrite:false}));
  if(i===0){ // Mạng AI: các nút liên kết.
    const pts=[[-3,-1],[-2,2],[0,-2],[1,2],[3,-.5]];
    pts.forEach(([px,pz],k)=>{const o=orb(group,k%2?r.mau:'#FFD07A',px,1.5+k%2*.65,pz,.58);moving.push({o,kind:'bob',base:o.position.y,phase:k});});
    for(const [a,b] of [[0,1],[0,2],[1,3],[2,3],[2,4],[3,4]]){
      const p=new THREE.Vector3(pts[a][0],1.8,pts[a][1]),q=new THREE.Vector3(pts[b][0],1.8,pts[b][1]);const line=new THREE.Mesh(new THREE.TubeGeometry(new THREE.LineCurve3(p,q),8,.08,5),mat('#BFEAFF',{emissive:r.mau,emissiveIntensity:.35}));group.add(line);
    }
  }else if(i===1){ // Biểu đồ, vector và chuẩn bị dữ liệu.
    [1.6,2.6,3.6,2.1,4.3].forEach((h,k)=>block(group,k%2?r.mau:'#D8CBFA',-3.2+k*1.6,h/2,0,1.05,h,1.3,{emissive:r.mau,emissiveIntensity:.15}));
    const arrow=mesh(group,new THREE.ConeGeometry(.7,1.4,6),'#FBD58B',2,5,0,{emissive:'#FBD58B',emissiveIntensity:.35});moving.push({o:arrow,kind:'spin'});
  }else if(i===2){ // Biểu đồ xu hướng và điểm dữ liệu.
    const heights=[1.1,2.2,1.7,3.5,4.3];heights.forEach((h,k)=>{block(group,'#4B6D80',-3.2+k*1.6,h/2,0,.8,h,.8);orb(group,k===3?'#FFD27D':r.mau,-3.2+k*1.6,h+.4,0,.36);});
    const ring=mesh(group,new THREE.TorusGeometry(2.4,.1,8,30),r.mau,0,4.7,0,{emissive:r.mau,emissiveIntensity:.6});ring.rotation.x=.45;moving.push({o:ring,kind:'spin'});
  }else if(i===3){ // Cây quyết định và đường dự đoán.
    for(const [px,pz,h] of [[-2,-1,2.4],[2,-1,3.3],[-2,2,1.8],[2,2,2.5]]){
      mesh(group,new THREE.CylinderGeometry(.15,.22,h,6),'#496F68',px,h/2,pz);
      mesh(group,new THREE.ConeGeometry(.8,1.7,6),r.mau,px,h+.55,pz,{emissive:r.mau,emissiveIntensity:.12});
    }
    const gate=block(group,'#BFEFE2',0,4.5,0,3.2,.3,.4,{emissive:r.mau,emissiveIntensity:.4});moving.push({o:gate,kind:'pulse'});
  }else if(i===4){ // Đánh giá mô hình, ranh giới và cụm.
    for(const [px,pz,c] of [[-2,-1,'#D6B8F6'],[-1,1,'#D6B8F6'],[2,-1,'#8ADBD4'],[2.6,1,'#8ADBD4']])orb(group,c,px,1.5,pz,.65);
    block(group,r.mau,0,2,0,.18,3.8,5,{emissive:r.mau,emissiveIntensity:.65});
    const ring=mesh(group,new THREE.TorusGeometry(2.4,.13,8,30),r.mau,0,4.5,0,{emissive:r.mau,emissiveIntensity:.6});moving.push({o:ring,kind:'spin'});
  }else{ // Mạng nơ-ron và ứng dụng.
    for(let layer=0;layer<3;layer++)for(let n=0;n<3;n++)orb(group,layer===2?'#FFD27D':r.mau,-2.8+layer*2.8,1.3+n*1.2,-1.5+n*1.5,.34);
    const rocket=mesh(group,new THREE.ConeGeometry(.72,2.4,8),'#E8F9FF',0,5.1,0,{emissive:r.mau,emissiveIntensity:.3});moving.push({o:rocket,kind:'bob',base:5.1,phase:2});
  }
  islands.push({group,top,coast,halo,light,sparks,x,z,scale:1,glow:0});
}
regions.forEach((_,i)=>makeIsland(i));
const seaGeo=new THREE.PlaneGeometry(160,120,32,24);seaGeo.rotateX(-Math.PI/2);
mesh(scene,seaGeo,'#0E4D6A',0,-3.7,0,{metalness:.16,roughness:.43,flatShading:false});
const seaBase=seaGeo.attributes.position.array.slice();
const grid=new THREE.GridHelper(120,24,'#2D89A0','#17617D');grid.position.y=-3.62;grid.material.opacity=.2;grid.material.transparent=true;scene.add(grid);
let routeCurve=new THREE.CatmullRomCurve3(positions.map(([x,z])=>new THREE.Vector3(x,-1.5,z)));
const route=new THREE.Mesh(new THREE.TubeGeometry(routeCurve,100,.045,5,false),new THREE.MeshBasicMaterial({color:'#B1ECEE',transparent:true,opacity:.55}));scene.add(route);
const pulse=orb(scene,'#D7FFEE',0,-1.5,0,.26);
const labels=regions.map((r,i)=>{const b=document.createElement('button');b.type='button';b.className='island-hotspot';b.style.setProperty('--accent',r.mau);b.innerHTML='<small>KHU '+String(i+1).padStart(2,'0')+'</small><strong></strong>';b.querySelector('strong').textContent=r.ten;labelsBox.append(b);b.addEventListener('click',()=>{window.selectMLRegion(i);document.getElementById('bai-hoc').scrollIntoView({behavior:'smooth'});});b.addEventListener('pointerenter',()=>setHover(i));b.addEventListener('pointerleave',()=>setHover(-1));b.addEventListener('focus',()=>setHover(i));b.addEventListener('blur',()=>setHover(-1));return b;});
function setHover(i){hover=i;const active=i<0?selected:i;labels.forEach((l,k)=>l.classList.toggle('is-active',k===active));}
window.addEventListener('ml-region-hover',e=>setHover(e.detail));window.addEventListener('ml-region-select',e=>{selected=e.detail;setHover(-1);});setHover(-1);
function placeLabels(){camera.updateMatrixWorld();islands.forEach((it,i)=>{const p=new THREE.Vector3(it.x,it.group.position.y-.5,it.z+5.4).project(camera);labels[i].style.left=((p.x+1)*50).toFixed(2)+'%';labels[i].style.top=((-p.y+1)*50).toFixed(2)+'%';});}
function size(){const w=box.clientWidth,h=box.clientHeight;if(!w||!h)return;const layout=w<650?mobile:desktop;if(positions!==layout){positions=layout;islands.forEach((it,i)=>{it.x=positions[i][0];it.z=positions[i][1];it.group.position.x=it.x;it.group.position.z=it.z;});route.geometry.dispose();routeCurve=new THREE.CatmullRomCurve3(positions.map(([x,z])=>new THREE.Vector3(x,-1.5,z)));route.geometry=new THREE.TubeGeometry(routeCurve,100,.045,5,false);}renderer.setSize(w,h,false);camera.aspect=w/h;camera.position.set(0,w<650?49:26,w<650?52:39);camera.lookAt(0,0,0);camera.updateProjectionMatrix();placeLabels();}
const ray=new THREE.Raycaster(),pointer=new THREE.Vector2();function picked(e){const r=canvas.getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,-((e.clientY-r.top)/r.height*2-1));ray.setFromCamera(pointer,camera);return ray.intersectObjects(pickers,false)[0]?.object.userData.region;}
canvas.addEventListener('pointermove',e=>{const i=picked(e);canvas.style.cursor=i===undefined?'default':'pointer';setHover(i===undefined?-1:i);});canvas.addEventListener('pointerleave',()=>setHover(-1));canvas.addEventListener('click',e=>{const i=picked(e);if(i!==undefined){window.selectMLRegion(i);document.getElementById('bai-hoc').scrollIntoView({behavior:'smooth'});}});
addEventListener('resize',size);size();let frame=0;
function animate(time){requestAnimationFrame(animate);if(document.hidden)return;const t=reduced?0:time,active=hover<0?selected:hover;
  islands.forEach((it,i)=>{const on=i===active,ease=reduced?1:.12;it.scale+=((on?1.2:1)-it.scale)*ease;it.glow+=((on?1:0)-it.glow)*ease;it.group.scale.setScalar(it.scale);it.group.position.y=(reduced?0:Math.sin(t*.0011+i)*.22)+it.glow*.62;it.group.rotation.y=reduced?0:Math.sin(t*.00055+i)*.07;it.top.material.emissiveIntensity=.02+it.glow*.5;it.coast.material.emissiveIntensity=.02+it.glow*.8;it.halo.material.opacity=.07+it.glow*.5;it.light.intensity=it.glow*2.3;it.sparks.forEach((s,k)=>{const a=k*Math.PI*2/7+(reduced?0:t*.00055);s.position.set(Math.cos(a)*6.5,.9+(reduced?0:Math.sin(t*.003+k)*.4),Math.sin(a)*6.5);s.material.opacity=it.glow*.7;});});
  if(!reduced){moving.forEach(({o,kind,base,phase=0})=>{if(kind==='spin')o.rotation.y=t*.00065;else if(kind==='bob')o.position.y=base+Math.sin(t*.002+phase)*.25;else if(kind==='pulse')o.material.emissiveIntensity=.3+.3*Math.sin(t*.003);});if(frame%2===0){const p=seaGeo.attributes.position;for(let j=0;j<p.array.length;j+=3)p.array[j+1]=seaBase[j+1]+.16*Math.sin(t*.0018+seaBase[j]*.12+seaBase[j+2]*.09);p.needsUpdate=true;seaGeo.computeVertexNormals();}pulse.position.copy(routeCurve.getPoint(t*.00007%1));pulse.scale.setScalar(.85+.2*Math.sin(t*.007));}else pulse.visible=false;
  if(frame++%3===0||reduced)placeLabels();renderer.render(scene,camera);
}
requestAnimationFrame(animate);window.__home3dReady=true;
