var config_data = `
{
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "checkboxAs": "YN",
  "enable_google_sheets": "true",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "scouter-initials",
      "type": "scouter",
      "gsCol": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "event",
      "type": "event",
      "gsCol": "event",
      "defaultValue": "2023cada",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
      "code": "match-level",
      "type": "level",
      "gsCol": "level",
      "choices": {
        "qm": "Quals<br>",
        "de": "Double Elimination<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "match-no",
      "type": "match",
      "gsCol": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot",
      "code": "robot",
      "type": "robot",
      "gsCol": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "team-no",
      "type": "team",
      "gsCol": "team",
      "min": 1,
      "max": 99999,
      "defaultValue": 1280
    },
    { "name": "Auto Start Position",
      "code": "auto-start-pos",
      "type": "clickable_image",
      "gsCol": "autoStart",
      "filename": "2023/field_image.png",
      "clickRestriction": "one",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Auto Scoring",
      "code": "auto-scoring",
      "type": "clickable_image",
      "gsCol": "autoScore",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true"
    },
    { "name": "Crossed Cable",
      "code": "crossed-cable",
      "type": "bool",
      "gsCol": "cable"
    },
    { "name": "Crossed Charging Station",
      "code": "crossed-charge",
      "type": "bool",
      "gsCol": "charge"
    },
    { "name": "Mobility?",
      "code": "mobility",
      "type": "bool",
      "gsCol": "mobility"
    },
    { "name": "Docked",
      "code": "docked",
      "type":"radio",
      "gsCol": "docked",
      "choices": {
        "d": "Docked (not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "teleop": [
    { "name": "Cycle Timer",
      "code": "cycle-timer",
      "type": "cycle",
      "gsCol": "cycle"
    },
    { "name": "Grid Scoring",
      "code": "grid-scoring",
      "type": "clickable_image",
      "gsCol": "gridScore",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true",
      "cycleTimer": "tct"
    },
    { "name": "Feeder Count<br>(Fed another bot)",
      "code": "feeder-count",
      "type": "counter",
      "gsCol": "feeder",
      "cycleTimer": "tct"
    },
    { "name": "Was Fed<br>Game Pieces",
      "code": "was-fed",
      "type": "bool",
      "gsCol": "feeder"
    },
    { "name": "Was Defended",
      "code": "was-defended",
      "type": "bool",
      "gsCol": "defended"
    },
    { "name": "Who Defended this bot",
      "code": "defended-by",
      "type": "text",
      "gsCol": "defendedBy"
    },
    { "name": "Smart Placement<br>(creates Links)",
      "code": "smart-placement",
      "type": "bool",
      "gsCol": "smartPlacement"
    },
    { "name": "Floor Pickup",
      "code": "floor-pickup",
      "type": "radio",
      "gsCol": "floor",
      "choices": {
        "o": "Cones<br>",
        "u": "Cubes<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
    { "name": "Docking Timer",
      "code": "docking-timer",
      "type": "timer",
      "gsCol": "dockingTime"
    },
    { "name": "Final Status",
      "code": "final-status",
      "type":"radio",
      "gsCol": "finalStatus",
      "choices": {
        "p": "Parked<br>",
        "d": "Docked (Not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Total # of alliance<br>robots docked/engaged",
      "code": "total-alliance-docked-or-engaged",
      "type": "counter",
      "gsCol": "totalDocked"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "driver-skill",
      "type": "radio",
      "gsCol": "skill",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Links Scored",
      "code": "links-scored",
      "type": "counter",
      "gsCol": "links"
    },
    { "name": "Defense Rating",
      "code": "defense",
      "type": "radio",
      "gsCol": "defenseRating",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Swerve drive?",
      "code": "swerve",
      "type": "bool",
      "gsCol": "swerve"
    },
    { "name": "Speed Rating",
      "code": "speed",
      "type": "radio",
      "gsCol": "speed",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Died/Immobilized",
      "code": "died",
      "type": "bool",
      "gsCol": "died"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tipped",
      "type": "bool",
      "gsCol": "tipping"
    },
    { "name": "Dropped Cones (>2)",
      "code": "dropped-cones",
      "type": "bool",
      "gsCol": "droppedCones"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "alliance",
      "type": "bool",
      "gsCol": "alliance"
    },
    { "name": "Comments",
      "code": "comments",
      "type": "text",
      "gsCol": "comments",
      "size": 15,
      "maxSize": 50
    }
  ]
}`;
