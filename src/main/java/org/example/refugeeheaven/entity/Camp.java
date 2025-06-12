package org.example.refugeeheaven.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Camp {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String campName;
    private Long capacity;
    private String manager;
    private String city;
    private String state;
    private String country;
    private String postalCode;
    @OneToMany(mappedBy = "camp",cascade = CascadeType.PERSIST)
    private List<Refugee> refugees=new ArrayList<>();

    public Camp(Long id,String campName, Long capacity, String manager, String city, String state, String country, String postalCode) {
       this.id = id;
        this.campName = campName;
        this.capacity = capacity;
        this.manager = manager;
        this.city = city;
        this.state = state;
        this.country = country;
        this.postalCode = postalCode;
    }

    @Override
    public String toString() {
        return "Camp{" +
                "id=" + id +
                ", campName='" + campName + '\'' +
                ", capacity=" + capacity +
                ", manager='" + manager + '\'' +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", country='" + country + '\'' +
                ", postalCode='" + postalCode + '\'' +
                ", refugees=" + refugees +
                '}';
    }
}
