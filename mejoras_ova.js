/* Ampliación pedagógica: contenidos, reintentos variables y reporte individual. */
(()=>{
const pools={
0:[['HIPERVISOR','Programa que gestiona varias máquinas virtuales'],['ANFITRION','Equipo físico donde se ejecutan los entornos virtuales'],['INVITADO','Sistema operativo instalado dentro de una máquina virtual'],['INSTANTANEA','Copia del estado de una máquina virtual en un momento'],['AISLAMIENTO','Separación entre los entornos virtualizados'],['VIRTUALIZACION','Tecnología que simula recursos informáticos'],['RECURSOS','Memoria, procesador y almacenamiento que se asignan'],['MEMORIA','Recurso que almacena temporalmente datos en uso'],['PROCESADOR','Componente físico que ejecuta instrucciones'],['ALMACENAMIENTO','Recurso que conserva archivos y sistemas'],['VMWARE','Ejemplo de plataforma para ejecutar máquinas virtuales'],['VIRTUALBOX','Software de virtualización de escritorio'],['SERVIDOR','Equipo que ofrece servicios a otros sistemas'],['CLONACION','Creación de una copia de una máquina virtual'],['REDVIRTUAL','Conexión simulada entre equipos virtuales'],['SISTEMA','Conjunto de programas que administra el equipo'],['IMAGEN','Archivo que puede contener un sistema listo para instalar'],['RESPALDO','Copia utilizada para recuperar información'],['NAT','Modo de red que permite compartir la conexión del anfitrión'],['PUENTE','Modo de red que conecta la máquina virtual a la red física']],
1:[
['Encendido de un equipo con BIOS/UEFI',['Encender el equipo y ejecutar el firmware','Realizar la comprobación inicial del hardware','Localizar el dispositivo de arranque','Ejecutar el cargador de arranque','Cargar el kernel e iniciar los servicios']],
['Arranque de Linux',['El firmware inicia los componentes','Se selecciona el dispositivo de arranque','Se ejecuta GRUB u otro cargador','El cargador inicia el kernel de Linux','Se activan servicios y se presenta el inicio de sesión']],
['Inicio del sistema desde un disco',['El firmware detecta el disco de arranque','Se lee la información necesaria para arrancar','Se inicia el gestor de arranque','El gestor carga el núcleo del sistema','El núcleo habilita servicios y acceso del usuario']],
['Arranque con comprobación de hardware',['Se presiona el botón de encendido','El firmware comprueba componentes esenciales','Se identifica una unidad de arranque válida','Se carga el núcleo mediante el gestor','Se inicializan controladores y servicios']],
['Inicio del sistema operativo',['El equipo recibe energía','BIOS/UEFI comienza la inicialización','Se transfiere control al cargador de arranque','Se carga y ejecuta el kernel','El sistema presenta la pantalla de acceso']],
['Arranque tras reinicio',['El sistema ordena reiniciar el equipo','El firmware vuelve a iniciar','Se selecciona la unidad de arranque','El cargador coloca el kernel en memoria','El sistema inicia servicios y queda disponible']]
],
2:['ARCHIVO','CARPETA','RUTA','PERMISO','NTFS','DIRECTORIO','EXTENSION','RESPALDO','METADATOS','PARTICION','LECTURA','ESCRITURA','JERARQUIA','FORMATO','DISCO','ACCESO','FAT32','EXT4','BLOQUE','INDICE'],
3:[
['Nuevo','El sistema está creando el proceso y reservando información para administrarlo.'],
['Listo','El proceso tiene lo necesario para ejecutarse, pero espera que la CPU quede disponible.'],
['Ejecución','El procesador está ejecutando instrucciones de este proceso en ese instante.'],
['Bloqueado','El proceso espera un evento externo y no puede avanzar aunque haya CPU disponible.'],
['Terminado','El proceso finalizó y el sistema puede liberar sus recursos.'],
['Planificador','Componente del sistema que decide cuál proceso recibe el siguiente turno de CPU.'],
['Contexto','Información de registros y estado que permite suspender y reanudar un proceso.'],
['PID','Número que permite identificar un proceso dentro del sistema operativo.'],
['Hilo','Unidad de ejecución que comparte recursos con otros hilos del mismo proceso.'],
['Prioridad','Criterio que puede influir en el orden de atención de los procesos.'],
['CPU','Componente que interpreta y ejecuta instrucciones de los programas.'],
['Cola de listos','Conjunto de procesos preparados que esperan un turno de ejecución.'],
['Interrupción','Señal que provoca que el procesador atienda un evento.'],
['Multitarea','Capacidad de gestionar varios procesos alternando su ejecución.'],
['Cambio de contexto','Operación que guarda un estado de ejecución y recupera el de otro proceso.']
]};
const lessons=[
[
['¿Qué es y para qué sirve?','Una máquina virtual (MV) es un computador simulado por software. Dispone de procesador, memoria, disco y conexiones de red virtuales. Dentro de ella se puede instalar un sistema operativo invitado sin sustituir el sistema principal del equipo anfitrión. Es útil para practicar instalaciones, probar programas y crear laboratorios sin necesitar varios computadores físicos.'],
['Anfitrión, invitado e hipervisor','El anfitrión aporta los recursos reales. El invitado utiliza los recursos asignados y funciona como si tuviera su propio equipo. El hipervisor crea, inicia, detiene y administra las máquinas virtuales. Hay hipervisores que se ejecutan directamente sobre el hardware y otros que funcionan como una aplicación del sistema anfitrión.'],
['Recursos y aislamiento','Antes de iniciar una MV se define cuánta RAM, cuántos procesadores virtuales y cuánto espacio de disco tendrá. Asignar más recursos de los disponibles puede ralentizar el equipo. El aislamiento reduce la interferencia entre sistemas, aunque no elimina todos los riesgos de seguridad.'],
['Redes, instantáneas y usos','Una conexión NAT permite que la MV salga a la red compartiendo la conexión del anfitrión; el modo puente la conecta a la red como otro equipo. Una instantánea conserva un estado que puede restaurarse, pero no sustituye por completo a una estrategia de respaldo. Ejemplo: instalar Linux en VirtualBox para practicar comandos sin alterar Windows.'],
['Ejemplo práctico','Imagina un computador con Windows y 16 GB de RAM. Creas una MV con Linux, 4 GB de RAM y 30 GB de disco virtual. Linux será el invitado; Windows y el equipo físico forman el entorno anfitrión; el hipervisor administra los recursos.']
],
[
['¿Qué hace el kernel?','El kernel es el núcleo del sistema operativo. Se comunica con el hardware, organiza el uso de memoria y CPU, administra dispositivos y ofrece servicios a los programas. Las aplicaciones normalmente no acceden directamente a todos los recursos: solicitan operaciones mediante llamadas al sistema.'],
['¿Qué significa booting?','Booting o arranque es el conjunto de pasos que ocurren desde que se enciende el equipo hasta que el sistema queda listo para utilizarse. No es una sola acción: participan el firmware, un dispositivo de arranque, un cargador y el kernel.'],
['Secuencia general de arranque','Primero el firmware BIOS/UEFI inicializa y comprueba componentes. Después identifica una unidad válida y transfiere el control al cargador de arranque. Este localiza el kernel y lo carga en memoria. El kernel inicializa controladores, prepara recursos y pone en marcha los servicios del sistema.'],
['BIOS, UEFI y cargador','BIOS es una tecnología tradicional de firmware; UEFI es una alternativa moderna con funciones adicionales. GRUB es un ejemplo de cargador utilizado en Linux. El cargador y el kernel son componentes distintos: el primero inicia el segundo.'],
['Ejemplo práctico','Al encender un portátil aparece el logo del fabricante, luego se carga el gestor de arranque y finalmente se muestra la pantalla de acceso. Si falta el dispositivo de arranque, el proceso se detiene antes de cargar el kernel.']
],
[
['¿Qué organiza un sistema de archivos?','El sistema de archivos determina cómo se almacenan y encuentran los datos en un dispositivo. Organiza archivos y carpetas mediante nombres, rutas, estructuras y metadatos. Sin esa organización sería difícil localizar la información almacenada.'],
['Archivos, carpetas y rutas','Un archivo contiene datos, como un documento o una imagen. Una carpeta o directorio agrupa archivos y otras carpetas. Una ruta indica dónde se encuentra un elemento; por ejemplo, Documentos/Clases/taller.pdf. La extensión puede ayudar a identificar el tipo de archivo, aunque no garantiza su contenido.'],
['Permisos y metadatos','Los permisos definen quién puede leer, modificar o ejecutar un archivo. Los metadatos describen características como tamaño, fechas y propietario. Administrar permisos es importante para evitar modificaciones no autorizadas.'],
['Ejemplos de formatos','NTFS es frecuente en Windows; ext4 se utiliza en muchos sistemas Linux; FAT32 ofrece compatibilidad amplia, aunque tiene limitaciones de tamaño. Una partición divide lógicamente un dispositivo de almacenamiento.'],
['Ejemplo práctico','Si guardas una tarea en Documentos/Sistemas/actividad.pdf, el sistema registra su ubicación y atributos. Si otro usuario intenta editarla sin permiso de escritura, el sistema puede impedirlo. Un respaldo permite recuperar el documento ante una pérdida.']
],
[
['Programa y proceso no son lo mismo','Un programa es un conjunto de instrucciones almacenadas. Un proceso es una instancia de ese programa mientras se ejecuta. Abrir dos veces una misma aplicación puede crear dos procesos diferentes, cada uno con sus propios recursos y estado.'],
['Estados principales','Nuevo: se está creando. Listo: puede ejecutarse y espera CPU. Ejecución: está utilizando CPU. Bloqueado: espera un evento, como leer un archivo. Terminado: concluyó. Estos estados permiten explicar por qué un proceso a veces parece detenerse sin haber terminado.'],
['Planificación y CPU','El planificador decide qué proceso obtiene tiempo de CPU. En sistemas multitarea, varios procesos alternan rápidamente su ejecución. El cambio de contexto guarda la información necesaria de uno y recupera la de otro.'],
['Procesos, hilos y recursos','Un proceso tiene un identificador o PID y utiliza recursos como memoria y archivos abiertos. Los hilos son unidades de ejecución que pueden compartir recursos dentro de un proceso. Un proceso bloqueado no necesita consumir CPU mientras espera que finalice su operación.'],
['Ejemplo práctico','Al abrir un navegador, el sistema crea procesos y posiblemente varios hilos. Si uno espera datos de internet puede quedar bloqueado; otro proceso listo recibe la CPU. Cuando cierras la aplicación, sus procesos terminan y liberan recursos.']
]];
const mix=a=>[...a].map(v=>({v,k:Math.random()})).sort((a,b)=>a.k-b.k).map(x=>x.v);
const originalHome=renderHome,originalOpen=openTopic,originalFinish=finishGame,originalHang=renderHangman,originalWord=renderWordsearch,originalMatch=renderMatching;
let activeAttempt=null;
const safe=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const logKey=()=>key()+'_evidencias';
function getLog(){try{return JSON.parse(localStorage.getItem(logKey())||'[]')}catch{return []}}
function saveLog(list){localStorage.setItem(logKey(),JSON.stringify(list))}
function completed(){return TOPICS.every((t,i)=>passed(i))}
function reportAction(){let area=document.getElementById('reportAction');if(!area){area=document.createElement('section');area.id='reportAction';area.className='panel';document.getElementById('home').appendChild(area)}
let n=getLog().length;area.innerHTML='<h2>Informe de actividades</h2><p>El reporte reúne calificaciones, intentos y detalle de los ejercicios de los cuatro juegos. Los talleres PDF se resuelven por separado y no se califican automáticamente.</p><p><b>Intentos registrados:</b> '+n+'</p><button id="reportDownload" class="primary" '+(!completed()?'disabled':'')+'>Generar reporte final en PDF</button><p class="muted">'+(completed()?'Ya aprobaste los cuatro temas. Puedes generar el documento para entregar en el aula virtual.':'El reporte final se habilitará al aprobar los cuatro temas con al menos 3.0.')+'</p>';const b=document.getElementById('reportDownload');if(b)b.onclick=generateReport;}
renderHome=function(){originalHome();reportAction()};
openTopic=function(i){originalOpen(i);const container=document.getElementById('topicContent');container.insertAdjacentHTML('beforeend','<h3>Material de estudio ampliado</h3>'+lessons[i].map(([h,p])=>'<section class="lesson-block"><h4>'+h+'</h4><p>'+p+'</p></section>').join('')+'<p class="guide-note">Lee los ejemplos antes de resolver el taller y el juego. En cada nuevo intento se presentan términos, secuencias o relaciones diferentes.</p>')};
function startAttempt(items){activeAttempt={topic:current,started:new Date().toISOString(),items:items||[],mistakes:0,answers:[]};}
startHangman=function(){const items=mix(pools[0]).slice(0,5);TOPICS[0].words=items;startAttempt(items.map(([word,hint])=>({question:hint,correct:word})));gameState={index:0,correct:0,errors:0,guessed:new Set(),finished:false};renderHangman()};
renderHangman=function(){const st=gameState;if(st.index<5&&st.finished&&!activeAttempt.answers.some(a=>a.index===st.index)){const w=TOPICS[0].words[st.index][0];activeAttempt.answers.push({index:st.index,question:TOPICS[0].words[st.index][1],correct:w,answer:st.errors>=6?'No acertó':w,ok:st.errors<6})}originalHang()};
startOrdering=function(){const chosen=mix(pools[1])[0];TOPICS[1].steps=[...chosen[1]];startAttempt(chosen[1].map((v,i)=>({question:'Posición '+(i+1)+' en '+chosen[0],correct:v})));gameState={order:mix(chosen[1]),dragIndex:null,chosen:null};renderOrdering();document.getElementById('quiz').insertAdjacentHTML('afterbegin','<p><b>Situación:</b> '+safe(chosen[0])+'</p>')};
startWordsearch=function(){const words=mix(pools[2]).slice(0,8),N=15;TOPICS[2].words=words;let grid,placements,success=false;const dirs=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];
for(let attempt=0;attempt<35&&!success;attempt++){grid=Array.from({length:N},()=>Array(N).fill(''));placements=[];success=true;for(const word of words){let options=mix(dirs),placed=false;for(let tries=0;tries<350&&!placed;tries++){const [dr,dc]=options[tries%8],r=Math.floor(Math.random()*N),c=Math.floor(Math.random()*N),er=r+(word.length-1)*dr,ec=c+(word.length-1)*dc;if(er<0||er>=N||ec<0||ec>=N)continue;let good=true;for(let k=0;k<word.length;k++){const ch=grid[r+k*dr][c+k*dc];if(ch&&ch!==word[k]){good=false;break}}if(!good)continue;for(let k=0;k<word.length;k++)grid[r+k*dr][c+k*dc]=word[k];placements.push([r,c,dr,dc]);placed=true}if(!placed){success=false;break}}}
if(!success){const wordsFallback=['ARCHIVO','RUTA','NTFS','CARPETA','DISCO','EXT4','LECTURA','PERMISO'];TOPICS[2].words=wordsFallback;return startWordsearch()}
const abc='ABCDEFGHIJKLMNOPQRSTUVWXYZ';grid.forEach(row=>row.forEach((v,j)=>{if(!v)row[j]=abc[Math.floor(Math.random()*abc.length)]}));startAttempt(words.map(w=>({question:'Encontrar '+w,correct:w})));gameState={grid,found:new Set(),selection:[],placements};renderWordsearch()};
renderWordsearch=function(){originalWord();document.getElementById('quiz').insertAdjacentHTML('beforeend','<p class="muted">La ubicación y selección de las palabras cambian en cada intento.</p>')};
startMatching=function(){const selected=mix(pools[3]).slice(0,5);TOPICS[3].pairs=selected;startAttempt(selected.map(([term,definition])=>({question:term,correct:definition})));gameState={selected:null,matched:new Set(),rights:mix(selected.map((p,i)=>({index:i,label:p[1]})))};renderMatching()};
renderMatching=function(){originalMatch();document.querySelectorAll('[data-right]').forEach(b=>b.addEventListener('click',()=>{if(gameState.selected!==null&&Number(b.dataset.right)!==gameState.selected)activeAttempt.mistakes++},true))};
finishGame=function(correct){let grade=Number(correct.toFixed(2)),details=[];
if(current===0){details=activeAttempt.items.map((q,i)=>{const a=activeAttempt.answers.find(x=>x.index===i);return {...q,answer:a?.answer||'No acertó',ok:!!a?.ok}})}
if(current===1){details=TOPICS[1].steps.map((correct,i)=>({question:'Etapa '+(i+1),correct,answer:gameState.order[i],ok:correct===gameState.order[i]}))}
if(current===2){details=TOPICS[2].words.map((w,i)=>({question:'Localizar '+w,correct:w,answer:gameState.found.has(i)?'Encontrada':'No encontrada',ok:gameState.found.has(i)}))}
if(current===3){details=TOPICS[3].pairs.map((p,i)=>({question:p[0],correct:p[1],answer:gameState.matched.has(i)?'Relacionada':'No relacionada',ok:gameState.matched.has(i)}));grade=Math.max(0,grade-Math.min(5,activeAttempt.mistakes)*0.5)}
const r=getRecord();r.attempts[current]=(r.attempts[current]||0)+1;r.scores[current]=Math.max(Number(r.scores[current]||0),grade);saveRecord(r);
const record={date:new Date().toISOString(),topic:current,title:TOPICS[current].title,attempt:r.attempts[current],grade,approved:grade>=PASS,mistakes:activeAttempt.mistakes,details};
const history=getLog();history.push(record);saveLog(history);
document.getElementById('liveScore').textContent=grade.toFixed(1);document.getElementById('submitGame').disabled=true;document.getElementById('submitGame').classList.add('hidden');document.getElementById('quiz').innerHTML='';document.getElementById('gameResult').classList.remove('hidden');
document.getElementById('gameResult').innerHTML='<h3>'+(grade>=PASS?'¡Aprobado!':'Aún no apruebas')+'</h3><p>Calificación: <b>'+grade.toFixed(1)+' / 5.0</b> · Mínimo 3.0</p><p>'+(grade>=PASS?'Puedes continuar con el siguiente tema.':'Vuelve a intentarlo: recibirás una nueva selección de ejercicios del mismo tema.')+'</p><p>Respuestas correctas: '+details.filter(x=>x.ok).length+' de '+details.length+'</p><button id="retry" class="secondary">Volver a intentar con ejercicios diferentes</button> <button id="goHome" class="primary">Ir a los temas</button>';
document.getElementById('retry').onclick=startGame;document.getElementById('goHome').onclick=()=>{renderHome();show('home')};
};
function generateReport(){
if(!completed())return;
const history=getLog(),rec=getRecord(),date=new Date().toLocaleString('es-CO');
const rows=TOPICS.map((t,i)=>{const attempts=history.filter(x=>x.topic===i);const best=Number(rec.scores[i]||0);return '<tr><td>'+safe(t.title)+'</td><td>'+attempts.length+'</td><td>'+best.toFixed(1)+'</td><td>'+(best>=3?'Aprobado':'Pendiente')+'</td></tr>'}).join('');
const sections=TOPICS.map((t,i)=>{const attempts=history.filter(x=>x.topic===i);return '<section><h2>'+safe(t.title)+'</h2>'+attempts.map(a=>'<h3>Intento '+a.attempt+' · '+new Date(a.date).toLocaleString('es-CO')+' · '+a.grade.toFixed(1)+'/5.0</h3><table><thead><tr><th>Actividad / concepto</th><th>Respuesta del estudiante</th><th>Respuesta esperada</th><th>Resultado</th></tr></thead><tbody>'+a.details.map(d=>'<tr><td>'+safe(d.question)+'</td><td>'+safe(d.answer)+'</td><td>'+safe(d.correct)+'</td><td>'+(d.ok?'Correcto':'Incorrecto')+'</td></tr>').join('')+'</tbody></table>').join('')+'</section>'}).join('');
const html='<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Reporte OVA - '+safe(student.name)+'</title><style>body{font-family:Arial,sans-serif;color:#183126;margin:32px;font-size:11px;line-height:1.5}h1{color:#09843b;font-size:24px}h2{color:#09843b;font-size:16px;margin-top:26px}h3{font-size:12px}table{border-collapse:collapse;width:100%;margin:10px 0 18px}th,td{border:1px solid #b7cec0;padding:6px;text-align:left;vertical-align:top;overflow-wrap:anywhere}th{background:#e8f3ec}section{break-inside:avoid-page}tr{break-inside:avoid}small{color:#555}@media print{body{margin:14mm}h2{break-after:avoid}}</style></head><body><h1>Universidad Simón Bolívar · Reporte de actividades OVA</h1><p><b>Estudiante:</b> '+safe(student.name)+'<br><b>Fecha de generación:</b> '+safe(date)+'<br><b>OVA:</b> Sistemas Operativos</p><h2>Resumen general</h2><table><thead><tr><th>Tema</th><th>Intentos registrados</th><th>Mejor nota</th><th>Estado</th></tr></thead><tbody>'+rows+'</tbody></table><p><b>Estado general:</b> cuatro módulos aprobados (mínimo 3.0/5.0).</p><h2>Historial y detalle de respuestas</h2>'+sections+'<p><small>Este documento se genera con los datos registrados en este navegador. Los talleres PDF descargables se realizan por separado y sus respuestas no se registran automáticamente. Este reporte no constituye una certificación de identidad ni de autoría.</small></p><script>window.addEventListener("load",()=>setTimeout(()=>window.print(),400))<\/script></body></html>';
const w=window.open('','_blank');if(!w){alert('Permite las ventanas emergentes para generar el PDF.');return}w.document.open();w.document.write(html);w.document.close();
}
})();
