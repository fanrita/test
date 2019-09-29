Feature: Tile

  I want to see name, city, image on tile

Scenario: should verify tile name, city, image
    Given Application page was opened
    Then Should see name "emma stewart" on "emma" tile
    And Should see city "worcester" on "emma" tile
    And Should see photo on "emma" tile
