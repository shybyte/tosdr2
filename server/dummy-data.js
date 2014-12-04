if (Services.find().count() === 0) {
  // Copied from https://github.com/tosdr/tosdr-build/blob/master/src/services/

  Services.insert({
    "alexa": 304,
    "dataexport": true,
    "freesoftware": false,
    "fulltos": {},
    "id": "github",
    "meta": {
      "spec-version": "1.1"
    },
    "name": "GitHub",
    "related": [
      "gitorious"
    ],
    "tosback2": {
      "privacy": {
        "last-archive": {
          "time": "",
          "uri": ""
        },
        "name": "Privacy Policy",
        "url": "https://help.github.com/privacy-policy"
      },
      "security": {
        "last-archive": {
          "time": "",
          "uri": ""
        },
        "name": "Security",
        "url": "https://help.github.com/security/"
      },
      "sitename": "github.com",
      "terms": {
        "last-archive": {
          "time": "",
          "uri": ""
        },
        "name": "Terms of Service",
        "url": "https://github.com/site/terms"
      }
    },
    "tosdr": {
      "keywords": [],
      "rated": "B",
      "related": []
    },
    "type": "service",
    "url": "github.com",
    "urls": [
      "github.com"
    ]
  });

  Services.insert({
    "alexa": 2,
    "freesoftware": false,
    "fulltos": {},
    "id": "google",
    "keywords": [
      "search",
      "groups"
    ],
    "meta": {
      "spec-version": "1.1"
    },
    "name": "Google",
    "other-urls": [
      "google.de",
      "google.fr",
      "https://en.wikipedia.org/wiki/List_of_Google_domains"
    ],
    "related": [
      "yahoo",
      "duckduckgo"
    ],
    "tosback2": {
      "definitions": {
        "name": "Key terms",
        "url": "https://www.google.fr/intl/en/policies/privacy/key-terms/"
      },
      "faq": {
        "name": "FAQ",
        "url": "https://www.google.fr/intl/en/policies/faq/"
      },
      "privacy": {
        "name": "Privacy Policy",
        "url": "https://www.google.com/intl/en/policies/privacy/"
      },
      "sitename": "google.com",
      "terms": {
        "name": "Terms of Service",
        "url": "https://www.google.com/intl/en/policies/terms/"
      }
    },
    "tosdr": {
      "keywords": [],
      "rated": "C",
      "related": []
    },
    "type": "service",
    "url": "google.com",
    "urls": [
      "google.com"
    ]
  });

}

if (Topics.find().count() === 0) {
  // Copied from https://github.com/tosdr/tosdr-build/tree/master/src/topics
  Topics.insert({
    "description": "The content and the data you generate on services online is usually subject to copyright law. When your data are collected by services, they can be considered personal data.  It means that it is <strong>your content, your data</strong>: you can decide.",
    "example": {
      "bad": "We get a license beyond the requirements to operate the service, so your data may be used for purposes you do not intend. We will still attribute ownership to you.",
      "blocker": "We become the owners of your data.",
      "good": "You license us to use your data only for the purpose of operating this service."
    },
    "id": "ownership",
    "license-for-this-file": "This work is licensed under the Creative Commons Attribution-ShareAlike 3.0 Unported License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/3.0/ or send a letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, .USA",
    "meta": {
      "license-for-this-file": "This work is licensed under the Creative Commons Attribution-ShareAlike 3.0 Unported License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/3.0/ or send a letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, .USA",
      "spec-version": "1.1"
    },
    "name": "Ownership",
    "subtitle": "What happens with the content you generate on the service?",
    "title": "Ownership",
    "type": "category"
  });

  Topics.insert({
    "description": "The terms sometimes describe the level of logging and the level of data collection and which kinds of data the service is processing. Anonymity or the right to use a pseudonym can be very important for freedom of expression (e.g. for people exercising a certain profession, or people living in authoritarian regimes).",
    "id": "track",
    "meta": {
      "license-for-this-file": "This work is licensed under the Creative Commons Attribution-ShareAlike 3.0 Unported License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/3.0/ or send a letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, .USA",
      "spec-version": "1.1"
    },
    "name": "Anonymity and Tracking",
    "subtitle": "Are you being spied on?",
    "title": "Anonymity and Tracking",
    "type": "category"
  });
}