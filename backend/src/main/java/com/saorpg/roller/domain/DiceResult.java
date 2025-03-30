package com.saorpg.roller.domain;

import jakarta.persistence.Embeddable;

@Embeddable
public record DiceResult(int battleDie, int lootDie, int craftDie, int mobDie) {
}
