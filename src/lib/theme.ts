/**
 * Professional theme for CLI
 * No emojis - using professional Unicode symbols
 */

import chalk from 'chalk';

// Professional symbols (work in all terminals)
export const symbols = {
  // Status
  success: '✓',
  error: '✗',
  warning: '⚠',
  info: 'ℹ',

  // Navigation
  arrow: '→',
  arrowBack: '←',

  // Bullets
  bullet: '•',
  bulletEmpty: '○',

  // Actions
  create: '●',
  update: '↻',
  comment: '💬',

  // Progress
  loading: '⌛',

  // Box drawing - light
  boxTopLeft: '┌',
  boxTopRight: '┐',
  boxBottomLeft: '└',
  boxBottomRight: '┘',
  boxVertical: '│',
  boxHorizontal: '─',
  boxCross: '┼',
  boxTeeRight: '├',
  boxTeeLeft: '┤',
  boxTeeDown: '┬',
  boxTeeUp: '┴',

  // Box drawing - heavy
  boxTopLeftHeavy: '┏',
  boxTopRightHeavy: '┓',
  boxBottomLeftHeavy: '┗',
  boxBottomRightHeavy: '┛',
  boxVerticalHeavy: '┃',
  boxHorizontalHeavy: '━',

  // Box drawing - double
  boxTopLeftDouble: '╔',
  boxTopRightDouble: '╗',
  boxBottomLeftDouble: '╚',
  boxBottomRightDouble: '╝',
  boxVerticalDouble: '║',
  boxHorizontalDouble: '═',

  // Tree structure
  treeEdge: '├─',
  treeCorner: '└─',
  treeLine: '│',
  treeSpace: '  ',
} as const;

// Semantic color theme
export const theme = {
  // Status colors
  success: chalk.green,
  error: chalk.red,
  warning: chalk.yellow,
  info: chalk.cyan,
  muted: chalk.dim,
  accent: chalk.magenta,

  // Action colors
  action: {
    create: chalk.green,
    update: chalk.yellow,
    comment: chalk.blue,
  },

  // UI elements
  heading: chalk.bold.white,
  subheading: chalk.bold.cyan,
  label: chalk.bold,
  value: chalk.white,
  border: chalk.dim,

  // Code/technical
  code: chalk.cyan,
  identifier: chalk.magenta,
} as const;

/**
 * Draw a box around content
 */
export function box(content: string, options: { title?: string; style?: 'light' | 'heavy' | 'double' } = {}): string {
  const style = options.style || 'light';
  const lines = content.split('\n');
  const maxWidth = Math.max(...lines.map(l => l.length), options.title?.length || 0);
  const width = maxWidth + 2; // padding

  const chars = style === 'heavy' ? {
    tl: symbols.boxTopLeftHeavy,
    tr: symbols.boxTopRightHeavy,
    bl: symbols.boxBottomLeftHeavy,
    br: symbols.boxBottomRightHeavy,
    h: symbols.boxHorizontalHeavy,
    v: symbols.boxVerticalHeavy,
  } : style === 'double' ? {
    tl: symbols.boxTopLeftDouble,
    tr: symbols.boxTopRightDouble,
    bl: symbols.boxBottomLeftDouble,
    br: symbols.boxBottomRightDouble,
    h: symbols.boxHorizontalDouble,
    v: symbols.boxVerticalDouble,
  } : {
    tl: symbols.boxTopLeft,
    tr: symbols.boxTopRight,
    bl: symbols.boxBottomLeft,
    br: symbols.boxBottomRight,
    h: symbols.boxHorizontal,
    v: symbols.boxVertical,
  };

  let result = '';

  // Top border
  if (options.title) {
    const titlePadding = Math.max(0, width - options.title.length - 4);
    result += theme.border(`${chars.tl}${chars.h} ${options.title} ${chars.h.repeat(titlePadding)}${chars.tr}\n`);
  } else {
    result += theme.border(`${chars.tl}${chars.h.repeat(width)}${chars.tr}\n`);
  }

  // Content
  lines.forEach(line => {
    const padding = ' '.repeat(Math.max(0, maxWidth - line.length + 1));
    result += theme.border(chars.v) + ' ' + line + padding + theme.border(chars.v) + '\n';
  });

  // Bottom border
  result += theme.border(`${chars.bl}${chars.h.repeat(width)}${chars.br}`);

  return result;
}

/**
 * Draw a separator line
 */
export function separator(width: number = 70, char: string = symbols.boxHorizontal): string {
  return theme.border(char.repeat(width));
}

/**
 * Create a tree structure display
 */
export function tree(items: Array<{ label: string; value?: string; isLast?: boolean }>): string {
  return items.map((item, index) => {
    const isLast = item.isLast ?? (index === items.length - 1);
    const prefix = isLast ? symbols.treeCorner : symbols.treeEdge;
    const line = `${prefix} ${item.label}`;
    return item.value ? `${line}: ${item.value}` : line;
  }).join('\n');
}

/**
 * Format an action badge
 */
export function actionBadge(action: 'create' | 'update' | 'comment'): string {
  const symbol = action === 'create' ? symbols.create : action === 'update' ? symbols.update : symbols.comment;
  const color = theme.action[action];
  const text = action.toUpperCase();
  return color(`${symbol} ${text}`);
}
