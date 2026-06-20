import { spawnSync } from 'node:child_process';

const scripts = [
  'scripts/generate-blog.mjs',
  'scripts/generate-agenda.mjs',
];

for (const script of scripts) {
  const result = spawnSync(process.execPath, [script], {
    stdio: 'inherit',
    shell: false,
  });

  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}
