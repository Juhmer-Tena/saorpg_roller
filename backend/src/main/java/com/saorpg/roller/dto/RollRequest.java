package com.saorpg.roller.dto;

public record RollRequest(String postLink, String purpose, String character, Integer numberOfRolls) {
}
