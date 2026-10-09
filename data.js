window.BENCHMARK_DATA = {
  "lastUpdate": 1791567808225,
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
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "84b4a60858e9a37111c2b6d39adc22bfa3a17789",
          "message": "MAINT: upgrade lock files (#696)\n\n* DOC: fix pre-commit configuration filename in CLI help\n* MAINT: adapt type annotations and lint settings to updated tools",
          "timestamp": "2026-09-11T14:57:34+02:00",
          "tree_id": "0a7b7d592d4fb43ca7eb641d83902fdbe5d3c6af",
          "url": "https://github.com/ComPWA/policy/commit/84b4a60858e9a37111c2b6d39adc22bfa3a17789"
        },
        "date": 1789131481347,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 2.152648826459329,
            "unit": "iter/sec",
            "range": "stddev: 0.005555899566434148",
            "extra": "mean: 464.54395519997433 msec\nrounds: 5"
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
          "id": "f6a472332047fb0ae6407e63a494bfce5cb4ee2e",
          "message": "ENH: switch to `prek` (#695)\n\n* DOC: unwrap hard-wrapped Markdown under docs\n* ENH: run `prek autoupdate` without `-j` flag\n* FIX: keep upgrade task field ordering consistent\n* MAINT: remove redundant `.gitignore` exceptions",
          "timestamp": "2026-09-11T16:08:08+02:00",
          "tree_id": "724c574d566f17e5cefb1dd67c7fdd5635242abe",
          "url": "https://github.com/ComPWA/policy/commit/f6a472332047fb0ae6407e63a494bfce5cb4ee2e"
        },
        "date": 1789135723089,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 2.137435665842227,
            "unit": "iter/sec",
            "range": "stddev: 0.007148180100936989",
            "extra": "mean: 467.85033859999885 msec\nrounds: 5"
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
          "id": "4a1020244ef1cabbdd3e65b2e4e6dffce9d4312f",
          "message": "ENH: migrate `style` task to `prek` (#701)",
          "timestamp": "2026-09-15T10:53:25+02:00",
          "tree_id": "db990620b6dc171e21f4084c363057dff7dc04ba",
          "url": "https://github.com/ComPWA/policy/commit/4a1020244ef1cabbdd3e65b2e4e6dffce9d4312f"
        },
        "date": 1789462433961,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 2.315292210918384,
            "unit": "iter/sec",
            "range": "stddev: 0.004557328842385588",
            "extra": "mean: 431.9109248000018 msec\nrounds: 5"
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
          "id": "a77116ce59e05ac80dc5f69d05af73be56c9a1f9",
          "message": "MAINT: replace `rtoml` with `tomli` and `tomli-w` (#716)",
          "timestamp": "2026-10-09T14:21:06+02:00",
          "tree_id": "0314b92b272931bf769b2c6b33225157e40b29df",
          "url": "https://github.com/ComPWA/policy/commit/a77116ce59e05ac80dc5f69d05af73be56c9a1f9"
        },
        "date": 1791548490114,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.599372616534751,
            "unit": "iter/sec",
            "range": "stddev: 0.011189714007450217",
            "extra": "mean: 625.2451678000028 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d3bbdc2ea44b047819ec534268236f12d098b336",
          "message": "MAINT: upgrade lock files (#705)\n\n* DOC: update copyright in documentation footer\n* MAINT: fix `ty` diagnostics",
          "timestamp": "2026-10-09T12:35:37Z",
          "tree_id": "9dec471442e43a54ea96d2215bb8153a5dbb6ae9",
          "url": "https://github.com/ComPWA/policy/commit/d3bbdc2ea44b047819ec534268236f12d098b336"
        },
        "date": 1791549362854,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.4761746118825216,
            "unit": "iter/sec",
            "range": "stddev: 0.007811804667533894",
            "extra": "mean: 677.4266349999948 msec\nrounds: 5"
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
          "id": "7c8480633142ad5f039fec543fd3b4a86ff6bd13",
          "message": "BEHAVIOR: support Python 3.15 (#717)\n\n* DX: test this package on Python 3.15",
          "timestamp": "2026-10-09T15:02:01+02:00",
          "tree_id": "bb9813b9ce542c749ada52bbba3187efc5650bec",
          "url": "https://github.com/ComPWA/policy/commit/7c8480633142ad5f039fec543fd3b4a86ff6bd13"
        },
        "date": 1791550947939,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 2.3587549412997046,
            "unit": "iter/sec",
            "range": "stddev: 0.012719074522235583",
            "extra": "mean: 423.9524770000003 msec\nrounds: 5"
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
          "id": "204df3ff29c83ba224e1c1e8a3264256ffd909d8",
          "message": "BEHAVIOR: upgrade every nested uv lock file (#718)",
          "timestamp": "2026-10-09T15:29:46+02:00",
          "tree_id": "286eb5ed5b5db26691eab8b1657228d27e85a4f3",
          "url": "https://github.com/ComPWA/policy/commit/204df3ff29c83ba224e1c1e8a3264256ffd909d8"
        },
        "date": 1791552612337,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.4599744742150829,
            "unit": "iter/sec",
            "range": "stddev: 0.015256695305897142",
            "extra": "mean: 684.9434820000013 msec\nrounds: 5"
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
          "id": "2b9cd213deccebc84c395805fbba23effad2ce27",
          "message": "BEHAVIOR: preserve Pixi dependency constraints (#719)",
          "timestamp": "2026-10-09T15:43:17+02:00",
          "tree_id": "c1f963391364de3053a13aa84a3859202fef59c3",
          "url": "https://github.com/ComPWA/policy/commit/2b9cd213deccebc84c395805fbba23effad2ce27"
        },
        "date": 1791553426884,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 2.0586957868537823,
            "unit": "iter/sec",
            "range": "stddev: 0.00880540569780036",
            "extra": "mean: 485.7444244000021 msec\nrounds: 5"
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
          "id": "34b1e0de847ccd22b5ee26ea0a29596992b26422",
          "message": "BEHAVIOR: use conda-forge `lychee` in Pixi (#720)",
          "timestamp": "2026-10-09T16:09:24+02:00",
          "tree_id": "f9204e735610be4f270baf5013c9530d462e06ba",
          "url": "https://github.com/ComPWA/policy/commit/34b1e0de847ccd22b5ee26ea0a29596992b26422"
        },
        "date": 1791554994328,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.6477804486995271,
            "unit": "iter/sec",
            "range": "stddev: 0.0265672087195446",
            "extra": "mean: 606.8769664000001 msec\nrounds: 5"
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
          "id": "79811ca34041c30ca10f6ac53f61aa47dd4891c8",
          "message": "BEHAVIOR: configure lychee through TOML (#721)",
          "timestamp": "2026-10-09T16:36:03+02:00",
          "tree_id": "bac8cf805e9d903843bd4440a7222d1e9c531777",
          "url": "https://github.com/ComPWA/policy/commit/79811ca34041c30ca10f6ac53f61aa47dd4891c8"
        },
        "date": 1791556606655,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.634466866331874,
            "unit": "iter/sec",
            "range": "stddev: 0.011481379071452495",
            "extra": "mean: 611.8202948000004 msec\nrounds: 5"
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
          "id": "b7623825cf4acc8b3698212f13b174c499cc60de",
          "message": "BEHAVIOR: use Poe linkcheck for `pixi+uv` (#722)",
          "timestamp": "2026-10-09T16:49:11+02:00",
          "tree_id": "ec074fddbd9d1a49dfb024d65e6f2bc878a4f4ff",
          "url": "https://github.com/ComPWA/policy/commit/b7623825cf4acc8b3698212f13b174c499cc60de"
        },
        "date": 1791557379830,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.5206554862114396,
            "unit": "iter/sec",
            "range": "stddev: 0.013991535991232457",
            "extra": "mean: 657.611147999998 msec\nrounds: 5"
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
          "id": "26dbf3d9d8db2ba33c8130137e2f533c57b1ff1a",
          "message": "BEHAVIOR: set version-branch permissions (#723)",
          "timestamp": "2026-10-09T17:17:12+02:00",
          "tree_id": "f97d367f6a20df650e0eb3e5cdd49dd11602a94c",
          "url": "https://github.com/ComPWA/policy/commit/26dbf3d9d8db2ba33c8130137e2f533c57b1ff1a"
        },
        "date": 1791559058027,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.513360887746771,
            "unit": "iter/sec",
            "range": "stddev: 0.014295080074767418",
            "extra": "mean: 660.7809201999999 msec\nrounds: 5"
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
          "id": "a3bdaf2435adedf2e1cb8e9dcc2ba3d19f1979e4",
          "message": "BREAK: drop support for Python 3.10 (#724)\n\n* BEHAVIOR: run macOS test job on Python 3.11 by default\n* MAINT: import `Self` and `NotRequired` from `typing`",
          "timestamp": "2026-10-09T18:01:48+02:00",
          "tree_id": "351bde86b4d2466c2d9e25502a793eabe1314b0a",
          "url": "https://github.com/ComPWA/policy/commit/a3bdaf2435adedf2e1cb8e9dcc2ba3d19f1979e4"
        },
        "date": 1791561739594,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.5666516238657737,
            "unit": "iter/sec",
            "range": "stddev: 0.024740831567758224",
            "extra": "mean: 638.3040011999996 msec\nrounds: 5"
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
          "id": "236312689a32ad00fdef6d738e80eb38e8687dbb",
          "message": "BEHAVIOR: develop on Python 3.14 by default (#725)\n\n* BREAK: drop support for Python 3.10\n\n* BEHAVIOR: upgrade developer environment to Python 3.14",
          "timestamp": "2026-10-09T18:13:06+02:00",
          "tree_id": "ae678261b251538aa34191d8c04eaa380c8f50c6",
          "url": "https://github.com/ComPWA/policy/commit/236312689a32ad00fdef6d738e80eb38e8687dbb"
        },
        "date": 1791562412735,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 2.213787549974412,
            "unit": "iter/sec",
            "range": "stddev: 0.04968287413798666",
            "extra": "mean: 451.7145288000009 msec\nrounds: 5"
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
          "id": "25a8df0940d6de534e887b2d7f8b7f24c2d26d67",
          "message": "FIX: fall back to latest supported dev Python (#729)\n\nFIX: fall back to latest supported developer Python version",
          "timestamp": "2026-10-09T19:25:23+02:00",
          "tree_id": "32d65fb93ff9a5602cbc391b005cb4df8a9cf328",
          "url": "https://github.com/ComPWA/policy/commit/25a8df0940d6de534e887b2d7f8b7f24c2d26d67"
        },
        "date": 1791566753855,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.7331446150522458,
            "unit": "iter/sec",
            "range": "stddev: 0.007915009236057547",
            "extra": "mean: 576.9858967999937 msec\nrounds: 5"
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
          "id": "a9cef042ca9f3148b20de89f9e28e5aa91f3e478",
          "message": "FIX: stop creating Poe config for `pixi+uv` repos (#730)\n\n* BEHAVIOR: configure `pixi+uv` link checking in Pixi if Poe is not used",
          "timestamp": "2026-10-09T19:40:02+02:00",
          "tree_id": "ecaed18ca59be5748501a2be557b703544a87656",
          "url": "https://github.com/ComPWA/policy/commit/a9cef042ca9f3148b20de89f9e28e5aa91f3e478"
        },
        "date": 1791567633293,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.5597169565792133,
            "unit": "iter/sec",
            "range": "stddev: 0.01629101277860649",
            "extra": "mean: 641.1419686000016 msec\nrounds: 5"
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
          "id": "d29eaacc4266ab05561ad5451cfc6d2a4430e73f",
          "message": "BREAK: require `excluded-python-versions` to be an array (#734)\n\n* BREAK: require `excluded-python-versions` to be an array",
          "timestamp": "2026-10-09T19:42:58+02:00",
          "tree_id": "bd96dfd4ca11487563d46a7b7a39b4fe76dae61c",
          "url": "https://github.com/ComPWA/policy/commit/d29eaacc4266ab05561ad5451cfc6d2a4430e73f"
        },
        "date": 1791567807749,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_check_dev_files.py::test_check_dev_files",
            "value": 1.5898810289577718,
            "unit": "iter/sec",
            "range": "stddev: 0.009255398794151956",
            "extra": "mean: 628.9778805999958 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}