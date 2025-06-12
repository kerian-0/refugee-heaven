package org.example.refugeeheaven.util;

import org.example.refugeeheaven.dto.CampDto;
import org.example.refugeeheaven.dto.RefugeeDto;
import org.example.refugeeheaven.entity.Camp;
import org.example.refugeeheaven.entity.Refugee;
import org.springframework.beans.BeanUtils;

public class EntityUtil {

    public static Refugee toRefugee(RefugeeDto refugeeDto){
        Refugee refugee=new Refugee();
        BeanUtils.copyProperties(refugeeDto,refugee);
        return refugee;
    }

    public  static RefugeeDto toRefugeeDto(Refugee refugee){
        RefugeeDto refugeeDto=new RefugeeDto();
        BeanUtils.copyProperties(refugee,refugeeDto);
        return refugeeDto;
    }

    public static Camp toCamp(CampDto campDto){
        Camp camp=new Camp();
        BeanUtils.copyProperties(campDto,camp);
        return camp;
    }

    public static CampDto toCampDto(Camp camp){
        CampDto campDto=new CampDto();
        BeanUtils.copyProperties(camp,campDto);
        return campDto;
    }
}
