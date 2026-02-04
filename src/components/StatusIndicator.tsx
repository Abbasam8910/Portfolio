'use client';

/**
 * StatusIndicator - Real-time status badge component
 * Shows system/project status with animated pulse
 */
interface StatusIndicatorProps {
    status: 'online' | 'building' | 'deployed' | 'experimental';
    label?: string;
}

export default function StatusIndicator({ status, label }: StatusIndicatorProps) {
    const statusConfig = {
        online: {
            color: 'bg-green-400',
            borderColor: 'border-green-500/30',
            bgColor: 'bg-green-500/10',
            textColor: 'text-green-300',
            defaultLabel: 'Online'
        },
        building: {
            color: 'bg-yellow-400',
            borderColor: 'border-yellow-500/30',
            bgColor: 'bg-yellow-500/10',
            textColor: 'text-yellow-300',
            defaultLabel: 'Building'
        },
        deployed: {
            color: 'bg-cyan-400',
            borderColor: 'border-cyan-500/30',
            bgColor: 'bg-cyan-500/10',
            textColor: 'text-cyan-300',
            defaultLabel: 'Deployed'
        },
        experimental: {
            color: 'bg-purple-400',
            borderColor: 'border-purple-500/30',
            bgColor: 'bg-purple-500/10',
            textColor: 'text-purple-300',
            defaultLabel: 'Experimental'
        }
    };

    const config = statusConfig[status];
    const displayLabel = label || config.defaultLabel;

    return (
        <div className={`inline-flex items-center gap-2 px-3 py-1 ${config.bgColor} border ${config.borderColor} rounded-full text-xs font-medium`}>
            <div className={`w-2 h-2 ${config.color} rounded-full animate-pulse`} />
            <span className={config.textColor}>{displayLabel}</span>
        </div>
    );
}
