# Copilot Instructions for the Praxis Codebase

Welcome! This guide helps AI coding agents work productively in the Praxis repository. Follow these instructions for best results.

## Project Architecture

- **Content-first static site**: Built with Hugo, using Markdown files in `content/` for all posts and pages.
- **Major directories**:
  - `content/`: Main source for site content, organized by section (e.g. `study/`, `initiative/`).
  - `layouts/`: Hugo templates for rendering content.
  - `assets/css/`: SCSS stylesheets for site appearance.
  - `docs/`: Hugo output for GitHub Pages.
  - `.github/`: Automation and agent instructions.

## Developer Workflows

- **Preview locally**: Run `hugo serve -D` from the repo root. Preview at `http://localhost:1313/`.
- **Deploy**: Push to `main` branch; output is in `docs/` for GitHub Pages.
- **Update content**: Edit Markdown files in `content/`. Use frontmatter for metadata (`title`, `status`, `section`, etc.).
- **Edit templates**: Change layouts in `layouts/`. Use Hugo's Go template syntax.

## Project-Specific Conventions

- **Section-based logic**: Use `.Section` (not `.Params.category`) to filter or display content by section (e.g. `study`, `initiative`).
- **Status field**: Posts use `status: current` or `status: previous` in frontmatter. Templates sort or filter by this.
- **Terminology**: Deprecated terms (e.g. `ollama`) should be replaced with canonical ones (`gpt-oss`).
- **Markdown formatting**: Ordered lists for steps, bold for task titles, consistent heading structure.

## Integration Points

- **Hugo**: Static site generator. See `config.toml` for site config.
- **GitHub Pages**: Deploys from `docs/` directory.
- **Optional Docker**: `docker-compose.yml` and `stack.env` exist but are not required for most workflows.

## Examples

- To list all study posts: use `where .Site.Pages "Section" "study"` in templates.
- To show "current" posts first: `range where .Pages "Params.status" "current"`, then "previous".
- To add a new post: create a Markdown file in the appropriate `content/` subfolder with frontmatter.

## Key Files

- `config.toml`: Hugo site configuration.
- `content/`: All site content.
- `layouts/`: Hugo templates.
- `assets/css/`: SCSS styles.
- `docs/`: Published site output.

---

If any section is unclear or missing, please specify what needs to be expanded or clarified!

The following tasks are defined in the workspace:

- **Git Pull**: Pulls the latest changes.
- **Hugo Serve**: Serves the site locally.
- **Open Hugo Site**: Opens the site in the browser.
- **Development Setup**: Runs all the above tasks in sequence.

## Project-Specific Conventions

### Markdown Formatting

- Use ordered lists for tasks and steps.
- Bold titles for emphasis.
- Maintain a consistent heading structure.

### Terminology

- Replace deprecated terms like `ollama` with `gpt-oss`.
- Ensure terminology is consistent across all files.

### File Organization

- Place general documentation in the root directory.
- Use subdirectories for topic-specific files.

## Integration Points

- **Hugo**: Static site generator for local development.
- **Docker**: Used for environment setup (see `docker-compose.yml`).

## Examples

### Markdown Formatting Example

```markdown
1. **Step One**: Description of step one.
2. **Step Two**: Description of step two.
```

### Terminology Replacement Example

Before:

```markdown
This feature is supported by ollama.
```

After:

```markdown
This feature is supported by gpt-oss.
```

## Key Files and Directories

- `docker-compose.yml`: Docker configuration.
- `stack.env`: Environment variables.
- `wiley/`: Subdirectory for specific topics.

---

## Repository Story

This is a small, content-first repository that serves as a personal knowledge base built from markdown files and a few configuration assets. It is not an application with compiled binaries — the primary "build" is a static site generated with Hugo when you want to preview or publish the notes.

