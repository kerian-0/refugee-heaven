package org.example.refugeeheaven.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
public class RefugeeDto {

     Long id;
     String username;
     String age;
     String email;
     String phone;
     String dateOfBirth;
     String gender;
     String address;
     String nationality;
     String bgInfo;
     String status;
     LocalDate arrivalDate;
     Long campId;

     public RefugeeDto(Long id, LocalDate arrivalDate, String status, String bgInfo, String nationality, String address, String gender, String dateOfBirth, String phone, String email, String age, String username, Long campId) {
         this.id = id;
          this.arrivalDate = arrivalDate;
          this.status = status;
          this.bgInfo = bgInfo;
          this.nationality = nationality;
          this.address = address;
          this.gender = gender;
          this.dateOfBirth = dateOfBirth;
          this.phone = phone;
          this.email = email;
          this.age = age;
          this.username = username;
          this.campId = campId;
     }
}
