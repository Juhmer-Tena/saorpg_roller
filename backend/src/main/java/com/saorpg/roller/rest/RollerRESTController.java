package com.saorpg.roller.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.saorpg.roller.RollerService;
import com.saorpg.roller.domain.Roll;
import com.saorpg.roller.domain.RollMetadata;
import com.saorpg.roller.dto.RollRequest;

@RestController
@RequestMapping("api")
public class RollerRESTController {
  @Value("${com.saorpg.roller.versionRef}")
  private String VERSION;

  private RollerService rollerService;

  @Autowired
  public RollerRESTController(RollerService rollerService) {
    this.rollerService = rollerService;
  }

  @PostMapping(value="/roll", produces = MediaType.APPLICATION_JSON_VALUE)
  public Roll roll(@RequestBody RollRequest request) {
    if (request.postLink() == null || request.purpose() == null || request.character() == null) {
      throw new IllegalArgumentException("Post, purpose, and character must not be null");
    }
    RollMetadata metadata = new RollMetadata(VERSION, request.postLink(), request.purpose(), request.character());
    return this.rollerService.roll(metadata);
  }
}
