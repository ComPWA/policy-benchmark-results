window.BENCHMARK_DATA = {
  "lastUpdate": 1788263911341,
  "repoUrl": "https://github.com/ComPWA/policy",
  "entries": {
    "ComPWA policy benchmark results": [
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0391e316b53666a09f7e62cfcfed15593f6941d8",
          "message": "DX: implement benchmark for `check-dev-files` (#648)",
          "timestamp": "2026-07-12T15:56:16+02:00",
          "tree_id": "b7a01faa360c1c28228ea6be964e2d7a61cb5fb0",
          "url": "https://github.com/ComPWA/policy/commit/0391e316b53666a09f7e62cfcfed15593f6941d8"
        },
        "date": 1783864618308,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 0.42131729270677626,
            "unit": "iter/sec",
            "range": "stddev: 0.01727454353703041",
            "extra": "mean: 2.373508083599998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e2c0eaab37aa83a42b53449b658a2f9c728ee5b9",
          "message": "BREAK: return changes instead of raising (#628)\n\n* BREAK: rename `PrecommitError` to `PolicyError`\n* DX: assert on returned changes instead of `pytest.raises`\n* DX: collect and print modifications at the CLI boundary\n* ENH: load `pyproject.toml` once and thread it through checks\n* MAINT: remove `Executor` class",
          "timestamp": "2026-07-12T16:00:53+02:00",
          "tree_id": "b30b04983948001812595f4a00d53aa1b4061ad4",
          "url": "https://github.com/ComPWA/policy/commit/e2c0eaab37aa83a42b53449b658a2f9c728ee5b9"
        },
        "date": 1783864881427,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.3163013871040008,
            "unit": "iter/sec",
            "range": "stddev: 0.01405104309672543",
            "extra": "mean: 759.7044338000003 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7cf996a539129919c309f0ed511cdd8188776775",
          "message": "ENH: manage file resources through `Session` (#649)\n\n* BREAK: require Session in resource helpers\n* DX: ignore Codex configuration\n* DX: run style before remaining CI tasks\n* MAINT: organize tests with pytest-describe",
          "timestamp": "2026-07-13T18:15:55+02:00",
          "tree_id": "5aad2071dbe95b285f495598df34d7b67f0289a0",
          "url": "https://github.com/ComPWA/policy/commit/7cf996a539129919c309f0ed511cdd8188776775"
        },
        "date": 1783959385695,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.3968900964820015,
            "unit": "iter/sec",
            "range": "stddev: 0.0057228530515319774",
            "extra": "mean: 715.8759321999994 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf37396492becbd2feddffbecbaa6efc2b0cd9a0",
          "message": "ENH: normalize pre-commit repo spacing (#651)\n\n* ENH: move `poe benchmark` to test group\n* ENH: sort `ty` arguments\n* MAINT: upgrade lock files",
          "timestamp": "2026-07-13T21:09:24+02:00",
          "tree_id": "29af77a1fade2aeef6f069fa63d0f19364a8329e",
          "url": "https://github.com/ComPWA/policy/commit/bf37396492becbd2feddffbecbaa6efc2b0cd9a0"
        },
        "date": 1783969798060,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.3680172518401166,
            "unit": "iter/sec",
            "range": "stddev: 0.0075022743339073225",
            "extra": "mean: 730.9849335999985 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9232f3590cb93fbb9b9766c83cc8ece6a5d2216b",
          "message": "ENH: derive `check-dev-files` trigger files (#652)\n\n* ENH: auto-fix pre-commit hook definition drift in self-check\n* ENH: dispatch hooks with decorator",
          "timestamp": "2026-07-14T10:36:01+02:00",
          "tree_id": "cf3ce83d1f35800176b16dc1f9a6406dae5bdfad",
          "url": "https://github.com/ComPWA/policy/commit/9232f3590cb93fbb9b9766c83cc8ece6a5d2216b"
        },
        "date": 1784018192147,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.848503662644743,
            "unit": "iter/sec",
            "range": "stddev: 0.0069964063894217485",
            "extra": "mean: 540.9781004000024 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bd66f56f479260d5dbbc61a436f31a873e60666",
          "message": "ENH: support `all-fast` and `all-slow` tasks (#653)",
          "timestamp": "2026-07-14T10:52:27+02:00",
          "tree_id": "619b845849e861eebd635ae40ac6cae87a159fc2",
          "url": "https://github.com/ComPWA/policy/commit/5bd66f56f479260d5dbbc61a436f31a873e60666"
        },
        "date": 1784019175137,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.4073520435540947,
            "unit": "iter/sec",
            "range": "stddev: 0.005204299925724642",
            "extra": "mean: 710.5542671999984 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04c19ad92fa5c34a0366c35fbf0c40f5bbe06b5a",
          "message": "FEAT: add Tombi as default TOML formatter (#654)\n\n* BEHAVIOR: treat Tombi warnings as errors by default\n* BREAK: remove `Frequency` type alias\n* DOC: embed docstrings in JSON schema\n* ENH: define options through `Literal` instead of `Enum`\n* ENH: do not enforce non-multiline array\n* ENH: exclude lock files from being formatted with Tombi\n* ENH: run `check-dev-files` before formatters\n* ENH: standardize formatting with `to_toml_array()`\n* FEAT: generate JSON schema for `[tool.compwa.policy]`\n* FEAT: implement `--toml-formatter` argument\n* FEAT: implement `tombi-lint` pre-commit hook\n* FEAT: implement warnings as errors for Tombi\n* FIX: remove outdated Sphinx target remappings\n* FIX: run `tombi-format` on GitHub CI\n* MAINT: remove `more_itertools`\n* MAINT: remove `PackageManagerChoice` from `conda` module\n* MAINT: rename `builtins-ignorelist` to `ignorelist`",
          "timestamp": "2026-07-15T14:23:30+02:00",
          "tree_id": "c90d73f638a02e165fec61ae955bf97217f453b1",
          "url": "https://github.com/ComPWA/policy/commit/04c19ad92fa5c34a0366c35fbf0c40f5bbe06b5a"
        },
        "date": 1784118239971,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.4455797594522541,
            "unit": "iter/sec",
            "range": "stddev: 0.009480490055423908",
            "extra": "mean: 691.7639745999977 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "827077dbf2be7b86b52f57d361edbd2b7119d77e",
          "message": "ENH: run `poe upgrade` over all `uv.lock` files (#656)",
          "timestamp": "2026-07-15T22:38:06+02:00",
          "tree_id": "25c117bd4dc7085f55a464f1554cda56f344d805",
          "url": "https://github.com/ComPWA/policy/commit/827077dbf2be7b86b52f57d361edbd2b7119d77e"
        },
        "date": 1784147920919,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.2623077020643658,
            "unit": "iter/sec",
            "range": "stddev: 0.00527488215279901",
            "extra": "mean: 792.1998719999962 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "22f54d1ac4a317baf97ea96274fad2fad73c73c0",
          "message": "FEAT: implement `pixi run upgrade` task (#658)\n\n* FEAT: add Julia upgrade helper to `poe upgrade` task\n* MAINT: extract upgrade commands into `repo.upgrade` module",
          "timestamp": "2026-07-15T23:58:45+02:00",
          "tree_id": "da347d75bf50962d96afd1a64006847c8d1faddd",
          "url": "https://github.com/ComPWA/policy/commit/22f54d1ac4a317baf97ea96274fad2fad73c73c0"
        },
        "date": 1784152752622,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.3033703776392982,
            "unit": "iter/sec",
            "range": "stddev: 0.007950089182055805",
            "extra": "mean: 767.24162000001 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1394f38830f5d67eb2b61d56e26dd7b7412589be",
          "message": "FIX: make TOML updates idempotent (#664)\n\n* FIX: do not sort TOML tables on export",
          "timestamp": "2026-07-16T13:57:46+02:00",
          "tree_id": "455bb07f8a2decaf07a747526a698c827b9a5fbc",
          "url": "https://github.com/ComPWA/policy/commit/1394f38830f5d67eb2b61d56e26dd7b7412589be"
        },
        "date": 1784203095521,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.6982471258683058,
            "unit": "iter/sec",
            "range": "stddev: 0.007959393181731557",
            "extra": "mean: 588.8424510000008 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d8e7dc3e36f727c3021722562be4db74e17f4f32",
          "message": "ENH: sort arrays in `policy` configuration (#662)",
          "timestamp": "2026-07-16T14:00:46+02:00",
          "tree_id": "3490371d8c61f692b313403b88f97c54e88d38c3",
          "url": "https://github.com/ComPWA/policy/commit/d8e7dc3e36f727c3021722562be4db74e17f4f32"
        },
        "date": 1784203282504,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.4262575941688225,
            "unit": "iter/sec",
            "range": "stddev: 0.006342915842124159",
            "extra": "mean: 701.1356181999986 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7e50fdca2d700d1e337b24463b2f96928d5f3880",
          "message": "FIX: remove obsolete license classifiers (#666)",
          "timestamp": "2026-07-16T17:36:30+02:00",
          "tree_id": "0a10157d2f5037400b43cbfce8379db4d24caa65",
          "url": "https://github.com/ComPWA/policy/commit/7e50fdca2d700d1e337b24463b2f96928d5f3880"
        },
        "date": 1784216224418,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.2190800701881641,
            "unit": "iter/sec",
            "range": "stddev: 0.011229849800128632",
            "extra": "mean: 820.2906638000002 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dbc92260e33857748cdbfa1e257e981865713b6a",
          "message": "ENH: exclude certain dependencies for Jupyter (#660)\n\n* MAINT: sort keys in JSON schema alphabetically",
          "timestamp": "2026-07-16T17:38:50+02:00",
          "tree_id": "21ffef92442847a783c5490efabaa80d1e2c3dd8",
          "url": "https://github.com/ComPWA/policy/commit/dbc92260e33857748cdbfa1e257e981865713b6a"
        },
        "date": 1784216359049,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.2990652674337309,
            "unit": "iter/sec",
            "range": "stddev: 0.00873978292970227",
            "extra": "mean: 769.7842634000011 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eeabd21efcee28b47e0f98dbcbb278e918932aee",
          "message": "FEAT: implement `policy bootstrap` (#668)\n\n* DX: disable `ms-python.vscode-python-envs` extension\n* MAINT: promote `_characterization` module to public `characterization`",
          "timestamp": "2026-07-17T11:47:41+02:00",
          "tree_id": "2ed7f241dc081abfbff708ee0468b36f80a076cb",
          "url": "https://github.com/ComPWA/policy/commit/eeabd21efcee28b47e0f98dbcbb278e918932aee"
        },
        "date": 1784281692022,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.5733323361007554,
            "unit": "iter/sec",
            "range": "stddev: 0.010031945098892778",
            "extra": "mean: 635.5936232000005 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3224fa0436d1e288a59b374f60e3f03da8be4f99",
          "message": "ENH: make order of `tool.tombi` table comply with `tombi` (#669)",
          "timestamp": "2026-07-17T12:21:10+02:00",
          "tree_id": "be1ef40c4c377701daa599ca96d8e5b304468edb",
          "url": "https://github.com/ComPWA/policy/commit/3224fa0436d1e288a59b374f60e3f03da8be4f99"
        },
        "date": 1784283695451,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.6375998077575702,
            "unit": "iter/sec",
            "range": "stddev: 0.017980253606855186",
            "extra": "mean: 610.6498030000012 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a41ca0d5ae548902cecdf51e1285079c3ddf369",
          "message": "FIX: preserve custom Tombi schemas (#671)",
          "timestamp": "2026-07-21T21:40:40+02:00",
          "tree_id": "1fc02321c533778a5dd6d8bedd21a0be418cbb20",
          "url": "https://github.com/ComPWA/policy/commit/9a41ca0d5ae548902cecdf51e1285079c3ddf369"
        },
        "date": 1784662873544,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.5062790971868336,
            "unit": "iter/sec",
            "range": "stddev: 0.021089610942680394",
            "extra": "mean: 663.887590200001 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3a24795984f3e5111fd81fbcea9f01453be0bf1c",
          "message": "DOC: automatically generate TOML example (#673)\n\n* DOC: remove fullscreen button\n* DOC: split `check-dev-files` page into subpages\n* ENH: embed option documentation as tooltips",
          "timestamp": "2026-07-21T22:32:55+02:00",
          "tree_id": "29fff500388739f3c56b520540916188fecc5a15",
          "url": "https://github.com/ComPWA/policy/commit/3a24795984f3e5111fd81fbcea9f01453be0bf1c"
        },
        "date": 1784666003270,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.6655335142780758,
            "unit": "iter/sec",
            "range": "stddev: 0.008783578135326292",
            "extra": "mean: 600.4082124000064 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c9d3b180d911abc1aa8576c98c7fbe6d8708e4fa",
          "message": "FIX: keep `repos` round-trippable when sorting (#675)\n\n* ENH: print link to ComPWA/policy config documentation\n* FIX: key pre-commit repo separator on the repo index",
          "timestamp": "2026-07-26T14:28:24+02:00",
          "tree_id": "7549b7743ec67906fa2ca6989dfe3f6b9d303dbe",
          "url": "https://github.com/ComPWA/policy/commit/c9d3b180d911abc1aa8576c98c7fbe6d8708e4fa"
        },
        "date": 1785068933954,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.6807938928485662,
            "unit": "iter/sec",
            "range": "stddev: 0.00960884181565183",
            "extra": "mean: 594.9569452000005 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6bed59e6083d5124757f2ace42118a34d711a137",
          "message": "BEHAVIOR: use Ruff rule names, not codes (#677)\n\n* BEHAVIOR: ignore `builtin-variable-shadowing` in `docs/conf.py`\n* MAINT: migrate `noqa` comments to `ruff: ignore` syntax",
          "timestamp": "2026-07-26T15:33:06+02:00",
          "tree_id": "d499d6d77af479dd7952c812fa93f11685232cf5",
          "url": "https://github.com/ComPWA/policy/commit/6bed59e6083d5124757f2ace42118a34d711a137"
        },
        "date": 1785072811869,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.886755128541839,
            "unit": "iter/sec",
            "range": "stddev: 0.007731052287813556",
            "extra": "mean: 530.0104846000024 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b6d49963ac960b07670af3477c7e9e635e6e998d",
          "message": "FIX: do not set `language_version` in cspell hook (#679)",
          "timestamp": "2026-07-30T17:10:42+02:00",
          "tree_id": "abd1848179444441306d7954cd739955273d6f52",
          "url": "https://github.com/ComPWA/policy/commit/b6d49963ac960b07670af3477c7e9e635e6e998d"
        },
        "date": 1785424278159,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.6099194856822612,
            "unit": "iter/sec",
            "range": "stddev: 0.005023862911760982",
            "extra": "mean: 621.1490754000124 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de3155f252663b0d7a2ed223b46b421b96cb9463",
          "message": "FEAT: use `lychee` for `linkcheck` in Quarto repos (#681)\n\n* FEAT: update `linkcheck` job for Quarto projects\n\n* FIX: use correct shell command\n\n* ENH: install `lychee-bin` into dev dependencies\n\n* ENH: implement `lychee` for Pixi, too\n\n* FIX: expand Poe task shorthand notations before reading\n\n* FIX: look up dependencies in the group that runs the task\n\n* FIX: match lychee in commands defined as an array\n\n* FIX: only configure lychee for Quarto-documented repositories\n\n* MAINT: drop unreachable comparison in linkcheck policy",
          "timestamp": "2026-08-29T20:55:44+02:00",
          "tree_id": "c14caf6190d4e0c5671841c8946aec603d96c46d",
          "url": "https://github.com/ComPWA/policy/commit/de3155f252663b0d7a2ed223b46b421b96cb9463"
        },
        "date": 1788029770404,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 2.0793885841663293,
            "unit": "iter/sec",
            "range": "stddev: 0.010014212111308082",
            "extra": "mean: 480.9105943999981 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "667b75c964c466ff5410ce08595825476dc0da45",
          "message": "ENH: make release tag prefix configurable (#686)\n\n* MAINT: use Jinja for release drafter",
          "timestamp": "2026-08-31T14:51:35+02:00",
          "tree_id": "4b18d0326131ddd3a14b3b7621283fcd5458e30d",
          "url": "https://github.com/ComPWA/policy/commit/667b75c964c466ff5410ce08595825476dc0da45"
        },
        "date": 1788180722220,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 2.120911461446028,
            "unit": "iter/sec",
            "range": "stddev: 0.006286012117212973",
            "extra": "mean: 471.4954010000042 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b0963a93916e6472f1318cae2906ec8c5beb1ee3",
          "message": "FIX: resolve generated action references to self (#688)\n\n* BEHAVIOR: add `repository` argument to workflow writers\n* DX: pin GitHub Actions workflows to their release SHAs\n* FEAT: add `resolve_self_references()` helper\n* FIX: quote `coverage-python-version` in CI workflow",
          "timestamp": "2026-08-31T21:08:43+02:00",
          "tree_id": "963d464f3afef26fafd6b1344cd312b7ea3babf8",
          "url": "https://github.com/ComPWA/policy/commit/b0963a93916e6472f1318cae2906ec8c5beb1ee3"
        },
        "date": 1788203350078,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.6468271289019811,
            "unit": "iter/sec",
            "range": "stddev: 0.00830728288743238",
            "extra": "mean: 607.2282769999958 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a4c37be1089e0b9f9846c8d163fac3438c5b43e",
          "message": "FEAT: configurable release name template (#690)",
          "timestamp": "2026-09-01T12:13:12+02:00",
          "tree_id": "fbd2d0e2c55f296e6f83261dfb9421475b3ec0cc",
          "url": "https://github.com/ComPWA/policy/commit/2a4c37be1089e0b9f9846c8d163fac3438c5b43e"
        },
        "date": 1788257617616,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.8841380812343245,
            "unit": "iter/sec",
            "range": "stddev: 0.00581517519852993",
            "extra": "mean: 530.7466634000023 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c78e242583bf2d5eccdaf4ab8fc91ce0f6a7338a",
          "message": "DX: use `ComPWA/policy@` prefix in release titles (#691)",
          "timestamp": "2026-09-01T12:25:55+02:00",
          "tree_id": "9637827d78bafe9c4f80076a158b0e11a9466ca5",
          "url": "https://github.com/ComPWA/policy/commit/c78e242583bf2d5eccdaf4ab8fc91ce0f6a7338a"
        },
        "date": 1788258379540,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.6611870722215918,
            "unit": "iter/sec",
            "range": "stddev: 0.012978000817275601",
            "extra": "mean: 601.9791609999999 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0f8b7d0d525bbaea17860ab891ddb3c2ecf175c9",
          "message": "DX: title releases by version only (#693)",
          "timestamp": "2026-09-01T13:58:03+02:00",
          "tree_id": "32491ba70286aca3adf5164af728acbbdb77a1e1",
          "url": "https://github.com/ComPWA/policy/commit/0f8b7d0d525bbaea17860ab891ddb3c2ecf175c9"
        },
        "date": 1788263910894,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.5844072494786932,
            "unit": "iter/sec",
            "range": "stddev: 0.005619167600980751",
            "extra": "mean: 631.1508611999998 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}