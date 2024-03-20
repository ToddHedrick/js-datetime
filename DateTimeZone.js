/**
 * @author Todd Hedrick
 * 
 */
class DateTimeZone {
 
  constructor(new_timezone = null) {
    this._users_current_language = navigator.language;
    this._users_original_timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    this._current_timezone = new_timezone || this._users_original_timezone;
    this._current_timezone_def = this.getTimeZoneDef(this._current_timezone);
  }

  doesTimeZoneHaveDST(){
    if(this._current_timezone_def){
      return this._current_timezone_def.has_dst;
    }
    return false;
  }

  getAbbreviation(dateObj){
    let offset = String(-1 * dateObj.getTimezoneOffset());
    if(this._current_timezone_def){
      for(let abbr in this._current_timezone_def.abbreviations){
        if(this._current_timezone_def.abbreviations[abbr].offset === offset){
          return abbr;
        }
      }
    }
    
    let timezone_code = String(dateObj.toLocaleTimeString(this._users_current_language, {timeZoneName: "short"}).split(" ")[2]);
    if (offset === "0") {
      timezone_code = "UTC";
    }
    
    return timezone_code;
  }

  getOffest(dateObj){}

  getTimeZoneDef(timezone = null) {
    if(timezone !== null){
      let timezone_defs = this._getTimeZoneDefs();
      if(timezone_defs.hasOwnProperty(timezone)){
        return timezone_defs[timezone];
      }
      return {};
    }
    
    return this._current_timezone_def;
  }
  
