import { Script, ScriptType } from '@/typing';
import styles from './constructor.module.scss';

interface ConstructoryInput {
  scripts: Script[], 
  onAddItem, 
  onTypeClick, 
  onDelayChange
}

export function Constructor({scripts, onAddItem, onTypeClick, onDelayChange}: ConstructoryInput){
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

interface ScriptSnippetInput {
  script: Script, 
  onTypeClick, 
  onDelayChange
}

function ScriptSnippet({script, onTypeClick, onDelayChange}: ScriptSnippetInput){
  const typeLabel = TypeNameByType[script.type];
  return(
    <div className={styles.script}>
      <span className={styles.script__code}>&lt;script</span>
      <button className={styles.script__type} onClick={onTypeClick}>{typeLabel}</button>
      <span className={styles.script__delay}>
        delay: <input type="number" value={script.delay} onChange={(e) => onDelayChange(e.target.value)}></input>
      </span>
      <span className={styles.script__code}>&gt;&lt;/script&gt;</span>
    </div>
  )
}

var TypeNameByType = {
  [ScriptType.Defer]: 'defer',
  [ScriptType.Async]: 'async',
  [ScriptType.None]: '--',
}
