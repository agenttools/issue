# Issue Manager

A CLI tool that uses AI to automatically process client feedback and update Linear tickets.

## Overview

This tool streamlines the process of managing client issues by:
1. Taking unstructured feedback (from meetings, emails, Slack, etc.)
2. Using Claude AI to extract and categorize issues
3. Matching them to existing Linear tickets
4. Creating new tickets or updating existing ones

## Features

- 🤖 **AI-Powered Extraction**: Uses Claude to extract structured issues from unstructured text
- 🎯 **Smart Matching**: Automatically matches new issues to existing Linear tickets
- 📊 **Multi-Action Support**: Create new tickets, update existing ones, or add comments
- 👁️ **Preview Mode**: Dry-run option to preview changes before applying
- ✅ **Confirmation**: Review and approve all changes before they're applied
- 🎨 **Beautiful CLI**: Clean, colorful interface with progress indicators

## Installation

```bash
bun install
```

## Setup

### 1. Linear Integration

This tool requires Linear MCP to be configured. Once set up, update the placeholder functions in `src/lib/linear.ts`:

- `fetchTeams()` → Use `mcp__linear__list_teams`
- `fetchIssuesForTeam()` → Use `mcp__linear__list_issues`
- `createIssue()` → Use `mcp__linear__create_issue`
- `updateIssue()` → Use `mcp__linear__update_issue`
- `addCommentToIssue()` → Use `mcp__linear__create_comment`

### 2. Anthropic API Key

Set your Anthropic API key as an environment variable:

```bash
export ANTHROPIC_API_KEY="your-api-key-here"
```

Or add it to your `.env` file.

## Usage

### Basic Usage

```bash
bun start
```

Or:

```bash
bun run process
```

### Dry Run Mode

Preview what changes would be made without actually applying them:

```bash
bun run dry-run
```

Or:

```bash
bun run index.ts process --dry-run
```

## Workflow

1. **Paste Feedback**: Paste your client transcript or message
2. **Select Team**: Choose which Linear team/client this is for
3. **AI Analysis**: Claude extracts issues and matches them to existing tickets
4. **Review**: See proposed actions (create/update/comment)
5. **Confirm**: Approve or reject the changes
6. **Execute**: Changes are applied to Linear

## Example

```bash
$ bun start

🚀 Issue Manager - Processing client feedback...

? Paste your transcript/message:
The dashboard is loading really slowly for our users.
Also the export button is broken on mobile.

? Which client/team is this for?
❯ Client A - Acme Corp (ACME)
  Client B - TechStart (TECH)
  Client C - DataCo (DATA)

✔ Found 2 existing issues
✔ Extracted 2 issues from transcript
✔ Issue matching complete

✓ Analysis complete!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Team: Client A - Acme Corp

📋 Proposed Actions:

  1. [UPDATE] Dashboard loading slowly
     Users report the dashboard takes too long to load
     Type: bug | Priority: high
     → ACME-123
     This appears to be a duplicate of existing dashboard performance issue

  2. [UPDATE] Export button broken on mobile
     Export button is not working on mobile devices
     Type: bug | Priority: medium
     → ACME-124
     Matches existing issue about export button

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Summary:
  0 new tickets to create
  2 tickets to update
  0 comments to add

? Proceed with these changes? (Y/n)
```

## Project Structure

```
issue-manager/
├── index.ts                 # Main CLI entry point
├── src/
│   └── lib/
│       ├── claude.ts       # Claude AI integration
│       └── linear.ts       # Linear API integration
├── package.json
└── README.md
```

## Development

The tool is built with:
- **Bun**: Fast JavaScript runtime
- **Commander**: CLI framework
- **@inquirer/prompts**: Interactive prompts
- **Anthropic SDK**: Claude AI integration
- **Chalk**: Terminal styling
- **Ora**: Spinners and progress indicators

## TODO

- [ ] Configure Linear MCP server
- [ ] Set up proper authentication
- [ ] Add more granular error handling
- [ ] Add logging/history of processed feedbacks
- [ ] Support for bulk processing (multiple transcripts)
- [ ] Custom prompt templates

## License

Private
