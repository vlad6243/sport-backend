import crypto from 'crypto';

export interface TelegramInitDataUser {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  language_code?: string;
}

export interface TelegramInitDataPayload {
  user: TelegramInitDataUser;
  authDate: number;
}

export function validateTelegramInitData(
  initData: string,
  botToken: string,
  maxAgeSeconds: number,
): TelegramInitDataPayload {
  if (!initData) {
    throw new Error('Missing initData');
  }

  const params = new URLSearchParams(initData);
  const hash = params.get('hash');
  if (!hash) {
    throw new Error('Missing initData hash');
  }

  const dataCheckString = Array.from(params.entries())
    .filter(([key]) => key !== 'hash')
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');

  const secretKey = crypto
    .createHmac('sha256', 'WebAppData')
    .update(botToken)
    .digest();
  const calculatedHash = crypto
    .createHmac('sha256', secretKey)
    .update(dataCheckString)
    .digest('hex');

  const providedBuffer = Buffer.from(hash, 'hex');
  const calculatedBuffer = Buffer.from(calculatedHash, 'hex');
  if (
    providedBuffer.length !== calculatedBuffer.length ||
    !crypto.timingSafeEqual(providedBuffer, calculatedBuffer)
  ) {
    throw new Error('Invalid initData hash');
  }

  const authDateRaw = params.get('auth_date');
  const authDate = authDateRaw ? Number(authDateRaw) : 0;
  if (!authDate || Number.isNaN(authDate)) {
    throw new Error('Missing auth_date');
  }

  if (maxAgeSeconds > 0) {
    const now = Math.floor(Date.now() / 1000);
    if (now - authDate > maxAgeSeconds) {
      throw new Error('initData expired');
    }
  }

  const userRaw = params.get('user');
  if (!userRaw) {
    throw new Error('Missing user');
  }

  let user: TelegramInitDataUser;
  try {
    user = JSON.parse(userRaw) as TelegramInitDataUser;
  } catch {
    throw new Error('Invalid user payload');
  }

  if (!user?.id) {
    throw new Error('Invalid user payload');
  }

  return { user, authDate };
}
