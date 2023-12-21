import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Constructor } from '../components/constructor';
import { useState } from 'react'

export default function Home() {
  const [scripts, setScripts] = useState([{ id: 1, isAsync: false, isDefer: false, delay: 1}]);

  function handleAddItemClick(){
    const maxId = Math.max(...scripts.map(x => x.id));
    const newScript = { id: maxId + 1, isAsync: false, isDefer: false, delay: 0 };
    setScripts([...scripts, newScript]);
  }
  function handleTypeClick(clickedScript){
    const newScripts = scripts.map(s => {
      if(s.id === clickedScript.id){
        const newScript = {...s};
        // none -> defer -> async -> none
        if(!newScript.isDefer && !newScript.isAsync) {
          newScript.isDefer = true;
          newScript.isAsync = false;
        }
        else if(newScript.isDefer && !newScript.isAsync){
          newScript.isDefer = false;
          newScript.isAsync = true;
        } else {
          newScript.isDefer = false;
          newScript.isAsync = false;
        }
        return newScript;
      } else {
        return s;
      }
    })
    setScripts(newScripts);
  }

  function handleDalayChange(script, newDelay){
    const newScripts = scripts.map(s => {
      if(s.id === script.id){
        const newScript = {...s, delay: Number(newDelay)};
        return newScript;
      } else {
        return s;
      }
    })
    setScripts(newScripts);
  }

  function handleRunClick(){
    var iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    scripts.forEach(s => {
      let script = document.createElement('script');
      script.src = `/api/hello?id=${s.id}&delay=${s.delay}`;
      iframe.contentWindow.document.body.appendChild(script)
    })
    //iframe.contentWindow.document.open();
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Constructor 
          scripts={scripts} 
          onAddItem={handleAddItemClick} 
          onTypeClick={handleTypeClick}
          onDelayChange={handleDalayChange}></Constructor>
        <button onClick={handleRunClick}>RUN</button>
      </main>
    </>
  )
}
