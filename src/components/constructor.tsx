import styles from './constructor.module.scss';

export function Constructor({scripts, onAddItem, onTypeClick, onDelayChange}){
  return (
    <>
      <section>
        {scripts.map(s => (
          <ScriptSnippet 
            key={s.id} 
            script={s} 
            onTypeClick={() => onTypeClick(s)}
            onDelayChange={(val) => onDelayChange(s, val)}/>
        ))}
      </section>
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
    <div class={styles.script}>
      <span class={styles.script__code}>&lt;script</span>
      <button class={styles.script__type} onClick={onTypeClick}>{typeLabel}</button>
      <span class={styles.script__delay}>
        delay: <input type="number" value={script.delay} onChange={(e) => onDelayChange(e.target.value)}></input>
      </span>
      <span class={styles.script__code}>&gt;&lt;/script&gt;</span>
    </div>
  )
}
