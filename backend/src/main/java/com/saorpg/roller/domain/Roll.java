package com.saorpg.roller.domain;

import java.time.Instant;

import org.hibernate.annotations.Generated;

import jakarta.persistence.AttributeOverride;
import jakarta.persistence.AttributeOverrides;
import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(schema = "sao_roller", name = "rolls")
public class Roll {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  @Generated
  @Column(nullable = false, insertable = false, updatable = false)
  private Instant timestamp;

  @Embedded
  private RollMetadata metadata;

  @Embedded
  @AttributeOverrides({
      @AttributeOverride(name = "battleDie", column = @Column(name = "battle")),
      @AttributeOverride(name = "lootDie", column = @Column(name = "loot")),
      @AttributeOverride(name = "craftDie", column = @Column(name = "craft")),
      @AttributeOverride(name = "mobDie", column = @Column(name = "mob"))
  })
  private DiceResult diceResult;

  public Roll() {}

  public Roll(RollMetadata metadata, DiceResult diceResult) {
    this.metadata = metadata;
    this.diceResult = diceResult;
  }

  public int getId() {
    return this.id;
  }

  public String getVersion() {
    return this.metadata.version();
  }

  public String getPost() {
    return this.metadata.post();
  }

  public Instant getTimestamp() {
    return timestamp;
  }

  public String getPurpose() {
    return this.metadata.purpose();
  }

  public String getCharacter() {
    return this.metadata.character();
  }

  public int getBattleDie() {
    return this.diceResult.battleDie();
  }

  public int getMobDie() {
    return this.diceResult.mobDie();
  }

  public int getLootDie() {
    return this.diceResult.lootDie();
  }

  public int getCraftDie() {
    return this.diceResult.craftDie();
  }
}
