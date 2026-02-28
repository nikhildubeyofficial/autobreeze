import React from "react";
import { profileSectionNames } from "../../utility";

const ProfileButtonSection = ({handleChangeSection,sectionName}) => {
  return (
    <div className="col-12">
        {
            profileSectionNames.map((item)=>{
               return <button className={`btn py-2 btn${sectionName===item.value?"":"-outline"}-dark me-2 btn-sm px-3 btn-md-lg px-md-5`} onClick={()=>handleChangeSection(item.value)}>{item.name}</button>
            })
        }
      
    </div>
  );
};

export default ProfileButtonSection;
