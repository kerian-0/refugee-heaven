package org.example.refugeeheaven.service;

import org.example.refugeeheaven.dto.CampDto;
import org.example.refugeeheaven.dto.RefugeeDto;
import org.example.refugeeheaven.entity.Camp;
import org.example.refugeeheaven.entity.Refugee;
import org.example.refugeeheaven.repository.CampRepository;
import org.example.refugeeheaven.repository.RefugeeRepository;
import org.example.refugeeheaven.util.EntityUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;


import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class RefugeeCampService {
    @Autowired
    private CampRepository campRepository;

    @Autowired
    private RefugeeRepository repository;
    @Autowired
    private AuthenticationManager authenticationManager;

   public String login(String username, String password) {
       var auth=new UsernamePasswordAuthenticationToken(username, password);
       Authentication authentication=authenticationManager.authenticate(auth);
       SecurityContextHolder.getContext().setAuthentication(authentication);
       return "Authenticated";
   }

    public List<RefugeeDto> getAllRefugees(){
        return repository.findAll().stream().map(EntityUtil::toRefugeeDto).toList();
    }

    public List<CampDto> getAllCamps(){
        return campRepository.findAll().stream().map(EntityUtil::toCampDto).toList();
    }


    public RefugeeDto getAllRefugeeById(Long id){
        return repository.findById(id).stream().map(EntityUtil::toRefugeeDto).findFirst().orElse(null);
    }

    public CampDto getAllCampById(Long id){
        return campRepository.findById(id).stream().map(EntityUtil::toCampDto).findFirst().orElse(null);
    }

    public String createCamp( CampDto campDto){
        Camp camp = EntityUtil.toCamp(campDto);
         campRepository.save(camp);
         return "success camp created";
    }

    public String createRefugee(RefugeeDto refugeeDto){

            // Create a Refugee entity
            Refugee refugee = new Refugee();
            refugee.setUsername(refugeeDto.getUsername());
            refugee.setAge(refugeeDto.getAge());
            refugee.setEmail(refugeeDto.getEmail());
            refugee.setPhone(refugeeDto.getPhone());
            refugee.setDateOfBirth(refugeeDto.getDateOfBirth());
            refugee.setGender(refugeeDto.getGender());
            refugee.setAddress(refugeeDto.getAddress());
            refugee.setNationality(refugeeDto.getNationality());
            refugee.setBgInfo(refugeeDto.getBgInfo());
            refugee.setStatus(refugeeDto.getStatus());
            refugee.setArrivalDate(refugeeDto.getArrivalDate());

            // ✅ Set the camp
            if (refugeeDto.getCampId() != null) {
                Camp camp = campRepository.findById(refugeeDto.getCampId())
                        .orElseThrow(() -> new RuntimeException("Camp not found with id " + refugeeDto.getCampId()));
                refugee.setCamp(camp);
            }

            Refugee saved = repository.save(refugee);

            // Return DTO (could be improved with a mapper)
            return "successfully created";
    }

    public List<RefugeeDto> findByName(String userName){
        return repository.findByName(userName);
    }

    public List<RefugeeDto> findByCampName(String campName){
        return repository.findByCampName(campName);
    }


}
