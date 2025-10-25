# Comment Style Guide Template - Tom's Version

> **Project:** Version Time Travel
> **Philosophy:** Clear, purposeful comments that respect the reader's time. Professional but human.
> **Last Updated:** 2025-10-21

---

## Philosophy

### Core Principles

Here's the approach we're taking:

- **Strategic commenting** - Every comment has a purpose
- **Type safety first** - JSDoc provides IDE support and prevents bugs
- **Document decisions** - Explain the reasoning behind non-obvious choices
- **Self-documenting code** - Clear naming reduces comment necessity
- **Maintainable documentation** - Comments that age well
- **Professional but genuine** - Clear communication without corporate speak

### Statistics from Reference Project

For context, here's what good comment hygiene looks like:
- 72 JavaScript/TypeScript files with strategic comments
- 25 SCSS files with section documentation
- 2 TODO comments (tracking specific technical debt)
- Zero FIXME/HACK comments
- No stale or contradictory documentation

---

## Project-Specific Rules

Three non-negotiable standards:

### NO EMOJI
Professional codebases don't use emojis in comments:
- No ✅ ❌ or other symbols
- Keep comments text-only
- Emojis reduce readability in many IDEs

### UK ENGLISH ONLY
Consistent British English spelling throughout:
- "optimised" not "optimized"
- "colour" not "color"
- "initialise" not "initialize"
- "organise" not "organize"
- "realised" not "realized"

### Authentic Professional Voice
Comments should be professional whilst maintaining authenticity:

**Good (professional but genuine):**
```javascript
// Temporary workaround for API v1 limitation
// TODO: Remove when v2 migration complete (Q2 2025)

// Validates against known edge case from issue #234
// Prevents the race condition we discovered in prod

// Uses optimistic locking pattern to prevent conflicts
// See architecture decision record #12 for rationale
```

**Bad (too casual or too corporate):**
```javascript
// bit hacky lol but works
// This implementation leverages enhanced paradigms
```

---

## When to Comment

### DO Comment These

- **File headers** - Author, date, and clear file purpose
- **Function signatures** - JSDoc with complete type information
- **Complex algorithms** - Step-by-step reasoning for non-trivial logic
- **Business logic** - Document stakeholder decisions and requirements
- **Architecture decisions** - Why this approach over alternatives
- **Performance optimisations** - Explain trade-offs made
- **Known edge cases** - Reference issue numbers or incident reports
- **External dependencies** - Version constraints or API quirks
- **Security considerations** - Input validation, sanitisation choices

### DON'T Comment These

- **Self-evident code** - `count++` needs no explanation
- **Standard patterns** - Common React hooks, basic loops
- **Implementation details** - The code itself shows how
- **Outdated information** - Remove rather than maintain stale comments
- **Generic descriptions** - Avoid "handles", "processes", "manages"

---

## Comment Templates by Use Case

### Template 1: File Header

Professional but concise:

```javascript
/**
 * @author Tom Butler
 * @date 2025-10-21
 * @description Manages version comparison logic and git branch metadata parsing
 *              for the time travel feature
 */
```

**Good Example:**
```javascript
/**
 * @author Tom Butler
 * @date 2025-10-21
 * @description React context provider for application-wide version state management.
 *              Handles version switching, comparison, and persistence to localStorage.
 */
```

---

### Template 2: Function Documentation

Complete type information with clear descriptions:

```javascript
/**
 * @param {string} version - Semantic version string (e.g., "1.2.3")
 * @param {Object} options - Parsing configuration
 * @param {boolean} [options.strict=false] - Enforce strict semver format
 * @param {boolean} [options.includePrerelease=true] - Parse pre-release tags
 * @return {ParsedVersion|null} Parsed version object or null if invalid
 */
function parseVersion(version, options = {}) {
    // implementation
}
```

**Good Pattern for Simple Functions:**
```javascript
/**
 * @param {string[]} items - Array of item identifiers
 * @param {string} targetId - Identifier to search for
 * @return {boolean} True if item exists in array
 */
const hasItem = (items, targetId) => {
    return items.includes(targetId)
}
```

---

### Template 3: React Components

Clear prop documentation:

```javascript
/**
 * Version selector component for time travel interface
 * @param {Object} props
 * @param {Version[]} props.versions - Available versions to select from
 * @param {string} props.currentVersion - Currently selected version ID
 * @param {Function} props.onVersionChange - Callback fired on selection change
 * @param {boolean} [props.disabled=false] - Disables user interaction
 * @return {JSX.Element}
 * @constructor
 */
function VersionSelector({ versions, currentVersion, onVersionChange, disabled = false }) {
    // component implementation
}
```

---

### Template 4: Business Logic Documentation

Explain the why behind decisions:

