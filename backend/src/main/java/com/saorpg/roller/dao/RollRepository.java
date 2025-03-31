package com.saorpg.roller.dao;

import java.util.List;

import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.saorpg.roller.domain.Roll;
import com.saorpg.roller.domain.RollMetadata;

@Repository
public interface RollRepository extends JpaRepository<Roll, Integer> {
  List<Roll> findAllByMetadata(Example<RollMetadata> metadata);
}
