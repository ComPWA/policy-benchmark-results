window.BENCHMARK_DATA = {
  "lastUpdate": 1784216224895,
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
      }
    ]
  }
}