```javascript
// Validation rule 1: Maximum length prevents DoS via memory exhaustion
// Security audit recommendation (2024-Q3)
if (input.length > MAX_INPUT_LENGTH) {
    return { error: 'Input exceeds maximum length', code: 'ERR_TOO_LONG' }
}

// Validation rule 2: Pattern matching for SQL injection prevention
// Allows alphanumeric, spaces, and common punctuation only
if (!SAFE_INPUT_PATTERN.test(input)) {
    return { error: 'Input contains invalid characters', code: 'ERR_INVALID_CHARS' }
}

// Business requirement: Auto-save triggers after 3 seconds of inactivity
// Reduces server load whilst maintaining good UX (product decision 2024-09)
const AUTOSAVE_DELAY_MS = 3000
```

---

### Template 5: React Hooks with Clear Intent

```javascript
/**
 * @constructs - Initialises WebSocket connection and event listeners
 */
useEffect(() => {
    const ws = new WebSocket(WS_ENDPOINT)
    
    // Reconnection logic handles network instability
    ws.addEventListener('close', handleReconnect)
    
    return () => {
        ws.removeEventListener('close', handleReconnect)
        ws.close()
    }
}, [])

/**
 * @listens userId, dataVersion - Refetches user data when ID changes
 *                                or when version is incremented
 */
useEffect(() => {
    if (!userId) {
        // Clear stale data when user logs out
        setUserData(null)
        return
    }
    
    // Fetch fresh data with cache bypass
    fetchUserData(userId, { bypassCache: dataVersion > 0 })
}, [userId, dataVersion])
```

---

### Template 6: Algorithm Documentation

Number complex logic steps:

```javascript
/**
 * Detects potential spam using heuristic analysis
 * @param {string} message - User-submitted message
 * @return {boolean} True if message appears to be spam
 */
const detectSpam = (message) => {
    // Heuristic 1: Minimum viable message length
    // Legitimate messages typically exceed 10 characters
    if (message.length < MIN_MESSAGE_LENGTH) {
        return true
    }
    
    // Heuristic 2: Vowel-to-consonant ratio analysis
    // Spam often contains random character sequences
    const vowelRatio = calculateVowelRatio(message)
    if (vowelRatio < MINIMUM_VOWEL_RATIO) {
        return true
    }
    
    // Heuristic 3: Repetition pattern detection
    // Identifies keyboard mashing and repeated sequences
    if (hasExcessiveRepetition(message)) {
        return true
    }
    
    return false
}
```

---

### Template 7: Performance Optimisations

Document trade-offs and reasoning:

```javascript
// Debounced search reduces API calls from ~50/sec to 1/sec during typing
// 300ms delay provides responsive feel whilst protecting backend
const debouncedSearch = useMemo(
    () => debounce(performSearch, 300),
    [performSearch]
)

// Virtual scrolling for lists exceeding 100 items
// Reduces DOM nodes from potentially thousands to ~20 visible
// Trade-off: Slight complexity increase for significant performance gain
const VirtualList = ({ items, itemHeight }) => {
    // implementation
}

// Memoised expensive calculation - runs only when dependencies change
// Profiling showed 200ms computation time on average hardware
const processedData = useMemo(() => {
    return expensiveTransformation(rawData)
}, [rawData])
```

---

### Template 8: Error Handling & Edge Cases

Reference specific issues when relevant:

```javascript
try {
    const result = await apiCall()
    
    // Handle API v1 backwards compatibility
    // Some endpoints still return old format (migration in progress)
    const normalised = result.data || result.response?.data || []
    
    return normalised
} catch (error) {
    // Network errors should trigger retry logic
    if (error.code === 'ENETWORK') {
        return scheduleRetry(apiCall)
    }
    
    // Issue #456: Safari throws on invalid date strings
    // Graceful degradation for affected browsers
    if (error.message.includes('Invalid Date')) {
        return fallbackDateHandler(input)
    }
    
    // Unexpected errors get logged to monitoring
    logError(error, { context: 'apiCall', userId })
    throw error
}
```

---

### Template 9: Configuration & Constants

Explain values that aren't self-evident:

```javascript
// Polling interval balanced between real-time feel and server load
// Reduced from 1s to 5s after load testing revealed scaling issues
const POLL_INTERVAL_MS = 5000

// Maximum file size aligned with CDN limitations
// CloudFlare free tier caps at 100MB per file
const MAX_UPLOAD_SIZE = 100 * 1024 * 1024

// Retry configuration based on analysis of transient failures
// 90% of failures resolve within 3 attempts (metrics from 2024-Q4)
const RETRY_CONFIG = {
    maxAttempts: 3,
    backoffMs: 1000,
    backoffMultiplier: 2
}
```

---

### Template 10: TODOs with Context

Actionable TODOs with ownership and timelines:

```javascript
// TODO [Tom]: Migrate to new auth provider by 2025-Q2
// Blocked by: Backend team completing OAuth2 implementation

// TODO [Team]: Investigate memory leak in animation loop
// Issue #789 - Only affects Firefox, low priority

// TODO [Tom]: Add comprehensive error boundaries
// Part of error handling improvement epic (JIRA-2345)
```

