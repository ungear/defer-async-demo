export function Constructor({scripts, onAddItem, onTypeClick}){
  return (
    <>
      <ul>
        {scripts.map(s => {return (
          <ScriptSnippet key={s.id} script={s} onTypeClick={() => onTypeClick(s)}/>
        )})}
      </ul>
      <div>
        <button onClick={onAddItem}>Add</button>
      </div>
    </>
  )
}

function ScriptSnippet({script, onTypeClick}){
  const typeLabel = script.isDefer
    ? "defer"
    : script.isAsync
      ? "async"
      : "--"
  return(
    <li>
      &lt;script 
      <button onClick={onTypeClick}>{typeLabel}</button>
      delay: {script.delay}&gt;
    </li>
  )
}
