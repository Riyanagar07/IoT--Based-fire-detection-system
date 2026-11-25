/**
 * Derive fire status from raw sensor values
 * Backend returns WARNING/NORMAL, but frontend shows 3-tier status:
 * - ALERT: flame detected (most severe)
 * - MODERATE: high gas levels
 * - NORMAL: everything safe
 */
export const deriveStatus = (mq2, flame) => {
  if (flame === 1) return 'ALERT';
  if (mq2 > 300) return 'MODERATE';
  return 'NORMAL';
};

export const STATUS_CONFIG = {
  NORMAL: {
    label: 'SAFE',
    message: 'All sensor readings are within normal range.',
    icon: '✅',
    color: '#27ae60',
    bgColor: '#eafaf1',
    borderColor: '#2ecc71'
  },
  MODERATE: {
    label: 'MODERATE RISK',
    message: 'Elevated gas levels detected. Monitor closely.',
    icon: '⚠️',
    color: '#e67e22',
    bgColor: '#fef5e7',
    borderColor: '#f39c12'
  },
  ALERT: {
    label: 'FIRE DETECTED',
    message: 'Critical! Flame or extreme gas detected. Take immediate action!',
    icon: '🔥',
    color: '#c0392b',
    bgColor: '#fdeaea',
    borderColor: '#e74c3c'
  }
};
