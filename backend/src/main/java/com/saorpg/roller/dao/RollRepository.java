package com.saorpg.roller.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.saorpg.roller.domain.Roll;

@Repository
public interface RollRepository extends JpaRepository<Roll, Integer> {
  List<Roll> findByMetadataPost(String post);
  
  List<Roll> findByMetadataCharacter(String character);
}