  _getTimeZoneDefs() {
    return {
  "Africa\/Abidjan": {
    "region": "Africa",
    "timezone": "Africa\/Abidjan",
    "has_dst": false,
    "location": {
      "country_code": "CI",
      "latitude": 5.316659999999999,
      "longitude": -4.03334000000001,
      "comments": ""
    },
    "abbreviations": {
      "GMT": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Africa\/Accra": {
    "region": "Africa",
    "timezone": "Africa\/Accra",
    "has_dst": false,
    "location": {
      "country_code": "GH",
      "latitude": 5.549999999999997,
      "longitude": -0.21666999999999348,
      "comments": ""
    },
    "abbreviations": {
      "GMT": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Africa\/Addis_Ababa": {
    "region": "Africa",
    "timezone": "Africa\/Addis_Ababa",
    "has_dst": false,
    "location": {
      "country_code": "ET",
      "latitude": 9.033330000000007,
      "longitude": 38.69999999999999,
      "comments": ""
    },
    "abbreviations": {
      "EAT": {
        "dst": false,
        "offset": 10800
      }
    }
  },
  "Africa\/Algiers": {
    "region": "Africa",
    "timezone": "Africa\/Algiers",
    "has_dst": true,
    "location": {
      "country_code": "DZ",
      "latitude": 36.78333000000001,
      "longitude": 3.0500000000000114,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      },
      "PMT": {
        "dst": false,
        "offset": 561
      },
      "WEST": {
        "dst": true,
        "offset": 3600
      },
      "WET": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Africa\/Asmara": {
    "region": "Africa",
    "timezone": "Africa\/Asmara",
    "has_dst": false,
    "location": {
      "country_code": "ER",
      "latitude": 15.333330000000004,
      "longitude": 38.88333,
      "comments": ""
    },
    "abbreviations": {
      "EAT": {
        "dst": false,
        "offset": 10800
      }
    }
  },
  "Africa\/Bamako": {
    "region": "Africa",
    "timezone": "Africa\/Bamako",
    "has_dst": false,
    "location": {
      "country_code": "ML",
      "latitude": 12.650000000000006,
      "longitude": -8,
      "comments": ""
    },
    "abbreviations": {
      "GMT": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Africa\/Bangui": {
    "region": "Africa",
    "timezone": "Africa\/Bangui",
    "has_dst": false,
    "location": {
      "country_code": "CF",
      "latitude": 4.366659999999996,
      "longitude": 18.58332999999999,
      "comments": ""
    },
    "abbreviations": {
      "WAT": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Africa\/Banjul": {
    "region": "Africa",
    "timezone": "Africa\/Banjul",
    "has_dst": false,
    "location": {
      "country_code": "GM",
      "latitude": 13.466660000000005,
      "longitude": -16.650000000000006,
      "comments": ""
    },
    "abbreviations": {
      "GMT": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Africa\/Bissau": {
    "region": "Africa",
    "timezone": "Africa\/Bissau",
    "has_dst": false,
    "location": {
      "country_code": "GW",
      "latitude": 11.849999999999994,
      "longitude": -15.583339999999993,
      "comments": ""
    },
    "abbreviations": {
      "GMT": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Africa\/Blantyre": {
    "region": "Africa",
    "timezone": "Africa\/Blantyre",
    "has_dst": false,
    "location": {
      "country_code": "MW",
      "latitude": -15.783339999999995,
      "longitude": 35,
      "comments": ""
    },
    "abbreviations": {
      "CAT": {
        "dst": false,
        "offset": 7200
      }
    }
  },
  "Africa\/Brazzaville": {
    "region": "Africa",
    "timezone": "Africa\/Brazzaville",
    "has_dst": false,
    "location": {
      "country_code": "CG",
      "latitude": -4.266670000000005,
      "longitude": 15.283330000000007,
      "comments": ""
    },
    "abbreviations": {
      "WAT": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Africa\/Bujumbura": {
    "region": "Africa",
    "timezone": "Africa\/Bujumbura",
    "has_dst": false,
    "location": {
      "country_code": "BI",
      "latitude": -3.383340000000004,
      "longitude": 29.366659999999996,
      "comments": ""
    },
    "abbreviations": {
      "CAT": {
        "dst": false,
        "offset": 7200
      }
    }
  },
  "Africa\/Cairo": {
    "region": "Africa",
    "timezone": "Africa\/Cairo",
    "has_dst": true,
    "location": {
      "country_code": "EG",
      "latitude": 30.049999999999997,
      "longitude": 31.25,
      "comments": ""
    },
    "abbreviations": {
      "EEST": {
        "dst": true,
        "offset": 10800
      },
      "EET": {
        "dst": false,
        "offset": 7200
      }
    }
  },
  "Africa\/Casablanca": {
    "region": "Africa",
    "timezone": "Africa\/Casablanca",
    "has_dst": false,
    "location": {
      "country_code": "MA",
      "latitude": 33.650000000000006,
      "longitude": -7.583339999999993,
      "comments": ""
    },
    "abbreviations": {
      "UTC+00": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Africa\/Ceuta": {
    "region": "Africa",
    "timezone": "Africa\/Ceuta",
    "has_dst": true,
    "location": {
      "country_code": "ES",
      "latitude": 35.88333,
      "longitude": -5.316669999999988,
      "comments": "Ceuta, Melilla"
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      },
      "WEST": {
        "dst": true,
        "offset": 3600
      },
      "WET": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Africa\/Conakry": {
    "region": "Africa",
    "timezone": "Africa\/Conakry",
    "has_dst": false,
    "location": {
      "country_code": "GN",
      "latitude": 9.516660000000002,
      "longitude": -13.716669999999993,
      "comments": ""
    },
    "abbreviations": {
      "GMT": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Africa\/Dakar": {
    "region": "Africa",
    "timezone": "Africa\/Dakar",
    "has_dst": false,
    "location": {
      "country_code": "SN",
      "latitude": 14.666659999999993,
      "longitude": -17.433339999999987,
      "comments": ""
    },
    "abbreviations": {
      "GMT": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Africa\/Dar_es_Salaam": {
    "region": "Africa",
    "timezone": "Africa\/Dar_es_Salaam",
    "has_dst": false,
    "location": {
      "country_code": "TZ",
      "latitude": -6.799999999999997,
      "longitude": 39.28333000000001,
      "comments": ""
    },
    "abbreviations": {
      "EAT": {
        "dst": false,
        "offset": 10800
      }
    }
  },
  "Africa\/Djibouti": {
    "region": "Africa",
    "timezone": "Africa\/Djibouti",
    "has_dst": false,
    "location": {
      "country_code": "DJ",
      "latitude": 11.599999999999994,
      "longitude": 43.150000000000006,
      "comments": ""
    },
    "abbreviations": {
      "EAT": {
        "dst": false,
        "offset": 10800
      }
    }
  },
  "Africa\/Douala": {
    "region": "Africa",
    "timezone": "Africa\/Douala",
    "has_dst": false,
    "location": {
      "country_code": "CM",
      "latitude": 4.049999999999997,
      "longitude": 9.699999999999989,
      "comments": ""
    },
    "abbreviations": {
      "WAT": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Africa\/El_Aaiun": {
    "region": "Africa",
    "timezone": "Africa\/El_Aaiun",
    "has_dst": false,
    "location": {
      "country_code": "EH",
      "latitude": 27.150000000000006,
      "longitude": -13.199999999999989,
      "comments": ""
    },
    "abbreviations": {
      "UTC+00": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Africa\/Freetown": {
    "region": "Africa",
    "timezone": "Africa\/Freetown",
    "has_dst": false,
    "location": {
      "country_code": "SL",
      "latitude": 8.5,
      "longitude": -13.25,
      "comments": ""
    },
    "abbreviations": {
      "GMT": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Africa\/Gaborone": {
    "region": "Africa",
    "timezone": "Africa\/Gaborone",
    "has_dst": false,
    "location": {
      "country_code": "BW",
      "latitude": -24.650009999999995,
      "longitude": 25.916660000000007,
      "comments": ""
    },
    "abbreviations": {
      "CAT": {
        "dst": false,
        "offset": 7200
      }
    }
  },
  "Africa\/Harare": {
    "region": "Africa",
    "timezone": "Africa\/Harare",
    "has_dst": false,
    "location": {
      "country_code": "ZW",
      "latitude": -17.833340000000007,
      "longitude": 31.05000000000001,
      "comments": ""
    },
    "abbreviations": {
      "CAT": {
        "dst": false,
        "offset": 7200
      }
    }
  },
  "Africa\/Johannesburg": {
    "region": "Africa",
    "timezone": "Africa\/Johannesburg",
    "has_dst": true,
    "location": {
      "country_code": "ZA",
      "latitude": -26.25,
      "longitude": 28,
      "comments": ""
    },
    "abbreviations": {
      "SAST": {
        "dst": false,
        "offset": 5400
      }
    }
  },
  "Africa\/Juba": {
    "region": "Africa",
    "timezone": "Africa\/Juba",
    "has_dst": true,
    "location": {
      "country_code": "SS",
      "latitude": 4.849999999999994,
      "longitude": 31.616659999999996,
      "comments": ""
    },
    "abbreviations": {
      "CAST": {
        "dst": true,
        "offset": 10800
      },
      "CAT": {
        "dst": false,
        "offset": 7200
      },
      "EAT": {
        "dst": false,
        "offset": 10800
      }
    }
  },
  "Africa\/Kampala": {
    "region": "Africa",
    "timezone": "Africa\/Kampala",
    "has_dst": false,
    "location": {
      "country_code": "UG",
      "latitude": 0.31665999999999883,
      "longitude": 32.41666000000001,
      "comments": ""
    },
    "abbreviations": {
      "EAT": {
        "dst": false,
        "offset": 10800
      }
    }
  },
  "Africa\/Khartoum": {
    "region": "Africa",
    "timezone": "Africa\/Khartoum",
    "has_dst": true,
    "location": {
      "country_code": "SD",
      "latitude": 15.599999999999994,
      "longitude": 32.53333000000001,
      "comments": ""
    },
    "abbreviations": {
      "CAST": {
        "dst": true,
        "offset": 10800
      },
      "CAT": {
        "dst": false,
        "offset": 7200
      },
      "EAT": {
        "dst": false,
        "offset": 10800
      }
    }
  },
  "Africa\/Kigali": {
    "region": "Africa",
    "timezone": "Africa\/Kigali",
    "has_dst": false,
    "location": {
      "country_code": "RW",
      "latitude": -1.9500000000000028,
      "longitude": 30.066660000000013,
      "comments": ""
    },
    "abbreviations": {
      "CAT": {
        "dst": false,
        "offset": 7200
      }
    }
  },
  "Africa\/Kinshasa": {
    "region": "Africa",
    "timezone": "Africa\/Kinshasa",
    "has_dst": false,
    "location": {
      "country_code": "CD",
      "latitude": -4.299999999999997,
      "longitude": 15.300000000000011,
      "comments": "Dem. Rep. of Congo (west)"
    },
    "abbreviations": {
      "WAT": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Africa\/Lagos": {
    "region": "Africa",
    "timezone": "Africa\/Lagos",
    "has_dst": false,
    "location": {
      "country_code": "NG",
      "latitude": 6.450000000000003,
      "longitude": 3.4000000000000057,
      "comments": ""
    },
    "abbreviations": {
      "WAT": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Africa\/Libreville": {
    "region": "Africa",
    "timezone": "Africa\/Libreville",
    "has_dst": false,
    "location": {
      "country_code": "GA",
      "latitude": 0.38333000000000084,
      "longitude": 9.449999999999989,
      "comments": ""
    },
    "abbreviations": {
      "WAT": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Africa\/Lome": {
    "region": "Africa",
    "timezone": "Africa\/Lome",
    "has_dst": false,
    "location": {
      "country_code": "TG",
      "latitude": 6.133330000000001,
      "longitude": 1.2166599999999903,
      "comments": ""
    },
    "abbreviations": {
      "GMT": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Africa\/Luanda": {
    "region": "Africa",
    "timezone": "Africa\/Luanda",
    "has_dst": false,
    "location": {
      "country_code": "AO",
      "latitude": -8.799999999999997,
      "longitude": 13.233329999999995,
      "comments": ""
    },
    "abbreviations": {
      "WAT": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Africa\/Lubumbashi": {
    "region": "Africa",
    "timezone": "Africa\/Lubumbashi",
    "has_dst": false,
    "location": {
      "country_code": "CD",
      "latitude": -11.666669999999996,
      "longitude": 27.46665999999999,
      "comments": "Dem. Rep. of Congo (east)"
    },
    "abbreviations": {
      "CAT": {
        "dst": false,
        "offset": 7200
      }
    }
  },
  "Africa\/Lusaka": {
    "region": "Africa",
    "timezone": "Africa\/Lusaka",
    "has_dst": false,
    "location": {
      "country_code": "ZM",
      "latitude": -15.416669999999996,
      "longitude": 28.283330000000007,
      "comments": ""
    },
    "abbreviations": {
      "CAT": {
        "dst": false,
        "offset": 7200
      }
    }
  },
  "Africa\/Malabo": {
    "region": "Africa",
    "timezone": "Africa\/Malabo",
    "has_dst": false,
    "location": {
      "country_code": "GQ",
      "latitude": 3.75,
      "longitude": 8.783330000000007,
      "comments": ""
    },
    "abbreviations": {
      "WAT": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Africa\/Maputo": {
    "region": "Africa",
    "timezone": "Africa\/Maputo",
    "has_dst": false,
    "location": {
      "country_code": "MZ",
      "latitude": -25.966669999999993,
      "longitude": 32.58332999999999,
      "comments": ""
    },
    "abbreviations": {
      "CAT": {
        "dst": false,
        "offset": 7200
      }
    }
  },
  "Africa\/Maseru": {
    "region": "Africa",
    "timezone": "Africa\/Maseru",
    "has_dst": true,
    "location": {
      "country_code": "LS",
      "latitude": -29.46667,
      "longitude": 27.5,
      "comments": ""
    },
    "abbreviations": {
      "SAST": {
        "dst": false,
        "offset": 7200
      }
    }
  },
  "Africa\/Mbabane": {
    "region": "Africa",
    "timezone": "Africa\/Mbabane",
    "has_dst": true,
    "location": {
      "country_code": "SZ",
      "latitude": -26.299999999999997,
      "longitude": 31.099999999999994,
      "comments": ""
    },
    "abbreviations": {
      "SAST": {
        "dst": false,
        "offset": 7200
      }
    }
  },
  "Africa\/Mogadishu": {
    "region": "Africa",
    "timezone": "Africa\/Mogadishu",
    "has_dst": false,
    "location": {
      "country_code": "SO",
      "latitude": 2.066659999999999,
      "longitude": 45.366659999999996,
      "comments": ""
    },
    "abbreviations": {
      "EAT": {
        "dst": false,
        "offset": 10800
      }
    }
  },
  "Africa\/Monrovia": {
    "region": "Africa",
    "timezone": "Africa\/Monrovia",
    "has_dst": false,
    "location": {
      "country_code": "LR",
      "latitude": 6.299999999999997,
      "longitude": -10.78334000000001,
      "comments": ""
    },
    "abbreviations": {
      "GMT": {
        "dst": false,
        "offset": 0
      },
      "MMT": {
        "dst": false,
        "offset": -2670
      }
    }
  },
  "Africa\/Nairobi": {
    "region": "Africa",
    "timezone": "Africa\/Nairobi",
    "has_dst": false,
    "location": {
      "country_code": "KE",
      "latitude": -1.2833399999999955,
      "longitude": 36.81666000000001,
      "comments": ""
    },
    "abbreviations": {
      "EAT": {
        "dst": false,
        "offset": 10800
      }
    }
  },
  "Africa\/Ndjamena": {
    "region": "Africa",
    "timezone": "Africa\/Ndjamena",
    "has_dst": true,
    "location": {
      "country_code": "TD",
      "latitude": 12.116659999999996,
      "longitude": 15.050000000000011,
      "comments": ""
    },
    "abbreviations": {
      "WAST": {
        "dst": true,
        "offset": 7200
      },
      "WAT": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Africa\/Niamey": {
    "region": "Africa",
    "timezone": "Africa\/Niamey",
    "has_dst": false,
    "location": {
      "country_code": "NE",
      "latitude": 13.516660000000002,
      "longitude": 2.116659999999996,
      "comments": ""
    },
    "abbreviations": {
      "WAT": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Africa\/Nouakchott": {
    "region": "Africa",
    "timezone": "Africa\/Nouakchott",
    "has_dst": false,
    "location": {
      "country_code": "MR",
      "latitude": 18.099999999999994,
      "longitude": -15.949999999999989,
      "comments": ""
    },
    "abbreviations": {
      "GMT": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Africa\/Ouagadougou": {
    "region": "Africa",
    "timezone": "Africa\/Ouagadougou",
    "has_dst": false,
    "location": {
      "country_code": "BF",
      "latitude": 12.366659999999996,
      "longitude": -1.5166700000000048,
      "comments": ""
    },
    "abbreviations": {
      "GMT": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Africa\/Porto-Novo": {
    "region": "Africa",
    "timezone": "Africa\/Porto-Novo",
    "has_dst": false,
    "location": {
      "country_code": "BJ",
      "latitude": 6.483329999999995,
      "longitude": 2.616659999999996,
      "comments": ""
    },
    "abbreviations": {
      "WAT": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Africa\/Sao_Tome": {
    "region": "Africa",
    "timezone": "Africa\/Sao_Tome",
    "has_dst": false,
    "location": {
      "country_code": "ST",
      "latitude": 0.3333300000000037,
      "longitude": 6.733329999999995,
      "comments": ""
    },
    "abbreviations": {
      "GMT": {
        "dst": false,
        "offset": 0
      },
      "WAT": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Africa\/Tripoli": {
    "region": "Africa",
    "timezone": "Africa\/Tripoli",
    "has_dst": true,
    "location": {
      "country_code": "LY",
      "latitude": 32.900000000000006,
      "longitude": 13.183330000000012,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      },
      "EET": {
        "dst": false,
        "offset": 7200
      }
    }
  },
  "Africa\/Tunis": {
    "region": "Africa",
    "timezone": "Africa\/Tunis",
    "has_dst": true,
    "location": {
      "country_code": "TN",
      "latitude": 36.8,
      "longitude": 10.183330000000012,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      },
      "PMT": {
        "dst": false,
        "offset": 561
      }
    }
  },
  "Africa\/Windhoek": {
    "region": "Africa",
    "timezone": "Africa\/Windhoek",
    "has_dst": true,
    "location": {
      "country_code": "NA",
      "latitude": -22.566670000000002,
      "longitude": 17.099999999999994,
      "comments": ""
    },
    "abbreviations": {
      "CAT": {
        "dst": false,
        "offset": 7200
      },
      "SAST": {
        "dst": false,
        "offset": 7200
      },
      "WAST": {
        "dst": true,
        "offset": 7200
      },
      "WAT": {
        "dst": true,
        "offset": 3600
      }
    }
  },
  "America\/Adak": {
    "region": "America",
    "timezone": "America\/Adak",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 51.879999999999995,
      "longitude": -176.65806,
      "comments": "Alaska - western Aleutians"
    },
    "abbreviations": {
      "AHST": {
        "dst": false,
        "offset": -36000
      },
      "BDT": {
        "dst": true,
        "offset": -36000
      },
      "BST": {
        "dst": false,
        "offset": -39600
      },
      "HDT": {
        "dst": true,
        "offset": -32400
      },
      "HST": {
        "dst": false,
        "offset": -36000
      },
      "NPT": {
        "dst": true,
        "offset": -36000
      },
      "NST": {
        "dst": false,
        "offset": -39600
      },
      "NWT": {
        "dst": true,
        "offset": -36000
      }
    }
  },
  "America\/Anchorage": {
    "region": "America",
    "timezone": "America\/Anchorage",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 61.218050000000005,
      "longitude": -149.90028,
      "comments": "Alaska (most areas)"
    },
    "abbreviations": {
      "AHDT": {
        "dst": true,
        "offset": -32400
      },
      "AHST": {
        "dst": false,
        "offset": -36000
      },
      "AKDT": {
        "dst": true,
        "offset": -28800
      },
      "AKST": {
        "dst": false,
        "offset": -32400
      },
      "APT": {
        "dst": true,
        "offset": -32400
      },
      "AST": {
        "dst": false,
        "offset": -36000
      },
      "AWT": {
        "dst": true,
        "offset": -32400
      },
      "YST": {
        "dst": false,
        "offset": -32400
      }
    }
  },
  "America\/Anguilla": {
    "region": "America",
    "timezone": "America\/Anguilla",
    "has_dst": false,
    "location": {
      "country_code": "AI",
      "latitude": 18.200000000000003,
      "longitude": -63.06667,
      "comments": ""
    },
    "abbreviations": {
      "AST": {
        "dst": false,
        "offset": -14400
      }
    }
  },
  "America\/Antigua": {
    "region": "America",
    "timezone": "America\/Antigua",
    "has_dst": false,
    "location": {
      "country_code": "AG",
      "latitude": 17.049999999999997,
      "longitude": -61.8,
      "comments": ""
    },
    "abbreviations": {
      "AST": {
        "dst": false,
        "offset": -14400
      }
    }
  },
  "America\/Araguaina": {
    "region": "America",
    "timezone": "America\/Araguaina",
    "has_dst": false,
    "location": {
      "country_code": "BR",
      "latitude": -7.200000000000003,
      "longitude": -48.19999999999999,
      "comments": "Tocantins"
    },
    "abbreviations": {
      "UTC-03": {
        "dst": false,
        "offset": -10800
      }
    }
  },
  "America\/Argentina\/Buenos_Aires": {
    "region": "America",
    "timezone": "America\/Argentina\/Buenos_Aires",
    "has_dst": false,
    "location": {
      "country_code": "AR",
      "latitude": -34.6,
      "longitude": -58.45,
      "comments": "Buenos Aires (BA, CF)"
    },
    "abbreviations": {
      "CMT": {
        "dst": false,
        "offset": -15408
      }
    }
  },
  "America\/Argentina\/Catamarca": {
    "region": "America",
    "timezone": "America\/Argentina\/Catamarca",
    "has_dst": false,
    "location": {
      "country_code": "AR",
      "latitude": -28.46667,
      "longitude": -65.78334,
      "comments": "Catamarca (CT); Chubut (CH)"
    },
    "abbreviations": {
      "CMT": {
        "dst": false,
        "offset": -15408
      }
    }
  },
  "America\/Argentina\/Cordoba": {
    "region": "America",
    "timezone": "America\/Argentina\/Cordoba",
    "has_dst": false,
    "location": {
      "country_code": "AR",
      "latitude": -31.4,
      "longitude": -64.18334,
      "comments": "Argentina (most areas: CB, CC, CN, ER, FM, MN, SE, SF)"
    },
    "abbreviations": {
      "CMT": {
        "dst": false,
        "offset": -15408
      }
    }
  },
  "America\/Argentina\/Jujuy": {
    "region": "America",
    "timezone": "America\/Argentina\/Jujuy",
    "has_dst": false,
    "location": {
      "country_code": "AR",
      "latitude": -24.18334,
      "longitude": -65.3,
      "comments": "Jujuy (JY)"
    },
    "abbreviations": {
      "CMT": {
        "dst": false,
        "offset": -15408
      }
    }
  },
  "America\/Argentina\/La_Rioja": {
    "region": "America",
    "timezone": "America\/Argentina\/La_Rioja",
    "has_dst": false,
    "location": {
      "country_code": "AR",
      "latitude": -29.43334,
      "longitude": -66.85,
      "comments": "La Rioja (LR)"
    },
    "abbreviations": {
      "CMT": {
        "dst": false,
        "offset": -15408
      }
    }
  },
  "America\/Argentina\/Mendoza": {
    "region": "America",
    "timezone": "America\/Argentina\/Mendoza",
    "has_dst": false,
    "location": {
      "country_code": "AR",
      "latitude": -32.88334,
      "longitude": -68.81667,
      "comments": "Mendoza (MZ)"
    },
    "abbreviations": {
      "CMT": {
        "dst": false,
        "offset": -15408
      }
    }
  },
  "America\/Argentina\/Rio_Gallegos": {
    "region": "America",
    "timezone": "America\/Argentina\/Rio_Gallegos",
    "has_dst": false,
    "location": {
      "country_code": "AR",
      "latitude": -51.63334,
      "longitude": -69.21667,
      "comments": "Santa Cruz (SC)"
    },
    "abbreviations": {
      "CMT": {
        "dst": false,
        "offset": -15408
      }
    }
  },
  "America\/Argentina\/Salta": {
    "region": "America",
    "timezone": "America\/Argentina\/Salta",
    "has_dst": false,
    "location": {
      "country_code": "AR",
      "latitude": -24.783339999999995,
      "longitude": -65.41667,
      "comments": "Salta (SA, LP, NQ, RN)"
    },
    "abbreviations": {
      "CMT": {
        "dst": false,
        "offset": -15408
      }
    }
  },
  "America\/Argentina\/San_Juan": {
    "region": "America",
    "timezone": "America\/Argentina\/San_Juan",
    "has_dst": false,
    "location": {
      "country_code": "AR",
      "latitude": -31.533340000000003,
      "longitude": -68.51667,
      "comments": "San Juan (SJ)"
    },
    "abbreviations": {
      "CMT": {
        "dst": false,
        "offset": -15408
      }
    }
  },
  "America\/Argentina\/San_Luis": {
    "region": "America",
    "timezone": "America\/Argentina\/San_Luis",
    "has_dst": false,
    "location": {
      "country_code": "AR",
      "latitude": -33.31667,
      "longitude": -66.35,
      "comments": "San Luis (SL)"
    },
    "abbreviations": {
      "CMT": {
        "dst": false,
        "offset": -15408
      }
    }
  },
  "America\/Argentina\/Tucuman": {
    "region": "America",
    "timezone": "America\/Argentina\/Tucuman",
    "has_dst": false,
    "location": {
      "country_code": "AR",
      "latitude": -26.816670000000002,
      "longitude": -65.21667,
      "comments": "Tucuman (TM)"
    },
    "abbreviations": {
      "CMT": {
        "dst": false,
        "offset": -15408
      }
    }
  },
  "America\/Argentina\/Ushuaia": {
    "region": "America",
    "timezone": "America\/Argentina\/Ushuaia",
    "has_dst": false,
    "location": {
      "country_code": "AR",
      "latitude": -54.8,
      "longitude": -68.3,
      "comments": "Tierra del Fuego (TF)"
    },
    "abbreviations": {
      "CMT": {
        "dst": false,
        "offset": -15408
      }
    }
  },
  "America\/Aruba": {
    "region": "America",
    "timezone": "America\/Aruba",
    "has_dst": false,
    "location": {
      "country_code": "AW",
      "latitude": 12.5,
      "longitude": -69.96667,
      "comments": ""
    },
    "abbreviations": {
      "AST": {
        "dst": false,
        "offset": -14400
      }
    }
  },
  "America\/Asuncion": {
    "region": "America",
    "timezone": "America\/Asuncion",
    "has_dst": false,
    "location": {
      "country_code": "PY",
      "latitude": -25.266670000000005,
      "longitude": -57.666669999999996,
      "comments": ""
    },
    "abbreviations": {
      "AMT": {
        "dst": false,
        "offset": -13840
      }
    }
  },
  "America\/Atikokan": {
    "region": "America",
    "timezone": "America\/Atikokan",
    "has_dst": true,
    "location": {
      "country_code": "CA",
      "latitude": 48.758610000000004,
      "longitude": -91.62167,
      "comments": "EST - ON (Atikokan); NU (Coral H)"
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CPT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "CWT": {
        "dst": true,
        "offset": -18000
      },
      "EST": {
        "dst": false,
        "offset": -18000
      }
    }
  },
  "America\/Bahia": {
    "region": "America",
    "timezone": "America\/Bahia",
    "has_dst": false,
    "location": {
      "country_code": "BR",
      "latitude": -12.983339999999998,
      "longitude": -38.516670000000005,
      "comments": "Bahia"
    },
    "abbreviations": {
      "UTC-03": {
        "dst": false,
        "offset": -10800
      }
    }
  },
  "America\/Bahia_Banderas": {
    "region": "America",
    "timezone": "America\/Bahia_Banderas",
    "has_dst": true,
    "location": {
      "country_code": "MX",
      "latitude": 20.799999999999997,
      "longitude": -105.25,
      "comments": "Bahia de Banderas"
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "MDT": {
        "dst": true,
        "offset": -21600
      },
      "MST": {
        "dst": false,
        "offset": -25200
      },
      "PST": {
        "dst": false,
        "offset": -28800
      }
    }
  },
  "America\/Barbados": {
    "region": "America",
    "timezone": "America\/Barbados",
    "has_dst": true,
    "location": {
      "country_code": "BB",
      "latitude": 13.099999999999994,
      "longitude": -59.61667,
      "comments": ""
    },
    "abbreviations": {
      "ADT": {
        "dst": true,
        "offset": -10800
      },
      "AST": {
        "dst": false,
        "offset": -14400
      },
      "BMT": {
        "dst": false,
        "offset": -14309
      }
    }
  },
  "America\/Belem": {
    "region": "America",
    "timezone": "America\/Belem",
    "has_dst": false,
    "location": {
      "country_code": "BR",
      "latitude": -1.4500000000000028,
      "longitude": -48.48334,
      "comments": "Para (east); Amapa"
    },
    "abbreviations": {
      "UTC-03": {
        "dst": false,
        "offset": -10800
      }
    }
  },
  "America\/Belize": {
    "region": "America",
    "timezone": "America\/Belize",
    "has_dst": true,
    "location": {
      "country_code": "BZ",
      "latitude": 17.5,
      "longitude": -88.2,
      "comments": ""
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      }
    }
  },
  "America\/Blanc-Sablon": {
    "region": "America",
    "timezone": "America\/Blanc-Sablon",
    "has_dst": true,
    "location": {
      "country_code": "CA",
      "latitude": 51.41666000000001,
      "longitude": -57.11667,
      "comments": "AST - QC (Lower North Shore)"
    },
    "abbreviations": {
      "ADT": {
        "dst": true,
        "offset": -10800
      },
      "APT": {
        "dst": true,
        "offset": -10800
      },
      "AST": {
        "dst": false,
        "offset": -14400
      },
      "AWT": {
        "dst": true,
        "offset": -10800
      }
    }
  },
  "America\/Boa_Vista": {
    "region": "America",
    "timezone": "America\/Boa_Vista",
    "has_dst": false,
    "location": {
      "country_code": "BR",
      "latitude": 2.816659999999999,
      "longitude": -60.666669999999996,
      "comments": "Roraima"
    },
    "abbreviations": {
      "UTC-04": {
        "dst": false,
        "offset": -14400
      }
    }
  },
  "America\/Bogota": {
    "region": "America",
    "timezone": "America\/Bogota",
    "has_dst": false,
    "location": {
      "country_code": "CO",
      "latitude": 4.599999999999994,
      "longitude": -74.08334,
      "comments": ""
    },
    "abbreviations": {
      "BMT": {
        "dst": false,
        "offset": -17776
      }
    }
  },
  "America\/Boise": {
    "region": "America",
    "timezone": "America\/Boise",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 43.613609999999994,
      "longitude": -116.2025,
      "comments": "Mountain - ID (south); OR (east)"
    },
    "abbreviations": {
      "MDT": {
        "dst": true,
        "offset": -21600
      },
      "MPT": {
        "dst": true,
        "offset": -21600
      },
      "MST": {
        "dst": false,
        "offset": -25200
      },
      "MWT": {
        "dst": true,
        "offset": -21600
      },
      "PDT": {
        "dst": true,
        "offset": -25200
      },
      "PST": {
        "dst": false,
        "offset": -28800
      }
    }
  },
  "America\/Cambridge_Bay": {
    "region": "America",
    "timezone": "America\/Cambridge_Bay",
    "has_dst": true,
    "location": {
      "country_code": "CA",
      "latitude": 69.11388,
      "longitude": -105.05278,
      "comments": "Mountain - NU (west)"
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "EST": {
        "dst": false,
        "offset": -18000
      },
      "MDDT": {
        "dst": true,
        "offset": -18000
      },
      "MDT": {
        "dst": true,
        "offset": -21600
      },
      "MPT": {
        "dst": true,
        "offset": -21600
      },
      "MST": {
        "dst": false,
        "offset": -25200
      },
      "MWT": {
        "dst": true,
        "offset": -21600
      }
    }
  },
  "America\/Campo_Grande": {
    "region": "America",
    "timezone": "America\/Campo_Grande",
    "has_dst": false,
    "location": {
      "country_code": "BR",
      "latitude": -20.450000000000003,
      "longitude": -54.61667,
      "comments": "Mato Grosso do Sul"
    },
    "abbreviations": {
      "UTC-04": {
        "dst": false,
        "offset": -14400
      }
    }
  },
  "America\/Cancun": {
    "region": "America",
    "timezone": "America\/Cancun",
    "has_dst": true,
    "location": {
      "country_code": "MX",
      "latitude": 21.083330000000004,
      "longitude": -86.76667,
      "comments": "Quintana Roo"
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "EDT": {
        "dst": true,
        "offset": -14400
      },
      "EST": {
        "dst": false,
        "offset": -18000
      }
    }
  },
  "America\/Caracas": {
    "region": "America",
    "timezone": "America\/Caracas",
    "has_dst": false,
    "location": {
      "country_code": "VE",
      "latitude": 10.5,
      "longitude": -66.93334,
      "comments": ""
    },
    "abbreviations": {
      "CMT": {
        "dst": false,
        "offset": -16060
      }
    }
  },
  "America\/Cayenne": {
    "region": "America",
    "timezone": "America\/Cayenne",
    "has_dst": false,
    "location": {
      "country_code": "GF",
      "latitude": 4.933329999999998,
      "longitude": -52.33334000000001,
      "comments": ""
    },
    "abbreviations": {
      "UTC-03": {
        "dst": false,
        "offset": -10800
      }
    }
  },
  "America\/Cayman": {
    "region": "America",
    "timezone": "America\/Cayman",
    "has_dst": false,
    "location": {
      "country_code": "KY",
      "latitude": 19.299999999999997,
      "longitude": -81.38334,
      "comments": ""
    },
    "abbreviations": {
      "CMT": {
        "dst": false,
        "offset": -19176
      },
      "EST": {
        "dst": false,
        "offset": -18000
      }
    }
  },
  "America\/Chicago": {
    "region": "America",
    "timezone": "America\/Chicago",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 41.849999999999994,
      "longitude": -87.65,
      "comments": "Central (most areas)"
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CPT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "CWT": {
        "dst": true,
        "offset": -18000
      },
      "EST": {
        "dst": false,
        "offset": -18000
      }
    }
  },
  "America\/Chihuahua": {
    "region": "America",
    "timezone": "America\/Chihuahua",
    "has_dst": true,
    "location": {
      "country_code": "MX",
      "latitude": 28.63333,
      "longitude": -106.08334,
      "comments": "Chihuahua (most areas)"
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "MDT": {
        "dst": true,
        "offset": -21600
      },
      "MST": {
        "dst": false,
        "offset": -25200
      }
    }
  },
  "America\/Ciudad_Juarez": {
    "region": "America",
    "timezone": "America\/Ciudad_Juarez",
    "has_dst": false,
    "location": {
      "country_code": "MX",
      "latitude": 31.733329999999995,
      "longitude": -106.48334,
      "comments": "Chihuahua (US border - west)"
    },
    "abbreviations": {
      "UTCMDT": {
        "dst": false,
        "offset": -21600
      }
    }
  },
  "America\/Costa_Rica": {
    "region": "America",
    "timezone": "America\/Costa_Rica",
    "has_dst": true,
    "location": {
      "country_code": "CR",
      "latitude": 9.933329999999998,
      "longitude": -84.08334,
      "comments": ""
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "SJMT": {
        "dst": false,
        "offset": -20173
      }
    }
  },
  "America\/Creston": {
    "region": "America",
    "timezone": "America\/Creston",
    "has_dst": false,
    "location": {
      "country_code": "CA",
      "latitude": 49.099999999999994,
      "longitude": -116.51667,
      "comments": "MST - BC (Creston)"
    },
    "abbreviations": {
      "MST": {
        "dst": false,
        "offset": -25200
      },
      "PST": {
        "dst": false,
        "offset": -28800
      }
    }
  },
  "America\/Cuiaba": {
    "region": "America",
    "timezone": "America\/Cuiaba",
    "has_dst": false,
    "location": {
      "country_code": "BR",
      "latitude": -15.583340000000007,
      "longitude": -56.08334000000001,
      "comments": "Mato Grosso"
    },
    "abbreviations": {
      "UTC-04": {
        "dst": false,
        "offset": -14400
      }
    }
  },
  "America\/Curacao": {
    "region": "America",
    "timezone": "America\/Curacao",
    "has_dst": false,
    "location": {
      "country_code": "CW",
      "latitude": 12.183329999999998,
      "longitude": -69,
      "comments": ""
    },
    "abbreviations": {
      "AST": {
        "dst": false,
        "offset": -14400
      }
    }
  },
  "America\/Danmarkshavn": {
    "region": "America",
    "timezone": "America\/Danmarkshavn",
    "has_dst": false,
    "location": {
      "country_code": "GL",
      "latitude": 76.76666,
      "longitude": -18.66667000000001,
      "comments": "National Park (east coast)"
    },
    "abbreviations": {
      "GMT": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "America\/Dawson": {
    "region": "America",
    "timezone": "America\/Dawson",
    "has_dst": true,
    "location": {
      "country_code": "CA",
      "latitude": 64.06666000000001,
      "longitude": -139.41667,
      "comments": "MST - Yukon (west)"
    },
    "abbreviations": {
      "PDT": {
        "dst": true,
        "offset": -25200
      },
      "PST": {
        "dst": false,
        "offset": -28800
      },
      "YDDT": {
        "dst": true,
        "offset": -25200
      },
      "YDT": {
        "dst": true,
        "offset": -28800
      },
      "YPT": {
        "dst": true,
        "offset": -28800
      },
      "YST": {
        "dst": false,
        "offset": -32400
      },
      "YWT": {
        "dst": true,
        "offset": -28800
      }
    }
  },
  "America\/Dawson_Creek": {
    "region": "America",
    "timezone": "America\/Dawson_Creek",
    "has_dst": true,
    "location": {
      "country_code": "CA",
      "latitude": 55.76666,
      "longitude": -120.23334,
      "comments": "MST - BC (Dawson Cr, Ft St John)"
    },
    "abbreviations": {
      "MST": {
        "dst": false,
        "offset": -25200
      },
      "PDT": {
        "dst": true,
        "offset": -25200
      },
      "PPT": {
        "dst": true,
        "offset": -25200
      },
      "PST": {
        "dst": false,
        "offset": -28800
      },
      "PWT": {
        "dst": true,
        "offset": -25200
      }
    }
  },
  "America\/Denver": {
    "region": "America",
    "timezone": "America\/Denver",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 39.73916,
      "longitude": -104.98417,
      "comments": "Mountain (most areas)"
    },
    "abbreviations": {
      "MDT": {
        "dst": true,
        "offset": -21600
      },
      "MPT": {
        "dst": true,
        "offset": -21600
      },
      "MST": {
        "dst": false,
        "offset": -25200
      },
      "MWT": {
        "dst": true,
        "offset": -21600
      }
    }
  },
  "America\/Detroit": {
    "region": "America",
    "timezone": "America\/Detroit",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 42.331379999999996,
      "longitude": -83.04584,
      "comments": "Eastern - MI (most areas)"
    },
    "abbreviations": {
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "EDT": {
        "dst": true,
        "offset": -14400
      },
      "EPT": {
        "dst": true,
        "offset": -14400
      },
      "EST": {
        "dst": false,
        "offset": -18000
      },
      "EWT": {
        "dst": true,
        "offset": -14400
      }
    }
  },
  "America\/Dominica": {
    "region": "America",
    "timezone": "America\/Dominica",
    "has_dst": false,
    "location": {
      "country_code": "DM",
      "latitude": 15.299999999999997,
      "longitude": -61.400000000000006,
      "comments": ""
    },
    "abbreviations": {
      "AST": {
        "dst": false,
        "offset": -14400
      }
    }
  },
  "America\/Edmonton": {
    "region": "America",
    "timezone": "America\/Edmonton",
    "has_dst": true,
    "location": {
      "country_code": "CA",
      "latitude": 53.55000000000001,
      "longitude": -113.46667,
      "comments": "Mountain - AB; BC (E); NT (E); SK (W)"
    },
    "abbreviations": {
      "MDT": {
        "dst": true,
        "offset": -21600
      },
      "MPT": {
        "dst": true,
        "offset": -21600
      },
      "MST": {
        "dst": false,
        "offset": -25200
      },
      "MWT": {
        "dst": true,
        "offset": -21600
      }
    }
  },
  "America\/Eirunepe": {
    "region": "America",
    "timezone": "America\/Eirunepe",
    "has_dst": false,
    "location": {
      "country_code": "BR",
      "latitude": -6.666669999999996,
      "longitude": -69.86667,
      "comments": "Amazonas (west)"
    },
    "abbreviations": {
      "UTC-05": {
        "dst": false,
        "offset": -18000
      }
    }
  },
  "America\/El_Salvador": {
    "region": "America",
    "timezone": "America\/El_Salvador",
    "has_dst": true,
    "location": {
      "country_code": "SV",
      "latitude": 13.700000000000003,
      "longitude": -89.2,
      "comments": ""
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      }
    }
  },
  "America\/Fort_Nelson": {
    "region": "America",
    "timezone": "America\/Fort_Nelson",
    "has_dst": true,
    "location": {
      "country_code": "CA",
      "latitude": 58.80000000000001,
      "longitude": -122.7,
      "comments": "MST - BC (Ft Nelson)"
    },
    "abbreviations": {
      "MST": {
        "dst": false,
        "offset": -25200
      },
      "PDT": {
        "dst": true,
        "offset": -25200
      },
      "PPT": {
        "dst": true,
        "offset": -25200
      },
      "PST": {
        "dst": false,
        "offset": -28800
      },
      "PWT": {
        "dst": true,
        "offset": -25200
      }
    }
  },
  "America\/Fortaleza": {
    "region": "America",
    "timezone": "America\/Fortaleza",
    "has_dst": false,
    "location": {
      "country_code": "BR",
      "latitude": -3.7166699999999935,
      "longitude": -38.5,
      "comments": "Brazil (northeast: MA, PI, CE, RN, PB)"
    },
    "abbreviations": {
      "UTC-03": {
        "dst": false,
        "offset": -10800
      }
    }
  },
  "America\/Glace_Bay": {
    "region": "America",
    "timezone": "America\/Glace_Bay",
    "has_dst": true,
    "location": {
      "country_code": "CA",
      "latitude": 46.199990000000014,
      "longitude": -59.95,
      "comments": "Atlantic - NS (Cape Breton)"
    },
    "abbreviations": {
      "ADT": {
        "dst": true,
        "offset": -10800
      },
      "APT": {
        "dst": true,
        "offset": -10800
      },
      "AST": {
        "dst": false,
        "offset": -14400
      },
      "AWT": {
        "dst": true,
        "offset": -10800
      }
    }
  },
  "America\/Goose_Bay": {
    "region": "America",
    "timezone": "America\/Goose_Bay",
    "has_dst": true,
    "location": {
      "country_code": "CA",
      "latitude": 53.33332999999999,
      "longitude": -60.416669999999996,
      "comments": "Atlantic - Labrador (most areas)"
    },
    "abbreviations": {
      "ADDT": {
        "dst": true,
        "offset": -7200
      },
      "ADT": {
        "dst": true,
        "offset": -10800
      },
      "AST": {
        "dst": false,
        "offset": -14400
      },
      "NDT": {
        "dst": true,
        "offset": -9052
      },
      "NPT": {
        "dst": true,
        "offset": -9000
      },
      "NST": {
        "dst": false,
        "offset": -12652
      },
      "NWT": {
        "dst": true,
        "offset": -9000
      }
    }
  },
  "America\/Grand_Turk": {
    "region": "America",
    "timezone": "America\/Grand_Turk",
    "has_dst": true,
    "location": {
      "country_code": "TC",
      "latitude": 21.466660000000005,
      "longitude": -71.13334,
      "comments": ""
    },
    "abbreviations": {
      "AST": {
        "dst": false,
        "offset": -14400
      },
      "EDT": {
        "dst": true,
        "offset": -14400
      },
      "EST": {
        "dst": false,
        "offset": -18000
      },
      "KMT": {
        "dst": false,
        "offset": -18430
      }
    }
  },
  "America\/Grenada": {
    "region": "America",
    "timezone": "America\/Grenada",
    "has_dst": false,
    "location": {
      "country_code": "GD",
      "latitude": 12.049999999999997,
      "longitude": -61.75,
      "comments": ""
    },
    "abbreviations": {
      "AST": {
        "dst": false,
        "offset": -14400
      }
    }
  },
  "America\/Guadeloupe": {
    "region": "America",
    "timezone": "America\/Guadeloupe",
    "has_dst": false,
    "location": {
      "country_code": "GP",
      "latitude": 16.233329999999995,
      "longitude": -61.533339999999995,
      "comments": ""
    },
    "abbreviations": {
      "AST": {
        "dst": false,
        "offset": -14400
      }
    }
  },
  "America\/Guatemala": {
    "region": "America",
    "timezone": "America\/Guatemala",
    "has_dst": true,
    "location": {
      "country_code": "GT",
      "latitude": 14.63333,
      "longitude": -90.51667,
      "comments": ""
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      }
    }
  },
  "America\/Guayaquil": {
    "region": "America",
    "timezone": "America\/Guayaquil",
    "has_dst": false,
    "location": {
      "country_code": "EC",
      "latitude": -2.1666699999999963,
      "longitude": -79.83334,
      "comments": "Ecuador (mainland)"
    },
    "abbreviations": {
      "QMT": {
        "dst": false,
        "offset": -18840
      }
    }
  },
  "America\/Guyana": {
    "region": "America",
    "timezone": "America\/Guyana",
    "has_dst": false,
    "location": {
      "country_code": "GY",
      "latitude": 6.799999999999997,
      "longitude": -58.166669999999996,
      "comments": ""
    },
    "abbreviations": {
      "UTC-04": {
        "dst": false,
        "offset": -14400
      }
    }
  },
  "America\/Halifax": {
    "region": "America",
    "timezone": "America\/Halifax",
    "has_dst": true,
    "location": {
      "country_code": "CA",
      "latitude": 44.650000000000006,
      "longitude": -63.599999999999994,
      "comments": "Atlantic - NS (most areas); PE"
    },
    "abbreviations": {
      "ADT": {
        "dst": true,
        "offset": -10800
      },
      "APT": {
        "dst": true,
        "offset": -10800
      },
      "AST": {
        "dst": false,
        "offset": -14400
      },
      "AWT": {
        "dst": true,
        "offset": -10800
      }
    }
  },
  "America\/Havana": {
    "region": "America",
    "timezone": "America\/Havana",
    "has_dst": true,
    "location": {
      "country_code": "CU",
      "latitude": 23.13333,
      "longitude": -82.36667,
      "comments": ""
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -14400
      },
      "CST": {
        "dst": false,
        "offset": -18000
      },
      "HMT": {
        "dst": false,
        "offset": -19776
      }
    }
  },
  "America\/Hermosillo": {
    "region": "America",
    "timezone": "America\/Hermosillo",
    "has_dst": true,
    "location": {
      "country_code": "MX",
      "latitude": 29.06666,
      "longitude": -110.96667,
      "comments": "Sonora"
    },
    "abbreviations": {
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "MDT": {
        "dst": true,
        "offset": -21600
      },
      "MST": {
        "dst": false,
        "offset": -25200
      },
      "PST": {
        "dst": false,
        "offset": -28800
      }
    }
  },
  "America\/Indiana\/Indianapolis": {
    "region": "America",
    "timezone": "America\/Indiana\/Indianapolis",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 39.76832999999999,
      "longitude": -86.15806,
      "comments": "Eastern - IN (most areas)"
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CPT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "CWT": {
        "dst": true,
        "offset": -18000
      },
      "EDT": {
        "dst": true,
        "offset": -14400
      },
      "EST": {
        "dst": false,
        "offset": -18000
      }
    }
  },
  "America\/Indiana\/Knox": {
    "region": "America",
    "timezone": "America\/Indiana\/Knox",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 41.295829999999995,
      "longitude": -86.625,
      "comments": "Central - IN (Starke)"
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CPT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "CWT": {
        "dst": true,
        "offset": -18000
      },
      "EST": {
        "dst": false,
        "offset": -18000
      }
    }
  },
  "America\/Indiana\/Marengo": {
    "region": "America",
    "timezone": "America\/Indiana\/Marengo",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 38.375550000000004,
      "longitude": -86.34473,
      "comments": "Eastern - IN (Crawford)"
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CPT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "CWT": {
        "dst": true,
        "offset": -18000
      },
      "EDT": {
        "dst": true,
        "offset": -14400
      },
      "EST": {
        "dst": false,
        "offset": -18000
      }
    }
  },
  "America\/Indiana\/Petersburg": {
    "region": "America",
    "timezone": "America\/Indiana\/Petersburg",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 38.49194,
      "longitude": -87.27862,
      "comments": "Eastern - IN (Pike)"
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CPT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "CWT": {
        "dst": true,
        "offset": -18000
      },
      "EDT": {
        "dst": true,
        "offset": -14400
      },
      "EST": {
        "dst": false,
        "offset": -18000
      }
    }
  },
  "America\/Indiana\/Tell_City": {
    "region": "America",
    "timezone": "America\/Indiana\/Tell_City",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 37.953050000000005,
      "longitude": -86.76139,
      "comments": "Central - IN (Perry)"
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CPT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "CWT": {
        "dst": true,
        "offset": -18000
      },
      "EDT": {
        "dst": true,
        "offset": -14400
      },
      "EST": {
        "dst": false,
        "offset": -18000
      }
    }
  },
  "America\/Indiana\/Vevay": {
    "region": "America",
    "timezone": "America\/Indiana\/Vevay",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 38.74777,
      "longitude": -85.06723,
      "comments": "Eastern - IN (Switzerland)"
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CPT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "CWT": {
        "dst": true,
        "offset": -18000
      },
      "EDT": {
        "dst": true,
        "offset": -14400
      },
      "EST": {
        "dst": false,
        "offset": -18000
      }
    }
  },
  "America\/Indiana\/Vincennes": {
    "region": "America",
    "timezone": "America\/Indiana\/Vincennes",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 38.677220000000005,
      "longitude": -87.52862,
      "comments": "Eastern - IN (Da, Du, K, Mn)"
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CPT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "CWT": {
        "dst": true,
        "offset": -18000
      },
      "EDT": {
        "dst": true,
        "offset": -14400
      },
      "EST": {
        "dst": false,
        "offset": -18000
      }
    }
  },
  "America\/Indiana\/Winamac": {
    "region": "America",
    "timezone": "America\/Indiana\/Winamac",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 41.051379999999995,
      "longitude": -86.60306,
      "comments": "Eastern - IN (Pulaski)"
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CPT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "CWT": {
        "dst": true,
        "offset": -18000
      },
      "EDT": {
        "dst": true,
        "offset": -14400
      },
      "EST": {
        "dst": false,
        "offset": -18000
      }
    }
  },
  "America\/Inuvik": {
    "region": "America",
    "timezone": "America\/Inuvik",
    "has_dst": true,
    "location": {
      "country_code": "CA",
      "latitude": 68.34971999999999,
      "longitude": -133.71667,
      "comments": "Mountain - NT (west)"
    },
    "abbreviations": {
      "MDT": {
        "dst": true,
        "offset": -21600
      },
      "MST": {
        "dst": false,
        "offset": -25200
      },
      "PDDT": {
        "dst": true,
        "offset": -21600
      },
      "PST": {
        "dst": false,
        "offset": -28800
      }
    }
  },
  "America\/Iqaluit": {
    "region": "America",
    "timezone": "America\/Iqaluit",
    "has_dst": true,
    "location": {
      "country_code": "CA",
      "latitude": 63.733329999999995,
      "longitude": -68.46667,
      "comments": "Eastern - NU (most areas)"
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "EDDT": {
        "dst": true,
        "offset": -10800
      },
      "EDT": {
        "dst": true,
        "offset": -14400
      },
      "EPT": {
        "dst": true,
        "offset": -14400
      },
      "EST": {
        "dst": false,
        "offset": -18000
      },
      "EWT": {
        "dst": true,
        "offset": -14400
      }
    }
  },
  "America\/Jamaica": {
    "region": "America",
    "timezone": "America\/Jamaica",
    "has_dst": true,
    "location": {
      "country_code": "JM",
      "latitude": 17.968050000000005,
      "longitude": -76.79334,
      "comments": ""
    },
    "abbreviations": {
      "EDT": {
        "dst": true,
        "offset": -14400
      },
      "EST": {
        "dst": false,
        "offset": -18000
      },
      "KMT": {
        "dst": false,
        "offset": -18430
      }
    }
  },
  "America\/Juneau": {
    "region": "America",
    "timezone": "America\/Juneau",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 58.30194,
      "longitude": -134.41973000000002,
      "comments": "Alaska - Juneau area"
    },
    "abbreviations": {
      "AKDT": {
        "dst": true,
        "offset": -28800
      },
      "AKST": {
        "dst": false,
        "offset": -32400
      },
      "PDT": {
        "dst": true,
        "offset": -25200
      },
      "PPT": {
        "dst": true,
        "offset": -25200
      },
      "PST": {
        "dst": false,
        "offset": -28800
      },
      "PWT": {
        "dst": true,
        "offset": -25200
      },
      "YDT": {
        "dst": true,
        "offset": -28800
      },
      "YST": {
        "dst": false,
        "offset": -32400
      }
    }
  },
  "America\/Kentucky\/Louisville": {
    "region": "America",
    "timezone": "America\/Kentucky\/Louisville",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 38.25416000000001,
      "longitude": -85.75945,
      "comments": "Eastern - KY (Louisville area)"
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CPT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "CWT": {
        "dst": true,
        "offset": -18000
      },
      "EDT": {
        "dst": true,
        "offset": -14400
      },
      "EST": {
        "dst": false,
        "offset": -18000
      }
    }
  },
  "America\/Kentucky\/Monticello": {
    "region": "America",
    "timezone": "America\/Kentucky\/Monticello",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 36.829719999999995,
      "longitude": -84.84917,
      "comments": "Eastern - KY (Wayne)"
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CPT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "CWT": {
        "dst": true,
        "offset": -18000
      },
      "EDT": {
        "dst": true,
        "offset": -14400
      },
      "EST": {
        "dst": false,
        "offset": -18000
      }
    }
  },
  "America\/Kralendijk": {
    "region": "America",
    "timezone": "America\/Kralendijk",
    "has_dst": false,
    "location": {
      "country_code": "BQ",
      "latitude": 12.15083,
      "longitude": -68.27667,
      "comments": ""
    },
    "abbreviations": {
      "AST": {
        "dst": false,
        "offset": -14400
      }
    }
  },
  "America\/La_Paz": {
    "region": "America",
    "timezone": "America\/La_Paz",
    "has_dst": true,
    "location": {
      "country_code": "BO",
      "latitude": -16.5,
      "longitude": -68.15,
      "comments": ""
    },
    "abbreviations": {
      "BST": {
        "dst": true,
        "offset": -12756
      },
      "CMT": {
        "dst": false,
        "offset": -16356
      }
    }
  },
  "America\/Lima": {
    "region": "America",
    "timezone": "America\/Lima",
    "has_dst": false,
    "location": {
      "country_code": "PE",
      "latitude": -12.049999999999997,
      "longitude": -77.05,
      "comments": ""
    },
    "abbreviations": {
      "UTC-05": {
        "dst": false,
        "offset": -18000
      }
    }
  },
  "America\/Los_Angeles": {
    "region": "America",
    "timezone": "America\/Los_Angeles",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 34.052220000000005,
      "longitude": -118.24278000000001,
      "comments": "Pacific"
    },
    "abbreviations": {
      "PDT": {
        "dst": true,
        "offset": -25200
      },
      "PPT": {
        "dst": true,
        "offset": -25200
      },
      "PST": {
        "dst": false,
        "offset": -28800
      },
      "PWT": {
        "dst": true,
        "offset": -25200
      }
    }
  },
  "America\/Lower_Princes": {
    "region": "America",
    "timezone": "America\/Lower_Princes",
    "has_dst": false,
    "location": {
      "country_code": "SX",
      "latitude": 18.051379999999995,
      "longitude": -63.04723,
      "comments": ""
    },
    "abbreviations": {
      "AST": {
        "dst": false,
        "offset": -14400
      }
    }
  },
  "America\/Maceio": {
    "region": "America",
    "timezone": "America\/Maceio",
    "has_dst": false,
    "location": {
      "country_code": "BR",
      "latitude": -9.666669999999996,
      "longitude": -35.71666999999999,
      "comments": "Alagoas, Sergipe"
    },
    "abbreviations": {
      "UTC-03": {
        "dst": false,
        "offset": -10800
      }
    }
  },
  "America\/Managua": {
    "region": "America",
    "timezone": "America\/Managua",
    "has_dst": true,
    "location": {
      "country_code": "NI",
      "latitude": 12.150000000000006,
      "longitude": -86.28334,
      "comments": ""
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "EST": {
        "dst": false,
        "offset": -18000
      },
      "MMT": {
        "dst": false,
        "offset": -20712
      }
    }
  },
  "America\/Manaus": {
    "region": "America",
    "timezone": "America\/Manaus",
    "has_dst": false,
    "location": {
      "country_code": "BR",
      "latitude": -3.133340000000004,
      "longitude": -60.016670000000005,
      "comments": "Amazonas (east)"
    },
    "abbreviations": {
      "UTC-04": {
        "dst": false,
        "offset": -14400
      }
    }
  },
  "America\/Marigot": {
    "region": "America",
    "timezone": "America\/Marigot",
    "has_dst": false,
    "location": {
      "country_code": "MF",
      "latitude": 18.06666,
      "longitude": -63.08334000000001,
      "comments": ""
    },
    "abbreviations": {
      "AST": {
        "dst": false,
        "offset": -14400
      }
    }
  },
  "America\/Martinique": {
    "region": "America",
    "timezone": "America\/Martinique",
    "has_dst": true,
    "location": {
      "country_code": "MQ",
      "latitude": 14.599999999999994,
      "longitude": -61.08334000000001,
      "comments": ""
    },
    "abbreviations": {
      "ADT": {
        "dst": true,
        "offset": -10800
      },
      "AST": {
        "dst": false,
        "offset": -14400
      },
      "FFMT": {
        "dst": false,
        "offset": -14660
      }
    }
  },
  "America\/Matamoros": {
    "region": "America",
    "timezone": "America\/Matamoros",
    "has_dst": true,
    "location": {
      "country_code": "MX",
      "latitude": 25.833330000000004,
      "longitude": -97.5,
      "comments": "Coahuila, Nuevo Leon, Tamaulipas (US border)"
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      }
    }
  },
  "America\/Mazatlan": {
    "region": "America",
    "timezone": "America\/Mazatlan",
    "has_dst": true,
    "location": {
      "country_code": "MX",
      "latitude": 23.216660000000005,
      "longitude": -106.41667,
      "comments": "Baja California Sur, Nayarit (most areas), Sinaloa"
    },
    "abbreviations": {
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "MDT": {
        "dst": true,
        "offset": -21600
      },
      "MST": {
        "dst": false,
        "offset": -25200
      },
      "PST": {
        "dst": false,
        "offset": -28800
      }
    }
  },
  "America\/Menominee": {
    "region": "America",
    "timezone": "America\/Menominee",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 45.10776999999999,
      "longitude": -87.61417,
      "comments": "Central - MI (Wisconsin border)"
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CPT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "CWT": {
        "dst": true,
        "offset": -18000
      },
      "EST": {
        "dst": false,
        "offset": -18000
      }
    }
  },
  "America\/Merida": {
    "region": "America",
    "timezone": "America\/Merida",
    "has_dst": true,
    "location": {
      "country_code": "MX",
      "latitude": 20.966660000000005,
      "longitude": -89.61667,
      "comments": "Campeche, Yucatan"
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "EST": {
        "dst": false,
        "offset": -18000
      }
    }
  },
  "America\/Metlakatla": {
    "region": "America",
    "timezone": "America\/Metlakatla",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 55.12693999999999,
      "longitude": -131.57639,
      "comments": "Alaska - Annette Island"
    },
    "abbreviations": {
      "AKDT": {
        "dst": true,
        "offset": -28800
      },
      "AKST": {
        "dst": false,
        "offset": -32400
      },
      "PDT": {
        "dst": true,
        "offset": -25200
      },
      "PPT": {
        "dst": true,
        "offset": -25200
      },
      "PST": {
        "dst": false,
        "offset": -28800
      },
      "PWT": {
        "dst": true,
        "offset": -25200
      }
    }
  },
  "America\/Mexico_City": {
    "region": "America",
    "timezone": "America\/Mexico_City",
    "has_dst": true,
    "location": {
      "country_code": "MX",
      "latitude": 19.400000000000006,
      "longitude": -99.15001,
      "comments": "Central Mexico"
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "CWT": {
        "dst": true,
        "offset": -18000
      },
      "MST": {
        "dst": false,
        "offset": -25200
      }
    }
  },
  "America\/Miquelon": {
    "region": "America",
    "timezone": "America\/Miquelon",
    "has_dst": false,
    "location": {
      "country_code": "PM",
      "latitude": 47.05000000000001,
      "longitude": -56.33334000000001,
      "comments": ""
    },
    "abbreviations": {
      "AST": {
        "dst": false,
        "offset": -14400
      }
    }
  },
  "America\/Moncton": {
    "region": "America",
    "timezone": "America\/Moncton",
    "has_dst": true,
    "location": {
      "country_code": "CA",
      "latitude": 46.099999999999994,
      "longitude": -64.78334,
      "comments": "Atlantic - New Brunswick"
    },
    "abbreviations": {
      "ADT": {
        "dst": true,
        "offset": -10800
      },
      "APT": {
        "dst": true,
        "offset": -10800
      },
      "AST": {
        "dst": false,
        "offset": -14400
      },
      "AWT": {
        "dst": true,
        "offset": -10800
      },
      "EST": {
        "dst": false,
        "offset": -18000
      }
    }
  },
  "America\/Monterrey": {
    "region": "America",
    "timezone": "America\/Monterrey",
    "has_dst": true,
    "location": {
      "country_code": "MX",
      "latitude": 25.666659999999993,
      "longitude": -100.31667,
      "comments": "Durango; Coahuila, Nuevo Leon, Tamaulipas (most areas)"
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      }
    }
  },
  "America\/Montevideo": {
    "region": "America",
    "timezone": "America\/Montevideo",
    "has_dst": false,
    "location": {
      "country_code": "UY",
      "latitude": -34.90917,
      "longitude": -56.212500000000006,
      "comments": ""
    },
    "abbreviations": {
      "MMT": {
        "dst": false,
        "offset": -13491
      }
    }
  },
  "America\/Montserrat": {
    "region": "America",
    "timezone": "America\/Montserrat",
    "has_dst": false,
    "location": {
      "country_code": "MS",
      "latitude": 16.716660000000005,
      "longitude": -62.21666999999999,
      "comments": ""
    },
    "abbreviations": {
      "AST": {
        "dst": false,
        "offset": -14400
      }
    }
  },
  "America\/Nassau": {
    "region": "America",
    "timezone": "America\/Nassau",
    "has_dst": true,
    "location": {
      "country_code": "BS",
      "latitude": 25.083330000000004,
      "longitude": -77.35,
      "comments": ""
    },
    "abbreviations": {
      "EDT": {
        "dst": true,
        "offset": -14400
      },
      "EST": {
        "dst": false,
        "offset": -18000
      }
    }
  },
  "America\/New_York": {
    "region": "America",
    "timezone": "America\/New_York",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 40.71415999999999,
      "longitude": -74.00639,
      "comments": "Eastern (most areas)"
    },
    "abbreviations": {
      "EDT": {
        "dst": true,
        "offset": -14400
      },
      "EPT": {
        "dst": true,
        "offset": -14400
      },
      "EST": {
        "dst": false,
        "offset": -18000
      },
      "EWT": {
        "dst": true,
        "offset": -14400
      }
    }
  },
  "America\/Nome": {
    "region": "America",
    "timezone": "America\/Nome",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 64.50111000000001,
      "longitude": -165.40639,
      "comments": "Alaska (west)"
    },
    "abbreviations": {
      "AKDT": {
        "dst": true,
        "offset": -28800
      },
      "AKST": {
        "dst": false,
        "offset": -32400
      },
      "BDT": {
        "dst": true,
        "offset": -36000
      },
      "BST": {
        "dst": false,
        "offset": -39600
      },
      "NPT": {
        "dst": true,
        "offset": -36000
      },
      "NST": {
        "dst": false,
        "offset": -39600
      },
      "NWT": {
        "dst": true,
        "offset": -36000
      },
      "YST": {
        "dst": false,
        "offset": -32400
      }
    }
  },
  "America\/Noronha": {
    "region": "America",
    "timezone": "America\/Noronha",
    "has_dst": false,
    "location": {
      "country_code": "BR",
      "latitude": -3.8499999999999943,
      "longitude": -32.41667000000001,
      "comments": "Atlantic islands"
    },
    "abbreviations": {
      "UTC-02": {
        "dst": false,
        "offset": -7200
      }
    }
  },
  "America\/North_Dakota\/Beulah": {
    "region": "America",
    "timezone": "America\/North_Dakota\/Beulah",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 47.264160000000004,
      "longitude": -101.77778,
      "comments": "Central - ND (Mercer)"
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "MDT": {
        "dst": true,
        "offset": -21600
      },
      "MPT": {
        "dst": true,
        "offset": -21600
      },
      "MST": {
        "dst": false,
        "offset": -25200
      },
      "MWT": {
        "dst": true,
        "offset": -21600
      }
    }
  },
  "America\/North_Dakota\/Center": {
    "region": "America",
    "timezone": "America\/North_Dakota\/Center",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 47.11637999999999,
      "longitude": -101.29917,
      "comments": "Central - ND (Oliver)"
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "MDT": {
        "dst": true,
        "offset": -21600
      },
      "MPT": {
        "dst": true,
        "offset": -21600
      },
      "MST": {
        "dst": false,
        "offset": -25200
      },
      "MWT": {
        "dst": true,
        "offset": -21600
      }
    }
  },
  "America\/North_Dakota\/New_Salem": {
    "region": "America",
    "timezone": "America\/North_Dakota\/New_Salem",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 46.845,
      "longitude": -101.41084,
      "comments": "Central - ND (Morton rural)"
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "MDT": {
        "dst": true,
        "offset": -21600
      },
      "MPT": {
        "dst": true,
        "offset": -21600
      },
      "MST": {
        "dst": false,
        "offset": -25200
      },
      "MWT": {
        "dst": true,
        "offset": -21600
      }
    }
  },
  "America\/Nuuk": {
    "region": "America",
    "timezone": "America\/Nuuk",
    "has_dst": false,
    "location": {
      "country_code": "GL",
      "latitude": 64.18333000000001,
      "longitude": -51.73334,
      "comments": "most of Greenland"
    },
    "abbreviations": {
      "UTC-02": {
        "dst": false,
        "offset": -7200
      }
    }
  },
  "America\/Ojinaga": {
    "region": "America",
    "timezone": "America\/Ojinaga",
    "has_dst": true,
    "location": {
      "country_code": "MX",
      "latitude": 29.56666,
      "longitude": -104.41667,
      "comments": "Chihuahua (US border - east)"
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "MDT": {
        "dst": true,
        "offset": -21600
      },
      "MST": {
        "dst": false,
        "offset": -25200
      }
    }
  },
  "America\/Panama": {
    "region": "America",
    "timezone": "America\/Panama",
    "has_dst": false,
    "location": {
      "country_code": "PA",
      "latitude": 8.966660000000005,
      "longitude": -79.53334,
      "comments": ""
    },
    "abbreviations": {
      "CMT": {
        "dst": false,
        "offset": -19176
      },
      "EST": {
        "dst": false,
        "offset": -18000
      }
    }
  },
  "America\/Paramaribo": {
    "region": "America",
    "timezone": "America\/Paramaribo",
    "has_dst": false,
    "location": {
      "country_code": "SR",
      "latitude": 5.833330000000004,
      "longitude": -55.166669999999996,
      "comments": ""
    },
    "abbreviations": {
      "PMT": {
        "dst": false,
        "offset": -13252
      }
    }
  },
  "America\/Phoenix": {
    "region": "America",
    "timezone": "America\/Phoenix",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 33.44833,
      "longitude": -112.07334,
      "comments": "MST - AZ (except Navajo)"
    },
    "abbreviations": {
      "MDT": {
        "dst": true,
        "offset": -21600
      },
      "MST": {
        "dst": false,
        "offset": -25200
      },
      "MWT": {
        "dst": true,
        "offset": -21600
      }
    }
  },
  "America\/Port-au-Prince": {
    "region": "America",
    "timezone": "America\/Port-au-Prince",
    "has_dst": true,
    "location": {
      "country_code": "HT",
      "latitude": 18.533330000000007,
      "longitude": -72.33334,
      "comments": ""
    },
    "abbreviations": {
      "EDT": {
        "dst": true,
        "offset": -14400
      },
      "EST": {
        "dst": false,
        "offset": -18000
      },
      "PPMT": {
        "dst": false,
        "offset": -17340
      }
    }
  },
  "America\/Port_of_Spain": {
    "region": "America",
    "timezone": "America\/Port_of_Spain",
    "has_dst": false,
    "location": {
      "country_code": "TT",
      "latitude": 10.650000000000006,
      "longitude": -61.516670000000005,
      "comments": ""
    },
    "abbreviations": {
      "AST": {
        "dst": false,
        "offset": -14400
      }
    }
  },
  "America\/Porto_Velho": {
    "region": "America",
    "timezone": "America\/Porto_Velho",
    "has_dst": false,
    "location": {
      "country_code": "BR",
      "latitude": -8.766670000000005,
      "longitude": -63.900000000000006,
      "comments": "Rondonia"
    },
    "abbreviations": {
      "UTC-04": {
        "dst": false,
        "offset": -14400
      }
    }
  },
  "America\/Puerto_Rico": {
    "region": "America",
    "timezone": "America\/Puerto_Rico",
    "has_dst": true,
    "location": {
      "country_code": "PR",
      "latitude": 18.468329999999995,
      "longitude": -66.10612,
      "comments": ""
    },
    "abbreviations": {
      "APT": {
        "dst": true,
        "offset": -10800
      },
      "AST": {
        "dst": false,
        "offset": -14400
      },
      "AWT": {
        "dst": true,
        "offset": -10800
      }
    }
  },
  "America\/Punta_Arenas": {
    "region": "America",
    "timezone": "America\/Punta_Arenas",
    "has_dst": false,
    "location": {
      "country_code": "CL",
      "latitude": -53.15,
      "longitude": -70.91667,
      "comments": "Region of Magallanes"
    },
    "abbreviations": {
      "SMT": {
        "dst": false,
        "offset": -16966
      }
    }
  },
  "America\/Rankin_Inlet": {
    "region": "America",
    "timezone": "America\/Rankin_Inlet",
    "has_dst": true,
    "location": {
      "country_code": "CA",
      "latitude": 62.81666000000001,
      "longitude": -92.08306,
      "comments": "Central - NU (central)"
    },
    "abbreviations": {
      "CDDT": {
        "dst": true,
        "offset": -14400
      },
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "EST": {
        "dst": false,
        "offset": -18000
      }
    }
  },
  "America\/Recife": {
    "region": "America",
    "timezone": "America\/Recife",
    "has_dst": false,
    "location": {
      "country_code": "BR",
      "latitude": -8.049999999999997,
      "longitude": -34.900000000000006,
      "comments": "Pernambuco"
    },
    "abbreviations": {
      "UTC-03": {
        "dst": false,
        "offset": -10800
      }
    }
  },
  "America\/Regina": {
    "region": "America",
    "timezone": "America\/Regina",
    "has_dst": true,
    "location": {
      "country_code": "CA",
      "latitude": 50.400000000000006,
      "longitude": -104.65001,
      "comments": "CST - SK (most areas)"
    },
    "abbreviations": {
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "MDT": {
        "dst": true,
        "offset": -21600
      },
      "MPT": {
        "dst": true,
        "offset": -21600
      },
      "MST": {
        "dst": false,
        "offset": -25200
      },
      "MWT": {
        "dst": true,
        "offset": -21600
      }
    }
  },
  "America\/Resolute": {
    "region": "America",
    "timezone": "America\/Resolute",
    "has_dst": true,
    "location": {
      "country_code": "CA",
      "latitude": 74.69555,
      "longitude": -94.82917,
      "comments": "Central - NU (Resolute)"
    },
    "abbreviations": {
      "CDDT": {
        "dst": true,
        "offset": -14400
      },
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "EST": {
        "dst": false,
        "offset": -18000
      }
    }
  },
  "America\/Rio_Branco": {
    "region": "America",
    "timezone": "America\/Rio_Branco",
    "has_dst": false,
    "location": {
      "country_code": "BR",
      "latitude": -9.966669999999993,
      "longitude": -67.8,
      "comments": "Acre"
    },
    "abbreviations": {
      "UTC-05": {
        "dst": false,
        "offset": -18000
      }
    }
  },
  "America\/Santarem": {
    "region": "America",
    "timezone": "America\/Santarem",
    "has_dst": false,
    "location": {
      "country_code": "BR",
      "latitude": -2.433340000000001,
      "longitude": -54.86667,
      "comments": "Para (west)"
    },
    "abbreviations": {
      "UTC-03": {
        "dst": false,
        "offset": -10800
      }
    }
  },
  "America\/Santiago": {
    "region": "America",
    "timezone": "America\/Santiago",
    "has_dst": false,
    "location": {
      "country_code": "CL",
      "latitude": -33.45,
      "longitude": -70.66667,
      "comments": "most of Chile"
    },
    "abbreviations": {
      "SMT": {
        "dst": false,
        "offset": -16966
      }
    }
  },
  "America\/Santo_Domingo": {
    "region": "America",
    "timezone": "America\/Santo_Domingo",
    "has_dst": true,
    "location": {
      "country_code": "DO",
      "latitude": 18.466660000000005,
      "longitude": -69.9,
      "comments": ""
    },
    "abbreviations": {
      "AST": {
        "dst": false,
        "offset": -14400
      },
      "EDT": {
        "dst": true,
        "offset": -14400
      },
      "EST": {
        "dst": false,
        "offset": -18000
      },
      "SDMT": {
        "dst": false,
        "offset": -16800
      }
    }
  },
  "America\/Sao_Paulo": {
    "region": "America",
    "timezone": "America\/Sao_Paulo",
    "has_dst": false,
    "location": {
      "country_code": "BR",
      "latitude": -23.533339999999995,
      "longitude": -46.61667,
      "comments": "Brazil (southeast: GO, DF, MG, ES, RJ, SP, PR, SC, RS)"
    },
    "abbreviations": {
      "UTC-03": {
        "dst": false,
        "offset": -10800
      }
    }
  },
  "America\/Scoresbysund": {
    "region": "America",
    "timezone": "America\/Scoresbysund",
    "has_dst": false,
    "location": {
      "country_code": "GL",
      "latitude": 70.48333,
      "longitude": -21.966669999999993,
      "comments": "Scoresbysund\/Ittoqqortoormiit"
    },
    "abbreviations": {
      "UTC-01": {
        "dst": false,
        "offset": -3600
      }
    }
  },
  "America\/Sitka": {
    "region": "America",
    "timezone": "America\/Sitka",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 57.176379999999995,
      "longitude": -135.30195,
      "comments": "Alaska - Sitka area"
    },
    "abbreviations": {
      "AKDT": {
        "dst": true,
        "offset": -28800
      },
      "AKST": {
        "dst": false,
        "offset": -32400
      },
      "PDT": {
        "dst": true,
        "offset": -25200
      },
      "PPT": {
        "dst": true,
        "offset": -25200
      },
      "PST": {
        "dst": false,
        "offset": -28800
      },
      "PWT": {
        "dst": true,
        "offset": -25200
      },
      "YST": {
        "dst": false,
        "offset": -32400
      }
    }
  },
  "America\/St_Barthelemy": {
    "region": "America",
    "timezone": "America\/St_Barthelemy",
    "has_dst": false,
    "location": {
      "country_code": "BL",
      "latitude": 17.88333,
      "longitude": -62.849999999999994,
      "comments": ""
    },
    "abbreviations": {
      "AST": {
        "dst": false,
        "offset": -14400
      }
    }
  },
  "America\/St_Johns": {
    "region": "America",
    "timezone": "America\/St_Johns",
    "has_dst": true,
    "location": {
      "country_code": "CA",
      "latitude": 47.56666000000001,
      "longitude": -52.71666999999999,
      "comments": "Newfoundland; Labrador (southeast)"
    },
    "abbreviations": {
      "NDDT": {
        "dst": true,
        "offset": -5400
      },
      "NDT": {
        "dst": true,
        "offset": -9000
      },
      "NPT": {
        "dst": true,
        "offset": -9000
      },
      "NST": {
        "dst": false,
        "offset": -12652
      },
      "NWT": {
        "dst": true,
        "offset": -9000
      }
    }
  },
  "America\/St_Kitts": {
    "region": "America",
    "timezone": "America\/St_Kitts",
    "has_dst": false,
    "location": {
      "country_code": "KN",
      "latitude": 17.299999999999997,
      "longitude": -62.71666999999999,
      "comments": ""
    },
    "abbreviations": {
      "AST": {
        "dst": false,
        "offset": -14400
      }
    }
  },
  "America\/St_Lucia": {
    "region": "America",
    "timezone": "America\/St_Lucia",
    "has_dst": false,
    "location": {
      "country_code": "LC",
      "latitude": 14.016660000000002,
      "longitude": -61,
      "comments": ""
    },
    "abbreviations": {
      "AST": {
        "dst": false,
        "offset": -14400
      }
    }
  },
  "America\/St_Thomas": {
    "region": "America",
    "timezone": "America\/St_Thomas",
    "has_dst": false,
    "location": {
      "country_code": "VI",
      "latitude": 18.349999999999994,
      "longitude": -64.93334,
      "comments": ""
    },
    "abbreviations": {
      "AST": {
        "dst": false,
        "offset": -14400
      }
    }
  },
  "America\/St_Vincent": {
    "region": "America",
    "timezone": "America\/St_Vincent",
    "has_dst": false,
    "location": {
      "country_code": "VC",
      "latitude": 13.150000000000006,
      "longitude": -61.23334,
      "comments": ""
    },
    "abbreviations": {
      "AST": {
        "dst": false,
        "offset": -14400
      }
    }
  },
  "America\/Swift_Current": {
    "region": "America",
    "timezone": "America\/Swift_Current",
    "has_dst": true,
    "location": {
      "country_code": "CA",
      "latitude": 50.28333000000001,
      "longitude": -107.83334,
      "comments": "CST - SK (midwest)"
    },
    "abbreviations": {
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "MDT": {
        "dst": true,
        "offset": -21600
      },
      "MPT": {
        "dst": true,
        "offset": -21600
      },
      "MST": {
        "dst": false,
        "offset": -25200
      },
      "MWT": {
        "dst": true,
        "offset": -21600
      }
    }
  },
  "America\/Tegucigalpa": {
    "region": "America",
    "timezone": "America\/Tegucigalpa",
    "has_dst": true,
    "location": {
      "country_code": "HN",
      "latitude": 14.099999999999994,
      "longitude": -87.21667,
      "comments": ""
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      }
    }
  },
  "America\/Thule": {
    "region": "America",
    "timezone": "America\/Thule",
    "has_dst": true,
    "location": {
      "country_code": "GL",
      "latitude": 76.56666000000001,
      "longitude": -68.78334,
      "comments": "Thule\/Pituffik"
    },
    "abbreviations": {
      "ADT": {
        "dst": true,
        "offset": -10800
      },
      "AST": {
        "dst": false,
        "offset": -14400
      }
    }
  },
  "America\/Tijuana": {
    "region": "America",
    "timezone": "America\/Tijuana",
    "has_dst": true,
    "location": {
      "country_code": "MX",
      "latitude": 32.53333000000001,
      "longitude": -117.01667,
      "comments": "Baja California"
    },
    "abbreviations": {
      "MST": {
        "dst": false,
        "offset": -25200
      },
      "PDT": {
        "dst": true,
        "offset": -25200
      },
      "PPT": {
        "dst": true,
        "offset": -25200
      },
      "PST": {
        "dst": false,
        "offset": -28800
      },
      "PWT": {
        "dst": true,
        "offset": -25200
      }
    }
  },
  "America\/Toronto": {
    "region": "America",
    "timezone": "America\/Toronto",
    "has_dst": true,
    "location": {
      "country_code": "CA",
      "latitude": 43.650000000000006,
      "longitude": -79.38334,
      "comments": "Eastern - ON, QC (most areas)"
    },
    "abbreviations": {
      "EDT": {
        "dst": true,
        "offset": -14400
      },
      "EPT": {
        "dst": true,
        "offset": -14400
      },
      "EST": {
        "dst": false,
        "offset": -18000
      },
      "EWT": {
        "dst": true,
        "offset": -14400
      }
    }
  },
  "America\/Tortola": {
    "region": "America",
    "timezone": "America\/Tortola",
    "has_dst": false,
    "location": {
      "country_code": "VG",
      "latitude": 18.450000000000003,
      "longitude": -64.61667,
      "comments": ""
    },
    "abbreviations": {
      "AST": {
        "dst": false,
        "offset": -14400
      }
    }
  },
  "America\/Vancouver": {
    "region": "America",
    "timezone": "America\/Vancouver",
    "has_dst": true,
    "location": {
      "country_code": "CA",
      "latitude": 49.26666,
      "longitude": -123.11667,
      "comments": "Pacific - BC (most areas)"
    },
    "abbreviations": {
      "PDT": {
        "dst": true,
        "offset": -25200
      },
      "PPT": {
        "dst": true,
        "offset": -25200
      },
      "PST": {
        "dst": false,
        "offset": -28800
      },
      "PWT": {
        "dst": true,
        "offset": -25200
      }
    }
  },
  "America\/Whitehorse": {
    "region": "America",
    "timezone": "America\/Whitehorse",
    "has_dst": true,
    "location": {
      "country_code": "CA",
      "latitude": 60.71665999999999,
      "longitude": -135.05001,
      "comments": "MST - Yukon (east)"
    },
    "abbreviations": {
      "PDT": {
        "dst": true,
        "offset": -25200
      },
      "PST": {
        "dst": false,
        "offset": -28800
      },
      "YDDT": {
        "dst": true,
        "offset": -25200
      },
      "YDT": {
        "dst": true,
        "offset": -28800
      },
      "YPT": {
        "dst": true,
        "offset": -28800
      },
      "YST": {
        "dst": false,
        "offset": -32400
      },
      "YWT": {
        "dst": true,
        "offset": -28800
      }
    }
  },
  "America\/Winnipeg": {
    "region": "America",
    "timezone": "America\/Winnipeg",
    "has_dst": true,
    "location": {
      "country_code": "CA",
      "latitude": 49.88333,
      "longitude": -97.15001,
      "comments": "Central - ON (west); Manitoba"
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": -18000
      },
      "CPT": {
        "dst": true,
        "offset": -18000
      },
      "CST": {
        "dst": false,
        "offset": -21600
      },
      "CWT": {
        "dst": true,
        "offset": -18000
      }
    }
  },
  "America\/Yakutat": {
    "region": "America",
    "timezone": "America\/Yakutat",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 59.546940000000006,
      "longitude": -139.72723,
      "comments": "Alaska - Yakutat"
    },
    "abbreviations": {
      "AKDT": {
        "dst": true,
        "offset": -28800
      },
      "AKST": {
        "dst": false,
        "offset": -32400
      },
      "YDT": {
        "dst": true,
        "offset": -28800
      },
      "YPT": {
        "dst": true,
        "offset": -28800
      },
      "YST": {
        "dst": false,
        "offset": -32400
      },
      "YWT": {
        "dst": true,
        "offset": -28800
      }
    }
  },
  "Antarctica\/Casey": {
    "region": "Antarctica",
    "timezone": "Antarctica\/Casey",
    "has_dst": false,
    "location": {
      "country_code": "AQ",
      "latitude": -66.28334,
      "longitude": 110.51666,
      "comments": "Casey"
    },
    "abbreviations": {
      "UTC+11": {
        "dst": false,
        "offset": 39600
      }
    }
  },
  "Antarctica\/Davis": {
    "region": "Antarctica",
    "timezone": "Antarctica\/Davis",
    "has_dst": false,
    "location": {
      "country_code": "AQ",
      "latitude": -68.58333999999999,
      "longitude": 77.96665999999999,
      "comments": "Davis"
    },
    "abbreviations": {
      "UTC+07": {
        "dst": false,
        "offset": 25200
      }
    }
  },
  "Antarctica\/DumontDUrville": {
    "region": "Antarctica",
    "timezone": "Antarctica\/DumontDUrville",
    "has_dst": false,
    "location": {
      "country_code": "AQ",
      "latitude": -66.66667,
      "longitude": 140.01666,
      "comments": "Dumont-d'Urville"
    },
    "abbreviations": {
      "UTC+10": {
        "dst": false,
        "offset": 36000
      }
    }
  },
  "Antarctica\/Macquarie": {
    "region": "Antarctica",
    "timezone": "Antarctica\/Macquarie",
    "has_dst": true,
    "location": {
      "country_code": "AU",
      "latitude": -54.5,
      "longitude": 158.95,
      "comments": "Macquarie Island"
    },
    "abbreviations": {
      "AEDT": {
        "dst": true,
        "offset": 39600
      },
      "AEST": {
        "dst": false,
        "offset": 36000
      }
    }
  },
  "Antarctica\/Mawson": {
    "region": "Antarctica",
    "timezone": "Antarctica\/Mawson",
    "has_dst": false,
    "location": {
      "country_code": "AQ",
      "latitude": -67.6,
      "longitude": 62.88333,
      "comments": "Mawson"
    },
    "abbreviations": {
      "UTC+05": {
        "dst": false,
        "offset": 18000
      }
    }
  },
  "Antarctica\/McMurdo": {
    "region": "Antarctica",
    "timezone": "Antarctica\/McMurdo",
    "has_dst": true,
    "location": {
      "country_code": "AQ",
      "latitude": -77.83333999999999,
      "longitude": 166.60000000000002,
      "comments": "New Zealand time - McMurdo, South Pole"
    },
    "abbreviations": {
      "NZDT": {
        "dst": true,
        "offset": 46800
      },
      "NZMT": {
        "dst": false,
        "offset": 41400
      },
      "NZST": {
        "dst": true,
        "offset": 45000
      }
    }
  },
  "Antarctica\/Palmer": {
    "region": "Antarctica",
    "timezone": "Antarctica\/Palmer",
    "has_dst": false,
    "location": {
      "country_code": "AQ",
      "latitude": -64.8,
      "longitude": -64.1,
      "comments": "Palmer"
    },
    "abbreviations": {
      "UTC-03": {
        "dst": false,
        "offset": -10800
      }
    }
  },
  "Antarctica\/Rothera": {
    "region": "Antarctica",
    "timezone": "Antarctica\/Rothera",
    "has_dst": false,
    "location": {
      "country_code": "AQ",
      "latitude": -67.56667,
      "longitude": -68.13334,
      "comments": "Rothera"
    },
    "abbreviations": {
      "UTC-03": {
        "dst": false,
        "offset": -10800
      }
    }
  },
  "Antarctica\/Syowa": {
    "region": "Antarctica",
    "timezone": "Antarctica\/Syowa",
    "has_dst": false,
    "location": {
      "country_code": "AQ",
      "latitude": -69.00612,
      "longitude": 39.59,
      "comments": "Syowa"
    },
    "abbreviations": {
      "UTC+03": {
        "dst": false,
        "offset": 10800
      }
    }
  },
  "Antarctica\/Troll": {
    "region": "Antarctica",
    "timezone": "Antarctica\/Troll",
    "has_dst": false,
    "location": {
      "country_code": "AQ",
      "latitude": -72.01139,
      "longitude": 2.5349999999999966,
      "comments": "Troll"
    },
    "abbreviations": {
      "UTC+00": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Antarctica\/Vostok": {
    "region": "Antarctica",
    "timezone": "Antarctica\/Vostok",
    "has_dst": false,
    "location": {
      "country_code": "AQ",
      "latitude": -78.40001,
      "longitude": 106.89999,
      "comments": "Vostok"
    },
    "abbreviations": {
      "UTC+06": {
        "dst": false,
        "offset": 21600
      }
    }
  },
  "Arctic\/Longyearbyen": {
    "region": "Arctic",
    "timezone": "Arctic\/Longyearbyen",
    "has_dst": true,
    "location": {
      "country_code": "SJ",
      "latitude": 78,
      "longitude": 16,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Asia\/Aden": {
    "region": "Asia",
    "timezone": "Asia\/Aden",
    "has_dst": false,
    "location": {
      "country_code": "YE",
      "latitude": 12.75,
      "longitude": 45.19999999999999,
      "comments": ""
    },
    "abbreviations": {
      "UTC+03": {
        "dst": false,
        "offset": 10800
      }
    }
  },
  "Asia\/Almaty": {
    "region": "Asia",
    "timezone": "Asia\/Almaty",
    "has_dst": false,
    "location": {
      "country_code": "KZ",
      "latitude": 43.25,
      "longitude": 76.94999999999999,
      "comments": "most of Kazakhstan"
    },
    "abbreviations": {
      "UTC+06": {
        "dst": false,
        "offset": 21600
      }
    }
  },
  "Asia\/Amman": {
    "region": "Asia",
    "timezone": "Asia\/Amman",
    "has_dst": true,
    "location": {
      "country_code": "JO",
      "latitude": 31.950000000000003,
      "longitude": 35.93333000000001,
      "comments": ""
    },
    "abbreviations": {
      "EEST": {
        "dst": true,
        "offset": 10800
      },
      "EET": {
        "dst": false,
        "offset": 7200
      }
    }
  },
  "Asia\/Anadyr": {
    "region": "Asia",
    "timezone": "Asia\/Anadyr",
    "has_dst": false,
    "location": {
      "country_code": "RU",
      "latitude": 64.75,
      "longitude": 177.48333000000002,
      "comments": "MSK+09 - Bering Sea"
    },
    "abbreviations": {
      "UTC+12": {
        "dst": false,
        "offset": 43200
      }
    }
  },
  "Asia\/Aqtau": {
    "region": "Asia",
    "timezone": "Asia\/Aqtau",
    "has_dst": false,
    "location": {
      "country_code": "KZ",
      "latitude": 44.51666,
      "longitude": 50.26666,
      "comments": "Mangghystau\/Mankistau"
    },
    "abbreviations": {
      "UTC+05": {
        "dst": false,
        "offset": 18000
      }
    }
  },
  "Asia\/Aqtobe": {
    "region": "Asia",
    "timezone": "Asia\/Aqtobe",
    "has_dst": false,
    "location": {
      "country_code": "KZ",
      "latitude": 50.28333000000001,
      "longitude": 57.16666000000001,
      "comments": "Aqtobe\/Aktobe"
    },
    "abbreviations": {
      "UTC+05": {
        "dst": false,
        "offset": 18000
      }
    }
  },
  "Asia\/Ashgabat": {
    "region": "Asia",
    "timezone": "Asia\/Ashgabat",
    "has_dst": false,
    "location": {
      "country_code": "TM",
      "latitude": 37.95,
      "longitude": 58.38333,
      "comments": ""
    },
    "abbreviations": {
      "UTC+05": {
        "dst": false,
        "offset": 18000
      }
    }
  },
  "Asia\/Atyrau": {
    "region": "Asia",
    "timezone": "Asia\/Atyrau",
    "has_dst": false,
    "location": {
      "country_code": "KZ",
      "latitude": 47.116659999999996,
      "longitude": 51.93333000000001,
      "comments": "Atyrau\/Atirau\/Gur'yev"
    },
    "abbreviations": {
      "UTC+05": {
        "dst": false,
        "offset": 18000
      }
    }
  },
  "Asia\/Baghdad": {
    "region": "Asia",
    "timezone": "Asia\/Baghdad",
    "has_dst": false,
    "location": {
      "country_code": "IQ",
      "latitude": 33.349999999999994,
      "longitude": 44.41666000000001,
      "comments": ""
    },
    "abbreviations": {
      "BMT": {
        "dst": false,
        "offset": 10656
      }
    }
  },
  "Asia\/Bahrain": {
    "region": "Asia",
    "timezone": "Asia\/Bahrain",
    "has_dst": false,
    "location": {
      "country_code": "BH",
      "latitude": 26.38333,
      "longitude": 50.58332999999999,
      "comments": ""
    },
    "abbreviations": {
      "UTC+03": {
        "dst": false,
        "offset": 10800
      }
    }
  },
  "Asia\/Baku": {
    "region": "Asia",
    "timezone": "Asia\/Baku",
    "has_dst": false,
    "location": {
      "country_code": "AZ",
      "latitude": 40.38333,
      "longitude": 49.849999999999994,
      "comments": ""
    },
    "abbreviations": {
      "UTC+04": {
        "dst": false,
        "offset": 14400
      }
    }
  },
  "Asia\/Bangkok": {
    "region": "Asia",
    "timezone": "Asia\/Bangkok",
    "has_dst": false,
    "location": {
      "country_code": "TH",
      "latitude": 13.75,
      "longitude": 100.51666,
      "comments": ""
    },
    "abbreviations": {
      "BMT": {
        "dst": false,
        "offset": 24124
      }
    }
  },
  "Asia\/Barnaul": {
    "region": "Asia",
    "timezone": "Asia\/Barnaul",
    "has_dst": false,
    "location": {
      "country_code": "RU",
      "latitude": 53.366659999999996,
      "longitude": 83.75,
      "comments": "MSK+04 - Altai"
    },
    "abbreviations": {
      "UTC+07": {
        "dst": false,
        "offset": 25200
      }
    }
  },
  "Asia\/Beirut": {
    "region": "Asia",
    "timezone": "Asia\/Beirut",
    "has_dst": true,
    "location": {
      "country_code": "LB",
      "latitude": 33.88333,
      "longitude": 35.5,
      "comments": ""
    },
    "abbreviations": {
      "EEST": {
        "dst": true,
        "offset": 10800
      },
      "EET": {
        "dst": false,
        "offset": 7200
      }
    }
  },
  "Asia\/Bishkek": {
    "region": "Asia",
    "timezone": "Asia\/Bishkek",
    "has_dst": false,
    "location": {
      "country_code": "KG",
      "latitude": 42.900000000000006,
      "longitude": 74.6,
      "comments": ""
    },
    "abbreviations": {
      "UTC+06": {
        "dst": false,
        "offset": 21600
      }
    }
  },
  "Asia\/Brunei": {
    "region": "Asia",
    "timezone": "Asia\/Brunei",
    "has_dst": false,
    "location": {
      "country_code": "BN",
      "latitude": 4.933329999999998,
      "longitude": 114.91665999999998,
      "comments": ""
    },
    "abbreviations": {
      "UTC+08": {
        "dst": false,
        "offset": 28800
      }
    }
  },
  "Asia\/Chita": {
    "region": "Asia",
    "timezone": "Asia\/Chita",
    "has_dst": false,
    "location": {
      "country_code": "RU",
      "latitude": 52.05000000000001,
      "longitude": 113.46665999999999,
      "comments": "MSK+06 - Zabaykalsky"
    },
    "abbreviations": {
      "UTC+09": {
        "dst": false,
        "offset": 32400
      }
    }
  },
  "Asia\/Choibalsan": {
    "region": "Asia",
    "timezone": "Asia\/Choibalsan",
    "has_dst": false,
    "location": {
      "country_code": "MN",
      "latitude": 48.06666000000001,
      "longitude": 114.5,
      "comments": "Dornod, Sukhbaatar"
    },
    "abbreviations": {
      "UTC+08": {
        "dst": false,
        "offset": 28800
      }
    }
  },
  "Asia\/Colombo": {
    "region": "Asia",
    "timezone": "Asia\/Colombo",
    "has_dst": false,
    "location": {
      "country_code": "LK",
      "latitude": 6.933329999999998,
      "longitude": 79.85000000000002,
      "comments": ""
    },
    "abbreviations": {
      "MMT": {
        "dst": false,
        "offset": 19172
      }
    }
  },
  "Asia\/Damascus": {
    "region": "Asia",
    "timezone": "Asia\/Damascus",
    "has_dst": true,
    "location": {
      "country_code": "SY",
      "latitude": 33.5,
      "longitude": 36.30000000000001,
      "comments": ""
    },
    "abbreviations": {
      "EEST": {
        "dst": true,
        "offset": 10800
      },
      "EET": {
        "dst": false,
        "offset": 7200
      }
    }
  },
  "Asia\/Dhaka": {
    "region": "Asia",
    "timezone": "Asia\/Dhaka",
    "has_dst": false,
    "location": {
      "country_code": "BD",
      "latitude": 23.716660000000005,
      "longitude": 90.41665999999998,
      "comments": ""
    },
    "abbreviations": {
      "HMT": {
        "dst": false,
        "offset": 21200
      }
    }
  },
  "Asia\/Dili": {
    "region": "Asia",
    "timezone": "Asia\/Dili",
    "has_dst": false,
    "location": {
      "country_code": "TL",
      "latitude": -8.549999999999997,
      "longitude": 125.58332999999999,
      "comments": ""
    },
    "abbreviations": {
      "UTC+09": {
        "dst": false,
        "offset": 32400
      }
    }
  },
  "Asia\/Dubai": {
    "region": "Asia",
    "timezone": "Asia\/Dubai",
    "has_dst": false,
    "location": {
      "country_code": "AE",
      "latitude": 25.299999999999997,
      "longitude": 55.30000000000001,
      "comments": ""
    },
    "abbreviations": {
      "UTC+04": {
        "dst": false,
        "offset": 14400
      }
    }
  },
  "Asia\/Dushanbe": {
    "region": "Asia",
    "timezone": "Asia\/Dushanbe",
    "has_dst": false,
    "location": {
      "country_code": "TJ",
      "latitude": 38.58332999999999,
      "longitude": 68.80000000000001,
      "comments": ""
    },
    "abbreviations": {
      "UTC+05": {
        "dst": false,
        "offset": 18000
      }
    }
  },
  "Asia\/Famagusta": {
    "region": "Asia",
    "timezone": "Asia\/Famagusta",
    "has_dst": true,
    "location": {
      "country_code": "CY",
      "latitude": 35.116659999999996,
      "longitude": 33.94999999999999,
      "comments": "Northern Cyprus"
    },
    "abbreviations": {
      "EEST": {
        "dst": true,
        "offset": 10800
      },
      "EET": {
        "dst": false,
        "offset": 7200
      }
    }
  },
  "Asia\/Gaza": {
    "region": "Asia",
    "timezone": "Asia\/Gaza",
    "has_dst": true,
    "location": {
      "country_code": "PS",
      "latitude": 31.5,
      "longitude": 34.46665999999999,
      "comments": "Gaza Strip"
    },
    "abbreviations": {
      "EEST": {
        "dst": true,
        "offset": 10800
      },
      "EET": {
        "dst": false,
        "offset": 7200
      },
      "IDT": {
        "dst": true,
        "offset": 10800
      },
      "IST": {
        "dst": false,
        "offset": 7200
      }
    }
  },
  "Asia\/Hebron": {
    "region": "Asia",
    "timezone": "Asia\/Hebron",
    "has_dst": true,
    "location": {
      "country_code": "PS",
      "latitude": 31.533330000000007,
      "longitude": 35.095,
      "comments": "West Bank"
    },
    "abbreviations": {
      "EEST": {
        "dst": true,
        "offset": 10800
      },
      "EET": {
        "dst": false,
        "offset": 7200
      },
      "IDT": {
        "dst": true,
        "offset": 10800
      },
      "IST": {
        "dst": false,
        "offset": 7200
      }
    }
  },
  "Asia\/Ho_Chi_Minh": {
    "region": "Asia",
    "timezone": "Asia\/Ho_Chi_Minh",
    "has_dst": false,
    "location": {
      "country_code": "VN",
      "latitude": 10.75,
      "longitude": 106.66665999999998,
      "comments": ""
    },
    "abbreviations": {
      "PLMT": {
        "dst": false,
        "offset": 25590
      }
    }
  },
  "Asia\/Hong_Kong": {
    "region": "Asia",
    "timezone": "Asia\/Hong_Kong",
    "has_dst": true,
    "location": {
      "country_code": "HK",
      "latitude": 22.283330000000007,
      "longitude": 114.14999,
      "comments": ""
    },
    "abbreviations": {
      "HKST": {
        "dst": true,
        "offset": 32400
      },
      "HKT": {
        "dst": false,
        "offset": 30600
      },
      "JST": {
        "dst": false,
        "offset": 32400
      }
    }
  },
  "Asia\/Hovd": {
    "region": "Asia",
    "timezone": "Asia\/Hovd",
    "has_dst": false,
    "location": {
      "country_code": "MN",
      "latitude": 48.01666,
      "longitude": 91.64999,
      "comments": "Bayan-Olgiy, Govi-Altai, Hovd, Uvs, Zavkhan"
    },
    "abbreviations": {
      "UTC+07": {
        "dst": false,
        "offset": 25200
      }
    }
  },
  "Asia\/Irkutsk": {
    "region": "Asia",
    "timezone": "Asia\/Irkutsk",
    "has_dst": false,
    "location": {
      "country_code": "RU",
      "latitude": 52.26666,
      "longitude": 104.33332999999999,
      "comments": "MSK+05 - Irkutsk, Buryatia"
    },
    "abbreviations": {
      "IMT": {
        "dst": false,
        "offset": 25025
      }
    }
  },
  "Asia\/Jakarta": {
    "region": "Asia",
    "timezone": "Asia\/Jakarta",
    "has_dst": false,
    "location": {
      "country_code": "ID",
      "latitude": -6.166669999999996,
      "longitude": 106.80000000000001,
      "comments": "Java, Sumatra"
    },
    "abbreviations": {
      "BMT": {
        "dst": false,
        "offset": 25632
      },
      "WIB": {
        "dst": false,
        "offset": 25200
      }
    }
  },
  "Asia\/Jayapura": {
    "region": "Asia",
    "timezone": "Asia\/Jayapura",
    "has_dst": false,
    "location": {
      "country_code": "ID",
      "latitude": -2.5333399999999955,
      "longitude": 140.7,
      "comments": "New Guinea (West Papua \/ Irian Jaya); Malukus\/Moluccas"
    },
    "abbreviations": {
      "WIT": {
        "dst": false,
        "offset": 32400
      }
    }
  },
  "Asia\/Jerusalem": {
    "region": "Asia",
    "timezone": "Asia\/Jerusalem",
    "has_dst": true,
    "location": {
      "country_code": "IL",
      "latitude": 31.780550000000005,
      "longitude": 35.22388000000001,
      "comments": ""
    },
    "abbreviations": {
      "IDDT": {
        "dst": true,
        "offset": 14400
      },
      "IDT": {
        "dst": true,
        "offset": 10800
      },
      "IST": {
        "dst": false,
        "offset": 7200
      },
      "JMT": {
        "dst": false,
        "offset": 8440
      }
    }
  },
  "Asia\/Kabul": {
    "region": "Asia",
    "timezone": "Asia\/Kabul",
    "has_dst": false,
    "location": {
      "country_code": "AF",
      "latitude": 34.51666,
      "longitude": 69.19999999999999,
      "comments": ""
    },
    "abbreviations": {
      "UTC+0430": {
        "dst": false,
        "offset": 16200
      }
    }
  },
  "Asia\/Kamchatka": {
    "region": "Asia",
    "timezone": "Asia\/Kamchatka",
    "has_dst": false,
    "location": {
      "country_code": "RU",
      "latitude": 53.01666,
      "longitude": 158.64999999999998,
      "comments": "MSK+09 - Kamchatka"
    },
    "abbreviations": {
      "UTC+12": {
        "dst": false,
        "offset": 43200
      }
    }
  },
  "Asia\/Karachi": {
    "region": "Asia",
    "timezone": "Asia\/Karachi",
    "has_dst": true,
    "location": {
      "country_code": "PK",
      "latitude": 24.866659999999996,
      "longitude": 67.05000000000001,
      "comments": ""
    },
    "abbreviations": {
      "PKST": {
        "dst": true,
        "offset": 21600
      },
      "PKT": {
        "dst": false,
        "offset": 18000
      }
    }
  },
  "Asia\/Kathmandu": {
    "region": "Asia",
    "timezone": "Asia\/Kathmandu",
    "has_dst": false,
    "location": {
      "country_code": "NP",
      "latitude": 27.716660000000005,
      "longitude": 85.31666000000001,
      "comments": ""
    },
    "abbreviations": {
      "UTC+0545": {
        "dst": false,
        "offset": 20700
      }
    }
  },
  "Asia\/Khandyga": {
    "region": "Asia",
    "timezone": "Asia\/Khandyga",
    "has_dst": false,
    "location": {
      "country_code": "RU",
      "latitude": 62.65638000000001,
      "longitude": 135.55388,
      "comments": "MSK+06 - Tomponsky, Ust-Maysky"
    },
    "abbreviations": {
      "UTC+09": {
        "dst": false,
        "offset": 32400
      }
    }
  },
  "Asia\/Kolkata": {
    "region": "Asia",
    "timezone": "Asia\/Kolkata",
    "has_dst": false,
    "location": {
      "country_code": "IN",
      "latitude": 22.533330000000007,
      "longitude": 88.36666000000002,
      "comments": ""
    },
    "abbreviations": {
      "IST": {
        "dst": false,
        "offset": 19800
      },
      "MMT": {
        "dst": false,
        "offset": 19270
      }
    }
  },
  "Asia\/Krasnoyarsk": {
    "region": "Asia",
    "timezone": "Asia\/Krasnoyarsk",
    "has_dst": false,
    "location": {
      "country_code": "RU",
      "latitude": 56.01666,
      "longitude": 92.83332999999999,
      "comments": "MSK+04 - Krasnoyarsk area"
    },
    "abbreviations": {
      "UTC+07": {
        "dst": false,
        "offset": 25200
      }
    }
  },
  "Asia\/Kuala_Lumpur": {
    "region": "Asia",
    "timezone": "Asia\/Kuala_Lumpur",
    "has_dst": false,
    "location": {
      "country_code": "MY",
      "latitude": 3.166659999999993,
      "longitude": 101.69999999999999,
      "comments": "Malaysia (peninsula)"
    },
    "abbreviations": {
      "SMT": {
        "dst": false,
        "offset": 24925
      }
    }
  },
  "Asia\/Kuching": {
    "region": "Asia",
    "timezone": "Asia\/Kuching",
    "has_dst": false,
    "location": {
      "country_code": "MY",
      "latitude": 1.5499999999999972,
      "longitude": 110.33332999999999,
      "comments": "Sabah, Sarawak"
    },
    "abbreviations": {
      "UTC+08": {
        "dst": false,
        "offset": 28800
      }
    }
  },
  "Asia\/Kuwait": {
    "region": "Asia",
    "timezone": "Asia\/Kuwait",
    "has_dst": false,
    "location": {
      "country_code": "KW",
      "latitude": 29.333330000000004,
      "longitude": 47.983329999999995,
      "comments": ""
    },
    "abbreviations": {
      "UTC+03": {
        "dst": false,
        "offset": 10800
      }
    }
  },
  "Asia\/Macau": {
    "region": "Asia",
    "timezone": "Asia\/Macau",
    "has_dst": true,
    "location": {
      "country_code": "MO",
      "latitude": 22.19722,
      "longitude": 113.54165999999998,
      "comments": ""
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": 32400
      },
      "CST": {
        "dst": false,
        "offset": 28800
      }
    }
  },
  "Asia\/Magadan": {
    "region": "Asia",
    "timezone": "Asia\/Magadan",
    "has_dst": false,
    "location": {
      "country_code": "RU",
      "latitude": 59.56666000000001,
      "longitude": 150.8,
      "comments": "MSK+08 - Magadan"
    },
    "abbreviations": {
      "UTC+11": {
        "dst": false,
        "offset": 39600
      }
    }
  },
  "Asia\/Makassar": {
    "region": "Asia",
    "timezone": "Asia\/Makassar",
    "has_dst": false,
    "location": {
      "country_code": "ID",
      "latitude": -5.116669999999999,
      "longitude": 119.39999,
      "comments": "Borneo (east, south); Sulawesi\/Celebes, Bali, Nusa Tengarra; Timor (west)"
    },
    "abbreviations": {
      "MMT": {
        "dst": false,
        "offset": 28656
      },
      "WITA": {
        "dst": false,
        "offset": 28800
      }
    }
  },
  "Asia\/Manila": {
    "region": "Asia",
    "timezone": "Asia\/Manila",
    "has_dst": true,
    "location": {
      "country_code": "PH",
      "latitude": 14.583330000000004,
      "longitude": 121,
      "comments": ""
    },
    "abbreviations": {
      "JST": {
        "dst": false,
        "offset": 32400
      },
      "PDT": {
        "dst": true,
        "offset": 32400
      },
      "PST": {
        "dst": false,
        "offset": 28800
      }
    }
  },
  "Asia\/Muscat": {
    "region": "Asia",
    "timezone": "Asia\/Muscat",
    "has_dst": false,
    "location": {
      "country_code": "OM",
      "latitude": 23.599999999999994,
      "longitude": 58.58332999999999,
      "comments": ""
    },
    "abbreviations": {
      "UTC+04": {
        "dst": false,
        "offset": 14400
      }
    }
  },
  "Asia\/Nicosia": {
    "region": "Asia",
    "timezone": "Asia\/Nicosia",
    "has_dst": true,
    "location": {
      "country_code": "CY",
      "latitude": 35.16665999999999,
      "longitude": 33.366659999999996,
      "comments": "most of Cyprus"
    },
    "abbreviations": {
      "EEST": {
        "dst": true,
        "offset": 10800
      },
      "EET": {
        "dst": false,
        "offset": 7200
      }
    }
  },
  "Asia\/Novokuznetsk": {
    "region": "Asia",
    "timezone": "Asia\/Novokuznetsk",
    "has_dst": false,
    "location": {
      "country_code": "RU",
      "latitude": 53.75,
      "longitude": 87.11666000000002,
      "comments": "MSK+04 - Kemerovo"
    },
    "abbreviations": {
      "UTC+07": {
        "dst": false,
        "offset": 25200
      }
    }
  },
  "Asia\/Novosibirsk": {
    "region": "Asia",
    "timezone": "Asia\/Novosibirsk",
    "has_dst": false,
    "location": {
      "country_code": "RU",
      "latitude": 55.03333000000001,
      "longitude": 82.91665999999998,
      "comments": "MSK+04 - Novosibirsk"
    },
    "abbreviations": {
      "UTC+07": {
        "dst": false,
        "offset": 25200
      }
    }
  },
  "Asia\/Omsk": {
    "region": "Asia",
    "timezone": "Asia\/Omsk",
    "has_dst": false,
    "location": {
      "country_code": "RU",
      "latitude": 55,
      "longitude": 73.4,
      "comments": "MSK+03 - Omsk"
    },
    "abbreviations": {
      "UTC+06": {
        "dst": false,
        "offset": 21600
      }
    }
  },
  "Asia\/Oral": {
    "region": "Asia",
    "timezone": "Asia\/Oral",
    "has_dst": false,
    "location": {
      "country_code": "KZ",
      "latitude": 51.21665999999999,
      "longitude": 51.349999999999994,
      "comments": "West Kazakhstan"
    },
    "abbreviations": {
      "UTC+05": {
        "dst": false,
        "offset": 18000
      }
    }
  },
  "Asia\/Phnom_Penh": {
    "region": "Asia",
    "timezone": "Asia\/Phnom_Penh",
    "has_dst": false,
    "location": {
      "country_code": "KH",
      "latitude": 11.549999999999997,
      "longitude": 104.91665999999998,
      "comments": ""
    },
    "abbreviations": {
      "BMT": {
        "dst": false,
        "offset": 24124
      }
    }
  },
  "Asia\/Pontianak": {
    "region": "Asia",
    "timezone": "Asia\/Pontianak",
    "has_dst": false,
    "location": {
      "country_code": "ID",
      "latitude": -0.033339999999995484,
      "longitude": 109.33332999999999,
      "comments": "Borneo (west, central)"
    },
    "abbreviations": {
      "PMT": {
        "dst": false,
        "offset": 26240
      },
      "WIB": {
        "dst": false,
        "offset": 25200
      },
      "WITA": {
        "dst": false,
        "offset": 28800
      }
    }
  },
  "Asia\/Pyongyang": {
    "region": "Asia",
    "timezone": "Asia\/Pyongyang",
    "has_dst": false,
    "location": {
      "country_code": "KP",
      "latitude": 39.01666,
      "longitude": 125.75,
      "comments": ""
    },
    "abbreviations": {
      "JST": {
        "dst": false,
        "offset": 32400
      },
      "KST": {
        "dst": false,
        "offset": 30600
      }
    }
  },
  "Asia\/Qatar": {
    "region": "Asia",
    "timezone": "Asia\/Qatar",
    "has_dst": false,
    "location": {
      "country_code": "QA",
      "latitude": 25.283330000000007,
      "longitude": 51.53333000000001,
      "comments": ""
    },
    "abbreviations": {
      "UTC+03": {
        "dst": false,
        "offset": 10800
      }
    }
  },
  "Asia\/Qostanay": {
    "region": "Asia",
    "timezone": "Asia\/Qostanay",
    "has_dst": false,
    "location": {
      "country_code": "KZ",
      "latitude": 53.199990000000014,
      "longitude": 63.616659999999996,
      "comments": "Qostanay\/Kostanay\/Kustanay"
    },
    "abbreviations": {
      "UTC+06": {
        "dst": false,
        "offset": 21600
      }
    }
  },
  "Asia\/Qyzylorda": {
    "region": "Asia",
    "timezone": "Asia\/Qyzylorda",
    "has_dst": false,
    "location": {
      "country_code": "KZ",
      "latitude": 44.80000000000001,
      "longitude": 65.46665999999999,
      "comments": "Qyzylorda\/Kyzylorda\/Kzyl-Orda"
    },
    "abbreviations": {
      "UTC+05": {
        "dst": false,
        "offset": 18000
      }
    }
  },
  "Asia\/Riyadh": {
    "region": "Asia",
    "timezone": "Asia\/Riyadh",
    "has_dst": false,
    "location": {
      "country_code": "SA",
      "latitude": 24.63333,
      "longitude": 46.71665999999999,
      "comments": ""
    },
    "abbreviations": {
      "UTC+03": {
        "dst": false,
        "offset": 10800
      }
    }
  },
  "Asia\/Sakhalin": {
    "region": "Asia",
    "timezone": "Asia\/Sakhalin",
    "has_dst": false,
    "location": {
      "country_code": "RU",
      "latitude": 46.96665999999999,
      "longitude": 142.7,
      "comments": "MSK+08 - Sakhalin Island"
    },
    "abbreviations": {
      "UTC+11": {
        "dst": false,
        "offset": 39600
      }
    }
  },
  "Asia\/Samarkand": {
    "region": "Asia",
    "timezone": "Asia\/Samarkand",
    "has_dst": false,
    "location": {
      "country_code": "UZ",
      "latitude": 39.66666000000001,
      "longitude": 66.80000000000001,
      "comments": "Uzbekistan (west)"
    },
    "abbreviations": {
      "UTC+05": {
        "dst": false,
        "offset": 18000
      }
    }
  },
  "Asia\/Seoul": {
    "region": "Asia",
    "timezone": "Asia\/Seoul",
    "has_dst": true,
    "location": {
      "country_code": "KR",
      "latitude": 37.55,
      "longitude": 126.96665999999999,
      "comments": ""
    },
    "abbreviations": {
      "JST": {
        "dst": false,
        "offset": 32400
      },
      "KDT": {
        "dst": true,
        "offset": 34200
      },
      "KST": {
        "dst": false,
        "offset": 32400
      }
    }
  },
  "Asia\/Shanghai": {
    "region": "Asia",
    "timezone": "Asia\/Shanghai",
    "has_dst": true,
    "location": {
      "country_code": "CN",
      "latitude": 31.233329999999995,
      "longitude": 121.46665999999999,
      "comments": "Beijing Time"
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": 32400
      },
      "CST": {
        "dst": false,
        "offset": 28800
      }
    }
  },
  "Asia\/Singapore": {
    "region": "Asia",
    "timezone": "Asia\/Singapore",
    "has_dst": false,
    "location": {
      "country_code": "SG",
      "latitude": 1.2833300000000065,
      "longitude": 103.85000000000002,
      "comments": ""
    },
    "abbreviations": {
      "SMT": {
        "dst": false,
        "offset": 24925
      }
    }
  },
  "Asia\/Srednekolymsk": {
    "region": "Asia",
    "timezone": "Asia\/Srednekolymsk",
    "has_dst": false,
    "location": {
      "country_code": "RU",
      "latitude": 67.46665999999999,
      "longitude": 153.71666,
      "comments": "MSK+08 - Sakha (E); N Kuril Is"
    },
    "abbreviations": {
      "UTC+11": {
        "dst": false,
        "offset": 39600
      }
    }
  },
  "Asia\/Taipei": {
    "region": "Asia",
    "timezone": "Asia\/Taipei",
    "has_dst": true,
    "location": {
      "country_code": "TW",
      "latitude": 25.049999999999997,
      "longitude": 121.5,
      "comments": ""
    },
    "abbreviations": {
      "CDT": {
        "dst": true,
        "offset": 32400
      },
      "CST": {
        "dst": false,
        "offset": 28800
      },
      "JST": {
        "dst": false,
        "offset": 32400
      }
    }
  },
  "Asia\/Tashkent": {
    "region": "Asia",
    "timezone": "Asia\/Tashkent",
    "has_dst": false,
    "location": {
      "country_code": "UZ",
      "latitude": 41.33332999999999,
      "longitude": 69.30000000000001,
      "comments": "Uzbekistan (east)"
    },
    "abbreviations": {
      "UTC+05": {
        "dst": false,
        "offset": 18000
      }
    }
  },
  "Asia\/Tbilisi": {
    "region": "Asia",
    "timezone": "Asia\/Tbilisi",
    "has_dst": false,
    "location": {
      "country_code": "GE",
      "latitude": 41.71665999999999,
      "longitude": 44.81666000000001,
      "comments": ""
    },
    "abbreviations": {
      "TBMT": {
        "dst": false,
        "offset": 10751
      }
    }
  },
  "Asia\/Tehran": {
    "region": "Asia",
    "timezone": "Asia\/Tehran",
    "has_dst": false,
    "location": {
      "country_code": "IR",
      "latitude": 35.66665999999999,
      "longitude": 51.43333000000001,
      "comments": ""
    },
    "abbreviations": {
      "TMT": {
        "dst": false,
        "offset": 12344
      }
    }
  },
  "Asia\/Thimphu": {
    "region": "Asia",
    "timezone": "Asia\/Thimphu",
    "has_dst": false,
    "location": {
      "country_code": "BT",
      "latitude": 27.466660000000005,
      "longitude": 89.64999,
      "comments": ""
    },
    "abbreviations": {
      "UTC+06": {
        "dst": false,
        "offset": 21600
      }
    }
  },
  "Asia\/Tokyo": {
    "region": "Asia",
    "timezone": "Asia\/Tokyo",
    "has_dst": true,
    "location": {
      "country_code": "JP",
      "latitude": 35.654439999999994,
      "longitude": 139.74471999999997,
      "comments": ""
    },
    "abbreviations": {
      "JDT": {
        "dst": true,
        "offset": 36000
      },
      "JST": {
        "dst": false,
        "offset": 32400
      }
    }
  },
  "Asia\/Tomsk": {
    "region": "Asia",
    "timezone": "Asia\/Tomsk",
    "has_dst": false,
    "location": {
      "country_code": "RU",
      "latitude": 56.5,
      "longitude": 84.96665999999999,
      "comments": "MSK+04 - Tomsk"
    },
    "abbreviations": {
      "UTC+07": {
        "dst": false,
        "offset": 25200
      }
    }
  },
  "Asia\/Ulaanbaatar": {
    "region": "Asia",
    "timezone": "Asia\/Ulaanbaatar",
    "has_dst": false,
    "location": {
      "country_code": "MN",
      "latitude": 47.91666000000001,
      "longitude": 106.88333,
      "comments": "most of Mongolia"
    },
    "abbreviations": {
      "UTC+08": {
        "dst": false,
        "offset": 28800
      }
    }
  },
  "Asia\/Urumqi": {
    "region": "Asia",
    "timezone": "Asia\/Urumqi",
    "has_dst": false,
    "location": {
      "country_code": "CN",
      "latitude": 43.80000000000001,
      "longitude": 87.58332999999999,
      "comments": "Xinjiang Time"
    },
    "abbreviations": {
      "UTC+06": {
        "dst": false,
        "offset": 21600
      }
    }
  },
  "Asia\/Ust-Nera": {
    "region": "Asia",
    "timezone": "Asia\/Ust-Nera",
    "has_dst": false,
    "location": {
      "country_code": "RU",
      "latitude": 64.56027,
      "longitude": 143.22665999999998,
      "comments": "MSK+07 - Oymyakonsky"
    },
    "abbreviations": {
      "UTC+10": {
        "dst": false,
        "offset": 36000
      }
    }
  },
  "Asia\/Vientiane": {
    "region": "Asia",
    "timezone": "Asia\/Vientiane",
    "has_dst": false,
    "location": {
      "country_code": "LA",
      "latitude": 17.966660000000005,
      "longitude": 102.60000000000002,
      "comments": ""
    },
    "abbreviations": {
      "BMT": {
        "dst": false,
        "offset": 24124
      }
    }
  },
  "Asia\/Vladivostok": {
    "region": "Asia",
    "timezone": "Asia\/Vladivostok",
    "has_dst": false,
    "location": {
      "country_code": "RU",
      "latitude": 43.16666000000001,
      "longitude": 131.93333,
      "comments": "MSK+07 - Amur River"
    },
    "abbreviations": {
      "UTC+10": {
        "dst": false,
        "offset": 36000
      }
    }
  },
  "Asia\/Yakutsk": {
    "region": "Asia",
    "timezone": "Asia\/Yakutsk",
    "has_dst": false,
    "location": {
      "country_code": "RU",
      "latitude": 62,
      "longitude": 129.66665999999998,
      "comments": "MSK+06 - Lena River"
    },
    "abbreviations": {
      "UTC+09": {
        "dst": false,
        "offset": 32400
      }
    }
  },
  "Asia\/Yangon": {
    "region": "Asia",
    "timezone": "Asia\/Yangon",
    "has_dst": false,
    "location": {
      "country_code": "MM",
      "latitude": 16.783330000000007,
      "longitude": 96.16665999999998,
      "comments": ""
    },
    "abbreviations": {
      "RMT": {
        "dst": false,
        "offset": 23087
      }
    }
  },
  "Asia\/Yekaterinburg": {
    "region": "Asia",
    "timezone": "Asia\/Yekaterinburg",
    "has_dst": false,
    "location": {
      "country_code": "RU",
      "latitude": 56.849999999999994,
      "longitude": 60.599999999999994,
      "comments": "MSK+02 - Urals"
    },
    "abbreviations": {
      "PMT": {
        "dst": false,
        "offset": 13505
      }
    }
  },
  "Asia\/Yerevan": {
    "region": "Asia",
    "timezone": "Asia\/Yerevan",
    "has_dst": false,
    "location": {
      "country_code": "AM",
      "latitude": 40.18333000000001,
      "longitude": 44.5,
      "comments": ""
    },
    "abbreviations": {
      "UTC+04": {
        "dst": false,
        "offset": 14400
      }
    }
  },
  "Atlantic\/Azores": {
    "region": "Atlantic",
    "timezone": "Atlantic\/Azores",
    "has_dst": false,
    "location": {
      "country_code": "PT",
      "latitude": 37.733329999999995,
      "longitude": -25.66667000000001,
      "comments": "Azores"
    },
    "abbreviations": {
      "HMT": {
        "dst": false,
        "offset": -6872
      },
      "WET": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Atlantic\/Bermuda": {
    "region": "Atlantic",
    "timezone": "Atlantic\/Bermuda",
    "has_dst": true,
    "location": {
      "country_code": "BM",
      "latitude": 32.28333000000001,
      "longitude": -64.76667,
      "comments": ""
    },
    "abbreviations": {
      "ADT": {
        "dst": true,
        "offset": -10800
      },
      "AST": {
        "dst": false,
        "offset": -14400
      }
    }
  },
  "Atlantic\/Canary": {
    "region": "Atlantic",
    "timezone": "Atlantic\/Canary",
    "has_dst": true,
    "location": {
      "country_code": "ES",
      "latitude": 28.099999999999994,
      "longitude": -15.400000000000006,
      "comments": "Canary Islands"
    },
    "abbreviations": {
      "WEST": {
        "dst": true,
        "offset": 3600
      },
      "WET": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Atlantic\/Cape_Verde": {
    "region": "Atlantic",
    "timezone": "Atlantic\/Cape_Verde",
    "has_dst": false,
    "location": {
      "country_code": "CV",
      "latitude": 14.916659999999993,
      "longitude": -23.516670000000005,
      "comments": ""
    },
    "abbreviations": {
      "UTC-01": {
        "dst": false,
        "offset": -3600
      }
    }
  },
  "Atlantic\/Faroe": {
    "region": "Atlantic",
    "timezone": "Atlantic\/Faroe",
    "has_dst": true,
    "location": {
      "country_code": "FO",
      "latitude": 62.01666,
      "longitude": -6.766670000000005,
      "comments": ""
    },
    "abbreviations": {
      "WEST": {
        "dst": true,
        "offset": 3600
      },
      "WET": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Atlantic\/Madeira": {
    "region": "Atlantic",
    "timezone": "Atlantic\/Madeira",
    "has_dst": true,
    "location": {
      "country_code": "PT",
      "latitude": 32.63333,
      "longitude": -16.900000000000006,
      "comments": "Madeira Islands"
    },
    "abbreviations": {
      "FMT": {
        "dst": false,
        "offset": -4056
      },
      "WEST": {
        "dst": true,
        "offset": 3600
      },
      "WET": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Atlantic\/Reykjavik": {
    "region": "Atlantic",
    "timezone": "Atlantic\/Reykjavik",
    "has_dst": false,
    "location": {
      "country_code": "IS",
      "latitude": 64.15,
      "longitude": -21.849999999999994,
      "comments": ""
    },
    "abbreviations": {
      "GMT": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Atlantic\/South_Georgia": {
    "region": "Atlantic",
    "timezone": "Atlantic\/South_Georgia",
    "has_dst": false,
    "location": {
      "country_code": "GS",
      "latitude": -54.26667,
      "longitude": -36.53334000000001,
      "comments": ""
    },
    "abbreviations": {
      "UTC-02": {
        "dst": false,
        "offset": -7200
      }
    }
  },
  "Atlantic\/St_Helena": {
    "region": "Atlantic",
    "timezone": "Atlantic\/St_Helena",
    "has_dst": false,
    "location": {
      "country_code": "SH",
      "latitude": -15.916669999999996,
      "longitude": -5.699999999999989,
      "comments": ""
    },
    "abbreviations": {
      "GMT": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Atlantic\/Stanley": {
    "region": "Atlantic",
    "timezone": "Atlantic\/Stanley",
    "has_dst": false,
    "location": {
      "country_code": "FK",
      "latitude": -51.70001,
      "longitude": -57.849999999999994,
      "comments": ""
    },
    "abbreviations": {
      "SMT": {
        "dst": false,
        "offset": -13884
      }
    }
  },
  "Australia\/Adelaide": {
    "region": "Australia",
    "timezone": "Australia\/Adelaide",
    "has_dst": true,
    "location": {
      "country_code": "AU",
      "latitude": -34.91667,
      "longitude": 138.58333,
      "comments": "South Australia"
    },
    "abbreviations": {
      "ACDT": {
        "dst": true,
        "offset": 37800
      },
      "ACST": {
        "dst": false,
        "offset": 34200
      },
      "CAST": {
        "dst": false,
        "offset": 34200
      }
    }
  },
  "Australia\/Brisbane": {
    "region": "Australia",
    "timezone": "Australia\/Brisbane",
    "has_dst": true,
    "location": {
      "country_code": "AU",
      "latitude": -27.46667,
      "longitude": 153.03332999999998,
      "comments": "Queensland (most areas)"
    },
    "abbreviations": {
      "AEDT": {
        "dst": true,
        "offset": 39600
      },
      "AEST": {
        "dst": false,
        "offset": 36000
      }
    }
  },
  "Australia\/Broken_Hill": {
    "region": "Australia",
    "timezone": "Australia\/Broken_Hill",
    "has_dst": true,
    "location": {
      "country_code": "AU",
      "latitude": -31.950000000000003,
      "longitude": 141.45,
      "comments": "New South Wales (Yancowinna)"
    },
    "abbreviations": {
      "ACDT": {
        "dst": true,
        "offset": 37800
      },
      "ACST": {
        "dst": false,
        "offset": 34200
      }
    }
  },
  "Australia\/Darwin": {
    "region": "Australia",
    "timezone": "Australia\/Darwin",
    "has_dst": true,
    "location": {
      "country_code": "AU",
      "latitude": -12.466669999999993,
      "longitude": 130.83333,
      "comments": "Northern Territory"
    },
    "abbreviations": {
      "ACDT": {
        "dst": true,
        "offset": 37800
      },
      "ACST": {
        "dst": false,
        "offset": 34200
      }
    }
  },
  "Australia\/Eucla": {
    "region": "Australia",
    "timezone": "Australia\/Eucla",
    "has_dst": false,
    "location": {
      "country_code": "AU",
      "latitude": -31.71667,
      "longitude": 128.86666000000002,
      "comments": "Western Australia (Eucla)"
    },
    "abbreviations": {
      "UTC+0845": {
        "dst": false,
        "offset": 31500
      }
    }
  },
  "Australia\/Hobart": {
    "region": "Australia",
    "timezone": "Australia\/Hobart",
    "has_dst": true,
    "location": {
      "country_code": "AU",
      "latitude": -42.88334,
      "longitude": 147.31666,
      "comments": "Tasmania"
    },
    "abbreviations": {
      "AEDT": {
        "dst": true,
        "offset": 39600
      },
      "AEST": {
        "dst": false,
        "offset": 36000
      }
    }
  },
  "Australia\/Lindeman": {
    "region": "Australia",
    "timezone": "Australia\/Lindeman",
    "has_dst": true,
    "location": {
      "country_code": "AU",
      "latitude": -20.266670000000005,
      "longitude": 149,
      "comments": "Queensland (Whitsunday Islands)"
    },
    "abbreviations": {
      "AEDT": {
        "dst": true,
        "offset": 39600
      },
      "AEST": {
        "dst": false,
        "offset": 36000
      }
    }
  },
  "Australia\/Lord_Howe": {
    "region": "Australia",
    "timezone": "Australia\/Lord_Howe",
    "has_dst": false,
    "location": {
      "country_code": "AU",
      "latitude": -31.549999999999997,
      "longitude": 159.08333,
      "comments": "Lord Howe Island"
    },
    "abbreviations": {
      "AEST": {
        "dst": false,
        "offset": 36000
      }
    }
  },
  "Australia\/Melbourne": {
    "region": "Australia",
    "timezone": "Australia\/Melbourne",
    "has_dst": true,
    "location": {
      "country_code": "AU",
      "latitude": -37.81667,
      "longitude": 144.96666,
      "comments": "Victoria"
    },
    "abbreviations": {
      "AEDT": {
        "dst": true,
        "offset": 39600
      },
      "AEST": {
        "dst": false,
        "offset": 36000
      }
    }
  },
  "Australia\/Perth": {
    "region": "Australia",
    "timezone": "Australia\/Perth",
    "has_dst": true,
    "location": {
      "country_code": "AU",
      "latitude": -31.950000000000003,
      "longitude": 115.85000000000002,
      "comments": "Western Australia (most areas)"
    },
    "abbreviations": {
      "AWDT": {
        "dst": true,
        "offset": 32400
      },
      "AWST": {
        "dst": false,
        "offset": 28800
      }
    }
  },
  "Australia\/Sydney": {
    "region": "Australia",
    "timezone": "Australia\/Sydney",
    "has_dst": true,
    "location": {
      "country_code": "AU",
      "latitude": -33.86667,
      "longitude": 151.21666,
      "comments": "New South Wales (most areas)"
    },
    "abbreviations": {
      "AEDT": {
        "dst": true,
        "offset": 39600
      },
      "AEST": {
        "dst": false,
        "offset": 36000
      }
    }
  },
  "Europe\/Amsterdam": {
    "region": "Europe",
    "timezone": "Europe\/Amsterdam",
    "has_dst": true,
    "location": {
      "country_code": "NL",
      "latitude": 52.366659999999996,
      "longitude": 4.900000000000006,
      "comments": ""
    },
    "abbreviations": {
      "AMT": {
        "dst": false,
        "offset": 1172
      },
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      },
      "NST": {
        "dst": true,
        "offset": 4772
      }
    }
  },
  "Europe\/Andorra": {
    "region": "Europe",
    "timezone": "Europe\/Andorra",
    "has_dst": true,
    "location": {
      "country_code": "AD",
      "latitude": 42.5,
      "longitude": 1.5166600000000017,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      },
      "WET": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Europe\/Astrakhan": {
    "region": "Europe",
    "timezone": "Europe\/Astrakhan",
    "has_dst": false,
    "location": {
      "country_code": "RU",
      "latitude": 46.349999999999994,
      "longitude": 48.05000000000001,
      "comments": "MSK+01 - Astrakhan"
    },
    "abbreviations": {
      "UTC+04": {
        "dst": false,
        "offset": 14400
      }
    }
  },
  "Europe\/Athens": {
    "region": "Europe",
    "timezone": "Europe\/Athens",
    "has_dst": true,
    "location": {
      "country_code": "GR",
      "latitude": 37.966660000000005,
      "longitude": 23.71665999999999,
      "comments": ""
    },
    "abbreviations": {
      "AMT": {
        "dst": false,
        "offset": 5692
      },
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      },
      "EEST": {
        "dst": true,
        "offset": 10800
      },
      "EET": {
        "dst": false,
        "offset": 7200
      }
    }
  },
  "Europe\/Belgrade": {
    "region": "Europe",
    "timezone": "Europe\/Belgrade",
    "has_dst": true,
    "location": {
      "country_code": "RS",
      "latitude": 44.83332999999999,
      "longitude": 20.5,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Europe\/Berlin": {
    "region": "Europe",
    "timezone": "Europe\/Berlin",
    "has_dst": true,
    "location": {
      "country_code": "DE",
      "latitude": 52.5,
      "longitude": 13.366659999999996,
      "comments": "most of Germany"
    },
    "abbreviations": {
      "CEMT": {
        "dst": true,
        "offset": 10800
      },
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Europe\/Bratislava": {
    "region": "Europe",
    "timezone": "Europe\/Bratislava",
    "has_dst": true,
    "location": {
      "country_code": "SK",
      "latitude": 48.150000000000006,
      "longitude": 17.116659999999996,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      },
      "GMT": {
        "dst": true,
        "offset": 0
      }
    }
  },
  "Europe\/Brussels": {
    "region": "Europe",
    "timezone": "Europe\/Brussels",
    "has_dst": true,
    "location": {
      "country_code": "BE",
      "latitude": 50.83332999999999,
      "longitude": 4.3333299999999895,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      },
      "WEST": {
        "dst": true,
        "offset": 3600
      },
      "WET": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Europe\/Bucharest": {
    "region": "Europe",
    "timezone": "Europe\/Bucharest",
    "has_dst": true,
    "location": {
      "country_code": "RO",
      "latitude": 44.43333000000001,
      "longitude": 26.099999999999994,
      "comments": ""
    },
    "abbreviations": {
      "BMT": {
        "dst": false,
        "offset": 6264
      },
      "EEST": {
        "dst": true,
        "offset": 10800
      },
      "EET": {
        "dst": false,
        "offset": 7200
      }
    }
  },
  "Europe\/Budapest": {
    "region": "Europe",
    "timezone": "Europe\/Budapest",
    "has_dst": true,
    "location": {
      "country_code": "HU",
      "latitude": 47.5,
      "longitude": 19.08332999999999,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Europe\/Busingen": {
    "region": "Europe",
    "timezone": "Europe\/Busingen",
    "has_dst": true,
    "location": {
      "country_code": "DE",
      "latitude": 47.699990000000014,
      "longitude": 8.683330000000012,
      "comments": "Busingen"
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Europe\/Chisinau": {
    "region": "Europe",
    "timezone": "Europe\/Chisinau",
    "has_dst": true,
    "location": {
      "country_code": "MD",
      "latitude": 47,
      "longitude": 28.83332999999999,
      "comments": ""
    },
    "abbreviations": {
      "BMT": {
        "dst": false,
        "offset": 6264
      },
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      },
      "CMT": {
        "dst": false,
        "offset": 6900
      },
      "EEST": {
        "dst": true,
        "offset": 10800
      },
      "EET": {
        "dst": false,
        "offset": 7200
      },
      "MSD": {
        "dst": true,
        "offset": 14400
      },
      "MSK": {
        "dst": false,
        "offset": 10800
      }
    }
  },
  "Europe\/Copenhagen": {
    "region": "Europe",
    "timezone": "Europe\/Copenhagen",
    "has_dst": true,
    "location": {
      "country_code": "DK",
      "latitude": 55.66666000000001,
      "longitude": 12.58332999999999,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Europe\/Dublin": {
    "region": "Europe",
    "timezone": "Europe\/Dublin",
    "has_dst": true,
    "location": {
      "country_code": "IE",
      "latitude": 53.33332999999999,
      "longitude": -6.25,
      "comments": ""
    },
    "abbreviations": {
      "BST": {
        "dst": true,
        "offset": 3600
      },
      "DMT": {
        "dst": false,
        "offset": -1521
      },
      "GMT": {
        "dst": true,
        "offset": 0
      },
      "IST": {
        "dst": true,
        "offset": 3600
      }
    }
  },
  "Europe\/Gibraltar": {
    "region": "Europe",
    "timezone": "Europe\/Gibraltar",
    "has_dst": true,
    "location": {
      "country_code": "GI",
      "latitude": 36.13333,
      "longitude": -5.349999999999994,
      "comments": ""
    },
    "abbreviations": {
      "BDST": {
        "dst": true,
        "offset": 7200
      },
      "BST": {
        "dst": true,
        "offset": 3600
      },
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      },
      "GMT": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Europe\/Guernsey": {
    "region": "Europe",
    "timezone": "Europe\/Guernsey",
    "has_dst": true,
    "location": {
      "country_code": "GG",
      "latitude": 49.45472000000001,
      "longitude": -2.536120000000011,
      "comments": ""
    },
    "abbreviations": {
      "BDST": {
        "dst": true,
        "offset": 7200
      },
      "BST": {
        "dst": true,
        "offset": 3600
      },
      "GMT": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Europe\/Helsinki": {
    "region": "Europe",
    "timezone": "Europe\/Helsinki",
    "has_dst": true,
    "location": {
      "country_code": "FI",
      "latitude": 60.16666000000001,
      "longitude": 24.96665999999999,
      "comments": ""
    },
    "abbreviations": {
      "EEST": {
        "dst": true,
        "offset": 10800
      },
      "EET": {
        "dst": false,
        "offset": 7200
      },
      "HMT": {
        "dst": false,
        "offset": 5989
      }
    }
  },
  "Europe\/Isle_of_Man": {
    "region": "Europe",
    "timezone": "Europe\/Isle_of_Man",
    "has_dst": true,
    "location": {
      "country_code": "IM",
      "latitude": 54.150000000000006,
      "longitude": -4.4666699999999935,
      "comments": ""
    },
    "abbreviations": {
      "BDST": {
        "dst": true,
        "offset": 7200
      },
      "BST": {
        "dst": true,
        "offset": 3600
      },
      "GMT": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Europe\/Istanbul": {
    "region": "Europe",
    "timezone": "Europe\/Istanbul",
    "has_dst": true,
    "location": {
      "country_code": "TR",
      "latitude": 41.01666,
      "longitude": 28.96665999999999,
      "comments": ""
    },
    "abbreviations": {
      "EEST": {
        "dst": true,
        "offset": 10800
      },
      "EET": {
        "dst": false,
        "offset": 7200
      },
      "IMT": {
        "dst": false,
        "offset": 7016
      }
    }
  },
  "Europe\/Jersey": {
    "region": "Europe",
    "timezone": "Europe\/Jersey",
    "has_dst": true,
    "location": {
      "country_code": "JE",
      "latitude": 49.18360999999999,
      "longitude": -2.1066700000000083,
      "comments": ""
    },
    "abbreviations": {
      "BDST": {
        "dst": true,
        "offset": 7200
      },
      "BST": {
        "dst": true,
        "offset": 3600
      },
      "GMT": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Europe\/Kaliningrad": {
    "region": "Europe",
    "timezone": "Europe\/Kaliningrad",
    "has_dst": true,
    "location": {
      "country_code": "RU",
      "latitude": 54.71665999999999,
      "longitude": 20.5,
      "comments": "MSK-01 - Kaliningrad"
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      },
      "EEST": {
        "dst": true,
        "offset": 10800
      },
      "EET": {
        "dst": false,
        "offset": 7200
      },
      "MSD": {
        "dst": true,
        "offset": 14400
      },
      "MSK": {
        "dst": false,
        "offset": 10800
      }
    }
  },
  "Europe\/Kirov": {
    "region": "Europe",
    "timezone": "Europe\/Kirov",
    "has_dst": false,
    "location": {
      "country_code": "RU",
      "latitude": 58.599999999999994,
      "longitude": 49.650000000000006,
      "comments": "MSK+00 - Kirov"
    },
    "abbreviations": {
      "UTCMSK": {
        "dst": false,
        "offset": 10800
      }
    }
  },
  "Europe\/Kyiv": {
    "region": "Europe",
    "timezone": "Europe\/Kyiv",
    "has_dst": false,
    "location": {
      "country_code": "UA",
      "latitude": 50.43333000000001,
      "longitude": 30.51666,
      "comments": "most of Ukraine"
    },
    "abbreviations": {
      "UTCEET": {
        "dst": false,
        "offset": 7200
      }
    }
  },
  "Europe\/Lisbon": {
    "region": "Europe",
    "timezone": "Europe\/Lisbon",
    "has_dst": true,
    "location": {
      "country_code": "PT",
      "latitude": 38.71665999999999,
      "longitude": -9.133340000000004,
      "comments": "Portugal (mainland)"
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      },
      "WEMT": {
        "dst": true,
        "offset": 7200
      },
      "WEST": {
        "dst": true,
        "offset": 3600
      },
      "WET": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Europe\/Ljubljana": {
    "region": "Europe",
    "timezone": "Europe\/Ljubljana",
    "has_dst": true,
    "location": {
      "country_code": "SI",
      "latitude": 46.05000000000001,
      "longitude": 14.516660000000002,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Europe\/London": {
    "region": "Europe",
    "timezone": "Europe\/London",
    "has_dst": true,
    "location": {
      "country_code": "GB",
      "latitude": 51.50833,
      "longitude": -0.1252800000000036,
      "comments": ""
    },
    "abbreviations": {
      "BDST": {
        "dst": true,
        "offset": 7200
      },
      "BST": {
        "dst": false,
        "offset": 3600
      },
      "GMT": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Europe\/Luxembourg": {
    "region": "Europe",
    "timezone": "Europe\/Luxembourg",
    "has_dst": true,
    "location": {
      "country_code": "LU",
      "latitude": 49.599999999999994,
      "longitude": 6.150000000000006,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      },
      "WEST": {
        "dst": true,
        "offset": 3600
      },
      "WET": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Europe\/Madrid": {
    "region": "Europe",
    "timezone": "Europe\/Madrid",
    "has_dst": true,
    "location": {
      "country_code": "ES",
      "latitude": 40.400000000000006,
      "longitude": -3.683339999999987,
      "comments": "Spain (mainland)"
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      },
      "WEMT": {
        "dst": true,
        "offset": 7200
      },
      "WEST": {
        "dst": true,
        "offset": 3600
      },
      "WET": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Europe\/Malta": {
    "region": "Europe",
    "timezone": "Europe\/Malta",
    "has_dst": true,
    "location": {
      "country_code": "MT",
      "latitude": 35.900000000000006,
      "longitude": 14.516660000000002,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Europe\/Mariehamn": {
    "region": "Europe",
    "timezone": "Europe\/Mariehamn",
    "has_dst": true,
    "location": {
      "country_code": "AX",
      "latitude": 60.099999999999994,
      "longitude": 19.94999999999999,
      "comments": ""
    },
    "abbreviations": {
      "EEST": {
        "dst": true,
        "offset": 10800
      },
      "EET": {
        "dst": false,
        "offset": 7200
      },
      "HMT": {
        "dst": false,
        "offset": 5989
      }
    }
  },
  "Europe\/Minsk": {
    "region": "Europe",
    "timezone": "Europe\/Minsk",
    "has_dst": true,
    "location": {
      "country_code": "BY",
      "latitude": 53.900000000000006,
      "longitude": 27.566660000000013,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      },
      "EEST": {
        "dst": true,
        "offset": 10800
      },
      "EET": {
        "dst": false,
        "offset": 7200
      },
      "MMT": {
        "dst": false,
        "offset": 6600
      },
      "MSD": {
        "dst": true,
        "offset": 14400
      },
      "MSK": {
        "dst": false,
        "offset": 10800
      }
    }
  },
  "Europe\/Monaco": {
    "region": "Europe",
    "timezone": "Europe\/Monaco",
    "has_dst": true,
    "location": {
      "country_code": "MC",
      "latitude": 43.699990000000014,
      "longitude": 7.383330000000001,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      },
      "PMT": {
        "dst": false,
        "offset": 561
      },
      "WEMT": {
        "dst": true,
        "offset": 7200
      },
      "WEST": {
        "dst": true,
        "offset": 3600
      },
      "WET": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Europe\/Moscow": {
    "region": "Europe",
    "timezone": "Europe\/Moscow",
    "has_dst": true,
    "location": {
      "country_code": "RU",
      "latitude": 55.75583,
      "longitude": 37.61777000000001,
      "comments": "MSK+00 - Moscow area"
    },
    "abbreviations": {
      "EEST": {
        "dst": true,
        "offset": 10800
      },
      "EET": {
        "dst": false,
        "offset": 7200
      },
      "MDST": {
        "dst": true,
        "offset": 16279
      },
      "MMT": {
        "dst": false,
        "offset": 9079
      },
      "MSD": {
        "dst": true,
        "offset": 14400
      },
      "MSK": {
        "dst": false,
        "offset": 14400
      },
      "MST": {
        "dst": true,
        "offset": 12679
      }
    }
  },
  "Europe\/Oslo": {
    "region": "Europe",
    "timezone": "Europe\/Oslo",
    "has_dst": true,
    "location": {
      "country_code": "NO",
      "latitude": 59.91666000000001,
      "longitude": 10.75,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Europe\/Paris": {
    "region": "Europe",
    "timezone": "Europe\/Paris",
    "has_dst": true,
    "location": {
      "country_code": "FR",
      "latitude": 48.866659999999996,
      "longitude": 2.3333299999999895,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      },
      "PMT": {
        "dst": false,
        "offset": 561
      },
      "WEMT": {
        "dst": true,
        "offset": 7200
      },
      "WEST": {
        "dst": true,
        "offset": 3600
      },
      "WET": {
        "dst": false,
        "offset": 0
      }
    }
  },
  "Europe\/Podgorica": {
    "region": "Europe",
    "timezone": "Europe\/Podgorica",
    "has_dst": true,
    "location": {
      "country_code": "ME",
      "latitude": 42.43333000000001,
      "longitude": 19.26666,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Europe\/Prague": {
    "region": "Europe",
    "timezone": "Europe\/Prague",
    "has_dst": true,
    "location": {
      "country_code": "CZ",
      "latitude": 50.08332999999999,
      "longitude": 14.433330000000012,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      },
      "GMT": {
        "dst": true,
        "offset": 0
      }
    }
  },
  "Europe\/Riga": {
    "region": "Europe",
    "timezone": "Europe\/Riga",
    "has_dst": true,
    "location": {
      "country_code": "LV",
      "latitude": 56.949990000000014,
      "longitude": 24.099999999999994,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      },
      "EEST": {
        "dst": true,
        "offset": 10800
      },
      "EET": {
        "dst": false,
        "offset": 7200
      },
      "LST": {
        "dst": true,
        "offset": 9394
      },
      "MSD": {
        "dst": true,
        "offset": 14400
      },
      "MSK": {
        "dst": false,
        "offset": 10800
      },
      "RMT": {
        "dst": false,
        "offset": 5794
      }
    }
  },
  "Europe\/Rome": {
    "region": "Europe",
    "timezone": "Europe\/Rome",
    "has_dst": true,
    "location": {
      "country_code": "IT",
      "latitude": 41.900000000000006,
      "longitude": 12.483329999999995,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Europe\/Samara": {
    "region": "Europe",
    "timezone": "Europe\/Samara",
    "has_dst": false,
    "location": {
      "country_code": "RU",
      "latitude": 53.199990000000014,
      "longitude": 50.150000000000006,
      "comments": "MSK+01 - Samara, Udmurtia"
    },
    "abbreviations": {
      "UTC+04": {
        "dst": false,
        "offset": 14400
      }
    }
  },
  "Europe\/San_Marino": {
    "region": "Europe",
    "timezone": "Europe\/San_Marino",
    "has_dst": true,
    "location": {
      "country_code": "SM",
      "latitude": 43.91666000000001,
      "longitude": 12.46665999999999,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Europe\/Sarajevo": {
    "region": "Europe",
    "timezone": "Europe\/Sarajevo",
    "has_dst": true,
    "location": {
      "country_code": "BA",
      "latitude": 43.866659999999996,
      "longitude": 18.416660000000007,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Europe\/Saratov": {
    "region": "Europe",
    "timezone": "Europe\/Saratov",
    "has_dst": false,
    "location": {
      "country_code": "RU",
      "latitude": 51.56666000000001,
      "longitude": 46.03333000000001,
      "comments": "MSK+01 - Saratov"
    },
    "abbreviations": {
      "UTC+04": {
        "dst": false,
        "offset": 14400
      }
    }
  },
  "Europe\/Simferopol": {
    "region": "Europe",
    "timezone": "Europe\/Simferopol",
    "has_dst": true,
    "location": {
      "country_code": "UA",
      "latitude": 44.949990000000014,
      "longitude": 34.099999999999994,
      "comments": "Crimea"
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      },
      "EEST": {
        "dst": true,
        "offset": 10800
      },
      "EET": {
        "dst": false,
        "offset": 7200
      },
      "MSD": {
        "dst": true,
        "offset": 14400
      },
      "MSK": {
        "dst": false,
        "offset": 14400
      },
      "SMT": {
        "dst": false,
        "offset": 8160
      }
    }
  },
  "Europe\/Skopje": {
    "region": "Europe",
    "timezone": "Europe\/Skopje",
    "has_dst": true,
    "location": {
      "country_code": "MK",
      "latitude": 41.983329999999995,
      "longitude": 21.433330000000012,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Europe\/Sofia": {
    "region": "Europe",
    "timezone": "Europe\/Sofia",
    "has_dst": true,
    "location": {
      "country_code": "BG",
      "latitude": 42.68333000000001,
      "longitude": 23.316660000000013,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      },
      "EEST": {
        "dst": true,
        "offset": 10800
      },
      "EET": {
        "dst": false,
        "offset": 7200
      }
    }
  },
  "Europe\/Stockholm": {
    "region": "Europe",
    "timezone": "Europe\/Stockholm",
    "has_dst": true,
    "location": {
      "country_code": "SE",
      "latitude": 59.33332999999999,
      "longitude": 18.05000000000001,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Europe\/Tallinn": {
    "region": "Europe",
    "timezone": "Europe\/Tallinn",
    "has_dst": true,
    "location": {
      "country_code": "EE",
      "latitude": 59.41666000000001,
      "longitude": 24.75,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      },
      "EEST": {
        "dst": true,
        "offset": 10800
      },
      "EET": {
        "dst": false,
        "offset": 7200
      },
      "MSD": {
        "dst": true,
        "offset": 14400
      },
      "MSK": {
        "dst": false,
        "offset": 10800
      },
      "TMT": {
        "dst": false,
        "offset": 5940
      }
    }
  },
  "Europe\/Tirane": {
    "region": "Europe",
    "timezone": "Europe\/Tirane",
    "has_dst": true,
    "location": {
      "country_code": "AL",
      "latitude": 41.33332999999999,
      "longitude": 19.83332999999999,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Europe\/Ulyanovsk": {
    "region": "Europe",
    "timezone": "Europe\/Ulyanovsk",
    "has_dst": false,
    "location": {
      "country_code": "RU",
      "latitude": 54.33332999999999,
      "longitude": 48.400000000000006,
      "comments": "MSK+01 - Ulyanovsk"
    },
    "abbreviations": {
      "UTC+04": {
        "dst": false,
        "offset": 14400
      }
    }
  },
  "Europe\/Vaduz": {
    "region": "Europe",
    "timezone": "Europe\/Vaduz",
    "has_dst": true,
    "location": {
      "country_code": "LI",
      "latitude": 47.150000000000006,
      "longitude": 9.516660000000002,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Europe\/Vatican": {
    "region": "Europe",
    "timezone": "Europe\/Vatican",
    "has_dst": true,
    "location": {
      "country_code": "VA",
      "latitude": 41.90222,
      "longitude": 12.45304999999999,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Europe\/Vienna": {
    "region": "Europe",
    "timezone": "Europe\/Vienna",
    "has_dst": true,
    "location": {
      "country_code": "AT",
      "latitude": 48.21665999999999,
      "longitude": 16.33332999999999,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Europe\/Vilnius": {
    "region": "Europe",
    "timezone": "Europe\/Vilnius",
    "has_dst": true,
    "location": {
      "country_code": "LT",
      "latitude": 54.68333000000001,
      "longitude": 25.316660000000013,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      },
      "EEST": {
        "dst": true,
        "offset": 10800
      },
      "EET": {
        "dst": false,
        "offset": 7200
      },
      "KMT": {
        "dst": false,
        "offset": 5736
      },
      "MSD": {
        "dst": true,
        "offset": 14400
      },
      "MSK": {
        "dst": false,
        "offset": 10800
      },
      "WMT": {
        "dst": false,
        "offset": 5040
      }
    }
  },
  "Europe\/Volgograd": {
    "region": "Europe",
    "timezone": "Europe\/Volgograd",
    "has_dst": false,
    "location": {
      "country_code": "RU",
      "latitude": 48.733329999999995,
      "longitude": 44.41666000000001,
      "comments": "MSK+00 - Volgograd"
    },
    "abbreviations": {
      "UTCMSK": {
        "dst": false,
        "offset": 10800
      }
    }
  },
  "Europe\/Warsaw": {
    "region": "Europe",
    "timezone": "Europe\/Warsaw",
    "has_dst": true,
    "location": {
      "country_code": "PL",
      "latitude": 52.25,
      "longitude": 21,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      },
      "EEST": {
        "dst": true,
        "offset": 10800
      },
      "EET": {
        "dst": false,
        "offset": 7200
      },
      "WMT": {
        "dst": false,
        "offset": 5040
      }
    }
  },
  "Europe\/Zagreb": {
    "region": "Europe",
    "timezone": "Europe\/Zagreb",
    "has_dst": true,
    "location": {
      "country_code": "HR",
      "latitude": 45.80000000000001,
      "longitude": 15.96665999999999,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Europe\/Zurich": {
    "region": "Europe",
    "timezone": "Europe\/Zurich",
    "has_dst": true,
    "location": {
      "country_code": "CH",
      "latitude": 47.38333,
      "longitude": 8.533330000000007,
      "comments": ""
    },
    "abbreviations": {
      "CEST": {
        "dst": true,
        "offset": 7200
      },
      "CET": {
        "dst": false,
        "offset": 3600
      }
    }
  },
  "Indian\/Antananarivo": {
    "region": "Indian",
    "timezone": "Indian\/Antananarivo",
    "has_dst": false,
    "location": {
      "country_code": "MG",
      "latitude": -18.916669999999996,
      "longitude": 47.51666,
      "comments": ""
    },
    "abbreviations": {
      "EAT": {
        "dst": false,
        "offset": 10800
      }
    }
  },
  "Indian\/Chagos": {
    "region": "Indian",
    "timezone": "Indian\/Chagos",
    "has_dst": false,
    "location": {
      "country_code": "IO",
      "latitude": -7.333340000000007,
      "longitude": 72.41666000000001,
      "comments": ""
    },
    "abbreviations": {
      "UTC+06": {
        "dst": false,
        "offset": 21600
      }
    }
  },
  "Indian\/Christmas": {
    "region": "Indian",
    "timezone": "Indian\/Christmas",
    "has_dst": false,
    "location": {
      "country_code": "CX",
      "latitude": -10.416669999999996,
      "longitude": 105.71665999999999,
      "comments": ""
    },
    "abbreviations": {
      "UTC+07": {
        "dst": false,
        "offset": 25200
      }
    }
  },
  "Indian\/Cocos": {
    "region": "Indian",
    "timezone": "Indian\/Cocos",
    "has_dst": false,
    "location": {
      "country_code": "CC",
      "latitude": -12.166669999999996,
      "longitude": 96.91665999999998,
      "comments": ""
    },
    "abbreviations": {
      "UTC+0630": {
        "dst": false,
        "offset": 23400
      }
    }
  },
  "Indian\/Comoro": {
    "region": "Indian",
    "timezone": "Indian\/Comoro",
    "has_dst": false,
    "location": {
      "country_code": "KM",
      "latitude": -11.683340000000001,
      "longitude": 43.26666,
      "comments": ""
    },
    "abbreviations": {
      "EAT": {
        "dst": false,
        "offset": 10800
      }
    }
  },
  "Indian\/Kerguelen": {
    "region": "Indian",
    "timezone": "Indian\/Kerguelen",
    "has_dst": false,
    "location": {
      "country_code": "TF",
      "latitude": -49.35278,
      "longitude": 70.2175,
      "comments": ""
    },
    "abbreviations": {
      "UTC+05": {
        "dst": false,
        "offset": 18000
      }
    }
  },
  "Indian\/Mahe": {
    "region": "Indian",
    "timezone": "Indian\/Mahe",
    "has_dst": false,
    "location": {
      "country_code": "SC",
      "latitude": -4.666669999999996,
      "longitude": 55.46665999999999,
      "comments": ""
    },
    "abbreviations": {
      "UTC+04": {
        "dst": false,
        "offset": 14400
      }
    }
  },
  "Indian\/Maldives": {
    "region": "Indian",
    "timezone": "Indian\/Maldives",
    "has_dst": false,
    "location": {
      "country_code": "MV",
      "latitude": 4.166659999999993,
      "longitude": 73.5,
      "comments": ""
    },
    "abbreviations": {
      "MMT": {
        "dst": false,
        "offset": 17640
      }
    }
  },
  "Indian\/Mauritius": {
    "region": "Indian",
    "timezone": "Indian\/Mauritius",
    "has_dst": false,
    "location": {
      "country_code": "MU",
      "latitude": -20.166669999999996,
      "longitude": 57.5,
      "comments": ""
    },
    "abbreviations": {
      "UTC+04": {
        "dst": false,
        "offset": 14400
      }
    }
  },
  "Indian\/Mayotte": {
    "region": "Indian",
    "timezone": "Indian\/Mayotte",
    "has_dst": false,
    "location": {
      "country_code": "YT",
      "latitude": -12.783339999999995,
      "longitude": 45.233329999999995,
      "comments": ""
    },
    "abbreviations": {
      "EAT": {
        "dst": false,
        "offset": 10800
      }
    }
  },
  "Indian\/Reunion": {
    "region": "Indian",
    "timezone": "Indian\/Reunion",
    "has_dst": false,
    "location": {
      "country_code": "RE",
      "latitude": -20.86667,
      "longitude": 55.46665999999999,
      "comments": ""
    },
    "abbreviations": {
      "UTC+04": {
        "dst": false,
        "offset": 14400
      }
    }
  },
  "Pacific\/Apia": {
    "region": "Pacific",
    "timezone": "Pacific\/Apia",
    "has_dst": false,
    "location": {
      "country_code": "WS",
      "latitude": -13.833340000000007,
      "longitude": -171.73334,
      "comments": ""
    },
    "abbreviations": {
      "UTC+13": {
        "dst": false,
        "offset": 46800
      }
    }
  },
  "Pacific\/Auckland": {
    "region": "Pacific",
    "timezone": "Pacific\/Auckland",
    "has_dst": true,
    "location": {
      "country_code": "NZ",
      "latitude": -36.86667,
      "longitude": 174.76666,
      "comments": "most of New Zealand"
    },
    "abbreviations": {
      "NZDT": {
        "dst": true,
        "offset": 46800
      },
      "NZMT": {
        "dst": false,
        "offset": 41400
      },
      "NZST": {
        "dst": true,
        "offset": 45000
      }
    }
  },
  "Pacific\/Bougainville": {
    "region": "Pacific",
    "timezone": "Pacific\/Bougainville",
    "has_dst": false,
    "location": {
      "country_code": "PG",
      "latitude": -6.2166699999999935,
      "longitude": 155.56666,
      "comments": "Bougainville"
    },
    "abbreviations": {
      "UTC+11": {
        "dst": false,
        "offset": 39600
      }
    }
  },
  "Pacific\/Chatham": {
    "region": "Pacific",
    "timezone": "Pacific\/Chatham",
    "has_dst": false,
    "location": {
      "country_code": "NZ",
      "latitude": -43.95,
      "longitude": -176.55001,
      "comments": "Chatham Islands"
    },
    "abbreviations": {
      "UTC+1345": {
        "dst": false,
        "offset": 49500
      }
    }
  },
  "Pacific\/Chuuk": {
    "region": "Pacific",
    "timezone": "Pacific\/Chuuk",
    "has_dst": false,
    "location": {
      "country_code": "FM",
      "latitude": 7.416659999999993,
      "longitude": 151.78332999999998,
      "comments": "Chuuk\/Truk, Yap"
    },
    "abbreviations": {
      "UTC+10": {
        "dst": false,
        "offset": 36000
      }
    }
  },
  "Pacific\/Easter": {
    "region": "Pacific",
    "timezone": "Pacific\/Easter",
    "has_dst": false,
    "location": {
      "country_code": "CL",
      "latitude": -27.15,
      "longitude": -109.43334,
      "comments": "Easter Island"
    },
    "abbreviations": {
      "EMT": {
        "dst": false,
        "offset": -26248
      }
    }
  },
  "Pacific\/Efate": {
    "region": "Pacific",
    "timezone": "Pacific\/Efate",
    "has_dst": false,
    "location": {
      "country_code": "VU",
      "latitude": -17.666669999999996,
      "longitude": 168.41665999999998,
      "comments": ""
    },
    "abbreviations": {
      "UTC+11": {
        "dst": false,
        "offset": 39600
      }
    }
  },
  "Pacific\/Fakaofo": {
    "region": "Pacific",
    "timezone": "Pacific\/Fakaofo",
    "has_dst": false,
    "location": {
      "country_code": "TK",
      "latitude": -9.36667,
      "longitude": -171.23334,
      "comments": ""
    },
    "abbreviations": {
      "UTC+13": {
        "dst": false,
        "offset": 46800
      }
    }
  },
  "Pacific\/Fiji": {
    "region": "Pacific",
    "timezone": "Pacific\/Fiji",
    "has_dst": false,
    "location": {
      "country_code": "FJ",
      "latitude": -18.133340000000004,
      "longitude": 178.41665999999998,
      "comments": ""
    },
    "abbreviations": {
      "UTC+12": {
        "dst": false,
        "offset": 43200
      }
    }
  },
  "Pacific\/Funafuti": {
    "region": "Pacific",
    "timezone": "Pacific\/Funafuti",
    "has_dst": false,
    "location": {
      "country_code": "TV",
      "latitude": -8.516670000000005,
      "longitude": 179.21666,
      "comments": ""
    },
    "abbreviations": {
      "UTC+12": {
        "dst": false,
        "offset": 43200
      }
    }
  },
  "Pacific\/Galapagos": {
    "region": "Pacific",
    "timezone": "Pacific\/Galapagos",
    "has_dst": false,
    "location": {
      "country_code": "EC",
      "latitude": -0.9000000000000057,
      "longitude": -89.6,
      "comments": "Galapagos Islands"
    },
    "abbreviations": {
      "UTC-06": {
        "dst": false,
        "offset": -21600
      }
    }
  },
  "Pacific\/Gambier": {
    "region": "Pacific",
    "timezone": "Pacific\/Gambier",
    "has_dst": false,
    "location": {
      "country_code": "PF",
      "latitude": -23.133340000000004,
      "longitude": -134.95,
      "comments": "Gambier Islands"
    },
    "abbreviations": {
      "UTC-09": {
        "dst": false,
        "offset": -32400
      }
    }
  },
  "Pacific\/Guadalcanal": {
    "region": "Pacific",
    "timezone": "Pacific\/Guadalcanal",
    "has_dst": false,
    "location": {
      "country_code": "SB",
      "latitude": -9.533339999999995,
      "longitude": 160.2,
      "comments": ""
    },
    "abbreviations": {
      "UTC+11": {
        "dst": false,
        "offset": 39600
      }
    }
  },
  "Pacific\/Guam": {
    "region": "Pacific",
    "timezone": "Pacific\/Guam",
    "has_dst": true,
    "location": {
      "country_code": "GU",
      "latitude": 13.466660000000005,
      "longitude": 144.75,
      "comments": ""
    },
    "abbreviations": {
      "CHST": {
        "dst": false,
        "offset": 36000
      },
      "GDT": {
        "dst": true,
        "offset": 39600
      },
      "GST": {
        "dst": false,
        "offset": 36000
      }
    }
  },
  "Pacific\/Honolulu": {
    "region": "Pacific",
    "timezone": "Pacific\/Honolulu",
    "has_dst": true,
    "location": {
      "country_code": "US",
      "latitude": 21.306939999999997,
      "longitude": -157.85834,
      "comments": "Hawaii"
    },
    "abbreviations": {
      "HDT": {
        "dst": true,
        "offset": -34200
      },
      "HPT": {
        "dst": true,
        "offset": -34200
      },
      "HST": {
        "dst": false,
        "offset": -37800
      },
      "HWT": {
        "dst": true,
        "offset": -34200
      }
    }
  },
  "Pacific\/Kanton": {
    "region": "Pacific",
    "timezone": "Pacific\/Kanton",
    "has_dst": false,
    "location": {
      "country_code": "KI",
      "latitude": -2.7833399999999955,
      "longitude": -171.71667,
      "comments": "Phoenix Islands"
    },
    "abbreviations": {
      "UTC+13": {
        "dst": false,
        "offset": 46800
      }
    }
  },
  "Pacific\/Kiritimati": {
    "region": "Pacific",
    "timezone": "Pacific\/Kiritimati",
    "has_dst": false,
    "location": {
      "country_code": "KI",
      "latitude": 1.866659999999996,
      "longitude": -157.33334,
      "comments": "Line Islands"
    },
    "abbreviations": {
      "UTC+14": {
        "dst": false,
        "offset": 50400
      }
    }
  },
  "Pacific\/Kosrae": {
    "region": "Pacific",
    "timezone": "Pacific\/Kosrae",
    "has_dst": false,
    "location": {
      "country_code": "FM",
      "latitude": 5.316659999999999,
      "longitude": 162.98333000000002,
      "comments": "Kosrae"
    },
    "abbreviations": {
      "UTC+11": {
        "dst": false,
        "offset": 39600
      }
    }
  },
  "Pacific\/Kwajalein": {
    "region": "Pacific",
    "timezone": "Pacific\/Kwajalein",
    "has_dst": false,
    "location": {
      "country_code": "MH",
      "latitude": 9.083330000000004,
      "longitude": 167.33333,
      "comments": "Kwajalein"
    },
    "abbreviations": {
      "UTC+12": {
        "dst": false,
        "offset": 43200
      }
    }
  },
  "Pacific\/Majuro": {
    "region": "Pacific",
    "timezone": "Pacific\/Majuro",
    "has_dst": false,
    "location": {
      "country_code": "MH",
      "latitude": 7.150000000000006,
      "longitude": 171.2,
      "comments": "most of Marshall Islands"
    },
    "abbreviations": {
      "UTC+12": {
        "dst": false,
        "offset": 43200
      }
    }
  },
  "Pacific\/Marquesas": {
    "region": "Pacific",
    "timezone": "Pacific\/Marquesas",
    "has_dst": false,
    "location": {
      "country_code": "PF",
      "latitude": -9,
      "longitude": -139.5,
      "comments": "Marquesas Islands"
    },
    "abbreviations": {
      "UTC-0930": {
        "dst": false,
        "offset": -34200
      }
    }
  },
  "Pacific\/Midway": {
    "region": "Pacific",
    "timezone": "Pacific\/Midway",
    "has_dst": false,
    "location": {
      "country_code": "UM",
      "latitude": 28.216660000000005,
      "longitude": -177.36667,
      "comments": "Midway Islands"
    },
    "abbreviations": {
      "SST": {
        "dst": false,
        "offset": -39600
      }
    }
  },
  "Pacific\/Nauru": {
    "region": "Pacific",
    "timezone": "Pacific\/Nauru",
    "has_dst": false,
    "location": {
      "country_code": "NR",
      "latitude": -0.5166700000000048,
      "longitude": 166.91665999999998,
      "comments": ""
    },
    "abbreviations": {
      "UTC+12": {
        "dst": false,
        "offset": 43200
      }
    }
  },
  "Pacific\/Niue": {
    "region": "Pacific",
    "timezone": "Pacific\/Niue",
    "has_dst": false,
    "location": {
      "country_code": "NU",
      "latitude": -19.016670000000005,
      "longitude": -169.91667,
      "comments": ""
    },
    "abbreviations": {
      "UTC-11": {
        "dst": false,
        "offset": -39600
      }
    }
  },
  "Pacific\/Norfolk": {
    "region": "Pacific",
    "timezone": "Pacific\/Norfolk",
    "has_dst": false,
    "location": {
      "country_code": "NF",
      "latitude": -29.049999999999997,
      "longitude": 167.96666,
      "comments": ""
    },
    "abbreviations": {
      "UTC+12": {
        "dst": false,
        "offset": 43200
      }
    }
  },
  "Pacific\/Noumea": {
    "region": "Pacific",
    "timezone": "Pacific\/Noumea",
    "has_dst": false,
    "location": {
      "country_code": "NC",
      "latitude": -22.266670000000005,
      "longitude": 166.45,
      "comments": ""
    },
    "abbreviations": {
      "UTC+11": {
        "dst": false,
        "offset": 39600
      }
    }
  },
  "Pacific\/Pago_Pago": {
    "region": "Pacific",
    "timezone": "Pacific\/Pago_Pago",
    "has_dst": false,
    "location": {
      "country_code": "AS",
      "latitude": -14.266670000000005,
      "longitude": -170.7,
      "comments": ""
    },
    "abbreviations": {
      "SST": {
        "dst": false,
        "offset": -39600
      }
    }
  },
  "Pacific\/Palau": {
    "region": "Pacific",
    "timezone": "Pacific\/Palau",
    "has_dst": false,
    "location": {
      "country_code": "PW",
      "latitude": 7.333330000000004,
      "longitude": 134.48333000000002,
      "comments": ""
    },
    "abbreviations": {
      "UTC+09": {
        "dst": false,
        "offset": 32400
      }
    }
  },
  "Pacific\/Pitcairn": {
    "region": "Pacific",
    "timezone": "Pacific\/Pitcairn",
    "has_dst": false,
    "location": {
      "country_code": "PN",
      "latitude": -25.066670000000002,
      "longitude": -130.08334,
      "comments": ""
    },
    "abbreviations": {
      "UTC-08": {
        "dst": false,
        "offset": -28800
      }
    }
  },
  "Pacific\/Pohnpei": {
    "region": "Pacific",
    "timezone": "Pacific\/Pohnpei",
    "has_dst": false,
    "location": {
      "country_code": "FM",
      "latitude": 6.9666600000000045,
      "longitude": 158.21666,
      "comments": "Pohnpei\/Ponape"
    },
    "abbreviations": {
      "UTC+11": {
        "dst": false,
        "offset": 39600
      }
    }
  },
  "Pacific\/Port_Moresby": {
    "region": "Pacific",
    "timezone": "Pacific\/Port_Moresby",
    "has_dst": false,
    "location": {
      "country_code": "PG",
      "latitude": -9.5,
      "longitude": 147.16665999999998,
      "comments": "most of Papua New Guinea"
    },
    "abbreviations": {
      "UTC+10": {
        "dst": false,
        "offset": 36000
      }
    }
  },
  "Pacific\/Rarotonga": {
    "region": "Pacific",
    "timezone": "Pacific\/Rarotonga",
    "has_dst": false,
    "location": {
      "country_code": "CK",
      "latitude": -21.23334,
      "longitude": -159.76667,
      "comments": ""
    },
    "abbreviations": {
      "UTC-10": {
        "dst": false,
        "offset": -36000
      }
    }
  },
  "Pacific\/Saipan": {
    "region": "Pacific",
    "timezone": "Pacific\/Saipan",
    "has_dst": true,
    "location": {
      "country_code": "MP",
      "latitude": 15.200000000000003,
      "longitude": 145.75,
      "comments": ""
    },
    "abbreviations": {
      "CHST": {
        "dst": false,
        "offset": 36000
      },
      "GDT": {
        "dst": true,
        "offset": 39600
      },
      "GST": {
        "dst": false,
        "offset": 36000
      }
    }
  },
  "Pacific\/Tahiti": {
    "region": "Pacific",
    "timezone": "Pacific\/Tahiti",
    "has_dst": false,
    "location": {
      "country_code": "PF",
      "latitude": -17.533339999999995,
      "longitude": -149.56667,
      "comments": "Society Islands"
    },
    "abbreviations": {
      "UTC-10": {
        "dst": false,
        "offset": -36000
      }
    }
  },
  "Pacific\/Tarawa": {
    "region": "Pacific",
    "timezone": "Pacific\/Tarawa",
    "has_dst": false,
    "location": {
      "country_code": "KI",
      "latitude": 1.4166599999999931,
      "longitude": 173,
      "comments": "Gilbert Islands"
    },
    "abbreviations": {
      "UTC+12": {
        "dst": false,
        "offset": 43200
      }
    }
  },
  "Pacific\/Tongatapu": {
    "region": "Pacific",
    "timezone": "Pacific\/Tongatapu",
    "has_dst": false,
    "location": {
      "country_code": "TO",
      "latitude": -21.133340000000004,
      "longitude": -175.2,
      "comments": ""
    },
    "abbreviations": {
      "UTC+13": {
        "dst": false,
        "offset": 46800
      }
    }
  },
  "Pacific\/Wake": {
    "region": "Pacific",
    "timezone": "Pacific\/Wake",
    "has_dst": false,
    "location": {
      "country_code": "UM",
      "latitude": 19.283330000000007,
      "longitude": 166.61666000000002,
      "comments": "Wake Island"
    },
    "abbreviations": {
      "UTC+12": {
        "dst": false,
        "offset": 43200
      }
    }
  },
  "Pacific\/Wallis": {
    "region": "Pacific",
    "timezone": "Pacific\/Wallis",
    "has_dst": false,
    "location": {
      "country_code": "WF",
      "latitude": -13.299999999999997,
      "longitude": -176.16667,
      "comments": ""
    },
    "abbreviations": {
      "UTC+12": {
        "dst": false,
        "offset": 43200
      }
    }
  },
  "UTC": {
    "region": "UTC",
    "timezone": "UTC",
    "has_dst": false,
    "location": {
      "country_code": "??",
      "latitude": -90,
      "longitude": -180,
      "comments": ""
    },
    "abbreviations": {
      "UTC": {
        "dst": false,
        "offset": 0
      }
    }
  }
};
  } 
}
