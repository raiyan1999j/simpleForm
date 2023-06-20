import React,{useState} from 'react';
import OrginalFormate from './OrginalFormate';
import EditFormate from './EditFormate';

function DataContainer({docs,keys,editInfo,removeInfo}){
    const [condition,setCondition] = useState(true);

    const handler=(value)=>{
        setCondition(value)
    }
    return(
        <>
            {
                condition?
                <OrginalFormate 
                docs={docs} 
                keys={keys} 
                handler={(value)=>{handler(value)}}
                infoRemove={(value)=>{removeInfo(value)}} />:
                <EditFormate 
                docs={docs}
                keys={keys}
                handler={(value)=>{handler(value)}}
                infoEdit={(id,value,infoID)=>{editInfo(id,value,infoID)}}
                />
            }
        </>
    )
}
export default DataContainer;