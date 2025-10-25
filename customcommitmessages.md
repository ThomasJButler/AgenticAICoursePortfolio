Write git commit messages following these rules:

1. NO emojis ever
2. UK English spelling
3. Format: type: brief description (lowercase, no full stop)
   - feat: new feature
   - fix: bug fix
   - docs: documentation only
   - style: formatting, missing semicolons, etc
   - refactor: code change that neither fixes a bug nor adds a feature
   - test: adding missing tests
   - chore: maintenance, deps, config

4. Max 50 chars for subject line
5. If needed, blank line then body explaining WHY not what
6. Reference issue numbers where relevant: fixes #123
7. Write like you're noting it for yourself next week, not a CV

Examples:
- feat: add version comparison for time travel
- fix: prevent race condition in auth flow
- refactor: simplify spam detection logic
- chore: update deps to fix security warnings
- fix: safari date parsing edge case (fixes #456)

Don't write: "Enhanced performance optimization" or "Implemented robust solution"
Do write: "fix: stop memory leak in animation loop"

Sound like Tom at his desk making quick notes, not a robot writing documentation.