- Why this shape: flat markdown files make searching and editing fast. Hugo is used to create a browsable site for reading and linking content.
- Major components:
  - Root markdown files (e.g. `AEM-atomic.md`, `LLM.md`, `llama.md`) — source content.
  - `wiley/` — topic-specific artifacts (JSON, additional notes).
  - `docker-compose.yml` + `stack.env` — optional local services used by some workflows.

## Quick Onboarding (what an AI agent should do first)

1. Index the markdown files in the repo root and `wiley/` for topics and terminology (search for `ollama`, `gpt-oss`, `Hugo`).
2. If asked to run or preview the site, use `hugo serve -D` from the repo root (Hugo must be installed). The local preview is at `http://localhost:1313/`.
3. Treat `docker-compose.yml` and `stack.env` as optional: inspect them before suggesting container-based steps. They may enable services referenced in notes but are not required for most edits.

## Project-specific patterns and examples

- Terminology edits: the repo keeps canonical terms in top-level markdown files. When replacing references (example: `ollama` → `gpt-oss`), update both prose and task lists. Example files where this occurred: `llama.md`, `aiai TODO.md`.
- Small, careful edits: preserve original writing style and only change the minimum required text. Use atomic commits with meaningful messages like "docs: replace 'ollama' with 'gpt-oss' in documentation".
- No tests or compiled artifacts: changes are validated by running Hugo preview and spot-checking rendered pages.

## Integration points and external dependencies

- Hugo: used locally to render the markdown into a static site. Confirm Hugo version if build issues appear.
- Docker: `docker-compose.yml` may reference local services. Read `stack.env` for environment variables before using the compose file.

## Examples of tasks an AI agent can perform

- Find-and-replace terminology across markdown files (preserve context and commit).
- Reformat lists and headings to match repository conventions (ordered lists for steps, bold titles for tasks).
- Add small, low-risk improvements such as adding front-matter to markdown files if needed for Hugo, or small README clarifications.

---

If anything in this story is incorrect or you'd like me to expand a section (Hugo config, Docker details, or examples), tell me which area to deepen and I will update the instructions.

## Dynamic Resource Indexing and Recommendations

To provide contextually relevant suggestions from available workspace resources:

### Inventory Files

The workspace maintains three key inventory files that catalog available tools and resources:

- **`.github/prompts.md`**: Custom GitHub Copilot prompts organized by category (AI assistants, literature research, project management, content tools, etc.)
- **`.github/chatmodes.md`**: Specialized chatmodes for different workflows (design, development, content, testing, etc.)
- **`.github/scripts.md`**: Automation scripts for content sync, media management, and development tasks

### Required Behavior

At runtime, when appropriate to the conversation:

1. **Index the inventory files**: Read `.github/prompts.md`, `.github/chatmodes.md`, and `.github/scripts.md` to understand available resources.
2. **Analyze conversation context**: Determine what the user is trying to accomplish based on recent discussion.
3. **Make relevant suggestions**: Proactively recommend prompts, chatmodes, or scripts that would help with the current task.
4. **Stay current**: Do not use hardcoded lists—always read the latest file contents to reflect additions, removals, or edits.

### When to Suggest Resources

- **Prompts**: When user needs specialized assistance (e.g., literature research, project planning, home automation)
- **Chatmodes**: When switching contexts or expertise areas (e.g., design work, testing, content creation)
- **Scripts**: When automation would save time (e.g., syncing content, managing media, Airtable integration)

### Example Interaction

**User**: "I need to search for references in my book collection about cyborg theory."

**Agent Response**:
1. Read `.github/prompts.md` to discover literature search tools
2. Suggest: "I can help with that. The workspace has a `literature` prompt for RAG-powered book searches. Would you like me to activate that mode to search your indexed collection?"

**User**: "I'm working on implementing a new UI component."

**Agent Response**:
1. Read `.github/chatmodes.md` to find design-related modes
2. Suggest: "For UI component work, the `Design engineer` chatmode is optimized for translating design intent into production-ready components using Material UI and React. Would you like to switch to that mode?"
