# Formbar.js
Formbar.js is a classroom polling and management system. The two key components are tools for *Form*ative assessment, and a visual representation of the class status, typically a type of visual *bar*. Formbar was written in Python to run on a Raspberry Pi. Formbar.js is a rewrite in *J*ava*S*cript, and is designed to be platform-agnostic by way of nodeJS. The tertirary feature is to provide technically-minded students a means of writing interactive software to interact with the classroom management.

## STATUS

[![MegaLinter](https://github.com/alacercogitatus/Formbar.js/workflows/MegaLinter/badge.svg?query=branch%3Aksmith)](https://github.com/alacercogitatus/Formbar.js/actions?query=workflow%3AMegaLinter+branch%3Aksmith)
[![Dependency-Check](https://github.com/alacercogitatus/Formbar.js/workflows/Dependency-Check/badge.svg?query=branch%3Aksmith)](https://github.com/alacercogitatus/Formbar.js/actions?query=workflow%3ADependency-Check+branch%3Aksmith)

https://shields.io/badges/dynamic-json-badge


[![Dependabot](https://badgen.net/badge/Dependabot/enabled/green?icon=dependabot)](https://dependabot.com/)
![Endpoint Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Falacercogitatus%2FFormbar.js%2Frefs%2Fheads%2Fksmith%2Ftests%2Fdependabot-critical.json)
![Endpoint Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Falacercogitatus%2FFormbar.js%2Frefs%2Fheads%2Fksmith%2Ftests%2Fdependabot-high.json)
![Endpoint Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Falacercogitatus%2FFormbar.js%2Frefs%2Fheads%2Fksmith%2Ftests%2Fdependabot-moderate.json)
![Endpoint Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Falacercogitatus%2FFormbar.js%2Frefs%2Fheads%2Fksmith%2Ftests%2Fdependabot-low.json)


## Goal
- Reach feature parity with formbar
- Raspberry Pi Bot handles all physical features (lights, sound, IR remote)
- All interactions can be done by websockets, and will send out websocket notifications on changes
- Have permanent logins and seperate classes

## Documentation inside of wiki


## Testing

### STATIC: Dependency Check

https://owasp.org/www-project-dependency-check/

Run via `yarn dep_check`