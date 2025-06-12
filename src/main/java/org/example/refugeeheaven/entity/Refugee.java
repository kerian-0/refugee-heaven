package org.example.refugeeheaven.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
public class Refugee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String age;
    private String email;
    private String phone;
    private String dateOfBirth;
    private String gender;
    private String address;
    private String nationality;
    private String bgInfo;
    private String status;
    private LocalDate arrivalDate;
    @ManyToOne
    private Camp camp;



    public Refugee(String username, String age, String email, String phone, String dateOfBirth, String gender, String address, String nationality, String bgInfo, String status, LocalDate arrivalDate) {
        this.username = username;
        this.age = age;
        this.email = email;
        this.phone = phone;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.address = address;
        this.nationality = nationality;
        this.bgInfo = bgInfo;
        this.status = status;
        this.arrivalDate = arrivalDate;

    }

    @Override
    public String toString() {
        return "Refugee{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", age='" + age + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", dateOfBirth='" + dateOfBirth + '\'' +
                ", gender='" + gender + '\'' +
                ", address='" + address + '\'' +
                ", nationality='" + nationality + '\'' +
                ", bgInfo='" + bgInfo + '\'' +
                ", status='" + status + '\'' +
                ", arrivalDate=" + arrivalDate +
                ", camp=" + camp +
                '}';
    }
}
