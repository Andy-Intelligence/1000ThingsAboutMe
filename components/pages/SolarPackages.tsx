import React from 'react'
import SolarPackageCard from '../cards/SolarPackageCard'







const SolarPackages = () => {




  interface MyObject {
    id?:number;
    power?:string, 
    batteryType?:string, 
    amount?:number, 
    components?:string[], 
    loads?:string[],
}

const obj:MyObject[] = [
{
    id:1,
    power:"1.2kva", 
    batteryType:'With Deep Cycle Battery', 
    amount:707000, 
    components:["1.2kva Inverter", "1 Battery", "2 Monocrystalline panels", "Electric cables", "mppt charge controller & installation"], 
    loads:["3 fans", "1 television", "10 bulbs"],
    
},
{
    id:2,
    power:"2.2KVA", 
    batteryType:'With Lithium Battery', 
    amount:1237000, 
    components:["2.2kva Inverter", "2 batteries", "4 Monocrystalline panels", "Rack", "Electric cables", "mppt charge controller & installation"], 
    loads:["4 fans", "2 television", "15 bulbs", "1 fridge/freezer & Electric Blender."],
    
},
{
    id:3,
    power:"2.5KVA", 
    batteryType:'With Deep Cycle Battery', 
    amount:1465000, 
    components:["2.5kva Inverter", "2 batteries", "4 Monocrystalline panels", "Rack", "Electric cables", "mppt charge controller & installation"], 
    loads:["5 fans", "2 television", "25 bulbs", "1 fridge/freezer", "& Electric Blender."],
    
},
{
    id:4,
    power:"2.5KVA", 
    batteryType:'With Lithium Battery', 
    amount:2095000, 
    components:["2.5kva Inverter", "5KWH Lithium Battery", "4 Monocrystalline panels", "Electric cables", "mppt charge controller & installation."], 
    loads:["5 fans", "2 television", "25 bulbs", "1 standard fridge/freezer", "Electric Blender."],
    
},
{
    id:5,
    power:"3.5KVA", 
    batteryType:'With Deep Cycle Battery', 
    amount:2585000, 
    components:["3.5kva Inverter", "4 batteries", "9 Monocrystalline panels", "Rack", "Electric cables", "mppt charge controller & installation."], 
    loads:["6 fans", "3 television", "30 bulbs", "1 standard fridge & freezer", "Washing machine, & Electric Blender."],
    
},
{
    id:6,
    power:"3.5KVA", 
    batteryType:'With Lithium Battery', 
    amount:3745000, 
    components:["3.5kva Inverter", "(2x)5KWH Lithium battery", "9 Monocrystalline panels", "Rack, Electric cables", "mppt charge controller & installation"], 
    loads:["6 fans", "3 television", "30 bulbs", "1 standard fridge" , "1 freezer", "Washing machine, & Electric Blender."],
    
},
{
    id:7,
    power:"5KVA", 
    batteryType:'With Deep Cycle Battery', 
    amount:3215000, 
    components:["5kva Inverter","4 Batteries", "12 Monocrystalline panels", "Electric cables", "mppt charge controller & installation."], 
    loads:["6 fans", "4 television", "35 bulbs", "1 standard fridge & freezer", "Washing machine", "1 h.p A.C & Electric Blender."],
    
},
{
    id:8,
    power:"5KVA", 
    batteryType:'With Lithium battery', 
    amount:4195000, 
    components:["5kva v Inverter", "10KWH Lithium battery", "12 Monocrystalline panels", "Rack, Electric cables", "mppt charge controller & installation."], 
    loads:["6 fans", "4 television", "35 bulbs", "1 standard fridge & freezer", "Washing machine", "1 h.p A.C & Electric Blender."],
    
},
{
    id:9,
    power:"7.5KVA", 
    batteryType:'With Deep Cycle Battery', 
    amount:4715000, 
    components:["7.5kva Inverter", "8 batteries", "16 Monocrystalline panels", "Rack, Electric cables", "mppt charge controller & installation"], 
    loads:["8 fans", "5 television", "40 bulbs", "1 fridge" , "1 standard freezer", "Washing machine", "Pump machine", "1.5 H.P A.C", "Microwave & Electric Blender."],
    
},
{
    id:10,
    power:"7.5KVA", 
    batteryType:'With Lithium battery', 
    amount:6735000, 
    components:["7.5kva Inverter", "(2x)10KWH of Lithium battery", "16 Monocrystalline panels", "Rack, Electric cables", "mppt charge controller & installation"], 
    loads:["8 fans", "5 television", "40 bulbs", "1 fridge" , "1 standard freezer", "Washing machine", "Pump machine", "1.5 H.P A.C", "Microwave & Electric Blender."],
    
},
{
    id:11,
    power:"10KVA", 
    batteryType:'With Deep Cycle Battery', 
    amount:5285000, 
    components:["10kva Inverter", "8 batteries", "18 Monocrystalline panels", "Rack", "Electric cables", "mppt charge controller & installation"], 
    loads:["10 fans", "6 television", "50 bulbs", "2 standard fridge" , "1 freezer", "Washing machine", "Pump machine", "two 1.5 H.P A.C", "Microwave & Electric Blender."],
    
},
{
    id:12,
    power:"10KVA", 
    batteryType:'With Lithium battery', 
    amount:8765000, 
    components:["10kva Inverter", "(2x)15kwh Lithium battery", "20 Monocrystalline panels", "Rack", "Electric cables", "mppt charge controller & installation"], 
    loads:["10 fans", "6 television", "60 bulbs", "2 standard fridges", "2 freezers", "Washing machine", "Pump machine", "two 2 H.P A.C", "Microwave & Electric Blender."],
    
},


]















  return (
    <div className='w-[90%] flex flex-col items-center space-y-4'>
      {obj.map((item)=>{
        return <SolarPackageCard power ={item.power} batteryType={item.batteryType} amount={item.amount} components={item.components} loads={item.loads}/>
      })} 
    </div>
  )
}

export default SolarPackages