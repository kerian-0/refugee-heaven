package org.example.refugeeheaven.repository;

import org.example.refugeeheaven.entity.Camp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CampRepository extends JpaRepository<Camp, Long> {

}
