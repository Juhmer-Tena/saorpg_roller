package com.saorpg.roller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;

import com.saorpg.roller.dao.RollRepository;
import com.saorpg.roller.domain.DiceResult;
import com.saorpg.roller.domain.Roll;
import com.saorpg.roller.domain.RollMetadata;

import jakarta.transaction.Transactional;

@Service
public class RollerService {
  private final ObjectProvider<List<DiceResult>> diceRoller;
  private final RollRepository rollRepository;

  @Autowired
  public RollerService(ObjectProvider<List<DiceResult>> diceRoller, RollRepository rollRepository) {
    this.diceRoller = diceRoller;
    this.rollRepository = rollRepository;
  }

  public Roll roll(RollMetadata metadata) {
    return this.rollNTimes(1, metadata).get(0);
  }

  @Transactional
  public List<Roll> rollNTimes(int numberOfRolls, RollMetadata metadata) {
    if (numberOfRolls < 1) {
      throw new IllegalArgumentException("Cannot roll a non-positive number of times");
    }
    List<DiceResult> diceResults = this.diceRoller.getObject(numberOfRolls);
    List<Roll> rolls = diceResults.stream().map(result -> new Roll(metadata, result)).toList();
    return rollRepository.saveAll(rolls);
  }

  public Optional<Roll> getRollById(int id) {
    return rollRepository.findById(id);
  }

  public List<Roll> getRollsMatchingMetadata(RollMetadata metadata) {
    Roll dummyRoll = new Roll(metadata, null);
    ExampleMatcher matcher = ExampleMatcher.matchingAny()
        .withIgnoreNullValues();
    return rollRepository.findAll(Example.of(dummyRoll, matcher));
  }
}
