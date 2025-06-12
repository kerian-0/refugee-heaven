package org.example.refugeeheaven.controller;

import org.example.refugeeheaven.dto.CampDto;
import org.example.refugeeheaven.dto.RefugeeDto;
import org.example.refugeeheaven.service.RefugeeCampService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/refugee")
public class RefugeeController {
    @Autowired
    private RefugeeCampService refugeeCampService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody String username, @RequestBody String password) {
        refugeeCampService.login(username, password);
        return ResponseEntity.ok("Login successful");
    }

    @PostMapping("/camp-created")
    public ResponseEntity<String> createCamp(@RequestBody CampDto campDto) {
       String returnString= refugeeCampService.createCamp(campDto);
        return ResponseEntity.ok().body(returnString);
    }

    @PostMapping("/ref-created")
    public ResponseEntity<String> createRefugee(@RequestBody RefugeeDto refugeeDto){
        String returnString=refugeeCampService.createRefugee(refugeeDto);
        return ResponseEntity.ok().body(returnString);
    }

    @GetMapping("/all-refugees")
    public List<RefugeeDto> getAllRefugees() {
        return refugeeCampService.getAllRefugees();

    }
    @GetMapping("/all-camps")
    public List<CampDto> getAllCamps() {
        return refugeeCampService.getAllCamps();
    }

    @GetMapping("/camp/{id}")
    public CampDto getCampById(@PathVariable("id")Long id){
        return refugeeCampService.getAllCampById(id);
    }
    @GetMapping("/ref/{id}")
    public RefugeeDto getRefugeeById(@PathVariable("id")Long id){
        return refugeeCampService.getAllRefugeeById(id);
    }
    @GetMapping("/search")
    public List<RefugeeDto> findByName(@RequestParam("username") String username){
       return refugeeCampService.findByName(username);
    }

    @GetMapping
    public List<RefugeeDto> findByCampName(@RequestParam("campName") String campName){
        return refugeeCampService.findByCampName(campName);
    }
}