Not:
```javascript
// TODO: fix this
// TODO: refactor later
// TODO: improve performance
```

---

### Template 11: Security & Validation

Document security decisions:

```javascript
// Input sanitisation prevents XSS attacks
// Using DOMPurify library as recommended by security audit
const sanitisedHtml = DOMPurify.sanitize(userInput, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a'],
    ALLOWED_ATTR: ['href']
})

// Rate limiting prevents brute force attempts
// 5 attempts per minute per IP address
if (attemptsInLastMinute >= RATE_LIMIT) {
    return { error: 'Too many attempts. Please try again later.' }
}

// CORS configuration restricts API access to known domains
// Whitelist maintained in environment configuration
const ALLOWED_ORIGINS = process.env.CORS_WHITELIST?.split(',') || []
```

---

## What Excellence Looks Like

### Good: Professional with Context

```javascript
/**
 * @author Tom Butler
 * @date 2025-10-21
 * @description Implements version comparison with support for semantic versioning
 *              and custom build metadata parsing
 */

/**
 * Compares two version strings according to semver specification
 * @param {string} v1 - First version string
 * @param {string} v2 - Second version string  
 * @return {number} -1 if v1 < v2, 0 if equal, 1 if v1 > v2
 */
function compareVersions(v1, v2) {
    // Parse versions into comparable components
    const parsed1 = parseVersion(v1)
    const parsed2 = parseVersion(v2)
    
    // Handle invalid version strings gracefully
    // Returns equal to maintain sort stability
    if (!parsed1 || !parsed2) {
        console.warn(`Invalid version comparison: ${v1} vs ${v2}`)
        return 0
    }
    
    // Compare major.minor.patch sequentially
    // Early return on first difference found
    for (const field of ['major', 'minor', 'patch']) {
        if (parsed1[field] < parsed2[field]) return -1
        if (parsed1[field] > parsed2[field]) return 1
    }
    
    return 0
}
```

### Bad: Too Casual or Too Corporate

```javascript
// bad - too casual
// lol this is a mess but ship it
function compareVersions(v1, v2) { }

// bad - AI corporate speak  
// Enhanced version comparison leveraging optimised algorithms
function compareVersions(v1, v2) { }

// bad - stating the obvious
// This function compares two versions
// It takes v1 and v2 as parameters
// Returns comparison result
function compareVersions(v1, v2) { }
```

---

## Quick Reference - Comment Patterns

### JSDoc Templates

```javascript
// FILE HEADER
/**
 * @author Tom Butler
 * @date YYYY-MM-DD
 * @description [Clear purpose and responsibility]
 */

// FUNCTION
/**
 * @param {Type} paramName - Description if not obvious
 * @param {Type} [optional] - Square brackets for optional
 * @return {ReturnType} What gets returned
 */

// REACT COMPONENT
/**
 * @param {Object} props
 * @param {Type} props.propName - Purpose of this prop
 * @return {JSX.Element}
 * @constructor
 */

// REACT HOOK - INITIALISATION
/**
 * @constructs - Initialisation logic description
 */
useEffect(() => { }, [])

// REACT HOOK - LISTENER
/**
 * @listens dependency1, dependency2 - What triggers this effect
 */
useEffect(() => { }, [dependency1, dependency2])

// CONTEXT HOOK RETURN
/**
 * @return {{
 *    method1: Function,
 *    method2: Function,
 *    property1: Type,
 *    property2: Type
 * }}
 */
```

### Inline Comment Patterns

```javascript
// Business logic explanation
// Reference to issue/ticket numbers
// Performance trade-off documentation
// Security consideration note
// API compatibility workaround
// Known edge case handling
// TODO [Owner]: Task description by deadline
```

---

## Common UK English Conversions

Always use British English spelling:

| American | British |
|----------|---------|
| optimize/optimization | optimise/optimisation |
| organize/organization | organise/organisation |
| realize/realization | realise/realisation |
| initialize | initialise |
| analyze | analyse |
| color | colour |
| behavior | behaviour |
| center | centre |
| defense | defence |
| license (verb) | licence |
| gray | grey |

---

## Summary

The goal is professional code documentation that:

- **Shows you care** about code quality and maintenance
- **Respects colleagues** by explaining non-obvious decisions
- **Documents why** not what
- **Maintains authenticity** without being overly casual
- **Provides value** to future maintainers (including yourself)
- **Uses UK English** consistently
- **Avoids AI-generated** generic phrases

Remember: Good comments show professional maturity. They demonstrate you're thinking about the broader context, the team, and the future of the codebase. Write comments that would make a senior developer nod in appreciation, not because they're fancy, but because they're genuinely helpful.

---

**Template by:** Tom Butler  
**Last Updated:** 2025-10-21  
**Purpose:** Professional comment standards that maintain authenticity whilst demonstrating engineering maturity