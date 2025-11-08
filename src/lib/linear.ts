/**
 * Linear MCP integration
 *
 * SETUP NOTE: Linear MCP server needs to be configured.
 * Once configured, replace the mock implementations below with actual MCP calls.
 * The MCP tools should be: mcp__linear__list_teams, mcp__linear__list_issues, etc.
 */

export interface Team {
  id: string;
  name: string;
  key: string;
}

/**
 * Fetch all teams from Linear
 *
 * TODO: Replace with actual MCP call once Linear MCP is configured
 * Example: const teams = await mcp__linear__list_teams();
 */
export async function fetchTeams(): Promise<Team[]> {
  throw new Error(
    'Linear MCP not configured. Please set up Linear MCP server and update this function to use mcp__linear__list_teams'
  );
}

export interface Issue {
  id: string;
  identifier: string; // e.g., "ACME-123"
  title: string;
  description: string | null;
  priority: number;
  state: string;
}

/**
 * Fetch issues for a specific team
 *
 * TODO: Replace with actual MCP call once Linear MCP is configured
 * Example: const issues = await mcp__linear__list_issues({ teamId });
 */
export async function fetchIssuesForTeam(teamId: string): Promise<Issue[]> {
  throw new Error(
    'Linear MCP not configured. Please set up Linear MCP server and update this function to use mcp__linear__list_issues'
  );
}

/**
 * Create a new issue in Linear
 *
 * TODO: Replace with actual MCP call once Linear MCP is configured
 * Example: const issue = await mcp__linear__create_issue({ teamId, title, description, priority });
 */
export async function createIssue(params: {
  teamId: string;
  title: string;
  description: string;
  priority: number;
}): Promise<Issue> {
  throw new Error(
    'Linear MCP not configured. Please set up Linear MCP server and update this function to use mcp__linear__create_issue'
  );
}

/**
 * Add a comment to an existing Linear issue
 *
 * TODO: Replace with actual MCP call once Linear MCP is configured
 * Example: await mcp__linear__create_comment({ issueId, body });
 */
export async function addCommentToIssue(issueId: string, comment: string): Promise<void> {
  throw new Error(
    'Linear MCP not configured. Please set up Linear MCP server and update this function to use mcp__linear__create_comment'
  );
}

/**
 * Update an existing Linear issue
 *
 * TODO: Replace with actual MCP call once Linear MCP is configured
 * Example: await mcp__linear__update_issue({ issueId, description, priority });
 */
export async function updateIssue(
  issueId: string,
  updates: {
    description?: string;
    priority?: number;
  }
): Promise<void> {
  throw new Error(
    'Linear MCP not configured. Please set up Linear MCP server and update this function to use mcp__linear__update_issue'
  );
}
