```javascript
const tarefasTerminadas = tarefas.filter((terminadas)=>{

   return terminadas.status === "done"
 }).map((terminadas)=>{
      return terminadas.titulo
 }
  console.log(tarefasTerminadas)

```
