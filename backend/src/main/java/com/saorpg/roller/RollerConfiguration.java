package com.saorpg.roller;

import java.util.ArrayList;
import java.util.List;
import java.util.random.RandomGenerator;

import static org.springframework.beans.factory.config.ConfigurableBeanFactory.SCOPE_PROTOTYPE;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import com.saorpg.roller.domain.DiceResult;

@Configuration
public class RollerConfiguration {
  private final String RNG_ALGORITHM = "L64X256MixRandom";

  private final RandomGenerator.SplittableGenerator sourceRandom = RandomGenerator.SplittableGenerator
      .of(RNG_ALGORITHM);

  @Bean
  @Scope(SCOPE_PROTOTYPE)
  public List<DiceResult> diceResults(int numberOfRolls) {
    RandomGenerator rng = sourceRandom.split();

    List<DiceResult> results = new ArrayList<>(numberOfRolls);

    // Don't create a stream so that we can have different bounds for each roll
    for (int i = 0; i < numberOfRolls; i++) {
      int battleDie = rng.nextInt(1, 11);
      int lootDie = rng.nextInt(1, 21);
      int craftDie = rng.nextInt(1, 13);
      int mobDie = rng.nextInt(1, 11);

      results.add(new DiceResult(battleDie, lootDie, craftDie, mobDie));
    }

    return results;
  }
}
