export function Constructor({scripts, addItem}){
  
  return (
    <>
      <ul>
        {scripts.map(s => {return (
          <li key={s.id}>isAsync: {s.isAsync.toString()}, isDefer: {s.isDefer.toString()}, delay: {s.delay}</li>
        )})}
      </ul>
      <div>
        <button onClick={addItem}>Add</button>
      </div>
    </>
  )
}