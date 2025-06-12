package org.example.refugeeheaven;

import org.example.refugeeheaven.dto.RefugeeDto;
import org.example.refugeeheaven.repository.RefugeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class RefugeeHeavenApplication {


    public static void main(String[] args) {
        SpringApplication.run(RefugeeHeavenApplication.class, args);
    }

}
