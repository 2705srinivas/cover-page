import React from 'react'
import { skill_data } from "./skill-data"
import sprint from "./sprint.svg"

const getRelativeBackground = (value:string) => {
    const num = Number(value);
    if(num >= 8){
        return '#228622'
    }else if(num >= 6){
        return '#2bb12b'
    }else if(num >= 4){
        return '#d2b12f'
    }else if(num >= 2){
        return '#d28c31'
    }else 
        return '#d25831'
}

export const ProgressCluster = () => {
    return(<>
        <div style={{padding: '8px 20px'}}>
            {skill_data.map(skill => (
            <div style={{textAlign:'left', marginTop:'8px'}}>
                <div>
                    {skill.logo && <img style={{width:'18px', height:'18px'}} alt='logo' src={skill.logo}/>}
                    <label style={{marginLeft: '8px'}}>{skill.name}</label>
                </div>
                <div style={{ display: 'flex', background: 'white',width:'100%', height: '10px', borderRadius:'4px'}}>
                    <div data-tip={`${skill.experience}`} style={{background: getRelativeBackground(skill.skill_level), width: `${Number(skill.skill_level)*100/10}%`, height: '100%', borderRadius:'4px'}}></div>
                    <img alt="none" style={{height: '100%', borderRadius:'4px'}} src={sprint} />
                </div>
            </div>))}
        </div>
    </>)
}