var config_data = `
{
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "checkboxAs": "YN",
  "enable_google_sheets": "true",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "gsCol": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "gsCol": "event",
      "defaultValue": "2023isde2",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
      "code": "l",
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
      "code": "m",
      "type": "match",
      "gsCol": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
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
      "code": "t",
      "type": "team",
      "gsCol": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "clickable_image",
      "gsCol": "autoStart",
      "filename": "2023/field_image.png",
      "clickRestriction": "one",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Auto Scoring",
      "code": "asg",
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
      "code": "acc",
      "type": "bool",
      "gsCol": "cable"
    },
    { "name": "Crossed Charging Station",
      "code": "acs",
      "type": "bool",
      "gsCol": "charge"
    },
    { "name": "Mobility?",
      "code": "am",
      "type": "bool",
      "gsCol": "mobility"
    },
    { "name": "Docked",
      "code": "ad",
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
      "code": "tct",
      "type": "cycle",
      "gsCol": "cycle"
    },
    { "name": "Grid Scoring",
      "code": "tsg",
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
      "code": "tfc",
      "type": "counter",
      "gsCol": "feeder",
      "cycleTimer": "tct"
    },
    { "name": "Was Fed<br>Game Pieces",
      "code": "wf",
      "type": "bool",
      "gsCol": "feeder"
    },
    { "name": "Was Defended",
      "code": "wd",
      "type": "bool",
      "gsCol": "defended"
    },
    { "name": "Who Defended this bot",
      "code": "who",
      "type": "text",
      "gsCol": "defendedBy"
    },
    { "name": "Smart Placement<br>(creates Links)",
      "code": "lnk",
      "type": "bool",
      "gsCol": "smartPlacement"
    },
    { "name": "Floor Pickup",
      "code": "fpu",
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
      "code": "dt",
      "type": "timer",
      "gsCol": "dockingTime"
    },
    { "name": "Final Status",
      "code": "fs",
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
      "code": "dn",
      "type": "counter",
      "gsCol": "totalDocked"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
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
      "code": "ls",
      "type": "counter",
      "gsCol": "links"
    },
    { "name": "Defense Rating",
      "code": "dr",
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
      "code": "sd",
      "type": "bool",
      "gsCol": "swerve"
    },
    { "name": "Speed Rating",
      "code": "sr",
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
      "code": "die",
      "type": "bool",
      "gsCol": "died"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool",
      "gsCol": "tipping"
    },
    { "name": "Dropped Cones (>2)",
      "code": "dc",
      "type": "bool",
      "gsCol": "droppedCones"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool",
      "gsCol": "alliance"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "gsCol": "comments",
      "size": 15,
      "maxSize": 50
    }
  ]
}`;
