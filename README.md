## lernarized-monorepo

### Requirements

* `node`
* `npm`
* `yarn` -- it's temporary

### Install

```
git clone https://github.com/sospedra/lernarized-monorepo.git
cd lernarized-monorepo
npm install
npm test // check if everything is good
```

### Notes

Things that we did here:

* Reuse common deps between projects: check `lodash` for example
* Dev and manage internal libs: check `/core`
* Manage all the repos from the top-level application: check `/package.json`
* Generate stand-alone javascript projects: check `/packages`
* Use multiple test runners, frameworks, libs, versions without conflicts
