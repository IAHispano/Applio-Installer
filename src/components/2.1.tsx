import { useState, useEffect } from 'react';
import { invoke } from '@tauri-apps/api/core';

function Download() {
  const [output, setOutput] = useState<string | null>(null); 
  const [folderPath, setFolderPath] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const appDataDirPath = await invoke("get_current_dir");
        setFolderPath(appDataDirPath as string);
        const response = await invoke("download", {location: appDataDirPath});
        setOutput(response as string); 
      } catch (error) {
        console.error("Error calling the command:", error);
      }
    }
    fetchData();
  }, []);
  

  return (
    <div className='z-50 p-8'>
      <div className='flex justify-center items-center z-50 '>
      <p className='text-center text-neutral-300 text-wrap z-50 text-sm max-w-xl'>Applio will be downloaded at <span className='select-all text-white z-50'>{folderPath}</span></p>
      </div>
      <p className='text-xs p-4'>{output}</p>
    </div>
  );
}

export default Download;
