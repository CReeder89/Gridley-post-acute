import { randomBytes, scryptSync } from 'node:crypto';

if (!process.stdin.isTTY || !process.stdin.setRawMode) {
  console.error('Run this script in an interactive terminal so the password can be entered without echoing.');
  process.exit(1);
}

process.stdout.write('New CNA admin password (hidden): ');
process.stdin.setRawMode(true);
process.stdin.resume();

let password = '';
const finish = () => {
  process.stdin.setRawMode(false);
  process.stdin.pause();
  process.stdout.write('\n');
  if (password.length < 14) {
    console.error('Use a password with at least 14 characters, then run the script again.');
    process.exit(1);
  }

  const salt = randomBytes(24);
  const hash = scryptSync(password, salt, 64);
  const sessionSecret = randomBytes(32).toString('base64url');
  password = '';
  console.log(`CNA_ADMIN_PASSWORD_HASH=scrypt:${salt.toString('base64url')}:${hash.toString('base64url')}`);
  console.log(`CNA_ADMIN_SESSION_SECRET=${sessionSecret}`);
};

process.stdin.on('data', (chunk) => {
  for (const char of chunk.toString('utf8')) {
    if (char === '\u0003') {
      process.stdin.setRawMode(false);
      process.exit(130);
    }
    if (char === '\r' || char === '\n') {
      finish();
      return;
    }
    if (char === '\u007f' || char === '\b') {
      password = password.slice(0, -1);
      continue;
    }
    if (char >= ' ') password += char;
  }
});
