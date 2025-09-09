interface StatsCardProps {
  value: string;
  label: string;
  change?: string;
}

const StatsCard = ({ value, label, change }: StatsCardProps) => {
  return (
    <div className="stats-card">
      <div className="text-2xl font-bold bg-gradient-sunset bg-clip-text text-transparent mb-1">
        {value}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
      {change && (
        <div className="text-xs text-earth-green font-medium mt-1">
          +{change}
        </div>
      )}
    </div>
  );
};

export default StatsCard;