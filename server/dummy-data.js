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