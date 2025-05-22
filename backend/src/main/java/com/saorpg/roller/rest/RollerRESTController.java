package com.saorpg.roller.rest;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

import com.google.common.base.Strings;
import com.google.common.net.InternetDomainName;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.saorpg.roller.RollerService;
import com.saorpg.roller.domain.Roll;
import com.saorpg.roller.domain.RollMetadata;
import com.saorpg.roller.dto.RollRequest;

@RestController
public class RollerRESTController {
  @Value("${com.saorpg.roller.versionRef}")
  private String VERSION;

  private final String SAORPG_HOSTNAME = "sao-rpg.com";

  private RollerService rollerService;

  @Autowired
  public RollerRESTController(RollerService rollerService) {
    this.rollerService = rollerService;
  }

  @PostMapping(value = "/roll", produces = MediaType.APPLICATION_JSON_VALUE)
  public Roll roll(@RequestBody RollRequest request) {
    try {
      if (Strings.isNullOrEmpty(request.postLink()) || Strings.isNullOrEmpty(request.purpose()) || Strings.isNullOrEmpty(request.character())) {
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
            "Post, purpose, and character must not be null and/or empty");
      }
      if (!InternetDomainName.from(new URI(request.postLink()).getHost()).topPrivateDomain().toString().equals(SAORPG_HOSTNAME)) {
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
            "Post link should be from sao-rpg domain");
      }
    } catch (URISyntaxException e) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
          "Post link is not a valid URI", e);
    }
    RollMetadata metadata = new RollMetadata(VERSION, request.postLink(), request.purpose(), request.character());
    return this.rollerService.roll(metadata);
  }

  @GetMapping(value = "/roll/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
  public Roll getRollById(@PathVariable int id) {
    Optional<Roll> roll = this.rollerService.getRollById(id);
    if (!roll.isPresent()) {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Roll could not be found");
    }
    return roll.get();
  }

  @GetMapping(value = "/roll", produces = MediaType.APPLICATION_JSON_VALUE)
  public List<Roll> getRollsByFields(@RequestParam(required=false) String character, @RequestParam(required=false) String post) {
    if (character == null && post == null) {
      throw new IllegalArgumentException("Character and/or post link query parameters are not included in the request");
    }

    RollMetadata dummyMetadata = new RollMetadata(null, post, null, character);
    return this.rollerService.getRollsMatchingMetadata(dummyMetadata);
  }

  // God I wish that range headers were more properly supported by Spring
  @GetMapping(value = "/roll/last50", produces = MediaType.APPLICATION_JSON_VALUE)
  public List<Roll> getLast50Rolls() {
    return this.rollerService.getLast50Rolls();
  }
}
