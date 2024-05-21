import payloadConfig from '@payload-config';
import { getPayload as _getPayload } from 'payload';
import 'server-only';

export function getPayload() {
  return _getPayload({ config: payloadConfig });
}
