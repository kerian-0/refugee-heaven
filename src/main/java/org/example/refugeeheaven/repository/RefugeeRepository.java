package org.example.refugeeheaven.repository;

import org.example.refugeeheaven.dto.RefugeeDto;
import org.example.refugeeheaven.entity.Refugee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface RefugeeRepository extends JpaRepository<Refugee, Long> {

    @Query("""
        SELECT new org.example.refugeeheaven.dto.RefugeeDto(
            r.id,
            r.arrivalDate,
            r.status,
            r.bgInfo,
            r.nationality,
            r.address,
            r.gender,
            r.dateOfBirth,
            r.phone,
            r.email,
            r.age,
            r.username,
                r.camp.id
        )
        FROM Refugee r
    """)
    List<RefugeeDto> findAllList();

    @Query("""
        SELECT new org.example.refugeeheaven.dto.RefugeeDto(
            r.id,
            r.arrivalDate,
            r.status,
            r.bgInfo,
            r.nationality,
            r.address,
            r.gender,
            r.dateOfBirth,
            r.phone,
            r.email,
            r.age,
            r.username,
                r.camp.id
        )
        FROM Refugee r
        WHERE r.username = ?1
    """)
    List<RefugeeDto> findByName(String userName);

    @Query("""
        SELECT new org.example.refugeeheaven.dto.RefugeeDto(
            r.id,
            r.arrivalDate,
            r.status,
            r.bgInfo,
            r.nationality,
            r.address,
            r.gender,
            r.dateOfBirth,
            r.phone,
            r.email,
            r.age,
            r.username,
            r.camp.id
        )
        FROM Refugee r
        WHERE r.camp.campName = ?1
    """)
    List<RefugeeDto> findByCampName(String campName);
}
