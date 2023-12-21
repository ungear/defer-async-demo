export function Constructor({scripts, onAddItem, onTypeClick, onDelayChange}){
  return (
    <>
      <ul>
        {scripts.map(s => (
          <ScriptSnippet 
            key={s.id} 
            script={s} 
            onTypeClick={() => onTypeClick(s)}
            onDelayChange={(val) => onDelayChange(s, val)}/>
        ))}
      </ul>
      <div>
        <button onClick={onAddItem}>Add</button>
      </div>
    </>
  )
}

function ScriptSnippet({script, onTypeClick, onDelayChange}){
  const typeLabel = script.isDefer
    ? "defer"
    : script.isAsync
      ? "async"
      : "--"
  return(
    <li>
      &lt;script 
      <button onClick={onTypeClick}>{typeLabel}</button>
      delay: <input type="number" value={script.delay} onChange={(e) => onDelayChange(e.target.value)}></input>&gt;
    </li>
  )
}
